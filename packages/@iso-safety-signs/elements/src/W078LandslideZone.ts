// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 525\" xml:space=\"preserve\"",
  body: "<path d=\"M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16\"/><path fill=\"#f6bd16\" d=\"M43.875 491.5 299.88 48.2l256 443.3z\" style=\"fill:#f9a800;fill-opacity:1\" transform=\"matrix(1 0 0 .99591 .125 2.033)\"/><path d=\"m300.608 158.23-36.604 17.887 34.675 59.72 39.906-10.455 14.861-35.23zm72.11 61.77-7.713 49.417-25.317 8.804-5.508 53.941-39.629 27.522-15.409 53.948-33.03 25.316L81.72 459.771l-7.01 10.001h442.218zm-101.832 29.873-40.46 4.954-1.652 13.487 18.718 20.64 24.49-1.922 7.709-25.323zm23.388 47.337-11.004 7.708 3.574 25.322 14.312.548 15.138-19.266-3.85-13.21zm-63.849 20.646-24.49 7.979 14.583 38.803 13.21 7.16 37.984-11.559-3.032-24.774zm-6.604 72.105-25.871 2.476-6.057 23.943 9.914 10.733 23.117-8.256 3.85-14.036zm-67.151 18.163-12.384 9.636-.277 14.861 7.707 2.748 4.677.277 11.835-7.43-.277-12.107 3.857-2.477z\" style=\"fill:#000;stroke-width:27.5029;fill-opacity:1\" transform=\"translate(4.184)\"/>",
  height: "525",
  width: "600",
};
const _title = "Landslide zone";
const _description = "Landslide zone";

export class W078LandslideZone extends SignElement {
  static readonly tagName = 'iso-w078-landslide-zone';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
