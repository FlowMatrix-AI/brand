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

## Docs

- [Overview](docs/overview.md)
- [Architecture](docs/architecture.md)
- [Public Contract](docs/public-contract.md)
- [Theme Contract v1](docs/theme-contract-v1.md)
- [Token Authoring](docs/token-authoring.md)
- [Website Migration Map](docs/website-migration-map.md)
- [Versioning Policy](docs/versioning-policy.md)
- [Deprecation Guidance](docs/deprecation.md)
- [Release Process](docs/release-process.md)

## Current Status

`@flowmatrix-ai/brand` v0.2.0, published to GitHub Packages (`https://npm.pkg.github.com`). Phases 0–6 of the original roadmap are complete.

Applications should consume `theme`.

Applications should not consume raw foundations such as palette steps or typography primitives.
