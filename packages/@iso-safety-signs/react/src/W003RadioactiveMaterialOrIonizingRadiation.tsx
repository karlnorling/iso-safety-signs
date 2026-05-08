// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 524"`;
const _Body = `<path fill="#f9a800" stroke="#000" stroke-linejoin="round" stroke-width="32" d="m300 16 284 492H16z"/><path d="M367 230a150 150 0 0 1 67 116H166a150 150 0 0 1 67-116l134 232a150 150 0 0 1-134 0"/><circle cx="300" cy="346" r="36" stroke="#f9a800" stroke-width="12"/>`;
const _DefaultDesc = `Radioactive material or ionizing radiation`;
const _DefaultTitle = 'Radioactive material or ionizing radiation';
const _DefaultWidth = `100%`;
const _DefaultHeight = `100%`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W003RadioactiveMaterialOrIonizingRadiation = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w003-radioactive-material-or-ionizing-radiation`;
  const titleId = `iso-title-w003-radioactive-material-or-ionizing-radiation`;
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
W003RadioactiveMaterialOrIonizingRadiation.displayName = 'W003RadioactiveMaterialOrIonizingRadiation';
