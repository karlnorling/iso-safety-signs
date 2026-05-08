// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 264.567 264.567"`;
const _Body = `<defs><clipPath id="m029-sound-horn-a" clipPathUnits="userSpaceOnUse"><path d="M44.874 479.369h228.233V707.6H44.874z"/></clipPath></defs><g clip-path="url(#m029-sound-horn-a)" transform="matrix(1.33333 0 0 -1.33333 -79.704 923.595)"><path d="M0 0c0 54.792-44.423 99.212-99.214 99.212-54.793 0-99.211-44.42-99.211-99.212 0-54.795 44.418-99.213 99.211-99.213C-44.423-99.213 0-54.795 0 0" style="fill:#005387;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(258.203 593.484)"/><path d="M0 0c0-1.304-.718-1.973-1.765-1.973h-1.661v5.009c-5.501 8.348-14.736 12.866-30.424 15.845-12.077 2.293-32.059 3.192-42.86 3.425v-1.6h-8.929v1.584a41 41 0 0 1-4.109-.393c-2.463-5.922-8.3-10.088-15.113-10.088-9.041 0-16.369 7.329-16.369 16.369s7.328 16.368 16.369 16.368c6.813 0 12.65-4.166 15.113-10.087a42 42 0 0 1 4.109-.395v1.586h8.929v-1.6c10.801.232 30.783 1.131 42.86 3.425 15.688 2.979 24.923 7.497 30.424 15.845v5.007h1.661c1.048 0 1.765-.668 1.765-1.972z" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(198.895 565.306)"/><path d="M0 0a1.466 1.466 0 0 1-.437-2.029A35.84 35.84 0 0 0 5.27-21.477 35.83 35.83 0 0 0-.433-40.919a1.466 1.466 0 0 1 .437-2.029 1.47 1.47 0 0 1 2.03.439 38.76 38.76 0 0 1 6.172 21.032A38.77 38.77 0 0 1 2.03-.439 1.47 1.47 0 0 1 0 0" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(204.953 614.961)"/><path d="M0 0a1.955 1.955 0 0 1-.48-2.727c5.667-8.087 8.663-17.601 8.663-27.514S5.185-49.669-.484-57.759a1.957 1.957 0 0 1 3.207-2.246c6.132 8.751 9.375 19.043 9.375 29.764S8.857-9.228 2.725-.48C2.105.406.885.62 0 0" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(213.755 623.725)"/><path d="M0 0a2.45 2.45 0 0 1-.515-3.422C7.291-13.989 11.417-26.541 11.417-39.72S7.291-65.45-.514-76.016a2.448 2.448 0 0 1 3.938-2.908C11.855-67.51 16.311-53.952 16.311-39.72c0 14.233-4.456 27.791-12.889 39.205A2.446 2.446 0 0 1 0 0" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(224.003 633.204)"/></g>`;
const _DefaultDesc = `Sound horn`;
const _DefaultTitle = 'Sound horn';
const _DefaultWidth = `264.567`;
const _DefaultHeight = `264.567`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M029SoundHorn = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-m029-sound-horn`;
  const titleId = `iso-title-m029-sound-horn`;
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
M029SoundHorn.displayName = 'M029SoundHorn';
