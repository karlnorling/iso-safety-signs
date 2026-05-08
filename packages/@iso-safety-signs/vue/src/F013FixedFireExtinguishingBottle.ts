// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 199.946 199.938"`;
const _Body = `<path d="M0 0h199.946v199.938H0Z" style="fill:#fff;stroke-width:6.80315"/><path fill="#a92121" fill-rule="evenodd" d="M5.393 5.394h189.16v189.15H5.393Z" style="fill:#9b2423;fill-opacity:1"/><path d="M74.059 29.348a43.026 43.026 0 0 0-43.026 43.026 43.03 43.03 0 0 0 16.54 33.781v21.172h-11.7v11.088h76.373v-11.088h-11.7v-21.172a43.03 43.03 0 0 0 16.54-33.781 43.026 43.026 0 0 0-43.027-43.026m0 35.895a7.13 7.13 0 0 1 7.13 7.13 7.13 7.13 0 0 1-7.13 7.132 7.13 7.13 0 0 1-7.13-7.131 7.13 7.13 0 0 1 7.13-7.131M52.412 109.45a43 43 0 0 0 21.647 5.95 43 43 0 0 0 21.648-5.95v17.877H52.412Z" style="fill:#fff;fill-opacity:1;stroke-width:4.224"/><path d="M154.38 49.484c-1.703 6.43-2.218 14.117-.976 20.704 2.502 9.38 8.177 16.651 15.27 22.684 1.251 1.126 2.666 1.9 4.072 2.626V76.003c-4.216-.67-7.376-4.444-9.651-7.773-3.833-5.902-6.279-12.355-8.715-18.746m-24.31 8.495c-.97.003-2.003.037-3.037.072 5.603 4.288 7.35 10.738 9.195 16.824 1.924 6.687 4.32 13.1 8.106 18.63 7.1 9.424 17.862 13.581 28.412 10.553-9.334-3.884-15.078-12.975-19.376-20.788-3.895-6.158-4.996-13.94-10.183-19-3.796-3.6-8.111-6.3-13.117-6.291m1.51 28.191c-.655 12.039 3.41 22.05 10.71 30.413 7.731 9.03 20.082 13.627 30.455 16.955v-19.496c-6.636-.13-12.679-2.335-17.779-5.406-10.081-6.115-17.24-13.133-23.386-22.466m-13.97 37.462c9.408 2.24 13.805 8.295 19.053 14.608 4.199 5.36 9.768 8.548 15.904 9.632 7.643 1.286 14.917.096 20.179-5.537-12.239-2.175-19.422-9.7-27.77-16.57-9.771-6.54-17.36-9.689-27.367-2.133m13.93 19.396c1.11 6.173 3.051 11.974 6.56 16.685 9.654 11.379 22.191 11.169 34.646 11.391V151.61c-7.904 1.853-17.589 2.734-24.913.946-6.679-1.37-11.709-5.331-16.293-9.527" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.137974px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Fixed fire extinguishing bottle`;
const _DefaultTitle = 'Fixed fire extinguishing bottle';
const _DefaultWidth = `199.946`;
const _DefaultHeight = `199.938`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F013FixedFireExtinguishingBottle = defineComponent({
  name: 'F013FixedFireExtinguishingBottle',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f013-fixed-fire-extinguishing-bottle`;
      const titleId = `iso-title-f013-fixed-fire-extinguishing-bottle`;
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
