import{S as m,J as $,K as z,L as g,M as V,N as b,U as _,O as A,x as y,G as M,P as H,Q as J,R as Q,V as W,W as X,q as D,X as p,Y as k,Z as ee,_ as re,$ as ne,a0 as te,a1 as ie,a2 as K,a3 as ae,a4 as Z,a5 as fe,a6 as se,a7 as ue,z as U,a8 as le,a9 as ce,aa as de,o as q,n as _e}from"./runtime.DMFTWqu5.js";import{c as ve}from"./store.2WtGbQkj.js";function x(e,r=null,d){if(typeof e!="object"||e===null||m in e)return e;const P=J(e);if(P!==$&&P!==z)return e;var f=new Map,l=Q(e),w=g(0);l&&f.set("length",g(e.length));var h;return new Proxy(e,{defineProperty(s,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&V();var a=f.get(n);return a===void 0?(a=g(t.value),f.set(n,a)):b(a,x(t.value,h)),!0},deleteProperty(s,n){var t=f.get(n);if(t===void 0)n in s&&f.set(n,g(_));else{if(l&&typeof n=="string"){var a=f.get("length"),i=Number(n);Number.isInteger(i)&&i<a.v&&b(a,i)}b(t,_),Y(w)}return!0},get(s,n,t){var v;if(n===m)return e;var a=f.get(n),i=n in s;if(a===void 0&&(!i||(v=A(s,n))!=null&&v.writable)&&(a=g(x(i?s[n]:_,h)),f.set(n,a)),a!==void 0){var u=y(a);return u===_?void 0:u}return Reflect.get(s,n,t)},getOwnPropertyDescriptor(s,n){var t=Reflect.getOwnPropertyDescriptor(s,n);if(t&&"value"in t){var a=f.get(n);a&&(t.value=y(a))}else if(t===void 0){var i=f.get(n),u=i==null?void 0:i.v;if(i!==void 0&&u!==_)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return t},has(s,n){var u;if(n===m)return!0;var t=f.get(n),a=t!==void 0&&t.v!==_||Reflect.has(s,n);if(t!==void 0||M!==null&&(!a||(u=A(s,n))!=null&&u.writable)){t===void 0&&(t=g(a?x(s[n],h):_),f.set(n,t));var i=y(t);if(i===_)return!1}return a},set(s,n,t,a){var I;var i=f.get(n),u=n in s;if(l&&n==="length")for(var v=t;v<i.v;v+=1){var R=f.get(v+"");R!==void 0?b(R,_):v in s&&(R=g(_),f.set(v+"",R))}i===void 0?(!u||(I=A(s,n))!=null&&I.writable)&&(i=g(void 0),b(i,x(t,h)),f.set(n,i)):(u=i.v!==_,b(i,x(t,h)));var o=Reflect.getOwnPropertyDescriptor(s,n);if(o!=null&&o.set&&o.set.call(a,t),!u){if(l&&typeof n=="string"){var E=f.get("length"),S=Number(n);Number.isInteger(S)&&S>=E.v&&b(E,S+1)}Y(w)}return!0},ownKeys(s){y(w);var n=Reflect.ownKeys(s).filter(i=>{var u=f.get(i);return u===void 0||u.v!==_});for(var[t,a]of f)a.v!==_&&!(t in s)&&n.push(t);return n},setPrototypeOf(){H()}})}function Y(e,r=1){b(e,e.v+r)}function j(e){return e!==null&&typeof e=="object"&&m in e?e[m]:e}function we(e,r){return Object.is(j(e),j(r))}function oe(e){throw new Error("lifecycle_outside_component")}function F(e,r){return e===r||(e==null?void 0:e[m])===r}function he(e={},r,d,P){return W(()=>{var f,l;return X(()=>{f=l,l=[],D(()=>{e!==d(...l)&&(r(e,...l),f&&F(d(...f),e)&&r(null,...f))})}),()=>{p(()=>{l&&F(d(...l),e)&&r(null,...l)})}}),e}const be={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Re(e,r,d){return new Proxy({props:e,exclude:r},be)}function G(e){for(var r=M,d=M;r!==null&&!(r.f&(te|ie));)r=r.parent;try{return K(r),e()}finally{K(d)}}function me(e,r,d,P){var C;var f=(d&ae)!==0,l=!Z||(d&fe)!==0,w=(d&se)!==0,h=(d&ce)!==0,s=!1,n;w?[n,s]=ve(()=>e[r]):n=e[r];var t=m in e||ue in e,a=((C=A(e,r))==null?void 0:C.set)??(t&&w&&r in e?c=>e[r]=c:void 0),i=P,u=!0,v=!1,R=()=>(v=!0,u&&(u=!1,h?i=D(P):i=P),i);n===void 0&&P!==void 0&&(a&&l&&k(),n=R(),a&&a(n));var o;if(l)o=()=>{var c=e[r];return c===void 0?R():(u=!0,v=!1,c)};else{var E=G(()=>(f?U:le)(()=>e[r]));E.f|=ee,o=()=>{var c=y(E);return c!==void 0&&(i=void 0),c===void 0?i:c}}if(!(d&re))return o;if(a){var S=e.$$legacy;return function(c,O){return arguments.length>0?((!l||!O||S||s)&&a(O?o():c),c):o()}}var I=!1,B=!1,L=de(n),N=G(()=>U(()=>{var c=o(),O=y(L);return I?(I=!1,B=!0,O):(B=!1,L.v=c)}));return f||(N.equals=ne),function(c,O){if(arguments.length>0){const T=O?y(N):l&&w?x(c):c;return N.equals(T)||(I=!0,b(L,T),v&&i!==void 0&&(i=T),D(()=>y(N))),c}return y(N)}}function Ie(e){q===null&&oe(),Z&&q.l!==null?ye(q).m.push(e):_e(()=>{const r=D(e);if(typeof r=="function")return r})}function ye(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{x as a,he as b,we as i,Ie as o,me as p,Re as r};
