// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"`;
const _Body = `<path d="M233.955 461.907H516.06V179.82H233.955zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42381" transform="translate(-225.007 -170.855)"/><path d="M339.245 285.214c19.752-19.751 51.894-19.751 71.542 0 19.769 19.77 19.769 51.807 0 71.559-19.648 19.648-51.79 19.648-71.542 0-19.648-19.752-19.648-51.79 0-71.559m16.987 129.38c-20.667 8.294-45.344 4.095-62.123-12.684-16.797-16.884-21.083-41.664-12.494-62.435 3.387 18.006 11.975 35.114 25.903 49.025 13.808 13.928 30.812 22.516 48.714 26.093m.104-187.303c-17.903 3.577-35.01 12.286-48.818 26.094-13.72 13.72-22.534 30.707-26.11 48.523-8.295-20.667-3.992-45.136 12.7-61.83 16.884-16.779 41.456-21.289 62.228-12.787m112.496 112.79c8.19 20.685 3.784 45.154-12.891 61.83-16.693 16.779-41.456 20.978-62.141 12.683 18.023-3.68 35.01-12.165 48.817-26.093 13.825-13.72 22.534-30.708 26.215-48.42m-93.453-117.3c27.424-18.94 65.303-16.278 89.668 8.087 24.47 24.573 27.113 62.538 7.984 89.98 19.337 27.424 16.572 65.614-7.984 90.066-24.365 24.469-62.348 27.234-89.668 8.19-27.545 19.355-65.925 16.383-90.395-8.19-24.555-24.452-27.32-62.642-8.087-90.17-19.026-27.441-16.468-65.303 8.087-89.876 24.573-24.573 62.953-27.735 90.395-8.087m18.732 4.51c20.667-8.087 45.137-3.888 61.83 12.788 16.883 16.796 21.29 41.56 12.787 62.434-3.473-18.11-12.286-35.2-26.11-49.128-13.808-13.721-30.708-22.413-48.507-26.094m0 0" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42381" transform="translate(-225.007 -170.855)"/>`;
const _DefaultDesc = `Lifebuoy`;
const _DefaultTitle = 'Lifebuoy';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E040Lifebuoy = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e040-lifebuoy`;
  const titleId = `iso-title-e040-lifebuoy`;
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
E040Lifebuoy.displayName = 'E040Lifebuoy';
