(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{14:function(e,t,n){"use strict";n.d(t,{Kq:function(){return K},AK:function(){return ve},eh:function(){return X},Hf:function(){return ye},xf:function(){return ae},LK:function(){return ue},zK:function(){return V},nR:function(){return ce}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,f=new Set;function s(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of f)e();f.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return l(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const y=a.createContext(null);y.displayName="PressResponderContext";let v=null,m=new Set,h=!1,b=!1;function w(e,t){for(let n of m)n(e,t)}function g(e){b=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",w("keyboard",e))}function O(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,w("pointer",e))}function E(e){p(e)&&(b=!0,v="virtual")}function j(e){e.target!==window&&e.target!==document&&(b||(v="virtual",w("virtual",e)),b=!1)}function x(){b=!1}function S(){if("undefined"===typeof window||h)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",g,!0),document.addEventListener("keyup",g,!0),document.addEventListener("click",E,!0),window.addEventListener("focus",j,!0),window.addEventListener("blur",x,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),h=!0}"undefined"!==typeof document&&("loading"!==document.readyState?S():document.addEventListener("DOMContentLoaded",S));new Set;const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];A.join(":not([hidden]),");A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');A.join(':not([hidden]):not([tabindex="-1"]),');function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function M(e){return null!=e}function L(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function I(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=C(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var D="undefined"!==typeof window,H=Symbol("NONE"),N=D?a.useLayoutEffect:a.useEffect;function T(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function R(e){for(var t=_({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,f=Object.keys(u);c<f.length;c++){var s=f[c];t[s]=F(s,t[s],u[s])}return t}function $(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=C(t);!(n=r()).done;){$(n.value,e)}}}function F(e,t,n){return t===H||n===H?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?_({},t,n):"ref"===e?z(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function J(e,t,n,r){var o=t.children,a=P(t,["children"]),i=W(o,null!=n&&n);return T(e,_({ref:r},a),i)}function q(e,t){var n=e.as,r=e.hasGap;return J(null!=n?n:"div",P(e,["as","hasGap"]),r,t)}var B=(0,a.forwardRef)(q),U=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=P(t,["hasGap"]);return J(e,o,r,n)}))},K=Object.assign(B,{div:U("div"),a:U("a"),button:U("button"),h1:U("h1"),h2:U("h2"),h3:U("h3"),h4:U("h4"),h5:U("h5"),h6:U("h6"),label:U("label"),form:U("form"),section:U("section"),head:U("head"),main:U("main"),nav:U("nav")});function V(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function W(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function G(e,t,n,r){var o=ne(e),i=te(n,o.props);if("render"===o.type)return o.render(i,t);var u=t;"as"===o.type&&o.as&&(t===K?i.as=o.as:u=o.as);var c=i.children;o.wrapChildren&&(c=o.wrapChildren(function(e){return Array.isArray(e)?a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(c))),r&&(c=W(c,!0));var f=T(u,i,c);return o.wrap&&(f=o.wrap(f)),f}var Q=new Map;function X(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=Y.apply(void 0,[e,t].concat(i));if(n&&Q.set(n,c),r){var f,s=o?null!=(f=Q.get(o))?f:null:c;return Q.clear(),s}return c}function Y(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return G(r,e,R.apply(void 0,[t,0===u.length?{}:{children:u}].concat(a)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=_({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===ee?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=H),n[a]=F(a,i,u))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?_({},e,{props:e.props||{},type:"as"}):"render"in e?_({},e,{type:"render"}):"props"in e?_({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?_({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=oe(e[a],t[a])}return n}function oe(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ne(e),a=ne(t),i=Z.apply(void 0,[o.wrap,a.wrap].filter(M)),u=Z.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(M)),c=te(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var f=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return _({props:c,wrap:i,wrapChildren:u},f?{as:f}:{})}function ae(e,t){var n,r,o,a,i,u,c,f,s=t.name,l=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,y=["variants","args","overrides"],v=(a=I.apply(void 0,[L.apply(void 0,[e].concat(d))].concat(y)),i=null!=(n=e.variants)?n:{},_({},a,i)),m=(u=I.apply(void 0,[L.apply(void 0,[e].concat(p))].concat(y)),c=null!=(r=e.args)?r:{},_({},u,c)),h=re(I.apply(void 0,[L.apply(void 0,[e].concat(l))].concat(p,d,y)),null!=(o=e.overrides)?o:{}),b=I.apply(void 0,[e,"variants","args","overrides"].concat(l,d,p));Object.keys(b).length>0&&(h=re(h,((f={})[s]={props:b},f)));return{variants:v,args:m,overrides:h}}var ie={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ie[n]})),e}function ce(e){var t=e.as,n=e.defaultContents,r=e.value,o=P(e,["as","defaultContents","value"]),i=void 0===r?n:r;if(!i||Array.isArray(i)&&0===i.length)return null;var u=fe(i);return u&&(i=(0,a.createElement)("div",{className:"__wab_slot-string-wrapper"},u)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,a.createElement)(a.Fragment,null,i):(0,a.createElement)(t||"div",R({className:"__wab_slot"},o),i)}function fe(e){return(0,a.isValidElement)(e)&&e.type===a.Fragment?fe(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var se=[],le={};function de(){return D?Object.entries(le).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var pe=void 0;function ye(e,t){return Object.assign(le,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(pe||[]);return N((function(){var e=function(){pe&&n.current.join("")!==pe.join("")&&(n.current=pe,t({}))};return se.push(e),void 0===pe&&(pe=de()),e(),function(){se.splice(se.indexOf(e),1)}}),[]),e?pe||[]:pe?pe[pe.length-1]:void 0}}D&&window.addEventListener("resize",(function(){var e=de();pe&&e.join("")===pe.join("")||(pe=e,u.unstable_batchedUpdates((function(){return se.forEach((function(e){return e()}))})))}));var ve=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},18:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},9489:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},8:function(e){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},110:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(2846),a=n(9074),i=n(7767),u=n(4985),c=n(6745),f=n(8032);const s={Login:o.ZP,InputText:a.ZP,InputPassword:i.ZP,Button:u.ZP,PlusCircleOutlineIcon:c.Z},l={Screen:{component:f.wd,isContext:!Boolean("ScreenVariantProvider")}},d={Login:{nHgaZkEJ3kFqztZ4wELDJB:o.ZP},InputText:{nHgaZkEJ3kFqztZ4wELDJB:a.ZP},InputPassword:{nHgaZkEJ3kFqztZ4wELDJB:i.ZP},Button:{nHgaZkEJ3kFqztZ4wELDJB:u.ZP},PlusCircleOutlineIcon:{nHgaZkEJ3kFqztZ4wELDJB:c.Z}},p={Screen:{nHgaZkEJ3kFqztZ4wELDJB:{component:f.wd,isContext:!Boolean(void 0)}}};function y(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(l[e]){const{component:t,isContext:r}=l[e];return[r?t.Provider:t,n]}if(!p[e])throw new Error(`The provider ${e} could not be found.`);if(!p[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(p[e])}`);const{component:r,isContext:o}=p[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function v({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(s[t])return s[t];if(!d[t])throw new Error(`The component ${t} could not be found.`);if(!d[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(d[t])}`);return d[t][e]}(e,t);return y(r.createElement(a,n),e,o)}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),f=n(4287),s=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=y.length;c<f;c++){var s=y[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;"name"===s&&i||!d.has(l)?(d.add(l),r[s]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(f.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),u=n(8585),c=n(9754);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),l=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},1859:function(){},9008:function(e,t,n){e.exports=n(7947)}}]);