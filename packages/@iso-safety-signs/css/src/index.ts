// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { signs } from '@iso-safety-signs/core';

/**
 * Derives the CSS class name for an ISO 7010 sign from its SVG asset path.
 *
 * Signs are stored as `category/code/filename.svg`, e.g.
 * `emergency/e001/ISO_7010_E001.svg` → class `iso-e001`.
 */
function cssClassForPath(assetPath: string): string {
  const filename = assetPath.replace(/\\/g, '/').split('/').pop() ?? '';
  const match = filename.match(/ISO_7010_([EFMPW]\d{3}[a-z]?)/i);
  if (match) {
    return 'iso-' + match[1].toLowerCase();
  }
  return 'iso-' + filename.replace(/\.svg$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Map of sign slug ID → CSS sprite class name.
 *
 * Import `@iso-safety-signs/css/sprite.css` and apply the class to a
 * block element to show the sign as a background image.
 */
export const signCssClasses: Readonly<Record<string, string>> = Object.fromEntries(
  signs.map((s) => [s.id, cssClassForPath(s.assets.svg)]),
);

/**
 * Returns the CSS sprite class name for a sign by its slug ID.
 *
 * @param id - Sign slug ID, e.g. `"e001-emergency-exit"`.
 * @returns The CSS class name string, or `undefined` if the ID is not found.
 */
export const getCssClassName = (id: string): string | undefined => signCssClasses[id];
