(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{227:function(e,t,a){e.exports=a(458)},245:function(e,t){},247:function(e,t){},279:function(e,t){},280:function(e,t){},341:function(e,t,a){},345:function(e,t,a){},347:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),m=a(4),s=function(e){return r.a.createElement("div",{id:"header",className:"header"},r.a.createElement("h1",null,e.text))},o=a(15),i=a(9),u=a(43),d=a.n(u);d.a.setAppElement("#root");var p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),u=Object(m.a)(s,2),p=u[0],E=u[1];Object(n.useEffect)((function(){var t=e.menuitem.options.map((function(e){var t=Object(i.a)({},e);return t.selected=!1,t}));E(t)}),[]);var b=function(t){t.preventDefault();var a=p.filter((function(e){return!0===e.selected})),n={objectNum:e.menuitem.object_num,name:e.menuitem.name,price:e.menuitem.price,count:1},r=0;if(0!==a.length){n.options=a;r=n.options.reduce((function(e,t){return e+t.price}),0)}n.optionsAmount=r,n.cartId=Date.now(),e.setcart((function(e){var t=Object(i.a)({},e);return t.totalAmount+=n.price+n.optionsAmount,t.items.push(n),t})),!0===c&&l(!c)},f=function(e){var t=e.target.name;E((function(e){var a=Object(o.a)(e),n=a.findIndex((function(e){return e.name===t}));return a[n].selected=!a[n].selected,a}))},v=p.map((function(e){return r.a.createElement("div",{key:e.id,className:"option"},r.a.createElement("label",{className:"pl-2 pr-2 d-block"},r.a.createElement("input",{name:e.name,type:"checkbox",className:"mr-2",checked:e.selected,onChange:f}),r.a.createElement("span",null,e.name)," ",r.a.createElement("span",{className:"text-muted small"},"\u20a6",e.price)))}));return r.a.createElement("div",{className:"menu-list-item"},r.a.createElement("div",{id:e.menuitem.object_num,className:"row align-items-center"},r.a.createElement("div",{className:"name col-sm-6 col-5 mb-2 mb-sm-0"},e.menuitem.name),r.a.createElement("div",{className:"col-sm-6 col-7 text-right"},r.a.createElement("span",{className:"mr-2 price"},"\u20a6",e.menuitem.price),r.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(t){0===e.menuitem.options.length?b(t):l(!c)}},"Add to Cart"))),r.a.createElement(d.a,{isOpen:c,className:"mymodal",overlayClassName:"mymodal-overlay",onRequestClose:function(){return l(!1)},contentLabel:"Example Modal"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"menu-options"},r.a.createElement("div",{className:"header text-center"},"Select Any Extra Items"),v),r.a.createElement("button",{className:"btn btn-secondary btn-block rounded-0",onClick:b},"Add to Cart"))))},E={All:function(){return!0}};["Toasted Treat","Dessert","Nigerian Cuisine","From The Grill","Salads","Alcholic Drinks","Soft Drinks","Light Meal"].forEach((function(e){E[e]=function(t){return t.menu_class===e}}));var b=E;var f,v=function(e){return r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm m-1","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},r.a.createElement("span",null,e.name))},N=function(e){var t;return e.item.options&&(t=e.item.options.map((function(e,t){return r.a.createElement("div",{key:t,className:"row no-gutters"},r.a.createElement("div",{className:"col-3"}),r.a.createElement("div",{className:"col-5"},e.name),r.a.createElement("div",{className:"col-3"},"\u20a6",e.price.toFixed(2)),r.a.createElement("div",{className:"col-1"}))}))),r.a.createElement("div",{className:"cart-list-item"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-3 quantity"},e.item.count),r.a.createElement("div",{className:"col-5"},e.item.name),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"price"},"\u20a6",e.item.price.toFixed(2))),r.a.createElement("div",{className:"col-1"},r.a.createElement("button",{className:"remove-item",onClick:function(){return e.setcart(e.item.cartId)}},"X"))),r.a.createElement("div",null,t))},g=a(78),h=a.n(g),O=function(e){var t=function(t){e.setcart((function(e){var a=Object(i.a)({},e),n=0,r=0;return a.items=e.items.filter((function(e){return e.cartId===t&&(n=e.price,e.options&&(r=e.options.reduce((function(e,t){return e+t.price}),0))),e.cartId!==t})),a.totalAmount-=n+r,a}))},a=function(t){var a=h.a.find(e.menuitems,{object_num:t}).price;e.setcart((function(e){var n=Object(i.a)({},e);return n.items.map((function(e){return e.objectNum===t&&(e.count+=1,e.price+=a),e})),n.totalPrice+=a,n}))},n=function(t){var a=h.a.find(e.menuitems,{object_num:t}).price;e.setcart((function(e){var n=Object(i.a)({},e);return n.items=h.a.filter(e.items,(function(e){return e.objectNum===t&&(e.count-=1,e.price-=a),0!==e.count})),n.totalPrice-=a,n}))},c=e.cart.items.map((function(e){return r.a.createElement(N,{key:e.cartId,item:e,incrementItem:a,decrementItem:n,setcart:t})}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Your Cart"),0===e.cart.items.length?r.a.createElement("span",{className:"empty-cart"},"No Items in cart"):r.a.createElement("div",{className:"cart-items"},c,r.a.createElement("div",{className:"cart-list-item text-right"},r.a.createElement("span",{className:"subtotal"},"Subtotal:"),r.a.createElement("span",null," \u20a6",e.cart.totalAmount.toFixed(2)," ")),r.a.createElement("div",{className:"cart-list-item"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){e.setPage("checkout")}},"CheckOut"))))},j=Object.keys(b),y=function(e){var t=Object(n.useState)("All"),a=Object(m.a)(t,2),c=a[0],l=a[1],s=e.menuItems.filter(b[c]).map((function(t){return r.a.createElement(p,{key:t.id,menuitem:t,setcart:e.setCart})})),o=j.map((function(e){return r.a.createElement(v,{key:e,name:e,isPressed:e===c,setFilter:l})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cat-filter"},o)),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"menu-list"},s))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"cart"},r.a.createElement(O,{cart:e.cart,setcart:e.setCart,menuitems:e.menuItems,setPage:e.setPage})))))},C=a(204),k=a.n(C),x=a(42),I=a(463),w=a(466),S={firstName:"",lastName:"",email:"",phone:"",address1:"",address2:""},_=function(e){var t=Object(n.useState)(S),a=Object(m.a)(t,2),c=a[0],l=a[1],s=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(i.a)({},e,Object(x.a)({},a,n))}))};return r.a.createElement(I.a,{onSubmit:function(t){t.preventDefault(),e.handleOrder(c)}},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"firstName"},r.a.createElement(I.a.Label,null,"First Name"),r.a.createElement(I.a.Control,{type:"text",placeholder:"First Name",onChange:s,name:"firstName",value:c.firstName})),r.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"lastName"},r.a.createElement(I.a.Label,null,"Last Name"),r.a.createElement(I.a.Control,{type:"text",placeholder:"Last Name",onChange:s,name:"lastName",value:c.lastName})),r.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"email"},r.a.createElement(I.a.Label,null,"Email"),r.a.createElement(I.a.Control,{type:"email",placeholder:"Email",onChange:s,name:"email",value:c.email})),r.a.createElement(I.a.Group,{className:"col-sm-6",controlId:"Phone"},r.a.createElement(I.a.Label,null,"Phone"),r.a.createElement(I.a.Control,{type:"text",placeholder:"Phone Number",onChange:s,name:"phone",value:c.phone}))),r.a.createElement(I.a.Group,{controlId:"address1"},r.a.createElement(I.a.Label,null,"Address 1"),r.a.createElement(I.a.Control,{placeholder:"Address 1",onChange:s,name:"address1",value:c.address1})),r.a.createElement(I.a.Group,{controlId:"address2"},r.a.createElement(I.a.Label,null,"Address 2"),r.a.createElement(I.a.Control,{placeholder:"Address 2",onChange:s,name:"address2",value:c.address2})),r.a.createElement(w.a,{variant:"secondary",size:"lg",type:"submit"},"Order Now"))},P=function(e){var t=e.cart.items.map((function(e,t){return r.a.createElement(n.Fragment,{key:e.cartId},r.a.createElement("tr",null,r.a.createElement("td",{className:"quantity"},e.count," "),r.a.createElement("td",{className:"title"},r.a.createElement("span",{className:"name"},e.name)),r.a.createElement("td",{className:"price"},"\u20a6",e.price.toFixed(2))),e.options?e.options.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price))})):null)}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-4 col-lg-5"},r.a.createElement("div",{className:"cart-details shadow bg-white mb-4"},r.a.createElement("div",{className:"bg-dark text-light p-4"},r.a.createElement("h5",{className:"mb-0"},"Your order")),r.a.createElement("table",{className:"cart-table"},r.a.createElement("tbody",null,t)),r.a.createElement("div",{className:"cart-summary"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7 text-right text-muted"},"Order total:"),r.a.createElement("div",{className:"col-5"},r.a.createElement("strong",null,"\u20a6",r.a.createElement("span",{className:"cart-products-total"},e.cart.totalAmount.toFixed(2))))),r.a.createElement("hr",{className:"hr-sm"}),r.a.createElement("div",{className:"row text-lg"},r.a.createElement("div",{className:"col-7 text-right text-muted"},"Total:"),r.a.createElement("div",{className:"col-5"},r.a.createElement("strong",null,"\u20a6",r.a.createElement("span",{className:"cart-total"},e.cart.totalAmount.toFixed(2)))))))),r.a.createElement("div",{className:"col-xl-8 col-lg-7 order-lg-first"},r.a.createElement("div",{className:"bg-white p-4 p-md-5 mb-4"},r.a.createElement("h4",{className:"border-bottom pb-4"},r.a.createElement("i",{className:"fas fa-user mr-3 text-secondary"}),"Your information"),r.a.createElement(_,{handleOrder:function(t){e.setPage("review");e.setOrder((function(a){return Object(i.a)({},t,{},e.cart,{orderNum:"",trxRef:"order-".concat(k.a.generate(8)),order_type:e.orderType})}))}})))))},A=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 bg-light p-4 text-center"},r.a.createElement("p",null,"Your order number is ",e.myOrder.orderNum),r.a.createElement(w.a,{variant:"secondary",size:"lg",onClick:e.resetApp},"Make New Order"))))},M=a(205),T=a(206),U=a.n(T).a.create({baseURL:"/api/v1"}),F=function(e){null===localStorage.getItem("auth_token")&&localStorage.setItem("auth_token",e),void 0===f&&(f=e||localStorage.getItem("auth_token")),U.defaults.headers.common.Authorization="Bearer ".concat(f)},D=function(){return U.get("/menu_items")},L=function(){return U.get("/condiments")},R=function(e){if(e.response)return e.response.data;e.request},H=function(e){var t={email:e.myOrder.email,amount:100*e.myOrder.totalAmount,metadata:{name:e.myOrder.firstName+" "+e.myOrder.lastName,phone:e.phone},reference:e.myOrder.trxRef,publicKey:"pk_test_5d5facf8af8745fa457407f225166220f2d4d426",text:"Pay With PayStack",onSuccess:function(){return a()},onClose:function(){return alert("Wait! You need this oil, don't go!!!!")}},a=function(){var t;console.log("add order to db here"),(t=e.myOrder.trxRef,U.get("/verify",{params:{trxref:t}})).then((function(t){console.log(t.data),function(e){var t=Object(i.a)({},e);return delete t.status,delete t.orderNum,U.post("/orders",{order:{details:t,status:e.status,order_num:e.orderNum,order_type:e.order_type}})}(e.myOrder).then((function(t){console.log(t.data.order_num),e.setOrder((function(e){var a=Object(i.a)({},e);return a.orderNum=t.data.order_num,a}))})),e.setPage("complete")}))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 bg-light p-4 text-center"},r.a.createElement("p",null,"Order Name: ",e.myOrder.firstName+""+e.myOrder.lastName),r.a.createElement("p",null,"Order Email: ",e.myOrder.email),r.a.createElement("p",null,"Order Amount: \u20a6",e.myOrder.totalAmount),r.a.createElement(M.a,Object.assign({className:"btn btn-secondary btn-lg"},t)))))},G=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",onClick:function(){return e.setOrderType("dinein")},className:"btn btn-primary btn-lg btn-block"},"Dine In"),r.a.createElement("button",{type:"button",onClick:function(){return e.setOrderType("takeout")},className:"btn btn-primary btn-lg btn-block"},"Take Out"),r.a.createElement("button",{type:"button",onClick:function(){return e.setOrderType("delivery")},className:"btn btn-primary btn-lg btn-block"},"Delivery"))))},B={items:[],totalAmount:0,status:!1},z=function(e){var t=Object(n.useState)("menu"),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(B),E=Object(m.a)(p,2),b=E[0],f=E[1],v=Object(n.useState)({}),N=Object(m.a)(v,2),g=N[0],h=N[1],O=Object(n.useState)(!0),j=Object(m.a)(O,2),C=j[0],k=j[1],x=Object(n.useState)(""),I=Object(m.a)(x,2),w=I[0],S=I[1];return Object(n.useEffect)((function(){D().then((function(e){d(e.data)})),k(!1)}),[]),"menu"===c?r.a.createElement("div",{className:"wrapper"},r.a.createElement(s,{text:"Quick Service Menu"}),""===w?r.a.createElement(G,{setOrderType:S}):r.a.createElement(y,{menuItems:u,setPage:l,cart:b,setCart:f,isLoading:C})):"checkout"===c?r.a.createElement("div",{className:"wrapper"},r.a.createElement(s,{text:"Checkout"}),r.a.createElement(P,{cart:b,setOrder:h,setPage:l,myOrder:g,orderType:w})):"review"===c?r.a.createElement("div",{className:"wrapper"},r.a.createElement(s,{text:"Review Order"}),r.a.createElement(H,{myOrder:g,setOrder:h,setPage:l})):"complete"===c?r.a.createElement("div",{className:"wrapper"},r.a.createElement(s,{text:"Order Complete"}),r.a.createElement(A,{myOrder:g,resetApp:function(){l("menu"),f({items:[],totalAmount:0,status:!1}),h({})}})):void 0},q=(a(341),function(){return r.a.createElement(z,null)}),Y=a(22),K=a.n(Y),J=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],s=e.menuclass.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.name)}));return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group mb-3"},s),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"name",value:c,onChange:function(e){l(e.target.value)},className:"form-control"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),function(e){F();var t={name:e};return U.post("/menu_classes",{menu_class:t})}(c).then((function(t){201===t.status&&"Created"===t.statusText&&(K.a.info("Add Menu Class ".concat(t.data.name)),console.log(t.data),e.setmenuclass((function(e){var a=Object(o.a)(e);return a.push(t.data),a})),l(""))})).catch((function(e){return R(e)}))},className:"btn btn-primary btn-sm mt-2"},"Add Menu Class"))))))},Q=a(26),V=function(e){var t=e.columns,a=e.data,n=Object(Q.useTable)({columns:t,data:a,initialState:{pageIndex:0,hiddenColumns:["id"]}},Q.useSortBy,Q.usePagination,Q.useRowSelect,Q.useRowState,(function(t){t.visibleColumns.push((function(t){return[].concat(Object(o.a)(t),[{Cell:function(t){var a=t.row;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary btn-sm mr-1",onClick:function(){return O(a)},disabled:e.isUpdate},"Edit"),r.a.createElement("button",{className:"btn btn-primary btn-sm mr-1",onClick:function(){return e.handleModalShow(a)},data:a},"Options"))}}])}))})),c=n.getTableProps,l=n.getTableBodyProps,m=n.headerGroups,s=n.page,u=n.prepareRow,d=n.canPreviousPage,p=n.canNextPage,E=(n.pageOptions,n.pageCount),b=n.gotoPage,f=n.nextPage,v=n.previousPage,N=n.setPageSize,g=n.state,h=(g.pageIndex,g.pageSize),O=function(t){console.log(t),e.setIsUpdate((function(e){return!e})),console.log(e.isUpdate),e.setCondiment(Object(i.a)({},t.values))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",Object.assign({},c(),{className:"table table-bordered mt-2 mb-2"}),r.a.createElement("thead",null,m.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),r.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),r.a.createElement("tbody",l(),s.map((function(e){return u(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col"},r.a.createElement("div",{className:"page-item"},r.a.createElement("select",{className:"custom-select w-25",value:h,onChange:function(e){N(Number(e.target.value))}},[10,20,30,40,50].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)}))))),r.a.createElement("div",{className:"col-md-6 col"},r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination justify-content-end"},r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return b(0)},className:"page-link",disabled:!d},"First")),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return v()},className:"page-link",disabled:!d},"Previous")," "),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return f()},className:"page-link",disabled:!p},"Next")," "),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return b(E-1)},className:"page-link",disabled:!p},"Last")," "))))))},W=function(e){var t=e.menuclass.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)})),a=function(t){var a=t.target,n=a.name,r=a.value;e.setMenuItem((function(e){var t=Object(i.a)({},e);return t[n]="price"===n?""===r?0:parseInt(r):r,t}))};return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Menu Item Name"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Item Name",value:e.menuItem.name,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"object_num"},"Menu Item Object Number"),r.a.createElement("input",{type:"text",name:"object_num",className:"form-control",placeholder:"Micros Object Num",value:e.menuItem.object_num,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Menu Item Price"),r.a.createElement("input",{type:"text",name:"price",className:"form-control",placeholder:"Item Price",value:e.menuItem.price,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"menu_class",value:e.menuItem.menu_class,onChange:a,className:"custom-select"},t)),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-primary btn-sm mr-1",onClick:e.handleClick},e.isUpdate?"Update Menu Item":"Add Menu Item"),r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:e.handleCancel,style:e.isUpdate?{}:{display:"none"}},"Cancel")))))},X=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],s=e.condiments.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{name:"menu_class",value:c,onChange:function(e){var t=e.target.value;l(t)},className:"custom-select"},s),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t,a={menu_item_id:e.menuitem.id,condiment_id:c};(t=a,F(),U.post("/menu_options",{menu_option:{menu_item_id:t.menu_item_id,condiment_id:t.condiment_id}})).then((function(t){201===t.status&&"Created"===t.statusText?e.setmenuitems((function(a){var n=Object(o.a)(a);return n.map((function(a){return a.id===e.menuitem.id&&(a.options.push(t.data),K.a.info("".concat(t.data.name," added as option for ").concat(a.name))),a})),n})):K.a.info("There was a problem adding the option, Contact your administrator")})).catch((function(e){return K.a.info("Option not added")}))}},"Add Option"))},$=function(e){var t=function(t){t.preventDefault();var a,n=parseInt(t.target.attributes.option_id.value);(a=n,F(),U.delete("/menu_options/".concat(a))).then((function(t){e.setmenuitems((function(t){var a=Object(o.a)(t);return a.map((function(t){return t.id===e.menuitem.id&&(t.options=t.options.filter((function(e){return e.option_id!==n}))),t})),a}))}))},a=e.menuitem.options.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.name," ",r.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:t,option_id:e.option_id},"Remove"))}));return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Option for ",e.menuitem.name),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},a),r.a.createElement(X,{condiments:e.condiments,menuitem:e.menuitem,setmenuitems:e.setmenuitems})))};d.a.setAppElement("#root");var Z=function(e){var t={name:"",object_num:"",menu_class:"",price:0},a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),p=u[0],E=u[1],b=Object(n.useState)(t),f=Object(m.a)(b,2),v=f[0],N=f[1],g=Object(n.useState)(""),h=Object(m.a)(g,2),O=h[0],j=h[1],y=Object(n.useState)([]),C=Object(m.a)(y,2),k=(C[0],C[1]),x=Object(n.useMemo)((function(){return e.menuitems}),[e.menuitems]),I=Object(n.useMemo)((function(){return[{Header:"ID",accessor:"id",isVisible:!1},{Header:"Name",accessor:"name"},{Header:"Object Num",accessor:"object_num"},{Header:"Price",accessor:"price"},{Header:"Menu Class",accessor:"menu_class"}]}),[l]);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(W,{menuclass:e.menuclass,menuItem:v,setMenuItem:N,isUpdate:l,setIsUpdate:s,setmenuitems:e.setmenuitems,handleClick:function(a){a.preventDefault(),Object.values(v).includes("")?K.a.info("Please Compete the form"):l?function(e){return F(),U.patch("/menu_items/".concat(e.id),{menu_item:{name:e.name,price:e.price,object_num:e.object_num,menu_class:e.menu_class}})}(v).then((function(a){200===a.status&&"OK"===a.statusText&&D().then((function(t){return e.setmenuitems(t.data)})),N(t),s((function(e){return!e})),K.a.info("Successfully Updated")})):function(e){return F(),U.post("/menu_items",{menu_item:e})}(v).then((function(a){201===a.status&&"Created"===a.statusText&&(e.setmenuitems((function(e){var t=Object(o.a)(e);return t.push(a.data),t})),K.a.info("Successfully Added"),N(t))}))},handleCancel:function(){s((function(e){return!e})),N(t)}}),r.a.createElement(d.a,{isOpen:p,className:"mymodal",overlayClassName:"mymodal-overlay",onRequestClose:function(){return E(!1)},contentLabel:"Example Modal"},r.a.createElement($,{condiments:e.condiments,menuitem:O,setmenuitems:e.setmenuitems}))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(V,{columns:I,data:x,setCondiment:N,setIsUpdate:s,isUpdate:l,handleModalShow:function(e){E(!0),j(e.original),k(e.original.options)}})))))},ee=a(77),te=a.n(ee),ae=a(207),ne=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),u=o[0],d=o[1],p=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(i.a)({},e,Object(x.a)({},a,n))}))},E=function(){var t=Object(ae.a)(te.a.mark((function t(a){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.abrupt("return",(n=c,U.post("/sessions",{email:n.email,password:n.password})).then((function(t){F(t.data.auth_token),e.setIsloggedIn(!0)})).catch((function(e){return d(R(e))})));case 2:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row justify-content-center align-items-center h-100"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{id:"login",className:"login p-4"},r.a.createElement("div",{style:""===u?{display:"none"}:{},class:"alert alert-warning",role:"alert"},u),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email Address",onChange:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",onChange:p})),r.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:E},"Login"))))))))},re=(a(345),a(346),a(347),function(e){return r.a.createElement("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},r.a.createElement("i",{className:"fas fa-bars"})))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(t){t.preventDefault(),e.setIsloggedIn(!1),localStorage.removeItem("auth_token")}},"Log out"))))}),ce=function(e){var t=function(t){t.preventDefault();var a=t.target.attributes.href.value;e.setSelectPage(a)};return r.a.createElement("aside",{className:"main-sidebar sidebar-dark-primary elevation-4"},r.a.createElement("a",{href:"/admin",className:"brand-link  text-center"},r.a.createElement("span",{className:"brand-text font-weight-bold"},"ADMIN")),r.a.createElement("div",{className:"sidebar"},r.a.createElement("nav",{className:"mt-2"},r.a.createElement("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"menuclass",className:"nav-link",onClick:t},"Menu Class")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"condiments",className:"nav-link",onClick:t},"Condiments")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"menuitems",className:"nav-link",onClick:t},"Menu Items"))))))},le=function(e){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",{className:"m-0 text-dark"},e.pageTitle))))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},e.activePage)))},me=function(){return r.a.createElement("div",null,"this the the Dashboard")},se=function(e){var t=e.columns,a=e.data,n=Object(Q.useTable)({columns:t,data:a,initialState:{pageIndex:0,hiddenColumns:["id"]}},Q.useSortBy,Q.usePagination,Q.useRowSelect,Q.useRowState,(function(t){t.visibleColumns.push((function(t){return[].concat(Object(o.a)(t),[{Cell:function(t){var a=t.row;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return O(a)},disabled:e.isUpdate},"Edit"))}}])}))})),c=n.getTableProps,l=n.getTableBodyProps,m=n.headerGroups,s=n.page,u=n.prepareRow,d=n.canPreviousPage,p=n.canNextPage,E=(n.pageOptions,n.pageCount),b=n.gotoPage,f=n.nextPage,v=n.previousPage,N=n.setPageSize,g=n.state,h=(g.pageIndex,g.pageSize),O=function(t){console.log(t),e.setIsUpdate((function(e){return!e})),console.log(e.isUpdate),e.setCondiment(Object(i.a)({},t.values))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",Object.assign({},c(),{className:"table table-bordered mt-2 mb-2"}),r.a.createElement("thead",null,m.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),r.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),r.a.createElement("tbody",l(),s.map((function(e){return u(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col"},r.a.createElement("div",{className:"page-item"},r.a.createElement("select",{className:"custom-select w-25",value:h,onChange:function(e){N(Number(e.target.value))}},[10,20,30,40,50].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)}))))),r.a.createElement("div",{className:"col-md-6 col"},r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination justify-content-end"},r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return b(0)},className:"page-link",disabled:!d},"First")),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return v()},className:"page-link",disabled:!d},"Previous")," "),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return f()},className:"page-link",disabled:!p},"Next")," "),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{onClick:function(){return b(E-1)},className:"page-link",disabled:!p},"Last")," "))))))},oe=function(e){var t={name:"",object_num:"",price:0},a=function(t){var a=t.target,n=a.name,r=a.value;e.setCondiment((function(e){var t=Object(i.a)({},e);return t[n]="price"===n?""===r?0:parseInt(r):r,t}))};return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Condiment Name"),r.a.createElement("input",{id:"name",type:"text",name:"name",className:"form-control",placeholder:"Item Name",value:e.condiment.name,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"object_num"},"POS Object Number"),r.a.createElement("input",{id:"object_num",type:"text",name:"object_num",className:"form-control",placeholder:"Micros Object Num",value:e.condiment.object_num,onChange:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{id:"price",type:"text",name:"price",className:"form-control",placeholder:"Item Price",value:e.condiment.price,onChange:a})),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-primary btn-sm mr-1",onClick:function(a){var n;(a.preventDefault(),Object.values(e.condiment).includes(""))?alert("please complete the form"):e.isUpdate?(n=e.condiment,F(),U.patch("/condiments/".concat(n.id),{name:n.name,price:n.price,object_num:n.object_num})).then((function(a){200===a.status&&"OK"===a.statusText&&L().then((function(t){return e.setCondiments(t.data)})),e.setCondiment(t),e.setIsUpdate((function(e){return!e})),K.a.info("Successfully Updated")})):function(e){return F(),U.post("/condiments",{condiment:e})}(e.condiment).then((function(a){201===a.status&&"Created"===a.statusText&&(e.setCondiments((function(e){var t=Object(o.a)(e);return t.push(a.data),t})),K.a.info("Successfully Added"),e.setCondiment(t))}))}},e.isUpdate?"Update Condiment":"Add Condiment"),r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){e.setIsUpdate((function(e){return!e})),e.setCondiment(t)},style:e.isUpdate?{}:{display:"none"}},"Cancel")))))},ie=function(e){var t=Object(n.useState)({name:"",object_num:"",price:0}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],u=o[1],d=Object(n.useMemo)((function(){return[{Header:"ID",accessor:"id",isVisible:!1},{Header:"Name",accessor:"name"},{Header:"Object Num",accessor:"object_num"},{Header:"Price",accessor:"price"}]}),[]),p=Object(n.useMemo)((function(){return e.condiments}),[e.condiments]);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(oe,{setCondiments:e.setCondiments,condiment:c,setCondiment:l,isUpdate:i,setIsUpdate:u})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(se,{columns:d,data:p,setCondiment:l,setIsUpdate:u,isUpdate:i})))))},ue=a(465),de=a(464),pe=a(462),Ee=function(){return r.a.createElement("div",null,r.a.createElement(ue.a,null,r.a.createElement(de.a,{active:!0},r.a.createElement(pe.a,null,"Loading"))),r.a.createElement(ue.a,null,r.a.createElement(de.a,{active:!0,inverted:!0},r.a.createElement(pe.a,{inverted:!0},"Loading"))))};window.$=window.jQuery=a(175),a(455);var be=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)([]),f=Object(m.a)(b,2),v=f[0],N=f[1],g=Object(n.useState)(),h=Object(m.a)(g,2),O=h[0],j=h[1],y=Object(n.useState)(),C=Object(m.a)(y,2),k=C[0],x=C[1],I=Object(n.useState)(),w=Object(m.a)(I,2),S=w[0],_=w[1],P=Object(n.useState)(""),A=Object(m.a)(P,2),M=A[0],T=A[1];return Object(n.useEffect)((function(){document.body.classList.add("layout-fixed")})),Object(n.useEffect)((function(){localStorage.getItem("auth_token")?j(!0):j(!1)}),[]),Object(n.useEffect)((function(){O&&Promise.all([U.get("/menu_classes"),D(),L()]).then((function(e){i(e[0].data),E(e[1].data),N(e[2].data),c(!1)}))}),[O]),Object(n.useEffect)((function(){switch(S){case"menuclass":x(r.a.createElement(J,{menuclass:o,setmenuclass:i})),T("Menu Classes");break;case"condiments":x(r.a.createElement(ie,{condiments:v,setCondiments:N})),T("Condiments");break;case"menuitems":x(r.a.createElement(Z,{pageTitle:"Menu Items",menuitems:p,condiments:v,setmenuitems:E,menuclass:o})),T("Menu Items");break;default:x(r.a.createElement(me,null))}}),[S,p,v,o]),!0===O?a?r.a.createElement(Ee,null):r.a.createElement("div",{className:"wrapper"},r.a.createElement(re,{setIsloggedIn:j}),r.a.createElement(ce,{setSelectPage:_}),r.a.createElement(le,{activePage:k,pageTitle:M})):!1===O?r.a.createElement(ne,{setIsloggedIn:j}):null},fe=a(216),ve=a(11);var Ne=function(){return r.a.createElement(fe.a,null,r.a.createElement(ve.c,null,r.a.createElement(ve.a,{path:"/admin"},r.a.createElement(be,null)),r.a.createElement(ve.a,{exact:!0,path:"/"},r.a.createElement(q,null))))};a(457);l.a.render(r.a.createElement(Ne,null),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.213cc5c1.chunk.js.map