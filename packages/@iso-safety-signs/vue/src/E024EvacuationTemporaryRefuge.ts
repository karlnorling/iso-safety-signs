// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="m29.772 21.893-7.594 7.59 22.09 22.095h-22.08l10.066 10.065h29.682v-29.69l-10.081-10.06v22.09zM22.178 169.95l7.59 7.595 22.095-22.091v22.08l10.066-10.065v-29.682h-29.69l-10.061 10.08h22.09zM177.73 29.488l-7.59-7.594-22.095 22.09v-22.08L137.98 31.97v29.682h29.69l10.06-10.08h-22.09zm-7.6 148.052 7.595-7.59-22.092-22.096h22.08l-10.066-10.065h-29.682v29.69l10.081 10.061v-22.09z" style="fill:#fff;stroke:none"/><path fill="#fff" d="M97.455 66.419c0 4-3.25 7.293-7.293 7.293-4.021 0-7.293-3.294-7.293-7.293a7.29 7.29 0 0 1 7.293-7.293 7.28 7.28 0 0 1 7.293 7.293m34.028 63.047c-2.005 1.19-4.693.43-5.85-1.465l-9.662-16.746H92.33c-3.856.022-7.106-2.755-7.426-6.622L83.625 82.49c-.187-3.867 2.755-7.227 6.655-7.447 3.878-.21 7.16 2.798 7.425 6.632l.474 6.258h13.639c1.85.066 3.294 1.487 3.294 3.316 0 1.85-1.487 3.228-3.294 3.338H98.564l.177 5.508h18.244c1.4.044 2.754.772 3.525 2.06l12.439 21.484c1.145 2.093.54 4.605-1.466 5.828"/><path fill="#fff" d="M119.806 125.808c-4.286 9.552-13.816 16.261-24.965 16.261-15.148 0-27.41-12.284-27.41-27.41 0-9.806 5.2-18.333 12.945-23.17l.396 6.776c-4.627 3.977-7.602 9.827-7.602 16.394 0 11.986 9.707 21.67 21.671 21.67 10.411 0 19.048-7.403 21.109-17.197z"/>`;
const _DefaultDesc = `Evacuation temporary refuge`;
const _DefaultTitle = 'Evacuation temporary refuge';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E024EvacuationTemporaryRefuge = defineComponent({
  name: 'E024EvacuationTemporaryRefuge',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e024-evacuation-temporary-refuge`;
      const titleId = `iso-title-e024-evacuation-temporary-refuge`;
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
