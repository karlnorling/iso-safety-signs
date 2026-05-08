// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M110.914 121.413v6.884a9.9 9.9 0 0 1-1.615 5.419h1.8c3.292 0 5.984 2.692 5.984 5.984s-2.692 5.984-5.984 5.984h-7.02v73.421a3.13 3.13 0 0 1-3.121 3.121 3.13 3.13 0 0 1-3.121-3.121v-73.421h-7.02c-3.292 0-5.984-2.692-5.984-5.984s2.692-5.984 5.984-5.984h1.801a9.87 9.87 0 0 1-1.615-5.419v-6.884c-3.447-2.868-5.65-7.186-5.65-11.995V59.846c0-8.584 7.022-15.606 15.606-15.606s15.606 7.022 15.606 15.606v49.573c0 4.808-2.203 9.127-5.65 11.995m59.154-24.2v67.627c9.899 4.434 16.795 14.372 16.795 25.92 0 15.678-12.71 28.388-28.388 28.388-3.128 0-6.139-.506-8.953-1.44l9.22-9.22c4.514-4.514 4.514-11.9 0-16.414l-3.507-3.507c-4.514-4.514-11.9-4.514-16.414 0l-8.116 8.116a28.5 28.5 0 0 1-.619-5.924c0-11.085 6.354-20.687 15.618-25.361a29 29 0 0 1 1.177-.56V97.215l-.674-.313c-9.537-4.577-16.121-14.324-16.121-25.609 0-15.678 12.711-28.388 28.389-28.388a28.4 28.4 0 0 1 8.953 1.44l-9.22 9.22c-4.514 4.514-4.514 11.9 0 16.414l3.507 3.507c4.514 4.514 11.9 4.514 16.414 0l8.116-8.116a28.5 28.5 0 0 1 .618 5.924c0 11.548-6.897 21.486-16.795 25.92"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775A105.42 105.42 0 0 0 26.631 132.5c0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Not to be serviced by users`;
const _DefaultTitle = 'Not to be serviced by users';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P069NotToBeServicedByUsers = defineComponent({
  name: 'P069NotToBeServicedByUsers',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-p069-not-to-be-serviced-by-users`;
      const titleId = `iso-title-p069-not-to-be-serviced-by-users`;
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
