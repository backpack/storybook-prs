"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[4769],{"./examples/bpk-component-section-list/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkSectionListItem_module_namespaceObject={};__webpack_require__.r(BpkSectionListItem_module_namespaceObject);var BpkSectionListSection_module_namespaceObject={};__webpack_require__.r(BpkSectionListSection_module_namespaceObject);var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BpkSectionList=props=>{const{children,...rest}=props;return(0,jsx_runtime.jsx)("section",{...rest,children})};BpkSectionList.propTypes={children:prop_types_default().node.isRequired},BpkSectionList.__docgenInfo={description:"",methods:[],displayName:"BpkSectionList",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkSectionList=BpkSectionList;BpkSectionList.__docgenInfo={description:"",methods:[],displayName:"BpkSectionList",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};var bpk_component_icon=__webpack_require__("./packages/bpk-component-icon/index.tsx"),chevron_right=__webpack_require__("./packages/bpk-component-icon/lg/chevron-right.jsx"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");const BpkLargeChevronRightIconWithRtlSupport=(0,bpk_component_icon.yk)(chevron_right.default),getClassName=(0,bpk_react_utils.fD)(BpkSectionListItem_module_namespaceObject.default),BpkSectionListItem=props=>{const{blank,children,className,href,onClick,...rest}=props,classNames=[getClassName("bpk-section-list-item",(href||onClick)&&"bpk-section-list-item--interactive",className)];if(href){const target=blank?"_blank":null;return(0,jsx_runtime.jsxs)("a",{href,target,onClick,className:classNames.join(" "),...rest,children:[children,(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-section-list-item__chevron"),children:(0,jsx_runtime.jsx)(BpkLargeChevronRightIconWithRtlSupport,{})})]})}return onClick?(0,jsx_runtime.jsxs)("button",{type:"button",onClick,className:classNames.join(" "),...rest,children:[children,(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-section-list-item__chevron"),children:(0,jsx_runtime.jsx)(BpkLargeChevronRightIconWithRtlSupport,{})})]}):(0,jsx_runtime.jsx)("div",{className:classNames.join(" "),...rest,children})};BpkSectionListItem.propTypes={children:prop_types_default().node.isRequired,blank:prop_types_default().bool,className:prop_types_default().string,href:prop_types_default().string,onClick:prop_types_default().func},BpkSectionListItem.defaultProps={blank:!1,className:null,href:null,onClick:null},BpkSectionListItem.__docgenInfo={description:"",methods:[],displayName:"BpkSectionListItem",props:{blank:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},href:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},onClick:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<>) => void",signature:{arguments:[{name:"event",type:{name:"SyntheticEvent",elements:[],raw:"SyntheticEvent<>"}}],return:{name:"void"}},nullable:!0},description:"",type:{name:"func"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkSectionListItem=BpkSectionListItem;BpkSectionListItem.__docgenInfo={description:"",methods:[],displayName:"BpkSectionListItem",props:{blank:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},href:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<>) => void",signature:{arguments:[{name:"event",type:{name:"SyntheticEvent",elements:[],raw:"SyntheticEvent<>"}}],return:{name:"void"}},nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"func"}}}};var react=__webpack_require__("./node_modules/react/index.js"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts");const BpkSectionListSection_getClassName=(0,bpk_react_utils.fD)(BpkSectionListSection_module_namespaceObject.default),BpkSectionListSection=props=>{const{children,headerText,...rest}=props;return(0,jsx_runtime.jsxs)("section",{...rest,children:[headerText&&(0,jsx_runtime.jsx)("header",{className:BpkSectionListSection_getClassName("bpk-section-list-section__header"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:bpk_component_text.r.label1,children:headerText})}),(0,jsx_runtime.jsx)("ul",{className:BpkSectionListSection_getClassName("bpk-section-list-section"),children:react.Children.map(children,(child=>(0,jsx_runtime.jsx)("li",{children:child})))})]})};BpkSectionListSection.propTypes={children:prop_types_default().node.isRequired,headerText:prop_types_default().string},BpkSectionListSection.defaultProps={headerText:null},BpkSectionListSection.__docgenInfo={description:"",methods:[],displayName:"BpkSectionListSection",props:{headerText:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkSectionListSection=BpkSectionListSection;BpkSectionListSection.__docgenInfo={description:"",methods:[],displayName:"BpkSectionListSection",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},headerText:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}};const bpk_component_section_list=src_BpkSectionList;var bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js");const DefaultExample=()=>(0,jsx_runtime.jsxs)(bpk_component_section_list,{children:[(0,jsx_runtime.jsxs)(src_BpkSectionListSection,{children:[(0,jsx_runtime.jsx)(src_BpkSectionListItem,{children:"Section list item"}),(0,jsx_runtime.jsx)(src_BpkSectionListItem,{onClick:(0,bpk_storybook_utils.XI)("Clickable BpkSectionListItem clicked"),children:"With onClick prop"}),(0,jsx_runtime.jsx)(src_BpkSectionListItem,{href:"https://skyscanner.net",blank:!0,onClick:(0,bpk_storybook_utils.XI)("BpkSectionListItem with href clicked"),children:"With href"})]}),(0,jsx_runtime.jsxs)(src_BpkSectionListSection,{headerText:"Cities",children:[(0,jsx_runtime.jsx)(src_BpkSectionListItem,{children:"Tokyo"}),(0,jsx_runtime.jsx)(src_BpkSectionListItem,{children:"Rio de Janeiro"}),(0,jsx_runtime.jsx)(src_BpkSectionListItem,{children:"London"}),(0,jsx_runtime.jsx)(src_BpkSectionListItem,{children:"Beijing"})]})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const examples=DefaultExample;DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const stories={title:"bpk-component-section-list",component:src_BpkSectionList,subcomponents:{BpkSectionListSection:src_BpkSectionListSection,BpkSectionListItem:src_BpkSectionListItem}},Default=examples,VisualTest=examples,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var BpkDarkExampleWrapper_module_namespaceObject={};__webpack_require__.r(BpkDarkExampleWrapper_module_namespaceObject);var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)(BpkDarkExampleWrapper_module_namespaceObject.default),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}},"./packages/bpk-component-icon/lg/chevron-right.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronRightIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1.5rem",height:"1.5rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M7.8 4.287a1 1 0 0 0 0 1.414l6.292 6.293L7.8 18.287a1 1 0 0 0 1.39 1.438l.024-.024 7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0"})});ChevronRightIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronRightIcon"};const __WEBPACK_DEFAULT_EXPORT__=ChevronRightIcon;ChevronRightIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronRightIcon"}}}]);