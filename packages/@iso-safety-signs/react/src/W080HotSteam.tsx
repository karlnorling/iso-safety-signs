// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="m237.734 227.918-75.089-130.07a4.24 4.24 0 0 0-3.677-2.116 4.3 4.3 0 0 0-3.678 2.117L80.201 227.918a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.117h150.177a4.3 4.3 0 0 0 3.678-2.117 4.18 4.18 0 0 0 0-4.233" style="display:inline;stroke-width:.264583" transform="translate(-79.626 -95.732)"/><path fill="#f6bd16" d="m299.88 48.2 256 443.3H43.875z" style="display:inline;fill:#f9a800;fill-opacity:1" transform="matrix(.26458 0 0 .2635 .026 .538)"/><path d="M138.366 154.907v2.064h41.257v-2.064zm12.572 5.676-5.453 18.92c-4.408-.008-7.756 1.596-9.855 4.049-2.24 2.619-3.08 6.092-2.683 9.383.395 3.291 2.037 6.452 4.872 8.406 2.47 1.703 5.82 2.417 9.793 1.57-.744 4.4.231 7.93 2.242 10.378 2.207 2.685 5.556 4.076 9.151 4.076 3.596 0 6.923-1.39 9.13-4.076 2.012-2.447 2.987-5.979 2.243-10.379 3.973.848 7.323.134 9.793-1.569 2.835-1.954 4.476-5.115 4.872-8.406.396-3.29-.443-6.764-2.683-9.383-2.1-2.453-5.447-4.057-9.855-4.049l-5.453-18.92-2.135.616 5.929 20.571.88-.045c4.31-.22 7.16 1.187 8.944 3.272s2.495 4.938 2.167 7.673c-.33 2.734-1.688 5.298-3.928 6.842s-5.397 2.161-9.659.803l-1.927-.615.516 1.957c1.25 4.744.374 8.036-1.42 10.22-1.777 2.161-4.57 3.276-7.424 3.297-2.855-.02-5.648-1.136-7.424-3.297-1.794-2.184-2.67-5.476-1.42-10.22l.516-1.957-1.928.615c-4.261 1.358-7.419.74-9.658-.803-2.24-1.544-3.599-4.108-3.928-6.842s.383-5.588 2.166-7.673c1.784-2.085 4.635-3.491 8.945-3.272l.88.045 5.929-20.571zm7.025 6.318v13.246h2.064v-13.246z" style="color:#000;fill:#000;fill-opacity:1;stroke-width:.264583" transform="translate(-79.626 -95.732)"/>`;
const _DefaultDesc = `Hot steam`;
const _DefaultTitle = 'Hot steam';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const W080HotSteam = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-w080-hot-steam`;
  const titleId = `iso-title-w080-hot-steam`;
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
W080HotSteam.displayName = 'W080HotSteam';
