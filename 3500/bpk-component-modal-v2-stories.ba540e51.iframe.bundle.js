"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[7847],{"./examples/bpk-component-modal-v2/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contrast:()=>Contrast,Default:()=>Default,FullScreenOnDesktop:()=>FullScreenOnDesktop,FullScreenOnDesktopNoTitle:()=>FullScreenOnDesktopNoTitle,LongTitle:()=>LongTitle,MultipleModals:()=>MultipleModals,NoFullScreenOnMobile:()=>NoFullScreenOnMobile,NoFullScreenOnMobileNoTitle:()=>NoFullScreenOnMobileNoTitle,NoHeader:()=>NoHeader,NoPadding:()=>NoPadding,NoPaddingNoTitle:()=>NoPaddingNoTitle,NoTitle:()=>NoTitle,Overflowing:()=>Overflowing,OverflowingNoTitle:()=>OverflowingNoTitle,VisualTestDefault:()=>VisualTestDefault,VisualTestDefaultWithZoom:()=>VisualTestDefaultWithZoom,Wide:()=>Wide,WideNoTitle:()=>WideNoTitle,default:()=>stories});var BpkModal=__webpack_require__("./packages/bpk-component-modal/src/BpkModalV2/BpkModal.tsx"),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_modal=__webpack_require__("./packages/bpk-component-modal/index.ts"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dialog-paragraph":"bpk-dialog-paragraph-YD3oj"}),Paragraph=(0,bpk_react_utils.i8)(bpk_component_text.A,{textStyle:bpk_component_text.r.bodyDefault,tagName:"p",className:getClassName("bpk-modal-paragraph")}),content=[(0,jsx_runtime.jsx)(Paragraph,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas sit amet nisi nec ultrices. In efficitur justo ac tristique ultricies. Mauris luctus felis arcu, a porttitor turpis aliquet faucibus. Aenean nibh nulla, dictum sit amet efficitur cursus, molestie vitae enim. Aenean vel nunc purus. Vestibulum consectetur luctus eros ac bibendum. Donec pretium nunc mi, sed iaculis nibh aliquet in. Integer ut accumsan orci, non hendrerit nunc. Quisque ante enim, convallis lacinia arcu eu, tincidunt dignissim nunc. Nulla facilisi. Curabitur mattis sapien imperdiet, dignissim ligula id, maximus erat. Morbi sed eros vitae augue accumsan dictum sit amet eu lectus. Integer vitae consectetur libero, sed porttitor urna."}),(0,jsx_runtime.jsx)(Paragraph,{children:"In arcu leo, bibendum in vestibulum quis, vulputate sed nisl. Donec sit amet turpis quis metus viverra rutrum id id elit. Duis luctus, mauris ut accumsan vehicula, magna lorem posuere velit, nec laoreet magna ante ut nulla. Vivamus vestibulum bibendum purus quis dictum. In accumsan convallis tempor. Proin porta massa et metus viverra feugiat. Aenean blandit pellentesque nunc, in interdum magna molestie non. Suspendisse pretium lectus et libero fringilla placerat. Aliquam pellentesque odio non maximus egestas. Nam feugiat mi ac neque sodales, in euismod dolor varius."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Aenean tempus tempus lorem in consequat. Quisque nec felis vitae mi commodo ultricies sit amet in lectus. Praesent imperdiet auctor nisl sit amet ultricies. Donec posuere placerat nulla a scelerisque. Nulla sit amet eleifend magna. Ut eu cursus metus, id pulvinar lectus. Proin euismod sed ex vel dignissim. Donec faucibus nec risus eu pellentesque. Cras vulputate varius volutpat. Duis ut nisi nulla. Duis volutpat lectus purus. Aliquam placerat dignissim mauris vitae interdum. Donec venenatis mattis mi eu facilisis. Maecenas pellentesque eros elementum, tincidunt tortor ac, fringilla massa. Cras sed orci nec erat porttitor lacinia vitae sed arcu."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Nunc lobortis arcu eget tellus tincidunt commodo. Phasellus ac tortor turpis. Cras ac quam non metus iaculis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquam consectetur nisl at fermentum. Phasellus nisi arcu, fermentum ut malesuada eu, ultrices nec enim. Donec eleifend eros mauris, eu rutrum tellus suscipit ac. Pellentesque finibus mollis arcu, non tempor lorem gravida at. Nam laoreet neque quis gravida blandit. Mauris pharetra urna hendrerit pretium auctor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis felis non lectus egestas pretium id sed erat. Aliquam dapibus erat sit amet facilisis luctus."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Vestibulum convallis ut nulla in iaculis. Aliquam erat volutpat. Nullam non semper sem. Ut gravida est eu nisi condimentum, lobortis gravida ipsum tincidunt. Duis lacinia tincidunt suscipit. Maecenas tincidunt quam ipsum, non sodales ante placerat in. Suspendisse malesuada auctor erat, vel pulvinar erat dignissim vitae."})],ModalContainer=props=>{const[isOpen,setOpen]=(0,react.useState)(props.initiallyOpen||!1);return(0,jsx_runtime.jsxs)("div",{id:"modal-container",children:[(0,jsx_runtime.jsx)("div",{id:"pagewrap",children:(0,jsx_runtime.jsx)(bpk_component_button.Q1,{onClick:()=>setOpen(!0),children:"Open modal"})}),(0,jsx_runtime.jsx)(bpk_component_modal.DL,{id:"bpk-modal",ariaLabelledby:"bpk-modal-label-my-dialog",closeLabel:"Close modal",onClose:()=>setOpen(!1),isOpen,...props,children:props.children})]})},DefaultExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a default modal using the HTML dialog element. You can put anything you want in here."})}),ContrastExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",modalStyle:bpk_component_modal.LG.surfaceContrast,initiallyOpen,children:"This is a contrast modal. You can put anything you want in here."}),LongTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"We have to remember what's important in life: friends, waffles, and work. Or waffles, friends, work. But work has to come third.",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a default modal using the HTML dialog element. You can put anything you want in here."})}),HeaderNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"This is a modal using the HTML dialog element without a header. You can put anything you want in here."})}),OverflowingExample=initiallyOpen=>(0,jsx_runtime.jsxs)(ModalContainer,{title:"Modal Title",initiallyOpen,children:[" ",(0,jsx_runtime.jsx)(Paragraph,{children:react.Children.toArray(content)})]}),OverflowingNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:react.Children.toArray(content)})}),WideExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",wide:!0,initiallyOpen,children:"This is a wide modal. You can put anything you want in here."}),WideNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{wide:!0,initiallyOpen,children:"This is a wide modal. You can put anything you want in here."}),NoPaddingExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",padded:!0,initiallyOpen,children:"This is a default modal. You can put anything you want in here."}),NoPaddingNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{padded:!0,initiallyOpen,children:"This is a modal without padding. You can put anything you want in here."}),FullScreenOnDesktopExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",fullScreenOnDesktop:!0,initiallyOpen,children:"This is a full screen modal for desktop. You can put anything you want in here."}),FullScreenOnDesktopNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{fullScreenOnDesktop:!0,initiallyOpen,children:"This is a full screen modal for mobile without title. You can put anything you want in here."}),NoFullScreenOnMobileExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal title",noFullScreenOnMobile:!0,initiallyOpen,children:"This is a no full screen modal for mobile. You can put anything you want in here."}),NoFullScreenOnMobileNoTitleExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{noFullScreenOnMobile:!0,initiallyOpen,children:"This is a no full screen modal for mobile without title. You can put anything you want in here."}),NoHeaderExample=initiallyOpen=>(0,jsx_runtime.jsx)(ModalContainer,{showHeader:!1,initiallyOpen,children:"This is a modal without header. You can put anything you want in here."}),MultipleModalsExample=initiallyOpen=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 1",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 1: This is a default modal using the HTML dialog element. You can put anything you want in here."})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 2",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 2: This is a default modal using the HTML dialog element. You can put anything you want in here."})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ModalContainer,{title:"Modal Title 3",initiallyOpen,children:(0,jsx_runtime.jsx)(Paragraph,{children:"Modal 3: This is a default modal using the HTML dialog element. You can put anything you want in here."})})]});try{DefaultExample.displayName="DefaultExample",DefaultExample.__docgenInfo={description:"",displayName:"DefaultExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#DefaultExample"]={docgenInfo:DefaultExample.__docgenInfo,name:"DefaultExample",path:"examples/bpk-component-modal-v2/examples.tsx#DefaultExample"})}catch(__react_docgen_typescript_loader_error){}try{LongTitleExample.displayName="LongTitleExample",LongTitleExample.__docgenInfo={description:"",displayName:"LongTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#LongTitleExample"]={docgenInfo:LongTitleExample.__docgenInfo,name:"LongTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#LongTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{HeaderNoTitleExample.displayName="HeaderNoTitleExample",HeaderNoTitleExample.__docgenInfo={description:"",displayName:"HeaderNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#HeaderNoTitleExample"]={docgenInfo:HeaderNoTitleExample.__docgenInfo,name:"HeaderNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#HeaderNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{OverflowingExample.displayName="OverflowingExample",OverflowingExample.__docgenInfo={description:"",displayName:"OverflowingExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#OverflowingExample"]={docgenInfo:OverflowingExample.__docgenInfo,name:"OverflowingExample",path:"examples/bpk-component-modal-v2/examples.tsx#OverflowingExample"})}catch(__react_docgen_typescript_loader_error){}try{OverflowingNoTitleExample.displayName="OverflowingNoTitleExample",OverflowingNoTitleExample.__docgenInfo={description:"",displayName:"OverflowingNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#OverflowingNoTitleExample"]={docgenInfo:OverflowingNoTitleExample.__docgenInfo,name:"OverflowingNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#OverflowingNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{WideExample.displayName="WideExample",WideExample.__docgenInfo={description:"",displayName:"WideExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#WideExample"]={docgenInfo:WideExample.__docgenInfo,name:"WideExample",path:"examples/bpk-component-modal-v2/examples.tsx#WideExample"})}catch(__react_docgen_typescript_loader_error){}try{WideNoTitleExample.displayName="WideNoTitleExample",WideNoTitleExample.__docgenInfo={description:"",displayName:"WideNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#WideNoTitleExample"]={docgenInfo:WideNoTitleExample.__docgenInfo,name:"WideNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#WideNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{NoPaddingExample.displayName="NoPaddingExample",NoPaddingExample.__docgenInfo={description:"",displayName:"NoPaddingExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#NoPaddingExample"]={docgenInfo:NoPaddingExample.__docgenInfo,name:"NoPaddingExample",path:"examples/bpk-component-modal-v2/examples.tsx#NoPaddingExample"})}catch(__react_docgen_typescript_loader_error){}try{NoPaddingNoTitleExample.displayName="NoPaddingNoTitleExample",NoPaddingNoTitleExample.__docgenInfo={description:"",displayName:"NoPaddingNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#NoPaddingNoTitleExample"]={docgenInfo:NoPaddingNoTitleExample.__docgenInfo,name:"NoPaddingNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#NoPaddingNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{FullScreenOnDesktopExample.displayName="FullScreenOnDesktopExample",FullScreenOnDesktopExample.__docgenInfo={description:"",displayName:"FullScreenOnDesktopExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#FullScreenOnDesktopExample"]={docgenInfo:FullScreenOnDesktopExample.__docgenInfo,name:"FullScreenOnDesktopExample",path:"examples/bpk-component-modal-v2/examples.tsx#FullScreenOnDesktopExample"})}catch(__react_docgen_typescript_loader_error){}try{FullScreenOnDesktopNoTitleExample.displayName="FullScreenOnDesktopNoTitleExample",FullScreenOnDesktopNoTitleExample.__docgenInfo={description:"",displayName:"FullScreenOnDesktopNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#FullScreenOnDesktopNoTitleExample"]={docgenInfo:FullScreenOnDesktopNoTitleExample.__docgenInfo,name:"FullScreenOnDesktopNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#FullScreenOnDesktopNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{NoFullScreenOnMobileExample.displayName="NoFullScreenOnMobileExample",NoFullScreenOnMobileExample.__docgenInfo={description:"",displayName:"NoFullScreenOnMobileExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#NoFullScreenOnMobileExample"]={docgenInfo:NoFullScreenOnMobileExample.__docgenInfo,name:"NoFullScreenOnMobileExample",path:"examples/bpk-component-modal-v2/examples.tsx#NoFullScreenOnMobileExample"})}catch(__react_docgen_typescript_loader_error){}try{NoFullScreenOnMobileNoTitleExample.displayName="NoFullScreenOnMobileNoTitleExample",NoFullScreenOnMobileNoTitleExample.__docgenInfo={description:"",displayName:"NoFullScreenOnMobileNoTitleExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#NoFullScreenOnMobileNoTitleExample"]={docgenInfo:NoFullScreenOnMobileNoTitleExample.__docgenInfo,name:"NoFullScreenOnMobileNoTitleExample",path:"examples/bpk-component-modal-v2/examples.tsx#NoFullScreenOnMobileNoTitleExample"})}catch(__react_docgen_typescript_loader_error){}try{NoHeaderExample.displayName="NoHeaderExample",NoHeaderExample.__docgenInfo={description:"",displayName:"NoHeaderExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#NoHeaderExample"]={docgenInfo:NoHeaderExample.__docgenInfo,name:"NoHeaderExample",path:"examples/bpk-component-modal-v2/examples.tsx#NoHeaderExample"})}catch(__react_docgen_typescript_loader_error){}try{MultipleModalsExample.displayName="MultipleModalsExample",MultipleModalsExample.__docgenInfo={description:"",displayName:"MultipleModalsExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#MultipleModalsExample"]={docgenInfo:MultipleModalsExample.__docgenInfo,name:"MultipleModalsExample",path:"examples/bpk-component-modal-v2/examples.tsx#MultipleModalsExample"})}catch(__react_docgen_typescript_loader_error){}try{ContrastExample.displayName="ContrastExample",ContrastExample.__docgenInfo={description:"",displayName:"ContrastExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/examples.tsx#ContrastExample"]={docgenInfo:ContrastExample.__docgenInfo,name:"ContrastExample",path:"examples/bpk-component-modal-v2/examples.tsx#ContrastExample"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"bpk-component-modal-v2",component:BpkModal.D},Default=DefaultExample,LongTitle=LongTitleExample,NoTitle=HeaderNoTitleExample,Overflowing=OverflowingExample,OverflowingNoTitle=OverflowingNoTitleExample,Wide=WideExample,WideNoTitle=WideNoTitleExample,NoPadding=NoPaddingExample,NoPaddingNoTitle=NoPaddingNoTitleExample,FullScreenOnDesktop=FullScreenOnDesktopExample,FullScreenOnDesktopNoTitle=FullScreenOnDesktopNoTitleExample,NoFullScreenOnMobile=NoFullScreenOnMobileExample,NoFullScreenOnMobileNoTitle=NoFullScreenOnMobileNoTitleExample,NoHeader=NoHeaderExample,MultipleModals=MultipleModalsExample,Contrast=ContrastExample,VisualWrapper=_ref=>{let{id,zoomEnabled=!1}=_ref;return(0,jsx_runtime.jsx)("div",{style:{height:"640px",width:"100%"},children:(0,jsx_runtime.jsx)("iframe",{title:"Embedded Storybook ".concat(id),src:"/iframe.html?id=".concat(id,"&viewMode=story&args=zoomEnabled:").concat(zoomEnabled),"aria-label":"Embedded Storybook",referrerPolicy:"origin",style:{height:"100%",width:"100%",border:0}})})},VisualTestDefault={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--default"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--contrast"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--long-title"}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--no-title"})]}),parameters:{layout:"fullscreen",percy:{waitForTimeout:1e4}}},VisualTestDefaultWithZoom={render:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--default",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--contrast",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--long-title",zoomEnabled:!0}),(0,jsx_runtime.jsx)(VisualWrapper,{id:"bpk-component-modal-v2--no-title",zoomEnabled:!0})]}),parameters:{layout:"fullscreen",percy:{waitForTimeout:1e4}},args:{zoomEnabled:!0}};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"examples/bpk-component-modal-v2/stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{LongTitle.displayName="LongTitle",LongTitle.__docgenInfo={description:"",displayName:"LongTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#LongTitle"]={docgenInfo:LongTitle.__docgenInfo,name:"LongTitle",path:"examples/bpk-component-modal-v2/stories.tsx#LongTitle"})}catch(__react_docgen_typescript_loader_error){}try{NoTitle.displayName="NoTitle",NoTitle.__docgenInfo={description:"",displayName:"NoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoTitle"]={docgenInfo:NoTitle.__docgenInfo,name:"NoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#NoTitle"})}catch(__react_docgen_typescript_loader_error){}try{Overflowing.displayName="Overflowing",Overflowing.__docgenInfo={description:"",displayName:"Overflowing",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#Overflowing"]={docgenInfo:Overflowing.__docgenInfo,name:"Overflowing",path:"examples/bpk-component-modal-v2/stories.tsx#Overflowing"})}catch(__react_docgen_typescript_loader_error){}try{OverflowingNoTitle.displayName="OverflowingNoTitle",OverflowingNoTitle.__docgenInfo={description:"",displayName:"OverflowingNoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#OverflowingNoTitle"]={docgenInfo:OverflowingNoTitle.__docgenInfo,name:"OverflowingNoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#OverflowingNoTitle"})}catch(__react_docgen_typescript_loader_error){}try{Wide.displayName="Wide",Wide.__docgenInfo={description:"",displayName:"Wide",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#Wide"]={docgenInfo:Wide.__docgenInfo,name:"Wide",path:"examples/bpk-component-modal-v2/stories.tsx#Wide"})}catch(__react_docgen_typescript_loader_error){}try{WideNoTitle.displayName="WideNoTitle",WideNoTitle.__docgenInfo={description:"",displayName:"WideNoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#WideNoTitle"]={docgenInfo:WideNoTitle.__docgenInfo,name:"WideNoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#WideNoTitle"})}catch(__react_docgen_typescript_loader_error){}try{NoPadding.displayName="NoPadding",NoPadding.__docgenInfo={description:"",displayName:"NoPadding",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoPadding"]={docgenInfo:NoPadding.__docgenInfo,name:"NoPadding",path:"examples/bpk-component-modal-v2/stories.tsx#NoPadding"})}catch(__react_docgen_typescript_loader_error){}try{NoPaddingNoTitle.displayName="NoPaddingNoTitle",NoPaddingNoTitle.__docgenInfo={description:"",displayName:"NoPaddingNoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoPaddingNoTitle"]={docgenInfo:NoPaddingNoTitle.__docgenInfo,name:"NoPaddingNoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#NoPaddingNoTitle"})}catch(__react_docgen_typescript_loader_error){}try{FullScreenOnDesktop.displayName="FullScreenOnDesktop",FullScreenOnDesktop.__docgenInfo={description:"",displayName:"FullScreenOnDesktop",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#FullScreenOnDesktop"]={docgenInfo:FullScreenOnDesktop.__docgenInfo,name:"FullScreenOnDesktop",path:"examples/bpk-component-modal-v2/stories.tsx#FullScreenOnDesktop"})}catch(__react_docgen_typescript_loader_error){}try{FullScreenOnDesktopNoTitle.displayName="FullScreenOnDesktopNoTitle",FullScreenOnDesktopNoTitle.__docgenInfo={description:"",displayName:"FullScreenOnDesktopNoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#FullScreenOnDesktopNoTitle"]={docgenInfo:FullScreenOnDesktopNoTitle.__docgenInfo,name:"FullScreenOnDesktopNoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#FullScreenOnDesktopNoTitle"})}catch(__react_docgen_typescript_loader_error){}try{NoFullScreenOnMobile.displayName="NoFullScreenOnMobile",NoFullScreenOnMobile.__docgenInfo={description:"",displayName:"NoFullScreenOnMobile",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoFullScreenOnMobile"]={docgenInfo:NoFullScreenOnMobile.__docgenInfo,name:"NoFullScreenOnMobile",path:"examples/bpk-component-modal-v2/stories.tsx#NoFullScreenOnMobile"})}catch(__react_docgen_typescript_loader_error){}try{NoFullScreenOnMobileNoTitle.displayName="NoFullScreenOnMobileNoTitle",NoFullScreenOnMobileNoTitle.__docgenInfo={description:"",displayName:"NoFullScreenOnMobileNoTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoFullScreenOnMobileNoTitle"]={docgenInfo:NoFullScreenOnMobileNoTitle.__docgenInfo,name:"NoFullScreenOnMobileNoTitle",path:"examples/bpk-component-modal-v2/stories.tsx#NoFullScreenOnMobileNoTitle"})}catch(__react_docgen_typescript_loader_error){}try{NoHeader.displayName="NoHeader",NoHeader.__docgenInfo={description:"",displayName:"NoHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#NoHeader"]={docgenInfo:NoHeader.__docgenInfo,name:"NoHeader",path:"examples/bpk-component-modal-v2/stories.tsx#NoHeader"})}catch(__react_docgen_typescript_loader_error){}try{MultipleModals.displayName="MultipleModals",MultipleModals.__docgenInfo={description:"",displayName:"MultipleModals",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#MultipleModals"]={docgenInfo:MultipleModals.__docgenInfo,name:"MultipleModals",path:"examples/bpk-component-modal-v2/stories.tsx#MultipleModals"})}catch(__react_docgen_typescript_loader_error){}try{Contrast.displayName="Contrast",Contrast.__docgenInfo={description:"",displayName:"Contrast",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/bpk-component-modal-v2/stories.tsx#Contrast"]={docgenInfo:Contrast.__docgenInfo,name:"Contrast",path:"examples/bpk-component-modal-v2/stories.tsx#Contrast"})}catch(__react_docgen_typescript_loader_error){}}}]);