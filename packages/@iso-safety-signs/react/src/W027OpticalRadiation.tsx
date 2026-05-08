// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path d="M555.88 491.5H43.875L299.88 48.2z" style="fill:#f9a800" transform="translate(.125 2)"/><g style="stroke:#000;stroke-linecap:round;fill:#000"><path d="m-622 105.22-12.5 77.531-52.281-58.594 31.375 71.969-75.656-21.031 65.344 43.594-75.031 23.219 78.531 1.344-50.562 60.062 66.781-41.281-10.062 77.875 33.844-70.875 33.656 70.969-9.844-77.906 66.656 41.5-50.375-60.25 78.5-1.125-74.938-23.406 65.438-43.406-75.719 20.812 31.594-71.875-52.438 58.438-12.31-77.54zm.5 82.219c21.27 0 38.531 17.261 38.531 38.531s-17.261 38.562-38.531 38.562-38.531-17.292-38.531-38.562 17.261-38.531 38.531-38.531z" style="stroke-width:1.2" transform="translate(921 113.37)"/><path d="M-283.77 72.153c0 22.281-18.063 40.344-40.344 40.344s-40.344-18.063-40.344-40.344 18.063-40.344 40.344-40.344 40.344 18.063 40.344 40.344z" style="stroke-width:1" transform="translate(552 282.37)scale(.77947)"/></g>`;
const _DefaultDesc = `Optical radiation`;
const _DefaultTitle = 'Optical radiation';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W027OpticalRadiation = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w027-optical-radiation`;
  const titleId = `iso-title-w027-optical-radiation`;
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
W027OpticalRadiation.displayName = 'W027OpticalRadiation';
