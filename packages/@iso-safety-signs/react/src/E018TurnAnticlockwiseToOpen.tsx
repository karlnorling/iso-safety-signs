// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path fill="#fff" d="M0 0h105.833v105.833H0z"/><path fill="#237f52" d="M2.646 2.646h100.541v100.541H2.646z"/><path d="m85.155 70.494.08 5.702c-13.109 3.989-20.193 17.587-20.6 25.729l-5.13.244 9.934 10.992 9.772-11.156-5.457-.08c1.303-6.705 3.99-12.105 11.4-15.96l.081-9.719v.03c16.61-5.944 39.003 5.618 39.328 28.579l-9.119-.081c.326-14.493-14.82-25.893-30.29-18.808V99.89c-7.763 5.89-7.057 20.98-.082 26.218v26.462l41.609.244c-.081 0 .08-82.32.08-82.32zm21.006 28.5c10.911 3.636 9.202 25.838.245 27.765l-17.263.082c8.523-1.683 11.265-23.56-.08-27.766z" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.173782" transform="translate(-40.217 -58.737)"/>`;
const _DefaultDesc = `Turn anticlockwise to open`;
const _DefaultTitle = 'Turn anticlockwise to open';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E018TurnAnticlockwiseToOpen = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e018-turn-anticlockwise-to-open`;
  const titleId = `iso-title-e018-turn-anticlockwise-to-open`;
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
E018TurnAnticlockwiseToOpen.displayName = 'E018TurnAnticlockwiseToOpen';
