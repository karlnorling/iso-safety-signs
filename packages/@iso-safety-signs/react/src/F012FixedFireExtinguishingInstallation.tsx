// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 199.946 199.938"`;
const _Body = `<path d="M0 0h199.946v199.938H0Z" style="fill:#fff;stroke-width:6.80315"/><path fill="#a92121" fill-rule="evenodd" d="M5.393 5.394h189.16v189.15H5.393Z" style="fill:#9b2423;fill-opacity:1"/><path d="M48.817 29.345c-10.47 0-18.898 11.664-18.898 26.152 0 12.097 5.88 22.221 13.914 25.234v3.875l-3.153 4.639H30.323v7.664h91.969v-7.664h-10.34l-3.172-4.332v-4.182c8.036-3.012 13.914-13.136 13.914-25.234 0-14.488-8.429-26.152-18.898-26.152H73.557Zm-1.906 44.101h4.504v9.076H46.91zm54.287 0h4.504v9.076h-4.504zm-47.24 8.203h44.697v2.957l-3.152 4.639H57.13l-3.172-4.332z" style="display:inline;fill:#fff;stroke-width:2.87173"/><path d="M154.383 49.507c-1.703 6.428-2.217 14.115-.976 20.7 2.502 9.38 8.176 16.649 15.267 22.68 1.252 1.126 2.666 1.9 4.072 2.626V76.02c-4.215-.669-7.375-4.443-9.65-7.77-3.832-5.902-6.277-12.354-8.713-18.744M130.078 58c-.97.002-2.003.037-3.036.071 5.602 4.288 7.35 10.737 9.194 16.821 1.923 6.687 4.318 13.098 8.104 18.628 7.099 9.42 17.858 13.577 28.406 10.55-9.332-3.883-15.076-12.973-19.372-20.784-3.895-6.157-4.995-13.938-10.181-18.996-3.796-3.6-8.11-6.3-13.115-6.29m1.51 28.186c-.655 12.036 3.409 22.046 10.709 30.406 7.729 9.029 20.077 13.625 30.448 16.952v-19.492c-6.634-.13-12.676-2.334-17.775-5.405-10.08-6.114-17.238-13.13-23.382-22.461M117.62 123.64c9.406 2.24 13.803 8.293 19.05 14.605 4.198 5.36 9.766 8.547 15.901 9.63 7.641 1.286 14.914.096 20.175-5.536-12.236-2.174-19.418-9.698-27.764-16.566-9.77-6.54-17.357-9.687-27.362-2.133m13.928 19.393c1.109 6.172 3.05 11.971 6.559 16.68 9.652 11.378 22.187 11.168 34.639 11.39v-19.492c-7.903 1.853-17.586 2.735-24.908.947-6.678-1.371-11.707-5.33-16.29-9.525" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.137947px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Fixed fire extinguishing installation`;
const _DefaultTitle = 'Fixed fire extinguishing installation';
const _DefaultWidth = `199.946`;
const _DefaultHeight = `199.938`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F012FixedFireExtinguishingInstallation = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-f012-fixed-fire-extinguishing-installation`;
  const titleId = `iso-title-f012-fixed-fire-extinguishing-installation`;
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
F012FixedFireExtinguishingInstallation.displayName = 'F012FixedFireExtinguishingInstallation';
