// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M157.58 208.386 82.49 78.316a4.24 4.24 0 0 0-3.677-2.116 4.3 4.3 0 0 0-3.678 2.117L.046 208.386a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.117h150.178a4.3 4.3 0 0 0 3.677-2.117 4.18 4.18 0 0 0 0-4.233" style="stroke-width:.264583" transform="translate(.53 -76.2)"/><path fill="#f9a800" d="M147.103 130.05H11.635L79.37 13.238z"/><path d="M77.64 141.37a3.9 3.9 0 0 0-1.174.274l-12.472 5.15a2.34 2.34 0 0 0-1.274 3.067 2.34 2.34 0 0 0 3.066 1.273l11.802-4.873 5.947 3.31-15.628 5.75c-.977.34-1.525.71-1.99 1.459l-8.202 13.32-15.599-.739a2.935 2.935 0 0 0-3.077 2.799 2.935 2.935 0 0 0 2.799 3.077l16.94.802c1.502.068 2.599-.573 3.293-1.688l5.218-7.677.136 13.586-12.398 9.874a2.935 2.935 0 0 0-.542 4.123 2.935 2.935 0 0 0 4.123.542l13.454-10.326c.96-.67 1.53-1.232 1.538-2.76l.295-15.254 10.196-4.105-1.538 3.35c-.585 1.173-.351 2.068.226 2.865l9.348 10.198a2.343 2.343 0 0 0 3.315.177 2.34 2.34 0 0 0 .177-3.315l-7.778-8.915 6.07-9.539c.524-.793.455-1.51.085-2.573l-1.674-4.811c-.384-1.103-1.065-1.817-2.166-2.305l-11.309-5.898a2.6 2.6 0 0 0-1.207-.217m22.416 2.532a5.211 5.211 0 1 0 0 10.422 5.211 5.211 0 0 0 0-10.422M65.58 190.127v8.397h31.864v-8.397z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.265" transform="translate(.53 -76.2)"/>`;
const _DefaultDesc = `Floor-level obstacle`;
const _DefaultTitle = 'Floor-level obstacle';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W007FloorLevelObstacle = defineComponent({
  name: 'W007FloorLevelObstacle',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w007-floor-level-obstacle`;
      const titleId = `iso-title-w007-floor-level-obstacle`;
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
