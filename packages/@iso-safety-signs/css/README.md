# @iso-safety-signs/css

CSS background-image sprite for all **ISO 7010** workplace safety signs — class-based display, no JavaScript required.

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/css)](https://www.npmjs.com/package/@iso-safety-signs/css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/css
# or
yarn add @iso-safety-signs/css
```

---

## Setup

Import the stylesheet once in your entry point:

```js
import '@iso-safety-signs/css/sprite.css';
```

```css
@import '@iso-safety-signs/css/sprite.css';
```

---

## Usage

Apply a class to any block element with explicit dimensions:

```html
<span
  class="iso-e001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Emergency exit"
></span>

<span
  class="iso-w001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Flammable material"
></span>
```

### Programmatic class lookup

```ts
import { getCssClassName } from '@iso-safety-signs/css';

const cls = getCssClassName('e001-emergency-exit'); // → 'iso-e001'
element.className = cls;
```

---

## Class name pattern

CSS class names follow the pattern `iso-{code}` where `{code}` is the lowercase ISO 7010 code:

| Sign | CSS class |
| ---- | --------- |
| E001 Emergency exit | `iso-e001` |
| E002 Emergency exit — left | `iso-e002` |
| W001 Flammable material | `iso-w001` |
| P001 No smoking | `iso-p001` |
| M001 General mandatory action | `iso-m001` |
| F001 Fire extinguisher | `iso-f001` |

---

## Accessibility

CSS background-images are not exposed to the accessibility tree. Always pair the element with `role="img"` and `aria-label`:

```html
<span
  class="iso-e001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Emergency exit"
  title="Emergency exit"
></span>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
