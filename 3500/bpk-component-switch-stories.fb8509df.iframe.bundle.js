"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8643],{"./examples/bpk-component-switch/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ReducedSpace:()=>ReducedSpace,Small:()=>Small,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),BpkSwitch=__webpack_require__("./packages/bpk-component-switch/src/BpkSwitch.tsx"),bpk_component_switch=__webpack_require__("./packages/bpk-component-switch/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultExample=_ref=>{let{...rest}=_ref;return(0,jsx_runtime.jsx)(bpk_component_switch.A,{...rest,ariaLabel:"Activate Backpack"})},SmallExample=_ref2=>{let{...rest}=_ref2;return(0,jsx_runtime.jsx)(bpk_component_switch.A,{small:!0,...rest,ariaLabel:"Activate Backpack"})},ReducedSpaceExample=_ref3=>{let{...rest}=_ref3;return(0,jsx_runtime.jsxs)("div",{style:{width:"4rem"},children:[(0,jsx_runtime.jsx)(bpk_component_switch.A,{...rest,ariaLabel:"Activate Backpack"}),(0,jsx_runtime.jsx)(bpk_component_switch.A,{...rest,ariaLabel:"Activate Backpack",small:!0})]})};try{DefaultExample.displayName="DefaultExample",DefaultExample.__docgenInfo={description:"",displayName:"DefaultExample",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/examples.tsx#DefaultExample"]={docgenInfo:DefaultExample.__docgenInfo,name:"DefaultExample",path:"examples/bpk-component-switch/examples.tsx#DefaultExample"})}catch(__react_docgen_typescript_loader_error){}try{SmallExample.displayName="SmallExample",SmallExample.__docgenInfo={description:"",displayName:"SmallExample",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/examples.tsx#SmallExample"]={docgenInfo:SmallExample.__docgenInfo,name:"SmallExample",path:"examples/bpk-component-switch/examples.tsx#SmallExample"})}catch(__react_docgen_typescript_loader_error){}try{ReducedSpaceExample.displayName="ReducedSpaceExample",ReducedSpaceExample.__docgenInfo={description:"",displayName:"ReducedSpaceExample",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/examples.tsx#ReducedSpaceExample"]={docgenInfo:ReducedSpaceExample.__docgenInfo,name:"ReducedSpaceExample",path:"examples/bpk-component-switch/examples.tsx#ReducedSpaceExample"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"bpk-component-switch",component:BpkSwitch.A,parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks_dist.hE,{}),(0,jsx_runtime.jsx)(dist.ov,{exclude:["zoomEnabled"]}),(0,jsx_runtime.jsx)(blocks_dist.oz,{children:"This component uses a hidden [`input type=checkbox`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox), so it supports all the same properties as it (for example `checked`)."})]})}}},Default=DefaultExample,Small=SmallExample,ReducedSpace=ReducedSpaceExample,VisualTest=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DefaultExample,{}),(0,jsx_runtime.jsx)(SmallExample,{}),(0,jsx_runtime.jsx)(ReducedSpaceExample,{}),(0,jsx_runtime.jsx)(DefaultExample,{checked:!0}),(0,jsx_runtime.jsx)(SmallExample,{checked:!0}),(0,jsx_runtime.jsx)(ReducedSpaceExample,{checked:!0})]}),VisualTestWithZoom={render:VisualTest,args:{zoomEnabled:!0}};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"examples/bpk-component-switch/stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Small.displayName="Small",Small.__docgenInfo={description:"",displayName:"Small",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/stories.tsx#Small"]={docgenInfo:Small.__docgenInfo,name:"Small",path:"examples/bpk-component-switch/stories.tsx#Small"})}catch(__react_docgen_typescript_loader_error){}try{ReducedSpace.displayName="ReducedSpace",ReducedSpace.__docgenInfo={description:"",displayName:"ReducedSpace",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-switch/stories.tsx#ReducedSpace"]={docgenInfo:ReducedSpace.__docgenInfo,name:"ReducedSpace",path:"examples/bpk-component-switch/stories.tsx#ReducedSpace"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-switch/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-switch/src/BpkSwitch.tsx").A},"./packages/bpk-component-switch/src/BpkSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkSwitch});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-switch":"bpk-switch-h1rL7","bpk-switch__checkbox":"bpk-switch__checkbox-ZtpWe","bpk-switch__switch":"bpk-switch__switch-Q_huT","bpk-switch__switch--small":"bpk-switch__switch--small-rk4om"}),BpkSwitch=_ref=>{let{ariaLabel,className=null,small=!1,...rest}=_ref;const switchClassNames=getClassName("bpk-switch__switch",small&&"bpk-switch__switch--small");return(0,jsx_runtime.jsxs)("label",{className:getClassName("bpk-switch",className),children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",className:getClassName("bpk-switch__checkbox"),"aria-label":ariaLabel,...rest}),(0,jsx_runtime.jsx)("span",{"aria-hidden":!0,className:switchClassNames})]})},src_BpkSwitch=BpkSwitch;try{BpkSwitch.displayName="BpkSwitch",BpkSwitch.__docgenInfo={description:"",displayName:"BpkSwitch",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},small:{defaultValue:{value:"false"},description:"",name:"small",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-switch/src/BpkSwitch.tsx#BpkSwitch"]={docgenInfo:BpkSwitch.__docgenInfo,name:"BpkSwitch",path:"packages/bpk-component-switch/src/BpkSwitch.tsx#BpkSwitch"})}catch(__react_docgen_typescript_loader_error){}}}]);