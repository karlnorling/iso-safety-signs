// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="m79.69 86.969 37.783 23.444-37.52 23.293-3.445-5.618 23.614-14.38H48.108v-6.589h52.013L76.245 92.587zm37.126.983h30.316V26.9a107.6 107.6 0 0 0-30.315.121zm34.528 110.087 55.058-110.095-26.944-13.895-55.402 110.785c-7.141 3.071-12.142 10.169-12.142 18.436 0 5.026 1.849 9.621 4.903 13.141v21.76a107.6 107.6 0 0 0 15.589 1.137 108 108 0 0 0 14.727-1.016V216.41a19.98 19.98 0 0 0 4.902-13.14 20 20 0 0 0-.69-5.23zm-9.226 5.075c0-5.619-4.556-10.174-10.175-10.174s-10.174 4.555-10.174 10.174 4.555 10.175 10.174 10.175a10.18 10.18 0 0 0 10.175-10.175"/>`;
const _DefaultDesc = `Disconnect before carrying out maintenance or repair`;
const _DefaultTitle = 'Disconnect before carrying out maintenance or repair';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M021DisconnectBeforeCarryingOutMaintenanceOrRepair = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-m021-disconnect-before-carrying-out-maintenance-or-repair`;
  const titleId = `iso-title-m021-disconnect-before-carrying-out-maintenance-or-repair`;
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
M021DisconnectBeforeCarryingOutMaintenanceOrRepair.displayName = 'M021DisconnectBeforeCarryingOutMaintenanceOrRepair';
