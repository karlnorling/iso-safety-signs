// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688 600"`;
const _Body = `<path d="M630.152 559.8 343.632 62.907 57.11 559.801Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#f9a800;fill-opacity:1"/><path d="M667.555 600.992c10.972 0 19.707-8.734 19.707-19.476 0-3.989-1.246-7.73-3.25-10.985L359.848 8.734C356.352 3.242 350.12 0 343.633 0s-12.723 3.242-16.461 8.734L3.25 570.531C1.258 573.785 0 577.527 0 581.516c0 10.742 8.738 19.476 19.71 19.476Zm-37.403-41.191L343.632 62.906 57.11 559.801Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="M250.18 284.344 209.973 426l60.09-33.41-13.137 94.66-12.746-17.645 10.129 60.504 36.02-52.625-18.763 12.02 36.399-133.399-66.102 36.852 48.465-108.613Zm295.027 233.695-134.266-82.762 48.184-2.308-47.656-20.64 71.293-28.485-76.442-6.594 41.926-34.488-52.273 9.222 43.05-64.359-72.851 21.824 39.027-79.863-64.86 37.328 20.63-79.863-52.582 45.316-2.196-45.152-20.265 75.629 33.77-7.406-10.93 54.011 43.035-19.52-21.809 56.844 53.395-16.086-35.016 48.872 42.469 18.39-33.88 18.39 39.61 36.747-49.906-9.172 20.633 27.563-38.012-1.235 24.235 59.867 4.023-40.824 83.781 32.188-51.625-51.11Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/>`;
const _DefaultDesc = `Arc flash`;
const _DefaultTitle = 'Arc flash';
const _DefaultWidth = `688pt`;
const _DefaultHeight = `800`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W042ArcFlash = defineComponent({
  name: 'W042ArcFlash',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w042-arc-flash`;
      const titleId = `iso-title-w042-arc-flash`;
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
