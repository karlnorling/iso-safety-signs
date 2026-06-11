# @iso-safety-signs/assets

## 1.0.1

### Patch Changes

- 8f0cca6: Fix SVG scaling and invisible signs in gallery. Signs without a `viewBox` attribute (172 of 332) now have one synthesised from their `width`/`height` so CSS resizing scales content correctly. Signs with shared internal IDs (e.g. `clipPath id="A"`) now have those IDs scoped per-sign, fixing signs like M055, P028, and P032 that were invisible due to DOM ID collisions when rendered inline together.

## 1.0.0

### Major Changes

- a7add5d: Initial public release of all ISO 7010 safety sign packages.

  Provides React components, Vue 3 components, Web Components (Custom Elements), CSS sprite, SVG sprite, and static image assets for all ISO 7010 workplace safety signs across five categories: Emergency (E), Fire (F), Mandatory (M), Prohibition (P), and Warning (W).
