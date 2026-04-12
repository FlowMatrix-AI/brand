# Deprecation Guidance

When a token must be renamed or removed, use the alias shim pattern to avoid a hard break
for existing consumers.

---

## The alias shim pattern

Rather than deleting the old name immediately, introduce the new name and keep the old
one as a forwarding alias for exactly one minor version.

### Step 1 — Add the new token, keep the old one

In `variables.css` (or the relevant CSS file in the brand package):

```css
/* NEW canonical name */
--fm-accent-soft: var(--fm-indigo-300);

/* DEPRECATED — alias for old name; remove in vX.0.0 */
--fm-accent-base-soft: var(--fm-accent-soft);
```

In `src/theme/index.ts` (TypeScript contract), keep the old key and mark it:

```typescript
export const themeObj = {
  accent: {
    soft: 'var(--fm-accent-soft)',
    /** @deprecated use `accent.soft` — will be removed in vX.0.0 */
    baseSoft: 'var(--fm-accent-base-soft)',
  },
};
```

### Step 2 — Document in CHANGELOG

Add an entry under `[Unreleased]` (or the next minor version being worked):

```markdown
### Deprecated
- `theme.accent.baseSoft` / `--fm-accent-base-soft` — use `theme.accent.soft` instead.
  Alias will be removed in v1.0.0.
```

### Step 3 — Track in this file

Add the deprecation to the table below.

### Step 4 — Remove on the next major

On the major bump:
1. Delete old CSS custom property and TypeScript key
2. Move from "Deprecated" to "Removed" in CHANGELOG

---

## Active deprecations

_None at this time._

| Deprecated token | Replacement | Deprecated in | Removal target |
|---|---|---|---|
| — | — | — | — |

---

## Website-side alias shims (known consumers)

The website's `src/styles/variables.css` currently carries these shims to bridge the gap
between old component references and canonical brand token names.  These should be cleaned
up in the component layer before v1.0.0 of this package.

| Old name (shim) | Canonical brand token | File |
|---|---|---|
| `--fm-accent-base-soft` | `--fm-accent-soft` | variables.css |
| `--fm-accent-base-bright` | `--fm-accent-bright` | variables.css |
| `--fm-accent-muted` | `--fm-accent-soft` | variables.css |
| `--fm-interactive-ring` | `--fm-border-focus` | variables.css |
| `--fm-status-danger-text` with RGBA | 直接 CSS value | variables.css |

Once the website components are migrated to the canonical names, these rows can be removed
from `variables.css` and struck from this table.
