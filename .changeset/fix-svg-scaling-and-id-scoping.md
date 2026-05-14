---
'@iso-safety-signs/assets': patch
'@iso-safety-signs/core': patch
'@iso-safety-signs/elements': patch
'@iso-safety-signs/react': patch
'@iso-safety-signs/sprite': patch
'@iso-safety-signs/vue': patch
---

Fix SVG scaling and invisible signs in gallery. Signs without a `viewBox` attribute (172 of 332) now have one synthesised from their `width`/`height` so CSS resizing scales content correctly. Signs with shared internal IDs (e.g. `clipPath id="A"`) now have those IDs scoped per-sign, fixing signs like M055, P028, and P032 that were invisible due to DOM ID collisions when rendered inline together.
