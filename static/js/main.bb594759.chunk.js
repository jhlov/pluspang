(this.webpackJsonppluspang=this.webpackJsonppluspang||[]).push([[0],{36:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(36);var c=n(17),a=n(20),r=n(10),s=n.n(r),o=n(12),i=n(4),l=n(15),d=n.n(l),u=n(0),j=n(33),b=n.n(j),h=n(21),O=n(1),m=function(e){var t=e.value,n=e.index,c=e.clicked,a=e.onClickCell,r=e.onEnterCell,s=e.onTouchMove,o=e.onMouseUp,i=e.isAnswer;return Object(O.jsx)("div",{className:b()("cell value".concat(t," none-drag"),{clicked:c,isAnswer:i}),onMouseDown:function(){h.isBrowser&&a(n)},onMouseEnter:function(){h.isBrowser&&r(n)},onTouchStart:function(){return a(n)},onTouchMove:function(e){return s(e)},onTouchEnd:o,children:t})},f=n(2),p={MAX_RANKER:10,getRecordList:function(){var e=Object(o.a)(s.a.mark((function e(t){var n,c,a,r,o,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://pluspang-default-rtdb.firebaseio.com/".concat(t,".json"));case 2:if((n=e.sent).data){e.next=5;break}return e.abrupt("return",[]);case 5:for(c=[],a=0,r=Object.entries(n.data);a<r.length;a++)o=Object(i.a)(r[a],2),l=o[0],u=o[1],c.push({name:l,record:u});return c="1to20"===t?c.sort((function(e,t){return e.record-t.record})):c.sort((function(e,t){return t.record-e.record})),e.abrupt("return",c.slice(0,10));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=(n(59),function(e){var t=e.history,n=Object(u.useState)([]),r=Object(i.a)(n,2),l=r[0],j=r[1],b=Object(u.useRef)(),h=Object(u.useState)(Date.now()),x=Object(i.a)(h,2),g=x[0],v=(x[1],Object(u.useState)(0)),N=Object(i.a)(v,2),S=N[0],w=N[1],R=Object(u.useState)(!1),E=Object(i.a)(R,2),M=E[0],C=E[1],k=Object(u.useState)([]),T=Object(i.a)(k,2),y=T[0],A=T[1],B=Object(u.useState)([]),I=Object(i.a)(B,2),F=I[0],D=I[1],L=Object(u.useState)(0),U=Object(i.a)(L,2),G=U[0],K=U[1],P=Object(u.useState)([]),X=Object(i.a)(P,2),_=X[0],J=X[1],V=Object(u.useState)("-"),H=Object(i.a)(V,2),W=H[0],Y=H[1],q=Object(u.useState)(0),z=Object(i.a)(q,2),Q=z[0],Z=z[1],$=Object(u.useRef)(Q);$.current=Q;var ee=Object(f.e)().gameType;Object(u.useEffect)((function(){console.log("mounted");for(var e=new Array(25),t=0;t<e.length;++t)e[t]=ce();function n(){return(n=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRecordList(ee);case 2:t=e.sent,J(t),Y(0<t.length?t[0].record:"-");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j(e),K(ae()),function(){n.apply(this,arguments)}();var c=setInterval(ne,50);return function(){clearInterval(c)}}),[]);var te=function(e){return"1to20"===ee?_.length<p.MAX_RANKER||e<_[_.length-1].record:_.length<p.MAX_RANKER||_[_.length-1].record<e},ne=function(){var e=(Date.now()-g)/1e3;if("1to20"===ee)w(e);else{var n=Math.max(0,60-e);if(w(n),0===n){if(0<$.current&&te($.current)){var c,r=prompt("\uae30\ub85d\uac31\uc2e0\n\n".concat($.current,"\uc810!!\n\n\uc774\ub984\uc744 \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694"),null!==(c=localStorage.getItem("name"))&&void 0!==c?c:"");r&&(d.a.patch("https://pluspang-default-rtdb.firebaseio.com/".concat(ee,".json"),Object(a.a)({},r,$.current)),localStorage.setItem("name",r))}else alert("GAME OVER!!\n\n".concat(je($.current),"\uc810!!"));t.push("/")}}},ce=function(){var e=[1,1,1,2,2,3,3,4,4];return e[parseInt(Math.random()*e.length)]},ae=function(){if("1to20"===ee)return G+1;var e=0,t=0;for(Q<2e3?(e=4,t=9):Q<4e3?(e=5,t=10):Q<6e3?(e=5,t=13):Q<8e3?(e=6,t=14):(e=6,t=15);;){var n=Math.floor(Math.random()*(t-e+1))+e;if(n!==G)return n}},re=function(){return y.reduce((function(e,t){return e+l[t]}),0)},se=function(e){y.includes(e)||(console.log("processDrag",e),A([e].concat(Object(c.a)(y))))},oe=Object(u.useCallback)((function(){if(G===re()){console.log("\uc815\ub2f5"),D(Object(c.a)(y)),setTimeout((function(){D([])}),200);var e=ae();K(e);for(var n=Object(c.a)(l),r=0;r<y.length;++r)n[y[r]]=ce();if(j(n),"1to20"===ee){if(20<e){if(te(S.toFixed(2))){var s,o=prompt("\uae30\ub85d\uac31\uc2e0\n\n".concat(S.toFixed(2),"\ucd08!!\n\n\uc774\ub984\uc744 \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694"),null!==(s=localStorage.getItem("name"))&&void 0!==s?s:"");o&&(d.a.patch("https://pluspang-default-rtdb.firebaseio.com/".concat(ee,".json"),Object(a.a)({},o,parseFloat(S.toFixed(2)))),localStorage.setItem("name",o))}else alert("GAME OVER!!\n\n".concat(S.toFixed(2),"\ucd08!!"));t.push("/")}}else Z(Q+100*y.length)}else console.log("\uc624\ub2f5")})),ie=Object(u.useCallback)((function(e){console.log("onClickCell",e),C(!0),se(e)}),[]),le=Object(u.useCallback)((function(e){M&&(console.log("onEnterCell",e),se(e))}),[M,y]),de=Object(u.useCallback)((function(e){if(M)for(var t=e.touches[0].clientX,n=e.touches[0].clientY,c=0;c<b.current.children.length;++c){var a=b.current.children[c],r=a.getBoundingClientRect().x,s=a.getBoundingClientRect().width,o=a.getBoundingClientRect().y;if(r<=t&&t<=r+s&&o<n&&n<o+s){se(c);break}}})),ue=function(){console.log("onMouseUp"),console.log(y,re()),oe(),C(!1),A([])},je=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(O.jsxs)("div",{onMouseUp:ue,children:[Object(O.jsxs)("div",{className:"card card-number mb-20 none-drag",children:[Object(O.jsx)("div",{className:"card-header",children:"TARGET NUMBER"}),Object(O.jsx)("div",{className:"card-body",children:G})]}),Object(O.jsxs)("div",{className:"d-flex justify-content-flex-end",children:[Object(O.jsxs)("div",{className:"card none-drag",children:[Object(O.jsx)("div",{className:"card-header",children:"TIME"}),Object(O.jsx)("div",{className:"card-body",children:S.toFixed(2)})]}),"1to20"===ee&&Object(O.jsxs)("div",{className:"card none-drag",children:[Object(O.jsx)("div",{className:"card-header",children:"BEST-TIME"}),Object(O.jsx)("div",{className:"card-body",children:W})]}),"random"===ee&&Object(O.jsxs)("div",{className:"card none-drag",children:[Object(O.jsx)("div",{className:"card-header",children:"SCORE"}),Object(O.jsx)("div",{className:"card-body",children:je(Q)})]}),"random"===ee&&Object(O.jsxs)("div",{className:"card none-drag",children:[Object(O.jsxs)("div",{className:"card-header",children:["BEST",Object(O.jsx)("br",{}),"SCORE"]}),Object(O.jsx)("div",{className:"card-body",children:W})]})]}),Object(O.jsx)("div",{className:"board-wrapper1",children:Object(O.jsx)("div",{className:"board-wrapper2",children:Object(O.jsx)("div",{className:"board",ref:b,children:l.map((function(e,t){return Object(O.jsx)(m,{value:e,index:t,clicked:y.includes(t),isAnswer:F.includes(t),onClickCell:ie,onEnterCell:le,onTouchMove:de,onMouseUp:ue},t)}))})})})]})}),g=n.p+"static/media/howto.f9e9d9e5.png",v=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:g,className:"w-100 h-100"})})},N=n(8),S=(n(65),function(){return Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center h-100",children:[Object(O.jsx)("div",{className:"title none-drag",children:"PLUSPANG"}),Object(O.jsx)(N.c,{to:"/game/1to20",className:"btn menu-item none-drag",children:"1 TO 20"}),Object(O.jsx)(N.c,{to:"/game/random",className:"btn menu-item none-drag",children:"RANDOM"}),Object(O.jsx)(N.c,{to:"/rank",className:"btn menu-item none-drag",children:"RANK"}),Object(O.jsx)(N.c,{to:"/howto",className:"btn menu-item none-drag",children:"HOW TO"})]})}),w=(n(66),function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)([]),r=Object(i.a)(a,2),l=r[0],d=r[1];Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRecordList("1to20");case 2:return t=e.sent,c(t),e.next=6,p.getRecordList("random");case 6:n=e.sent,d(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(O.jsxs)("div",{className:"px-40",children:[Object(O.jsx)("h2",{children:"1 TO 20"}),Object(O.jsxs)("ul",{className:"mb-20",children:[n.map((function(e,t){return Object(O.jsxs)("li",{className:"d-flex",children:[Object(O.jsxs)("span",{children:[t+1,". "]}),Object(O.jsxs)("span",{className:"name",children:[" ",e.name]})," ",Object(O.jsxs)("span",{className:"ml-auto",children:[e.record,"\ucd08"]})]})})),0===n.length&&Object(O.jsx)("p",{children:"\uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(O.jsx)("h2",{children:"RANDOM"}),Object(O.jsxs)("ul",{className:"mb-20",children:[l.map((function(e,t){return Object(O.jsxs)("li",{className:"d-flex",children:[t+1,". ",Object(O.jsxs)("span",{className:"name ml-20",children:[" ",e.name]})," ",Object(O.jsxs)("span",{className:"ml-auto",children:[(n=e.record,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),"\uc810"]})]});var n})),0===l.length&&Object(O.jsx)("p",{children:"\uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(O.jsx)("div",{className:"btn-group",children:Object(O.jsx)(N.c,{to:"/",className:"btn mb-8",children:"\uba54\ub274"})})]})});n(67),n(68);var R=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(N.b,{children:[Object(O.jsx)(f.a,{path:"/",component:S,exact:!0}),Object(O.jsx)(f.a,{path:"/game/:gameType",component:x}),Object(O.jsx)(f.a,{path:"/rank",component:w}),Object(O.jsx)(f.a,{path:"/howto",component:v})]})})})},E=n(35),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n.n(E).a.render(Object(O.jsx)(N.a,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),M()}},[[72,1,2]]]);
//# sourceMappingURL=main.bb594759.chunk.js.map