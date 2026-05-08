// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="m109.947 83.286-8.16 30.228H79.442v6.433h22.345v66.74h4.513l-4.306 38.439c-1.865 16.649 19.08 18.478 20.937 3.555l5.225-41.995h8.755l5.175 42.233c1.762 14.382 22.667 12.429 20.916-2.7l-4.577-39.534h4.78v-66.74h22.335v-6.433h-22.335l-8.28-30.175 24.863 8.302 17.927 29.067c6.809 11.041 22.792 1.41 15.95-9.789L194.78 80.003c-2.007-3.286-3.383-4.364-7.433-5.753l-30.196-10.36c-2.623-.9-5.177-1.859-8.583-1.848l-30.953.005c-4.042-.007-6.48.709-9.987 1.91L76.053 74.771c-1.886.646-3.014 1.404-4.05 3.059L51.34 110.865c-6.778 10.836 9.297 20.337 16.038 9.655l18.289-28.978zm38.378-48.643c-3.427-8.753-13.291-13.074-22.033-9.652s-13.051 13.293-9.624 22.045 13.291 13.074 22.033 9.652 13.051-13.292 9.624-22.045m-11.563 18.823c7.008-2.353 10.787-9.927 8.441-16.918s-9.93-10.751-16.939-8.398-10.787 9.927-8.441 16.918 9.93 10.751 16.939 8.398m18.127 26.029 27.214 9.353 18.288 29.571c4.993 8.074 14.446.872 10.185-5.624-6.463-9.851-12.367-20.057-18.55-30.085-2.53-4.295-2.533-4.026-7.49-5.635l-29.627-9.771zm-44.835-12.064L77.845 77.918c-1.764.574-3.063 1.727-3.958 3.181l-19.512 31.73c-4.159 6.369 5.866 12.543 9.895 6.018l18.673-30.243 26.978-9.66zm14.069 119.255h-13.917l-4.589 39.581c-1.171 10.102 12.53 12.342 13.717 2.024zm30.496 0h-13.727l5.03 42.137c1.105 9.255 14.81 8.394 13.579-1.786zM118.123 65.874h28.745V82.67h-28.745z"/>`;
const _DefaultDesc = `Use protective apron`;
const _DefaultTitle = 'Use protective apron';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M026UseProtectiveApron = defineComponent({
  name: 'M026UseProtectiveApron',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m026-use-protective-apron`;
      const titleId = `iso-title-m026-use-protective-apron`;
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
