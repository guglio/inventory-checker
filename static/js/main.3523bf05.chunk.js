(this["webpackJsonptesla-inventory-checker"]=this["webpackJsonptesla-inventory-checker"]||[]).push([[0],{45:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(34),o=c.n(a),s=(c(45),c(37)),i=c(4),j=c(39),d=c(25),u=c(14),l=c(99),b=c(95),O=c(98),h=c(100),p=c(96),f=c(97),m=c(35),x=c(36),v=c.n(x),w=c(3);function g(e){var t=e.columns,c=e.data,n=Object(m.useTable)({columns:t,data:c}),r=n.getTableProps,a=n.headerGroups,o=n.rows,s=n.prepareRow;return Object(w.jsxs)(b.a,Object(u.a)(Object(u.a)({},r()),{},{children:[Object(w.jsx)(p.a,{children:a.map((function(e){return Object(w.jsx)(f.a,Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(w.jsx)(h.a,Object(u.a)(Object(u.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(w.jsx)(O.a,{children:o.map((function(e,t){return s(e),Object(w.jsx)(f.a,Object(u.a)(Object(u.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(w.jsx)(h.a,Object(u.a)(Object(u.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})]}))}var C=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(void 0),o=Object(d.a)(a,2),s=o[0],i=o[1];Object(n.useEffect)((function(){var e=setInterval((function(){return v.a.get("https://nessus-ui.herokuapp.com/inventory/").then((function(e){var t=e.data;r(function(e){return e.reduce((function(e,t){var c=t.VIN,n=t.TrimName,r=t.City,a=t.Model,o=t.OptionCodeSpecs.C_OPTS.options;return[].concat(Object(j.a)(e),[{id:c,VIN:c,TrimName:n,City:r,Model:a,options:o.map((function(e){return e.name})).join(", ")}])}),[])}(t.results)),i("".concat(new Date))}))}),1e4);return function(){clearInterval(e)}}),[]);var u=[{accessor:function(e){return Object(w.jsx)("a",{href:"".concat("https://www.tesla.com/").concat(e.Model,"/order/").concat(e.VIN),target:"_blank",rel:"noreferrer",children:e.VIN})},Header:"VIN",width:"20%"},{accessor:"Model",Header:"Model",width:"20%"},{accessor:"City",Header:"City",width:"20%"},{accessor:"TrimName",Header:"TrimName",width:"20%"},{accessor:"options",Header:"options",width:"20%"}];return Object(w.jsxs)("div",{children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(g,{data:c,columns:u}),Object(w.jsxs)("div",{children:["Last update: ",s]})]})};var I=function(){return Object(w.jsx)(s.a,{children:Object(w.jsx)(i.c,{children:Object(w.jsx)(i.a,{path:"/",exact:!0,children:Object(w.jsx)(C,{})})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root")),N()}},[[77,1,2]]]);
//# sourceMappingURL=main.3523bf05.chunk.js.map