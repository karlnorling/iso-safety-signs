// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M97.666 24.174c-7.573 1.26-12.69 8.414-11.434 15.983a13.86 13.86 0 0 0 6.807 9.795c-.222.006-.718.007-.8.014-4.62.411-9.616.916-13.468 3.499-2.983 2-5.27 4.871-6.347 8.295-.19.603-.308 1.34-.308 1.34l-5.943 29.305s-.02.267-.435.586c-1.194.919-3.214 1.957-3.282 3.462-.049 1.08 1.414 1.088 2.038 1.97.12.17.292.339.303.547.202 3.867.853 9.422 6.162 9.581 4.736.142 5.537-3.426 6.465-6.293a37 37 0 0 0 1.2-4.9l4.726-21.01.27 20.19-.808 9.96-3.502 58.148s-.405.088-.75.206c-2.172.742-3.731 3.425-3.83 5.716-.084 1.914.96 4.06 2.773 5.034.473.254.998.35.998.35l14.917.032s.712.035 1.111.002c1.01-.084 2.16-.35 2.828-1.11.733-.835.756-2.123.808-3.231.027-.562.02-1.447.02-1.447l.778-56.435.198-.559c.56-.006 1.119-.003 1.678 0l.198.559.777 56.435s-.006.885.02 1.447c.053 1.108.076 2.396.809 3.23.668.76 1.818 1.027 2.828 1.11.4.034 1.111-.001 1.111-.001l14.917-.031s.525-.097.998-.35c1.814-.974 2.856-3.121 2.773-5.035-.099-2.29-1.658-4.974-3.83-5.716-.345-.118-.75-.206-.75-.206l-3.502-58.147-.807-9.96.27-20.191 4.725 21.01s.386 2.384 1.2 4.9c.928 2.867 1.73 6.435 6.465 6.293 5.31-.159 5.96-5.714 6.162-9.58.011-.21.182-.378.303-.548.624-.882 2.087-.89 2.038-1.97-.068-1.505-2.088-2.543-3.282-3.462-.415-.32-.435-.586-.435-.586l-5.943-29.306s-.118-.736-.308-1.339c-1.077-3.424-3.364-6.296-6.347-8.295-3.852-2.583-8.848-3.088-13.468-3.499-.082-.007-.578-.008-.8-.014a13.86 13.86 0 0 0 6.807-9.795c1.257-7.569-3.861-14.723-11.434-15.983-1.566-.268-3.12-.193-4.668 0m2.624 6.552c3.436.143 6.452 2.494 7.374 5.868l.09-.015.005.014-.092.014q.105.386.173.787L100 38.702l7.842-1.294a8.36 8.36 0 0 1-1.192 5.806 8.03 8.03 0 0 1-3.917 3.03c-.091.033-.232.09-.355.133-.302.044-.563.081-.766.411q0 .006-.002.01a1 1 0 0 0-.182.24c-.4.756-.385 2.863-.416 4.352l-.015.333v35.651h-1.994V51.723l-.015-.326c-.03-1.49-.016-3.602-.416-4.359a1 1 0 0 0-.182-.24l-.002-.01c-.202-.33-.463-.367-.765-.411-.123-.044-.264-.1-.356-.133a8.03 8.03 0 0 1-3.912-3.025 8.36 8.36 0 0 1-1.197-5.811L100 38.702l-7.84-1.308q.068-.402.173-.787l-.092-.014.004-.014.091.015c.922-3.374 3.94-5.725 7.375-5.868.197-.012.398-.002.58 0" style="display:inline;fill:#fff;stroke-width:4.42925"/>`;
const _DefaultDesc = `Survival clothing`;
const _DefaultTitle = 'Survival clothing';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E056SurvivalClothing = defineComponent({
  name: 'E056SurvivalClothing',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e056-survival-clothing`;
      const titleId = `iso-title-e056-survival-clothing`;
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
