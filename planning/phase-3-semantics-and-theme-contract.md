# Phase 3: Semantics And Theme Contract

**Status:** Not started

## Goal

Map the stable semantic layer and resolve the public theme.

## Deliverables

- semantic token maps for text, surface, border, icon, action, status, and type
- accent domain: `theme.accent.base`, `.soft`, `.bright`
- public `theme` export
- public types for theme consumption
- named public primitives: space (xs=0.5rem, sm=1rem, md=1.5rem, lg=2rem, xl=3rem), radius, shadow, and layer
- type tokens as `size` + `lineHeight` pairs per role; no weight token

## Reference

See `docs/theme-contract-v1.md` for the full v1 token surface.  
See `docs/public-contract.md` for stability rules and what can and cannot change.

## Exit Criteria

- app-facing usage works through `theme`
- no raw palette access is needed by consumers
- the theme contract is small, obvious, and typed
