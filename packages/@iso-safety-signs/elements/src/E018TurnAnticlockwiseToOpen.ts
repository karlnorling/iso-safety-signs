// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 105.833 105.833\"",
  body: "<path fill=\"#fff\" d=\"M0 0h105.833v105.833H0z\"/><path fill=\"#237f52\" d=\"M2.646 2.646h100.541v100.541H2.646z\"/><path d=\"m85.155 70.494.08 5.702c-13.109 3.989-20.193 17.587-20.6 25.729l-5.13.244 9.934 10.992 9.772-11.156-5.457-.08c1.303-6.705 3.99-12.105 11.4-15.96l.081-9.719v.03c16.61-5.944 39.003 5.618 39.328 28.579l-9.119-.081c.326-14.493-14.82-25.893-30.29-18.808V99.89c-7.763 5.89-7.057 20.98-.082 26.218v26.462l41.609.244c-.081 0 .08-82.32.08-82.32zm21.006 28.5c10.911 3.636 9.202 25.838.245 27.765l-17.263.082c8.523-1.683 11.265-23.56-.08-27.766z\" style=\"fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.173782\" transform=\"translate(-40.217 -58.737)\"/>",
  height: "400",
  width: "400",
};
const _title = "Turn anticlockwise to open";
const _description = "Turn anticlockwise to open";

export class E018TurnAnticlockwiseToOpen extends SignElement {
  static readonly tagName = 'iso-e018-turn-anticlockwise-to-open';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
