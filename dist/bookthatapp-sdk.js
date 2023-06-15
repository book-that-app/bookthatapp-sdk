/*! For license information please see bookthatapp-sdk.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BookThatApp=t():e.BookThatApp=t()}(self,(()=>(()=>{var e={297:function(e,t,n){var r;e=n.nmd(e),function(o){var s=(e&&e.exports,"object"==typeof n.g&&n.g);s.global!==s&&s.window;var i=function(e){this.message=e};(i.prototype=new Error).name="InvalidCharacterError";var a=function(e){throw new i(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=/[\t\n\f\r ]/g,l={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&a("The string to be encoded contains characters outside of the Latin1 range.");for(var t,n,r,o,s=e.length%3,i="",u=-1,l=e.length-s;++u<l;)t=e.charCodeAt(u)<<16,n=e.charCodeAt(++u)<<8,r=e.charCodeAt(++u),i+=c.charAt((o=t+n+r)>>18&63)+c.charAt(o>>12&63)+c.charAt(o>>6&63)+c.charAt(63&o);return 2==s?(t=e.charCodeAt(u)<<8,n=e.charCodeAt(++u),i+=c.charAt((o=t+n)>>10)+c.charAt(o>>4&63)+c.charAt(o<<2&63)+"="):1==s&&(o=e.charCodeAt(u),i+=c.charAt(o>>2)+c.charAt(o<<4&63)+"=="),i},decode:function(e){var t=(e=String(e).replace(u,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&a("Invalid character: the string to be decoded is not correctly encoded.");for(var n,r,o=0,s="",i=-1;++i<t;)r=c.indexOf(e.charAt(i)),n=o%4?64*n+r:r,o++%4&&(s+=String.fromCharCode(255&n>>(-2*o&6)));return s},version:"1.0.0"};void 0===(r=function(){return l}.call(t,n,t,e))||(e.exports=r)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r={};return(()=>{"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}n.d(r,{default:()=>De});const{toString:t}=Object.prototype,{getPrototypeOf:o}=Object,s=(i=Object.create(null),e=>{const n=t.call(e);return i[n]||(i[n]=n.slice(8,-1).toLowerCase())});var i;const a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined"),f=a("ArrayBuffer"),d=c("string"),h=c("function"),p=c("number"),m=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},y=a("Date"),b=a("File"),w=a("Blob"),E=a("FileList"),R=a("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function S(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=e=>!l(e)&&e!==v,T=(k="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>k&&e instanceof k);var k;const j=a("HTMLFormElement"),C=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),x=a("RegExp"),N=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},P="abcdefghijklmnopqrstuvwxyz",B="0123456789",F={DIGIT:B,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+B},_=a("AsyncFunction"),U={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:p,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:g,isUndefined:l,isDate:y,isFile:b,isBlob:w,isRegExp:x,isFunction:h,isStream:e=>m(e)&&h(e.pipe),isURLSearchParams:R,isTypedArray:T,isFileList:E,forEach:O,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,o)=>{const s=t&&S(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):u(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(O(n,((n,o)=>{r&&h(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:j,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:N,freezeMethods:e=>{N(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:S,global:v,isContextDefined:A,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return O(e,((e,t)=>{const s=n(e,r+1);!l(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:_,isThenable:e=>e&&(m(e)||h(e))&&h(e.then)&&h(e.catch)};function L(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}U.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=L.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{D[e]={value:e}})),Object.defineProperties(L,D),Object.defineProperty(q,"isAxiosError",{value:!0}),L.from=(e,t,n,r,o,s)=>{const i=Object.create(q);return U.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),L.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const I=L;function z(e){return U.isPlainObject(e)||U.isArray(e)}function M(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=M(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const J=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)})),V=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new I("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(z)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=M(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===i?H([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!z(e)||(t.append(H(o,n,s),c(e)),!1)}const l=[],f=Object.assign(J,{defaultVisitor:u,convertValue:c,isVisitable:z});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&o.call(t,n,U.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function K(e,t){this._pairs=[],e&&V(e,this,t)}const G=K.prototype;G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const $=K;function X(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q(e,t,n){if(!t)return e;const r=n&&n.encode||X,o=n&&n.serialize;let s;if(s=o?o(t,n):U.isURLSearchParams(t)?t.toString():new $(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const Z=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:$,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},te=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&U.isArray(r)?r.length:s,a?(U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&U.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},ne={"Content-Type":void 0},re={transitional:Y,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=U.isObject(e);if(o&&U.isHTMLForm(e)&&(e=new FormData(e)),U.isFormData(e))return r&&r?JSON.stringify(te(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return V(e,new ee.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ee.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return V(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(0,JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||re.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw I.from(e,I.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee.classes.FormData,Blob:ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){re.headers[e]=U.merge(ne)}));const oe=re,se=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ie=Symbol("internals");function ae(e){return e&&String(e).trim().toLowerCase()}function ce(e){return!1===e||null==e?e:U.isArray(e)?e.map(ce):String(e)}function ue(e,t,n,r,o){return U.isFunction(r)?r.call(this,t,n):(o&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}class le{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ae(t);if(!o)throw new Error("header name must be a non-empty string");const s=U.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ce(e))}const s=(e,t)=>U.forEach(e,((e,n)=>o(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&se[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ae(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ae(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!ue(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ae(e)){const o=U.findKey(n,e);!o||t&&!ue(0,n[o],o,t)||(delete n[o],r=!0)}}return U.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ue(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,o)=>{const s=U.findKey(n,o);if(s)return t[s]=ce(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ce(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ie]=this[ie]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ae(e);t[r]||(function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(le.prototype),U.freezeMethods(le);const fe=le;function de(e,t){const n=this||oe,r=t||n,o=fe.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function he(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){I.call(this,null==e?"canceled":e,I.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(pe,I,{__CANCEL__:!0});const me=pe,ge=ee.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),U.isString(r)&&i.push("path="+r),U.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ye(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const be=ee.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function we(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Ee={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=fe.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}U.isFormData(r)&&(ee.isStandardBrowserEnv||ee.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=ye(e.baseURL,e.url);function l(){if(!c)return;const r=fe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Q(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new I("Request aborted",I.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new I("Network Error",I.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Y;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new I(t,r.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,c)),c=null},ee.isStandardBrowserEnv){const t=(e.withCredentials||be(u))&&e.xsrfCookieName&&ge.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&U.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",we(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new me(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===ee.protocols.indexOf(f)?n(new I("Unsupported protocol "+f+":",I.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};U.forEach(Ee,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new me(null,e)}function Oe(e){return Re(e),e.headers=fe.from(e.headers),e.data=de.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=U.isString(n)?Ee[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new I(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(Ee,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||oe.adapter)(e).then((function(t){return Re(e),t.data=de.call(e,e.transformResponse,t),t.headers=fe.from(t.headers),t}),(function(t){return he(t)||(Re(e),t&&t.response&&(t.response.data=de.call(e,e.transformResponse,t.response),t.response.headers=fe.from(t.response.headers))),Promise.reject(t)}))}const Se=e=>e instanceof fe?e.toJSON():e;function ve(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function o(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function i(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Se(e),Se(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);U.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ae={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ae[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Te={};Ae.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new I(r(o," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!Te[o]&&(Te[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const ke={assertOptions:function(e,t,n){if("object"!=typeof e)throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new I("option "+s+" must be "+n,I.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new I("Unknown option "+s,I.ERR_BAD_OPTION)}},validators:Ae},je=ke.validators;class Ce{constructor(e){this.defaults=e,this.interceptors={request:new Z,response:new Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ve(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&ke.assertOptions(n,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:ke.assertOptions(r,{encode:je.function,serialize:je.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&U.merge(o.common,o[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=fe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Oe.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Oe.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return Q(ye((e=ve(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],(function(e){Ce.prototype[e]=function(t,n){return this.request(ve(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(ve(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ce.prototype[e]=t(),Ce.prototype[e+"Form"]=t(!0)}));const xe=Ce;class Ne{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new me(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ne((function(t){e=t})),cancel:e}}}const Pe=Ne,Be={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Be).forEach((([e,t])=>{Be[t]=e}));const Fe=Be,_e=function t(n){const r=new xe(n),o=e(xe.prototype.request,r);return U.extend(o,xe.prototype,r,{allOwnKeys:!0}),U.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(ve(n,e))},o}(oe);_e.Axios=xe,_e.CanceledError=me,_e.CancelToken=Pe,_e.isCancel=he,_e.VERSION="1.4.0",_e.toFormData=V,_e.AxiosError=I,_e.Cancel=_e.CanceledError,_e.all=function(e){return Promise.all(e)},_e.spread=function(e){return function(t){return e.apply(null,t)}},_e.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},_e.mergeConfig=ve,_e.AxiosHeaders=fe,_e.formToJSON=e=>te(U.isHTMLForm(e)?new FormData(e):e),_e.HttpStatusCode=Fe,_e.default=_e;const Ue=_e;var Le=n(297),qe=n.n(Le);const De=new function(){var e="",t={},n={apiBaseUrl:"https://api.bookthatapp.com/",apiVersion:"v1"},r={init:function(t,n){return e=t,r.configure(n),r},makeRequest:function(r){var o;r.url=(o=r.url,[n.apiBaseUrl,n.apiVersion,o].join("")),r.headers=r.headers||t||{},e&&(r.headers.Authorization="Bearer "+e),r.headers["Content-Type"]="application/json",Object.keys(t).length>0&&(t={});var s=Ue.interceptors.response.use((function(e){return e.data&&e.data.data&&(e.data=e.data.data),e}),(function(e){return Promise.reject(e)})),i=Ue(r);return Ue.interceptors.response.eject(s),i},configure:function(e){for(var t in e)n[t]=e[t];return n},getConfig:function(){return n},headers:function(e){for(var n in e)t[n]=e[n];return this},auth:function(e){var t=r.makeRequest({url:"/auth/",method:"post",data:{auth:e}});return t.then((function(e){var t=e.data.jwt;r.setToken(t)})).catch((function(e){r.setToken("")})),t},setToken:function(t){e=t},getShop:function(){return""==e?"":JSON.parse(qe().decode(e.split(".")[1])).shop},getReservations:function(e){return r.makeRequest({url:"/reservations/",method:"get",params:e})},getReservation:function(e){return r.makeRequest({url:"/reservations/"+e.id,method:"get",params:e})},createReservation:function(e){return r.makeRequest({url:"/reservations",method:"post",data:e})},confirmReservation:function(e){return r.makeRequest({url:"/reservations/"+e.id+"/confirm",method:"put",data:e})},updateReservation:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/reservations/"+t,method:"put",data:e})},deleteReservation:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/reservations/"+t,method:"delete"})},getBookings:function(e){return r.makeRequest({url:"/bookings/",method:"get",params:e})},getBooking:function(e){return r.makeRequest({url:"/bookings/"+e.id,method:"get",params:e})},createBooking:function(e){return r.makeRequest({url:"/bookings",method:"post",data:e})},updateBooking:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/bookings/"+t,method:"put",data:e})},deleteBooking:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/bookings/"+t,method:"delete"})},getBlackouts:function(e){return r.makeRequest({url:"/blackouts",method:"get",params:e})},getBlackout:function(e){return r.makeRequest({url:"/blackouts/"+e.id,method:"get",params:e})},createBlackout:function(e){return r.makeRequest({url:"/blackouts",method:"post",data:e})},updateBlackout:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/blackouts/"+t,method:"put",data:e})},deleteBlackout:function(e){var t=e.id;return delete e.id,r.makeRequest({url:"/blackouts/"+t,method:"delete"})},getProducts:function(e){return r.makeRequest({url:"/products",method:"get",params:e})},getProduct:function(e){return r.makeRequest({url:"/products/"+e.id,method:"get",params:e})},getFrames:function(e){return r.makeRequest({url:"/frames/",method:"get",params:e})},getCourseFrames:function(e){return r.makeRequest({url:"/courses/",method:"get",params:e})},getBlocks:function(e){return r.makeRequest({url:"/blocks",method:"get",params:e})},search:function(e){return r.makeRequest({url:"/search/",method:"get",params:e})},getLocationInventories:function(e){return r.makeRequest({url:"/location_inventories",method:"get",params:e})},updateLocationInventories:function(e){return r.makeRequest({url:"/location_inventories",method:"put",data:e})},getLocations:function(){return r.makeRequest({url:"/locations"})},getCustomers:function(e){return r.makeRequest({url:"/customers",method:"get",params:e})},getCustomer:function(e){return r.makeRequest({url:"/customers/"+e.id,method:"get",params:e})}};return r}})(),r.default})()));
//# sourceMappingURL=bookthatapp-sdk.js.map