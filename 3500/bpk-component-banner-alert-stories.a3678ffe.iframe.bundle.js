"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8640],{"./examples/bpk-component-aria-live/examples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$J:()=>AriaLiveDemo,OP:()=>ChipsExample,PB:()=>SelectExample});var react=__webpack_require__("./node_modules/react/index.js"),bpk_component_aria_live=__webpack_require__("./packages/bpk-component-aria-live/index.ts"),bpk_component_chip=__webpack_require__("./packages/bpk-component-chip/index.ts"),bpk_component_code=__webpack_require__("./packages/bpk-component-code/index.js"),bpk_component_fieldset=__webpack_require__("./packages/bpk-component-fieldset/index.js"),bpk_component_select=__webpack_require__("./packages/bpk-component-select/index.js"),bpk_component_switch=__webpack_require__("./packages/bpk-component-switch/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const getClassName=(0,bpk_react_utils.fD)({"bpk-storybook-aria-live-demo":"bpk-storybook-aria-live-demo-Z09i6","bpk-storybook-aria-live-demo__chips-wrapper":"bpk-storybook-aria-live-demo__chips-wrapper-W4tLu","bpk-storybook-aria-live-demo__select-wrapper":"bpk-storybook-aria-live-demo__select-wrapper-XS_IG","bpk-storybook-aria-live-demo__select":"bpk-storybook-aria-live-demo__select-Paesf","bpk-storybook-aria-live-demo__switch":"bpk-storybook-aria-live-demo__switch-sKBeB","bpk-storybook-aria-live-demo__chip":"bpk-storybook-aria-live-demo__chip-dKNfj","bpk-storybook-aria-live-demo__aria-live":"bpk-storybook-aria-live-demo__aria-live-v6dhr"}),AriaLiveDemo=_ref=>{let{children,className=null,preamble=null,style,visible=!1,...rest}=_ref;return(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-storybook-aria-live-demo",className),style,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("strong",{children:"ARIA live region:"})}),(0,jsx_runtime.jsx)("p",{children:visible?"This content is relevant to everyone, not just assistive technologies, so it is permanently visible.":"This would usually be visually hidden, and only visible to assistive technologies. It is visible here for demo purposes."}),preamble,(0,jsx_runtime.jsx)(bpk_component_aria_live.A,{...rest,visible:!0,politenessSetting:bpk_component_aria_live.C.assertive,children})]})};class SelectExample extends react.Component{constructor(props){super(props),_defineProperty(this,"onChangeDestination",(destination=>{this.setState({destination})})),_defineProperty(this,"toggleDirectness",(()=>{this.setState((prevState=>({direct:!prevState.direct})))})),_defineProperty(this,"id","aria-live-select-example"),this.state={destination:"Panjin",direct:!1}}render(){const{destination,direct}=this.state;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{children:["Interactive component with",(0,jsx_runtime.jsxs)(bpk_component_code.H,{children:['aria-controls="',this.id,'"']})," to link it to the ARIA live region below with the same ID."]}),(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-storybook-aria-live-demo__select-wrapper"),children:[(0,jsx_runtime.jsx)(bpk_component_fieldset.Ay,{label:"Destination",className:getClassName("bpk-storybook-aria-live-demo__select"),children:(0,jsx_runtime.jsxs)(bpk_component_select.A,{id:"destination",name:"destination",value:destination,onChange:event=>{var _event$target;this.onChangeDestination(null==event||null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.value)},children:[(0,jsx_runtime.jsx)("option",{value:"Abisko",children:"Abisko"}),(0,jsx_runtime.jsx)("option",{value:"Nara",children:"Nara"}),(0,jsx_runtime.jsx)("option",{value:"Panjin",children:"Panjin"})]})}),(0,jsx_runtime.jsx)(bpk_component_switch.A,{className:getClassName("bpk-storybook-aria-live-demo__switch"),label:"Direct flights only",checked:direct,onChange:this.toggleDirectness})]})]}),(0,jsx_runtime.jsx)(AriaLiveDemo,{"aria-atomic":!0,visible:!0,id:this.id,className:getClassName("bpk-storybook-aria-live-demo__aria-live"),preamble:(0,jsx_runtime.jsxs)("p",{children:["This region has ",(0,jsx_runtime.jsxs)(bpk_component_code.H,{children:['id="',this.id,'"']}),".",(0,jsx_runtime.jsx)("br",{}),"It also has ",(0,jsx_runtime.jsx)(bpk_component_code.H,{children:'aria-atomic="true"'})," to instruct assistive technologies to read out everything when something changes, not just the part that changed."]}),children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)("strong",{children:["Searching for ",direct?"direct ":"","flights to ",destination,"."]})})})]})}}class ChipsExample extends react.Component{constructor(props){super(props),_defineProperty(this,"id","aria-live-chips-example"),_defineProperty(this,"toggleCategory",(category=>{this.setState((prevState=>{const nextState=prevState;return nextState.categories[category]=!prevState.categories[category],nextState.updates.push("".concat(category," became ").concat(nextState.categories[category]?"enabled":"disabled",".")),nextState}))})),this.state={categories:{Flights:!0,Hotels:!0,"Car hire":!1},updates:[]}}render(){const{categories,updates}=this.state;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-storybook-aria-live-demo__chips-wrapper"),children:[(0,jsx_runtime.jsxs)("p",{children:["Interactive component with",(0,jsx_runtime.jsxs)(bpk_component_code.H,{children:['aria-controls="',this.id,'"']})," to link it to the ARIA live region below with the same ID."]}),Object.keys(categories).map((category=>(0,jsx_runtime.jsx)(bpk_component_chip.Ay,{className:getClassName("bpk-storybook-aria-live-demo__chip"),"aria-controls":this.id,selected:categories[category],accessibilityLabel:category,onClick:()=>{this.toggleCategory(category)},children:category})))]}),(0,jsx_runtime.jsx)(AriaLiveDemo,{id:this.id,className:getClassName("bpk-storybook-aria-live-demo__aria-live"),preamble:(0,jsx_runtime.jsxs)("p",{children:["This region has ",(0,jsx_runtime.jsxs)(bpk_component_code.H,{children:['id="',this.id,'"']}),".",(0,jsx_runtime.jsx)("br",{}),"As the above chips are toggled, updates appear here."]}),children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:updates.map((update=>(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("strong",{children:update})})))})})]})}}try{AriaLiveDemo.displayName="AriaLiveDemo",AriaLiveDemo.__docgenInfo={description:"",displayName:"AriaLiveDemo",props:{preamble:{defaultValue:{value:"null"},description:"",name:"preamble",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},style:{defaultValue:{value:"undefined"},description:"",name:"style",required:!1,type:{name:"{} | undefined"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"Boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-aria-live/examples.tsx#AriaLiveDemo"]={docgenInfo:AriaLiveDemo.__docgenInfo,name:"AriaLiveDemo",path:"examples/bpk-component-aria-live/examples.tsx#AriaLiveDemo"})}catch(__react_docgen_typescript_loader_error){}try{ChipsExample.displayName="ChipsExample",ChipsExample.__docgenInfo={description:"",displayName:"ChipsExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-aria-live/examples.tsx#ChipsExample"]={docgenInfo:ChipsExample.__docgenInfo,name:"ChipsExample",path:"examples/bpk-component-aria-live/examples.tsx#ChipsExample"})}catch(__react_docgen_typescript_loader_error){}try{SelectExample.displayName="SelectExample",SelectExample.__docgenInfo={description:"",displayName:"SelectExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-aria-live/examples.tsx#SelectExample"]={docgenInfo:SelectExample.__docgenInfo,name:"SelectExample",path:"examples/bpk-component-aria-live/examples.tsx#SelectExample"})}catch(__react_docgen_typescript_loader_error){}},"./examples/bpk-component-banner-alert/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DocsDefault:()=>DocsDefault,Error:()=>Error,Neutral:()=>Neutral,Primary:()=>Primary,Success:()=>Success,SuccessAnimateOnEnter:()=>SuccessAnimateOnEnter,SuccessAutomaticallyDismissedAfter5Seconds:()=>SuccessAutomaticallyDismissedAfter5Seconds,SuccessDismissable:()=>SuccessDismissable,SuccessDismissableBehaviour:()=>SuccessDismissableBehaviour,SuccessExpandable:()=>SuccessExpandable,SuccessExpandableBehaviour:()=>SuccessExpandableBehaviour,SuccessLongMessage:()=>SuccessLongMessage,SuccessWithCustomIcon:()=>SuccessWithCustomIcon,SuccessWithReactRenderedMessage:()=>SuccessWithReactRenderedMessage,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,Warn:()=>Warn,default:()=>stories});var BpkBannerAlert=__webpack_require__("./packages/bpk-component-banner-alert/src/BpkBannerAlert.tsx"),BpkBannerAlertDismissable=__webpack_require__("./packages/bpk-component-banner-alert/src/BpkBannerAlertDismissable.tsx"),BpkBannerAlertExpandable=__webpack_require__("./packages/bpk-component-banner-alert/src/BpkBannerAlertExpandable.tsx"),react=__webpack_require__("./node_modules/react/index.js"),base_es6=__webpack_require__("./node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_component_banner_alert=__webpack_require__("./packages/bpk-component-banner-alert/index.ts"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),currency=__webpack_require__("./packages/bpk-component-icon/sm/currency.jsx"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),examples=__webpack_require__("./examples/bpk-component-aria-live/examples.tsx"),bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-banner-alert-examples__component":"bpk-banner-alert-examples__component-PKkCD"}),message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",longMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sagittis purus, id\nblandit ipsum. Pellentesque nec diam nec erat condimentum dapibus. Nunc diam augue, egestas id egestas ut, facilisis\nnec mi. Donec et congue odio, nec laoreet est. Integer rhoncus varius arcu, a fringilla libero laoreet at. Mauris\nporta varius ullamcorper. Sed laoreet libero mauris, non pretium lectus accumsan et. Suspendisse vehicula ullamcorper\nsapien, et dapibus mi aliquet non. Pellentesque auctor sagittis lectus vitae rhoncus. Fusce id enim porttitor, mattis\nante in, vestibulum nulla.";class BpkBannerAlertDismissableState extends react.Component{constructor(props){super(props),this.state={dismissed:!1,updates:[]}}render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(bpk_component_banner_alert.sZ,{show:!this.state.dismissed,dismissButtonLabel:"Dismiss",onDismiss:()=>{this.setState((prevState=>({dismissed:!0,updates:[...prevState.updates,"Success alert dismissed"]})))},message:"Neutral alert with dismiss option",...this.props}),this.state.dismissed&&(0,jsx_runtime.jsx)(bpk_component_button.Iy,{className:getClassName("bpk-banner-alert-examples__component"),onClick:()=>{this.setState((prevState=>({dismissed:!1,updates:[...prevState.updates,"Success alert added"]})))},children:"Reset"}),(0,jsx_runtime.jsx)(examples.$J,{visible:!0,className:getClassName("bpk-banner-alert-examples__component"),children:this.state.updates.map((u=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[u,(0,jsx_runtime.jsx)("br",{})]})))})]})}}const BpkBannerAlertExpandableState=(0,bpk_component_banner_alert.E7)(bpk_component_banner_alert._c),NeutralExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Neutral alert",type:bpk_component_banner_alert.F$.NEUTRAL,...props}),PrimaryExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Primary alert",type:bpk_component_banner_alert.F$.PRIMARY,...props}),SuccessExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Success alert",type:bpk_component_banner_alert.F$.SUCCESS,...props}),SuccessLongMessageExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:longMessage,type:bpk_component_banner_alert.F$.SUCCESS,...props}),DismissableExample=()=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.sZ,{dismissButtonLabel:"Dismiss",message:"Dimissable alert",type:bpk_component_banner_alert.F$.SUCCESS,onDismiss:(0,bpk_storybook_utils.XI)("dismissed")}),SuccessExpandableExample=()=>(0,jsx_runtime.jsx)(bpk_component_banner_alert._c,{message:"Success alert",type:bpk_component_banner_alert.F$.SUCCESS,toggleButtonLabel:"View more",children:longMessage}),SuccessAnimateOnEnterExample=()=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{animateOnEnter:!0,message,type:bpk_component_banner_alert.F$.SUCCESS,onDismiss:(0,bpk_storybook_utils.XI)("dismissed")}),SuccessWithReactRenderedMessageExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:(0,jsx_runtime.jsx)("span",{style:{fontWeight:base_es6.Lgp},children:"Successful alert with custom rendered message"}),type:bpk_component_banner_alert.F$.SUCCESS,...props}),WarnExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Warn alert",type:bpk_component_banner_alert.F$.WARN,...props}),ErrorExample=props=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Error alert",type:bpk_component_banner_alert.F$.ERROR,...props}),SuccessDismissableBehaviourExample=()=>(0,jsx_runtime.jsx)(BpkBannerAlertDismissableState,{dismissButtonLabel:"Dismiss",message:"Success alert with dismiss option",type:bpk_component_banner_alert.F$.SUCCESS}),SuccessExpandableBehaviourExample=()=>(0,jsx_runtime.jsx)(BpkBannerAlertExpandableState,{message:"Success alert with more information",type:bpk_component_banner_alert.F$.SUCCESS,toggleButtonLabel:"View more",children:longMessage}),SuccessAutomaticallyDismissedExample=()=>(0,jsx_runtime.jsx)(BpkBannerAlertDismissableState,{hideAfter:5,message,type:bpk_component_banner_alert.F$.SUCCESS,dismissButtonLabel:"Dismiss"}),SuccessCustomIconExample=()=>(0,jsx_runtime.jsx)(bpk_component_banner_alert.Ay,{message:"Success alert with custom icon",type:bpk_component_banner_alert.F$.SUCCESS,icon:currency.default}),DocsDefaultExample=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NeutralExample,{}),(0,jsx_runtime.jsx)(PrimaryExample,{className:getClassName("bpk-banner-alert-examples__component")}),(0,jsx_runtime.jsx)(SuccessExample,{className:getClassName("bpk-banner-alert-examples__component")}),(0,jsx_runtime.jsx)(SuccessWithReactRenderedMessageExample,{className:getClassName("bpk-banner-alert-examples__component")}),(0,jsx_runtime.jsx)(WarnExample,{className:getClassName("bpk-banner-alert-examples__component")}),(0,jsx_runtime.jsx)(ErrorExample,{className:getClassName("bpk-banner-alert-examples__component")})]});NeutralExample.__docgenInfo={description:"",methods:[],displayName:"NeutralExample"},PrimaryExample.__docgenInfo={description:"",methods:[],displayName:"PrimaryExample"},SuccessExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExample"},SuccessLongMessageExample.__docgenInfo={description:"",methods:[],displayName:"SuccessLongMessageExample"},DismissableExample.__docgenInfo={description:"",methods:[],displayName:"DismissableExample"},SuccessExpandableExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExpandableExample"},SuccessAnimateOnEnterExample.__docgenInfo={description:"",methods:[],displayName:"SuccessAnimateOnEnterExample"},SuccessWithReactRenderedMessageExample.__docgenInfo={description:"",methods:[],displayName:"SuccessWithReactRenderedMessageExample"},WarnExample.__docgenInfo={description:"",methods:[],displayName:"WarnExample"},ErrorExample.__docgenInfo={description:"",methods:[],displayName:"ErrorExample"},SuccessDismissableBehaviourExample.__docgenInfo={description:"",methods:[],displayName:"SuccessDismissableBehaviourExample"},SuccessExpandableBehaviourExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExpandableBehaviourExample"},SuccessAutomaticallyDismissedExample.__docgenInfo={description:"",methods:[],displayName:"SuccessAutomaticallyDismissedExample"},SuccessCustomIconExample.__docgenInfo={description:"",methods:[],displayName:"SuccessCustomIconExample"},DocsDefaultExample.__docgenInfo={description:"",methods:[],displayName:"DocsDefaultExample"},NeutralExample.__docgenInfo={description:"",methods:[],displayName:"NeutralExample"},PrimaryExample.__docgenInfo={description:"",methods:[],displayName:"PrimaryExample"},SuccessExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExample"},SuccessLongMessageExample.__docgenInfo={description:"",methods:[],displayName:"SuccessLongMessageExample"},DismissableExample.__docgenInfo={description:"",methods:[],displayName:"DismissableExample"},SuccessExpandableExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExpandableExample"},SuccessAnimateOnEnterExample.__docgenInfo={description:"",methods:[],displayName:"SuccessAnimateOnEnterExample"},SuccessWithReactRenderedMessageExample.__docgenInfo={description:"",methods:[],displayName:"SuccessWithReactRenderedMessageExample"},WarnExample.__docgenInfo={description:"",methods:[],displayName:"WarnExample"},ErrorExample.__docgenInfo={description:"",methods:[],displayName:"ErrorExample"},SuccessDismissableBehaviourExample.__docgenInfo={description:"",methods:[],displayName:"SuccessDismissableBehaviourExample"},SuccessExpandableBehaviourExample.__docgenInfo={description:"",methods:[],displayName:"SuccessExpandableBehaviourExample"},SuccessAutomaticallyDismissedExample.__docgenInfo={description:"",methods:[],displayName:"SuccessAutomaticallyDismissedExample"},SuccessCustomIconExample.__docgenInfo={description:"",methods:[],displayName:"SuccessCustomIconExample"},DocsDefaultExample.__docgenInfo={description:"",methods:[],displayName:"DocsDefaultExample"};const withBannerAlertStateMock=props=>(0,jsx_runtime.jsx)("div",{});try{withBannerAlertStateMock.displayName="withBannerAlertStateMock",withBannerAlertStateMock.__docgenInfo={description:"",displayName:"withBannerAlertStateMock",props:{onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}},hideAfter:{defaultValue:null,description:"",name:"hideAfter",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-banner-alert/stories-utils.tsx#withBannerAlertStateMock"]={docgenInfo:withBannerAlertStateMock.__docgenInfo,name:"withBannerAlertStateMock",path:"examples/bpk-component-banner-alert/stories-utils.tsx#withBannerAlertStateMock"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"bpk-component-banner-alert",component:BpkBannerAlert.A,subcomponents:{BpkBannerAlertDismissable:BpkBannerAlertDismissable.A,BpkBannerAlertExpandable:BpkBannerAlertExpandable.A,withBannerAlertState:withBannerAlertStateMock}},DocsDefault=DocsDefaultExample,Neutral=NeutralExample,Primary=PrimaryExample,Success=SuccessExample,SuccessLongMessage=SuccessLongMessageExample,SuccessDismissable=DismissableExample,SuccessExpandable=SuccessExpandableExample,SuccessAnimateOnEnter=SuccessAnimateOnEnterExample,SuccessWithReactRenderedMessage=SuccessWithReactRenderedMessageExample,Warn=WarnExample,Error=ErrorExample,SuccessDismissableBehaviour=SuccessDismissableBehaviourExample,SuccessExpandableBehaviour=SuccessExpandableBehaviourExample,SuccessAutomaticallyDismissedAfter5Seconds=SuccessAutomaticallyDismissedExample,SuccessWithCustomIcon=SuccessCustomIconExample,VisualTest=DocsDefaultExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}},"./packages/bpk-component-code/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>_src_BpkCode__WEBPACK_IMPORTED_MODULE_0__.A,c:()=>_src_BpkCodeBlock__WEBPACK_IMPORTED_MODULE_1__.A});var _src_BpkCode__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-code/src/BpkCode.js"),_src_BpkCodeBlock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-code/src/BpkCodeBlock.js")},"./packages/bpk-component-code/src/BpkCode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkCode});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-code":"bpk-code-uSdga","bpk-code--alternate":"bpk-code--alternate-W2zIC"}),BpkCode=props=>{const{alternate,children,className,...rest}=props,classNames=[getClassName("bpk-code")];return alternate&&classNames.push(getClassName("bpk-code--alternate")),className&&classNames.push(className),(0,jsx_runtime.jsx)("code",{className:classNames.join(" "),...rest,children})};BpkCode.propTypes={children:prop_types_default().node.isRequired,className:prop_types_default().string,alternate:prop_types_default().bool},BpkCode.defaultProps={className:null,alternate:!1},BpkCode.__docgenInfo={description:"",methods:[],displayName:"BpkCode",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},alternate:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkCode=BpkCode;BpkCode.__docgenInfo={description:"",methods:[],displayName:"BpkCode",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},alternate:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-code/src/BpkCodeBlock.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkCodeBlock});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-code--block":"bpk-code--block-e7zly","bpk-code__pre":"bpk-code__pre-awrVa","bpk-code__pre--alternate":"bpk-code__pre--alternate-H7sfL"}),BpkCodeBlock=props=>{const{alternate,children,className,...rest}=props,preClassNames=getClassName("bpk-code__pre",alternate&&"bpk-code__pre--alternate",className),codeClassNames=getClassName("bpk-code","bpk-code--block");return(0,jsx_runtime.jsx)("pre",{className:preClassNames,...rest,children:(0,jsx_runtime.jsx)("code",{className:codeClassNames,children})})};BpkCodeBlock.propTypes={children:prop_types_default().node.isRequired,alternate:prop_types_default().bool,className:prop_types_default().string},BpkCodeBlock.defaultProps={alternate:!1,className:null},BpkCodeBlock.__docgenInfo={description:"",methods:[],displayName:"BpkCodeBlock",props:{alternate:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkCodeBlock=BpkCodeBlock;BpkCodeBlock.__docgenInfo={description:"",methods:[],displayName:"BpkCodeBlock",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},alternate:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-icon/sm/currency.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CurrencyIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 10.5c5.8 0 10.5-2.015 10.5-4.5S17.8 1.5 12 1.5 1.5 3.515 1.5 6s4.701 4.5 10.5 4.5M1.658 12.83a1.5 1.5 0 0 1 2.012-.673l.001.001C4.886 12.766 7.628 13.5 12 13.5s7.114-.734 8.33-1.342a1.5 1.5 0 0 1 1.36 2.674l-.02.01c-1.785.892-5.042 1.658-9.67 1.658s-7.886-.766-9.67-1.658a1.5 1.5 0 0 1-.673-2.012zm2.012 5.328a1.5 1.5 0 0 0-1.36 2.674l.02.01C4.113 21.734 7.371 22.5 12 22.5s7.886-.766 9.67-1.658a1.5 1.5 0 1 0-1.32-2.694l-.02.01c-1.216.608-3.958 1.342-8.33 1.342s-7.114-.734-8.33-1.342"})});CurrencyIcon.__docgenInfo={description:"",methods:[],displayName:"CurrencyIcon"};const __WEBPACK_DEFAULT_EXPORT__=CurrencyIcon;CurrencyIcon.__docgenInfo={description:"",methods:[],displayName:"CurrencyIcon"}}}]);