from __future__ import annotations

import json
from pathlib import Path
import tempfile
import unittest

from scripts.ac_update.build_diff import build_diff_outputs, extract_endorsement_blocks


FIXTURES = Path(__file__).resolve().parent / "fixtures"


class BuildDiffTests(unittest.TestCase):
    def test_extract_endorsement_blocks_normalizes_wrapped_lines(self) -> None:
        before_text = (FIXTURES / "appendix_before.txt").read_text(encoding="utf-8")

        blocks = extract_endorsement_blocks(before_text)

        self.assertEqual(
            blocks["A.1"],
            (
                "A.1 Prerequisites for practical test: 14 CFR § 61.39(a)(6)(i) and (ii).\n"
                "I certify that [Name] has received and logged training time within "
                "2 calendar months preceding the month of application."
            ),
        )
        self.assertIn("A.3", blocks)

    def test_build_diff_outputs_writes_summary_and_artifacts(self) -> None:
        before_text = (FIXTURES / "appendix_before.txt").read_text(encoding="utf-8")
        after_text = (FIXTURES / "appendix_after.txt").read_text(encoding="utf-8")

        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            update_dir = temp_path / "K-to-L"
            update_dir.mkdir()
            before_path = temp_path / "AC_61-65K.txt"
            after_path = temp_path / "AC_61-65L.txt"
            before_path.write_text(before_text, encoding="utf-8")
            after_path.write_text(after_text, encoding="utf-8")

            context_path = update_dir / "context.json"
            context_path.write_text(
                json.dumps(
                    {
                        "updateDir": str(update_dir),
                        "from": {
                            "versionLetter": "K",
                            "acNumber": "61-65K",
                            "dateIssued": "2025-11-14",
                            "sourceUrl": "https://example.com/AC_61-65K.pdf",
                            "documentPageUrl": "https://example.com/k",
                            "textPath": str(before_path),
                        },
                        "to": {
                            "versionLetter": "L",
                            "acNumber": "61-65L",
                            "dateIssued": "2026-11-14",
                            "sourceUrl": "https://example.com/AC_61-65L.pdf",
                            "documentPageUrl": "https://example.com/l",
                            "textPath": str(after_path),
                        },
                    },
                    indent=2,
                ),
                encoding="utf-8",
            )

            summary = build_diff_outputs(context_path)

            self.assertEqual(summary["counts"]["modified"], 1)
            self.assertEqual(summary["counts"]["added"], 1)
            self.assertEqual(summary["counts"]["removed"], 1)
            self.assertTrue((update_dir / "diff.txt").exists())
            self.assertTrue((update_dir / "per-endorsement-diff.md").exists())
            self.assertTrue((update_dir / "changelog.md").exists())
            self.assertIn("A.1", (update_dir / "per-endorsement-diff.md").read_text(encoding="utf-8"))
            self.assertIn("A.4", (update_dir / "changelog.md").read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
