// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<g style="stroke:none;fill-rule:nonzero"><path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 100V5h190v190H5zm80.59 77.28c6.218-1.09 25.3-8.93 24.82-10.19-.15-.39-2.48-3.27-5.17-6.41-2.7-3.14-9.33-10.88-14.736-17.21l-9.829-11.5-4.434 4.22c-5.209 4.95-4.938 5.16-10.149-7.9-5.591-14.03-19.463-55.627-19.463-58.372 0-.48 2.92-.873 6.49-.873h6.489l-.688-3.469c-.865-4.362-3.457-16.437-5.328-24.818-.787-3.522-1.756-8.443-2.155-10.935S50.392 25.094 50 24.851c-1.42-.877-11.957 1.638-17.474 4.171-10.647 4.888-9.915 2.656-9.904 30.197.007 19.664.379 25.847 1.967 32.775 6.946 30.296 21.07 57.186 39.297 74.816 9.936 9.61 13.604 12.34 15.734 11.72.935-.27 3.622-.83 5.97-1.25m32.93-14.79c1.56-1.43 2.83-3.07 2.83-3.63 0-1.07-23.483-29.27-26.923-32.33-1.169-1.04-2.906-1.52-4.262-1.16-2.546.66-6.176 3.47-6.176 4.76 0 .46 4.443 6.03 9.873 12.36 5.431 6.34 11.978 14.02 14.538 17.07 2.57 3.06 5.26 5.55 5.99 5.55.72 0 2.58-1.18 4.13-2.62M67.591 66.384c3.583-1.497 3.784-1.837 3.31-5.604-1.295-10.297-7.192-35.908-8.451-36.707-.776-.492-3.264-.902-5.529-.911-3.716-.014-4.068.219-3.603 2.386.283 1.321 2.375 11.408 4.649 22.415s4.511 20.015 4.972 20.015c.46 0 2.554-.718 4.652-1.594" style="fill:#237f52"/><path d="M146.35 53.482v16.892h16.55V53.482h16.56V36.928H162.9V20.374h-16.55v16.554h-16.89v16.554z" style="fill:#fff"/></g>`;
const _DefaultDesc = `Emergency telephone`;
const _DefaultTitle = 'Emergency telephone';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E004EmergencyTelephone = defineComponent({
  name: 'E004EmergencyTelephone',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e004-emergency-telephone`;
      const titleId = `iso-title-e004-emergency-telephone`;
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
