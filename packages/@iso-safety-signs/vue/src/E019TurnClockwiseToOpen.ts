// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 105.833 105.833\"",
  body: "<path fill=\"#fff\" d=\"M105.833 0H0v105.833h105.833z\"/><path fill=\"#237f52\" d=\"M103.187 2.646H2.646v100.541h100.541z\"/><path d=\"m101.112 70.494-.08 5.702c13.109 3.989 20.193 17.587 20.6 25.729l5.13.244-9.934 10.992-9.772-11.156 5.456-.08c-1.302-6.705-3.99-12.105-11.4-15.96l-.08-9.719-.001.03c-16.61-5.944-39.002 5.618-39.328 28.579l9.12-.081c-.326-14.493 14.82-25.893 30.29-18.808V99.89c7.763 5.89 7.057 20.98.082 26.218v26.462l-41.61.244c.082 0-.08-82.32-.08-82.32zm-21.007 28.5c-10.91 3.636-9.202 25.838-.245 27.765l17.263.082c-8.522-1.683-11.264-23.56.082-27.766z\" style=\"fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.173782\" transform=\"translate(-40.217 -58.737)\"/>",
  height: "400",
  width: "400",
};
const _title = "Turn clockwise to open";
const _description = "Turn clockwise to open";

export const E019TurnClockwiseToOpen = defineComponent({
  name: 'E019TurnClockwiseToOpen',
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
