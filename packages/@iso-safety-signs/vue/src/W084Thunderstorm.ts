// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.286 61.383"`;
const _Body = `<path fill="#f9a800" stroke="#000" stroke-linejoin="round" stroke-width="3.749" d="M35.143 1.874 68.412 59.51H1.874Z"/><path d="M82.072 99.365c-1.193 0-2.228.62-2.774 1.54-.875-.96-2.177-1.515-3.55-1.516-1.894.004-3.591 1.06-4.28 2.659h-1.154c-1.995 0-3.496.921-3.496 3.6v.44c0 1.009.202 1.916.866 2.568.317.358.55.372 1.008.372H87.68c.723 0 .897.003 1.168-.62.077-.229.12-.467.12-.713v-1.567c0-1.302-1.216-2.555-2.814-2.468.318-2.233-.654-4.107-3.117-4.295zm-12.84 11.028s-1.424.877-1.638 1.343a.927.927 0 1 0 1.688.774c.214-.466-.05-2.117-.05-2.117m8.134.001-7.648 9.119 5.172-.932-6.642 9.167 11.618-11.103-5.098.612 6.863-6.863zm6.968.87s-1.424.877-1.638 1.343a.928.928 0 1 0 1.688.775c.214-.467-.05-2.118-.05-2.118m-16.239 5.895s-1.424.876-1.637 1.342a.93.93 0 0 0 1.688.775c.214-.466-.05-2.117-.05-2.117m17.39.123s-1.423.877-1.637 1.343a.928.928 0 1 0 1.688.774c.214-.466-.05-2.117-.05-2.117m-5.568 5.148s-1.424.877-1.637 1.343a.928.928 0 1 0 1.688.774c.214-.466-.05-2.117-.05-2.117m7.812.122s-1.424.877-1.638 1.343a.928.928 0 1 0 1.688.774c.214-.466-.05-2.117-.05-2.117m-22.906.05s-1.424.876-1.638 1.342a.928.928 0 1 0 1.688.774c.214-.466-.05-2.117-.05-2.117" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.25;stroke-linecap:butt;stroke-dasharray:none;stroke-opacity:.387153" transform="translate(-41.804 -74.348)"/>`;
const _DefaultDesc = `Thunderstorm`;
const _DefaultTitle = 'Thunderstorm';
const _DefaultWidth = `265.647`;
const _DefaultHeight = `231.998`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W084Thunderstorm = defineComponent({
  name: 'W084Thunderstorm',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w084-thunderstorm`;
      const titleId = `iso-title-w084-thunderstorm`;
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
