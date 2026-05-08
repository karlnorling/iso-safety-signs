// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M88.62 24a6.776 6.776 0 1 0 0 13.551 6.776 6.776 0 0 0 0-13.551m-4.135 14.59a6.05 6.05 0 0 0-5.612 4.096L72.029 62.59a3.3 3.3 0 0 0-.52 2.392l3.303 19.874-17.636 6.336a3.22 3.22 0 0 0-1.947 4.132 3.22 3.22 0 0 0 4.13 1.946l20.403-7.331c1.684-.605 2.245-2.678 1.947-4.13-.212-1.34-.483-2.743-.71-4.108.756 1.806 1.412 3.784 2.035 5.597l-.024 21.833a3.303 3.303 0 0 0 3.308 3.314 3.303 3.303 0 0 0 3.314-3.307l.025-22.612c-.14-.72-.346-1.276-.57-1.867l-6.08-17.017a6 6 0 0 0 .468-1.034l2.32-6.749.128 1.53a3.21 3.21 0 0 0 1.417 2.413c.386.402.881.71 1.459.872l13.533 3.797-2.006 6.479s-.26.89-.206 1.395c.048.447.417 1.236.417 1.236l26.722 47.373-8.58 4.039-9.915-8.244a2.3 2.3 0 0 0-.3-.209l-6.535-5.433a2.275 2.275 0 0 0-3.212.296 2.275 2.275 0 0 0 .296 3.211l35.85 29.807a2.3 2.3 0 0 0 .298.207c3.803 3.236 6.031 5.9 9.726 5.923a5.804 5.804 0 1 0 0-11.606 5.8 5.8 0 0 0-3.041.868l-9.99-17.71 8.445-3.975a1.495 1.495 0 0 0 .717-1.994 1.495 1.495 0 0 0-1.993-.718l-8.645 4.07-26.78-47.478 2.207-7.132a3.22 3.22 0 0 0 2.09-2.192 3.217 3.217 0 0 0-2.233-3.976l-13.475-3.78L91.044 45.2a3.2 3.2 0 0 0-.42-1.347 6.05 6.05 0 0 0-4.043-4.932 6.1 6.1 0 0 0-2.096-.332m36.102 34.23a6.776 6.776 0 1 0 0 13.55 6.776 6.776 0 0 0 0-13.55M29.551 83.086v3.44h21.387v14.94H69.18v14.42h18.416v14.942h17.72v15.114h18.243v14.42h17.72V176h29.17v-3.44h-25.73v-15.636H127v-14.42h-18.243v-15.115h-17.72v-14.941H72.62v-14.42H54.378v-14.94Zm90.778 5.169q-.27.004-.544.036a5.29 5.29 0 0 0-4.496 3.847l15.052 26.685 12.14-5.167 8.649 16.515a3.303 3.303 0 0 0 4.469 1.397 3.303 3.303 0 0 0 1.396-4.469l-10.49-20.031c-1.698-1.956-3.147-1.899-4.933-1.238l-13.72 5.84-1.243-10.68 5.706 4.361a3.44 3.44 0 0 0 4.08.243l13.851-6.56c3.91-2.127 1.508-7.916-3.058-5.597l-12.087 5.65-10.429-8.672a5.29 5.29 0 0 0-4.343-2.16m-3.062 24.295.494 4.245a5.3 5.3 0 0 0 4.054 4.556c.158.057.324.091.488.127zm11.469 15.02 10.393 18.425-17.906-14.888z" style="display:inline;fill:#fff;fill-opacity:1;stroke-width:3.54734"/>`;
const _DefaultDesc = `Evacuation chair`;
const _DefaultTitle = 'Evacuation chair';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E060EvacuationChair = defineComponent({
  name: 'E060EvacuationChair',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e060-evacuation-chair`;
      const titleId = `iso-title-e060-evacuation-chair`;
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
