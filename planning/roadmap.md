# Roadmap

## Phase 0: Alignment And Bootstrap

Goal:
Create the system definition before implementation starts.

Deliverables:

- core documentation
- agreed public contract direction
- initial repo conventions
- named package target: `@flowmatrix-ai/brand`

Exit criteria:

- docs are reviewed and accepted (complete — all 18 design decisions are locked and reflected in `docs/` and `planning/roadmap.md`)
- the public versus internal boundary is clear
- the MVP token domains are agreed

## Phase 1: Package Skeleton And Publishing Infrastructure

Goal:
Create the package structure, build foundation for authoring, and wire the publishing pipeline.

Deliverables:

- package metadata (`@flowmatrix-ai/brand`, v0.1.0, node≥24, npm≥11)
- `tsconfig.json`: ESM module output (`"module": "NodeNext"`, `"moduleResolution": "NodeNext"`)
- `.nvmrc`: `24`
- `.gitignore` covering `dist/` and `node_modules/`
- TypeScript setup (`tsc` only, `dist/` gitignored)
- devDependencies: `typescript`, `prettier`; CSS generation via a plain Node script in `src/css/` (no bundler or extra runtime dep needed)
- source layout for foundations, semantics, theme, css, and types
- export map: `"."` → `dist/index.js`, `"./css"` → `dist/index.css`
- `publishConfig` pointing to `https://npm.pkg.github.com`
- repo-root `.npmrc`: `@flowmatrix-ai:registry=https://npm.pkg.github.com`
- CI type-check and build gate workflow (runs on all PRs and pushes to `main`; separate from the publish workflow)
- CI publish workflow triggered on `v*` tags, using `FLOWMATRIX_GITHUB_TOKEN`
- linting and formatting baseline

Exit criteria:

- package builds locally (`tsc` emits clean)
- types are emitted cleanly
- source structure matches the architecture docs
- a manually triggered `v0.1.0` tag publishes successfully to GitHub Packages

## Phase 2: Foundations

Goal:
Author the internal raw token scales.

Deliverables:

- color palette and neutrals
- typography primitives
- accent scale (`base`, `soft`, `bright`)
- spacing, radius, shadow, motion, border width, and layer scales
- typed foundation definitions

Source values (extract from `website/src/styles/variables.css` — no design invention, this is extraction):

- Gold palette: `#d4a84b` (dark/default), `#9a6c1f` (light override)
- Canvas background: `#050505` (dark), `#f4f5f7` (light)
- Font stack: `Inter, 'Segoe UI', Roboto, Helvetica Neue, Arial, sans-serif` → emitted as `--fm-font-sans` (CSS-only, no JS token)
- Space values: xs=0.5rem, sm=1rem, md=1.5rem, lg=2rem, xl=3rem

Exit criteria:

- foundations are typed and validated
- naming is consistent
- no application-facing exports rely on raw foundations

## Phase 3: Semantics And Theme Contract

Goal:
Map the stable semantic layer and resolve the public theme.

Deliverables:

- semantic token maps for text, surface, border, icon, action, status, and type
- accent domain: `theme.accent.base`, `.soft`, `.bright`
- public `theme` export
- public types for theme consumption
- named public primitives: space (xs=0.5rem, sm=1rem, md=1.5rem, lg=2rem, xl=3rem), radius, shadow, and layer
- type tokens as `size` + `lineHeight` pairs per role; no weight token

Exit criteria:

- app-facing usage works through `theme`
- no raw palette access is needed by consumers
- the theme contract is small, obvious, and typed

## Phase 4: CSS Variable Generation

Goal:
Generate runtime-ready CSS output from the same token source.

Deliverables:

- CSS custom property generation
- single `dist/index.css`: dark theme on `:root`, light override via `@media (prefers-color-scheme: light)` and `[data-theme='light']`
- `--fm-` prefix confirmed as the permanent CSS variable prefix
- basic test coverage for generated output shape

Exit criteria:

- CSS variables are produced from the source of truth
- the TypeScript theme and CSS outputs stay in sync
- future multi-theme support is structurally possible without a consumer API change

## Phase 5: Site Cutover

Goal:
Fully replace the site’s hand-rolled token layer with the published brand package.

Deliverables:

**Website repo setup:**
- add `.npmrc` to website repo root: `@flowmatrix-ai:registry=https://npm.pkg.github.com`
- add `NODE_AUTH_TOKEN` secret to website repo CI (value: `FLOWMATRIX_GITHUB_TOKEN`)
- `npm install @flowmatrix-ai/brand`

**CSS migration:**
- import `@flowmatrix-ai/brand/css` in place of the existing `src/styles/variables.css`
- delete the alias block at the bottom of `variables.css` (the `/* Brand contract aliases */` section)
- migrate all `--space-N` numeric references (≈150 occurrences across components and pages) to named steps `--fm-space-xs` through `--fm-space-xl`
- update all `--fm-*` references that have changed names to match the final contract
- retain component-specific tokens defined in website (hero glows, nav heights, etc.) — these stay in the site forever per W-2

**Verification:**
- full visual QA pass (dark mode → light mode → manual `data-theme` toggle)
- all pages render correctly
- no orphaned custom property references

Exit criteria:

- `variables.css` alias block is gone
- no numeric `--space-N` references remain in site source
- site passes visual QA in both dark and light modes
- the site installs the brand package from GitHub Packages (not a path install)

## Phase 6: Production MVP Hardening

Goal:
Make the package reliable enough for ongoing product use.

Deliverables:

- token regression tests or snapshot checks
- contract review for breaking names
- changelog and versioning policy
- deprecation guidance
- release notes template

Exit criteria:

- the package has a defined compatibility policy
- breaking versus non-breaking changes are documented
- the site can upgrade predictably

## Phase 7: Post-Cutover Housekeeping

Goal:
Make the brand package a first-class dependency in the site’s ongoing maintenance workflow.

Deliverables:

- Dependabot config in the website repo to track `@flowmatrix-ai/brand` patch and minor bumps
- document the local dev auth flow for new contributors (`.npmrc` + personal access token with `read:packages`)
- confirm Dependabot has `read:packages` access in the org settings
- tag and release `v0.1.0` as the stable baseline post-cutover

Exit criteria:

- Dependabot opens PRs for brand package updates
- new contributor onboarding doc covers the registry auth step
- `v0.1.0` is the published baseline for the site’s first production deploy

## Phase 8: Post-MVP Expansion

Goal:
Extend the system without breaking the contract.

Planned work:

- Tailwind CSS output (decided V-2: structurally possible, deferred to post-MVP — do not break the contract shape to accommodate it)
- client-specific themes
- component token layer
- token docs site
- stronger schema validation and automation

Exit criteria:

- new capabilities build on the existing contract rather than bypassing it
- consumer API remains stable while internal implementation evolves
