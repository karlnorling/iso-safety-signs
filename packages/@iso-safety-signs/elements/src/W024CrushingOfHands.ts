// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 525\"",
  body: "<path d=\"M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16\"/><path fill=\"#f6bd16\" d=\"M43.875 491.5 299.88 48.2l256 443.3z\" style=\"fill:#f9a800;fill-opacity:1\" transform=\"matrix(1 0 0 .99591 .125 2.033)\"/><path d=\"M447 350v70h-30c-4.886 7.164-7.877 15.129-30 15H262c-10 0-10-15 0-15h60v-5h-80c-10 0-10-20 0-20h80v-3.325h-95c-12.41-1.68-10-18.84 0-18.68h95v-4.417h-85c-10-.42-10-18.58 0-18.58h85v-5h-25c-10.336-2.036-16.988-10.118-15-19h100c15.458-.374 29.078 6.665 35 24zm-294 90h125v15H153zm0-110h125v15H153zm55-85h20v50h15l-25 30-25-30h15z\" style=\"color:#000\"/>",
  height: "525",
  width: "600",
};
const _title = "Crushing of hands";
const _description = "Crushing of hands";

export class W024CrushingOfHands extends SignElement {
  static readonly tagName = 'iso-w024-crushing-of-hands';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
