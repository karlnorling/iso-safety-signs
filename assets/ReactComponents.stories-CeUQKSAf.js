import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as oe}from"./iframe-DQQOjeHF.js";import{b as ce,g as de,a as ge}from"./index-I8IgbF_0.js";const S=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"),b=new Map;function me(e){const s=e.match(/viewBox="([^"]+)"/),t=e.match(/<svg[^>]*\swidth="([^"]+)"/),a=e.match(/<svg[^>]*\sheight="([^"]+)"/),i=e.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);return{attrs:`xmlns="http://www.w3.org/2000/svg"${s?` viewBox="${s[1]}"`:""}`,body:i?i[1]:"",width:t?t[1]:"100%",height:a?a[1]:"100%"}}function le(e){let s=b.get(e);return s||(s=me(e),b.set(e,s)),s}const x=oe.memo(({id:e,"aria-label":s,className:t,description:a,height:i,style:V,title:X,width:f})=>{const y=ce(e);if(!y)return null;const{attrs:Y,body:Z,width:ee,height:re}=le(y.svg),se=X??y.name,ae=a??y.description,te=f!==void 0?S(String(f)):ee,ne=i!==void 0?S(String(i)):re,z=`iso-desc-${e}`,w=`iso-title-${e}`,ie=`<svg ${Y} width="${te}" height="${ne}" role="img" aria-labelledby="${w} ${z}">
  <title id="${w}">${S(se)}</title>
  <desc id="${z}">${S(ae)}</desc>
  ${Z}</svg>`;return r.jsx("span",{"aria-label":s,className:t,dangerouslySetInnerHTML:{__html:ie},style:{display:"contents",...V}})});x.displayName="SignById";x.__docgenInfo={description:`Renders any ISO 7010 safety sign by slug ID.

Useful for data-driven rendering where the sign ID comes from an API
response or user input rather than being known at compile time.

Returns \`null\` for unrecognised IDs so callers can handle missing signs
gracefully without a try/catch.

@example
\`\`\`tsx
<SignById id="e001-emergency-exit" width={64} />
\`\`\``,methods:[],displayName:"SignById"};const n=({size:e=96,category:s})=>{const t=s?de(s):ge();return t.length===0?r.jsxs("p",{style:{color:"#888",fontFamily:"sans-serif"},children:["No signs loaded. Run ",r.jsx("code",{children:"yarn update"})," to populate sign data."]}):r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"1.5rem",padding:"1rem"},children:t.map(a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[r.jsx(x,{id:a.id,width:e,height:e}),r.jsx("span",{style:{fontSize:"0.7rem",textAlign:"center",color:"#555"},children:a.code}),r.jsx("span",{style:{fontSize:"0.65rem",textAlign:"center",color:"#888"},children:a.name})]},a.id))})},pe={title:"ISO 7010/React Components",component:x,parameters:{layout:"centered"},argTypes:{id:{control:"text"},width:{control:"number"},height:{control:"number"},title:{control:"text"},description:{control:"text"}}},o={args:{id:"e001-emergency-exit",width:128}},c={args:{id:"w001-flammable-material",width:128}},d={args:{id:"not-a-real-sign",width:128}},g={name:"Emergency (E-series)",render:({size:e})=>r.jsx(n,{size:e,category:"emergency"}),args:{size:96}},m={name:"Warning (W-series)",render:({size:e})=>r.jsx(n,{size:e,category:"warning"}),args:{size:96}},l={name:"Prohibition (P-series)",render:({size:e})=>r.jsx(n,{size:e,category:"prohibition"}),args:{size:96}},p={name:"Mandatory (M-series)",render:({size:e})=>r.jsx(n,{size:e,category:"mandatory"}),args:{size:96}},u={name:"Fire equipment (F-series)",render:({size:e})=>r.jsx(n,{size:e,category:"fire"}),args:{size:96}},h={name:"All Signs",render:({size:e})=>r.jsx(n,{size:e}),args:{size:96}};var j,v,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'e001-emergency-exit',
    width: 128
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,E,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'w001-flammable-material',
    width: 128
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var $,F,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'not-a-real-sign',
    width: 128
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var A,B,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Emergency (E-series)',
  render: ({
    size
  }) => <SignGrid size={size} category="emergency" />,
  args: {
    size: 96
  }
}`,...(W=(B=g.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var G,R,D;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Warning (W-series)',
  render: ({
    size
  }) => <SignGrid size={size} category="warning" />,
  args: {
    size: 96
  }
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,T,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Prohibition (P-series)',
  render: ({
    size
  }) => <SignGrid size={size} category="prohibition" />,
  args: {
    size: 96
  }
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,C,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Mandatory (M-series)',
  render: ({
    size
  }) => <SignGrid size={size} category="mandatory" />,
  args: {
    size: 96
  }
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var N,U,L;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Fire equipment (F-series)',
  render: ({
    size
  }) => <SignGrid size={size} category="fire" />,
  args: {
    size: 96
  }
}`,...(L=(U=u.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'All Signs',
  render: ({
    size
  }) => <SignGrid size={size} />,
  args: {
    size: 96
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ue=["EmergencyExit","FlammableMaterial","UnknownId","Emergency","Warning","Prohibition","Mandatory","Fire","AllSigns"],xe=Object.freeze(Object.defineProperty({__proto__:null,AllSigns:h,Emergency:g,EmergencyExit:o,Fire:u,FlammableMaterial:c,Mandatory:p,Prohibition:l,UnknownId:d,Warning:m,__namedExportsOrder:ue,default:pe},Symbol.toStringTag,{value:"Module"}));export{o as E,u as F,p as M,l as P,xe as R,m as W,g as a};
