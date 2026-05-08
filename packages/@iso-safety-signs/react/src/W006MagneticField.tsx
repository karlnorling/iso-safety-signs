// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f9a800" d="M44 491.525 300.005 50.036l256 441.49z"/><path d="M298.47 205.31c-17.796-.002-35.667 3.548-50.281 10.969-13.455 6.832-27.156 22.519-31.719 36.344-4.371 13.245-2.672 54.968 5.719 140.31 3.213 32.681 7.052 66.822 7.086 69.612l48.82-.05-1.781-12.312c-1.611-11.097-13.982-124.11-17.531-160.16-2.957-30.035 12.08-47.812 40.406-47.812 19.572 0 33.24 8.73 38.688 24.72 3.484 10.227 2.81 21.46-6.157 101.38-5.545 49.42-9.145 92.77-8.45 93.965l46.513.221 1.656-15.219c.915-8.37 2.946-30.229 4.531-48.562 1.586-18.333 4.16-46.37 5.72-62.312 6.53-66.789 2.88-91.343-16.22-109.25-15.177-14.229-40.99-21.84-67-21.844m-68.188 199.22 32.132-.45 6.618 49.732c-11.688 0-21.015.786-32.703.786zm105.47 0h32.375l-4.536 48.73-31.742-1.021z"/><path d="m-253.43 398.62 8.43-1.65c3.87 16.082 5.993 40.238 0 60.591l-8.034-1.573c4.008-22.617 3.656-34.612-.393-57.36zm-20 0 8.43-1.65c3.87 16.082 5.993 40.238 0 60.591l-8.034-1.573c4.008-22.617 3.656-34.612-.393-57.36z" style="color:#000" transform="translate(665.343)"/><path d="m-253.43 398.62 8.43-1.65c3.87 16.082 5.993 40.238 0 60.591l-8.034-1.573c4.008-22.617 3.656-34.612-.393-57.36zm-20 0 8.43-1.65c3.87 16.082 5.993 40.238 0 60.591l-8.034-1.573c4.008-22.617 3.656-34.612-.393-57.36z" style="color:#000" transform="matrix(-1 0 0 1 -65.343 0)"/>`;
const _DefaultDesc = `Magnetic field`;
const _DefaultTitle = 'Magnetic field';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W006MagneticField = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w006-magnetic-field`;
  const titleId = `iso-title-w006-magnetic-field`;
  const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;
  const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;
  const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(title)}</title>
  <desc id="${descId}">${_h(description)}</desc>
  ${_Body}</svg>`;
  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
      style={{ display: 'contents', ...style }}
    />
  );
});
W006MagneticField.displayName = 'W006MagneticField';
