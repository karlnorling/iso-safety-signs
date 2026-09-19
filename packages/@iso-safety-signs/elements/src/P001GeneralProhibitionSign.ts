// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 265 265\" fill-rule=\"evenodd\"",
  body: "<path fill=\"#fff\" d=\"M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25\"/><path fill=\"#b71f2e\" d=\"M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5\"/>",
  height: "265",
  width: "265",
};
const _title = "General prohibition sign";
const _description = "General prohibition sign";

export class P001GeneralProhibitionSign extends SignElement {
  static readonly tagName = 'iso-p001-general-prohibition-sign';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
