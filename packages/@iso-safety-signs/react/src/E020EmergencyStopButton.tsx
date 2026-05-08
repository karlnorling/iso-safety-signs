// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff;fill-rule:nonzero;stroke:none"/><path d="M5 5h190v190H5z" style="fill:#237f52;fill-rule:nonzero;stroke:none;fill-opacity:1"/><path d="M33.692 98.447s8.496 1.515 11.947-.478c3.1-1.79 4.634-5.588 6.326-8.742 1.197-2.23 2.515-7.268 2.515-7.268l17.95-13.69 11.919-4.23 17.443-.24 6.69 15.532-14.097 8.124S83.807 89.52 79.26 92.193c-2.67 1.57-5.147 3.88-6.452 6.69-1.315 2.833-1.124 8.644-1.124 8.644l30.585-7.885s23.48-7.536 34.887-12.187c2.606-1.063 5.267-2.078 7.646-3.584 4.015-2.542 8.323-5.148 10.991-9.08 8.739-12.876 22.462-42.294 22.462-42.294l.239-12.425-36.56-.956s-2.577 14.501-5.256 21.027c-.71 1.727-2.008 3.303-3.585 4.301-2.154 1.364-4.858 1.977-7.407 1.912-11.887-.304-35.547.46-37.276.956-1.664.477-20.32 8.37-22.7 9.797-3.234 1.938-18.98 13.184-20.789 15.053-1.145 1.184-11.23 26.285-11.23 26.285" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/><path d="m89.55 66.487-4.055.084-12.503 4.562-14.785 10.983s-2.235 6.768-4.055 9.8c-1.276 2.126-4.73 5.744-4.73 5.744s4.308 1.352 5.575.93 4.358-1.309 6.083-2.704c2.084-1.686 3.371-4.194 4.73-6.505 1.56-2.65 3.887-8.364 3.887-8.364l15.629-12.672Z" style="fill:#fff;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"/><path d="M64.875 96.595s4.257.745 5.914-.538c2.178-1.687 6.093-6.093 6.093-6.093l4.42-10.693 13.142-11.29-8.004 2.987-13.62 11.11z" style="fill:#fff;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"/><path d="m101.016 68.16.179 2.031-9.797 8.363-2.569 6.69-7.825 2.749 3.763-8.423 14.158-11.41z" style="fill:#fff;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"/><path d="M20.79 159.945v3h62.753v3.78h4v-6.78zm157.987 0v3h-62.754v3.78h-4v-6.78z" style="color:#000;fill:#fff;-inkscape-stroke:none" transform="translate(.421 -.239)"/><path d="M100.198 108.107c-10.317.008-19.011 7.7-20.276 17.94h40.565c-1.266-10.244-9.967-17.938-20.289-17.94Zm-4.235 22.414h8.483v37.882h-8.483zm-15.855 40.916h40.193v4.373H80.108Z" style="fill:#fff;stroke:#fff;stroke-width:4.50278"/>`;
const _DefaultDesc = `Emergency stop button`;
const _DefaultTitle = 'Emergency stop button';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E020EmergencyStopButton = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e020-emergency-stop-button`;
  const titleId = `iso-title-e020-emergency-stop-button`;
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
E020EmergencyStopButton.displayName = 'E020EmergencyStopButton';
