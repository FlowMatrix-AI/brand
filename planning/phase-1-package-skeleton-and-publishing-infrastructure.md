# Phase 1: Package Skeleton And Publishing Infrastructure

**Status:** Not started

## Goal

Create the package structure, build foundation for authoring, and wire the publishing pipeline.

## Deliverables

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

## Reference

See `docs/architecture.md` for the full source layout, export map, package metadata spec, and publishing mechanics.

## Exit Criteria

- package builds locally (`tsc` emits clean)
- types are emitted cleanly
- source structure matches the architecture docs
- a manually triggered `v0.1.0` tag publishes successfully to GitHub Packages
