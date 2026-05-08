// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.98 140.468"`;
const _Body = `<path d="M36.588 173.936h151.216c3.093.092 6.278-2.756 4.594-6.615l-75.884-131.19c-2.021-3.52-6.064-2.908-8.268.185L33.005 166.862c-1.93 3.184-.552 6.553 3.583 7.074z" style="display:inline;fill:#000;fill-opacity:1;stroke:#000;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-32.015 -33.602)"/><path d="M112.689 48.534 45.532 164.381h133.946Z" style="display:inline;fill:#f9a800;fill-opacity:1;stroke:#000;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-32.015 -33.602)"/><path d="M100.575 82.945 97.4 88.812l10.384.092.276 5.605h23.506l-6.675-11.564zm5.356 6.719L85.839 108.34l23.512-2.973 1.097 15.728a8 8 0 0 0-1.333-.123 7.76 7.76 0 0 0-7.757 7.757 7.76 7.76 0 0 0 7.757 7.757 7.76 7.76 0 0 0 7.757-7.757 7.76 7.76 0 0 0-6.21-7.601l9.308-14.234 8.373 8.094.187-13.75 4.67-3.924-2.457-1.966-4.325-.1 1.864 1.864-3.693 2.432.178 6.92-5.673-5.404-5.746 9.156-.535-9.276-14.209 1.177 7.327-7.595zm25.47 26.36a4 4 0 0 0-1.572.254 3.995 3.995 0 0 0-2.344 5.154l4.878 13.014-14 3.07-15.702 1.746c-2.029.154-3.376.61-4.768 2.429l-16.212 15.746 11.586.095 9.03-9.21.994 9.21 17.72-.186-1.106-11.878 19.556-4.478.008-.003c.961-.363 1.652-.994 2.015-1.816s.4-1.828.087-2.937l-.002-.005-.948-2.55-.02-.062-.416-1.113-5.192-13.964-.038.018a3.99 3.99 0 0 0-3.554-2.534" style="display:inline;stroke-width:.264583" transform="translate(-32.015 -33.602)"/>`;
const _DefaultDesc = `Overhead obstacle`;
const _DefaultTitle = 'Overhead obstacle';
const _DefaultWidth = `608.428`;
const _DefaultHeight = `530.903`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W020OverheadObstacle = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w020-overhead-obstacle`;
  const titleId = `iso-title-w020-overhead-obstacle`;
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
W020OverheadObstacle.displayName = 'W020OverheadObstacle';
