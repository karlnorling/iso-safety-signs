import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./iframe-_7XM7xJe.js";const F=[],N=e=>F.find(t=>t.id===e),o=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"),p=new Map;function P(e){const t=e.match(/viewBox="([^"]+)"/),r=e.match(/<svg[^>]*\swidth="([^"]+)"/),s=e.match(/<svg[^>]*\sheight="([^"]+)"/),n=e.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);return{attrs:`xmlns="http://www.w3.org/2000/svg"${t?` viewBox="${t[1]}"`:""}`,body:n?n[1]:"",width:r?r[1]:"100%",height:s?s[1]:"100%"}}function q(e){let t=p.get(e);return t||(t=P(e),p.set(e,t)),t}const l=U.memo(({id:e,"aria-label":t,className:r,description:s,height:n,style:$,title:_,width:g})=>{const a=N(e);if(!a)return null;const{attrs:B,body:M,width:E,height:D}=q(a.svg),j=_??a.name,k=s??a.description,H=g!==void 0?o(String(g)):E,O=n!==void 0?o(String(n)):D,m=`iso-desc-${e}`,h=`iso-title-${e}`,R=`<svg ${B} width="${H}" height="${O}" role="img" aria-labelledby="${h} ${m}">
  <title id="${h}">${o(j)}</title>
  <desc id="${m}">${o(k)}</desc>
  ${M}</svg>`;return T.jsx("span",{"aria-label":t,className:r,dangerouslySetInnerHTML:{__html:R},style:{display:"contents",...$}})});l.displayName="SignById";l.__docgenInfo={description:`Renders any ISO 7010 safety sign by slug ID.

Useful for data-driven rendering where the sign ID comes from an API
response or user input rather than being known at compile time.

Returns \`null\` for unrecognised IDs so callers can handle missing signs
gracefully without a try/catch.

@example
\`\`\`tsx
<SignById id="e001-emergency-exit" width={64} />
\`\`\``,methods:[],displayName:"SignById"};const W={title:"ISO 7010/SignById",component:l,parameters:{layout:"centered"},argTypes:{id:{control:"text"},width:{control:"number"},height:{control:"number"},title:{control:"text"},description:{control:"text"}}},i={args:{id:"e001-emergency-exit",width:128}},c={args:{id:"w001-flammable-material",width:128}},d={args:{id:"not-a-real-sign",width:128}};var u,w,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'e001-emergency-exit',
    width: 128
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,f,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'w001-flammable-material',
    width: 128
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var S,b,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'not-a-real-sign',
    width: 128
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const z=["EmergencyExit","FlammableMaterial","UnknownId"];export{i as EmergencyExit,c as FlammableMaterial,d as UnknownId,z as __namedExportsOrder,W as default};
