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
  ${body}</svg>`;

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
