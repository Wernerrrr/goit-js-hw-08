!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var i,r,u,a,l,f,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,l=setTimeout(T,t),d?y(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=u}function T(){var e=g();if(E(e))return j(e);l=setTimeout(T,function(e){var n=t-(e-f);return s?p(n,u-(e-c)):n}(e))}function j(e){return l=void 0,v&&i?y(e):(i=r=void 0,a)}function w(){var e=g(),n=E(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return S(f);if(s)return l=setTimeout(T,t),y(f)}return void 0===l&&(l=setTimeout(T,t)),a}return t=O(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=r=l=void 0},w.flush=function(){return void 0===l?a:j(g())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})},STORAGE_KEY="feedback-form-state";var S=document.querySelector("input"),E=document.querySelector("textarea"),T=document.querySelector("button"),j={email:S.value,message:E.value};function w(e){j.email=S.value,j.message=E.value,localStorage.setItem(STORAGE_KEY,JSON.stringify(j))}S.addEventListener("input",e(t)(w,500)),E.addEventListener("input",e(t)(w,500)),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(STORAGE_KEY);null!==e&&(S.value=JSON.parse(e).email,E.value=JSON.parse(e).message)})),T.addEventListener("click",(function(e){e.preventDefault(),S.value&&E.value&&(j.email=S.value,j.message=E.value,console.log(j),S.value="",E.value="",localStorage.clear())}))}();
//# sourceMappingURL=03-feedback.72fe531c.js.map
