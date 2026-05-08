/**
 * Main entry point for the @iso-safety-signs/core package.
 *
 * Provides typed access to all ISO 7010 safety sign data including inline SVGs,
 * asset paths, and metadata.
 *
 * @module @iso-safety-signs/core
 */

import { signs } from './signs.generated';
import type { Sign, SignCategory } from './types';

export type { Sign, SignAssets, SignCategory } from './types';
export { signs } from './signs.generated';

/** Returns every sign in the registry. */
export const getAllSigns = (): Sign[] => signs;

/** Returns a sign by its slug ID (e.g. `"e001-emergency-exit"`). */
export const getSign = (id: string): Sign | undefined => signs.find((s) => s.id === id);

/** Returns all signs that belong to the given category. */
export const getSignsByCategory = (category: SignCategory): Sign[] =>
  signs.filter((s) => s.category === category);
