// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\" xml:space=\"preserve\"",
  body: "<path d=\"M-200 0H0v200h-200z\" style=\"fill:#fff;fill-rule:nonzero;stroke:none\" transform=\"scale(-1 1)\"/><path d=\"M-195 5H-5v190h-190z\" style=\"fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none\" transform=\"scale(-1 1)\"/><path d=\"M21.383 23.6v10.7h6.313v-5.964h144.251V34.3h6.314V23.6H72.899Zm0 154.271v-10.7h6.313v5.965h144.251v-5.965h6.314v10.7H72.899Z\" style=\"color:#000;fill:#fff;fill-opacity:1;stroke-width:1.57836\"/><path d=\"M33.931 34.886h65.472v131.9H33.931zm120.788 45.435v11.435h-41.697v18.16h41.697v11.435l11.41-10.257 11.41-10.258-11.41-10.257z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:3.25\" transform=\"translate(.087 -.1)\"/>",
  height: "400",
  width: "400",
};
const _title = "Door slides right to open";
const _description = "Door slides right to open";

export class E033DoorSlidesRightToOpen extends SignElement {
  static readonly tagName = 'iso-e033-door-slides-right-to-open';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
