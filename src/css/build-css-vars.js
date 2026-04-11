import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { themeObj, rawValues } from '../../dist/theme/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const css = `
/* auto-generated css */
:root {
  --fm-font-sans: ${rawValues.fontSans};

  --fm-space-xs: ${themeObj.space.xs};
  --fm-space-sm: ${themeObj.space.sm};
  --fm-space-md: ${themeObj.space.md};
  --fm-space-lg: ${themeObj.space.lg};
  --fm-space-xl: ${themeObj.space.xl};

  --fm-accent-base: ${rawValues.colors.gold.dark};
  --fm-surface-canvas: ${rawValues.colors.canvas.dark};
}

@media (prefers-color-scheme: light) {
  :root {
    --fm-accent-base: ${rawValues.colors.gold.light};
    --fm-surface-canvas: ${rawValues.colors.canvas.light};
  }
}

html[data-theme='light'] {
  --fm-accent-base: ${rawValues.colors.gold.light};
  --fm-surface-canvas: ${rawValues.colors.canvas.light};
}
`;

const outDir = path.resolve(__dirname, '../../dist');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.resolve(outDir, 'index.css'), css.trim() + '\n');
console.log('CSS built successfully to dist/index.css');
