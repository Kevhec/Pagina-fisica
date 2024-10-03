import{r as m}from"./index.CVf8TyFT.js";import{b as a}from"./_slug_.0e47704a.CRTOOgmL.js";var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};function y(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=m,b=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(t,r,o){var s,l={},e=null,n=null;o!==void 0&&(e=""+o),r.key!==void 0&&(e=""+r.key),r.ref!==void 0&&(n=r.ref);for(s in r)x.call(r,s)&&!j.hasOwnProperty(s)&&(l[s]=r[s]);if(t&&t.defaultProps)for(s in r=t.defaultProps,r)l[s]===void 0&&(l[s]=r[s]);return{$$typeof:b,type:t,key:e,ref:n,props:l,_owner:h.current}}f.Fragment=v;f.jsx=c;f.jsxs=c;u.exports=f;var p=u.exports,d={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function o(){for(var e="",n=0;n<arguments.length;n++){var i=arguments[n];i&&(e=l(e,s(i)))}return e}function s(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var i in e)r.call(e,i)&&e[i]&&(n=l(n,i));return n}function l(e,n){return n?e?e+" "+n:e+n:e}t.exports?(o.default=o,t.exports=o):window.classNames=o})()})(d);var O=d.exports;const w=y(O);function R({label:t,inverted:r,labelFull:o,labelClassName:s,...l}){const e=w({[a.inverted]:r,[a["label-full"]]:o});return p.jsxs("label",{htmlFor:l.id,className:`${a.label} ${s}`,children:[p.jsx("span",{className:e,children:t}),p.jsx("input",{...l})]})}export{R as I,N as c,y as g,p as j};
