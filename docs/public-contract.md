# Public Contract

## Consumer Rule

Application code should consume `theme`.

Application code should not consume raw foundations.

Good:

```ts
theme.text.primary
theme.surface.default
theme.action.primary.background
theme.accent.base
theme.space.md
```

Not allowed as app-facing API:

```ts
color.brand[600]
space[4]
fontSize.sm
```

## Public Domains

The initial public contract includes:

- `theme.text`
- `theme.surface`
- `theme.border`
- `theme.icon`
- `theme.action`
- `theme.status`
- `theme.type`
- `theme.accent`
- `theme.space`
- `theme.radius`
- `theme.shadow`
- `theme.layer`

## Public Primitive Policy

These named primitive domains are public in v1:

- `space` — five named steps: `xs` (0.5rem), `sm` (1rem), `md` (1.5rem), `lg` (2rem), `xl` (3rem)
- `radius`
- `shadow`
- `layer`
- `accent` — three steps: `base`, `soft`, `bright`

These stay internal in v1:

- raw color palette scales
- typography primitives (font sizes are referenced via the `type` domain)
- motion primitives
- border width primitives
- layout constants (container max-width, nav height) — site-specific, not brand values

## Initial v1 Surface

The intended v1 surface is documented in [Theme Contract v1](theme-contract-v1.md).

That surface should be treated as API, especially for names under:

- `text`
- `surface`
- `border`
- `action`
- `status`
- `type`
- `accent`
- `space`
- `radius`
- `shadow`
- `layer`

## Stability Rules

Patch changes:

- changing a raw value while preserving token meaning
- visual refinements to palette mapping, spacing, shadow intensity, or radius values

Minor changes:

- adding new semantic tokens
- adding new named primitive steps when they do not change existing meanings

Major changes:

- renaming a public token
- removing a public token
- changing the meaning of a public token
- changing the public object shape in a breaking way

## Deprecation Rules

When a public token needs replacement:

- keep the old token for at least one deprecation cycle
- document the replacement clearly
- migrate the site before removal
- remove only in a major version

## Naming Rules

Use names that express role and meaning.

Prefer:

- `primary`
- `secondary`
- `muted`
- `default`
- `subtle`
- `strong`
- `elevated`
- `inverse`

Avoid:

- visual adjectives tied to current appearance
- duplicate synonyms for the same idea
- deep nesting when a shallow domain is clear

## Non-Goals For The Public API

The public contract should not include:

- campaign or temporary brand values
- component-specific one-off tokens
- raw implementation details needed only by maintainers
