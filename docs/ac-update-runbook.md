# AC 61-65 Update Runbook

This is the step-by-step guide for future-you when the FAA publishes a new AC 61-65 letter and you want the repo automation to do the heavy lifting without guessing.

## Stop Here First

Do not start the update workflow until all of these are true:

- You are in the repo root.
- `.venv/` exists and `.venv/bin/python` runs.
- `ac-versions/current.json` exists.
- `ac-versions/<current-letter>/` contains the archived PDF, extracted text, metadata, and `endorsements-data.snapshot.js`.
- The repo has no accidental uncommitted junk you do not want mixed into the update.

If any of those are missing, run the bootstrap flow first.

## One-Time Setup

From the repo root:

```bash
.venv/bin/python -m pip install -r scripts/ac_update/requirements.txt
.venv/bin/python -m scripts.ac_update.orchestrate bootstrap
```

What bootstrap should create:

- `ac-versions/README.md`
- `ac-updates/README.md`
- `ac-versions/current.json`
- `ac-versions/K/AC_61-65K.pdf`
- `ac-versions/K/AC_61-65K.txt`
- `ac-versions/K/metadata.json`
- `ac-versions/K/endorsements-data.snapshot.js`

Recommended follow-up after the implementation work in this repo has been committed:

```bash
git tag -a ac-61-65K -m "Baseline AC 61-65K"
git push --tags
```

## Normal Update Workflow

When a new AC 61-65 letter ships:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate run
```

Shortcut version:

```bash
./shortcuts/check-ac-update.command
```

What should happen:

1. The automation checks the FAA AC listing.
2. If the current adopted letter is still current, it prints a JSON result with `"status": "current"` and stops.
3. If a newer letter exists, it asks for confirmation before downloading.
4. It creates `ac-updates/<FROM>-to-<TO>/`.
5. It downloads the new PDF into `ac-versions/<TO>/`.
6. It extracts the new text archive and writes metadata.
7. It writes:
   - `context.json`
   - `status.md`
   - `diff.txt`
   - `per-endorsement-diff.md`
   - `changelog.md`
   - `update-prompt.md`

Open the generated `update-prompt.md` and use it to drive the manual content update.

## Manual Content Update After Automation Runs

Once `ac-updates/<FROM>-to-<TO>/update-prompt.md` exists:

1. Open the prompt and the diff artifacts.
2. Change `ac-updates/<FROM>-to-<TO>/status.md` from `pending` to `in-progress`.
3. Update `js/endorsements-data.js`:
   - Update `APP_META`
   - Update changed endorsements
   - Add new endorsements
   - Remove deleted endorsements
4. If condensed card explanation wording needs changes, edit `endorse-condensed-card-text`.
5. Re-sync condensed card explanations:

```bash
node scripts/sync-card-explanations.mjs
```

6. Update README copy if the visible Current AC / archive instructions changed.
7. Load the app locally and manually verify search, browse, metadata footer, and changed endorsement cards.
8. Change `status.md` to `applied` once the content update is complete.
9. Commit the update, then tag and push:

```bash
git add .
git commit -m "Adopt AC 61-65<NEW-LETTER>"
git tag -a ac-61-65<NEW-LETTER> -m "Adopted AC 61-65<NEW-LETTER>"
git push
git push --tags
```

10. Change `status.md` to `tagged`.
11. Update `ac-versions/current.json` so `currentVersion`, `adoptedAt`, and `adoptedTag` point to the newly adopted AC.

## Failure Recovery

### FAA detection says `current` but you believe a new letter exists

- Open the FAA advisory circular page manually and confirm the new revision is actually active.
- Re-run:

```bash
.venv/bin/python -m scripts.ac_update.check_new_ac
```

- If the listing parser missed it but the PDF exists, the fallback next-letter PDF probe may still detect it.

### Bootstrap files are missing

Run:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate bootstrap
```

Do not continue until `ac-versions/current.json` and the current version folder both exist.

### The generated per-endorsement diff looks wrong

- Inspect `ac-updates/<FROM>-to-<TO>/diff.txt` first to confirm the raw archive changed.
- Check the extracted text files in `ac-versions/<FROM>/` and `ac-versions/<TO>/`.
- If the PDF text extraction changed shape, fix the parser in `scripts/ac_update/build_diff.py` before trusting the prompt.

### The sync script reports title or ID mismatches

- Open `endorse-condensed-card-text`.
- Confirm each block uses this exact shape:

```text
A.1 - Title
Single paragraph explanation
```

- Make sure ids and titles match the data file exactly.
- Re-run:

```bash
node scripts/sync-card-explanations.mjs
```

## Useful Commands

Install requirements:

```bash
.venv/bin/python -m pip install -r scripts/ac_update/requirements.txt
```

Bootstrap:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate bootstrap
```

Run the normal update check:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate run
```

Skip the confirmation prompt:

```bash
.venv/bin/python -m scripts.ac_update.orchestrate run --yes
```

Inspect detection only:

```bash
.venv/bin/python -m scripts.ac_update.check_new_ac
```

Sync condensed card explanations:

```bash
node scripts/sync-card-explanations.mjs
```

## Clean Completion Checklist

- Baseline archive exists
- New AC detected and archived
- Update workspace created
- Prompt reviewed
- Data file updated
- Condensed card explanations synced if needed
- README updated if needed
- Manual QA completed
- Commit created
- Tag created and pushed
- `current.json` updated
- `status.md` set to `tagged`
