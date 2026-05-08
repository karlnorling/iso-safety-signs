// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M142.992 229.692 67.904 99.622a4.24 4.24 0 0 0-3.678-2.116 4.3 4.3 0 0 0-3.678 2.117l-75.089 130.07a4.18 4.18 0 0 0 0 4.232 4.24 4.24 0 0 0 3.678 2.117h150.178a4.3 4.3 0 0 0 3.677-2.117 4.18 4.18 0 0 0 0-4.233" style="display:inline;stroke-width:.264583" transform="translate(15.116 -97.506)"/><path fill="#f6bd16" d="m299.88 48.2 256 443.3H43.875z" style="display:inline;fill:#f9a800;fill-opacity:1" transform="matrix(.26458 0 0 .2635 0 .538)"/><path d="M64.226 157.079c-17.83 0-32.323 14.493-32.323 32.322s14.494 32.322 32.323 32.322c17.828 0 32.322-14.493 32.322-32.322s-14.494-32.322-32.322-32.322m0 3.8c15.775 0 28.521 12.747 28.521 28.522s-12.746 28.524-28.521 28.524-28.524-12.749-28.524-28.524S48.45 160.88 64.226 160.88m-12.405 8.742c-2.912 4.445-3.779 8.337-3.387 11.739.391 3.401 1.924 6.177 3.309 8.742 1.384 2.566 2.627 4.924 2.966 7.518s-.116 5.534-2.574 9.593l3.25 1.97c2.79-4.607 3.545-8.6 3.092-12.057-.453-3.459-2.008-6.266-3.39-8.829-1.384-2.563-2.59-4.878-2.878-7.373-.287-2.495.23-5.308 2.791-9.219zm11.812 0c-2.912 4.445-3.778 8.337-3.387 11.739.392 3.401 1.924 6.177 3.309 8.742 1.384 2.566 2.625 4.924 2.965 7.518s-.117 5.534-2.575 9.593l3.25 1.97c2.79-4.607 3.545-8.6 3.092-12.057-.453-3.459-2.005-6.266-3.388-8.829s-2.59-4.878-2.877-7.373.227-5.308 2.789-9.219zm11.81 0c-2.912 4.445-3.777 8.337-3.386 11.739.392 3.401 1.924 6.177 3.308 8.742 1.385 2.566 2.628 4.924 2.967 7.518.34 2.593-.116 5.534-2.574 9.593l3.25 1.97c2.79-4.607 3.545-8.6 3.092-12.057-.453-3.459-2.007-6.266-3.39-8.829s-2.59-4.878-2.878-7.373c-.287-2.495.229-5.308 2.791-9.219z" style="color:#000;fill:#000;fill-opacity:1;-inkscape-stroke:none" transform="translate(15.116 -97.506)"/>`;
const _DefaultDesc = `Hot content`;
const _DefaultTitle = 'Hot content';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W079HotContent = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w079-hot-content`;
  const titleId = `iso-title-w079-hot-content`;
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
W079HotContent.displayName = 'W079HotContent';
