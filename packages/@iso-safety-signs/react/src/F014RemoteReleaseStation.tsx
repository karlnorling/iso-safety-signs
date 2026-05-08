// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 199.946 199.938"`;
const _Body = `<path d="M0 0h199.946v199.938H0Z" style="fill:#fff;stroke-width:6.80315"/><path fill="#a92121" fill-rule="evenodd" d="M5.393 5.394h189.16v189.15H5.393Z" style="fill:#9b2423;fill-opacity:1"/><path d="M66.465 38.456a8.557 7.416 0 0 0-8.559 7.416 8.557 7.416 0 0 0 5.182 6.802v11.897c-13.422 3.59-19.986 12.146-19.986 22.578v65.393h46.724V87.149c-.678-12.065-5.836-19.673-19.986-22.734v-11.74a8.557 7.416 0 0 0 5.181-6.803 8.557 7.416 0 0 0-8.556-7.416" style="display:inline;fill:#fff;stroke-width:6.80315"/><path d="M154.394 49.58c-1.701 6.425-2.216 14.107-.975 20.688 2.5 9.374 8.17 16.639 15.258 22.666 1.25 1.126 2.664 1.899 4.069 2.624v-19.48c-4.213-.668-7.37-4.44-9.644-7.766-3.83-5.897-6.273-12.345-8.708-18.731m-24.29 8.49c-.97.002-2.002.036-3.034.07 5.598 4.286 7.344 10.731 9.188 16.811 1.921 6.683 4.316 13.09 8.099 18.617 7.095 9.415 17.847 13.57 28.389 10.543-9.326-3.88-15.066-12.965-19.36-20.771-3.893-6.153-4.993-13.93-10.176-18.985-3.793-3.597-8.104-6.295-13.106-6.286zm1.51 28.168c-.656 12.029 3.405 22.033 10.701 30.388 7.724 9.023 20.065 13.617 30.43 16.942v-19.48c-6.63-.13-12.669-2.334-17.765-5.402-10.073-6.11-17.227-13.123-23.367-22.448zm-13.96 37.432c9.4 2.238 13.794 8.288 19.038 14.596 4.195 5.357 9.76 8.542 15.891 9.624 7.637 1.286 14.906.096 20.163-5.532-12.229-2.173-19.406-9.693-27.747-16.556-9.764-6.536-17.347-9.682-27.346-2.132m13.919 19.38c1.108 6.169 3.049 11.965 6.555 16.672 9.646 11.37 22.173 11.16 34.618 11.382v-19.48c-7.898 1.852-17.575 2.733-24.893.946-6.674-1.37-11.7-5.327-16.28-9.52" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.137864px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Remote release station`;
const _DefaultTitle = 'Remote release station';
const _DefaultWidth = `199.946`;
const _DefaultHeight = `199.938`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F014RemoteReleaseStation = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-f014-remote-release-station`;
  const titleId = `iso-title-f014-remote-release-station`;
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
F014RemoteReleaseStation.displayName = 'F014RemoteReleaseStation';
