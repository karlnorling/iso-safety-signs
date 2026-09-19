// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 525\"",
  body: "<path d=\"M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16\"/><path d=\"m43.875 491.5 256-443.3 256 443.3z\" style=\"fill:#f9a800;fill-opacity:1;stroke:none;overflow:visible\" transform=\"matrix(1 0 0 .99591 .125 2.033)\"/><path d=\"M-345.006 132.207s27.775 44.72-19.62 66.697c-18.558 8.604-43.424 15.092-21.448 57.457\" style=\"fill:none;stroke:#000;stroke-width:8.20333099;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" transform=\"translate(675.85 -9.026)scale(1.07984)\"/><path d=\"M-362.746 165.57c2.118 22.505 48.296 16.048 50.043 43.158 1.73 26.833-33.481 29.476-55.074 27.537-67.575-6.07-50.68 28.893-13.611 22.009\" style=\"fill:none;stroke:#000;stroke-width:8.20333099;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" transform=\"translate(675.85 -9.026)scale(1.07984)\"/><g style=\"fill:#000;stroke:none\"><path d=\"M-322.5 276.781v14.75h-64.062v-14.5h-26.22v14.5h-31.343v110.813h88c2.61 2.88 5.907 6.52 7.688 11.281 4.906 13.117 22.914 17.72 38.843 17.219 43.928-1.381 28.006 2.828 50.5 6.656 16.084 2.747 14.69 11.911 59.906 7.75 11.543-1.069 18.336-8.237 17.5-15.812-2.05-18.759-21.625-9.074-21.656-28.844-.023-14.919-5.233-19.53-16.094-19.406-30.985.35-34.855 2.976-36.343-21.657l-.031.031v-68.03h-.625c-.482-10.217-3.288-10.532-9.125-10.532h-26.75c-4.193.225-5.032-4.219-5.032-4.219zM-433.719 303h157.282v87.906H-433.72z\" style=\"fill:#000;fill-opacity:1;stroke:none\" transform=\"translate(675.85 -9.026)scale(1.07984)\"/><path d=\"M-317.998 322.582h34.421v10.062h-34.421zm-96.127-12.176v12.188h-12.156v10.062h12.156v12.156h10.063v-12.156h12.187v-10.062h-12.187v-12.188z\" style=\"fill:#000;fill-opacity:1;stroke:none\" transform=\"translate(675.85 -9.026)scale(1.07984)\"/></g>",
  height: "525",
  width: "600",
};
const _title = "Battery charging";
const _description = "Battery charging";

export class W026BatteryCharging extends SignElement {
  static readonly tagName = 'iso-w026-battery-charging';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
