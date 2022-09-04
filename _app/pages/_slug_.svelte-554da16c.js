import{S as G,i as J,s as P,a as S,r as y,x as q,K as Q,n as p,d as j,u as E,v as L,y as V,w as x,f as $,E as g,L as z,z as R,C as F,F as W,M as X,N as Z}from"../chunks/index-abb9d358.js";import{b as tt}from"../chunks/paths-28a87002.js";const{document:M,window:et}=Z;function K(n,l,o){const e=n.slice();return e[5]=l[o],e}function O(n){let l,o,e=n[5]+"",i,c,d;return{c(){l=y("a"),o=y("div"),i=q(e),c=S(),this.h()},l(s){l=E(s,"A",{href:!0,class:!0});var u=L(l);o=E(u,"DIV",{class:!0});var r=L(o);i=V(r,e),r.forEach(p),c=j(u),u.forEach(p),this.h()},h(){x(o,"class","rounded-lg px-5 py-2 bg-black text-white text-lg mr-4 mb-2 hover:bg-red"),x(l,"href",d=`#${n[5].toLocaleLowerCase().replace(" ","-")}-role-requirements`),x(l,"class","text-red")},m(s,u){$(s,l,u),g(l,o),g(o,i),g(l,c)},p(s,u){u&1&&e!==(e=s[5]+"")&&R(i,e),u&1&&d!==(d=`#${s[5].toLocaleLowerCase().replace(" ","-")}-role-requirements`)&&x(l,"href",d)},d(s){s&&p(l)}}}function lt(n){let l,o,e,i,c=n[0].metadata.title+"",d,s,u,r,f,_,m,T=n[0].content+"",B,w,k,b,I;M.title=l="Purple Personas - "+n[0].metadata.title;let C=n[0].metadata.roles.split(","),h=[];for(let t=0;t<C.length;t+=1)h[t]=O(K(n,C,t));return{c(){o=S(),e=y("div"),i=y("h2"),d=q(c),s=q(" roles"),u=S(),r=y("div");for(let t=0;t<h.length;t+=1)h[t].c();f=S(),_=y("div"),m=y("article"),B=S(),w=y("button"),k=q("Top"),this.h()},l(t){Q('[data-svelte="svelte-9fdwjf"]',M.head).forEach(p),o=j(t),e=E(t,"DIV",{class:!0});var a=L(e);i=E(a,"H2",{class:!0});var D=L(i);d=V(D,c),s=V(D," roles"),D.forEach(p),u=j(a),r=E(a,"DIV",{class:!0});var A=L(r);for(let H=0;H<h.length;H+=1)h[H].l(A);A.forEach(p),a.forEach(p),f=j(t),_=E(t,"DIV",{class:!0});var N=L(_);m=E(N,"ARTICLE",{class:!0});var Y=L(m);Y.forEach(p),N.forEach(p),B=j(t),w=E(t,"BUTTON",{id:!0,class:!0});var U=L(w);k=V(U,"Top"),U.forEach(p),this.h()},h(){x(i,"class","pb-4 lg:pb-4 text-black text-xl"),x(r,"class","flex flex-col lg:flex-row justify-start pb-2 lg:pb-8"),x(e,"class","px-12 lg:px-32 max-w-full bg-gray"),x(m,"class","portfolio"),x(_,"class","flex flex-col sm:flex-row px-12 lg:px-32 pt-4 lg:pt-14 bg-gray-lighter"),x(w,"id","scrollToTopButton"),x(w,"class","fixed bottom-5 right-7 bg-red text-white p-3 text-lg rounded-xl hidden")},m(t,v){$(t,o,v),$(t,e,v),g(e,i),g(i,d),g(i,s),g(e,u),g(e,r);for(let a=0;a<h.length;a+=1)h[a].m(r,null);$(t,f,v),$(t,_,v),g(_,m),m.innerHTML=T,$(t,B,v),$(t,w,v),g(w,k),b||(I=[z(et,"scroll",n[2]),z(w,"click",n[3])],b=!0)},p(t,[v]){if(v&1&&l!==(l="Purple Personas - "+t[0].metadata.title)&&(M.title=l),v&1&&c!==(c=t[0].metadata.title+"")&&R(d,c),v&1){C=t[0].metadata.roles.split(",");let a;for(a=0;a<C.length;a+=1){const D=K(t,C,a);h[a]?h[a].p(D,v):(h[a]=O(D),h[a].c(),h[a].m(r,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=C.length}v&1&&T!==(T=t[0].content+"")&&(m.innerHTML=T)},i:F,o:F,d(t){t&&p(o),t&&p(e),W(h,t),t&&p(f),t&&p(_),t&&p(B),t&&p(w),b=!1,X(I)}}}var st=globalThis&&globalThis.__awaiter||function(n,l,o,e){function i(c){return c instanceof o?c:new o(function(d){d(c)})}return new(o||(o=Promise))(function(c,d){function s(f){try{r(e.next(f))}catch(_){d(_)}}function u(f){try{r(e.throw(f))}catch(_){d(_)}}function r(f){f.done?c(f.value):i(f.value).then(s,u)}r((e=e.apply(n,l||[])).next())})};const it=({page:n,fetch:l})=>st(void 0,void 0,void 0,function*(){const o=n.params.slug;return{props:{post:yield l(`${tt}/${o}.json`).then(i=>i.json())}}});function ot(n,l,o){this&&this.__awaiter;let{post:e}=l;const i=()=>{window.scrollTo(0,0)},c=()=>{let s=document.getElementById("scrollToTopButton");window.scrollY>500?(s.classList.add("block"),s.classList.remove("hidden")):(s.classList.add("hidden"),s.classList.remove("block"))},d=()=>i();return n.$$set=s=>{"post"in s&&o(0,e=s.post)},[e,i,c,d]}class rt extends G{constructor(l){super(),J(this,l,ot,lt,P,{post:0,scrollToTop:1,handleScroll:2})}get scrollToTop(){return this.$$.ctx[1]}get handleScroll(){return this.$$.ctx[2]}}export{rt as default,it as load};
