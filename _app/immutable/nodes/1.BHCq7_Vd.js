import{a as d,t as v}from"../chunks/disclose-version.DX0SoH6X.js";import{a3 as h,Y as p,X as $,u as x,a4 as k,a5 as u,w as _,a6 as y,G as w,a7 as E,a8 as G,a9 as S,aa as X,ab as Y,ac as j,ad as l,ae as g}from"../chunks/runtime.CJk2xlFp.js";import{s as q,a as b,b as z}from"../chunks/store.CynyrUSJ.js";import{s as A}from"../chunks/entry.Dussy-TG.js";function B(s=!1){const e=$,t=e.l.u;if(!t)return;let n=()=>y(e.s);if(s){let r=0,a={};const f=w(()=>{let c=!1;const i=e.s;for(const o in i)i[o]!==a[o]&&(a[o]=i[o],c=!0);return c&&r++,r});n=()=>_(f)}t.b.length&&h(()=>{m(e,n),u(t.b)}),p(()=>{const r=x(()=>t.m.map(k));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&p(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}E();const C=()=>{const s=A;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},D={subscribe(s){return C().page.subscribe(s)}};var F=v("<h1> </h1> <p> </p>",1);function L(s,e){G(e,!1);const t=q(),n=()=>z(D,"$page",t);B();var r=F(),a=S(r),f=l(a,!0);g(a);var c=j(a,2),i=l(c,!0);g(c),X(()=>{var o;b(f,n().status),b(i,(o=n().error)==null?void 0:o.message)}),d(s,r),Y()}export{L as component};
