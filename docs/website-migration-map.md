# Website Migration Map

This document is the reference for Phase 5 (Site Cutover). It maps every current CSS variable in `website/src/styles/variables.css` to its outcome at cutover: replaced by the brand package, kept in the website, or removed.

> **Important distinction:** `variables.css` has two levels of names. The raw primitives (`--color-bg`, `--shadow-soft`, etc.) are defined in the theme blocks. The alias block at the bottom maps those to `--fm-*` names (`--fm-color-bg`, `--fm-shadow-soft`, etc.). **Components consume the alias names.** At cutover, the alias block is deleted — so all component references to the old alias names must be renamed to the new brand contract names. Section 1.5 below is the complete rename table for that operation.

---

## 1. Tokens Replaced By The Brand Package

These currently live in `variables.css` as raw primitives or in the alias block. After cutover the brand package CSS provides the `--fm-*` equivalents and the originals are deleted.

### Color — Semantic

| Current website name | Brand package equivalent | CSS variable name |
|---|---|---|
| `--color-bg` | `theme.surface.canvas` | `--fm-surface-canvas` |
| `--color-bg-soft` | `theme.surface.subtle` | `--fm-surface-subtle` |
| `--color-bg-elevated` | `theme.surface.elevated` | `--fm-surface-elevated` |
| `--color-surface` | `theme.surface.default` | `--fm-surface-default` |
| `--color-surface-soft` | `theme.surface.subtle` | (same as above) |
| `--color-text` | `theme.text.primary` | `--fm-text-primary` |
| `--color-text-muted` | `theme.text.secondary` | `--fm-text-secondary` |
| `--color-text-faint` | `theme.text.muted` | `--fm-text-muted` |
| `--color-border` | `theme.border.default` | `--fm-border-default` |
| `--color-border-strong` | `theme.border.strong` | `--fm-border-strong` |
| `--color-focus-ring` | `theme.border.focus` | `--fm-border-focus` |
| `--color-danger` | `theme.status.danger.text` | `--fm-status-danger-text` |
| `--color-danger-soft` | `theme.status.danger.surface` | `--fm-status-danger-surface` |

### Color — Accent (Gold)

| Current website name | Brand package equivalent | CSS variable name |
|---|---|---|
| `--color-gold` | `theme.accent.base` | `--fm-accent-base` |
| `--color-gold-soft` | `theme.accent.soft` | `--fm-accent-soft` |
| `--color-gold-bright` | `theme.accent.bright` | `--fm-accent-bright` |
| `--color-border-gold` | `theme.border.strong` or `--fm-accent-base` | resolve during Phase 5 |

### Shadow

| Current website name | Brand package equivalent | CSS variable name |
|---|---|---|
| `--shadow-soft` | `theme.shadow.sm` | `--fm-shadow-sm` |
| `--shadow-card-hover` | `theme.shadow.lg` | `--fm-shadow-lg` |
| `--shadow-gold` | (accent glow — website-only) | stays in website |

### Radius

| Current website name | Brand package equivalent | CSS variable name |
|---|---|---|
| `--radius-sm` | `theme.radius.sm` | `--fm-radius-sm` |
| `--radius-md` | `theme.radius.md` | `--fm-radius-md` |
| `--radius-lg` | `theme.radius.lg` | `--fm-radius-lg` |
| `--radius-xl` | `theme.radius.xl` | `--fm-radius-xl` |

### Space

Named steps replace all numeric `--space-N` references across components and pages (~150 occurrences). The mapping is:

| Current website name | Value | Brand package equivalent | CSS variable name |
|---|---|---|---|
| `--space-1` | 0.25rem | *(no equivalent — sparse usage, inline or remove)* | — |
| `--space-2` | 0.5rem | `theme.space.xs` | `--fm-space-xs` |
| `--space-3` | 0.75rem | *(no equivalent — sparse usage, round to xs or sm)* | — |
| `--space-4` | 1rem | `theme.space.sm` | `--fm-space-sm` |
| `--space-5` | 1.25rem | *(no equivalent — sparse usage, round to sm or md)* | — |
| `--space-6` | 1.5rem | `theme.space.md` | `--fm-space-md` |
| `--space-8` | 2rem | `theme.space.lg` | `--fm-space-lg` |
| `--space-10` | 2.5rem | *(no equivalent — sparse usage, round to lg)* | — |
| `--space-12` | 3rem | `theme.space.xl` | `--fm-space-xl` |
| `--space-14` | 3.5rem | *(no equivalent — sparse usage, round to xl)* | — |
| `--space-16` | 4rem | *(no equivalent — sparse usage, round to xl)* | — |

> For unmapped steps (`--space-1`, `-3`, `-5`, `-10`, `-14`, `-16`): each has sparse usage. During cutover, inspect each occurrence and either round to the nearest named step or inline the hardcoded `rem` value.

### Typography (CSS-only, no JS token)

| Current website name | Brand package equivalent |
|---|---|
| `--font-sans` (implicit — no current CSS var) | `--fm-font-sans` (emitted by package) |

---

## 1.5 Component Source Rename Table

This is the complete list of `--fm-*` variable names that **component and page code currently uses** and the brand contract name each must be updated to. These are the actual find-and-replace operations needed in Phase 5.

> Names already matching the brand contract are not listed here — they require no change.

### Color — Text and Surface

| Current alias (in components) | Brand contract name | Notes |
|---|---|---|
| `--fm-color-bg` | `--fm-surface-canvas` | |
| `--fm-color-bg-soft` | `--fm-surface-subtle` | |
| `--fm-color-bg-elevated` | `--fm-surface-elevated` | |
| `--fm-color-surface` | `--fm-surface-default` | |
| `--fm-color-text` | `--fm-text-primary` | |
| `--fm-color-text-muted` | `--fm-text-secondary` | |
| `--fm-color-text-faint` | `--fm-text-muted` | |

### Color — Accent / Gold

| Current alias (in components) | Brand contract name | Notes |
|---|---|---|
| `--fm-color-gold` | `--fm-accent-base` | |
| `--fm-color-gold-soft` | `--fm-accent-soft` | |
| `--fm-color-gold-bright` | `--fm-accent-bright` | |

### Color — Status and Focus

| Current alias (in components) | Brand contract name | Notes |
|---|---|---|
| `--fm-color-danger` | `--fm-status-danger-text` | |
| `--fm-color-danger-soft` | `--fm-status-danger-surface` | |
| `--fm-focus-ring` | `--fm-border-focus` | |
| `--fm-focus-ring-glow` | stays as `--fm-focus-ring-glow` | website-only; redefine in site CSS |

### Shadow

| Current alias (in components) | Brand contract name | Notes |
|---|---|---|
| `--fm-shadow-soft` | `--fm-shadow-sm` | |
| `--fm-shadow-card-hover` | `--fm-shadow-lg` | |
| `--fm-shadow-gold` | stays as `--fm-shadow-gold` | website-only; redefine in site CSS |

### Space

| Current alias (in components) | Brand contract name | Notes |
|---|---|---|
| `--fm-space-1` | inline `0.25rem` | no named step equivalent; sparse usage |
| `--fm-space-2` | `--fm-space-xs` | |
| `--fm-space-3` | inline `0.75rem` or round | sparse usage |
| `--fm-space-4` | `--fm-space-sm` | |
| `--fm-space-5` | inline `1.25rem` or round | sparse usage |
| `--fm-space-6` | `--fm-space-md` | |
| `--fm-space-8` | `--fm-space-lg` | |
| `--fm-space-10` | inline `2.5rem` or round to lg | sparse usage |
| `--fm-space-12` | `--fm-space-xl` | |
| `--fm-space-14` | inline `3.5rem` or round to xl | sparse usage |
| `--fm-space-16` | inline `4rem` or round to xl | sparse usage |

### Layout Constants

These stay in the website forever but the alias names must remain resolvable.

| Current alias (in components) | Action at cutover |
|---|---|
| `--fm-layout-container-max` | redefine directly in website `:root` (remove reliance on `--container-max` intermediary) |
| `--fm-layout-nav-height` | redefine directly in website `:root` with responsive overrides |

### No Change Needed

These alias names already match the brand contract output and require no component edits:

- `--fm-border-default`
- `--fm-border-strong`
- `--fm-radius-sm`, `--fm-radius-md`, `--fm-radius-lg`, `--fm-radius-xl`
- `--fm-font-sans`
- `--fm-type-body-line-height`
- All `--fm-alpha-*`, `--fm-body-*`, `--fm-surface-*`, `--fm-nav-*`, `--fm-footer-*`, `--fm-home-*`, `--fm-hero-*`, `--fm-legal-*`, `--fm-grain-*`, `--fm-pulse-*`, `--fm-color-button-*` (website-specific, redefined in site CSS)

---

## 2. Tokens Deleted At Cutover (No Replacement Needed)

These are in the alias block at the bottom of `variables.css`. They exist only to bridge old names to `--fm-*` names and become redundant once the brand package provides `--fm-*` directly.

- The entire `/* Brand contract aliases */` `:root` block is deleted.

Additionally, the raw primitive definitions (`--color-*`, `--radius-*`, `--shadow-*`, `--space-*`, `--container-max`, `--nav-height`) that are covered by the brand package are deleted. Only those in "Tokens Staying In Website" below are kept.

---

## 3. Tokens Staying In Website Forever

These are site-specific and are never part of the brand package.

### Layout Constants

```css
--container-max: 1120px;
--nav-height: 72px;   /* plus responsive overrides at 980px and 640px */
```

### Alpha / Overlay Layer

The `--fm-alpha-*` tokens (surface, divider, overlay variants used for glassmorphism) stay in the website for v1. They may be candidates for a future brand package alpha domain, but are not in the v1 contract.

### Component-Specific Tokens

These encoding visual personality specific to this site's design. Approximately 80 tokens. They stay in `variables.css` below the brand package import forever unless a specific decision is made to extract them.

**Categories:**

- `--fm-color-button-*` — button variant colors
- `--fm-body-*` — body background pattern and glow
- `--fm-surface-gradient-*`, `--fm-surface-highlight-*` — glassmorphism surfaces
- `--fm-nav-*` — nav bar accents and blur
- `--fm-footer-*` — footer background and border
- `--fm-home-*` — homepage-specific layout and glow
- `--fm-hero-*` — hero section diagram nodes, gradients, glow effects
- `--fm-legal-*` — legal page spacing and alignment
- `--fm-grain-*` — grain overlay intensity
- `--fm-pulse-*` — animated pulse ring variables

---

## 4. Post-Cutover `variables.css` Shape

After cutover the file looks like:

```css
/* Brand package — all --fm-* semantic/primitive tokens */
@import '@flowmatrix-ai/brand/css';

/* ─── Layout constants ──────────────────────────────── */
:root {
  --container-max: 1120px;
  --nav-height: 72px;

  /* --fm- aliases keep base.css working without edits */
  --fm-layout-container-max: 1120px;
  --fm-layout-nav-height: 72px;
}

@media (max-width: 980px) {
  :root { --nav-height: 68px; --fm-layout-nav-height: 68px; }
}

@media (max-width: 640px) {
  :root { --nav-height: 64px; --fm-layout-nav-height: 64px; }
}

/* ─── Alpha / overlay layer ─────────────────────────── */
:root {
  --fm-alpha-surface-soft: ...;
  /* ... */
}

/* ─── Component-specific tokens ─────────────────────── */
:root {
  --fm-color-button-primary-bg: var(--fm-accent-base);
  /* ... ~80 tokens referencing --fm-* from the brand package above */
}
```
