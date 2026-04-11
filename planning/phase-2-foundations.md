# Phase 2: Foundations

**Status:** Not started

## Goal

Author the internal raw token scales.

## Deliverables

- color palette and neutrals
- typography primitives
- accent scale (`base`, `soft`, `bright`)
- spacing, radius, shadow, motion, border width, and layer scales
- typed foundation definitions

## Source Values

Extract directly from `website/src/styles/variables.css`. No design invention — this is extraction.

| Token | Dark (`:root`) | Light override |
|---|---|---|
| Gold / accent base | `#d4a84b` | `#9a6c1f` |
| Canvas background | `#050505` | `#f4f5f7` |
| Font stack | `Inter, 'Segoe UI', Roboto, Helvetica Neue, Arial, sans-serif` | (same) |

**Space values:**

| Name | Value |
|---|---|
| `xs` | `0.5rem` |
| `sm` | `1rem` |
| `md` | `1.5rem` |
| `lg` | `2rem` |
| `xl` | `3rem` |

The font stack is emitted as the CSS-only variable `--fm-font-sans` — it has no corresponding JS `theme` token.

## Exit Criteria

- foundations are typed and validated
- naming is consistent
- no application-facing exports rely on raw foundations
