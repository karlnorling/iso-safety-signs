// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M-200 0H0v200h-200z" style="fill:#fff;fill-rule:nonzero;stroke:none" transform="scale(-1 1)"/><path d="M-195 5H-5v190h-190z" style="fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="scale(-1 1)"/><path d="m43.967 22.7 107.765.24v140.262l16.248 10.991H60.215L43.967 163.44Zm79.57 5.496-74.313.478v132.378l1.91.717 72.402-21.984z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/><path d="m118.996 79.45-17.622-13.978v12.963s-9.7 7.406-23.111 7.99c-14.98.65-22.641-1.353-22.641-1.353v31.68s7.818 2.177 24.5-1.013c12.802-2.448 21.458-9.546 21.458-9.546v15.037z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Door opens by pushing on the right-hand side`;
const _DefaultTitle = 'Door opens by pushing on the right-hand side';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E023DoorOpensByPushingOnTheRightHandSide = defineComponent({
  name: 'E023DoorOpensByPushingOnTheRightHandSide',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e023-door-opens-by-pushing-on-the-right-hand-side`;
      const titleId = `iso-title-e023-door-opens-by-pushing-on-the-right-hand-side`;
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
