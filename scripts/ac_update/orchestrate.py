from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path

from scripts.ac_update.build_diff import build_diff_outputs
from scripts.ac_update.check_new_ac import detect_new_ac
from scripts.ac_update.common import (
    AC_UPDATES_DIR,
    AC_VERSIONS_DIR,
    CURRENT_POINTER_PATH,
    DATA_FILE,
    README_FILE,
    build_pdf_url,
    ensure_dir,
    load_app_meta,
    load_current_pointer,
    parse_document_id,
    parse_version_letter,
    utc_now_iso,
    write_json,
    write_text,
)
from scripts.ac_update.download_ac import archive_ac_version, ensure_current_snapshot
from scripts.ac_update.generate_prompt import generate_prompt_file


def build_bootstrap_readmes() -> None:
    versions_readme = "\n".join(
        [
            "# AC Version Archive",
            "",
            "Each folder in this directory represents one archived AC 61-65 revision used by the project.",
            "",
            "Contents per version:",
            "",
            "- `AC_61-65<LETTER>.pdf`: archived FAA PDF kept in git",
            "- `AC_61-65<LETTER>.txt`: text extracted from the archived PDF",
            "- `metadata.json`: source metadata and archive checksum",
            "- `endorsements-data.snapshot.js`: snapshot of `js/endorsements-data.js` at the adopted version",
            "",
            "`current.json` records which AC letter is currently adopted by the app.",
            "",
        ]
    )
    updates_readme = "\n".join(
        [
            "# AC Update Workspaces",
            "",
            "This directory holds in-flight AC update workspaces such as `K-to-L/`.",
            "",
            "Each workspace contains:",
            "",
            "- `context.json`: machine-readable detection and archive context",
            "- `status.md`: workflow status (`pending`, `in-progress`, `applied`, `tagged`)",
            "- `diff.txt`: raw unified diff of the full archived AC text",
            "- `per-endorsement-diff.md`: normalized Appendix A diff by endorsement id",
            "- `changelog.md`: summary counts and metadata changes",
            "- `update-prompt.md`: ready-to-paste prompt for a coding agent",
            "",
        ]
    )
    write_text(AC_VERSIONS_DIR / "README.md", versions_readme + "\n")
    write_text(AC_UPDATES_DIR / "README.md", updates_readme + "\n")


def bootstrap_current_baseline() -> Path:
    app_meta = load_app_meta()
    current_version = parse_version_letter(app_meta["acVersion"])
    version_info = {
        "acNumber": app_meta["acVersion"].replace("AC ", ""),
        "versionLetter": current_version,
        "dateIssued": app_meta.get("dateIssued", ""),
        "sourceUrl": app_meta.get("sourceUrl", "") or build_pdf_url(current_version),
        "documentPageUrl": app_meta.get("documentPageUrl", ""),
        "faaDocumentId": parse_document_id(app_meta.get("documentPageUrl")),
    }

    ensure_dir(AC_VERSIONS_DIR)
    ensure_dir(AC_UPDATES_DIR)
    build_bootstrap_readmes()

    archived = archive_ac_version(version_info, include_snapshot=True)
    write_json(
        CURRENT_POINTER_PATH,
        {
            "currentVersion": current_version,
            "adoptedAt": app_meta.get("dateIssued", ""),
            "adoptedTag": f"ac-61-65{current_version}",
        },
    )

    return Path(archived["versionDir"])


def build_update_context(detection: dict[str, str]) -> Path:
    pointer = load_current_pointer()
    from_version = pointer["currentVersion"]
    update_dir = ensure_dir(AC_UPDATES_DIR / f"{from_version}-to-{detection['versionLetter']}")
    ensure_current_snapshot(from_version)

    from_metadata_path = AC_VERSIONS_DIR / from_version / "metadata.json"
    if not from_metadata_path.exists():
        raise RuntimeError(
            f"Missing baseline metadata at {from_metadata_path}. Run bootstrap first."
        )

    from_metadata = json.loads(from_metadata_path.read_text(encoding="utf-8"))
    context = {
        "generatedAt": utc_now_iso(),
        "updateDir": str(update_dir),
        "from": {
            **from_metadata,
            "archiveDir": str(AC_VERSIONS_DIR / from_version),
            "textPath": str(AC_VERSIONS_DIR / from_version / f"AC_61-65{from_version}.txt"),
            "metadataPath": str(from_metadata_path),
            "snapshotPath": str(AC_VERSIONS_DIR / from_version / "endorsements-data.snapshot.js"),
        },
        "to": detection.copy(),
    }
    write_json(update_dir / "context.json", context)
    write_text(
        update_dir / "status.md",
        "\n".join(
            [
                "# Status",
                "",
                "pending",
                "",
                "Allowed values: `pending`, `in-progress`, `applied`, `tagged`.",
                "",
            ]
        ),
    )
    return update_dir / "context.json"


def confirm_download(detection: dict[str, str], assume_yes: bool = False) -> bool:
    if assume_yes:
        return True

    version = detection["acNumber"]
    date_issued = detection.get("dateIssued") or "unknown issue date"
    prompt = f"Detected {version} ({date_issued}). Download and build the update workspace? [y/N]: "
    return input(prompt).strip().lower() in {"y", "yes"}


def run_update_check(*, assume_yes: bool = False) -> Path | None:
    if not CURRENT_POINTER_PATH.exists():
        raise RuntimeError(
            f"Missing {CURRENT_POINTER_PATH}. Run `python -m scripts.ac_update.orchestrate bootstrap` first."
        )

    detection = detect_new_ac()
    if detection["status"] == "current":
        print(json.dumps(detection, indent=2, sort_keys=True))
        return None

    if not confirm_download(detection, assume_yes=assume_yes):
        print("Update cancelled.")
        return None

    context_path = build_update_context(detection)

    from scripts.ac_update.download_ac import archive_from_context

    archive_from_context(context_path)
    build_diff_outputs(context_path)
    prompt_path = generate_prompt_file(context_path)
    print(str(prompt_path.resolve()))
    return prompt_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Bootstrap or run the AC 61-65 update workflow.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("bootstrap", help="Create the baseline archive for the currently adopted AC.")

    run_parser = subparsers.add_parser("run", help="Check for a newer AC and generate an update workspace.")
    run_parser.add_argument("--yes", action="store_true", help="Skip the download confirmation prompt.")

    args = parser.parse_args()

    if args.command == "bootstrap":
        version_dir = bootstrap_current_baseline()
        print(str(version_dir.resolve()))
        return 0

    if args.command == "run":
        run_update_check(assume_yes=args.yes)
        return 0

    raise RuntimeError(f"Unsupported command: {args.command}")


if __name__ == "__main__":
    raise SystemExit(main())
