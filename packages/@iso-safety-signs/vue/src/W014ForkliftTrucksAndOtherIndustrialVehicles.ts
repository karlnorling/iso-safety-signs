// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M249.125 221.88 174.036 91.81a4.24 4.24 0 0 0-3.677-2.116 4.3 4.3 0 0 0-3.678 2.116L91.592 221.88a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.117h150.177a4.3 4.3 0 0 0 3.678-2.117 4.18 4.18 0 0 0 0-4.233" style="stroke-width:.264583" transform="translate(-91.017 -89.694)"/><path fill="#f6bd16" d="m299.88 48.2 256 443.3H43.875z" style="fill:#f9a800;fill-opacity:1" transform="matrix(.26458 0 0 .2635 0 .538)"/><path d="m162.346 138.397-25.29 65.417-1.119-.336-10.813-3.499-1.059 3.273 15.018 4.859 1.972-5.102h7.436c-.01.147-.023.294-.023.444 0 3.736 3.058 6.794 6.794 6.794s6.793-3.058 6.793-6.794c0-.15-.013-.297-.023-.444h17.662c.39 4.048 3.821 7.238 7.968 7.238 4.762 0 7.491-3.503 7.856-7.238h10.466v-15.155h-.013c.005-.087.013-.173.013-.262v-6.443a4.66 4.66 0 0 0-4.67-4.67h-9.751v-21.75c.02-2.513-.762-4.365-2.186-5.367-1.422-1.001-3.122-1.113-4.798-1.112h-13.213c-1.526.018-2.773.324-3.76.965-.986.64-1.625 1.57-2.073 2.542l-.017.038-15.536 40.291h-4.702l20.276-52.45zm9.051 12.5h13.183c1.506-.002 2.653.191 3.274.629.62.437 1.079 1.16 1.063 3.183v21.77h-3.374v-12.33c0-.997-.803-1.799-1.8-1.799h-2.026c-.703 0-1.31.398-1.604.983l-.601 1.189-2.2 3.997c-.3.424-.493.516-.704.566-.217.051-.546.03-.987-.102l-5.294-1.642a1.323 1.323 0 0 0-1.656.872 1.32 1.32 0 0 0 .05.889l-.367.518-1.679-1.984a.661.661 0 1 0-1.01.854l1.9 2.247-11.389 16.12h-1.328l13.097-34.009c.323-.695.643-1.117 1.102-1.415.463-.3 1.152-.523 2.35-.537zm11.443 4a2.988 2.988 0 1 0 0 5.976 2.988 2.988 0 0 0 0-5.977m-2.923 14.376v5.942h-5.437c-1.662 0-2.795.296-3.576.968s-.974 1.454-1.124 1.75c-.866 2.954-1.642 5.95-2.448 8.924h-9.536l10.652-15.077 1.7 2.01a.661.661 0 1 0 1.01-.854l-1.922-2.272.517-.73 5.104 1.582.007.002c.684.204 1.487.345 2.349.143.862-.203 1.695-.789 2.298-1.661l.037-.055zm-5.303 8.692c.57.014 1.159.11 1.626.193v8.7h-5.506l1.828-7.841c.203-.87 1.102-1.075 2.052-1.052m13.048 18.913a5.34 5.34 0 0 1 5.362 5.361 5.34 5.34 0 0 1-5.362 5.362 5.34 5.34 0 0 1-5.361-5.362 5.34 5.34 0 0 1 5.361-5.361m-32.4 2.428a4.127 4.127 0 0 1 4.147 4.147 4.127 4.127 0 0 1-4.147 4.148 4.13 4.13 0 0 1-4.148-4.148 4.13 4.13 0 0 1 4.148-4.147" style="color:#000;fill:#000;fill-opacity:1;stroke-width:.264583;-inkscape-stroke:none" transform="translate(-91.017 -89.694)"/>`;
const _DefaultDesc = `Forklift trucks and other industrial vehicles`;
const _DefaultTitle = 'Forklift trucks and other industrial vehicles';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W014ForkliftTrucksAndOtherIndustrialVehicles = defineComponent({
  name: 'W014ForkliftTrucksAndOtherIndustrialVehicles',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w014-forklift-trucks-and-other-industrial-vehicles`;
      const titleId = `iso-title-w014-forklift-trucks-and-other-industrial-vehicles`;
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
