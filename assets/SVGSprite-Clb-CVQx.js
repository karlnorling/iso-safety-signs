import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as h,C as i,a as d}from"./blocks-DW6CJVFT.js";import{S as c,E as o,W as a,A as x,a as r}from"./SVGSprite.stories-DfJ1Jbkb.js";import"./preload-helper-DUlmU-VY.js";import"./iframe-V34JqQ5p.js";import"./index-C9MXWqju.js";import"./index-DFw4qZhf.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
`,e.jsx(n.h1,{id:"svg-sprite",children:"SVG Sprite"}),`
`,e.jsxs(n.p,{children:["A single ",e.jsx(n.code,{children:"sprite.svg"})," contains all ISO 7010 safety signs as ",e.jsx(n.code,{children:"<symbol>"})," elements. Reference any symbol with ",e.jsx(n.code,{children:'<use href="#id">'})," — one HTTP request serves every sign."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @iso-safety-signs/sprite
`})}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Approach"}),e.jsx(n.th,{children:"Best for"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"SVG sprite"})}),e.jsx(n.td,{children:"Plain HTML, no framework, single network request"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"React components"}),e.jsx(n.td,{children:"React/JSX — richer props, TypeScript, tree-shakeable"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"CSS sprite"}),e.jsx(n.td,{children:"Class-name driven usage, CMS output, no JavaScript"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"external-file-reference-recommended",children:"External file reference (recommended)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<svg width="64" height="64" role="img" aria-label="Emergency exit">
  <title>Emergency exit</title>
  <use href="/assets/sprites/sprite.svg#e001-emergency-exit" />
</svg>
`})}),`
`,e.jsx(n.h3,{id:"inline-sprite",children:"Inline sprite"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<svg width="64" height="64" role="img" aria-label="Emergency exit">
  <title>Emergency exit</title>
  <use href="#e001-emergency-exit" />
</svg>
`})}),`
`,e.jsx(n.h3,{id:"react-with-bundler-import",children:"React with bundler import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import spriteUrl from '@iso-safety-signs/sprite/sprite.svg';

<svg width={64} height={64} role="img" aria-label="Emergency exit">
  <title>Emergency exit</title>
  <use href={\`\${spriteUrl}#e001-emergency-exit\`} />
</svg>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"symbol-id-pattern",children:"Symbol ID pattern"}),`
`,e.jsxs(n.p,{children:["Symbol IDs match the sign slug IDs: ",e.jsx(n.code,{children:"e001-emergency-exit"}),", ",e.jsx(n.code,{children:"w001-flammable-material"}),", ",e.jsx(n.code,{children:"p001-no-smoking"}),", etc. Enumerate all IDs from ",e.jsx(n.code,{children:"sprite-ids.json"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import ids from '@iso-safety-signs/sprite/sprite-ids.json';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"emergency-signs",children:"Emergency signs"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"warning-signs",children:"Warning signs"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"all-signs",children:"All signs"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"single-icon-with-controls",children:"Single icon with controls"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(d,{of:r})]})}function b(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{b as default};
