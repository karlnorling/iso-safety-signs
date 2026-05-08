// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M0 132.501C0 59.321 59.32 0 132.5 0S265 59.321 265 132.5 205.68 265 132.5 265 0 205.685 0 132.501"/><path fill="#fff" d="M117.917 45.955c0-9.784 7.931-17.71 17.71-17.71a17.71 17.71 0 0 1 17.706 17.71 17.71 17.71 0 0 1-17.706 17.706c-9.78 0-17.71-7.926-17.71-17.706m44.13 78.599a9 9 0 0 1 .15 1.609c0 1.632-.553 3.077-1.215 4.479l-19.056 41.283a8.85 8.85 0 0 1-8.02 5.103 8.86 8.86 0 0 1-8.855-8.86 9 9 0 0 1 .666-3.377l18.104-39.689-3.396-20.295a2.02 2.02 0 0 0-2.364-1.384c-1.008.216-1.656 1.055-1.618 2.083l3.114 19.066-11.955 26.223-17.884 9.873 4.324-7.275V121.79l-2.261 4.015c-.183.385-.999 1.632-.999 1.632a8.9 8.9 0 0 1-4.376 3.044l-43.094 15.126a8.7 8.7 0 0 1-2.983.516 8.855 8.855 0 0 1-2.706-17.288 5 5 0 0 1 .366-.108c4.155-1.21 40.097-14.272 40.097-14.272l20.206-39.126a8.86 8.86 0 0 1 7.626-4.348h19.614a8.86 8.86 0 0 1 8.71 7.242l.042.253zm1.51 11.078 74.274-40.824a111 111 0 0 1 4.306 15.07l-89.367 49.125zm-108.654 77.15a113 113 0 0 1-10.417-11.707l79.846-43.886-.3.633-2.406 5.286a13.2 13.2 0 0 0-1.004 5.065c0 2.692.802 5.202 2.181 7.289z"/>`;
const _DefaultDesc = `Use handrail`;
const _DefaultTitle = 'Use handrail';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M012UseHandrail = defineComponent({
  name: 'M012UseHandrail',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m012-use-handrail`;
      const titleId = `iso-title-m012-use-handrail`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
