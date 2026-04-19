from __future__ import annotations

import hashlib
import json
import re
import shutil
from datetime import UTC, datetime
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

import requests
from pypdf import PdfReader


REPO_ROOT = Path(__file__).resolve().parents[2]
DATA_FILE = REPO_ROOT / "js" / "endorsements-data.js"
README_FILE = REPO_ROOT / "README.md"
CARD_EXPLANATION_SOURCE = REPO_ROOT / "endorse-condensed-card-text"
SYNC_SCRIPT = REPO_ROOT / "scripts" / "sync-card-explanations.mjs"
AC_VERSIONS_DIR = REPO_ROOT / "ac-versions"
AC_UPDATES_DIR = REPO_ROOT / "ac-updates"
CURRENT_POINTER_PATH = AC_VERSIONS_DIR / "current.json"
FAA_SEARCH_URL = (
    "https://www.faa.gov/regulations_policies/advisory_circulars/"
    "index.cfm/go/document.list?omni=61-65"
)
FAA_PDF_URL_TEMPLATE = (
    "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-65{version}.pdf"
)
DEFAULT_HEADERS = {
    "User-Agent": "Simply Endorsed AC Update Automation/1.0",
}


def utc_now_iso() -> str:
    return datetime.now(UTC).replace(microsecond=0).isoformat()


def ensure_dir(path: Path) -> Path:
    path.mkdir(parents=True, exist_ok=True)
    return path


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, payload: dict[str, Any]) -> Path:
    ensure_dir(path.parent)
    path.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    return path


def write_text(path: Path, content: str) -> Path:
    ensure_dir(path.parent)
    path.write_text(content, encoding="utf-8")
    return path


def parse_version_letter(ac_number: str | None) -> str:
    value = str(ac_number or "").strip()
    match = re.search(r"61-65([A-Z])", value)
    if not match:
        raise ValueError(f"Could not determine AC version letter from {value!r}.")
    return match.group(1)


def load_app_meta(data_path: Path = DATA_FILE) -> dict[str, Any]:
    text = data_path.read_text(encoding="utf-8")
    match = re.search(r"window\.APP_META\s*=\s*(\{.*?\});", text, flags=re.DOTALL)
    if not match:
        raise RuntimeError(f"Could not parse APP_META from {data_path}.")
    return json.loads(match.group(1))


def load_current_pointer() -> dict[str, Any]:
    if CURRENT_POINTER_PATH.exists():
        return load_json(CURRENT_POINTER_PATH)

    app_meta = load_app_meta()
    current_version = parse_version_letter(app_meta.get("acVersion"))
    return {
        "currentVersion": current_version,
        "adoptedAt": app_meta.get("dateIssued"),
        "adoptedTag": f"ac-61-65{current_version}",
    }


def get_session(session: requests.Session | None = None) -> requests.Session:
    if session is not None:
        return session

    next_session = requests.Session()
    next_session.headers.update(DEFAULT_HEADERS)
    return next_session


def download_binary(url: str, destination: Path, session: requests.Session | None = None) -> Path:
    request_session = get_session(session)
    response = request_session.get(url, timeout=60)
    response.raise_for_status()
    ensure_dir(destination.parent)
    destination.write_bytes(response.content)
    return destination


def extract_text_from_pdf(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    pages = [(page.extract_text() or "").strip() for page in reader.pages]
    return "\n\n".join(page for page in pages if page).strip() + "\n"


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def copy_if_missing(source: Path, destination: Path) -> Path:
    if destination.exists():
        return destination
    ensure_dir(destination.parent)
    shutil.copy2(source, destination)
    return destination


def parse_document_id(document_page_url: str | None) -> str | None:
    if not document_page_url:
        return None

    match = re.search(r"/documentID/(\d+)", document_page_url)
    if match:
        return match.group(1)

    parsed = urlparse(document_page_url)
    if parsed.query:
        query_match = re.search(r"documentID=(\d+)", parsed.query)
        if query_match:
            return query_match.group(1)

    return None


def version_sort_key(version_letter: str | None) -> int:
    if not version_letter:
        return -1
    return ord(version_letter.upper())


def build_pdf_url(version_letter: str) -> str:
    return FAA_PDF_URL_TEMPLATE.format(version=version_letter.upper())

