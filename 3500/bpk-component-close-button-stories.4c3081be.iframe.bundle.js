"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8178],{"./examples/bpk-component-close-button/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkCloseButton=__webpack_require__("./packages/bpk-component-close-button/src/BpkCloseButton.js"),bpk_component_close_button=__webpack_require__("./packages/bpk-component-close-button/index.js"),bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_close_button.A,{label:"Close",onClick:(0,bpk_storybook_utils.XI)("Close button clicked")});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const examples=DefaultExample;DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const stories={title:"bpk-component-close-button",component:BpkCloseButton.A},Default=examples,VisualTest=examples,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}}}]);