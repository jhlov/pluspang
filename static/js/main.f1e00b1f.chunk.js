(this.webpackJsonppluspang=this.webpackJsonppluspang||[]).push([[0],{22:function(e,n,c){},23:function(e,n,c){},24:function(e,n,c){},25:function(e,n,c){},37:function(e,n,c){},41:function(e,n,c){"use strict";c.r(n);c(22),c(23),c(24);var t=c(7),a=c(2),r=c(13),s=c(8),o=(c(25),c(0)),i=c(19),l=c.n(i),d=c(16),u=c(1),j=function(e){var n=e.value,c=e.index,t=e.clicked,a=e.onClickCell,r=e.onEnterCell,s=e.onTouchMove,o=e.onMouseUp,i=e.isAnswer;return Object(u.jsx)("div",{className:l()("cell value".concat(n," none-drag"),{clicked:t,isAnswer:i}),onMouseDown:function(){d.isBrowser&&a(c)},onMouseEnter:function(){d.isBrowser&&r(c)},onTouchStart:function(){return a(c)},onTouchMove:function(e){return s(e)},onTouchEnd:o,children:n})},b=function(e){var n=e.history,c=Object(o.useState)([]),t=Object(s.a)(c,2),i=t[0],l=t[1],d=Object(o.useRef)(),b=Object(o.useState)(Date.now()),h=Object(s.a)(b,2),O=h[0],m=(h[1],Object(o.useState)(0)),f=Object(s.a)(m,2),v=f[0],g=f[1],x=Object(o.useState)(!1),p=Object(s.a)(x,2),N=p[0],C=p[1],E=Object(o.useState)([]),M=Object(s.a)(E,2),S=M[0],T=M[1],k=Object(o.useState)([]),w=Object(s.a)(k,2),y=w[0],B=w[1],R=Object(o.useState)(0),A=Object(s.a)(R,2),I=A[0],U=A[1],D=Object(o.useState)(0),F=Object(s.a)(D,2),G=F[0],P=F[1],L=Object(o.useRef)(G);L.current=G;var J=Object(a.e)().gameType;Object(o.useEffect)((function(){console.log("mounted");for(var e=new Array(25),n=0;n<e.length;++n)e[n]=X();l(e),U(Y());var c=setInterval(V,50);return function(){clearInterval(c)}}),[]);var V=function(){var e=(Date.now()-O)/1e3;if("1to20"===J)g(e);else{var c=Math.max(0,60-e);g(c),0===c&&(alert("GAME OVER!!\n\n".concat(Z(L.current),"\uc810!!")),n.push("/"))}},X=function(){var e=[1,1,1,2,2,3,3,4,4];return e[parseInt(Math.random()*e.length)]},Y=function(){if("1to20"===J)return I+1;var e=0,n=0;for(G<2e3?(e=4,n=9):G<4e3?(e=5,n=10):G<6e3?(e=5,n=13):G<8e3?(e=6,n=14):(e=6,n=15);;){var c=Math.floor(Math.random()*(n-e+1))+e;if(c!==I)return c}},q=function(){return S.reduce((function(e,n){return e+i[n]}),0)},z=function(e){S.includes(e)||(console.log("processDrag",e),T([e].concat(Object(r.a)(S))))},H=Object(o.useCallback)((function(e){console.log("onClickCell",e),C(!0),z(e)}),[]),K=Object(o.useCallback)((function(e){N&&(console.log("onEnterCell",e),z(e))}),[N,S]),Q=Object(o.useCallback)((function(e){if(N)for(var n=e.touches[0].clientX,c=e.touches[0].clientY,t=0;t<d.current.children.length;++t){var a=d.current.children[t],r=a.getBoundingClientRect().x,s=a.getBoundingClientRect().width,o=a.getBoundingClientRect().y;if(r<=n&&n<=r+s&&o<c&&c<o+s){z(t);break}}})),W=function(){console.log("onMouseUp"),console.log(S,q()),function(){if(I===q()){console.log("\uc815\ub2f5"),B(Object(r.a)(S)),setTimeout((function(){B([])}),200),U(Y()),console.log(I);for(var e=Object(r.a)(i),c=0;c<S.length;++c)e[S[c]]=X();l(e),"1to20"===J?19<I&&(alert("GAME OVER!!\n\n".concat(v,"\ucd08!!")),n.push("/")):P(G+100*S.length)}else console.log("\uc624\ub2f5")}(),C(!1),T([])},Z=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(u.jsxs)("div",{onMouseUp:W,children:[Object(u.jsxs)("div",{className:"card card-number mb-20 none-drag",children:[Object(u.jsx)("div",{className:"card-header",children:"TARGET NUMBER"}),Object(u.jsx)("div",{className:"card-body",children:I})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-flex-end",children:[Object(u.jsxs)("div",{className:"card none-drag",children:[Object(u.jsx)("div",{className:"card-header",children:"TIME"}),Object(u.jsx)("div",{className:"card-body",children:v.toFixed(2)})]}),"1to20"===J&&Object(u.jsxs)("div",{className:"card none-drag",children:[Object(u.jsx)("div",{className:"card-header",children:"BEST-TIME"}),Object(u.jsx)("div",{className:"card-body",children:"-"})]}),"random"===J&&Object(u.jsxs)("div",{className:"card none-drag",children:[Object(u.jsx)("div",{className:"card-header",children:"SCORE"}),Object(u.jsx)("div",{className:"card-body",children:Z(G)})]}),"random"===J&&Object(u.jsxs)("div",{className:"card none-drag",children:[Object(u.jsxs)("div",{className:"card-header",children:["BEST",Object(u.jsx)("br",{}),"SCORE"]}),Object(u.jsx)("div",{className:"card-body",children:"-"})]})]}),Object(u.jsx)("div",{className:"board-wrapper1",children:Object(u.jsx)("div",{className:"board-wrapper2",children:Object(u.jsx)("div",{className:"board",ref:d,children:i.map((function(e,n){return Object(u.jsx)(j,{value:e,index:n,clicked:S.includes(n),isAnswer:y.includes(n),onClickCell:H,onEnterCell:K,onTouchMove:Q,onMouseUp:W},n)}))})})})]})},h=(c(37),function(){return Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center h-100",children:[Object(u.jsx)("div",{className:"title none-drag",children:"PLUSPANG"}),Object(u.jsx)(t.c,{to:"/game/1to20",className:"btn menu-item none-drag",children:"1 to 20"}),Object(u.jsx)(t.c,{to:"/game/random",className:"btn menu-item none-drag",children:"random"}),Object(u.jsx)(t.c,{to:"/rank",className:"btn menu-item disabled none-drag",children:"rank"})]})}),O=function(){return Object(u.jsx)("div",{children:"\ub7ad\ud06c"})};var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(t.b,{children:[Object(u.jsx)(a.a,{path:"/",component:h,exact:!0}),Object(u.jsx)(a.a,{path:"/game/:gameType",component:b}),Object(u.jsx)(a.a,{path:"/rank",component:O})]})})})},f=c(21),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;c(e),t(e),a(e),r(e),s(e)}))};c.n(f).a.render(Object(u.jsx)(t.a,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.f1e00b1f.chunk.js.map