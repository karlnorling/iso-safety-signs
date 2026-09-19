# @iso-safety-signs/elements

## 1.1.0

### Minor Changes

- b3ae7cc: Fix broken asset paths, id collisions and accessibility issues across all renderers.

  - **core**: `sign.assets` now points at files that exist (previously every jpg/png/webp path was wrong). `sign.svg` is now the SVGO-optimised SVG with scripts and event handlers stripped (1.7 MB instead of 3.1 MB). New exports: `renderSvg`, `parseSvg`, `scopeIds`, `escapeHtml`, `createInstanceId`, `toInstanceId`.
  - **react / vue / elements**: every rendered instance gets unique ids, so the same sign can appear several times on a page with correct labels. `aria-label` now labels the `<svg>` itself (it used to sit, ignored, on the wrapper). `SignById`/`<iso-sign>` render at the same default size as the named components.
  - **elements**: `defineCustomElements()` can be called with several prefixes, or after registering classes yourself, without throwing. New `SignElement` base class export.
  - **css**: `sprite.css` references `@iso-safety-signs/assets`, which is now a declared dependency.
  - **assets** (breaking): removed the redundant `ISO_7010_*_{size}x{size}.svg` files (byte-identical copies of the source SVG), and `svg-map.json` is no longer published. Use `ISO_7010_{code}.svg`.
  - **sprite**: symbols are emitted in a stable, sorted order.

### Patch Changes

- Updated dependencies [b3ae7cc]
  - @iso-safety-signs/core@1.1.0

## 1.0.2

### Patch Changes

- 8b30cbd: Replace `workspace:*` with `^1.0.0` for the `@iso-safety-signs/core` dependency.

  The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into the published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users. Fixes [#9](https://github.com/karlnorling/iso-safety-signs/issues/9).

## 1.0.1

### Patch Changes

- 8f0cca6: Fix SVG scaling and invisible signs in gallery. Signs without a `viewBox` attribute (172 of 332) now have one synthesised from their `width`/`height` so CSS resizing scales content correctly. Signs with shared internal IDs (e.g. `clipPath id="A"`) now have those IDs scoped per-sign, fixing signs like M055, P028, and P032 that were invisible due to DOM ID collisions when rendered inline together.
- Updated dependencies [8f0cca6]
  - @iso-safety-signs/core@1.0.1

## 1.0.0

### Major Changes

- a7add5d: Initial public release of all ISO 7010 safety sign packages.

  Provides React components, Vue 3 components, Web Components (Custom Elements), CSS sprite, SVG sprite, and static image assets for all ISO 7010 workplace safety signs across five categories: Emergency (E), Fire (F), Mandatory (M), Prohibition (P), and Warning (W).

### Patch Changes

- Updated dependencies [a7add5d]
  - @iso-safety-signs/core@1.0.0
