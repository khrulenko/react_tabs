(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),o=n(3),s=n(4),i=n(6),b=n(5),u=(n(12),function(e){var t=e.tabs,n=e.onTabSelected,a=e.selectedTabIndex;return c.a.createElement("div",{className:"tab-list"},t.map((function(e,t){return c.a.createElement("div",null,c.a.createElement("div",{role:"tab",tabIndex:"0",className:"tab-title".concat(a===t?" chosen":""),key:e.title,onClick:function(){return n(t)},onKeyDown:function(){return n(t)}},e.title),a===t&&c.a.createElement("p",{className:"text"},e.content))})))}),d=(n(13),[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(i.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTabIndex:0},e.onTabSelected=function(t){e.setState({selectedTabIndex:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"head-title"},"React tabs:"),c.a.createElement(u,{tabs:d,onTabSelected:this.onTabSelected,selectedTabIndex:this.state.selectedTabIndex}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.dfc39e3c.chunk.js.map