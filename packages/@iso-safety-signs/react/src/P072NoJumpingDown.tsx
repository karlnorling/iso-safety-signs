// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M143.836 54.451a8.605 8.605 0 0 0-10.597-5.984 8.61 8.61 0 0 0-5.984 10.597 8.61 8.61 0 0 0 10.597 5.984 8.61 8.61 0 0 0 5.984-10.597m-14.769 15.446 33.214-9.243-8.862-12.056c-1.385-1.883-.97-4.558.915-5.94s4.555-.968 5.94.915l12.327 16.77c1.783 2.425.927 6.003-2.103 6.846l-20.342 5.66 8.181 29.404a5 5 0 0 1-.252 3.363l-9.19 20.17 19.828 9.904c2.382 1.19 3.35 4.129 2.15 6.53s-4.131 3.394-6.513 2.204l-24.042-12.009a4.93 4.93 0 0 1-2.26-6.391l6.262-13.745-17.018 12.866-4.35 24.576c-.464 2.622-3.007 4.385-5.651 3.917s-4.427-2.996-3.963-5.618l4.684-26.463a4.95 4.95 0 0 1 1.863-3.043l18.762-14.184-1.496-5.377-5.789-20.805-18.354 8.811a4.263 4.263 0 0 1-5.666-1.972L96.997 66.919c-1.161-2.028-.459-4.637 1.568-5.802s4.64-.46 5.802 1.568l8.532 14.899 15.457-7.421q.35-.167.711-.266m98.052 67.428h-50.467v65.781H69.328a95 95 0 0 0 11.16 8.593h104.024a95 95 0 0 0 11.16-8.593c18.258-16.347 30.138-39.671 31.448-65.781"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775A105.42 105.42 0 0 0 26.631 132.5c0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No jumping down`;
const _DefaultTitle = 'No jumping down';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P072NoJumpingDown = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p072-no-jumping-down`;
  const titleId = `iso-title-p072-no-jumping-down`;
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
P072NoJumpingDown.displayName = 'P072NoJumpingDown';
