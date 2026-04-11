# Roadmap

## Phase 0: Alignment And Bootstrap

Goal:
Create the system definition before implementation starts.

Deliverables:

- core documentation
- agreed public contract direction
- initial repo conventions
- named package target such as `@flowmatrix/brand`

Exit criteria:

- docs are reviewed and accepted
- the public versus internal boundary is clear
- the MVP token domains are agreed

## Phase 1: Package Skeleton

Goal:
Create the package structure and build foundation for authoring.

Deliverables:

- package metadata
- TypeScript setup
- source layout for foundations, semantics, theme, css, and types
- basic build output strategy for ESM and types
- linting and formatting baseline

Exit criteria:

- package builds locally
- types are emitted cleanly
- source structure matches the architecture docs

## Phase 2: Foundations

Goal:
Author the internal raw token scales.

Deliverables:

- color palette and neutrals
- typography primitives
- spacing, radius, shadow, motion, border width, and layer scales
- typed foundation definitions

Exit criteria:

- foundations are typed and validated
- naming is consistent
- no application-facing exports rely on raw foundations

## Phase 3: Semantics And Theme Contract

Goal:
Map the stable semantic layer and resolve the public theme.

Deliverables:

- semantic token maps for text, surface, border, icon, action, status, and type
- public `theme` export
- public types for theme consumption
- named public primitives for space, radius, shadow, and layer

Exit criteria:

- app-facing usage works through `theme`
- no raw palette access is needed by consumers
- the theme contract is small, obvious, and typed

## Phase 4: CSS Variable Generation

Goal:
Generate runtime-ready CSS output from the same token source.

Deliverables:

- CSS custom property generation
- light theme output file
- naming convention for CSS variables
- basic test coverage for generated output shape

Exit criteria:

- CSS variables are produced from the source of truth
- the TypeScript theme and CSS outputs stay in sync
- future multi-theme support is structurally possible

## Phase 5: Site MVP Integration

Goal:
Adopt the package inside the site in a narrow, real path.

Deliverables:

- install or workspace-link the package into the site
- wire global CSS variables into the site shell
- migrate a small but representative set of UI surfaces
- document usage patterns for app developers

Suggested first adoption targets:

- app shell and page background
- headings and body text
- buttons and links
- cards, sections, and form borders
- spacing and radius usage in layout primitives

Exit criteria:

- the site renders correctly using the new theme contract
- the first set of pages uses semantic theme tokens end to end
- adoption does not require direct foundation access

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

## Phase 7: Private GitHub Package Publishing

Goal:
Publish the package as a private GitHub npm package and consume it from the site.

Deliverables:

- GitHub Packages registry configuration
- package name, scope, and access model
- CI release workflow
- auth setup for local development and CI in the site repo
- version publish process

Exit criteria:

- package publishes successfully to the private registry
- the site installs it from GitHub Packages
- release and install steps are documented and repeatable

## Phase 8: Post-MVP Expansion

Goal:
Extend the system without breaking the contract.

Candidate work:

- dark theme
- client-specific themes
- component token layer
- Tailwind output
- token docs site
- stronger schema validation and automation

Exit criteria:

- new capabilities build on the existing contract rather than bypassing it
- consumer API remains stable while internal implementation evolves
