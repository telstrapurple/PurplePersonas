import{S as e,i as t,s,e as a,t as i,k as r,c as l,a as n,g as o,d as u,n as c,b as p,f as m,D as h,h as f,H as d,E as v,I as g}from"../chunks/vendor-a41b0e1e.js";import{b}from"../chunks/paths-45dac81d.js";function P(e,t,s){const a=e.slice();return a[1]=t[s],a}function q(e){let t,s,d,v,g,P=e[1].metadata.title+"";return{c(){t=a("a"),s=a("h3"),d=i(P),v=r(),this.h()},l(e){t=l(e,"A",{href:!0});var a=n(t);s=l(a,"H3",{class:!0});var i=n(s);d=o(i,P),i.forEach(u),v=c(a),a.forEach(u),this.h()},h(){p(s,"class","title"),p(t,"href",g=`${b}/${e[1].slug}`)},m(e,a){m(e,t,a),h(t,s),h(s,d),h(t,v)},p(e,s){1&s&&P!==(P=e[1].metadata.title+"")&&f(d,P),1&s&&g!==(g=`${b}/${e[1].slug}`)&&p(t,"href",g)},d(e){e&&u(t)}}}function E(e){let t,s,p,f,b,E,$,j,H,x,D,I=e[0],N=[];for(let a=0;a<I.length;a+=1)N[a]=q(P(e,I,a));return{c(){t=r(),s=a("div"),p=a("h1"),f=i("Purple Personas"),b=r(),E=a("p"),$=i("Blurb about Purple Personas - Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\tPellentesque lobortis libero sollicitudin feugiat feugiat. Class aptent taciti sociosqu ad\n\t\tlitora torquent per conubia nostra, per inceptos himenaeos. In egestas erat nisl, at cursus\n\t\tlacus luctus eu. Nam commodo metus sed est pulvinar euismod. Donec suscipit nec lacus vitae\n\t\timperdiet. Nam faucibus leo eget imperdiet posuere. Pellentesque gravida mauris vitae tortor\n\t\tpulvinar efficitur. Phasellus sit amet bibendum sapien. Aliquam in placerat enim. Phasellus vel\n\t\taccumsan velit. Maecenas placerat efficitur justo vel posuere."),j=r(),H=a("h2"),x=i("Our Roles"),D=r();for(let e=0;e<N.length;e+=1)N[e].c();this.h()},l(e){d('[data-svelte="svelte-1anpopb"]',document.head).forEach(u),t=c(e),s=l(e,"DIV",{});var a=n(s);p=l(a,"H1",{});var i=n(p);f=o(i,"Purple Personas"),i.forEach(u),b=c(a),E=l(a,"P",{});var r=n(E);$=o(r,"Blurb about Purple Personas - Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\tPellentesque lobortis libero sollicitudin feugiat feugiat. Class aptent taciti sociosqu ad\n\t\tlitora torquent per conubia nostra, per inceptos himenaeos. In egestas erat nisl, at cursus\n\t\tlacus luctus eu. Nam commodo metus sed est pulvinar euismod. Donec suscipit nec lacus vitae\n\t\timperdiet. Nam faucibus leo eget imperdiet posuere. Pellentesque gravida mauris vitae tortor\n\t\tpulvinar efficitur. Phasellus sit amet bibendum sapien. Aliquam in placerat enim. Phasellus vel\n\t\taccumsan velit. Maecenas placerat efficitur justo vel posuere."),r.forEach(u),j=c(a),H=l(a,"H2",{});var m=n(H);x=o(m,"Our Roles"),m.forEach(u),D=c(a);for(let t=0;t<N.length;t+=1)N[t].l(a);a.forEach(u),this.h()},h(){document.title="Home"},m(e,a){m(e,t,a),m(e,s,a),h(s,p),h(p,f),h(s,b),h(s,E),h(E,$),h(s,j),h(s,H),h(H,x),h(s,D);for(let t=0;t<N.length;t+=1)N[t].m(s,null)},p(e,[t]){if(1&t){let a;for(I=e[0],a=0;a<I.length;a+=1){const i=P(e,I,a);N[a]?N[a].p(i,t):(N[a]=q(i),N[a].c(),N[a].m(s,null))}for(;a<N.length;a+=1)N[a].d(1);N.length=I.length}},i:v,o:v,d(e){e&&u(t),e&&u(s),g(N,e)}}}async function $({fetch:e}){return{props:{roles:await e(`${b}/index.json`).then((e=>e.json()))}}}function j(e,t,s){let{roles:a}=t;return e.$$set=e=>{"roles"in e&&s(0,a=e.roles)},[a]}export default class extends e{constructor(e){super(),t(this,e,j,E,s,{roles:0})}}export{$ as load};
