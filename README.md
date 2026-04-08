# Simply Endorsed

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

---

## Release Checklist

Run through this checklist before each deployment to confirm core functionality is intact.

### Data Integrity
- [ ] Console shows no validation errors on page load (open DevTools → Console)
- [ ] All 96 endorsements load (`resultsSummary` shows "96 of 96 endorsements" on All Endorsements view)

### Common Starting Points Strip
- [ ] Strip is visible on home view (All Endorsements, no search query)
- [ ] Each shortcut button opens the correct subcategory
- [ ] Strip disappears when a search query is typed or a category is selected

### Search Behavior
- [ ] Searching `first solo` returns results including A.3, A.4, A.6
- [ ] Searching `tailwheel` returns A.75
- [ ] Searching `retest` returns A.77
- [ ] Searching `flight review` returns A.69 and A.70
- [ ] Searching `BFR` returns A.69
- [ ] Searching inside a specific category with no matches shows the `Search all endorsements for "…"` button
- [ ] Clicking `Search all endorsements for "…"` resets to All Endorsements and keeps the search query

### Bundle Behavior
- [ ] Opening `Private Initial Checkride Bundle`: default shows only A.37
- [ ] Toggling "Show full bundle": renders a "Primary endorsements" section and a separate "Also commonly included" section
- [ ] Supplemental items (A.36, A.2, A.1) appear under the second section label, not merged into the first
- [ ] Toggling "Show primary only" returns to the single-section primary view
- [ ] Opening `First Solo`: shows A.3, A.4, A.6 as primary; A.14 as supplemental under its label
- [ ] Opening `Instrument Checkride Bundle`: shows A.43, A.44 primary; A.1 supplemental
- [ ] Opening `Retest After Disapproval`: shows A.77 with no bundle toggle (no supplemental)

### Card Behavior
- [ ] Collapsed cards show: ID → title → explanation → CFR/source → Expand button
- [ ] Expiration and per-flight chips are visible on collapsed cards
- [ ] Expanding a card shows the FAA model text, explanation section, CFR basis, source, and who issues it
- [ ] Copy button copies the verbatim FAA text to clipboard (or selects it as fallback)
- [ ] Collapsing a card hides the expanded content

### Mobile Drawer
- [ ] `Browse` button is visible on screens narrower than 900px
- [ ] Tapping `Browse` opens the sidebar drawer
- [ ] Focus moves to the `✕ Close` button inside the drawer when it opens
- [ ] Tapping `✕ Close` closes the drawer and returns focus to `Browse`
- [ ] Tapping the dark backdrop closes the drawer and returns focus to `Browse`
- [ ] Pressing `Escape` closes the drawer and returns focus to `Browse`
- [ ] Selecting a subcategory on mobile closes the drawer automatically

### Accessibility
- [ ] All interactive elements have visible focus rings (Tab through the page)
- [ ] Screen reader announces result count when it changes (aria-live regions)
