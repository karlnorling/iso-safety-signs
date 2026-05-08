// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 685 600"`;
const _Body = `<path d="M197.462 164.744 104.12 2.944l-.574-.864-.719-.65-.793-.573-.933-.433-.935-.286-1.007-.074-1.008.074-1.003.286-.864.433-.863.574-.65.649-.573.863-93.344 161.8-.43.934-.288.938-.07 1.007.07 1.005.288 1.007.43.864.575.863.648.649.863.574.864.43 1.008.289 1.003.07h186.688l1.004-.07.936-.29.935-.43.793-.573.718-.649.574-.863.43-.864.29-1.007.07-1.005-.07-1.007-.29-.938Zm0 0" style="fill-rule:evenodd;fill:#020505;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#020505;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m99.158 18.115 82.699 143.394H16.458Zm0 0" style="fill-rule:evenodd;fill:#f9a800;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#000303;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M273.086 321.84c6.445 0 43.941 4.723 50.144 5.723 7.7 1.242 19.622 6.71 33.77 20.875 14.148 14.16 26.07 10.433 35.512 10.433 9.426 0 45.68-2.484 65.289 6.969 19.867 9.191 35.754 17.644 35.754 17.644l-13.407 41.758s-22.09-9.207-33.015-11.933c-21.606-5.211-28.309 2.726-48.672 5.464-25.074 3.485-58.344-5.964-72.25-12.418-12.164-5.726-53.383-19.644-53.383-19.644Zm-39.488 195.113H214.23V342.97h19.368Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="M243.293 360.871h-15.402v-12.933h15.402Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#191719;fill-opacity:1"/><path d="m275.809 325.32-41.957 30.825Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="m79.884 94.126-12.152 8.918" style="fill:none;stroke-width:2.83056;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m275.313 383.242-41.704-30.824Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="m79.74 110.885-12.079-8.919" style="fill:none;stroke-width:2.83056;stroke-linecap:butt;stroke-linejoin:miter;stroke:#191719;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/>`;
const _DefaultDesc = `Strong winds`;
const _DefaultTitle = 'Strong winds';
const _DefaultWidth = `685pt`;
const _DefaultHeight = `800`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W064StrongWinds = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w064-strong-winds`;
  const titleId = `iso-title-w064-strong-winds`;
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
W064StrongWinds.displayName = 'W064StrongWinds';
