import{S as e,i as s,s as t,e as r,c as a,a as l,d as o,b as n,f as c,D as i,E as h,t as f,k as u,g as d,n as p,h as g,F as $,G as m,j as v,m as b,o as x,H as E,v as w,r as I,w as y}from"../chunks/vendor-5dd1f59b.js";import{b as P}from"../chunks/paths-45dac81d.js";function k(e){let s,t,f,u,d;return{c(){s=r("div"),t=r("nav"),f=r("a"),u=r("img"),this.h()},l(e){s=a(e,"DIV",{class:!0});var r=l(s);t=a(r,"NAV",{class:!0});var n=l(t);f=a(n,"A",{href:!0});var c=l(f);u=a(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(o),n.forEach(o),r.forEach(o),this.h()},h(){u.src!==(d=`${P}/tplogo-red.svg`)&&n(u,"src",d),n(u,"alt","Telstra Purple"),n(u,"class","px-48 py-4"),n(f,"href",P+"/"),n(t,"class","border-t-2 border-solid border-red-100"),n(s,"class","filter drop-shadow-md bg-white-100")},m(e,r){c(e,s,r),i(s,t),i(t,f),i(f,u)},p:h,i:h,o:h,d(e){e&&o(s)}}}class D extends e{constructor(e){super(),s(this,e,null,k,t,{})}}function V(e,s,t){const r=e.slice();return r[1]=s[t],r}function j(e){let s,t,h,$,m,v=e[1].metadata.title+"";return{c(){s=r("a"),t=r("h3"),h=f(v),$=u(),this.h()},l(e){s=a(e,"A",{href:!0,class:!0});var r=l(s);t=a(r,"H3",{class:!0});var n=l(t);h=d(n,v),n.forEach(o),$=p(r),r.forEach(o),this.h()},h(){n(t,"class","text-red-100"),n(s,"href",m=`${P}/${e[1].slug}`),n(s,"class","text-red-400")},m(e,r){c(e,s,r),i(s,t),i(t,h),i(s,$)},p(e,t){1&t&&v!==(v=e[1].metadata.title+"")&&g(h,v),1&t&&m!==(m=`${P}/${e[1].slug}`)&&n(s,"href",m)},d(e){e&&o(s)}}}function T(e){let s,t,g,m,v,b,x,E,w,I,y,k,D,T,G,H,R,A,B,M,O,F,N,S,q,z,C=e[0],J=[];for(let r=0;r<C.length;r+=1)J[r]=j(V(e,C,r));return{c(){s=r("div"),t=r("div"),g=r("div"),m=r("h1"),v=f("Purple Personas"),b=u(),x=r("p"),E=f("This page describes each of the consulting roles at Telstra Purple. It seeks to describe\n\t\t\t\tsome defining characteristics about each role to give our people and future Purplonians a\n\t\t\t\tclear understanding of what we do."),w=u(),I=r("br"),y=u(),k=r("p"),D=f("It's the anchor point used through all of our feedback and promotion cycles."),T=u(),G=r("br"),H=u(),R=r("p"),A=f("It's a living document, maintained by the very people it affects."),B=u(),M=r("img"),F=u(),N=r("h2"),S=f("Our Roles"),q=u(),z=r("div");for(let e=0;e<J.length;e+=1)J[e].c();this.h()},l(e){s=a(e,"DIV",{class:!0});var r=l(s);t=a(r,"DIV",{class:!0});var n=l(t);g=a(n,"DIV",{class:!0});var c=l(g);m=a(c,"H1",{class:!0});var i=l(m);v=d(i,"Purple Personas"),i.forEach(o),b=p(c),x=a(c,"P",{});var h=l(x);E=d(h,"This page describes each of the consulting roles at Telstra Purple. It seeks to describe\n\t\t\t\tsome defining characteristics about each role to give our people and future Purplonians a\n\t\t\t\tclear understanding of what we do."),h.forEach(o),w=p(c),I=a(c,"BR",{}),y=p(c),k=a(c,"P",{});var f=l(k);D=d(f,"It's the anchor point used through all of our feedback and promotion cycles."),f.forEach(o),T=p(c),G=a(c,"BR",{}),H=p(c),R=a(c,"P",{});var u=l(R);A=d(u,"It's a living document, maintained by the very people it affects."),u.forEach(o),c.forEach(o),B=p(n),M=a(n,"IMG",{src:!0,alt:!0}),n.forEach(o),F=p(r),N=a(r,"H2",{class:!0});var $=l(N);S=d($,"Our Roles"),$.forEach(o),q=p(r),z=a(r,"DIV",{class:!0});var P=l(z);for(let s=0;s<J.length;s+=1)J[s].l(P);P.forEach(o),r.forEach(o),this.h()},h(){n(m,"class","pb-12"),n(g,"class","flex flex-col"),M.src!==(O=`${P}/people.svg`)&&n(M,"src",O),n(M,"alt","Group of diverse people"),n(t,"class","flex flex-row"),n(N,"class","py-12"),n(z,"class","flex flex-row justify-between flex-wrap"),n(s,"class","bg-grey-100 px-48 py-24")},m(e,r){c(e,s,r),i(s,t),i(t,g),i(g,m),i(m,v),i(g,b),i(g,x),i(x,E),i(g,w),i(g,I),i(g,y),i(g,k),i(k,D),i(g,T),i(g,G),i(g,H),i(g,R),i(R,A),i(t,B),i(t,M),i(s,F),i(s,N),i(N,S),i(s,q),i(s,z);for(let s=0;s<J.length;s+=1)J[s].m(z,null)},p(e,[s]){if(1&s){let t;for(C=e[0],t=0;t<C.length;t+=1){const r=V(e,C,t);J[t]?J[t].p(r,s):(J[t]=j(r),J[t].c(),J[t].m(z,null))}for(;t<J.length;t+=1)J[t].d(1);J.length=C.length}},i:h,o:h,d(e){e&&o(s),$(J,e)}}}function G(e,s,t){let{roles:r}=s;return e.$$set=e=>{"roles"in e&&t(0,r=e.roles)},[r]}class H extends e{constructor(e){super(),s(this,e,G,T,t,{roles:0})}}function R(e){let s,t,n,h,f,d;t=new D({}),h=new H({props:{roles:e[0]}});const g=e[2].default,$=m(g,e,e[1],null);return{c(){s=r("div"),v(t.$$.fragment),n=u(),v(h.$$.fragment),f=u(),$&&$.c()},l(e){s=a(e,"DIV",{});var r=l(s);b(t.$$.fragment,r),n=p(r),b(h.$$.fragment,r),f=p(r),$&&$.l(r),r.forEach(o)},m(e,r){c(e,s,r),x(t,s,null),i(s,n),x(h,s,null),i(s,f),$&&$.m(s,null),d=!0},p(e,[s]){const t={};1&s&&(t.roles=e[0]),h.$set(t),$&&$.p&&(!d||2&s)&&E($,g,e,e[1],d?s:-1,null,null)},i(e){d||(w(t.$$.fragment,e),w(h.$$.fragment,e),w($,e),d=!0)},o(e){I(t.$$.fragment,e),I(h.$$.fragment,e),I($,e),d=!1},d(e){e&&o(s),y(t),y(h),$&&$.d(e)}}}async function A({fetch:e}){return{props:{roles:await e(`${P}/index.json`).then((e=>e.json()))}}}function B(e,s,t){let{$$slots:r={},$$scope:a}=s,{roles:l}=s;return e.$$set=e=>{"roles"in e&&t(0,l=e.roles),"$$scope"in e&&t(1,a=e.$$scope)},[l,a,r]}export default class extends e{constructor(e){super(),s(this,e,B,R,t,{roles:0})}}export{A as load};