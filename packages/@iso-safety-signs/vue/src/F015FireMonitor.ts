// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 199.946 199.938"`;
const _Body = `<path d="M0 0h199.946v199.938H0Z" style="fill:#fff;stroke-width:6.80315"/><path fill="#a92121" fill-rule="evenodd" d="M5.393 5.394h189.16v189.15H5.393Z" style="fill:#9b2423;fill-opacity:1"/><path d="m146.299 24.927-13.258 5.084 1.16 3.025-68.768 21.951L62 49.793l3.576-1.86-1.468-3.17-13.158 2.375-1.194-9.644 6.127-3.226-1.72-3.637c-9.887 5.342-19.671 10.813-29.493 16.272l2.158 3.394 5.997-3.462 7.522 6.153-10.843 10.84 1.9 2.932 3.48-2.033 4.722 10.457v8.34h-.832a2.776 2.776 0 0 0-2.781 2.783v.168a2.775 2.775 0 0 0 2.781 2.782h.832v62.447h-8.03v7.978h45.181v-7.978h-8.029V89.257h.831a2.776 2.776 0 0 0 2.782-2.782v-.168a2.776 2.776 0 0 0-2.782-2.782h-.83V68.149c2.915-1.274 52.685-23.018 67.737-29.208l1.115 2.907 13.257-5.083z" style="display:inline;fill:#fff;stroke-width:2.13818"/><path d="M154.23 48.49c-1.717 6.482-2.236 14.232-.984 20.873 2.522 9.458 8.244 16.788 15.394 22.87 1.262 1.135 2.688 1.915 4.106 2.647V75.225c-4.25-.674-7.436-4.48-9.73-7.835-3.864-5.95-6.33-12.457-8.786-18.9m-24.509 8.564c-.978.003-2.02.038-3.061.073 5.649 4.323 7.41 10.826 9.27 16.961 1.94 6.743 4.355 13.207 8.172 18.784 7.158 9.5 18.008 13.69 28.644 10.638-9.41-3.915-15.202-13.081-19.534-20.958-3.927-6.208-5.037-14.055-10.267-19.155-3.827-3.63-8.177-6.352-13.224-6.343m1.523 28.422c-.66 12.137 3.437 22.23 10.798 30.661 7.793 9.104 20.245 13.739 30.703 17.094v-19.655c-6.69-.131-12.782-2.354-17.924-5.45-10.164-6.166-17.382-13.24-23.577-22.65m-14.085 37.768c9.485 2.259 13.918 8.362 19.21 14.728 4.232 5.404 9.847 8.618 16.033 9.71 7.705 1.297 15.04.096 20.344-5.582-12.339-2.193-19.58-9.78-27.996-16.705-9.852-6.595-17.503-9.768-27.591-2.151m14.044 19.555c1.118 6.223 3.077 12.071 6.614 16.82 9.733 11.473 22.373 11.261 34.929 11.485V151.45c-7.969 1.869-17.733 2.757-25.116.954-6.734-1.382-11.805-5.374-16.427-9.604" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.139102px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Fire monitor`;
const _DefaultTitle = 'Fire monitor';
const _DefaultWidth = `199.946`;
const _DefaultHeight = `199.938`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F015FireMonitor = defineComponent({
  name: 'F015FireMonitor',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f015-fire-monitor`;
      const titleId = `iso-title-f015-fire-monitor`;
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
