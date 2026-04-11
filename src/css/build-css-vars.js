import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { themeObj, rawValues } from '../../dist/theme/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const css = `
/* auto-generated css */
:root {
  /* Typography */
  --fm-font-sans: ${rawValues.fontSans};

  /* Primitives */
  --fm-space-xs: ${themeObj.space.xs};
  --fm-space-sm: ${themeObj.space.sm};
  --fm-space-md: ${themeObj.space.md};
  --fm-space-lg: ${themeObj.space.lg};
  --fm-space-xl: ${themeObj.space.xl};

  --fm-radius-sm: ${themeObj.radius.sm};
  --fm-radius-md: ${themeObj.radius.md};
  --fm-radius-lg: ${themeObj.radius.lg};
  --fm-radius-xl: ${themeObj.radius.xl};
  --fm-radius-pill: ${themeObj.radius.pill};

  --fm-layer-base: ${themeObj.layer.base};
  --fm-layer-dropdown: ${themeObj.layer.dropdown};
  --fm-layer-overlay: ${themeObj.layer.overlay};
  --fm-layer-modal: ${themeObj.layer.modal};
  --fm-layer-toast: ${themeObj.layer.toast};
  --fm-layer-tooltip: ${themeObj.layer.tooltip};

  /* Base & Accent - Dark Mode */
  --fm-accent-base: ${rawValues.colors.gold.dark};
  --fm-accent-soft: #f0d68a;
  --fm-accent-bright: #f6e3a5;

  --fm-surface-canvas: ${rawValues.colors.canvas.dark};
  --fm-surface-default: #111113;
  --fm-surface-subtle: #0d0d0f;
  --fm-surface-elevated: #141418;
  --fm-surface-inverse: ${rawValues.colors.neutral.dark};

  --fm-text-primary: #f4f4f5;
  --fm-text-secondary: #9b9ca1;
  --fm-text-muted: #7f8086;
  --fm-text-inverse: #131722;

  --fm-border-default: rgba(255, 255, 255, 0.12);
  --fm-border-subtle: rgba(255, 255, 255, 0.06);
  --fm-border-strong: rgba(255, 255, 255, 0.22);
  --fm-border-focus: #ffffff;

  --fm-icon-primary: #f4f4f5;
  --fm-icon-secondary: #9b9ca1;
  --fm-icon-inverse: #131722;

  --fm-status-danger-text: #f87171;
  --fm-status-danger-surface: #fca5a5;
  --fm-status-danger-border: #ef4444;
  --fm-status-success-text: #34d399;
  --fm-status-success-surface: #064e3b;
  --fm-status-success-border: #059669;
  --fm-status-warning-text: #fbbf24;
  --fm-status-warning-surface: #78350f;
  --fm-status-warning-border: #d97706;

  --fm-shadow-sm: ${rawValues.shadow.soft.dark};
  --fm-shadow-md: ${rawValues.shadow.gold.dark};
  --fm-shadow-lg: ${rawValues.shadow.cardHover.dark};

  /* Type Defaults (Contract fulfillment) */
  --fm-type-body-size: 1rem;
  --fm-type-body-lineHeight: 1.5;
  --fm-type-bodySm-size: 0.875rem;
  --fm-type-bodySm-lineHeight: 1.4;
  --fm-type-label-size: 0.875rem;
  --fm-type-label-lineHeight: 1.2;
  --fm-type-labelStrong-size: 0.875rem;
  --fm-type-labelStrong-lineHeight: 1.2;
  --fm-type-caption-size: 0.75rem;
  --fm-type-caption-lineHeight: 1.4;
  --fm-type-headingSm-size: 1.25rem;
  --fm-type-headingSm-lineHeight: 1.3;
  --fm-type-headingMd-size: 1.5rem;
  --fm-type-headingMd-lineHeight: 1.2;
  --fm-type-headingLg-size: 2rem;
  --fm-type-headingLg-lineHeight: 1.1;
  --fm-type-display-size: 3rem;
  --fm-type-display-lineHeight: 1.05;

  /* Action Defaults */
  --fm-action-primary-background: ${rawValues.colors.gold.dark};
  --fm-action-primary-backgroundHover: #f0d68a;
  --fm-action-primary-backgroundActive: #f6e3a5;
  --fm-action-primary-text: #0b0b0c;
  --fm-action-primary-border: transparent;
  
  --fm-action-secondary-background: rgba(255, 255, 255, 0.07);
  --fm-action-secondary-backgroundHover: rgba(255, 255, 255, 0.12);
  --fm-action-secondary-backgroundActive: rgba(255, 255, 255, 0.16);
  --fm-action-secondary-text: #f4f4f5;
  --fm-action-secondary-border: rgba(255, 255, 255, 0.3);

  --fm-action-tertiary-background: transparent;
  --fm-action-tertiary-backgroundHover: rgba(255, 255, 255, 0.04);
  --fm-action-tertiary-backgroundActive: rgba(255, 255, 255, 0.08);
  --fm-action-tertiary-text: #9b9ca1;
  --fm-action-tertiary-border: transparent;

  --fm-action-danger-background: #f87171;
  --fm-action-danger-backgroundHover: #fca5a5;
  --fm-action-danger-backgroundActive: #fecaca;
  --fm-action-danger-text: #111113;
  --fm-action-danger-border: transparent;
}

@media (prefers-color-scheme: light) {
  :root {
    --fm-accent-base: ${rawValues.colors.gold.light};
    --fm-accent-soft: #7d5816;
    --fm-accent-bright: #64470f;

    --fm-surface-canvas: ${rawValues.colors.canvas.light};
    --fm-surface-default: #ffffff;
    --fm-surface-subtle: #f7f8fb;
    --fm-surface-elevated: #ffffff;
    --fm-surface-inverse: #131722;

    --fm-text-primary: #131722;
    --fm-text-secondary: #475163;
    --fm-text-muted: #626d7f;
    --fm-text-inverse: #ffffff;

    --fm-border-default: rgba(19, 23, 34, 0.16);
    --fm-border-subtle: rgba(19, 23, 34, 0.08);
    --fm-border-strong: rgba(19, 23, 34, 0.24);
    --fm-border-focus: #111827;

    --fm-icon-primary: #131722;
    --fm-icon-secondary: #475163;
    --fm-icon-inverse: #ffffff;

    --fm-status-danger-text: #c43f3f;
    --fm-status-danger-surface: #e25656;
    --fm-status-danger-border: #991b1b;
    --fm-status-success-text: #059669;
    --fm-status-success-surface: #d1fae5;
    --fm-status-success-border: #10b981;
    --fm-status-warning-text: #d97706;
    --fm-status-warning-surface: #fef3c7;
    --fm-status-warning-border: #f59e0b;

    --fm-shadow-sm: ${rawValues.shadow.soft.light};
    --fm-shadow-md: ${rawValues.shadow.gold.light};
    --fm-shadow-lg: ${rawValues.shadow.cardHover.light};
  }
}

html[data-theme='light'] {
  --fm-accent-base: ${rawValues.colors.gold.light};
  --fm-accent-soft: #7d5816;
  --fm-accent-bright: #64470f;

  --fm-surface-canvas: ${rawValues.colors.canvas.light};
  --fm-surface-default: #ffffff;
  --fm-surface-subtle: #f7f8fb;
  --fm-surface-elevated: #ffffff;
  --fm-surface-inverse: #131722;

  --fm-text-primary: #131722;
  --fm-text-secondary: #475163;
  --fm-text-muted: #626d7f;
  --fm-text-inverse: #ffffff;

  --fm-border-default: rgba(19, 23, 34, 0.16);
  --fm-border-subtle: rgba(19, 23, 34, 0.08);
  --fm-border-strong: rgba(19, 23, 34, 0.24);
  --fm-border-focus: #111827;

  --fm-icon-primary: #131722;
  --fm-icon-secondary: #475163;
  --fm-icon-inverse: #ffffff;

  --fm-status-danger-text: #c43f3f;
  --fm-status-danger-surface: #e25656;
  --fm-status-danger-border: #991b1b;
  --fm-status-success-text: #059669;
  --fm-status-success-surface: #d1fae5;
  --fm-status-success-border: #10b981;
  --fm-status-warning-text: #d97706;
  --fm-status-warning-surface: #fef3c7;
  --fm-status-warning-border: #f59e0b;

  --fm-shadow-sm: ${rawValues.shadow.soft.light};
  --fm-shadow-md: ${rawValues.shadow.gold.light};
  --fm-shadow-lg: ${rawValues.shadow.cardHover.light};
}
`;

const outDir = path.resolve(__dirname, '../../dist');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.resolve(outDir, 'index.css'), css.trim() + '\n');
console.log('CSS built successfully to dist/index.css');
