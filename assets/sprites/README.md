# @iso-safety-signs/sprite

SVG symbol sprite for all **ISO 7010** workplace safety signs — embed any sign inline with `<use href="#id">`.

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/sprite)](https://www.npmjs.com/package/@iso-safety-signs/sprite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/sprite
# or
yarn add @iso-safety-signs/sprite
```

---

## Usage

### External file reference (recommended)

Serve `sprite.svg` as a static file and reference any symbol by ID:

```html
<svg width="64" height="64" role="img" aria-label="Emergency exit">
  <title>Emergency exit</title>
  <use href="/path/to/sprite.svg#e001-emergency-exit" />
</svg>
```

### Inline sprite

Embed the sprite once invisibly at the top of your document to avoid cross-origin `<use>` issues:

```html
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<!-- Reference any symbol anywhere -->
<svg width="64" height="64" role="img" aria-label="Emergency exit">
  <title>Emergency exit</title>
  <use href="#e001-emergency-exit" />
</svg>
```

### React with bundler import

```tsx
import spriteUrl from '@iso-safety-signs/sprite/sprite.svg';

function EmergencyExit() {
  return (
    <svg width={64} height={64} role="img" aria-label="Emergency exit">
      <title>Emergency exit</title>
      <use href={`${spriteUrl}#e001-emergency-exit`} />
    </svg>
  );
}
```

---

## Symbol IDs

Symbol IDs match the sign slug IDs from `@iso-safety-signs/core`. Use the `sprite-ids.json` file to enumerate all available IDs:

```ts
import ids from '@iso-safety-signs/sprite/sprite-ids.json';
// → string[]  e.g. ["e001-emergency-exit", "e002-emergency-exit-left", …]
```

---

## Accessibility

The sprite itself is presentational. Always add `role="img"`, `aria-label`, and a `<title>` child to each referencing `<svg>`:

```html
<svg width="64" height="64" role="img" aria-label="Warning — flammable material">
  <title>Warning — flammable material</title>
  <desc>Yellow triangle with flame symbol.</desc>
  <use href="#w001-flammable-material" />
</svg>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
