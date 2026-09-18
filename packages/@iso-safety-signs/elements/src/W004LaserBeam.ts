// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 525\"",
  body: "<path d=\"M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16\"/><path d=\"m43.875 491.5 256-443.3 256 443.3z\" style=\"fill:#f9a800;fill-opacity:1;stroke:none;overflow:visible\" transform=\"matrix(1 0 0 .99591 .125 2.033)\"/><g style=\"fill:#000;stroke:#000\"><path d=\"M-392.229 208.248h8.932v225.886h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"translate(685.768 32.95)\"/><path d=\"M-462.147 135.919h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-15 468.022 -2587.99)\"/></g><g style=\"fill:#000;stroke:#000\"><path d=\"M-392.229 208.248h8.932v225.886h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-30 16.605 -941.995)\"/><path d=\"M-462.147 135.919h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-45 94.292 -630.18)\"/></g><g style=\"fill:#000;stroke:#000\"><path d=\"M-392.229 208.248h8.932v225.886h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-60 -16.344 -256.227)\"/><path d=\"M-462.147 135.919h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-75 14.16 -210.402)\"/></g><path d=\"M-325.657-500.706h8.932v302.24h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582659;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(-90 359.359 -326.41)\"/><path d=\"M-214.352-531.647h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(255 355.526 -246.63)\"/><g style=\"fill:#000;stroke:#000\"><path d=\"M-392.229 208.248h8.932v225.886h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(240 -35.367 139.701)\"/><path d=\"M-462.147 135.919h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(225 -49.962 125.505)\"/></g><g style=\"fill:#000;stroke:#000\"><path d=\"M-392.229 208.248h8.932v225.886h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582665;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(210 -40.465 245.79)\"/><path d=\"M-462.147 135.919h8.932v147.933h-8.932z\" style=\"fill:#000;fill-opacity:1;stroke:#000;stroke-width:.88582653;stroke-linecap:square;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0\" transform=\"rotate(195 -70.342 232.27)\"/></g>",
  height: "525",
  width: "600",
};
const _title = "Laser beam";
const _description = "Laser beam";

export class W004LaserBeam extends SignElement {
  static readonly tagName = 'iso-w004-laser-beam';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
