import { getSign, parseSvg } from '@iso-safety-signs/core';
import { SignElement } from './SignElement';
import type { SignElementContent } from './SignElement';

/**
 * Generic ISO 7010 safety sign custom element — renders any sign by slug ID.
 *
 * Accepts every {@link SignElement} attribute, plus:
 * - `sign-id` — slug ID, e.g. `"e001-emergency-exit-left-hand"` or `"w001-general-warning-sign"`
 *
 * @example
 * ```html
 * <iso-sign sign-id="e001-emergency-exit-left-hand" width="64"></iso-sign>
 * ```
 */
export class IsoSign extends SignElement {
  static readonly tagName = 'iso-sign';
  static readonly observedAttributes = ['sign-id', ...SignElement.observedAttributes];

  protected content(): SignElementContent | undefined {
    const signId = this.getAttribute('sign-id');
    const sign = signId ? getSign(signId) : undefined;
    if (!sign) return undefined;
    return { description: sign.description, svg: parseSvg(sign.svg), title: sign.name };
  }
}
