// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M222.25 186.135c0 19.36-15.697 35.057-35.056 35.057-19.36 0-35.059-15.697-35.059-35.057s15.697-35.058 35.059-35.058c19.36 0 35.056 15.698 35.056 35.058" style="display:inline;stroke-width:.264583" transform="translate(-152.135 -151.077)"/><path d="M187.276 156.866a.83.83 0 0 0-.929.717l-1.355 10.46-.182-.007-1.114-8.358a.83.83 0 0 0-1.649.217l.04.29c-.328.065-.717.17-1.122.345-1.078.463-2.315 1.459-2.834 3.359-.478 1.752-.758 2.881-.754 3.735.002.427.08.816.312 1.127s.585.488.95.575c.446.107.9-.023 1.238-.262.339-.24.594-.57.814-.944.44-.747.73-1.677.885-2.498.225-1.186.583-2.773.76-3.556l.791 5.927c-.454.003-.833.025-1.004.084-.6.207-.648.414-.72.796-.113.592.266.691.258.902-.012.304-.733.452-.733 1.374s.504.653.504 1.151-.282.316-.282 1.149c0 .832.596.812.61 1.074.013.263-.208.075-.169.898.037.767 1.562.908 2.326.924l-3.888 30.008-1.122-.148a.83.83 0 0 0-.219 1.646l1.127.149-.348 2.688a.83.83 0 0 0 1.649.212l.347-2.682 1.056.14a.83.83 0 0 0 .219-1.649l-1.061-.14 3.249-25.09 3.772 28.288-1.048.14a.83.83 0 0 0 .219 1.645l1.048-.139.393 2.949a.83.83 0 1 0 1.646-.22l-.392-2.945 1.136-.15a.83.83 0 0 0-.219-1.648l-1.137.15-4.43-33.227q.45-.009.894-.021c.962-.028 1.14-.2 1.721-.335 1.053-.288 1.606-.268 2.737.079 1.13.346 4.594 2.8 6.443 4.224s6.816 3.464 8.586 3.282c1.33-.16 1.546-.846 1.502-2.134-.028-1.238-.986-5.427-1.225-6.096-.238-.67-.965-1.178-2.217-1.566s-4.07-.735-6.208-1.215-4.945-.902-6.37-1.685c-1.938-1.065-2.577-2.77-3.537-2.797-.92-.026-1.116-.023-1.578.021l1.1-8.497c.04.212.423 2.243.425 3.934 0 1 .179 2.065.54 2.915.18.424.405.8.722 1.082.318.282.775.455 1.233.365.746-.146 1.36-.755 1.554-1.67.194-.913.115-2.153-.21-3.963-.349-1.947-1.548-3.028-2.623-3.556a5.8 5.8 0 0 0-1.463-.481l.053-.41a.83.83 0 0 0-.717-.93zm.518 2.461.063.014a.5.5 0 0 0-.08.118zm1.024.279c.06.026.056 0 .118.032.862.423 1.76 1.182 2.05 2.795.314 1.751.353 2.907.215 3.557s-.304.768-.72.85c-.122.023-.188.006-.33-.118-.14-.126-.31-.374-.451-.705-.282-.663-.457-1.636-.457-2.504-.002-1.808-.367-3.612-.425-3.907m-7.434 1.893c-.089.384-.577 2.485-.85 3.925-.137.723-.409 1.577-.751 2.158-.171.29-.36.51-.517.62-.155.11-.244.127-.383.094-.22-.053-.295-.11-.345-.177s-.104-.2-.106-.498c-.002-.595.246-1.717.72-3.453.434-1.59 1.371-2.3 2.232-2.67z" style="fill:#fff;fill-opacity:1;stroke-width:1;stroke-linecap:round" transform="translate(-152.135 -151.077)"/>`;
const _DefaultDesc = `Hold two ski poles with a single hand`;
const _DefaultTitle = 'Hold two ski poles with a single hand';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M064HoldTwoSkiPolesWithASingleHand = defineComponent({
  name: 'M064HoldTwoSkiPolesWithASingleHand',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-m064-hold-two-ski-poles-with-a-single-hand`;
      const titleId = `iso-title-m064-hold-two-ski-poles-with-a-single-hand`;
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
