// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 70.286 61.383\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"3.749\" d=\"M35.143 1.874 68.412 59.51H1.874Z\"/><path fill=\"#f68c1f\" d=\"M103.05 137.724c0-6.95-5.286-12.56-12.39-12.56-8.505 0-13.538 6.608-13.538 12.462 0 3.976 2.192 7.44 5.436 9.255-6.106-.307-10.24-4.659-10-9.415-.35 6.942 4.646 12.81 11.741 13.166 8.495.427 13.853-5.92 14.148-11.767.219-4.34-2.208-8.201-5.868-10.023 6.113 0 10.47 4.12 10.47 8.882m-15.315 3.531a3.63 3.63 0 0 1-3.634-3.63 3.63 3.63 0 0 1 3.634-3.629 3.63 3.63 0 0 1 3.634 3.63 3.63 3.63 0 0 1-3.634 3.63\" style=\"fill:#000;fill-opacity:1;stroke:none;stroke-width:.264582\" transform=\"translate(-52.652 -96.837)\"/>",
  height: "231.998",
  width: "265.647",
};
const _title = "Typhoon/hurricane/cyclone zone";
const _description = "Typhoon/hurricane/cyclone zone";

export const W085TyphoonHurricaneCycloneZone = defineComponent({
  name: 'W085TyphoonHurricaneCycloneZone',
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
