# Phase 4: CSS Variable Generation

**Status:** Not started

## Goal

Generate runtime-ready CSS output from the same token source.

## Deliverables

- CSS custom property generation script (`src/css/build-css-vars.ts`, runs via Node)
- single `dist/index.css`: dark theme on `:root`, light override via `@media (prefers-color-scheme: light)` and `[data-theme='light']`
- `--fm-font-sans` CSS-only variable included in output (no corresponding JS token)
- basic test coverage for generated output shape

## Notes

- `--fm-` is the confirmed permanent CSS variable prefix
- The output file structure mirrors what the website's `variables.css` currently does — making cutover a drop-in replacement

## Exit Criteria

- CSS variables are produced from the source of truth
- the TypeScript theme and CSS outputs stay in sync
- future multi-theme support is structurally possible without a consumer API change
