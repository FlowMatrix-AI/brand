# Phase 5: Site Cutover

**Status:** Not started

## Goal

Fully replace the site's hand-rolled token layer with the published brand package.

## Deliverables

### Website Repo Setup

- add `.npmrc` to website repo root: `@flowmatrix-ai:registry=https://npm.pkg.github.com`
- add `NODE_AUTH_TOKEN` secret to website repo CI (value: `FLOWMATRIX_GITHUB_TOKEN`)
- `npm install @flowmatrix-ai/brand`

### CSS Migration

- import `@flowmatrix-ai/brand/css` in place of the existing `src/styles/variables.css`
- delete the alias block at the bottom of `variables.css` (the `/* Brand contract aliases */` section)
- migrate all `--space-N` numeric references (≈150 occurrences across components and pages) to named steps `--fm-space-xs` through `--fm-space-xl`
- update all `--fm-*` references that have changed names to match the final contract
- retain component-specific tokens defined in website (hero glows, nav heights, etc.) — these stay in the site forever

### Verification

- full visual QA pass (dark mode → light mode → manual `data-theme` toggle)
- all pages render correctly
- no orphaned custom property references

## Reference

See `docs/website-migration-map.md` for:
- the full variable-by-variable mapping table
- space step migration guide (including unmapped numeric steps)
- the expected post-cutover shape of `variables.css`

## Exit Criteria

- `variables.css` alias block is gone
- no numeric `--space-N` references remain in site source
- site passes visual QA in both dark and light modes
- the site installs the brand package from GitHub Packages (not a path install)
