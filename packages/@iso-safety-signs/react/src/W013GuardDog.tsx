// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.829 140.592"`;
const _Body = `<path d="M193.353 61.663c-1.49-2.875-6.282-2.449-7.506 0L109.826 193.53c-1.242 1.863.443 6.601 3.14 6.388l153.055.053c2.573.338 4.88-3.69 3.566-5.856z" style="display:inline;fill:#000;fill-opacity:1;stroke:#000;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-109.273 -59.531)"/><path d="m189.566 74.454-66.883 116.153 133.676-.242Z" style="display:inline;fill:#f9a800;fill-opacity:1;stroke:#000;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-109.273 -59.531)"/><path d="M194.789 118.385c-.688-.103-1.732 1.372-2.411 3.518-.185.582-.418 1.178-.52 1.323s-.533 1.202-.958 2.348c-1.349 3.637-2.936 4.925-8.463 6.87-3.89 1.37-6.552 2.388-7.083 2.708-.343.207-.503.724-.592 1.92-.067.9-.37 2.302-.675 3.115-.448 1.197-.722 1.55-1.442 1.85-.489.204-1.22.375-1.625.378-.772.007-1.727.306-6.63 2.08-1.866.673-3.899 1.196-5.422 1.39-2.091.27-2.541.418-3.175 1.052-.591.59-.704.887-.565 1.478.25 1.063.741 2.46 1.576 2.46.202 0 .634.361.96.802s1.19 1.185 1.919 1.654l1.325.851 4.506.133c4.47.131 4.493.135 2.918.475-2.338.504-3.809 1.095-4.104 1.647-.415.774-.307 1.52.278 1.93.297.208.512.483.477.61-.035.128.026.494.134.814.24.702 1.579.966 4.935.974 2.262.005 3.628-.272 7.905-1.598 1.809-.56 2.513-.656 3.829-.519.886.093 1.75.317 1.92.498.168.18 1.395 2.145 2.726 4.366 1.712 2.856 2.496 4.44 2.681 5.417.312 1.645 1.017 2.767 3.315 5.271 1.927 2.1 2.364 2.818 2.639 4.333.104.578.297 1.258.428 1.513.132.254.429.441.429.441l24.08-31.777s-.134-.168-.335-.28c-.774-.433-4.35-3.691-6.49-5.914-4.519-4.692-6.613-6.707-7.385-7.107-.759-.392-.817-.523-.806-1.805.006-.76.193-2.81.414-4.557.471-3.71.87-9.417.707-10.082-.881-1.468-3.376 2.465-4.27 2.777-1.548 1.15-3.286 2.58-3.862 3.177-1.954 2.029-2.573 1.31-2.691-3.122-.045-1.663-.192-3.134-.326-3.27a.48.48 0 0 0-.271-.142m-15.425 21.907c1.08 0 3.79 1.223 3.96 1.786.07.23-.258.33-1.08.33-.649 0-1.607.18-2.13.397-1.3.544-1.406.515-1.595-.43-.364-1.822-.258-2.083.845-2.083m46.874 11.822c-8.146 10.32-15.776 21.047-23.807 31.454 0 .064.684.116 1.521.116 1.147 0 1.916-.56 1.916-.56l21.982-28.814-.707-1.206c-.388-.663-.796-1.108-.905-.99m-6.972.567a2.506 2.506 0 1 0 .1 5.01 2.506 2.506 0 0 0-.1-5.01m-7.839 10.582a2.505 2.505 0 1 0 .099 5.01 2.505 2.505 0 0 0-.099-5.01m-7.84 10.582a2.505 2.505 0 1 0 .1 5.01 2.505 2.505 0 0 0-.1-5.01" style="display:inline;fill:#000;stroke-width:.264583" transform="translate(-109.273 -59.531)"/>`;
const _DefaultDesc = `Guard dog`;
const _DefaultTitle = 'Guard dog';
const _DefaultWidth = `607.858`;
const _DefaultHeight = `531.369`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W013GuardDog = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w013-guard-dog`;
  const titleId = `iso-title-w013-guard-dog`;
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
W013GuardDog.displayName = 'W013GuardDog';
