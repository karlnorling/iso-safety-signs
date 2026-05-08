// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m160.469 102.224 1.763-14.838c.387-2.661-1.222-5.301-3.868-6.106l-26.372-8.021a5.54 5.54 0 0 0-4.194.399L105.189 85.44l-.399.231-46.643 29.387c-2.581 1.627-3.356 5.074-1.726 7.653 1.624 2.57 5.083 3.345 7.653 1.726l46.261-29.147 18.028 34.544 11.167 68.104c.562 3.43 3.708 6.041 7.311 5.206s5.777-4.15 5.266-7.268l-10.615-64.736 6.572-3.43a6.2 6.2 0 0 0 1.579-.896l24.212-18.864 26.252 15.902c2.973 1.801 6.892.822 8.707-2.176 1.797-2.966.876-6.92-2.104-8.725l-30.007-18.177a6.46 6.46 0 0 0-7.219.424zm-12.313 9.594-.315.245-13.887-26.611 16.73 5.089zm-28.299-50.113c-2.87-5.5-9.656-7.632-15.157-4.762s-7.632 9.656-4.762 15.157 9.656 7.632 15.157 4.762 7.632-9.656 4.762-15.157"/><path d="M49.803 176.578v-50.78h21.363v75.485h-2.284a94 94 0 0 0 7.39 6.169h112.456a94 94 0 0 0 7.39-6.169h-8.656v-75.485h21.363v61.054a94 94 0 0 0 6.169-9.895v-51.159h11.319v-6.169H38.205v6.169h5.429v36.465a93 93 0 0 0 6.169 14.315m27.532 24.705v-75.485h21.363v75.485zm27.532 0v-75.485h21.363v75.485zm27.532 0v-75.485h21.363v75.485zm27.532 0v-75.485h21.363v75.485z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775A105.42 105.42 0 0 0 26.631 132.5c0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not cross barrier`;
const _DefaultTitle = 'Do not cross barrier';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P071DoNotCrossBarrier = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p071-do-not-cross-barrier`;
  const titleId = `iso-title-p071-do-not-cross-barrier`;
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
P071DoNotCrossBarrier.displayName = 'P071DoNotCrossBarrier';
