(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{145:function(e,t,a){e.exports=a(268)},164:function(e,t){},166:function(e,t){},198:function(e,t){},199:function(e,t){},260:function(e,t,a){},263:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),m=a(6),s=function(e){return c.a.createElement("div",{id:"header",className:"header"},c.a.createElement("h1",null,e.text))},o=a(22),i=a(9),u=a(76),d=a.n(u);d.a.setAppElement("#root");var p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),u=Object(m.a)(s,2),p=u[0],E=u[1];Object(n.useEffect)((function(){var t=e.menuitem.options.map((function(e){var t=Object(i.a)({},e);return t.selected=!1,t}));E(t)}),[]);var v=function(t){t.preventDefault();var a=p.filter((function(e){return!0===e.selected})),n={objectNum:e.menuitem.object_num,name:e.menuitem.name,price:e.menuitem.price,count:1},c=0;if(0!==a.length){n.options=a;c=n.options.reduce((function(e,t){return e+t.price}),0)}n.optionsAmount=c,n.cartId=Date.now(),e.setcart((function(e){var t=Object(i.a)({},e);return t.totalAmount+=n.price+n.optionsAmount,t.items.push(n),t})),!0===r&&l(!r)},b=function(e){var t=e.target.name;E((function(e){var a=Object(o.a)(e),n=a.findIndex((function(e){return e.name===t}));return a[n].selected=!a[n].selected,a}))},f=p.map((function(e){return c.a.createElement("div",{key:e.id,className:"option"},c.a.createElement("label",{className:"pl-2 pr-2 d-block"},c.a.createElement("input",{name:e.name,type:"checkbox",className:"mr-2",checked:e.selected,onChange:b}),c.a.createElement("span",null,e.name)," ",c.a.createElement("span",{className:"text-muted small"},"\u20a6",e.price)))}));return c.a.createElement("div",{className:"menu-list-item"},c.a.createElement("div",{id:e.menuitem.object_num,className:"row align-items-center"},c.a.createElement("div",{className:"name col-sm-6 col-5 mb-2 mb-sm-0"},e.menuitem.name),c.a.createElement("div",{className:"col-sm-6 col-7 text-right"},c.a.createElement("span",{className:"mr-2 price"},"\u20a6",e.menuitem.price),c.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(t){0===e.menuitem.options.length?v(t):l(!r)}},"Add to Cart"))),c.a.createElement(d.a,{isOpen:r,className:"mymodal",overlayClassName:"mymodal-overlay",onRequestClose:function(){return l(!1)},contentLabel:"Example Modal"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"menu-options"},c.a.createElement("div",{className:"header text-center"},"Select Any Extra Items"),f),c.a.createElement("button",{className:"btn btn-secondary btn-block rounded-0",onClick:v},"Add to Cart"))))},E={All:function(){return!0}};["Toasted Treat","Dessert","Nigerian Cuisine","From The Grill","Salads","Alcholic Drinks","Soft Drinks","Light Meal"].forEach((function(e){E[e]=function(t){return t.menu_class===e}}));var v=E;var b,f=function(e){return c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm m-1","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",null,e.name))},N=function(e){var t;return e.item.options&&(t=e.item.options.map((function(e,t){return c.a.createElement("div",{key:t,className:"row no-gutters"},c.a.createElement("div",{className:"col-3"}),c.a.createElement("div",{className:"col-5"},e.name),c.a.createElement("div",{className:"col-3"},"\u20a6",e.price.toFixed(2)),c.a.createElement("div",{className:"col-1"}))}))),c.a.createElement("div",{className:"cart-list-item"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-3 quantity"},e.item.count),c.a.createElement("div",{className:"col-5"},e.item.name),c.a.createElement("div",{className:"col-3"},c.a.createElement("span",{className:"price"},"\u20a6",e.item.price.toFixed(2))),c.a.createElement("div",{className:"col-1"},c.a.createElement("button",{className:"remove-item",onClick:function(){return e.setcart(e.item.cartId)}},"X"))),c.a.createElement("div",null,t))},h=a(55),g=a.n(h),O=function(e){var t=function(t){e.setcart((function(e){var a=Object(i.a)({},e),n=0,c=0;return a.items=e.items.filter((function(e){return e.cartId===t&&(n=e.price,e.options&&(c=e.options.reduce((function(e,t){return e+t.price}),0))),e.cartId!==t})),a.totalAmount-=n+c,a}))},a=function(t){var a=g.a.find(e.menuitems,{object_num:t}).price;e.setcart((function(e){var n=Object(i.a)({},e);return n.items.map((function(e){return e.objectNum===t&&(e.count+=1,e.price+=a),e})),n.totalPrice+=a,n}))},n=function(t){var a=g.a.find(e.menuitems,{object_num:t}).price;e.setcart((function(e){var n=Object(i.a)({},e);return n.items=g.a.filter(e.items,(function(e){return e.objectNum===t&&(e.count-=1,e.price-=a),0!==e.count})),n.totalPrice-=a,n}))},r=e.cart.items.map((function(e){return c.a.createElement(N,{key:e.cartId,item:e,incrementItem:a,decrementItem:n,setcart:t})}));return c.a.createElement("div",null,c.a.createElement("h3",null,"Your Cart"),0===e.cart.items.length?c.a.createElement("span",{className:"empty-cart"},"No Items in cart"):c.a.createElement("div",{className:"cart-items"},r,c.a.createElement("div",{className:"cart-list-item text-right"},c.a.createElement("span",{className:"subtotal"},"Subtotal:"),c.a.createElement("span",null," \u20a6",e.cart.totalAmount.toFixed(2)," ")),c.a.createElement("div",{className:"cart-list-item"},c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){e.setPage("checkout")}},"CheckOut"))))},j=Object.keys(v),y=function(e){var t=Object(n.useState)("All"),a=Object(m.a)(t,2),r=a[0],l=a[1],s=e.menuItems.filter(v[r]).map((function(t){return c.a.createElement(p,{key:t.id,menuitem:t,setcart:e.setCart})})),o=j.map((function(e){return c.a.createElement(f,{key:e,name:e,isPressed:e===r,setFilter:l})}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"cat-filter"},o)),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"menu-list"},s))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"cart"},c.a.createElement(O,{cart:e.cart,setcart:e.setCart,menuitems:e.menuItems,setPage:e.setPage})))))},C=a(133),k=a.n(C),x=a(32),I=a(270),w=a(53),S={firstName:"",lastName:"",email:"",phone:"",address1:"",address2:""},_=function(e){var t=Object(n.useState)(S),a=Object(m.a)(t,2),r=a[0],l=a[1],s=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(i.a)({},e,Object(x.a)({},a,n))}))};return c.a.createElement(I.a,{onSubmit:function(t){t.preventDefault(),e.handleOrder(r)}},c.a.createElement(I.a.Row,null,c.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"firstName"},c.a.createElement(I.a.Label,null,"First Name"),c.a.createElement(I.a.Control,{type:"text",placeholder:"First Name",onChange:s,name:"firstName",value:r.firstName})),c.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"lastName"},c.a.createElement(I.a.Label,null,"Last Name"),c.a.createElement(I.a.Control,{type:"text",placeholder:"Last Name",onChange:s,name:"lastName",value:r.lastName})),c.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"email"},c.a.createElement(I.a.Label,null,"Email"),c.a.createElement(I.a.Control,{type:"email",placeholder:"Email",onChange:s,name:"email",value:r.email})),c.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"Phone"},c.a.createElement(I.a.Label,null,"Phone"),c.a.createElement(I.a.Control,{type:"text",placeholder:"Phone Number",onChange:s,name:"phone",value:r.phone}))),c.a.createElement(I.a.Group,{controlId:"address1"},c.a.createElement(I.a.Label,null,"Address 1"),c.a.createElement(I.a.Control,{placeholder:"Address 1",onChange:s,name:"address1",value:r.address1})),c.a.createElement(I.a.Group,{controlId:"address2"},c.a.createElement(I.a.Label,null,"Address 2"),c.a.createElement(I.a.Control,{placeholder:"Address 2",onChange:s,name:"address2",value:r.address2})),c.a.createElement(w.a,{variant:"secondary",size:"lg",type:"submit"},"Order Now"))},P=function(e){var t=e.cart.items.map((function(e,t){return c.a.createElement(n.Fragment,{key:e.cartId},c.a.createElement("tr",null,c.a.createElement("td",{className:"quantity"},e.count," "),c.a.createElement("td",{className:"title"},c.a.createElement("span",{className:"name"},e.name)),c.a.createElement("td",{className:"price"},"\u20a6",e.price.toFixed(2))),e.options?e.options.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.price))})):null)}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-4 col-lg-5"},c.a.createElement("div",{className:"cart-details shadow bg-white mb-4"},c.a.createElement("div",{className:"bg-dark text-light p-4"},c.a.createElement("h5",{className:"mb-0"},"Your order")),c.a.createElement("table",{className:"cart-table"},c.a.createElement("tbody",null,t)),c.a.createElement("div",{className:"cart-summary"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-7 text-right text-muted"},"Order total:"),c.a.createElement("div",{className:"col-5"},c.a.createElement("strong",null,"\u20a6",c.a.createElement("span",{className:"cart-products-total"},e.cart.totalAmount.toFixed(2))))),c.a.createElement("hr",{className:"hr-sm"}),c.a.createElement("div",{className:"row text-lg"},c.a.createElement("div",{className:"col-7 text-right text-muted"},"Total:"),c.a.createElement("div",{className:"col-5"},c.a.createElement("strong",null,"\u20a6",c.a.createElement("span",{className:"cart-total"},e.cart.totalAmount.toFixed(2)))))))),c.a.createElement("div",{className:"col-xl-8 col-lg-7 order-lg-first"},c.a.createElement("div",{className:"bg-white p-4 p-md-5 mb-4"},c.a.createElement("h4",{className:"border-bottom pb-4"},c.a.createElement("i",{className:"fas fa-user mr-3 text-secondary"}),"Your information"),c.a.createElement(_,{handleOrder:function(t){e.setPage("review");e.setOrder((function(a){return Object(i.a)({},t,{},e.cart,{orderNum:"",trxRef:"order-".concat(k.a.generate(8))})}))}})))))},A=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 bg-light p-4 text-center"},c.a.createElement("p",null,"Your order number is ",e.myOrder.orderNum),c.a.createElement(w.a,{variant:"secondary",size:"lg",onClick:e.resetApp},"Make New Order"))))},M=a(134),F=a(135),D=a.n(F).a.create({}),H=function(e){null===localStorage.getItem("auth_token")&&localStorage.setItem("auth_token",e),void 0===b&&(b=e||localStorage.getItem("auth_token"))},T=function(){return H(),D.get("/api/v1/menu_items",{headers:{Authorization:"Bearer ".concat(b)}})},z=function(){return H(),D.get("/api/v1/condiments",{headers:{Authorization:"Bearer ".concat(b)}})},L=function(e){if(e.response)return e.response.data.error;e.request},U=function(e){var t={email:e.myOrder.email,amount:100*e.myOrder.totalAmount,metadata:{name:e.myOrder.firstName+" "+e.myOrder.lastName,phone:e.phone},reference:e.myOrder.trxRef,publicKey:"pk_test_5d5facf8af8745fa457407f225166220f2d4d426",text:"Pay With PayStack",onSuccess:function(){return a()},onClose:function(){return alert("Wait! You need this oil, don't go!!!!")}},a=function(){var t;console.log("add order to db here"),(t=e.myOrder.trxRef,D.get("/api/v1/verify",{params:{trxref:t}})).then((function(t){console.log(t.data),function(e){var t=Object(i.a)({},e);return delete t.status,delete t.orderNum,D.post("/api/v1/orders",{order:{details:t,status:e.status,order_num:e.orderNum}})}(e.myOrder).then((function(t){console.log(t.data.order_num),e.setOrder((function(e){var a=Object(i.a)({},e);return a.orderNum=t.data.order_num,a}))})),e.setPage("complete")}))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 bg-light p-4 text-center"},c.a.createElement("p",null,"Order Name: ",e.myOrder.firstName+""+e.myOrder.lastName),c.a.createElement("p",null,"Order Email: ",e.myOrder.email),c.a.createElement("p",null,"Order Amount: \u20a6",e.myOrder.totalAmount),c.a.createElement(M.a,Object.assign({className:"btn btn-secondary btn-lg"},t)))))},B={items:[],totalAmount:0,status:!1},R=function(e){var t=Object(n.useState)("menu"),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(B),E=Object(m.a)(p,2),v=E[0],b=E[1],f=Object(n.useState)({}),N=Object(m.a)(f,2),h=N[0],g=N[1],O=Object(n.useState)(!0),j=Object(m.a)(O,2),C=j[0],k=j[1];return Object(n.useEffect)((function(){T().then((function(e){d(e.data)})),k(!1)}),[]),"menu"===r?c.a.createElement("div",{className:"wrapper"},c.a.createElement(s,{text:"Quick Service Menu"}),c.a.createElement(y,{menuItems:u,setPage:l,cart:v,setCart:b,isLoading:C})):"checkout"===r?c.a.createElement("div",{className:"wrapper"},c.a.createElement(s,{text:"Checkout"}),c.a.createElement(P,{cart:v,setOrder:g,setPage:l,myOrder:h})):"review"===r?c.a.createElement("div",{className:"wrapper"},c.a.createElement(s,{text:"Review Order"}),c.a.createElement(U,{myOrder:h,setOrder:g,setPage:l})):"complete"===r?c.a.createElement("div",{className:"wrapper"},c.a.createElement(s,{text:"Order Complete"}),c.a.createElement(A,{myOrder:h,resetApp:function(){l("menu"),b({items:[],totalAmount:0,status:!1}),g({})}})):void 0},G=(a(260),function(){return c.a.createElement(R,null)}),q=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],s=e.menuclass.map((function(e){return c.a.createElement("li",{key:e.id},e.name)}));return c.a.createElement("div",{className:"row menuclass"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",null,"Menu Classes"),c.a.createElement("ul",null,s)),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("input",{name:"name",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{onClick:function(t){t.preventDefault(),function(e){H();var t={name:e};return D.post("/api/v1/menu_classes",{headers:{Authorization:"Bearer ".concat(b)},menu_class:t})}(r).then((function(t){201===t.status&&"Created"===t.statusText&&(console.log(t.data),e.setmenuclass((function(e){var a=Object(o.a)(e);return a.push(t.data),a})),l(""))})).catch((function(e){return L(e)}))}},"Add Menu Class")))},Y=a(34),K=a(35),J=function(e){return c.a.createElement(K.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(K.a.Header,{closeButton:!0},c.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},"Modal heading")),c.a.createElement(K.a.Body,null,c.a.createElement("h4",null,"Centered Modal"),c.a.createElement("p",null,"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")),c.a.createElement(K.a.Footer,null,c.a.createElement(w.a,{onClick:e.onHide},"Close")))},V=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=(a[1],e.columns),s=e.data,u=Object(Y.useTable)({columns:l,data:s,initialState:{pageIndex:0,hiddenColumns:["id"]}},Y.useSortBy,Y.usePagination,Y.useRowSelect,Y.useRowState,(function(t){t.visibleColumns.push((function(t){return[].concat(Object(o.a)(t),[{Cell:function(t){var a=t.row;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return x(a)},disabled:e.isUpdate},"Edit"),c.a.createElement(w.a,{variant:"primary",onClick:function(){return e.handleModalShow(a)},data:a},"Add Options"))}}])}))})),d=u.getTableProps,p=u.getTableBodyProps,E=u.headerGroups,v=u.page,b=u.prepareRow,f=u.canPreviousPage,N=u.canNextPage,h=(u.pageOptions,u.pageCount),g=u.gotoPage,O=u.nextPage,j=u.previousPage,y=u.setPageSize,C=u.state,k=(C.pageIndex,C.pageSize),x=function(t){console.log(t),e.setIsUpdate((function(e){return!e})),console.log(e.isUpdate),e.setCondiment(Object(i.a)({},t.values))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered mt-2 mb-2"}),c.a.createElement("thead",null,E.map((function(e){return c.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return c.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),c.a.createElement("tbody",p(),v.map((function(e){return b(e),c.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return c.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col"},c.a.createElement("div",{className:"page-item"},c.a.createElement("select",{className:"custom-select w-25",value:k,onChange:function(e){y(Number(e.target.value))}},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Show ",e)}))))),c.a.createElement("div",{className:"col-md-6 col"},c.a.createElement("nav",{"aria-label":"Page navigation example"},c.a.createElement("ul",{className:"pagination justify-content-end"},c.a.createElement("li",{className:"page-item"},c.a.createElement("button",{onClick:function(){return g(0)},className:"page-link",disabled:!f},"First")),c.a.createElement("li",{className:"page-item"},c.a.createElement("button",{onClick:function(){return j()},className:"page-link",disabled:!f},"Previous")," "),c.a.createElement("li",{className:"page-item"},c.a.createElement("button",{onClick:function(){return O()},className:"page-link",disabled:!N},"Next")," "),c.a.createElement("li",{className:"page-item"},c.a.createElement("button",{onClick:function(){return g(h-1)},className:"page-link",disabled:!N},"Last")," ")))),c.a.createElement(J,{show:r,onHide:function(){e.setShowModal(!1)}})))},W=function(e){var t=e.menuclass.map((function(e){return c.a.createElement("option",{key:e.id,value:e.name},e.name)})),a=function(t){var a=t.target,n=a.name,c=a.value;e.setMenuItem((function(e){var t=Object(i.a)({},e);return t[n]="price"===n?parseInt(c):c,t}))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Item Name",value:e.menuItem.name,onChange:a})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"object_num",className:"form-control",placeholder:"Micros Object Num",value:e.menuItem.object_num,onChange:a})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"price",className:"form-control",placeholder:"Item Price",value:e.menuItem.price,onChange:a})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{name:"menu_class",value:e.menuItem.menu_class,onChange:a,className:"custom-select"},t)),c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-secondary",onClick:e.handleClick},e.isUpdate?"Update Menu Item":"Add Menu Item"),c.a.createElement("button",{className:"btn btn-secondary",onClick:e.handleCancel,style:e.isUpdate?{}:{display:"none"}},"Cancel")))))},Q=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],s=e.condiments.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{name:"menu_class",value:r,onChange:function(e){var t=e.target.value;l(t)},className:"custom-select"},s),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t,a={menu_item_id:e.menuitem.id,condiment_id:r};(t=a,H(),D.defaults.headers.common.Authorization=b,D.post("/api/v1/menu_options",{menu_option:{menu_item_id:t.menu_item_id,condiment_id:t.condiment_id}})).then((function(t){201===t.status&&"Created"===t.statusText&&T().then((function(t){return e.setmenuitems(t.data)}))}))}},"Add Option"))},X=function(e){var t={name:"",object_num:"",menu_class:"",price:0},a=Object(n.useState)(!1),r=Object(m.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(t),v=Object(m.a)(E,2),f=v[0],N=v[1],h=Object(n.useState)(""),g=Object(m.a)(h,2),O=g[0],j=g[1],y=Object(n.useState)([]),C=Object(m.a)(y,2),k=C[0],x=C[1],I=Object(n.useMemo)((function(){return e.menuitems}),[e.menuitems]),w=Object(n.useMemo)((function(){return[{Header:"ID",accessor:"id",isVisible:!1},{Header:"Name",accessor:"name"},{Header:"Object Num",accessor:"object_num"},{Header:"Price",accessor:"price"},{Header:"Menu Class",accessor:"menu_class"}]}),[l]),S=k.map((function(e){return c.a.createElement("li",{key:e.id},e.name)}));return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(W,{menuclass:e.menuclass,menuItem:f,setMenuItem:N,isUpdate:l,setIsUpdate:s,setmenuitems:e.setmenuitems,handleClick:function(a){a.preventDefault(),Object.values(f).includes("")?alert("please complete the form"):l?function(e){return H(),D.defaults.headers.common.Authorization=b,D.patch("/api/v1/menu_items/".concat(e.id),{menu_item:{name:e.name,price:e.price,object_num:e.object_num,menu_class:e.menu_class}})}(f).then((function(a){200===a.status&&"OK"===a.statusText&&T().then((function(t){return e.setmenuitems(t.data)})),N(t),s((function(e){return!e}))})):function(e){return H(),D.defaults.headers.common.Authorization=b,D.post("/api/v1/menu_items",{menu_item:e})}(f).then((function(a){201===a.status&&"Created"===a.statusText&&(e.setmenuitems((function(e){var t=Object(o.a)(e);return t.push(a.data),t})),N(t))}))},handleCancel:function(){s((function(e){return!e})),N(t)}}),d&&c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Option for ",O.name),c.a.createElement("div",{className:"card-body"},"Options available",c.a.createElement("ul",null,S),c.a.createElement(Q,{condiments:e.condiments,menuitem:O,setmenuitems:e.setmenuitems})))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement(V,{columns:w,data:I,setCondiment:N,setIsUpdate:s,isUpdate:l,handleModalShow:function(e){p(!0),j(e.original),x(e.original.options)}})))))},Z=a(51),$=a.n(Z),ee=a(142),te=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),u=o[0],d=o[1],p=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(i.a)({},e,Object(x.a)({},a,n))}))},E=function(){var t=Object(ee.a)($.a.mark((function t(a){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.abrupt("return",(n=r,D.post("/api/v1/sessions",{email:n.email,password:n.password})).then((function(t){H(t.data.auth_token),e.setIsloggedIn(!0)})).catch((function(e){return d(L(e))})));case 2:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"container h-100"},c.a.createElement("div",{className:"row justify-content-center align-items-center h-100"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{id:"login",className:"login p-4"},c.a.createElement("div",{style:""===u?{display:"none"}:{},class:"alert alert-warning",role:"alert"},u),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email Address",onChange:p})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",onChange:p})),c.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:E},"Login"))))))))},ae=(a(263),a(264),function(e){return c.a.createElement("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link","data-widget":"pushmenu",href:".wer",role:"button"},c.a.createElement("i",{className:"fas fa-bars"})))),c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(t){t.preventDefault(),e.setIsloggedIn(!1),localStorage.removeItem("auth_token")}},"Log out"))))}),ne=function(e){var t=function(t){t.preventDefault();var a=t.target.attributes.href.value;e.setSelectPage(a)};return c.a.createElement("aside",{className:"main-sidebar sidebar-dark-primary elevation-4"},c.a.createElement("a",{href:"test",className:"brand-link  text-center"},c.a.createElement("span",{className:"brand-text font-weight-bold"},"ADMIN")),c.a.createElement("div",{className:"sidebar"},c.a.createElement("nav",{className:"mt-2"},c.a.createElement("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"menuclass",className:"nav-link",onClick:t},"Menu Class")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"condiments",className:"nav-link",onClick:t},"Condiments")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"menuitems",className:"nav-link",onClick:t},"Menu Items"))))))},ce=function(e){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"content-header"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h1",{className:"m-0 text-dark"},"Page title"))))),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"container-fluid"},e.activePage)))},re=function(){return c.a.createElement("div",null,"this the the Dashboard")},le=function(e){var t={name:"",object_num:"",price:0},a=Object(n.useState)(t),r=Object(m.a)(a,2),l=r[0],s=r[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),p=d[0],E=d[1],v=Object(n.useMemo)((function(){return[{Header:"ID",accessor:"id",isVisible:!1},{Header:"Name",accessor:"name"},{Header:"Object Num",accessor:"object_num"},{Header:"Price",accessor:"price"}]}),[p]),f=Object(n.useMemo)((function(){return e.condiments}),[e.condiments]),N=function(e){var t=e.target,a=t.name,n=t.value;s((function(e){var t=Object(i.a)({},e);return t[a]="price"===a?parseInt(n):n,t}))};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Condiment Name"),c.a.createElement("input",{id:"name",type:"text",name:"name",className:"form-control",placeholder:"Item Name",value:l.name,onChange:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"object_num"},"POS Object Number"),c.a.createElement("input",{id:"object_num",type:"text",name:"object_num",className:"form-control",placeholder:"Micros Object Num",value:l.object_num,onChange:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"price"},"Price"),c.a.createElement("input",{id:"price",type:"text",name:"price",className:"form-control",placeholder:"Item Price",value:l.price,onChange:N})),c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(a){a.preventDefault(),Object.values(l).includes("")?alert("please complete the form"):p?function(e){return H(),D.defaults.headers.common.Authorization=b,D.patch("/api/v1/condiments/".concat(e.id),{name:e.name,price:e.price,object_num:e.object_num})}(l).then((function(a){200===a.status&&"OK"===a.statusText&&(console.log(a.data),console.log("debug"),z().then((function(t){return e.setcondiments(t.data)}))),s(t),E((function(e){return!e}))})):function(e){return H(),D.defaults.headers.common.Authorization=b,D.post("/api/v1/condiments",{condiment:e})}(l).then((function(a){201===a.status&&"Created"===a.statusText&&(console.log(a.data),e.setcondiments((function(e){var t=Object(o.a)(e);return t.push(a.data),t})),s(t))}))}},p?"Update Menu Item":"Add Menu Item"),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){E((function(e){return!e})),s(t)},style:p?{}:{display:"none"}},"Cancel")))))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement(V,{columns:v,data:f,setCondiment:s,setIsUpdate:E,isUpdate:p})))))},me=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),p=d[0],E=d[1],v=Object(n.useState)(),f=Object(m.a)(v,2),N=f[0],h=f[1],g=Object(n.useState)(),O=Object(m.a)(g,2),j=O[0],y=O[1],C=Object(n.useState)(),k=Object(m.a)(C,2),x=k[0],I=k[1];return Object(n.useEffect)((function(){localStorage.getItem("auth_token")?h(!0):h(!1)}),[]),Object(n.useEffect)((function(){N&&Promise.all([(H(),D.get("/api/v1/menu_classes",{headers:{Authorization:"Bearer ".concat(b)}})),T(),z()]).then((function(e){r(e[0].data),i(e[1].data),E(e[2].data)}))}),[N]),Object(n.useEffect)((function(){switch(x){case"menuclass":y(c.a.createElement(q,{menuclass:a,setmenuclass:r}));break;case"condiments":y(c.a.createElement(le,{condiments:p,setcondiments:E}));break;case"menuitems":y(c.a.createElement(X,{menuitems:o,condiments:p,setmenuitems:i,menuclass:a}));break;default:y(c.a.createElement(re,null))}}),[x,o,p,a]),!0===N?c.a.createElement("div",{className:"wrapper"},c.a.createElement(ae,{setIsloggedIn:h}),c.a.createElement(ne,{setSelectPage:I}),c.a.createElement(ce,{activePage:j})):!1===N?c.a.createElement(te,{setIsloggedIn:h}):null},se=a(144),oe=a(10);var ie=function(){return c.a.createElement(se.a,null,c.a.createElement(oe.c,null,c.a.createElement(oe.a,{path:"/admin"},c.a.createElement(me,null)),c.a.createElement(oe.a,{exact:!0,path:"/"},c.a.createElement(G,null))))};a(267);l.a.render(c.a.createElement(ie,null),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.a31419d9.chunk.js.map