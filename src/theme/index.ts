import { colors } from '../foundations/color.js';
import { spacing } from '../foundations/spacing.js';
import { fontSans } from '../foundations/typography.js';
import { radius } from '../foundations/radius.js';
import { shadow } from '../foundations/shadow.js';

export const themeObj = {
  space: spacing,
  radius,
  shadow,
  accent: {
    base: 'var(--fm-accent-base)',
    soft: 'var(--fm-accent-soft)',
    bright: 'var(--fm-accent-bright)',
  },
};

export const rawValues = {
  colors,
  fontSans,
  radius,
  shadow,
  space: spacing,
};
