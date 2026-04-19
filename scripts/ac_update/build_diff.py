from __future__ import annotations

import argparse
import difflib
import json
import re
from pathlib import Path
from typing import Any

from scripts.ac_update.common import write_json, write_text


APPENDIX_START_MARKERS = (
    "The following examples are recommended sample endorsements",
    "PREREQUISITES FOR THE PRACTICAL TEST ENDORSEMENT",
)
APPENDIX_END_MARKERS = (
    "Appendix B.",
    "APPENDIX B.",
)
PAGE_HEADER_RE = re.compile(r"^\d{1,2}/\d{1,2}/\d{2}\s+AC 61-65[A-Z]$")
APPENDIX_PAGE_RE = re.compile(r"^A-\d+$")
HEADING_RE = re.compile(r"^(A\.\d+)\s+")
ALL_CAPS_SECTION_RE = re.compile(r"^[A-Z][A-Z0-9 ,./()&\-§]+$")


def extract_appendix_section(text: str) -> str:
    working = text.replace("\r\n", "\n")
    start_index = -1
    for marker in APPENDIX_START_MARKERS:
        start_index = working.find(marker)
        if start_index != -1:
            break

    if start_index == -1:
        start_match = re.search(r"(^|\n)A\.1\s+", working)
        if start_match:
            start_index = start_match.start()
        else:
            raise RuntimeError("Could not find the start of Appendix A endorsement text.")

    appendix_text = working[start_index:]
    for marker in APPENDIX_END_MARKERS:
        end_index = appendix_text.find(marker)
        if end_index != -1:
            appendix_text = appendix_text[:end_index]
            break

    return appendix_text


def normalize_appendix_lines(text: str) -> list[str]:
    normalized: list[str] = []
    for raw_line in text.replace("\r\n", "\n").splitlines():
        line = " ".join(raw_line.split()).strip()
        if not line:
            continue
        if PAGE_HEADER_RE.match(line):
            continue
        if line in {"Appendix A", "APPENDIX A", "SAMPLE ENDORSEMENTS", "CONTENTS"}:
            continue
        if APPENDIX_PAGE_RE.match(line):
            continue
        if ALL_CAPS_SECTION_RE.match(line) and not HEADING_RE.match(line):
            continue
        normalized.append(line)
    return normalized


def normalize_block(lines: list[str]) -> str:
    if not lines:
        return ""

    header = lines[0].strip()
    body = " ".join(part.strip() for part in lines[1:] if part.strip())
    return "\n".join(part for part in [header, body] if part).strip()


def extract_endorsement_blocks(text: str) -> dict[str, str]:
    appendix_text = extract_appendix_section(text)
    lines = normalize_appendix_lines(appendix_text)
    blocks: dict[str, str] = {}
    current_id = None
    current_lines: list[str] = []

    for line in lines:
        heading_match = HEADING_RE.match(line)
        if heading_match:
            if current_id is not None:
                blocks[current_id] = normalize_block(current_lines)
            current_id = heading_match.group(1)
            current_lines = [line]
            continue

        if current_id is not None:
            current_lines.append(line)

    if current_id is not None:
        blocks[current_id] = normalize_block(current_lines)

    if not blocks:
        raise RuntimeError("No endorsement blocks were found in the appendix text.")

    return blocks


def unified_diff_text(
    before: str,
    after: str,
    *,
    before_name: str,
    after_name: str,
) -> str:
    diff_lines = difflib.unified_diff(
        before.splitlines(),
        after.splitlines(),
        fromfile=before_name,
        tofile=after_name,
        lineterm="",
    )
    return "\n".join(diff_lines).strip() + "\n"


def build_diff_outputs(context_path: Path) -> dict[str, Any]:
    context = json.loads(context_path.read_text(encoding="utf-8"))
    update_dir = Path(context["updateDir"])
    before_text = Path(context["from"]["textPath"]).read_text(encoding="utf-8")
    after_text = Path(context["to"]["textPath"]).read_text(encoding="utf-8")

    full_diff = unified_diff_text(
        before_text,
        after_text,
        before_name=f"AC_61-65{context['from']['versionLetter']}.txt",
        after_name=f"AC_61-65{context['to']['versionLetter']}.txt",
    )
    write_text(update_dir / "diff.txt", full_diff)

    before_blocks = extract_endorsement_blocks(before_text)
    after_blocks = extract_endorsement_blocks(after_text)
    all_ids = sorted(set(before_blocks) | set(after_blocks), key=lambda value: int(value.split(".")[1]))

    added = [item_id for item_id in all_ids if item_id not in before_blocks]
    removed = [item_id for item_id in all_ids if item_id not in after_blocks]
    modified = [
        item_id
        for item_id in all_ids
        if item_id in before_blocks and item_id in after_blocks and before_blocks[item_id] != after_blocks[item_id]
    ]
    unchanged = [
        item_id
        for item_id in all_ids
        if item_id in before_blocks and item_id in after_blocks and before_blocks[item_id] == after_blocks[item_id]
    ]

    metadata_changes = []
    for field in ("dateIssued", "sourceUrl", "documentPageUrl"):
        if context["from"].get(field, "") != context["to"].get(field, ""):
            metadata_changes.append(
                {
                    "field": field,
                    "from": context["from"].get(field, ""),
                    "to": context["to"].get(field, ""),
                }
            )

    per_diff_lines = [
        f"# Per-Endorsement Diff: {context['from']['versionLetter']} to {context['to']['versionLetter']}",
        "",
        f"- Modified: {len(modified)}",
        f"- Added: {len(added)}",
        f"- Removed: {len(removed)}",
        "",
    ]
    for item_id in modified + added + removed:
        if item_id in modified:
            status = "Modified"
            before_block = before_blocks[item_id]
            after_block = after_blocks[item_id]
        elif item_id in added:
            status = "Added"
            before_block = ""
            after_block = after_blocks[item_id]
        else:
            status = "Removed"
            before_block = before_blocks[item_id]
            after_block = ""

        per_diff_lines.extend(
            [
                f"## {item_id} — {status}",
                "",
                "```diff",
                unified_diff_text(
                    before_block,
                    after_block,
                    before_name=f"{item_id} ({context['from']['versionLetter']})",
                    after_name=f"{item_id} ({context['to']['versionLetter']})",
                ).rstrip(),
                "```",
                "",
            ]
        )

    if not (modified or added or removed):
        per_diff_lines.extend(
            [
                "## No Endorsement Changes Detected",
                "",
                "The normalized Appendix A endorsement blocks matched exactly.",
                "",
            ]
        )

    write_text(update_dir / "per-endorsement-diff.md", "\n".join(per_diff_lines))

    changelog_lines = [
        f"# Change Summary: {context['from']['versionLetter']} to {context['to']['versionLetter']}",
        "",
        f"- Unchanged endorsements: {len(unchanged)}",
        f"- Modified endorsements: {len(modified)}",
        f"- Added endorsements: {len(added)}",
        f"- Removed endorsements: {len(removed)}",
        "",
        "## Changed IDs",
        "",
        f"- Modified: {', '.join(modified) if modified else 'None'}",
        f"- Added: {', '.join(added) if added else 'None'}",
        f"- Removed: {', '.join(removed) if removed else 'None'}",
        "",
        "## Metadata Changes",
        "",
    ]
    if metadata_changes:
        for change in metadata_changes:
            changelog_lines.append(
                f"- `{change['field']}`: `{change['from']}` -> `{change['to']}`"
            )
    else:
        changelog_lines.append("- No APP_META-level source metadata changes detected.")
    changelog_lines.append("")

    write_text(update_dir / "changelog.md", "\n".join(changelog_lines))

    summary = {
        "counts": {
            "unchanged": len(unchanged),
            "modified": len(modified),
            "added": len(added),
            "removed": len(removed),
        },
        "changedIds": {
            "modified": modified,
            "added": added,
            "removed": removed,
        },
        "metadataChanges": metadata_changes,
    }
    context["diffSummary"] = summary
    write_json(context_path, context)
    return summary


def main() -> int:
    parser = argparse.ArgumentParser(description="Build diff artifacts for an AC update workspace.")
    parser.add_argument("--context", required=True, help="Path to ac-updates/.../context.json.")
    args = parser.parse_args()

    summary = build_diff_outputs(Path(args.context))
    print(json.dumps(summary, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
