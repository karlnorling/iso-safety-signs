/**
 * Shared TypeScript types for the iso-safety-signs package.
 * @module @iso-safety-signs/types
 */

/**
 * Category of an ISO 7010 safety sign.
 * - `emergency` — E signs: emergency exits, first aid, safe conditions (green)
 * - `fire`      — F signs: fire equipment locations (red)
 * - `mandatory` — M signs: mandatory actions / PPE (blue)
 * - `prohibition` — P signs: prohibited actions (red border / diagonal)
 * - `warning`   — W signs: hazard warnings (yellow triangle)
 */
export type SignCategory = 'emergency' | 'fire' | 'mandatory' | 'prohibition' | 'warning';

/**
 * Pre-built image asset paths for a sign, relative to the package `assets/` directory.
 * Each raster format is available at five sizes: 240, 512, 768, 1024 and 2048 px².
 */
export interface SignAssets {
  /** Map of pixel size to relative path for JPEG variants. */
  jpg: Record<number, string>;
  /** Map of pixel size to relative path for PNG variants. */
  png: Record<number, string>;
  /** Relative path to the original SVG source file. */
  svg: string;
  /** Map of pixel size to relative path for WebP variants. */
  webp: Record<number, string>;
}

/**
 * A single ISO 7010 safety sign with all associated metadata and assets.
 */
export interface Sign {
  /** Pre-built image asset paths at multiple sizes and formats. */
  assets: SignAssets;
  /** Sign category — see {@link SignCategory}. */
  category: SignCategory;
  /** ISO 7010 code, e.g. `"E001"`. */
  code: string;
  /** Human-readable description of the sign. */
  description: string;
  /** Slug identifier used to look up the sign, e.g. `"e001-emergency-exit"`. */
  id: string;
  /** Human-readable name, e.g. `"Emergency exit"`. */
  name: string;
  /** Full inline SVG string (optimised by SVGO). */
  svg: string;
}
