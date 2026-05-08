# @iso-safety-signs/react

React components (inline SVG) for all **ISO 7010** workplace safety signs. Tree-shakeable, fully accessible, zero runtime dependencies beyond React.

[![npm](https://img.shields.io/npm/v/@iso-safety-signs/react)](https://www.npmjs.com/package/@iso-safety-signs/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/iso-safety-signs/blob/main/LICENSE)

---

## Installation

```sh
npm install @iso-safety-signs/react
# or
yarn add @iso-safety-signs/react
```

---

## Usage

### Named components (generated)

Each ISO 7010 sign is a named component in PascalCase derived from its slug ID:

```tsx
import {
  E001EmergencyExit,
  W001FlammableMaterial,
  P001NoSmoking,
  M001GeneralMandatoryAction,
  F001FireExtinguisher,
} from '@iso-safety-signs/react';

export default function SafetyPanel() {
  return (
    <>
      <E001EmergencyExit width={64} />
      <W001FlammableMaterial width={64} />
      <P001NoSmoking width={64} title="No smoking in this area" />
    </>
  );
}
```

### Dynamic rendering by ID

Use `SignById` when the sign ID comes from an API response or user input:

```tsx
import { SignById } from '@iso-safety-signs/react';

<SignById id="e001-emergency-exit" width={120} />
<SignById id={signId} width={64} height={64} />
```

Returns `null` for unrecognised IDs — no error thrown.

---

## Props

Every component and `SignById` accept the same props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `width` | `number \| string` | SVG intrinsic width | Width of the `<svg>` element |
| `height` | `number \| string` | SVG intrinsic height | Height of the `<svg>` element |
| `title` | `string` | Sign name | Accessible title (`<title>` inside SVG) |
| `description` | `string` | Sign description | Accessible description (`<desc>` inside SVG) |
| `className` | `string` | — | CSS class forwarded to the root `<span>` wrapper |
| `style` | `React.CSSProperties` | — | Inline styles forwarded to the root `<span>` wrapper |

`SignById` also requires:

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `id` | `string` | Sign slug ID, e.g. `"e001-emergency-exit"` |

---

## Accessibility

Every component renders `role="img"` with `aria-labelledby` pointing to a `<title>` and `<desc>` injected inside the SVG. Screen readers announce the sign name and description automatically.

Override defaults when needed:

```tsx
<E001EmergencyExit
  width={120}
  title="Emergency exit — ground floor"
  description="Green running figure with directional arrow"
/>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
