"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[6373],{"./examples/bpk-scrim-utils/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,ExampleWithCustomRenderTarget:()=>ExampleWithCustomRenderTarget,default:()=>stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),BpkScrim=__webpack_require__("./packages/bpk-scrim-utils/src/BpkScrim.tsx"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),bpk_scrim_utils=__webpack_require__("./packages/bpk-scrim-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-scrim-utils-example__dialog":"bpk-scrim-utils-example__dialog-OeZDD","bpk-scrim-utils-example__dialog-content":"bpk-scrim-utils-example__dialog-content-e5qqR","bpk-scrim-utils-example__dialog-container":"bpk-scrim-utils-example__dialog-container-FGf7E"}),DialogContentWithScrim=(0,bpk_scrim_utils.BJ)((()=>(0,jsx_runtime.jsx)("section",{tabIndex:-1,role:"dialog",className:getClassName("bpk-scrim-utils-example__dialog"),children:(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-scrim-utils-example__dialog-content"),children:[(0,jsx_runtime.jsx)("div",{children:"Dialog content here."}),(0,jsx_runtime.jsx)(bpk_component_button.Q1,{children:"Some button"})]})}))),withScrimMock=props=>(0,jsx_runtime.jsx)("div",{}),withScrimmedPortalMock=props=>(0,jsx_runtime.jsx)("div",{});try{withScrimMock.displayName="withScrimMock",withScrimMock.__docgenInfo={description:"",displayName:"withScrimMock",props:{getApplicationElement:{defaultValue:null,description:'The `pagewrap` element id is a convention we use internally at Skyscanner. In most cases it should "just work".',name:"getApplicationElement",required:!0,type:{name:"() => HTMLElement | null"}},onClose:{defaultValue:null,description:"This is required unless `closeOnScrimClick` is false. It should be set as the `onClick` action on a button or a link.",name:"onClose",required:!1,type:{name:"(() => void | null) | undefined"}},isIphone:{defaultValue:null,description:"Can be used to apply iPhone only styles or behaviour, as it has different scrolling behaviour",name:"isIphone",required:!1,type:{name:"boolean | undefined"}},isIpad:{defaultValue:null,description:"",name:"isIpad",required:!1,type:{name:"boolean | undefined"}},containerClassName:{defaultValue:null,description:"It can be used to apply styles to the full-screen container into which the enriched component is inserted (e.g. `display: flex` or `display: grid`)",name:"containerClassName",required:!1,type:{name:"string | undefined"}},closeOnScrimClick:{defaultValue:null,description:"",name:"closeOnScrimClick",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-scrim-utils/stories.utils.tsx#withScrimMock"]={docgenInfo:withScrimMock.__docgenInfo,name:"withScrimMock",path:"examples/bpk-scrim-utils/stories.utils.tsx#withScrimMock"})}catch(__react_docgen_typescript_loader_error){}try{withScrimmedPortalMock.displayName="withScrimmedPortalMock",withScrimmedPortalMock.__docgenInfo={description:"",displayName:"withScrimmedPortalMock",props:{getApplicationElement:{defaultValue:null,description:'The `pagewrap` element id is a convention we use internally at Skyscanner. In most cases it should "just work".',name:"getApplicationElement",required:!0,type:{name:"() => HTMLElement | null"}},onClose:{defaultValue:null,description:"This is required unless `closeOnScrimClick` is false. It should be set as the `onClick` action on a button or a link.",name:"onClose",required:!1,type:{name:"(() => void | null) | undefined"}},isIphone:{defaultValue:null,description:"Can be used to apply iPhone only styles or behaviour, as it has different scrolling behaviour",name:"isIphone",required:!1,type:{name:"boolean | undefined"}},isIpad:{defaultValue:null,description:"",name:"isIpad",required:!1,type:{name:"boolean | undefined"}},containerClassName:{defaultValue:null,description:"It can be used to apply styles to the full-screen container into which the enriched component is inserted (e.g. `display: flex` or `display: grid`)",name:"containerClassName",required:!1,type:{name:"string | undefined"}},closeOnScrimClick:{defaultValue:null,description:"",name:"closeOnScrimClick",required:!1,type:{name:"boolean | undefined"}},renderTarget:{defaultValue:null,description:"",name:"renderTarget",required:!1,type:{name:"(() => HTMLElement | null) | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-scrim-utils/stories.utils.tsx#withScrimmedPortalMock"]={docgenInfo:withScrimmedPortalMock.__docgenInfo,name:"withScrimmedPortalMock",path:"examples/bpk-scrim-utils/stories.utils.tsx#withScrimmedPortalMock"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"bpk-scrim-utils",component:BpkScrim.A,subcomponents:{withScrimMock,withScrimmedPortalMock},parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks_dist.hE,{}),(0,jsx_runtime.jsx)(dist.ov,{exclude:["zoomEnabled"]}),(0,jsx_runtime.jsx)(blocks_dist.oz,{children:"`withScrim` sends all props it receives down to the component, except `getApplicationElement` and `padded`. It also adds some props that are used for a11y and closing the modal:\n          `dialogRef` should be set as the ref on the visible container on top of the scrim; it is used to set focus, `onClose` , `isIphone`"})]})}}},Example=()=>(0,jsx_runtime.jsxs)("div",{id:"pagewrap",children:[(0,jsx_runtime.jsx)("div",{children:"This element should be hidden from AT by the scrim. It should also not be possible to tab to it."}),(0,jsx_runtime.jsx)(DialogContentWithScrim,{getApplicationElement:()=>document.getElementById("pagewrap"),closeOnScrimClick:!1,containerClassName:getClassName("bpk-scrim-utils-example__dialog-container")})]}),ExampleWithCustomRenderTarget=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{id:"portalElement",children:"Dialog attached here."}),(0,jsx_runtime.jsxs)("div",{id:"pagewrap",children:[(0,jsx_runtime.jsx)("div",{children:"This element should be hidden from AT by the scrim. It should also not be possible to tab to it."}),(0,jsx_runtime.jsx)(DialogContentWithScrim,{getApplicationElement:()=>document.getElementById("pagewrap"),closeOnScrimClick:!1,containerClassName:getClassName("bpk-scrim-utils-example__dialog-container"),renderTarget:()=>document.getElementById("portalElement")})]})]})}}]);