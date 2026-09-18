// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';
import { SignSvg } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path d=\"M337 192a37 37 0 0 0-74 0l11 143a26 26 0 0 0 52 0m12 85a38 38 0 1 1 0-1\"/>",
  height: "100%",
  width: "100%",
};
const _title = "General warning sign";
const _description = "General warning sign";

export const W001GeneralWarningSign = React.memo<SignProps>((props) => (
  <SignSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
W001GeneralWarningSign.displayName = 'W001GeneralWarningSign';
