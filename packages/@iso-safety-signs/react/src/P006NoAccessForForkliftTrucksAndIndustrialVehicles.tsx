// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 265"`;
const _Body = `<g fill-rule="evenodd"><path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M106.729 172.569a7.206 7.206 0 0 1 7.213-7.209 7.21 7.21 0 0 1 7.209 7.209 7.21 7.21 0 1 1-14.422 0m66.105 0a9.14 9.14 0 0 1 9.14-9.135 9.14 9.14 0 0 1 9.135 9.135 9.14 9.14 0 0 1-9.135 9.14 9.14 9.14 0 0 1-9.14-9.14m-71.438-23.327 32.619-84.459c1.595-4.185 5.651-7.19 10.435-7.19h34.136c6.172 0 11.177 5.006 11.177 11.182v48.586h14.095c7.72 0 13.975 6.255 13.975 13.971v41.238h-20.585c0 8.439-6.84 15.275-15.275 15.275s-15.28-6.835-15.28-15.275h-37.478c0 8.439-6.84 15.275-15.275 15.275s-15.28-6.835-15.28-15.275H85.01l-4.54 11.745-31.601-10.228 2.586-7.979 24.051 7.79 52.089-134.884 7.822 3.019-41.4 107.21zm49.337-27.291h5.462v15.123h-10.887zm-13.468 15.123H119.81l20.34-29.112 3.383 3.627a1.65 1.65 0 0 0 2.337.083 1.65 1.65 0 0 0 .083-2.332l-9.02-9.675a1.654 1.654 0 0 0-2.341-.078 1.65 1.65 0 0 0-.083 2.332l3.383 3.623-21.857 31.532h-.94l26.743-69.281c.41-1.069 1.438-1.816 2.613-1.816h34.136a2.795 2.795 0 0 1 2.798 2.793v48.586h-4.462V90.902c0-1.696-1.369-3.084-3.065-3.084l-6.398.014a2.9 2.9 0 0 0-.899.133q-.22.069-.429.166l-.184.097-.207.129-.221.157c-.281.23-.516.502-.701.807l-6.941 12.634-13.605-2.828a2.9 2.9 0 0 0-.853-.12 3.073 3.073 0 0 0-3.07 3.074c0 1.401.931 2.59 2.217 2.959l16.034 3.381a3 3 0 0 0 .848.12 3.09 3.09 0 0 0 2.636-1.489l.115-.212 2.06-3.757v11.223h-16.229a3.84 3.84 0 0 0-1.834.46l-.281.175-.171.12-.184.147a3.83 3.83 0 0 0-1.148 1.669l-7.149 20.193"/></g><path fill="#161313" d="M164.072 79.09a6.4 6.4 0 1 1 12.806 0 6.4 6.4 0 1 1-12.806 0"/><path fill="#b71f2e" fill-rule="evenodd" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No access for forklift trucks and industrial vehicles`;
const _DefaultTitle = 'No access for forklift trucks and industrial vehicles';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const P006NoAccessForForkliftTrucksAndIndustrialVehicles = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-p006-no-access-for-forklift-trucks-and-industrial-vehicles`;
  const titleId = `iso-title-p006-no-access-for-forklift-trucks-and-industrial-vehicles`;
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
P006NoAccessForForkliftTrucksAndIndustrialVehicles.displayName = 'P006NoAccessForForkliftTrucksAndIndustrialVehicles';
