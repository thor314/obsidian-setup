'use strict';

var obsidian = require('obsidian');

function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(g&&(g=0,op[0]&&(_=0)),_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return {value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return {value:op[0]?op[1]:void 0,done:true};}}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}function __spreadArray(to,from,pack){if(pack||arguments.length===2)for(var i=0,l=from.length,ar;i<l;i++){if(ar||!(i in from)){if(!ar)ar=Array.prototype.slice.call(from,0,i);ar[i]=from[i];}}return to.concat(ar||Array.prototype.slice.call(from));}typeof SuppressedError==="function"?SuppressedError:function(error,suppressed,message){var e=new Error(message);return e.name="SuppressedError",e.error=error,e.suppressed=suppressed,e;};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null;}var B$1={isMounted:function(){return !1;},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F();H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K$1.current};}function N$1(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner};}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l;}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a];});}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36);}function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a;})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h;}function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++);});return d;}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b;},toArray:function(a){return S$1(a,function(a){return a;})||[];},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a;}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h};};react_production_min.createContext=function(a){a={$$typeof:u$1,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a;};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b;};react_production_min.createRef=function(){return {current:null};};react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a};};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y$1,_payload:{_status:-1,_result:a},_init:T$1};};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b};};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b);};react_production_min.useContext=function(a){return U$1.current.useContext(a);};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a);};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b);};react_production_min.useId=function(){return U$1.current.useId();};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e);};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b);};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b);};react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b);};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e);};react_production_min.useRef=function(a){return U$1.current.useRef(a);};react_production_min.useState=function(a){return U$1.current.useState(a);};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e);};react_production_min.useTransition=function(){return U$1.current.useTransition();};react_production_min.version="18.2.0";

{react.exports=react_production_min;}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var reactDom$1 = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a;}}function h(a){return 0===a.length?null:a[0];}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a;}}return b;}function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id;}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now();};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q;};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w;}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;function M(){return exports.unstable_now()-Q<P?!1:!0;}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel(),U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y;};exports.unstable_getFirstCallbackNode=function(){return h(r);};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a();}finally{y=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b();}finally{y=c;}};exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a;};exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments);}finally{y=c;}};}; 
} (scheduler_production_min));

{scheduler.exports=scheduler_production_min;}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";}var da=new Set(),ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1;}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case"function":case"symbol":return !0;case"boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1;}}function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b;}return !1;}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase();}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null;}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a;}var Na=!1;function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b){if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k;}while(1<=g&&0<=h);}break;}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):"";}function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return "";}}function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList";}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b));}catch(c){}}return null;}function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b;}return null;}function Sa(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return "";}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b);}function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this);},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d;},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=null;delete a[b];}};}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1;}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body;}catch(b){return a.body;}}function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked});}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c){if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);}else if("submit"===d||"reset"===d){a.removeAttribute("value");return;}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return;}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue});}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(eb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case"svg":return "http://www.w3.org/2000/svg";case"math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml";}}function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a;}var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e);});}:a;}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return;}}a.textContent=b;}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px";}function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return !1;default:return !0;}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a;}var yb=null,zb=null,Ab=null;function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b);}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c);}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(p$1(231,b,typeof c));return c;}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$1(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a);}return 3===b.tag?c:null;}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated;}return null;}function Xb(a){if(Vb(a)!==a)throw Error(p$1(188));}function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a;}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue;}break;}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break;}if(h===d){g=!0;d=e;c=f;break;}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break;}if(h===d){g=!0;d=f;c=e;break;}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b;}function Zb(a){a=Yb(a);return null!==a?$b(a):null;}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null;}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0;}var rc=64,sc=4194304;function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a;}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d;}function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1;}}function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0;}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a;}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b;}function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1;}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map(),Pc=new Map(),Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(a,b){switch(a){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(b.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(b.pointerId);}}function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a;}function Uc(a,b,c,d,e){switch(b){case"focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case"dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case"mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case"pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case"gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0;}return !1;}function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return;}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return;}}a.blockedOn=null;}function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0;}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}function bd(a){function b(b){return ad(b,a);}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null;}function jd(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16;}default:return 16;}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0);}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0;}function pd(){return !0;}function qd(){return !1;}function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this;}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b;}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now();},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget;},movementX:function(a){if("movementX"in a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd;},movementY:function(a){return "movementY"in a?a.movementY:xd;}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData;}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1;}function zd(){return Pd;}var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b;}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":"";},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0;},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0;},which:function(a){return "keypress"===a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0;}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0;},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0;},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;function ge(a,b){switch(a){case"keyup":return -1!==$d.indexOf(b.keyCode);case"keydown":return 229!==b.keyCode;case"keypress":case"mousedown":case"focusout":return !0;default:return !1;}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null;}var ie=!1;function je(a,b){switch(a){case"compositionend":return he(b);case"keypress":if(32!==b.which)return null;fe=!0;return ee;case"textInput":return a=b.data,a===ee&&fe?null:a;default:return null;}}function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which);}return null;case"compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null;}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1;}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a;}function ve(a,b){if("change"===a)return b;}var we=!1;if(ia){var xe;if(ia){var ye=("oninput"in document);if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe);}function Ee(a,b){if("click"===a)return te(b);}function Fe(a,b){if("input"===a||"change"===a)return te(b);}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b;}var He="function"===typeof Object.is?Object.is:Ge;function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1;}return !0;}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a;}function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a;}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1;}function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b;}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable);}function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c;}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a;}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map(),ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set());var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a;}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case"keypress":if(0===od(c))break a;case"keydown":case"keyup":k=Rd;break;case"focusin":n="focus";k=Fd;break;case"focusout":n="blur";k=Fd;break;case"beforeblur":case"afterblur":k=Fd;break;case"click":if(2===c.button)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case"scroll":k=vd;break;case"wheel":k=Zd;break;case"copy":case"cut":case"paste":k=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h)){if(we)na=Fe;else {na=De;var xa=Ce;}}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a;}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case"focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1;Ue(g,c,e);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case"compositionstart":var ba="onCompositionStart";break b;case"compositionend":ba="onCompositionEnd";break b;case"compositionupdate":ba="onCompositionUpdate";break b;}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c};}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d;}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null;}function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"");}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$1(425));}function Bf(){}var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html;}var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If);}:Ff;function If(a){setTimeout(function(){throw a;});}function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return;}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null;}}return a;}function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null;}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b;}a=c;c=a.parentNode;}return null;}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a;}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Db(a){return a[Pf]||null;}var Sf=[],Tf=-1;function Uf(a){return {current:a};}function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e;}function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a;}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p$1(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Ra(a)||"Unknown",e));return A({},c,d);}function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0;}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d);}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null;}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=null,!0):!1;default:return !1;}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128);}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$1(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$1(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a;}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0;}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b;}return b;}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null;}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b;}function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null);}function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p$1(308));Og=a;Ng.dependencies={lanes:0,firstContext:a};}else Og=Og.next=a;return b;}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a);}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d);}function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null;}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function ch(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null};}function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c);}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c);}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return;}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b;}function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a;}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b);}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q;}}function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var jh=new aa.Component().refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}var nh={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1;},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d));}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0;}function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b;}function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null);}function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b;}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a;}function th(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload);}function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null;}function d(a,b){for(a=new Map();null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a;}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a;}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c;}function g(b){a&&null===b.alternate&&(b.flags|=2);return b;}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b;}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d;}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b;}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b;}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c);}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b);}return null;}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,b,e(c._payload),d);}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c);}return null;}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e);}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d);}return null;}function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break;}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l;}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a);});I&&tg(e,w);return l;}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break;}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l;}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a);});I&&tg(e,w);return l;}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a;}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a;}c(a,l);break;}else b(a,l);l=l.sibling;}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==d;){if(d.key===l){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a;}else {c(a,d);break;}}else b(a,d);d=d.sibling;}d=zh(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h);}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d);}return J;}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p$1(174));return a;}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(Eh);G(Eh,b);}function Jh(){E(Eh);E(Fh);E(Gh);}function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c));}function Lh(a){Fh.current===a&&(E(Eh),E(Fh));}var M=Uf(0);function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b;}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b;}else if(null!==b.child){b.child.return=b;b=b.child;continue;}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null;}var Nh=[];function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0;}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p$1(321));}function Wh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0;}function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p$1(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e);}while(Th);}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p$1(300));return a;}function bi(){var a=0!==Uh;Uh=0;return a;}function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P;}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null;}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else {if(null===a)throw Error(p$1(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a;}return P;}function ei(a,b){return "function"===typeof b?b(a):b;}function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a);}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch];}function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d];}function hi(){}function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p$1(349));0!==(Rh&30)||ni(c,b,e);}return e;}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a);}function ki(a,b,c){return c(function(){oi(b)&&pi(a);});}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c);}catch(d){return !0;}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1);}function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return [b.memoizedState,a];}function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a;}function si(){return di().memoizedState;}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d);}function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return;}}N.flags|=a;e.memoizedState=li(1|b,c,f,d);}function vi(a,b){return ti(8390656,8,a,b);}function ji(a,b){return ui(2048,8,a,b);}function wi(a,b){return ui(4,2,a,b);}function xi(a,b){return ui(4,4,a,b);}function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;};}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c);}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a;}function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a;}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b;}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b();}finally{C=c,Qh.transition=d;}}function Fi(){return di().memoizedState;}function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d);}}function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return;}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d));}}function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N;}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a;},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,4,yi.bind(null,b,a),c);},useLayoutEffect:function(a,b){return ti(4194308,4,a,b);},useInsertionEffect:function(a,b){return ti(4,2,a,b);},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a;},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return [d.memoizedState,a];},useRef:function(a){var b=ci();a={current:a};return b.memoizedState=a;},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a;},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return [b,a];},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===R)throw Error(p$1(349));0!==(Rh&30)||ni(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c;},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b;},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei);},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a);},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return [a,b];},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei);},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===O?b.memoizedState=a:Di(b,O.memoizedState,a);},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return [a,b];},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null};}function Li(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null};}function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c;}function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e);};c.callback=function(){Mi(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c;}function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni();var e=new Set();d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set(),d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a));}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null;}function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a;}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d);}function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child;}function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a;}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e);}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a;}function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e);}return dj(a,b,c,d,e);}function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode){if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d;}}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child;}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child;}function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return kj(a,b,c,d,f,e);}function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child;}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo);}function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child;}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return {baseLanes:a,cachePool:null,transitions:null};}function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g);}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d;}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d;}function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b;}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a;}function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p$1(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f;}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(p$1(419));d=Li(f,d,void 0);return tj(a,b,g,d);}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1));}uj();d=Li(Error(p$1(421)));return tj(a,b,g,d);}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b;}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c);}function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue;}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(M,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case"forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case"backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break;}a=e.sibling;e.sibling=c;c=e;e=a;}xj(b,!0,c,null,f);break;case"together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child;}function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child;}function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null;}G(M,M.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c);}return $i(a,b,c);}var Aj,Bj,Cj,Dj;Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue;}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bj=function(){};Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case"input":e=Ya(a,e);d=Ya(a,d);f=[];break;case"select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case"textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l){if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;}else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4);};function Ej(a,b){if(!I)switch(a.tailMode){case"hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b;}function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));S(b);return null;}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case"dialog":D("cancel",d);D("close",d);break;case"iframe":case"object":case"embed":D("load",d);break;case"video":case"audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case"source":D("error",d);break;case"img":case"image":case"link":D("error",d);D("load",d);break;case"details":D("toggle",d);break;case"input":Za(d,f);D("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case"textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case"input":Va(d);db(d,f,!0);break;case"textarea":Va(d);jb(d);break;case"select":case"option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case"dialog":D("cancel",a);D("close",a);e=d;break;case"iframe":case"object":case"embed":D("load",a);e=d;break;case"video":case"audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case"source":D("error",a);e=d;break;case"img":case"image":case"link":D("error",a);D("load",a);e=d;break;case"details":D("toggle",a);e=d;break;case"input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case"option":e=d;break;case"select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case"textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case"input":Va(a);db(a,d,!1);break;case"textarea":Va(a);jb(a);break;case"option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case"select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break a;case"img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(p$1(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$1(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null;}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g){if(d)Ej(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child;}a=a.sibling;}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);}}else {if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null;}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null;}throw Error(p$1(156,b.tag));}function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),null;case 24:return null;default:return null;}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Nj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Oj=!1;function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a;}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break;}V=b.return;}n=Oj;Oj=!1;return n;}function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f);}e=e.next;}while(e!==d);}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b);}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag;}function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode;}}function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling;}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling;}function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next;}while(e!==d);}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c);}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj());b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a;}h=h.return;}if(null===X)throw Error(p$1(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling;}function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a);}catch(t){W(a,a.return,t);}try{Qj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case"input":bb(e,f);break;case"textarea":ib(e,f);break;case"select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p$1(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue;}}null!==y?(y.return=r,V=y):hk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue;}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,a),fk(a);}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a;}c=c.return;}throw Error(p$1(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p$1(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function ik(a,b,c){V=a;jk(a);}function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f),f=f.sibling;V=e;Kj=h;U=l;}lk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a);}}function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode;}ih(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&c.focus();break;case"img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p$1(163));}U||b.flags&512&&Sj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break;}c=b.sibling;if(null!==c){c.return=b.return;V=c;break;}V=b.return;}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break;}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break;}V=b.return;}}function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Sj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Sj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break;}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break;}V=b.return;}}var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B();}function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a;}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p$1(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg());}function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Gk(c,Hk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p$1(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else {b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break;}catch(h){Nk(a,h);}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);else {e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break;}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break;}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break;}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p$1(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null;}function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a;}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a);}function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1;}catch(g){return !1;}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0;}function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Fk(a){if(0!==(K&6))throw Error(p$1(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d));}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null;}function Rk(a,b){var c=K;K|=1;try{return a(b);}finally{K=c,0===K&&(Hj=B()+500,fg&&jg());}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a();}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg();}}function Ij(){gj=fj.current;E(fj);}function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij();}c=c.return;}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}Wg=null;}return a;}function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Sh=!1;}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break;}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set();t.add(k);b.updateQueue=t;}else n.add(k);break a;}else {if(0===(b&1)){Ti(f,l,b);uj();break a;}k=Error(p$1(426));}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a;}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a;}}f=f.return;}while(null!==f);}Tk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue;}break;}while(1);}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a;}function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z);}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break;}catch(e){Nk(a,e);}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p$1(261));R=null;Z=0;return T;}function Uk(){for(;null!==Y;)Vk(Y);}function Mk(){for(;null!==Y&&!cc();)Vk(Y);}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null;}function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return;}}else {c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return;}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return;}}b=b.sibling;if(null!==b){Y=b;return;}Y=b=a;}while(null!==b);0===T&&(T=5);}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d);}finally{pk.transition=e,C=d;}return null;}function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p$1(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null;}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c);dc();K=h;C=g;pk.transition=f;}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null;}function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else {a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p$1(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===l){V=null;break;}if(null!==r){r.return=y;V=r;break;}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t);}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b;}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b;}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b;}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d;}finally{C=c,pk.transition=b;}}return !1;}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b));}function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break;}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break;}}b=b.return;}}function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b);}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c));}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c);}function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Zk(a,c);}var Wk;Wk=function(a,b,c){if(null!==a){if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1;}}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a;}throw Error(p$1(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated){if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ki(Error(p$1(423)),b);b=mj(a,b,d,c,e);break a;}else if(d!==e){e=Ki(Error(p$1(424)),b);b=mj(a,b,d,c,e);break a;}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;}else {Ig();if(d===e){b=$i(a,b,c);break a;}Yi(a,b,d,c);}b=b.child;}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a;}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,c,b);h.lanes|=c;break;}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break;}f=g.sibling;if(null!==f){f.return=g.return;g=f;break;}g=g.return;}f=g;}Yi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c);}throw Error(p$1(156,b.tag));};function Gk(a,b){return ac(a,b);}function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new al(a,b,c,d);}function bj(a){a=a.prototype;return !(!a||!a.isReactComponent);}function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14;}return 2;}function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c;}function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a;}throw Error(p$1(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b;}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a;}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a;}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a;}function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b;}function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null;}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a;}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c};}function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a;}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b);}return b;}function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a;}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g;}function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode;}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b);}function kl(){return null;}var ll="function"===typeof reportError?reportError:function(a){console.error(a);};function ml(a){this._internalRoot=a;}nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));gl(a,b,null,null);};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null);});b[uf]=null;}};function nl(a){this._internalRoot=a;}nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType);}function pl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue));}function ql(){}function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a);};}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g;}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a);};}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d);});return k;}function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a);};}gl(b,g,a,e);}else g=rl(c,b,a,e,d);return hl(g);}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()));}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c);}}),jl(a,1);}};Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c);}jl(a,134217728);}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d);}jl(a,b);}};Hc=function(){return C;};Ic=function(a,b){var c=C;try{return C=a,b();}finally{C=c;}};yb=function(a,b,c){switch(b){case"input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$1(90));Wa(d);bb(d,e);}}}break;case"textarea":ib(a,c);break;case"select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Rk;Hb=Sk;var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode;},findFiberByHostInstance:ul.findFiberByHostInstance||kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p$1(200));return dl(a,b,null,c);};reactDom_production_min.createRoot=function(a,b){if(!ol(a))throw Error(p$1(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b);};reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a;};reactDom_production_min.flushSync=function(a){return Sk(a);};reactDom_production_min.hydrate=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!0,c);};reactDom_production_min.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new nl(b);};reactDom_production_min.render=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!1,c);};reactDom_production_min.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p$1(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1;};reactDom_production_min.unstable_batchedUpdates=Rk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return sl(a,b,c,!1,d);};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";

function checkDCE(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=='function'){return;}try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);}catch(err){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(err);}}{// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
checkDCE();reactDom$1.exports=reactDom_production_min;}

var reactDomExports = reactDom$1.exports;
var reactDom = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

var createRoot;
var m=reactDomExports;{createRoot = m.createRoot;m.hydrateRoot;}

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret$1='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';var ReactPropTypesSecret_1=ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret=ReactPropTypesSecret_1;function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}shim.isRequired=shim;function getShim(){return shim;}// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
propTypes.exports=factoryWithThrowingShims();}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

var COMMON_MIME_TYPES=new Map([// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
['aac','audio/aac'],['abw','application/x-abiword'],['arc','application/x-freearc'],['avif','image/avif'],['avi','video/x-msvideo'],['azw','application/vnd.amazon.ebook'],['bin','application/octet-stream'],['bmp','image/bmp'],['bz','application/x-bzip'],['bz2','application/x-bzip2'],['cda','application/x-cdf'],['csh','application/x-csh'],['css','text/css'],['csv','text/csv'],['doc','application/msword'],['docx','application/vnd.openxmlformats-officedocument.wordprocessingml.document'],['eot','application/vnd.ms-fontobject'],['epub','application/epub+zip'],['gz','application/gzip'],['gif','image/gif'],['heic','image/heic'],['heif','image/heif'],['htm','text/html'],['html','text/html'],['ico','image/vnd.microsoft.icon'],['ics','text/calendar'],['jar','application/java-archive'],['jpeg','image/jpeg'],['jpg','image/jpeg'],['js','text/javascript'],['json','application/json'],['jsonld','application/ld+json'],['mid','audio/midi'],['midi','audio/midi'],['mjs','text/javascript'],['mp3','audio/mpeg'],['mp4','video/mp4'],['mpeg','video/mpeg'],['mpkg','application/vnd.apple.installer+xml'],['odp','application/vnd.oasis.opendocument.presentation'],['ods','application/vnd.oasis.opendocument.spreadsheet'],['odt','application/vnd.oasis.opendocument.text'],['oga','audio/ogg'],['ogv','video/ogg'],['ogx','application/ogg'],['opus','audio/opus'],['otf','font/otf'],['png','image/png'],['pdf','application/pdf'],['php','application/x-httpd-php'],['ppt','application/vnd.ms-powerpoint'],['pptx','application/vnd.openxmlformats-officedocument.presentationml.presentation'],['rar','application/vnd.rar'],['rtf','application/rtf'],['sh','application/x-sh'],['svg','image/svg+xml'],['swf','application/x-shockwave-flash'],['tar','application/x-tar'],['tif','image/tiff'],['tiff','image/tiff'],['ts','video/mp2t'],['ttf','font/ttf'],['txt','text/plain'],['vsd','application/vnd.visio'],['wav','audio/wav'],['weba','audio/webm'],['webm','video/webm'],['webp','image/webp'],['woff','font/woff'],['woff2','font/woff2'],['xhtml','application/xhtml+xml'],['xls','application/vnd.ms-excel'],['xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],['xml','application/xml'],['xul','application/vnd.mozilla.xul+xml'],['zip','application/zip'],['7z','application/x-7z-compressed'],// Others
['mkv','video/x-matroska'],['mov','video/quicktime'],['msg','application/vnd.ms-outlook']]);function toFileWithPath(file,path){var f=withMimeType(file);if(typeof f.path!=='string'){// on electron, path is already set to the absolute path
var webkitRelativePath=file.webkitRelativePath;Object.defineProperty(f,'path',{value:typeof path==='string'?path// If <input webkitdirectory> is set,
// the File will have a {webkitRelativePath} property
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
:typeof webkitRelativePath==='string'&&webkitRelativePath.length>0?webkitRelativePath:file.name,writable:false,configurable:false,enumerable:true});}return f;}function withMimeType(file){var name=file.name;var hasExtension=name&&name.lastIndexOf('.')!==-1;if(hasExtension&&!file.type){var ext=name.split('.').pop().toLowerCase();var type=COMMON_MIME_TYPES.get(ext);if(type){Object.defineProperty(file,'type',{value:type,writable:false,configurable:false,enumerable:true});}}return file;}

var FILES_TO_IGNORE=[// Thumbnail cache files for macOS and Windows
'.DS_Store','Thumbs.db'// Windows
];/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */function fromEvent(evt){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){if(isObject(evt)&&isDataTransfer(evt.dataTransfer)){return [2/*return*/,getDataTransferFiles(evt.dataTransfer,evt.type)];}else if(isChangeEvt(evt)){return [2/*return*/,getInputFiles(evt)];}else if(Array.isArray(evt)&&evt.every(function(item){return 'getFile'in item&&typeof item.getFile==='function';})){return [2/*return*/,getFsHandleFiles(evt)];}return [2/*return*/,[]];});});}function isDataTransfer(value){return isObject(value);}function isChangeEvt(value){return isObject(value)&&isObject(value.target);}function isObject(v){return typeof v==='object'&&v!==null;}function getInputFiles(evt){return fromList(evt.target.files).map(function(file){return toFileWithPath(file);});}// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles){return __awaiter(this,void 0,void 0,function(){var files;return __generator(this,function(_a){switch(_a.label){case 0:return [4/*yield*/,Promise.all(handles.map(function(h){return h.getFile();}))];case 1:files=_a.sent();return [2/*return*/,files.map(function(file){return toFileWithPath(file);})];}});});}function getDataTransferFiles(dt,type){return __awaiter(this,void 0,void 0,function(){var items,files;return __generator(this,function(_a){switch(_a.label){case 0:if(!dt.items)return [3/*break*/,2];items=fromList(dt.items).filter(function(item){return item.kind==='file';});// According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
// only 'dragstart' and 'drop' has access to the data (source node)
if(type!=='drop'){return [2/*return*/,items];}return [4/*yield*/,Promise.all(items.map(toFilePromises))];case 1:files=_a.sent();return [2/*return*/,noIgnoredFiles(flatten(files))];case 2:return [2/*return*/,noIgnoredFiles(fromList(dt.files).map(function(file){return toFileWithPath(file);}))];}});});}function noIgnoredFiles(files){return files.filter(function(file){return FILES_TO_IGNORE.indexOf(file.name)===-1;});}// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items){if(items===null){return [];}var files=[];// tslint:disable: prefer-for-of
for(var i=0;i<items.length;i++){var file=items[i];files.push(file);}return files;}// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item){if(typeof item.webkitGetAsEntry!=='function'){return fromDataTransferItem(item);}var entry=item.webkitGetAsEntry();// Safari supports dropping an image node from a different window and can be retrieved using
// the DataTransferItem.getAsFile() API
// NOTE: FileSystemEntry.file() throws if trying to get the file
if(entry&&entry.isDirectory){return fromDirEntry(entry);}return fromDataTransferItem(item);}function flatten(items){return items.reduce(function(acc,files){return __spreadArray(__spreadArray([],__read(acc),false),__read(Array.isArray(files)?flatten(files):[files]),false);},[]);}function fromDataTransferItem(item){var file=item.getAsFile();if(!file){return Promise.reject("".concat(item," is not a File"));}var fwp=toFileWithPath(file);return Promise.resolve(fwp);}// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return [2/*return*/,entry.isDirectory?fromDirEntry(entry):fromFileEntry(entry)];});});}// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry){var reader=entry.createReader();return new Promise(function(resolve,reject){var entries=[];function readEntries(){var _this=this;// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
reader.readEntries(function(batch){return __awaiter(_this,void 0,void 0,function(){var files,err_1,items;return __generator(this,function(_a){switch(_a.label){case 0:if(!!batch.length)return [3/*break*/,5];_a.label=1;case 1:_a.trys.push([1,3,,4]);return [4/*yield*/,Promise.all(entries)];case 2:files=_a.sent();resolve(files);return [3/*break*/,4];case 3:err_1=_a.sent();reject(err_1);return [3/*break*/,4];case 4:return [3/*break*/,6];case 5:items=Promise.all(batch.map(fromEntry));entries.push(items);// Continue reading
readEntries();_a.label=6;case 6:return [2/*return*/];}});});},function(err){reject(err);});}readEntries();});}// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return [2/*return*/,new Promise(function(resolve,reject){entry.file(function(file){var fwp=toFileWithPath(file,entry.fullPath);resolve(fwp);},function(err){reject(err);});})];});});}

var _default = function(file,acceptedFiles){if(file&&acceptedFiles){var acceptedFilesArray=Array.isArray(acceptedFiles)?acceptedFiles:acceptedFiles.split(',');var fileName=file.name||'';var mimeType=(file.type||'').toLowerCase();var baseMimeType=mimeType.replace(/\/.*$/,'');return acceptedFilesArray.some(function(type){var validType=type.trim().toLowerCase();if(validType.charAt(0)==='.'){return fileName.toLowerCase().endsWith(validType);}else if(validType.endsWith('/*')){// This is something like a image/* mime type
return baseMimeType===validType.replace(/\/.*$/,'');}return mimeType===validType;});}return true;};

function _toConsumableArray$2(arr){return _arrayWithoutHoles$1(arr)||_iterableToArray$1(arr)||_unsupportedIterableToArray$1(arr)||_nonIterableSpread$1();}function _nonIterableSpread$1(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray$1(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles$1(arr){if(Array.isArray(arr))return _arrayLikeToArray$1(arr);}function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread$1(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys$1(Object(source),!0).forEach(function(key){_defineProperty$2(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys$1(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty$2(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _slicedToArray$1(arr,i){return _arrayWithHoles$1(arr)||_iterableToArrayLimit$1(arr,i)||_unsupportedIterableToArray$1(arr,i)||_nonIterableRest$1();}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray$1(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray$1(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray$1(o,minLen);}function _arrayLikeToArray$1(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit$1(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles$1(arr){if(Array.isArray(arr))return arr;}var FILE_INVALID_TYPE="file-invalid-type";var FILE_TOO_LARGE="file-too-large";var FILE_TOO_SMALL="file-too-small";var TOO_MANY_FILES="too-many-files";var getInvalidTypeRejectionErr=function getInvalidTypeRejectionErr(accept){accept=Array.isArray(accept)&&accept.length===1?accept[0]:accept;var messageSuffix=Array.isArray(accept)?"one of ".concat(accept.join(", ")):accept;return {code:FILE_INVALID_TYPE,message:"File type must be ".concat(messageSuffix)};};var getTooLargeRejectionErr=function getTooLargeRejectionErr(maxSize){return {code:FILE_TOO_LARGE,message:"File is larger than ".concat(maxSize," ").concat(maxSize===1?"byte":"bytes")};};var getTooSmallRejectionErr=function getTooSmallRejectionErr(minSize){return {code:FILE_TOO_SMALL,message:"File is smaller than ".concat(minSize," ").concat(minSize===1?"byte":"bytes")};};var TOO_MANY_FILES_REJECTION={code:TOO_MANY_FILES,message:"Too many files"};// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file,accept){var isAcceptable=file.type==="application/x-moz-file"||_default(file,accept);return [isAcceptable,isAcceptable?null:getInvalidTypeRejectionErr(accept)];}function fileMatchSize(file,minSize,maxSize){if(isDefined(file.size)){if(isDefined(minSize)&&isDefined(maxSize)){if(file.size>maxSize)return [false,getTooLargeRejectionErr(maxSize)];if(file.size<minSize)return [false,getTooSmallRejectionErr(minSize)];}else if(isDefined(minSize)&&file.size<minSize)return [false,getTooSmallRejectionErr(minSize)];else if(isDefined(maxSize)&&file.size>maxSize)return [false,getTooLargeRejectionErr(maxSize)];}return [true,null];}function isDefined(value){return value!==undefined&&value!==null;}/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string|string[]} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */function allFilesAccepted(_ref){var files=_ref.files,accept=_ref.accept,minSize=_ref.minSize,maxSize=_ref.maxSize,multiple=_ref.multiple,maxFiles=_ref.maxFiles,validator=_ref.validator;if(!multiple&&files.length>1||multiple&&maxFiles>=1&&files.length>maxFiles){return false;}return files.every(function(file){var _fileAccepted=fileAccepted(file,accept),_fileAccepted2=_slicedToArray$1(_fileAccepted,1),accepted=_fileAccepted2[0];var _fileMatchSize=fileMatchSize(file,minSize,maxSize),_fileMatchSize2=_slicedToArray$1(_fileMatchSize,1),sizeMatch=_fileMatchSize2[0];var customErrors=validator?validator(file):null;return accepted&&sizeMatch&&!customErrors;});}// React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble
function isPropagationStopped(event){if(typeof event.isPropagationStopped==="function"){return event.isPropagationStopped();}else if(typeof event.cancelBubble!=="undefined"){return event.cancelBubble;}return false;}function isEvtWithFiles(event){if(!event.dataTransfer){return !!event.target&&!!event.target.files;}// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
return Array.prototype.some.call(event.dataTransfer.types,function(type){return type==="Files"||type==="application/x-moz-file";});}function onDocumentDragOver(event){event.preventDefault();}function isIe(userAgent){return userAgent.indexOf("MSIE")!==-1||userAgent.indexOf("Trident/")!==-1;}function isEdge(userAgent){return userAgent.indexOf("Edge/")!==-1;}function isIeOrEdge(){var userAgent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.navigator.userAgent;return isIe(userAgent)||isEdge(userAgent);}/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++){fns[_key]=arguments[_key];}return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return fns.some(function(fn){if(!isPropagationStopped(event)&&fn){fn.apply(void 0,[event].concat(args));}return isPropagationStopped(event);});};}/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */function canUseFileSystemAccessAPI(){return "showOpenFilePicker"in window;}/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */function pickerOptionsFromAccept(accept){if(isDefined(accept)){var acceptForPicker=Object.entries(accept).filter(function(_ref2){var _ref3=_slicedToArray$1(_ref2,2),mimeType=_ref3[0],ext=_ref3[1];var ok=true;if(!isMIMEType(mimeType)){console.warn("Skipped \"".concat(mimeType,"\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));ok=false;}if(!Array.isArray(ext)||!ext.every(isExt)){console.warn("Skipped \"".concat(mimeType,"\" because an invalid file extension was provided."));ok=false;}return ok;}).reduce(function(agg,_ref4){var _ref5=_slicedToArray$1(_ref4,2),mimeType=_ref5[0],ext=_ref5[1];return _objectSpread$1(_objectSpread$1({},agg),{},_defineProperty$2({},mimeType,ext));},{});return [{// description is required due to https://crbug.com/1264708
description:"Files",accept:acceptForPicker}];}return accept;}/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */function acceptPropAsAcceptAttr(accept){if(isDefined(accept)){return Object.entries(accept).reduce(function(a,_ref6){var _ref7=_slicedToArray$1(_ref6,2),mimeType=_ref7[0],ext=_ref7[1];return [].concat(_toConsumableArray$2(a),[mimeType],_toConsumableArray$2(ext));},[])// Silently discard invalid entries as pickerOptionsFromAccept warns about these
.filter(function(v){return isMIMEType(v)||isExt(v);}).join(",");}return undefined;}/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */function isAbort(v){return v instanceof DOMException&&(v.name==="AbortError"||v.code===v.ABORT_ERR);}/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */function isSecurityError(v){return v instanceof DOMException&&(v.name==="SecurityError"||v.code===v.SECURITY_ERR);}/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */function isMIMEType(v){return v==="audio/*"||v==="video/*"||v==="image/*"||v==="text/*"||/\w+\/[-+.\w]+/g.test(v);}/**
 * Check if v is a file extension.
 * @param {string} v
 */function isExt(v){return /^.*\.[\w]+$/.test(v);}/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */ /**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */ /**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded=["children"],_excluded2=["open"],_excluded3=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],_excluded4=["refKey","onChange","onClick"];function _toConsumableArray$1(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty$1(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty$1(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return {};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return {};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */var Dropzone=/*#__PURE__*/reactExports.forwardRef(function(_ref,ref){var children=_ref.children,params=_objectWithoutProperties(_ref,_excluded);var _useDropzone=useDropzone(params),open=_useDropzone.open,props=_objectWithoutProperties(_useDropzone,_excluded2);reactExports.useImperativeHandle(ref,function(){return {open:open};},[open]);// TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element
return/*#__PURE__*/React.createElement(reactExports.Fragment,null,children(_objectSpread(_objectSpread({},props),{},{open:open})));});Dropzone.displayName="Dropzone";// Add default props for react-docgen
var defaultProps={disabled:false,getFilesFromEvent:fromEvent,maxSize:Infinity,minSize:0,multiple:true,maxFiles:0,preventDropOnDocument:true,noClick:false,noKeyboard:false,noDrag:false,noDragEventsBubbling:false,validator:null,useFsAccessApi:true,autoFocus:false};Dropzone.defaultProps=defaultProps;Dropzone.propTypes={/**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */children:PropTypes.func,/**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */accept:PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),/**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */multiple:PropTypes.bool,/**
   * If false, allow dropped items to take over the current browser window
   */preventDropOnDocument:PropTypes.bool,/**
   * If true, disables click to open the native file selection dialog
   */noClick:PropTypes.bool,/**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */noKeyboard:PropTypes.bool,/**
   * If true, disables drag 'n' drop
   */noDrag:PropTypes.bool,/**
   * If true, stops drag event propagation to parents
   */noDragEventsBubbling:PropTypes.bool,/**
   * Minimum file size (in bytes)
   */minSize:PropTypes.number,/**
   * Maximum file size (in bytes)
   */maxSize:PropTypes.number,/**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */maxFiles:PropTypes.number,/**
   * Enable/disable the dropzone
   */disabled:PropTypes.bool,/**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */getFilesFromEvent:PropTypes.func,/**
   * Cb for when closing the file dialog with no selection
   */onFileDialogCancel:PropTypes.func,/**
   * Cb for when opening the file dialog
   */onFileDialogOpen:PropTypes.func,/**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */useFsAccessApi:PropTypes.bool,/**
   * Set to true to focus the root element on render
   */autoFocus:PropTypes.bool,/**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */onDragEnter:PropTypes.func,/**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */onDragLeave:PropTypes.func,/**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */onDragOver:PropTypes.func,/**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */onDrop:PropTypes.func,/**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */onDropAccepted:PropTypes.func,/**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */onDropRejected:PropTypes.func,/**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */onError:PropTypes.func,/**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */validator:PropTypes.func};var Dropzone$1 = Dropzone;/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */ /**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */ /**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */ /**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */var initialState={isFocused:false,isFileDialogActive:false,isDragActive:false,isDragAccept:false,isDragReject:false,acceptedFiles:[],fileRejections:[]};/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */function useDropzone(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _defaultProps$props=_objectSpread(_objectSpread({},defaultProps),props),accept=_defaultProps$props.accept,disabled=_defaultProps$props.disabled,getFilesFromEvent=_defaultProps$props.getFilesFromEvent,maxSize=_defaultProps$props.maxSize,minSize=_defaultProps$props.minSize,multiple=_defaultProps$props.multiple,maxFiles=_defaultProps$props.maxFiles,onDragEnter=_defaultProps$props.onDragEnter,onDragLeave=_defaultProps$props.onDragLeave,onDragOver=_defaultProps$props.onDragOver,onDrop=_defaultProps$props.onDrop,onDropAccepted=_defaultProps$props.onDropAccepted,onDropRejected=_defaultProps$props.onDropRejected,onFileDialogCancel=_defaultProps$props.onFileDialogCancel,onFileDialogOpen=_defaultProps$props.onFileDialogOpen,useFsAccessApi=_defaultProps$props.useFsAccessApi,autoFocus=_defaultProps$props.autoFocus,preventDropOnDocument=_defaultProps$props.preventDropOnDocument,noClick=_defaultProps$props.noClick,noKeyboard=_defaultProps$props.noKeyboard,noDrag=_defaultProps$props.noDrag,noDragEventsBubbling=_defaultProps$props.noDragEventsBubbling,onError=_defaultProps$props.onError,validator=_defaultProps$props.validator;var acceptAttr=reactExports.useMemo(function(){return acceptPropAsAcceptAttr(accept);},[accept]);var pickerTypes=reactExports.useMemo(function(){return pickerOptionsFromAccept(accept);},[accept]);var onFileDialogOpenCb=reactExports.useMemo(function(){return typeof onFileDialogOpen==="function"?onFileDialogOpen:noop;},[onFileDialogOpen]);var onFileDialogCancelCb=reactExports.useMemo(function(){return typeof onFileDialogCancel==="function"?onFileDialogCancel:noop;},[onFileDialogCancel]);/**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */var rootRef=reactExports.useRef(null);var inputRef=reactExports.useRef(null);var _useReducer=reactExports.useReducer(reducer,initialState),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];var isFocused=state.isFocused,isFileDialogActive=state.isFileDialogActive;var fsAccessApiWorksRef=reactExports.useRef(typeof window!=="undefined"&&window.isSecureContext&&useFsAccessApi&&canUseFileSystemAccessAPI());// Update file dialog active state when the window is focused on
var onWindowFocus=function onWindowFocus(){// Execute the timeout only if the file dialog is opened in the browser
if(!fsAccessApiWorksRef.current&&isFileDialogActive){setTimeout(function(){if(inputRef.current){var files=inputRef.current.files;if(!files.length){dispatch({type:"closeDialog"});onFileDialogCancelCb();}}},300);}};reactExports.useEffect(function(){window.addEventListener("focus",onWindowFocus,false);return function(){window.removeEventListener("focus",onWindowFocus,false);};},[inputRef,isFileDialogActive,onFileDialogCancelCb,fsAccessApiWorksRef]);var dragTargetsRef=reactExports.useRef([]);var onDocumentDrop=function onDocumentDrop(event){if(rootRef.current&&rootRef.current.contains(event.target)){// If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
return;}event.preventDefault();dragTargetsRef.current=[];};reactExports.useEffect(function(){if(preventDropOnDocument){document.addEventListener("dragover",onDocumentDragOver,false);document.addEventListener("drop",onDocumentDrop,false);}return function(){if(preventDropOnDocument){document.removeEventListener("dragover",onDocumentDragOver);document.removeEventListener("drop",onDocumentDrop);}};},[rootRef,preventDropOnDocument]);// Auto focus the root when autoFocus is true
reactExports.useEffect(function(){if(!disabled&&autoFocus&&rootRef.current){rootRef.current.focus();}return function(){};},[rootRef,autoFocus,disabled]);var onErrCb=reactExports.useCallback(function(e){if(onError){onError(e);}else {// Let the user know something's gone wrong if they haven't provided the onError cb.
console.error(e);}},[onError]);var onDragEnterCb=reactExports.useCallback(function(event){event.preventDefault();// Persist here because we need the event later after getFilesFromEvent() is done
event.persist();stopPropagation(event);dragTargetsRef.current=[].concat(_toConsumableArray$1(dragTargetsRef.current),[event.target]);if(isEvtWithFiles(event)){Promise.resolve(getFilesFromEvent(event)).then(function(files){if(isPropagationStopped(event)&&!noDragEventsBubbling){return;}var fileCount=files.length;var isDragAccept=fileCount>0&&allFilesAccepted({files:files,accept:acceptAttr,minSize:minSize,maxSize:maxSize,multiple:multiple,maxFiles:maxFiles,validator:validator});var isDragReject=fileCount>0&&!isDragAccept;dispatch({isDragAccept:isDragAccept,isDragReject:isDragReject,isDragActive:true,type:"setDraggedFiles"});if(onDragEnter){onDragEnter(event);}}).catch(function(e){return onErrCb(e);});}},[getFilesFromEvent,onDragEnter,onErrCb,noDragEventsBubbling,acceptAttr,minSize,maxSize,multiple,maxFiles,validator]);var onDragOverCb=reactExports.useCallback(function(event){event.preventDefault();event.persist();stopPropagation(event);var hasFiles=isEvtWithFiles(event);if(hasFiles&&event.dataTransfer){try{event.dataTransfer.dropEffect="copy";}catch(_unused){}/* eslint-disable-line no-empty */}if(hasFiles&&onDragOver){onDragOver(event);}return false;},[onDragOver,noDragEventsBubbling]);var onDragLeaveCb=reactExports.useCallback(function(event){event.preventDefault();event.persist();stopPropagation(event);// Only deactivate once the dropzone and all children have been left
var targets=dragTargetsRef.current.filter(function(target){return rootRef.current&&rootRef.current.contains(target);});// Make sure to remove a target present multiple times only once
// (Firefox may fire dragenter/dragleave multiple times on the same element)
var targetIdx=targets.indexOf(event.target);if(targetIdx!==-1){targets.splice(targetIdx,1);}dragTargetsRef.current=targets;if(targets.length>0){return;}dispatch({type:"setDraggedFiles",isDragActive:false,isDragAccept:false,isDragReject:false});if(isEvtWithFiles(event)&&onDragLeave){onDragLeave(event);}},[rootRef,onDragLeave,noDragEventsBubbling]);var setFiles=reactExports.useCallback(function(files,event){var acceptedFiles=[];var fileRejections=[];files.forEach(function(file){var _fileAccepted=fileAccepted(file,acceptAttr),_fileAccepted2=_slicedToArray(_fileAccepted,2),accepted=_fileAccepted2[0],acceptError=_fileAccepted2[1];var _fileMatchSize=fileMatchSize(file,minSize,maxSize),_fileMatchSize2=_slicedToArray(_fileMatchSize,2),sizeMatch=_fileMatchSize2[0],sizeError=_fileMatchSize2[1];var customErrors=validator?validator(file):null;if(accepted&&sizeMatch&&!customErrors){acceptedFiles.push(file);}else {var errors=[acceptError,sizeError];if(customErrors){errors=errors.concat(customErrors);}fileRejections.push({file:file,errors:errors.filter(function(e){return e;})});}});if(!multiple&&acceptedFiles.length>1||multiple&&maxFiles>=1&&acceptedFiles.length>maxFiles){// Reject everything and empty accepted files
acceptedFiles.forEach(function(file){fileRejections.push({file:file,errors:[TOO_MANY_FILES_REJECTION]});});acceptedFiles.splice(0);}dispatch({acceptedFiles:acceptedFiles,fileRejections:fileRejections,type:"setFiles"});if(onDrop){onDrop(acceptedFiles,fileRejections,event);}if(fileRejections.length>0&&onDropRejected){onDropRejected(fileRejections,event);}if(acceptedFiles.length>0&&onDropAccepted){onDropAccepted(acceptedFiles,event);}},[dispatch,multiple,acceptAttr,minSize,maxSize,maxFiles,onDrop,onDropAccepted,onDropRejected,validator]);var onDropCb=reactExports.useCallback(function(event){event.preventDefault();// Persist here because we need the event later after getFilesFromEvent() is done
event.persist();stopPropagation(event);dragTargetsRef.current=[];if(isEvtWithFiles(event)){Promise.resolve(getFilesFromEvent(event)).then(function(files){if(isPropagationStopped(event)&&!noDragEventsBubbling){return;}setFiles(files,event);}).catch(function(e){return onErrCb(e);});}dispatch({type:"reset"});},[getFilesFromEvent,setFiles,onErrCb,noDragEventsBubbling]);// Fn for opening the file dialog programmatically
var openFileDialog=reactExports.useCallback(function(){// No point to use FS access APIs if context is not secure
// https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
if(fsAccessApiWorksRef.current){dispatch({type:"openDialog"});onFileDialogOpenCb();// https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
var opts={multiple:multiple,types:pickerTypes};window.showOpenFilePicker(opts).then(function(handles){return getFilesFromEvent(handles);}).then(function(files){setFiles(files,null);dispatch({type:"closeDialog"});}).catch(function(e){// AbortError means the user canceled
if(isAbort(e)){onFileDialogCancelCb(e);dispatch({type:"closeDialog"});}else if(isSecurityError(e)){fsAccessApiWorksRef.current=false;// CORS, so cannot use this API
// Try using the input
if(inputRef.current){inputRef.current.value=null;inputRef.current.click();}else {onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));}}else {onErrCb(e);}});return;}if(inputRef.current){dispatch({type:"openDialog"});onFileDialogOpenCb();inputRef.current.value=null;inputRef.current.click();}},[dispatch,onFileDialogOpenCb,onFileDialogCancelCb,useFsAccessApi,setFiles,onErrCb,pickerTypes,multiple]);// Cb to open the file dialog when SPACE/ENTER occurs on the dropzone
var onKeyDownCb=reactExports.useCallback(function(event){// Ignore keyboard events bubbling up the DOM tree
if(!rootRef.current||!rootRef.current.isEqualNode(event.target)){return;}if(event.key===" "||event.key==="Enter"||event.keyCode===32||event.keyCode===13){event.preventDefault();openFileDialog();}},[rootRef,openFileDialog]);// Update focus state for the dropzone
var onFocusCb=reactExports.useCallback(function(){dispatch({type:"focus"});},[]);var onBlurCb=reactExports.useCallback(function(){dispatch({type:"blur"});},[]);// Cb to open the file dialog when click occurs on the dropzone
var onClickCb=reactExports.useCallback(function(){if(noClick){return;}// In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
// to ensure React can handle state changes
// See: https://github.com/react-dropzone/react-dropzone/issues/450
if(isIeOrEdge()){setTimeout(openFileDialog,0);}else {openFileDialog();}},[noClick,openFileDialog]);var composeHandler=function composeHandler(fn){return disabled?null:fn;};var composeKeyboardHandler=function composeKeyboardHandler(fn){return noKeyboard?null:composeHandler(fn);};var composeDragHandler=function composeDragHandler(fn){return noDrag?null:composeHandler(fn);};var stopPropagation=function stopPropagation(event){if(noDragEventsBubbling){event.stopPropagation();}};var getRootProps=reactExports.useMemo(function(){return function(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$refKey=_ref2.refKey,refKey=_ref2$refKey===void 0?"ref":_ref2$refKey,role=_ref2.role,onKeyDown=_ref2.onKeyDown,onFocus=_ref2.onFocus,onBlur=_ref2.onBlur,onClick=_ref2.onClick,onDragEnter=_ref2.onDragEnter,onDragOver=_ref2.onDragOver,onDragLeave=_ref2.onDragLeave,onDrop=_ref2.onDrop,rest=_objectWithoutProperties(_ref2,_excluded3);return _objectSpread(_objectSpread(_defineProperty$1({onKeyDown:composeKeyboardHandler(composeEventHandlers(onKeyDown,onKeyDownCb)),onFocus:composeKeyboardHandler(composeEventHandlers(onFocus,onFocusCb)),onBlur:composeKeyboardHandler(composeEventHandlers(onBlur,onBlurCb)),onClick:composeHandler(composeEventHandlers(onClick,onClickCb)),onDragEnter:composeDragHandler(composeEventHandlers(onDragEnter,onDragEnterCb)),onDragOver:composeDragHandler(composeEventHandlers(onDragOver,onDragOverCb)),onDragLeave:composeDragHandler(composeEventHandlers(onDragLeave,onDragLeaveCb)),onDrop:composeDragHandler(composeEventHandlers(onDrop,onDropCb)),role:typeof role==="string"&&role!==""?role:"presentation"},refKey,rootRef),!disabled&&!noKeyboard?{tabIndex:0}:{}),rest);};},[rootRef,onKeyDownCb,onFocusCb,onBlurCb,onClickCb,onDragEnterCb,onDragOverCb,onDragLeaveCb,onDropCb,noKeyboard,noDrag,disabled]);var onInputElementClick=reactExports.useCallback(function(event){event.stopPropagation();},[]);var getInputProps=reactExports.useMemo(function(){return function(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$refKey=_ref3.refKey,refKey=_ref3$refKey===void 0?"ref":_ref3$refKey,onChange=_ref3.onChange,onClick=_ref3.onClick,rest=_objectWithoutProperties(_ref3,_excluded4);var inputProps=_defineProperty$1({accept:acceptAttr,multiple:multiple,type:"file",style:{display:"none"},onChange:composeHandler(composeEventHandlers(onChange,onDropCb)),onClick:composeHandler(composeEventHandlers(onClick,onInputElementClick)),tabIndex:-1},refKey,inputRef);return _objectSpread(_objectSpread({},inputProps),rest);};},[inputRef,accept,multiple,onDropCb,disabled]);return _objectSpread(_objectSpread({},state),{},{isFocused:isFocused&&!disabled,getRootProps:getRootProps,getInputProps:getInputProps,rootRef:rootRef,inputRef:inputRef,open:composeHandler(openFileDialog)});}/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */function reducer(state,action){/* istanbul ignore next */switch(action.type){case"focus":return _objectSpread(_objectSpread({},state),{},{isFocused:true});case"blur":return _objectSpread(_objectSpread({},state),{},{isFocused:false});case"openDialog":return _objectSpread(_objectSpread({},initialState),{},{isFileDialogActive:true});case"closeDialog":return _objectSpread(_objectSpread({},state),{},{isFileDialogActive:false});case"setDraggedFiles":return _objectSpread(_objectSpread({},state),{},{isDragActive:action.isDragActive,isDragAccept:action.isDragAccept,isDragReject:action.isDragReject});case"setFiles":return _objectSpread(_objectSpread({},state),{},{acceptedFiles:action.acceptedFiles,fileRejections:action.fileRejections});case"reset":return _objectSpread({},initialState);default:return state;}}function noop(){}

var DefaultContext={color:undefined,size:undefined,className:undefined,style:undefined,attr:undefined};var IconContext=React.createContext&&/*#__PURE__*/React.createContext(DefaultContext);

var __assign=window&&window.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __rest=window&&window.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};function Tree2Element(tree){return tree&&tree.map(function(node,i){return/*#__PURE__*/React.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child));});}function GenIcon(data){// eslint-disable-next-line react/display-name
return function(props){return/*#__PURE__*/React.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child));};}function IconBase(props){var elem=function(conf){var attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]);var computedSize=size||conf.size||"1em";var className;if(conf.className)className=conf.className;if(props.className)className=(className?className+" ":"")+props.className;return/*#__PURE__*/React.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&/*#__PURE__*/React.createElement("title",null,title),props.children);};return IconContext!==undefined?/*#__PURE__*/React.createElement(IconContext.Consumer,null,function(conf){return elem(conf);}):elem(DefaultContext);}

// THIS FILE IS AUTO GENERATED
function BiCurrentLocation(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"path","attr":{"d":"M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"}}]})(props);}function BiFile(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"}},{"tag":"path","attr":{"d":"M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"}}]})(props);}function BiFolderMinus(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"}},{"tag":"path","attr":{"d":"M7.874 12h8v2h-8z"}}]})(props);}function BiFolderPlus(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"}},{"tag":"path","attr":{"d":"M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"}}]})(props);}function BiFolder(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function ImFolder(props){return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M7 2l2 2h7v11h-16v-13z"}}]})(props);}function ImFolderPlus(props){return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9 4l-2-2h-7v13h16v-11h-7zM11 11h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"}}]})(props);}function ImFolderMinus(props){return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9 4l-2-2h-7v13h16v-11h-7zM11 11h-6v-2h6v2z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function TiFolderOpen(props){return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.3 8h-2.4c-.4-1.2-1.5-2-2.8-2h-6c0-1.1-.9-2-2-2h-4.1c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3l2.2-8c.1-.6-.2-1-.7-1zm-18.3 1v-2c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1h-11.1c-.6 0-1.1.4-1.3 1l-1.6 6.3v-7.3zm14.9 7.5c-.2.8-1.1 1.5-1.9 1.5h-12s-.4-.2-.2-.8l1.9-7c0-.1.2-.2.3-.2h13.7l-1.8 6.5z"}}]})(props);}function TiFolder(props){return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-12 0h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-14v-2c0-.552.448-1 1-1zm12 12h-12c-.552 0-1-.448-1-1v-7h14v7c0 .552-.448 1-1 1z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function CgAdd(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z","fill":"currentColor"}}]})(props);}function CgChevronDoubleDown(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z","fill":"currentColor"}}]})(props);}function CgChevronDoubleUp(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z","fill":"currentColor"}}]})(props);}function CgCloseO(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z","fill":"currentColor"}}]})(props);}function CgRemove(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);}function CgSortAz(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z","fill":"currentColor"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function FaThumbtack(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function AiFillFileImage(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"}}]})(props);}function AiFillFilePdf(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15 2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31 6.7 6.7 0 0 1-2.17 1.28z"}}]})(props);}function AiFillFileWord(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function IoIosAddCircle(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"}}]})(props);}function IoIosArrowBack(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(props);}function IoIosCloseCircleOutline(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"}},{"tag":"path","attr":{"d":"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(props);}function IoIosEyeOff(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M88.3 68.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l355.5 355.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.5-5.5 5.5-14.5 0-20L88.3 68.1zM260.2 345.9c-53 2.4-96.6-41.2-94.1-94.1.6-12.2 3.6-23.8 8.6-34.3L121.3 164c-27.7 21.4-55.4 48.9-85.1 81.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c29.7 0 57.1-7.4 82.3-19.2l-43.5-43.5c-10.6 5-22.2 8-34.4 8.6zM475.8 266c5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112c-29.1 0-56 6.6-82 19l43.7 43.7c10.5-5 22.1-8.1 34.3-8.6 53-2.4 96.6 41.2 94.1 94.1-.6 12.2-3.6 23.8-8.6 34.3l53.5 53.5c33-25.3 61.3-55.9 85-82z"}},{"tag":"path","attr":{"d":"M192.2 260.9c2.4 31.3 27.6 56.5 58.9 58.9 8.2.6 16.1-.3 23.4-2.6l-79.8-79.8c-2.2 7.4-3.1 15.3-2.5 23.5zM320 256c0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-1.1 0-2.1 0-3.1-.1l18.6 18.7c1.8-5.9 2.8-12.2 2.8-18.6zM256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-6.4 0-12.6 1-18.5 2.8l18.7 18.7c-.1-1.5-.2-3-.2-4.5z"}}]})(props);}function IoIosEye(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z"}},{"tag":"path","attr":{"d":"M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z"}}]})(props);}function IoIosSearch(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"}}]})(props);}function IoMdArrowDropright(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M192 128l128 128-128 128z"}}]})(props);}

// THIS FILE IS AUTO GENERATED
function MdOutlineCreateNewFolder(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"}}]})(props);}

const MinusSquareO = (props) => (React.createElement("svg", Object.assign({}, props, { viewBox: "64 -65 897 897" }),
    React.createElement("g", null,
        React.createElement("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0\n  q0 -15 -11 -25.5t-25 -10.5z" }))));
const PlusSquareO = (props) => (React.createElement("svg", Object.assign({}, props, { viewBox: "64 -65 897 897" }),
    React.createElement("g", null,
        React.createElement("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184\n  q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" }))));
const CloseSquareO = (props) => (React.createElement("svg", Object.assign({}, props, { viewBox: "64 -65 897 897" }),
    React.createElement("g", null,
        React.createElement("path", { d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155\n  q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" }))));
const LocationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" stroke="currentColor" viewBox="0 0 50 50"><path d="M 24 0 L 24 1 L 24 4.0234375 C 13.208549 4.5309414 4.5329027 13.208443 4.0253906 24 L 1 24 L 0 24 L 0 26 L 1 26 L 4.0253906 26 C 4.5329027 36.791557 13.208549 45.469059 24 45.976562 L 24 49 L 24 50 L 26 50 L 26 49 L 26 45.974609 C 36.79155 45.467098 45.467098 36.79155 45.974609 26 L 49 26 L 50 26 L 50 24 L 49 24 L 45.974609 24 C 45.467098 13.20845 36.79155 4.5329024 26 4.0253906 L 26 1 L 26 0 L 24 0 z M 24 6.0488281 L 24 9 L 24 10 L 26 10 L 26 9 L 26 6.0507812 C 35.703044 6.5553041 43.444696 14.296956 43.949219 24 L 41 24 L 40 24 L 40 26 L 41 26 L 43.949219 26 C 43.444696 35.703044 35.703044 43.444696 26 43.949219 L 26 41 L 26 40 L 24 40 L 24 41 L 24 43.951172 C 14.298476 43.446281 6.5553046 35.703053 6.0507812 26 L 9 26 L 10 26 L 10 24 L 9 24 L 6.0507812 24 C 6.5553046 14.296947 14.298476 6.5537194 24 6.0488281 z M 19.990234 18.990234 A 1.0001 1.0001 0 0 0 19.292969 20.707031 L 23.585938 25 L 19.292969 29.292969 A 1.0001 1.0001 0 1 0 20.707031 30.707031 L 25 26.414062 L 29.292969 30.707031 A 1.0001 1.0001 0 1 0 30.707031 29.292969 L 26.414062 25 L 30.707031 20.707031 A 1.0001 1.0001 0 0 0 29.980469 18.990234 A 1.0001 1.0001 0 0 0 29.292969 19.292969 L 25 23.585938 L 20.707031 19.292969 A 1.0001 1.0001 0 0 0 19.990234 18.990234 z"/></svg>`;
const ZoomOutIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
const ZoomOutDoubleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z M 13 12 L 13 18 L 15.28125 15.71875 L 19.5625 20 L 15.28125 24.28125 L 13 22 L 13 28 L 19 28 L 16.71875 25.71875 L 21 21.4375 L 25.28125 25.71875 L 23 28 L 29 28 L 29 22 L 26.71875 24.28125 L 22.4375 20 L 26.71875 15.71875 L 29 18 L 29 12 L 23 12 L 25.28125 14.28125 L 21 18.5625 L 16.71875 14.28125 L 19 12 Z"/></svg>`;
const ZoomInIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
const SpaceIcon = `<circle cx="50" cy="50" r="50" fill="transparent" />`;
const getFolderIcon = (plugin, children, open) => {
    let setting = plugin.settings.folderIcon;
    let OpenFolderIcon = MinusSquareO;
    let InactiveOpenFolderIcon = CloseSquareO;
    let ClosedFolderIcon = PlusSquareO;
    if (setting === 'box-folder') {
        OpenFolderIcon = BiFolderMinus;
        InactiveOpenFolderIcon = BiFolder;
        ClosedFolderIcon = BiFolderPlus;
    }
    else if (setting === 'icomoon') {
        OpenFolderIcon = ImFolderMinus;
        InactiveOpenFolderIcon = ImFolder;
        ClosedFolderIcon = ImFolderPlus;
    }
    else if (setting === 'typicon') {
        OpenFolderIcon = TiFolderOpen;
        InactiveOpenFolderIcon = TiFolder;
        ClosedFolderIcon = TiFolder;
    }
    else if (setting === 'circle-gg') {
        OpenFolderIcon = CgRemove;
        InactiveOpenFolderIcon = CgCloseO;
        ClosedFolderIcon = CgAdd;
    }
    const Icon = children ? (open ? OpenFolderIcon : ClosedFolderIcon) : InactiveOpenFolderIcon;
    return Icon;
};

var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['',''],['','']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */var TemplateTag=function(){/**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */function TemplateTag(){var _this=this;for(var _len=arguments.length,transformers=Array(_len),_key=0;_key<_len;_key++){transformers[_key]=arguments[_key];}_classCallCheck(this,TemplateTag);this.tag=function(strings){for(var _len2=arguments.length,expressions=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){expressions[_key2-1]=arguments[_key2];}if(typeof strings==='function'){// if the first argument passed is a function, assume it is a template tag and return
// an intermediary tag that processes the template using the aforementioned tag, passing the
// result to our tag
return _this.interimTag.bind(_this,strings);}if(typeof strings==='string'){// if the first argument passed is a string, just transform it
return _this.transformEndResult(strings);}// else, return a transformed end result of processing the template with our tag
strings=strings.map(_this.transformString.bind(_this));return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this,expressions)));};// if first argument is an array, extrude it as a list of transformers
if(transformers.length>0&&Array.isArray(transformers[0])){transformers=transformers[0];}// if any transformers are functions, this means they are not initiated - automatically initiate them
this.transformers=transformers.map(function(transformer){return typeof transformer==='function'?transformer():transformer;});// return an ES2015 template tag
return this.tag;}/**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */_createClass(TemplateTag,[{key:'interimTag',/**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */value:function interimTag(previousTag,template){for(var _len3=arguments.length,substitutions=Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){substitutions[_key3-2]=arguments[_key3];}return this.tag(_templateObject,previousTag.apply(undefined,[template].concat(substitutions)));}/**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */},{key:'processSubstitutions',value:function processSubstitutions(substitutions,resultSoFar,remainingPart){var substitution=this.transformSubstitution(substitutions.shift(),resultSoFar);return ''.concat(resultSoFar,substitution,remainingPart);}/**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */},{key:'transformString',value:function transformString(str){var cb=function cb(res,transform){return transform.onString?transform.onString(res):res;};return this.transformers.reduce(cb,str);}/**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */},{key:'transformSubstitution',value:function transformSubstitution(substitution,resultSoFar){var cb=function cb(res,transform){return transform.onSubstitution?transform.onSubstitution(res,resultSoFar):res;};return this.transformers.reduce(cb,substitution);}/**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */},{key:'transformEndResult',value:function transformEndResult(endResult){var cb=function cb(res,transform){return transform.onEndResult?transform.onEndResult(res):res;};return this.transformers.reduce(cb,endResult);}}]);return TemplateTag;}();

/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */var trimResultTransformer=function trimResultTransformer(){var side=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return {onEndResult:function onEndResult(endResult){if(side===''){return endResult.trim();}side=side.toLowerCase();if(side==='start'||side==='left'){return endResult.replace(/^\s*/,'');}if(side==='end'||side==='right'){return endResult.replace(/\s*$/,'');}throw new Error('Side not supported: '+side);}};};

function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else {return Array.from(arr);}}/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */var stripIndentTransformer=function stripIndentTransformer(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'initial';return {onEndResult:function onEndResult(endResult){if(type==='initial'){// remove the shortest leading indentation from each line
var match=endResult.match(/^[^\S\n]*(?=\S)/gm);var indent=match&&Math.min.apply(Math,_toConsumableArray(match.map(function(el){return el.length;})));if(indent){var regexp=new RegExp('^.{'+indent+'}','gm');return endResult.replace(regexp,'');}return endResult;}if(type==='all'){// remove all indentation from each line
return endResult.replace(/^[^\S\n]+/gm,'');}throw new Error('Unknown type: '+type);}};};

/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */var replaceResultTransformer=function replaceResultTransformer(replaceWhat,replaceWith){return {onEndResult:function onEndResult(endResult){if(replaceWhat==null||replaceWith==null){throw new Error('replaceResultTransformer requires at least 2 arguments.');}return endResult.replace(replaceWhat,replaceWith);}};};

var replaceSubstitutionTransformer=function replaceSubstitutionTransformer(replaceWhat,replaceWith){return {onSubstitution:function onSubstitution(substitution,resultSoFar){if(replaceWhat==null||replaceWith==null){throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');}// Do not touch if null or undefined
if(substitution==null){return substitution;}else {return substitution.toString().replace(replaceWhat,replaceWith);}}};};

var defaults={separator:'',conjunction:'',serial:false};/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */var inlineArrayTransformer=function inlineArrayTransformer(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:defaults;return {onSubstitution:function onSubstitution(substitution,resultSoFar){// only operate on arrays
if(Array.isArray(substitution)){var arrayLength=substitution.length;var separator=opts.separator;var conjunction=opts.conjunction;var serial=opts.serial;// join each item in the array into a string where each item is separated by separator
// be sure to maintain indentation
var indent=resultSoFar.match(/(\n?[^\S\n]+)$/);if(indent){substitution=substitution.join(separator+indent[1]);}else {substitution=substitution.join(separator+' ');}// if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
if(conjunction&&arrayLength>1){var separatorIndex=substitution.lastIndexOf(separator);substitution=substitution.slice(0,separatorIndex)+(serial?separator:'')+' '+conjunction+substitution.slice(separatorIndex+1);}}return substitution;}};};

var splitStringTransformer=function splitStringTransformer(splitBy){return {onSubstitution:function onSubstitution(substitution,resultSoFar){if(splitBy!=null&&typeof splitBy==='string'){if(typeof substitution==='string'&&substitution.includes(splitBy)){substitution=substitution.split(splitBy);}}else {throw new Error('You need to specify a string character to split by.');}return substitution;}};};

var isValidValue=function isValidValue(x){return x!=null&&!Number.isNaN(x)&&typeof x!=='boolean';};var removeNonPrintingValuesTransformer=function removeNonPrintingValuesTransformer(){return {onSubstitution:function onSubstitution(substitution){if(Array.isArray(substitution)){return substitution.filter(isValidValue);}if(isValidValue(substitution)){return substitution;}return '';}};};

new TemplateTag(inlineArrayTransformer({separator:','}),stripIndentTransformer,trimResultTransformer);

new TemplateTag(inlineArrayTransformer({separator:',',conjunction:'and'}),stripIndentTransformer,trimResultTransformer);

new TemplateTag(inlineArrayTransformer({separator:',',conjunction:'or'}),stripIndentTransformer,trimResultTransformer);

new TemplateTag(splitStringTransformer('\n'),removeNonPrintingValuesTransformer,inlineArrayTransformer,stripIndentTransformer,trimResultTransformer);

new TemplateTag(splitStringTransformer('\n'),inlineArrayTransformer,stripIndentTransformer,trimResultTransformer,replaceSubstitutionTransformer(/&/g,'&amp;'),replaceSubstitutionTransformer(/</g,'&lt;'),replaceSubstitutionTransformer(/>/g,'&gt;'),replaceSubstitutionTransformer(/"/g,'&quot;'),replaceSubstitutionTransformer(/'/g,'&#x27;'),replaceSubstitutionTransformer(/`/g,'&#x60;'));

new TemplateTag(replaceResultTransformer(/(?:\n(?:\s*))+/g,' '),trimResultTransformer);

new TemplateTag(replaceResultTransformer(/(?:\n\s*)/g,''),trimResultTransformer);

new TemplateTag(inlineArrayTransformer({separator:','}),replaceResultTransformer(/(?:\s+)/g,' '),trimResultTransformer);

new TemplateTag(inlineArrayTransformer({separator:',',conjunction:'or'}),replaceResultTransformer(/(?:\s+)/g,' '),trimResultTransformer);

new TemplateTag(inlineArrayTransformer({separator:',',conjunction:'and'}),replaceResultTransformer(/(?:\s+)/g,' '),trimResultTransformer);

new TemplateTag(inlineArrayTransformer,stripIndentTransformer,trimResultTransformer);

new TemplateTag(inlineArrayTransformer,replaceResultTransformer(/(?:\s+)/g,' '),trimResultTransformer);

new TemplateTag(stripIndentTransformer,trimResultTransformer);

var stripIndents=new TemplateTag(stripIndentTransformer('all'),trimResultTransformer);

var dayjs_min = {exports: {}};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]";}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t;},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0");},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0);},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t);},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"");},u:function(t){return void 0===t;}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p]);},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0]);}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g;},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n);},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset});};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date();if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s);}}return new Date(e);}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b;},m.isValid=function(){return !(this.$d.toString()===l);},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e);},m.isAfter=function(t,e){return O(t)<this.startOf(e);},m.isBefore=function(t,e){return this.endOf(e)<O(t);},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t);},m.unix=function(){return Math.floor(this.valueOf()/1e3);},m.valueOf=function(){return this.$d.getTime();},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a);},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n);},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone();}},m.endOf=function(t){return this.startOf(t,!1);},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this;},m.set=function(t,e){return this.clone().$set(t,e);},m.get=function(t){return this[b.p(t)]();},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l);};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this);},m.subtract=function(t,e){return this.add(-1*t,e);},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s);},d=function(t){return b.s(s%12||12,t,"0");},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r;};return r.replace(y,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i;}return null;}(t)||i.replace(":","");});},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15);},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m);};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($);},m.daysInMonth=function(){return this.endOf(c).$D;},m.$locale=function(){return D[this.$L];},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n;},m.clone=function(){return b.w(this.$d,this);},m.toDate=function(){return new Date(this.valueOf());},m.toJSON=function(){return this.isValid()?this.toISOString():null;},m.toISOString=function(){return this.$d.toISOString();},m.toString=function(){return this.$d.toUTCString();},M;}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach(function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1]);};}),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O;},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t);},O.en=D[g],O.Ls=D,O.p={},O;}); 
} (dayjs_min));

var dayjs_minExports = dayjs_min.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

const eventTypes = {
    activeFileChange: 'fta-active-file-change',
    refreshView: 'fta-refresh-view',
    revealFile: 'fta-reveal-file',
    vaultChange: 'fta-vault-change',
    createNewNote: 'fta-create-new-note',
};

const openFile$1 = (props) => {
    const { file, app, newLeaf, leafBySplit } = props;
    let fileToOpen = app.vault.getAbstractFileByPath(file.path);
    if (!fileToOpen)
        return;
    let leaf = app.workspace.getLeaf(newLeaf);
    if (leafBySplit)
        leaf = app.workspace.createLeafBySplit(leaf, 'vertical');
    app.workspace.setActiveLeaf(leaf, {
        focus: true,
    });
    leaf.openFile(fileToOpen, { eState: { focus: true } });
};
const getFileCreateString = (params) => {
    const { plugin, fileName } = params;
    return stripIndents `
    ${plugin.settings.createdYaml
        ? `
        ---
        created: ${dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')}
        ---
        `
        : ''}
    ${plugin.settings.fileNameIsHeader ? `# ${fileName}` : ''}
    `;
};
const createNewMarkdownFile = (plugin, folder, newFileName, content) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const newFile = yield plugin.app.fileManager.createNewMarkdownFile(folder, newFileName);
    if (content && content !== '')
        yield plugin.app.vault.modify(newFile, content);
    openFile$1({ file: newFile, app: plugin.app, newLeaf: false });
    let evt = new CustomEvent(eventTypes.activeFileChange, { detail: { filePath: newFile.path } });
    window.dispatchEvent(evt);
});
const openFileInNewTab = (app, file) => {
    openFile$1({ file: file, app: app, newLeaf: true });
};
const openFileInNewTabGroup = (app, file) => {
    openFile$1({ file: file, app: app, newLeaf: false, leafBySplit: true });
};

class ConfirmationModal extends obsidian.Modal {
    constructor(plugin, confirmationNote, callBackAfterConfirmation) {
        super(plugin.app);
        this.confirmationNote = confirmationNote;
        this.callBackAfterConfirmation = callBackAfterConfirmation;
        this.plugin = plugin;
    }
    onOpen() {
        let { contentEl } = this;
        let confirmationModal = this;
        const headerEl = contentEl.createEl('div', { text: this.confirmationNote });
        headerEl.addClass('modal-title');
        this.confirmButton = contentEl.createEl('button', { text: 'Confirm' });
        const cancelButton = contentEl.createEl('button', { text: 'Cancel' });
        cancelButton.style.cssText = 'float: right;';
        cancelButton.addEventListener('click', () => {
            confirmationModal.close();
        });
        // Create Button Action and Assign to the Global Variable of the class
        this.onConfirmClickAction = (e) => {
            this.callBackAfterConfirmation();
            this.close();
        };
        // Assign the event listener
        this.confirmButton.addEventListener('click', this.onConfirmClickAction);
    }
    onClose() {
        let { contentEl } = this;
        contentEl.empty();
        this.confirmButton.removeEventListener('click', this.onConfirmClickAction);
    }
}
class VaultChangeModal extends obsidian.Modal {
    constructor(plugin, file, action) {
        super(plugin.app);
        this.file = file;
        this.action = action;
        this.plugin = plugin;
    }
    onOpen() {
        let { contentEl } = this;
        let myModal = this;
        // Header
        let headerText;
        if (this.action === 'rename') {
            headerText = 'Rename: Provide a New Name';
        }
        else if (this.action === 'create folder') {
            headerText = 'Create Folder: Provide Name';
        }
        else if (this.action === 'create note') {
            headerText = 'Create Note: Provide Name';
        }
        const headerEl = contentEl.createEl('div', { text: headerText });
        headerEl.addClass('modal-title');
        // Input El
        const inputEl = contentEl.createEl('input');
        inputEl.style.cssText = 'width: 100%; height: 2.5em; margin-bottom: 15px;';
        if (this.action === 'rename') {
            // Manual Rename Handler For md Files
            if (this.file.path.endsWith('.md')) {
                if (this.file instanceof obsidian.TFolder || this.file instanceof obsidian.TAbstractFile) {
                    inputEl.value = this.file.name.substring(0, this.file.name.lastIndexOf('.'));
                }
                else {
                    inputEl.value = this.file.basename;
                }
            }
            else {
                if (this.file instanceof obsidian.TFolder || this.file instanceof obsidian.TAbstractFile) {
                    inputEl.value = this.file.name;
                }
                else {
                    inputEl.value = this.file.basename;
                }
            }
        }
        else if (this.action === 'create note' || this.action === 'create folder') {
            inputEl.value = 'Untitled';
        }
        inputEl.focus();
        // Buttons
        let changeButtonText;
        if (this.action === 'rename') {
            changeButtonText = 'Change Name';
        }
        else if (this.action === 'create folder') {
            changeButtonText = 'Create Folder';
        }
        else if (this.action === 'create note') {
            changeButtonText = 'Create Note';
        }
        const changeButton = contentEl.createEl('button', { text: changeButtonText });
        const cancelButton = contentEl.createEl('button', { text: 'Cancel' });
        cancelButton.style.cssText = 'float: right;';
        cancelButton.addEventListener('click', () => {
            myModal.close();
        });
        const onClickAction = () => __awaiter(this, void 0, void 0, function* () {
            let newName = inputEl.value;
            if (this.action === 'rename') {
                // Manual Rename Handler For md Files
                if (this.file.path.endsWith('.md'))
                    newName = newName + '.md';
                // Folder Note files to be updated
                if (this.file instanceof obsidian.TFolder && this.plugin.settings.folderNote) {
                    let folderNoteFile = this.app.vault.getAbstractFileByPath(this.file.path + '/' + this.file.name + '.md');
                    if (folderNoteFile)
                        this.app.fileManager.renameFile(folderNoteFile, this.file.path + '/' + newName + '.md');
                }
                // Rename the destination file/folder name
                this.app.fileManager.renameFile(this.file instanceof obsidian.TFolder || this.file instanceof obsidian.TAbstractFile
                    ? this.file
                    : this.plugin.app.vault.getAbstractFileByPath(this.file.path), this.file.parent.path + '/' + newName);
            }
            else if (this.action === 'create folder') {
                this.app.vault.createFolder(this.file.path + '/' + newName);
            }
            else if (this.action === 'create note') {
                yield createNewMarkdownFile(this.plugin, this.file, newName, this.plugin.settings.createdYaml ? getFileCreateString({ plugin: this.plugin, fileName: newName }) : '');
            }
            myModal.close();
        });
        // Event Listener
        changeButton.addEventListener('click', onClickAction);
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter')
                onClickAction();
        });
    }
    onClose() {
        let { contentEl } = this;
        contentEl.empty();
    }
}
class MoveSuggestionModal extends obsidian.FuzzySuggestModal {
    constructor(app, fileOrFolderToMove) {
        super(app);
        this.fileOrFolderToMove = fileOrFolderToMove;
    }
    getItemText(item) {
        return item.path;
    }
    getItems() {
        return getAllFoldersInVault(this.app);
    }
    onChooseItem(item, evt) {
        let fileToRename = this.app.vault.getAbstractFileByPath(item.path);
        if (fileToRename) {
            this.app.vault.rename(fileToRename, item.path + '/' + fileToRename.name);
        }
    }
}
function getAllFoldersInVault(app) {
    let folders = [];
    let rootFolder = app.vault.getRoot();
    folders.push(rootFolder);
    function recursiveFx(folder) {
        for (let child of folder.children) {
            if (child instanceof obsidian.TFolder) {
                let childFolder = child;
                folders.push(childFolder);
                if (childFolder.children)
                    recursiveFx(childFolder);
            }
        }
    }
    recursiveFx(rootFolder);
    return folders;
}

// Helper Function To Get List of Files
const getFilesUnderPath = (path, plugin, getAllFiles) => {
    var filesUnderPath = [];
    var showFilesFromSubFolders = getAllFiles ? true : plugin.settings.showFilesFromSubFolders;
    var folderObj = plugin.app.vault.getAbstractFileByPath(path);
    recursiveFx(folderObj, plugin.app);
    function recursiveFx(folderObj, app) {
        if (folderObj instanceof obsidian.TFolder && folderObj.children) {
            for (let child of folderObj.children) {
                if (child instanceof obsidian.TFile)
                    filesUnderPath.push(TFile2OZFile(child));
                if (child instanceof obsidian.TFolder && showFilesFromSubFolders)
                    recursiveFx(child);
            }
        }
    }
    return filesUnderPath;
};
// Converted from TFile to OZFile
const TFile2OZFile = (t) => {
    return {
        path: t.path,
        basename: t.basename,
        extension: t.extension,
        stat: {
            mtime: t.stat.mtime,
            ctime: t.stat.ctime,
            size: t.stat.size,
        },
        parent: {
            path: t.parent.path,
        },
        isFolderNote: isFolderNote(t),
    };
};
// Check if the file is a folder note
const isFolderNote = (t) => {
    return t.extension === 'md' && t.basename === t.parent.name;
};
// Helper Function to Create Folder Tree
const createFolderTree = (startFolder) => {
    let fileTree = { folder: startFolder, children: [] };
    function recursive(folder, object) {
        if (!(folder && folder.children))
            return;
        for (let child of folder.children) {
            if (child instanceof obsidian.TFolder) {
                let childFolder = child;
                let newObj = { folder: childFolder, children: [] };
                object.children.push(newObj);
                if (childFolder.children)
                    recursive(childFolder, newObj);
            }
        }
    }
    recursive(startFolder, fileTree);
    return fileTree;
};
// Create Folder File Count Map
const getFolderNoteCountMap = (plugin) => {
    const counts = {};
    let files;
    if (plugin.settings.folderCountOption === 'notes') {
        files = plugin.app.vault.getMarkdownFiles();
    }
    else {
        files = plugin.app.vault.getFiles();
    }
    // Filter Folder Note Files
    if (plugin.settings.folderNote) {
        files = files.filter((f) => f.extension !== 'md' || (f.extension === 'md' && f.basename !== f.parent.name));
    }
    files.forEach((file) => {
        for (let folder = file.parent; folder != null; folder = folder.parent) {
            // -> Create object if doesn't exist
            if (!counts[folder.path])
                counts[folder.path] = { open: 0, closed: 0 };
            // -> Create number for open state
            if (folder == file.parent)
                counts[folder.path].open = 1 + counts[folder.path].open;
            // -> Create number for closed state
            counts[folder.path].closed = 1 + counts[folder.path].closed;
        }
    });
    return counts;
};
// Check if folder has child folder
const hasChildFolder = (folder) => {
    let children = folder.children;
    for (let child of children) {
        if (child instanceof obsidian.TFolder)
            return true;
    }
    return false;
};
// Files out of Md should be listed with extension badge - Md without extension
const getFileNameAndExtension = (fullName) => {
    var index = fullName.lastIndexOf('.');
    return {
        fileName: fullName.substring(0, index),
        extension: fullName.substring(index + 1),
    };
};
// Extracts the Folder Name from the Full Folder Path
const getFolderName = (folderPath, app) => {
    if (folderPath === '/')
        return app.vault.getName();
    let index = folderPath.lastIndexOf('/');
    if (index !== -1)
        return folderPath.substring(index + 1);
    return folderPath;
};
const internalPluginLoaded = (pluginName, app) => {
    var _a;
    // @ts-ignore
    return (_a = app.internalPlugins.plugins[pluginName]) === null || _a === void 0 ? void 0 : _a._loaded;
};
const pluginIsLoaded = (app, pluginId) => {
    // @ts-ignore
    return app.plugins.getPlugin(pluginId);
};
const createNewFile = (e, folderPath, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    let targetFolder = plugin.app.vault.getAbstractFileByPath(folderPath);
    if (!targetFolder)
        return;
    let modal = new VaultChangeModal(plugin, targetFolder, 'create note');
    modal.open();
});

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function err(message){const error=new Error(message);// In V8, Error objects keep the closure scope chain alive until the
// err.stack property is accessed.
if(error.stack===undefined){// IE sets the stack only if error is thrown
try{throw error;}catch(_){}// eslint-disable-line fb-www/no-unused-catch-bindings, no-empty
}return error;}var err_1=err;// @oss-only
var Recoil_err=err_1;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ // Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare
function isPromise(p){return !!p&&typeof p.then==='function';}var Recoil_isPromise=isPromise;function nullthrows(x,message){if(x!=null){return x;}throw Recoil_err(message!==null&&message!==void 0?message:'Got unexpected null or undefined');}var Recoil_nullthrows=nullthrows;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}class BaseLoadable{getValue(){throw Recoil_err('BaseLoadable');}toPromise(){throw Recoil_err('BaseLoadable');}valueMaybe(){throw Recoil_err('BaseLoadable');}valueOrThrow(){// $FlowFixMe[prop-missing]
throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);}promiseMaybe(){throw Recoil_err('BaseLoadable');}promiseOrThrow(){// $FlowFixMe[prop-missing]
throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);}errorMaybe(){throw Recoil_err('BaseLoadable');}errorOrThrow(){// $FlowFixMe[prop-missing]
throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);}is(other){// $FlowFixMe[prop-missing]
return other.state===this.state&&other.contents===this.contents;}map(_map){throw Recoil_err('BaseLoadable');}}class ValueLoadable extends BaseLoadable{constructor(value){super();_defineProperty(this,"state",'hasValue');_defineProperty(this,"contents",void 0);this.contents=value;}getValue(){return this.contents;}toPromise(){return Promise.resolve(this.contents);}valueMaybe(){return this.contents;}valueOrThrow(){return this.contents;}promiseMaybe(){return undefined;}errorMaybe(){return undefined;}map(map){try{const next=map(this.contents);return Recoil_isPromise(next)?loadableWithPromise(next):isLoadable(next)?next:loadableWithValue(next);}catch(e){return Recoil_isPromise(e)?// If we "suspended", then try again.
// errors and subsequent retries will be handled in 'loading' case
// $FlowFixMe[prop-missing]
loadableWithPromise(e.next(()=>this.map(map))):loadableWithError(e);}}}class ErrorLoadable extends BaseLoadable{constructor(error){super();_defineProperty(this,"state",'hasError');_defineProperty(this,"contents",void 0);this.contents=error;}getValue(){throw this.contents;}toPromise(){return Promise.reject(this.contents);}valueMaybe(){return undefined;}promiseMaybe(){return undefined;}errorMaybe(){return this.contents;}errorOrThrow(){return this.contents;}map(_map){// $FlowIssue[incompatible-return]
return this;}}class LoadingLoadable extends BaseLoadable{constructor(promise){super();_defineProperty(this,"state",'loading');_defineProperty(this,"contents",void 0);this.contents=promise;}getValue(){throw this.contents;}toPromise(){return this.contents;}valueMaybe(){return undefined;}promiseMaybe(){return this.contents;}promiseOrThrow(){return this.contents;}errorMaybe(){return undefined;}map(map){return loadableWithPromise(this.contents.then(value=>{const next=map(value);if(isLoadable(next)){const nextLoadable=next;switch(nextLoadable.state){case'hasValue':return nextLoadable.contents;case'hasError':throw nextLoadable.contents;case'loading':return nextLoadable.contents;}}// $FlowIssue[incompatible-return]
return next;})// $FlowFixMe[incompatible-call]
.catch(e=>{if(Recoil_isPromise(e)){// we were "suspended," try again
return e.then(()=>this.map(map).contents);}throw e;}));}}function loadableWithValue(value){return Object.freeze(new ValueLoadable(value));}function loadableWithError(error){return Object.freeze(new ErrorLoadable(error));}function loadableWithPromise(promise){return Object.freeze(new LoadingLoadable(promise));}function loadableLoading(){return Object.freeze(new LoadingLoadable(new Promise(()=>{})));}function loadableAllArray(inputs){return inputs.every(i=>i.state==='hasValue')?loadableWithValue(inputs.map(i=>i.contents)):inputs.some(i=>i.state==='hasError')?loadableWithError(Recoil_nullthrows(inputs.find(i=>i.state==='hasError'),'Invalid loadable passed to loadableAll').contents):loadableWithPromise(Promise.all(inputs.map(i=>i.contents)));}function loadableAll(inputs){const unwrapedInputs=Array.isArray(inputs)?inputs:Object.getOwnPropertyNames(inputs).map(key=>inputs[key]);const normalizedInputs=unwrapedInputs.map(x=>isLoadable(x)?x:Recoil_isPromise(x)?loadableWithPromise(x):loadableWithValue(x));const output=loadableAllArray(normalizedInputs);return Array.isArray(inputs)?// $FlowIssue[incompatible-return]
output:// Object.getOwnPropertyNames() has consistent key ordering with ES6
// $FlowIssue[incompatible-call]
output.map(outputs=>Object.getOwnPropertyNames(inputs).reduce(// $FlowFixMe[invalid-computed-prop]
(out,key,idx)=>({...out,[key]:outputs[idx]}),{}));}function isLoadable(x){return x instanceof BaseLoadable;}const LoadableStaticInterface={of:value=>Recoil_isPromise(value)?loadableWithPromise(value):isLoadable(value)?value:loadableWithValue(value),error:error=>loadableWithError(error),// $FlowIssue[incompatible-return]
loading:()=>loadableLoading(),// $FlowIssue[unclear-type]
all:loadableAll,isLoadable};var Recoil_Loadable={loadableWithValue,loadableWithError,loadableWithPromise,loadableLoading,loadableAll,isLoadable,RecoilLoadable:LoadableStaticInterface};var Recoil_Loadable_1=Recoil_Loadable.loadableWithValue;var Recoil_Loadable_2=Recoil_Loadable.loadableWithError;var Recoil_Loadable_3=Recoil_Loadable.loadableWithPromise;var Recoil_Loadable_4=Recoil_Loadable.loadableLoading;var Recoil_Loadable_5=Recoil_Loadable.loadableAll;var Recoil_Loadable_6=Recoil_Loadable.isLoadable;var Recoil_Loadable_7=Recoil_Loadable.RecoilLoadable;var Recoil_Loadable$1=/*#__PURE__*/Object.freeze({__proto__:null,loadableWithValue:Recoil_Loadable_1,loadableWithError:Recoil_Loadable_2,loadableWithPromise:Recoil_Loadable_3,loadableLoading:Recoil_Loadable_4,loadableAll:Recoil_Loadable_5,isLoadable:Recoil_Loadable_6,RecoilLoadable:Recoil_Loadable_7});const env={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:true,// Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
RECOIL_GKS_ENABLED:new Set(['recoil_hamt_2020','recoil_sync_external_store','recoil_suppress_rerender_in_callback','recoil_memory_managament_2020'])};function readProcessEnvBooleanFlag(name,set){var _process$env$name,_process$env$name$toL;const sanitizedValue=(_process$env$name=process.env[name])===null||_process$env$name===void 0?void 0:(_process$env$name$toL=_process$env$name.toLowerCase())===null||_process$env$name$toL===void 0?void 0:_process$env$name$toL.trim();if(sanitizedValue==null||sanitizedValue===''){return;}const allowedValues=['true','false'];if(!allowedValues.includes(sanitizedValue)){throw Recoil_err(`process.env.${name} value must be 'true', 'false', or empty: ${sanitizedValue}`);}set(sanitizedValue==='true');}function readProcessEnvStringArrayFlag(name,set){var _process$env$name2;const sanitizedValue=(_process$env$name2=process.env[name])===null||_process$env$name2===void 0?void 0:_process$env$name2.trim();if(sanitizedValue==null||sanitizedValue===''){return;}set(sanitizedValue.split(/\s*,\s*|\s+/));}/**
 * Allow NodeJS/NextJS/etc to set the initial state through process.env variable
 * Note:  we don't assume 'process' is available in all runtime environments
 *
 * @see https://github.com/facebookexperimental/Recoil/issues/733
 */function applyProcessEnvFlagOverrides(){var _process;// note: this check is needed in addition to the check below, runtime error will occur without it!
// eslint-disable-next-line fb-www/typeof-undefined
if(typeof process==='undefined'){return;}if(((_process=process)===null||_process===void 0?void 0:_process.env)==null){return;}readProcessEnvBooleanFlag('RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED',value=>{env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=value;});readProcessEnvStringArrayFlag('RECOIL_GKS_ENABLED',value=>{value.forEach(gk=>{env.RECOIL_GKS_ENABLED.add(gk);});});}applyProcessEnvFlagOverrides();var Recoil_RecoilEnv=env;function Recoil_gkx_OSS(gk){return Recoil_RecoilEnv.RECOIL_GKS_ENABLED.has(gk);}Recoil_gkx_OSS.setPass=gk=>{Recoil_RecoilEnv.RECOIL_GKS_ENABLED.add(gk);};Recoil_gkx_OSS.setFail=gk=>{Recoil_RecoilEnv.RECOIL_GKS_ENABLED.delete(gk);};Recoil_gkx_OSS.clear=()=>{Recoil_RecoilEnv.RECOIL_GKS_ENABLED.clear();};var Recoil_gkx=Recoil_gkx_OSS;// @oss-only
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function recoverableViolation(message,_projectName,{error}={}){return null;}var recoverableViolation_1=recoverableViolation;// @oss-only
var Recoil_recoverableViolation=recoverableViolation_1;var _createMutableSource,_useMutableSource,_useSyncExternalStore;const createMutableSource=// flowlint-next-line unclear-type:off
(_createMutableSource=React.createMutableSource)!==null&&_createMutableSource!==void 0?_createMutableSource:React.unstable_createMutableSource;const useMutableSource=// flowlint-next-line unclear-type:off
(_useMutableSource=React.useMutableSource)!==null&&_useMutableSource!==void 0?_useMutableSource:React.unstable_useMutableSource;// https://github.com/reactwg/react-18/discussions/86
const useSyncExternalStore=// flowlint-next-line unclear-type:off
(_useSyncExternalStore=React.useSyncExternalStore)!==null&&_useSyncExternalStore!==void 0?_useSyncExternalStore:// flowlint-next-line unclear-type:off
React.unstable_useSyncExternalStore;// Since React goes through a proxy dispatcher and the current renderer can
// change we can't simply check if `React.useSyncExternalStore()` is defined.
function currentRendererSupportsUseSyncExternalStore(){var _ReactCurrentDispatch;// $FlowFixMe[incompatible-use]
const{ReactCurrentDispatcher,ReactCurrentOwner}=/* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
   * to detect if the current renderer supports useSyncExternalStore()
   * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;const dispatcher=(_ReactCurrentDispatch=ReactCurrentDispatcher===null||ReactCurrentDispatcher===void 0?void 0:ReactCurrentDispatcher.current)!==null&&_ReactCurrentDispatch!==void 0?_ReactCurrentDispatch:ReactCurrentOwner.currentDispatcher;const isUseSyncExternalStoreSupported=dispatcher.useSyncExternalStore!=null;return isUseSyncExternalStoreSupported;}/**
 * mode: The React API and approach to use for syncing state with React
 * early: Re-renders from Recoil updates occur:
 *    1) earlier
 *    2) in sync with React updates in the same batch
 *    3) before transaction observers instead of after.
 * concurrent: Is the current mode compatible with Concurrent Mode and useTransition()
 */function reactMode(){// NOTE: This mode is currently broken with some Suspense cases
// see Recoil_selector-test.js
if(Recoil_gkx('recoil_transition_support')){return {mode:'TRANSITION_SUPPORT',early:true,concurrent:true};}if(Recoil_gkx('recoil_sync_external_store')&&useSyncExternalStore!=null){return {mode:'SYNC_EXTERNAL_STORE',early:true,concurrent:false};}if(Recoil_gkx('recoil_mutable_source')&&useMutableSource!=null&&typeof window!=='undefined'&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE){return Recoil_gkx('recoil_suppress_rerender_in_callback')?{mode:'MUTABLE_SOURCE',early:true,concurrent:true}:{mode:'MUTABLE_SOURCE',early:false,concurrent:false};}return Recoil_gkx('recoil_suppress_rerender_in_callback')?{mode:'LEGACY',early:true,concurrent:false}:{mode:'LEGACY',early:false,concurrent:false};}// TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
function isFastRefreshEnabled(){// @fb-only: const {isAcceptingUpdate} = require('__debug');
// @fb-only: return typeof isAcceptingUpdate === 'function' && isAcceptingUpdate();
return false;// @oss-only
}var Recoil_ReactMode={createMutableSource,useMutableSource,useSyncExternalStore,currentRendererSupportsUseSyncExternalStore,reactMode,isFastRefreshEnabled};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ // eslint-disable-next-line no-unused-vars
class AbstractRecoilValue{constructor(newKey){_defineProperty(this,"key",void 0);this.key=newKey;}toJSON(){return {key:this.key};}}class RecoilState extends AbstractRecoilValue{}class RecoilValueReadOnly extends AbstractRecoilValue{}function isRecoilValue(x){return x instanceof RecoilState||x instanceof RecoilValueReadOnly;}var Recoil_RecoilValue={AbstractRecoilValue,RecoilState,RecoilValueReadOnly,isRecoilValue};var Recoil_RecoilValue_1=Recoil_RecoilValue.AbstractRecoilValue;var Recoil_RecoilValue_2=Recoil_RecoilValue.RecoilState;var Recoil_RecoilValue_3=Recoil_RecoilValue.RecoilValueReadOnly;var Recoil_RecoilValue_4=Recoil_RecoilValue.isRecoilValue;var Recoil_RecoilValue$1=/*#__PURE__*/Object.freeze({__proto__:null,AbstractRecoilValue:Recoil_RecoilValue_1,RecoilState:Recoil_RecoilValue_2,RecoilValueReadOnly:Recoil_RecoilValue_3,isRecoilValue:Recoil_RecoilValue_4});/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */function mapIterable(iterable,callback){// Use generator to create iterable/iterator
return function*(){let index=0;for(const value of iterable){yield callback(value,index++);}}();}var Recoil_mapIterable=mapIterable;class DefaultValue{}const DEFAULT_VALUE=new DefaultValue();// flowlint-next-line unclear-type:off
const nodes=new Map();// flowlint-next-line unclear-type:off
const recoilValues=new Map();/* eslint-disable no-redeclare */function recoilValuesForKeys(keys){return Recoil_mapIterable(keys,key=>Recoil_nullthrows(recoilValues.get(key)));}function checkForDuplicateAtomKey(key){if(nodes.has(key)){const message=`Duplicate atom key "${key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;{// @fb-only: recoverableViolation(message, 'recoil');
console.warn(message);// @oss-only
}}}function registerNode(node){if(Recoil_RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED){checkForDuplicateAtomKey(node.key);}nodes.set(node.key,node);const recoilValue=node.set==null?new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key):new Recoil_RecoilValue$1.RecoilState(node.key);recoilValues.set(node.key,recoilValue);return recoilValue;}/* eslint-enable no-redeclare */class NodeMissingError extends Error{}// flowlint-next-line unclear-type:off
function getNode(key){const node=nodes.get(key);if(node==null){throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);}return node;}// flowlint-next-line unclear-type:off
function getNodeMaybe(key){return nodes.get(key);}const configDeletionHandlers=new Map();function deleteNodeConfigIfPossible(key){var _node$shouldDeleteCon;if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const node=nodes.get(key);if(node!==null&&node!==void 0&&(_node$shouldDeleteCon=node.shouldDeleteConfigOnRelease)!==null&&_node$shouldDeleteCon!==void 0&&_node$shouldDeleteCon.call(node)){var _getConfigDeletionHan;nodes.delete(key);(_getConfigDeletionHan=getConfigDeletionHandler(key))===null||_getConfigDeletionHan===void 0?void 0:_getConfigDeletionHan();configDeletionHandlers.delete(key);}}function setConfigDeletionHandler(key,fn){if(!Recoil_gkx('recoil_memory_managament_2020')){return;}if(fn===undefined){configDeletionHandlers.delete(key);}else {configDeletionHandlers.set(key,fn);}}function getConfigDeletionHandler(key){return configDeletionHandlers.get(key);}var Recoil_Node={nodes,recoilValues,registerNode,getNode,getNodeMaybe,deleteNodeConfigIfPossible,setConfigDeletionHandler,getConfigDeletionHandler,recoilValuesForKeys,NodeMissingError,DefaultValue,DEFAULT_VALUE};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function enqueueExecution(s,f){f();}var Recoil_Queue={enqueueExecution};function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var hamt_1=createCommonjsModule(function(module){var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
    @fileOverview Hash Array Mapped Trie.

    Code based on: https://github.com/exclipy/pdata
*/var hamt={};// export
/* Configuration
 ******************************************************************************/var SIZE=5;var BUCKET_SIZE=Math.pow(2,SIZE);var MASK=BUCKET_SIZE-1;var MAX_INDEX_NODE=BUCKET_SIZE/2;var MIN_ARRAY_NODE=BUCKET_SIZE/4;/*
 ******************************************************************************/var nothing={};var constant=function constant(x){return function(){return x;};};/**
    Get 32 bit hash of string.

    Based on:
    http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
*/var hash=hamt.hash=function(str){var type=typeof str==='undefined'?'undefined':_typeof(str);if(type==='number')return str;if(type!=='string')str+='';var hash=0;for(var i=0,len=str.length;i<len;++i){var c=str.charCodeAt(i);hash=(hash<<5)-hash+c|0;}return hash;};/* Bit Ops
 ******************************************************************************/ /**
    Hamming weight.

    Taken from: http://jsperf.com/hamming-weight
*/var popcount=function popcount(x){x-=x>>1&0x55555555;x=(x&0x33333333)+(x>>2&0x33333333);x=x+(x>>4)&0x0f0f0f0f;x+=x>>8;x+=x>>16;return x&0x7f;};var hashFragment=function hashFragment(shift,h){return h>>>shift&MASK;};var toBitmap=function toBitmap(x){return 1<<x;};var fromBitmap=function fromBitmap(bitmap,bit){return popcount(bitmap&bit-1);};/* Array Ops
 ******************************************************************************/ /**
    Set a value in an array.

    @param mutate Should the input array be mutated?
    @param at Index to change.
    @param v New value
    @param arr Array.
*/var arrayUpdate=function arrayUpdate(mutate,at,v,arr){var out=arr;if(!mutate){var len=arr.length;out=new Array(len);for(var i=0;i<len;++i){out[i]=arr[i];}}out[at]=v;return out;};/**
    Remove a value from an array.

    @param mutate Should the input array be mutated?
    @param at Index to remove.
    @param arr Array.
*/var arraySpliceOut=function arraySpliceOut(mutate,at,arr){var newLen=arr.length-1;var i=0;var g=0;var out=arr;if(mutate){i=g=at;}else {out=new Array(newLen);while(i<at){out[g++]=arr[i++];}}++i;while(i<=newLen){out[g++]=arr[i++];}if(mutate){out.length=newLen;}return out;};/**
    Insert a value into an array.

    @param mutate Should the input array be mutated?
    @param at Index to insert at.
    @param v Value to insert,
    @param arr Array.
*/var arraySpliceIn=function arraySpliceIn(mutate,at,v,arr){var len=arr.length;if(mutate){var _i=len;while(_i>=at){arr[_i--]=arr[_i];}arr[at]=v;return arr;}var i=0,g=0;var out=new Array(len+1);while(i<at){out[g++]=arr[i++];}out[at]=v;while(i<len){out[++g]=arr[i++];}return out;};/* Node Structures
 ******************************************************************************/var LEAF=1;var COLLISION=2;var INDEX=3;var ARRAY=4;/**
    Empty node.
*/var empty={__hamt_isEmpty:true};var isEmptyNode=function isEmptyNode(x){return x===empty||x&&x.__hamt_isEmpty;};/**
    Leaf holding a value.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member key Key.
    @member value Value stored.
*/var Leaf=function Leaf(edit,hash,key,value){return {type:LEAF,edit:edit,hash:hash,key:key,value:value,_modify:Leaf__modify};};/**
    Leaf holding multiple values with the same hash but different keys.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member children Array of collision children node.
*/var Collision=function Collision(edit,hash,children){return {type:COLLISION,edit:edit,hash:hash,children:children,_modify:Collision__modify};};/**
    Internal node with a sparse set of children.

    Uses a bitmap and array to pack children.

  @member edit Edit of the node.
    @member mask Bitmap that encode the positions of children in the array.
    @member children Array of child nodes.
*/var IndexedNode=function IndexedNode(edit,mask,children){return {type:INDEX,edit:edit,mask:mask,children:children,_modify:IndexedNode__modify};};/**
    Internal node with many children.

    @member edit Edit of the node.
    @member size Number of children.
    @member children Array of child nodes.
*/var ArrayNode=function ArrayNode(edit,size,children){return {type:ARRAY,edit:edit,size:size,children:children,_modify:ArrayNode__modify};};/**
    Is `node` a leaf node?
*/var isLeaf=function isLeaf(node){return node===empty||node.type===LEAF||node.type===COLLISION;};/* Internal node operations.
 ******************************************************************************/ /**
    Expand an indexed node into an array node.

  @param edit Current edit.
    @param frag Index of added child.
    @param child Added child.
    @param mask Index node mask before child added.
    @param subNodes Index node children before child added.
*/var expand=function expand(edit,frag,child,bitmap,subNodes){var arr=[];var bit=bitmap;var count=0;for(var i=0;bit;++i){if(bit&1)arr[i]=subNodes[count++];bit>>>=1;}arr[frag]=child;return ArrayNode(edit,count+1,arr);};/**
    Collapse an array node into a indexed node.

  @param edit Current edit.
    @param count Number of elements in new array.
    @param removed Index of removed element.
    @param elements Array node children before remove.
*/var pack=function pack(edit,count,removed,elements){var children=new Array(count-1);var g=0;var bitmap=0;for(var i=0,len=elements.length;i<len;++i){if(i!==removed){var elem=elements[i];if(elem&&!isEmptyNode(elem)){children[g++]=elem;bitmap|=1<<i;}}}return IndexedNode(edit,bitmap,children);};/**
    Merge two leaf nodes.

    @param shift Current shift.
    @param h1 Node 1 hash.
    @param n1 Node 1.
    @param h2 Node 2 hash.
    @param n2 Node 2.
*/var mergeLeaves=function mergeLeaves(edit,shift,h1,n1,h2,n2){if(h1===h2)return Collision(edit,h1,[n2,n1]);var subH1=hashFragment(shift,h1);var subH2=hashFragment(shift,h2);return IndexedNode(edit,toBitmap(subH1)|toBitmap(subH2),subH1===subH2?[mergeLeaves(edit,shift+SIZE,h1,n1,h2,n2)]:subH1<subH2?[n1,n2]:[n2,n1]);};/**
    Update an entry in a collision list.

    @param mutate Should mutation be used?
    @param edit Current edit.
    @param keyEq Key compare function.
    @param hash Hash of collision.
    @param list Collision list.
    @param f Update function.
    @param k Key to update.
    @param size Size ref.
*/var updateCollisionList=function updateCollisionList(mutate,edit,keyEq,h,list,f,k,size){var len=list.length;for(var i=0;i<len;++i){var child=list[i];if(keyEq(k,child.key)){var value=child.value;var _newValue=f(value);if(_newValue===value)return list;if(_newValue===nothing){--size.value;return arraySpliceOut(mutate,i,list);}return arrayUpdate(mutate,i,Leaf(edit,h,k,_newValue),list);}}var newValue=f();if(newValue===nothing)return list;++size.value;return arrayUpdate(mutate,len,Leaf(edit,h,k,newValue),list);};var canEditNode=function canEditNode(edit,node){return edit===node.edit;};/* Editing
 ******************************************************************************/var Leaf__modify=function Leaf__modify(edit,keyEq,shift,f,h,k,size){if(keyEq(k,this.key)){var _v=f(this.value);if(_v===this.value)return this;else if(_v===nothing){--size.value;return empty;}if(canEditNode(edit,this)){this.value=_v;return this;}return Leaf(edit,h,k,_v);}var v=f();if(v===nothing)return this;++size.value;return mergeLeaves(edit,shift,this.hash,this,h,Leaf(edit,h,k,v));};var Collision__modify=function Collision__modify(edit,keyEq,shift,f,h,k,size){if(h===this.hash){var canEdit=canEditNode(edit,this);var list=updateCollisionList(canEdit,edit,keyEq,this.hash,this.children,f,k,size);if(list===this.children)return this;return list.length>1?Collision(edit,this.hash,list):list[0];// collapse single element collision list
}var v=f();if(v===nothing)return this;++size.value;return mergeLeaves(edit,shift,this.hash,this,h,Leaf(edit,h,k,v));};var IndexedNode__modify=function IndexedNode__modify(edit,keyEq,shift,f,h,k,size){var mask=this.mask;var children=this.children;var frag=hashFragment(shift,h);var bit=toBitmap(frag);var indx=fromBitmap(mask,bit);var exists=mask&bit;var current=exists?children[indx]:empty;var child=current._modify(edit,keyEq,shift+SIZE,f,h,k,size);if(current===child)return this;var canEdit=canEditNode(edit,this);var bitmap=mask;var newChildren=void 0;if(exists&&isEmptyNode(child)){// remove
bitmap&=~bit;if(!bitmap)return empty;if(children.length<=2&&isLeaf(children[indx^1]))return children[indx^1];// collapse
newChildren=arraySpliceOut(canEdit,indx,children);}else if(!exists&&!isEmptyNode(child)){// add
if(children.length>=MAX_INDEX_NODE)return expand(edit,frag,child,mask,children);bitmap|=bit;newChildren=arraySpliceIn(canEdit,indx,child,children);}else {// modify
newChildren=arrayUpdate(canEdit,indx,child,children);}if(canEdit){this.mask=bitmap;this.children=newChildren;return this;}return IndexedNode(edit,bitmap,newChildren);};var ArrayNode__modify=function ArrayNode__modify(edit,keyEq,shift,f,h,k,size){var count=this.size;var children=this.children;var frag=hashFragment(shift,h);var child=children[frag];var newChild=(child||empty)._modify(edit,keyEq,shift+SIZE,f,h,k,size);if(child===newChild)return this;var canEdit=canEditNode(edit,this);var newChildren=void 0;if(isEmptyNode(child)&&!isEmptyNode(newChild)){// add
++count;newChildren=arrayUpdate(canEdit,frag,newChild,children);}else if(!isEmptyNode(child)&&isEmptyNode(newChild)){// remove
--count;if(count<=MIN_ARRAY_NODE)return pack(edit,count,frag,children);newChildren=arrayUpdate(canEdit,frag,empty,children);}else {// modify
newChildren=arrayUpdate(canEdit,frag,newChild,children);}if(canEdit){this.size=count;this.children=newChildren;return this;}return ArrayNode(edit,count,newChildren);};empty._modify=function(edit,keyEq,shift,f,h,k,size){var v=f();if(v===nothing)return empty;++size.value;return Leaf(edit,h,k,v);};/*
 ******************************************************************************/function Map(editable,edit,config,root,size){this._editable=editable;this._edit=edit;this._config=config;this._root=root;this._size=size;}Map.prototype.setTree=function(newRoot,newSize){if(this._editable){this._root=newRoot;this._size=newSize;return this;}return newRoot===this._root?this:new Map(this._editable,this._edit,this._config,newRoot,newSize);};/* Queries
 ******************************************************************************/ /**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/var tryGetHash=hamt.tryGetHash=function(alt,hash,key,map){var node=map._root;var shift=0;var keyEq=map._config.keyEq;while(true){switch(node.type){case LEAF:{return keyEq(key,node.key)?node.value:alt;}case COLLISION:{if(hash===node.hash){var children=node.children;for(var i=0,len=children.length;i<len;++i){var child=children[i];if(keyEq(key,child.key))return child.value;}}return alt;}case INDEX:{var frag=hashFragment(shift,hash);var bit=toBitmap(frag);if(node.mask&bit){node=node.children[fromBitmap(node.mask,bit)];shift+=SIZE;break;}return alt;}case ARRAY:{node=node.children[hashFragment(shift,hash)];if(node){shift+=SIZE;break;}return alt;}default:return alt;}}};Map.prototype.tryGetHash=function(alt,hash,key){return tryGetHash(alt,hash,key,this);};/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `tryGetHash`
*/var tryGet=hamt.tryGet=function(alt,key,map){return tryGetHash(alt,map._config.hash(key),key,map);};Map.prototype.tryGet=function(alt,key){return tryGet(alt,key,this);};/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `undefined` if none.
*/var getHash=hamt.getHash=function(hash,key,map){return tryGetHash(undefined,hash,key,map);};Map.prototype.getHash=function(hash,key){return getHash(hash,key,this);};/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `get`
*/hamt.get=function(key,map){return tryGetHash(undefined,map._config.hash(key),key,map);};Map.prototype.get=function(key,alt){return tryGet(alt,key,this);};/**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/var hasHash=hamt.has=function(hash,key,map){return tryGetHash(nothing,hash,key,map)!==nothing;};Map.prototype.hasHash=function(hash,key){return hasHash(hash,key,this);};/**
    Does an entry exist for `key` in `map`? Uses internal hash function.
*/var has=hamt.has=function(key,map){return hasHash(map._config.hash(key),key,map);};Map.prototype.has=function(key){return has(key,this);};var defKeyCompare=function defKeyCompare(x,y){return x===y;};/**
    Create an empty map.

    @param config Configuration.
*/hamt.make=function(config){return new Map(0,0,{keyEq:config&&config.keyEq||defKeyCompare,hash:config&&config.hash||hash},empty,0);};/**
    Empty map.
*/hamt.empty=hamt.make();/**
    Does `map` contain any elements?
*/var isEmpty=hamt.isEmpty=function(map){return map&&!!isEmptyNode(map._root);};Map.prototype.isEmpty=function(){return isEmpty(this);};/* Updates
 ******************************************************************************/ /**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/var modifyHash=hamt.modifyHash=function(f,hash,key,map){var size={value:map._size};var newRoot=map._root._modify(map._editable?map._edit:NaN,map._config.keyEq,0,f,hash,key,size);return map.setTree(newRoot,size.value);};Map.prototype.modifyHash=function(hash,key,f){return modifyHash(f,hash,key,this);};/**
    Alter the value stored for `key` in `map` using function `f` using
    internal hash function.

    @see `modifyHash`
*/var modify=hamt.modify=function(f,key,map){return modifyHash(f,map._config.hash(key),key,map);};Map.prototype.modify=function(key,f){return modify(f,key,this);};/**
    Store `value` for `key` in `map` using custom `hash`.

    Returns a map with the modified value. Does not alter `map`.
*/var setHash=hamt.setHash=function(hash,key,value,map){return modifyHash(constant(value),hash,key,map);};Map.prototype.setHash=function(hash,key,value){return setHash(hash,key,value,this);};/**
    Store `value` for `key` in `map` using internal hash function.

    @see `setHash`
*/var set=hamt.set=function(key,value,map){return setHash(map._config.hash(key),key,value,map);};Map.prototype.set=function(key,value){return set(key,value,this);};/**
    Remove the entry for `key` in `map`.

    Returns a map with the value removed. Does not alter `map`.
*/var del=constant(nothing);var removeHash=hamt.removeHash=function(hash,key,map){return modifyHash(del,hash,key,map);};Map.prototype.removeHash=Map.prototype.deleteHash=function(hash,key){return removeHash(hash,key,this);};/**
    Remove the entry for `key` in `map` using internal hash function.

    @see `removeHash`
*/var remove=hamt.remove=function(key,map){return removeHash(map._config.hash(key),key,map);};Map.prototype.remove=Map.prototype.delete=function(key){return remove(key,this);};/* Mutation
 ******************************************************************************/ /**
    Mark `map` as mutable.
 */var beginMutation=hamt.beginMutation=function(map){return new Map(map._editable+1,map._edit+1,map._config,map._root,map._size);};Map.prototype.beginMutation=function(){return beginMutation(this);};/**
    Mark `map` as immutable.
 */var endMutation=hamt.endMutation=function(map){map._editable=map._editable&&map._editable-1;return map;};Map.prototype.endMutation=function(){return endMutation(this);};/**
    Mutate `map` within the context of `f`.
    @param f
    @param map HAMT
*/var mutate=hamt.mutate=function(f,map){var transient=beginMutation(map);f(transient);return endMutation(transient);};Map.prototype.mutate=function(f){return mutate(f,this);};/* Traversal
 ******************************************************************************/ /**
    Apply a continuation.
*/var appk=function appk(k){return k&&lazyVisitChildren(k[0],k[1],k[2],k[3],k[4]);};/**
    Recursively visit all values stored in an array of nodes lazily.
*/var lazyVisitChildren=function lazyVisitChildren(len,children,i,f,k){while(i<len){var child=children[i++];if(child&&!isEmptyNode(child))return lazyVisit(child,f,[len,children,i,f,k]);}return appk(k);};/**
    Recursively visit all values stored in `node` lazily.
*/var lazyVisit=function lazyVisit(node,f,k){switch(node.type){case LEAF:return {value:f(node),rest:k};case COLLISION:case ARRAY:case INDEX:var children=node.children;return lazyVisitChildren(children.length,children,0,f,k);default:return appk(k);}};var DONE={done:true};/**
    Javascript iterator over a map.
*/function MapIterator(v){this.v=v;}MapIterator.prototype.next=function(){if(!this.v)return DONE;var v0=this.v;this.v=appk(v0.rest);return v0;};MapIterator.prototype[Symbol.iterator]=function(){return this;};/**
    Lazily visit each value in map with function `f`.
*/var visit=function visit(map,f){return new MapIterator(lazyVisit(map._root,f));};/**
    Get a Javascsript iterator of `map`.

    Iterates over `[key, value]` arrays.
*/var buildPairs=function buildPairs(x){return [x.key,x.value];};var entries=hamt.entries=function(map){return visit(map,buildPairs);};Map.prototype.entries=Map.prototype[Symbol.iterator]=function(){return entries(this);};/**
    Get array of all keys in `map`.

    Order is not guaranteed.
*/var buildKeys=function buildKeys(x){return x.key;};var keys=hamt.keys=function(map){return visit(map,buildKeys);};Map.prototype.keys=function(){return keys(this);};/**
    Get array of all values in `map`.

    Order is not guaranteed, duplicates are preserved.
*/var buildValues=function buildValues(x){return x.value;};var values=hamt.values=Map.prototype.values=function(map){return visit(map,buildValues);};Map.prototype.values=function(){return values(this);};/* Fold
 ******************************************************************************/ /**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function mapping accumulated value, value, and key to new value.
    @param z Starting value.
    @param m HAMT
*/var fold=hamt.fold=function(f,z,m){var root=m._root;if(root.type===LEAF)return f(z,root.value,root.key);var toVisit=[root.children];var children=void 0;while(children=toVisit.pop()){for(var i=0,len=children.length;i<len;){var child=children[i++];if(child&&child.type){if(child.type===LEAF)z=f(z,child.value,child.key);else toVisit.push(child.children);}}}return z;};Map.prototype.fold=function(f,z){return fold(f,z,this);};/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function invoked with value and key
    @param map HAMT
*/var forEach=hamt.forEach=function(f,map){return fold(function(_,value,key){return f(value,key,map);},null,map);};Map.prototype.forEach=function(f){return forEach(f,this);};/* Aggregate
 ******************************************************************************/ /**
    Get the number of entries in `map`.
*/var count=hamt.count=function(map){return map._size;};Map.prototype.count=function(){return count(this);};Object.defineProperty(Map.prototype,'size',{get:Map.prototype.count});/* Export
 ******************************************************************************/if(module.exports){module.exports=hamt;}else {undefined.hamt=hamt;}});class BuiltInMap{constructor(existing){_defineProperty(this,"_map",void 0);this._map=new Map(existing===null||existing===void 0?void 0:existing.entries());}keys(){return this._map.keys();}entries(){return this._map.entries();}get(k){return this._map.get(k);}has(k){return this._map.has(k);}set(k,v){this._map.set(k,v);return this;}delete(k){this._map.delete(k);return this;}clone(){return persistentMap(this);}toMap(){return new Map(this._map);}}class HashArrayMappedTrieMap{// Because hamt.empty is not a function there is no way to introduce type
// parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
// $FlowIssue
constructor(existing){_defineProperty(this,"_hamt",hamt_1.empty.beginMutation());if(existing instanceof HashArrayMappedTrieMap){const h=existing._hamt.endMutation();existing._hamt=h.beginMutation();this._hamt=h.beginMutation();}else if(existing){for(const[k,v]of existing.entries()){this._hamt.set(k,v);}}}keys(){return this._hamt.keys();}entries(){return this._hamt.entries();}get(k){return this._hamt.get(k);}has(k){return this._hamt.has(k);}set(k,v){this._hamt.set(k,v);return this;}delete(k){this._hamt.delete(k);return this;}clone(){return persistentMap(this);}toMap(){return new Map(this._hamt);}}function persistentMap(existing){if(Recoil_gkx('recoil_hamt_2020')){return new HashArrayMappedTrieMap(existing);}else {return new BuiltInMap(existing);}}var Recoil_PersistentMap={persistentMap};var Recoil_PersistentMap_1=Recoil_PersistentMap.persistentMap;var Recoil_PersistentMap$1=/*#__PURE__*/Object.freeze({__proto__:null,persistentMap:Recoil_PersistentMap_1});/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */function differenceSets(set,...setsWithValuesToRemove){const ret=new Set();FIRST:for(const value of set){for(const otherSet of setsWithValuesToRemove){if(otherSet.has(value)){continue FIRST;}}ret.add(value);}return ret;}var Recoil_differenceSets=differenceSets;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */function mapMap(map,callback){const result=new Map();map.forEach((value,key)=>{result.set(key,callback(value,key));});return result;}var Recoil_mapMap=mapMap;function makeGraph(){return {nodeDeps:new Map(),nodeToNodeSubscriptions:new Map()};}function cloneGraph(graph){return {nodeDeps:Recoil_mapMap(graph.nodeDeps,s=>new Set(s)),nodeToNodeSubscriptions:Recoil_mapMap(graph.nodeToNodeSubscriptions,s=>new Set(s))};}// Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.
function mergeDepsIntoGraph(key,newDeps,graph,// If olderGraph is given then we will not overwrite changes made to the given
// graph compared with olderGraph:
olderGraph){const{nodeDeps,nodeToNodeSubscriptions}=graph;const oldDeps=nodeDeps.get(key);if(oldDeps&&olderGraph&&oldDeps!==olderGraph.nodeDeps.get(key)){return;}// Update nodeDeps:
nodeDeps.set(key,newDeps);// Add new deps to nodeToNodeSubscriptions:
const addedDeps=oldDeps==null?newDeps:Recoil_differenceSets(newDeps,oldDeps);for(const dep of addedDeps){if(!nodeToNodeSubscriptions.has(dep)){nodeToNodeSubscriptions.set(dep,new Set());}const existing=Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));existing.add(key);}// Remove removed deps from nodeToNodeSubscriptions:
if(oldDeps){const removedDeps=Recoil_differenceSets(oldDeps,newDeps);for(const dep of removedDeps){if(!nodeToNodeSubscriptions.has(dep)){return;}const existing=Recoil_nullthrows(nodeToNodeSubscriptions.get(dep));existing.delete(key);if(existing.size===0){nodeToNodeSubscriptions.delete(dep);}}}}function saveDepsToStore(key,deps,store,version){var _storeState$nextTree,_storeState$previousT,_storeState$previousT2,_storeState$previousT3;const storeState=store.getState();if(!(version===storeState.currentTree.version||version===((_storeState$nextTree=storeState.nextTree)===null||_storeState$nextTree===void 0?void 0:_storeState$nextTree.version)||version===((_storeState$previousT=storeState.previousTree)===null||_storeState$previousT===void 0?void 0:_storeState$previousT.version)));// Merge the dependencies discovered into the store's dependency map
// for the version that was read:
const graph=store.getGraph(version);mergeDepsIntoGraph(key,deps,graph);// If this version is not the latest version, also write these dependencies
// into later versions if they don't already have their own:
if(version===((_storeState$previousT2=storeState.previousTree)===null||_storeState$previousT2===void 0?void 0:_storeState$previousT2.version)){const currentGraph=store.getGraph(storeState.currentTree.version);mergeDepsIntoGraph(key,deps,currentGraph,graph);}if(version===((_storeState$previousT3=storeState.previousTree)===null||_storeState$previousT3===void 0?void 0:_storeState$previousT3.version)||version===storeState.currentTree.version){var _storeState$nextTree2;const nextVersion=(_storeState$nextTree2=storeState.nextTree)===null||_storeState$nextTree2===void 0?void 0:_storeState$nextTree2.version;if(nextVersion!==undefined){const nextGraph=store.getGraph(nextVersion);mergeDepsIntoGraph(key,deps,nextGraph,graph);}}}var Recoil_Graph={cloneGraph,graph:makeGraph,saveDepsToStore};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */let nextTreeStateVersion=0;const getNextTreeStateVersion=()=>nextTreeStateVersion++;let nextStoreID=0;const getNextStoreID=()=>nextStoreID++;let nextComponentID=0;const getNextComponentID=()=>nextComponentID++;var Recoil_Keys={getNextTreeStateVersion,getNextStoreID,getNextComponentID};const{persistentMap:persistentMap$1}=Recoil_PersistentMap$1;const{graph}=Recoil_Graph;const{getNextTreeStateVersion:getNextTreeStateVersion$1}=Recoil_Keys;function makeEmptyTreeState(){const version=getNextTreeStateVersion$1();return {version,stateID:version,transactionMetadata:{},dirtyAtoms:new Set(),atomValues:persistentMap$1(),nonvalidatedAtoms:persistentMap$1()};}function makeEmptyStoreState(){const currentTree=makeEmptyTreeState();return {currentTree,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set(),knownSelectors:new Set(),transactionSubscriptions:new Map(),nodeTransactionSubscriptions:new Map(),nodeToComponentSubscriptions:new Map(),queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set(),graphsByVersion:new Map().set(currentTree.version,graph()),retention:{referenceCounts:new Map(),nodesRetainedByZone:new Map(),retainablesToCheckForRelease:new Set()},nodeCleanupFunctions:new Map()};}var Recoil_State={makeEmptyTreeState,makeEmptyStoreState,getNextTreeStateVersion:getNextTreeStateVersion$1};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */class RetentionZone{}function retentionZone(){return new RetentionZone();}var Recoil_RetentionZone={RetentionZone,retentionZone};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * 
 * @format
 * @oncall recoil
 */function setByAddingToSet(set,v){const next=new Set(set);next.add(v);return next;}function setByDeletingFromSet(set,v){const next=new Set(set);next.delete(v);return next;}function mapBySettingInMap(map,k,v){const next=new Map(map);next.set(k,v);return next;}function mapByUpdatingInMap(map,k,updater){const next=new Map(map);next.set(k,updater(next.get(k)));return next;}function mapByDeletingFromMap(map,k){const next=new Map(map);next.delete(k);return next;}function mapByDeletingMultipleFromMap(map,ks){const next=new Map(map);ks.forEach(k=>next.delete(k));return next;}var Recoil_CopyOnWrite={setByAddingToSet,setByDeletingFromSet,mapBySettingInMap,mapByUpdatingInMap,mapByDeletingFromMap,mapByDeletingMultipleFromMap};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */function*filterIterable(iterable,predicate){// Use generator to create iterable/iterator
let index=0;for(const value of iterable){if(predicate(value,index++)){yield value;}}}var Recoil_filterIterable=filterIterable;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Return a proxy object based on the provided base and factories objects.
 * The proxy will include all properties of the base object as-is.
 * The factories object contains callbacks to obtain the values of the properies
 * for its keys.
 *
 * This is useful for providing users an object where some properties may be
 * lazily computed only on first access.
 */ // $FlowIssue[unclear-type]
function lazyProxy(base,factories){const proxy=new Proxy(base,{// Compute and cache lazy property if not already done.
get:(target,prop)=>{if(!(prop in target)&&prop in factories){target[prop]=factories[prop]();}return target[prop];},// This method allows user to iterate keys as normal
ownKeys:target=>{return Object.keys(target);}});// $FlowIssue[incompatible-return]
return proxy;}var Recoil_lazyProxy=lazyProxy;const{getNode:getNode$1,getNodeMaybe:getNodeMaybe$1,recoilValuesForKeys:recoilValuesForKeys$1}=Recoil_Node;const{RetentionZone:RetentionZone$1}=Recoil_RetentionZone;const{setByAddingToSet:setByAddingToSet$1}=Recoil_CopyOnWrite;// flowlint-next-line unclear-type:off
const emptySet=Object.freeze(new Set());class ReadOnlyRecoilValueError extends Error{}function initializeRetentionForNode(store,nodeKey,retainedBy){if(!Recoil_gkx('recoil_memory_managament_2020')){return ()=>undefined;}const{nodesRetainedByZone}=store.getState().retention;function addToZone(zone){let set=nodesRetainedByZone.get(zone);if(!set){nodesRetainedByZone.set(zone,set=new Set());}set.add(nodeKey);}if(retainedBy instanceof RetentionZone$1){addToZone(retainedBy);}else if(Array.isArray(retainedBy)){for(const zone of retainedBy){addToZone(zone);}}return ()=>{if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const{retention}=store.getState();function deleteFromZone(zone){const set=retention.nodesRetainedByZone.get(zone);set===null||set===void 0?void 0:set.delete(nodeKey);if(set&&set.size===0){retention.nodesRetainedByZone.delete(zone);}}if(retainedBy instanceof RetentionZone$1){deleteFromZone(retainedBy);}else if(Array.isArray(retainedBy)){for(const zone of retainedBy){deleteFromZone(zone);}}};}function initializeNodeIfNewToStore(store,treeState,key,trigger){const storeState=store.getState();if(storeState.nodeCleanupFunctions.has(key)){return;}const node=getNode$1(key);const retentionCleanup=initializeRetentionForNode(store,key,node.retainedBy);const nodeCleanup=node.init(store,treeState,trigger);storeState.nodeCleanupFunctions.set(key,()=>{nodeCleanup();retentionCleanup();});}function initializeNode(store,key,trigger){initializeNodeIfNewToStore(store,store.getState().currentTree,key,trigger);}function cleanUpNode(store,key){var _state$nodeCleanupFun;const state=store.getState();(_state$nodeCleanupFun=state.nodeCleanupFunctions.get(key))===null||_state$nodeCleanupFun===void 0?void 0:_state$nodeCleanupFun();state.nodeCleanupFunctions.delete(key);}// Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.
function getNodeLoadable(store,state,key){initializeNodeIfNewToStore(store,state,key,'get');return getNode$1(key).get(store,state);}// Peek at the current value loadable for a node without any evaluation or state change
function peekNodeLoadable(store,state,key){return getNode$1(key).peek(store,state);}// Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.
function setUnvalidatedAtomValue_DEPRECATED(state,key,newValue){var _node$invalidate;const node=getNodeMaybe$1(key);node===null||node===void 0?void 0:(_node$invalidate=node.invalidate)===null||_node$invalidate===void 0?void 0:_node$invalidate.call(node,state);return {...state,atomValues:state.atomValues.clone().delete(key),nonvalidatedAtoms:state.nonvalidatedAtoms.clone().set(key,newValue),dirtyAtoms:setByAddingToSet$1(state.dirtyAtoms,key)};}// Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)
function setNodeValue(store,state,key,newValue){const node=getNode$1(key);if(node.set==null){throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);}const set=node.set;// so flow doesn't lose the above refinement.
initializeNodeIfNewToStore(store,state,key,'set');return set(store,state,newValue);}function peekNodeInfo(store,state,key){const storeState=store.getState();const graph=store.getGraph(state.version);const type=getNode$1(key).nodeType;return Recoil_lazyProxy({type},{// $FlowFixMe[underconstrained-implicit-instantiation]
loadable:()=>peekNodeLoadable(store,state,key),isActive:()=>storeState.knownAtoms.has(key)||storeState.knownSelectors.has(key),isSet:()=>type==='selector'?false:state.atomValues.has(key),isModified:()=>state.dirtyAtoms.has(key),// Report current dependencies.  If the node hasn't been evaluated, then
// dependencies may be missing based on the current state.
deps:()=>{var _graph$nodeDeps$get;return recoilValuesForKeys$1((_graph$nodeDeps$get=graph.nodeDeps.get(key))!==null&&_graph$nodeDeps$get!==void 0?_graph$nodeDeps$get:[]);},// Reports all "current" subscribers.  Evaluating other nodes or
// previous in-progress async evaluations may introduce new subscribers.
subscribers:()=>{var _storeState$nodeToCom,_storeState$nodeToCom2;return {nodes:recoilValuesForKeys$1(Recoil_filterIterable(getDownstreamNodes(store,state,new Set([key])),nodeKey=>nodeKey!==key)),components:Recoil_mapIterable((_storeState$nodeToCom=(_storeState$nodeToCom2=storeState.nodeToComponentSubscriptions.get(key))===null||_storeState$nodeToCom2===void 0?void 0:_storeState$nodeToCom2.values())!==null&&_storeState$nodeToCom!==void 0?_storeState$nodeToCom:[],([name])=>({name}))};}});}// Find all of the recursively dependent nodes
function getDownstreamNodes(store,state,keys){const visitedNodes=new Set();const visitingNodes=Array.from(keys);const graph=store.getGraph(state.version);for(let key=visitingNodes.pop();key;key=visitingNodes.pop()){var _graph$nodeToNodeSubs;visitedNodes.add(key);const subscribedNodes=(_graph$nodeToNodeSubs=graph.nodeToNodeSubscriptions.get(key))!==null&&_graph$nodeToNodeSubs!==void 0?_graph$nodeToNodeSubs:emptySet;for(const downstreamNode of subscribedNodes){if(!visitedNodes.has(downstreamNode)){visitingNodes.push(downstreamNode);}}}return visitedNodes;}var Recoil_FunctionalCore={getNodeLoadable,peekNodeLoadable,setNodeValue,initializeNode,cleanUpNode,setUnvalidatedAtomValue_DEPRECATED,peekNodeInfo,getDownstreamNodes};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */let _invalidateMemoizedSnapshot=null;function setInvalidateMemoizedSnapshot(invalidate){_invalidateMemoizedSnapshot=invalidate;}function invalidateMemoizedSnapshot(){var _invalidateMemoizedSn;(_invalidateMemoizedSn=_invalidateMemoizedSnapshot)===null||_invalidateMemoizedSn===void 0?void 0:_invalidateMemoizedSn();}var Recoil_SnapshotCache={setInvalidateMemoizedSnapshot,invalidateMemoizedSnapshot};const{getDownstreamNodes:getDownstreamNodes$1,getNodeLoadable:getNodeLoadable$1,setNodeValue:setNodeValue$1}=Recoil_FunctionalCore;const{getNextComponentID:getNextComponentID$1}=Recoil_Keys;const{getNode:getNode$2,getNodeMaybe:getNodeMaybe$2}=Recoil_Node;const{DefaultValue:DefaultValue$1}=Recoil_Node;const{reactMode:reactMode$1}=Recoil_ReactMode;const{AbstractRecoilValue:AbstractRecoilValue$1,RecoilState:RecoilState$1,RecoilValueReadOnly:RecoilValueReadOnly$1,isRecoilValue:isRecoilValue$1}=Recoil_RecoilValue$1;const{invalidateMemoizedSnapshot:invalidateMemoizedSnapshot$1}=Recoil_SnapshotCache;function getRecoilValueAsLoadable(store,{key},treeState=store.getState().currentTree){var _storeState$nextTree,_storeState$previousT;// Reading from an older tree can cause bugs because the dependencies that we
// discover during the read are lost.
const storeState=store.getState();if(!(treeState.version===storeState.currentTree.version||treeState.version===((_storeState$nextTree=storeState.nextTree)===null||_storeState$nextTree===void 0?void 0:_storeState$nextTree.version)||treeState.version===((_storeState$previousT=storeState.previousTree)===null||_storeState$previousT===void 0?void 0:_storeState$previousT.version)));const loadable=getNodeLoadable$1(store,treeState,key);if(loadable.state==='loading'){loadable.contents.catch(()=>{/**
       * HACK: intercept thrown error here to prevent an uncaught promise exception. Ideally this would happen closer to selector
       * execution (perhaps introducing a new ERROR class to be resolved by async selectors that are in an error state)
       */return;});}return loadable;}function applyAtomValueWrites(atomValues,writes){const result=atomValues.clone();writes.forEach((v,k)=>{if(v.state==='hasValue'&&v.contents instanceof DefaultValue$1){result.delete(k);}else {result.set(k,v);}});return result;}function valueFromValueOrUpdater(store,state,{key},valueOrUpdater){if(typeof valueOrUpdater==='function'){// Updater form: pass in the current value. Throw if the current value
// is unavailable (namely when updating an async selector that's
// pending or errored):
const current=getNodeLoadable$1(store,state,key);if(current.state==='loading'){const msg=`Tried to set atom or selector "${key}" using an updater function while the current state is pending, this is not currently supported.`;throw Recoil_err(msg);}else if(current.state==='hasError'){throw current.contents;}// T itself may be a function, so our refinement is not sufficient:
return valueOrUpdater(current.contents);// flowlint-line unclear-type:off
}else {return valueOrUpdater;}}function applyAction(store,state,action){if(action.type==='set'){const{recoilValue,valueOrUpdater}=action;const newValue=valueFromValueOrUpdater(store,state,recoilValue,valueOrUpdater);const writes=setNodeValue$1(store,state,recoilValue.key,newValue);for(const[key,loadable]of writes.entries()){writeLoadableToTreeState(state,key,loadable);}}else if(action.type==='setLoadable'){const{recoilValue:{key},loadable}=action;writeLoadableToTreeState(state,key,loadable);}else if(action.type==='markModified'){const{recoilValue:{key}}=action;state.dirtyAtoms.add(key);}else if(action.type==='setUnvalidated'){var _node$invalidate;// Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.
const{recoilValue:{key},unvalidatedValue}=action;const node=getNodeMaybe$2(key);node===null||node===void 0?void 0:(_node$invalidate=node.invalidate)===null||_node$invalidate===void 0?void 0:_node$invalidate.call(node,state);state.atomValues.delete(key);state.nonvalidatedAtoms.set(key,unvalidatedValue);state.dirtyAtoms.add(key);}else {Recoil_recoverableViolation(`Unknown action ${action.type}`);}}function writeLoadableToTreeState(state,key,loadable){if(loadable.state==='hasValue'&&loadable.contents instanceof DefaultValue$1){state.atomValues.delete(key);}else {state.atomValues.set(key,loadable);}state.dirtyAtoms.add(key);state.nonvalidatedAtoms.delete(key);}function applyActionsToStore(store,actions){store.replaceState(state=>{const newState=copyTreeState(state);for(const action of actions){applyAction(store,newState,action);}invalidateDownstreams(store,newState);invalidateMemoizedSnapshot$1();return newState;});}function queueOrPerformStateUpdate(store,action){if(batchStack.length){const actionsByStore=batchStack[batchStack.length-1];let actions=actionsByStore.get(store);if(!actions){actionsByStore.set(store,actions=[]);}actions.push(action);}else {applyActionsToStore(store,[action]);}}const batchStack=[];function batchStart(){const actionsByStore=new Map();batchStack.push(actionsByStore);return ()=>{for(const[store,actions]of actionsByStore){applyActionsToStore(store,actions);}batchStack.pop();};}function copyTreeState(state){return {...state,atomValues:state.atomValues.clone(),nonvalidatedAtoms:state.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(state.dirtyAtoms)};}function invalidateDownstreams(store,state){// Inform any nodes that were changed or downstream of changes so that they
// can clear out any caches as needed due to the update:
const downstreams=getDownstreamNodes$1(store,state,state.dirtyAtoms);for(const key of downstreams){var _getNodeMaybe,_getNodeMaybe$invalid;(_getNodeMaybe=getNodeMaybe$2(key))===null||_getNodeMaybe===void 0?void 0:(_getNodeMaybe$invalid=_getNodeMaybe.invalidate)===null||_getNodeMaybe$invalid===void 0?void 0:_getNodeMaybe$invalid.call(_getNodeMaybe,state);}}function setRecoilValue(store,recoilValue,valueOrUpdater){queueOrPerformStateUpdate(store,{type:'set',recoilValue,valueOrUpdater});}function setRecoilValueLoadable(store,recoilValue,loadable){if(loadable instanceof DefaultValue$1){return setRecoilValue(store,recoilValue,loadable);}queueOrPerformStateUpdate(store,{type:'setLoadable',recoilValue,loadable:loadable});}function markRecoilValueModified(store,recoilValue){queueOrPerformStateUpdate(store,{type:'markModified',recoilValue});}function setUnvalidatedRecoilValue(store,recoilValue,unvalidatedValue){queueOrPerformStateUpdate(store,{type:'setUnvalidated',recoilValue,unvalidatedValue});}function subscribeToRecoilValue(store,{key},callback,componentDebugName=null){const subID=getNextComponentID$1();const storeState=store.getState();if(!storeState.nodeToComponentSubscriptions.has(key)){storeState.nodeToComponentSubscriptions.set(key,new Map());}Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID,[componentDebugName!==null&&componentDebugName!==void 0?componentDebugName:'<not captured>',callback]);// Handle the case that, during the same tick that we are subscribing, an atom
// has been updated by some effect handler. Otherwise we will miss the update.
const mode=reactMode$1();if(mode.early&&(mode.mode==='LEGACY'||mode.mode==='MUTABLE_SOURCE')){const nextTree=store.getState().nextTree;if(nextTree&&nextTree.dirtyAtoms.has(key)){callback(nextTree);}}return {release:()=>{const releaseStoreState=store.getState();const subs=releaseStoreState.nodeToComponentSubscriptions.get(key);if(subs===undefined||!subs.has(subID)){return;}subs.delete(subID);if(subs.size===0){releaseStoreState.nodeToComponentSubscriptions.delete(key);}}};}function refreshRecoilValue(store,recoilValue){var _node$clearCache;const{currentTree}=store.getState();const node=getNode$2(recoilValue.key);(_node$clearCache=node.clearCache)===null||_node$clearCache===void 0?void 0:_node$clearCache.call(node,store,currentTree);}var Recoil_RecoilValueInterface={RecoilValueReadOnly:RecoilValueReadOnly$1,AbstractRecoilValue:AbstractRecoilValue$1,RecoilState:RecoilState$1,getRecoilValueAsLoadable,setRecoilValue,setRecoilValueLoadable,markRecoilValueModified,setUnvalidatedRecoilValue,subscribeToRecoilValue,isRecoilValue:isRecoilValue$1,applyAtomValueWrites,// TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
batchStart,writeLoadableToTreeState,invalidateDownstreams,copyTreeState,refreshRecoilValue};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */function someSet(set,callback,context){const iterator=set.entries();let current=iterator.next();while(!current.done){const entry=current.value;if(callback.call(context,entry[1],entry[0],set)){return true;}current=iterator.next();}return false;}var Recoil_someSet=someSet;const{cleanUpNode:cleanUpNode$1}=Recoil_FunctionalCore;const{deleteNodeConfigIfPossible:deleteNodeConfigIfPossible$1,getNode:getNode$3}=Recoil_Node;const{RetentionZone:RetentionZone$2}=Recoil_RetentionZone;// Components that aren't mounted after suspending for this long will be assumed
// to be discarded and their resources released.
const SUSPENSE_TIMEOUT_MS=120000;const emptySet$1=new Set();function releaseRetainablesNowOnCurrentTree(store,retainables){const storeState=store.getState();const treeState=storeState.currentTree;if(storeState.nextTree){return;// leak memory rather than erase something that's about to be used.
}const nodes=new Set();for(const r of retainables){if(r instanceof RetentionZone$2){for(const n of nodesRetainedByZone(storeState,r)){nodes.add(n);}}else {nodes.add(r);}}const releasableNodes=findReleasableNodes(store,nodes);for(const node of releasableNodes){releaseNode(store,treeState,node);}}function findReleasableNodes(store,searchFromNodes){const storeState=store.getState();const treeState=storeState.currentTree;const graph=store.getGraph(treeState.version);const releasableNodes=new Set();// mutated to collect answer
const nonReleasableNodes=new Set();findReleasableNodesInner(searchFromNodes);return releasableNodes;function findReleasableNodesInner(searchFromNodes){const releasableNodesFoundThisIteration=new Set();const downstreams=getDownstreamNodesInTopologicalOrder(store,treeState,searchFromNodes,releasableNodes,// don't descend into these
nonReleasableNodes// don't descend into these
);// Find which of the downstream nodes are releasable and which are not:
for(const node of downstreams){var _storeState$retention;// Not releasable if configured to be retained forever:
if(getNode$3(node).retainedBy==='recoilRoot'){nonReleasableNodes.add(node);continue;}// Not releasable if retained directly by a component:
if(((_storeState$retention=storeState.retention.referenceCounts.get(node))!==null&&_storeState$retention!==void 0?_storeState$retention:0)>0){nonReleasableNodes.add(node);continue;}// Not releasable if retained by a zone:
if(zonesThatCouldRetainNode(node).some(z=>storeState.retention.referenceCounts.get(z))){nonReleasableNodes.add(node);continue;}// Not releasable if it has a non-releasable child (which will already be in
// nonReleasableNodes because we are going in topological order):
const nodeChildren=graph.nodeToNodeSubscriptions.get(node);if(nodeChildren&&Recoil_someSet(nodeChildren,child=>nonReleasableNodes.has(child))){nonReleasableNodes.add(node);continue;}releasableNodes.add(node);releasableNodesFoundThisIteration.add(node);}// If we found any releasable nodes, we need to walk UP from those nodes to
// find whether their parents can now be released as well:
const parents=new Set();for(const node of releasableNodesFoundThisIteration){for(const parent of (_graph$nodeDeps$get=graph.nodeDeps.get(node))!==null&&_graph$nodeDeps$get!==void 0?_graph$nodeDeps$get:emptySet$1){var _graph$nodeDeps$get;if(!releasableNodes.has(parent)){parents.add(parent);}}}if(parents.size){findReleasableNodesInner(parents);}}}// Children before parents
function getDownstreamNodesInTopologicalOrder(store,treeState,nodes,// Mutable set is destroyed in place
doNotDescendInto1,doNotDescendInto2){const graph=store.getGraph(treeState.version);const answer=[];const visited=new Set();while(nodes.size>0){visit(Recoil_nullthrows(nodes.values().next().value));}return answer;function visit(node){if(doNotDescendInto1.has(node)||doNotDescendInto2.has(node)){nodes.delete(node);return;}if(visited.has(node)){return;}const children=graph.nodeToNodeSubscriptions.get(node);if(children){for(const child of children){visit(child);}}visited.add(node);nodes.delete(node);answer.push(node);}}function releaseNode(store,treeState,node){if(!Recoil_gkx('recoil_memory_managament_2020')){return;}// Atom effects, in-closure caches, etc.:
cleanUpNode$1(store,node);// Delete from store state:
const storeState=store.getState();storeState.knownAtoms.delete(node);storeState.knownSelectors.delete(node);storeState.nodeTransactionSubscriptions.delete(node);storeState.retention.referenceCounts.delete(node);const zones=zonesThatCouldRetainNode(node);for(const zone of zones){var _storeState$retention2;(_storeState$retention2=storeState.retention.nodesRetainedByZone.get(zone))===null||_storeState$retention2===void 0?void 0:_storeState$retention2.delete(node);}// Note that we DO NOT delete from nodeToComponentSubscriptions because this
// already happens when the last component that was retaining the node unmounts,
// and this could happen either before or after that.
// Delete from TreeState and dep graph:
treeState.atomValues.delete(node);treeState.dirtyAtoms.delete(node);treeState.nonvalidatedAtoms.delete(node);const graph=storeState.graphsByVersion.get(treeState.version);if(graph){const deps=graph.nodeDeps.get(node);if(deps!==undefined){graph.nodeDeps.delete(node);for(const dep of deps){var _graph$nodeToNodeSubs;(_graph$nodeToNodeSubs=graph.nodeToNodeSubscriptions.get(dep))===null||_graph$nodeToNodeSubs===void 0?void 0:_graph$nodeToNodeSubs.delete(node);}}// No need to delete sub's deps as there should be no subs at this point.
// But an invariant would require deleting nodes in topological order.
graph.nodeToNodeSubscriptions.delete(node);}// Node config (for family members only as their configs can be recreated, and
// only if they are not retained within any other Stores):
deleteNodeConfigIfPossible$1(node);}function nodesRetainedByZone(storeState,zone){var _storeState$retention3;return (_storeState$retention3=storeState.retention.nodesRetainedByZone.get(zone))!==null&&_storeState$retention3!==void 0?_storeState$retention3:emptySet$1;}function zonesThatCouldRetainNode(node){const retainedBy=getNode$3(node).retainedBy;if(retainedBy===undefined||retainedBy==='components'||retainedBy==='recoilRoot'){return [];}else if(retainedBy instanceof RetentionZone$2){return [retainedBy];}else {return retainedBy;// it's an array of zones
}}function scheduleOrPerformPossibleReleaseOfRetainable(store,retainable){const state=store.getState();if(state.nextTree){state.retention.retainablesToCheckForRelease.add(retainable);}else {releaseRetainablesNowOnCurrentTree(store,new Set([retainable]));}}function updateRetainCount(store,retainable,delta){var _map$get;if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const map=store.getState().retention.referenceCounts;const newCount=((_map$get=map.get(retainable))!==null&&_map$get!==void 0?_map$get:0)+delta;if(newCount===0){updateRetainCountToZero(store,retainable);}else {map.set(retainable,newCount);}}function updateRetainCountToZero(store,retainable){if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const map=store.getState().retention.referenceCounts;map.delete(retainable);scheduleOrPerformPossibleReleaseOfRetainable(store,retainable);}function releaseScheduledRetainablesNow(store){if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const state=store.getState();releaseRetainablesNowOnCurrentTree(store,state.retention.retainablesToCheckForRelease);state.retention.retainablesToCheckForRelease.clear();}function retainedByOptionWithDefault(r){// The default will change from 'recoilRoot' to 'components' in the future.
return r===undefined?'recoilRoot':r;}var Recoil_Retention={SUSPENSE_TIMEOUT_MS,updateRetainCount,updateRetainCountToZero,releaseScheduledRetainablesNow,retainedByOptionWithDefault};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 *
 * 
 * @format
 * @oncall recoil
 */const{unstable_batchedUpdates}=reactDom;var ReactBatchedUpdates={unstable_batchedUpdates};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 *
 * 
 * @format
 * @oncall recoil
 */ // @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
// prettier-ignore
const{unstable_batchedUpdates:unstable_batchedUpdates$1}=ReactBatchedUpdates;// @oss-only
var Recoil_ReactBatchedUpdates={unstable_batchedUpdates:unstable_batchedUpdates$1};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */const{batchStart:batchStart$1}=Recoil_RecoilValueInterface;const{unstable_batchedUpdates:unstable_batchedUpdates$2}=Recoil_ReactBatchedUpdates;// flowlint-next-line unclear-type:off
/*
 * During SSR, unstable_batchedUpdates may be undefined so this
 * falls back to a basic function that executes the batch
 */let batcher=unstable_batchedUpdates$2||(batchFn=>batchFn());/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */const setBatcher=newBatcher=>{batcher=newBatcher;};/**
 * Returns the current batcher function.
 */const getBatcher=()=>batcher;/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */const batchUpdates=callback=>{batcher(()=>{let batchEnd=()=>undefined;try{batchEnd=batchStart$1();callback();}finally{batchEnd();}});};var Recoil_Batching={getBatcher,setBatcher,batchUpdates};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */function*concatIterables(iters){for(const iter of iters){for(const val of iter){yield val;}}}var Recoil_concatIterables=concatIterables;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /* eslint-disable fb-www/typeof-undefined */const isSSR=// $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
typeof Window==='undefined'||typeof window==='undefined';/* eslint-enable fb-www/typeof-undefined */const isWindow=value=>!isSSR&&(// $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
value===window||value instanceof Window);const isReactNative=typeof navigator!=='undefined'&&navigator.product==='ReactNative';// eslint-disable-line fb-www/typeof-undefined
var Recoil_Environment={isSSR,isReactNative,isWindow};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Caches a function's results based on the key returned by the passed
 * hashFunction.
 */function memoizeWithArgsHash(fn,hashFunction){let cache;return (...args)=>{if(!cache){cache={};}const key=hashFunction(...args);if(!Object.hasOwnProperty.call(cache,key)){cache[key]=fn(...args);}return cache[key];};}/**
 * Caches a function's results based on a comparison of the arguments.
 * Only caches the last return of the function.
 * Defaults to reference equality
 */function memoizeOneWithArgsHash(fn,hashFunction){let lastKey;let lastResult;// breaking cache when arguments change
return (...args)=>{const key=hashFunction(...args);if(lastKey===key){return lastResult;}lastKey=key;lastResult=fn(...args);return lastResult;};}/**
 * Caches a function's results based on a comparison of the arguments.
 * Only caches the last return of the function.
 * Defaults to reference equality
 */function memoizeOneWithArgsHashAndInvalidation(fn,hashFunction){let lastKey;let lastResult;// breaking cache when arguments change
const memoizedFn=(...args)=>{const key=hashFunction(...args);if(lastKey===key){return lastResult;}lastKey=key;lastResult=fn(...args);return lastResult;};const invalidate=()=>{lastKey=null;};return [memoizedFn,invalidate];}var Recoil_Memoize={memoizeWithArgsHash,memoizeOneWithArgsHash,memoizeOneWithArgsHashAndInvalidation};const{batchUpdates:batchUpdates$1}=Recoil_Batching;const{initializeNode:initializeNode$1,peekNodeInfo:peekNodeInfo$1}=Recoil_FunctionalCore;const{graph:graph$1}=Recoil_Graph;const{getNextStoreID:getNextStoreID$1}=Recoil_Keys;const{DEFAULT_VALUE:DEFAULT_VALUE$1,recoilValues:recoilValues$1,recoilValuesForKeys:recoilValuesForKeys$2}=Recoil_Node;const{AbstractRecoilValue:AbstractRecoilValue$2,getRecoilValueAsLoadable:getRecoilValueAsLoadable$1,setRecoilValue:setRecoilValue$1,setUnvalidatedRecoilValue:setUnvalidatedRecoilValue$1}=Recoil_RecoilValueInterface;const{updateRetainCount:updateRetainCount$1}=Recoil_Retention;const{setInvalidateMemoizedSnapshot:setInvalidateMemoizedSnapshot$1}=Recoil_SnapshotCache;const{getNextTreeStateVersion:getNextTreeStateVersion$2,makeEmptyStoreState:makeEmptyStoreState$1}=Recoil_State;const{isSSR:isSSR$1}=Recoil_Environment;const{memoizeOneWithArgsHashAndInvalidation:memoizeOneWithArgsHashAndInvalidation$1}=Recoil_Memoize;// Opaque at this surface because it's part of the public API from here.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.
class Snapshot{// eslint-disable-next-line fb-www/no-uninitialized-properties
constructor(storeState,parentStoreID){_defineProperty(this,"_store",void 0);_defineProperty(this,"_refCount",1);_defineProperty(this,"getLoadable",recoilValue=>{this.checkRefCount_INTERNAL();return getRecoilValueAsLoadable$1(this._store,recoilValue);});_defineProperty(this,"getPromise",recoilValue=>{this.checkRefCount_INTERNAL();return this.getLoadable(recoilValue).toPromise();});_defineProperty(this,"getNodes_UNSTABLE",opt=>{this.checkRefCount_INTERNAL();// TODO Deal with modified selectors
if((opt===null||opt===void 0?void 0:opt.isModified)===true){if((opt===null||opt===void 0?void 0:opt.isInitialized)===false){return [];}const state=this._store.getState().currentTree;return recoilValuesForKeys$2(state.dirtyAtoms);}const knownAtoms=this._store.getState().knownAtoms;const knownSelectors=this._store.getState().knownSelectors;return (opt===null||opt===void 0?void 0:opt.isInitialized)==null?recoilValues$1.values():opt.isInitialized===true?recoilValuesForKeys$2(Recoil_concatIterables([knownAtoms,knownSelectors])):Recoil_filterIterable(recoilValues$1.values(),({key})=>!knownAtoms.has(key)&&!knownSelectors.has(key));});_defineProperty(this,"getInfo_UNSTABLE",({key})=>{this.checkRefCount_INTERNAL();return peekNodeInfo$1(this._store,this._store.getState().currentTree,key);});_defineProperty(this,"map",mapper=>{this.checkRefCount_INTERNAL();const mutableSnapshot=new MutableSnapshot(this,batchUpdates$1);mapper(mutableSnapshot);// if removing batchUpdates from `set` add it here
return mutableSnapshot;});_defineProperty(this,"asyncMap",async mapper=>{this.checkRefCount_INTERNAL();const mutableSnapshot=new MutableSnapshot(this,batchUpdates$1);mutableSnapshot.retain();// Retain new snapshot during async mapper
await mapper(mutableSnapshot);// Continue to retain the new snapshot for the user, but auto-release it
// after the next tick, the same as a new synchronous snapshot.
mutableSnapshot.autoRelease_INTERNAL();return mutableSnapshot;});this._store={storeID:getNextStoreID$1(),parentStoreID,getState:()=>storeState,replaceState:replacer=>{// no batching, so nextTree is never active
storeState.currentTree=replacer(storeState.currentTree);},getGraph:version=>{const graphs=storeState.graphsByVersion;if(graphs.has(version)){return Recoil_nullthrows(graphs.get(version));}const newGraph=graph$1();graphs.set(version,newGraph);return newGraph;},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw Recoil_err('Cannot subscribe to Snapshots');}};// Initialize any nodes that are live in the parent store (primarily so that
// this snapshot gets counted towards the node's live stores count).
// TODO Optimize this when cloning snapshots for callbacks
for(const nodeKey of this._store.getState().knownAtoms){initializeNode$1(this._store,nodeKey,'get');updateRetainCount$1(this._store,nodeKey,1);}this.autoRelease_INTERNAL();}retain(){if(this._refCount<=0);this._refCount++;let released=false;return ()=>{if(!released){released=true;this._release();}};}/**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */autoRelease_INTERNAL(){if(!isSSR$1){// Use timeout of 10 to workaround Firefox issue: https://github.com/facebookexperimental/Recoil/issues/1936
window.setTimeout(()=>this._release(),10);}}_release(){this._refCount--;if(this._refCount===0){this._store.getState().nodeCleanupFunctions.forEach(cleanup=>cleanup());this._store.getState().nodeCleanupFunctions.clear();if(!Recoil_gkx('recoil_memory_managament_2020')){return;}// Temporarily nerfing this to allow us to find broken call sites without
// actually breaking anybody yet.
// for (const k of this._store.getState().knownAtoms) {
//   updateRetainCountToZero(this._store, k);
// }
}else if(this._refCount<0);}isRetained(){return this._refCount>0;}checkRefCount_INTERNAL(){if(Recoil_gkx('recoil_memory_managament_2020')&&this._refCount<=0);}getStore_INTERNAL(){this.checkRefCount_INTERNAL();return this._store;}getID(){this.checkRefCount_INTERNAL();return this._store.getState().currentTree.stateID;}getStoreID(){this.checkRefCount_INTERNAL();return this._store.storeID;}// We want to allow the methods to be destructured and used as accessors
/* eslint-disable fb-www/extra-arrow-initializer */ /* eslint-enable fb-www/extra-arrow-initializer */}function cloneStoreState(store,treeState,bumpVersion=false){const storeState=store.getState();const version=bumpVersion?getNextTreeStateVersion$2():treeState.version;return {// Always clone the TreeState to isolate stores from accidental mutations.
// For example, reading a selector from a cloned snapshot shouldn't cache
// in the original treestate which may cause the original to skip
// initialization of upstream atoms.
currentTree:{// TODO snapshots shouldn't really have versions because a new version number
// is always assigned when the snapshot is gone to.
version:bumpVersion?version:treeState.version,stateID:bumpVersion?version:treeState.stateID,transactionMetadata:{...treeState.transactionMetadata},dirtyAtoms:new Set(treeState.dirtyAtoms),atomValues:treeState.atomValues.clone(),nonvalidatedAtoms:treeState.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(storeState.knownAtoms),// FIXME here's a copy
knownSelectors:new Set(storeState.knownSelectors),// FIXME here's a copy
transactionSubscriptions:new Map(),nodeTransactionSubscriptions:new Map(),nodeToComponentSubscriptions:new Map(),queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set(),graphsByVersion:new Map().set(version,store.getGraph(treeState.version)),retention:{referenceCounts:new Map(),nodesRetainedByZone:new Map(),retainablesToCheckForRelease:new Set()},// FIXME here's a copy
// Create blank cleanup handlers for atoms so snapshots don't re-run
// atom effects.
nodeCleanupFunctions:new Map(Recoil_mapIterable(storeState.nodeCleanupFunctions.entries(),([key])=>[key,()=>{}]))};}// Factory to build a fresh snapshot
function freshSnapshot(initializeState){const snapshot=new Snapshot(makeEmptyStoreState$1());return initializeState!=null?snapshot.map(initializeState):snapshot;}// Factory to clone a snapshot state
const[memoizedCloneSnapshot,invalidateMemoizedSnapshot$2]=memoizeOneWithArgsHashAndInvalidation$1(// $FlowFixMe[missing-local-annot]
(store,version)=>{var _storeState$nextTree;const storeState=store.getState();const treeState=version==='latest'?(_storeState$nextTree=storeState.nextTree)!==null&&_storeState$nextTree!==void 0?_storeState$nextTree:storeState.currentTree:Recoil_nullthrows(storeState.previousTree);return new Snapshot(cloneStoreState(store,treeState),store.storeID);},(store,version)=>{var _store$getState$nextT,_store$getState$previ;return String(version)+String(store.storeID)+String((_store$getState$nextT=store.getState().nextTree)===null||_store$getState$nextT===void 0?void 0:_store$getState$nextT.version)+String(store.getState().currentTree.version)+String((_store$getState$previ=store.getState().previousTree)===null||_store$getState$previ===void 0?void 0:_store$getState$previ.version);});// Avoid circular dependencies
setInvalidateMemoizedSnapshot$1(invalidateMemoizedSnapshot$2);function cloneSnapshot(store,version='latest'){const snapshot=memoizedCloneSnapshot(store,version);if(!snapshot.isRetained()){invalidateMemoizedSnapshot$2();return memoizedCloneSnapshot(store,version);}return snapshot;}class MutableSnapshot extends Snapshot{constructor(snapshot,batch){super(cloneStoreState(snapshot.getStore_INTERNAL(),snapshot.getStore_INTERNAL().getState().currentTree,true),snapshot.getStoreID());_defineProperty(this,"_batch",void 0);_defineProperty(this,"set",(recoilState,newValueOrUpdater)=>{this.checkRefCount_INTERNAL();const store=this.getStore_INTERNAL();// This batchUpdates ensures this `set` is applied immediately and you can
// read the written value after calling `set`. I would like to remove this
// behavior and only batch in `Snapshot.map`, but this would be a breaking
// change potentially.
this._batch(()=>{updateRetainCount$1(store,recoilState.key,1);setRecoilValue$1(this.getStore_INTERNAL(),recoilState,newValueOrUpdater);});});_defineProperty(this,"reset",recoilState=>{this.checkRefCount_INTERNAL();const store=this.getStore_INTERNAL();// See note at `set` about batched updates.
this._batch(()=>{updateRetainCount$1(store,recoilState.key,1);setRecoilValue$1(this.getStore_INTERNAL(),recoilState,DEFAULT_VALUE$1);});});_defineProperty(this,"setUnvalidatedAtomValues_DEPRECATED",values=>{this.checkRefCount_INTERNAL();const store=this.getStore_INTERNAL();// See note at `set` about batched updates.
batchUpdates$1(()=>{for(const[k,v]of values.entries()){updateRetainCount$1(store,k,1);setUnvalidatedRecoilValue$1(store,new AbstractRecoilValue$2(k),v);}});});this._batch=batch;}}var Recoil_Snapshot={Snapshot,MutableSnapshot,freshSnapshot,cloneSnapshot};var Recoil_Snapshot_1=Recoil_Snapshot.Snapshot;var Recoil_Snapshot_2=Recoil_Snapshot.MutableSnapshot;var Recoil_Snapshot_3=Recoil_Snapshot.freshSnapshot;var Recoil_Snapshot_4=Recoil_Snapshot.cloneSnapshot;var Recoil_Snapshot$1=/*#__PURE__*/Object.freeze({__proto__:null,Snapshot:Recoil_Snapshot_1,MutableSnapshot:Recoil_Snapshot_2,freshSnapshot:Recoil_Snapshot_3,cloneSnapshot:Recoil_Snapshot_4});/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function unionSets(...sets){const result=new Set();for(const set of sets){for(const value of set){result.add(value);}}return result;}var Recoil_unionSets=unionSets;const{useRef}=React;/**
 * The same as `useRef()` except that if a function is specified then it will
 * call that function to get the value to initialize the reference with.
 * This is similar to how `useState()` behaves when given a function.  It allows
 * the user to avoid generating the initial value for subsequent renders.
 * The tradeoff is that to set the reference to a function itself you need to
 * nest it: useRefInitOnce(() => () => {...});
 */function useRefInitOnce(initialValue){// $FlowExpectedError[incompatible-call]
const ref=useRef(initialValue);if(ref.current===initialValue&&typeof initialValue==='function'){// $FlowExpectedError[incompatible-use]
ref.current=initialValue();}return ref;}var Recoil_useRefInitOnce=useRefInitOnce;// @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');
const{getNextTreeStateVersion:getNextTreeStateVersion$3,makeEmptyStoreState:makeEmptyStoreState$2}=Recoil_State;const{cleanUpNode:cleanUpNode$2,getDownstreamNodes:getDownstreamNodes$2,initializeNode:initializeNode$2,setNodeValue:setNodeValue$2,setUnvalidatedAtomValue_DEPRECATED:setUnvalidatedAtomValue_DEPRECATED$1}=Recoil_FunctionalCore;const{graph:graph$2}=Recoil_Graph;const{cloneGraph:cloneGraph$1}=Recoil_Graph;const{getNextStoreID:getNextStoreID$2}=Recoil_Keys;const{createMutableSource:createMutableSource$1,reactMode:reactMode$2}=Recoil_ReactMode;const{applyAtomValueWrites:applyAtomValueWrites$1}=Recoil_RecoilValueInterface;const{releaseScheduledRetainablesNow:releaseScheduledRetainablesNow$1}=Recoil_Retention;const{freshSnapshot:freshSnapshot$1}=Recoil_Snapshot$1;const{useCallback,useContext,useEffect,useMemo,useRef:useRef$1,useState}=React;function notInAContext(){throw Recoil_err('This component must be used inside a <RecoilRoot> component.');}const defaultStore=Object.freeze({storeID:getNextStoreID$2(),getState:notInAContext,replaceState:notInAContext,getGraph:notInAContext,subscribeToTransactions:notInAContext,addTransactionMetadata:notInAContext});let stateReplacerIsBeingExecuted=false;function startNextTreeIfNeeded(store){if(stateReplacerIsBeingExecuted){throw Recoil_err('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');}const storeState=store.getState();if(storeState.nextTree===null){if(Recoil_gkx('recoil_memory_managament_2020')&&Recoil_gkx('recoil_release_on_cascading_update_killswitch_2021')){// If this is a cascading update (that is, rendering due to one state change
// invokes a second state change), we won't have cleaned up retainables yet
// because this normally happens after notifying components. Do it before
// proceeding with the cascading update so that it remains predictable:
if(storeState.commitDepth>0){releaseScheduledRetainablesNow$1(store);}}const version=storeState.currentTree.version;const nextVersion=getNextTreeStateVersion$3();storeState.nextTree={...storeState.currentTree,version:nextVersion,stateID:nextVersion,dirtyAtoms:new Set(),transactionMetadata:{}};storeState.graphsByVersion.set(nextVersion,cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));}}const AppContext=/*#__PURE__*/React.createContext({current:defaultStore});const useStoreRef=()=>useContext(AppContext);// $FlowExpectedError[incompatible-call]
const MutableSourceContext=/*#__PURE__*/React.createContext(null);function useRecoilMutableSource(){const mutableSource=useContext(MutableSourceContext);return mutableSource;}function notifyComponents(store,storeState,treeState){const dependentNodes=getDownstreamNodes$2(store,treeState,treeState.dirtyAtoms);for(const key of dependentNodes){const comps=storeState.nodeToComponentSubscriptions.get(key);if(comps){for(const[_subID,[_debugName,callback]]of comps){callback(treeState);}}}}function sendEndOfBatchNotifications(store){const storeState=store.getState();const treeState=storeState.currentTree;// Inform transaction subscribers of the transaction:
const dirtyAtoms=treeState.dirtyAtoms;if(dirtyAtoms.size){// Execute Node-specific subscribers before global subscribers
for(const[key,subscriptions]of storeState.nodeTransactionSubscriptions){if(dirtyAtoms.has(key)){for(const[_,subscription]of subscriptions){subscription(store);}}}for(const[_,subscription]of storeState.transactionSubscriptions){subscription(store);}if(!reactMode$2().early||storeState.suspendedComponentResolvers.size>0){// Notifying components is needed to wake from suspense, even when using
// early rendering.
notifyComponents(store,storeState,treeState);// Wake all suspended components so the right one(s) can try to re-render.
// We need to wake up components not just when some asynchronous selector
// resolved, but also when changing synchronous values because this may cause
// a selector to change from asynchronous to synchronous, in which case there
// would be no follow-up asynchronous resolution to wake us up.
// TODO OPTIMIZATION Only wake up related downstream components
storeState.suspendedComponentResolvers.forEach(cb=>cb());storeState.suspendedComponentResolvers.clear();}}// Special behavior ONLY invoked by useInterface.
// FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
storeState.queuedComponentCallbacks_DEPRECATED.forEach(cb=>cb(treeState));storeState.queuedComponentCallbacks_DEPRECATED.splice(0,storeState.queuedComponentCallbacks_DEPRECATED.length);}function endBatch(store){const storeState=store.getState();storeState.commitDepth++;try{const{nextTree}=storeState;// Ignore commits that are not because of Recoil transactions -- namely,
// because something above RecoilRoot re-rendered:
if(nextTree==null){return;}// nextTree is now committed -- note that copying and reset occurs when
// a transaction begins, in startNextTreeIfNeeded:
storeState.previousTree=storeState.currentTree;storeState.currentTree=nextTree;storeState.nextTree=null;sendEndOfBatchNotifications(store);if(storeState.previousTree!=null){storeState.graphsByVersion.delete(storeState.previousTree.version);}else {Recoil_recoverableViolation('Ended batch with no previous state, which is unexpected','recoil');}storeState.previousTree=null;if(Recoil_gkx('recoil_memory_managament_2020')){// Only release retainables if there were no writes during the end of the
// batch.  This avoids releasing something we might be about to use.
if(nextTree==null){releaseScheduledRetainablesNow$1(store);}}}finally{storeState.commitDepth--;}}/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */function Batcher({setNotifyBatcherOfChange}){const storeRef=useStoreRef();const[,setState]=useState([]);// $FlowFixMe[incompatible-call]
setNotifyBatcherOfChange(()=>setState({}));useEffect(()=>{// $FlowFixMe[incompatible-call]
setNotifyBatcherOfChange(()=>setState({}));// If an asynchronous selector resolves after the Batcher is unmounted,
// notifyBatcherOfChange will still be called. An error gets thrown whenever
// setState is called after a component is already unmounted, so this sets
// notifyBatcherOfChange to be a no-op.
return ()=>{setNotifyBatcherOfChange(()=>{});};},[setNotifyBatcherOfChange]);useEffect(()=>{// enqueueExecution runs this function immediately; it is only used to
// manipulate the order of useEffects during tests, since React seems to
// call useEffect in an unpredictable order sometimes.
Recoil_Queue.enqueueExecution('Batcher',()=>{endBatch(storeRef.current);});});return null;}// which will no longer be needed.
function initialStoreState_DEPRECATED(store,initializeState){const initial=makeEmptyStoreState$2();initializeState({set:(atom,value)=>{const state=initial.currentTree;const writes=setNodeValue$2(store,state,atom.key,value);const writtenNodes=new Set(writes.keys());const nonvalidatedAtoms=state.nonvalidatedAtoms.clone();for(const n of writtenNodes){nonvalidatedAtoms.delete(n);}initial.currentTree={...state,dirtyAtoms:Recoil_unionSets(state.dirtyAtoms,writtenNodes),atomValues:applyAtomValueWrites$1(state.atomValues,writes),// NB: PLEASE un-export applyAtomValueWrites when deleting this code
nonvalidatedAtoms};},setUnvalidatedAtomValues:atomValues=>{// FIXME replace this with a mutative loop
atomValues.forEach((v,k)=>{initial.currentTree=setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree,k,v);});}});return initial;}// Initialize state snapshot for <RecoilRoot> for the initializeState prop.
// Atom effect initialization takes precedence over this prop.
// Any atom effects will be run before initialization, but then cleaned up,
// they are then re-run when used as part of rendering.  These semantics are
// compatible with React StrictMode where effects may be re-run multiple times
// but state initialization only happens once the first time.
function initialStoreState(initializeState){// Initialize a snapshot and get its store
const snapshot=freshSnapshot$1(initializeState);const storeState=snapshot.getStore_INTERNAL().getState();// Counteract the snapshot auto-release
snapshot.retain();// Cleanup any effects run during initialization and clear the handlers so
// they will re-initialize if used during rendering.  This allows atom effect
// initialization to take precedence over initializeState and be compatible
// with StrictMode semantics.
storeState.nodeCleanupFunctions.forEach(cleanup=>cleanup());storeState.nodeCleanupFunctions.clear();return storeState;}let nextID=0;function RecoilRoot_INTERNAL({initializeState_DEPRECATED,initializeState,store_INTERNAL:storeProp,// For use with React "context bridging"
children}){// prettier-ignore
// @fb-only: useEffect(() => {
// @fb-only: if (gkx('recoil_usage_logging')) {
// @fb-only: try {
// @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
// @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
// @fb-only: path: URI.getRequestURI().getPath(),
// @fb-only: }));
// @fb-only: } catch {
// @fb-only: recoverableViolation(
// @fb-only: 'Error when logging Recoil Usage event',
// @fb-only: 'recoil',
// @fb-only: );
// @fb-only: }
// @fb-only: }
// @fb-only: }, []);
let storeStateRef;// eslint-disable-line prefer-const
const getGraph=version=>{const graphs=storeStateRef.current.graphsByVersion;if(graphs.has(version)){return Recoil_nullthrows(graphs.get(version));}const newGraph=graph$2();graphs.set(version,newGraph);return newGraph;};const subscribeToTransactions=(callback,key)=>{if(key==null){// Global transaction subscriptions
const{transactionSubscriptions}=storeRef.current.getState();const id=nextID++;transactionSubscriptions.set(id,callback);return {release:()=>{transactionSubscriptions.delete(id);}};}else {// Node-specific transaction subscriptions:
const{nodeTransactionSubscriptions}=storeRef.current.getState();if(!nodeTransactionSubscriptions.has(key)){nodeTransactionSubscriptions.set(key,new Map());}const id=nextID++;Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id,callback);return {release:()=>{const subs=nodeTransactionSubscriptions.get(key);if(subs){subs.delete(id);if(subs.size===0){nodeTransactionSubscriptions.delete(key);}}}};}};const addTransactionMetadata=metadata=>{startNextTreeIfNeeded(storeRef.current);for(const k of Object.keys(metadata)){Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k]=metadata[k];}};const replaceState=replacer=>{startNextTreeIfNeeded(storeRef.current);// Use replacer to get the next state:
const nextTree=Recoil_nullthrows(storeStateRef.current.nextTree);let replaced;try{stateReplacerIsBeingExecuted=true;replaced=replacer(nextTree);}finally{stateReplacerIsBeingExecuted=false;}if(replaced===nextTree){return;}storeStateRef.current.nextTree=replaced;if(reactMode$2().early){notifyComponents(storeRef.current,storeStateRef.current,replaced);}Recoil_nullthrows(notifyBatcherOfChange.current)();};const notifyBatcherOfChange=useRef$1(null);const setNotifyBatcherOfChange=useCallback(x=>{notifyBatcherOfChange.current=x;},[notifyBatcherOfChange]);const storeRef=Recoil_useRefInitOnce(()=>storeProp!==null&&storeProp!==void 0?storeProp:{storeID:getNextStoreID$2(),getState:()=>storeStateRef.current,replaceState,getGraph,subscribeToTransactions,addTransactionMetadata});if(storeProp!=null){storeRef.current=storeProp;}storeStateRef=Recoil_useRefInitOnce(()=>initializeState_DEPRECATED!=null?initialStoreState_DEPRECATED(storeRef.current,initializeState_DEPRECATED):initializeState!=null?initialStoreState(initializeState):makeEmptyStoreState$2());const mutableSource=useMemo(()=>createMutableSource$1===null||createMutableSource$1===void 0?void 0:createMutableSource$1(storeStateRef,()=>storeStateRef.current.currentTree.version),[storeStateRef]);// Cleanup when the <RecoilRoot> is unmounted
useEffect(()=>{// React is free to call effect cleanup handlers and effects at will, the
// deps array is only an optimization.  For example, React strict mode
// will execute each effect twice for testing.  Therefore, we need symmetry
// to re-initialize all known atoms after they were cleaned up.
const store=storeRef.current;for(const atomKey of new Set(store.getState().knownAtoms)){initializeNode$2(store,atomKey,'get');}return ()=>{for(const atomKey of store.getState().knownAtoms){cleanUpNode$2(store,atomKey);}};},[storeRef]);return/*#__PURE__*/React.createElement(AppContext.Provider,{value:storeRef},/*#__PURE__*/React.createElement(MutableSourceContext.Provider,{value:mutableSource},/*#__PURE__*/React.createElement(Batcher,{setNotifyBatcherOfChange:setNotifyBatcherOfChange}),children));}function RecoilRoot(props){const{override,...propsExceptOverride}=props;const ancestorStoreRef=useStoreRef();if(override===false&&ancestorStoreRef.current!==defaultStore){// If ancestorStoreRef.current !== defaultStore, it means that this
// RecoilRoot is not nested within another.
return props.children;}return/*#__PURE__*/React.createElement(RecoilRoot_INTERNAL,propsExceptOverride);}function useRecoilStoreID(){return useStoreRef().current.storeID;}var Recoil_RecoilRoot={RecoilRoot,useStoreRef,useRecoilMutableSource,useRecoilStoreID,notifyComponents_FOR_TESTING:notifyComponents,sendEndOfBatchNotifications_FOR_TESTING:sendEndOfBatchNotifications};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function shallowArrayEqual(a,b){if(a===b){return true;}if(a.length!==b.length){return false;}for(let i=0,l=a.length;i<l;i++){if(a[i]!==b[i]){return false;}}return true;}var Recoil_shallowArrayEqual=shallowArrayEqual;const{useEffect:useEffect$1,useRef:useRef$2}=React;function usePrevious(value){const ref=useRef$2();useEffect$1(()=>{// $FlowFixMe[incompatible-type]
ref.current=value;});return ref.current;}var Recoil_usePrevious=usePrevious;const{useStoreRef:useStoreRef$1}=Recoil_RecoilRoot;const{SUSPENSE_TIMEOUT_MS:SUSPENSE_TIMEOUT_MS$1}=Recoil_Retention;const{updateRetainCount:updateRetainCount$2}=Recoil_Retention;const{RetentionZone:RetentionZone$3}=Recoil_RetentionZone;const{useEffect:useEffect$2,useRef:useRef$3}=React;const{isSSR:isSSR$2}=Recoil_Environment;// I don't see a way to avoid the any type here because we want to accept readable
// and writable values with any type parameter, but normally with writable ones
// RecoilState<SomeT> is not a subtype of RecoilState<mixed>.
// flowlint-line unclear-type:off
function useRetain(toRetain){if(!Recoil_gkx('recoil_memory_managament_2020')){return;}// eslint-disable-next-line fb-www/react-hooks
return useRetain_ACTUAL(toRetain);}function useRetain_ACTUAL(toRetain){const array=Array.isArray(toRetain)?toRetain:[toRetain];const retainables=array.map(a=>a instanceof RetentionZone$3?a:a.key);const storeRef=useStoreRef$1();useEffect$2(()=>{if(!Recoil_gkx('recoil_memory_managament_2020')){return;}const store=storeRef.current;if(timeoutID.current&&!isSSR$2){// Already performed a temporary retain on render, simply cancel the release
// of that temporary retain.
window.clearTimeout(timeoutID.current);timeoutID.current=null;}else {for(const r of retainables){updateRetainCount$2(store,r,1);}}return ()=>{for(const r of retainables){updateRetainCount$2(store,r,-1);}};// eslint-disable-next-line fb-www/react-hooks-deps
},[storeRef,...retainables]);// We want to retain if the component suspends. This is terrible but the Suspense
// API affords us no better option. If we suspend and never commit after some
// seconds, then release. The 'actual' retain/release in the effect above
// cancels this.
const timeoutID=useRef$3();const previousRetainables=Recoil_usePrevious(retainables);if(!isSSR$2&&(previousRetainables===undefined||!Recoil_shallowArrayEqual(previousRetainables,retainables))){const store=storeRef.current;for(const r of retainables){updateRetainCount$2(store,r,1);}if(previousRetainables){for(const r of previousRetainables){updateRetainCount$2(store,r,-1);}}if(timeoutID.current){window.clearTimeout(timeoutID.current);}timeoutID.current=window.setTimeout(()=>{timeoutID.current=null;for(const r of retainables){updateRetainCount$2(store,r,-1);}},SUSPENSE_TIMEOUT_MS$1);}}var Recoil_useRetain=useRetain;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * THIS CODE HAS BEEN COMMENTED OUT INTENTIONALLY
 *
 * This technique of getting the component name is imperfect, since it both only
 * works in a non-minified code base, and more importantly introduces performance
 * problems since it relies in throwing errors which is an expensive operation.
 *
 * At some point we may want to reevaluate this technique hence why we have commented
 * this code out, rather than delete it all together.
 */ // const {useRef} = require('react');
// const gkx = require('recoil-shared/util/Recoil_gkx');
// const stackTraceParser = require('recoil-shared/util/Recoil_stackTraceParser');
function useComponentName(){// const nameRef = useRef();
// if (__DEV__) {
//   if (gkx('recoil_infer_component_names')) {
//     if (nameRef.current === undefined) {
//       // There is no blessed way to determine the calling React component from
//       // within a hook. This hack uses the fact that hooks must start with 'use'
//       // and that hooks are either called by React Components or other hooks. It
//       // follows therefore, that to find the calling component, you simply need
//       // to look down the stack and find the first function which doesn't start
//       // with 'use'. We are only enabling this in dev for now, since once the
//       // codebase is minified, the naming assumptions no longer hold true.
//       // eslint-disable-next-line fb-www/no-new-error
//       const frames = stackTraceParser(new Error().stack);
//       for (const {methodName} of frames) {
//         // I observed cases where the frame was of the form 'Object.useXXX'
//         // hence why I'm searching for hooks following a word boundary
//         if (!methodName.match(/\buse[^\b]+$/)) {
//           return (nameRef.current = methodName);
//         }
//       }
//       nameRef.current = null;
//     }
//     return nameRef.current ?? '<unable to determine component name>';
//   }
// }
// @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";
return '<component name not available>';// @oss-only
}var Recoil_useComponentName=useComponentName;const{batchUpdates:batchUpdates$2}=Recoil_Batching;const{DEFAULT_VALUE:DEFAULT_VALUE$2}=Recoil_Node;const{currentRendererSupportsUseSyncExternalStore:currentRendererSupportsUseSyncExternalStore$1,reactMode:reactMode$3,useMutableSource:useMutableSource$1,useSyncExternalStore:useSyncExternalStore$1}=Recoil_ReactMode;const{useRecoilMutableSource:useRecoilMutableSource$1,useStoreRef:useStoreRef$2}=Recoil_RecoilRoot;const{AbstractRecoilValue:AbstractRecoilValue$3,getRecoilValueAsLoadable:getRecoilValueAsLoadable$2,setRecoilValue:setRecoilValue$2,setUnvalidatedRecoilValue:setUnvalidatedRecoilValue$2,subscribeToRecoilValue:subscribeToRecoilValue$1}=Recoil_RecoilValueInterface;const{useCallback:useCallback$1,useEffect:useEffect$3,useMemo:useMemo$1,useRef:useRef$4,useState:useState$1}=React;const{setByAddingToSet:setByAddingToSet$2}=Recoil_CopyOnWrite;const{isSSR:isSSR$3}=Recoil_Environment;function handleLoadable(loadable,recoilValue,storeRef){// We can't just throw the promise we are waiting on to Suspense.  If the
// upstream dependencies change it may produce a state in which the component
// can render, but it would still be suspended on a Promise that may never resolve.
if(loadable.state==='hasValue'){return loadable.contents;}else if(loadable.state==='loading'){const promise=new Promise(resolve=>{const suspendedComponentResolvers=storeRef.current.getState().suspendedComponentResolvers;suspendedComponentResolvers.add(resolve);// SSR should clear out the wake-up resolver if the Promise is resolved
// to avoid infinite loops.  (See https://github.com/facebookexperimental/Recoil/pull/2073)
if(isSSR$3&&Recoil_isPromise(loadable.contents)){loadable.contents.finally(()=>{suspendedComponentResolvers.delete(resolve);});}});// $FlowExpectedError Flow(prop-missing) for integrating with tools that inspect thrown promises @fb-only
// @fb-only: promise.displayName = `Recoil State: ${recoilValue.key}`;
throw promise;}else if(loadable.state==='hasError'){throw loadable.contents;}else {throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);}}/**
 * Various things are broken with useRecoilInterface, particularly concurrent
 * mode, React strict mode, and memory management. They will not be fixed.
 * */function useRecoilInterface_DEPRECATED(){const componentName=Recoil_useComponentName();const storeRef=useStoreRef$2();// eslint-disable-next-line fb-www/react-no-unused-state-hook
const[,forceUpdate]=useState$1([]);const recoilValuesUsed=useRef$4(new Set());recoilValuesUsed.current=new Set();// Track the RecoilValues used just during this render
const previousSubscriptions=useRef$4(new Set());const subscriptions=useRef$4(new Map());const unsubscribeFrom=useCallback$1(key=>{const sub=subscriptions.current.get(key);if(sub){sub.release();subscriptions.current.delete(key);}},[subscriptions]);const updateState=useCallback$1((_state,key)=>{if(subscriptions.current.has(key)){forceUpdate([]);}},[]);// Effect to add/remove subscriptions as nodes are used
useEffect$3(()=>{const store=storeRef.current;Recoil_differenceSets(recoilValuesUsed.current,previousSubscriptions.current).forEach(key=>{if(subscriptions.current.has(key)){return;}const sub=subscribeToRecoilValue$1(store,new AbstractRecoilValue$3(key),state=>updateState(state,key),componentName);subscriptions.current.set(key,sub);/**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */ // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
const state=store.getState();if(state.nextTree){store.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{updateState(store.getState(),key);});}else {updateState(store.getState(),key);}});Recoil_differenceSets(previousSubscriptions.current,recoilValuesUsed.current).forEach(key=>{unsubscribeFrom(key);});previousSubscriptions.current=recoilValuesUsed.current;});// Effect to unsubscribe from all when unmounting
useEffect$3(()=>{const currentSubscriptions=subscriptions.current;// Restore subscriptions that were cleared due to StrictMode running this effect twice
Recoil_differenceSets(recoilValuesUsed.current,new Set(currentSubscriptions.keys())).forEach(key=>{const sub=subscribeToRecoilValue$1(storeRef.current,new AbstractRecoilValue$3(key),state=>updateState(state,key),componentName);currentSubscriptions.set(key,sub);});return ()=>currentSubscriptions.forEach((_,key)=>unsubscribeFrom(key));},[componentName,storeRef,unsubscribeFrom,updateState]);return useMemo$1(()=>{// eslint-disable-next-line no-shadow
function useSetRecoilState(recoilState){return newValueOrUpdater=>{setRecoilValue$2(storeRef.current,recoilState,newValueOrUpdater);};}// eslint-disable-next-line no-shadow
function useResetRecoilState(recoilState){return ()=>setRecoilValue$2(storeRef.current,recoilState,DEFAULT_VALUE$2);}// eslint-disable-next-line no-shadow
function useRecoilValueLoadable(recoilValue){var _storeState$nextTree;if(!recoilValuesUsed.current.has(recoilValue.key)){recoilValuesUsed.current=setByAddingToSet$2(recoilValuesUsed.current,recoilValue.key);}// TODO Restore optimization to memoize lookup
const storeState=storeRef.current.getState();return getRecoilValueAsLoadable$2(storeRef.current,recoilValue,reactMode$3().early?(_storeState$nextTree=storeState.nextTree)!==null&&_storeState$nextTree!==void 0?_storeState$nextTree:storeState.currentTree:storeState.currentTree);}// eslint-disable-next-line no-shadow
function useRecoilValue(recoilValue){const loadable=useRecoilValueLoadable(recoilValue);return handleLoadable(loadable,recoilValue,storeRef);}// eslint-disable-next-line no-shadow
function useRecoilState(recoilState){return [useRecoilValue(recoilState),useSetRecoilState(recoilState)];}// eslint-disable-next-line no-shadow
function useRecoilStateLoadable(recoilState){return [useRecoilValueLoadable(recoilState),useSetRecoilState(recoilState)];}return {getRecoilValue:useRecoilValue,getRecoilValueLoadable:useRecoilValueLoadable,getRecoilState:useRecoilState,getRecoilStateLoadable:useRecoilStateLoadable,getSetRecoilState:useSetRecoilState,getResetRecoilState:useResetRecoilState};},[recoilValuesUsed,storeRef]);}const recoilComponentGetRecoilValueCount_FOR_TESTING={current:0};function useRecoilValueLoadable_SYNC_EXTERNAL_STORE(recoilValue){const storeRef=useStoreRef$2();const componentName=Recoil_useComponentName();const getSnapshot=useCallback$1(()=>{var _storeState$nextTree2;const store=storeRef.current;const storeState=store.getState();const treeState=reactMode$3().early?(_storeState$nextTree2=storeState.nextTree)!==null&&_storeState$nextTree2!==void 0?_storeState$nextTree2:storeState.currentTree:storeState.currentTree;const loadable=getRecoilValueAsLoadable$2(store,recoilValue,treeState);return {loadable,key:recoilValue.key};},[storeRef,recoilValue]);// Memoize the state to avoid unnecessary rerenders
const memoizePreviousSnapshot=useCallback$1(getState=>{let prevState;return ()=>{var _prevState,_prevState2;const nextState=getState();if((_prevState=prevState)!==null&&_prevState!==void 0&&_prevState.loadable.is(nextState.loadable)&&((_prevState2=prevState)===null||_prevState2===void 0?void 0:_prevState2.key)===nextState.key){return prevState;}prevState=nextState;return nextState;};},[]);const getMemoizedSnapshot=useMemo$1(()=>memoizePreviousSnapshot(getSnapshot),[getSnapshot,memoizePreviousSnapshot]);const subscribe=useCallback$1(notify=>{const store=storeRef.current;const subscription=subscribeToRecoilValue$1(store,recoilValue,notify,componentName);return subscription.release;},[storeRef,recoilValue,componentName]);return useSyncExternalStore$1(subscribe,getMemoizedSnapshot,// getSnapshot()
getMemoizedSnapshot// getServerSnapshot() for SSR support
).loadable;}function useRecoilValueLoadable_MUTABLE_SOURCE(recoilValue){const storeRef=useStoreRef$2();const getLoadable=useCallback$1(()=>{var _storeState$nextTree3;const store=storeRef.current;const storeState=store.getState();const treeState=reactMode$3().early?(_storeState$nextTree3=storeState.nextTree)!==null&&_storeState$nextTree3!==void 0?_storeState$nextTree3:storeState.currentTree:storeState.currentTree;return getRecoilValueAsLoadable$2(store,recoilValue,treeState);},[storeRef,recoilValue]);const getLoadableWithTesting=useCallback$1(()=>{return getLoadable();},[getLoadable]);const componentName=Recoil_useComponentName();const subscribe=useCallback$1((_storeState,notify)=>{const store=storeRef.current;const subscription=subscribeToRecoilValue$1(store,recoilValue,()=>{if(!Recoil_gkx('recoil_suppress_rerender_in_callback')){return notify();}// Only re-render if the value has changed.
// This will evaluate the atom/selector now as well as when the
// component renders, but that may help with prefetching.
const newLoadable=getLoadable();if(!prevLoadableRef.current.is(newLoadable)){notify();}// If the component is suspended then the effect setting prevLoadableRef
// will not run.  So, set the previous value here when its subscription
// is fired to wake it up.  We can't just rely on this, though, because
// this only executes when an atom/selector is dirty and the atom/selector
// passed to the hook can dynamically change.
prevLoadableRef.current=newLoadable;},componentName);return subscription.release;},[storeRef,recoilValue,componentName,getLoadable]);const source=useRecoilMutableSource$1();if(source==null){throw Recoil_err('Recoil hooks must be used in components contained within a <RecoilRoot> component.');}const loadable=useMutableSource$1(source,getLoadableWithTesting,subscribe);const prevLoadableRef=useRef$4(loadable);useEffect$3(()=>{prevLoadableRef.current=loadable;});return loadable;}function useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue){const storeRef=useStoreRef$2();const componentName=Recoil_useComponentName();// Accessors to get the current state
const getLoadable=useCallback$1(()=>{var _storeState$nextTree4;const store=storeRef.current;const storeState=store.getState();const treeState=reactMode$3().early?(_storeState$nextTree4=storeState.nextTree)!==null&&_storeState$nextTree4!==void 0?_storeState$nextTree4:storeState.currentTree:storeState.currentTree;return getRecoilValueAsLoadable$2(store,recoilValue,treeState);},[storeRef,recoilValue]);const getState=useCallback$1(()=>({loadable:getLoadable(),key:recoilValue.key}),[getLoadable,recoilValue.key]);// Memoize state snapshots
const updateState=useCallback$1(prevState=>{const nextState=getState();return prevState.loadable.is(nextState.loadable)&&prevState.key===nextState.key?prevState:nextState;},[getState]);// Subscribe to Recoil state changes
useEffect$3(()=>{const subscription=subscribeToRecoilValue$1(storeRef.current,recoilValue,_state=>{setState(updateState);},componentName);// Update state in case we are using a different key
setState(updateState);return subscription.release;},[componentName,recoilValue,storeRef,updateState]);// Get the current state
const[state,setState]=useState$1(getState);// If we changed keys, then return the state for the new key.
// This is important in case the old key would cause the component to suspend.
// We don't have to set the new state here since the subscribing effect above
// will do that.
return state.key!==recoilValue.key?getState().loadable:state.loadable;}function useRecoilValueLoadable_LEGACY(recoilValue){const storeRef=useStoreRef$2();// eslint-disable-next-line fb-www/react-no-unused-state-hook
const[,forceUpdate]=useState$1([]);const componentName=Recoil_useComponentName();const getLoadable=useCallback$1(()=>{var _storeState$nextTree5;const store=storeRef.current;const storeState=store.getState();const treeState=reactMode$3().early?(_storeState$nextTree5=storeState.nextTree)!==null&&_storeState$nextTree5!==void 0?_storeState$nextTree5:storeState.currentTree:storeState.currentTree;return getRecoilValueAsLoadable$2(store,recoilValue,treeState);},[storeRef,recoilValue]);const loadable=getLoadable();const prevLoadableRef=useRef$4(loadable);useEffect$3(()=>{prevLoadableRef.current=loadable;});useEffect$3(()=>{const store=storeRef.current;const storeState=store.getState();const subscription=subscribeToRecoilValue$1(store,recoilValue,_state=>{var _prevLoadableRef$curr;if(!Recoil_gkx('recoil_suppress_rerender_in_callback')){return forceUpdate([]);}const newLoadable=getLoadable();if(!((_prevLoadableRef$curr=prevLoadableRef.current)!==null&&_prevLoadableRef$curr!==void 0&&_prevLoadableRef$curr.is(newLoadable))){// $FlowFixMe[incompatible-call]
forceUpdate(newLoadable);}prevLoadableRef.current=newLoadable;},componentName);/**
     * Since we're subscribing in an effect we need to update to the latest
     * value of the atom since it may have changed since we rendered. We can
     * go ahead and do that now, unless we're in the middle of a batch --
     * in which case we should do it at the end of the batch, due to the
     * following edge case: Suppose an atom is updated in another useEffect
     * of this same component. Then the following sequence of events occur:
     * 1. Atom is updated and subs fired (but we may not be subscribed
     *    yet depending on order of effects, so we miss this) Updated value
     *    is now in nextTree, but not currentTree.
     * 2. This effect happens. We subscribe and update.
     * 3. From the update we re-render and read currentTree, with old value.
     * 4. Batcher's effect sets currentTree to nextTree.
     * In this sequence we miss the update. To avoid that, add the update
     * to queuedComponentCallback if a batch is in progress.
     */if(storeState.nextTree){store.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{// $FlowFixMe[incompatible-type]
prevLoadableRef.current=null;forceUpdate([]);});}else {var _prevLoadableRef$curr2;if(!Recoil_gkx('recoil_suppress_rerender_in_callback')){return forceUpdate([]);}const newLoadable=getLoadable();if(!((_prevLoadableRef$curr2=prevLoadableRef.current)!==null&&_prevLoadableRef$curr2!==void 0&&_prevLoadableRef$curr2.is(newLoadable))){// $FlowFixMe[incompatible-call]
forceUpdate(newLoadable);}prevLoadableRef.current=newLoadable;}return subscription.release;},[componentName,getLoadable,recoilValue,storeRef]);return loadable;}/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/function useRecoilValueLoadable(recoilValue){if(Recoil_gkx('recoil_memory_managament_2020')){// eslint-disable-next-line fb-www/react-hooks
Recoil_useRetain(recoilValue);}return {TRANSITION_SUPPORT:useRecoilValueLoadable_TRANSITION_SUPPORT,// Recoil will attemp to detect if `useSyncExternalStore()` is supported with
// `reactMode()` before calling it.  However, sometimes the host React
// environment supports it but uses additional React renderers (such as with
// `react-three-fiber`) which do not.  While this is technically a user issue
// by using a renderer with React 18+ that doesn't fully support React 18 we
// don't want to break users if it can be avoided. As the current renderer can
// change at runtime, we need to dynamically check and fallback if necessary.
SYNC_EXTERNAL_STORE:currentRendererSupportsUseSyncExternalStore$1()?useRecoilValueLoadable_SYNC_EXTERNAL_STORE:useRecoilValueLoadable_TRANSITION_SUPPORT,MUTABLE_SOURCE:useRecoilValueLoadable_MUTABLE_SOURCE,LEGACY:useRecoilValueLoadable_LEGACY}[reactMode$3().mode](recoilValue);}/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */function useRecoilValue(recoilValue){const storeRef=useStoreRef$2();const loadable=useRecoilValueLoadable(recoilValue);return handleLoadable(loadable,recoilValue,storeRef);}/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/function useSetRecoilState(recoilState){const storeRef=useStoreRef$2();return useCallback$1(newValueOrUpdater=>{setRecoilValue$2(storeRef.current,recoilState,newValueOrUpdater);},[storeRef,recoilState]);}/**
  Returns a function that will reset the value of a RecoilState to its default
*/function useResetRecoilState(recoilState){const storeRef=useStoreRef$2();return useCallback$1(()=>{setRecoilValue$2(storeRef.current,recoilState,DEFAULT_VALUE$2);},[storeRef,recoilState]);}/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/function useRecoilState(recoilState){return [useRecoilValue(recoilState),useSetRecoilState(recoilState)];}/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/function useRecoilStateLoadable(recoilState){return [useRecoilValueLoadable(recoilState),useSetRecoilState(recoilState)];}function useSetUnvalidatedAtomValues(){const storeRef=useStoreRef$2();return (values,transactionMetadata={})=>{batchUpdates$2(()=>{storeRef.current.addTransactionMetadata(transactionMetadata);values.forEach((value,key)=>setUnvalidatedRecoilValue$2(storeRef.current,new AbstractRecoilValue$3(key),value));});};}/**
 * Experimental variants of hooks with support for useTransition()
 */function useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue){if(Recoil_gkx('recoil_memory_managament_2020')){// eslint-disable-next-line fb-www/react-hooks
Recoil_useRetain(recoilValue);}return useRecoilValueLoadable_TRANSITION_SUPPORT(recoilValue);}function useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilValue){const storeRef=useStoreRef$2();const loadable=useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE(recoilValue);return handleLoadable(loadable,recoilValue,storeRef);}function useRecoilState_TRANSITION_SUPPORT_UNSTABLE(recoilState){return [useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(recoilState),useSetRecoilState(recoilState)];}var Recoil_Hooks={recoilComponentGetRecoilValueCount_FOR_TESTING,useRecoilInterface:useRecoilInterface_DEPRECATED,useRecoilState,useRecoilStateLoadable,useRecoilValue,useRecoilValueLoadable,useResetRecoilState,useSetRecoilState,useSetUnvalidatedAtomValues,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,useRecoilState_TRANSITION_SUPPORT_UNSTABLE};/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */function filterMap(map,callback){const result=new Map();for(const[key,value]of map){if(callback(value,key)){result.set(key,value);}}return result;}var Recoil_filterMap=filterMap;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */ /**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */function filterSet(set,callback){const result=new Set();for(const value of set){if(callback(value)){result.add(value);}}return result;}var Recoil_filterSet=filterSet;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function mergeMaps(...maps){const result=new Map();for(let i=0;i<maps.length;i++){const iterator=maps[i].keys();let nextKey;while(!(nextKey=iterator.next()).done){// $FlowIssue[incompatible-call] - map/iterator knows nothing about flow types
result.set(nextKey.value,maps[i].get(nextKey.value));}}return result;}var Recoil_mergeMaps=mergeMaps;const{batchUpdates:batchUpdates$3}=Recoil_Batching;const{DEFAULT_VALUE:DEFAULT_VALUE$3,getNode:getNode$4,nodes:nodes$1}=Recoil_Node;const{useStoreRef:useStoreRef$3}=Recoil_RecoilRoot;const{AbstractRecoilValue:AbstractRecoilValue$4,setRecoilValueLoadable:setRecoilValueLoadable$1}=Recoil_RecoilValueInterface;const{SUSPENSE_TIMEOUT_MS:SUSPENSE_TIMEOUT_MS$2}=Recoil_Retention;const{cloneSnapshot:cloneSnapshot$1}=Recoil_Snapshot$1;const{useCallback:useCallback$2,useEffect:useEffect$4,useRef:useRef$5,useState:useState$2}=React;const{isSSR:isSSR$4}=Recoil_Environment;function useTransactionSubscription(callback){const storeRef=useStoreRef$3();useEffect$4(()=>{const sub=storeRef.current.subscribeToTransactions(callback);return sub.release;},[callback,storeRef]);}function externallyVisibleAtomValuesInState(state){const atomValues=state.atomValues.toMap();const persistedAtomContentsValues=Recoil_mapMap(Recoil_filterMap(atomValues,(v,k)=>{const node=getNode$4(k);const persistence=node.persistence_UNSTABLE;return persistence!=null&&persistence.type!=='none'&&v.state==='hasValue';}),v=>v.contents);// Merge in nonvalidated atoms; we may not have defs for them but they will
// all have persistence on or they wouldn't be there in the first place.
return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(),persistedAtomContentsValues);}/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/function useTransactionObservation_DEPRECATED(callback){useTransactionSubscription(useCallback$2(store=>{let previousTree=store.getState().previousTree;const currentTree=store.getState().currentTree;if(!previousTree){previousTree=store.getState().currentTree;// attempt to trundle on
}const atomValues=externallyVisibleAtomValuesInState(currentTree);const previousAtomValues=externallyVisibleAtomValuesInState(previousTree);const atomInfo=Recoil_mapMap(nodes$1,node=>{var _node$persistence_UNS,_node$persistence_UNS2,_node$persistence_UNS3,_node$persistence_UNS4;return {persistence_UNSTABLE:{type:(_node$persistence_UNS=(_node$persistence_UNS2=node.persistence_UNSTABLE)===null||_node$persistence_UNS2===void 0?void 0:_node$persistence_UNS2.type)!==null&&_node$persistence_UNS!==void 0?_node$persistence_UNS:'none',backButton:(_node$persistence_UNS3=(_node$persistence_UNS4=node.persistence_UNSTABLE)===null||_node$persistence_UNS4===void 0?void 0:_node$persistence_UNS4.backButton)!==null&&_node$persistence_UNS3!==void 0?_node$persistence_UNS3:false}};});// Filter on existance in atomValues so that externally-visible rules
// are also applied to modified atoms (specifically exclude selectors):
const modifiedAtoms=Recoil_filterSet(currentTree.dirtyAtoms,k=>atomValues.has(k)||previousAtomValues.has(k));callback({atomValues,previousAtomValues,atomInfo,modifiedAtoms,transactionMetadata:{...currentTree.transactionMetadata}});},[callback]));}function useRecoilTransactionObserver(callback){useTransactionSubscription(useCallback$2(store=>{const snapshot=cloneSnapshot$1(store,'latest');const previousSnapshot=cloneSnapshot$1(store,'previous');callback({snapshot,previousSnapshot});},[callback]));}// Return a snapshot of the current state and subscribe to all state changes
function useRecoilSnapshot(){const storeRef=useStoreRef$3();const[snapshot,setSnapshot]=useState$2(()=>cloneSnapshot$1(storeRef.current));const previousSnapshot=Recoil_usePrevious(snapshot);const timeoutID=useRef$5();const releaseRef=useRef$5();useTransactionSubscription(useCallback$2(store=>setSnapshot(cloneSnapshot$1(store)),[]));// Retain snapshot for duration component is mounted
useEffect$4(()=>{const release=snapshot.retain();// Release the retain from the rendering call
if(timeoutID.current&&!isSSR$4){var _releaseRef$current;window.clearTimeout(timeoutID.current);timeoutID.current=null;(_releaseRef$current=releaseRef.current)===null||_releaseRef$current===void 0?void 0:_releaseRef$current.call(releaseRef);releaseRef.current=null;}return ()=>{// Defer the release.  If "Fast Refresh"" is used then the component may
// re-render with the same state.  The previous cleanup will then run and
// then the new effect will run. We don't want the snapshot to be released
// by that cleanup before the new effect has a chance to retain it again.
// Use timeout of 10 to workaround Firefox issue: https://github.com/facebookexperimental/Recoil/issues/1936
window.setTimeout(release,10);};},[snapshot]);// Retain snapshot until above effect is run.
// Release after a threshold in case component is suspended.
if(previousSnapshot!==snapshot&&!isSSR$4){// Release the previous snapshot
if(timeoutID.current){var _releaseRef$current2;window.clearTimeout(timeoutID.current);timeoutID.current=null;(_releaseRef$current2=releaseRef.current)===null||_releaseRef$current2===void 0?void 0:_releaseRef$current2.call(releaseRef);releaseRef.current=null;}releaseRef.current=snapshot.retain();timeoutID.current=window.setTimeout(()=>{var _releaseRef$current3;timeoutID.current=null;(_releaseRef$current3=releaseRef.current)===null||_releaseRef$current3===void 0?void 0:_releaseRef$current3.call(releaseRef);releaseRef.current=null;},SUSPENSE_TIMEOUT_MS$2);}return snapshot;}function gotoSnapshot(store,snapshot){var _storeState$nextTree;const storeState=store.getState();const prev=(_storeState$nextTree=storeState.nextTree)!==null&&_storeState$nextTree!==void 0?_storeState$nextTree:storeState.currentTree;const next=snapshot.getStore_INTERNAL().getState().currentTree;batchUpdates$3(()=>{const keysToUpdate=new Set();for(const keys of [prev.atomValues.keys(),next.atomValues.keys()]){for(const key of keys){var _prev$atomValues$get,_next$atomValues$get;if(((_prev$atomValues$get=prev.atomValues.get(key))===null||_prev$atomValues$get===void 0?void 0:_prev$atomValues$get.contents)!==((_next$atomValues$get=next.atomValues.get(key))===null||_next$atomValues$get===void 0?void 0:_next$atomValues$get.contents)&&getNode$4(key).shouldRestoreFromSnapshots){keysToUpdate.add(key);}}}keysToUpdate.forEach(key=>{setRecoilValueLoadable$1(store,new AbstractRecoilValue$4(key),next.atomValues.has(key)?Recoil_nullthrows(next.atomValues.get(key)):DEFAULT_VALUE$3);});store.replaceState(state=>({...state,stateID:snapshot.getID()}));});}function useGotoRecoilSnapshot(){const storeRef=useStoreRef$3();return useCallback$2(snapshot=>gotoSnapshot(storeRef.current,snapshot),[storeRef]);}var Recoil_SnapshotHooks={useRecoilSnapshot,gotoSnapshot,useGotoRecoilSnapshot,useRecoilTransactionObserver,useTransactionObservation_DEPRECATED,useTransactionSubscription_DEPRECATED:useTransactionSubscription};const{peekNodeInfo:peekNodeInfo$2}=Recoil_FunctionalCore;const{useStoreRef:useStoreRef$4}=Recoil_RecoilRoot;function useGetRecoilValueInfo(){const storeRef=useStoreRef$4();// $FlowFixMe[incompatible-return]
return ({key})=>peekNodeInfo$2(storeRef.current,storeRef.current.getState().currentTree,key);}var Recoil_useGetRecoilValueInfo=useGetRecoilValueInfo;const{reactMode:reactMode$4}=Recoil_ReactMode;const{RecoilRoot:RecoilRoot$1,useStoreRef:useStoreRef$5}=Recoil_RecoilRoot;const{useMemo:useMemo$2}=React;function useRecoilBridgeAcrossReactRoots(){// The test fails when using useMutableSource(), but only if act() is used
// for the nested root.  So, this may only be a testing environment issue.
if(reactMode$4().mode==='MUTABLE_SOURCE'){// eslint-disable-next-line fb-www/no-console
console.warn('Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.');}const store=useStoreRef$5().current;return useMemo$2(()=>{// eslint-disable-next-line no-shadow
function RecoilBridge({children}){return/*#__PURE__*/React.createElement(RecoilRoot$1,{store_INTERNAL:store},children);}return RecoilBridge;},[store]);}var Recoil_useRecoilBridgeAcrossReactRoots=useRecoilBridgeAcrossReactRoots;const{loadableWithValue:loadableWithValue$1}=Recoil_Loadable$1;const{initializeNode:initializeNode$3}=Recoil_FunctionalCore;const{DEFAULT_VALUE:DEFAULT_VALUE$4,getNode:getNode$5}=Recoil_Node;const{copyTreeState:copyTreeState$1,getRecoilValueAsLoadable:getRecoilValueAsLoadable$3,invalidateDownstreams:invalidateDownstreams$1,writeLoadableToTreeState:writeLoadableToTreeState$1}=Recoil_RecoilValueInterface;function isAtom(recoilValue){return getNode$5(recoilValue.key).nodeType==='atom';}class TransactionInterfaceImpl{constructor(store,treeState){_defineProperty(this,"_store",void 0);_defineProperty(this,"_treeState",void 0);_defineProperty(this,"_changes",void 0);_defineProperty(this,"get",recoilValue=>{if(this._changes.has(recoilValue.key)){// $FlowIssue[incompatible-return]
return this._changes.get(recoilValue.key);}if(!isAtom(recoilValue)){throw Recoil_err('Reading selectors within atomicUpdate is not supported');}const loadable=getRecoilValueAsLoadable$3(this._store,recoilValue,this._treeState);if(loadable.state==='hasValue'){return loadable.contents;}else if(loadable.state==='hasError'){throw loadable.contents;}else {throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);}});_defineProperty(this,"set",(recoilState,valueOrUpdater)=>{if(!isAtom(recoilState)){throw Recoil_err('Setting selectors within atomicUpdate is not supported');}if(typeof valueOrUpdater==='function'){const current=this.get(recoilState);this._changes.set(recoilState.key,valueOrUpdater(current));// flowlint-line unclear-type:off
}else {// Initialize atom and run effects if not initialized yet
initializeNode$3(this._store,recoilState.key,'set');this._changes.set(recoilState.key,valueOrUpdater);}});_defineProperty(this,"reset",recoilState=>{this.set(recoilState,DEFAULT_VALUE$4);});this._store=store;this._treeState=treeState;this._changes=new Map();}// Allow destructing
// eslint-disable-next-line fb-www/extra-arrow-initializer
newTreeState_INTERNAL(){if(this._changes.size===0){return this._treeState;}const newState=copyTreeState$1(this._treeState);for(const[k,v]of this._changes){writeLoadableToTreeState$1(newState,k,loadableWithValue$1(v));}invalidateDownstreams$1(this._store,newState);return newState;}}function atomicUpdater(store){return fn=>{store.replaceState(treeState=>{const changeset=new TransactionInterfaceImpl(store,treeState);fn(changeset);return changeset.newTreeState_INTERNAL();});};}var Recoil_AtomicUpdates={atomicUpdater};var Recoil_AtomicUpdates_1=Recoil_AtomicUpdates.atomicUpdater;var Recoil_AtomicUpdates$1=/*#__PURE__*/Object.freeze({__proto__:null,atomicUpdater:Recoil_AtomicUpdates_1});/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */function invariant(condition,message){if(!condition){throw new Error(message);}}var invariant_1=invariant;// @oss-only
var Recoil_invariant=invariant_1;const{atomicUpdater:atomicUpdater$1}=Recoil_AtomicUpdates$1;const{batchUpdates:batchUpdates$4}=Recoil_Batching;const{DEFAULT_VALUE:DEFAULT_VALUE$5}=Recoil_Node;const{useStoreRef:useStoreRef$6}=Recoil_RecoilRoot;const{refreshRecoilValue:refreshRecoilValue$1,setRecoilValue:setRecoilValue$3}=Recoil_RecoilValueInterface;const{cloneSnapshot:cloneSnapshot$2}=Recoil_Snapshot$1;const{gotoSnapshot:gotoSnapshot$1}=Recoil_SnapshotHooks;const{useCallback:useCallback$3}=React;class Sentinel{}const SENTINEL=new Sentinel();function recoilCallback(store,fn,args,extraInterface){let ret=SENTINEL;let releaseSnapshot;batchUpdates$4(()=>{const errMsg='useRecoilCallback() expects a function that returns a function: '+'it accepts a function of the type (RecoilInterface) => (Args) => ReturnType '+'and returns a callback function (Args) => ReturnType, where RecoilInterface is '+'an object {snapshot, set, ...} and Args and ReturnType are the argument and return '+'types of the callback you want to create.  Please see the docs '+'at recoiljs.org for details.';if(typeof fn!=='function'){throw Recoil_err(errMsg);}// Clone the snapshot lazily to avoid overhead if the callback does not use it.
// Note that this means the snapshot may represent later state from when
// the callback was called if it first accesses the snapshot asynchronously.
const callbackInterface=Recoil_lazyProxy({...(extraInterface!==null&&extraInterface!==void 0?extraInterface:{}),// flowlint-line unclear-type:off
// $FlowFixMe[missing-local-annot]
set:(node,newValue)=>setRecoilValue$3(store,node,newValue),// $FlowFixMe[missing-local-annot]
reset:node=>setRecoilValue$3(store,node,DEFAULT_VALUE$5),// $FlowFixMe[missing-local-annot]
refresh:node=>refreshRecoilValue$1(store,node),gotoSnapshot:snapshot=>gotoSnapshot$1(store,snapshot),transact_UNSTABLE:transaction=>atomicUpdater$1(store)(transaction)},{snapshot:()=>{const snapshot=cloneSnapshot$2(store);releaseSnapshot=snapshot.retain();return snapshot;}});const callback=fn(callbackInterface);if(typeof callback!=='function'){throw Recoil_err(errMsg);}ret=callback(...args);});!!(ret instanceof Sentinel)?Recoil_invariant(false):void 0;if(Recoil_isPromise(ret)){ret=ret.finally(()=>{var _releaseSnapshot;(_releaseSnapshot=releaseSnapshot)===null||_releaseSnapshot===void 0?void 0:_releaseSnapshot();});}else {var _releaseSnapshot2;(_releaseSnapshot2=releaseSnapshot)===null||_releaseSnapshot2===void 0?void 0:_releaseSnapshot2();}return ret;}function useRecoilCallback(fn,deps){const storeRef=useStoreRef$6();return useCallback$3(// $FlowIssue[incompatible-call]
(...args)=>{return recoilCallback(storeRef.current,fn,args);},deps!=null?[...deps,storeRef]:undefined// eslint-disable-line fb-www/react-hooks-deps
);}var Recoil_useRecoilCallback={recoilCallback,useRecoilCallback};const{useStoreRef:useStoreRef$7}=Recoil_RecoilRoot;const{refreshRecoilValue:refreshRecoilValue$2}=Recoil_RecoilValueInterface;const{useCallback:useCallback$4}=React;function useRecoilRefresher(recoilValue){const storeRef=useStoreRef$7();return useCallback$4(()=>{const store=storeRef.current;refreshRecoilValue$2(store,recoilValue);},[recoilValue,storeRef]);}var Recoil_useRecoilRefresher=useRecoilRefresher;const{atomicUpdater:atomicUpdater$2}=Recoil_AtomicUpdates$1;const{useStoreRef:useStoreRef$8}=Recoil_RecoilRoot;const{useMemo:useMemo$3}=React;function useRecoilTransaction(fn,deps){const storeRef=useStoreRef$8();return useMemo$3(()=>(...args)=>{const atomicUpdate=atomicUpdater$2(storeRef.current);atomicUpdate(transactionInterface=>{fn(transactionInterface)(...args);});},deps!=null?[...deps,storeRef]:undefined// eslint-disable-line fb-www/react-hooks-deps
);}var Recoil_useRecoilTransaction=useRecoilTransaction;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */class WrappedValue{constructor(value){_defineProperty(this,"value",void 0);this.value=value;}}var Recoil_Wrapper={WrappedValue};var Recoil_Wrapper_1=Recoil_Wrapper.WrappedValue;var Recoil_Wrapper$1=/*#__PURE__*/Object.freeze({__proto__:null,WrappedValue:Recoil_Wrapper_1});const{isFastRefreshEnabled:isFastRefreshEnabled$2}=Recoil_ReactMode;class ChangedPathError extends Error{}class TreeCache{// $FlowIssue[unclear-type]
constructor(options){var _options$onHit,_options$onSet,_options$mapNodeValue;_defineProperty(this,"_name",void 0);_defineProperty(this,"_numLeafs",void 0);_defineProperty(this,"_root",void 0);_defineProperty(this,"_onHit",void 0);_defineProperty(this,"_onSet",void 0);_defineProperty(this,"_mapNodeValue",void 0);this._name=options===null||options===void 0?void 0:options.name;this._numLeafs=0;this._root=null;this._onHit=(_options$onHit=options===null||options===void 0?void 0:options.onHit)!==null&&_options$onHit!==void 0?_options$onHit:()=>{};this._onSet=(_options$onSet=options===null||options===void 0?void 0:options.onSet)!==null&&_options$onSet!==void 0?_options$onSet:()=>{};this._mapNodeValue=(_options$mapNodeValue=options===null||options===void 0?void 0:options.mapNodeValue)!==null&&_options$mapNodeValue!==void 0?_options$mapNodeValue:val=>val;}size(){return this._numLeafs;}// $FlowIssue[unclear-type]
root(){return this._root;}get(getNodeValue,handlers){var _this$getLeafNode;return (_this$getLeafNode=this.getLeafNode(getNodeValue,handlers))===null||_this$getLeafNode===void 0?void 0:_this$getLeafNode.value;}getLeafNode(getNodeValue,handlers){if(this._root==null){return undefined;}// Iterate down the tree based on the current node values until we hit a leaf
// $FlowIssue[unclear-type]
let node=this._root;while(node){handlers===null||handlers===void 0?void 0:handlers.onNodeVisit(node);if(node.type==='leaf'){this._onHit(node);return node;}const nodeValue=this._mapNodeValue(getNodeValue(node.nodeKey));node=node.branches.get(nodeValue);}return undefined;}set(route,value,handlers){const addLeaf=()=>{var _node2,_node3,_this$_root2,_handlers$onNodeVisit2;// First, setup the branch nodes for the route:
// Iterate down the tree to find or add branch nodes following the route
let node;let branchKey;for(const[nodeKey,nodeValue]of route){var _node,_handlers$onNodeVisit,_this$_root;// If the previous root was a leaf, while we not have a get(), it means
// the selector has inconsistent values or implementation changed.
const root=this._root;if((root===null||root===void 0?void 0:root.type)==='leaf'){throw this.invalidCacheError();}// node now refers to the next node down in the tree
const parent=node;// $FlowFixMe[prop-missing]
// $FlowFixMe[incompatible-type]
node=parent?parent.branches.get(branchKey):root;// $FlowFixMe[prop-missing]
// $FlowFixMe[incompatible-type]
node=(_node=node)!==null&&_node!==void 0?_node:{type:'branch',nodeKey,parent,branches:new Map(),branchKey};// If we found an existing node, confirm it has a consistent value
if(node.type!=='branch'||node.nodeKey!==nodeKey){throw this.invalidCacheError();}// Add the branch node to the tree
parent===null||parent===void 0?void 0:parent.branches.set(branchKey,node);handlers===null||handlers===void 0?void 0:(_handlers$onNodeVisit=handlers.onNodeVisit)===null||_handlers$onNodeVisit===void 0?void 0:_handlers$onNodeVisit.call(handlers,node);// Prepare for next iteration and install root if it is new.
branchKey=this._mapNodeValue(nodeValue);this._root=(_this$_root=this._root)!==null&&_this$_root!==void 0?_this$_root:node;}// Second, setup the leaf node:
// If there is an existing leaf for this route confirm it is consistent
const oldLeaf=node?(_node2=node)===null||_node2===void 0?void 0:_node2.branches.get(branchKey):this._root;if(oldLeaf!=null&&(oldLeaf.type!=='leaf'||oldLeaf.branchKey!==branchKey)){throw this.invalidCacheError();}// Create a new or replacement leaf.
const leafNode={type:'leaf',value,parent:node,branchKey};// Install the leaf and call handlers
(_node3=node)===null||_node3===void 0?void 0:_node3.branches.set(branchKey,leafNode);this._root=(_this$_root2=this._root)!==null&&_this$_root2!==void 0?_this$_root2:leafNode;this._numLeafs++;this._onSet(leafNode);handlers===null||handlers===void 0?void 0:(_handlers$onNodeVisit2=handlers.onNodeVisit)===null||_handlers$onNodeVisit2===void 0?void 0:_handlers$onNodeVisit2.call(handlers,leafNode);};try{addLeaf();}catch(error){// If the cache was stale or observed inconsistent values, such as with
// Fast Refresh, then clear it and rebuild with the new values.
if(error instanceof ChangedPathError){this.clear();addLeaf();}else {throw error;}}}// Returns true if leaf was actually deleted from the tree
delete(leaf){const root=this.root();if(!root){return false;}if(leaf===root){this._root=null;this._numLeafs=0;return true;}// Iterate up from the leaf deleteing it from it's parent's branches.
let node=leaf.parent;let branchKey=leaf.branchKey;while(node){var _node4;node.branches.delete(branchKey);// Stop iterating if we hit the root.
if(node===root){if(node.branches.size===0){this._root=null;this._numLeafs=0;}else {this._numLeafs--;}return true;}// Stop iterating if there are other branches since we don't need to
// remove any more nodes.
if(node.branches.size>0){break;}// Iterate up to our parent
branchKey=(_node4=node)===null||_node4===void 0?void 0:_node4.branchKey;node=node.parent;}// Confirm that the leaf we are deleting is actually attached to our tree
for(;node!==root;node=node.parent){if(node==null){return false;}}this._numLeafs--;return true;}clear(){this._numLeafs=0;this._root=null;}invalidCacheError(){const CHANGED_PATH_ERROR_MESSAGE=isFastRefreshEnabled$2()?'Possible Fast Refresh module reload detected.  '+'This may also be caused by an selector returning inconsistent values. '+'Resetting cache.':'Invalid cache values.  This happens when selectors do not return '+'consistent values for the same input dependency values.  That may also '+'be caused when using Fast Refresh to change a selector implementation.  '+'Resetting cache.';Recoil_recoverableViolation(CHANGED_PATH_ERROR_MESSAGE+(this._name!=null?` - ${this._name}`:''));throw new ChangedPathError();}}var Recoil_TreeCache={TreeCache};var Recoil_TreeCache_1=Recoil_TreeCache.TreeCache;var Recoil_TreeCache$1=/*#__PURE__*/Object.freeze({__proto__:null,TreeCache:Recoil_TreeCache_1});class LRUCache{constructor(options){var _options$mapKey;_defineProperty(this,"_maxSize",void 0);_defineProperty(this,"_size",void 0);_defineProperty(this,"_head",void 0);_defineProperty(this,"_tail",void 0);_defineProperty(this,"_map",void 0);_defineProperty(this,"_keyMapper",void 0);this._maxSize=options.maxSize;this._size=0;this._head=null;this._tail=null;this._map=new Map();this._keyMapper=(_options$mapKey=options.mapKey)!==null&&_options$mapKey!==void 0?_options$mapKey:v=>v;}head(){return this._head;}tail(){return this._tail;}size(){return this._size;}maxSize(){return this._maxSize;}has(key){return this._map.has(this._keyMapper(key));}get(key){const mappedKey=this._keyMapper(key);const node=this._map.get(mappedKey);if(!node){return undefined;}this.set(key,node.value);return node.value;}set(key,val){const mappedKey=this._keyMapper(key);const existingNode=this._map.get(mappedKey);if(existingNode){this.delete(key);}const head=this.head();const node={key,right:head,left:null,value:val};if(head){head.left=node;}else {this._tail=node;}this._map.set(mappedKey,node);this._head=node;this._size++;this._maybeDeleteLRU();}_maybeDeleteLRU(){if(this.size()>this.maxSize()){this.deleteLru();}}deleteLru(){const tail=this.tail();if(tail){this.delete(tail.key);}}delete(key){const mappedKey=this._keyMapper(key);if(!this._size||!this._map.has(mappedKey)){return;}const node=Recoil_nullthrows(this._map.get(mappedKey));const right=node.right;const left=node.left;if(right){right.left=node.left;}if(left){left.right=node.right;}if(node===this.head()){this._head=right;}if(node===this.tail()){this._tail=left;}this._map.delete(mappedKey);this._size--;}clear(){this._size=0;this._head=null;this._tail=null;this._map=new Map();}}var Recoil_LRUCache={LRUCache};var Recoil_LRUCache_1=Recoil_LRUCache.LRUCache;var Recoil_LRUCache$1=/*#__PURE__*/Object.freeze({__proto__:null,LRUCache:Recoil_LRUCache_1});const{LRUCache:LRUCache$1}=Recoil_LRUCache$1;const{TreeCache:TreeCache$1}=Recoil_TreeCache$1;function treeCacheLRU({name,maxSize,mapNodeValue=v=>v}){const lruCache=new LRUCache$1({maxSize});const cache=new TreeCache$1({name,mapNodeValue,onHit:node=>{lruCache.set(node,true);},onSet:node=>{const lruNode=lruCache.tail();lruCache.set(node,true);if(lruNode&&cache.size()>maxSize){// $FlowFixMe[incompatible-call]
cache.delete(lruNode.key);}}});return cache;}var Recoil_treeCacheLRU=treeCacheLRU;function stringify(x,opt,key){// A optimization to avoid the more expensive JSON.stringify() for simple strings
// This may lose protection for u2028 and u2029, though.
if(typeof x==='string'&&!x.includes('"')&&!x.includes('\\')){return `"${x}"`;}// Handle primitive types
switch(typeof x){case'undefined':return '';// JSON.stringify(undefined) returns undefined, but we always want to return a string
case'boolean':return x?'true':'false';case'number':case'symbol':// case 'bigint': // BigInt is not supported in www
return String(x);case'string':// Add surrounding quotes and escape internal quotes
return JSON.stringify(x);case'function':if((opt===null||opt===void 0?void 0:opt.allowFunctions)!==true){throw Recoil_err('Attempt to serialize function in a Recoil cache key');}return `__FUNCTION(${x.name})__`;}if(x===null){return 'null';}// Fallback case for unknown types
if(typeof x!=='object'){var _JSON$stringify;return (_JSON$stringify=JSON.stringify(x))!==null&&_JSON$stringify!==void 0?_JSON$stringify:'';}// Deal with all promises as equivalent for now.
if(Recoil_isPromise(x)){return '__PROMISE__';}// Arrays handle recursive stringification
if(Array.isArray(x)){// $FlowFixMe[missing-local-annot]
return `[${x.map((v,i)=>stringify(v,opt,i.toString()))}]`;}// If an object defines a toJSON() method, then use that to override the
// serialization.  This matches the behavior of JSON.stringify().
// Pass the key for compatibility.
// Immutable.js collections define this method to allow us to serialize them.
if(typeof x.toJSON==='function'){// flowlint-next-line unclear-type: off
return stringify(x.toJSON(key),opt,key);}// For built-in Maps, sort the keys in a stable order instead of the
// default insertion order.  Support non-string keys.
if(x instanceof Map){const obj={};for(const[k,v]of x){// Stringify will escape any nested quotes
obj[typeof k==='string'?k:stringify(k,opt)]=v;}return stringify(obj,opt,key);}// For built-in Sets, sort the keys in a stable order instead of the
// default insertion order.
if(x instanceof Set){return stringify(// $FlowFixMe[missing-local-annot]
Array.from(x).sort((a,b)=>stringify(a,opt).localeCompare(stringify(b,opt))),opt,key);}// Anything else that is iterable serialize as an Array.
if(Symbol!==undefined&&x[Symbol.iterator]!=null&&typeof x[Symbol.iterator]==='function'){// flowlint-next-line unclear-type: off
return stringify(Array.from(x),opt,key);}// For all other Objects, sort the keys in a stable order.
return `{${Object.keys(x).filter(k=>x[k]!==undefined).sort()// stringify the key to add quotes and escape any nested slashes or quotes.
.map(k=>`${stringify(k,opt)}:${stringify(x[k],opt,k)}`).join(',')}}`;}// Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples
function stableStringify(x,opt={allowFunctions:false}){return stringify(x,opt);}var Recoil_stableStringify=stableStringify;const{TreeCache:TreeCache$2}=Recoil_TreeCache$1;const defaultPolicy={equality:'reference',eviction:'keep-all',maxSize:Infinity};function treeCacheFromPolicy({equality=defaultPolicy.equality,eviction=defaultPolicy.eviction,maxSize=defaultPolicy.maxSize}=defaultPolicy,name){const valueMapper=getValueMapper(equality);return getTreeCache(eviction,maxSize,valueMapper,name);}function getValueMapper(equality){switch(equality){case'reference':return val=>val;case'value':return val=>Recoil_stableStringify(val);}throw Recoil_err(`Unrecognized equality policy ${equality}`);}function getTreeCache(eviction,maxSize,mapNodeValue,name){switch(eviction){case'keep-all':return new TreeCache$2({name,mapNodeValue});case'lru':return Recoil_treeCacheLRU({name,maxSize:Recoil_nullthrows(maxSize),mapNodeValue});case'most-recent':return Recoil_treeCacheLRU({name,maxSize:1,mapNodeValue});}throw Recoil_err(`Unrecognized eviction policy ${eviction}`);}var Recoil_treeCacheFromPolicy=treeCacheFromPolicy;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is a stub for some integration into FB internal stuff
 *
 * 
 * @format
 * @oncall recoil
 */function startPerfBlock(_id){return ()=>null;}var Recoil_PerformanceTimings={startPerfBlock};const{isLoadable:isLoadable$1,loadableWithError:loadableWithError$1,loadableWithPromise:loadableWithPromise$1,loadableWithValue:loadableWithValue$2}=Recoil_Loadable$1;const{WrappedValue:WrappedValue$1}=Recoil_Wrapper$1;const{getNodeLoadable:getNodeLoadable$2,peekNodeLoadable:peekNodeLoadable$1,setNodeValue:setNodeValue$3}=Recoil_FunctionalCore;const{saveDepsToStore:saveDepsToStore$1}=Recoil_Graph;const{DEFAULT_VALUE:DEFAULT_VALUE$6,getConfigDeletionHandler:getConfigDeletionHandler$1,getNode:getNode$6,registerNode:registerNode$1}=Recoil_Node;const{isRecoilValue:isRecoilValue$3}=Recoil_RecoilValue$1;const{markRecoilValueModified:markRecoilValueModified$1}=Recoil_RecoilValueInterface;const{retainedByOptionWithDefault:retainedByOptionWithDefault$1}=Recoil_Retention;const{recoilCallback:recoilCallback$1}=Recoil_useRecoilCallback;const{startPerfBlock:startPerfBlock$1}=Recoil_PerformanceTimings;class Canceled{}const CANCELED=new Canceled();/**
 * An ExecutionID is an arbitrary ID that lets us distinguish executions from
 * each other. This is necessary as we need a way of solving this problem:
 * "given 3 async executions, only update state for the 'latest' execution when
 * it finishes running regardless of when the other 2 finish". ExecutionIDs
 * provide a convenient way of identifying executions so that we can track and
 * manage them over time.
 */const dependencyStack=[];// for detecting circular dependencies.
const waitingStores=new Map();const getNewExecutionID=(()=>{let executionID=0;return ()=>executionID++;})();/* eslint-disable no-redeclare */function selector(options){let recoilValue=null;const{key,get,cachePolicy_UNSTABLE:cachePolicy}=options;const set=options.set!=null?options.set:undefined;// flow
const discoveredDependencyNodeKeys=new Set();const cache=Recoil_treeCacheFromPolicy(cachePolicy!==null&&cachePolicy!==void 0?cachePolicy:{equality:'reference',eviction:'keep-all'},key);const retainedBy=retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);const executionInfoMap=new Map();let liveStoresCount=0;function selectorIsLive(){return !Recoil_gkx('recoil_memory_managament_2020')||liveStoresCount>0;}function selectorInit(store){store.getState().knownSelectors.add(key);liveStoresCount++;return ()=>{liveStoresCount--;};}function selectorShouldDeleteConfigOnRelease(){return getConfigDeletionHandler$1(key)!==undefined&&!selectorIsLive();}function resolveAsync(store,state,executionID,loadable,depValues){setCache(state,loadable,depValues);notifyStoresOfResolvedAsync(store,executionID);}function notifyStoresOfResolvedAsync(store,executionID){if(isLatestExecution(store,executionID)){clearExecutionInfo(store);}notifyWaitingStores(executionID,true);}/**
   * Notify stores to pull the selector again if a new async dep was discovered.
   * 1) Async selector adds a new dep but doesn't resolve yet.
   *    Note that deps for an async selector are based on the state when the
   *    evaluation started, in order to provide a consistent picture of state.
   * 2) But, new value of dep based on the current state might cause the selector
   *    to resolve or resolve differently.
   * 3) Therefore, this notification will pull the selector based on the current
   *    state for the components
   */function notifyStoresOfNewAsyncDep(store,executionID){if(isLatestExecution(store,executionID)){const executionInfo=Recoil_nullthrows(getExecutionInfo(store));executionInfo.stateVersions.clear();notifyWaitingStores(executionID,false);}}function notifyWaitingStores(executionID,clearWaitlist){const stores=waitingStores.get(executionID);if(stores!=null){for(const waitingStore of stores){markRecoilValueModified$1(waitingStore,Recoil_nullthrows(recoilValue));}if(clearWaitlist){waitingStores.delete(executionID);}}}function markStoreWaitingForResolvedAsync(store,executionID){let stores=waitingStores.get(executionID);if(stores==null){waitingStores.set(executionID,stores=new Set());}stores.add(store);}/**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */function wrapResultPromise(store,promise,state,depValues,executionID,loadingDepsState){return promise.then(value=>{if(!selectorIsLive()){// The selector was released since the request began; ignore the response.
clearExecutionInfo(store);throw CANCELED;}const loadable=loadableWithValue$2(value);resolveAsync(store,state,executionID,loadable,depValues);return value;}).catch(errorOrPromise=>{if(!selectorIsLive()){// The selector was released since the request began; ignore the response.
clearExecutionInfo(store);throw CANCELED;}if(Recoil_isPromise(errorOrPromise)){return wrapPendingDependencyPromise(store,errorOrPromise,state,depValues,executionID,loadingDepsState);}const loadable=loadableWithError$1(errorOrPromise);resolveAsync(store,state,executionID,loadable,depValues);throw errorOrPromise;});}/**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapResultPromise() instead.
   */function wrapPendingDependencyPromise(store,promise,state,existingDeps,executionID,loadingDepsState){return promise.then(resolvedDep=>{if(!selectorIsLive()){// The selector was released since the request began; ignore the response.
clearExecutionInfo(store);throw CANCELED;}// Check if we are handling a pending Recoil dependency or if the user
// threw their own Promise to "suspend" a selector evaluation.  We need
// to check that the loadingDepPromise actually matches the promise that
// we caught in case the selector happened to catch the promise we threw
// for a pending Recoil dependency from `getRecoilValue()` and threw
// their own promise instead.
if(loadingDepsState.loadingDepKey!=null&&loadingDepsState.loadingDepPromise===promise){/**
         * Note for async atoms, this means we are changing the atom's value
         * in the store for the given version. This should be alright because
         * the version of state is now stale and a new version will have
         * already been triggered by the atom being resolved (see this logic
         * in Recoil_atom.js)
         */state.atomValues.set(loadingDepsState.loadingDepKey,loadableWithValue$2(resolvedDep));}else {/**
         * If resolvedDepKey is not defined, the promise was a user-thrown
         * promise. User-thrown promises are an advanced feature and they
         * should be avoided in almost all cases. Using `loadable.map()` inside
         * of selectors for loading loadables and then throwing that mapped
         * loadable's promise is an example of a user-thrown promise.
         *
         * When we hit a user-thrown promise, we have to bail out of an optimization
         * where we bypass calculating selector cache keys for selectors that
         * have been previously seen for a given state (these selectors are saved in
         * state.atomValues) to avoid stale state as we have no way of knowing
         * what state changes happened (if any) in result to the promise resolving.
         *
         * Ideally we would only bail out selectors that are in the chain of
         * dependencies for this selector, but there's currently no way to get
         * a full list of a selector's downstream nodes because the state that
         * is executing may be a discarded tree (so store.getGraph(state.version)
         * will be empty), and the full dep tree may not be in the selector
         * caches in the case where the selector's cache was cleared. To solve
         * for this we would have to keep track of all running selector
         * executions and their downstream deps. Because this only covers edge
         * cases, that complexity might not be justifyable.
         */store.getState().knownSelectors.forEach(nodeKey=>{state.atomValues.delete(nodeKey);});}/**
       * Optimization: Now that the dependency has resolved, let's try hitting
       * the cache in case the dep resolved to a value we have previously seen.
       *
       * TODO:
       * Note this optimization is not perfect because it only prevents re-executions
       * _after_ the point where an async dependency is found. Any code leading
       * up to the async dependency may have run unnecessarily. The ideal case
       * would be to wait for the async dependency to resolve first, check the
       * cache, and prevent _any_ execution of the selector if the resulting
       * value of the dependency leads to a path that is found in the cache.
       * The ideal case is more difficult to implement as it would require that
       * we capture and wait for the the async dependency right after checking
       * the cache. The current approach takes advantage of the fact that running
       * the selector already has a code path that lets us exit early when
       * an async dep resolves.
       */const cachedLoadable=getLoadableFromCacheAndUpdateDeps(store,state);if(cachedLoadable&&cachedLoadable.state!=='loading'){/**
         * This has to notify stores of a resolved async, even if there is no
         * current pending execution for the following case:
         * 1) A component renders with this pending loadable.
         * 2) The upstream dependency resolves.
         * 3) While processing some other selector it reads this one, such as
         *    while traversing its dependencies.  At this point it gets the
         *    new resolved value synchronously and clears the current
         *    execution ID.  The component wasn't getting the value itself,
         *    though, so it still has the pending loadable.
         * 4) When this code executes the current execution id was cleared
         *    and it wouldn't notify the component of the new value.
         *
         * I think this is only an issue with "early" rendering since the
         * components got their value using the in-progress execution.
         * We don't have a unit test for this case yet.  I'm not sure it is
         * necessary with recoil_transition_support mode.
         */if(isLatestExecution(store,executionID)||getExecutionInfo(store)==null){notifyStoresOfResolvedAsync(store,executionID);}if(cachedLoadable.state==='hasValue'){return cachedLoadable.contents;}else {throw cachedLoadable.contents;}}/**
       * If this execution is stale, let's check to see if there is some in
       * progress execution with a matching state. If we find a match, then
       * we can take the value from that in-progress execution. Note this may
       * sound like an edge case, but may be very common in cases where a
       * loading dependency resolves from loading to having a value (thus
       * possibly triggering a re-render), and React re-renders before the
       * chained .then() functions run, thus starting a new execution as the
       * dep has changed value. Without this check we will run the selector
       * twice (once in the new execution and once again in this .then(), so
       * this check is necessary to keep unnecessary re-executions to a
       * minimum).
       *
       * Also note this code does not check across all executions that may be
       * running. It only optimizes for the _latest_ execution per store as
       * we currently do not maintain a list of all currently running executions.
       * This means in some cases we may run selectors more than strictly
       * necessary when there are multiple executions running for the same
       * selector. This may be a valid tradeoff as checking for dep changes
       * across all in-progress executions may take longer than just
       * re-running the selector. This will be app-dependent, and maybe in the
       * future we can make the behavior configurable. An ideal fix may be
       * to extend the tree cache to support caching loading states.
       */if(!isLatestExecution(store,executionID)){const executionInfo=getInProgressExecutionInfo(store,state);if(executionInfo!=null){/**
           * Returning promise here without wrapping as the wrapper logic was
           * already done upstream when this promise was generated.
           */return executionInfo.loadingLoadable.contents;}}// Retry the selector evaluation now that the dependency has resolved
const[loadable,depValues]=evaluateSelectorGetter(store,state,executionID);if(loadable.state!=='loading'){resolveAsync(store,state,executionID,loadable,depValues);}if(loadable.state==='hasError'){throw loadable.contents;}return loadable.contents;}).catch(error=>{// The selector was released since the request began; ignore the response.
if(error instanceof Canceled){throw CANCELED;}if(!selectorIsLive()){clearExecutionInfo(store);throw CANCELED;}const loadable=loadableWithError$1(error);resolveAsync(store,state,executionID,loadable,existingDeps);throw error;});}function updateDeps(store,state,deps,executionID){var _store$getState,_store$getState$curre,_store$getState2,_store$getState2$next;if(isLatestExecution(store,executionID)||state.version===((_store$getState=store.getState())===null||_store$getState===void 0?void 0:(_store$getState$curre=_store$getState.currentTree)===null||_store$getState$curre===void 0?void 0:_store$getState$curre.version)||state.version===((_store$getState2=store.getState())===null||_store$getState2===void 0?void 0:(_store$getState2$next=_store$getState2.nextTree)===null||_store$getState2$next===void 0?void 0:_store$getState2$next.version)){var _store$getState$nextT,_store$getState3,_store$getState3$next;saveDepsToStore$1(key,deps,store,(_store$getState$nextT=(_store$getState3=store.getState())===null||_store$getState3===void 0?void 0:(_store$getState3$next=_store$getState3.nextTree)===null||_store$getState3$next===void 0?void 0:_store$getState3$next.version)!==null&&_store$getState$nextT!==void 0?_store$getState$nextT:store.getState().currentTree.version);}for(const nodeKey of deps){discoveredDependencyNodeKeys.add(nodeKey);}}function evaluateSelectorGetter(store,state,executionID){const endPerfBlock=startPerfBlock$1(key);// TODO T63965866: use execution ID here
let duringSynchronousExecution=true;let duringAsynchronousExecution=true;const finishEvaluation=()=>{endPerfBlock();duringAsynchronousExecution=false;};let result;let resultIsError=false;let loadable;const loadingDepsState={loadingDepKey:null,loadingDepPromise:null};/**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state
     * (This is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */const depValues=new Map();function getRecoilValue({key:depKey}){const depLoadable=getNodeLoadable$2(store,state,depKey);depValues.set(depKey,depLoadable);// We need to update asynchronous dependencies as we go so the selector
// knows if it has to restart evaluation if one of them is updated before
// the asynchronous selector completely resolves.
if(!duringSynchronousExecution){updateDeps(store,state,new Set(depValues.keys()),executionID);notifyStoresOfNewAsyncDep(store,executionID);}switch(depLoadable.state){case'hasValue':return depLoadable.contents;case'hasError':throw depLoadable.contents;case'loading':loadingDepsState.loadingDepKey=depKey;loadingDepsState.loadingDepPromise=depLoadable.contents;throw depLoadable.contents;}throw Recoil_err('Invalid Loadable state');}const getCallback=fn=>{return (...args)=>{if(duringAsynchronousExecution){throw Recoil_err('Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.');}!(recoilValue!=null)?Recoil_invariant(false):void 0;return recoilCallback$1(store,fn,args,{node:recoilValue}// flowlint-line unclear-type:off
);};};try{result=get({get:getRecoilValue,getCallback});result=isRecoilValue$3(result)?getRecoilValue(result):result;if(isLoadable$1(result)){if(result.state==='hasError'){resultIsError=true;}result=result.contents;}if(Recoil_isPromise(result)){result=wrapResultPromise(store,result,state,depValues,executionID,loadingDepsState).finally(finishEvaluation);}else {finishEvaluation();}result=result instanceof WrappedValue$1?result.value:result;}catch(errorOrDepPromise){result=errorOrDepPromise;if(Recoil_isPromise(result)){result=wrapPendingDependencyPromise(store,result,state,depValues,executionID,loadingDepsState).finally(finishEvaluation);}else {resultIsError=true;finishEvaluation();}}if(resultIsError){loadable=loadableWithError$1(result);}else if(Recoil_isPromise(result)){loadable=loadableWithPromise$1(result);}else {loadable=loadableWithValue$2(result);}duringSynchronousExecution=false;updateExecutionInfoDepValues(store,executionID,depValues);updateDeps(store,state,new Set(depValues.keys()),executionID);return [loadable,depValues];}function getLoadableFromCacheAndUpdateDeps(store,state){// First, look up in the state cache
// If it's here, then the deps in the store should already be valid.
let cachedLoadable=state.atomValues.get(key);if(cachedLoadable!=null){return cachedLoadable;}// Second, look up in the selector cache and update the deps in the store
const depsAfterCacheLookup=new Set();try{cachedLoadable=cache.get(nodeKey=>{!(typeof nodeKey==='string')?"production"!=="production"?Recoil_invariant(false,'Cache nodeKey is type string'):Recoil_invariant(false):void 0;return getNodeLoadable$2(store,state,nodeKey).contents;},{onNodeVisit:node=>{if(node.type==='branch'&&node.nodeKey!==key){depsAfterCacheLookup.add(node.nodeKey);}}});}catch(error){throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);}if(cachedLoadable){var _getExecutionInfo;// Cache the results in the state to allow for cheaper lookup than
// iterating the tree cache of dependencies.
state.atomValues.set(key,cachedLoadable);/**
       * Ensure store contains correct dependencies if we hit the cache so that
       * the store deps and cache are in sync for a given state. This is important
       * because store deps are normally updated when new executions are created,
       * but cache hits don't trigger new executions but they still _may_ signify
       * a change in deps in the store if the store deps for this state are empty
       * or stale.
       */updateDeps(store,state,depsAfterCacheLookup,(_getExecutionInfo=getExecutionInfo(store))===null||_getExecutionInfo===void 0?void 0:_getExecutionInfo.executionID);}return cachedLoadable;}/**
   * Given a tree state, this function returns a Loadable of the current state.
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */function getSelectorLoadableAndUpdateDeps(store,state){// First, see if our current state is cached
const cachedVal=getLoadableFromCacheAndUpdateDeps(store,state);if(cachedVal!=null){clearExecutionInfo(store);return cachedVal;}// Second, check if there is already an ongoing execution based on the current state
const inProgressExecutionInfo=getInProgressExecutionInfo(store,state);if(inProgressExecutionInfo!=null){var _inProgressExecutionI;if(((_inProgressExecutionI=inProgressExecutionInfo.loadingLoadable)===null||_inProgressExecutionI===void 0?void 0:_inProgressExecutionI.state)==='loading'){markStoreWaitingForResolvedAsync(store,inProgressExecutionInfo.executionID);}// FIXME: check after the fact to see if we made the right choice by waiting
return inProgressExecutionInfo.loadingLoadable;}// Third, start a new evaluation of the selector
const newExecutionID=getNewExecutionID();const[loadable,newDepValues]=evaluateSelectorGetter(store,state,newExecutionID);/**
     * Conditionally updates the cache with a given loadable.
     *
     * We only cache loadables that are not loading because our cache keys are
     * based on dep values, which are in an unfinished state for loadables that
     * have a 'loading' state (new deps may be discovered while the selector
     * runs its async code). We never want to cache partial dependencies b/c it
     * could lead to errors, such as prematurely returning the result based on a
     * partial list of deps-- we need the full list of deps to ensure that we
     * are returning the correct result from cache.
     */if(loadable.state==='loading'){setExecutionInfo(store,newExecutionID,loadable,newDepValues,state);markStoreWaitingForResolvedAsync(store,newExecutionID);}else {clearExecutionInfo(store);setCache(state,loadable,newDepValues);}return loadable;}/**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */function getInProgressExecutionInfo(store,state){// Sort the pending executions so that our current store is checked first.
const pendingExecutions=Recoil_concatIterables([executionInfoMap.has(store)?[Recoil_nullthrows(executionInfoMap.get(store))]:[],Recoil_mapIterable(Recoil_filterIterable(executionInfoMap,([s])=>s!==store),([,execInfo])=>execInfo)]);function anyDepChanged(execDepValues){for(const[depKey,execLoadable]of execDepValues){if(!getNodeLoadable$2(store,state,depKey).is(execLoadable)){return true;}}return false;}for(const execInfo of pendingExecutions){if(// If this execution was already checked to be valid with this version
// of state, then let's use it!
execInfo.stateVersions.get(state.version)||// If the deps for the execution match our current state, then it's valid
!anyDepChanged(execInfo.depValuesDiscoveredSoFarDuringAsyncWork)){execInfo.stateVersions.set(state.version,true);return execInfo;}else {execInfo.stateVersions.set(state.version,false);}}return undefined;}function getExecutionInfo(store){return executionInfoMap.get(store);}/**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */function setExecutionInfo(store,newExecutionID,loadable,depValues,state){executionInfoMap.set(store,{depValuesDiscoveredSoFarDuringAsyncWork:depValues,executionID:newExecutionID,loadingLoadable:loadable,stateVersions:new Map([[state.version,true]])});}function updateExecutionInfoDepValues(store,executionID,depValues){// We only need to bother updating the deps for the latest execution because
// that's all getInProgressExecutionInfo() will be looking for.
if(isLatestExecution(store,executionID)){const executionInfo=getExecutionInfo(store);if(executionInfo!=null){executionInfo.depValuesDiscoveredSoFarDuringAsyncWork=depValues;}}}function clearExecutionInfo(store){executionInfoMap.delete(store);}function isLatestExecution(store,executionID){var _getExecutionInfo2;return executionID===((_getExecutionInfo2=getExecutionInfo(store))===null||_getExecutionInfo2===void 0?void 0:_getExecutionInfo2.executionID);}/**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */function depValuesToDepRoute(depValues){return Array.from(depValues.entries()).map(([depKey,valLoadable])=>[depKey,valLoadable.contents]);}function setCache(state,loadable,depValues){state.atomValues.set(key,loadable);try{cache.set(depValuesToDepRoute(depValues),loadable);}catch(error){throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);}}function detectCircularDependencies(fn){if(dependencyStack.includes(key)){const message=`Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 ')}`;return loadableWithError$1(Recoil_err(message));}dependencyStack.push(key);try{return fn();}finally{dependencyStack.pop();}}function selectorPeek(store,state){const cachedLoadable=state.atomValues.get(key);if(cachedLoadable!=null){return cachedLoadable;}return cache.get(nodeKey=>{var _peekNodeLoadable;!(typeof nodeKey==='string')?Recoil_invariant(false):void 0;return (_peekNodeLoadable=peekNodeLoadable$1(store,state,nodeKey))===null||_peekNodeLoadable===void 0?void 0:_peekNodeLoadable.contents;});}function selectorGet(store,state){return detectCircularDependencies(()=>getSelectorLoadableAndUpdateDeps(store,state));}function invalidateSelector(state){state.atomValues.delete(key);}function clearSelectorCache(store,treeState){!(recoilValue!=null)?Recoil_invariant(false):void 0;for(const nodeKey of discoveredDependencyNodeKeys){var _node$clearCache;const node=getNode$6(nodeKey);(_node$clearCache=node.clearCache)===null||_node$clearCache===void 0?void 0:_node$clearCache.call(node,store,treeState);}discoveredDependencyNodeKeys.clear();invalidateSelector(treeState);cache.clear();markRecoilValueModified$1(store,recoilValue);}if(set!=null){/**
     * ES5 strict mode prohibits defining non-top-level function declarations,
     * so don't use function declaration syntax here
     */const selectorSet=(store,state,newValue)=>{let syncSelectorSetFinished=false;const writes=new Map();function getRecoilValue({key:depKey}){if(syncSelectorSetFinished){throw Recoil_err('Recoil: Async selector sets are not currently supported.');}const loadable=getNodeLoadable$2(store,state,depKey);if(loadable.state==='hasValue'){return loadable.contents;}else if(loadable.state==='loading'){const msg=`Getting value of asynchronous atom or selector "${depKey}" in a pending state while setting selector "${key}" is not yet supported.`;throw Recoil_err(msg);}else {throw loadable.contents;}}function setRecoilState(recoilState,valueOrUpdater// $FlowFixMe[missing-local-annot]
){if(syncSelectorSetFinished){const msg='Recoil: Async selector sets are not currently supported.';throw Recoil_err(msg);}const setValue=typeof valueOrUpdater==='function'?// cast to any because we can't restrict type S from being a function itself without losing support for opaque types
// flowlint-next-line unclear-type:off
valueOrUpdater(getRecoilValue(recoilState)):valueOrUpdater;const upstreamWrites=setNodeValue$3(store,state,recoilState.key,setValue);upstreamWrites.forEach((v,k)=>writes.set(k,v));}function resetRecoilState(recoilState){setRecoilState(recoilState,DEFAULT_VALUE$6);}const ret=set({set:setRecoilState,get:getRecoilValue,reset:resetRecoilState},newValue);// set should be a void method, but if the user makes it `async`, then it
// will return a Promise, which we don't currently support.
if(ret!==undefined){throw Recoil_isPromise(ret)?Recoil_err('Recoil: Async selector sets are not currently supported.'):Recoil_err('Recoil: selector set should be a void function.');}syncSelectorSetFinished=true;return writes;};return recoilValue=registerNode$1({key,nodeType:'selector',peek:selectorPeek,get:selectorGet,set:selectorSet,init:selectorInit,invalidate:invalidateSelector,clearCache:clearSelectorCache,shouldDeleteConfigOnRelease:selectorShouldDeleteConfigOnRelease,dangerouslyAllowMutability:options.dangerouslyAllowMutability,shouldRestoreFromSnapshots:false,retainedBy});}else {return recoilValue=registerNode$1({key,nodeType:'selector',peek:selectorPeek,get:selectorGet,init:selectorInit,invalidate:invalidateSelector,clearCache:clearSelectorCache,shouldDeleteConfigOnRelease:selectorShouldDeleteConfigOnRelease,dangerouslyAllowMutability:options.dangerouslyAllowMutability,shouldRestoreFromSnapshots:false,retainedBy});}}/* eslint-enable no-redeclare */ // $FlowIssue[incompatible-use]
// $FlowFixMe[missing-local-annot]
selector.value=value=>new WrappedValue$1(value);var Recoil_selector=selector;// @fb-only: import type {ScopeRules} from 'Recoil_ScopedAtom';
// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
const{isLoadable:isLoadable$2,loadableWithError:loadableWithError$2,loadableWithPromise:loadableWithPromise$2,loadableWithValue:loadableWithValue$3}=Recoil_Loadable$1;const{WrappedValue:WrappedValue$2}=Recoil_Wrapper$1;const{peekNodeInfo:peekNodeInfo$3}=Recoil_FunctionalCore;const{DEFAULT_VALUE:DEFAULT_VALUE$7,DefaultValue:DefaultValue$2,getConfigDeletionHandler:getConfigDeletionHandler$2,registerNode:registerNode$2,setConfigDeletionHandler:setConfigDeletionHandler$1}=Recoil_Node;const{isRecoilValue:isRecoilValue$4}=Recoil_RecoilValue$1;const{getRecoilValueAsLoadable:getRecoilValueAsLoadable$4,markRecoilValueModified:markRecoilValueModified$2,setRecoilValue:setRecoilValue$4,setRecoilValueLoadable:setRecoilValueLoadable$2}=Recoil_RecoilValueInterface;const{retainedByOptionWithDefault:retainedByOptionWithDefault$2}=Recoil_Retention;const unwrap=x=>x instanceof WrappedValue$2?x.value:x;function baseAtom(options){const{key,persistence_UNSTABLE:persistence}=options;const retainedBy=retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);let liveStoresCount=0;function unwrapPromise(promise){return loadableWithPromise$2(promise.then(value=>{defaultLoadable=loadableWithValue$3(value);return value;}).catch(error=>{defaultLoadable=loadableWithError$2(error);throw error;}));}let defaultLoadable=Recoil_isPromise(options.default)?unwrapPromise(options.default):isLoadable$2(options.default)?options.default.state==='loading'?unwrapPromise(options.default.contents):options.default:// $FlowFixMe[incompatible-call]
loadableWithValue$3(unwrap(options.default));maybeFreezeValueOrPromise(defaultLoadable.contents);let cachedAnswerForUnvalidatedValue=undefined;// Cleanup handlers for this atom
// Rely on stable reference equality of the store to use it as a key per <RecoilRoot>
const cleanupEffectsByStore=new Map();function maybeFreezeValueOrPromise(valueOrPromise){return valueOrPromise;}function wrapPendingPromise(store,promise){const wrappedPromise=promise.then(value=>{var _store$getState$nextT,_state$atomValues$get;const state=(_store$getState$nextT=store.getState().nextTree)!==null&&_store$getState$nextT!==void 0?_store$getState$nextT:store.getState().currentTree;if(((_state$atomValues$get=state.atomValues.get(key))===null||_state$atomValues$get===void 0?void 0:_state$atomValues$get.contents)===wrappedPromise){setRecoilValue$4(store,node,value);}return value;}).catch(error=>{var _store$getState$nextT2,_state$atomValues$get2;const state=(_store$getState$nextT2=store.getState().nextTree)!==null&&_store$getState$nextT2!==void 0?_store$getState$nextT2:store.getState().currentTree;if(((_state$atomValues$get2=state.atomValues.get(key))===null||_state$atomValues$get2===void 0?void 0:_state$atomValues$get2.contents)===wrappedPromise){setRecoilValueLoadable$2(store,node,loadableWithError$2(error));}throw error;});return wrappedPromise;}function initAtom(store,initState,trigger){var _options$effects;liveStoresCount++;const cleanupAtom=()=>{var _cleanupEffectsByStor;liveStoresCount--;(_cleanupEffectsByStor=cleanupEffectsByStore.get(store))===null||_cleanupEffectsByStor===void 0?void 0:_cleanupEffectsByStor.forEach(cleanup=>cleanup());cleanupEffectsByStore.delete(store);};store.getState().knownAtoms.add(key);// Setup async defaults to notify subscribers when they resolve
if(defaultLoadable.state==='loading'){const notifyDefaultSubscribers=()=>{var _store$getState$nextT3;const state=(_store$getState$nextT3=store.getState().nextTree)!==null&&_store$getState$nextT3!==void 0?_store$getState$nextT3:store.getState().currentTree;if(!state.atomValues.has(key)){markRecoilValueModified$2(store,node);}};defaultLoadable.contents.finally(notifyDefaultSubscribers);}///////////////////
// Run Atom Effects
///////////////////
const effects=(_options$effects=options.effects)!==null&&_options$effects!==void 0?_options$effects:options.effects_UNSTABLE;if(effects!=null){// This state is scoped by Store, since this is in the initAtom() closure
let initValue=DEFAULT_VALUE$7;let isDuringInit=true;let isInitError=false;let pendingSetSelf=null;function getLoadable(recoilValue){// Normally we can just get the current value of another atom.
// But for our own value we need to check if there is a pending
// initialized value or get the fallback default value.
if(isDuringInit&&recoilValue.key===key){// Cast T to S
const retValue=initValue;// flowlint-line unclear-type:off
return retValue instanceof DefaultValue$2?peekAtom(store,initState)// flowlint-line unclear-type:off
:Recoil_isPromise(retValue)?loadableWithPromise$2(retValue.then(v=>v instanceof DefaultValue$2?// Cast T to S
defaultLoadable.toPromise()// flowlint-line unclear-type:off
:v)):// $FlowFixMe[incompatible-call]
loadableWithValue$3(retValue);}return getRecoilValueAsLoadable$4(store,recoilValue);}function getPromise(recoilValue){return getLoadable(recoilValue).toPromise();}function getInfo_UNSTABLE(recoilValue){var _store$getState$nextT4;const info=peekNodeInfo$3(store,(_store$getState$nextT4=store.getState().nextTree)!==null&&_store$getState$nextT4!==void 0?_store$getState$nextT4:store.getState().currentTree,recoilValue.key);return isDuringInit&&recoilValue.key===key&&!(initValue instanceof DefaultValue$2)?{...info,isSet:true,loadable:getLoadable(recoilValue)}:info;}const setSelf=effect=>valueOrUpdater=>{if(isDuringInit){const currentLoadable=getLoadable(node);const currentValue=currentLoadable.state==='hasValue'?currentLoadable.contents:DEFAULT_VALUE$7;initValue=typeof valueOrUpdater==='function'?// cast to any because we can't restrict T from being a function without losing support for opaque types
valueOrUpdater(currentValue)// flowlint-line unclear-type:off
:valueOrUpdater;if(Recoil_isPromise(initValue)){initValue=initValue.then(value=>{// Avoid calling onSet() when setSelf() initializes with a Promise
pendingSetSelf={effect,value};return value;});}}else {if(Recoil_isPromise(valueOrUpdater)){throw Recoil_err('Setting atoms to async values is not implemented.');}if(typeof valueOrUpdater!=='function'){pendingSetSelf={effect,value:unwrap(valueOrUpdater)};}setRecoilValue$4(store,node,typeof valueOrUpdater==='function'?currentValue=>{const newValue=unwrap(// cast to any because we can't restrict T from being a function without losing support for opaque types
valueOrUpdater(currentValue)// flowlint-line unclear-type:off
);// $FlowFixMe[incompatible-type]
pendingSetSelf={effect,value:newValue};return newValue;}:unwrap(valueOrUpdater));}};const resetSelf=effect=>()=>setSelf(effect)(DEFAULT_VALUE$7);const onSet=effect=>handler=>{var _cleanupEffectsByStor2;const{release}=store.subscribeToTransactions(currentStore=>{var _currentTree$atomValu;// eslint-disable-next-line prefer-const
let{currentTree,previousTree}=currentStore.getState();if(!previousTree){previousTree=currentTree;// attempt to trundle on
}const newLoadable=(_currentTree$atomValu=currentTree.atomValues.get(key))!==null&&_currentTree$atomValu!==void 0?_currentTree$atomValu:defaultLoadable;if(newLoadable.state==='hasValue'){var _previousTree$atomVal,_pendingSetSelf,_pendingSetSelf2,_pendingSetSelf3;const newValue=newLoadable.contents;const oldLoadable=(_previousTree$atomVal=previousTree.atomValues.get(key))!==null&&_previousTree$atomVal!==void 0?_previousTree$atomVal:defaultLoadable;const oldValue=oldLoadable.state==='hasValue'?oldLoadable.contents:DEFAULT_VALUE$7;// TODO This isn't actually valid, use as a placeholder for now.
// Ignore atom value changes that were set via setSelf() in the same effect.
// We will still properly call the handler if there was a subsequent
// set from something other than an atom effect which was batched
// with the `setSelf()` call.  However, we may incorrectly ignore
// the handler if the subsequent batched call happens to set the
// atom to the exact same value as the `setSelf()`.   But, in that
// case, it was kind of a noop, so the semantics are debatable..
if(((_pendingSetSelf=pendingSetSelf)===null||_pendingSetSelf===void 0?void 0:_pendingSetSelf.effect)!==effect||((_pendingSetSelf2=pendingSetSelf)===null||_pendingSetSelf2===void 0?void 0:_pendingSetSelf2.value)!==newValue){handler(newValue,oldValue,!currentTree.atomValues.has(key));}else if(((_pendingSetSelf3=pendingSetSelf)===null||_pendingSetSelf3===void 0?void 0:_pendingSetSelf3.effect)===effect){pendingSetSelf=null;}}},key);cleanupEffectsByStore.set(store,[...((_cleanupEffectsByStor2=cleanupEffectsByStore.get(store))!==null&&_cleanupEffectsByStor2!==void 0?_cleanupEffectsByStor2:[]),release]);};for(const effect of effects){try{const cleanup=effect({node,storeID:store.storeID,parentStoreID_UNSTABLE:store.parentStoreID,trigger,setSelf:setSelf(effect),resetSelf:resetSelf(effect),onSet:onSet(effect),getPromise,getLoadable,getInfo_UNSTABLE});if(cleanup!=null){var _cleanupEffectsByStor3;cleanupEffectsByStore.set(store,[...((_cleanupEffectsByStor3=cleanupEffectsByStore.get(store))!==null&&_cleanupEffectsByStor3!==void 0?_cleanupEffectsByStor3:[]),cleanup]);}}catch(error){initValue=error;isInitError=true;}}isDuringInit=false;// Mutate initial state in place since we know there are no other subscribers
// since we are the ones initializing on first use.
if(!(initValue instanceof DefaultValue$2)){var _store$getState$nextT5;const initLoadable=isInitError?loadableWithError$2(initValue):Recoil_isPromise(initValue)?loadableWithPromise$2(wrapPendingPromise(store,initValue)):loadableWithValue$3(unwrap(initValue));maybeFreezeValueOrPromise(initLoadable.contents);initState.atomValues.set(key,initLoadable);// If there is a pending transaction, then also mutate the next state tree.
// This could happen if the atom was first initialized in an action that
// also updated some other atom's state.
(_store$getState$nextT5=store.getState().nextTree)===null||_store$getState$nextT5===void 0?void 0:_store$getState$nextT5.atomValues.set(key,initLoadable);}}return cleanupAtom;}function peekAtom(_store,state){var _ref,_state$atomValues$get3;return (_ref=(_state$atomValues$get3=state.atomValues.get(key))!==null&&_state$atomValues$get3!==void 0?_state$atomValues$get3:cachedAnswerForUnvalidatedValue)!==null&&_ref!==void 0?_ref:defaultLoadable;}function getAtom(_store,state){if(state.atomValues.has(key)){// Atom value is stored in state:
return Recoil_nullthrows(state.atomValues.get(key));}else if(state.nonvalidatedAtoms.has(key)){// Atom value is stored but needs validation before use.
// We might have already validated it and have a cached validated value:
if(cachedAnswerForUnvalidatedValue!=null){return cachedAnswerForUnvalidatedValue;}if(persistence==null){return defaultLoadable;}const nonvalidatedValue=state.nonvalidatedAtoms.get(key);const validatorResult=persistence.validator(nonvalidatedValue,DEFAULT_VALUE$7);const validatedValueLoadable=validatorResult instanceof DefaultValue$2?defaultLoadable:loadableWithValue$3(validatorResult);cachedAnswerForUnvalidatedValue=validatedValueLoadable;return cachedAnswerForUnvalidatedValue;}else {return defaultLoadable;}}function invalidateAtom(){cachedAnswerForUnvalidatedValue=undefined;}function setAtom(_store,state,newValue){// Bail out if we're being set to the existing value, or if we're being
// reset but have no stored value (validated or unvalidated) to reset from:
if(state.atomValues.has(key)){const existing=Recoil_nullthrows(state.atomValues.get(key));if(existing.state==='hasValue'&&newValue===existing.contents){return new Map();}}else if(!state.nonvalidatedAtoms.has(key)&&newValue instanceof DefaultValue$2){return new Map();}cachedAnswerForUnvalidatedValue=undefined;// can be released now if it was previously in use
return new Map().set(key,loadableWithValue$3(newValue));}function shouldDeleteConfigOnReleaseAtom(){return getConfigDeletionHandler$2(key)!==undefined&&liveStoresCount<=0;}const node=registerNode$2({key,nodeType:'atom',peek:peekAtom,get:getAtom,set:setAtom,init:initAtom,invalidate:invalidateAtom,shouldDeleteConfigOnRelease:shouldDeleteConfigOnReleaseAtom,dangerouslyAllowMutability:options.dangerouslyAllowMutability,persistence_UNSTABLE:options.persistence_UNSTABLE?{type:options.persistence_UNSTABLE.type,backButton:options.persistence_UNSTABLE.backButton}:undefined,shouldRestoreFromSnapshots:true,retainedBy});return node;}// prettier-ignore
function atom(options){const{// @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
...restOptions}=options;const optionsDefault='default'in options?// $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
options.default:new Promise(()=>{});if(isRecoilValue$4(optionsDefault)// Continue to use atomWithFallback for promise defaults for scoped atoms
// for now, since scoped atoms don't support async defaults
// @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
// @fb-only: || (isLoadable(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
){return atomWithFallback({...restOptions,default:optionsDefault// @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
});// @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS
// @fb-only: && !isPromise(optionsDefault)
// @fb-only: && !isLoadable(optionsDefault)
// @fb-only: ) {
// @fb-only: return scopedAtom<T>({
// @fb-only: ...restOptions,
// @fb-only: default: unwrap<T>(optionsDefault),
// @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
// @fb-only: });
}else {return baseAtom({...restOptions,default:optionsDefault});}}function atomWithFallback(options){const base=atom({...options,default:DEFAULT_VALUE$7,persistence_UNSTABLE:options.persistence_UNSTABLE===undefined?undefined:{...options.persistence_UNSTABLE,validator:storedValue=>storedValue instanceof DefaultValue$2?storedValue:Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue,DEFAULT_VALUE$7)},// TODO Hack for now.
effects:options.effects,// flowlint-line unclear-type: off
effects_UNSTABLE:options.effects_UNSTABLE// flowlint-line unclear-type: off
});// $FlowFixMe[incompatible-call]
const sel=Recoil_selector({key:`${options.key}__withFallback`,get:({get})=>{const baseValue=get(base);return baseValue instanceof DefaultValue$2?options.default:baseValue;},// $FlowFixMe[incompatible-call]
set:({set},newValue)=>set(base,newValue),// This selector does not need to cache as it is a wrapper selector
// and the selector within the wrapper selector will have a cache
// option by default
cachePolicy_UNSTABLE:{eviction:'most-recent'},dangerouslyAllowMutability:options.dangerouslyAllowMutability});setConfigDeletionHandler$1(sel.key,getConfigDeletionHandler$2(options.key));return sel;}// $FlowFixMe[missing-local-annot]
atom.value=value=>new WrappedValue$2(value);var Recoil_atom=atom;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @oncall recoil
 */class MapCache{constructor(options){var _options$mapKey;_defineProperty(this,"_map",void 0);_defineProperty(this,"_keyMapper",void 0);this._map=new Map();this._keyMapper=(_options$mapKey=options===null||options===void 0?void 0:options.mapKey)!==null&&_options$mapKey!==void 0?_options$mapKey:v=>v;}size(){return this._map.size;}has(key){return this._map.has(this._keyMapper(key));}get(key){return this._map.get(this._keyMapper(key));}set(key,val){this._map.set(this._keyMapper(key),val);}delete(key){this._map.delete(this._keyMapper(key));}clear(){this._map.clear();}}var Recoil_MapCache={MapCache};var Recoil_MapCache_1=Recoil_MapCache.MapCache;var Recoil_MapCache$1=/*#__PURE__*/Object.freeze({__proto__:null,MapCache:Recoil_MapCache_1});const{LRUCache:LRUCache$2}=Recoil_LRUCache$1;const{MapCache:MapCache$1}=Recoil_MapCache$1;const defaultPolicy$1={equality:'reference',eviction:'none',maxSize:Infinity};function cacheFromPolicy({equality=defaultPolicy$1.equality,eviction=defaultPolicy$1.eviction,maxSize=defaultPolicy$1.maxSize}=defaultPolicy$1){const valueMapper=getValueMapper$1(equality);const cache=getCache(eviction,maxSize,valueMapper);return cache;}function getValueMapper$1(equality){switch(equality){case'reference':return val=>val;case'value':return val=>Recoil_stableStringify(val);}throw Recoil_err(`Unrecognized equality policy ${equality}`);}function getCache(eviction,maxSize,mapKey){switch(eviction){case'keep-all':return new MapCache$1({mapKey});case'lru':return new LRUCache$2({mapKey,maxSize:Recoil_nullthrows(maxSize)});case'most-recent':return new LRUCache$2({mapKey,maxSize:1});}throw Recoil_err(`Unrecognized eviction policy ${eviction}`);}var Recoil_cacheFromPolicy=cacheFromPolicy;// @fb-only: import type {ScopeRules} from 'Recoil_ScopedAtom';
const{setConfigDeletionHandler:setConfigDeletionHandler$2}=Recoil_Node;// Process scopeRules to handle any entries which are functions taking parameters
// prettier-ignore
// @fb-only: function mapScopeRules<P>(
// @fb-only: scopeRules?: ParameterizedScopeRules<P>,
// @fb-only: param: P,
// @fb-only: ): ScopeRules | void {
// @fb-only: return scopeRules?.map(rule =>
// @fb-only: Array.isArray(rule)
// @fb-only: ? rule.map(entry => (typeof entry === 'function' ? entry(param) : entry))
// @fb-only: : rule,
// @fb-only: );
// @fb-only: }
/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/function atomFamily(options){var _options$cachePolicyF,_options$cachePolicyF2;const atomCache=Recoil_cacheFromPolicy({equality:(_options$cachePolicyF=(_options$cachePolicyF2=options.cachePolicyForParams_UNSTABLE)===null||_options$cachePolicyF2===void 0?void 0:_options$cachePolicyF2.equality)!==null&&_options$cachePolicyF!==void 0?_options$cachePolicyF:'value',eviction:'keep-all'});// Simple atomFamily implementation to cache individual atoms based
// on the parameter value equality.
return params=>{var _stableStringify,_options$effects;const cachedAtom=atomCache.get(params);if(cachedAtom!=null){return cachedAtom;}const{cachePolicyForParams_UNSTABLE,...atomOptions}=options;const optionsDefault='default'in options?// $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
options.default:new Promise(()=>{});const newAtom=Recoil_atom({...atomOptions,key:`${options.key}__${(_stableStringify=Recoil_stableStringify(params))!==null&&_stableStringify!==void 0?_stableStringify:'void'}`,default:typeof optionsDefault==='function'?// The default was parameterized
// Flow doesn't know that T isn't a function, so we need to case to any
// $FlowIssue[incompatible-use]
optionsDefault(params):// Default may be a static value, promise, or RecoilValue
optionsDefault,retainedBy_UNSTABLE:typeof options.retainedBy_UNSTABLE==='function'?options.retainedBy_UNSTABLE(params):options.retainedBy_UNSTABLE,effects:typeof options.effects==='function'?options.effects(params):typeof options.effects_UNSTABLE==='function'?options.effects_UNSTABLE(params):(_options$effects=options.effects)!==null&&_options$effects!==void 0?_options$effects:options.effects_UNSTABLE// prettier-ignore
// @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
// @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
// @fb-only: params,
// @fb-only: ),
});atomCache.set(params,newAtom);setConfigDeletionHandler$2(newAtom.key,()=>{atomCache.delete(params);});return newAtom;};}var Recoil_atomFamily=atomFamily;const{setConfigDeletionHandler:setConfigDeletionHandler$3}=Recoil_Node;// Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify
// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
let nextIndex=0;/* eslint-disable no-redeclare */ // Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.
function selectorFamily(options){var _options$cachePolicyF,_options$cachePolicyF2;const selectorCache=Recoil_cacheFromPolicy({equality:(_options$cachePolicyF=(_options$cachePolicyF2=options.cachePolicyForParams_UNSTABLE)===null||_options$cachePolicyF2===void 0?void 0:_options$cachePolicyF2.equality)!==null&&_options$cachePolicyF!==void 0?_options$cachePolicyF:'value',eviction:'keep-all'});return params=>{var _stableStringify;// Throw an error with selector key so that it is clear which
// selector is causing an error
let cachedSelector;try{cachedSelector=selectorCache.get(params);}catch(error){throw Recoil_err(`Problem with cache lookup for selector ${options.key}: ${error.message}`);}if(cachedSelector!=null){return cachedSelector;}const myKey=`${options.key}__selectorFamily/${(_stableStringify=Recoil_stableStringify(params,{// It is possible to use functions in parameters if the user uses
// a cache with reference equality thanks to the incrementing index.
allowFunctions:true}))!==null&&_stableStringify!==void 0?_stableStringify:'void'}/${nextIndex++}`;// Append index in case values serialize to the same key string
const myGet=callbacks=>options.get(params)(callbacks);const myCachePolicy=options.cachePolicy_UNSTABLE;const retainedBy=typeof options.retainedBy_UNSTABLE==='function'?options.retainedBy_UNSTABLE(params):options.retainedBy_UNSTABLE;let newSelector;if(options.set!=null){const set=options.set;const mySet=(callbacks,newValue)=>set(params)(callbacks,newValue);newSelector=Recoil_selector({key:myKey,get:myGet,set:mySet,cachePolicy_UNSTABLE:myCachePolicy,dangerouslyAllowMutability:options.dangerouslyAllowMutability,retainedBy_UNSTABLE:retainedBy});}else {newSelector=Recoil_selector({key:myKey,get:myGet,cachePolicy_UNSTABLE:myCachePolicy,dangerouslyAllowMutability:options.dangerouslyAllowMutability,retainedBy_UNSTABLE:retainedBy});}selectorCache.set(params,newSelector);setConfigDeletionHandler$3(newSelector.key,()=>{selectorCache.delete(params);});return newSelector;};}/* eslint-enable no-redeclare */var Recoil_selectorFamily=selectorFamily;// flowlint-next-line unclear-type:off
const constantSelector=Recoil_selectorFamily({key:'__constant',get:constant=>()=>constant,cachePolicyForParams_UNSTABLE:{equality:'reference'}});// Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.
function constSelector(constant){return constantSelector(constant);}var Recoil_constSelector=constSelector;// flowlint-next-line unclear-type:off
const throwingSelector=Recoil_selectorFamily({key:'__error',get:message=>()=>{throw Recoil_err(message);},// TODO Why?
cachePolicyForParams_UNSTABLE:{equality:'reference'}});// Function that returns a selector which always throws an error
// with the provided message.
function errorSelector(message){return throwingSelector(message);}var Recoil_errorSelector=errorSelector;/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * 
 * @format
 * @oncall recoil
 */function readOnlySelector(atom){// flowlint-next-line unclear-type: off
return atom;}var Recoil_readOnlySelector=readOnlySelector;const{loadableWithError:loadableWithError$3,loadableWithPromise:loadableWithPromise$3,loadableWithValue:loadableWithValue$4}=Recoil_Loadable$1;/////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.
function concurrentRequests(getRecoilValue,deps){const results=Array(deps.length).fill(undefined);const exceptions=Array(deps.length).fill(undefined);for(const[i,dep]of deps.entries()){try{results[i]=getRecoilValue(dep);}catch(e){// exceptions can either be Promises of pending results or real errors
exceptions[i]=e;}}return [results,exceptions];}function isError(exp){return exp!=null&&!Recoil_isPromise(exp);}function unwrapDependencies(dependencies){return Array.isArray(dependencies)?dependencies:Object.getOwnPropertyNames(dependencies).map(key=>dependencies[key]);}function wrapResults(dependencies,/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */results){return Array.isArray(dependencies)?results:// Object.getOwnPropertyNames() has consistent key ordering with ES6
Object.getOwnPropertyNames(dependencies).reduce((out,key,idx)=>({...out,[key]:results[idx]}),{});}function wrapLoadables(dependencies,results,exceptions){const output=exceptions.map((exception,idx)=>exception==null?loadableWithValue$4(results[idx]):Recoil_isPromise(exception)?loadableWithPromise$3(exception):loadableWithError$3(exception));return wrapResults(dependencies,output);}function combineAsyncResultsWithSyncResults(syncResults,asyncResults){return asyncResults.map((result,idx)=>/**
   * it's important we use === undefined as opposed to == null, because the
   * resolved value of the async promise could be `null`, in which case we
   * don't want to use syncResults[idx], which would be undefined. If async
   * promise resolves to `undefined`, that's ok because `syncResults[idx]`
   * will also be `undefined`. That's a little hacky, but it works.
   */result===undefined?syncResults[idx]:result);}// Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.
const waitForNone=Recoil_selectorFamily({key:'__waitForNone',get:dependencies=>({get})=>{// Issue requests for all dependencies in parallel.
const deps=unwrapDependencies(dependencies);const[results,exceptions]=concurrentRequests(get,deps);// Always return the current status of the results; never block.
return wrapLoadables(dependencies,results,exceptions);},dangerouslyAllowMutability:true});// Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.
const waitForAny=Recoil_selectorFamily({key:'__waitForAny',get:dependencies=>({get})=>{// Issue requests for all dependencies in parallel.
// Exceptions can either be Promises of pending results or real errors
const deps=unwrapDependencies(dependencies);const[results,exceptions]=concurrentRequests(get,deps);// If any results are available, value or error, return the current status
if(exceptions.some(exp=>!Recoil_isPromise(exp))){return wrapLoadables(dependencies,results,exceptions);}// Otherwise, return a promise that will resolve when the next result is
// available, whichever one happens to be next.  But, if all pending
// dependencies end up with errors, then reject the promise.
return new Promise(resolve=>{for(const[i,exp]of exceptions.entries()){if(Recoil_isPromise(exp)){exp.then(result=>{results[i]=result;exceptions[i]=undefined;resolve(wrapLoadables(dependencies,results,exceptions));}).catch(error=>{exceptions[i]=error;resolve(wrapLoadables(dependencies,results,exceptions));});}}});},dangerouslyAllowMutability:true});// Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.
const waitForAll=Recoil_selectorFamily({key:'__waitForAll',get:dependencies=>({get})=>{// Issue requests for all dependencies in parallel.
// Exceptions can either be Promises of pending results or real errors
const deps=unwrapDependencies(dependencies);const[results,exceptions]=concurrentRequests(get,deps);// If all results are available, return the results
if(exceptions.every(exp=>exp==null)){return wrapResults(dependencies,results);}// If we have any errors, throw the first error
const error=exceptions.find(isError);if(error!=null){throw error;}// Otherwise, return a promise that will resolve when all results are available
return Promise.all(exceptions).then(exceptionResults=>wrapResults(dependencies,combineAsyncResultsWithSyncResults(results,exceptionResults)));},dangerouslyAllowMutability:true});const waitForAllSettled=Recoil_selectorFamily({key:'__waitForAllSettled',get:dependencies=>({get})=>{// Issue requests for all dependencies in parallel.
// Exceptions can either be Promises of pending results or real errors
const deps=unwrapDependencies(dependencies);const[results,exceptions]=concurrentRequests(get,deps);// If all results are available, return the results
if(exceptions.every(exp=>!Recoil_isPromise(exp))){return wrapLoadables(dependencies,results,exceptions);}// Wait for all results to settle
return Promise.all(exceptions.map((exp,i)=>Recoil_isPromise(exp)?exp.then(result=>{results[i]=result;exceptions[i]=undefined;}).catch(error=>{results[i]=undefined;exceptions[i]=error;}):null))// Then wrap them as loadables
.then(()=>wrapLoadables(dependencies,results,exceptions));},dangerouslyAllowMutability:true});const noWait=Recoil_selectorFamily({key:'__noWait',get:dependency=>({get})=>{try{return Recoil_selector.value(loadableWithValue$4(get(dependency)));}catch(exception){return Recoil_selector.value(Recoil_isPromise(exception)?loadableWithPromise$3(exception):loadableWithError$3(exception));}},dangerouslyAllowMutability:true});var Recoil_WaitFor={waitForNone,waitForAny,waitForAll,waitForAllSettled,noWait};const{RecoilLoadable}=Recoil_Loadable$1;const{DefaultValue:DefaultValue$3}=Recoil_Node;const{RecoilRoot:RecoilRoot$2,useRecoilStoreID:useRecoilStoreID$1}=Recoil_RecoilRoot;const{isRecoilValue:isRecoilValue$5}=Recoil_RecoilValue$1;const{retentionZone:retentionZone$1}=Recoil_RetentionZone;const{freshSnapshot:freshSnapshot$2}=Recoil_Snapshot$1;const{useRecoilState:useRecoilState$1,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,useRecoilStateLoadable:useRecoilStateLoadable$1,useRecoilValue:useRecoilValue$1,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,useRecoilValueLoadable:useRecoilValueLoadable$1,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,useResetRecoilState:useResetRecoilState$1,useSetRecoilState:useSetRecoilState$1}=Recoil_Hooks;const{useGotoRecoilSnapshot:useGotoRecoilSnapshot$1,useRecoilSnapshot:useRecoilSnapshot$1,useRecoilTransactionObserver:useRecoilTransactionObserver$1}=Recoil_SnapshotHooks;const{useRecoilCallback:useRecoilCallback$1}=Recoil_useRecoilCallback;const{noWait:noWait$1,waitForAll:waitForAll$1,waitForAllSettled:waitForAllSettled$1,waitForAny:waitForAny$1,waitForNone:waitForNone$1}=Recoil_WaitFor;var Recoil_index={// Types
DefaultValue:DefaultValue$3,isRecoilValue:isRecoilValue$5,RecoilLoadable,// Global Recoil environment settiongs
RecoilEnv:Recoil_RecoilEnv,// Recoil Root
RecoilRoot:RecoilRoot$2,useRecoilStoreID:useRecoilStoreID$1,useRecoilBridgeAcrossReactRoots_UNSTABLE:Recoil_useRecoilBridgeAcrossReactRoots,// Atoms/Selectors
atom:Recoil_atom,selector:Recoil_selector,// Convenience Atoms/Selectors
atomFamily:Recoil_atomFamily,selectorFamily:Recoil_selectorFamily,constSelector:Recoil_constSelector,errorSelector:Recoil_errorSelector,readOnlySelector:Recoil_readOnlySelector,// Concurrency Helpers for Atoms/Selectors
noWait:noWait$1,waitForNone:waitForNone$1,waitForAny:waitForAny$1,waitForAll:waitForAll$1,waitForAllSettled:waitForAllSettled$1,// Hooks for Atoms/Selectors
useRecoilValue:useRecoilValue$1,useRecoilValueLoadable:useRecoilValueLoadable$1,useRecoilState:useRecoilState$1,useRecoilStateLoadable:useRecoilStateLoadable$1,useSetRecoilState:useSetRecoilState$1,useResetRecoilState:useResetRecoilState$1,useGetRecoilValueInfo_UNSTABLE:Recoil_useGetRecoilValueInfo,useRecoilRefresher_UNSTABLE:Recoil_useRecoilRefresher,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE$1,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:useRecoilValue_TRANSITION_SUPPORT_UNSTABLE$1,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:useRecoilState_TRANSITION_SUPPORT_UNSTABLE$1,// Hooks for complex operations
useRecoilCallback:useRecoilCallback$1,useRecoilTransaction_UNSTABLE:Recoil_useRecoilTransaction,// Snapshots
useGotoRecoilSnapshot:useGotoRecoilSnapshot$1,useRecoilSnapshot:useRecoilSnapshot$1,useRecoilTransactionObserver_UNSTABLE:useRecoilTransactionObserver$1,snapshot_UNSTABLE:freshSnapshot$2,// Memory Management
useRetain:Recoil_useRetain,retentionZone:retentionZone$1};var Recoil_index_5=Recoil_index.RecoilRoot;var Recoil_index_8=Recoil_index.atom;var Recoil_index_22=Recoil_index.useRecoilState;

const view = Recoil_index_8({
    key: 'fileTreeViewState',
    default: 'folder',
});
const activeFolderPath = Recoil_index_8({
    key: 'fileTreeActiveFolderPathState',
    default: '',
});
const activeOZFile = Recoil_index_8({
    key: 'fileTreeActiveOZFile',
    default: null,
});
const excludedFolders = Recoil_index_8({
    key: 'fileTreeExcludedFoldersState',
    default: [],
});
const excludedExtensions = Recoil_index_8({
    key: 'fileTreeExcludedExtensions',
    default: [],
});
const folderFileCountMap = Recoil_index_8({
    key: 'fileTreeFolderFileCountMapState',
    default: {},
});
const folderTree = Recoil_index_8({
    key: 'fileTreeFolderTreeState',
    default: null,
    dangerouslyAllowMutability: true,
});
const ozFileList = Recoil_index_8({
    key: 'fileTreeOzFileListState',
    default: [],
});
const ozPinnedFileList = Recoil_index_8({
    key: 'fileTreeOzPinnedFilesState',
    default: [],
});
const openFolders = Recoil_index_8({
    key: 'fileTreeOpenFoldersState',
    default: [],
});
const showSubFolders = Recoil_index_8({
    key: 'showSubFoldersInVault',
    default: false,
});
const focusedFolder = Recoil_index_8({
    key: 'fileTreeFocusedFolder',
    default: null,
    dangerouslyAllowMutability: true,
});

function useForceUpdate() {
    const [value, setValue] = reactExports.useState(0);
    return () => setValue((value) => value + 1);
}

function isMouseEvent(e) {
    return e && 'screenX' in e;
}
function useLongPress(callback = (e) => { }, ms = 300) {
    const [startLongPress, setStartLongPress] = reactExports.useState(false);
    const [longPressEvent, setLongPressEvent] = reactExports.useState(null);
    const [startLocationY, setStartLocationY] = reactExports.useState(null);
    reactExports.useEffect(() => {
        let timerId;
        if (startLongPress && startLocationY) {
            timerId = setTimeout(() => {
                callback(longPressEvent);
                stop(longPressEvent);
            }, ms);
        }
        else {
            clearTimeout(timerId);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [callback, ms, startLongPress, startLocationY]);
    const start = reactExports.useCallback((e) => {
        setStartLongPress(true);
        setStartLocationY(e.touches[0].clientY);
        setLongPressEvent(e);
    }, []);
    const move = reactExports.useCallback((e) => {
        if (startLocationY) {
            let dist = Math.abs(e.touches[0].clientY - startLocationY);
            if (dist >= 0.5)
                stop(e);
        }
    }, [startLocationY]);
    const stop = reactExports.useCallback((e) => {
        setStartLongPress(false);
        setLongPressEvent(null);
    }, []);
    return {
        onTouchStart: start,
        onTouchMove: move,
        onTouchEnd: stop,
    };
}

// ----> FILE TREE COMPONENT HANDLERS <----- \\
// Function After an External File Dropped into Folder Name
const handleOnDropFiles = (params) => {
    let { files, activeFolderPath, plugin } = params;
    files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
        file.arrayBuffer().then((arrayBuffer) => {
            plugin.app.vault.adapter.writeBinary(activeFolderPath + '/' + file.name, arrayBuffer);
        });
    }));
};
const getFilesWithName = (params) => {
    let { searchPhrase, searchFolder, plugin, getAllFiles } = params;
    var files = getFilesUnderPath(searchFolder, plugin, getAllFiles);
    var filteredFiles = files.filter((file) => file.basename.toLowerCase().includes(searchPhrase.toLowerCase().trimStart()));
    return filteredFiles;
};
const getFileTags = (params) => {
    let { f, plugin } = params;
    let mdFile = plugin.app.vault.getAbstractFileByPath(f.path);
    if (!mdFile)
        return [];
    let fileCache = plugin.app.metadataCache.getFileCache(mdFile);
    let fileTags = [];
    if (fileCache.tags) {
        for (let fileTag of fileCache.tags) {
            fileTags.push(fileTag.tag);
        }
    }
    if (fileCache.frontmatter && fileCache.frontmatter['tags']) {
        let tagsFM = fileCache.frontmatter['tags'];
        if (typeof tagsFM === 'string') {
            let fileFMTags = tagsFM.split(',');
            for (let i = 0; i < fileFMTags.length; i++) {
                fileTags.push(fileFMTags[i]);
            }
        }
        else if (Array.isArray(tagsFM)) {
            for (let i = 0; i < tagsFM.length; i++) {
                fileTags.push(tagsFM[i]);
            }
        }
    }
    return fileTags;
};
const getFilesWithTag = (params) => {
    let { searchTag, plugin, focusedFolder } = params;
    let filesWithTag = new Set();
    let ozFiles = getFilesUnderPath(plugin.settings.allSearchOnlyInFocusedFolder ? focusedFolder.path : '/', plugin, true);
    for (let ozFile of ozFiles) {
        let fileTags = getFileTags({
            f: ozFile,
            plugin: plugin,
        });
        for (let fileTag of fileTags) {
            if (fileTag.toLowerCase().contains(searchTag.toLowerCase().trimStart())) {
                if (!filesWithTag.has(ozFile))
                    filesWithTag.add(ozFile);
            }
        }
    }
    return filesWithTag;
};
const handleRevealActiveFileButton = (params) => {
    let { plugin } = params;
    let event = new CustomEvent(eventTypes.revealFile, {
        detail: {
            file: plugin.app.workspace.getActiveFile(),
        },
    });
    window.dispatchEvent(event);
};
// Sort - Filter Files Depending on Preferences
const customFiles = (params) => {
    let { fileList, excludedExtensions, excludedFolders, plugin, ozPinnedFiles } = params;
    let sortedfileList;
    // Remove Files with Excluded Extensions
    if (excludedExtensions.length > 0) {
        sortedfileList = fileList.filter((file) => !excludedExtensions.contains(file.extension));
    }
    // Remove Files from Excluded Folders
    if (excludedFolders.length > 0) {
        sortedfileList = sortedfileList.filter((file) => {
            for (let exc of excludedFolders) {
                if (file.path.startsWith(exc)) {
                    return false;
                }
            }
            return true;
        });
    }
    // Remove Files for Folder Note (If file name is same as parent folder name)
    if (plugin.settings.folderNote) {
        sortedfileList = sortedfileList.filter((f) => !f.isFolderNote);
    }
    // Sort File by Name or Last Content Update, moving pinned files to the front
    sortedfileList = sortedfileList.sort((a, b) => {
        if (ozPinnedFiles.contains(a) && !ozPinnedFiles.contains(b)) {
            return -1;
        }
        else if (!ozPinnedFiles.contains(a) && ozPinnedFiles.contains(b)) {
            return 1;
        }
        if (plugin.settings.sortReverse) {
            [a, b] = [b, a];
        }
        if (plugin.settings.sortFilesBy === 'name') {
            return plugin.settings.showFileNameAsFullPath
                ? a.path.localeCompare(b.path, 'en', { numeric: true })
                : a.basename.localeCompare(b.basename, 'en', { numeric: true });
        }
        else if (plugin.settings.sortFilesBy === 'last-update') {
            return b.stat.mtime - a.stat.mtime;
        }
        else if (plugin.settings.sortFilesBy === 'created') {
            return b.stat.ctime - a.stat.ctime;
        }
        else if (plugin.settings.sortFilesBy === 'file-size') {
            return b.stat.size - a.stat.size;
        }
    });
    return sortedfileList;
};
const sortFileListClickHandle = (params) => {
    let { e, plugin, forceUpdate } = params;
    const sortMenu = new obsidian.Menu();
    const changeSortSettingTo = (newValue) => {
        plugin.settings.sortFilesBy = newValue;
        plugin.saveSettings();
        forceUpdate();
    };
    const addMenuItem = (label, low, high, value) => {
        sortMenu.addItem((menuItem) => {
            const order = plugin.settings.sortReverse ? `${high} to ${low}` : `${low} to ${high}`;
            menuItem.setTitle(`${label} (${order})`);
            menuItem.setIcon(value === plugin.settings.sortFilesBy ? 'checkmark' : 'spaceIcon');
            menuItem.onClick(() => changeSortSettingTo(value));
        });
    };
    addMenuItem('File Name', 'A', 'Z', 'name');
    addMenuItem('Created', 'New', 'Old', 'created');
    addMenuItem('File Size', 'Big', 'Small', 'file-size');
    addMenuItem('Last Update', 'New', 'Old', 'last-update');
    sortMenu.addSeparator();
    sortMenu.addItem((menuItem) => {
        menuItem.setTitle('Reverse Order');
        menuItem.setIcon(plugin.settings.sortReverse ? 'checkmark' : 'spaceIcon');
        menuItem.onClick(() => {
            plugin.settings.sortReverse = !plugin.settings.sortReverse;
            plugin.saveSettings();
            forceUpdate();
        });
    });
    // Trigger
    sortMenu.showAtPosition({ x: e.pageX, y: e.pageY });
};
// Search Function
const searchAllRegex = new RegExp('all:(.*)?');
const searchTagRegex = new RegExp('tag:(.*)?');
const handleSearch = (params) => {
    let { e, activeFolderPath, setSearchPhrase, setOzFileList, setTreeHeader, plugin, focusedFolder } = params;
    var searchPhrase = e.target.value;
    setSearchPhrase(searchPhrase);
    var searchFolder = activeFolderPath;
    // Check Tag Regex in Search Phrase
    let tagRegexMatch = searchPhrase.match(searchTagRegex);
    if (tagRegexMatch) {
        setTreeHeader('Files with Tag');
        if (tagRegexMatch[1] === undefined || tagRegexMatch[1].replace(/\s/g, '').length === 0) {
            setOzFileList([]);
            return;
        }
        setOzFileList([
            ...getFilesWithTag({
                searchTag: tagRegexMatch[1],
                plugin: plugin,
                focusedFolder: focusedFolder,
            }),
        ]);
        return;
    }
    // Check All Regex in Search Phrase
    let allRegexMatch = searchPhrase.match(searchAllRegex);
    if (allRegexMatch) {
        searchPhrase = allRegexMatch[1] ? allRegexMatch[1] : '';
        searchFolder = plugin.settings.allSearchOnlyInFocusedFolder ? focusedFolder.path : '/';
        setTreeHeader('All Files');
    }
    else {
        setTreeHeader(getFolderName(activeFolderPath, plugin.app));
    }
    let getAllFiles = allRegexMatch ? true : false;
    let filteredFiles = getFilesWithName({
        searchPhrase,
        searchFolder,
        plugin,
        getAllFiles,
    });
    setOzFileList(filteredFiles);
};
// ----> NAV FILE COMPONENT HANDLERS <----- \\
// Handle Click Event on File - Allows Open with Cmd/Ctrl
const openFile = (params) => {
    let { file, e, plugin, setActiveOzFile } = params;
    openFile$1({
        file: file,
        app: plugin.app,
        newLeaf: (e.ctrlKey || e.metaKey) && !(e.shiftKey || e.altKey),
        leafBySplit: (e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey),
    });
    setActiveOzFile(file);
};
const getFileIcon = (params) => {
    let { file } = params;
    return file.extension === 'pdf'
        ? AiFillFilePdf
        : ['png', 'jpg', 'jpeg', 'svg'].contains(file.extension)
            ? AiFillFileImage
            : ['doc', 'docx'].contains(file.extension)
                ? AiFillFileWord
                : BiFile;
};
// --> Dragging for File
const dragStarted = (params) => {
    let { e, file, plugin } = params;
    // json to move file to folder
    e.dataTransfer.setData('application/json', JSON.stringify({ filePath: file.path }));
    // Obsidian Internal Dragmanager
    plugin.app.dragManager.onDragStart(e, {
        icon: plugin.ICON,
        source: undefined,
        title: file.basename + '.' + file.extension,
        type: 'file',
        file: file,
    });
    plugin.app.dragManager.dragFile(e, file, true);
};
// --> AuxClick (Mouse Wheel Button Action)
const onAuxClick = (params) => {
    let { e, plugin, file } = params;
    if (e.button === 1)
        openFileInNewTab(plugin.app, file);
};
const mouseEnteredOnFile = (params) => {
    let { e, file, plugin, setHoverActive } = params;
    setHoverActive(true);
    if (plugin.settings.filePreviewOnHover && (e.ctrlKey || e.metaKey)) {
        plugin.app.workspace.trigger('link-hover', {}, e.target, file.path, file.path);
    }
};
const mouseLeftFile = (params) => {
    params.setHoverActive(false);
};
// Handle Right Click Event on File - Custom Menu
const triggerContextMenu = (params) => {
    let { file, e, ozPinnedFiles, setOzPinnedFiles, plugin } = params;
    const fileMenu = new obsidian.Menu();
    let fileToTrigger = plugin.app.vault.getAbstractFileByPath(file.path);
    if (!fileToTrigger)
        return;
    // Pin - Unpin Item
    fileMenu.addItem((menuItem) => {
        menuItem.setIcon('pin');
        if (ozPinnedFiles.contains(file))
            menuItem.setTitle('Unpin');
        else
            menuItem.setTitle('Pin to Top');
        menuItem.onClick((ev) => {
            if (ozPinnedFiles.contains(file)) {
                let newPinnedFiles = ozPinnedFiles.filter((pinnedFile) => pinnedFile !== file);
                setOzPinnedFiles(newPinnedFiles);
            }
            else {
                setOzPinnedFiles([...ozPinnedFiles, file]);
            }
        });
    });
    // Rename Item
    fileMenu.addItem((menuItem) => {
        menuItem.setTitle('Rename');
        menuItem.setIcon('pencil');
        menuItem.onClick((ev) => {
            let vaultChangeModal = new VaultChangeModal(plugin, file, 'rename');
            vaultChangeModal.open();
        });
    });
    // Delete Item
    fileMenu.addItem((menuItem) => {
        menuItem.setTitle('Delete');
        menuItem.setIcon('trash');
        menuItem.onClick((ev) => {
            let confirmationModal = new ConfirmationModal(plugin, `Are you sure you want to delete the file "${file.basename}${file.extension === 'md' ? '' : file.extension}"?`, function () {
                let deleteOption = plugin.settings.deleteFileOption;
                let fileToDelete = plugin.app.vault.getAbstractFileByPath(file.path);
                if (!fileToDelete)
                    return;
                if (deleteOption === 'permanent') {
                    plugin.app.vault.delete(fileToDelete, true);
                }
                else if (deleteOption === 'system-trash') {
                    plugin.app.vault.trash(fileToDelete, true);
                }
                else if (deleteOption === 'trash') {
                    plugin.app.vault.trash(fileToDelete, false);
                }
            });
            confirmationModal.open();
        });
    });
    // Open in a New Pane
    fileMenu.addItem((menuItem) => {
        menuItem.setIcon('go-to-file');
        menuItem.setTitle('Open in a new tab');
        menuItem.onClick((ev) => {
            openFileInNewTab(plugin.app, file);
        });
    });
    // Open in a New Pane
    fileMenu.addItem((menuItem) => {
        menuItem.setIcon('go-to-file');
        menuItem.setTitle('Open to right');
        menuItem.onClick((ev) => {
            openFileInNewTabGroup(plugin.app, file);
        });
    });
    // Make a Copy Item
    fileMenu.addItem((menuItem) => {
        menuItem.setTitle('Make a copy');
        menuItem.setIcon('documents');
        menuItem.onClick((ev) => {
            let fileToCopy = plugin.app.vault.getAbstractFileByPath(file.path);
            if (fileToCopy) {
                plugin.app.vault.copy(fileToCopy, `${file.parent.path}/${file.basename} 1.${file.extension}`);
            }
        });
    });
    // Move Item
    if (!internalPluginLoaded('file-explorer', plugin.app)) {
        fileMenu.addItem((menuItem) => {
            menuItem.setTitle('Move file to...');
            menuItem.setIcon('paper-plane');
            menuItem.onClick((ev) => {
                let fileMoveSuggester = new MoveSuggestionModal(plugin.app, file);
                fileMoveSuggester.open();
            });
        });
    }
    // Trigger
    plugin.app.workspace.trigger('file-menu', fileMenu, fileToTrigger, 'file-explorer');
    if (isMouseEvent(e)) {
        fileMenu.showAtPosition({ x: e.pageX, y: e.pageY });
    }
    else {
        // @ts-ignore
        fileMenu.showAtPosition({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
    }
    return false;
};

var h=Object.defineProperty;var u=(n,t,e)=>t in n?h(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var c=(n,t,e)=>(u(n,typeof t!="symbol"?t+"":t,e),e);const p=(n,t)=>typeof getComputedStyle<"u"?getComputedStyle(n,null).getPropertyValue(t):n.style.getPropertyValue(t),y=n=>p(n,"overflow")+p(n,"overflow-y")+p(n,"overflow-x"),w=n=>{if(!(n instanceof HTMLElement))return window;let t=n;for(;t&&!(t===document.body||t===document.documentElement||!t.parentNode);){if(/(scroll|auto)/.test(y(t)))return t;t=t.parentNode;}return window;};class g extends reactExports.Component{constructor(e){super(e);c(this,"elementObserver");c(this,"wrapper");c(this,"lazyLoadHandler",e=>{var o,i;const{onContentVisible:s}=this.props,[r]=e,{isIntersecting:l}=r;if(l){this.setState({visible:!0},()=>{s&&s();});const a=(o=this.wrapper)==null?void 0:o.current;a&&a instanceof HTMLElement&&((i=this.elementObserver)==null||i.unobserve(a));}});this.elementObserver=null,this.wrapper=/*#__PURE__*/React.createRef(),this.state={visible:!1};}componentDidMount(){var o;this.getEventNode();const{offset:e,threshold:s}=this.props,r={rootMargin:typeof e=="number"?`${e}px`:e||"0px",threshold:s||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,r);const l=(o=this.wrapper)==null?void 0:o.current;l instanceof HTMLElement&&this.elementObserver.observe(l);}shouldComponentUpdate(e,s){return s.visible;}componentWillUnmount(){var s,r;const e=(s=this.wrapper)==null?void 0:s.current;e&&e instanceof HTMLElement&&((r=this.elementObserver)==null||r.unobserve(e));}getEventNode(){var e;return w((e=this.wrapper)==null?void 0:e.current);}render(){const{children:e,className:s,height:r,width:l,elementType:o}=this.props,{visible:i}=this.state,a={height:r,width:l},d=`LazyLoad${i?" is-visible":""}${s?` ${s}`:""}`;return/*#__PURE__*/reactExports.createElement(o||"div",{className:d,style:a,ref:this.wrapper},i&&reactExports.Children.only(e));}}c(g,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null});

function FileComponent(props) {
    let searchInput = React.useRef(null);
    const plugin = props.plugin;
    // States Coming From Main Component
    const [_view, setView] = Recoil_index_22(view);
    const [ozFileList$1, setOzFileList] = Recoil_index_22(ozFileList);
    const [ozPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeFolderPath$1, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedExtensions$1] = Recoil_index_22(excludedExtensions);
    const [excludedFolders$1] = Recoil_index_22(excludedFolders);
    const [showSubFolders$1, setShowSubFolders] = Recoil_index_22(showSubFolders);
    const [focusedFolder$1, _setFocusedFolder] = Recoil_index_22(focusedFolder);
    // Local States
    const [highlight, setHighlight] = reactExports.useState(false);
    const [searchPhrase, setSearchPhrase] = reactExports.useState('');
    const [searchBoxVisible, setSearchBoxVisible] = reactExports.useState(false);
    const [treeHeader, setTreeHeader] = reactExports.useState(getFolderName(activeFolderPath$1, plugin.app));
    // Force Update
    const forceUpdate = useForceUpdate();
    // Folder Name Update once Active Folder Path Change
    reactExports.useEffect(() => setTreeHeader(getFolderName(activeFolderPath$1, plugin.app)), [activeFolderPath$1]);
    // File List Update once showSubFolders change
    reactExports.useEffect(() => {
        setOzFileList(getFilesUnderPath(activeFolderPath$1, plugin));
    }, [showSubFolders$1]);
    // To focus on Search box if visible set
    reactExports.useEffect(() => {
        if (searchBoxVisible)
            searchInput.current.focus();
    }, [searchBoxVisible]);
    const filesToList = reactExports.useMemo(() => customFiles({
        fileList: ozFileList$1,
        excludedExtensions: excludedExtensions$1,
        excludedFolders: excludedFolders$1,
        plugin: plugin,
        ozPinnedFiles: ozPinnedFiles,
    }), [excludedFolders$1, excludedExtensions$1, ozPinnedFiles, ozFileList$1, plugin.settings.sortFilesBy, plugin.settings.sortReverse]);
    // Go Back Button - Sets Main Component View to Folder
    const handleGoBack = (e) => {
        setView('folder');
        setActiveFolderPath('');
    };
    // Toggle Search Box Visibility State
    const toggleSearchBox = () => {
        setSearchPhrase('');
        setSearchBoxVisible(!searchBoxVisible);
        setOzFileList(getFilesUnderPath(activeFolderPath$1, plugin));
    };
    const toggleShowSubFolders = () => __awaiter(this, void 0, void 0, function* () {
        plugin.settings.showFilesFromSubFolders = !showSubFolders$1;
        yield plugin.saveSettings();
        setShowSubFolders(!showSubFolders$1);
    });
    const topIconSize = 19;
    return (React.createElement(React.Fragment, null,
        React.createElement(Dropzone$1, { onDrop: (files) => handleOnDropFiles({
                files,
                activeFolderPath: activeFolderPath$1,
                plugin,
            }), noClick: true, onDragEnter: () => setHighlight(true), onDragLeave: () => setHighlight(false), onDropAccepted: () => setHighlight(false), onDropRejected: () => setHighlight(false) }, ({ getRootProps, getInputProps }) => (React.createElement("div", Object.assign({}, getRootProps(), { className: highlight ? 'drag-entered' : '', style: { width: '100%', height: '100%', position: 'relative' } }),
            React.createElement("input", Object.assign({}, getInputProps())),
            React.createElement("div", { className: "oz-explorer-container" },
                React.createElement("div", { className: `oz-file-tree-header-wrapper${plugin.settings.fixedHeaderInFileList ? ' file-tree-header-fixed' : ''}` },
                    React.createElement("div", { className: "oz-flex-container" },
                        React.createElement("div", { className: "oz-nav-action-button", style: { marginLeft: '0px' } }, ['Horizontal', 'Vertical'].includes(plugin.settings.evernoteView) ? (React.createElement(IoIosCloseCircleOutline, { onClick: (e) => handleGoBack(), size: topIconSize, "aria-label": "Close File Pane" })) : (React.createElement(IoIosArrowBack, { onClick: (e) => handleGoBack(), size: topIconSize, "aria-label": "Go Back to Folder View" }))),
                        React.createElement("div", { className: "oz-nav-buttons-right-block" },
                            plugin.settings.revealActiveFileButton && (React.createElement("div", { className: "oz-nav-action-button" },
                                React.createElement(BiCurrentLocation, { onClick: () => handleRevealActiveFileButton({ plugin }), size: topIconSize, "aria-label": "Reveal Active File" }))),
                            plugin.settings.showFilesFromSubFoldersButton && (React.createElement("div", { className: "oz-nav-action-button" }, showSubFolders$1 ? (React.createElement(IoIosEyeOff, { onClick: toggleShowSubFolders, size: topIconSize, "aria-label": "Hide Files from Sub-Folders" })) : (React.createElement(IoIosEye, { onClick: toggleShowSubFolders, size: topIconSize, "aria-label": "Show Files from Sub-Folders" })))),
                            plugin.settings.searchFunction && (React.createElement("div", { className: "oz-nav-action-button" },
                                React.createElement(IoIosSearch, { onClick: toggleSearchBox, size: topIconSize, "aria-label": "Search File by Name or Tag" }))),
                            React.createElement("div", { className: "oz-nav-action-button" },
                                React.createElement(CgSortAz, { size: topIconSize + 2, onClick: (e) => {
                                        sortFileListClickHandle({ e, plugin, forceUpdate });
                                    }, "aria-label": "Sorting Options" })),
                            React.createElement("div", { className: "oz-nav-action-button" },
                                React.createElement(IoIosAddCircle, { onClick: (e) => createNewFile(e, activeFolderPath$1, plugin), size: topIconSize, "aria-label": "Create a Note" })))),
                    searchBoxVisible && (React.createElement("div", { className: "oz-input-container" },
                        React.createElement("input", { type: "search", placeholder: "Search...", ref: searchInput, value: searchPhrase, onChange: (e) => {
                                handleSearch({
                                    e,
                                    plugin,
                                    activeFolderPath: activeFolderPath$1,
                                    setSearchPhrase,
                                    setTreeHeader,
                                    setOzFileList,
                                    focusedFolder: focusedFolder$1,
                                });
                            }, onKeyDown: (e) => {
                                if (e.key === 'Escape') {
                                    e.preventDefault();
                                    toggleSearchBox();
                                }
                            } }))),
                    React.createElement("div", { className: "oz-file-tree-header" }, treeHeader)),
                React.createElement("div", { className: `oz-file-tree-files${plugin.settings.fixedHeaderInFileList
                        ? searchBoxVisible
                            ? ' file-tree-files-fixed-with-search'
                            : ' file-tree-files-fixed'
                        : ''}` }, filesToList.map((file, index) => {
                    return (React.createElement(g, { height: 19, key: index },
                        React.createElement(NavFile, { file: file, plugin: plugin })));
                }))))))));
}
/* ----------- SINGLE NAVFILE ELEMENT ----------- */
const NavFile = (props) => {
    const { file, plugin } = props;
    const [ozPinnedFiles, setOzPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [activeOzFile, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const [hoverActive, setHoverActive] = reactExports.useState(false);
    const longPressEvents = useLongPress((e) => {
        triggerContextMenu({
            file,
            e,
            plugin,
            ozPinnedFiles,
            setOzPinnedFiles,
        });
    }, 500);
    reactExports.useEffect(() => {
        const handleKeyDownEvent = (e) => {
            if (e.key === 'Control' || e.key === 'Meta') {
                let el = document.querySelector(`.oz-nav-file-title[data-path="${file.path}"]`);
                if (el)
                    plugin.app.workspace.trigger('link-hover', {}, el, file.path, file.path);
            }
        };
        if (hoverActive && plugin.settings.filePreviewOnHover) {
            document.addEventListener('keydown', handleKeyDownEvent);
            return () => {
                document.removeEventListener('keydown', handleKeyDownEvent);
            };
        }
    }, [hoverActive]);
    const FileIcon = reactExports.useMemo(() => getFileIcon({
        file,
    }), [plugin.settings.iconBeforeFileName]);
    const fileDisplayName = reactExports.useMemo(() => {
        return plugin.settings.showFileNameAsFullPath ? getFileNameAndExtension(file.path).fileName : file.basename;
    }, [plugin.settings.showFileNameAsFullPath, file.path]);
    return (React.createElement("div", Object.assign({ className: 'oz-nav-file' + (activeOzFile && activeOzFile.path === file.path ? ' is-active' : ''), key: file.path, draggable: true, onDragStart: (e) => dragStarted({
            e,
            file,
            plugin,
        }), onClick: (e) => openFile({
            e,
            file,
            plugin,
            setActiveOzFile,
        }), onAuxClick: (e) => onAuxClick({ e, plugin, file }), onContextMenu: (e) => triggerContextMenu({
            e,
            file,
            plugin,
            ozPinnedFiles,
            setOzPinnedFiles,
        }), onMouseEnter: (e) => mouseEnteredOnFile({
            e,
            file,
            plugin,
            setHoverActive,
        }), onMouseLeave: (e) => mouseLeftFile({ e, file, setHoverActive }) }, longPressEvents),
        React.createElement("div", { className: "oz-nav-file-title", "data-path": file.path },
            React.createElement("div", { className: "oz-nav-file-title-content" },
                plugin.settings.iconBeforeFileName && React.createElement(FileIcon, { className: "oz-nav-file-icon", size: 15 }),
                fileDisplayName),
            ozPinnedFiles.contains(file) && React.createElement(FaThumbtack, { className: "oz-nav-file-tag", size: 14 }),
            file.extension !== 'md' && React.createElement("span", { className: "oz-nav-file-tag" }, file.extension))));
};

function Tree(props) {
    // Global States
    const [openFolders$1, setOpenFolders] = Recoil_index_22(openFolders);
    const [folderFileCountMap$1] = Recoil_index_22(folderFileCountMap);
    const [activeFolderPath$1] = Recoil_index_22(activeFolderPath);
    const longPressEvents = useLongPress((e) => {
        props.onContextMenu(e);
    }, 500);
    // Local States
    const [open, setOpen] = reactExports.useState(props.open);
    const [highlight, setHightlight] = reactExports.useState(false);
    const isFolderActive = props.folder.path === activeFolderPath$1;
    // --> For state update from outside of the component
    reactExports.useEffect(() => setOpen(props.open), [props.open]);
    // --> Icon to be toggled between min(-) and plus(+) Each click sets openFolders Main Component state to save in settings
    const toggle = () => {
        if (props.children) {
            // Set State in Main Component for Keeping Folders Open
            if (!open) {
                setOpenFolders([...openFolders$1, props.folder.path]);
            }
            else {
                const newOpenFolders = openFolders$1.filter((openFolder) => props.folder.path !== openFolder);
                setOpenFolders(newOpenFolders);
            }
            // Set State Open for the Folder
            setOpen(!open);
        }
    };
    // --> Function After an External File Dropped into Folder Name
    const onDrop = (files) => {
        files.map((file) => __awaiter(this, void 0, void 0, function* () {
            file.arrayBuffer().then((arrayBuffer) => {
                props.plugin.app.vault.adapter.writeBinary(props.folder.path + '/' + file.name, arrayBuffer);
            });
        }));
    };
    // --> Click Events
    const folderNameClickEvent = (ev) => {
        if (props.plugin.settings.folderNote && ev.shiftKey) {
            const fileFullPath = `${props.folder.path}/${props.folder.name}.md`;
            props.plugin.app.vault.getAbstractFileByPath(fileFullPath);
            props.plugin.app.workspace.openLinkText(fileFullPath, '/', false);
        }
        else {
            props.onClick();
        }
    };
    const folderContextMenuEvent = () => props.onContextMenu();
    const folderNameDoubleClickEvent = (ev) => {
        setOpen(true);
        props.onDoubleClick();
    };
    // --> Icon
    const Icon = reactExports.useMemo(() => getFolderIcon(props.plugin, props.children, open), [open, props.children]);
    // --> Folder Count Map
    const folderCount = folderFileCountMap$1[props.folder.path];
    // --> Drag and Drop Actions
    const dropFileOrFolder = (e) => {
        let data = e.dataTransfer.getData('application/json');
        if (data !== '') {
            let dataJson = JSON.parse(data);
            // File Drop
            if (dataJson['filePath']) {
                const filePath = dataJson.filePath;
                // check if file exists
                let file = props.plugin.app.vault.getAbstractFileByPath(filePath);
                if (file) {
                    props.plugin.app.vault.rename(file, `${props.folder.path}/${file.name}`);
                }
                else {
                    new obsidian.Notice('Couldnt find the file');
                }
            }
            // Folder Drop
            else if (dataJson['folderPath']) {
                const folderPath = dataJson.folderPath;
                let folder = props.plugin.app.vault.getAbstractFileByPath(folderPath);
                if (folder) {
                    if (!props.folder.path.startsWith(folder.path)) {
                        props.plugin.app.vault.rename(folder, `${props.folder.path}/${folder.name}`);
                    }
                    else {
                        new obsidian.Notice('You cant move folder under its child');
                    }
                }
                else {
                    new obsidian.Notice('Couldnt find the folder');
                }
            }
        }
        setHightlight(false);
        e.dataTransfer.clearData();
    };
    const onFolderDragStart = (e, folder) => {
        e.dataTransfer.setData('application/json', JSON.stringify({ folderPath: folder.path }));
    };
    return (React.createElement(Dropzone$1, { onDrop: onDrop, noClick: true, onDragEnter: () => setHightlight(true), onDragLeave: () => setHightlight(false), onDropAccepted: () => setHightlight(false), onDropRejected: () => setHightlight(false) }, ({ getRootProps, getInputProps }) => (React.createElement(React.Fragment, null,
        React.createElement("div", { style: Object.assign({}, props.style), className: "treeview", draggable: true, onDragStart: (e) => onFolderDragStart(e, props.folder), onDrop: (e) => dropFileOrFolder(e), onDragOver: () => setHightlight(true), onDragLeave: () => setHightlight(false) },
            React.createElement("div", Object.assign({}, getRootProps({ className: 'dropzone' }), { className: 'oz-folder-element' + (highlight ? ' drag-entered' : ''), "data-path": props.folder.path }),
                React.createElement("input", Object.assign({}, getInputProps())),
                React.createElement("div", { className: "oz-folder-line" },
                    React.createElement("div", { className: "oz-icon-div" },
                        React.createElement(Icon, { className: "oz-folder-toggle", style: { opacity: props.children ? 1 : 0.3 }, onClick: toggle })),
                    React.createElement("div", Object.assign({ className: "oz-folder-block", onClick: folderNameClickEvent, onDoubleClick: folderNameDoubleClickEvent, onContextMenu: folderContextMenuEvent }, longPressEvents),
                        React.createElement("div", { className: "oz-folder-type", style: { marginRight: props.type ? 10 : 0 } }, props.type),
                        React.createElement("div", { className: `oz-folder-name ${isFolderActive ? 'is-folder-active' : ''}${props.isRootFolder ? ' is-root-folder' : ''}` },
                            props.content,
                            ' ',
                            props.plugin.settings.folderNote && props.folder.children.some((f) => f.name === `${props.folder.name}.md`) ? (React.createElement(IoMdArrowDropright, { size: 10, className: "oz-folder-note-icon" })) : ('')),
                        props.plugin.settings.folderCount && (React.createElement("div", { className: "oz-folder-count" },
                            React.createElement("span", { className: "oz-nav-file-tag" }, folderCount ? (open ? folderCount.open : folderCount.closed) : 0))))))),
        props.children && (React.createElement("div", { className: "oz-folder-contents", style: {
                height: open ? 'auto' : 0,
                opacity: open ? 1 : 0,
                display: open ? 'inherit' : 'none',
            } }, props.children))))));
}

const ConditionalRootFolderWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

function NestedFolders(props) {
    const plugin = props.plugin;
    const app = plugin.app;
    let rootFolder = app.vault.getRoot();
    // Global States
    const [openFolders$1] = Recoil_index_22(openFolders);
    const [activeFolderPath$1, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [excludedFolders$1, setExcludedFolders] = Recoil_index_22(excludedFolders);
    const [focusedFolder$1, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [folderFileCountMap$1] = Recoil_index_22(folderFileCountMap);
    const [_view, setView] = Recoil_index_22(view);
    const handleFolderNameClick = (folderPath) => setActiveFolderPath(folderPath);
    const handleFolderNameDoubleClick = (folder) => {
        setFocusedFolder(folder);
    };
    const getSortedFolderTree = (folderTree) => {
        let newTree = folderTree;
        if (excludedFolders$1.length > 0) {
            newTree = newTree.filter((tree) => !excludedFolders$1.contains(tree.folder.path));
        }
        newTree = newTree.sort((a, b) => {
            if (plugin.settings.sortFoldersBy === 'name') {
                return a.folder.name.localeCompare(b.folder.name, 'en', { numeric: true });
            }
            else if (plugin.settings.sortFoldersBy === 'item-number') {
                let aCount = folderFileCountMap$1[a.folder.path] ? folderFileCountMap$1[a.folder.path].closed : 0;
                let bCount = folderFileCountMap$1[b.folder.path] ? folderFileCountMap$1[b.folder.path].closed : 0;
                return bCount - aCount;
            }
        });
        return newTree;
    };
    const handleFolderContextMenu = (params) => {
        let { event, folder } = params;
        // Event Undefined Correction
        let e = event;
        if (event === undefined)
            e = window.event;
        // Menu Items
        const folderMenu = new obsidian.Menu();
        // Focus Items
        if (hasChildFolder(folder)) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus on Folder')
                    .setIcon('zoomInIcon')
                    .onClick(() => setFocusedFolder(folder));
            });
        }
        if (!focusedFolder$1.isRoot()) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus Back to Root')
                    .setIcon('zoomOutIcon')
                    .onClick(() => setFocusedFolder(rootFolder));
            });
        }
        // CRUD Items
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('New Folder')
                .setIcon('folder')
                .onClick((ev) => {
                let vaultChangeModal = new VaultChangeModal(plugin, folder, 'create folder');
                vaultChangeModal.open();
            });
        });
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('Delete')
                .setIcon('trash')
                .onClick((ev) => {
                let confirmationModal = new ConfirmationModal(plugin, `Are you sure you want to delete folder "${folder.name}" and all folders & files under it?`, () => {
                    let deleteOption = plugin.settings.deleteFileOption;
                    if (deleteOption === 'permanent') {
                        plugin.app.vault.delete(folder, true);
                    }
                    else if (deleteOption === 'system-trash') {
                        plugin.app.vault.trash(folder, true);
                    }
                    else if (deleteOption === 'trash') {
                        plugin.app.vault.trash(folder, false);
                    }
                    if (activeFolderPath$1 === folder.path) {
                        setActiveFolderPath('');
                        setView('folder');
                    }
                });
                confirmationModal.open();
            });
        });
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('Rename')
                .setIcon('pencil')
                .onClick((ev) => {
                let vaultChangeModal = new VaultChangeModal(plugin, folder, 'rename');
                vaultChangeModal.open();
            });
        });
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('New File')
                .setIcon('document')
                .onClick((ev) => {
                createNewFile(ev, folder.path, plugin);
            });
        });
        // Move Item
        if (!internalPluginLoaded('file-explorer', app)) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Move folder to...')
                    .setIcon('paper-plane')
                    .onClick((ev) => {
                    let folderMoveModal = new MoveSuggestionModal(app, folder);
                    folderMoveModal.open();
                });
            });
        }
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('Add to Excluded Folders')
                .setIcon('switch')
                .onClick((ev) => {
                setExcludedFolders([...excludedFolders$1, folder.path]);
            });
        });
        // Folder Note Open & Create & Delete (If folder note loaded, avoid duplicate create, delete buttons)
        const folderNotePath = `${folder.path}/${folder.name}.md`;
        let folderNoteExists = folder.children.some((f) => `${folder.name}.md` === f.name);
        if (folderNoteExists) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Open Folder Note')
                    .setIcon('go-to-file')
                    .onClick((ev) => {
                    plugin.app.workspace.activeLeaf.setViewState({
                        type: 'markdown',
                        state: { file: folderNotePath },
                    });
                });
            });
        }
        if (!pluginIsLoaded(plugin.app, 'folder-note-core')) {
            // Delete Folder Note Button
            if (folderNoteExists) {
                folderMenu.addItem((menuItem) => {
                    menuItem
                        .setTitle('Delete Folder Note')
                        .setIcon('trash')
                        .onClick((ev) => {
                        const folderNoteFile = plugin.app.vault.getAbstractFileByPath(folderNotePath);
                        if (folderNoteFile)
                            plugin.app.vault.delete(folderNoteFile, true);
                    });
                });
            }
            // Create Folder Note Button
            else {
                folderMenu.addItem((menuItem) => {
                    menuItem
                        .setTitle('Create Folder Note')
                        .setIcon('create-new')
                        .onClick((ev) => __awaiter(this, void 0, void 0, function* () {
                        createNewMarkdownFile(plugin, folder, folder.name, `# ${folder.name}`);
                    }));
                });
            }
        }
        // Trigger
        app.workspace.trigger('file-menu', folderMenu, folder, 'file-explorer');
        if (e instanceof MouseEvent) {
            folderMenu.showAtPosition({ x: e.pageX, y: e.pageY });
        }
        else {
            folderMenu.showAtPosition({ x: 0, y: 0 });
        }
        return false;
    };
    if (!props.folderTree.children)
        return null;
    let sortedFolderTree = reactExports.useMemo(() => getSortedFolderTree(props.folderTree.children), [props.folderTree.children, excludedFolders$1, plugin.settings.sortFoldersBy]);
    return (React.createElement(React.Fragment, null, Array.isArray(props.folderTree.children) &&
        sortedFolderTree.map((child) => {
            return (React.createElement(React.Fragment, { key: child.folder.path }, child.folder.children.some((child) => child instanceof obsidian.TFolder) ? (React.createElement(Tree, { plugin: plugin, content: child.folder.name, open: openFolders$1.contains(child.folder.path), onClick: () => handleFolderNameClick(child.folder.path), onDoubleClick: () => handleFolderNameDoubleClick(child.folder), onContextMenu: (e) => handleFolderContextMenu({
                    event: e,
                    folder: child.folder,
                }), folder: child.folder },
                React.createElement(NestedFolders, { plugin: plugin, folderTree: child }))) : (React.createElement(Tree, { plugin: plugin, content: child.folder.name, onClick: () => handleFolderNameClick(child.folder.path), onDoubleClick: () => handleFolderNameDoubleClick(child.folder), onContextMenu: (e) => handleFolderContextMenu({
                    event: e,
                    folder: child.folder,
                }), folder: child.folder }))));
        })));
}

function MainFolder(props) {
    const treeStyles = { color: 'var(--text-muted)', fill: '#c16ff7', width: '100%' };
    const plugin = props.plugin;
    const app = plugin.app;
    const rootFolder = app.vault.getRoot();
    // Global States
    const [_activeFolderPath, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [folderTree$1] = Recoil_index_22(folderTree);
    const [focusedFolder$1, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [_openFolders, setOpenFolders] = Recoil_index_22(openFolders);
    // Force Update
    const forceUpdate = useForceUpdate();
    const createFolder = (underFolder) => {
        let vaultChangeModal = new VaultChangeModal(plugin, underFolder, 'create folder');
        vaultChangeModal.open();
    };
    const handleRootFolderContextMenu = (event, folder) => {
        // Event Undefined Correction
        let e = event;
        if (event === undefined)
            e = window.event;
        // Menu Items
        const folderMenu = new obsidian.Menu();
        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('New Folder')
                .setIcon('folder')
                .onClick((ev) => createFolder(folder));
        });
        if (!folder.isRoot()) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus Back to Root')
                    .setIcon('zoomOutDoubleIcon')
                    .onClick(() => setFocusedFolder(rootFolder));
            });
        }
        if (folder.parent && !folder.parent.isRoot() && folder.parent !== focusedFolder$1) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus to Parent Folder')
                    .setIcon('zoomOutIcon')
                    .onClick(() => setFocusedFolder(folder.parent));
            });
        }
        // Trigger
        app.workspace.trigger('root-folder-menu', folderMenu, folder);
        folderMenu.showAtPosition({ x: e.pageX, y: e.pageY });
        return false;
    };
    // --> Collapse, Expland Button Functions
    const collapseAllFolders = () => setOpenFolders([]);
    const explandAllFolders = () => {
        let newOpenFolders = [];
        newOpenFolders.push(folderTree$1.folder.path);
        const recursiveFx = (folderTreeChildren) => {
            for (let folderTreeChild of folderTreeChildren) {
                newOpenFolders.push(folderTreeChild.folder.path);
                if (folderTreeChild.children.length > 0) {
                    recursiveFx(folderTreeChild.children);
                }
            }
        };
        recursiveFx(folderTree$1.children);
        setOpenFolders(newOpenFolders);
    };
    const triggerFolderSortOptions = (e) => {
        const sortMenu = new obsidian.Menu();
        const changeSortSettingTo = (newValue) => {
            plugin.settings.sortFoldersBy = newValue;
            plugin.saveSettings();
            forceUpdate();
        };
        sortMenu.addItem((menuItem) => {
            menuItem.setTitle('Folder Name (A to Z)');
            menuItem.onClick((ev) => {
                changeSortSettingTo('name');
            });
        });
        if (plugin.settings.folderCount) {
            sortMenu.addItem((menuItem) => {
                menuItem.setTitle('Item Numbers (Bigger to Smaller)');
                menuItem.onClick((ev) => {
                    changeSortSettingTo('item-number');
                });
            });
        }
        // Trigger
        plugin.app.workspace.trigger('sort-menu', sortMenu);
        sortMenu.showAtPosition({ x: e.pageX, y: e.pageY });
        return false;
    };
    const handleFolderNameDoubleClick = (folder) => {
        if (!folder.isRoot())
            setFocusedFolder(folder.parent);
    };
    let folderActionItemSize = 22;
    return (React.createElement("div", { className: "oz-folders-tree-wrapper" },
        React.createElement("div", { className: "oz-folders-action-items file-tree-header-fixed" },
            React.createElement(MdOutlineCreateNewFolder, { className: "oz-nav-action-button", size: folderActionItemSize, onClick: (e) => createFolder(plugin.app.vault.getRoot()), "aria-label": "Create Folder" }),
            React.createElement(CgSortAz, { className: "oz-nav-action-button", size: folderActionItemSize, onClick: triggerFolderSortOptions, "aria-label": "Sorting Options" }),
            React.createElement(CgChevronDoubleUp, { className: "oz-nav-action-button", size: folderActionItemSize, onClick: collapseAllFolders, "aria-label": "Collapse Folders" }),
            React.createElement(CgChevronDoubleDown, { className: "oz-nav-action-button", size: folderActionItemSize, onClick: explandAllFolders, "aria-label": "Expand Folders" })),
        React.createElement(ConditionalRootFolderWrapper, { condition: (focusedFolder$1 && !focusedFolder$1.isRoot()) || (focusedFolder$1 && focusedFolder$1.isRoot && plugin.settings.showRootFolder), wrapper: (children) => {
                return (React.createElement(Tree, { plugin: plugin, content: focusedFolder$1.isRoot() ? plugin.app.vault.getName() : focusedFolder$1.name, open: true, isRootFolder: focusedFolder$1.isRoot(), style: treeStyles, onClick: () => setActiveFolderPath(focusedFolder$1.path), onDoubleClick: () => handleFolderNameDoubleClick(focusedFolder$1), folder: focusedFolder$1, onContextMenu: (e) => handleRootFolderContextMenu(e, focusedFolder$1) }, children));
            } }, folderTree$1 && React.createElement(NestedFolders, { plugin: plugin, folderTree: folderTree$1 }))));
}

const SingleViewVertical = (props) => {
    let { plugin } = props;
    const [dividerOnMove, setDividerOnMove] = reactExports.useState(false);
    const [folderPaneHeight, setFolderPaneHeight] = reactExports.useState(null);
    const [clientY, setClientY] = reactExports.useState(null);
    let folderPaneRef = reactExports.useRef();
    let dividerRef = reactExports.useRef();
    let heightSetting = localStorage.getItem(plugin.keys.customHeightKey);
    reactExports.useEffect(() => {
        if (folderPaneHeight) {
            localStorage.setItem(plugin.keys.customHeightKey, folderPaneHeight.toString());
        }
    }, [folderPaneHeight]);
    function touchMouseStart(e) {
        e.preventDefault();
        setDividerOnMove(true);
        let height = dividerRef.current.offsetTop - folderPaneRef.current.offsetTop;
        setFolderPaneHeight(height);
        setClientY(e.nativeEvent.clientY);
    }
    function touchMouseMove(e) {
        e.preventDefault();
        if (!dividerOnMove)
            return;
        setFolderPaneHeight(folderPaneHeight + (e.nativeEvent.clientY - clientY));
        setClientY(e.nativeEvent.clientY);
    }
    function touchMouseEnd(e) {
        e.preventDefault();
        setDividerOnMove(false);
        setClientY(e.nativeEvent.clientY);
    }
    return (
    // Register Move & End Events for All File Tree Leaf
    React.createElement("div", { className: "file-tree-container", onMouseMove: (e) => touchMouseMove(e), onMouseUp: (e) => touchMouseEnd(e) },
        React.createElement("div", { className: "oz-folder-pane", ref: folderPaneRef, style: { height: folderPaneHeight ? `${folderPaneHeight}px` : heightSetting && heightSetting !== '' ? `${heightSetting}px` : '50%' } },
            React.createElement(MainFolder, { plugin: plugin })),
        React.createElement("div", { id: "file-tree-divider", ref: dividerRef, onClick: (e) => e.preventDefault(), onMouseDown: (e) => touchMouseStart(e), className: dividerOnMove ? 'active-divider' : '' }),
        React.createElement("div", { className: "oz-file-list-pane" },
            React.createElement(FileComponent, { plugin: plugin }))));
};
const SingleViewHorizontal = (props) => {
    let { plugin } = props;
    const [dividerOnMove, setDividerOnMove] = reactExports.useState(false);
    const [folderPaneWidth, setFolderPaneWidth] = reactExports.useState(null);
    const [clientX, setClientX] = reactExports.useState(null);
    let folderPaneRef = reactExports.useRef();
    let dividerRef = reactExports.useRef();
    let widthSetting = localStorage.getItem(plugin.keys.customWidthKey);
    reactExports.useEffect(() => {
        if (folderPaneWidth) {
            localStorage.setItem(plugin.keys.customWidthKey, folderPaneWidth.toString());
        }
    }, [folderPaneWidth]);
    function touchMouseStart(e) {
        e.preventDefault();
        setDividerOnMove(true);
        let width = dividerRef.current.offsetLeft - folderPaneRef.current.offsetLeft;
        setFolderPaneWidth(width);
        setClientX(e.nativeEvent.clientX);
    }
    function touchMouseMove(e) {
        e.preventDefault();
        if (!dividerOnMove)
            return;
        setFolderPaneWidth(folderPaneWidth + (e.nativeEvent.clientX - clientX));
        setClientX(e.nativeEvent.clientX);
    }
    function touchMouseEnd(e) {
        e.preventDefault();
        setDividerOnMove(false);
        setClientX(e.nativeEvent.clientX);
    }
    return (
    // Register Move & End Events for All File Tree Leaf
    React.createElement("div", { className: "file-tree-container-horizontal", onMouseMove: (e) => touchMouseMove(e), onMouseUp: (e) => touchMouseEnd(e) },
        React.createElement("div", { className: "oz-folder-pane-horizontal", ref: folderPaneRef, style: { width: folderPaneWidth ? `${folderPaneWidth}px` : widthSetting && widthSetting !== '' ? `${widthSetting}px` : '50%' } },
            React.createElement(MainFolder, { plugin: plugin })),
        React.createElement("div", { id: "file-tree-divider-horizontal", ref: dividerRef, onClick: (e) => e.preventDefault(), onMouseDown: (e) => touchMouseStart(e), className: dividerOnMove ? 'active-divider' : '' }),
        React.createElement("div", { className: "oz-file-list-pane-horizontal" },
            React.createElement(FileComponent, { plugin: plugin }))));
};

function MainTreeComponent(props) {
    // --> Main Variables
    const { plugin } = props;
    // --> Force Update Hook
    const forceUpdate = useForceUpdate();
    // --> Plugin States
    const [view$1, setView] = Recoil_index_22(view);
    const [activeFolderPath$1, setActiveFolderPath] = Recoil_index_22(activeFolderPath);
    const [ozFileList$1, setOzFileList] = Recoil_index_22(ozFileList);
    const [ozPinnedFiles, setOzPinnedFiles] = Recoil_index_22(ozPinnedFileList);
    const [openFolders$1, setOpenFolders] = Recoil_index_22(openFolders);
    const [_folderTree, setFolderTree] = Recoil_index_22(folderTree);
    const [excludedFolders$1, setExcludedFolders] = Recoil_index_22(excludedFolders);
    const [_folderFileCountMap, setFolderFileCountMap] = Recoil_index_22(folderFileCountMap);
    const [_excludedExtensions, setExcludedExtensions] = Recoil_index_22(excludedExtensions);
    const [_showSubFolders, setShowSubFolders] = Recoil_index_22(showSubFolders);
    const [focusedFolder$1, setFocusedFolder] = Recoil_index_22(focusedFolder);
    const [activeOZFile$1, setActiveOzFile] = Recoil_index_22(activeOZFile);
    const setNewFileList = (folderPath) => {
        let filesPath = folderPath ? folderPath : activeFolderPath$1;
        setOzFileList(getFilesUnderPath(filesPath, plugin));
    };
    const setInitialActiveFolderPath = () => {
        if (['Horizontal', 'Vertical'].includes(plugin.settings.evernoteView)) {
            let previousActiveFolder = localStorage.getItem(plugin.keys.activeFolderPathKey);
            if (previousActiveFolder) {
                let folder = plugin.app.vault.getAbstractFileByPath(previousActiveFolder);
                if (folder && folder instanceof obsidian.TFolder) {
                    setActiveFolderPath(folder.path);
                }
            }
        }
    };
    // --> Create Custom Event Handlers
    reactExports.useEffect(() => {
        window.addEventListener(eventTypes.vaultChange, vaultChangeEvent);
        window.addEventListener(eventTypes.activeFileChange, changeActiveFile);
        window.addEventListener(eventTypes.refreshView, forceUpdate);
        window.addEventListener(eventTypes.revealFile, handleRevealFileEvent);
        window.addEventListener(eventTypes.createNewNote, handleCreateNewNoteEvent);
        return () => {
            window.removeEventListener(eventTypes.vaultChange, vaultChangeEvent);
            window.removeEventListener(eventTypes.activeFileChange, changeActiveFile);
            window.removeEventListener(eventTypes.refreshView, forceUpdate);
            window.removeEventListener(eventTypes.revealFile, handleRevealFileEvent);
            window.removeEventListener(eventTypes.createNewNote, handleCreateNewNoteEvent);
        };
    }, []);
    const handleCreateNewNoteEvent = () => {
        let currentActiveFolderPath = '/';
        setActiveFolderPath((activeFolderPath) => {
            currentActiveFolderPath = activeFolderPath;
            return activeFolderPath;
        });
        createNewFile(null, currentActiveFolderPath, plugin);
    };
    const vaultChangeEvent = (evt) => {
        handleVaultChanges(evt.detail.file, evt.detail.changeType, evt.detail.oldPath);
    };
    const changeActiveFile = (evt) => {
        // @ts-ignore
        let filePath = evt.detail.filePath;
        let file = plugin.app.vault.getAbstractFileByPath(filePath);
        if (file)
            setActiveOzFile(TFile2OZFile(file));
    };
    // Initial Load
    reactExports.useEffect(() => {
        setInitialFocusedFolder();
        setExcludedFolders(getExcludedFolders());
        setExcludedExtensions(getExcludedExtensions());
        setOzPinnedFiles(getPinnedFilesFromSettings());
        setOpenFolders(getOpenFoldersFromSettings());
        setShowSubFolders(plugin.settings.showFilesFromSubFolders);
        setInitialActiveFolderPath();
        if (plugin.settings.folderCount)
            setFolderFileCountMap(getFolderNoteCountMap(plugin));
    }, []);
    // Each Focused Folder Change triggers new folder tree build
    reactExports.useEffect(() => {
        if (focusedFolder$1) {
            setFolderTree(createFolderTree(focusedFolder$1));
            localStorage.setItem(plugin.keys.focusedFolder, focusedFolder$1.path);
            setActiveFolderPath(focusedFolder$1.path);
        }
    }, [focusedFolder$1]);
    const setInitialFocusedFolder = () => {
        let localFocusedFolder = localStorage.getItem(plugin.keys.focusedFolder);
        if (localFocusedFolder) {
            let folder = plugin.app.vault.getAbstractFileByPath(localFocusedFolder);
            if (folder && folder instanceof obsidian.TFolder) {
                setFocusedFolder(folder);
                return;
            }
        }
        setFocusedFolder(plugin.app.vault.getRoot());
    };
    // State Change Handlers
    reactExports.useEffect(() => savePinnedFilesToSettings(), [ozPinnedFiles]);
    reactExports.useEffect(() => saveOpenFoldersToSettings(), [openFolders$1]);
    reactExports.useEffect(() => saveExcludedFoldersToSettings(), [excludedFolders$1]);
    // If activeFolderPath is set, it means it should go to 'file' view
    reactExports.useEffect(() => {
        if (activeFolderPath$1 !== '') {
            setNewFileList(activeFolderPath$1);
            setView('file');
        }
        localStorage.setItem(plugin.keys.activeFolderPathKey, activeFolderPath$1);
    }, [activeFolderPath$1]);
    // Load Excluded Extensions as State
    function getExcludedExtensions() {
        let extensionsString = plugin.settings.excludedExtensions;
        let excludedExtensions = [];
        for (let extension of extensionsString.split(',')) {
            excludedExtensions.push(extension.trim());
        }
        return excludedExtensions;
    }
    // Load Excluded Folders
    function getExcludedFolders() {
        let excludedString = plugin.settings.excludedFolders;
        let excludedFolders = [];
        if (excludedString) {
            for (let excludedFolder of excludedString.split(',')) {
                if (excludedFolder !== '')
                    excludedFolders.push(excludedFolder.trim());
            }
        }
        return excludedFolders;
    }
    // Load The String List and Set Open Folders State
    function getOpenFoldersFromSettings() {
        let openFolders = [];
        let localStorageOpenFolders = localStorage.getItem(plugin.keys.openFoldersKey);
        if (localStorageOpenFolders) {
            localStorageOpenFolders = JSON.parse(localStorageOpenFolders);
            for (let folder of localStorageOpenFolders) {
                let openFolder = plugin.app.vault.getAbstractFileByPath(folder);
                if (openFolder)
                    openFolders.push(openFolder.path);
            }
        }
        return openFolders;
    }
    // Load The String List anad Set Pinned Files State
    function getPinnedFilesFromSettings() {
        let pinnedFiles = [];
        let localStoragePinnedFiles = localStorage.getItem(plugin.keys.pinnedFilesKey);
        if (localStoragePinnedFiles) {
            localStoragePinnedFiles = JSON.parse(localStoragePinnedFiles);
            for (let file of localStoragePinnedFiles) {
                let pinnedFile = plugin.app.vault.getAbstractFileByPath(file);
                if (pinnedFile)
                    pinnedFiles.push(TFile2OZFile(pinnedFile));
            }
        }
        return pinnedFiles;
    }
    // Get The Folders State and Save in Data as String Array
    function saveOpenFoldersToSettings() {
        let openFoldersToSave = [];
        for (let folder of openFolders$1) {
            openFoldersToSave.push(folder);
        }
        localStorage.setItem(plugin.keys.openFoldersKey, JSON.stringify(openFoldersToSave));
    }
    // Get The Pinned Files State and Save in Data as String Array
    function savePinnedFilesToSettings() {
        let pinnedFilesToSave = [];
        for (let file of ozPinnedFiles) {
            pinnedFilesToSave.push(file.path);
        }
        localStorage.setItem(plugin.keys.pinnedFilesKey, JSON.stringify(pinnedFilesToSave));
    }
    // Save Excluded Folders to Settings as String
    function saveExcludedFoldersToSettings() {
        plugin.settings.excludedFolders = excludedFolders$1.length > 1 ? excludedFolders$1.join(', ') : excludedFolders$1[0];
        plugin.saveSettings();
    }
    // Function for Event Handlers
    function handleVaultChanges(file, changeType, oldPathBeforeRename) {
        // Get Current States from Setters
        let currentFocusedFolder = null;
        let currentActiveFolderPath = '';
        let currentView = '';
        let currentFileList = [];
        let currentActiveOZFile = null;
        setFocusedFolder((focusedFolder) => {
            currentFocusedFolder = focusedFolder;
            return focusedFolder;
        });
        setActiveFolderPath((activeFolderPath) => {
            currentActiveFolderPath = activeFolderPath;
            return activeFolderPath;
        });
        setView((view) => {
            currentView = view;
            return view;
        });
        setOzFileList((fileList) => {
            currentFileList = fileList;
            return fileList;
        });
        setActiveOzFile((activeOZFile) => {
            currentActiveOZFile = activeOZFile;
            return activeOZFile;
        });
        // File Event Handlers
        if (file instanceof obsidian.TFile) {
            if (currentView === 'file') {
                if (changeType === 'rename' || changeType === 'modify' || changeType === 'delete') {
                    // If the file is modified but sorting is not last-update to not component update unnecessarily, return
                    let sortFilesBy = plugin.settings.sortFilesBy;
                    if (changeType === 'modify') {
                        if (!(sortFilesBy === 'last-update' || sortFilesBy === 'file-size')) {
                            return;
                        }
                    }
                    // If the file renamed or deleted or modified is in the current view, it will be updated
                    let parentFolderPath = file.path.substring(0, file.path.lastIndexOf('/'));
                    let fileInCurrentView = currentFileList.some((f) => {
                        return changeType === 'rename' ? f.path === oldPathBeforeRename : f.path === file.path;
                    });
                    let fileInCurrentFolder = currentActiveFolderPath === parentFolderPath ||
                        (plugin.settings.showFilesFromSubFolders && parentFolderPath.startsWith(currentActiveFolderPath));
                    if (fileInCurrentView) {
                        if (changeType === 'delete') {
                            setOzFileList(currentFileList.filter((f) => {
                                return f.path !== file.path;
                            }));
                        }
                        else if (changeType === 'rename' ||
                            (changeType === 'modify' && (sortFilesBy === 'last-update' || sortFilesBy === 'file-size'))) {
                            // Fix for Root Folder Path
                            if (currentActiveFolderPath === '/')
                                currentActiveFolderPath = '';
                            // Set the file list
                            setOzFileList([
                                ...currentFileList.filter((f) => {
                                    return changeType === 'rename' ? f.path !== oldPathBeforeRename : f.path !== file.path;
                                }),
                                // Include any file that roles up to the current active folder, not only the direct ones
                                ...(file.parent.path.startsWith(currentActiveFolderPath) ? [TFile2OZFile(file)] : []),
                            ]);
                            // If active file is renamed, change the active file
                            if (changeType === 'rename' && currentActiveOZFile && currentActiveOZFile.path === oldPathBeforeRename) {
                                setActiveOzFile(TFile2OZFile(file));
                            }
                        }
                    }
                    // File is no in current view but parent folder is and should be included
                    else if (fileInCurrentFolder && !fileInCurrentView) {
                        setOzFileList([...currentFileList, TFile2OZFile(file)]);
                    }
                }
                else if (changeType === 'create') {
                    let fileIsCreatedUnderActiveFolder = file.path.match(new RegExp(currentActiveFolderPath + '.*'));
                    if (fileIsCreatedUnderActiveFolder) {
                        // If file is not already in the list, add into view
                        if (!currentFileList.some((f) => f.path === file.path)) {
                            setOzFileList([...currentFileList, TFile2OZFile(file)]);
                        }
                    }
                }
            }
        }
        // Folder Event Handlers
        else if (file instanceof obsidian.TFolder) {
            setFolderTree(createFolderTree(currentFocusedFolder));
            // if active folder is renamed, activefolderpath needs to be refreshed
            if (changeType === 'rename' && oldPathBeforeRename && currentActiveFolderPath === oldPathBeforeRename) {
                setActiveFolderPath(file.path);
            }
        }
        // After Each Vault Change Folder Count Map to Be Updated
        if (plugin.settings.folderCount && changeType !== 'modify') {
            setFolderFileCountMap(getFolderNoteCountMap(plugin));
        }
    }
    // ******** REVEAL ACTIVE FILE FUNCTIONS ******** //
    // --> During file list change, it will scroll to the active file element
    reactExports.useEffect(() => {
        if (activeOZFile$1 && ozFileList$1.length > 0)
            scrollToFile(activeOZFile$1);
    }, [ozFileList$1]);
    // Custom Event Handler Function
    function handleRevealFileEvent(evt) {
        // @ts-ignore
        const file = evt.detail.file;
        if (file && file instanceof obsidian.TFile) {
            revealFileInFileTree(TFile2OZFile(file));
        }
        else {
            new obsidian.Notice('No active file');
        }
    }
    // Scrolling Functions
    function scrollToFile(fileToScroll) {
        const selector = `div.oz-file-tree-files div.oz-nav-file-title[data-path="${fileToScroll.path}"]`;
        const fileTitleElement = document.querySelector(selector);
        if (fileTitleElement)
            fileTitleElement.scrollIntoView(false);
    }
    function scrollToFolder(folder) {
        const selector = `div.oz-folder-contents div.oz-folder-element[data-path="${folder.path}"]`;
        const folderElement = document.querySelector(selector);
        if (folderElement)
            folderElement.scrollIntoView(false);
    }
    // --> Handle Reveal Active File Button
    function revealFileInFileTree(ozFileToReveal) {
        const fileToReveal = plugin.app.vault.getAbstractFileByPath(ozFileToReveal.path);
        if (!fileToReveal)
            return;
        // Get parent folder
        const parentFolder = fileToReveal.parent;
        // Focused Folder needs to be root for the reveal
        if (focusedFolder$1 && focusedFolder$1.path !== '/')
            setFocusedFolder(plugin.app.vault.getRoot());
        // Obtain all folders that needs to be opened
        const getAllFoldersToOpen = (fileToReveal) => {
            let foldersToOpen = [];
            const recursiveFx = (folder) => {
                foldersToOpen.push(folder.path);
                if (folder.parent)
                    recursiveFx(folder.parent);
            };
            recursiveFx(fileToReveal.parent);
            return foldersToOpen;
        };
        // Sanity check - Parent to be folder and set required component states
        if (parentFolder instanceof obsidian.TFolder) {
            // Set Active Folder - It will trigger auto file list update
            setActiveFolderPath(parentFolder.path);
            // Set active file to show in the list
            setActiveOzFile(TFile2OZFile(fileToReveal));
            // Set openfolders to expand in the folder list
            const foldersToOpen = getAllFoldersToOpen(fileToReveal);
            let openFoldersSet = new Set([...openFolders$1, ...foldersToOpen]);
            setOpenFolders(Array.from(openFoldersSet));
            scrollToFile(TFile2OZFile(fileToReveal));
            scrollToFolder(parentFolder);
        }
    }
    return (React.createElement(React.Fragment, null, view$1 === 'folder' ? (React.createElement(MainFolder, { plugin: plugin })) : plugin.settings.evernoteView === 'Horizontal' ? (React.createElement(SingleViewHorizontal, { plugin: plugin })) : plugin.settings.evernoteView === 'Vertical' ? (React.createElement(SingleViewVertical, { plugin: plugin })) : (React.createElement(FileComponent, { plugin: plugin }))));
}

class FileTreeView extends obsidian.ItemView {
    constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
    }
    getViewType() {
        var _a;
        return (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.VIEW_TYPE;
    }
    getDisplayText() {
        var _a;
        return (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.VIEW_DISPLAY_TEXT;
    }
    getIcon() {
        var _a;
        return (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.ICON;
    }
    onClose() {
        return __awaiter(this, void 0, void 0, function* () {
            this.destroy();
        });
    }
    destroy() {
        if (this.root)
            this.root.unmount();
    }
    onOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.destroy();
            this.constructFileTree(this.app.vault.getRoot().path, '');
        });
    }
    constructFileTree(folderPath, vaultChange) {
        this.destroy();
        this.root = createRoot(this.contentEl);
        this.root.render(React.createElement("div", { className: "file-tree-plugin-view" },
            React.createElement(Recoil_index_5, null,
                React.createElement(MainTreeComponent, { fileTreeView: this, plugin: this.plugin }))));
    }
}

var lib = {};

Object.defineProperty(lib,"__esModule",{value:true});var LocalStorageHandler_1 = lib.LocalStorageHandler=void 0;var LocalStorageHandler=/** @class */function(){/**
     * @param cacheHours: Default is 24 Hours, specify if you need less or more
     */function LocalStorageHandler(params){var _this=this;this.getTimeStampKey=function(key){return key+"-timestamp";};/**
         * Checks the key and returns the value from LocalStorage if data saved in last cachedHours.
         * If no data within last cacheHours, returns null.
         * If data, returns String value from the Storage.
         * @param key the key to check
         * @param checkCacheHours specify if you want to check the cachehours or return the value no matter when set
         * @param cacheHours specify if you want to overwrite the cacheHours of the Local Storage Handler and check with the new value
         * @returns Value from Local Storage as String or null
         */this.getFromLocalStorage=function(params){var key=params.key,checkCacheHours=params.checkCacheHours,cacheHours=params.cacheHours;var localData=localStorage.getItem(key);var localDataTimeStamp=localStorage.getItem(_this.getTimeStampKey(key));if(checkCacheHours!==undefined){if(!checkCacheHours)return localData;}// If Local Storage has the data less than cacheHours
if(cacheHours)_this.cacheHours=cacheHours;if(localDataTimeStamp!==null){var dt=new Date(JSON.parse(localDataTimeStamp));var hours=Math.abs(new Date().getTime()-dt.getTime())/3600000;if(hours<_this.cacheHours&&localData!==null){return localData;}}return null;};/**
         * Sets the LocalStorage Value with provided key
         * Sets also a timestamp in LocalStorage for the provided key
         * You need to return the LocalStorage value by utilizing the getFromLocalStorage() function
         * @param key
         * @param value
         */this.setLocalStorage=function(params){var key=params.key,value=params.value;localStorage.setItem(key,value);localStorage.setItem(_this.getTimeStampKey(key),JSON.stringify(new Date()));return 'success';};/**
         * @param key - key to remove from local storage
         */this.removeFromLocalStorage=function(params){var key=params.key;var localData=localStorage.getItem(key);if(!localData)return 'not-found';// Delete the key first if found
localStorage.removeItem(key);// Delete the timestamp if found
var timestampKey=_this.getTimeStampKey(key);var localTimestamp=localStorage.getItem(timestampKey);if(localTimestamp)localStorage.removeItem(timestampKey);return 'success';};var cacheHours=params.cacheHours;this.cacheHours=cacheHours?cacheHours:24;}return LocalStorageHandler;}();LocalStorageHandler_1 = lib.LocalStorageHandler=LocalStorageHandler;

const DEFAULT_SETTINGS = {
    openViewOnStart: true,
    ribbonIcon: true,
    showRootFolder: true,
    showFilesFromSubFolders: true,
    searchFunction: true,
    allSearchOnlyInFocusedFolder: false,
    showFilesFromSubFoldersButton: true,
    revealActiveFileButton: false,
    excludedExtensions: '',
    excludedFolders: '',
    folderIcon: 'default',
    folderCount: true,
    folderCountOption: 'notes',
    evernoteView: 'Vertical',
    filePreviewOnHover: false,
    iconBeforeFileName: true,
    sortFilesBy: 'name',
    sortReverse: false,
    sortFoldersBy: 'name',
    fixedHeaderInFileList: true,
    createdYaml: false,
    fileNameIsHeader: false,
    folderNote: false,
    deleteFileOption: 'trash',
    showFileNameAsFullPath: false,
};
class FileTreeAlternativePluginSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    refreshView() {
        let evt = new CustomEvent(eventTypes.refreshView, {});
        window.dispatchEvent(evt);
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        let lsh = new LocalStorageHandler_1({});
        /* ------------- Buy Me a Coffee ------------- */
        const tipDiv = containerEl.createDiv('tip');
        tipDiv.addClass('oz-tip-div');
        const tipLink = tipDiv.createEl('a', { href: 'https://revolut.me/ozante' });
        const tipImg = tipLink.createEl('img', {
            attr: {
                src: 'https://raw.githubusercontent.com/ozntel/file-tree-alternative/main/images/tip%20the%20artist_v2.png',
            },
        });
        tipImg.height = 55;
        const coffeeDiv = containerEl.createDiv('coffee');
        coffeeDiv.addClass('oz-coffee-div');
        const coffeeLink = coffeeDiv.createEl('a', { href: 'https://ko-fi.com/L3L356V6Q' });
        const coffeeImg = coffeeLink.createEl('img', {
            attr: {
                src: 'https://cdn.ko-fi.com/cdn/kofi2.png?v=3',
            },
        });
        coffeeImg.height = 45;
        /* ------------- General Settings ------------- */
        containerEl.createEl('h2', { text: 'General' });
        new obsidian.Setting(containerEl)
            .setName('Evernote View')
            .setDesc('Turn on if you want to see the folders and files in a single view without switching between views. Similar experience to Evernote.')
            .addDropdown((dropdown) => {
            dropdown
                .addOption('Disabled', 'Disabled')
                .addOption('Horizontal', 'Horizontal')
                .addOption('Vertical', 'Vertical')
                .setValue(this.plugin.settings.evernoteView)
                .onChange((value) => {
                this.plugin.settings.evernoteView = value;
                this.plugin.saveSettings();
                this.refreshView();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Ribbon Icon')
            .setDesc('Turn on if you want Ribbon Icon for activating the File Tree.')
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.ribbonIcon).onChange((value) => {
            this.plugin.settings.ribbonIcon = value;
            this.plugin.saveSettings();
            this.plugin.refreshIconRibbon();
        }));
        new obsidian.Setting(containerEl)
            .setName('Open on Start')
            .setDesc("Turn off if you don't want file tree view to be opened automatically during vault start")
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.openViewOnStart).onChange((value) => {
            this.plugin.settings.openViewOnStart = value;
            this.plugin.saveSettings();
        }));
        /* ------------- Folder Pane Settings ------------- */
        containerEl.createEl('h2', { text: 'Folder Pane Settings' });
        new obsidian.Setting(containerEl)
            .setName('Folder Icons')
            .setDesc('Change the default folder icons your preferred option')
            .addDropdown((dropdown) => {
            dropdown
                .addOption('default', 'Default')
                .addOption('box-folder', 'Box Icons')
                .addOption('icomoon', 'IcoMoon Icons')
                .addOption('typicon', 'Typicons')
                .addOption('circle-gg', 'Circle GG')
                .setValue(this.plugin.settings.folderIcon)
                .onChange((value) => {
                this.plugin.settings.folderIcon = value;
                this.plugin.saveSettings();
                this.refreshView();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Show Root Folder')
            .setDesc(`Turn on if you want your Root Folder "${this.plugin.app.vault.getName()}" to be visible in the file tree`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.showRootFolder).onChange((value) => {
            this.plugin.settings.showRootFolder = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Folder Count')
            .setDesc('Turn on if you want see the number of notes/files under file tree.')
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.folderCount).onChange((value) => {
            this.plugin.settings.folderCount = value;
            this.plugin.saveSettings();
            this.plugin.refreshTreeLeafs();
        }));
        new obsidian.Setting(containerEl)
            .setName('Folder Count Details')
            .setDesc('Select which files you want to be included into count')
            .addDropdown((dropdown) => {
            dropdown.addOption('notes', 'Notes');
            dropdown.addOption('files', 'All Files');
            dropdown.setValue(this.plugin.settings.folderCountOption);
            dropdown.onChange((option) => {
                this.plugin.settings.folderCountOption = option;
                this.plugin.saveSettings();
                this.refreshView();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Folder Note')
            .setDesc(`Turn this option on if you want to create Folder Note same as Folder Note Plugin. 
                By default, Click will open the list of files. You need to use "Shift+Click" to open the folder note. If folder has a folder note, 
                you will see an arrow icon on the right side of folder. The note created as a folder note is hidden in the file list.`)
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.folderNote).onChange((value) => {
                this.plugin.settings.folderNote = value;
                this.plugin.saveSettings();
                this.refreshView();
            });
        });
        /* ------------- File Pane Settings ------------- */
        containerEl.createEl('h2', { text: 'File Pane Settings' });
        new obsidian.Setting(containerEl)
            .setName('Include Files From Subfolders to the File List')
            .setDesc(`Turn on this option if you want to see the list of files from all subfolders in addition to the selected folder`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.showFilesFromSubFolders).onChange((value) => {
            this.plugin.settings.showFilesFromSubFolders = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Toggle Button for Include Files from Subfolders')
            .setDesc(`Turn on this option if you want to have an additional button on the top of the file list to toggle "Include Files From Subfolders"`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.showFilesFromSubFoldersButton).onChange((value) => {
            this.plugin.settings.showFilesFromSubFoldersButton = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Reveal Active File in File Tree Button')
            .setDesc(`Turn on this option if you want to have an additional button to reveal the active file in the file tree. It will set the folder and file pane accordingly.`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.revealActiveFileButton).onChange((value) => {
            this.plugin.settings.revealActiveFileButton = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Search in File List')
            .setDesc(`Turn on this option if you want to enable search function to filter files by name.`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.searchFunction).onChange((value) => {
            this.plugin.settings.searchFunction = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('All & Tag Search only in Focused Folder')
            .setDesc(`"all:" and "tag:" searches by default looks for all files in your vault. Turn on this option if you want search only in Focused Folder`)
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.allSearchOnlyInFocusedFolder).onChange((value) => {
            this.plugin.settings.allSearchOnlyInFocusedFolder = value;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName('Icon Before File Name')
            .setDesc('Turn on if you want to file icon before the file name in the file list.')
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.iconBeforeFileName).onChange((value) => {
            this.plugin.settings.iconBeforeFileName = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Preview File on Hover')
            .setDesc('Turn on if you want to preview the files once you hover on them within the file list holding Ctrl/Cmd button.')
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.filePreviewOnHover).onChange((value) => {
            this.plugin.settings.filePreviewOnHover = value;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName('Fixed Buttons and Header in File Pane')
            .setDesc('Turn on if you want buttons and header to be not scrolled within the file list.')
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.fixedHeaderInFileList).onChange((value) => {
            this.plugin.settings.fixedHeaderInFileList = value;
            this.plugin.saveSettings();
            this.refreshView();
        }));
        new obsidian.Setting(containerEl)
            .setName('Show file names as full path')
            .setDesc('Turn on if you want to see the full path within the file name list rather than only file name')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.showFileNameAsFullPath).onChange((value) => {
                this.plugin.settings.showFileNameAsFullPath = value;
                this.plugin.saveSettings();
                this.refreshView();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Deleted File Destination')
            .setDesc('Select where you want files to be moved once they are deleted')
            .addDropdown((dropdown) => {
            dropdown.addOption('permanent', 'Delete Permanently');
            dropdown.addOption('trash', 'Move to Obsidian Trash');
            dropdown.addOption('system-trash', 'Move to System Trash');
            dropdown.setValue(this.plugin.settings.deleteFileOption);
            dropdown.onChange((option) => {
                this.plugin.settings.deleteFileOption = option;
                this.plugin.saveSettings();
            });
        });
        /* ------------- Exclusion Settings ------------- */
        containerEl.createEl('h2', { text: 'File Creation' });
        containerEl.createEl('p', { text: 'The settings below are only applicable if the plus (+) button within the file pane of the plugin is used.' });
        new obsidian.Setting(containerEl)
            .setName('Created information in YAML')
            .setDesc('Turn on if you want plugin to include created YAML key with the time of creation')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.createdYaml).onChange((value) => {
                this.plugin.settings.createdYaml = value;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Set File Name as Header 1')
            .setDesc('Turn on if you want plugin to add the initial file name as main header in the created file.')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.fileNameIsHeader).onChange((value) => {
                this.plugin.settings.fileNameIsHeader = value;
                this.plugin.saveSettings();
            });
        });
        /* ------------- Exclusion Settings ------------- */
        containerEl.createEl('h2', { text: 'Exclude Settings' });
        new obsidian.Setting(containerEl)
            .setName('Excluded File Extensions')
            .setDesc(`Provide extension of files, which you want to exclude from listing in file tree, divided by comma. i.e. 'png, pdf, jpeg'.
            You need to reload the vault or use "Reload File Tree" button below to make changes effective.`)
            .addTextArea((text) => text.setValue(this.plugin.settings.excludedExtensions).onChange((value) => {
            this.plugin.settings.excludedExtensions = value;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName('Excluded Folder Paths')
            .setDesc(`Provide full path of folders, which you want to exclude from listing in file tree, divided by comma. i.e. 'Personal/Attachments, Work/Documents/Folders'.
            All subfolders are going to be excluded, as well. You need to reload the vault or use "Reload File Tree" button below to make changes effective.`)
            .addTextArea((text) => text.setValue(this.plugin.settings.excludedFolders).onChange((value) => {
            this.plugin.settings.excludedFolders = value;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setDesc('Use this button to reload the file tree. Reloading the file tree is required for some of the settings. You can also restart your vault to have same effect.')
            .addButton((button) => {
            button
                .setClass('reload-file-tree-button')
                .setTooltip('Click here to reload the file tree')
                .setButtonText('Reload File Tree')
                .onClick((e) => {
                this.plugin.refreshTreeLeafs();
            });
        });
        /* ------------- Clear Data ------------- */
        containerEl.createEl('h2', { text: 'Clear Data' });
        new obsidian.Setting(containerEl)
            .setName('Clear All Cache Data')
            .setDesc(`This button will clear the following cache data: "Last position of the divider" & "List of expanded folders in the folder pane", 
                & "Last active folder path". It will not touch your settings above and list of pinned files. It is recommended to do this clearing once in a while.`)
            .addButton((button) => {
            button
                .setTooltip('Click here to clear the cache data')
                .setButtonText('Click for Clearing the Cache')
                .onClick(() => __awaiter(this, void 0, void 0, function* () {
                lsh.removeFromLocalStorage({ key: this.plugin.keys.customHeightKey });
                lsh.removeFromLocalStorage({ key: this.plugin.keys.customWidthKey });
                lsh.removeFromLocalStorage({ key: this.plugin.keys.openFoldersKey });
                lsh.removeFromLocalStorage({ key: this.plugin.keys.activeFolderPathKey });
                lsh.removeFromLocalStorage({ key: this.plugin.keys.focusedFolder });
                this.plugin.refreshTreeLeafs();
                new obsidian.Notice('The plugin cache is cleared...');
            }));
        });
        new obsidian.Setting(containerEl)
            .setName('Clear Pinned Files')
            .setDesc(`This button will clear the pinned files in the file list pane.`)
            .addButton((button) => {
            button
                .setTooltip('Click here to clear the pinned files')
                .setButtonText('Click for Clearing the Pinned files')
                .onClick(() => __awaiter(this, void 0, void 0, function* () {
                lsh.removeFromLocalStorage({ key: this.plugin.keys.pinnedFilesKey });
                this.plugin.refreshTreeLeafs();
                new obsidian.Notice('The pinned files are cleared...');
            }));
        });
    }
}

class FileTreeAlternativePlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.ribbonIconEl = undefined;
        this.keys = {
            activeFolderPathKey: 'fileTreePlugin-ActiveFolderPath',
            pinnedFilesKey: 'fileTreePlugin-PinnedFiles',
            openFoldersKey: 'fileTreePlugin-OpenFolders',
            customHeightKey: 'fileTreePlugin-CustomHeight',
            customWidthKey: 'fileTreePlugin-CustomWidth',
            focusedFolder: 'fileTreePlugin-FocusedFolder',
        };
        // File Tree View Variables
        this.VIEW_TYPE = 'file-tree-view';
        this.VIEW_DISPLAY_TEXT = 'File Tree';
        this.ICON = 'sheets-in-box';
        this.triggerVaultChangeEvent = (file, changeType, oldPath) => {
            let event = new CustomEvent(eventTypes.vaultChange, {
                detail: {
                    file: file,
                    changeType: changeType,
                    oldPath: oldPath ? oldPath : '',
                },
            });
            window.dispatchEvent(event);
        };
        this.onCreate = (file) => this.triggerVaultChangeEvent(file, 'create', '');
        this.onDelete = (file) => this.triggerVaultChangeEvent(file, 'delete', '');
        this.onModify = (file) => this.triggerVaultChangeEvent(file, 'modify', '');
        this.onRename = (file, oldPath) => this.triggerVaultChangeEvent(file, 'rename', oldPath);
        this.refreshIconRibbon = () => {
            var _a;
            (_a = this.ribbonIconEl) === null || _a === void 0 ? void 0 : _a.remove();
            if (this.settings.ribbonIcon) {
                this.ribbonIconEl = this.addRibbonIcon(this.ICON, 'File Tree Alternative Plugin', () => __awaiter(this, void 0, void 0, function* () {
                    yield this.openFileTreeLeaf(true);
                }));
            }
        };
        this.openFileTreeLeaf = (showAfterAttach) => __awaiter(this, void 0, void 0, function* () {
            let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
            if (leafs.length == 0) {
                // Needs to be mounted
                let leaf = this.app.workspace.getLeftLeaf(false);
                yield leaf.setViewState({ type: this.VIEW_TYPE });
                if (showAfterAttach)
                    this.app.workspace.revealLeaf(leaf);
            }
            else {
                // Already mounted - show if only selected showAfterAttach
                if (showAfterAttach) {
                    leafs.forEach((leaf) => this.app.workspace.revealLeaf(leaf));
                }
            }
        });
        this.detachFileTreeLeafs = () => {
            let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
            for (let leaf of leafs) {
                leaf.view.destroy();
                leaf.detach();
            }
        };
        this.refreshTreeLeafs = () => {
            this.detachFileTreeLeafs();
            this.openFileTreeLeaf(true);
        };
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Loading Alternative File Tree Plugin');
            obsidian.addIcon('zoomInIcon', ZoomInIcon);
            obsidian.addIcon('zoomOutIcon', ZoomOutIcon);
            obsidian.addIcon('zoomOutDoubleIcon', ZoomOutDoubleIcon);
            obsidian.addIcon('locationIcon', LocationIcon);
            obsidian.addIcon('spaceIcon', SpaceIcon);
            // Load Settings
            this.addSettingTab(new FileTreeAlternativePluginSettingsTab(this.app, this));
            yield this.loadSettings();
            // Register File Tree View
            this.registerView(this.VIEW_TYPE, (leaf) => {
                return new FileTreeView(leaf, this);
            });
            // Event Listeners
            this.app.workspace.onLayoutReady(() => __awaiter(this, void 0, void 0, function* () {
                if (this.settings.openViewOnStart) {
                    yield this.openFileTreeLeaf(true);
                }
            }));
            // Add Command to Open File Tree Leaf
            this.addCommand({
                id: 'open-file-tree-view',
                name: 'Open File Tree View',
                callback: () => __awaiter(this, void 0, void 0, function* () { return yield this.openFileTreeLeaf(true); }),
            });
            // Add Command to Reveal Active File
            this.addCommand({
                id: 'reveal-active-file',
                name: 'Reveal Active File',
                callback: () => {
                    // Activate file tree pane
                    let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
                    if (leafs.length === 0)
                        this.openFileTreeLeaf(true);
                    for (let leaf of leafs) {
                        this.app.workspace.revealLeaf(leaf);
                    }
                    // Run custom event
                    let event = new CustomEvent(eventTypes.revealFile, {
                        detail: {
                            file: this.app.workspace.getActiveFile(),
                        },
                    });
                    window.dispatchEvent(event);
                },
            });
            // Add Command to create a new file under active folder path
            this.addCommand({
                id: ' create-new-note',
                name: 'Create a New Note',
                callback: () => {
                    let event = new CustomEvent(eventTypes.createNewNote, {
                        detail: {},
                    });
                    window.dispatchEvent(event);
                },
            });
            // Add event listener for vault changes
            this.app.vault.on('create', this.onCreate);
            this.app.vault.on('delete', this.onDelete);
            this.app.vault.on('modify', this.onModify);
            this.app.vault.on('rename', this.onRename);
            // Ribbon Icon For Opening
            this.refreshIconRibbon();
        });
    }
    onunload() {
        console.log('Unloading Alternative File Tree Plugin');
        this.detachFileTreeLeafs();
        // Remove event listeners
        this.app.vault.off('create', this.onCreate);
        this.app.vault.off('delete', this.onDelete);
        this.app.vault.off('modify', this.onModify);
        this.app.vault.off('rename', this.onRename);
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}

module.exports = FileTreeAlternativePlugin;
