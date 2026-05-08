// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M5.419 5.423h189.16v189.15H5.419z" style="fill:#9b2423;fill-opacity:1"/><g fill="#fff"><path d="M94.89 172.184c6.354-1.913 12.895-3.969 18.43-7.68-9.136-11.223-18.998-21.898-29.007-32.359-3.821-.461-8.73 11.423-11.656 4.095-5.516-11.262-8.655-23.491-13.046-35.208-3.222-9.89-6.951-19.676-9.233-29.832 2.287-6.14 13.968 3.043 11.75-4.999-2.78-13.03-5.468-26.071-8.156-39.112-10.264-.677-20.13 4.068-27.297 11.195.22 14.36-.542 28.778.86 43.088 5.101 29.515 16.05 59.355 37.846 80.697 4.616 4.65 9.837 8.62 14.925 12.727 4.932-.443 9.788-1.408 14.585-2.62z"/><path d="M119.062 160.73c2.555-1.204 4.65-4.582 2.314-7.03-3.773-4.76-8.13-9.024-12.066-13.65-4.199-4.742-8.545-9.36-12.44-14.359-2.01-2.616-5.646-.974-7.688.707-2.169 1.347-3.635 3.949-.926 5.588 9.022 10.063 18.139 20.054 27.594 29.713.858.885 2.34-.67 3.212-.969M71.878 67.425c1.207-.872 2.905-1.903 2.831-3.601-.424-3.636-1.523-7.158-2.283-10.733-1.96-8.112-3.73-16.28-6.068-24.293-.432-1.418-.907-3.305-2.732-3.335-2.153-.3-4.499-.5-6.552.346-.797 1.433.006 3.293.13 4.886 1.63 8.663 3.658 17.244 5.445 25.875.813 3.521 1.347 7.13 2.578 10.537.678 1.848 3.012 1.205 4.506 1.016.737-.152 1.47-.36 2.145-.698"/></g><path d="M153.943 49.45c-1.707 6.443-2.222 14.147-.978 20.749 2.508 9.401 8.195 16.688 15.303 22.734 1.255 1.128 2.672 1.903 4.081 2.631V76.026c-4.225-.67-7.392-4.453-9.672-7.79-3.841-5.914-6.292-12.382-8.734-18.787m-24.363 8.513c-.972.003-2.008.037-3.043.072 5.615 4.298 7.366 10.762 9.215 16.86 1.928 6.703 4.33 13.13 8.123 18.673 7.117 9.443 17.901 13.61 28.474 10.575-9.353-3.892-15.11-13.004-19.417-20.834-3.905-6.171-5.008-13.971-10.206-19.041-3.805-3.608-8.13-6.314-13.146-6.305m1.514 28.253c-.657 12.065 3.416 22.099 10.734 30.48 7.747 9.05 20.125 13.656 30.521 16.992v-19.539c-6.65-.13-12.707-2.34-17.818-5.418-10.104-6.129-17.279-13.162-23.438-22.515zm-14.002 37.544c9.429 2.245 13.836 8.313 19.096 14.64 4.207 5.373 9.789 8.567 15.939 9.653 7.659 1.29 14.95.096 20.222-5.55-12.265-2.178-19.464-9.72-27.83-16.605-9.793-6.555-17.398-9.71-27.427-2.138m13.961 19.439c1.112 6.187 3.058 12 6.575 16.72 9.675 11.405 22.24 11.195 34.721 11.418v-19.539c-7.92 1.857-17.627 2.741-24.967.949-6.693-1.374-11.734-5.343-16.329-9.548" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.138277px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Fire emergency telephone`;
const _DefaultTitle = 'Fire emergency telephone';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F006FireEmergencyTelephone = defineComponent({
  name: 'F006FireEmergencyTelephone',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f006-fire-emergency-telephone`;
      const titleId = `iso-title-f006-fire-emergency-telephone`;
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
