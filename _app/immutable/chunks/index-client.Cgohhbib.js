import{S as R,J as G,K as V,L as P,M as z,N as g,U as v,O as D,m as y,D as j,P as H,Q as J,R as Q,V as W,W as X,j as x,X as k,Y as p,Z as ee,_ as re,$ as te,a0 as ne,a1 as ae,a2 as C,a3 as ie,a4 as $,a5 as fe,a6 as se,a7 as ue,o as U,a8 as le,a9 as _e,aa as ve,i as M,g as de}from"./runtime.Bas2-fRA.js";import{c as ce}from"./store.Byoh2nn8.js";function E(e,n=null,d){if(typeof e!="object"||e===null||R in e)return e;const b=J(e);if(b!==G&&b!==V)return e;var f=new Map,l=Q(e),h=P(0);l&&f.set("length",P(e.length));var w;return new Proxy(e,{defineProperty(s,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&z();var i=f.get(r);return i===void 0?(i=P(t.value),f.set(r,i)):g(i,E(t.value,w)),!0},deleteProperty(s,r){var t=f.get(r);if(t===void 0)r in s&&f.set(r,P(v));else{if(l&&typeof r=="string"){var i=f.get("length"),a=Number(r);Number.isInteger(a)&&a<i.v&&g(i,a)}g(t,v),Y(h)}return!0},get(s,r,t){var c;if(r===R)return e;var i=f.get(r),a=r in s;if(i===void 0&&(!a||(c=D(s,r))!=null&&c.writable)&&(i=P(E(a?s[r]:v,w)),f.set(r,i)),i!==void 0){var u=y(i);return u===v?void 0:u}return Reflect.get(s,r,t)},getOwnPropertyDescriptor(s,r){var t=Reflect.getOwnPropertyDescriptor(s,r);if(t&&"value"in t){var i=f.get(r);i&&(t.value=y(i))}else if(t===void 0){var a=f.get(r),u=a==null?void 0:a.v;if(a!==void 0&&u!==v)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return t},has(s,r){var u;if(r===R)return!0;var t=f.get(r),i=t!==void 0&&t.v!==v||Reflect.has(s,r);if(t!==void 0||j!==null&&(!i||(u=D(s,r))!=null&&u.writable)){t===void 0&&(t=P(i?E(s[r],w):v),f.set(r,t));var a=y(t);if(a===v)return!1}return i},set(s,r,t,i){var m;var a=f.get(r),u=r in s;if(l&&r==="length")for(var c=t;c<a.v;c+=1){var I=f.get(c+"");I!==void 0?g(I,v):c in s&&(I=P(v),f.set(c+"",I))}a===void 0?(!u||(m=D(s,r))!=null&&m.writable)&&(a=P(void 0),g(a,E(t,w)),f.set(r,a)):(u=a.v!==v,g(a,E(t,w)));var o=Reflect.getOwnPropertyDescriptor(s,r);if(o!=null&&o.set&&o.set.call(i,t),!u){if(l&&typeof r=="string"){var S=f.get("length"),N=Number(r);Number.isInteger(N)&&N>=S.v&&g(S,N+1)}Y(h)}return!0},ownKeys(s){y(h);var r=Reflect.ownKeys(s).filter(a=>{var u=f.get(a);return u===void 0||u.v!==v});for(var[t,i]of f)i.v!==v&&!(t in s)&&r.push(t);return r},setPrototypeOf(){H()}})}function Y(e,n=1){g(e,e.v+n)}function F(e){return e!==null&&typeof e=="object"&&R in e?e[R]:e}function Pe(e,n){return Object.is(F(e),F(n))}function oe(e){throw new Error("lifecycle_outside_component")}function K(e,n){return e===n||(e==null?void 0:e[R])===n}function he(e={},n,d,b){return W(()=>{var f,l;return X(()=>{f=l,l=[],x(()=>{e!==d(...l)&&(n(e,...l),f&&K(d(...f),e)&&n(null,...f))})}),()=>{k(()=>{l&&K(d(...l),e)&&n(null,...l)})}}),e}function Z(e){for(var n=j,d=j;n!==null&&!(n.f&(ne|ae));)n=n.parent;try{return C(n),e()}finally{C(d)}}function we(e,n,d,b){var B;var f=(d&ie)!==0,l=!$||(d&fe)!==0,h=(d&se)!==0,w=(d&_e)!==0,s=!1,r;h?[r,s]=ce(()=>e[n]):r=e[n];var t=R in e||ue in e,i=((B=D(e,n))==null?void 0:B.set)??(t&&h&&n in e?_=>e[n]=_:void 0),a=b,u=!0,c=!1,I=()=>(c=!0,u&&(u=!1,w?a=x(b):a=b),a);r===void 0&&b!==void 0&&(i&&l&&p(),r=I(),i&&i(r));var o;if(l)o=()=>{var _=e[n];return _===void 0?I():(u=!0,c=!1,_)};else{var S=Z(()=>(f?U:le)(()=>e[n]));S.f|=ee,o=()=>{var _=y(S);return _!==void 0&&(a=void 0),_===void 0?a:_}}if(!(d&re))return o;if(i){var N=e.$$legacy;return function(_,O){return arguments.length>0?((!l||!O||N||s)&&i(O?o():_),_):o()}}var m=!1,q=!1,L=ve(r),A=Z(()=>U(()=>{var _=o(),O=y(L);return m?(m=!1,q=!0,O):(q=!1,L.v=_)}));return f||(A.equals=te),function(_,O){if(arguments.length>0){const T=O?y(A):l&&h?E(_):_;return A.equals(T)||(m=!0,g(L,T),c&&a!==void 0&&(a=T),x(()=>y(A))),_}return y(A)}}function Ie(e){M===null&&oe(),$&&M.l!==null?ge(M).m.push(e):de(()=>{const n=x(e);if(typeof n=="function")return n})}function ge(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{E as a,he as b,Pe as i,Ie as o,we as p};
