// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.106 70.106"`;
const _Body = `<path fill="#fff" d="M130.369 119.984c0-17.425-14.126-31.551-31.552-31.551-17.425 0-31.551 14.126-31.551 31.551 0 17.426 14.126 31.552 31.551 31.552 17.426 0 31.552-14.126 31.552-31.552" style="display:inline;stroke-width:.264583" transform="translate(-63.765 -84.931)"/><path d="M91.369 97.042a3.803 3.803 0 1 0 0 7.605 3.803 3.803 0 0 0 0-7.605m24.194 6.354c-19.302.559-4.42.091-9.192.227l-8.749.253c-2.445.056-3.696.73-4.759 3.18l-2.995 6.874-7.637.206a1.81 1.81 0 0 0-1.764 1.858 1.8 1.8 0 0 0 1.855 1.76l8.166-.22c.895-.003 1.753-.192 2.196-1.003l2.656-6.097 7.228 5.085-6.966 2.778c-1.703.679-1.463 2.463-1.247 3.287l2.77 10.575a2.26 2.26 0 0 0 2.762 1.618 2.25 2.25 0 0 0 1.615-2.757l-1.804-6.885 9.287 4.632a2.26 2.26 0 0 0 3.035-1.012 2.25 2.25 0 0 0-1.01-3.03l-7.126-3.555 6.23-4.442.01-.013a3.347 3.347 0 0 0-.813-4.674l-6.664-4.689c8.93-.257 1.615-.006 4.265-.085l8.749-.253a1.81 1.81 0 0 0 1.76-1.861 1.803 1.803 0 0 0-1.859-1.757zm5.663 22.905a.75.75 0 0 0-.578.479c-.863 2.323-1.548 2.99-3.056 3.7l-28.38 8.694h-.003c-1.757.432-2.918.233-4.521-1.22a.75.75 0 0 0-1.059.053.75.75 0 0 0 .053 1.061c1.866 1.691 3.81 2.077 5.89 1.563l.019-.006 28.567-8.746.05-.024c1.755-.82 2.907-2.022 3.847-4.553a.75.75 0 0 0-.443-.965.75.75 0 0 0-.386-.036" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.600002;stroke-linecap:round;stroke-opacity:.476828" transform="translate(-63.765 -84.931)"/><path d="M98.817 84.931c-19.318 0-35.052 15.736-35.052 35.053 0 19.318 15.734 35.054 35.052 35.054s35.053-15.736 35.053-35.054c0-19.317-15.735-35.053-35.053-35.053m0 6.984c15.544 0 28.07 12.526 28.07 28.07a27.97 27.97 0 0 1-6.286 17.73L81.088 98.2a27.97 27.97 0 0 1 17.73-6.285m-21.7 10.234 39.536 39.536a27.98 27.98 0 0 1-17.836 6.368c-15.543 0-28.068-12.525-28.068-28.069a27.98 27.98 0 0 1 6.367-17.835" style="color:#000;fill:#b71f2e;fill-opacity:1;stroke-width:.264583;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-63.765 -84.931)"/>`;
const _DefaultDesc = `No snowboarding`;
const _DefaultTitle = 'No snowboarding';
const _DefaultWidth = `264.967`;
const _DefaultHeight = `264.969`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P077NoSnowboarding = defineComponent({
  name: 'P077NoSnowboarding',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-p077-no-snowboarding`;
      const titleId = `iso-title-p077-no-snowboarding`;
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
