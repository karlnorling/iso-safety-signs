// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { IsoSign } from './IsoSign';

const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [
  [IsoSign, IsoSign.tagName],
];

/**
 * Registers all ISO 7010 safety sign custom elements.
 *
 * @param prefix — tag-name prefix (default `"iso"`). Each element is registered
 *   as `{prefix}-{id}`, e.g. `iso-e001-emergency-exit`.
 *   Pass a custom string to avoid conflicts with other libraries.
 * @example
 * ```ts
 * import { defineCustomElements } from '@iso-safety-signs/elements';
 * defineCustomElements(); // registers iso-e001-emergency-exit, iso-w001-flammable-material, etc.
 * ```
 */
export function defineCustomElements(prefix = 'iso'): void {
  for (const [cls, defaultTag] of _elements) {
    const tag = prefix === 'iso' ? defaultTag : `${prefix}-${defaultTag.replace(/^iso-/, '')}`;
    if (!customElements.get(tag)) customElements.define(tag, cls);
  }
}
