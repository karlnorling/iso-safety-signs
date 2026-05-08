import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DQQOjeHF.js";import{g as A,a as v}from"./index-I8IgbF_0.js";const E=()=>{const[r,s]=m.useState("");return m.useEffect(()=>{fetch("/assets/sprites/sprite.svg").then(n=>n.text()).then(s).catch(()=>{})},[]),r?e.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},dangerouslySetInnerHTML:{__html:r}}):null},I=({id:r,label:s,size:n=96})=>e.jsxs("svg",{width:n,height:n,role:"img","aria-label":s,style:{display:"block"},children:[e.jsx("title",{children:s}),e.jsx("use",{href:`#${r}`})]}),c=({size:r=96,category:s})=>{const n=s?A(s):v();return n.length===0?e.jsxs("p",{style:{color:"#888",fontFamily:"sans-serif"},children:["No signs loaded. Run ",e.jsx("code",{children:"yarn update"})," to populate sign data."]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"1.5rem",padding:"1rem"},children:n.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx(I,{id:t.id,label:t.name,size:r}),e.jsx("span",{style:{fontSize:"0.7rem",textAlign:"center",color:"#555"},children:t.code}),e.jsx("span",{style:{fontSize:"0.65rem",textAlign:"center",color:"#888"},children:t.name})]},t.id))})]})},_=({id:r,label:s,size:n})=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(I,{id:r,label:s,size:n})]}),W={title:"ISO 7010/SVG Sprite",component:c,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:256,step:8}}}},i={name:"Emergency (E-series)",render:({size:r})=>e.jsx(c,{size:r,category:"emergency"}),args:{size:96}},a={name:"Warning (W-series)",render:({size:r})=>e.jsx(c,{size:r,category:"warning"}),args:{size:96}},o={name:"All Signs",render:({size:r})=>e.jsx(c,{size:r}),args:{size:96}},l={parameters:{layout:"centered"},render:r=>e.jsx(_,{...r}),args:{id:"e001-emergency-exit",label:"Emergency exit",size:200},argTypes:{id:{control:"text",description:"Symbol ID from sprite.svg"},label:{control:"text",description:"Accessible label"},size:{control:{type:"number",min:32,max:512,step:8}}}};var d,p,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Emergency (E-series)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="emergency" />,
  args: {
    size: 96
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,y,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Warning (W-series)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="warning" />,
  args: {
    size: 96
  }
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var S,h,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All Signs',
  render: ({
    size
  }) => <SpriteGrid size={size} />,
  args: {
    size: 96
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,z,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: 'e001-emergency-exit',
    label: 'Emergency exit',
    size: 200
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Symbol ID from sprite.svg'
    },
    label: {
      control: 'text',
      description: 'Accessible label'
    },
    size: {
      control: {
        type: 'number',
        min: 32,
        max: 512,
        step: 8
      }
    }
  }
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const G=["Emergency","Warning","AllSigns","SingleIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,AllSigns:o,Emergency:i,SingleIcon:l,Warning:a,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{o as A,i as E,D as S,a as W,l as a};
