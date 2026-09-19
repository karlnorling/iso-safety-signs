// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 525\"",
  body: "<path d=\"M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16\"/><path fill=\"#f6bd16\" d=\"M43.875 491.5 299.88 48.2l256 443.3z\" style=\"fill:#f9a800;fill-opacity:1\" transform=\"matrix(1 0 0 .99591 .125 2.033)\"/><path d=\"M175 437h250v25H175z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"16\" d=\"M242.68 415C299.54 333.7 182 310.84 240 230m63.78 184.51c56.86-81.3-60.561-103.43-2.561-184.27M365 415c56.86-81.3-59.23-104.65-1.22-185.49\"/>",
  height: "525",
  width: "600",
};
const _title = "Hot surface";
const _description = "Hot surface";

export class W017HotSurface extends SignElement {
  static readonly tagName = 'iso-w017-hot-surface';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
