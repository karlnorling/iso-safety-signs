// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path d=\"M367 230a150 150 0 0 1 67 116H166a150 150 0 0 1 67-116l134 232a150 150 0 0 1-134 0\"/><circle cx=\"300\" cy=\"346\" r=\"36\" stroke=\"#f9a800\" stroke-width=\"12\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Radioactive material or ionizing radiation";
const _description = "Radioactive material or ionizing radiation";

export const W003RadioactiveMaterialOrIonizingRadiation = defineComponent({
  name: 'W003RadioactiveMaterialOrIonizingRadiation',
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
