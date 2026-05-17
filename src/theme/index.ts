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
  semantic: {
    dark: {
      accent: { soft: '#f0d68a', bright: '#f6e3a5' },
      surface: {
        default: '#111113',
        subtle: '#0d0d0f',
        elevated: '#141418',
        inverse: colors.neutral.dark,
      },
      text: {
        primary: '#f4f4f5',
        secondary: '#9b9ca1',
        muted: '#7f8086',
        inverse: '#131722',
      },
      border: {
        default: 'rgba(255, 255, 255, 0.12)',
        subtle: 'rgba(255, 255, 255, 0.06)',
        strong: 'rgba(255, 255, 255, 0.22)',
        focus: '#ffffff',
      },
      icon: {
        primary: '#f4f4f5',
        secondary: '#9b9ca1',
        inverse: '#131722',
      },
      status: {
        danger: { text: '#f87171', surface: '#fca5a5', border: '#ef4444' },
        success: { text: '#34d399', surface: '#064e3b', border: '#059669' },
        warning: { text: '#fbbf24', surface: '#78350f', border: '#d97706' },
      },
      action: {
        primary: {
          background: colors.gold.dark,
          backgroundHover: '#f0d68a',
          backgroundActive: '#f6e3a5',
          text: '#0b0b0c',
          border: 'transparent',
        },
        secondary: {
          background: 'rgba(255, 255, 255, 0.07)',
          backgroundHover: 'rgba(255, 255, 255, 0.12)',
          backgroundActive: 'rgba(255, 255, 255, 0.16)',
          text: '#f4f4f5',
          border: 'rgba(255, 255, 255, 0.3)',
        },
        tertiary: {
          background: 'transparent',
          backgroundHover: 'rgba(255, 255, 255, 0.04)',
          backgroundActive: 'rgba(255, 255, 255, 0.08)',
          text: '#9b9ca1',
          border: 'transparent',
        },
        danger: {
          background: '#f87171',
          backgroundHover: '#fca5a5',
          backgroundActive: '#fecaca',
          text: '#111113',
          border: 'transparent',
        },
      },
    },
    light: {
      accent: { soft: '#7d5816', bright: '#64470f' },
      surface: {
        default: '#ffffff',
        subtle: '#f7f8fb',
        elevated: '#ffffff',
        inverse: '#131722',
      },
      text: {
        primary: '#131722',
        secondary: '#475163',
        muted: '#626d7f',
        inverse: '#ffffff',
      },
      border: {
        default: 'rgba(19, 23, 34, 0.16)',
        subtle: 'rgba(19, 23, 34, 0.08)',
        strong: 'rgba(19, 23, 34, 0.24)',
        focus: '#111827',
      },
      icon: {
        primary: '#131722',
        secondary: '#475163',
        inverse: '#ffffff',
      },
      status: {
        danger: { text: '#c43f3f', surface: '#e25656', border: '#991b1b' },
        success: { text: '#059669', surface: '#d1fae5', border: '#10b981' },
        warning: { text: '#d97706', surface: '#fef3c7', border: '#f59e0b' },
      },
      action: {
        primary: {
          background: colors.gold.light,
          backgroundHover: '#7d5816',
          backgroundActive: '#64470f',
          text: '#ffffff',
          border: 'transparent',
        },
        secondary: {
          background: 'rgba(19, 23, 34, 0.035)',
          backgroundHover: 'rgba(19, 23, 34, 0.07)',
          backgroundActive: 'rgba(19, 23, 34, 0.11)',
          text: '#131722',
          border: 'rgba(19, 23, 34, 0.28)',
        },
        tertiary: {
          background: 'transparent',
          backgroundHover: 'rgba(19, 23, 34, 0.04)',
          backgroundActive: 'rgba(19, 23, 34, 0.08)',
          text: '#475163',
          border: 'transparent',
        },
        danger: {
          background: '#c43f3f',
          backgroundHover: '#e25656',
          backgroundActive: '#ef4444',
          text: '#ffffff',
          border: 'transparent',
        },
      },
    },
    type: {
      body: { size: '1rem', lineHeight: '1.5' },
      bodySm: { size: '0.875rem', lineHeight: '1.4' },
      label: { size: '0.875rem', lineHeight: '1.2' },
      labelStrong: { size: '0.875rem', lineHeight: '1.2' },
      caption: { size: '0.75rem', lineHeight: '1.4' },
      headingSm: { size: '1.25rem', lineHeight: '1.3' },
      headingMd: { size: '1.5rem', lineHeight: '1.2' },
      headingLg: { size: '2rem', lineHeight: '1.1' },
      display: { size: '3rem', lineHeight: '1.05' },
    },
  },
};
