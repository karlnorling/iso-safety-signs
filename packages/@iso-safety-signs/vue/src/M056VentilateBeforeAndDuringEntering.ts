// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1" viewBox="0 0 265 265"`;
const _Body = `<path d="M0 132.5C0 59.325 59.319 0 132.496 0 205.681 0 265 59.324 265 132.5c0 73.183-59.319 132.5-132.504 132.5C59.319 265.001 0 205.683 0 132.5" style="fill:#005387;fill-rule:nonzero"/><path d="M122.393 41.707h72.302V157.43l-72.302-7.079v-21.495h9.371v11.416l52.653 7.079V52.78h-52.653v26.028h-9.371z" style="fill:#fff"/><path d="M98.247 114.531c46.219 13.664 47.015-2.65 77.496-2.74" style="fill:none;stroke:#fff;stroke-width:8.5px"/><path d="m222.991 114.473 3.304-14.19 20.079 23.909-28.575 12.581 3.304-14.191-22.196-5.651v-8.065zm-24.58-38.233v9.683l15.603 3.457 1.797-9.051zM88.123 103.886l-20.464-29.16 33.724-11.481z" style="fill:#fff"/><path d="M175.743 80.042c-27.094-1.204-28.775 18.406-86.409 1.756" style="fill:none;stroke:#fff;stroke-width:9.5px"/><circle cx="80.123" cy="144.965" r="12.465" style="fill:#fff"/><path d="M110.109 175.347c0-7.103-5.766-12.87-12.869-12.87H63.007c-7.103 0-12.87 5.767-12.87 12.87v38.608h59.972z" style="fill:#fff"/><path d="M67.659 177.697a1.27 1.27 0 0 0-2.538 0v37.818a1.27 1.27 0 0 0 2.538 0zm27.467 0a1.27 1.27 0 0 0-2.538 0v37.818a1.27 1.27 0 0 0 2.538 0z" style="fill:#005387"/><path d="M122.393 97.641h9.542v14.212h-9.542z" style="fill:#fff"/>`;
const _DefaultDesc = `Ventilate before and during entering`;
const _DefaultTitle = 'Ventilate before and during entering';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M056VentilateBeforeAndDuringEntering = defineComponent({
  name: 'M056VentilateBeforeAndDuringEntering',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m056-ventilate-before-and-during-entering`;
      const titleId = `iso-title-m056-ventilate-before-and-during-entering`;
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
