// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M118.798 148.431h50.27v50.271h-50.27z" style="fill:#9b2423;fill-opacity:1;stroke-width:.264583" transform="translate(-117.475 -147.108)"/><path d="m125.869 154.83-.958.957v24.743l.958.957h1.253V154.83zm16.683 0v26.657h1.253l.957-.957v-11.924h.689a3.1 3.1 0 0 0 3.057 2.602 3.101 3.101 0 1 0 0-6.203 3.1 3.1 0 0 0-3.057 2.602h-.689v-11.82l-.957-.957zm-13.662 1.253a1.02 1.02 0 0 0-1.022 1.021v28.428h2.044v-28.428a1.02 1.02 0 0 0-1.022-1.021m2.974 0a1.02 1.02 0 0 0-1.022 1.021v22.109a1.02 1.02 0 0 0 1.022 1.021 1.02 1.02 0 0 0 1.021-1.022v-22.108a1.02 1.02 0 0 0-1.021-1.021m2.973 0a1.02 1.02 0 0 0-1.022 1.021v22.109a1.02 1.02 0 0 0 1.022 1.021 1.02 1.02 0 0 0 1.021-1.022v-22.108a1.02 1.02 0 0 0-1.021-1.021m2.973 0a1.02 1.02 0 0 0-1.022 1.021v22.109a1.02 1.02 0 0 0 1.022 1.021 1.02 1.02 0 0 0 1.022-1.022v-22.108a1.02 1.02 0 0 0-1.022-1.021m2.973 0a1.02 1.02 0 0 0-1.021 1.021v22.109a1.02 1.02 0 0 0 1.021 1.021 1.02 1.02 0 0 0 1.022-1.022v-22.108a1.02 1.02 0 0 0-1.022-1.021m17.286 3.865c-.453 1.71-.59 3.755-.26 5.508.667 2.495 2.176 4.43 4.063 6.035.333.3.71.505 1.083.698v-5.186c-1.121-.178-1.962-1.182-2.567-2.068-1.02-1.57-1.67-3.287-2.319-4.987m-6.467 2.26c-.258 0-.532.01-.807.019 1.49 1.14 1.955 2.857 2.446 4.476.511 1.779 1.149 3.485 2.156 4.956 1.889 2.507 4.752 3.613 7.558 2.807-2.483-1.033-4.01-3.451-5.154-5.53-1.036-1.638-1.33-3.709-2.71-5.055-1.01-.957-2.157-1.676-3.489-1.673m-3.594 3.599v1.8h-1.8c.197-.9.9-1.603 1.8-1.8m1 0c.9.197 1.602.9 1.8 1.8h-1.8zm-2.8 2.799h1.8v1.8a2.36 2.36 0 0 1-1.8-1.8m2.8 0h1.8a2.36 2.36 0 0 1-1.8 1.8zm2.996 1.102c-.174 3.202.907 5.866 2.85 8.09 2.056 2.403 5.342 3.626 8.101 4.511v-5.186c-1.765-.035-3.373-.621-4.73-1.438-2.682-1.627-4.586-3.495-6.22-5.977m-.49 8.8c-1.02-.048-2.062.287-3.226 1.166 2.503.596 3.672 2.207 5.068 3.886 1.117 1.427 2.599 2.274 4.231 2.563 2.033.342 3.969.025 5.368-1.474-3.255-.578-5.166-2.58-7.387-4.407-1.462-.979-2.74-1.672-4.053-1.734m.48 6.326c.294 1.643.811 3.186 1.745 4.439 2.568 3.027 5.903 2.971 9.216 3.03v-5.186c-2.102.493-4.679.727-6.627.251-1.777-.364-3.115-1.418-4.335-2.534m-24.13 2.17.54 2.648.489-.007.488.007.54-2.649h-2.046z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.0365421px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-117.475 -147.108)"/>`;
const _DefaultDesc = `Fire hose reel`;
const _DefaultTitle = 'Fire hose reel';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const F002FireHoseReel = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-f002-fire-hose-reel`;
  const titleId = `iso-title-f002-fire-hose-reel`;
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
F002FireHoseReel.displayName = 'F002FireHoseReel';
