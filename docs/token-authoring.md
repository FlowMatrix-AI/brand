# Token Authoring

## Internal Domains

Foundations should include:

- color
- typography
- space
- radius
- shadow
- motion
- borderWidth
- layer

Semantics should include:

- text
- surface
- border
- icon
- action
- status
- type
- layout
- focus if needed by the theme contract

## Authoring Flow

1. Define or adjust a foundation value.
2. Map semantics from that foundation.
3. Resolve the public `theme` object.
4. Generate CSS custom properties from the same data.
5. Update docs when the public contract changes.

## Authoring Rules

- foundations are internal implementation substrate
- semantics are the stable contract layer
- do not add component-specific tokens to the global semantic layer unless they are clearly cross-system
- keep naming shallow and obvious
- prefer additive changes over renames
- avoid creating multiple words for the same concept
- if a token expresses a component-specific concern, prefer deriving it later in a component layer

## Recommended Starting Surface

Start with enough coverage for the site MVP:

- text: `primary`, `secondary`, `muted`, `inverse`
- surface: `canvas`, `default`, `subtle`, `elevated`, `inverse`
- border: `default`, `subtle`, `strong`, `focus`
- icon: `primary`, `secondary`, `inverse`
- status: success, warning, danger
- action: `primary`, `secondary`, `tertiary`, `danger`
- type: `body`, `label`, `headingSm`, `headingMd`, `headingLg`
- space: `xs`, `sm`, `md`, `lg`, `xl`
- radius: `sm`, `md`, `lg`, `xl`, `pill`
- shadow: `sm`, `md`, `lg`
- layer: `base`, `dropdown`, `overlay`, `modal`, `toast`, `tooltip`

## Change Review Checklist

Before adding or changing a token, ask:

- is this meaning-based or just appearance-based?
- does app code need this directly?
- is this cross-app and likely to stay stable?
- can this be derived later at the component layer instead?
- does the name stay valid if the visuals change?
- is this an additive change, or does it risk a breaking rename or meaning shift?
