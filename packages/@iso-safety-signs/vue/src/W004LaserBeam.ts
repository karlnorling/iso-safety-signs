// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path d="m43.875 491.5 256-443.3 256 443.3z" style="fill:#f9a800;fill-opacity:1;stroke:none;overflow:visible" transform="matrix(1 0 0 .99591 .125 2.033)"/><g style="fill:#000;stroke:#000"><path d="M-392.229 208.248h8.932v225.886h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="translate(685.768 32.95)"/><path d="M-462.147 135.919h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-15 468.022 -2587.99)"/></g><g style="fill:#000;stroke:#000"><path d="M-392.229 208.248h8.932v225.886h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-30 16.605 -941.995)"/><path d="M-462.147 135.919h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-45 94.292 -630.18)"/></g><g style="fill:#000;stroke:#000"><path d="M-392.229 208.248h8.932v225.886h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-60 -16.344 -256.227)"/><path d="M-462.147 135.919h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-75 14.16 -210.402)"/></g><path d="M-325.657-500.706h8.932v302.24h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582659;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(-90 359.359 -326.41)"/><path d="M-214.352-531.647h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(255 355.526 -246.63)"/><g style="fill:#000;stroke:#000"><path d="M-392.229 208.248h8.932v225.886h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(240 -35.367 139.701)"/><path d="M-462.147 135.919h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(225 -49.962 125.505)"/></g><g style="fill:#000;stroke:#000"><path d="M-392.229 208.248h8.932v225.886h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(210 -40.465 245.79)"/><path d="M-462.147 135.919h8.932v147.933h-8.932z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" transform="rotate(195 -70.342 232.27)"/></g>`;
const _DefaultDesc = `Laser beam`;
const _DefaultTitle = 'Laser beam';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W004LaserBeam = defineComponent({
  name: 'W004LaserBeam',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w004-laser-beam`;
      const titleId = `iso-title-w004-laser-beam`;
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
