(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=n(1),o=n(8),l=function(e){var t=e.setCategories,n=Object(a.useState)("Inserta una busqueda"),c=Object(i.a)(n,2),u=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[u].concat(Object(o.a)(e))})),l("")}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){l(e.target.value)},onFocus:function(){l("")},onContextMenu:function(e){e.preventDefault(),alert("Jsjsjs NO se puede copiar krnal")}}))},s=function(e){var t=e.url,n=e.title;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn animate__slow"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:t,alt:n})),r.a.createElement("p",null,n))},m=n(4),f=n.n(m),p=n(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=5&api_key=eORxlnjzCqq1CVCTC0PZ47BLKNwX1E3x"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," ",t," "),u&&"Cargando...",r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["One Punch Man"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(l,{setCategories:c}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(g,{key:e,category:e})})))};n(15);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0b4bb577.chunk.js.map