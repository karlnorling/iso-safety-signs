/**
 * create-assets.ts
 *
 * Downloads ISO 7010 sign SVG files from Wikimedia Commons, converts them
 * to raster formats (PNG, JPG, WebP) at multiple sizes, and generates
 * sprite assets.
 *
 * Note: Sequential `await` inside loops is intentional throughout this file.
 * Downloads are throttled to be polite to Wikimedia servers, and image
 * conversion pipelines depend on the previous step completing first.
 */

/* oxlint-disable no-await-in-loop */

import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';
import { globSync } from 'glob';
import { optimize } from 'svgo';
import sharp from 'sharp';
import type { ScrapedData } from './scrape';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const USER_AGENT =
  'iso-safety-signs/0.0.0 (https://github.com/karlnorling/iso-safety-signs; build-script)';

// SVG is resolution-independent, so only raster formats get per-size files.
const IMAGE_TYPES_MAP = [
  { sizes: [240, 512, 768, 1024, 2048], type: 'jpg' },
  { sizes: [240, 512, 768, 1024, 2048], type: 'png' },
  { sizes: [240, 512, 768, 1024, 2048], type: 'webp' },
] as const;

const ASSETS_ROOT = path.join('packages', '@iso-safety-signs', 'assets', 'assets');

/** Matches pre-sized SVG copies written by older pipeline runs; never treated as a source. */
const SIZED_SVG_RE = /_\d+x\d+\.svg$/;

/** Source SVGs under ASSETS_ROOT, sorted so output does not depend on filesystem order. */
const sourceSvgFiles = (): string[] =>
  globSync(path.join(ASSETS_ROOT, '**', '*.svg'))
    .filter((f) => !SIZED_SVG_RE.test(f))
    .sort();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const sanitize = (str: string): string =>
  str
    .replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/\s/g, '_')
    .toLowerCase();

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------------------
// Network
// ---------------------------------------------------------------------------

const fetchWithRetry = async (
  url: string,
  options: RequestInit = {},
  retries = 3,
  delayMs = 1000,
): Promise<Response> => {
  const headers = {
    'User-Agent': USER_AGENT,
    ...(options.headers as Record<string, string>),
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, { ...options, headers });
    if (res.ok) return res;
    if ((res.status === 429 || res.status >= 500) && attempt < retries) {
      const wait = delayMs * 2 ** (attempt - 1);
      console.warn(
        `  ${res.status} on ${url} — retrying in ${wait}ms (attempt ${attempt}/${retries})`,
      );
      await sleep(wait);
      continue;
    }
    throw new Error(`HTTP ${res.status} fetching ${url}`);
  }

  throw new Error(`All retries exhausted for ${url}`);
};

const downloadImagePage = async (url: string): Promise<string> => {
  const res = await fetchWithRetry(url);
  const htmlData = parse(await res.text());
  const imageSrcUrl = htmlData.querySelector('.fullImageLink a')?.getAttribute('href');
  if (!imageSrcUrl) throw new Error(`No full-size image link on ${url}`);
  return `https:${imageSrcUrl}`;
};

const downloadImage = async (dest: string, url: string): Promise<void> => {
  const res = await fetchWithRetry(url, { headers: { Accept: 'image/svg+xml,image/*' } });
  await fs.promises.writeFile(dest, await res.text());
  console.log(`  Downloaded: ${path.basename(dest)}`);
};

// ---------------------------------------------------------------------------
// Image conversion
// ---------------------------------------------------------------------------

const convertImages = async (image: string): Promise<void> => {
  const inputExt = path.extname(image).toLowerCase();
  const inputBuffer = await fs.promises.readFile(image);

  for (const typeObj of IMAGE_TYPES_MAP) {
    for (const size of typeObj.sizes) {
      const outputDir = path.dirname(image);
      const baseName = path.basename(image, inputExt);
      const outputFile = path.join(outputDir, `${baseName}_${size}x${size}.${typeObj.type}`);

      try {
        const stat = await fs.promises.stat(outputFile);
        if (stat.size > 0) continue;
      } catch {
        // File does not exist — proceed with conversion.
      }

      const pipeline = sharp(inputBuffer).resize(size, size);

      if (typeObj.type === 'jpg') {
        await pipeline.jpeg({ quality: 90 }).toFile(outputFile);
      } else if (typeObj.type === 'png') {
        await pipeline.png({ quality: 90 }).toFile(outputFile);
      } else if (typeObj.type === 'webp') {
        await pipeline.webp({ quality: 90 }).toFile(outputFile);
      }
    }
  }
};

// ---------------------------------------------------------------------------
// Download orchestration
// ---------------------------------------------------------------------------

const processImage = async (destDir: string, imagePageUrl: string): Promise<void> => {
  await fs.promises.mkdir(destDir, { recursive: true });

  const imgName = decodeURIComponent(path.basename(imagePageUrl)).replace(/^File:/, '');
  const dest = path.join(destDir, imgName);

  try {
    const stat = await fs.promises.stat(dest);
    if (stat.size > 0) {
      console.log(`  Skipping (exists): ${path.basename(dest)}`);
      await convertImages(dest);
      return;
    }
  } catch {
    // File does not exist — proceed with download.
  }

  const imageUrl = await downloadImagePage(imagePageUrl);
  await downloadImage(dest, imageUrl);
  await sleep(300);
  await convertImages(dest);
};

// ---------------------------------------------------------------------------
// Sprite generation
// ---------------------------------------------------------------------------

const createSVGMap = async (): Promise<void> => {
  const svgMap: Record<string, string> = {};
  for (const file of sourceSvgFiles()) {
    const svgContent = await fs.promises.readFile(file, 'utf-8');
    const key = path.relative(ASSETS_ROOT, file).replace(/\\/g, '/');
    svgMap[key] = svgContent;
  }

  const mapFile = path.join(ASSETS_ROOT, 'svg-map.json');
  await fs.promises.writeFile(mapFile, JSON.stringify(svgMap, null, 2), 'utf-8');
  console.log(`SVG map written to ${mapFile}`);
};

const createSVGSprite = async (): Promise<void> => {
  const spriteDir = path.join('packages', '@iso-safety-signs', 'sprite');
  await fs.promises.mkdir(spriteDir, { recursive: true });

  const svgFiles = sourceSvgFiles().filter((f) => !f.includes('sprites'));

  const seen = new Set<string>();
  const ids: string[] = [];
  const symbols: string[] = [];

  for (const file of svgFiles) {
    const raw = await fs.promises.readFile(file, 'utf-8');
    const basename = path.basename(file, '.svg');
    const codeMatch = basename.match(/ISO_7010_([EFMPW]\d{3}[a-z]?)/i);
    const id = codeMatch
      ? codeMatch[1].toLowerCase()
      : sanitize(path.relative(ASSETS_ROOT, file).replace(/\\/g, '/'))
          .replace(/\.svg$/, '')
          .replace(/[._]/g, '-');

    if (seen.has(id)) continue;
    seen.add(id);
    ids.push(id);

    const optimized = optimize(raw, {
      multipass: true,
      plugins: ['preset-default', 'removeScripts'],
    });
    const svgContent = optimized.data
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!DOCTYPE[^>]*>/g, '')
      .trim();

    const svgAttrsMatch = svgContent.match(/<svg([^>]*)>/);
    const svgAttrs = svgAttrsMatch ? svgAttrsMatch[1] : '';

    const viewBoxMatch = svgAttrs.match(/viewBox="([^"]*)"/);
    let viewBox = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : '';
    if (!viewBox) {
      // SVGO preset-default strips px units, so plain numeric match is sufficient here
      const wm = svgAttrs.match(/\bwidth="(\d+(?:\.\d+)?)"/);
      const hm = svgAttrs.match(/\bheight="(\d+(?:\.\d+)?)"/);
      if (wm && hm) viewBox = ` viewBox="0 0 ${wm[1]} ${hm[1]}"`;
    }

    // Forward fill-rule and style from the <svg> root to the <symbol>
    const fillRuleMatch = svgAttrs.match(/\bfill-rule="([^"]*)"/);
    const styleMatch = svgAttrs.match(/\bstyle="([^"]*)"/);
    const extraAttrs =
      (fillRuleMatch ? ` fill-rule="${fillRuleMatch[1]}"` : '') +
      (styleMatch ? ` style="${styleMatch[1]}"` : '');

    let innerContent = svgContent.replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

    // Scope internal IDs to prevent collisions across symbols in the shared document
    const internalIds = new Set<string>();
    innerContent.replace(/\bid="([^"]+)"/g, (_: string, iid: string) => {
      internalIds.add(iid);
      return _;
    });
    for (const iid of internalIds) {
      const esc = iid.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      innerContent = innerContent
        .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${id}-${iid}"`)
        .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${id}-${iid})`)
        .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${id}-${iid}"`);
    }

    symbols.push(`  <symbol id="${id}"${viewBox}${extraAttrs}>${innerContent}</symbol>`);
  }

  const sprite = [
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">`,
    ...symbols,
    `</svg>`,
  ].join('\n');

  const spriteFile = path.join(spriteDir, 'sprite.svg');
  await fs.promises.writeFile(spriteFile, sprite, 'utf-8');
  console.log(`SVG sprite written to ${spriteFile} (${ids.length} symbols)`);

  const idMapFile = path.join(spriteDir, 'sprite-ids.json');
  await fs.promises.writeFile(idMapFile, JSON.stringify(ids, null, 2) + '\n', 'utf-8');
  console.log(`SVG sprite ID map written to ${idMapFile}`);
};

const createCSSSprite = async (): Promise<void> => {
  const cssPkgDir = path.join('packages', '@iso-safety-signs', 'css');
  await fs.promises.mkdir(cssPkgDir, { recursive: true });

  const svgFiles = sourceSvgFiles().filter((f) => !f.includes('sprites'));

  const seen = new Set<string>();
  const cssRules: string[] = [
    '/* ISO 7010 Safety Signs — CSS Sprite',
    "   Generated by 'yarn update'. Do not edit manually.",
    '   Import this file and apply the class to a sized block element to display the sign. */',
  ];

  for (const file of svgFiles) {
    const key = path.relative(ASSETS_ROOT, file).replace(/\\/g, '/');
    // Derive class name: iso-e001, iso-w073, etc. from the filename
    const basename = path.basename(key, '.svg');
    const codeMatch = basename.match(/ISO_7010_([EFMPW]\d{3}[a-z]?)/i);
    const className = codeMatch
      ? `iso-${codeMatch[1].toLowerCase()}`
      : `iso-${sanitize(basename).replace(/[._]/g, '-')}`;

    if (seen.has(className)) continue;
    seen.add(className);

    cssRules.push(
      '',
      `.${className} {`,
      `  background-image: url('../assets/assets/${key}');`,
      `  background-position: center;`,
      `  background-repeat: no-repeat;`,
      `  background-size: contain;`,
      `}`,
    );
  }

  const cssFile = path.join(cssPkgDir, 'sprite.css');
  await fs.promises.writeFile(cssFile, cssRules.join('\n') + '\n', 'utf-8');
  console.log(`CSS sprite written to ${cssFile}`);
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Rebuilds svg-map.json, the SVG sprite and the CSS sprite from the SVGs on disk. */
export const buildDerivedAssets = async (): Promise<void> => {
  await createSVGMap();
  await createSVGSprite();
  await createCSSSprite();
};

const createAssets = async (res: ScrapedData): Promise<void> => {
  const failures: string[] = [];

  for (const [category, signs] of Object.entries(res)) {
    const catDir = path.join(ASSETS_ROOT, category);
    await fs.promises.mkdir(catDir, { recursive: true });

    for (const sign of signs) {
      if (!sign.imageUrl) {
        failures.push(`${sign.code}: no image URL scraped`);
        continue;
      }
      const signDir = path.join(catDir, sign.code.toLowerCase());
      try {
        await processImage(signDir, sign.imageUrl);
      } catch (err) {
        console.error(`  Error processing ${sign.code}:`, (err as Error).message);
        failures.push(`${sign.code}: ${(err as Error).message}`);
      }
    }
  }

  await buildDerivedAssets();

  // Every sign was attempted and the outputs rebuilt from what is on disk;
  // now fail the run so missing or stale assets never go unnoticed.
  if (failures.length > 0) {
    throw new Error(`Failed to process ${failures.length} sign(s):\n  ${failures.join('\n  ')}`);
  }
};

export default createAssets;
