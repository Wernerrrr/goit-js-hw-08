function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return c.Date.now()};function m(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,u=setTimeout(w,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=p();if(S(e))return j(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function j(e){return u=void 0,m&&i?b(e):(i=o=void 0,a)}function E(){var e=p(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return O(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},E.flush=function(){return void 0===u?a:j(p())},E}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})},STORAGE_KEY="feedback-form-state";const b=document.querySelector("input"),O=document.querySelector("textarea"),S=document.querySelector("button");var w={email:b.value,message:O.value};function j(e){w.email=b.value,w.message=O.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}b.addEventListener("input",e(t)(j,500)),O.addEventListener("input",e(t)(j,500)),window.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("feedback-form-state");null!==e&&(b.value=JSON.parse(e).email,O.value=JSON.parse(e).message)})),S.addEventListener("click",(function(e){e.preventDefault(),b.value&&O.value&&(w.email=b.value,w.message=O.value,console.log(w),b.value="",O.value="",localStorage.clear())}));
//# sourceMappingURL=03-feedback.ee389b09.js.map
