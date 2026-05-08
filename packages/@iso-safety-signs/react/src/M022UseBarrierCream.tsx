// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="M44.156 194.679c-.193 6.855 3.647 8.647 7.961 8.727h63.24c6.876.008 7.517-.778 11.59-3.22l31.874-19.115c1.569-1.141 2.514-2.459 3.757-3.877l22.179-26.023c6.169-7.238-5.153-17.294-12.433-9.104l-21.839 25.581c-.9.939-1.495 1.176-2.443 1.347l-30.096 5.443c-4.476.893-8.977-.061-12.315-2.938l-10.05-8.661c-3.171-2.733-2.182-7.122 1.57-9.266l16.327-9.332c3.442-1.968 6.656-4.358 9.742-9.644 1.751-2.999 3.757-8.615 1.303-12.628-1.695-2.773-4.797-1.9-7.427-.37l-65.413 38.082c-5.647 3.288-7.484 5.865-7.527 12.956zm85.569-141.208c-2.734 2.419-4.591 5.097-6.083 8.358-6.229 13.614 2.233 21.365 1.332 31.041-.332 3.567-1.777 7.22-5.858 11.826-3.279 3.701 1.442 8.22 5.085 5.121 4.622-3.933 7.066-9.821 7.756-15.718 1.049-8.974-4.03-15.75-3.583-23.307.181-3.075 2.054-8.045 5.05-10.384V51.35c-.973.372-2.576 1.127-3.699 2.121m10.452-3.618h3.376v13.244h-3.376zm91.004 27.395a113.64 113.64 0 0 0-40.19-41.547h-27.588L145.241 49.85v13.249l18.162 14.15zm-96.069-27.395h3.376v13.244h-3.376zm33.976-9.83h23.614v32.903h-23.614zm-58.838 130.48 15.464-2.797 17.681-20.744-2.037-2.411c-2.084-2.465-7.247-2.043-10.447 1.712zm22.716-4.108 15.464-2.796 16.335-19.165-1.323-1.694c-2.593-3.319-7.944-2.747-11.161.995z"/>`;
const _DefaultDesc = `Use barrier cream`;
const _DefaultTitle = 'Use barrier cream';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const M022UseBarrierCream = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-m022-use-barrier-cream`;
  const titleId = `iso-title-m022-use-barrier-cream`;
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
M022UseBarrierCream.displayName = 'M022UseBarrierCream';
