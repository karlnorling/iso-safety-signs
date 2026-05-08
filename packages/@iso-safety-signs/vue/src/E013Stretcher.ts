// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path fill="#fff" d="M0 0h200v200H0z"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M130.73 38.116h47.168v15.723H130.73zm15.723-15.723h15.723v47.168h-15.723z" style="fill:#fff"/><g style="fill:#fff"><rect width="156.17" height="6.224" x="21.892" y="89.808" ry="3.112"/><path d="M33.287 93.783h133.53v60H33.287z"/><rect width="156.17" height="6.224" x="21.892" y="150.87" ry="3.112"/></g><g style="fill:#237f52"><circle cx="48.983" cy="123.28" r="8.811"/><path d="M60.458 115.72v16.124c-.247 7.018 4.746 11.416 11.53 12.335l35.487.096c2.427-.013 4.64-1.816 4.629-4.303-.014-2.471-2.22-4.387-4.629-4.406H74.061c-.406-.003-.742-.183-.748-.606-.004-.429.33-.602.748-.607h80.897c2.768-.013 5.32-2.105 5.31-4.944-.004-2.832-2.548-5.348-5.31-5.36l-48.524-.018c-.404-.157-.625-.406-.62-.749-.007-.337.209-.624.62-.77l48.524-.021c2.768-.003 5.32-2.24 5.31-5.08-.004-2.832-2.548-5.199-5.31-5.205H74.061c-.406-.003-.742-.198-.748-.616-.004-.428.33-.54.748-.545h33.414c2.427-.013 4.64-1.783 4.629-4.27-.014-2.47-2.22-4.419-4.629-4.43l-35.487.096c-6.784.919-11.777 5.318-11.53 12.33"/></g>`;
const _DefaultDesc = `Stretcher`;
const _DefaultTitle = 'Stretcher';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E013Stretcher = defineComponent({
  name: 'E013Stretcher',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e013-stretcher`;
      const titleId = `iso-title-e013-stretcher`;
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
