import{S as a,i as s,s as c,e as r,k as t,t as l,c as i,a as e,n as o,g as d,d as h,H as v,b as n,f,D as m,h as p,E}from"./vendor-ea1ca524.js";function g(a){let s,c,g,D,I,V,b,u,x,P,w,H,T,j,y,$,k,C,G,M,S,q,z=a[0].title+"",A=a[0].price+"",B=a[0].tags+"";return{c(){s=r("div"),c=r("div"),g=r("img"),I=t(),V=r("div"),b=r("div"),u=r("div"),x=r("div"),P=r("h5"),w=l(z),H=t(),T=r("div"),j=r("p"),y=l("Price:"),$=t(),k=r("p"),C=l("ETH "),G=l(A),M=t(),S=r("p"),q=l(B),this.h()},l(a){s=i(a,"DIV",{class:!0});var r=e(s);c=i(r,"DIV",{class:!0});var t=e(c);g=i(t,"IMG",{src:!0,class:!0,alt:!0}),I=o(t),V=i(t,"DIV",{class:!0});var l=e(V);b=i(l,"DIV",{class:!0});var v=e(b);u=i(v,"DIV",{class:!0});var n=e(u);x=i(n,"DIV",{class:!0});var f=e(x);P=i(f,"H5",{class:!0});var m=e(P);w=d(m,z),m.forEach(h),f.forEach(h),H=o(n),T=i(n,"DIV",{class:!0});var p=e(T);j=i(p,"P",{class:!0});var E=e(j);y=d(E,"Price:"),E.forEach(h),$=o(p),k=i(p,"P",{class:!0});var D=e(k);C=d(D,"ETH "),G=d(D,A),D.forEach(h),M=o(p),S=i(p,"P",{class:!0});var F=e(S);q=d(F,B),F.forEach(h),p.forEach(h),n.forEach(h),v.forEach(h),l.forEach(h),t.forEach(h),r.forEach(h),this.h()},h(){v(g.src,D=a[0].image)||n(g,"src",D),n(g,"class","card-img-top svelte-t6liww"),n(g,"alt","..."),n(P,"class","card-title"),n(x,"class","col"),n(j,"class","card-text mb-1"),n(k,"class","card-text mb-1"),n(S,"class","card-text mb-1"),n(T,"class","col text-end"),n(u,"class","row"),n(b,"class","container"),n(V,"class","card-body"),n(c,"class","card h-100"),n(s,"class","col")},m(a,r){f(a,s,r),m(s,c),m(c,g),m(c,I),m(c,V),m(V,b),m(b,u),m(u,x),m(x,P),m(P,w),m(u,H),m(u,T),m(T,j),m(j,y),m(T,$),m(T,k),m(k,C),m(k,G),m(T,M),m(T,S),m(S,q)},p(a,[s]){1&s&&!v(g.src,D=a[0].image)&&n(g,"src",D),1&s&&z!==(z=a[0].title+"")&&p(w,z),1&s&&A!==(A=a[0].price+"")&&p(G,A),1&s&&B!==(B=a[0].tags+"")&&p(q,B)},i:E,o:E,d(a){a&&h(s)}}}function D(a,s,c){let{data:r={image:"https://mdbootstrap.com/img/new/standard/city/041.jpg",title:"Tron",price:"0.10",tags:"tron"}}=s;return a.$$set=a=>{"data"in a&&c(0,r=a.data)},[r]}class I extends a{constructor(a){super(),s(this,a,D,g,c,{data:0})}}export{I as C};
