// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M114.256 73.565 90.745 96.741c-2.074 2.045-2.559 5.115-1.45 7.643l11.247 31.619c1.264 3.552 5.211 5.418 8.762 4.15a6.86 6.86 0 0 0 4.326-4.754l-8.024 51.221a4.33 4.33 0 0 0 4.294 5.019h17.587v27.836c0 4.295 3.544 7.809 7.875 7.809 4.304 0 7.875-3.487 7.875-7.809V191.64h28.656a4.33 4.33 0 0 0 4.293-5.018L165.922 121.1c-1.86-13.823-12.634-24.754-25.625-26.008l-4.498-16.287c-1.566-5.672-6.803-9.394-12.439-9.313a12.62 12.62 0 0 0-9.103 4.074zm-.418 60.504a6.8 6.8 0 0 0-.384-2.677l-9.95-27.975 10.023-9.881 4.905 17.761c-1.207 3.052-2.075 6.377-2.566 9.834zm1.782-81.795c0-7.667 6.215-13.882 13.882-13.882s13.882 6.215 13.882 13.882-6.215 13.882-13.882 13.882-13.882-6.215-13.882-13.882"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869-25.503 0-48.9 9.018-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775A105.42 105.42 0 0 0 26.631 132.5c0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.323 205.678 0 132.5 0S0 59.323 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Not for pregnant women`;
const _DefaultTitle = 'Not for pregnant women';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P042NotForPregnantWomen = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p042-not-for-pregnant-women`;
  const titleId = `iso-title-p042-not-for-pregnant-women`;
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
P042NotForPregnantWomen.displayName = 'P042NotForPregnantWomen';
