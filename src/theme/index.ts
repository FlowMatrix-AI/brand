import { colors } from '../foundations/color.js';
import { spacing } from '../foundations/spacing.js';
import { fontSans } from '../foundations/typography.js';
import { radius } from '../foundations/radius.js';
import { shadow } from '../foundations/shadow.js';
import { layer } from '../foundations/layer.js';

export const themeObj = {
  space: spacing,
  radius,
  shadow: {
    sm: 'var(--fm-shadow-sm)',
    md: 'var(--fm-shadow-md)',
    lg: 'var(--fm-shadow-lg)',
  },
  layer,
  text: {
    primary: 'var(--fm-text-primary)',
    secondary: 'var(--fm-text-secondary)',
    muted: 'var(--fm-text-muted)',
    inverse: 'var(--fm-text-inverse)',
  },
  surface: {
    canvas: 'var(--fm-surface-canvas)',
    default: 'var(--fm-surface-default)',
    subtle: 'var(--fm-surface-subtle)',
    elevated: 'var(--fm-surface-elevated)',
    inverse: 'var(--fm-surface-inverse)',
  },
  border: {
    default: 'var(--fm-border-default)',
    subtle: 'var(--fm-border-subtle)',
    strong: 'var(--fm-border-strong)',
    focus: 'var(--fm-border-focus)',
  },
  icon: {
    primary: 'var(--fm-icon-primary)',
    secondary: 'var(--fm-icon-secondary)',
    inverse: 'var(--fm-icon-inverse)',
  },
  status: {
    success: {
      text: 'var(--fm-status-success-text)',
      surface: 'var(--fm-status-success-surface)',
      border: 'var(--fm-status-success-border)',
    },
    warning: {
      text: 'var(--fm-status-warning-text)',
      surface: 'var(--fm-status-warning-surface)',
      border: 'var(--fm-status-warning-border)',
    },
    danger: {
      text: 'var(--fm-status-danger-text)',
      surface: 'var(--fm-status-danger-surface)',
      border: 'var(--fm-status-danger-border)',
    },
  },
  action: {
    primary: {
      background: 'var(--fm-action-primary-background)',
      backgroundHover: 'var(--fm-action-primary-backgroundHover)',
      backgroundActive: 'var(--fm-action-primary-backgroundActive)',
      text: 'var(--fm-action-primary-text)',
      border: 'var(--fm-action-primary-border)',
    },
    secondary: {
      background: 'var(--fm-action-secondary-background)',
      backgroundHover: 'var(--fm-action-secondary-backgroundHover)',
      backgroundActive: 'var(--fm-action-secondary-backgroundActive)',
      text: 'var(--fm-action-secondary-text)',
      border: 'var(--fm-action-secondary-border)',
    },
    tertiary: {
      background: 'var(--fm-action-tertiary-background)',
      backgroundHover: 'var(--fm-action-tertiary-backgroundHover)',
      backgroundActive: 'var(--fm-action-tertiary-backgroundActive)',
      text: 'var(--fm-action-tertiary-text)',
      border: 'var(--fm-action-tertiary-border)',
    },
    danger: {
      background: 'var(--fm-action-danger-background)',
      backgroundHover: 'var(--fm-action-danger-backgroundHover)',
      backgroundActive: 'var(--fm-action-danger-backgroundActive)',
      text: 'var(--fm-action-danger-text)',
      border: 'var(--fm-action-danger-border)',
    },
  },
  type: {
    body: { size: 'var(--fm-type-body-size)', lineHeight: 'var(--fm-type-body-lineHeight)' },
    bodySm: { size: 'var(--fm-type-bodySm-size)', lineHeight: 'var(--fm-type-bodySm-lineHeight)' },
    label: { size: 'var(--fm-type-label-size)', lineHeight: 'var(--fm-type-label-lineHeight)' },
    labelStrong: { size: 'var(--fm-type-labelStrong-size)', lineHeight: 'var(--fm-type-labelStrong-lineHeight)' },
    caption: { size: 'var(--fm-type-caption-size)', lineHeight: 'var(--fm-type-caption-lineHeight)' },
    headingSm: { size: 'var(--fm-type-headingSm-size)', lineHeight: 'var(--fm-type-headingSm-lineHeight)' },
    headingMd: { size: 'var(--fm-type-headingMd-size)', lineHeight: 'var(--fm-type-headingMd-lineHeight)' },
    headingLg: { size: 'var(--fm-type-headingLg-size)', lineHeight: 'var(--fm-type-headingLg-lineHeight)' },
    display: { size: 'var(--fm-type-display-size)', lineHeight: 'var(--fm-type-display-lineHeight)' },
  },
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
  layer,
};
