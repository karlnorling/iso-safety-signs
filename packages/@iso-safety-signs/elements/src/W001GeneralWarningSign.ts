// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path d=\"M337 192a37 37 0 0 0-74 0l11 143a26 26 0 0 0 52 0m12 85a38 38 0 1 1 0-1\"/>",
  height: "100%",
  width: "100%",
};
const _title = "General warning sign";
const _description = "General warning sign";

export class W001GeneralWarningSign extends SignElement {
  static readonly tagName = 'iso-w001-general-warning-sign';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
