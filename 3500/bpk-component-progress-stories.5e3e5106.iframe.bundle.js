"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[6190],{"./examples/bpk-component-progress/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,Stepped:()=>Stepped,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkProgress=__webpack_require__("./packages/bpk-component-progress/src/BpkProgress.js"),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_progress=__webpack_require__("./packages/bpk-component-progress/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const getClassName=(0,bpk_react_utils.fD)({"bpkdocs-progress-container__flex":"bpkdocs-progress-container__flex-HiujY","bpkdocs-progress-container__flex-grow":"bpkdocs-progress-container__flex-grow-NpC5r"});class ProgressContainer extends react.Component{constructor(){super(),this.state={progress:0}}render(){const{progress}=this.state;return(0,jsx_runtime.jsxs)("div",{className:getClassName("bpkdocs-progress-container__flex"),children:[(0,jsx_runtime.jsx)(bpk_component_button.Ay,{secondary:!0,onClick:()=>this.setState({progress:0}),disabled:0===progress,children:"Reset"})," ",(0,jsx_runtime.jsx)(bpk_component_button.Ay,{onClick:()=>this.setState({progress:progress+50}),disabled:100===progress,children:"Go!"})," ",(0,jsx_runtime.jsx)("div",{className:getClassName("bpkdocs-progress-container__flex-grow"),children:(0,jsx_runtime.jsx)(bpk_component_progress.A,{min:0,max:100,value:progress,...this.props})})]})}}class SteppedProgressContainer extends react.Component{constructor(){super(),_defineProperty(this,"setProgress",(progress=>{progress>=1&&progress<=5&&this.setState({progress})})),this.state={progress:1}}render(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(bpk_component_progress.A,{min:0,max:5,value:this.state.progress,stepped:!0,...this.props}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("div",{className:getClassName("bpkdocs-progress-container__flex"),children:[(0,jsx_runtime.jsx)(bpk_component_button.Ay,{secondary:!0,onClick:()=>this.setProgress(this.state.progress-1),disabled:this.state.progress<=1,children:"Back"}),(0,jsx_runtime.jsx)("span",{children:"Step ".concat(this.state.progress," of 5")}),(0,jsx_runtime.jsx)(bpk_component_button.Ay,{onClick:()=>this.setProgress(this.state.progress+1),disabled:5===this.state.progress,children:"Continue"})]})]})}}const DefaultExample=()=>(0,jsx_runtime.jsx)(ProgressContainer,{}),SmallExample=()=>(0,jsx_runtime.jsx)(ProgressContainer,{small:!0}),SteppedExample=()=>(0,jsx_runtime.jsx)(SteppedProgressContainer,{}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DefaultExample,{}),(0,jsx_runtime.jsx)(SmallExample,{}),(0,jsx_runtime.jsx)(SteppedExample,{})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},SmallExample.__docgenInfo={description:"",methods:[],displayName:"SmallExample"},SteppedExample.__docgenInfo={description:"",methods:[],displayName:"SteppedExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},SmallExample.__docgenInfo={description:"",methods:[],displayName:"SmallExample"},SteppedExample.__docgenInfo={description:"",methods:[],displayName:"SteppedExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-progress",component:BpkProgress.A},Default=DefaultExample,Small=SmallExample,Stepped=SteppedExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}}}]);