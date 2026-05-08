// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M40.79 18.354h114.895V180.1l11.155 12.27H54.733L40.79 179.542Z" style="fill:#fff;stroke-width:.391278"/><g fill="#fff" style="fill:#237f52;fill-opacity:1"><path d="M18.85-4.504a2.65 2.65 0 0 0-2.648-2.648 2.656 2.656 0 0 0-2.648 2.648 2.646 2.646 0 0 0 2.648 2.648 2.643 2.643 0 0 0 2.648-2.648" style="fill:#237f52;fill-opacity:1" transform="translate(181.8 32.618)scale(-4.25894)"/><path d="M27.984-22.467c-.728-.432-1.704-.156-2.124.532l-3.508 6.08h-8.584c-1.4-.008-2.58 1-2.696 2.404l-.464 8.04c-.068 1.404 1 2.624 2.416 2.704 1.408.076 2.6-1.016 2.696-2.408l.172-2.272h4.952c.672-.024 1.196-.54 1.196-1.204 0-.672-.54-1.172-1.196-1.212h-4.812l.064-2h6.624c.508-.016 1-.28 1.28-.748l4.516-7.8c.416-.76.196-1.672-.532-2.116" style="fill:#237f52;fill-opacity:1" transform="translate(168.083 53.605)scale(-4.25894)"/><path d="M26.539-20.383c-1.556-3.468-5.016-5.904-9.064-5.904-5.5 0-9.952 4.46-9.952 9.952 0 3.56 1.888 6.656 4.7 8.412l.144-2.46c-1.68-1.444-2.76-3.568-2.76-5.952a7.865 7.865 0 0 1 7.868-7.868c3.78 0 6.916 2.688 7.664 6.244z" style="fill:#237f52;fill-opacity:1" transform="translate(179.986 56.824)scale(-4.25894)"/></g>`;
const _DefaultDesc = `Emergency exit for people unable to walk or with walking impairment (left)`;
const _DefaultTitle = 'Emergency exit for people unable to walk or with walking impairment (left)';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E026EmergencyExitForPeopleUnableToWalkOrWithWalkingImpairmentLeft = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e026-emergency-exit-for-people-unable-to-walk-or-with-walking-impairment-left`;
  const titleId = `iso-title-e026-emergency-exit-for-people-unable-to-walk-or-with-walking-impairment-left`;
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
E026EmergencyExitForPeopleUnableToWalkOrWithWalkingImpairmentLeft.displayName = 'E026EmergencyExitForPeopleUnableToWalkOrWithWalkingImpairmentLeft';
