(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(8),i=c.n(s),l=(c(7),c(9)),d=c(6),r=c(3),j=c(0),o=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]),i=Object(r.a)(s,2),o=i[0],b=i[1],m=Object(n.useState)(!0),u=Object(r.a)(m,2),f=u[0],O=u[1],h=Object(n.useState)(null),x=Object(r.a)(h,2),p=x[0],v=x[1],I=function(){if(c)if(c&&!f)b(o.map((function(e){return e.id===p?Object(d.a)(Object(d.a)({},e),{},{name:c}):e}))),O(!0),a(""),v(null);else{var e={id:(new Date).getTime().toString(),name:c};b([].concat(Object(l.a)(o),[e])),a("")}else alert("please fill data")};return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(o))}),[o]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsx)("h1",{style:{color:"white",fontSize:"45px"},children:" My ToDo List"}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u270d Add Items...",value:c,onChange:function(e){return a(e.target.value)}}),f?Object(j.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:I}):Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Update Item",onClick:I})]}),Object(j.jsx)("div",{className:"showItems",children:o.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"fas fa-edit add-btn",title:"Edit Item",onClick:function(){return function(e){var t=o.find((function(t){return t.id===e}));O(!1),a(t.name),v(e)}(e.id)}}),Object(j.jsx)("i",{className:"fas fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return function(e){var t=o.filter((function(t){return e!==t.id}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[Object(j.jsx)("span",{children:" CHECK LIST "})," "]})})]})})})},b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.a3826e8e.chunk.js.map