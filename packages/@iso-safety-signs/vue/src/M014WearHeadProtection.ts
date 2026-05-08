// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<defs><clipPath id="m014-wear-head-protection-a"><path d="M221.57 708.803c0-19.506 15.813-35.32 35.32-35.32s35.319 15.814 35.319 35.32c0 19.507-15.813 35.32-35.319 35.32-19.507 0-35.32-15.813-35.32-35.32"/></clipPath><clipPath id="m014-wear-head-protection-b"><path d="M221.57 708.803c0-19.506 15.813-35.32 35.32-35.32s35.319 15.814 35.319 35.32c0 19.507-15.813 35.32-35.319 35.32-19.507 0-35.32-15.813-35.32-35.32"/></clipPath></defs><g clip-path="url(#m014-wear-head-protection-a)" transform="matrix(3.949 0 0 -3.949 -881.95 2931.597)"><path fill="#005387" fill-rule="nonzero" d="M256.897 742.369c-18.479 0-33.554-15.07-33.554-33.545s15.076-33.561 33.554-33.561 33.554 15.087 33.554 33.561-15.075 33.545-33.554 33.545"/></g><path fill="#fff" fill-rule="nonzero" d="M81.254 122.622a8.46 8.46 0 0 1 8.459-8.459 8.46 8.46 0 0 1 8.459 8.459 8.46 8.46 0 0 1-8.459 8.459 8.46 8.46 0 0 1-8.459-8.459m-46.34-17.757h180.478C218.421 27.693 95.678-18.181 58.004 84.514c-1.809 4.453-2.35 7.051-8.055 8.679l-8.961 2.558q-6.25 1.494-6.074 9.114"/><g clip-path="url(#m014-wear-head-protection-b)" transform="matrix(3.885 0 0 -3.885 -868.026 2886.45)"><path fill="#fff" fill-rule="nonzero" d="m275.302 714.069.018-.786c0-1.882-.299-3.784-.89-5.653-.207-.656-.638-1.381-1.184-2.3-1.753-2.949-4.401-7.405-4.401-17.21v-1.343a1.87 1.87 0 0 0-1.866-1.865h-15.845a1.866 1.866 0 0 0-1.865 1.865v5.709h-1.82c-3.678.001-4.989 2.708-4.989 5.241v4.764h-2.775c-.553 0-1.057.223-1.349.597-.419.539-.345 1.299-.208 1.841l2.306 9.14h-2.039l-2.184-8.656c-.443-1.757.063-2.895.565-3.54.664-.851 1.751-1.359 2.909-1.359h.798v-2.787c0-4.262 2.729-7.143 6.808-7.216v-3.734a3.85 3.85 0 0 1 3.843-3.843h15.845a3.85 3.85 0 0 1 3.843 3.843v1.343c0 9.262 2.481 13.437 4.123 16.2.588.987 1.095 1.84 1.371 2.714a20.8 20.8 0 0 1 .982 6.249 20 20 0 0 1-.017.786z"/></g>`;
const _DefaultDesc = `Wear head protection`;
const _DefaultTitle = 'Wear head protection';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M014WearHeadProtection = defineComponent({
  name: 'M014WearHeadProtection',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m014-wear-head-protection`;
      const titleId = `iso-title-m014-wear-head-protection`;
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
