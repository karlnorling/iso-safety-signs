// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M-200 0H0v200h-200z" style="fill:#fff;fill-rule:nonzero;stroke:none" transform="scale(-1 1)"/><path d="M-195 5H-5v190h-190z" style="fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="scale(-1 1)"/><path d="M21.383 23.6v10.7h6.313v-5.964h144.251V34.3h6.314V23.6H72.899Zm0 154.271v-10.7h6.313v5.965h144.251v-5.965h6.314v10.7H72.899Z" style="color:#000;fill:#fff;fill-opacity:1;stroke-width:1.57836"/><path d="M33.931 34.886h65.472v131.9H33.931zm120.788 45.435v11.435h-41.697v18.16h41.697v11.435l11.41-10.257 11.41-10.258-11.41-10.257z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:3.25" transform="translate(.087 -.1)"/>`;
const _DefaultDesc = `Door slides right to open`;
const _DefaultTitle = 'Door slides right to open';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E033DoorSlidesRightToOpen = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e033-door-slides-right-to-open`;
  const titleId = `iso-title-e033-door-slides-right-to-open`;
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
E033DoorSlidesRightToOpen.displayName = 'E033DoorSlidesRightToOpen';
