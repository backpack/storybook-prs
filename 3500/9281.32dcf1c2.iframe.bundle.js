(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[9281],{"./examples/bpk-component-mobile-scroll-container/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SettingLeadingIndicatorClassNameAndTrailingIndicatorClassName:()=>SettingLeadingIndicatorClassNameAndTrailingIndicatorClassName,WithVisibleScrollbar:()=>WithVisibleScrollbar,default:()=>stories});var BpkMobileScrollContainer=__webpack_require__("./packages/bpk-component-mobile-scroll-container/src/BpkMobileScrollContainer.js"),bpk_component_mobile_scroll_container=__webpack_require__("./packages/bpk-component-mobile-scroll-container/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-stories-mobile-scroll-container__leading-indicator":"bpk-stories-mobile-scroll-container__leading-indicator-q4cjv","bpk-stories-mobile-scroll-container__trailing-indicator":"bpk-stories-mobile-scroll-container__trailing-indicator-YB3dH","bpk-scroll-block":"bpk-scroll-block-BIfCc","bpk-scroll-block__item":"bpk-scroll-block__item-FyVeV","bpk-scroll-block__item--alternate":"bpk-scroll-block__item--alternate-Jxhzt"}),ScrollExampleBlock=()=>(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-scroll-block"),children:new Array(10).fill().map(((props,index)=>(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-scroll-block__item",index%2==0&&"bpk-scroll-block__item--alternate"),children:index},index)))}),DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_mobile_scroll_container.A,{children:(0,jsx_runtime.jsx)(ScrollExampleBlock,{})}),WithVisibleScrollbarExample=()=>(0,jsx_runtime.jsx)(bpk_component_mobile_scroll_container.A,{showScrollbar:!0,children:(0,jsx_runtime.jsx)(ScrollExampleBlock,{})}),SettingLeadingAndTrailingIndicatorClassNameExample=()=>(0,jsx_runtime.jsx)(bpk_component_mobile_scroll_container.A,{leadingIndicatorClassName:getClassName("bpk-stories-mobile-scroll-container__leading-indicator"),trailingIndicatorClassName:getClassName("bpk-stories-mobile-scroll-container__trailing-indicator"),children:(0,jsx_runtime.jsx)(ScrollExampleBlock,{})});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithVisibleScrollbarExample.__docgenInfo={description:"",methods:[],displayName:"WithVisibleScrollbarExample"},SettingLeadingAndTrailingIndicatorClassNameExample.__docgenInfo={description:"",methods:[],displayName:"SettingLeadingAndTrailingIndicatorClassNameExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithVisibleScrollbarExample.__docgenInfo={description:"",methods:[],displayName:"WithVisibleScrollbarExample"},SettingLeadingAndTrailingIndicatorClassNameExample.__docgenInfo={description:"",methods:[],displayName:"SettingLeadingAndTrailingIndicatorClassNameExample"};const stories={title:"bpk-component-mobile-scroll-container",component:BpkMobileScrollContainer.Ay},Default=DefaultExample,WithVisibleScrollbar=WithVisibleScrollbarExample,SettingLeadingIndicatorClassNameAndTrailingIndicatorClassName=SettingLeadingAndTrailingIndicatorClassNameExample},"./packages/bpk-component-mobile-scroll-container/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-mobile-scroll-container/src/BpkMobileScrollContainer.js").Ay},"./packages/bpk-component-mobile-scroll-container/src/BpkMobileScrollContainer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>src_BpkMobileScrollContainer});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),lodash_debounce=__webpack_require__("./packages/node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const getClassName=(0,bpk_react_utils.fD)({"bpk-mobile-scroll-container":"bpk-mobile-scroll-container-oh_NY","bpk-mobile-scroll-container__scroller":"bpk-mobile-scroll-container__scroller-HD8QH","bpk-mobile-scroll-container__showScrollbar":"bpk-mobile-scroll-container__showScrollbar-xg9_V","bpk-mobile-scroll-container__inner":"bpk-mobile-scroll-container__inner-ldGed"}),propTypes={ariaLabel:prop_types_default().string,children:prop_types_default().node.isRequired,scrollerRef:prop_types_default().func,innerContainerTagName:prop_types_default().string,className:prop_types_default().string,leadingIndicatorClassName:prop_types_default().string,trailingIndicatorClassName:prop_types_default().string,style:prop_types_default().object,showScrollbar:prop_types_default().bool};class BpkMobileScrollContainer extends react.Component{constructor(){super(),_defineProperty(this,"onWindowResize",lodash_debounce_default()((()=>{this.setScrollBarAwareHeight(),this.setScrollIndicatorClassName()}),100)),_defineProperty(this,"setScrollIndicatorClassName",(()=>{const classNames=function(scrollerEl){let leadingIndicatorClassName=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,trailingIndicatorClassName=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!scrollerEl)return null;const classNames=[],{offsetWidth,scrollLeft,scrollWidth}=scrollerEl,scrollValue=(0,bpk_react_utils.V8)()?-Math.floor(scrollLeft):Math.ceil(scrollLeft),showTrailingIndicator=scrollValue<scrollWidth-offsetWidth;return scrollValue>0&&leadingIndicatorClassName&&classNames.push(leadingIndicatorClassName),showTrailingIndicator&&trailingIndicatorClassName&&classNames.push(trailingIndicatorClassName),classNames}(this.scrollerEl,this.props.leadingIndicatorClassName,this.props.trailingIndicatorClassName);classNames&&this.setState((()=>({scrollIndicatorClassName:classNames.join(" ")})))})),_defineProperty(this,"setScrollBarAwareHeight",(()=>{if(this.props.showScrollbar)return;const computedHeight=(scrollerEl=this.scrollerEl,innerEl=this.innerEl,scrollerEl&&innerEl?scrollerEl.offsetHeight-innerEl.offsetHeight>0?"".concat(innerEl.offsetHeight/16,"rem"):"auto":null);var scrollerEl,innerEl;computedHeight&&this.setState((()=>({computedHeight})))})),this.state={computedHeight:"auto",scrollIndicatorClassName:null}}componentDidMount(){requestAnimationFrame((()=>{this.setScrollBarAwareHeight(),this.setScrollIndicatorClassName()})),window.addEventListener("resize",this.onWindowResize)}componentWillUnmount(){window.removeEventListener("resize",this.onWindowResize)}render(){const classNames=[getClassName("bpk-mobile-scroll-container")],{ariaLabel,children,className,innerContainerTagName,leadingIndicatorClassName,scrollerRef,showScrollbar,style,trailingIndicatorClassName,...rest}=this.props;className&&classNames.push(className),this.state.scrollIndicatorClassName&&classNames.push(this.state.scrollIndicatorClassName);const scrollerClassNames=getClassName("bpk-mobile-scroll-container__scroller",showScrollbar&&"bpk-mobile-scroll-container__showScrollbar"),InnerContainer=innerContainerTagName;return(0,jsx_runtime.jsx)("div",{...rest,className:classNames.join(" "),style:{...style,height:this.state.computedHeight},children:(0,jsx_runtime.jsx)("div",{ref:el=>{scrollerRef&&scrollerRef(el),this.scrollerEl=el},onScroll:this.setScrollIndicatorClassName,className:scrollerClassNames,children:(0,jsx_runtime.jsx)(InnerContainer,{"aria-label":ariaLabel,ref:el=>{this.innerEl=el},className:getClassName("bpk-mobile-scroll-container__inner"),children})})})}}BpkMobileScrollContainer.propTypes={...propTypes},BpkMobileScrollContainer.defaultProps={ariaLabel:null,scrollerRef:null,innerContainerTagName:"div",className:null,leadingIndicatorClassName:null,trailingIndicatorClassName:null,style:null,showScrollbar:!1},BpkMobileScrollContainer.__docgenInfo={description:"",methods:[{name:"setScrollIndicatorClassName",docblock:null,modifiers:[],params:[],returns:null},{name:"setScrollBarAwareHeight",docblock:null,modifiers:[],params:[],returns:null}],displayName:"BpkMobileScrollContainer",props:{ariaLabel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},scrollerRef:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"Function",nullable:!0},description:"",type:{name:"func"}},innerContainerTagName:{defaultValue:{value:"'div'",computed:!1},required:!1,flowType:{name:"string"},description:"",type:{name:"string"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},leadingIndicatorClassName:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},trailingIndicatorClassName:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},style:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"Object",nullable:!0},description:"",type:{name:"object"}},showScrollbar:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkMobileScrollContainer=BpkMobileScrollContainer;BpkMobileScrollContainer.__docgenInfo={description:"",methods:[{name:"setScrollIndicatorClassName",docblock:null,modifiers:[],params:[],returns:null},{name:"setScrollBarAwareHeight",docblock:null,modifiers:[],params:[],returns:null}],displayName:"BpkMobileScrollContainer",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},innerContainerTagName:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'div'",computed:!1},type:{name:"string"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},leadingIndicatorClassName:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},trailingIndicatorClassName:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},scrollerRef:{required:!1,flowType:{name:"Function",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"func"}},style:{required:!1,flowType:{name:"Object",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"object"}},showScrollbar:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},ariaLabel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./packages/node_modules/lodash.debounce/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}}}]);