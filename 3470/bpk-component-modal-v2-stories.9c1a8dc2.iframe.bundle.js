"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[7847],{"./examples/bpk-component-modal-v2/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contrast:()=>Contrast,Default:()=>Default,FullScreenOnDesktop:()=>FullScreenOnDesktop,FullScreenOnDesktopNoTitle:()=>FullScreenOnDesktopNoTitle,LongTitle:()=>LongTitle,MultipleModals:()=>MultipleModals,NoFullScreenOnMobile:()=>NoFullScreenOnMobile,NoFullScreenOnMobileNoTitle:()=>NoFullScreenOnMobileNoTitle,NoHeader:()=>NoHeader,NoPadding:()=>NoPadding,NoPaddingNoTitle:()=>NoPaddingNoTitle,NoTitle:()=>NoTitle,Overflowing:()=>Overflowing,OverflowingNoTitle:()=>OverflowingNoTitle,VisualTestDefault:()=>VisualTestDefault,VisualTestDefaultWithZoom:()=>VisualTestDefaultWithZoom,Wide:()=>Wide,WideNoTitle:()=>WideNoTitle,default:()=>stories});var examples_module_namespaceObject={};__webpack_require__.r(examples_module_namespaceObject);var BpkModal=__webpack_require__("./packages/bpk-component-modal/src/BpkModalV2/BpkModal.tsx"),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_modal=__webpack_require__("./packages/bpk-component-modal/index.ts"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)(examples_module_namespaceObject.default),Paragraph=(0,bpk_react_utils.i8)(bpk_component_text.A,{textStyle:bpk_component_text.r.bodyDefault,tagName:"p",className:getClassName("bpk-modal-paragraph")}),content=[(0,jsx_runtime.jsx)(Paragraph,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas sit amet nisi nec ultrices. In efficitur justo ac tristique ultricies. Mauris luctus felis arcu, a porttitor turpis aliquet faucibus. Aenean nibh nulla, dictum sit amet efficitur cursus, molestie vitae enim. Aenean vel nunc purus. Vestibulum consectetur luctus eros ac bibendum. Donec pretium nunc mi, sed iaculis nibh aliquet in. Integer ut accumsan orci, non hendrerit nunc. Quisque ante enim, convallis lacinia arcu eu, tincidunt dignissim nunc. Nulla facilisi. Curabitur mattis sapien imperdiet, dignissim ligula id, maximus erat. Morbi sed eros vitae augue accumsan dictum sit amet eu lectus. Integer vitae consectetur libero, sed porttitor urna."}),(0,jsx_runtime.jsx)(Paragraph,{children:"In arcu leo, bibendum in vestibulum quis, vulputate sed nisl. Donec sit amet turpis quis metus viverra rutrum id id elit. Duis luctus, mauris ut accumsan vehicula, magna lorem posuere velit, nec laoreet magna ante ut nulla. Vivamus vestibulum bibendum purus quis dictum. In accumsan convallis tempor. Proin porta massa et metus viverra feugiat. Aenean blandit pellentesque nunc, in interdum magna molestie non. Suspendisse pretium lectus et libero fringilla placerat. Aliquam pellentesque odio non maximus egestas. Nam feugiat mi ac neque sodales, in euismod dolor varius."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Aenean tempus tempus lorem in consequat. Quisque nec felis vitae mi commodo ultricies sit amet in lectus. Praesent imperdiet auctor nisl sit amet ultricies. Donec posuere placerat nulla a scelerisque. Nulla sit amet eleifend magna. Ut eu cursus metus, id pulvinar lectus. Proin euismod sed ex vel dignissim. Donec faucibus nec risus eu pellentesque. Cras vulputate varius volutpat. Duis ut nisi nulla. Duis volutpat lectus purus. Aliquam placerat dignissim mauris vitae interdum. Donec venenatis mattis mi eu facilisis. Maecenas pellentesque eros elementum, tincidunt tortor ac, fringilla massa. Cras sed orci nec erat porttitor lacinia vitae sed arcu."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Nunc lobortis arcu eget tellus tincidunt commodo. Phasellus ac tortor turpis. Cras ac quam non metus iaculis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquam consectetur nisl at fermentum. Phasellus nisi arcu, fermentum ut malesuada eu, ultrices nec enim. Donec eleifend eros mauris, eu rutrum tellus suscipit ac. Pellentesque finibus mollis arcu, non tempor lorem gravida at. Nam laoreet neque quis gravida blandit. Mauris pharetra urna hendrerit pretium auctor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis felis non lectus egestas pretium id sed erat. Aliquam dapibus erat sit amet facilisis luctus."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Vestibulum convallis ut nulla in iaculis. Aliquam erat volutpat. Nullam non semper sem. Ut gravida est eu nisi condimentum, lobortis gravida ipsum tincidunt. Duis lacinia tincidunt suscipit. Maecenas tincidunt quam ipsum, non sodales ante placerat in. Suspendisse malesuada auctor erat, vel pulvinar erat dignissim vitae."})],ModalContainer=props=>{const[isOpen,setOpen]=(0,react.useState)(props.initiallyOpen||!1);return(0,jsx_runtime.jsxs)("div",{id:"modal-container",children:[(0,jsx_runtime.jsx)("div",{id:"pagewrap",children:(0,jsx_runtime.jsx)(bpk_component_button.Q1,{onClick:()=>setOpen(!0),children:"Open modal"})}),(0,jsx_runtime.jsx)(bpk_component_modal.DL,{id:"bpk-modal",ariaLabelledby:"bpk-modal-label-my-dialog",closeLabel:"Close modal",onClose:()=>setOpen(!1),isOpen,...props,children:props.children})]})},DefaultExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a default modal using the HTML dialog element. You can put anything you want in here."})}),ContrastExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",modalStyle:bpk_component_modal.LG.surfaceContrast,initiallyOpen,children:"This is a contrast modal. You can put anything you want in here."}),LongTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"We have to remember what's important in life: friends, waffles, and work. Or waffles, friends, work. But work has to come third.",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a default modal using the HTML dialog element. You can put anything you want in here."})}),HeaderNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a modal using the HTML dialog element without a header. You can put anything you want in here."})}),OverflowingExample=initiallyOpen=>(0,jsx_runtime.jsxs)(ModalContainer,{title:"Modal Title",initiallyOpen,children:[" ",(0,jsx_runtime.jsx)(Paragraph,{children:react.Children.toArray(content)})]}),OverflowingNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:react.Children.toArray(content)})}),WideExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",wide:!0,initiallyOpen,children:"This is a wide modal. You can put anything you want in here."}),WideNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{wide:!0,initiallyOpen,children:"This is a wide modal. You can put anything you want in here."}),NoPaddingExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",padded:!0,initiallyOpen,children:"This is a default modal. You can put anything you want in here."}),NoPaddingNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{padded:!0,initiallyOpen,children:"This is a modal without padding. You can put anything you want in here."}),FullScreenOnDesktopExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",fullScreenOnDesktop:!0,initiallyOpen,children:"This is a full screen modal for desktop. You can put anything you want in here."}),FullScreenOnDesktopNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{fullScreenOnDesktop:!0,initiallyOpen,children:"This is a full screen modal for mobile without title. You can put anything you want in here."}),NoFullScreenOnMobileExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",noFullScreenOnMobile:!0,initiallyOpen,children:"This is a no full screen modal for mobile. You can put anything you want in here."}),NoFullScreenOnMobileNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{noFullScreenOnMobile:!0,initiallyOpen,children:"This is a no full screen modal for mobile without title. You can put anything you want in here."}),NoHeaderExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{showHeader:!1,initiallyOpen,children:"This is a modal without header. You can put anything you want in here."}),MultipleModalsExample=initiallyOpen=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 1",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 1: This is a default modal using the HTML dialog element. You can put anything you want in here."})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 2",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 2: This is a default modal using the HTML dialog element. You can put anything you want in here."})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 3",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 3: This is a default modal using the HTML dialog element. You can put anything you want in here."})})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},LongTitleExample.__docgenInfo={description:"",methods:[],displayName:"LongTitleExample"},HeaderNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"HeaderNoTitleExample"},OverflowingExample.__docgenInfo={description:"",methods:[],displayName:"OverflowingExample"},OverflowingNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"OverflowingNoTitleExample"},WideExample.__docgenInfo={description:"",methods:[],displayName:"WideExample"},WideNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"WideNoTitleExample"},NoPaddingExample.__docgenInfo={description:"",methods:[],displayName:"NoPaddingExample"},NoPaddingNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"NoPaddingNoTitleExample"},FullScreenOnDesktopExample.__docgenInfo={description:"",methods:[],displayName:"FullScreenOnDesktopExample"},FullScreenOnDesktopNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"FullScreenOnDesktopNoTitleExample"},NoFullScreenOnMobileExample.__docgenInfo={description:"",methods:[],displayName:"NoFullScreenOnMobileExample"},NoFullScreenOnMobileNoTitleExample.__docgenInfo={description:"",methods:[],displayName:"NoFullScreenOnMobileNoTitleExample"},NoHeaderExample.__docgenInfo={description:"",methods:[],displayName:"NoHeaderExample"},MultipleModalsExample.__docgenInfo={description:"",methods:[],displayName:"MultipleModalsExample"},ContrastExample.__docgenInfo={description:"",methods:[],displayName:"ContrastExample"};const stories={title:"bpk-component-modal-v2",component:BpkModal.D},Default=DefaultExample,LongTitle=LongTitleExample,NoTitle=HeaderNoTitleExample,Overflowing=OverflowingExample,OverflowingNoTitle=OverflowingNoTitleExample,Wide=WideExample,WideNoTitle=WideNoTitleExample,NoPadding=NoPaddingExample,NoPaddingNoTitle=NoPaddingNoTitleExample,FullScreenOnDesktop=FullScreenOnDesktopExample,FullScreenOnDesktopNoTitle=FullScreenOnDesktopNoTitleExample,NoFullScreenOnMobile=NoFullScreenOnMobileExample,NoFullScreenOnMobileNoTitle=NoFullScreenOnMobileNoTitleExample,NoHeader=NoHeaderExample,MultipleModals=MultipleModalsExample,Contrast=ContrastExample,VisualWrapper=_ref=>{let{id,zoomEnabled=!1}=_ref;return(0,jsx_runtime.jsx)("div",{style:{height:"640px",width:"100%"},children:(0,jsx_runtime.jsx)("iframe",{title:"Embedded Storybook ".concat(id),src:"/iframe.html?id=".concat(id,"&viewMode=story&args=zoomEnabled:").concat(zoomEnabled),"aria-label":"Embedded Storybook",referrerPolicy:"origin",style:{height:"100%",width:"100%",border:0}})})},VisualTestDefault={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--default"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--contrast"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--long-title"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--no-title"})]}),parameters:{layout:"fullscreen",percy:{waitForTimeout:1e4}}},VisualTestDefaultWithZoom={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--default",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--contrast",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--long-title",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--no-title",zoomEnabled:!0})]}),parameters:{layout:"fullscreen",percy:{waitForTimeout:1e4}},args:{zoomEnabled:!0}}}}]);