// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 264.567 264.566"`;
const _Body = `<circle cx="132.283" cy="132.283" r="132.283" style="fill:#005387;fill-opacity:1;stroke:none;stroke-width:6.40501;stroke-linecap:round;stroke-dasharray:none;stroke-dashoffset:2.39055;stroke-opacity:1;paint-order:markers stroke fill"/><path d="M67.509 45.781c-6.935 0-12.71 5.775-12.71 12.71 0 6.934 5.775 12.706 12.71 12.706s12.709-5.772 12.709-12.707c0-6.934-5.774-12.709-12.71-12.709m.513 28.618a11.423 11.423 0 0 0-11.447 11.447v36.238c0 5.785.776 7.376 2.076 8.166a47.4 47.4 0 0 1 9.653-3.262l11.164-2.457V103.7L85 110.97a5.97 5.97 0 0 0 6.852 2.223c.47-.103.935-.258 1.386-.48l25.575-12.411a6 6 0 0 0 2.119-1.75h3.79l.454-.011c.237-.048.612.516 1.38 1.88l6.891 12.23 6.541-1.439-2.25-3.992.026-4.226 66.828-8.37.097-.018c.915-.173 1.618-.23 2.158-.22.9.02 1.345.225 1.545.384.196.155.439.54.623 1.25l6.227-1.371c-.45-1.904-1.293-3.645-2.867-4.895-1.179-.936-2.551-1.458-4.053-1.664-1.443-.198-3.006-.1-4.625.191l-71.576 8.963c-.638-1.143-.95-2.278-2.317-3.598-1.378-1.331-3.682-1.744-5.718-1.472l.424-.03-2.993.03c-1.51-2.872-5.11-4.215-8.037-2.77L92.694 99.62c-.839.531-.852.241-1.373-.502l-12.613-17.98a6 6 0 0 0-.596-.715 11.42 11.42 0 0 0-10.09-6.028zm159.393 20.279L68.872 129.57c-24.205 5.328-39.518 29.284-34.191 53.489l.105.476c5.327 24.205 29.281 39.519 53.487 34.192l131.294-28.897c2.139-3.617 4.122-7.337 5.836-11.209l-.34.074c1.212-1.202 1.971-2.858 1.971-4.67 0-3.606-3.004-6.609-6.611-6.609s-6.61 3.003-6.61 6.61c0 2.82 1.847 5.249 4.374 6.183l-67.934 14.951c1.255-1.209 2.05-2.891 2.05-4.74 0-3.607-3.002-6.61-6.609-6.61-3.606 0-6.609 3.003-6.609 6.61 0 2.855 1.893 5.306 4.467 6.215L86.19 208.26c-19.124 4.209-37.727-7.685-41.936-26.809l-.105-.476c-4.21-19.124 7.682-37.727 26.806-41.936L230.5 103.926a108 108 0 0 0-3.084-9.248zm-12.467 15.537-44.127 9.553-21.877 7.34-1.265-2.247-6.54 1.44 3.102 5.506q.01.123.032.246c.167.46.439.877.793 1.217l5.28 9.375.136.175c1.21 1.588 1.374 2.843 1.078 4.2-.297 1.356-1.245 2.856-2.742 4.1l-.112.091-7.908 7.875-.117.15c-3.64 4.612-3.81 10.396-1.104 14.407s8.035 6.118 13.776 4.853l-.002.002 75.076-16.476a3.203 3.203 0 0 0-1.373-6.256l-75.078 16.474c-3.588.791-5.927-.462-7.088-2.183-1.15-1.704-1.38-3.997.77-6.772l7.427-7.398c2.302-1.965 4.077-4.513 4.73-7.5.648-2.96.005-6.306-2.035-9.147l-3.634-6.453 62.87-21.082zM75.573 140.731l-4.049.89a33 33 0 0 0-10.95 4.61v54.83a32.16 32.16 0 0 0 15 5.265z" style="color:#000;display:inline;fill:#fff;fill-opacity:1;stroke-width:.999999;stroke-dashoffset:2.39055;paint-order:markers stroke fill"/>`;
const _DefaultDesc = `Hold the trolley handle`;
const _DefaultTitle = 'Hold the trolley handle';
const _DefaultWidth = `264.567`;
const _DefaultHeight = `264.566`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M060HoldTheTrolleyHandle = defineComponent({
  name: 'M060HoldTheTrolleyHandle',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m060-hold-the-trolley-handle`;
      const titleId = `iso-title-m060-hold-the-trolley-handle`;
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
