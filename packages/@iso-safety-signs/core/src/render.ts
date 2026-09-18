/**
 * Framework-agnostic SVG rendering shared by the React, Vue and Web Component
 * packages (and by the code generator), so every renderer produces identical markup.
 *
 * @module @iso-safety-signs/core/render
 */

/** An SVG split into the pieces a renderer needs. */
export interface ParsedSvg {
  /** Root `<svg>` attributes except `width`/`height`, always including `xmlns` and `viewBox` when derivable. */
  attrs: string;
  /** Inner markup of the root `<svg>`. */
  body: string;
  /** Default width, unitless when the source used pixels. */
  width: string;
  /** Default height, unitless when the source used pixels. */
  height: string;
}

/** Per-render options for {@link renderSvg}. */
export interface RenderSvgOptions {
  /** Accessible title, rendered as `<title>`. */
  title: string;
  /** Accessible description, rendered as `<desc>`. */
  description: string;
  /** When set, labels the `<svg>` directly instead of via `aria-labelledby`. */
  ariaLabel?: string;
  /** Overrides the default width. */
  width?: number | string;
  /** Overrides the default height. */
  height?: number | string;
  /**
   * Unique per rendered instance. Prefixes every id in the output so that the
   * same sign can appear several times on one page without id collisions.
   */
  instanceId: string;
}

/** Escapes a string for use in HTML text or a double/single-quoted attribute. */
export const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

const _parsed = new Map<string, ParsedSvg>();

/** Splits a complete `<svg>` document into {@link ParsedSvg} parts. Cached per input. */
export const parseSvg = (svg: string): ParsedSvg => {
  let parsed = _parsed.get(svg);
  if (!parsed) {
    parsed = parseSvgUncached(svg);
    _parsed.set(svg, parsed);
  }
  return parsed;
};

const parseSvgUncached = (svg: string): ParsedSvg => {
  const svgAttrs = svg.match(/<svg([^>]*)>/)?.[1] ?? '';
  const viewBox = svgAttrs.match(/\bviewBox="([^"]+)"/)?.[1];
  const w = (svgAttrs.match(/\bwidth="([^"]+)"/)?.[1] ?? '100%').replace(/px$/, '');
  const h = (svgAttrs.match(/\bheight="([^"]+)"/)?.[1] ?? '100%').replace(/px$/, '');
  const numeric = /^\d+(\.\d+)?$/;
  const viewBoxStr = viewBox
    ? ` viewBox="${viewBox}"`
    : numeric.test(w) && numeric.test(h)
      ? ` viewBox="0 0 ${w} ${h}"`
      : '';
  const otherAttrs = svgAttrs
    .replace(/\s*\bxmlns="[^"]*"/g, '')
    .replace(/\s*\bwidth="[^"]*"/, '')
    .replace(/\s*\bheight="[^"]*"/, '')
    .replace(/\s*\bviewBox="[^"]*"/, '')
    .trim();
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxStr}${otherAttrs ? ` ${otherAttrs}` : ''}`,
    body: svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? '',
    height: h,
    width: w,
  };
};

const ID_TOKEN = '\u0000';
const _templates = new Map<string, string>();

/**
 * Returns `body` with every internal id (and every `url(#…)` / `href="#…"`
 * reference to it) rewritten as `{ID_TOKEN}-{id}`, so that scoping to an
 * instance is a single string replace. Cached per body.
 */
const idTemplate = (body: string): string => {
  let tmpl = _templates.get(body);
  if (tmpl !== undefined) return tmpl;
  tmpl = body;
  const ids = new Set<string>();
  for (const m of body.matchAll(/\bid="([^"]+)"/g)) ids.add(m[1]);
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    tmpl = tmpl
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${ID_TOKEN}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${ID_TOKEN}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${ID_TOKEN}-${id}"`);
  }
  _templates.set(body, tmpl);
  return tmpl;
};

/** Prefixes every internal id in an SVG body with `prefix`. */
export const scopeIds = (body: string, prefix: string): string =>
  idTemplate(body).split(ID_TOKEN).join(prefix);

/** Renders a sign as an accessible inline `<svg>` string. */
export const renderSvg = (svg: ParsedSvg, options: RenderSvgOptions): string => {
  const { ariaLabel, description, height, instanceId, title, width } = options;
  const prefix = escapeHtml(instanceId);
  const titleId = `${prefix}-title`;
  const descId = `${prefix}-desc`;
  const w = width !== undefined ? escapeHtml(String(width)) : svg.width;
  const h = height !== undefined ? escapeHtml(String(height)) : svg.height;
  const label =
    ariaLabel !== undefined
      ? `aria-label="${escapeHtml(ariaLabel)}"`
      : `aria-labelledby="${titleId} ${descId}"`;
  return `<svg ${svg.attrs} width="${w}" height="${h}" role="img" ${label}><title id="${titleId}">${escapeHtml(title)}</title><desc id="${descId}">${escapeHtml(description)}</desc>${scopeIds(svg.body, prefix)}</svg>`;
};

let _counter = 0;

/** Returns a new page-unique id prefix, for renderers without a framework-provided id. */
export const createInstanceId = (): string => `iso-${++_counter}`;

/**
 * Turns a framework-generated id (e.g. React's `:r0:` or `«r0»`) into a prefix
 * that is safe inside `id` attributes and unquoted CSS `url(#…)` references.
 */
export const toInstanceId = (raw: string): string => `iso-${raw.replace(/[^\w-]/g, '')}`;
