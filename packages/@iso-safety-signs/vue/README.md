# @iso-safety-signs/vue

Vue 3 components (inline SVG) for all **ISO 7010** workplace safety signs. Tree-shakeable, fully accessible, zero runtime dependencies beyond Vue.

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/vue)](https://www.npmjs.com/package/@iso-safety-signs/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/vue
# or
yarn add @iso-safety-signs/vue
```

---

## Usage

### Named components (generated)

```vue
<script setup>
import { E001EmergencyExit, W001FlammableMaterial } from '@iso-safety-signs/vue';
</script>

<template>
  <E001EmergencyExit :width="64" />
  <W001FlammableMaterial :width="64" title="Flammable material" />
</template>
```

### Dynamic rendering by ID

Use `SignById` when the ID comes from data rather than being known at compile time:

```vue
<script setup>
import { SignById } from '@iso-safety-signs/vue';
defineProps<{ signId: string }>();
</script>

<template>
  <SignById :id="signId" :width="120" />
</template>
```

Returns `null` for unrecognised IDs.

---

## Props

| Prop          | Type               | Default              | Description                                  |
| ------------- | ------------------ | -------------------- | -------------------------------------------- |
| `width`       | `number \| string` | SVG intrinsic width  | Width of the `<svg>` element                 |
| `height`      | `number \| string` | SVG intrinsic height | Height of the `<svg>` element                |
| `title`       | `string`           | Sign name            | Accessible title (`<title>` inside SVG)      |
| `description` | `string`           | Sign description     | Accessible description (`<desc>` inside SVG) |

`SignById` also requires:

| Prop | Type     | Description                                |
| ---- | -------- | ------------------------------------------ |
| `id` | `string` | Sign slug ID, e.g. `"e001-emergency-exit"` |

---

## Accessibility

Every component renders with `role="img"` and `aria-labelledby` pointing to `<title>` and `<desc>` elements injected inside the SVG.

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
