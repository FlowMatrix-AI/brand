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
- named layout primitives: `space`, `radius`, `shadow`, `layer`

The public `theme` should not expose:

- raw color palette values
- raw typography primitives such as font weights or point sizes
- motion primitives yet
- border width primitives yet

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
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
}
```

## Outputs

A single source of truth should produce both:

- TypeScript runtime exports
- CSS custom properties

Later, the same source can also generate:

- Tailwind tokens
- component token inputs
- docs or token references

## Package Boundary

Recommended public surface:

- `@flowmatrix/brand` -> `theme` and public types only

Recommended internal authoring surface:

- `@flowmatrix/brand/internal` -> foundations, semantic maps, builders, and generation utilities

If a separate internal entrypoint is not created immediately, the repo should still be organized so that boundary is easy to add without refactoring.

## Recommended Source Layout

A clean package structure should look like this:

```text
packages/branding/
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

We should ship one light theme first, but the architecture should assume multiple themes are possible.

That means:

- semantics resolve through a theme builder, not hard-coded scattered constants
- CSS variables use theme-scoped naming
- adding `dark` or client-specific themes later should not require a consumer API change
