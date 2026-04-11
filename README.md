# brand

Flowmatrix brand system repository.

This repo defines the design-token and theme-contract foundation for a reusable brand package. The intent is to give application code a stable semantic theme API rather than exposing raw visual primitives directly.

## Core Rule

Foundations may change. Semantic meaning should change much less often.

## What Lives Here

- internal foundations such as color, typography, spacing, radius, shadow, motion, border width, and layer
- semantic mappings such as `text.primary` and `surface.elevated`
- a resolved public `theme` contract for applications
- CSS custom property generation from the same source of truth
- planning docs for taking the package from bootstrap to production use

## Docs

- [Overview](docs/overview.md)
- [Architecture](docs/architecture.md)
- [Public Contract](docs/public-contract.md)
- [Theme Contract v1](docs/theme-contract-v1.md)
- [Token Authoring](docs/token-authoring.md)
- [Website Migration Map](docs/website-migration-map.md)
- [Roadmap](planning/roadmap.md)

## Current Direction

The package target is `@flowmatrix-ai/brand`, published to GitHub Packages (`https://npm.pkg.github.com`).

Applications should consume `theme`.

Applications should not consume raw foundations such as palette steps or typography primitives.
