// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M142.742 125.38v41.755h14.483v-9.36h6.029v9.36h4.109V125.38zm4.108 4.855h6.029v7.425h-6.029zm10.375 0h6.029v7.425h-6.029zM146.85 143.94h6.029v7.425h-6.029zm10.375 0h6.029v7.425h-6.029zm-68.639 16.98c-2.22-.034-4.51.121-6.852.459v46.79h43.346v-.67c-13.05.543-33.23-3.29-34.915-19.009-.724-14.011 14.982-17.581 24.168-8.848l1.043-.722c-4.87-12.14-14.802-17.82-26.79-18m46.094.163c-1.898 0-3.357 1.459-3.357 3.367 0 1.911 1.459 3.37 3.357 3.37s3.353-1.459 3.353-3.37c0-1.908-1.455-3.367-3.353-3.367m-.406 7.571c-3.315 0-9.936.011-9.936.011-1.417.044-1.667.324-2.212 1.135l-3.1 5.186c-.944 2.017 1.874 3.404 2.917 1.503l2.528-4.43c.048-.081.12-.102.211-.099l3.493.04c-.954 2.039-1.908 4.073-2.862 6.118-.293.763-.382 1.461-.46 2.47-.126 2.03-.24 4.076-.358 6.107-.038.269-.126.45-.45.45-2.552-.011-7.435-.066-7.435-.066-2.535.099-4.092 2.174-4.092 3.745l13.67-.03c1.21-.038 2.133-.385 2.242-1.752l.416-7.895c2.205 4.437 4.416 8.87 6.617 13.306.549.965 1.2 2.041 2.76 2.007l2.986.01-8.138-16.43c-.163-.31.055-.709.147-.886.818-1.734 1.591-3.261 2.412-5.057l2.961 3.5c.488.488.701.608 1.157.617l6.165.008c.896 0 1.616-.72 1.616-1.615s-.72-1.616-1.616-1.616c-1.627.05-3.453-.038-4.94-.039-.446.004-.551-.092-.739-.317a309 309 0 0 1-4.246-5.118c-.514-.548-.637-.886-1.714-.862z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.340749;stroke-opacity:1" transform="translate(-71.635 -113.858)"/>`;
const _DefaultDesc = `Tsunami evacuation building`;
const _DefaultTitle = 'Tsunami evacuation building';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E063TsunamiEvacuationBuilding = defineComponent({
  name: 'E063TsunamiEvacuationBuilding',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e063-tsunami-evacuation-building`;
      const titleId = `iso-title-e063-tsunami-evacuation-building`;
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
