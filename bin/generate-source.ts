/**
 * generate-source.ts
 *
 * Reads data/scraped.json + assets/svg-map.json and generates:
 *   - packages/@iso-safety-signs/core/src/signs.generated.ts
 *   - packages/@iso-safety-signs/react/src/SignProps.ts
 *   - packages/@iso-safety-signs/react/src/{ComponentName}.tsx  (one per sign)
 *   - packages/@iso-safety-signs/react/src/index.ts
 *   - packages/@iso-safety-signs/vue/src/SignProps.ts
 *   - packages/@iso-safety-signs/vue/src/{ComponentName}.ts    (one per sign)
 *   - packages/@iso-safety-signs/vue/src/index.ts
 *   - packages/@iso-safety-signs/elements/src/{ComponentName}.ts (one per sign)
 *   - packages/@iso-safety-signs/elements/src/defineCustomElements.ts
 *   - packages/@iso-safety-signs/elements/src/index.ts
 *
 * Run via: yarn generate
 */

import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import type { ScrapedData, SignCategory } from './scrape';
import type { Sign } from '../packages/@iso-safety-signs/core/src/types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Converts a kebab-case slug to PascalCase component name. */
const toComponentName = (id: string): string =>
  id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const IMAGE_SIZES = [240, 512, 768, 1024, 2048] as const;

const buildAssets = (svgRelPath: string): Sign['assets'] => {
  const dir = path.dirname(svgRelPath);
  const base = path.basename(svgRelPath, path.extname(svgRelPath));
  const makeRecord = (ext: string): Record<number, string> =>
    Object.fromEntries(IMAGE_SIZES.map((s) => [s, `${dir}/${base}_${s}x${s}.${ext}`])) as Record<
      number,
      string
    >;
  return {
    jpg: makeRecord('jpg'),
    png: makeRecord('png'),
    svg: svgRelPath,
    webp: makeRecord('webp'),
  };
};

const cleanSvg = (svg: string): string =>
  svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .trim();

const optimizeSvg = (svg: string): string =>
  optimize(svg, { multipass: true, plugins: ['preset-default'] }).data;

/** Prefix every internal SVG id with the sign slug to prevent DOM collisions. */
const scopeBodyIds = (body: string, prefix: string): string => {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    ids.add(id);
    return _;
  });
  if (ids.size === 0) return body;
  let out = body;
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${prefix}-${id}"`);
  }
  return out;
};

const categoryFromCode = (code: string): SignCategory => {
  const letter = code.charAt(0).toUpperCase();
  const map: Record<string, SignCategory> = {
    E: 'emergency',
    F: 'fire',
    M: 'mandatory',
    P: 'prohibition',
    W: 'warning',
  };
  return map[letter] ?? 'warning';
};

// ---------------------------------------------------------------------------
// Sign collection
// ---------------------------------------------------------------------------

interface SignEntry {
  sign: Sign;
  optimizedSvg: string;
}

const collectEntries = (scraped: ScrapedData, svgMap: Record<string, string>): SignEntry[] => {
  const entries: SignEntry[] = [];
  const svgKeys = Object.keys(svgMap);

  const findSvgKey = (code: string): string | undefined => {
    const lowerCode = code.toLowerCase();
    return svgKeys.find((k) => {
      const base = path.basename(k, '.svg').toLowerCase();
      return base.includes(lowerCode) || base === `iso_7010_${lowerCode}`;
    });
  };

  for (const [, signs] of Object.entries(scraped)) {
    for (const sign of signs) {
      const { code, name } = sign;
      const svgKey = findSvgKey(code);

      if (!svgKey) {
        console.warn(`  Warning: no SVG found for "${code}" (${name})`);
        continue;
      }

      const svgContent = svgMap[svgKey];
      if (!svgContent) continue;

      const id = slugify(`${code}-${name}`);
      const category = categoryFromCode(code);
      const assets = buildAssets(svgKey);

      const optimizedSvg = cleanSvg(optimizeSvg(svgContent));
      entries.push({
        sign: { assets, category, code, description: name, id, name, svg: svgContent },
        optimizedSvg,
      });

      console.log(`  + ${id} (${category})`);
    }
  }

  return entries;
};

// ---------------------------------------------------------------------------
// Code generation — core/src/signs.generated.ts
// ---------------------------------------------------------------------------

const generateSignsFile = (signs: Sign[]): string => {
  const lines: string[] = [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type { Sign } from './types';`,
    ``,
    `export const signs: Sign[] = [`,
  ];

  for (const s of signs) {
    lines.push(
      `  {`,
      `    assets: {`,
      `      jpg: ${JSON.stringify(s.assets.jpg)},`,
      `      png: ${JSON.stringify(s.assets.png)},`,
      `      svg: ${JSON.stringify(s.assets.svg)},`,
      `      webp: ${JSON.stringify(s.assets.webp)},`,
      `    },`,
      `    category: ${JSON.stringify(s.category)},`,
      `    code: ${JSON.stringify(s.code)},`,
      `    description: ${JSON.stringify(s.description)},`,
      `    id: ${JSON.stringify(s.id)},`,
      `    name: ${JSON.stringify(s.name)},`,
      `    svg: ${JSON.stringify(s.svg)},`,
      `  },`,
    );
  }

  lines.push(`];`);
  return lines.join('\n') + '\n';
};

// ---------------------------------------------------------------------------
// Code generation — react/src/SignProps.ts
// ---------------------------------------------------------------------------

const generateReactPropsFile = (): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type * as React from 'react';`,
    ``,
    `/** Props accepted by every generated ISO 7010 safety sign React component. */`,
    `export interface SignProps {`,
    `  /** CSS class forwarded to the wrapping \`<span>\`. */`,
    `  className?: string;`,
    `  /** Accessible description injected as \`<desc>\` inside the SVG. Defaults to the sign name. */`,
    `  description?: string;`,
    `  /** Height applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  height?: number | string;`,
    `  /** Inline styles forwarded to the wrapping \`<span>\`. */`,
    `  style?: React.CSSProperties;`,
    `  /** Accessible title injected as \`<title>\` inside the SVG. Defaults to the sign name. */`,
    `  title?: string;`,
    `  /** Width applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  width?: number | string;`,
    `  /** Overrides \`aria-labelledby\` with a direct label on the wrapping \`<span>\`. */`,
    `  'aria-label'?: string;`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — react/src/{ComponentName}.tsx
// ---------------------------------------------------------------------------

interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  optimizedSvg: string;
}

const generateReactComponentFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import * as React from 'react';`,
    `import type { SignProps } from './SignProps';`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export const ${componentName} = React.memo<SignProps>(({`,
    `  'aria-label': ariaLabel,`,
    `  className,`,
    `  description = _DefaultDesc,`,
    `  height,`,
    `  style,`,
    `  title = _DefaultTitle,`,
    `  width,`,
    `}) => {`,
    `  const descId = \`iso-desc-${id}\`;`,
    `  const titleId = \`iso-title-${id}\`;`,
    `  const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;`,
    `  const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;`,
    `  const svgHtml = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(title)}</title>`,
    `  <desc id="\${descId}">\${_h(description)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `  return (`,
    `    <span`,
    `      aria-label={ariaLabel}`,
    `      className={className}`,
    `      dangerouslySetInnerHTML={{ __html: svgHtml }}`,
    `      style={{ display: 'contents', ...style }}`,
    `    />`,
    `  );`,
    `});`,
    `${componentName}.displayName = '${componentName}';`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — react/src/index.ts
// ---------------------------------------------------------------------------

const generateReactIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export type { SignProps } from './SignProps';`,
    `export { SignById } from './Sign';`,
    `export type { SignByIdProps } from './Sign';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { Sign, SignAssets, SignCategory } from '@iso-safety-signs/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/SignProps.ts
// ---------------------------------------------------------------------------

const generateVuePropsFile = (): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type { PropType } from 'vue';`,
    ``,
    `/** Reusable Vue prop definitions shared by every generated ISO 7010 safety sign component. */`,
    `export const signProps = {`,
    `  /** Accessible description injected as \`<desc>\` inside the SVG. Defaults to the sign name. */`,
    `  description: { type: String as PropType<string> },`,
    `  /** Height applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  height: { type: [Number, String] as PropType<number | string> },`,
    `  /** Accessible title injected as \`<title>\` inside the SVG. Defaults to the sign name. */`,
    `  title: { type: String as PropType<string> },`,
    `  /** Width applied to the \`<svg>\` element (pixels or any CSS length). */`,
    `  width: { type: [Number, String] as PropType<number | string> },`,
    `} as const;`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateVueComponentFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import { defineComponent, h } from 'vue';`,
    `import { signProps } from './SignProps';`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export const ${componentName} = defineComponent({`,
    `  name: '${componentName}',`,
    `  inheritAttrs: false,`,
    `  props: {`,
    `    ...signProps,`,
    `  },`,
    `  setup(props, { attrs }) {`,
    `    return () => {`,
    `      const descId = \`iso-desc-${id}\`;`,
    `      const titleId = \`iso-title-${id}\`;`,
    `      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;`,
    `      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;`,
    `      const resolvedTitle = props.title ?? _DefaultTitle;`,
    `      const resolvedDesc = props.description ?? _DefaultDesc;`,
    `      const svgHtml = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(resolvedTitle)}</title>`,
    `  <desc id="\${descId}">\${_h(resolvedDesc)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `      return h('span', {`,
    `        ...attrs,`,
    `        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },`,
    `        innerHTML: svgHtml,`,
    `      });`,
    `    };`,
    `  },`,
    `});`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — vue/src/index.ts
// ---------------------------------------------------------------------------

const generateVueIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export { signProps } from './SignProps';`,
    `export { SignById } from './SignById';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { Sign, SignAssets, SignCategory } from '@iso-safety-signs/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateElementFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export class ${componentName} extends HTMLElement {`,
    `  static readonly tagName = 'iso-${id}';`,
    `  static readonly observedAttributes = ['title', 'description', 'width', 'height'];`,
    ``,
    `  connectedCallback(): void { this._render(); }`,
    `  attributeChangedCallback(): void { this._render(); }`,
    ``,
    `  private _render(): void {`,
    `    const descId = \`iso-desc-${id}\`;`,
    `    const titleId = \`iso-title-${id}\`;`,
    `    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;`,
    `    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;`,
    `    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;`,
    `    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;`,
    `    this.style.display = 'contents';`,
    `    this.innerHTML = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(resolvedTitle)}</title>`,
    `  <desc id="\${descId}">\${_h(resolvedDesc)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `  }`,
    `}`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — elements/src/defineCustomElements.ts
// ---------------------------------------------------------------------------

const generateDefineCustomElements = (
  entries: Array<{ id: string; componentName: string }>,
): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import { IsoSign } from './IsoSign';`,
    ...entries.map(({ componentName }) => `import { ${componentName} } from './${componentName}';`),
    ``,
    `const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [`,
    `  [IsoSign, IsoSign.tagName],`,
    ...entries.map(({ componentName }) => `  [${componentName}, ${componentName}.tagName],`),
    `];`,
    ``,
    `/**`,
    ` * Registers all ISO 7010 safety sign custom elements.`,
    ` *`,
    ` * @param prefix — tag-name prefix (default \`"iso"\`). Each element is registered`,
    ` *   as \`{prefix}-{id}\`, e.g. \`iso-e001-emergency-exit\`.`,
    ` *   Pass a custom string to avoid conflicts with other libraries.`,
    ` * @example`,
    ` * \`\`\`ts`,
    ` * import { defineCustomElements } from '@iso-safety-signs/elements';`,
    ` * defineCustomElements(); // registers iso-e001-emergency-exit, iso-w001-flammable-material, etc.`,
    ` * \`\`\``,
    ` */`,
    `export function defineCustomElements(prefix = 'iso'): void {`,
    `  for (const [cls, defaultTag] of _elements) {`,
    `    const tag = prefix === 'iso' ? defaultTag : \`\${prefix}-\${defaultTag.replace(/^iso-/, '')}\`;`,
    `    if (!customElements.get(tag)) customElements.define(tag, cls);`,
    `  }`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/index.ts
// ---------------------------------------------------------------------------

const generateElementsIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export { IsoSign } from './IsoSign';`,
    `export { defineCustomElements } from './defineCustomElements';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { Sign, SignAssets, SignCategory } from '@iso-safety-signs/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export const generateSource = async (): Promise<void> => {
  const scrapedPath = path.join('data', 'scraped.json');
  const svgMapPath = path.join('packages', '@iso-safety-signs', 'assets', 'assets', 'svg-map.json');

  if (!fs.existsSync(scrapedPath)) {
    throw new Error(`Missing ${scrapedPath}. Run 'yarn update' first.`);
  }
  if (!fs.existsSync(svgMapPath)) {
    throw new Error(`Missing ${svgMapPath}. Run 'yarn update' first.`);
  }

  const scraped: ScrapedData = JSON.parse(fs.readFileSync(scrapedPath, 'utf-8'));
  const svgMap: Record<string, string> = JSON.parse(fs.readFileSync(svgMapPath, 'utf-8'));

  console.log(`Loaded ${Object.keys(svgMap).length} SVGs from svg-map.json`);

  const entries = collectEntries(scraped, svgMap);
  console.log(`Collected ${entries.length} sign entries`);

  const signs = entries.map((e) => e.sign);
  const componentEntries: ComponentEntry[] = entries.map((e) => ({
    id: e.sign.id,
    name: e.sign.name,
    description: e.sign.description,
    optimizedSvg: e.optimizedSvg,
  }));

  // core/src/signs.generated.ts
  const coreOut = path.join('packages', '@iso-safety-signs', 'core', 'src', 'signs.generated.ts');
  fs.writeFileSync(coreOut, generateSignsFile(signs), 'utf-8');
  console.log(`Written: ${coreOut}`);

  // react/src/
  const reactDir = path.join('packages', '@iso-safety-signs', 'react', 'src');
  fs.mkdirSync(reactDir, { recursive: true });

  fs.writeFileSync(path.join(reactDir, 'SignProps.ts'), generateReactPropsFile(), 'utf-8');
  console.log(`Written: ${path.join(reactDir, 'SignProps.ts')}`);

  const componentNames: string[] = [];
  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    componentNames.push(componentName);
    fs.writeFileSync(
      path.join(reactDir, `${componentName}.tsx`),
      generateReactComponentFile(entry),
      'utf-8',
    );
    console.log(`Written: ${path.join(reactDir, `${componentName}.tsx`)}`);
  }

  fs.writeFileSync(path.join(reactDir, 'index.ts'), generateReactIndex(componentNames), 'utf-8');
  console.log(`Written: ${path.join(reactDir, 'index.ts')}`);

  // vue/src/
  const vueDir = path.join('packages', '@iso-safety-signs', 'vue', 'src');
  fs.mkdirSync(vueDir, { recursive: true });

  fs.writeFileSync(path.join(vueDir, 'SignProps.ts'), generateVuePropsFile(), 'utf-8');
  console.log(`Written: ${path.join(vueDir, 'SignProps.ts')}`);

  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    fs.writeFileSync(
      path.join(vueDir, `${componentName}.ts`),
      generateVueComponentFile(entry),
      'utf-8',
    );
    console.log(`Written: ${path.join(vueDir, `${componentName}.ts`)}`);
  }

  fs.writeFileSync(path.join(vueDir, 'index.ts'), generateVueIndex(componentNames), 'utf-8');
  console.log(`Written: ${path.join(vueDir, 'index.ts')}`);

  // elements/src/
  const elementsDir = path.join('packages', '@iso-safety-signs', 'elements', 'src');
  fs.mkdirSync(elementsDir, { recursive: true });

  const elementEntries: Array<{ id: string; componentName: string }> = [];
  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    elementEntries.push({ id: entry.id, componentName });
    fs.writeFileSync(
      path.join(elementsDir, `${componentName}.ts`),
      generateElementFile(entry),
      'utf-8',
    );
    console.log(`Written: ${path.join(elementsDir, `${componentName}.ts`)}`);
  }

  fs.writeFileSync(
    path.join(elementsDir, 'defineCustomElements.ts'),
    generateDefineCustomElements(elementEntries),
    'utf-8',
  );
  console.log(`Written: ${path.join(elementsDir, 'defineCustomElements.ts')}`);

  fs.writeFileSync(
    path.join(elementsDir, 'index.ts'),
    generateElementsIndex(elementEntries.map((e) => e.componentName)),
    'utf-8',
  );
  console.log(`Written: ${path.join(elementsDir, 'index.ts')}`);

  console.log('\nDone.');
};

const isMain =
  process.argv[1] &&
  (process.argv[1].endsWith('generate-source.ts') ||
    process.argv[1].endsWith('generate-source.js'));

if (isMain) {
  generateSource().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
