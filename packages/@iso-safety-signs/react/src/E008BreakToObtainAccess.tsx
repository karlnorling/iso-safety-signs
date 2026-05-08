// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"`;
const _Body = `<path fill="#fff" d="M0 0h400v400H0z"/><path fill="#237f52" d="M10 10h380v380H10z"/><path fill="#fff" d="m277.01 168.69 2.47 8.645 43.538.618-14.203 37.98-18.525-.312 4.323 14.827 26.247 12.35 36.128-13.28-24.701-51.26 22.536-97.268-119.8 47.243-36.44-82.753-40.762 67.627L44.19 75.744l58.364 99.738-55.582 85.84 73.802 4.635-4.017 89.546 73.802-59.288 80.283 56.818.312-47.86-46.937-33.97-56.818-22.542-25.012-32.11-53.73-.618 24.707-38.292 33.963.312 11.427-27.483c5.245-6.999 11.733-11.527 23.16-2.47.511-9.675 10.909-15.338 20.066-8.646l8.957 11.115c1.029-9.674 14.103-15.032 21.613-7.722l2.476 3.088c4.628-6.793 13.585-8.645 19.449-1.852z"/><path fill="#fff" d="m270.84 173.02 17.908 62.681 66.698 30.57-.306 89.858-128.77-91.398-54.34-21.925-20.385-26.247 25.012-.312 3.088 3.4c4.323 1.852 5.252.617 5.558-2.782l1.235-25.936-14.82-16.055h-16.055l9.88-21.62c1.335-2.57 6.693-4.528 8.645-2.158l24.083 25.936c3.4 4.635 12.045-.305 8.034-5.863l-17.297-20.384c-2.676-2.981 2.058-9.98 7.722-6.175l26.553 29.647c1.597.767 3.811.536 5.364-.58 1.56-1.123 2.458-3.125 1.429-5.907l-10.803-12.662c-3.911-3.911 1.746-12.144 7.715-7.098l24.09 26.553c2.363 3.087 8.127-1.235 5.245-4.629L242.12 154.49c-2.364-3.293 1.135-9.674 6.793-7.098z"/>`;
const _DefaultDesc = `Break to obtain access`;
const _DefaultTitle = 'Break to obtain access';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E008BreakToObtainAccess = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e008-break-to-obtain-access`;
  const titleId = `iso-title-e008-break-to-obtain-access`;
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
E008BreakToObtainAccess.displayName = 'E008BreakToObtainAccess';
