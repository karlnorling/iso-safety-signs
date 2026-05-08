// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path d="M555.875 491.5h-512l256-443.3z" style="fill:#f9a800;fill-opacity:1;stroke:none;overflow:visible" transform="translate(.125 2)"/><path d="M-347.531 346.406c-11.461.081-22.761 2.873-30.562 8.219-27.454 18.811-33.97 59.013-13.375 82.469l8.812 10.031h-17.625c-16.857 0-17.594.283-17.594 7.188v7.219h141.344v-7.219c0-6.826-.875-7.188-16.031-7.188h-16l7.094-9.375c22.295-29.471 12.174-72.005-20.594-86.5-7.546-3.338-16.554-4.907-25.469-4.844m2.812 14.156c14.021-.099 27.82 6.319 35.344 20.812 10.282 19.806 3.699 46.313-14.188 57.219-27.547 16.796-65.469-4.169-65.469-36.188 0-25.711 22.44-41.689 44.312-41.844z" style="fill:#000" transform="translate(640.5)"/><path d="M-294.83 367.627c-7.216-11.386-7.819-14.011-5.048-21.96 4.065-11.66 4.048-11.737-1.901-8.553-4.519 2.419-4.94 1.341-4.013-10.295l1.036-12.997-10.238 11.118-10.238 11.118 2.859-12.848c3.377-15.179-.553-35.294-9.044-46.287l-5.57-7.212-.064 23.368c-.062 22.593-4.007 41.536-8.65 41.536-1.239 0-3.895-3.966-5.904-8.814-4.309-10.403-7.813-8.12-9.103 5.93-1.393 15.172-8.632 12.984-14.317-4.327l-4.736-14.423-2.123 12.26c-1.167 6.743-3.417 12.26-4.999 12.26-1.593 0-2.181 3.541-1.319 7.933 1.203 6.126-.616 10.509-7.984 19.241l-9.542 11.308-6.593-12.751c-5.278-10.209-6.922-19.221-8.242-45.206-1.225-24.107-.765-32.454 1.787-32.452 1.89.002 4.238 1.301 5.218 2.888.981 1.587 2.78 2.885 3.999 2.885 2.588 0 8.982-32.58 8.982-45.765 0-4.973.912-9.042 2.026-9.042s6.307 4.149 11.538 9.22l9.512 9.22v-30.854c0-17.039 1.198-30.854 2.676-30.854 1.472 0 6 4.219 10.064 9.375 8.049 10.212 8.101 10.122 8.826-15.144.25-8.726 2.241-19.111 4.423-23.077l3.968-7.212 2.775 9.476c1.526 5.212 7.947 15.351 14.268 22.532s12.478 17.196 13.682 22.255c2.132 8.961 2.197 8.994 2.484 1.266.36-9.678 3.127-9.989 11.319-1.269 5.938 6.321 12.136 21.814 16.374 40.929l1.918 8.651 3.721-6.952 3.721-6.952 4.809 7.34c5.639 8.606 6.872 25.193 3.814 51.282-1.955 16.679-1.736 18.16 1.985 13.405 3.913-4.999 4.307-4.687 6.091 4.823 2.148 11.452-.231 25.457-6.362 37.454-4.534 8.871-14.12 19.378-17.528 19.212-1.19-.058-5.851-5.925-10.359-13.037z" style="fill:#000" transform="translate(640.5)"/>`;
const _DefaultDesc = `Oxidizing substance`;
const _DefaultTitle = 'Oxidizing substance';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W028OxidizingSubstance = defineComponent({
  name: 'W028OxidizingSubstance',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w028-oxidizing-substance`;
      const titleId = `iso-title-w028-oxidizing-substance`;
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
