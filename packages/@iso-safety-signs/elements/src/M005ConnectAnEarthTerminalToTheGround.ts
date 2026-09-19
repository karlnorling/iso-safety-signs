// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 265 265\" fill-rule=\"evenodd\"",
  body: "<path fill=\"#005387\" d=\"M265 132.5c0 73.171-59.326 132.5-132.502 132.5S0 205.671 0 132.5 59.326 0 132.498 0 265 59.33 265 132.5\"/><path fill=\"#fff\" d=\"M181.939 187.194H83.061v12.479h98.878zm-22.75 27.262h-53.471v12.479h53.471zm-96.19-42.237h139.002V159.74h-64.125V34.945h-10.752V159.74H62.999z\"/>",
  height: "265",
  width: "265",
};
const _title = "Connect an earth terminal to the ground";
const _description = "Connect an earth terminal to the ground";

export class M005ConnectAnEarthTerminalToTheGround extends SignElement {
  static readonly tagName = 'iso-m005-connect-an-earth-terminal-to-the-ground';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
