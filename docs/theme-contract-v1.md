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

Each type token exposes two properties: `size` and `lineHeight`. Font weight is not tokenized — components control weight contextually.

```ts
theme.type.body.size
theme.type.body.lineHeight

theme.type.bodySm.size
theme.type.bodySm.lineHeight

theme.type.label.size
theme.type.label.lineHeight

theme.type.labelStrong.size
theme.type.labelStrong.lineHeight

theme.type.caption.size
theme.type.caption.lineHeight

theme.type.headingSm.size
theme.type.headingSm.lineHeight

theme.type.headingMd.size
theme.type.headingMd.lineHeight

theme.type.headingLg.size
theme.type.headingLg.lineHeight

theme.type.display.size
theme.type.display.lineHeight
```

### Accent

```ts
theme.accent.base
theme.accent.soft
theme.accent.bright
```

### Public Named Primitives

```ts
// Space — five named semantic steps
theme.space.xs   // 0.5rem
theme.space.sm   // 1rem
theme.space.md   // 1.5rem
theme.space.lg   // 2rem
theme.space.xl   // 3rem

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
- font weight (components control weight contextually; it is not a token concern)
- raw typography primitives beyond what is exposed in `type.*.size` and `type.*.lineHeight`
- motion primitives
- border width primitives
- component tokens
- layout constants (container max-width, nav height) — site-specific constraints, not brand values

## Notes

- `border.focus` covers the initial focus styling need without requiring a separate public `focus` namespace yet.
- The exact raw values can evolve as long as token meaning remains stable.
- Additive tokens are preferred over renames.
