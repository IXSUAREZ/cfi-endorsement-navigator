# AC Update Automation

This folder contains the AC 61-65 archive and update workflow.

## Commands

From the repo root:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate bootstrap
.venv/bin/python -m scripts.ac_update.orchestrate run
```

Shortcut wrapper:

```bash
./shortcuts/check-ac-update.command
```

## What Each Script Does

- `orchestrate.py`: entrypoint for `bootstrap` and `run`
- `check_new_ac.py`: FAA detection against the current AC listing plus next-letter PDF probing fallback
- `download_ac.py`: downloads the PDF, extracts text, and writes archive metadata
- `build_diff.py`: writes the full diff plus normalized per-endorsement diff artifacts
- `generate_prompt.py`: builds the ready-to-paste agent prompt for the update workspace
- `tests/`: fixture-based tests for the FAA parser and diff logic

## Important Paths

- `ac-versions/`: permanent archive of adopted and detected AC source artifacts
- `ac-updates/`: in-flight update workspaces such as `K-to-L/`
- `docs/ac-update-runbook.md`: human runbook for future manual use
