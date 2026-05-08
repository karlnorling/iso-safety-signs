// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 685 600"`;
const _Body = `<path d="M197.462 164.744 104.12 2.944l-.574-.864-.719-.65-.793-.573-.933-.433-.935-.286-1.007-.074-1.008.074-1.003.286-.864.433-.863.574-.65.649-.573.863-93.344 161.8-.43.934-.288.938-.07 1.007.07 1.005.288 1.007.43.864.575.863.648.649.863.574.864.43 1.008.289 1.003.07h186.688l1.004-.07.936-.29.935-.43.793-.573.718-.649.574-.863.43-.864.29-1.007.07-1.005-.07-1.007-.29-.938Zm0 0" style="fill-rule:evenodd;fill:#020505;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#020505;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m99.158 18.115 82.699 143.394H16.458Zm0 0" style="fill-rule:evenodd;fill:#f9a800;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#000303;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M328.207 446.113c-49.418 9.196-94.355 4.227-121.41-11.933l249.777-76.793 1.242 24.355-.257.242c-13.407 14.418-32.274 28.34-55.122 39.52-6.687-12.664-19.851-20.875-34.996-20.875-21.851 0-39.734 17.648-39.734 39.773 0 1.73.5 5.711.5 5.711m-69.027 69.84 230.668-86.484v86.484Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="M113.685 127.494c0 3.953-3.234 7.19-7.19 7.19-3.954 0-7.193-3.237-7.193-7.19 0-3.958 3.239-7.191 7.192-7.191 3.957 0 7.191 3.233 7.191 7.191Zm0 0" style="fill:none;stroke-width:5.05185;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m87.006 63.779 15.535 50.77" style="fill:none;stroke-width:4.83112;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M66.225 125.767 87.869 68.31" style="fill:none;stroke-width:2.91945;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m87.51 65.935 43.507 44.086" style="fill:none;stroke-width:2.22729;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M489.848 400.129 368.68 445.37c-2.48 1-4.977-.254-5.961-2.738-.996-2.23.242-4.969 2.726-5.969l62.82-23.613 61.583-22.856ZM352.293 473.21c-1.996 0-4.219.243-6.215.243 0 0-6.703-.242-10.172-1-12.422-1.484-22.601-7.45-34.27-10.68-10.679-2.98-21.347-2.98-32.03-1.996-12.665 1-22.833 7.211-35.012 10.692-10.668 3.242-21.848 2.742-32.516.5-1.242 7.71 4.465 14.918 11.668 15.406 14.645.5 28.309-4.227 42.211-9.695 5.961-1.985 12.164-3.47 18.867-4.227 15.645-1.484 30.035 4.227 44.2 9.695 1.48.754 2.722 1.243 4.218 1.5Zm-76.969 28.325h-.5c-6.703.5-12.906 2-18.867 3.985-13.902 5.722-27.566 10.19-42.21 9.69-7.204-.5-12.911-7.706-11.669-15.16 10.668 1.985 21.848 2.485 32.531-.5 12.164-3.726 22.332-9.695 34.996-10.69 10.684-1.243 21.364-1.243 32.032 1.995.5 0 1 .243 1.242.243Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/>`;
const _DefaultDesc = `Slipway`;
const _DefaultTitle = 'Slipway';
const _DefaultWidth = `685pt`;
const _DefaultHeight = `800`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W044Slipway = defineComponent({
  name: 'W044Slipway',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w044-slipway`;
      const titleId = `iso-title-w044-slipway`;
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
