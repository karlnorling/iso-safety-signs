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
import { parseSvg, scopeIds } from '../packages/@iso-safety-signs/core/src/render';
import type { ParsedSvg } from '../packages/@iso-safety-signs/core/src/render';

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

/**
 * Ensures the SVG has a `viewBox`. When `width`/`height` are present but
 * `viewBox` is absent, synthesises `viewBox="0 0 {w} {h}"` so that CSS
 * resizing scales the content rather than clipping it.
 */
const normalizeSvg = (svg: string): string => {
  const cleaned = cleanSvg(svg);
  if (/\bviewBox="/i.test(cleaned)) return cleaned;
  const wm = cleaned.match(/\bwidth="([0-9.]+)(?:px)?"/);
  const hm = cleaned.match(/\bheight="([0-9.]+)(?:px)?"/);
  if (!wm || !hm) return cleaned;
  return cleaned.replace(/<svg\b/, `<svg viewBox="0 0 ${wm[1]} ${hm[1]}"`);
};

// `removeScripts` strips <script>, on* handlers and javascript: links: the
// SVGs come from Wikimedia Commons and end up in innerHTML.
const optimizeSvg = (svg: string): string =>
  optimize(svg, { multipass: true, plugins: ['preset-default', 'removeScripts'] }).data;

const categoryFromCode = (code: string): SignCategory => {
  const letter = code.charAt(0).toUpperCase();
  const map: Record<string, SignCategory> = {
    E: 'emergency',
    F: 'fire',
    M: 'mandatory',
    P: 'prohibition',
    W: 'warning',
  };
  const category = map[letter];
  if (!category) throw new Error(`Unknown ISO 7010 category letter in sign code "${code}"`);
  return category;
};

// ---------------------------------------------------------------------------
// Sign collection
// ---------------------------------------------------------------------------

/** Matches the pre-sized copies older pipeline runs wrote next to each source SVG. */
const SIZED_SVG_RE = /_\d+x\d+\.svg$/;

const collectEntries = (scraped: ScrapedData, svgMap: Record<string, string>): Sign[] => {
  const entries: Sign[] = [];
  const svgKeys = Object.keys(svgMap)
    .filter((k) => !SIZED_SVG_RE.test(k))
    .sort();

  /** Finds the source SVG in the sign's own `{category}/{code}/` directory, preferring the canonical file name. */
  const findSvgKey = (category: SignCategory, code: string): string | undefined => {
    const lowerCode = code.toLowerCase();
    const candidates = svgKeys.filter((k) => k.startsWith(`${category}/${lowerCode}/`));
    return (
      candidates.find((k) => path.basename(k, '.svg').toLowerCase() === `iso_7010_${lowerCode}`) ??
      candidates[0]
    );
  };

  for (const [, signs] of Object.entries(scraped)) {
    for (const sign of signs) {
      const { code, name } = sign;
      const category = categoryFromCode(code);
      const svgKey = findSvgKey(category, code);

      if (!svgKey) {
        console.warn(`  Warning: no SVG found for "${code}" (${name})`);
        continue;
      }

      const svgContent = svgMap[svgKey];
      if (!svgContent) continue;

      const id = slugify(`${code}-${name}`);
      entries.push({
        assets: buildAssets(svgKey),
        category,
        code,
        description: name,
        id,
        name,
        svg: scopeIds(normalizeSvg(optimizeSvg(svgContent)), id),
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
    `  /** Labels the \`<svg>\` directly, replacing its \`aria-labelledby\` title/description reference. */`,
    `  'aria-label'?: string;`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — shared per-component constants
// ---------------------------------------------------------------------------

const HEADER = [
  `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
  `// Run 'yarn generate' to regenerate.`,
  ``,
];

/**
 * Module-level constants every generated component starts with: the parsed
 * SVG plus the default title/description. Values go through JSON.stringify so
 * any character in a scraped name is emitted safely.
 */
const componentConstants = (sign: Sign): string[] => {
  const svg: ParsedSvg = parseSvg(sign.svg);
  return [
    `const _svg: ParsedSvg = {`,
    `  attrs: ${JSON.stringify(svg.attrs)},`,
    `  body: ${JSON.stringify(svg.body)},`,
    `  height: ${JSON.stringify(svg.height)},`,
    `  width: ${JSON.stringify(svg.width)},`,
    `};`,
    `const _title = ${JSON.stringify(sign.name)};`,
    `const _description = ${JSON.stringify(sign.description)};`,
  ];
};

// ---------------------------------------------------------------------------
// Code generation — react/src/{ComponentName}.tsx
// ---------------------------------------------------------------------------

const generateReactComponentFile = (sign: Sign): string => {
  const componentName = toComponentName(sign.id);
  return [
    ...HEADER,
    `import * as React from 'react';`,
    `import type { ParsedSvg } from '@iso-safety-signs/core';`,
    `import type { SignProps } from './SignProps';`,
    `import { SignSvg } from './SignSvg';`,
    ``,
    ...componentConstants(sign),
    ``,
    `export const ${componentName} = React.memo<SignProps>((props) => (`,
    `  <SignSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />`,
    `));`,
    `${componentName}.displayName = '${componentName}';`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — react/src/index.ts
// ---------------------------------------------------------------------------

const generateReactIndex = (componentNames: string[]): string =>
  [
    ...HEADER,
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
    ...HEADER,
    `import type { PropType } from 'vue';`,
    ``,
    `/**`,
    ` * Reusable Vue prop definitions shared by every generated ISO 7010 safety sign component.`,
    ` * \`aria-label\` is read from fallthrough attributes and labels the \`<svg>\` directly.`,
    ` */`,
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

const generateVueComponentFile = (sign: Sign): string => {
  const componentName = toComponentName(sign.id);
  return [
    ...HEADER,
    `import { defineComponent } from 'vue';`,
    `import type { ParsedSvg } from '@iso-safety-signs/core';`,
    `import { signProps } from './SignProps';`,
    `import { renderSign, useInstanceId } from './SignSvg';`,
    ``,
    ...componentConstants(sign),
    ``,
    `export const ${componentName} = defineComponent({`,
    `  name: '${componentName}',`,
    `  inheritAttrs: false,`,
    `  props: signProps,`,
    `  setup(props, { attrs }) {`,
    `    const instanceId = useInstanceId();`,
    `    return () =>`,
    `      renderSign({`,
    `        attrs,`,
    `        description: props.description ?? _description,`,
    `        height: props.height,`,
    `        instanceId,`,
    `        svg: _svg,`,
    `        title: props.title ?? _title,`,
    `        width: props.width,`,
    `      });`,
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
    ...HEADER,
    `export { signProps } from './SignProps';`,
    `export { SignById } from './SignById';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { Sign, SignAssets, SignCategory } from '@iso-safety-signs/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateElementFile = (sign: Sign): string => {
  const componentName = toComponentName(sign.id);
  return [
    ...HEADER,
    `import type { ParsedSvg } from '@iso-safety-signs/core';`,
    `import { SignElement } from './SignElement';`,
    `import type { SignElementContent } from './SignElement';`,
    ``,
    ...componentConstants(sign),
    ``,
    `export class ${componentName} extends SignElement {`,
    `  static readonly tagName = 'iso-${sign.id}';`,
    ``,
    `  protected content(): SignElementContent {`,
    `    return { description: _description, svg: _svg, title: _title };`,
    `  }`,
    `}`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — elements/src/defineCustomElements.ts
// ---------------------------------------------------------------------------

const generateDefineCustomElements = (componentNames: string[], exampleIds: string[]): string =>
  [
    ...HEADER,
    `import { IsoSign } from './IsoSign';`,
    ...componentNames.map((name) => `import { ${name} } from './${name}';`),
    ``,
    `const _elements: Array<[CustomElementConstructor, string]> = [`,
    `  [IsoSign, IsoSign.tagName],`,
    ...componentNames.map((name) => `  [${name}, ${name}.tagName],`),
    `];`,
    ``,
    `/**`,
    ` * Registers all ISO 7010 safety sign custom elements.`,
    ` *`,
    ` * Safe to call more than once, including with different prefixes or after`,
    ` * registering some classes yourself: tags that are already defined are skipped,`,
    ` * and a class that is already registered under another name is registered via`,
    ` * a subclass (the registry rejects one constructor under two names).`,
    ` *`,
    ` * @param prefix — tag-name prefix (default \`"iso"\`). Each element is registered`,
    ` *   as \`{prefix}-{id}\`, e.g. \`iso-${exampleIds[0]}\`, plus the generic \`{prefix}-sign\`.`,
    ` *   Pass a custom string to avoid conflicts with other libraries.`,
    ` * @example`,
    ` * \`\`\`ts`,
    ` * import { defineCustomElements } from '@iso-safety-signs/elements';`,
    ` * defineCustomElements(); // registers iso-sign, ${exampleIds.map((id) => `iso-${id}`).join(', ')}, etc.`,
    ` * \`\`\``,
    ` */`,
    `export function defineCustomElements(prefix = 'iso'): void {`,
    `  for (const [cls, defaultTag] of _elements) {`,
    `    const tag = prefix === 'iso' ? defaultTag : \`\${prefix}-\${defaultTag.replace(/^iso-/, '')}\`;`,
    `    if (customElements.get(tag)) continue;`,
    `    try {`,
    `      customElements.define(tag, cls);`,
    `    } catch {`,
    `      customElements.define(tag, class extends cls {});`,
    `    }`,
    `  }`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/index.ts
// ---------------------------------------------------------------------------

const generateElementsIndex = (componentNames: string[]): string =>
  [
    ...HEADER,
    `export { IsoSign } from './IsoSign';`,
    `export { SignElement } from './SignElement';`,
    `export type { SignElementContent } from './SignElement';`,
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

  const signs = collectEntries(scraped, svgMap);
  console.log(`Collected ${signs.length} sign entries`);
  const componentNames = signs.map((s) => toComponentName(s.id));

  const write = (file: string, content: string): void => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Written: ${file}`);
  };
  const pkgSrc = (pkg: string, file: string): string =>
    path.join('packages', '@iso-safety-signs', pkg, 'src', file);

  write(pkgSrc('core', 'signs.generated.ts'), generateSignsFile(signs));

  write(pkgSrc('react', 'SignProps.ts'), generateReactPropsFile());
  for (const sign of signs) {
    write(pkgSrc('react', `${toComponentName(sign.id)}.tsx`), generateReactComponentFile(sign));
  }
  write(pkgSrc('react', 'index.ts'), generateReactIndex(componentNames));

  write(pkgSrc('vue', 'SignProps.ts'), generateVuePropsFile());
  for (const sign of signs) {
    write(pkgSrc('vue', `${toComponentName(sign.id)}.ts`), generateVueComponentFile(sign));
  }
  write(pkgSrc('vue', 'index.ts'), generateVueIndex(componentNames));

  for (const sign of signs) {
    write(pkgSrc('elements', `${toComponentName(sign.id)}.ts`), generateElementFile(sign));
  }
  write(
    pkgSrc('elements', 'defineCustomElements.ts'),
    generateDefineCustomElements(
      componentNames,
      signs.slice(0, 2).map((s) => s.id),
    ),
  );
  write(pkgSrc('elements', 'index.ts'), generateElementsIndex(componentNames));

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
