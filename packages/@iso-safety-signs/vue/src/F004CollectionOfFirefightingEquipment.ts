// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M209.397 211.78h50.048v50.045h-50.048z" style="fill:#9b2423;fill-opacity:1;stroke-width:.264583" transform="translate(-207.963 -210.344)"/><path fill="#fff" d="M154.072 49.867c-1.695 6.399-2.207 14.05-.972 20.606 2.49 9.336 8.139 16.572 15.198 22.576 1.245 1.12 2.653 1.89 4.052 2.614V76.26c-4.195-.666-7.34-4.423-9.605-7.736-3.814-5.874-6.248-12.297-8.673-18.657m-24.195 8.455c-.965.002-1.993.037-3.022.07 5.577 4.27 7.316 10.689 9.152 16.745 1.914 6.656 4.299 13.038 8.067 18.543 7.067 9.378 17.777 13.516 28.276 10.502-9.288-3.865-15.006-12.914-19.283-20.69-3.877-6.128-4.973-13.874-10.135-18.909-3.778-3.583-8.072-6.27-13.055-6.261m1.504 28.057c-.653 11.981 3.393 21.946 10.66 30.268 7.693 8.987 19.985 13.563 30.31 16.875v-19.403c-6.605-.13-12.62-2.324-17.696-5.38-10.033-6.087-17.158-13.072-23.275-22.36zm-13.905 37.284c9.364 2.23 13.74 8.255 18.964 14.538 4.178 5.336 9.72 8.508 15.828 9.586 7.606 1.28 14.846.096 20.082-5.51-12.18-2.165-19.329-9.654-27.637-16.49-9.725-6.511-17.278-9.644-27.237-2.124m13.865 19.304c1.103 6.144 3.036 11.917 6.529 16.605 9.607 11.325 22.085 11.116 34.48 11.338v-19.403c-7.866 1.844-17.505 2.721-24.793.941-6.648-1.364-11.654-5.305-16.216-9.481" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.137318px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(.07 -.085)scale(.26458)"/><path d="M225.419 217.892c-1.12-.018-1.856.096-1.856.096l-.166 2.6s2.805-1.785 6.767-.306c3.961 1.478 5.31 7.103 6.765 9.227 1.454 2.124 2.942 2.185 2.942 2.185l.185-.332s-.259-.106-.386-.173c-1.75-.924-2.435-2.822-2.943-4.321-.649-1.917-1.827-4.827-4.14-6.668-2.369-1.885-5.302-2.278-7.168-2.308m1.652 2.407c-2.89.018-5.037 1.623-6.56 3.554l-.365-.034-1.552 5.1.404.013-.06.747c-.818 2.159-2.156 2.642-2.604 2.642-.46 0-.628.22-.671.624h25.654l-.136-.51s-1.839.194-3.883-1.496-3.19-10.191-9.64-10.622q-.298-.02-.587-.018m-11.595 13.134v1.487h25.933v-1.487z" style="display:inline;fill:#fff;fill-opacity:1;stroke-width:1.5875" transform="translate(-207.963 -210.344)"/>`;
const _DefaultDesc = `Collection of firefighting equipment`;
const _DefaultTitle = 'Collection of firefighting equipment';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F004CollectionOfFirefightingEquipment = defineComponent({
  name: 'F004CollectionOfFirefightingEquipment',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-f004-collection-of-firefighting-equipment`;
      const titleId = `iso-title-f004-collection-of-firefighting-equipment`;
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
