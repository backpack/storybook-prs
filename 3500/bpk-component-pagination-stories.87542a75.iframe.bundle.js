"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[2307],{"./examples/bpk-component-pagination/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination2Pages:()=>Pagination2Pages,Pagination5VisiblePages:()=>Pagination5VisiblePages,PaginationDefault:()=>PaginationDefault,PaginationManyPages:()=>PaginationManyPages,PaginationSinglePage:()=>PaginationSinglePage,PaginationVisibleExample:()=>PaginationVisibleExample,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkPagination=__webpack_require__("./packages/bpk-component-pagination/src/BpkPagination.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_pagination=__webpack_require__("./packages/bpk-component-pagination/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class PaginationContainer extends react.Component{constructor(props){super(),this.state={pageIndex:props.selectedPageIndex}}handleChange(pageIndex){this.setState({pageIndex})}render(){const{pageCount,visibleRange}=this.props;return(0,jsx_runtime.jsxs)("div",{children:["Page ",this.state.pageIndex+1,(0,jsx_runtime.jsx)(bpk_component_pagination.A,{pageCount,selectedPageIndex:this.state.pageIndex,onPageChange:pageIndex=>{this.handleChange(pageIndex)},previousLabel:"previous",nextLabel:"next",visibleRange,paginationLabel:"Pagination Navigation",pageLabel:(page,isSelected)=>"Go to page ".concat(page).concat(isSelected?", this is the current page":"",".")})]})}}PaginationContainer.propTypes={selectedPageIndex:prop_types_default().number,pageCount:prop_types_default().number.isRequired,visibleRange:prop_types_default().number},PaginationContainer.defaultProps={visibleRange:3,selectedPageIndex:0};const DefaultPaginationExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:20}),FivePagesPaginationExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:20,visibleRange:5}),LargePagesPaginationExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:2222}),TwoPagesPaginationExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:2}),SinglePaginationExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:1}),VisibleRangeExample=()=>(0,jsx_runtime.jsx)(PaginationContainer,{pageCount:20,visibleRange:5,selectedPageIndex:6});DefaultPaginationExample.__docgenInfo={description:"",methods:[],displayName:"DefaultPaginationExample"},FivePagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"FivePagesPaginationExample"},LargePagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"LargePagesPaginationExample"},TwoPagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"TwoPagesPaginationExample"},SinglePaginationExample.__docgenInfo={description:"",methods:[],displayName:"SinglePaginationExample"},VisibleRangeExample.__docgenInfo={description:"",methods:[],displayName:"VisibleRangeExample"},DefaultPaginationExample.__docgenInfo={description:"",methods:[],displayName:"DefaultPaginationExample"},FivePagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"FivePagesPaginationExample"},LargePagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"LargePagesPaginationExample"},TwoPagesPaginationExample.__docgenInfo={description:"",methods:[],displayName:"TwoPagesPaginationExample"},SinglePaginationExample.__docgenInfo={description:"",methods:[],displayName:"SinglePaginationExample"},VisibleRangeExample.__docgenInfo={description:"",methods:[],displayName:"VisibleRangeExample"};const stories={title:"bpk-component-pagination",component:BpkPagination.A},PaginationDefault=DefaultPaginationExample,Pagination5VisiblePages=FivePagesPaginationExample,PaginationManyPages=LargePagesPaginationExample,Pagination2Pages=TwoPagesPaginationExample,PaginationSinglePage=SinglePaginationExample,PaginationVisibleExample=VisibleRangeExample,VisualTest=DefaultPaginationExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}}}]);