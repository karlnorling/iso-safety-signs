# @iso-safety-signs/assets

Static image assets for all **ISO 7010** workplace safety signs — SVG, PNG, JPG, and WebP at five sizes (240–2048 px).

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/assets)](https://www.npmjs.com/package/@iso-safety-signs/assets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/assets
# or
yarn add @iso-safety-signs/assets
```

---

## Directory layout

Assets are organised by ISO 7010 category and sign code:

```
assets/
  emergency/
    e001/
      ISO_7010_E001.svg
      ISO_7010_E001_240x240.png
      ISO_7010_E001_512x512.png
      ISO_7010_E001_768x768.png
      ISO_7010_E001_1024x1024.png
      ISO_7010_E001_2048x2048.png
      ISO_7010_E001_240x240.jpg
      ISO_7010_E001_240x240.webp
      …
  fire/
    f001/
      ISO_7010_F001.svg
      …
  mandatory/
  prohibition/
  warning/
```

---

## Usage

### Import by path

```ts
import emergencyExit from '@iso-safety-signs/assets/assets/emergency/e001/ISO_7010_E001.svg';
```

### Resolve paths via the core API

```ts
import { getSign } from '@iso-safety-signs/core';

const sign = getSign('e001-emergency-exit');
if (sign) {
  console.log(sign.assets.svg); // 'emergency/e001/ISO_7010_E001.svg'
  console.log(sign.assets.png[512]); // 'emergency/e001/ISO_7010_E001_512x512.png'
  console.log(sign.assets.webp[240]); // 'emergency/e001/ISO_7010_E001_240x240.webp'
}
```

---

## Available sizes

Each raster format is generated at five sizes:

| Size | Pixels      |
| ---- | ----------- |
| xs   | 240 × 240   |
| sm   | 512 × 512   |
| md   | 768 × 768   |
| lg   | 1024 × 1024 |
| xl   | 2048 × 2048 |

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> ISO 7010 safety sign SVG graphics are published under free licences on Wikimedia Commons. See each sign's Wikimedia Commons page for the specific licence of its artwork.
