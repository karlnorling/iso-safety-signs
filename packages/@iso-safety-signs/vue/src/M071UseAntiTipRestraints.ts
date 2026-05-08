// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M10.583 64.69c0-19.36 15.695-35.057 35.057-35.057S80.698 45.33 80.698 64.691 65.003 99.748 45.64 99.748c-19.362 0-35.057-15.694-35.057-35.057" style="display:inline;stroke-width:.264583" transform="translate(-10.583 -29.633)"/><path d="M59.65 44.066v5.18h4.065v3.328H59.65v30.34H58.4v-30.34h-1.626v3.925H50.77v1.988H37.935v24.427H25.941v2.401H65.34v-41.25ZM39.41 45.64l-1.05 1.818 4.103 2.37H28.224v2.1h14.35l-4.107 2.37 1.05 1.819 9.02-5.207zm17.365 1.647v1.959H58.4v-1.96zm-1.205 1.038a2.575 2.575 0 0 0 0 5.15v-1.763h7.403v-1.624H55.57ZM41.617 80.437h13.101l1.574 2.477H40.044z" style="color:#000;fill:#fff;fill-opacity:1;-inkscape-stroke:none;paint-order:stroke fill markers" transform="translate(-10.583 -29.633)"/>`;
const _DefaultDesc = `Use anti-tip restraints`;
const _DefaultTitle = 'Use anti-tip restraints';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M071UseAntiTipRestraints = defineComponent({
  name: 'M071UseAntiTipRestraints',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m071-use-anti-tip-restraints`;
      const titleId = `iso-title-m071-use-anti-tip-restraints`;
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
