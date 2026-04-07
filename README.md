# CFI Endorsement Navigator

Static single-page reference tool for AC 61-65K endorsements with curated browse subcategories for common instructor use cases.

## Scope

- Browse/search all 96 endorsement records from `window.ENDORSEMENTS`
- Jump into curated subcategories like `First Solo`, `Initial Solo XC`, `Flight Review`, and common checkride bundles
- Show optional supplemental endorsements for common multi-category bundles without leaving the browse flow
- No backend, no framework, no build pipeline required

## Data Files

- `js/endorsements-data.js`: defines `window.APP_META` and `window.ENDORSEMENTS`
- `js/browse-structure.js`: defines `window.BROWSE_STRUCTURE`
- `js/app.js`: renders the UI and binds interactions

## Browse Structure Model

Each browse category in `window.BROWSE_STRUCTURE` includes:

- `categoryId`
- `subcategories`

Each subcategory includes:

- `id`
- `label`
- `description`
- `primaryIds`
- optional `supplementalIds`
- optional `supplementalLabel`

`primaryIds` define the default bundle order shown in the results area. When present, `supplementalIds` can be added through the `Show full bundle` toggle.

## Metadata Contract

`window.APP_META` should include:

- `acVersion`
- `dateIssued`
- `sourceUrl`
- `documentPageUrl`
- `display`

Recommended values for this project:

- AC version: `AC 61-65K`
- Date issued: `2025-11-14`
- Source URL: FAA AC 61-65K PDF

## Trust Note

This tool is a reference aid. Endorsement applicability depends on applicant history, certificate level, training context, and the specific regulation being used.

## GitHub Pages

This repo is intended to publish directly from the `main` branch on GitHub Pages.

The live site only needs:

- `index.html`
- `css/`
- `js/`
- `.nojekyll`

The app already points to the FAA-hosted AC PDF in `window.APP_META`, so local research PDFs are intentionally kept out of the deployment repo.
