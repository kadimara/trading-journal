import{h as l,x as n,L as i,v as d,y as t,z as h,A as y,B as A}from"./runtime.1f-R8Xtu.js";import{a as g,l as k}from"./store.e9OfJAL2.js";function m(r){if(l){var e=!1,s=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var f=r.value;u(r,"value",null),r.value=f}if(r.hasAttribute("checked")){var a=r.checked;u(r,"checked",null),r.checked=a}}};r.__on_r=s,n(s),g()}}function u(r,e,s,f){var a=r.__attributes??(r.__attributes={});l&&(a[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||a[e]!==(a[e]=s)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[i]=s),s==null?r.removeAttribute(e):typeof s!="string"&&N(r).includes(e)?r[e]=s:r.setAttribute(e,s))}var c=new Map;function N(r){var e=c.get(r.nodeName);if(e)return e;c.set(r.nodeName,e=[]);for(var s,f=d(r),a=Element.prototype;a!==f;){s=t(f);for(var _ in s)s[_].set&&e.push(_);f=d(f)}return e}function x(r,e,s=e){var f=h();k(r,"input",a=>{var _=a?r.defaultValue:r.value;_=o(r)?v(_):_,s(_),f&&_!==(_=e())&&(r.value=_??"")}),(l&&r.defaultValue!==r.value||y(e)==null&&r.value)&&s(o(r)?v(r.value):r.value),A(()=>{var a=e();o(r)&&a===v(r.value)||r.type==="date"&&!a&&!r.value||a!==r.value&&(r.value=a??"")})}function o(r){var e=r.type;return e==="number"||e==="range"}function v(r){return r===""?null:+r}export{x as b,m as r,u as s};
