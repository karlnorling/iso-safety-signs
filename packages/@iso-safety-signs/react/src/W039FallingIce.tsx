// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 599.75 523.6"`;
const _Body = `<path d="M597.575 499.6 313.775 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.175 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f6bd16" d="m299.88 48.2 256 443.3H43.875z" style="fill:#f9a800;fill-opacity:1" transform="matrix(1 0 0 .99591 -.003 1.052)"/><path d="M287.435 107.505v75.238h5.578v-75.238Zm22.625 32.875v58.738h5.203V140.38Zm-54.863 27.047v53.74h2.83v-53.74zm74.506 20.965 7.945 95.23 11.668-91.217zM270.828 197l13.787 124.451 9.547-124.097zm34.648 29.346 10.252 76.013 7.072-51.265-.707-19.446zm-80.258 9.545 13.79 89.802 7.07-50.912v-31.818zm119.45 87.437a9 9 0 0 0-1.34.012c-1.061.083-2.21.347-3.46.84-9.986 3.941-6.01 15.476-6.01 15.476l21.593 41.643-42.582 18.428-46.508 13.167s-3.498.91-5.137 1.668c-1.109.513-2.41 1.141-3.314 1.963-.843.767-1.448 1.883-2.123 2.801-1.11 1.51-2.942 4.426-2.942 4.426l-25.338 38.435 25.7.307 16.254-23.68 7.654 23.413 55.67-.174-11.559-40.278 55.555-25.09c3.725-1.26 7.371-8.727 4.992-13.826-8.791-17.279-28.082-51.88-28.082-51.88s-2.583-7.23-9.023-7.65m-65.805 30.172c-12.875 0-23.313 10.437-23.313 23.312s10.438 23.315 23.313 23.315 23.312-10.44 23.312-23.315-10.437-23.312-23.312-23.312" style="fill:#000;fill-opacity:1;stroke-width:.996394"/>`;
const _DefaultDesc = `Falling ice`;
const _DefaultTitle = 'Falling ice';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W039FallingIce = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w039-falling-ice`;
  const titleId = `iso-title-w039-falling-ice`;
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
W039FallingIce.displayName = 'W039FallingIce';
