# @iso-safety-signs/css

## 1.0.2

### Patch Changes

- 8b30cbd: Replace `workspace:*` with `^1.0.0` for the `@iso-safety-signs/core` dependency.

  The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into the published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users. Fixes [#9](https://github.com/karlnorling/iso-safety-signs/issues/9).

## 1.0.1

### Patch Changes

- Updated dependencies [8f0cca6]
  - @iso-safety-signs/core@1.0.1

## 1.0.0

### Major Changes

- a7add5d: Initial public release of all ISO 7010 safety sign packages.

  Provides React components, Vue 3 components, Web Components (Custom Elements), CSS sprite, SVG sprite, and static image assets for all ISO 7010 workplace safety signs across five categories: Emergency (E), Fire (F), Mandatory (M), Prohibition (P), and Warning (W).

### Patch Changes

- Updated dependencies [a7add5d]
  - @iso-safety-signs/core@1.0.0
