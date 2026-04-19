from __future__ import annotations

import argparse
import json
import re
from typing import Any
from urllib.parse import urljoin

from bs4 import BeautifulSoup

from scripts.ac_update.common import (
    FAA_SEARCH_URL,
    build_pdf_url,
    get_session,
    load_current_pointer,
    parse_document_id,
    parse_version_letter,
    version_sort_key,
)


FAA_BASE_URL = "https://www.faa.gov"


def parse_candidate_links(html: str) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    seen: dict[str, dict[str, str]] = {}

    for row in soup.find_all("tr"):
        cells = row.find_all("td")
        if len(cells) < 2:
            continue

        number_text = " ".join(cells[0].get_text(" ", strip=True).split())
        match = re.fullmatch(r"61-65([A-Z])", number_text)
        if not match:
            continue

        link = cells[1].find("a", href=True)
        if link is None:
            continue

        version_letter = match.group(1)
        document_page_url = urljoin(FAA_BASE_URL, link["href"])
        seen[version_letter] = {
            "acNumber": f"61-65{version_letter}",
            "versionLetter": version_letter,
            "documentPageUrl": document_page_url,
        }

    for anchor in soup.find_all("a", href=True):
        text = " ".join(anchor.get_text(" ", strip=True).split())
        match = re.fullmatch(r"61-65([A-Z])", text)
        if not match:
            continue

        version_letter = match.group(1)
        document_page_url = urljoin(FAA_BASE_URL, anchor["href"])
        seen[version_letter] = {
            "acNumber": f"61-65{version_letter}",
            "versionLetter": version_letter,
            "documentPageUrl": document_page_url,
        }

    return sorted(seen.values(), key=lambda item: version_sort_key(item["versionLetter"]))


def parse_document_information(html: str, document_page_url: str) -> dict[str, Any]:
    soup = BeautifulSoup(html, "html.parser")
    lines = [
        " ".join(line.split())
        for line in soup.get_text("\n").splitlines()
        if line.strip()
    ]

    if "Document Information" in lines:
        lines = lines[lines.index("Document Information") + 1 :]

    info_lines: list[str] = []
    for line in lines:
        if line in {"Description", "Content"}:
            break
        info_lines.append(line)

    values: dict[str, str] = {}
    for label in ("Number", "Title", "Status", "Date issued"):
        if label in info_lines:
            label_index = info_lines.index(label)
            if label_index + 1 < len(info_lines):
                values[label] = info_lines[label_index + 1]

    source_url = ""
    number = values.get("Number", "")
    pdf_pattern = re.compile(rf"AC\s+{re.escape(number)}\b")
    for anchor in soup.find_all("a", href=True):
        anchor_text = " ".join(anchor.get_text(" ", strip=True).split())
        if anchor_text and pdf_pattern.search(anchor_text):
            source_url = urljoin(FAA_BASE_URL, anchor["href"])
            break

    version_letter = parse_version_letter(number)
    return {
        "acNumber": number,
        "versionLetter": version_letter,
        "title": values.get("Title", ""),
        "documentStatus": values.get("Status", ""),
        "dateIssued": values.get("Date issued", ""),
        "sourceUrl": source_url,
        "documentPageUrl": document_page_url,
        "faaDocumentId": parse_document_id(document_page_url),
        "detectionMethod": "listing",
    }


def build_probe_letters(current_version: str, attempts: int = 3) -> list[str]:
    start_code = ord(current_version.upper())
    return [chr(start_code + offset) for offset in range(1, attempts + 1)]


def probe_for_next_letter(current_version: str, session=None) -> dict[str, Any] | None:
    request_session = get_session(session)

    for version_letter in build_probe_letters(current_version):
        pdf_url = build_pdf_url(version_letter)
        response = request_session.head(pdf_url, allow_redirects=True, timeout=20)
        if response.status_code == 200:
            return {
                "acNumber": f"61-65{version_letter}",
                "versionLetter": version_letter,
                "title": "Certification: Pilots and Flight and Ground Instructors",
                "documentStatus": "Active",
                "dateIssued": "",
                "sourceUrl": pdf_url,
                "documentPageUrl": "",
                "faaDocumentId": None,
                "detectionMethod": "pdf-probe",
            }

    return None


def detect_new_ac(current_version: str | None = None, session=None) -> dict[str, Any]:
    request_session = get_session(session)
    pointer = load_current_pointer()
    adopted_version = current_version or pointer["currentVersion"]

    search_response = request_session.get(FAA_SEARCH_URL, timeout=60)
    search_response.raise_for_status()
    candidates = parse_candidate_links(search_response.text)

    active_candidates: list[dict[str, Any]] = []
    for candidate in reversed(candidates):
        detail_response = request_session.get(candidate["documentPageUrl"], timeout=60)
        detail_response.raise_for_status()
        details = parse_document_information(detail_response.text, candidate["documentPageUrl"])
        if details.get("documentStatus", "").lower() == "active":
            active_candidates.append(details)

    latest = None
    if active_candidates:
        latest = max(active_candidates, key=lambda item: version_sort_key(item["versionLetter"]))
    else:
        latest = probe_for_next_letter(adopted_version, session=request_session)

    if latest is None:
        raise RuntimeError("Could not detect the current FAA AC 61-65 revision.")

    if version_sort_key(latest["versionLetter"]) > version_sort_key(adopted_version):
        status = "new"
    else:
        status = "current"

    return {
        "status": status,
        "currentVersion": adopted_version,
        **latest,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Detect whether a new AC 61-65 revision exists.")
    parser.add_argument(
        "--current-version",
        help="Override the currently adopted AC letter instead of reading ac-versions/current.json.",
    )
    args = parser.parse_args()

    result = detect_new_ac(current_version=args.current_version)
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
