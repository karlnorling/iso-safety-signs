import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as t}from"./blocks-DoinrxXa.js";import"./iframe-DQQOjeHF.js";import"./index-X0KmWgcg.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"ISO 7010/Assets & API"}),`
`,e.jsx(n.h1,{id:"assets--programmatic-api",children:"Assets & Programmatic API"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@iso-safety-signs/core"})," package exposes typed data for all ISO 7010 safety signs alongside helper functions for filtering and lookup. The ",e.jsx(n.code,{children:"@iso-safety-signs/assets"})," package provides pre-built image files at multiple resolutions."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @iso-safety-signs/core @iso-safety-signs/assets
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"programmatic-api",children:"Programmatic API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  getAllSigns,
  getSign,
  getSignsByCategory,
} from '@iso-safety-signs/core';
`})}),`
`,e.jsx(n.h3,{id:"getallsigns",children:e.jsx(n.code,{children:"getAllSigns()"})}),`
`,e.jsx(n.p,{children:"Returns all ISO 7010 signs."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const all = getAllSigns();
// → Sign[]
`})}),`
`,e.jsx(n.h3,{id:"getsignid",children:e.jsx(n.code,{children:"getSign(id)"})}),`
`,e.jsx(n.p,{children:"Look up a single sign by its slug ID."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const exit = getSign('e001-emergency-exit');
// → Sign | undefined

const flammable = getSign('w001-flammable-material');
`})}),`
`,e.jsx(n.h3,{id:"getsignsbycategorycategory",children:e.jsx(n.code,{children:"getSignsByCategory(category)"})}),`
`,e.jsx(n.p,{children:"Filter signs by ISO 7010 category."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const emergency   = getSignsByCategory('emergency');    // E-series (green)
const fire        = getSignsByCategory('fire');         // F-series (red)
const mandatory   = getSignsByCategory('mandatory');    // M-series (blue)
const prohibition = getSignsByCategory('prohibition');  // P-series (red/white)
const warning     = getSignsByCategory('warning');      // W-series (yellow)
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"sign-type",children:[e.jsx(n.code,{children:"Sign"})," type"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface Sign {
  id: string;          // e.g. 'e001-emergency-exit'
  code: string;        // e.g. 'E001'
  name: string;        // e.g. 'Emergency exit'
  category: SignCategory;
  description: string; // accessible description
  svg: string;         // inline SVG markup
  assets: SignAssets;
}

interface SignAssets {
  svg: string;                    // relative path to original SVG
  png: Record<number, string>;    // size → relative path (240, 512, 768, 1024, 2048)
  jpg: Record<number, string>;    // same sizes
  webp: Record<number, string>;   // same sizes
}

type SignCategory = 'emergency' | 'fire' | 'mandatory' | 'prohibition' | 'warning';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"iso-7010-categories",children:"ISO 7010 Categories"}),`
`,e.jsx(n.p,{children:`| Category | Code range | Background | Meaning |
| -------- | ---------- | ---------- | ------- |
| Emergency | E001–E068+ | Green | Emergency routes, first aid, eye wash |
| Fire | F001–F017+ | Red | Fire-fighting equipment location |
| Mandatory | M001–M058+ | Blue | Required actions (PPE, procedures) |
| Prohibition | P001–P071+ | Red/white | Forbidden actions |
| Warning | W001–W073+ | Yellow | Hazard alerts |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"asset-files",children:"Asset files"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@iso-safety-signs/assets"})," package ships pre-converted raster images at five resolutions in PNG, JPG, and WebP formats alongside the original SVGs."]}),`
`,e.jsx(n.h3,{id:"directory-layout",children:"Directory layout"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`assets/
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
`})}),`
`,e.jsx(n.h3,{id:"resolve-asset-paths-via-the-api",children:"Resolve asset paths via the API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { getSign } from '@iso-safety-signs/core';

const sign = getSign('e001-emergency-exit');
if (sign) {
  console.log(sign.assets.svg);       // 'emergency/e001/ISO_7010_E001.svg'
  console.log(sign.assets.png[512]);  // 'emergency/e001/ISO_7010_E001_512x512.png'
  console.log(sign.assets.webp[240]); // 'emergency/e001/ISO_7010_E001_240x240.webp'
}
`})})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default};
