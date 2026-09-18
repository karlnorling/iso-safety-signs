// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\" xml:space=\"preserve\"",
  body: "<path d=\"M-200 0H0v200h-200z\" style=\"fill:#fff;fill-rule:nonzero;stroke:none\" transform=\"scale(-1 1)\"/><path d=\"M-195 5H-5v190h-190z\" style=\"fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none\" transform=\"scale(-1 1)\"/><path d=\"m43.967 22.7 107.765.24v140.262l16.248 10.991H60.215L43.967 163.44Zm79.57 5.496-74.313.478v132.378l1.91.717 72.402-21.984z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"m118.996 79.45-17.622-13.978v12.963s-9.7 7.406-23.111 7.99c-14.98.65-22.641-1.353-22.641-1.353v31.68s7.818 2.177 24.5-1.013c12.802-2.448 21.458-9.546 21.458-9.546v15.037z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/>",
  height: "400",
  width: "400",
};
const _title = "Door opens by pushing on the right-hand side";
const _description = "Door opens by pushing on the right-hand side";

export const E023DoorOpensByPushingOnTheRightHandSide = defineComponent({
  name: 'E023DoorOpensByPushingOnTheRightHandSide',
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
