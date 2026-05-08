// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M36.513 110.199c0-19.36 15.694-35.057 35.056-35.057 19.363 0 35.058 15.696 35.058 35.057 0 19.363-15.695 35.057-35.058 35.057-19.362 0-35.056-15.694-35.056-35.057" style="stroke-width:.264583" transform="translate(-36.513 -75.142)"/><path d="M71.57 88.11c-10.01 0-18.1 8.106-18.1 18.131v10.817h2.096V106.24c0-8.903 7.121-16.037 16.005-16.037s16.004 7.134 16.004 16.037v10.817h2.094V106.24c0-10.025-8.089-18.13-18.098-18.13m-4.058 4.814v6.51c-2.577 1.433-4.328 4.184-4.328 7.332 0 4.619 3.767 8.385 8.385 8.385s8.385-3.766 8.385-8.385c0-3.147-1.75-5.898-4.327-7.332v-6.51zm2.1 2.1h3.916v3.591a8.35 8.35 0 0 0-3.916 0zm-7.282 1.012-1.486 1.486 2.647 2.648 1.487-1.486zm18.48 0-2.648 2.648 1.486 1.486 2.648-2.648zM71.57 100.5a6.25 6.25 0 0 1 6.266 6.265 6.25 6.25 0 0 1-6.266 6.264 6.247 6.247 0 0 1-6.263-6.264 6.25 6.25 0 0 1 6.263-6.265m-14.117 5.21v2.102h3.744v-2.102zm24.492 0v2.102h3.744v-2.102zm-18.453 7.643-2.647 2.648 1.486 1.486 2.648-2.648zm16.157 0-1.486 1.486 2.648 2.648 1.486-1.486zm-26.177 5.64v4.877H89.67v-4.876zm.149 6.18-4.698 4.7 1.485 1.484 4.699-4.697zm35.9 0-1.484 1.487 4.697 4.697 1.484-1.485zm-19 .47v6.644h2.1v-6.645z" style="color:#000;fill:#fff;fill-opacity:1;stroke-width:1;-inkscape-stroke:none;paint-order:stroke fill markers" transform="translate(-36.513 -75.142)"/>`;
const _DefaultDesc = `Use lamp in luminaire with shield`;
const _DefaultTitle = 'Use lamp in luminaire with shield';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M070UseLampInLuminaireWithShield = defineComponent({
  name: 'M070UseLampInLuminaireWithShield',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m070-use-lamp-in-luminaire-with-shield`;
      const titleId = `iso-title-m070-use-lamp-in-luminaire-with-shield`;
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
