// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SignProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M81.246 77.362c-3.082 0-5.445 2.368-5.445 5.467 0 3.104 2.363 5.473 5.445 5.473s5.45-2.369 5.45-5.473c0-3.099-2.368-5.467-5.45-5.467m.659 12.295c-1.749-.039-1.949.509-2.784 1.4a501 501 0 0 1-6.895 8.312c-.304.365-.476.52-1.201.514-2.395.041-5.263.087-8.022.063a2.62 2.62 0 0 0-2.623 2.624 2.617 2.617 0 0 0 2.623 2.623l10.08-.013c.741-.013 1.018-.209 1.81-1.001l4.809-5.684c1.334 2.916 2.59 5.396 3.918 8.213.15.287.503.934.238 1.438l-13.215 26.683 4.848-.016c2.535.056 3.591-1.693 4.482-3.26 3.575-7.204 7.167-14.403 10.747-21.608l.675 12.821c.177 2.22 1.677 2.784 3.641 2.844l22.201.05c0-2.551-2.529-5.92-6.646-6.081 0 0-7.93.088-12.075.105-.525 0-.668-.293-.73-.73-.193-3.299-.376-6.619-.58-9.917-.128-1.638-.272-2.772-.747-4.012-1.55-3.32-3.1-6.624-4.65-9.933l5.673-.066c.15-.006.266.027.343.16l4.106 7.194c1.693 3.088 6.27.836 4.737-2.44l-5.036-8.423c-.885-1.317-1.29-1.77-3.591-1.842 0 0-10.752-.017-16.136-.017zm-14.913 31.108a33.777 16.26 0 0 0-33.778 16.26 33.777 16.26 0 0 0 33.778 16.259 33.777 16.26 0 0 0 33.777-16.26 33.777 16.26 0 0 0-15.067-13.533q-1.992 4.002-3.982 8.005c-1.258 2.212-2.75 4.683-6.33 4.605l-6.848.022 7.324-14.786a33.777 16.26 0 0 0-8.874-.572" style="display:inline;fill:#fff;stroke-width:.129035" transform="translate(-22.312 -62.406)"/>`;
const _DefaultDesc = `Natural disaster outdoor refuge area`;
const _DefaultTitle = 'Natural disaster outdoor refuge area';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E065NaturalDisasterOutdoorRefugeArea = React.memo<SignProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `iso-desc-e065-natural-disaster-outdoor-refuge-area`;
  const titleId = `iso-title-e065-natural-disaster-outdoor-refuge-area`;
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
E065NaturalDisasterOutdoorRefugeArea.displayName = 'E065NaturalDisasterOutdoorRefugeArea';
