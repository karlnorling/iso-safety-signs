// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 265"`;
const _Body = `<defs><clipPath id="p002-no-smoking-a"><path d="M42.144 346.161h56.694v56.693H42.144z"/></clipPath></defs><path fill="#fff" fill-rule="evenodd" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><g fill="none" stroke="#000" stroke-miterlimit="2.613"><path stroke-width="9.4" d="m105.454 202.838 115.277-77.956-11.341-16.774-115.277 77.961"/><path stroke-width="7.383" d="m93.938 215.871-16.36-24.19m25.271 18.165-16.36-24.195"/></g><g clip-path="url(#p002-no-smoking-a)" transform="matrix(4.69982 0 0 -4.69982 -198.874 1892.783)"><path fill="none" stroke="#000" stroke-miterlimit="2.613" stroke-width="1.429" d="M57.532 382.199c.653-.941.455-2.919-.486-3.507l-.617-.419c-2.249-1.367-1.34-3.733-.271-4.251.807-.39 1.409-.255 2.877-.15 1.631.116 2.158-.212 2.667-1.026.845-1.351.072-2.563-.988-3.695-.515-.548-.739-.87-.946-2.202-.137-.965-.047-2.022.738-3.137m-7.298 15.611c.641-.899.281-2.133-.556-2.862l-.544-.51c-2.005-1.703-.737-3.897.4-4.24.858-.259 1.308-.113 2.761.125 1.192.196 1.921-.166 2.429-.98.56-.899-.231-2.115-.42-3.536-.086-.65-.219-1.135-.048-1.875.066-.403.527-1.946 1.312-3.061"/></g><path fill="#b71f2e" fill-rule="evenodd" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No smoking`;
const _DefaultTitle = 'No smoking';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P002NoSmoking = defineComponent({
  name: 'P002NoSmoking',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-p002-no-smoking`;
      const titleId = `iso-title-p002-no-smoking`;
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
