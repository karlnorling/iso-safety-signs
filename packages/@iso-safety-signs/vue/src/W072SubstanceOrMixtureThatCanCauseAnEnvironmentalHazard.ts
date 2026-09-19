// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<g stroke=\"#000\"><path fill=\"#f9a800\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path fill=\"none\" stroke-width=\"6\" d=\"M318 457c-13-9-24-19-32-31 19-2 37-3 47-15s18-66 95-64c-2 5-10 16-10 16l27-4s-5 22-30 44\"/></g><path d=\"M411 379a7 6 0 1 0 0-.1zm-51-13h-62v-27l38-26 8 7 34-11v-11l-30 11-12-11-34 15v-27l4-7 15-23v-19l30-27-3-7-31 22-7-26 11-23-4-4-19 31 8 45c-12 4-23 23-23 34l-4 4-11-49 7-31h-3l-8 19-27-26-3 7 22 27v27c-19-8-30-8-49-12v8c23 4 38 11 53 23v19l-38-16-38 16v7h8l26-11 38 23v49H154v8h102v15l-19 23 27-4 4 4h4l7 7 12-15h22l-15-23v-7h54m4 51c-17 4-29 15-38 32l-24-19c-3 4-11 4-15 4-42-4-83-11-121 27h338c0-23-50-23-57-35-4-11 26-22 0-34-6-2-20-2-24-1-12 11-42 22-59 26\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Substance or mixture that can cause an environmental hazard";
const _description = "Substance or mixture that can cause an environmental hazard";

export const W072SubstanceOrMixtureThatCanCauseAnEnvironmentalHazard = defineComponent({
  name: 'W072SubstanceOrMixtureThatCanCauseAnEnvironmentalHazard',
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
