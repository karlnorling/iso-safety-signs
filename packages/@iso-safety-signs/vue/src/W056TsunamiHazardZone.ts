// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 685 600"`;
const _Body = `<path d="M197.462 164.744 104.12 2.944l-.574-.864-.719-.65-.793-.573-.933-.433-.935-.286-1.007-.074-1.008.074-1.003.286-.864.433-.863.574-.65.649-.573.863-93.344 161.8-.43.934-.288.938-.07 1.007.07 1.005.288 1.007.43.864.575.863.648.649.863.574.864.43 1.008.289 1.003.07h186.688l1.004-.07.936-.29.935-.43.793-.573.718-.649.574-.863.43-.864.29-1.007.07-1.005-.07-1.007-.29-.938Zm0 0" style="fill-rule:evenodd;fill:#020505;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#020505;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m99.158 18.115 82.699 143.394H16.458Zm0 0" style="fill-rule:evenodd;fill:#f9a800;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#000303;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M181.849 161.474H16.43l36.8-64.09 1.49-.726 1.343-.727 2.648-1.304 2.684-1.27 2.688-1.195 2.722-1.125 2.719-1.05 2.758-1.017 2.797-.91 2.832-.832 2.828-.726 2.867-.653 2.902-.543 2.907-.398 2.937-.293 2.941-.144 2.938-.035 2.941.18 2.903.327 2.902.508 2.867.726 1.38.4 1.417.467 2.723 1.126 1.305.617 1.304.692 1.27.722 1.274.797 1.194.8 1.2.871 1.124.942 1.126.946 1.09 1.011 1.015 1.055.98 1.086.942 1.124.91 1.161.867 1.2.801 1.229.761 1.235.728 1.308.687 1.305 1.199 2.683-1.488.977-1.524-1.374-.836-.618-.871-.582-1.816-1.016-1.848-.867-.945-.402-.98-.36-1.957-.616-2.031-.438-2.036-.254-2.067-.035-1.02.035-1.049.11-1.016.11-1.016.217-1.96.543-.982.329-.944.433-.942.434-.87.547-.872.542-.836.617-.797.688-.727.688-.687.765-.653.798-.616.832-.548.91-.472.906-.399.941-.363.98-.289.977-.254 1.02-.183 1.015-.106 1.016-.04 1.012.075 2.07.289 2.066.473 1.996.328.981.398.942.871 1.886 1.051 1.777 1.2 1.668 1.344 1.558 1.484 1.45 1.598 1.308 1.667 1.16 1.781 1.052 1.814.98 1.89.906 1.886.837 1.887.761 1.958.688 1.96.652 3.992 1.09 1.997.433 2.03.363 4.102.618 4.102.398 4.102.183 4.136.036 4.136-.184 4.103-.324 4.101-.473 4.101-.617 4.028-.762 4.027-.866Zm0 0" style="fill-rule:evenodd;fill:#020505;fill-opacity:1;stroke-width:.215738;stroke-linecap:butt;stroke-linejoin:miter;stroke:#020505;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/>`;
const _DefaultDesc = `Tsunami hazard zone`;
const _DefaultTitle = 'Tsunami hazard zone';
const _DefaultWidth = `685pt`;
const _DefaultHeight = `800`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W056TsunamiHazardZone = defineComponent({
  name: 'W056TsunamiHazardZone',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-w056-tsunami-hazard-zone`;
      const titleId = `iso-title-w056-tsunami-hazard-zone`;
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
