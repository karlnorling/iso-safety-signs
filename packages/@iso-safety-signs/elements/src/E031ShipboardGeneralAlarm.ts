// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"M301.182 221.725h67.77v-67.77h-67.77zm0 0\" style=\"fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none\" transform=\"translate(-1333.26 -681.525)scale(4.42677)\"/><path d=\"M303.1 219.81h63.933v-63.937H303.1Zm0 0\" style=\"fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-1333.26 -681.525)scale(4.42677)\"/><path d=\"M346.025 198.803h-21.918v-21.922h21.918zm4.57 4.566h-31.058v-31.054h31.059zm0 0\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-1333.26 -681.525)scale(4.42677)\"/><path d=\"m341.459 187.842-.004-.344-.031-.347-.047-.344-.067-.34-.078-.336-.101-.332-.125-.324-.137-.316-.152-.309-.168-.305-.188-.289-.203-.281-.215-.27-.234-.257-.246-.246-.258-.235-.27-.21-.28-.208-.29-.187-.3-.168-.313-.153-.32-.136-.325-.121-.332-.102-.336-.082-.34-.066-.34-.047-.347-.028-.348-.011-.343.011-.348.028-.34.047-.34.066-.34.082-.328.102-.324.12-.324.137-.309.153-.3.168-.29.187-.28.207-.27.211-.258.235-.246.246-.235.257-.215.27-.203.281-.187.29-.168.304-.152.309-.137.316-.125.324-.102.332-.078.336-.066.34-.047.344-.031.347-.004.344.004.348.03.344.048.343.066.34.078.336.102.328.125.328.137.313.152.312.168.305.187.29.203.28.215.27.235.258.246.246.258.23.27.215.28.203.29.188.3.168.309.16.324.133.324.12.328.102.34.078.34.07.34.044.348.03.343.013.348-.012.348-.031.34-.043.34-.07.335-.079.332-.101.324-.121.32-.133.313-.16.301-.168.29-.188.28-.203.27-.215.258-.23.246-.246.234-.258.215-.27.203-.28.188-.29.168-.305.152-.312.137-.313.125-.328.101-.328.078-.336.067-.34.047-.343.03-.344zm0 0\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-1333.26 -681.525)scale(4.42677)\"/>",
  height: "400",
  width: "400",
};
const _title = "Shipboard general alarm";
const _description = "Shipboard general alarm";

export class E031ShipboardGeneralAlarm extends SignElement {
  static readonly tagName = 'iso-e031-shipboard-general-alarm';

  protected content(): SignElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
