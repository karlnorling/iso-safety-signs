import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as l,M as o,C as i,a}from"./blocks-DoinrxXa.js";import{S as c,E as h,W as d,A as g,a as r}from"./SVGSprite.stories-2xlbal6O.js";import"./iframe-DQQOjeHF.js";import"./index-X0KmWgcg.js";import"./index-I8IgbF_0.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"svg-sprite",children:"SVG Sprite"}),`
`,e.jsxs(n.p,{children:["A single ",e.jsx(n.code,{children:"sprite.svg"})," contains all ISO 7010 safety signs as ",e.jsx(n.code,{children:"<symbol>"})," elements. Reference any symbol with ",e.jsx(n.code,{children:'<use href="#id">'})," — one HTTP request serves every sign."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @iso-safety-signs/sprite
`})}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.p,{children:[`| Approach | Best for |
| -------- | -------- |
| `,e.jsx(n.strong,{children:"SVG sprite"}),` | Plain HTML, no framework, single network request |
| React components | React/JSX — richer props, TypeScript, tree-shakeable |
| CSS sprite | Class-name driven usage, CMS output, no JavaScript |`]}),`
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
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"warning-signs",children:"Warning signs"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"all-signs",children:"All signs"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"single-icon-with-controls",children:"Single icon with controls"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(a,{of:r})]})}function y(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{y as default};
