// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M113.044 192.864a4.614 4.614 0 0 0-4.472-4.774 4.66 4.66 0 0 0-4.791 4.491 4.614 4.614 0 0 0 4.473 4.774 4.66 4.66 0 0 0 4.791-4.491zm-55.75-61.618 40.779 39.471s2.595-1.143 6.272-1.102c10.121.115 18.33 8.208 18.33 18.33s-8.208 18.33-18.33 18.33-18.33-8.208-18.33-18.33c0-3.595.734-5.596 2.269-8.641l-9.91-9.653-1.17-10.989-11.491-3.183-3.667-10.411-9.775-.886-3.115-11.396zm145.888 2.773c0-22.124-17.936-40.06-40.06-40.06s-40.06 17.936-40.06 40.06 17.936 40.061 40.06 40.061 40.06-17.936 40.06-40.061m-26.479-82.091a91.3 91.3 0 0 0-27.162-9.732v46.122c-20.169 5.985-34.084 24.579-34.084 45.701s13.914 39.716 34.084 45.702v43.084a91.3 91.3 0 0 0 27.162-9.732v-33.351c17.95-5.328 31.219-20.81 33.671-39.414h3.301v-12.575h-3.301c-2.453-18.604-15.721-34.085-33.671-39.413zm-29.239 64.601 10.499 15.484a5.533 5.533 0 1 0 9.812-.987l19.523-22.129-2.263-1.997-19.523 22.128a5.5 5.5 0 0 0-2.345-.542L152.667 113z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No metallic articles or watches`;
const _DefaultTitle = 'No metallic articles or watches';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P008NoMetallicArticlesOrWatches = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p008-no-metallic-articles-or-watches`;
  const titleId = `iso-title-p008-no-metallic-articles-or-watches`;
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
P008NoMetallicArticlesOrWatches.displayName = 'P008NoMetallicArticlesOrWatches';
