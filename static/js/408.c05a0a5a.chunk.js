"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[408],{408:function(e,t,r){r.r(t);var n=r(861),s=r(439),a=r(687),c=r.n(a),i=r(1),l=r(791),u=r(87),o=r(356),h=r(673),p=r(547),v=r(184);t.default=function(){var e,t=(0,l.useState)({}),r=(0,s.Z)(t,2),a=r[0],d=r[1],x=(0,l.useState)(!1),f=(0,s.Z)(x,2),g=f[0],m=f[1],j=(0,l.useState)(!1),y=(0,s.Z)(j,2),k=y[0],w=y[1],Z=(0,u.lr)(),_=(0,s.Z)(Z,2),b=_[0],C=_[1],S=null!==(e=b.get("query"))&&void 0!==e?e:"";function q(e){var t=(0,h.Z)(e);return(0,p.Z)(t,"yyyy")}return(0,v.jsxs)("div",{children:[g&&(0,v.jsx)("h2",{children:"LOADING......"}),k&&(0,v.jsxs)("h2",{children:["Sorry. ",k.message,"."]}),(0,v.jsx)("input",{type:"text",value:S,onChange:function(e){return t=e.target.value,b.set("query",t),void C(b);var t},placeholder:"Movie title"}),(0,v.jsx)("button",{type:"submit",onClick:function(e){function t(){return(t=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),w(!1),e.next=5,(0,i.E3)(S);case 5:t=e.sent,r=t.results,console.log("resp",r),d(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Catch error message",e.t0.message),w(!0);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()},children:"Search"}),(0,v.jsx)("ul",{children:a.length>0&&a.map((function(e){var t=e.id,r=e.title,n=e.vote_average,s=e.release_date,a=e.poster_path,c=e.overview;return(0,v.jsxs)("li",{children:[r&&(0,v.jsxs)("h3",{children:[r," ",q(s)]}),n>0&&(0,v.jsxs)("p",{children:["Vote average: ",n.toFixed(2)]}),a?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r}):(0,v.jsx)("img",{src:o,alt:r}),c&&(0,v.jsx)("p",{children:c})]},t)}))})]})}}}]);
//# sourceMappingURL=408.c05a0a5a.chunk.js.map