// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M144.107 158.659H38.28V52.825h105.827Zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.56158" transform="translate(-38.28 -52.825)"/><path d="M141.112 155.664H41.275V55.82h99.837zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.56158" transform="translate(-38.28 -52.825)"/><path d="M59.385 65.94v63.782l37.083 15.822v-7.746h26.534l-10.877-8.9V65.94Zm2.139 1.985 33.62 7.445v67.99l-33.62-14.712ZM92.826 99.35c-5.49 4.167-10.275 6.569-16.832 6.963v-6.656l-12.71 13.701 13.266 13.268v-6.428c6.5-.48 11.494-1.928 16.276-6.386z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:4.96739;stroke-dasharray:none;stroke-opacity:1" transform="translate(-38.28 -52.825)"/>`;
const _DefaultDesc = `Door opens by pulling on the right-hand side`;
const _DefaultTitle = 'Door opens by pulling on the right-hand side';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E058DoorOpensByPullingOnTheRightHandSide = defineComponent({
  name: 'E058DoorOpensByPullingOnTheRightHandSide',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e058-door-opens-by-pulling-on-the-right-hand-side`;
      const titleId = `iso-title-e058-door-opens-by-pulling-on-the-right-hand-side`;
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
