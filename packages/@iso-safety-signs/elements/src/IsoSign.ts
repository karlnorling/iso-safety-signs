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
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
  const widthMatch = svg.match(/<svg[^>]*\swidth="([^"]+)"/);
  const heightMatch = svg.match(/<svg[^>]*\sheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : ''}`,
    body: bodyMatch ? bodyMatch[1] : '',
    width: widthMatch ? widthMatch[1] : '100%',
    height: heightMatch ? heightMatch[1] : '100%',
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
  ${body}</svg>`;
  }
}
