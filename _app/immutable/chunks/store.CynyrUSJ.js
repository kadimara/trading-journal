import{af as m,Z as I,ag as L,ah as O,ai as y,e as b,s as N,c as V,k as l,aj as j,ak as k,al as H,_ as Y,am as C,an as M,ao as $,j as J,a8 as K,h as w,K as P,ab as W,X,ap as E,u as Z,a1 as q,J as z,w as B,x as F}from"./runtime.CJk2xlFp.js";import{b as G,r as A,h}from"./events.DAIMaw0X.js";import{b as Q}from"./disclose-version.DX0SoH6X.js";const U=["touchstart","touchmove"];function x(e){return U.includes(e)}function ae(e,s){var r=s==null?"":typeof s=="object"?s+"":s;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ee(e,s){return S(e,s)}function ie(e,s){m(),s.intro=s.intro??!1;const r=s.target,t=w,o=l;try{for(var n=I(r);n&&(n.nodeType!==8||n.data!==L);)n=O(n);if(!n)throw y;b(!0),N(n),V();const f=S(e,{...s,anchor:n});if(l===null||l.nodeType!==8||l.data!==j)throw k(),y;return b(!1),f}catch(f){if(f===y)return s.recover===!1&&H(),m(),Y(r),b(!1),ee(e,s);throw f}finally{b(t),N(o)}}const d=new Map;function S(e,{target:s,anchor:r,props:t={},events:o,context:n,intro:f=!0}){m();var g=new Set,p=u=>{for(var a=0;a<u.length;a++){var i=u[a];if(!g.has(i)){g.add(i);var c=x(i);s.addEventListener(i,h,{passive:c});var R=d.get(i);R===void 0?(document.addEventListener(i,h,{passive:c}),d.set(i,1)):d.set(i,R+1)}}};p(C(G)),A.add(p);var _=void 0,D=M(()=>{var u=r??s.appendChild($());return J(()=>{if(n){K({});var a=X;a.c=n}o&&(t.$$events=o),w&&Q(u,null),_=e(u,t)||{},w&&(P.nodes_end=l),n&&W()}),()=>{var c;for(var a of g){s.removeEventListener(a,h);var i=d.get(a);--i===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,i)}A.delete(p),T.delete(_),u!==r&&((c=u.parentNode)==null||c.removeChild(u))}});return T.set(_,D),_}let T=new WeakMap;function ue(e){const s=T.get(e);s&&s()}function se(e,s,r){if(e==null)return s(void 0),E;const t=Z(()=>e.subscribe(s,r));return t.unsubscribe?()=>t.unsubscribe():t}let v=!1;function oe(e,s,r){const t=r[s]??(r[s]={store:null,source:z(void 0),unsubscribe:E});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=E;else{var o=!0;t.unsubscribe=se(e,n=>{o?t.source.v=n:F(t.source,n)}),o=!1}return B(t.source)}function de(){const e={};return q(()=>{for(var s in e)e[s].unsubscribe()}),e}function fe(e){var s=v;try{return v=!1,[e(),v]}finally{v=s}}export{ae as a,oe as b,fe as c,ie as h,ee as m,de as s,ue as u};
