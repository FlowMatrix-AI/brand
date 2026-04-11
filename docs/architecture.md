# Architecture

## Layer Model

The system should be built in four layers:

1. Foundations
   Internal raw scales such as color, typography, spacing, radius, shadow, motion, border width, and layer.
2. Semantics
   Internal meaning-based mappings such as `text.primary` and `surface.elevated`.
3. Theme
   Public resolved object that applications consume.
4. Consumers
   The site and any future apps or component packages.

The dependency direction is one-way:

`foundations -> semantics -> theme -> applications`

Applications should never depend directly on foundations.

## Public Contract Decision

The public `theme` should expose:

- semantic UI domains: `text`, `surface`, `border`, `icon`, `action`, `status`, `type`
- named accent primitive: `accent` (`base`, `soft`, `bright`) — the brand accent color used for decorative and interactive accent surfaces that do not map cleanly to a single semantic role
- named layout primitives: `space`, `radius`, `shadow`, `layer`

The public `theme` should not expose:

- raw color palette values
- raw typography primitives such as font weights or point sizes
- motion primitives yet
- border width primitives yet
- layout constants such as container max-width or nav height (these are site-specific, not brand values)

### Why These Primitives Are Public

`space`, `radius`, `shadow`, and `layer` are broadly useful across apps and tend to be stable in meaning when expressed as named scales. They behave more like layout language than palette internals.

To keep them stable:

- expose named keys such as `xs`, `sm`, `md`, `lg`, `xl`, not numeric implementation keys
- treat them as part of the public API
- allow internal remapping without changing consumer usage

## Semantic Domain Strategy

The initial semantic layer should cover:

- `text`
- `surface`
- `border`
- `icon`
- `action`
- `status`
- `type`
- `layout` internally, where helpful for higher-level semantic sizing and spacing decisions

In addition, `accent` is exposed as a named primitive scale rather than a semantic domain, because it is used decoratively (gradient text, diagram highlights, atmospheric glows) in ways that cannot be cleanly expressed as a single semantic role.

Focus styling should initially be represented through `border.focus` and related action or status tokens. A dedicated public `focus` domain can be introduced later if the product needs a more expressive focus system.

## Theme Shape

The public package should center on a resolved `theme` object backed by CSS custom properties.

Example shape:

```ts
export const theme = {
  text: {
    primary: 'var(--fm-text-primary)',
    secondary: 'var(--fm-text-secondary)',
  },
  surface: {
    canvas: 'var(--fm-surface-canvas)',
    elevated: 'var(--fm-surface-elevated)',
  },
  action: {
    primary: {
      background: 'var(--fm-action-primary-background)',
      text: 'var(--fm-action-primary-text)',
    },
  },
  space: {
    xs: 'var(--fm-space-xs)',  // 0.5rem
    sm: 'var(--fm-space-sm)',  // 1rem
    md: 'var(--fm-space-md)',  // 1.5rem
    lg: 'var(--fm-space-lg)',  // 2rem
    xl: 'var(--fm-space-xl)',  // 3rem
  },
  accent: {
    base: 'var(--fm-accent-base)',
    soft: 'var(--fm-accent-soft)',
    bright: 'var(--fm-accent-bright)',
  },
}
```

## Outputs

A single source of truth should produce both:

- TypeScript runtime exports (`dist/index.js` + `.d.ts`)
- CSS custom properties (`dist/index.css`)

Foundation values should be authored as typed TypeScript objects (not as raw CSS strings) so that the same data can drive additional output formats later. The structure specifically keeps a future Tailwind config/preset generator possible without refactoring the foundation layer.

Later, the same source can also generate:

- Tailwind tokens (theme preset)
- component token inputs
- docs or token references

## Package Boundary

Confirmed public surface:

- `@flowmatrix-ai/brand` → `theme` and public types only (default entrypoint)
- `@flowmatrix-ai/brand/css` → generated CSS custom properties file

No `/internal` entrypoint in v1. The internal boundary is enforced by source layout. An internal entrypoint can be added later without changing the consumer API.

### Export Map

```json
"exports": {
  ".": "./dist/index.js",
  "./css": "./dist/index.css"
}
```

### Package Metadata

```json
{
  "name": "@flowmatrix-ai/brand",
  "version": "0.1.0",
  "type": "module",
  "engines": { "node": ">=24 <25", "npm": ">=11 <12" },
  "files": ["dist"],
  "exports": {
    ".": "./dist/index.js",
    "./css": "./dist/index.css"
  },
  "publishConfig": { "registry": "https://npm.pkg.github.com" }
}
```

Align `engines` with the website Node/npm baseline.

## Publishing

Registry: GitHub Packages (`https://npm.pkg.github.com`).

**Brand repo `.npmrc`:**
```
@flowmatrix-ai:registry=https://npm.pkg.github.com
```

**`publishConfig` in `package.json`:**
```json
{ "registry": "https://npm.pkg.github.com" }
```

**Publish trigger:** push to a tag matching `v*` (e.g. `v0.1.0`).

**Publish workflow permissions:** `contents: read`, `packages: write`.

**Secret name:** `FLOWMATRIX_GITHUB_TOKEN` — must be set in the brand repo for publishing and in any consuming repo's CI for authenticated installs.

**`setup-node` scope:** `@flowmatrix-ai`.

**Consumer `.npmrc`:**
```
@flowmatrix-ai:registry=https://npm.pkg.github.com
```
The consuming repo's CI must set `NODE_AUTH_TOKEN` to `FLOWMATRIX_GITHUB_TOKEN` so `npm ci` can authenticate.

## CSS Variable Prefix

All CSS custom properties emitted by this package use the `--fm-` prefix (e.g. `--fm-text-primary`, `--fm-surface-canvas`, `--fm-accent-base`). This prefix is already established throughout the website codebase and stands for FlowMatrix. It is confirmed as the permanent prefix.

Some CSS variables are emitted without a corresponding TypeScript `theme` token. The font stack is the primary example:

```css
--fm-font-sans: Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

This is a CSS-only constant — it appears in `dist/index.css` but is not exposed in the `theme` JS export. The brand package defines the stack; the consuming site is responsible for loading the actual font (font loading is a deployment concern, not a token concern).

## Recommended Source Layout

```text
src/
  foundations/
    color.ts
    spacing.ts
    typography.ts
    radius.ts
    shadow.ts
    motion.ts
    layer.ts
    border-width.ts
    index.ts
  semantics/
    text.ts
    surface.ts
    border.ts
    icon.ts
    action.ts
    status.ts
    type.ts
    layout.ts
    index.ts
  theme/
    build-theme.ts
    dark.ts
    light.ts
    index.ts
  css/
    build-css-vars.ts
    index.ts
  types/
    foundations.ts
    semantics.ts
    theme.ts
  index.ts
```

## Theming Readiness

The first theme shipped uses dark as the `:root` default. Light is the override, exposed via both `@media (prefers-color-scheme: light)` and `[data-theme='light']`. This matches the website's existing pattern and the FlowMatrix brand identity.

The architecture must assume multiple themes are possible:

- semantics resolve through a theme builder, not hard-coded scattered constants
- CSS variables use themed naming with `--fm-` prefix
- adding a second theme later should not require a consumer API change
