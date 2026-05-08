// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608.708 530.149"`;
const _Body = `<g style="display:inline"><path d="M679.155 827.01c11.643-.516 17.37-15.399 13.38-23.099l-288.873-500c-6.01-9.154-21.455-6.9-26.479 0L88.17 801.376c-5.962 12.02 1.878 25.165 11.268 25.493z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-85.592 -297.361)"/><path d="m136.479 791.376 253.944-438.169s253.943 436.057 253.028 438.24z" style="fill:#f9a800;fill-opacity:1;stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;display:inline" transform="translate(-85.592 -297.361)"/><path d="m389.718 497.996-76.338 42.535c-2.77 1.643-4.554 6.244-5.352 10.845l-.422 59.437c.234 8.075 8.216 15.446 14.225 16.197h71.55c-10.282 25.211-21.973 48.592-35.916 70.14l-.141 68.592 36.901.282.423-139.436 45.634.704c9.906.235 8.403-19.108-.282-18.31l-20.282.563 2.676-6.62 39.296.282c10.892.517 11.925-16.432 2.254-17.042h-38.451l1.972-6.479 49.577-.14c9.296-.33 9.014-16.292 1.69-16.62h-47.605l2.112-6.902h30.846c7.934.845 8.262-17.183.14-17.746l-104.507.14v-3.52c15.493-8.498 40.986-16.01 30-36.902z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;display:inline" transform="translate(-85.592 -297.361)"/><path d="m368.478 557.55-15.776 65.937 16.687.065zm4.852 49.693 16.057-65.1-16.827.084zm.271 16.667 16.762.065-.649-66.293zm20.627-15.757 16.762-66.227h-17.531zm.056 15.897 18.236-.01-.78-67.495zm21.688-15.408 16.686-66.575-17.39-.066z" style="fill:#f9a800;fill-opacity:1;stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-85.592 -297.361)"/></g>`;
const _DefaultDesc = `Sharp element`;
const _DefaultTitle = 'Sharp element';
const _DefaultWidth = `608.708`;
const _DefaultHeight = `530.149`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W022SharpElement = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w022-sharp-element`;
  const titleId = `iso-title-w022-sharp-element`;
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
W022SharpElement.displayName = 'W022SharpElement';
