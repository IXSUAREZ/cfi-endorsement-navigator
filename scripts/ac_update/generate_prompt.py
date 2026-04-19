from __future__ import annotations

import argparse
import json
from pathlib import Path

from scripts.ac_update.common import CARD_EXPLANATION_SOURCE, DATA_FILE, README_FILE, SYNC_SCRIPT, write_text


def build_prompt(context_path: Path) -> str:
    context = json.loads(context_path.read_text(encoding="utf-8"))
    update_dir = Path(context["updateDir"])
    changelog = (update_dir / "changelog.md").read_text(encoding="utf-8").strip()
    per_diff = (update_dir / "per-endorsement-diff.md").read_text(encoding="utf-8").strip()
    counts = context.get("diffSummary", {}).get("counts", {})

    from_version = context["from"]["versionLetter"]
    to_version = context["to"]["versionLetter"]
    update_label = f"{from_version} to {to_version}"

    return "\n".join(
        [
            f"# AC 61-65 Update Prompt ({update_label})",
            "",
            "## Project Brief",
            "",
            "- This repo is a static endorsement reference app.",
            f"- Runtime source of truth: `{DATA_FILE.relative_to(DATA_FILE.parent.parent.parent)}`",
            f"- README: `{README_FILE.name}`",
            f"- Condensed card explanation source: `{CARD_EXPLANATION_SOURCE.name}`",
            f"- Sync script: `{SYNC_SCRIPT.relative_to(SYNC_SCRIPT.parent.parent.parent)}`",
            "- `APP_META` is the single AC-version authority for user-visible AC metadata.",
            "- `item.acRef` is optional when it matches the default `${APP_META.acVersion}, ${item.id}`.",
            "",
            "## Detected Change",
            "",
            f"- Current adopted version: `{context['from']['acNumber']}`",
            f"- Detected version: `{context['to']['acNumber']}`",
            f"- Date issued: `{context['to'].get('dateIssued', '') or 'Unknown'}`",
            f"- Source PDF: `{context['to'].get('sourceUrl', '') or 'Unknown'}`",
            f"- FAA document page: `{context['to'].get('documentPageUrl', '') or 'Unknown'}`",
            "",
            "## Required Tasks",
            "",
            f"1. Update `window.APP_META` in `{DATA_FILE.relative_to(DATA_FILE.parent.parent.parent)}`.",
            f"2. Review the `{counts.get('modified', 0)}` modified endorsement entries and update `verbatimText`, `sourcePage`, `cfr`, and any other fields that actually changed.",
            f"3. Add any new endorsements (`{', '.join(context['diffSummary']['changedIds']['added']) if context.get('diffSummary', {}).get('changedIds', {}).get('added') else 'none'}`) in sorted order with the existing schema.",
            f"4. Remove any deleted endorsements (`{', '.join(context['diffSummary']['changedIds']['removed']) if context.get('diffSummary', {}).get('changedIds', {}).get('removed') else 'none'}`).",
            f"5. If condensed card explanations need wording changes, edit `{CARD_EXPLANATION_SOURCE.name}` and run `node {SYNC_SCRIPT.relative_to(SYNC_SCRIPT.parent.parent.parent)}`.",
            f"6. Update `{README_FILE.name}` so the Current AC / update workflow copy stays accurate.",
            f"7. Set `{(update_dir / 'status.md').relative_to(update_dir.parent.parent)}` to `in-progress` while working, `applied` after the content changes are done, and `tagged` after commit + tag + push are complete.",
            "8. Verify the site manually after the content changes, then commit, create the adoption tag, and push the tag.",
            "",
            "## Validation Checklist",
            "",
            "- Load the site and verify the metadata footer shows the new AC.",
            "- Check search, browse navigation, and card expansion.",
            "- Confirm the endorsement count and changed endorsements render correctly.",
            "- Re-run the sync script if condensed-card explanations were edited.",
            "",
            "## Changelog",
            "",
            changelog,
            "",
            "## Per-Endorsement Diff",
            "",
            per_diff,
            "",
        ]
    )


def generate_prompt_file(context_path: Path) -> Path:
    context = json.loads(context_path.read_text(encoding="utf-8"))
    update_dir = Path(context["updateDir"])
    prompt_path = update_dir / "update-prompt.md"
    write_text(prompt_path, build_prompt(context_path) + "\n")
    return prompt_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a ready-to-paste update prompt.")
    parser.add_argument("--context", required=True, help="Path to ac-updates/.../context.json.")
    args = parser.parse_args()

    prompt_path = generate_prompt_file(Path(args.context))
    print(str(prompt_path.resolve()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
