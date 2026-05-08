// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M61.912 67.733h105.833v105.833H61.912z" style="fill:#fff;stroke-width:.529167" transform="translate(-61.912 -67.733)"/><path d="M64.558 70.379H165.1v100.542H64.558z" style="fill:#237f52;fill-opacity:1;stroke-width:.529167" transform="translate(-61.912 -67.733)"/><path d="M79.343 56.092c-11.89 0-21.527 9.637-21.528 21.526 0 11.89 9.638 21.528 21.528 21.528s21.527-9.639 21.527-21.528-9.638-21.526-21.527-21.526m-23.424 50.374a30.046 30.046 0 0 0-30.112 30.113v6.66h22.577v-3.673c0-.98.79-1.77 1.77-1.77.981 0 1.77.79 1.77 1.77v38.087h54.384v-39.027s13.129 20.912 20.062 31.02a11.1 11.1 0 0 0 2.892 2.754 11.097 11.097 0 0 0 15.4-3.195l29.568-45.052a11.097 11.097 0 0 0-3.195-15.4 11.097 11.097 0 0 0-15.4 3.195l-20.115 30.649-20.414-31.102c-2.06-3.14-5.419-4.873-8.892-5v-.03zm-33.016 41.396v18.28h25.48v-18.28Zm2.904 23.004v6.787h22.577v-6.787z" style="fill:#fff;stroke:none;stroke-width:2.73754" transform="translate(-.155 -.004)scale(.52917)"/><path d="M355.82 1.796h47.168v15.723H355.82zm15.723-15.723h15.723V33.24h-15.723z" style="fill:#fff" transform="translate(-119.379 19.2)scale(.52917)"/>`;
const _DefaultDesc = `First aid responder`;
const _DefaultTitle = 'First aid responder';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E064FirstAidResponder = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e064-first-aid-responder`;
  const titleId = `iso-title-e064-first-aid-responder`;
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
E064FirstAidResponder.displayName = 'E064FirstAidResponder';
