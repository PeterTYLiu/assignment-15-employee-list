(this["webpackJsonpassignment-15"]=this["webpackJsonpassignment-15"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),l=n(7),c=n(4);var s=function(e){var t=e.employee;return o.a.createElement("tr",null,o.a.createElement("td",null,t.id),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.position),o.a.createElement("td",null,t.location))};var m=function(e){var t=e.employees,n=e.handleSort,a=e.handleFilter,i=e.searchTerm;function r(e){var t,a=e.target,o=a.innerHTML.toLowerCase();a.classList.contains("isSorted-increasing")&&(t="increasing"),a.classList.contains("isSorted-decreasing")&&(t="decreasing"),document.querySelectorAll("th").forEach((function(e){return e.classList.remove("isSorted","isSorted-increasing","isSorted-decreasing")})),a.classList.add("isSorted"),"increasing"===t?(n(o,!1),a.classList.add("isSorted-decreasing")):(n(o,!0),a.classList.add("isSorted-increasing"))}return o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Filter by employee name",value:i,style:{width:"100%"},onChange:a}),o.a.createElement("table",{style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{onClick:r},"ID"),o.a.createElement("th",{onClick:r},"Name"),o.a.createElement("th",{onClick:r},"Position"),o.a.createElement("th",{onClick:r},"Location"))),o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement(s,{employee:e,key:e.id})})),function(){if(!t.length)return o.a.createElement("tr",null,o.a.createElement("td",{colspan:"4",style:{textAlign:"center",color:"#aaa",padding:"2rem"}},"No results found"))}())))},d=n(3);var u=function(){var e=Object(a.useState)(d.a),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(c.a)(r,2),u=s[0],p=s[1];return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{style:{margin:"4rem 0rem"}},"Employees"),o.a.createElement(m,{employees:n,handleSort:function(e,t){console.log("Sorting by ".concat(e,", isIncreasing is ").concat(t));var a=Object(l.a)(n);a=a.sort((function(n,a){return n=n[e],a=a[e],"string"===typeof n&&(n.toUpperCase(),a.toUpperCase()),t?n>a?1:-1:a>n?1:-1})),i(a)},handleFilter:function(e){var t=e.target;p(t.value),console.log('Filter employees by name contains "'.concat(t.value,'"'));var n=d.a.filter((function(e){return e.name.toLowerCase().includes(t.value.toLowerCase())}));i(n),document.querySelectorAll("th").forEach((function(e){return e.classList.remove("isSorted","isSorted-increasing","isSorted-decreasing")}))},searchTerm:u}))};n(13);r.a.render(o.a.createElement(u,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"James Morgan McGill","position":"attorney","location":"USA"},{"id":2,"name":"Kimberly Wexler","position":"attorney","location":"USA"},{"id":3,"name":"Ignacio Varga","position":"salesperson","location":"USA"},{"id":4,"name":"Eduardo Salamanca","position":"manager","location":"Mexico"},{"id":5,"name":"Michael Ehrmantraut","position":"security consultant","location":"USA"},{"id":6,"name":"Gustavo Fring","position":"manager","location":"USA"},{"id":7,"name":"Charles Lindbergh McGill","position":"attorney","location":"USA"},{"id":8,"name":"Alberto Salamanca","position":"salesperson","location":"USA"},{"id":9,"name":"Howard Hamlin","position":"attorney","location":"USA"},{"id":10,"name":"Werner Zeigler","position":"architect","location":"Germany"},{"id":11,"name":"Eladio Vuente","position":"manager","location":"Mexico"}]}')},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bf9e3ac5.chunk.js.map