"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[3289],{"./examples/bpk-component-graphic-promotion/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CenterAligned:()=>CenterAligned,DefaultNoBackgroundImage:()=>DefaultNoBackgroundImage,DefaultWithBackgroundImage:()=>DefaultWithBackgroundImage,InvertedPortraitMode:()=>InvertedPortraitMode,Minimalistic:()=>Minimalistic,MinimalisticRightAligned:()=>MinimalisticRightAligned,NonSponsored:()=>NonSponsored,NonSponsoredCenterAligned:()=>NonSponsoredCenterAligned,NonSponsoredRightAligned:()=>NonSponsoredRightAligned,RightAligned:()=>RightAligned,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-card":"bpk-card-itUT9","bpk-no-touch-support":"bpk-no-touch-support-KSxgc","bpk-graphic-promo":"bpk-graphic-promo-hQtM2","bpk-graphic-promo__container":"bpk-graphic-promo__container-Ut65p","bpk-graphic-promo__container--start":"bpk-graphic-promo__container--start-lTUkM","bpk-graphic-promo__container--center":"bpk-graphic-promo__container--center-pkKlK","bpk-graphic-promo__container--end":"bpk-graphic-promo__container--end-EIKlb","bpk-graphic-promo__container--inverted":"bpk-graphic-promo__container--inverted-blOQh","bpk-graphic-promo__tagline":"bpk-graphic-promo__tagline-lVbMU","bpk-graphic-promo__headline":"bpk-graphic-promo__headline-EKk79","bpk-graphic-promo__subheading":"bpk-graphic-promo__subheading-nX5X3","bpk-graphic-promo__promo-content":"bpk-graphic-promo__promo-content-E7DLB","bpk-graphic-promo__sponsor-content":"bpk-graphic-promo__sponsor-content-_SWx9","bpk-graphic-promo__promo-content--start":"bpk-graphic-promo__promo-content--start-Y0DLK","bpk-graphic-promo__sponsor-content--start":"bpk-graphic-promo__sponsor-content--start-Pdlwd","bpk-graphic-promo__promo-content--center":"bpk-graphic-promo__promo-content--center-Uyg6A","bpk-graphic-promo__sponsor-content--center":"bpk-graphic-promo__sponsor-content--center-FMXeF","bpk-graphic-promo__promo-content--end":"bpk-graphic-promo__promo-content--end-uZrri","bpk-graphic-promo__sponsor-content--end":"bpk-graphic-promo__sponsor-content--end-VvLYC","bpk-graphic-promo__sponsor-label":"bpk-graphic-promo__sponsor-label-pGiwm","bpk-graphic-promo__sponsor-logo":"bpk-graphic-promo__sponsor-logo-DkfzS","bpk-graphic-promo__cta":"bpk-graphic-promo__cta-RCVLL"}),ACCESSIBILITY_KEYS={Enter:13,Space:32},TEXT_ALIGN_start="start",TEXT_ALIGN_center="center",TEXT_ALIGN_end="end",constructAriaLabel=_ref=>{let{buttonText,headline,sponsor,subheading,tagline}=_ref;const text=[],addText=value=>value&&text.push(value);return sponsor?(addText(sponsor.label),addText(sponsor.altText)):addText(tagline),addText(headline),addText(subheading),addText(buttonText),text.join(". ")},BpkGraphicPromo=_ref2=>{let{buttonText,className=null,contentId,headline,invertVertically=!1,onClick,sponsor=null,style={},subheading=null,tagline=null,textAlign}=_ref2;const onClickWrapper=event=>{event.stopPropagation(),onClick()},cardClasses=getClassName("bpk-card","bpk-graphic-promo",className),containerClasses=getClassName("bpk-graphic-promo__container","bpk-graphic-promo__container--".concat(textAlign),invertVertically&&"bpk-graphic-promo__container--inverted"),getTextClasses=baseClass=>getClassName(baseClass,"".concat(baseClass,"--").concat(textAlign));return(0,jsx_runtime.jsx)("div",{id:contentId||"",className:cardClasses,style,role:"link","aria-label":constructAriaLabel({buttonText,headline,sponsor,subheading,tagline}),tabIndex:0,onClick:onClickWrapper,onKeyDown:event=>(event=>Object.keys(ACCESSIBILITY_KEYS).includes(event.key)||Object.values(ACCESSIBILITY_KEYS).includes(event.keyCode||event.which))(event)&&onClick(),children:(0,jsx_runtime.jsxs)("div",{id:contentId&&"".concat(contentId,"__content")||"",className:containerClasses,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)("div",{className:getTextClasses("bpk-graphic-promo__sponsor-content"),children:sponsor&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-graphic-promo__sponsor-label"),children:sponsor.label}),(0,jsx_runtime.jsx)("img",{className:getClassName("bpk-graphic-promo__sponsor-logo"),alt:sponsor.altText,src:sponsor.logo})]})}),(0,jsx_runtime.jsxs)("div",{className:getTextClasses("bpk-graphic-promo__promo-content"),children:[!sponsor&&tagline&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-graphic-promo__tagline"),children:tagline}),(0,jsx_runtime.jsx)("h2",{className:getClassName("bpk-graphic-promo__headline"),children:headline}),subheading&&(0,jsx_runtime.jsx)("p",{className:getClassName("bpk-graphic-promo__subheading"),children:subheading}),(0,jsx_runtime.jsx)(bpk_component_button.Q1,{type:bpk_component_button.lP.primaryOnDark,className:getClassName("bpk-graphic-promo__cta"),onClick:onClickWrapper,tabIndex:-1,children:buttonText})]})]})})},src_BpkGraphicPromo=BpkGraphicPromo;try{BpkGraphicPromo.displayName="BpkGraphicPromo",BpkGraphicPromo.__docgenInfo={description:"",displayName:"BpkGraphicPromo",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},contentId:{defaultValue:null,description:"",name:"contentId",required:!1,type:{name:"string | null | undefined"}},tagline:{defaultValue:{value:"null"},description:"",name:"tagline",required:!1,type:{name:"string | null | undefined"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},subheading:{defaultValue:{value:"null"},description:"",name:"subheading",required:!1,type:{name:"string | null | undefined"}},sponsor:{defaultValue:{value:"null"},description:"An object that groups together all the sponsor related properties. This should only be provided if the graphic promo is sponsored, in which case all of the object's properties are required.",name:"sponsor",required:!1,type:{name:"{ label: string; logo: string; altText: string; } | null | undefined"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},invertVertically:{defaultValue:{value:"false"},description:"",name:"invertVertically",required:!1,type:{name:"boolean | undefined"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!0,type:{name:'"start" | "end" | "center"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"{} | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-graphic-promotion/src/BpkGraphicPromo.tsx#BpkGraphicPromo"]={docgenInfo:BpkGraphicPromo.__docgenInfo,name:"BpkGraphicPromo",path:"packages/bpk-component-graphic-promotion/src/BpkGraphicPromo.tsx#BpkGraphicPromo"})}catch(__react_docgen_typescript_loader_error){}const bpk_component_graphic_promotion=src_BpkGraphicPromo,graphicPromoClassName=(0,bpk_react_utils.fD)({"bpk-graphic-promotion-example":"bpk-graphic-promotion-example-D3uKg"})("bpk-graphic-promotion-example"),sponsor={label:"Sponsored",logo:"https://js.skyscnr.com/sttc/bpk-content/skyland-a76916b4.png",altText:"SkyLand"},buttonText="Discover more",onClick=()=>{window.open("https://www.skyscanner.net")},tagline="Travel tips",headline="Three Peaks Challenge",subheading="How to complete the climb in 3 days",style={"--background-image-mobile":"url('https://content.skyscnr.com/m/31ebf33b07194794/original/Hiker-looking-out-over-mountain.jpg?crop=390:844px&quality=90')","--background-image-tablet":"url('https://content.skyscnr.com/m/31ebf33b07194794/original/Hiker-looking-out-over-mountain.jpg?crop=820px:1180px&quality=90')","--background-image-desktop":"url('https://content.skyscnr.com/m/31ebf33b07194794/original/Hiker-looking-out-over-mountain.jpg?crop=2096px:800px&quality=90')"},DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{contentId:"graphic-promo-content",tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,style,textAlign:TEXT_ALIGN_start}),CenterAlignedExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,style,textAlign:TEXT_ALIGN_center}),RightAlignedExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,style,textAlign:TEXT_ALIGN_end}),InvertedPortraitExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,style,textAlign:TEXT_ALIGN_start,invertVertically:!0}),MinimalisticExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{headline,sponsor,buttonText,className:graphicPromoClassName,style,onClick,textAlign:TEXT_ALIGN_start}),MinimalisticRightAlignedExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{headline,subheading,buttonText,className:graphicPromoClassName,style,onClick,textAlign:TEXT_ALIGN_end}),NoStyleExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{headline,sponsor,buttonText,onClick,textAlign:TEXT_ALIGN_start}),NonSponsoredExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,style,onClick,textAlign:TEXT_ALIGN_start}),NonSponsoredCenterAlignedExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,style,onClick,textAlign:TEXT_ALIGN_center}),NonSponsoredRightAlignedExample=()=>(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,style,onClick,textAlign:TEXT_ALIGN_end}),VisualTestExample=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,textAlign:TEXT_ALIGN_start}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,textAlign:TEXT_ALIGN_center}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,textAlign:TEXT_ALIGN_end}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,sponsor,buttonText,onClick,className:graphicPromoClassName,textAlign:TEXT_ALIGN_start,invertVertically:!0}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{headline,sponsor,buttonText,className:graphicPromoClassName,onClick,textAlign:TEXT_ALIGN_start}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{headline,subheading,buttonText,className:graphicPromoClassName,onClick,textAlign:TEXT_ALIGN_end}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,onClick,textAlign:TEXT_ALIGN_start}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,onClick,textAlign:TEXT_ALIGN_center}),(0,jsx_runtime.jsx)(bpk_component_graphic_promotion,{tagline,headline,subheading,buttonText,className:graphicPromoClassName,onClick,textAlign:TEXT_ALIGN_end})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},CenterAlignedExample.__docgenInfo={description:"",methods:[],displayName:"CenterAlignedExample"},RightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"RightAlignedExample"},InvertedPortraitExample.__docgenInfo={description:"",methods:[],displayName:"InvertedPortraitExample"},MinimalisticExample.__docgenInfo={description:"",methods:[],displayName:"MinimalisticExample"},MinimalisticRightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"MinimalisticRightAlignedExample"},NonSponsoredExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredExample"},NonSponsoredCenterAlignedExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredCenterAlignedExample"},NonSponsoredRightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredRightAlignedExample"},NoStyleExample.__docgenInfo={description:"",methods:[],displayName:"NoStyleExample"},VisualTestExample.__docgenInfo={description:"",methods:[],displayName:"VisualTestExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},CenterAlignedExample.__docgenInfo={description:"",methods:[],displayName:"CenterAlignedExample"},RightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"RightAlignedExample"},InvertedPortraitExample.__docgenInfo={description:"",methods:[],displayName:"InvertedPortraitExample"},MinimalisticExample.__docgenInfo={description:"",methods:[],displayName:"MinimalisticExample"},MinimalisticRightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"MinimalisticRightAlignedExample"},NonSponsoredExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredExample"},NonSponsoredCenterAlignedExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredCenterAlignedExample"},NonSponsoredRightAlignedExample.__docgenInfo={description:"",methods:[],displayName:"NonSponsoredRightAlignedExample"},NoStyleExample.__docgenInfo={description:"",methods:[],displayName:"NoStyleExample"},VisualTestExample.__docgenInfo={description:"",methods:[],displayName:"VisualTestExample"};const stories={title:"bpk-component-graphic-promotion",component:src_BpkGraphicPromo},DefaultNoBackgroundImage=NoStyleExample,DefaultWithBackgroundImage=DefaultExample,CenterAligned=CenterAlignedExample,RightAligned=RightAlignedExample,InvertedPortraitMode=InvertedPortraitExample,Minimalistic=MinimalisticExample,MinimalisticRightAligned=MinimalisticRightAlignedExample,NonSponsored=NonSponsoredExample,NonSponsoredCenterAligned=NonSponsoredCenterAlignedExample,NonSponsoredRightAligned=NonSponsoredRightAlignedExample,VisualTest=VisualTestExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}}}]);