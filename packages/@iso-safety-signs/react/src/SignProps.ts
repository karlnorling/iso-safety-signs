import type * as React from 'react';

/** Props accepted by every generated ISO 7010 safety sign React component. */
export interface SignProps {
  /** CSS class forwarded to the wrapping `<span>`. */
  className?: string;
  /** Accessible description injected as `<desc>` inside the SVG. Defaults to the sign name. */
  description?: string;
  /** Height applied to the `<svg>` element (pixels or any CSS length). */
  height?: number | string;
  /** Inline styles forwarded to the wrapping `<span>`. */
  style?: React.CSSProperties;
  /** Accessible title injected as `<title>` inside the SVG. Defaults to the sign name. */
  title?: string;
  /** Width applied to the `<svg>` element (pixels or any CSS length). */
  width?: number | string;
  /** Overrides `aria-labelledby` with a direct label on the wrapping `<span>`. */
  'aria-label'?: string;
}
