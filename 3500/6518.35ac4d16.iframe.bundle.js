"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[6518],{"./examples/bpk-component-select/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Docked:()=>Docked,DockedWithImages:()=>DockedWithImages,Example:()=>Example,Invalid:()=>Invalid,InvalidWithImage:()=>InvalidWithImage,Large:()=>Large,ManuallyDocked:()=>ManuallyDocked,ManuallyDockedWithImages:()=>ManuallyDockedWithImages,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithImage:()=>WithImage,WithImageLarge:()=>WithImageLarge,default:()=>stories});var BpkSelect=__webpack_require__("./packages/bpk-component-select/src/BpkSelect.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_select=__webpack_require__("./packages/bpk-component-select/index.js"),bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class StatefulBpkSelect extends react.Component{constructor(){super(),_defineProperty(this,"onChange",(value=>{(0,bpk_storybook_utils.XI)("BpkSelect changed. New value: ".concat(value)),this.setState({value})})),this.state={value:"oranges"}}render(){return(0,jsx_runtime.jsxs)(bpk_component_select.A,{id:"destination",name:"destination",value:this.state.value,onChange:event=>{this.onChange(event.target.value)},...this.props,children:[(0,jsx_runtime.jsx)("option",{value:"Karachi",children:"Karachi"}),(0,jsx_runtime.jsx)("option",{value:"Lahore",children:"Lahore"}),(0,jsx_runtime.jsx)("option",{value:"Faisalabad",children:"Faisalabad"}),(0,jsx_runtime.jsx)("option",{value:"Islamabad",disabled:!0,children:"Islamabad"})]})}}const countries=[{key:0,id:"AT",name:"Austria",disabled:!1},{key:1,id:"BR",name:"Brazil",disabled:!1},{key:2,id:"CN",name:"China",disabled:!1},{key:3,id:"DJ",name:"Djibouti",disabled:!1},{key:4,id:"EC",name:"Ecuador",disabled:!1},{key:5,id:"GD",name:"Grenada",disabled:!1},{key:6,id:"HT",name:"Haiti",disabled:!1},{key:7,id:"IT",name:"Italy",disabled:!1},{key:8,id:"US",name:"USA",disabled:!0}];class SelectWithImage extends react.Component{constructor(props){super(props),_defineProperty(this,"getItemByValue",(()=>{const{options}=this.props;return val=>{const items=options.filter((o=>o.id===val));if(!items.length)throw new Error("Item does not exists");return items[0]}})),_defineProperty(this,"getItem",this.getItemByValue()),_defineProperty(this,"handleChange",(e=>{const item=this.getItem(e.target.value);this.setState({selected:item.id})})),_defineProperty(this,"image",(id=>{return(0,jsx_runtime.jsx)("img",{alt:"Flag",src:(countryCode=id,"https://images.skyscnr.com/images/country/flag/header/".concat(countryCode.toLowerCase(),".png"))});var countryCode})),this.state={selected:"IT"}}render(){const{options,...rest}=this.props;return(0,jsx_runtime.jsx)(bpk_component_select.A,{value:this.getItem(this.state.selected).id,...rest,image:this.image(this.getItem(this.state.selected).id),onChange:this.handleChange,children:options.map((o=>(0,jsx_runtime.jsx)("option",{disabled:o.disabled&&"disabled",value:o.id,children:o.name},o.id)))})}}SelectWithImage.propTypes={options:prop_types_default().arrayOf(prop_types_default().object).isRequired};const DefaultExample=()=>(0,jsx_runtime.jsx)(StatefulBpkSelect,{}),InvalidExample=()=>(0,jsx_runtime.jsx)(StatefulBpkSelect,{valid:!1}),InvalidWithImageExample=()=>(0,jsx_runtime.jsx)(SelectWithImage,{valid:!1,id:"countries",name:"countries",options:countries}),DisabledExample=()=>(0,jsx_runtime.jsx)(StatefulBpkSelect,{disabled:!0}),LargeExample=()=>(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0}),DockedExample=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,docked:!0}),(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,docked:!0}),(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,docked:!0}),(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,docked:!0})]}),DockedWithImagesExample=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedFirst:!0,id:"countries",name:"countries",options:countries}),(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedMiddle:!0,id:"countries",name:"countries",options:countries}),(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedMiddle:!0,id:"countries",name:"countries",options:countries}),(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedLast:!0,id:"countries",name:"countries",options:countries})]}),ManuallyDockedExample=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,dockedFirst:!0})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,dockedMiddle:!0})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,dockedMiddle:!0})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(StatefulBpkSelect,{large:!0,dockedLast:!0})})]}),ManuallyDockedWithImagesExample=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedFirst:!0,id:"countries",name:"countries",options:countries})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedMiddle:!0,id:"countries",name:"countries",options:countries})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedMiddle:!0,id:"countries",name:"countries",options:countries})}),(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,dockedLast:!0,id:"countries",name:"countries",options:countries})})]}),WithImageExample=()=>(0,jsx_runtime.jsx)(SelectWithImage,{id:"countries",name:"countries",options:countries}),WithImageLargeExample=()=>(0,jsx_runtime.jsx)(SelectWithImage,{large:!0,id:"countries",name:"countries",options:countries}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DefaultExample,{}),(0,jsx_runtime.jsx)(InvalidExample,{}),(0,jsx_runtime.jsx)(InvalidWithImageExample,{}),(0,jsx_runtime.jsx)(DisabledExample,{}),(0,jsx_runtime.jsx)(LargeExample,{}),(0,jsx_runtime.jsx)(DockedExample,{}),(0,jsx_runtime.jsx)(ManuallyDockedExample,{})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},InvalidExample.__docgenInfo={description:"",methods:[],displayName:"InvalidExample"},InvalidWithImageExample.__docgenInfo={description:"",methods:[],displayName:"InvalidWithImageExample"},DisabledExample.__docgenInfo={description:"",methods:[],displayName:"DisabledExample"},LargeExample.__docgenInfo={description:"",methods:[],displayName:"LargeExample"},DockedExample.__docgenInfo={description:"",methods:[],displayName:"DockedExample"},DockedWithImagesExample.__docgenInfo={description:"",methods:[],displayName:"DockedWithImagesExample"},ManuallyDockedExample.__docgenInfo={description:"",methods:[],displayName:"ManuallyDockedExample"},ManuallyDockedWithImagesExample.__docgenInfo={description:"",methods:[],displayName:"ManuallyDockedWithImagesExample"},WithImageExample.__docgenInfo={description:"",methods:[],displayName:"WithImageExample"},WithImageLargeExample.__docgenInfo={description:"",methods:[],displayName:"WithImageLargeExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},InvalidExample.__docgenInfo={description:"",methods:[],displayName:"InvalidExample"},InvalidWithImageExample.__docgenInfo={description:"",methods:[],displayName:"InvalidWithImageExample"},DisabledExample.__docgenInfo={description:"",methods:[],displayName:"DisabledExample"},LargeExample.__docgenInfo={description:"",methods:[],displayName:"LargeExample"},DockedExample.__docgenInfo={description:"",methods:[],displayName:"DockedExample"},DockedWithImagesExample.__docgenInfo={description:"",methods:[],displayName:"DockedWithImagesExample"},ManuallyDockedExample.__docgenInfo={description:"",methods:[],displayName:"ManuallyDockedExample"},ManuallyDockedWithImagesExample.__docgenInfo={description:"",methods:[],displayName:"ManuallyDockedWithImagesExample"},WithImageExample.__docgenInfo={description:"",methods:[],displayName:"WithImageExample"},WithImageLargeExample.__docgenInfo={description:"",methods:[],displayName:"WithImageLargeExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-select",component:BpkSelect.A},Example=DefaultExample,Invalid=InvalidExample,InvalidWithImage=InvalidWithImageExample,Disabled=DisabledExample,Large=LargeExample,Docked=DockedExample,DockedWithImages=DockedWithImagesExample,ManuallyDocked=ManuallyDockedExample,ManuallyDockedWithImages=ManuallyDockedWithImagesExample,WithImage=WithImageExample,WithImageLarge=WithImageLargeExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}},"./packages/bpk-component-select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-select/src/BpkSelect.js").A},"./packages/bpk-component-select/src/BpkSelect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkSelect});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-select":"bpk-select-joGcJ","bpk-select--large":"bpk-select--large-JUO0S","bpk-select--docked":"bpk-select--docked-rs0od","bpk-select--docked-first":"bpk-select--docked-first-mDHwQ","bpk-select--docked-middle":"bpk-select--docked-middle-_JjI5","bpk-select--docked-last":"bpk-select--docked-last-Za426","bpk-select--invalid":"bpk-select--invalid-KW29S","bpk-select--with-image":"bpk-select--with-image-r5fxW","bpk-select--with-image-large":"bpk-select--with-image-large-vYjLW","bpk-select-wrapper":"bpk-select-wrapper-IXaXq","bpk-select-wrapper__image":"bpk-select-wrapper__image-EvZM7","bpk-select-wrapper__image--large":"bpk-select-wrapper__image--large-DqsHM","bpk-select-wrapper__image--disabled":"bpk-select-wrapper__image--disabled-JXQox"}),BpkSelect=props=>{const{className,disabled,docked,dockedFirst,dockedLast,dockedMiddle,image,large,valid,wrapperClassName,...rest}=props,isInvalid=!1===valid,select=(0,jsx_runtime.jsx)("select",{className:getClassName("bpk-select",large&&"bpk-select--large",docked&&"bpk-select--docked",dockedFirst&&"bpk-select--docked-first",dockedMiddle&&"bpk-select--docked-middle",dockedLast&&"bpk-select--docked-last",isInvalid&&"bpk-select--invalid",image&&"bpk-select--with-image",image&&large&&"bpk-select--with-image-large",className),disabled,"aria-invalid":isInvalid,...rest});return image?(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-select-wrapper",wrapperClassName),children:[(0,react.cloneElement)(image,{"aria-hidden":!0,className:getClassName("bpk-select-wrapper__image",large&&"bpk-select-wrapper__image--large",disabled&&"bpk-select-wrapper__image--disabled",image.props.className)}),select]}):select};BpkSelect.propTypes={id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string,className:prop_types_default().string,disabled:prop_types_default().bool,docked:prop_types_default().bool,dockedFirst:prop_types_default().bool,dockedLast:prop_types_default().bool,dockedMiddle:prop_types_default().bool,image:prop_types_default().node,large:prop_types_default().bool,valid:prop_types_default().bool,wrapperClassName:prop_types_default().string},BpkSelect.defaultProps={className:null,docked:!1,dockedFirst:!1,dockedLast:!1,dockedMiddle:!1,disabled:!1,image:null,large:!1,valid:null,wrapperClassName:null},BpkSelect.__docgenInfo={description:"",methods:[],displayName:"BpkSelect",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},docked:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},dockedFirst:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},dockedLast:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},dockedMiddle:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},disabled:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},image:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0},description:"",type:{name:"node"}},large:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},valid:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},wrapperClassName:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},id:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},value:{required:!1,flowType:{name:"string"},description:'The "value" prop is only relevant if the user is wanting a controlled component\nIn some cases, users may want to create an uncontrolled select as described here: https://beta.reactjs.org/reference/react-dom/components/select\nIn this case value is not required and nor should it be given a default value (as the linter thinks)\nProp types are not expressive enough (without a drastic increase in complexity of writing a custom validator) to encode this relationship. Equally, this wouldn\'t actually solve the linting issue (AFAIK).\nAs a solution, the require-default-props has been disabled for this line.',type:{name:"string"}}}};const src_BpkSelect=BpkSelect;BpkSelect.__docgenInfo={description:"",methods:[],displayName:"BpkSelect",props:{id:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},value:{required:!1,flowType:{name:"string"},description:'The "value" prop is only relevant if the user is wanting a controlled component\nIn some cases, users may want to create an uncontrolled select as described here: https://beta.reactjs.org/reference/react-dom/components/select\nIn this case value is not required and nor should it be given a default value (as the linter thinks)\nProp types are not expressive enough (without a drastic increase in complexity of writing a custom validator) to encode this relationship. Equally, this wouldn\'t actually solve the linting issue (AFAIK).\nAs a solution, the require-default-props has been disabled for this line.',type:{name:"string"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},disabled:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},docked:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},dockedFirst:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},dockedLast:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},dockedMiddle:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},image:{required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"node"}},large:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},valid:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"bool"}},wrapperClassName:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}}}]);