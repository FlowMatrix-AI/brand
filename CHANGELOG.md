# Changelog

All notable changes to `@flowmatrix-ai/brand` are documented here.

This project adheres to [Semantic Versioning](https://semver.org/) and
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [0.2.0] — 2026-04-11

### Added
- CSS variable generation via `src/css/build-css-vars.js` — emits `dist/index.css` at build time
- `"./css"` export path (`dist/index.css`) for side-effect import of all custom properties
- Semantic **action** token group with `primary`, `secondary`, `tertiary`, `danger` variants
- Light-mode overrides for action tokens (`--fm-action-*` values in the `:root` block)
- Foundation files: `radius.ts`, `shadow.ts`, neutral color scales
- `rawValues` export in `src/theme/index.ts` (not yet part of the public API surface)

### Fixed
- `exports` field in `package.json` — corrected `types` condition order so TypeScript
  resolves declarations before the `import` condition (fixes TS2882 in consumers)

---

## [0.1.0] — 2026-04-11

### Added
- Initial package scaffolding: `type: "module"`, `publishConfig` pointing to GitHub Packages
- Foundation tokens: `color.ts`, `spacing.ts`, `typography.ts`, `layer.ts`
- Semantic token contract: `src/theme/index.ts` exporting `themeObj` (re-exported as `theme`)
  with groups `space`, `radius`, `shadow`, `text`, `surface`, `border`, `icon`,
  `status`, `action`, `type`, `accent`
- TypeScript build via `tsc` with `NodeNext` module resolution and declaration emit
- GitHub Actions CI (`ci.yml`) and publish-on-release (`publish.yml`) workflows

[Unreleased]: https://github.com/FlowMatrix-AI/brand/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/FlowMatrix-AI/brand/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/FlowMatrix-AI/brand/releases/tag/v0.1.0
