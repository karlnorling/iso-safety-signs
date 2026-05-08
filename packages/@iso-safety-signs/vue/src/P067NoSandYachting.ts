// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M152.153 157.232H64.81c17.971-42.076 49.34-79.19 96.157-110.581v129.812h7.813v9.416H95.46v-9.416h56.693zm-70.539 23.327a8.201 8.201 0 1 0-8.201 8.202 8.2 8.2 0 0 0 8.201-8.202m9.215 0a17.42 17.42 0 0 0-17.417-17.417 17.42 17.42 0 0 0-17.417 17.417 17.42 17.42 0 0 0 17.417 17.417 17.42 17.42 0 0 0 17.417-17.417m108.489 0a8.201 8.201 0 1 0-8.201 8.202 8.2 8.2 0 0 0 8.201-8.202m9.215 0a17.42 17.42 0 0 0-17.417-17.417 17.42 17.42 0 0 0-17.417 17.417 17.42 17.42 0 0 0 17.417 17.417 17.42 17.42 0 0 0 17.417-17.417"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No sand yachting`;
const _DefaultTitle = 'No sand yachting';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P067NoSandYachting = defineComponent({
  name: 'P067NoSandYachting',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-p067-no-sand-yachting`;
      const titleId = `iso-title-p067-no-sand-yachting`;
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
