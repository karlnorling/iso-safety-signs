// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M123.648 149.116h50.048v50.046h-50.048z" style="fill:#9b2423;fill-opacity:1;stroke-width:.264583" transform="translate(-122.214 -147.68)"/><path d="M162.71 160.396c-.458 1.731-.597 3.801-.263 5.575.674 2.527 2.202 4.485 4.112 6.109.338.303.718.512 1.097.707v-5.25c-1.135-.18-1.986-1.196-2.599-2.093-1.032-1.59-1.69-3.327-2.347-5.048m-6.546 2.287c-.262.001-.54.01-.818.02 1.509 1.155 1.98 2.892 2.476 4.53.518 1.801 1.163 3.528 2.183 5.018 1.912 2.537 4.81 3.657 7.651 2.841-2.513-1.045-4.06-3.494-5.218-5.598-1.049-1.658-1.345-3.754-2.742-5.116-1.022-.97-2.184-1.697-3.532-1.694m.406 7.592c-.176 3.242.918 5.938 2.885 8.19 2.081 2.432 5.407 3.67 8.201 4.566v-5.25c-1.787-.035-3.414-.629-4.788-1.456-2.715-1.647-4.643-3.536-6.298-6.05m-3.762 10.089c2.534.603 3.718 2.233 5.131 3.933 1.13 1.444 2.63 2.302 4.283 2.594 2.058.347 4.017.026 5.434-1.49-3.296-.586-5.23-2.613-7.478-4.463-2.631-1.761-4.675-2.61-7.37-.574m3.752 5.223c.298 1.662.821 3.224 1.766 4.493 2.6 3.064 5.976 3.008 9.33 3.068v-5.25c-2.128.499-4.736.736-6.709.254-1.798-.369-3.153-1.435-4.387-2.565" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.0371557px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-122.214 -147.68)"/><path d="M131.602 155.521v10.176h2.707v-1.475h-1.233v-7.227h7.227v7.227h-1.602v1.475h3.077v-10.176zm5.087 2.222a2.866 2.866 0 1 0 0 5.733 2.866 2.866 0 0 0 0-5.733m-.758 6.27c-.645 0-1.164.548-1.164 1.228v16.695c-.189.144-.451.3-.717.29-.478-.019-.437-.717-.437-.717v-5.64c.018-.969-1.22-1.762-2.12-1.854-1.214.014-1.34.983-1.34.983v8.886l3.961 7.74v1.27h13.207v-2.827c.954-.432 1.507-1.156 1.525-2.334v-12.141c.011-.436-.504-.985-1.223-1.008-1.12.032-1.558 1.503-1.739 1.523-.482-.024.69-3.157-1.892-3.118-1.366.022-1.15 1.394-1.645 1.387-.31.004-.038-2.82-1.858-2.827-1.099-.013-2.147 1.483-2.147 1.483l-.211-.192v-7.599c0-.68-.519-1.228-1.163-1.228z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:1.265;stroke-dashoffset:2.39055;paint-order:markers stroke fill" transform="translate(-122.214 -147.68)"/>`;
const _DefaultDesc = `Fire alarm call point`;
const _DefaultTitle = 'Fire alarm call point';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F005FireAlarmCallPoint = defineComponent({
  name: 'F005FireAlarmCallPoint',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f005-fire-alarm-call-point`;
      const titleId = `iso-title-f005-fire-alarm-call-point`;
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
