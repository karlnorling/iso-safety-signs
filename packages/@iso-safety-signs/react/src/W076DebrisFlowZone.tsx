// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 599.75 523.6"`;
const _Body = `<path d="M597.575 499.6 313.775 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.175 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path d="m299.88 48.2-80.244 141.01c14.041-10.822 17.43-18.996 27.494-19.506 14.778-.01 22.801 21.776 34.79 20.458 16.516-6.493 23.138-32.189 41.018-32.689 15.785-1.404 50.804 39.02 59.408 46.179 9.89 8.23 12.465 9.71 13.01 9.879zm-33.276 162.418s-20.52 7.81-28.254 15.215c-6.264 5.996-13.38 13.67-13.347 22.36.029 7.65 4.992 15.432 4.992 15.432l11.164 11.286 5.86 7.192-1.953 4.575-32.161 63.573-62.502 28.19-18.883 62.107L46.733 491.5h300.602l-17.008-18.558 20.027-24.27 34.299 18.955-6.375 23.873h177.601l-1.199-2.077-64.414-61.297-17.58 35.302-37.762-14.38-3.906-34.65 29.299-19.613-37.764-9.153-49.482-64.721-1.953-26.15s-65.492-25.398-91.899-35.718c-6.21-2.427-10.477-3.911-10.972-4.16-2.605-1.307-19.436-8.33-20.608-17.229-1.438-10.927 18.965-27.036 18.965-27.036m-1.42 62.392c16.153 6.915 28.125 12.472 30.352 30.996.912 24.155-14.064 42.073-21.375 55.912-7.561 16.592-10.819 36.057-10.819 36.057-10.379-24.878-10.144-34.053 3.912-56.86 8.812-14.178 16.513-23.138 14.733-39.755-1.143-10.669-16.803-26.35-16.803-26.35m54.324 31.517s22.559 8.197 31.752 24.556c13.232 23.544 23.602 59.997 24.416 61.78 3.798 8.317 19.858 39.224 19.858 39.224s-25.42-19.291-35.158-36.608c-9.593-17.057-14.012-39.51-22.33-57.228-5.43-11.565-18.538-31.724-18.538-31.724m-11.279 60.937 27.854 22.421-7.596 21.494-28.084 13.175-12.201-31.896zm-110.95 27.36 27.347 15.036-9.766 55.568-32.555-13.728-10.418-24.188zm65.76 45.11 20.184 7.844 1.65 19.302-17.927 8.156-19.842-21.072c4.86-4.263 11.519-9.495 15.936-14.23" style="fill:#f9a800;fill-opacity:1" transform="matrix(1 0 0 .99591 -.003 2.033)"/>`;
const _DefaultDesc = `Debris flow zone`;
const _DefaultTitle = 'Debris flow zone';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W076DebrisFlowZone = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w076-debris-flow-zone`;
  const titleId = `iso-title-w076-debris-flow-zone`;
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
W076DebrisFlowZone.displayName = 'W076DebrisFlowZone';
