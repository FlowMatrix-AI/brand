# Phase 7: Post-Cutover Housekeeping

**Status:** Done — completed 2026-04-11

## Goal

Make the brand package a first-class dependency in the site's ongoing maintenance workflow.

## Deliverables

- Dependabot config in the website repo to track `@flowmatrix-ai/brand` patch and minor bumps
- document the local dev auth flow for new contributors (`.npmrc` + personal access token with `read:packages`)
- confirm Dependabot has `read:packages` access in the org settings
- tag and release `v0.1.0` as the stable baseline post-cutover

## Exit Criteria

- Dependabot opens PRs for brand package updates
- new contributor onboarding doc covers the registry auth step
- `v0.1.0` is the published baseline for the site's first production deploy
