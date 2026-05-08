# @iso-safety-signs/core

Typed sign data and lookup functions for all **ISO 7010** workplace safety signs.

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/core)](https://www.npmjs.com/package/@iso-safety-signs/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/core
# or
yarn add @iso-safety-signs/core
```

---

## Usage

```ts
import {
  getAllSigns,
  getSign,
  getSignsByCategory,
} from '@iso-safety-signs/core';

// All signs
const all = getAllSigns();

// Single sign by slug ID
const sign = getSign('e001-emergency-exit');
// → Sign | undefined

// Signs by category
const warnings = getSignsByCategory('warning');
const emergency = getSignsByCategory('emergency');
```

---

## API

### `getAllSigns(): Sign[]`

Returns all ISO 7010 signs.

### `getSign(id: string): Sign | undefined`

Returns a single sign by its slug ID (e.g. `"e001-emergency-exit"`), or `undefined` if not found.

### `getSignsByCategory(category: SignCategory): Sign[]`

Returns all signs in a category. Categories: `"emergency"`, `"fire"`, `"mandatory"`, `"prohibition"`, `"warning"`.

---

## Types

```ts
type SignCategory = 'emergency' | 'fire' | 'mandatory' | 'prohibition' | 'warning';

interface Sign {
  assets: SignAssets;
  category: SignCategory;
  code: string;        // e.g. "E001"
  description: string; // accessible description
  id: string;          // e.g. "e001-emergency-exit"
  name: string;        // e.g. "Emergency exit"
  svg: string;         // inline SVG markup
}

interface SignAssets {
  jpg: Record<number, string>;   // size → relative path (240, 512, 768, 1024, 2048)
  png: Record<number, string>;
  svg: string;                   // relative path to original SVG
  webp: Record<number, string>;
}
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
