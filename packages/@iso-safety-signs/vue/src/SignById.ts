import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import { getSign } from '@iso-safety-signs/core';
import { signProps } from './SignProps';

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
 * Returns `null` for unrecognised IDs.
 *
 * @example
 * ```html
 * <SignById id="e001-emergency-exit" :width="64" />
 * ```
 */
export const SignById = defineComponent({
  name: 'SignById',
  inheritAttrs: false,
  props: {
    ...signProps,
    /** Sign slug ID, e.g. `"e001-emergency-exit"` or `"w001-flammable-material"`. */
    id: { type: String as PropType<string>, required: true },
  },
  setup(props, { attrs }) {
    return () => {
      const sign = getSign(props.id);
      if (!sign) return null;

      const { attrs: svgAttrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(sign.svg);
      const resolvedTitle = props.title ?? sign.name;
      const resolvedDesc = props.description ?? sign.description;
      const _w = props.width !== undefined ? _h(String(props.width)) : defaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : defaultHeight;
      const descId = `iso-desc-${props.id}`;
      const titleId = `iso-title-${props.id}`;

      const svgHtml = `<svg ${svgAttrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${body}</svg>`;

      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
