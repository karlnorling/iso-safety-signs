// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';
import { SignSvg } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path d=\"m278 164-50 177 77-41-19 119-16-22 15 72 41-61-23 14 45-164-80 43 59-137\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Electricity";
const _description = "Electricity";

export const W012Electricity = React.memo<SignProps>((props) => (
  <SignSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
W012Electricity.displayName = 'W012Electricity';
