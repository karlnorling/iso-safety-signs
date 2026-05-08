import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{s as h,g as b,a as j}from"./index-I8IgbF_0.js";function E(e){const a=e.replace(/\\/g,"/").split("/").pop()??"",n=a.match(/ISO_7010_([EFMPW]\d{3}[a-z]?)/i);return n?"iso-"+n[1].toLowerCase():"iso-"+a.replace(/\.svg$/i,"").toLowerCase().replace(/[^a-z0-9]+/g,"-")}const A=Object.fromEntries(h.map(e=>[e.id,E(e.assets.svg)])),C=e=>A[e],W=({size:e})=>{const n=j().map(c=>{const m=C(c.id);return m?`.${m} { background-image: url('/assets/${c.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`:""}).filter(Boolean).join(`
`),r=`.iso-icon { display: inline-block; width: ${e}px; height: ${e}px; }`;return s.jsx("style",{children:`${n}
${r}`})},l=({size:e=96,category:a})=>{const n=a?b(a):j();return n.length===0?s.jsxs("p",{style:{color:"#888",fontFamily:"sans-serif"},children:["No signs loaded. Run ",s.jsx("code",{children:"yarn update"})," to populate sign data."]}):s.jsxs(s.Fragment,{children:[s.jsx(W,{size:e}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"1.5rem",padding:"1rem"},children:n.map(r=>{const c=C(r.id)??"";return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{className:`iso-icon ${c}`,role:"img","aria-label":r.name,title:r.name}),s.jsx("span",{style:{fontSize:"0.7rem",textAlign:"center",color:"#555"},children:r.code}),s.jsx("span",{style:{fontSize:"0.65rem",textAlign:"center",color:"#888"},children:r.name})]},r.id)})})]})},_={title:"ISO 7010/CSS Sprite",component:l,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:256,step:8}}}},t={name:"Emergency (E-series)",render:({size:e})=>s.jsx(l,{size:e,category:"emergency"}),args:{size:96}},i={name:"Warning (W-series)",render:({size:e})=>s.jsx(l,{size:e,category:"warning"}),args:{size:96}},o={name:"All Signs",render:({size:e})=>s.jsx(l,{size:e}),args:{size:96}};var g,d,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Emergency (E-series)',
  render: ({
    size
  }) => <CSSGrid size={size} category="emergency" />,
  args: {
    size: 96
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,S,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Warning (W-series)',
  render: ({
    size
  }) => <CSSGrid size={size} category="warning" />,
  args: {
    size: 96
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var x,z,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'All Signs',
  render: ({
    size
  }) => <CSSGrid size={size} />,
  args: {
    size: 96
  }
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const $=["Emergency","Warning","AllSigns"],k=Object.freeze(Object.defineProperty({__proto__:null,AllSigns:o,Emergency:t,Warning:i,__namedExportsOrder:$,default:_},Symbol.toStringTag,{value:"Module"}));export{o as A,k as C,t as E,i as W};
