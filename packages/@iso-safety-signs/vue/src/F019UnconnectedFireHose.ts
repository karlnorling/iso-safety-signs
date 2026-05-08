// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path fill="#a92121" fill-rule="evenodd" d="M5.419 5.423h189.16v189.15H5.419z" style="fill:#9b2423;fill-opacity:1"/><g fill="none" stroke="#fff" stroke-width="6"><path d="M66.795 97.957c-2.925-2.21-3.303-7.17-1.494-10.839 1.773-3.595 6.078-6.782 10.117-6.782"/><path d="M75.138 80.335c8.728-.135 15.44 7.639 15.38 16.105-.073 10.38-9.367 18.293-19.482 18.058-12.044-.28-21.171-11.112-20.755-22.891.485-13.718 12.87-24.07 26.322-23.467 15.403.69 26.988 14.638 26.196 29.775-.895 17.095-16.418 29.921-33.248 28.937-18.796-1.099-32.87-18.207-31.692-36.737 1.305-20.506 20.005-35.833 40.243-34.458 22.221 1.51 38.808 21.81 37.235 43.763-1.716 23.943-23.622 41.794-47.297 40.02-25.671-1.923-44.79-25.44-42.816-50.844.967-12.446 6.821-24.233 16.047-32.623"/><path d="M64.686 39.046c-9.355 4.962-19.9 13.706-23.602 17.084"/></g><path fill="#fff" d="m64.434 33.506 4.456-2.27 4.993 9.801-4.455 2.27zm30.482-6.372L75.22 38.281l-3.317-6.888 20.58-9.327z"/><path d="M157.532 42.102c-1.935 7.305-2.52 16.04-1.109 23.524 2.843 10.659 9.291 18.92 17.35 25.774 1.422 1.28 3.03 2.159 4.627 2.984V72.233c-4.79-.76-8.38-5.049-10.966-8.831-4.355-6.706-7.133-14.039-9.902-21.3m-27.621 9.652c-1.103.003-2.276.042-3.45.081 6.366 4.873 8.351 12.202 10.447 19.116 2.186 7.599 4.908 14.885 9.21 21.17 8.068 10.706 20.295 15.43 32.282 11.989-10.604-4.412-17.132-14.743-22.015-23.62-4.426-6.997-5.677-15.84-11.57-21.588-4.313-4.09-9.216-7.158-14.904-7.148m1.716 32.032c-.745 13.678 3.873 25.054 12.17 34.555 8.783 10.26 22.816 15.484 34.603 19.265v-22.152c-7.54-.147-14.406-2.653-20.201-6.142-11.455-6.949-19.59-14.922-26.572-25.526m-15.874 42.565c10.69 2.545 15.686 9.424 21.65 16.598 4.77 6.09 11.097 9.713 18.07 10.944 8.683 1.461 16.95.108 22.927-6.292-13.905-2.47-22.067-11.021-31.552-18.826-11.103-7.433-19.725-11.01-31.095-2.424m15.828 22.038c1.26 7.014 3.467 13.605 7.454 18.957 10.969 12.93 25.214 12.691 39.365 12.944v-22.151c-8.98 2.105-19.985 3.107-28.306 1.075-7.589-1.558-13.304-6.057-18.513-10.825" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.15677px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/><path d="M111.206 43.447h6v10h-6z" style="fill:#fff;fill-opacity:1" transform="rotate(32)"/>`;
const _DefaultDesc = `Unconnected fire hose`;
const _DefaultTitle = 'Unconnected fire hose';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F019UnconnectedFireHose = defineComponent({
  name: 'F019UnconnectedFireHose',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f019-unconnected-fire-hose`;
      const titleId = `iso-title-f019-unconnected-fire-hose`;
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
