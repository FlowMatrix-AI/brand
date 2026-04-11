import { colors } from '../foundations/color.js';
import { spacing } from '../foundations/spacing.js';
import { fontSans } from '../foundations/typography.js';

export const themeObj = {
  space: spacing,
  accent: {
    base: 'var(--fm-accent-base)',
    soft: 'var(--fm-accent-soft)',
    bright: 'var(--fm-accent-bright)',
  },
};

export const rawValues = {
  colors,
  fontSans
};
