# Simply Endorsed Project Notes

- Runtime endorsement data lives in `js/endorsements-data.js`.
- `window.APP_META` is the single source of truth for the adopted AC version metadata.
- `item.acRef` can be omitted when it matches `${APP_META.acVersion}, ${item.id}`.
- Condensed card explanation authoring happens in `endorse-condensed-card-text`.
- After editing `endorse-condensed-card-text`, run `node scripts/sync-card-explanations.mjs`.
- Archived AC source files live in `ac-versions/`.
- In-flight update workspaces live in `ac-updates/`.
- Use `python -m scripts.ac_update.orchestrate bootstrap` once to create the baseline archive.
- Use `python -m scripts.ac_update.orchestrate run` to check for a newer AC and build an update workspace.
- The human runbook for future updates is `docs/ac-update-runbook.md`.
