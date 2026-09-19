// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { ParsedSvg } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';
import { SignSvg } from './SignSvg';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"",
  body: "<g style=\"stroke:none;fill-rule:nonzero\"><path d=\"M0 0h200v200H0z\" style=\"fill:#fff\"/><path d=\"M5 5h190v190H5z\" style=\"fill:#237f52\"/><path d=\"M75 25h50v150H75z\" style=\"fill:#fff\"/><path d=\"M25 75h150v50H25z\" style=\"fill:#fff\"/></g>",
  height: "400",
  width: "400",
};
const _title = "First aid";
const _description = "First aid";

export const E003FirstAid = React.memo<SignProps>((props) => (
  <SignSvg {...props} defaultDescription={_description} defaultTitle={_title} svg={_svg} />
));
E003FirstAid.displayName = 'E003FirstAid';
