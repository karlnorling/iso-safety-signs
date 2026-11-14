---
'@iso-safety-signs/core': patch
'@iso-safety-signs/css': patch
'@iso-safety-signs/elements': patch
'@iso-safety-signs/react': patch
'@iso-safety-signs/vue': patch
---

Fix ESM builds failing to load in Node with `ERR_MODULE_NOT_FOUND`. Relative imports in `dist/esm` now carry `.js` extensions, so `import { getAllSigns } from '@iso-safety-signs/core'` works without a bundler (#69).
