---
'@iso-safety-signs/assets': major
'@iso-safety-signs/core': minor
'@iso-safety-signs/elements': minor
'@iso-safety-signs/react': patch
'@iso-safety-signs/vue': patch
'@iso-safety-signs/css': patch
'@iso-safety-signs/sprite': patch
---

Fix broken asset paths, id collisions and accessibility issues across all renderers.

- **core**: `sign.assets` now points at files that exist (previously every jpg/png/webp path was wrong). `sign.svg` is now the SVGO-optimised SVG with scripts and event handlers stripped (1.7 MB instead of 3.1 MB). New exports: `renderSvg`, `parseSvg`, `scopeIds`, `escapeHtml`, `createInstanceId`, `toInstanceId`.
- **react / vue / elements**: every rendered instance gets unique ids, so the same sign can appear several times on a page with correct labels. `aria-label` now labels the `<svg>` itself (it used to sit, ignored, on the wrapper). `SignById`/`<iso-sign>` render at the same default size as the named components.
- **elements**: `defineCustomElements()` can be called with several prefixes, or after registering classes yourself, without throwing. New `SignElement` base class export.
- **css**: `sprite.css` references `@iso-safety-signs/assets`, which is now a declared dependency.
- **assets** (breaking): removed the redundant `ISO_7010_*_{size}x{size}.svg` files (byte-identical copies of the source SVG), and `svg-map.json` is no longer published. Use `ISO_7010_{code}.svg`.
- **sprite**: symbols are emitted in a stable, sorted order.
