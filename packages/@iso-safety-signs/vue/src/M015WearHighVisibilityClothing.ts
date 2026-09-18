// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 265 265\" fill-rule=\"evenodd\"",
  body: "<path fill=\"#005387\" fill-rule=\"nonzero\" d=\"M0 132.501C0 59.321 59.321 0 132.5 0S265 59.32 265 132.5 205.68 265 132.5 265 0 205.685 0 132.501\"/><path fill=\"#fff\" d=\"M65.01 110.837c10.32-12.778 15.287-33.174 14.898-61.18l22.974-5.851 27.539 62.004v58.337H98.85V47.079l-13.625 3.475v113.593h-18.03v13.63h63.227v11.363H67.195v13.63h63.227v8.658h-65.41V110.839zm134.978 0v100.586h-65.41v-8.658h63.231v-13.63h-63.231v-11.363h63.231v-13.63H179.78V50.55l-13.634-3.47v117.068H134.58V105.81l27.539-62.004 22.969 5.851c-.385 28.006 4.583 48.402 14.902 61.18zm-88.975-58.79c14.376 5.109 28.692 5.119 42.958.032l-21.472 48.333z\"/>",
  height: "265",
  width: "265",
};
const _title = "Wear high-visibility clothing";
const _description = "Wear high-visibility clothing";

export const M015WearHighVisibilityClothing = defineComponent({
  name: 'M015WearHighVisibilityClothing',
  inheritAttrs: false,
  props: signProps,
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () =>
      renderSign({
        attrs,
        description: props.description ?? _description,
        height: props.height,
        instanceId,
        svg: _svg,
        title: props.title ?? _title,
        width: props.width,
      });
  },
});
