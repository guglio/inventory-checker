(this["webpackJsonptesla-inventory-checker"]=this["webpackJsonptesla-inventory-checker"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(61),o=n.n(a),s=(n(77),n(65)),i=n(6),j=n(24),d=n(38),u=n(21),l=n(151),b=n(137),O=n(140),h=n(149),p=n(138),f=n(139),x=n(150),m=n(62),v=n(63),g=n.n(v),w=n(3);function C(e){var t=e.columns,n=e.data,c=Object(m.useTable)({columns:t,data:n}),r=c.getTableProps,a=c.headerGroups,o=c.rows,s=c.prepareRow;return Object(w.jsxs)(b.a,Object(u.a)(Object(u.a)({},r()),{},{children:[Object(w.jsx)(p.a,{children:a.map((function(e){return Object(w.jsx)(f.a,Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(w.jsx)(h.a,Object(u.a)(Object(u.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(w.jsx)(O.a,{children:o.length?o.map((function(e,t){return s(e),Object(w.jsx)(f.a,Object(u.a)(Object(u.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(w.jsx)(h.a,Object(u.a)(Object(u.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))})):Object(w.jsx)(h.a,{colSpan:t.length,children:Object(w.jsx)(x.a,{variant:"h5",component:"div",align:"center",children:"No data :("})})})]}))}var y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(void 0),o=Object(d.a)(a,2),s=o[0],i=o[1];Object(c.useEffect)((function(){var e=function(){g.a.get("https://nessus-ui.herokuapp.com/inventory/").then((function(e){var t=e.data;r(function(e){return e.reduce((function(e,t){var n=t.VIN,c=t.TrimName,r=t.City,a=t.Model,o=t.OptionCodeSpecs.C_OPTS.options;return[].concat(Object(j.a)(e),[{id:n,VIN:n,TrimName:c,City:r,Model:a,options:o.map((function(e){return e.name})).join(", ")}])}),[])}(t.results)),i("".concat(new Date))}))},t=setInterval((function(){return e()}),3e5);return e(),function(){clearInterval(t)}}),[]);var u=[{accessor:function(e){return Object(w.jsx)("a",{href:"".concat("https://www.tesla.com/").concat(e.Model,"/order/").concat(e.VIN),target:"_blank",rel:"noreferrer",children:e.VIN})},Header:"VIN",width:"20%"},{accessor:"Model",Header:"Model",width:"20%"},{accessor:"City",Header:"City",width:"20%"},{accessor:"TrimName",Header:"Trim",width:"20%"},{accessor:"options",Header:"Options",width:"20%"}];return Object(w.jsxs)(l.a,{children:[Object(w.jsx)(C,{data:n,columns:u}),Object(w.jsxs)(x.a,{variant:"body1",children:["Last update: ",s]})]})},I=n(148),N=n(147);var T=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{}),Object(w.jsx)(I.a,{children:Object(w.jsx)(s.a,{children:Object(w.jsx)(i.c,{children:Object(w.jsx)(i.a,{path:"/",exact:!0,children:Object(w.jsx)(y,{})})})})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root")),H()},77:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.3f9f29e9.chunk.js.map