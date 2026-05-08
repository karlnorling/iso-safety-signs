// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M159.405 44.095h6.939v176.867h-6.939zm-26.658 31.326c3.816.902 5.798 2.964 7.875 6.087l17.575 26.423c2.16 3.203 1.084 7.56-2.355 9.327l-24.275 14.75-1.161 4.91-.097.41-12.374 46.301 5.358 6.218c2.621 3.042 2.255 7.692-.811 10.335-2.295 2.295-6.514 2.269-9.084.425l-4.013 15.018c-1.037 3.878-5.844 6.207-8.995 5.152s-6.387-4.61-5.226-8.953l6.542-24.479-16.015-18.586c-2.122-2.463-2.353-6.173-.553-8.88l22.435-33.744 1.75-3.187 9.148-38.706c1.501-6.351 7.926-10.32 14.277-8.819zm-32.26 87.957 5.819 6.752 6.928-25.923zm43.386-53.843-5.161-7.76-3.007 12.723zm-2.369-51.777a12.98 12.98 0 0 0-12.976-12.975 12.98 12.98 0 0 0-12.975 12.975 12.98 12.98 0 0 0 12.975 12.975 12.98 12.98 0 0 0 12.976-12.975"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No leaning against`;
const _DefaultTitle = 'No leaning against';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P041NoLeaningAgainst = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p041-no-leaning-against`;
  const titleId = `iso-title-p041-no-leaning-against`;
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
P041NoLeaningAgainst.displayName = 'P041NoLeaningAgainst';
