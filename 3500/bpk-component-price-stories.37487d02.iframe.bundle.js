"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[2962],{"./examples/bpk-component-price/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,LargeLongPrice:()=>LargeLongPrice,LargeWithLeadingAndTrailingText:()=>LargeWithLeadingAndTrailingText,LargeWithPreviousPrice:()=>LargeWithPreviousPrice,LargeWithPreviousPriceLeadingText:()=>LargeWithPreviousPriceLeadingText,LargeWithTrailingText:()=>LargeWithTrailingText,Small:()=>Small,SmallRight:()=>SmallRight,SmallRightWithLeadingandTrailingText:()=>SmallRightWithLeadingandTrailingText,SmallRightWithPreviousPrice:()=>SmallRightWithPreviousPrice,SmallRightWithTrailingText:()=>SmallRightWithTrailingText,SmallWithLeadingAndTrailingText:()=>SmallWithLeadingAndTrailingText,SmallWithPreviousPrice:()=>SmallWithPreviousPrice,SmallWithPreviousPriceLeadingText:()=>SmallWithPreviousPriceLeadingText,SmallWithTrailingText:()=>SmallWithTrailingText,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");const SIZES={small:"small",large:"large"},ALIGNS={left:"left",right:"right"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-price":"bpk-price-q_aFe","bpk-price--right":"bpk-price--right-IUQRS","bpk-price__leading":"bpk-price__leading-SdcQq","bpk-price__leading--right":"bpk-price__leading--right-QGi1G","bpk-price__previous-price":"bpk-price__previous-price-rKK6b","bpk-price__separator":"bpk-price__separator-H4wRp","bpk-price__column-container":"bpk-price__column-container-Sdzpd","bpk-price__price":"bpk-price__price-EarVn","bpk-price__spacing":"bpk-price__spacing-yLxYP","bpk-price__trailing":"bpk-price__trailing-gM2_E"}),BpkPrice=props=>{const{align,className,leadingClassName,leadingText,previousPrice,price,size,trailingText,...rest}=props,isSmall=size===SIZES.small,isAlignRight=align===ALIGNS.right;return(0,jsx_runtime.jsxs)("div",{className:getClassName("bpk-price",isAlignRight&&"bpk-price--right",className),...rest,children:[(0,jsx_runtime.jsxs)("div",{className:getClassName(previousPrice&&"bpk-price__leading",isAlignRight&&"bpk-price__leading--right",leadingClassName),children:[previousPrice&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-price__previous-price"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:isSmall?bpk_component_text.r.xs:bpk_component_text.r.sm,tagName:"span",children:previousPrice})}),previousPrice&&leadingText&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-price__separator"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:isSmall?bpk_component_text.r.xs:bpk_component_text.r.sm,tagName:"span",children:"𐤟"})}),leadingText&&(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:isSmall?bpk_component_text.r.xs:bpk_component_text.r.sm,tagName:"span",children:leadingText})]}),(0,jsx_runtime.jsxs)("div",{className:getClassName(isAlignRight&&"bpk-price__column-container"),children:[(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-price__price",!isAlignRight&&"bpk-price__spacing"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:isSmall?bpk_component_text.r.heading4:bpk_component_text.r.xxl,tagName:"span",children:price})}),trailingText&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-price__trailing"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{textStyle:isSmall?bpk_component_text.r.xs:bpk_component_text.r.sm,tagName:"span",children:trailingText})})]})]})};BpkPrice.propTypes={price:prop_types_default().string.isRequired,size:prop_types_default().oneOf(Object.keys(SIZES)),align:prop_types_default().oneOf(Object.keys(ALIGNS)),className:prop_types_default().string,leadingText:prop_types_default().string,trailingText:prop_types_default().string,previousPrice:prop_types_default().string,leadingClassName:prop_types_default().string},BpkPrice.defaultProps={size:SIZES.small,align:ALIGNS.left,className:null,leadingText:null,trailingText:null,previousPrice:null,leadingClassName:null},BpkPrice.__docgenInfo={description:"",methods:[],displayName:"BpkPrice",props:{size:{defaultValue:{value:"SIZES.small",computed:!0},required:!1,flowType:{name:"$Values",elements:[{name:"SIZES"}],raw:"$Values<typeof SIZES>"},description:"",type:{name:"enum",computed:!0,value:"Object.keys(SIZES)"}},align:{defaultValue:{value:"ALIGNS.left",computed:!0},required:!1,flowType:{name:"$Values",elements:[{name:"ALIGNS"}],raw:"$Values<typeof ALIGNS>"},description:"",type:{name:"enum",computed:!0,value:"Object.keys(ALIGNS)"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},leadingText:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},trailingText:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},previousPrice:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},leadingClassName:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"**Experimental** This prop is experimental and subject to change.\nUse with caution.",type:{name:"string"}},price:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}}}};const src_BpkPrice=BpkPrice;BpkPrice.__docgenInfo={description:"",methods:[],displayName:"BpkPrice",props:{price:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},size:{required:!1,flowType:{name:"$Values",elements:[{name:"SIZES"}],raw:"$Values<typeof SIZES>"},description:"",defaultValue:{value:"'small'",computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"large"',computed:!1}]}},align:{required:!1,flowType:{name:"$Values",elements:[{name:"ALIGNS"}],raw:"$Values<typeof ALIGNS>"},description:"",defaultValue:{value:"'left'",computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},leadingText:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},leadingClassName:{required:!1,flowType:{name:"string",nullable:!0},description:"**Experimental** This prop is experimental and subject to change.\nUse with caution.",defaultValue:{value:"null",computed:!1},type:{name:"string"}},trailingText:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},previousPrice:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}};const bpk_component_price=src_BpkPrice,SmallExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{price:"£1,830"}),SmallWithTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{price:"£1,830",trailingText:"per day"}),SmallWithLeadingAndTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{leadingText:"from",price:"£1,830",trailingText:"per day"}),SmallWithPreviousPriceExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{previousPrice:"£2,033",price:"£1,830",trailingText:"per day"}),SmallWithPreviousPriceLeadingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{previousPrice:"£2,033",leadingText:"Web only deal",price:"£1,830",trailingText:"per day"}),SmallRightExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{price:"£1,830",align:ALIGNS.right}),SmallRightWithTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{price:"£1,830",trailingText:"per day",align:ALIGNS.right}),SmallRightWithLeadingandTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{leadingText:"from",price:"£1,830",trailingText:"per day",align:ALIGNS.right}),SmallRightWithPreviousPriceExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{previousPrice:"£2,033",leadingText:"Web only deal",price:"£1,830",trailingText:"per day",align:ALIGNS.right}),LargeExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,price:"£1,830"}),LargeWithTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,price:"£1,830",trailingText:"per day"}),LargeWithLeadingAndTrailingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,leadingText:"from",price:"£1,830",trailingText:"per day"}),LargeWithPreviousPriceExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,price:"£1,830",trailingText:"per day",previousPrice:"£2,033"}),LargeWithPreviousPriceLeadingTextExample=()=>(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,leadingText:"App only deal",price:"£1,830",trailingText:"per day",previousPrice:"£2,033"}),LargeLongPriceExample=()=>(0,jsx_runtime.jsxs)("div",{style:{width:184},children:[(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,leadingText:"from",price:"£1,830,123,123",trailingText:"per day"}),(0,jsx_runtime.jsx)(bpk_component_price,{size:SIZES.large,leadingText:"from",price:"ZK 20,309",trailingText:"a night"})]}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(SmallExample,{}),(0,jsx_runtime.jsx)(SmallWithTrailingTextExample,{}),(0,jsx_runtime.jsx)(SmallWithLeadingAndTrailingTextExample,{}),(0,jsx_runtime.jsx)(SmallWithPreviousPriceExample,{}),(0,jsx_runtime.jsx)(SmallWithPreviousPriceLeadingTextExample,{}),(0,jsx_runtime.jsx)(SmallRightExample,{}),(0,jsx_runtime.jsx)(SmallRightWithTrailingTextExample,{}),(0,jsx_runtime.jsx)(SmallRightWithLeadingandTrailingTextExample,{}),(0,jsx_runtime.jsx)(SmallRightWithPreviousPriceExample,{}),(0,jsx_runtime.jsx)(LargeExample,{}),(0,jsx_runtime.jsx)(LargeWithTrailingTextExample,{}),(0,jsx_runtime.jsx)(LargeWithLeadingAndTrailingTextExample,{}),(0,jsx_runtime.jsx)(LargeWithPreviousPriceExample,{}),(0,jsx_runtime.jsx)(LargeWithPreviousPriceLeadingTextExample,{}),(0,jsx_runtime.jsx)(LargeLongPriceExample,{})]});SmallExample.__docgenInfo={description:"",methods:[],displayName:"SmallExample"},SmallWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithTrailingTextExample"},SmallWithLeadingAndTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithLeadingAndTrailingTextExample"},SmallWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithPreviousPriceExample"},SmallWithPreviousPriceLeadingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithPreviousPriceLeadingTextExample"},SmallRightExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightExample"},SmallRightWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithTrailingTextExample"},SmallRightWithLeadingandTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithLeadingandTrailingTextExample"},SmallRightWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithPreviousPriceExample"},LargeExample.__docgenInfo={description:"",methods:[],displayName:"LargeExample"},LargeWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithTrailingTextExample"},LargeWithLeadingAndTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithLeadingAndTrailingTextExample"},LargeWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithPreviousPriceExample"},LargeWithPreviousPriceLeadingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithPreviousPriceLeadingTextExample"},LargeLongPriceExample.__docgenInfo={description:"",methods:[],displayName:"LargeLongPriceExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},SmallExample.__docgenInfo={description:"",methods:[],displayName:"SmallExample"},SmallWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithTrailingTextExample"},SmallWithLeadingAndTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithLeadingAndTrailingTextExample"},SmallWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithPreviousPriceExample"},SmallWithPreviousPriceLeadingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallWithPreviousPriceLeadingTextExample"},SmallRightExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightExample"},SmallRightWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithTrailingTextExample"},SmallRightWithLeadingandTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithLeadingandTrailingTextExample"},SmallRightWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"SmallRightWithPreviousPriceExample"},LargeExample.__docgenInfo={description:"",methods:[],displayName:"LargeExample"},LargeWithTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithTrailingTextExample"},LargeWithLeadingAndTrailingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithLeadingAndTrailingTextExample"},LargeWithPreviousPriceExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithPreviousPriceExample"},LargeWithPreviousPriceLeadingTextExample.__docgenInfo={description:"",methods:[],displayName:"LargeWithPreviousPriceLeadingTextExample"},LargeLongPriceExample.__docgenInfo={description:"",methods:[],displayName:"LargeLongPriceExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-price",component:src_BpkPrice},Small=SmallExample,SmallWithTrailingText=SmallWithTrailingTextExample,SmallWithLeadingAndTrailingText=SmallWithLeadingAndTrailingTextExample,SmallWithPreviousPrice=SmallWithPreviousPriceExample,SmallWithPreviousPriceLeadingText=SmallWithPreviousPriceLeadingTextExample,SmallRight=SmallRightExample,SmallRightWithTrailingText=SmallRightWithTrailingTextExample,SmallRightWithLeadingandTrailingText=SmallRightWithLeadingandTrailingTextExample,SmallRightWithPreviousPrice=SmallRightWithPreviousPriceExample,Large=LargeExample,LargeWithTrailingText=LargeWithTrailingTextExample,LargeWithLeadingAndTrailingText=LargeWithLeadingAndTrailingTextExample,LargeWithPreviousPrice=LargeWithPreviousPriceExample,LargeWithPreviousPriceLeadingText=LargeWithPreviousPriceLeadingTextExample,LargeLongPrice=LargeLongPriceExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}}}]);