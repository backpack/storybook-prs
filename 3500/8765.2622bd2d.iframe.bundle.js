"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8765],{"./examples/bpk-component-nudger/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LowerBounds:()=>LowerBounds,OnDarkNudger:()=>OnDarkNudger,Stateful:()=>Stateful,UpperBounds:()=>UpperBounds,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithLabel:()=>WithLabel,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_icon=__webpack_require__("./packages/bpk-component-icon/index.tsx"),minus=__webpack_require__("./packages/bpk-component-icon/sm/minus.jsx"),plus=__webpack_require__("./packages/bpk-component-icon/sm/plus.jsx"),bpk_component_label=__webpack_require__("./packages/bpk-component-label/index.js"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-nudger":"bpk-nudger-Bn_88","bpk-nudger__input":"bpk-nudger__input-tbvi7","bpk-nudger__input--secondary-on-dark":"bpk-nudger__input--secondary-on-dark-jBpiC","bpk-nudger__input--numeric":"bpk-nudger__input--numeric-Tv6l5","bpk-nudger__container":"bpk-nudger__container-W4yzp","bpk-nudger__label":"bpk-nudger__label-j2LOT","bpk-nudger__label--title-subtitle":"bpk-nudger__label--title-subtitle-cIh_g","bpk-nudger__label--subtitle":"bpk-nudger__label--subtitle-rKcbT"}),compareValues=(a,b)=>a-b,BpkNudger=_ref=>{let{buttonType="secondary",className=null,decreaseButtonLabel,icon,id,increaseButtonLabel,inputClassName,max,min,name,onValueChange,step=1,subtitle,title,value,...rest}=_ref;const minimum=min<0?0:min,containerClassNames=getClassName(title&&"bpk-nudger__container"),inputClassNames=getClassName("bpk-nudger__input","bpk-nudger__input--numeric",inputClassName&&inputClassName,"secondaryOnDark"===buttonType&&"bpk-nudger__input--secondary-on-dark"),nudgerClassNames=getClassName("bpk-nudger",className),maxButtonDisabled=compareValues(value,max)>=0,minButtonDisabled=compareValues(value,minimum)<=0,AlignedMinusIcon=(0,bpk_component_icon.Wd)(minus.default),AlignedPlusIcon=(0,bpk_component_icon.Wd)(plus.default),inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{className:containerClassNames,children:[title&&(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-nudger__label"),children:[(0,jsx_runtime.jsx)(bpk_component_label.A,{htmlFor:id,children:icon}),(0,jsx_runtime.jsxs)("span",{role:"text",className:getClassName("bpk-nudger__label--title-subtitle"),children:[(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:bpk_component_text.r.heading5,children:title}),subtitle&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-nudger__label--subtitle"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{children:subtitle})})]})]}),(0,jsx_runtime.jsxs)("div",{className:nudgerClassNames,children:[(0,jsx_runtime.jsx)(bpk_component_button.Q1,{type:bpk_component_button.lP[buttonType],iconOnly:!0,onClick:()=>{if(Number.isNaN(value))return onValueChange(minimum),void(inputRef.current&&(0,bpk_react_utils.ZW)(inputRef.current,minimum));const newValue=value-step;onValueChange(newValue),inputRef.current&&(0,bpk_react_utils.ZW)(inputRef.current,newValue)},disabled:minButtonDisabled,title:decreaseButtonLabel,"aria-controls":id,children:(0,jsx_runtime.jsx)(AlignedMinusIcon,{})}),(0,jsx_runtime.jsx)("input",{type:"number","aria-live":"polite",defaultValue:value,id,ref:inputRef,name:name||id,step,onInput:event=>{const inputElement=event.target;var element;!inputElement.validity.valid&&Number.isNaN(inputElement.valueAsNumber)&&(onValueChange(value),(0,bpk_react_utils.ZW)(inputElement,value,!1)),(element=inputElement).valueAsNumber<minimum?(onValueChange(minimum),(0,bpk_react_utils.ZW)(element,minimum,!1)):element.valueAsNumber>max&&(onValueChange(max),(0,bpk_react_utils.ZW)(element,max,!1)),element.valueAsNumber>=minimum&&element.valueAsNumber<=max&&onValueChange(element.valueAsNumber)},className:inputClassNames,...rest}),(0,jsx_runtime.jsx)(bpk_component_button.Q1,{type:bpk_component_button.lP[buttonType],iconOnly:!0,onClick:()=>{if(Number.isNaN(value))return onValueChange(max),void(inputRef.current&&(0,bpk_react_utils.ZW)(inputRef.current,max));const newValue=value+step;onValueChange(newValue),inputRef.current&&(0,bpk_react_utils.ZW)(inputRef.current,newValue)},disabled:maxButtonDisabled,title:increaseButtonLabel,"aria-controls":id,children:(0,jsx_runtime.jsx)(AlignedPlusIcon,{})})]})]})},src_BpkNudger=BpkNudger;try{BpkNudger.displayName="BpkNudger",BpkNudger.__docgenInfo={description:"",displayName:"BpkNudger",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(arg0: number) => void"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},increaseButtonLabel:{defaultValue:null,description:"Function that handle the incrementing of the current selected value.",name:"increaseButtonLabel",required:!0,type:{name:"string"}},inputClassName:{defaultValue:null,description:"",name:"inputClassName",required:!1,type:{name:"string | undefined"}},decreaseButtonLabel:{defaultValue:null,description:"This is the label that will be read out when screen reader users tab to the decrease button. Make sure you use a descriptive label",name:"decreaseButtonLabel",required:!0,type:{name:"string"}},buttonType:{defaultValue:{value:"secondary"},description:"",name:"buttonType",required:!1,type:{name:'"secondary" | "secondaryOnDark" | undefined'}},title:{defaultValue:null,description:"Title, subtitle and icon together make up the label for the nudger.\nThis label will be read aloud as a whole by screen readers. They all are optional props, however, if you wish to use a label then you will need to pass a title as the label will not work without it.",name:"title",required:!1,type:{name:"string | undefined"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-nudger/src/BpkNudger.tsx#BpkNudger"]={docgenInfo:BpkNudger.__docgenInfo,name:"BpkNudger",path:"packages/bpk-component-nudger/src/BpkNudger.tsx#BpkNudger"})}catch(__react_docgen_typescript_loader_error){}var base_es6=__webpack_require__("./node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),account=__webpack_require__("./packages/bpk-component-icon/lg/account.jsx");const bpk_component_nudger=src_BpkNudger;var bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const examples_getClassName=(0,bpk_react_utils.fD)({"bpk-nudger-secondary-on-dark":"bpk-nudger-secondary-on-dark-gPFzg","bpk-nudger-configurable":"bpk-nudger-configurable-O0F6S"}),AlignedAccountIcon=(0,bpk_component_icon.c2)(account.default,base_es6.TVE,base_es6.krg);class NudgerContainer extends react.Component{constructor(){super(),_defineProperty(this,"handleChange",(value=>{this.setState({value})})),this.state={value:0}}render(){const{buttonType,id}=this.props,labelClassName=examples_getClassName("secondaryOnDark"===buttonType&&"bpk-nudger-secondary-on-dark");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(bpk_component_label.A,{id:"passenger-label",htmlFor:id,className:labelClassName,children:"Number of passengers"}),(0,jsx_runtime.jsx)(bpk_component_nudger,{"aria-labelledby":"passenger-label",id,min:0,max:10,value:this.state.value,onValueChange:this.handleChange,decreaseButtonLabel:"Remove passenger",increaseButtonLabel:"Add passenger",buttonType})]})}}const DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_nudger,{id:"my-nudger",min:1,max:99,value:3,onValueChange:(0,bpk_storybook_utils.XI)("change"),decreaseButtonLabel:"Decrease",increaseButtonLabel:"Increase"}),WithLabelExample=()=>(0,jsx_runtime.jsx)(bpk_component_nudger,{id:"my-nudger",min:1,max:99,value:3,onValueChange:(0,bpk_storybook_utils.XI)("change"),decreaseButtonLabel:"Decrease",increaseButtonLabel:"Increase",title:"Adults",subtitle:"Aged 16+",icon:(0,jsx_runtime.jsx)(AlignedAccountIcon,{})}),LowerBoundExample=()=>(0,jsx_runtime.jsx)(bpk_component_nudger,{id:"my-nudger",min:3,max:99,value:3,onValueChange:(0,bpk_storybook_utils.XI)("change"),decreaseButtonLabel:"Decrease",increaseButtonLabel:"Increase"}),UpperBoundsExample=()=>(0,jsx_runtime.jsx)(bpk_component_nudger,{id:"my-nudger",min:1,max:99,value:99,onValueChange:(0,bpk_storybook_utils.XI)("change"),decreaseButtonLabel:"Decrease",increaseButtonLabel:"Increase"}),StatefulExample=()=>(0,jsx_runtime.jsx)(NudgerContainer,{id:"default-nudger",buttonType:"secondary"}),OnDarkExample=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{children:(0,jsx_runtime.jsx)(NudgerContainer,{id:"on-dark-nudger",buttonType:"secondaryOnDark"})}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DefaultExample,{}),(0,jsx_runtime.jsx)(WithLabelExample,{}),(0,jsx_runtime.jsx)(OnDarkExample,{})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithLabelExample.__docgenInfo={description:"",methods:[],displayName:"WithLabelExample"},LowerBoundExample.__docgenInfo={description:"",methods:[],displayName:"LowerBoundExample"},UpperBoundsExample.__docgenInfo={description:"",methods:[],displayName:"UpperBoundsExample"},StatefulExample.__docgenInfo={description:"",methods:[],displayName:"StatefulExample"},OnDarkExample.__docgenInfo={description:"",methods:[],displayName:"OnDarkExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithLabelExample.__docgenInfo={description:"",methods:[],displayName:"WithLabelExample"},LowerBoundExample.__docgenInfo={description:"",methods:[],displayName:"LowerBoundExample"},UpperBoundsExample.__docgenInfo={description:"",methods:[],displayName:"UpperBoundsExample"},StatefulExample.__docgenInfo={description:"",methods:[],displayName:"StatefulExample"},OnDarkExample.__docgenInfo={description:"",methods:[],displayName:"OnDarkExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-nudger",component:src_BpkNudger},Default=DefaultExample,WithLabel=WithLabelExample,LowerBounds=LowerBoundExample,UpperBounds=UpperBoundsExample,Stateful=StatefulExample,OnDarkNudger=OnDarkExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}},"./packages/bpk-component-icon/lg/account.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AccountIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1.5rem",height:"1.5rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 12c1.5 0 3-.8 3-2.378V4.6a1.18 1.18 0 0 0-.608-1.102A5.6 5.6 0 0 0 12 3a5.8 5.8 0 0 0-2.428.499A1.13 1.13 0 0 0 9 4.568v5.054C9 11.2 10.5 12 12 12m-1-3h2v.028a1 1 0 0 1-2 0zm7.988 6.6a17.3 17.3 0 0 0-7.016-1.6 16.9 16.9 0 0 0-6.982 1.598A1.77 1.77 0 0 0 4 17.232v.995A2.95 2.95 0 0 0 7.045 21h10.182A2.71 2.71 0 0 0 20 18.227v-.977a1.78 1.78 0 0 0-1.012-1.65"})});AccountIcon.__docgenInfo={description:"",methods:[],displayName:"AccountIcon"};const __WEBPACK_DEFAULT_EXPORT__=AccountIcon;AccountIcon.__docgenInfo={description:"",methods:[],displayName:"AccountIcon"}},"./packages/bpk-component-icon/sm/minus.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MinusIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M1.5 12A1.5 1.5 0 0 1 3 10.5h18a1.5 1.5 0 0 1 0 3H3A1.5 1.5 0 0 1 1.5 12"})});MinusIcon.__docgenInfo={description:"",methods:[],displayName:"MinusIcon"};const __WEBPACK_DEFAULT_EXPORT__=MinusIcon;MinusIcon.__docgenInfo={description:"",methods:[],displayName:"MinusIcon"}},"./packages/bpk-component-icon/sm/plus.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PlusIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 1.5A1.5 1.5 0 0 0 10.5 3v7.5H3a1.5 1.5 0 0 0 0 3h7.5V21a1.5 1.5 0 0 0 3 0v-7.5H21a1.5 1.5 0 0 0 0-3h-7.5V3A1.5 1.5 0 0 0 12 1.5"})});PlusIcon.__docgenInfo={description:"",methods:[],displayName:"PlusIcon"};const __WEBPACK_DEFAULT_EXPORT__=PlusIcon;PlusIcon.__docgenInfo={description:"",methods:[],displayName:"PlusIcon"}},"./packages/bpk-component-label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-label/src/BpkLabel.js").A},"./packages/bpk-component-label/src/BpkLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkLabel});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-label":"bpk-label-ETFyG","bpk-label--white":"bpk-label--white-CIefn","bpk-label--invalid":"bpk-label--invalid-VGSzS","bpk-label--disabled":"bpk-label--disabled-CDRHn","bpk-label--disabled--white":"bpk-label--disabled--white-WjQ8A","bpk-label__asterisk":"bpk-label__asterisk-L_rj2"}),BpkLabel=props=>{const{children,className,disabled,required,valid,white,...rest}=props,classNames=getClassName("bpk-label",white&&"bpk-label--white",!1===valid&&"bpk-label--invalid",disabled&&"bpk-label--disabled",white&&disabled&&"bpk-label--disabled--white",className);return(0,jsx_runtime.jsxs)("label",{className:classNames,...rest,children:[children,!disabled&&required&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-label__asterisk"),children:"*"})]})};BpkLabel.propTypes={children:prop_types_default().node.isRequired,className:prop_types_default().string,disabled:prop_types_default().bool,valid:prop_types_default().bool,required:prop_types_default().bool,white:prop_types_default().bool},BpkLabel.defaultProps={className:null,disabled:!1,valid:null,required:!1,white:!1},BpkLabel.__docgenInfo={description:"",methods:[],displayName:"BpkLabel",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},disabled:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},valid:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},required:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},white:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkLabel=BpkLabel;BpkLabel.__docgenInfo={description:"",methods:[],displayName:"BpkLabel",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},disabled:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},valid:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"bool"}},required:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},white:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}}},"./packages/bpk-component-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c2:()=>withAlignment,Wd:()=>withButtonAlignment,Tr:()=>withLargeButtonAlignment,yk:()=>src_withRtlSupport});var base_es6=__webpack_require__("./packages/node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function withAlignment(Component,objectHeight,subjectHeight){const WithAlignment=props=>{const objectHeightDecimal="".concat(objectHeight).replace("rem",""),subjectHeightDecimal="".concat(subjectHeight).replace("rem",""),marginTopCalculated="".concat(Math.max(0,objectHeightDecimal-subjectHeightDecimal)/2,"rem");return(0,jsx_runtime.jsx)("span",{style:{lineHeight:subjectHeight,display:"inline-block",marginTop:marginTopCalculated,verticalAlign:"top"},children:(0,jsx_runtime.jsx)(Component,{...props})})};return WithAlignment.displayName=(0,bpk_react_utils.GB)(Component,"withAlignment"),WithAlignment}(0,bpk_react_utils.fD)({"bpk-icon-description":"bpk-icon-description-hLj3a"});const src_withRtlSupport=function(displayName){let classNamesToAdd=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return ComposedComponent=>{const ClassNameModifierHOC=props=>{let classNames=[];const{className,...rest}=props;return className&&classNames.push(className),classNames=classNamesToAdd.length?classNames.concat(classNamesToAdd):classNames,(0,jsx_runtime.jsx)(ComposedComponent,{className:classNames.join(" "),...rest})};return ClassNameModifierHOC.displayName=(0,bpk_react_utils.GB)(ComposedComponent,displayName),ClassNameModifierHOC}}("withRtlSupport",[(0,bpk_react_utils.fD)({"bpk-icon--align-to-button":"bpk-icon--align-to-button-fs9XS","bpk-icon--align-to-large-button":"bpk-icon--align-to-large-button-LtCWk","bpk-icon--rtl-support":"bpk-icon--rtl-support-VCp04"})("bpk-icon--rtl-support")]);try{withRtlSupport.displayName="withRtlSupport",withRtlSupport.__docgenInfo={description:"",displayName:"withRtlSupport",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/src/withRtlSupport.tsx#withRtlSupport"]={docgenInfo:withRtlSupport.__docgenInfo,name:"withRtlSupport",path:"packages/bpk-component-icon/src/withRtlSupport.tsx#withRtlSupport"})}catch(__react_docgen_typescript_loader_error){}function withButtonAlignment(WrappedComponent){return withAlignment(WrappedComponent,base_es6.dag,base_es6.Bms)}function withLargeButtonAlignment(WrappedComponent){return withAlignment(WrappedComponent,base_es6.dag,base_es6.krg)}try{withButtonAlignment.displayName="withButtonAlignment",withButtonAlignment.__docgenInfo={description:"",displayName:"withButtonAlignment",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#withButtonAlignment"]={docgenInfo:withButtonAlignment.__docgenInfo,name:"withButtonAlignment",path:"packages/bpk-component-icon/index.tsx#withButtonAlignment"})}catch(__react_docgen_typescript_loader_error){}try{withLargeButtonAlignment.displayName="withLargeButtonAlignment",withLargeButtonAlignment.__docgenInfo={description:"",displayName:"withLargeButtonAlignment",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#withLargeButtonAlignment"]={docgenInfo:withLargeButtonAlignment.__docgenInfo,name:"withLargeButtonAlignment",path:"packages/bpk-component-icon/index.tsx#withLargeButtonAlignment"})}catch(__react_docgen_typescript_loader_error){}try{bpkcomponenticon.displayName="bpkcomponenticon",bpkcomponenticon.__docgenInfo={description:"",displayName:"bpkcomponenticon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#bpkcomponenticon"]={docgenInfo:bpkcomponenticon.__docgenInfo,name:"bpkcomponenticon",path:"packages/bpk-component-icon/index.tsx#bpkcomponenticon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.r});var _src_BpkText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-text/src/BpkText.tsx");const __WEBPACK_DEFAULT_EXPORT__=_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.A},"./packages/bpk-component-text/src/BpkText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>TEXT_STYLES,A:()=>src_BpkText});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-text":"bpk-text-VX_BJ","bpk-text--xs":"bpk-text--xs-EM_Ve","bpk-text--sm":"bpk-text--sm-BR5tk","bpk-text--base":"bpk-text--base-O0oSZ","bpk-text--lg":"bpk-text--lg-PRHvI","bpk-text--xl":"bpk-text--xl-c0rYF","bpk-text--xxl":"bpk-text--xxl-bC9vq","bpk-text--xxxl":"bpk-text--xxxl-dnlhS","bpk-text--xxxxl":"bpk-text--xxxxl-Gvd_r","bpk-text--xxxxxl":"bpk-text--xxxxxl-w6aPA","bpk-text--caption":"bpk-text--caption-RqyVn","bpk-text--footnote":"bpk-text--footnote-EUYmG","bpk-text--label-1":"bpk-text--label-1-CTFrh","bpk-text--label-2":"bpk-text--label-2-fRYy0","bpk-text--label-3":"bpk-text--label-3-V2tTR","bpk-text--body-default":"bpk-text--body-default-GhV1e","bpk-text--body-longform":"bpk-text--body-longform-Q0jPC","bpk-text--subheading":"bpk-text--subheading-hNNLf","bpk-text--heading-1":"bpk-text--heading-1-mLkdL","bpk-text--heading-2":"bpk-text--heading-2-Sdp51","bpk-text--heading-3":"bpk-text--heading-3-h3_Zi","bpk-text--heading-4":"bpk-text--heading-4-kd8Iz","bpk-text--heading-5":"bpk-text--heading-5-SwiTC","bpk-text--hero-1":"bpk-text--hero-1-I_DPa","bpk-text--hero-2":"bpk-text--hero-2-unJDT","bpk-text--hero-3":"bpk-text--hero-3-F3RTj","bpk-text--hero-4":"bpk-text--hero-4-t2pv_","bpk-text--hero-5":"bpk-text--hero-5-i1Q2t","bpk-text--hero-6":"bpk-text--hero-6-AVN54","bpk-text--editorial-1":"bpk-text--editorial-1-DB1G0","bpk-text--editorial-2":"bpk-text--editorial-2-rR4cI","bpk-text--editorial-3":"bpk-text--editorial-3-RetwS"}),TEXT_STYLES={xs:"xs",sm:"sm",base:"base",lg:"lg",xl:"xl",xxl:"xxl",xxxl:"xxxl",xxxxl:"xxxxl",xxxxxl:"xxxxxl",caption:"caption",footnote:"footnote",label1:"label-1",label2:"label-2",label3:"label-3",bodyDefault:"body-default",bodyLongform:"body-longform",subheading:"subheading",heading1:"heading-1",heading2:"heading-2",heading3:"heading-3",heading4:"heading-4",heading5:"heading-5",hero1:"hero-1",hero2:"hero-2",hero3:"hero-3",hero4:"hero-4",hero5:"hero-5",hero6:"hero-6",editorial1:"editorial-1",editorial2:"editorial-2",editorial3:"editorial-3"},BpkText=_ref=>{let{children,className=null,tagName:TagName="span",textStyle=TEXT_STYLES.bodyDefault,...rest}=_ref;const classNames=getClassName("bpk-text","bpk-text--".concat(textStyle),className);return(0,jsx_runtime.jsx)(TagName,{className:classNames,...rest,children})},src_BpkText=BpkText;try{BpkText.displayName="BpkText",BpkText.__docgenInfo={description:"",displayName:"BpkText",props:{textStyle:{defaultValue:{value:"body-default"},description:"",name:"textStyle",required:!1,type:{name:"TextStyle | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"Tag | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-text/src/BpkText.tsx#BpkText"]={docgenInfo:BpkText.__docgenInfo,name:"BpkText",path:"packages/bpk-component-text/src/BpkText.tsx#BpkText"})}catch(__react_docgen_typescript_loader_error){}}}]);