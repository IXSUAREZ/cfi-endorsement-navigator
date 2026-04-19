from __future__ import annotations

from pathlib import Path
import unittest

from scripts.ac_update.check_new_ac import (
    build_probe_letters,
    parse_candidate_links,
    parse_document_information,
)


FIXTURES = Path(__file__).resolve().parent / "fixtures"


class CheckNewAcTests(unittest.TestCase):
    def test_parse_candidate_links(self) -> None:
        html = (FIXTURES / "search_results.html").read_text(encoding="utf-8")

        candidates = parse_candidate_links(html)

        self.assertEqual([candidate["versionLetter"] for candidate in candidates], ["J", "K"])
        self.assertTrue(candidates[-1]["documentPageUrl"].endswith("/documentID/1044476"))

    def test_parse_document_information(self) -> None:
        html = (FIXTURES / "document_k.html").read_text(encoding="utf-8")

        details = parse_document_information(
            html,
            "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1044476",
        )

        self.assertEqual(details["acNumber"], "61-65K")
        self.assertEqual(details["versionLetter"], "K")
        self.assertEqual(details["documentStatus"], "Active")
        self.assertEqual(details["dateIssued"], "2025-11-14")
        self.assertEqual(details["faaDocumentId"], "1044476")
        self.assertTrue(details["sourceUrl"].endswith("/AC_61-65K.pdf"))

    def test_build_probe_letters(self) -> None:
        self.assertEqual(build_probe_letters("K"), ["L", "M", "N"])


if __name__ == "__main__":
    unittest.main()
