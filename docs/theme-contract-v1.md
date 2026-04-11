# Theme Contract v1

## Purpose

This document captures the intended initial public surface for `theme`. It is the concrete contract that application code should be able to rely on during the first implementation phase.

## Theme Domains

### Text

```ts
theme.text.primary
theme.text.secondary
theme.text.muted
theme.text.inverse
```

### Surface

```ts
theme.surface.canvas
theme.surface.default
theme.surface.subtle
theme.surface.elevated
theme.surface.inverse
```

### Border

```ts
theme.border.default
theme.border.subtle
theme.border.strong
theme.border.focus
```

### Icon

```ts
theme.icon.primary
theme.icon.secondary
theme.icon.inverse
```

### Status

```ts
theme.status.success.text
theme.status.success.surface
theme.status.success.border
theme.status.warning.text
theme.status.warning.surface
theme.status.warning.border
theme.status.danger.text
theme.status.danger.surface
theme.status.danger.border
```

### Action

```ts
theme.action.primary.background
theme.action.primary.backgroundHover
theme.action.primary.backgroundActive
theme.action.primary.text
theme.action.primary.border

theme.action.secondary.background
theme.action.secondary.backgroundHover
theme.action.secondary.backgroundActive
theme.action.secondary.text
theme.action.secondary.border

theme.action.tertiary.background
theme.action.tertiary.backgroundHover
theme.action.tertiary.backgroundActive
theme.action.tertiary.text
theme.action.tertiary.border

theme.action.danger.background
theme.action.danger.backgroundHover
theme.action.danger.backgroundActive
theme.action.danger.text
theme.action.danger.border
```

### Type

```ts
theme.type.body
theme.type.bodySm
theme.type.label
theme.type.labelStrong
theme.type.caption
theme.type.headingSm
theme.type.headingMd
theme.type.headingLg
theme.type.display
```

### Public Named Primitives

```ts
theme.space.xs
theme.space.sm
theme.space.md
theme.space.lg
theme.space.xl

theme.radius.sm
theme.radius.md
theme.radius.lg
theme.radius.xl
theme.radius.pill

theme.shadow.sm
theme.shadow.md
theme.shadow.lg

theme.layer.base
theme.layer.dropdown
theme.layer.overlay
theme.layer.modal
theme.layer.toast
theme.layer.tooltip
```

## Deliberate Omissions In v1

These are intentionally not public in the first contract:

- raw color scales
- typography primitives such as raw font sizes and weights
- motion primitives
- border width primitives
- component tokens

## Notes

- `border.focus` covers the initial focus styling need without requiring a separate public `focus` namespace yet.
- The exact raw values can evolve as long as token meaning remains stable.
- Additive tokens are preferred over renames.
