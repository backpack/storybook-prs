"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8587],{"./examples/bpk-component-floating-notification/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithCta:()=>WithCta,WithCtaIconAndLongText:()=>WithCtaIconAndLongText,WithIcon:()=>WithIcon,default:()=>stories});var BpkFloatingNotification_module_namespaceObject={};__webpack_require__.r(BpkFloatingNotification_module_namespaceObject);var react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./packages/node_modules/react-transition-group/esm/CSSTransition.js"),bpk_component_aria_live=__webpack_require__("./packages/bpk-component-aria-live/index.ts"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)(BpkFloatingNotification_module_namespaceObject.default),BpkFloatingNotification=props=>{const[showMessage,setShowMessage]=(0,react.useState)(!0),{animateOnEnter=!0,animateOnExit=!0,className,ctaText,hideAfter=4e3,icon:Icon,onClick,onExit,text,...rest}=props,classNames=getClassName("bpk-floating-notification",className);return(0,react.useEffect)((()=>{let timer;return hideAfter&&(timer=setTimeout((()=>setShowMessage(!1)),hideAfter)),()=>timer&&clearTimeout(timer)})),(0,jsx_runtime.jsx)(CSSTransition.A,{in:showMessage,classNames:{exit:getClassName("bpk-floating-notification--leave"),exitActive:getClassName("bpk-floating-notification--leave-active"),exitDone:getClassName("bpk-floating-notification--leave-done"),appear:getClassName("bpk-floating-notification--appear"),appearActive:getClassName("bpk-floating-notification--appear-active")},timeout:400,appear:animateOnEnter,exit:animateOnExit,onExited:onExit,children:(0,jsx_runtime.jsxs)("div",{className:classNames,...rest,children:[Icon&&(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-floating-notification__icon"),children:(0,jsx_runtime.jsx)(Icon,{"aria-hidden":!0})}),(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-floating-notification__text"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{tagName:"p",textStyle:bpk_component_text.r.bodyDefault,children:text})}),(0,jsx_runtime.jsx)(bpk_component_aria_live.A,{"aria-hidden":!0,children:text}),ctaText&&(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-floating-notification__cta"),children:(0,jsx_runtime.jsx)(bpk_component_button.Q1,{type:bpk_component_button.lP.linkOnDark,onClick,children:ctaText})})]})})},src_BpkFloatingNotification=BpkFloatingNotification;BpkFloatingNotification.__docgenInfo={description:"",methods:[],displayName:"BpkFloatingNotification",props:{animateOnEnter:{required:!1,tsType:{name:"boolean"},description:""},animateOnExit:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ctaText:{required:!1,tsType:{name:"string"},description:""},hideAfter:{required:!1,tsType:{name:"number"},description:"This prop controls the amount of time that the notification stays visible before the exit animation begins.\nThe default value is 4 seconds (4000 milliseconds)."},icon:{required:!1,tsType:{name:"FunctionComponent"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Execute a function after the component has finished the exit animation."},text:{required:!0,tsType:{name:"string"},description:""}}};const bpk_component_floating_notification=src_BpkFloatingNotification;var heart=__webpack_require__("./packages/bpk-component-icon/sm/heart.jsx"),information_circle=__webpack_require__("./packages/bpk-component-icon/sm/information-circle.jsx");const hideAfterHack={hideAfter:2147483647},DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{text:"Saved",...hideAfterHack}),IconExample=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{icon:heart.default,text:"Saved",...hideAfterHack}),CtaExample=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{ctaText:"View",text:"Saved",...hideAfterHack}),CtaIconLongTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{ctaText:"View",icon:heart.default,text:"Killer Combo saved to New York and Miami 🎉",...hideAfterHack}),VisualTestExample=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{animateOnEnter:!0,animateOnExit:!0,ctaText:"View",...hideAfterHack,icon:information_circle.default,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});CtaIconLongTextExample.__docgenInfo={description:"",methods:[],displayName:"CtaIconLongTextExample"},CtaExample.__docgenInfo={description:"",methods:[],displayName:"CtaExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},IconExample.__docgenInfo={description:"",methods:[],displayName:"IconExample"},VisualTestExample.__docgenInfo={description:"",methods:[],displayName:"VisualTestExample"};const stories={title:"bpk-component-floating-notification",component:src_BpkFloatingNotification},Default=DefaultExample,WithIcon=IconExample,WithCta=CtaExample,WithCtaIconAndLongText=CtaIconLongTextExample,VisualTest=VisualTestExample,VisualTestWithZoom={render:VisualTestExample,args:{zoomEnabled:!0}}},"./packages/bpk-component-icon/sm/heart.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeartIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M10.141 3.41a4.904 4.904 0 0 0-6.952.626 6.11 6.11 0 0 0-1.458 5.859c.898 4.03 5.543 8.553 9.051 11.415a1.905 1.905 0 0 0 2.436 0c3.508-2.862 8.153-7.384 9.05-11.415a6.1 6.1 0 0 0-1.457-5.86 4.904 4.904 0 0 0-6.952-.624l-1.18 1.03a1.025 1.025 0 0 1-1.357 0l-1.18-1.03z"})});HeartIcon.__docgenInfo={description:"",methods:[],displayName:"HeartIcon"};const __WEBPACK_DEFAULT_EXPORT__=HeartIcon;HeartIcon.__docgenInfo={description:"",methods:[],displayName:"HeartIcon"}}}]);