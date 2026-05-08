// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff;stroke:none;fill-rule:nonzero"/><path d="M5 5h190v190H5z" style="fill:#237f52;stroke:none;fill-rule:nonzero"/><path d="M50.25 98.594C31.216 104.79 16.642 116.93 15 135v50h135v-50c-1.64-18.07-16.22-30.21-35.25-36.406L82.562 175z" style="fill:#fff;stroke:none"/><path d="M46 130.69c-5.891 0-10.688 4.77-10.688 10.66 0 5.88 4.797 10.65 10.688 10.65s10.656-4.77 10.656-10.66S51.891 130.68 46 130.68zm0 7.16c1.933 0 3.5 1.56 3.5 3.5 0 1.93-1.567 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.94 1.567-3.5 3.5-3.5" style="fill:#237f52;stroke:none"/><path d="M150 16.5V34h-17.5v15H150v17.5h15V49h17.5V34H165V16.5z" style="fill:#fff;stroke:none"/><path d="M110 70a25 25 0 1 1-50 0 25 25 0 1 1 50 0" style="fill:#fff;stroke:none" transform="matrix(1.1 0 0 1.2144 -11 -20.372)"/><path d="M47.961 70C55 130 110 130 115 70" style="fill:none;stroke:#fff;stroke-width:6;stroke-linecap:round;stroke-linejoin:round"/><path d="M46.961 152c3.179 27.1 23.159 33.18 33.325 18.24" style="fill:none;stroke:#237f52;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"/><path d="M120 145h5v40h-5z" style="fill:#237f52;fill-rule:nonzero"/><path d="M79 117h6v64l-6-15z" style="fill:#fff;fill-rule:nonzero"/>`;
const _DefaultDesc = `Doctor`;
const _DefaultTitle = 'Doctor';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E009Doctor = defineComponent({
  name: 'E009Doctor',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e009-doctor`;
      const titleId = `iso-title-e009-doctor`;
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
