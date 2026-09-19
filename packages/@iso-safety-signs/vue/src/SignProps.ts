// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { PropType } from 'vue';

/**
 * Reusable Vue prop definitions shared by every generated ISO 7010 safety sign component.
 * `aria-label` is read from fallthrough attributes and labels the `<svg>` directly.
 */
export const signProps = {
  /** Accessible description injected as `<desc>` inside the SVG. Defaults to the sign name. */
  description: { type: String as PropType<string> },
  /** Height applied to the `<svg>` element (pixels or any CSS length). */
  height: { type: [Number, String] as PropType<number | string> },
  /** Accessible title injected as `<title>` inside the SVG. Defaults to the sign name. */
  title: { type: String as PropType<string> },
  /** Width applied to the `<svg>` element (pixels or any CSS length). */
  width: { type: [Number, String] as PropType<number | string> },
} as const;
