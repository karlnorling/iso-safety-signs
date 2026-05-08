// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.677 0 132.5 0S0 59.322 0 132.5 59.323 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="M206.339 101.033h31.731a110.1 110.1 0 0 1 4.569 31.467 111 111 0 0 1-1.32 17.08h-34.981zm-179.797 1.302A110.2 110.2 0 0 0 22.36 132.5a111 111 0 0 0 1.13 15.778h39.379v8.661h27.225l8.089-8.661h23.8a3.5 3.5 0 0 0 3.489-3.489v-38.966a3.5 3.5 0 0 0-3.489-3.489h-23.8l-8.089-8.661H62.869v8.661zm116.91-9.031H197.4c2.765 0 5.029 2.262 5.029 5.028v53.948a5.044 5.044 0 0 1-5.029 5.029h-53.948c-2.765 0-5.028-2.262-5.028-5.029V98.332c0-2.765 2.263-5.028 5.028-5.028m42.09 16.886v30.232H155.31V110.19zm-3.079 3.079h-24.075v24.075h24.075zM67.939 98.995h6.117v52.622h-6.117zm34.343 13.062h15.359v25.975h-15.359zM80.901 167.17l44.171 27.408-43.865 27.232-4.027-6.568 27.607-16.812H43.979v-7.704h60.809l-27.914-16.989zm103.121 0-44.172 27.408 43.865 27.232 4.027-6.568-27.608-16.812h60.809v-7.704h-60.809l27.914-16.989z"/>`;
const _DefaultDesc = `Wear safety belts`;
const _DefaultTitle = 'Wear safety belts';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M020WearSafetyBelts = defineComponent({
  name: 'M020WearSafetyBelts',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m020-wear-safety-belts`;
      const titleId = `iso-title-m020-wear-safety-belts`;
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
