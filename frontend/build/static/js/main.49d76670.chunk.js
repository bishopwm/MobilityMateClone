(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{141:function(e,t,a){},187:function(e,t,a){e.exports=a.p+"static/media/mobilityLogo.91cd18c6.png"},208:function(e,t,a){e.exports=a(351)},213:function(e,t,a){},215:function(e,t,a){},240:function(e,t,a){},243:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(77),s=a.n(l),c=(a(213),a(68)),i=a(13),o=a.n(i),m=a(20),u=a(28),d=a(29),p=a(31),g=a(30),h=a(32),v=a(15),E=(a(215),a(141),a(70)),f=a(190),b=a(54),y=a(71),N=a(186),w=a.n(N),k=a(187),S=a.n(k),x=a(18),O=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={redirect:null},e.mapHandler=function(t){console.log(t.target.dataset.name),e.props.setRegion(t.target.dataset.name),e.setState({redirect:"/region"})},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(v.c,{to:this.state.redirect}):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.a,{fluid:"md"},r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"jumbotron"},r.a.createElement("img",{alt:" ",src:S.a,id:"mobility-logo"}),r.a.createElement("div",{className:"jumbotron-elements-container"},r.a.createElement("div",{className:"mobility-container"},r.a.createElement("p",{className:"about-mobility-mate"},"MobilityMate is a visualization tool based on Google's Mobility Trends report, which details changes in people's movement over time to various public venues such as parks, grocery stores, transit, and more.",r.a.createElement("br",null),r.a.createElement("br",null),"We've visualized the ever-changing data to make trends visible at a glance!"),r.a.createElement(x.a,{variant:"outline-info",size:"sm"},r.a.createElement("a",{id:"google-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/covid19/mobility/"},"Learn more"))," "))),r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{onClick:this.mapHandler})))))))}}]),a}(n.Component);var j,A=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},D=a(69),M=a(191);j="https://fathomless-everglades-73012.herokuapp.com";var G=a.n(M).a.create({withCredentials:!0,baseURL:j}),C={isLoggedIn:function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/is-logged-in");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),returnMobilityData:function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/mobilities",{params:{region:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserGroceryData:function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post("/saved-grocery-data",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserParksData:function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post("/saved-parks-data",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),C.signUp(e.state).then((function(t){e.props.setUser(Object(c.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)})),e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"SignUP"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),a}(n.Component),_=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),C.logIn(e.state).then((function(t){e.props.setUser(Object(c.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)})),e.props.history.push("/")},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"LogIn"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Log In"})))}}]),a}(n.Component),U=(a(240),a(134)),T=a(65),L=a(66),I=function(e){var t=e.user.userGroceryData,a=e.user.userParksData;return void 0!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reports-header"},r.a.createElement("h1",null,"My Snapshots"),r.a.createElement(x.a,{className:"refresh-button",size:"sm",variant:"outline-info",onClick:function(){window.location.reload(!1)}},"Refresh")),r.a.createElement(E.a,{fluid:"md"},r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement("h3",{className:"saved-reports-header"},"Grocery & Pharmacy"),r.a.createElement("hr",{className:"saved-reports-baseline"}),t.map((function(e){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"saved-location"},r.a.createElement("div",{className:"delete-container"},r.a.createElement("h2",null,e.savedLocation),r.a.createElement(x.a,{className:"delete-button",size:"sm",variant:"outline-danger"},"Delete Snapshot")),r.a.createElement("div",{className:"export-container"},r.a.createElement(x.a,{className:"export-button",size:"sm",variant:"outline-info"},"Export Snapshot"))),r.a.createElement("div",{className:"saved-date"},r.a.createElement("h5",null,"Snapshot taken on ",r.a.createElement("strong",null,e.savedDate))),r.a.createElement("div",{className:"daily-stats"},r.a.createElement("h5",null,"Data Range: ",r.a.createElement("em",null,e.dataStartDate)," through ",r.a.createElement("em",null,e.dataEndDate))),r.a.createElement(T.a,{defaultActiveKey:"1"},r.a.createElement(L.a,null,r.a.createElement(L.a.Header,null,r.a.createElement(T.a.Toggle,{as:x.a,variant:"link",eventKey:"0"},"View daily data for Snapshot")),r.a.createElement(T.a.Collapse,{eventKey:"0"},r.a.createElement(L.a.Body,null,r.a.createElement(U.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Day"),r.a.createElement("td",null,"Change from Baseline"))),e.data.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"1"},t),r.a.createElement("td",{colSpan:"1"},e))))})))))))))}))),r.a.createElement("div",null,r.a.createElement("h3",{className:"saved-reports-header"},"Parks & Outdoor Rec"),r.a.createElement("hr",{className:"saved-reports-baseline"}),a.map((function(e){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"saved-location"},r.a.createElement("div",{className:"delete-container"},r.a.createElement("h2",null,e.savedLocation),r.a.createElement(x.a,{className:"delete-button",size:"sm",variant:"outline-danger"},"Delete Snapshot")),r.a.createElement("div",{className:"export-container"},r.a.createElement(x.a,{className:"export-button",size:"sm",variant:"outline-info"},"Export Snapshot"))),r.a.createElement("div",{className:"saved-date"},r.a.createElement("h5",null,"Snapshot taken on ",r.a.createElement("strong",null,e.savedDate))),r.a.createElement("div",{className:"daily-stats"},r.a.createElement("h5",null,"Data Range: ",r.a.createElement("em",null,e.dataStartDate)," through ",r.a.createElement("em",null,e.dataEndDate)),r.a.createElement(T.a,{defaultActiveKey:"1"},r.a.createElement(L.a,null,r.a.createElement(L.a.Header,null,r.a.createElement(T.a.Toggle,{as:x.a,variant:"link",eventKey:"0"},"View daily data for Snapshot")),r.a.createElement(T.a.Collapse,{eventKey:"0"},r.a.createElement(L.a.Body,null,r.a.createElement(U.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Day"),r.a.createElement("td",null,"Change from Baseline"))),e.data.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"1"},t),r.a.createElement("td",{colSpan:"1"},e))))}))))))))))})))))):e.user.email?r.a.createElement("h1",null,'"Loading Data..."'):r.a.createElement("h1",null,r.a.createElement("a",{href:"/log-in"},"Log in")," to view Profile")},R=a(49),F=a(92),z=a(192),H=a(59),W=a(138),B=(a(242),a(362)),K=a(368),V=a(363),J=a(370),Q=(a(243),a(63)),X=a.n(Q),$=a(64),q=a.n($),Y=a(80),Z=a.n(Y),ee=a(194),te=a.n(ee),ae=(a(244),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={mobilityData:[],groceryStats:[],dateStats:[],parkStats:[],transitStats:[],residentialStats:[],workStats:[],shoppingDiningStats:[],chartReference:r.a.createRef(),done:void 0,showAlertGrocery:!1,showAlertParks:!1},e.displayRegionName=function(){console.log(e.state.mobilityData[55])},e.getAverageGrocery=function(){for(var t=Object(H.a)(e.state.groceryStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length;console.log("average",l);var s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.getAverageParks=function(){for(var t=Object(H.a)(e.state.parkStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length;console.log("average",l);var s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.getAverageTransit=function(){for(var t=Object(H.a)(e.state.transitStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length,s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.getAverageResidential=function(){for(var t=Object(H.a)(e.state.residentialStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length,s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.getAverageShoppingDining=function(){for(var t=Object(H.a)(e.state.shoppingDiningStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length,s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.getAverageWork=function(){for(var t=Object(H.a)(e.state.workStats),a=0,n=0;n<t.length;n++)a+=Number(t[n]);var l=a/t.length,s=Math.round(l);return s<=0?r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"down-arrow",src:X.a}),r.a.createElement("span",{id:"trend-percentage-negative"},"  ",s," %")):r.a.createElement("div",{className:"places-grocery-content"},r.a.createElement("img",{alt:" ",id:"up-arrow",src:q.a}),r.a.createElement("span",{id:"trend-percentage-positive"},"  +",s," %"))},e.showGraphGroceryPharmacy=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.groceryStats[a]),label:"".concat(Number(e.state.groceryStats[a]))});return r.a.createElement("div",{className:"grocery"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.showGraphParks=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.parkStats[a]),label:"".concat(Number(e.state.parkStats[a]))});return r.a.createElement("div",{className:"parks"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.showGraphTransit=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.transitStats[a]),label:"".concat(Number(e.state.transitStats[a]))});return r.a.createElement("div",{className:"transit"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.showGraphResidential=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.residentialStats[a]),label:"".concat(Number(e.state.residentialStats[a]))});return r.a.createElement("div",{className:"residential"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.showGraphShoppingDining=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.shoppingDiningStats[a]),label:"".concat(Number(e.state.shoppingDiningStats[a]))});return r.a.createElement("div",{className:"shopping-dining"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.showGraphWork=function(){for(var t=[],a=0;a<31;a++)t.push({x:a,y:Number(e.state.workStats[a]),label:"".concat(Number(e.state.workStats[a]))});return r.a.createElement("div",{className:"work"},r.a.createElement(B.a,{domainPadding:20},r.a.createElement(K.a,null),r.a.createElement(K.a,{dependentAxis:!0,tickFormat:function(e){return"%".concat(e)}}),r.a.createElement(K.a,{dependentAxis:!0}),r.a.createElement(V.a,{style:{data:{fill:"#17a2b8"}},alignment:"start",data:t,x:"x",y:"y",domain:{x:[0,31],y:[-60,20]},labelComponent:r.a.createElement(J.a,null),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"black"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})))},e.saveGroceryData=Object(m.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[e.state.groceryStats,e.state.regionName,e.state.dataStart,e.state.dataEnd],t.next=3,C.updateUserGroceryData(a);case 3:n=t.sent,console.log("Updated user with saved grocery data:",n),e.setState({lastUpdatedUserId:n.data,showAlertGrocery:!0});case 6:case"end":return t.stop()}}),t)}))),e.saveParksData=Object(m.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[e.state.parkStats,e.state.regionName,e.state.dataStart,e.state.dataEnd],t.next=3,C.updateUserParksData(a);case 3:n=t.sent,console.log("Updated user with saved parks data:",n),e.setState({lastUpdatedUserId:n.data,showAlertParks:!0});case 6:case"end":return t.stop()}}),t)}))),e.closeAlertGrocery=function(){e.setState({showAlertGrocery:!1})},e.closeAlertParks=function(){e.setState({showAlertParks:!1})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a,n,r,l,s,c,i,m,u,d=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.chartReference),e.next=3,C.returnMobilityData(this.props.regionName);case 3:t=e.sent,a=Object(H.a)(t.data.mobilities),n=a.slice(a.length-31,a.length-1),r=n.map((function(e){return parseInt(e.grocery_and_pharmacy_percent_change_from_baseline)})),l=n.map((function(e){return e.date})),s=n.map((function(e){return e.parks_percent_change_from_baseline})),c=n.map((function(e){return e.transit_stations_percent_change_from_baseline})),i=n.map((function(e){return e.residential_percent_change_from_baseline})),m=n.map((function(e){return e.retail_and_recreation_percent_change_from_baseline})),u=n.map((function(e){return e.workplaces_percent_change_from_baseline})),void 0===t.data.mobilities[0]&&(t.data.mobilities[0]="No region selected",t.data.mobilities[55]="2020-04-15",t.data.mobilities[84]="2020-05-15"),this.setState({mobilityData:t.data.mobilities,regionName:t.data.mobilities[0].sub_region_1,dataStart:t.data.mobilities[55].date,dataEnd:t.data.mobilities[84].date,dateStats:l,groceryStats:r,parkStats:s,transitStats:c,residentialStats:i,shoppingDiningStats:m,workStats:u}),setTimeout((function(){d.setState({done:!0})}),2e3);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("Mobility Stats from database (Grocery, Transit, Etc.): ",this.state),this.state.regionName?r.a.createElement("div",null,r.a.createElement("div",{className:"mobility-hero"},r.a.createElement("div",{className:"mobility-title-container"},r.a.createElement("h1",{className:"mobility-title"},this.state.regionName," Mobility Trends")),r.a.createElement("div",{className:"image-preload1"}),r.a.createElement("div",{className:"image-preload2"})),r.a.createElement("div",null,this.state.done?r.a.createElement(E.a,{fluid:"md"},r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"places-trends-container"},r.a.createElement("div",{className:"places-grocery"},r.a.createElement("div",{className:"places-grocery-header"},r.a.createElement("h2",{className:"places-grocery-title"},"Grocery ",r.a.createElement("br",null),"& Pharmacy")),r.a.createElement("div",{className:"places-grocery-content"},this.getAverageGrocery(),r.a.createElement("div",{className:"places-grocery-average"},r.a.createElement("img",{alt:" ",src:Z.a,id:"small-calendar-icon"}),r.a.createElement("div",{className:"average-description"},"30 Day Average, based on the latest available month provided by the ",r.a.createElement("a",{href:"https://www.google.com/covid19/mobility/"},"Google Mobility Trends")," report.")),r.a.createElement("div",{className:"graph-container"},r.a.createElement(W.a,{className:"save-alert",show:this.state.showAlertGrocery,dismissible:!0,variant:"success",onClick:this.closeAlertGrocery},"Saved! ",r.a.createElement(h.Link,{to:"/profile"},"View All Saved Snapshots")),r.a.createElement("hr",{className:"content-divider"}),r.a.createElement("div",{className:"sub-header-save-container"},r.a.createElement("h4",{className:"trends-header"},"Movement Trends for Grocery/Pharmacy"),r.a.createElement("span",{className:"date-span"},this.state.dataStart," through ",this.state.dataEnd),r.a.createElement("br",null),r.a.createElement(x.a,{id:"save-button",size:"sm",variant:"outline-info",onClick:function(){return e.saveGroceryData()}},"Save Snapshot")," "),r.a.createElement("div",{className:"graph-subcontainer"},this.showGraphGroceryPharmacy())))),r.a.createElement("div",{className:"places-parks"},r.a.createElement("div",{className:"places-parks-header"},r.a.createElement("h2",{className:"places-parks-title"},"Parks ",r.a.createElement("br",null),"& Outdoor Rec.")),r.a.createElement("div",{className:"places-grocery-content"},this.getAverageParks(),r.a.createElement("div",{className:"places-grocery-average"},r.a.createElement("img",{alt:" ",src:Z.a,id:"small-calendar-icon"}),r.a.createElement("div",{className:"average-description"},"30 Day Average, based on the latest available month provided by the ",r.a.createElement("a",{href:"https://www.google.com/covid19/mobility/"},"Google Mobility Trends")," report.")),r.a.createElement("div",{className:"graph-container"},r.a.createElement(W.a,{className:"save-alert",show:this.state.showAlertParks,dismissible:!0,variant:"success",onClick:this.closeAlertParks},"Saved! ",r.a.createElement(h.Link,{to:"/profile"},"View All Saved Snapshots")),r.a.createElement("hr",{className:"content-divider"}),r.a.createElement("div",{className:"sub-header-save-container"},r.a.createElement("h4",{className:"trends-header"},"Movement Trends for Parks/Outdoors"),r.a.createElement("span",{className:"date-span"},this.state.dataStart," through ",this.state.dataEnd),r.a.createElement("br",null),r.a.createElement(x.a,{id:"save-button",size:"sm",variant:"outline-info",onClick:function(){return e.saveParksData()}},"Save Snapshot")," "),r.a.createElement("div",{className:"graph-subcontainer"},r.a.createElement("br",null),this.showGraphParks()))))),r.a.createElement("div",{className:"places-shopping-dining"},r.a.createElement("div",{className:"places-shopping-dining-header"},r.a.createElement("h2",{className:"places-shopping-dining-title"},"Shopping ",r.a.createElement("br",null),"& Dining")),r.a.createElement("div",{className:"places-grocery-content"},this.getAverageShoppingDining(),r.a.createElement("div",{className:"places-grocery-average"},r.a.createElement("img",{alt:" ",src:Z.a,id:"small-calendar-icon"}),r.a.createElement("div",{className:"average-description"},"30 Day Average, based on the latest available month provided by the ",r.a.createElement("a",{href:"https://www.google.com/covid19/mobility/"},"Google Mobility Trends")," report.")),r.a.createElement("div",{className:"graph-container"},r.a.createElement("hr",{className:"content-divider"}),r.a.createElement("div",{className:"sub-header-save-container"},r.a.createElement("h4",{className:"trends-header"},"Movement Trends for Shopping/Dining"),r.a.createElement("span",{className:"date-span"},this.state.dataStart," through ",this.state.dataEnd),r.a.createElement("br",null),r.a.createElement(x.a,{id:"save-button",size:"sm",variant:"outline-info"},"Save Snapshot")," "),r.a.createElement("div",{className:"graph-subcontainer"},this.showGraphShoppingDining()))))),r.a.createElement(b.a,null,r.a.createElement("div",{className:"places-trends-container"},r.a.createElement("div",{className:"places-transit"},r.a.createElement("div",{className:"places-transit-header"},r.a.createElement("h2",{className:"places-parks-title"},"Transit ",r.a.createElement("br",null),"& Metro")),r.a.createElement("div",{className:"places-grocery-content"},this.getAverageTransit(),r.a.createElement("div",{className:"places-grocery-average"},r.a.createElement("img",{alt:" ",src:Z.a,id:"small-calendar-icon"}),r.a.createElement("div",{className:"average-description"},"30 Day Average, based on the latest available month provided by the ",r.a.createElement("a",{href:"https://www.google.com/covid19/mobility/"},"Google Mobility Trends")," report.")),r.a.createElement("div",{className:"graph-container"},r.a.createElement("hr",{className:"content-divider"}),r.a.createElement("div",{className:"sub-header-save-container"},r.a.createElement("h4",{className:"trends-header"},"Movement Trends for Transit/Metro"),r.a.createElement("span",{className:"date-span"},this.state.dataStart," through ",this.state.dataEnd),r.a.createElement("br",null),r.a.createElement(x.a,{id:"save-button",size:"sm",variant:"outline-info"},"Save Snapshot")," "),r.a.createElement("div",{className:"graph-subcontainer"},this.showGraphTransit())))),r.a.createElement("div",{className:"places-work"},r.a.createElement("div",{className:"places-work-header"},r.a.createElement("h2",{className:"places-parks-title"},"Work ",r.a.createElement("br",null),"& Industry")),r.a.createElement("div",{className:"places-grocery-content"},this.getAverageWork(),r.a.createElement("div",{className:"places-grocery-average"},r.a.createElement("img",{alt:" ",src:Z.a,id:"small-calendar-icon"}),r.a.createElement("div",{className:"average-description"},"30 Day Average, based on the latest available month provided by the ",r.a.createElement("a",{href:"https://www.google.com/covid19/mobility/"},"Google Mobility Trends")," report.")),r.a.createElement("div",{className:"graph-container"},r.a.createElement("hr",{className:"content-divider"}),r.a.createElement("div",{className:"sub-header-save-container"},r.a.createElement("h4",{className:"trends-header"},"Movement Trends for Work/Industry"),r.a.createElement("span",{className:"date-span"},this.state.dataStart," through ",this.state.dataEnd),r.a.createElement("br",null),r.a.createElement(x.a,{id:"save-button",size:"sm",variant:"outline-info"},"Save Snapshot")," "),r.a.createElement("div",{className:"graph-subcontainer"},this.showGraphWork())))))))):r.a.createElement(te.a,{id:"loading-div",type:"bars",color:"black"}))):r.a.createElement("div",null,r.a.createElement("div",{className:"mobility-hero"},r.a.createElement("div",{className:"mobility-title-container"},r.a.createElement("h1",{className:"mobility-title"},this.state.regionName," Mobility Trends"))),r.a.createElement("div",{className:"failsafe-screen-mobility-trends"},r.a.createElement("h3",null,"Select ",r.a.createElement(h.Link,{to:"/"},"a region")," to see Mobility Trends")))}}]),a}(n.Component)),ne=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,{regionName:this.props.regionName,setUser:this.props.setUser(),user:this.props.user}))}}]),a}(n.Component),re=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.setUser=function(t){return e.setState(t)},e.logOut=Object(m.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.logOut();case 2:a=t.sent,console.log(a),e.setUser({email:null,createdAt:null,updatedAt:null,_id:null});case 5:case"end":return t.stop()}}),t)}))),e.setRegion=function(t){console.log(t),e.setState({regionName:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.isLoggedIn();case 2:t=e.sent,this.setState(Object(c.a)({},t.data));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(h.BrowserRouter,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@300&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossOrigin:"anonymous"}),r.a.createElement(F.a,{bg:"light",expand:"lg"},r.a.createElement(F.a.Brand,{href:"/",id:"mobility-mate"},"MobilityMate"),r.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(F.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"},this.state.email?r.a.createElement(n.Fragment,null,r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Link,{onClick:this.logOut,href:"/#"},"Log Out")),r.a.createElement(R.a.Item,null,r.a.createElement(z.LinkContainer,{to:"/profile"},r.a.createElement(R.a.Link,null,"Profile")))):r.a.createElement(n.Fragment,null,r.a.createElement(R.a.Item,null,r.a.createElement(h.NavLink,{to:"/sign-up",id:"sign-up-link"},"Sign Up")),r.a.createElement(R.a.Item,null,r.a.createElement(h.NavLink,{to:"/log-in",id:"log-in-link"},"Log In")))),this.state.email?r.a.createElement(R.a,{inline:!0},r.a.createElement("div",null,"Logged in as ",r.a.createElement(h.NavLink,{to:"/profile"},this.state.email))):r.a.createElement("div",null))),r.a.createElement(v.g,null,r.a.createElement(v.d,{exact:!0,path:"/",render:function(t){return r.a.createElement(O,Object.assign({},t,{setRegion:e.setRegion}))}}),r.a.createElement(v.d,{exact:!0,path:"/sign-up",render:function(t){return r.a.createElement(P,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(v.d,{exact:!0,path:"/log-in",render:function(t){return r.a.createElement(_,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(v.d,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(I,Object.assign({},t,{user:e.state}))}}),r.a.createElement(v.d,{exact:!0,path:"/region",render:function(t){return r.a.createElement(ne,Object.assign({},t,{user:e.state,regionName:e.state.regionName,setUser:e.setUser}))}}),r.a.createElement(v.d,{exact:!0,path:"/mobility-trends",render:function(t){return r.a.createElement(ae,Object.assign({},t,{user:e.state,setUser:e.setUser}))}}),r.a.createElement(v.d,{component:A})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(350);s.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){e.exports=a.p+"static/media/down_arrow.f0f3b4e0.png"},64:function(e,t,a){e.exports=a.p+"static/media/up_arrow.d002dfc0.png"},80:function(e,t,a){e.exports=a.p+"static/media/small_calendar.0490f612.jpg"}},[[208,1,2]]]);
//# sourceMappingURL=main.49d76670.chunk.js.map