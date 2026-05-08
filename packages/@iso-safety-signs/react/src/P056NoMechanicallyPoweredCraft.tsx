// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m212.396 167.347 1.964-.472c-.295 3.733-.769 7.029-3.414 7.697-10.019 1.668-16.929-1.062-23.96-3.84-13.959-5.515-18.447-5.388-32.367.299-16.364 6.686-24.388 7.927-40.511 1.142-14.615-6.151-24.929-6.38-39.986.163-5.952 2.586-11.14 4.84-20.399 3.551-4.059-.566-4.049-4.555-4.477-7.859 19.687 5.12 20.308-5.627 41.882-7.122 20.931-1.45 27.333 9.127 41.307 8.956 14.28-.174 24.419-9.809 37.742-9.92 17.319-.144 25.092 11.563 42.221 7.403zm0-15.577 1.964-.472c-.295 3.733-.769 7.029-3.414 7.697-10.019 1.668-16.929-1.062-23.96-3.84-13.959-5.515-18.447-5.388-32.367.299-16.364 6.686-24.388 7.927-40.511 1.141-14.615-6.15-24.929-6.38-39.986.164-5.952 2.586-11.14 4.84-20.399 3.551-4.059-.566-4.049-4.555-4.477-7.859 19.687 5.12 20.308-5.627 41.882-7.122 20.931-1.45 27.333 9.127 41.307 8.956 14.28-.174 24.419-9.809 37.742-9.919 17.319-.144 25.092 11.563 42.221 7.403m-79.965-6.097c14.28-.174 24.419-9.809 37.742-9.919 17.319-.144 25.092 11.563 42.221 7.403l1.491-.359-5.558-25.296h-9.71l-2.955-13.422h-7.212L175.6 91.058h11.653c1.488 0 2.705-1.217 2.705-2.705s-1.217-2.704-2.705-2.704l-44.03-.033-18.207 18.463H76.339l2.822 13.422H47.027l24.907 24.192c4.664-2.046 10.045-4.343 19.192-4.977 20.931-1.45 27.333 9.127 41.307 8.956m4.109-28.171H84.687l-1.684-8.013h56.65zm-3.933-13.422 12.833-13.021H168l12.853 13.021z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No mechanically powered craft`;
const _DefaultTitle = 'No mechanically powered craft';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P056NoMechanicallyPoweredCraft = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p056-no-mechanically-powered-craft`;
  const titleId = `iso-title-p056-no-mechanically-powered-craft`;
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
P056NoMechanicallyPoweredCraft.displayName = 'P056NoMechanicallyPoweredCraft';
