// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.251 66.64 13.251 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M168.517 90.196a7.3 7.3 0 0 1 1.816 2.287l17.863 35.055a7.34 7.34 0 1 1-13.092 6.666l-17.263-33.879-7.213-6.727v40.813l7.434 36.989 2.959 4.221 21.077 30.101a7.34 7.34 0 0 1-1.809 10.226 7.33 7.33 0 0 1-10.226-1.805l-21.062-30.073-3.881-5.536a7.4 7.4 0 0 1-1.215-2.941l-7.609-38.104h-5.032l-25.08 31.799-.776 4.918-5.747 36.288a7.35 7.35 0 0 1-8.403 6.108 7.345 7.345 0 0 1-6.105-8.403l5.744-36.274 1.054-6.669a7.2 7.2 0 0 1 1.169-2.956q.289-.439.636-.818l25.548-32.617v-34.83l-7.434 7.177a7.4 7.4 0 0 1-2.377 1.698l-35.945 16.001a7.354 7.354 0 0 1-9.704-3.721 7.35 7.35 0 0 1 3.728-9.697l34.74-15.469 20.208-19.511a7.3 7.3 0 0 1 5.104-2.062h14.686c1.794 0 3.592.654 5 1.969zm-46.399-39.358a12.85 12.85 0 0 1 12.849-12.849c7.102 0 12.856 5.751 12.856 12.849s-5.754 12.849-12.856 12.849a12.85 12.85 0 0 1-12.849-12.849"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No thoroughfare`;
const _DefaultTitle = 'No thoroughfare';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P004NoThoroughfare = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p004-no-thoroughfare`;
  const titleId = `iso-title-p004-no-thoroughfare`;
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
P004NoThoroughfare.displayName = 'P004NoThoroughfare';
