---
"@iso-safety-signs/css": patch
"@iso-safety-signs/elements": patch
"@iso-safety-signs/react": patch
"@iso-safety-signs/vue": patch
---

Replace `workspace:*` with `^1.0.0` for the `@iso-safety-signs/core` dependency.

The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into the published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users. Fixes [#9](https://github.com/karlnorling/iso-safety-signs/issues/9).
