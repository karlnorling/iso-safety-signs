/**
 * Main entry point for the @iso-safety-signs/core package.
 *
 * Provides typed access to all ISO 7010 safety sign data including inline SVGs,
 * asset paths, and metadata.
 *
 * @module @iso-safety-signs/core
 */

import { signs } from './signs.generated.js';
import type { Sign, SignCategory } from './types.js';

export type { Sign, SignAssets, SignCategory } from './types.js';
export { signs } from './signs.generated.js';
export {
  createInstanceId,
  escapeHtml,
  parseSvg,
  renderSvg,
  scopeIds,
  toInstanceId,
} from './render.js';
export type { ParsedSvg, RenderSvgOptions } from './render.js';

/** Returns every sign in the registry. */
export const getAllSigns = (): Sign[] => signs;

/** Returns a sign by its slug ID (e.g. `"e001-emergency-exit-left-hand"`). */
export const getSign = (id: string): Sign | undefined => signs.find((s) => s.id === id);

/** Returns all signs that belong to the given category. */
export const getSignsByCategory = (category: SignCategory): Sign[] =>
  signs.filter((s) => s.category === category);
