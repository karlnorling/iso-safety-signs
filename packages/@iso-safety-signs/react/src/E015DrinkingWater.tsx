// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path fill="#fff" d="M0 0h105.833v105.833H0z"/><path fill="#237f52" d="M2.646 2.646h100.541v100.541H2.646z"/><path d="M132.58 73.828c-2.6 0-4.693 1.68-4.693 3.769 0 2.087 2.094 3.715 4.694 3.767l3.307.067-.002 3.81-17.172-.101c-6.88.063-11.97 5.52-14.326 11.274-2.06 5.027-2.296 9.959-1.595 14.04h11.863c-.643-3.3-.61-6.88.457-9.648.427-.952 2.933-4.079 5.086-4.027l7.908.052c1.993 2.094 6.32 3.437 11.085 3.442 4.764-.005 9.09-1.348 11.083-3.442h13.756v-11.59h-20.94l-.001-3.811 3.307-.066c2.6-.052 4.693-1.68 4.693-3.767 0-2.088-2.093-3.77-4.693-3.77zm-43.244 39.7-4.13 1.151 11.035 39.564h31.516l11.035-39.564-4.13-1.152-2.213 7.933c-.716.174-1.42.341-2.113.437-1.622.223-3.172.139-5.017-.93l-.007-.006-.006-.003c-1.528-.857-3.093-1.85-5.09-2.102a7.3 7.3 0 0 0-1.558-.025c-1.622.145-3.444.827-5.548 2.269l-.01.007-.008.007c-1.508 1.082-2.705 2.038-3.847 2.4s-2.296.308-4.236-.896c-4.774-3.434-9.353-3.173-14.003-3.102zm30.07 7.298q.285.008.557.042c1.448.182 2.768.972 4.339 1.853 2.256 1.308 4.416 1.445 6.311 1.185a18 18 0 0 0 1.214-.214l-1.11 3.975c-1.045.485-2.264.658-3.957-.245l-.005-.003-.007-.003c-1.689-.871-3.49-1.793-5.7-1.971s-4.74.432-7.772 2.343l-.01.006-.009.007c-1.515 1-3.09 1.729-4.563 1.97-1.474.243-2.825.042-4.153-.849-4.079-2.839-6.447-3.704-8.567-3.756-1.175-.03-2.171.153-3.303.316l-1.1-3.944c4.421-.073 8.216-.205 12.307 2.764l.031.022.03.019c2.268 1.406 4.247 1.636 5.921 1.104 1.667-.53 2.966-1.643 4.397-2.672 2.228-1.526 3.814-1.98 5.148-1.948zM95.92 127.27c1.61.04 3.485.642 7.431 3.39l.008.006.008.005c1.781 1.195 3.775 1.492 5.668 1.18 1.886-.31 3.692-1.178 5.364-2.28 2.764-1.743 4.766-2.164 6.48-2.026s3.227.88 4.902 1.744c1.548.822 3.016.96 4.277.746l-5.557 19.92H99.497l-6.25-22.403c1.03-.15 1.863-.3 2.673-.28z" style="color:#000;fill:#fff;fill-opacity:1;stroke-width:.732129" transform="translate(-71.702 -61.119)"/>`;
const _DefaultDesc = `Drinking water`;
const _DefaultTitle = 'Drinking water';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E015DrinkingWater = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e015-drinking-water`;
  const titleId = `iso-title-e015-drinking-water`;
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
E015DrinkingWater.displayName = 'E015DrinkingWater';
