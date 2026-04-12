# Versioning Policy

`@flowmatrix-ai/brand` follows [Semantic Versioning](https://semver.org/).

```
MAJOR.MINOR.PATCH
```

---

## What "breaking" means for a design token package

Because consumers reference token names directly in CSS (`var(--fm-text-primary)`) and in
TypeScript (`theme.text.primary`), the stability contract is stricter than for typical
API packages.

### MAJOR bump required — breaking changes

| Change type | Example |
|---|---|
| Rename a token | `--fm-text-muted` → `--fm-text-tertiary` |
| Remove a token | Delete `theme.action.tertiary` |
| Change a token's semantic meaning | Swap `--fm-surface-canvas` to reference brand blue |
| Remove an export path | Remove `"./css"` from `exports` |
| Change `engines` minimum | Raise required Node version |
| Remove `rawValues` from the public API (once published) | — |

A consumer upgrade that requires editing CSS or TypeScript source is a **major bump**.

### MINOR bump — backwards-compatible additions

| Change type | Example |
|---|---|
| Add a new token group | Add `theme.brand.*` |
| Add tokens to an existing group | Add `theme.status.info.*` |
| Add a new export path | Add `"./tailwind"` |
| Widen the `engines` range | Support Node 26 |

### PATCH bump — fixes only

| Change type | Example |
|---|---|
| Fix an incorrect token *value* (bug fix) | Correct `--fm-border-focus` to use the right base color |
| Fix TypeScript declaration errors | Correct `d.ts` output |
| Update CI, docs, or tests with no output changes | — |

---

## Pre-1.0 stability (current state)

Until `v1.0.0`, the minor version may include breaking changes with clear migration notes.
Consumers should pin to an exact minor (e.g. `"@flowmatrix-ai/brand": "0.2.x"`).

---

## Deprecation cycle

Before removing or renaming a token in a major release, it must be deprecated for at
least one minor version:

1. Keep the old name in the source (or re-export it from the new name)
2. Add it to the deprecation list in [deprecation.md](./deprecation.md)
3. Note the planned removal version in CHANGELOG's `[Unreleased]` section
4. On the next major, remove the alias and update the CHANGELOG

See [deprecation.md](./deprecation.md) for implementation guidance.

---

## Release cadence

There is no fixed release cadence.  Releases are triggered by the need to ship changes
to the website (or other consumers).  Every release must:

- Have a tag following `vMAJOR.MINOR.PATCH`
- Have a GitHub Release with entries from CHANGELOG
- Have a green CI run on the tagged commit

See [release-process.md](./release-process.md) for the step-by-step checklist.
