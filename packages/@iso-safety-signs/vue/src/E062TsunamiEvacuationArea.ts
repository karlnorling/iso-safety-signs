// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M191.736 106.749c-1.915 0-3.388 1.471-3.388 3.397 0 1.93 1.473 3.402 3.388 3.402 1.916 0 3.385-1.472 3.385-3.402 0-1.926-1.469-3.397-3.385-3.397m-.409 7.642c-3.346 0-10.03.01-10.03.01-1.43.045-1.681.327-2.232 1.145l-3.13 5.235c-.952 2.036 1.892 3.436 2.945 1.517l2.552-4.471c.048-.083.12-.103.213-.1l3.525.042c-.963 2.056-1.926 4.11-2.889 6.173-.296.77-.385 1.476-.464 2.494-.127 2.05-.24 4.114-.361 6.164-.038.271-.127.453-.454.453-2.576-.01-7.505-.065-7.505-.065-2.559.1-4.13 2.194-4.13 3.78l13.798-.031c1.221-.038 2.154-.389 2.264-1.768l.42-7.969c2.225 4.478 4.457 8.953 6.679 13.431.553.974 1.21 2.06 2.785 2.026l3.014.01-8.214-16.585c-.165-.313.055-.715.148-.894.826-1.75 1.606-3.292 2.435-5.104l2.989 3.532c.492.493.677.615 1.138.623l6.252.008c.904 0 1.631-.727 1.631-1.63 0-.904-.727-1.631-1.63-1.631-1.784-.019-3.382-.04-4.987-.04-.45.004-.557-.092-.746-.319a312 312 0 0 1-4.286-5.167c-.52-.553-.643-.894-1.73-.87zm-51.54 14.95a48.5 48.5 0 0 0-7.031.465v60.8h19.024l15.42-15.42c-11.078-1.68-24.296-6.252-25.537-18.395-.994-14.388 16.068-17.181 25.342-8.81l1.094-.719c-5.273-12.44-15.932-17.805-28.312-17.92m67.563 9.905-51.36 51.36h66.803v-51.36z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.343945" transform="translate(-124.86 -95.76)"/>`;
const _DefaultDesc = `Tsunami evacuation area`;
const _DefaultTitle = 'Tsunami evacuation area';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E062TsunamiEvacuationArea = defineComponent({
  name: 'E062TsunamiEvacuationArea',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e062-tsunami-evacuation-area`;
      const titleId = `iso-title-e062-tsunami-evacuation-area`;
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
