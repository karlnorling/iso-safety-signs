import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-V34JqQ5p.js";import{g as A,a as I}from"./index-DFw4qZhf.js";const E=()=>{const[r,s]=d.useState("");return d.useEffect(()=>{fetch("/assets/sprites/sprite.svg").then(n=>n.text()).then(s).catch(()=>{})},[]),r?e.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},dangerouslySetInnerHTML:{__html:r}}):null},w=({id:r,label:s,size:n=96})=>e.jsxs("svg",{width:n,height:n,role:"img","aria-label":s,style:{display:"block"},children:[e.jsx("title",{children:s}),e.jsx("use",{href:`#${r}`})]}),l=({size:r=96,category:s})=>{const n=s?A(s):I();return n.length===0?e.jsxs("p",{style:{color:"#888",fontFamily:"sans-serif"},children:["No signs loaded. Run ",e.jsx("code",{children:"yarn update"})," to populate sign data."]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"1.5rem",padding:"1rem"},children:n.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem"},children:[e.jsx(w,{id:t.code.toLowerCase(),label:t.name,size:r}),e.jsx("span",{style:{fontSize:"0.7rem",textAlign:"center",color:"#555"},children:t.code}),e.jsx("span",{style:{fontSize:"0.65rem",textAlign:"center",color:"#888"},children:t.name})]},t.id))})]})},_=({id:r,label:s,size:n})=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(w,{id:r,label:s,size:n})]}),v={title:"ISO 7010/SVG Sprite",component:l,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:256,step:8}}}},i={name:"Emergency (E-series)",render:({size:r})=>e.jsx(l,{size:r,category:"emergency"}),args:{size:96}},a={name:"Warning (W-series)",render:({size:r})=>e.jsx(l,{size:r,category:"warning"}),args:{size:96}},o={name:"All Signs",render:({size:r})=>e.jsx(l,{size:r}),args:{size:96}},c={parameters:{layout:"centered"},render:r=>e.jsx(_,{...r}),args:{id:"e001",label:"Emergency exit",size:200},argTypes:{id:{control:"text",description:"Sign code in lowercase, e.g. e001, w027, p001"},label:{control:"text",description:"Accessible label"},size:{control:{type:"number",min:32,max:512,step:8}}}};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Emergency (E-series)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="emergency" />,
  args: {
    size: 96
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,u,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Warning (W-series)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="warning" />,
  args: {
    size: 96
  }
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,h,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'All Signs',
  render: ({
    size
  }) => <SpriteGrid size={size} />,
  args: {
    size: 96
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var z,f,b;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: 'e001',
    label: 'Emergency exit',
    size: 200
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Sign code in lowercase, e.g. e001, w027, p001'
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
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const W=["Emergency","Warning","AllSigns","SingleIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,AllSigns:o,Emergency:i,SingleIcon:c,Warning:a,__namedExportsOrder:W,default:v},Symbol.toStringTag,{value:"Module"}));export{o as A,i as E,C as S,a as W,c as a};
