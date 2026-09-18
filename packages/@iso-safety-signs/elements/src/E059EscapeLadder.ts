// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"M59.573 281.86h282.08V-.203H59.573Zm0 0\" style=\"fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.4118\" transform=\"translate(-50.613 9.18)\"/><path d=\"M241.405 45.708H159.82v30.02h81.584zm0 40.05H159.82v30.022h81.584zm0 70.072H159.82v-30.038h81.584zM159.82 195.9h81.584v-30.056H159.82zm81.584 9.995H159.82v30.021h81.584zm10.013 50.546V25.217h-10.013v10.46H159.82v-10.46h-9.995V256.44h9.995v-10.495h81.584v10.495zm0 0\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.4118\" transform=\"translate(-50.613 9.18)\"/>",
  height: "400",
  width: "400",
};
const _title = "Escape ladder";
const _description = "Escape ladder";

export class E059EscapeLadder extends SignElement {
  static readonly tagName = 'iso-e059-escape-ladder';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
