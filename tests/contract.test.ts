/**
 * Token contract regression tests.
 *
 * These tests assert that the public token API has not changed in a
 * breaking way.  Run `npm test` to verify; run `vitest --update-snapshots`
 * to intentionally accept a changed contract (e.g. after a major-version bump).
 */
import { describe, it, expect } from 'vitest';
import { theme } from '../src/index.js';

describe('token contract', () => {
  it('exports the theme object', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
  });

  it('contains all top-level semantic token groups', () => {
    const expectedGroups = [
      'space',
      'radius',
      'shadow',
      'layer',
      'text',
      'surface',
      'border',
      'icon',
      'status',
      'action',
      'type',
      'accent',
    ];
    for (const group of expectedGroups) {
      expect(theme, `missing top-level group: "${group}"`).toHaveProperty(group);
    }
  });

  it('theme-sensitive token groups reference CSS custom properties', () => {
    // These groups are theme-aware and must resolve through CSS variables at runtime.
    // t-shirt size groups (space, radius) and layer use raw values — they are excluded.
    const cssVarGroups = [
      'shadow',
      'text',
      'surface',
      'border',
      'icon',
      'status',
      'action',
      'type',
      'accent',
    ] as const;

    const walk = (obj: Record<string, unknown>, path: string[] = []): void => {
      for (const [key, val] of Object.entries(obj)) {
        const fullPath = [...path, key].join('.');
        if (typeof val === 'string') {
          expect(
            val,
            `${fullPath}: expected a CSS var reference (got "${val}")`
          ).toMatch(/^var\(--fm-/);
        } else if (typeof val === 'object' && val !== null) {
          walk(val as Record<string, unknown>, [...path, key]);
        }
      }
    };

    for (const group of cssVarGroups) {
      walk({ [group]: theme[group] as Record<string, unknown> });
    }
  });

  it('space tokens are raw CSS size values', () => {
    const { space } = theme;
    for (const [key, val] of Object.entries(space)) {
      expect(
        typeof val === 'string' && val.endsWith('rem'),
        `space.${key}: expected a rem value (got "${val}")`
      ).toBe(true);
    }
  });

  it('matches the full token name snapshot', () => {
    // Snapshot covers the complete public API shape.
    // A diff here means a potential breaking change — update intentionally.
    expect(theme).toMatchSnapshot();
  });
});
