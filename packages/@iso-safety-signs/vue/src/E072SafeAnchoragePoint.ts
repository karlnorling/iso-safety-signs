// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M160.602 70.115h105.833v105.833H160.602z" style="fill:#fff;stroke-width:.529167" transform="translate(-160.602 -70.115)"/><path d="M163.248 72.76H263.79v100.542H163.248z" style="fill:#237f52;stroke-width:.529167" transform="translate(-160.602 -70.115)"/><path d="M247.543 84.423v18.259h-3.895c-1.279-3.505-4.653-6.03-8.58-6.03-5.016 0-9.133 4.116-9.133 9.131s4.117 9.128 9.132 9.128c3.93 0 7.304-2.525 8.582-6.03h3.894v51.911h4.596v-76.37Zm-36.09 12.881c-9.006-.105-10.62 4.297-13.79 10.831l-8.719 18.052c-.594 1.27.473 1.396.977 1.04l6.95-5.198 2.58 1.068 1.301-.227 3.545-14.963c1.97-7.237 15.819-5.661 15.026 3.058-.547 3.85-.787 9.873-3.674 13.465l1.3 2.212s3.135-3.011 4.392-6.245c5.151-13.254-.882-22.988-9.888-23.093m23.614 3.949c2.53 0 4.53 2 4.53 4.53a4.497 4.497 0 0 1-4.53 4.532 4.497 4.497 0 0 1-4.53-4.532c0-2.53 2-4.53 4.53-4.53m-24.395 18.006-7.383 5.757c-.872.646-1.301.765-2.244.455l-2.375-.52c-1.355-.354-2.03-.394-2.992.455l-7.71 7.416c-.895.763-1.524 1.34-.389 2.732l.606.671c-2.6 2.93-4.394 5.558-5.362 7.948-1.212 2.997-1.068 5.77.555 7.882.994 1.292 1.257 2.31 1.16 3.125-.098.815-.567 1.545-1.433 2.223-1.733 1.355-5 2.237-8.207 2.237v2c3.55 0 7.123-.85 9.437-2.66 1.158-.905 2.014-2.115 2.187-3.561s-.351-3.012-1.558-4.582c-1.172-1.525-1.332-3.327-.286-5.914.819-2.022 2.435-4.44 4.855-7.2l.42.466c1.586 1.535 2.921 1.461 4.912-.326l17.921-17.238z" style="fill:#fff;fill-opacity:1;stroke-width:1" transform="translate(-160.602 -70.115)"/>`;
const _DefaultDesc = `Safe anchorage point`;
const _DefaultTitle = 'Safe anchorage point';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E072SafeAnchoragePoint = defineComponent({
  name: 'E072SafeAnchoragePoint',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e072-safe-anchorage-point`;
      const titleId = `iso-title-e072-safe-anchorage-point`;
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
