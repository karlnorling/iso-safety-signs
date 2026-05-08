import { getSign } from '@iso-safety-signs/core';

const _h = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

interface ParsedSvg {
  attrs: string;
  body: string;
  width: string;
  height: string;
}

const _cache = new Map<string, ParsedSvg>();

function parseSvg(svg: string): ParsedSvg {
  const svgAttrsMatch = svg.match(/<svg([^>]*)>/);
  const svgAttrs = svgAttrsMatch ? svgAttrsMatch[1] : '';
  const viewBoxMatch = svgAttrs.match(/\bviewBox="([^"]+)"/);
  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const w = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const h = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');
  const syntheticViewBox =
    !viewBoxMatch && /^\d+(\.\d+)?$/.test(w) && /^\d+(\.\d+)?$/.test(h)
      ? ` viewBox="0 0 ${w} ${h}"`
      : '';
  const otherAttrs = svgAttrs
    .replace(/\s*\bxmlns="[^"]*"/g, '')
    .replace(/\s*\bwidth="[^"]*"/, '')
    .replace(/\s*\bheight="[^"]*"/, '')
    .replace(/\s*\bviewBox="[^"]*"/, '')
    .trim();
  const viewBoxStr = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : syntheticViewBox;
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxStr}${otherAttrs ? ` ${otherAttrs}` : ''}`,
    body: bodyMatch ? bodyMatch[1] : '',
    width: w,
    height: h,
  };
}

function getParsedSvg(svg: string): ParsedSvg {
  let parsed = _cache.get(svg);
  if (!parsed) {
    parsed = parseSvg(svg);
    _cache.set(svg, parsed);
  }
  return parsed;
}

function scopeIds(body: string, prefix: string): string {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => { ids.add(id); return _; });
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
}

/**
 * Generic ISO 7010 safety sign custom element — renders any sign by slug ID.
 *
 * Attributes:
 * - `sign-id`     — slug ID, e.g. `"e001-emergency-exit"` or `"w001-flammable-material"`
 * - `title`       — overrides the SVG accessible title (defaults to sign name)
 * - `description` — overrides the SVG description (defaults to sign description)
 * - `width`       — forwarded to the `<svg>` width attribute
 * - `height`      — forwarded to the `<svg>` height attribute
 *
 * @example
 * ```html
 * <iso-sign sign-id="e001-emergency-exit" width="64"></iso-sign>
 * ```
 */
export class IsoSign extends HTMLElement {
  static readonly tagName = 'iso-sign';
  static readonly observedAttributes = ['sign-id', 'title', 'description', 'width', 'height'];

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const signId = this.getAttribute('sign-id');
    if (!signId) {
      this.innerHTML = '';
      return;
    }
    const sign = getSign(signId);
    if (!sign) {
      this.innerHTML = '';
      return;
    }

    const { attrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(sign.svg);
    const resolvedTitle = this.getAttribute('title') ?? sign.name;
    const resolvedDesc = this.getAttribute('description') ?? sign.description;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : defaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : defaultHeight;
    const descId = `iso-desc-${signId}`;
    const titleId = `iso-title-${signId}`;

    this.style.display = 'contents';
    this.innerHTML = `<svg ${attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${scopeIds(body, signId)}</svg>`;
  }
}
