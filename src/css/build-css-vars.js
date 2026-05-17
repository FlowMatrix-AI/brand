import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { themeObj, rawValues } from '../../dist/theme/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const d = rawValues.semantic.dark;
const l = rawValues.semantic.light;
const t = rawValues.semantic.type;

function colorBlock(m, i = '  ') {
  const gold = m === d ? rawValues.colors.gold.dark : rawValues.colors.gold.light;
  const canvas = m === d ? rawValues.colors.canvas.dark : rawValues.colors.canvas.light;
  const shadowSoft = m === d ? rawValues.shadow.soft.dark : rawValues.shadow.soft.light;
  const shadowGold = m === d ? rawValues.shadow.gold.dark : rawValues.shadow.gold.light;
  const shadowHover = m === d ? rawValues.shadow.cardHover.dark : rawValues.shadow.cardHover.light;

  return `${i}--fm-accent-base: ${gold};
${i}--fm-accent-soft: ${m.accent.soft};
${i}--fm-accent-bright: ${m.accent.bright};

${i}--fm-surface-canvas: ${canvas};
${i}--fm-surface-default: ${m.surface.default};
${i}--fm-surface-subtle: ${m.surface.subtle};
${i}--fm-surface-elevated: ${m.surface.elevated};
${i}--fm-surface-inverse: ${m.surface.inverse};

${i}--fm-text-primary: ${m.text.primary};
${i}--fm-text-secondary: ${m.text.secondary};
${i}--fm-text-muted: ${m.text.muted};
${i}--fm-text-inverse: ${m.text.inverse};

${i}--fm-border-default: ${m.border.default};
${i}--fm-border-subtle: ${m.border.subtle};
${i}--fm-border-strong: ${m.border.strong};
${i}--fm-border-focus: ${m.border.focus};

${i}--fm-icon-primary: ${m.icon.primary};
${i}--fm-icon-secondary: ${m.icon.secondary};
${i}--fm-icon-inverse: ${m.icon.inverse};

${i}--fm-status-danger-text: ${m.status.danger.text};
${i}--fm-status-danger-surface: ${m.status.danger.surface};
${i}--fm-status-danger-border: ${m.status.danger.border};
${i}--fm-status-success-text: ${m.status.success.text};
${i}--fm-status-success-surface: ${m.status.success.surface};
${i}--fm-status-success-border: ${m.status.success.border};
${i}--fm-status-warning-text: ${m.status.warning.text};
${i}--fm-status-warning-surface: ${m.status.warning.surface};
${i}--fm-status-warning-border: ${m.status.warning.border};

${i}--fm-shadow-sm: ${shadowSoft};
${i}--fm-shadow-md: ${shadowGold};
${i}--fm-shadow-lg: ${shadowHover};`;
}

function actionBlock(m, i = '  ') {
  return `${i}--fm-action-primary-background: ${m.action.primary.background};
${i}--fm-action-primary-backgroundHover: ${m.action.primary.backgroundHover};
${i}--fm-action-primary-backgroundActive: ${m.action.primary.backgroundActive};
${i}--fm-action-primary-text: ${m.action.primary.text};
${i}--fm-action-primary-border: ${m.action.primary.border};
${i}
${i}--fm-action-secondary-background: ${m.action.secondary.background};
${i}--fm-action-secondary-backgroundHover: ${m.action.secondary.backgroundHover};
${i}--fm-action-secondary-backgroundActive: ${m.action.secondary.backgroundActive};
${i}--fm-action-secondary-text: ${m.action.secondary.text};
${i}--fm-action-secondary-border: ${m.action.secondary.border};

${i}--fm-action-tertiary-background: ${m.action.tertiary.background};
${i}--fm-action-tertiary-backgroundHover: ${m.action.tertiary.backgroundHover};
${i}--fm-action-tertiary-backgroundActive: ${m.action.tertiary.backgroundActive};
${i}--fm-action-tertiary-text: ${m.action.tertiary.text};
${i}--fm-action-tertiary-border: ${m.action.tertiary.border};

${i}--fm-action-danger-background: ${m.action.danger.background};
${i}--fm-action-danger-backgroundHover: ${m.action.danger.backgroundHover};
${i}--fm-action-danger-backgroundActive: ${m.action.danger.backgroundActive};
${i}--fm-action-danger-text: ${m.action.danger.text};
${i}--fm-action-danger-border: ${m.action.danger.border};`;
}

function lightModeVars(i = '  ') {
  return `${colorBlock(l, i)}

${actionBlock(l, i)}`;
}

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
${colorBlock(d)}

  /* Type Defaults (Contract fulfillment) */
  --fm-type-body-size: ${t.body.size};
  --fm-type-body-lineHeight: ${t.body.lineHeight};
  --fm-type-bodySm-size: ${t.bodySm.size};
  --fm-type-bodySm-lineHeight: ${t.bodySm.lineHeight};
  --fm-type-label-size: ${t.label.size};
  --fm-type-label-lineHeight: ${t.label.lineHeight};
  --fm-type-labelStrong-size: ${t.labelStrong.size};
  --fm-type-labelStrong-lineHeight: ${t.labelStrong.lineHeight};
  --fm-type-caption-size: ${t.caption.size};
  --fm-type-caption-lineHeight: ${t.caption.lineHeight};
  --fm-type-headingSm-size: ${t.headingSm.size};
  --fm-type-headingSm-lineHeight: ${t.headingSm.lineHeight};
  --fm-type-headingMd-size: ${t.headingMd.size};
  --fm-type-headingMd-lineHeight: ${t.headingMd.lineHeight};
  --fm-type-headingLg-size: ${t.headingLg.size};
  --fm-type-headingLg-lineHeight: ${t.headingLg.lineHeight};
  --fm-type-display-size: ${t.display.size};
  --fm-type-display-lineHeight: ${t.display.lineHeight};

  /* Action Defaults */
${actionBlock(d)}
}

@media (prefers-color-scheme: light) {
  :root {
${lightModeVars('    ')}
  }
}

html[data-theme='light'] {
${lightModeVars()}
}
`;

const outDir = path.resolve(__dirname, '../../dist');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.resolve(outDir, 'index.css'), css.trim() + '\n');
console.log('CSS built successfully to dist/index.css');
