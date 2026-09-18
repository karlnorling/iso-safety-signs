// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 524\"",
  body: "<path fill=\"#f9a800\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m300 16 284 492H16z\"/><path d=\"m278 164-50 177 77-41-19 119-16-22 15 72 41-61-23 14 45-164-80 43 59-137\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Electricity";
const _description = "Electricity";

export class W012Electricity extends SignElement {
  static readonly tagName = 'iso-w012-electricity';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
