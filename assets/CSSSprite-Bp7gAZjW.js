import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as c,M as l,C as i}from"./blocks-DW6CJVFT.js";import{C as a,E as t,W as o,A as h}from"./CSSSprite.stories-AqW64ew1.js";import"./preload-helper-DUlmU-VY.js";import"./iframe-V34JqQ5p.js";import"./index-C9MXWqju.js";import"./index-DFw4qZhf.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...c(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{of:a}),`
`,s.jsx(e.h1,{id:"css-sprite",children:"CSS Sprite"}),`
`,s.jsxs(e.p,{children:["Import ",s.jsx(e.code,{children:"sprite.css"})," to get a set of ",s.jsx(e.code,{children:".iso-*"})," utility classes. Apply a class to any block element sized with ",s.jsx(e.code,{children:"width"}),"/",s.jsx(e.code,{children:"height"})," — no JavaScript required."]}),`
`,s.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-sh",children:`npm install @iso-safety-signs/css
`})}),`
`,s.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-js",children:`import '@iso-safety-signs/css/sprite.css';
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-css",children:`@import '@iso-safety-signs/css/sprite.css';
`})}),`
`,s.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<span
  class="iso-e001"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Emergency exit"
></span>
`})}),`
`,s.jsx(e.h3,{id:"css-helper",children:"CSS helper"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`import { getCssClassName } from '@iso-safety-signs/css';

const cls = getCssClassName('e001-emergency-exit'); // → 'iso-e001'
element.className = cls;
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"class-name-pattern",children:"Class name pattern"}),`
`,s.jsxs(e.p,{children:["Classes follow the pattern ",s.jsx(e.code,{children:"iso-{code}"})," — e.g. ",s.jsx(e.code,{children:"iso-e001"}),", ",s.jsx(e.code,{children:"iso-w073"}),", ",s.jsx(e.code,{children:"iso-p001"}),"."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"emergency-signs",children:"Emergency signs"}),`
`,s.jsx(i,{of:t}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"warning-signs",children:"Warning signs"}),`
`,s.jsx(i,{of:o}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"all-signs",children:"All signs"}),`
`,s.jsx(i,{of:h})]})}function f(n={}){const{wrapper:e}={...c(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{f as default};
