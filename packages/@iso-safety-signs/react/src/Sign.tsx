import * as React from 'react';
import { getSign } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';

/** Props for the generic {@link SignById} component. */
export interface SignByIdProps extends SignProps {
  /** Sign slug ID, e.g. `"e001-emergency-exit"` or `"w001-flammable-material"`. */
  id: string;
}

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
 * Renders any ISO 7010 safety sign by slug ID.
 *
 * Useful for data-driven rendering where the sign ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs so callers can handle missing signs
 * gracefully without a try/catch.
 *
 * @example
 * ```tsx
 * <SignById id="e001-emergency-exit" width={64} />
 * ```
 */
export const SignById = React.memo<SignByIdProps>(
  ({ id, 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const sign = getSign(id);
    if (!sign) return null;

    const { attrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(sign.svg);
    const resolvedTitle = title ?? sign.name;
    const resolvedDesc = description ?? sign.description;
    const _w = width !== undefined ? _h(String(width)) : defaultWidth;
    const _ht = height !== undefined ? _h(String(height)) : defaultHeight;
    const descId = `iso-desc-${id}`;
    const titleId = `iso-title-${id}`;

    const svgHtml = `<svg ${attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${scopeIds(body, id)}</svg>`;

    return (
      <span
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
        style={{ display: 'contents', ...style }}
      />
    );
  },
);
SignById.displayName = 'SignById';
