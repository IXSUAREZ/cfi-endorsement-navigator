from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

from scripts.ac_update.common import (
    AC_VERSIONS_DIR,
    DATA_FILE,
    copy_if_missing,
    download_binary,
    ensure_dir,
    extract_text_from_pdf,
    get_session,
    load_current_pointer,
    parse_document_id,
    sha256_file,
    utc_now_iso,
    write_json,
    write_text,
)


def ensure_current_snapshot(current_version: str) -> Path:
    snapshot_path = AC_VERSIONS_DIR / current_version / "endorsements-data.snapshot.js"
    return copy_if_missing(DATA_FILE, snapshot_path)


def archive_ac_version(
    version_info: dict[str, Any],
    *,
    include_snapshot: bool = False,
    session=None,
) -> dict[str, Any]:
    request_session = get_session(session)
    version_letter = version_info["versionLetter"]
    version_dir = ensure_dir(AC_VERSIONS_DIR / version_letter)
    pdf_path = version_dir / f"AC_61-65{version_letter}.pdf"
    text_path = version_dir / f"AC_61-65{version_letter}.txt"
    metadata_path = version_dir / "metadata.json"

    if not pdf_path.exists():
        source_url = version_info.get("sourceUrl")
        if not source_url:
            raise RuntimeError(f"No sourceUrl available for AC 61-65{version_letter}.")
        download_binary(source_url, pdf_path, session=request_session)

    extracted_text = extract_text_from_pdf(pdf_path)
    write_text(text_path, extracted_text)

    metadata = {
        "acNumber": version_info.get("acNumber", f"61-65{version_letter}"),
        "versionLetter": version_letter,
        "dateIssued": version_info.get("dateIssued", ""),
        "sourceUrl": version_info.get("sourceUrl", ""),
        "documentPageUrl": version_info.get("documentPageUrl", ""),
        "faaDocumentId": version_info.get("faaDocumentId") or parse_document_id(version_info.get("documentPageUrl")),
        "downloadedAt": utc_now_iso(),
        "sha256": sha256_file(pdf_path),
    }
    write_json(metadata_path, metadata)

    if include_snapshot:
        ensure_current_snapshot(version_letter)

    return {
        "versionDir": str(version_dir),
        "pdfPath": str(pdf_path),
        "textPath": str(text_path),
        "metadataPath": str(metadata_path),
        "metadata": metadata,
    }


def archive_from_context(context_path: Path) -> dict[str, Any]:
    context = json.loads(context_path.read_text(encoding="utf-8"))
    current_pointer = load_current_pointer()
    ensure_current_snapshot(current_pointer["currentVersion"])

    archived = archive_ac_version(context["to"], include_snapshot=False)
    context["to"].update(archived["metadata"])
    context["to"]["archiveDir"] = archived["versionDir"]
    context["to"]["pdfPath"] = archived["pdfPath"]
    context["to"]["textPath"] = archived["textPath"]
    context["to"]["metadataPath"] = archived["metadataPath"]
    write_json(context_path, context)
    return context


def main() -> int:
    parser = argparse.ArgumentParser(description="Download and archive an AC 61-65 revision.")
    parser.add_argument("--context", required=True, help="Path to ac-updates/.../context.json.")
    args = parser.parse_args()

    context = archive_from_context(Path(args.context))
    print(json.dumps(context["to"], indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
