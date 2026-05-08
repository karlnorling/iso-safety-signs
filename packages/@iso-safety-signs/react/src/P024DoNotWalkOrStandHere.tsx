// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M151.985 130.844c1.024 4.307-3.184 23.454-5.527 28.587-2.377 5.21-6.699 15.872-7.076 19.743-.955 9.791 1.459 17.27 7.306 22.717 12.008 11.189 30.43 9.737 38.521-6.703 3.127-6.353 6.475-16.957 7.528-23.937.854-5.66 1.736-9.7 2.611-14.054 1.637-8.146 4.465-18.541 7.408-26.28 2.291-6.025 3.075-6.397 5.089-14.141 4.394-16.894.201-41.379-12.785-53.878-10.266-9.881-26.857-9.29-37.186 1.48-8.818 9.194-14.137 25.418-14.115 39.052.017 10.678 5.244 14.87 8.227 27.415m-38.971-.001c-1.024 4.307 3.184 23.454 5.527 28.587 2.377 5.21 6.699 15.872 7.076 19.743.955 9.791-1.459 17.27-7.306 22.717-12.008 11.189-30.43 9.737-38.521-6.703-3.127-6.353-6.475-16.957-7.528-23.937-.854-5.66-1.736-9.7-2.611-14.054-1.637-8.146-4.465-18.541-7.408-26.28-2.291-6.025-3.075-6.397-5.089-14.141-4.394-16.894-.201-41.379 12.785-53.878 10.266-9.881 26.857-9.29 37.186 1.48 8.818 9.194 14.137 25.418 14.115 39.052-.017 10.678-5.244 14.87-8.227 27.415"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not walk or stand here`;
const _DefaultTitle = 'Do not walk or stand here';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P024DoNotWalkOrStandHere = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p024-do-not-walk-or-stand-here`;
  const titleId = `iso-title-p024-do-not-walk-or-stand-here`;
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
P024DoNotWalkOrStandHere.displayName = 'P024DoNotWalkOrStandHere';
