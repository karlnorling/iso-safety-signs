// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 158.684 138.536\"",
  body: "<path d=\"M183.773 211.296 108.684 81.227a4.24 4.24 0 0 0-3.677-2.117 4.3 4.3 0 0 0-3.678 2.117L26.24 211.297a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.116h150.177a4.3 4.3 0 0 0 3.678-2.116 4.18 4.18 0 0 0 0-4.234\" style=\"stroke-width:.264583\" transform=\"translate(-25.665 -79.11)\"/><path fill=\"#f6bd16\" d=\"M43.875 491.5 299.88 48.2l256 443.3z\" style=\"fill:#f9a800;fill-opacity:1\" transform=\"matrix(.26458 0 0 .2635 0 .538)\"/><path d=\"M88.95 136.277c-1.341.017-2.702 1.217-2.097 2.88l4.198 11.408c.224.616.754 1.145 1.292 1.524l7.064 5.425-6.468 15.245-13.307-1.504c-.877-.048-2.165.458-2.56.645l-13.053 5.722a2.713 2.713 0 0 0-1.399 3.583l.026.058a2.713 2.713 0 0 0 3.582 1.4l13.053-5.723c.354-.102.552-.124.887-.086l11.01 1.245c.807.037.756.456.135.614l-6.737 2.372c-.74.277-.855.52-1.51 1.053l-11.306 8.677a2.713 2.713 0 0 0-.503 3.812l.04.052a2.713 2.713 0 0 0 3.812.501l11.307-8.676c.492-.393.872-.54 1.397-.726l12.034-4.236c1.45-.568 2.812-.883 3.411-2.1l7.823-18.438q.046-.11.081-.223l9.165-2.564c.756-.24 1.533-1.027 1.88-1.88l4.87-11.291a2.157 2.157 0 0 0-1.13-2.84 2.157 2.157 0 0 0-2.84 1.128l-4.667 10.822-9.255 2.7c-.366.146-.777.094-1.231-.051-1.765-.572-3.2-1.84-4.916-2.635l-7.89-5.68-4.233-10.81c-.362-.997-1.16-1.413-1.965-1.402m20.684 8.903a4.6 4.6 0 1 0 0 9.198 4.6 4.6 0 0 0 0-9.198m-55.582 52.13v5.018h101.823v-5.019z\" style=\"display:inline;fill:#000;fill-opacity:1;stroke-width:1.265\" transform=\"translate(-25.665 -79.11)\"/>",
  height: "523.6",
  width: "599.75",
};
const _title = "Slippery surface";
const _description = "Slippery surface";

export const W011SlipperySurface = defineComponent({
  name: 'W011SlipperySurface',
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
