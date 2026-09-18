import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { getSign, parseSvg } from '@iso-safety-signs/core';
import { signProps } from './SignProps';
import { renderSign, useInstanceId } from './SignSvg';

/**
 * Renders any ISO 7010 safety sign by slug ID.
 *
 * Useful for data-driven rendering where the sign ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs.
 *
 * @example
 * ```html
 * <SignById id="e001-emergency-exit-left-hand" :width="64" />
 * ```
 */
export const SignById = defineComponent({
  name: 'SignById',
  inheritAttrs: false,
  props: {
    ...signProps,
    /** Sign slug ID, e.g. `"e001-emergency-exit-left-hand"` or `"w001-general-warning-sign"`. */
    id: { type: String as PropType<string>, required: true },
  },
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () => {
      const sign = getSign(props.id);
      if (!sign) return null;
      return renderSign({
        attrs,
        description: props.description ?? sign.description,
        height: props.height,
        instanceId,
        svg: parseSvg(sign.svg),
        title: props.title ?? sign.name,
        width: props.width,
      });
    };
  },
});
