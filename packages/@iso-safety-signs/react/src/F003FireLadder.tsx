// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M5.419 5.423h189.16v189.15H5.419z" style="fill:#9b2423;fill-opacity:1"/><path fill="#fff" d="M46.688 28.062 34 172.282h7.562l1.469-16.53h50.625l1.469 16.53h7.565L90 28.062h-7.562l1.031 11.563h-30.25l1.031-11.563zm5.968 18.032h31.375l1.375 15.781H51.281zm-1.937 22.25h35.25l1.406 15.812H49.312zM48.75 90.625h39.188l1.374 15.535H47.375zm-1.938 21.965h43.063l1.281 14.75H45.531zm-1.874 21.16H91.75l1.344 15.59h-49.5z" style="color:#000"/><path d="M148.985 51.354c-1.673 6.313-2.178 13.862-.959 20.33 2.457 9.212 8.03 16.352 14.995 22.275 1.229 1.106 2.618 1.866 3.998 2.58V77.393c-4.14-.656-7.242-4.363-9.476-7.632-3.764-5.796-6.166-12.133-8.558-18.408m-23.872 8.342a97 97 0 0 0-2.981.07c5.502 4.211 7.218 10.545 9.029 16.52 1.889 6.568 4.242 12.864 7.96 18.296 6.972 9.253 17.539 13.335 27.898 10.361-9.164-3.813-14.806-12.74-19.025-20.413-3.826-6.047-4.907-13.689-10-18.657-3.728-3.535-7.965-6.186-12.88-6.177zm1.484 27.682c-.644 11.822 3.347 21.653 10.517 29.864 7.59 8.868 19.719 13.382 29.905 16.65v-19.144c-6.516-.128-12.45-2.293-17.458-5.309-9.9-6.005-16.93-12.896-22.965-22.06zm-13.72 36.786c9.24 2.2 13.557 8.145 18.71 14.345 4.124 5.264 9.592 8.394 15.618 9.458 7.505 1.263 14.648.094 19.814-5.437-12.017-2.136-19.07-9.525-27.268-16.27-9.595-6.424-17.047-9.515-26.873-2.096m13.68 19.047c1.09 6.062 2.996 11.758 6.442 16.383 9.48 11.174 21.79 10.968 34.02 11.186v-19.144c-7.76 1.82-17.27 2.686-24.463.93-6.558-1.346-11.497-5.235-15.999-9.355" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.135485px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Fire ladder`;
const _DefaultTitle = 'Fire ladder';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F003FireLadder = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-f003-fire-ladder`;
  const titleId = `iso-title-f003-fire-ladder`;
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
F003FireLadder.displayName = 'F003FireLadder';
