(function(S){typeof define=="function"&&define.amd?define(S):S()})(function(){"use strict";var Ir=Object.defineProperty,Ur=Object.defineProperties;var Or=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Lr=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var Se=(S,b,w)=>b in S?Ir(S,b,{enumerable:!0,configurable:!0,writable:!0,value:w}):S[b]=w,yt=(S,b)=>{for(var w in b||(b={}))Lr.call(b,w)&&Se(S,w,b[w]);if(_e)for(var w of _e(b))Tr.call(b,w)&&Se(S,w,b[w]);return S},bt=(S,b)=>Ur(S,Or(b));const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,w=Symbol(),Ut=new Map;class Ot{constructor(t,e){if(this._$cssResult$=!0,e!==w)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Ut.get(this.cssText);return b&&t===void 0&&(Ut.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Ce=i=>new Ot(typeof i=="string"?i:i+"",w),At=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Ot(e,w)},Me=(i,t)=>{b?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),o=window.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)})},Lt=b?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Ce(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const Tt=window.trustedTypes,xe=Tt?Tt.emptyScript:"",Bt=window.reactiveElementPolyfillSupport,wt={toAttribute(i,t){switch(t){case Boolean:i=i?xe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},jt=(i,t)=>t!==i&&(t==t||i==i),_t={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:jt};class q extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const o=this._$Eh(r,e);o!==void 0&&(this._$Eu.set(o,r),t.push(o))}),t}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Lt(o))}else t!==void 0&&e.push(Lt(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=_t){var o,n;const a=this.constructor._$Eh(t,r);if(a!==void 0&&r.reflect===!0){const s=((n=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:wt.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var r,o,n;const a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const c=a.getPropertyOptions(s),d=c.converter,u=(n=(o=(r=d)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof d=="function"?d:null)!==null&&n!==void 0?n:wt.fromAttribute;this._$Ei=s,this[s]=u(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$ES(r,this[r],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}q.finalized=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},Bt==null||Bt({ReactiveElement:q}),(($t=globalThis.reactiveElementVersions)!==null&&$t!==void 0?$t:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St;const N=globalThis.trustedTypes,Gt=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,I=`lit$${(Math.random()+"").slice(9)}$`,qt="?"+I,ke=`<${qt}>`,V=document,tt=(i="")=>V.createComment(i),et=i=>i===null||typeof i!="object"&&typeof i!="function",Nt=Array.isArray,Re=i=>{var t;return Nt(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,Xt=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Jt=/'/g,Wt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,He=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),it=He(1),U=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Kt=new WeakMap,Ee=(i,t,e)=>{var r,o;const n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let a=n._$litPart$;if(a===void 0){const s=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=a=new nt(t.insertBefore(tt(),s),s,void 0,e!=null?e:{})}return a._$AI(i),a},X=V.createTreeWalker(V,129,null,!1),De=(i,t)=>{const e=i.length-1,r=[];let o,n=t===2?"<svg>":"",a=rt;for(let c=0;c<e;c++){const d=i[c];let u,l,p=-1,h=0;for(;h<d.length&&(a.lastIndex=h,l=a.exec(d),l!==null);)h=a.lastIndex,a===rt?l[1]==="!--"?a=Vt:l[1]!==void 0?a=Xt:l[2]!==void 0?(Zt.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=T):l[3]!==void 0&&(a=T):a===T?l[0]===">"?(a=o!=null?o:rt,p=-1):l[1]===void 0?p=-2:(p=a.lastIndex-l[2].length,u=l[1],a=l[3]===void 0?T:l[3]==='"'?Wt:Jt):a===Wt||a===Jt?a=T:a===Vt||a===Xt?a=rt:(a=T,o=void 0);const m=a===T&&i[c+1].startsWith("/>")?" ":"";n+=a===rt?d+ke:p>=0?(r.push(u),d.slice(0,p)+"$lit$"+d.slice(p)+I+m):d+I+(p===-2?(r.push(void 0),c):m)}const s=n+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Gt!==void 0?Gt.createHTML(s):s,r]};class ot{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,a=0;const s=t.length-1,c=this.parts,[d,u]=De(t,e);if(this.el=ot.createElement(d,r),X.currentNode=this.el.content,e===2){const l=this.el.content,p=l.firstChild;p.remove(),l.append(...p.childNodes)}for(;(o=X.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const l=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(I)){const h=u[a++];if(l.push(p),h!==void 0){const m=o.getAttribute(h.toLowerCase()+"$lit$").split(I),A=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:A[2],strings:m,ctor:A[1]==="."?Pe:A[1]==="?"?Ie:A[1]==="@"?Ue:pt})}else c.push({type:6,index:n})}for(const p of l)o.removeAttribute(p)}if(Zt.test(o.tagName)){const l=o.textContent.split(I),p=l.length-1;if(p>0){o.textContent=N?N.emptyScript:"";for(let h=0;h<p;h++)o.append(l[h],tt()),X.nextNode(),c.push({type:2,index:++n});o.append(l[p],tt())}}}else if(o.nodeType===8)if(o.data===qt)c.push({type:2,index:n});else{let l=-1;for(;(l=o.data.indexOf(I,l+1))!==-1;)c.push({type:7,index:n}),l+=I.length-1}n++}}static createElement(t,e){const r=V.createElement("template");return r.innerHTML=t,r}}function J(i,t,e=i,r){var o,n,a,s;if(t===U)return t;let c=r!==void 0?(o=e._$Cl)===null||o===void 0?void 0:o[r]:e._$Cu;const d=et(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),d===void 0?c=void 0:(c=new d(i),c._$AT(i,e,r)),r!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=J(i,c._$AS(i,t.values),c,r)),t}class Fe{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:V).importNode(r,!0);X.currentNode=n;let a=X.nextNode(),s=0,c=0,d=o[0];for(;d!==void 0;){if(s===d.index){let u;d.type===2?u=new nt(a,a.nextSibling,this,t):d.type===1?u=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(u=new Oe(a,this,t)),this.v.push(u),d=o[++c]}s!==(d==null?void 0:d.index)&&(a=X.nextNode(),s++)}return n}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class nt{constructor(t,e,r,o){var n;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),et(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==U&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Re(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==v&&et(this._$AH)?this._$AA.nextSibling.data=t:this.k(V.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{const a=new Fe(n,this),s=a.p(this.options);a.m(r),this.k(s),this._$AH=a}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new ot(t)),e}S(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new nt(this.M(tt()),this.M(tt()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class pt{constructor(t,e,r,o,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const n=this.strings;let a=!1;if(n===void 0)t=J(this,t,e,0),a=!et(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const s=t;let c,d;for(t=n[0],c=0;c<n.length-1;c++)d=J(this,s[r+c],e,c),d===U&&(d=this._$AH[c]),a||(a=!et(d)||d!==this._$AH[c]),d===v?t=v:t!==v&&(t+=(d!=null?d:"")+n[c+1]),this._$AH[c]=d}a&&!o&&this.C(t)}C(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Pe extends pt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===v?void 0:t}}const ze=N?N.emptyScript:"";class Ie extends pt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==v?this.element.setAttribute(this.name,ze):this.element.removeAttribute(this.name)}}class Ue extends pt{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=J(this,t,e,0))!==null&&r!==void 0?r:v)===U)return;const o=this._$AH,n=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==v&&(o===v||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Oe{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const Qt=window.litHtmlPolyfillSupport;Qt==null||Qt(ot,nt),((St=globalThis.litHtmlVersions)!==null&&St!==void 0?St:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct,Mt;class B extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return U}}B.finalized=!0,B._$litElement$=!0,(Ct=globalThis.litElementHydrateSupport)===null||Ct===void 0||Ct.call(globalThis,{LitElement:B});const Yt=globalThis.litElementPolyfillSupport;Yt==null||Yt({LitElement:B}),((Mt=globalThis.litElementVersions)!==null&&Mt!==void 0?Mt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=i=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(i,t):((e,r)=>{const{kind:o,elements:n}=r;return{kind:o,elements:n,finisher(a){window.customElements.define(e,a)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?bt(yt({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function _(i){return(t,e)=>e!==void 0?((r,o,n)=>{o.constructor.createProperty(n,r)})(i,t,e):Le(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(i){return _(bt(yt({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=({finisher:i,descriptor:t})=>(e,r)=>{var o;if(r===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,a=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:bt(yt({},e),{key:n});return i!=null&&(a.finisher=function(s){i(s,n)}),a}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(n,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(i){return kt({finisher:(t,e)=>{Object.assign(t.prototype[e],i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(i,t){return kt({descriptor:e=>{const r={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var n,a;return this[o]===void 0&&(this[o]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&a!==void 0?a:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(i){return kt({descriptor:t=>({async get(){var e;return await this.updateComplete,(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(i)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;((Ht=window.HTMLSlotElement)===null||Ht===void 0?void 0:Ht.prototype.assignedElements)!=null;var Et=function(i,t){return Et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},Et(i,t)};function Be(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Et(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var at=function(){return at=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},at.apply(this,arguments)};function f(i,t,e,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(t,e,n):a(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}function ut(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],r=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function je(i,t){var e=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return e.call(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ee=()=>{},Ge={get passive(){return!1}};document.addEventListener("x",ee,Ge),document.removeEventListener("x",ee);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qe extends B{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ne=function(){function i(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ve={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Xe={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},re={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function Je(i,t,e){if(!i)return{x:0,y:0};var r=t.x,o=t.y,n=r+e.left,a=o+e.top,s,c;if(i.type==="touchstart"){var d=i;s=d.changedTouches[0].pageX-n,c=d.changedTouches[0].pageY-a}else{var u=i;s=u.pageX-n,c=u.pageY-a}return{x:s,y:c}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ie=["touchstart","pointerdown","mousedown","keydown"],oe=["touchend","pointerup","mouseup","contextmenu"],ht=[],We=function(i){Be(t,i);function t(e){var r=i.call(this,at(at({},t.defaultAdapter),e))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(o){r.activateImpl(o)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(t,"cssClasses",{get:function(){return Ve},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Xe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return re},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var o=t.cssClasses,n=o.ROOT,a=o.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(a),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var r=t.cssClasses,o=r.ROOT,n=r.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(o),e.adapter.removeClass(n),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var r=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var r,o;if(e){try{for(var n=ut(ie),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(o=n.return)&&o.call(n)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var r,o;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=ut(oe),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(o=n.return)&&o.call(n)}finally{if(r)throw r.error}}},t.prototype.deregisterRootHandlers=function(){var e,r;try{for(var o=ut(ie),n=o.next();!n.done;n=o.next()){var a=n.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(s){e={error:s}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var o=ut(oe),n=o.next();!n.done;n=o.next()){var a=n.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(s){e={error:s}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,r=t.strings,o=Object.keys(r);o.forEach(function(n){n.indexOf("VAR_")===0&&e.adapter.updateCssVariable(r[n],null)})},t.prototype.activateImpl=function(e){var r=this;if(!this.adapter.isSurfaceDisabled()){var o=this.activationState;if(!o.isActivated){var n=this.previousActivationEvent,a=n&&e!==void 0&&n.type!==e.type;if(!a){o.isActivated=!0,o.isProgrammatic=e===void 0,o.activationEvent=e,o.wasActivatedByPointer=o.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var s=e!==void 0&&ht.length>0&&ht.some(function(c){return r.adapter.containsEventTarget(c)});if(s){this.resetActivationState();return}e!==void 0&&(ht.push(e.target),this.registerDeactivationHandlers(e)),o.wasElementMadeActive=this.checkElementMadeActive(e),o.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){ht=[],!o.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(o.wasElementMadeActive=r.checkElementMadeActive(e),o.wasElementMadeActive&&r.animateActivation()),o.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,r=t.strings,o=r.VAR_FG_TRANSLATE_START,n=r.VAR_FG_TRANSLATE_END,a=t.cssClasses,s=a.FG_DEACTIVATION,c=a.FG_ACTIVATION,d=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),h=p.startPoint,m=p.endPoint;u=h.x+"px, "+h.y+"px",l=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(o,u),this.adapter.updateCssVariable(n,l),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},d)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,r=e.activationEvent,o=e.wasActivatedByPointer,n;o?n=Je(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame.width/2,y:this.frame.height/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:n,endPoint:a}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,r=t.cssClasses.FG_DEACTIVATION,o=this.activationState,n=o.hasDeactivationUXRun,a=o.isActivated,s=n||!a;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(r)},re.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,r=this.activationState;if(!!r.isActivated){var o=at({},r);r.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(o)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(o),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var r=e.wasActivatedByPointer,o=e.wasElementMadeActive;(r||o)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),o=function(){var a=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return a+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:o();var n=Math.floor(r*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,r=e.VAR_FG_SIZE,o=e.VAR_LEFT,n=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(o,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},t}(Ne),Ze=We;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ae=i=>(...t)=>({_$litDirective$:i,values:t});class se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=ae(class extends se{constructor(i){var t;if(super(i),i.type!==ne.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.et.add(n);return this.render(t)}const o=i.element.classList;this.et.forEach(n=>{n in t||(o.remove(n),this.et.delete(n))});for(const n in t){const a=!!t[n];a===this.et.has(n)||((r=this.st)===null||r===void 0?void 0:r.has(n))||(a?(o.add(n),this.et.add(n)):(o.remove(n),this.et.delete(n)))}return U}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=ae(class extends se{constructor(i){var t;if(super(i),i.type!==ne.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const r=i[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const o=t[r];o!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,o):e[r]=o)}return U}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class g extends qe{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Ze}get isActive(){return je(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return it`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ke(r)}"
          style="${Qe({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}f([Rt(".mdc-ripple-surface")],g.prototype,"mdcRoot",void 0),f([_({type:Boolean})],g.prototype,"primary",void 0),f([_({type:Boolean})],g.prototype,"accent",void 0),f([_({type:Boolean})],g.prototype,"unbounded",void 0),f([_({type:Boolean})],g.prototype,"disabled",void 0),f([_({type:Boolean})],g.prototype,"activated",void 0),f([_({type:Boolean})],g.prototype,"selected",void 0),f([_({type:Boolean})],g.prototype,"internalUseStateLayerCustomProperties",void 0),f([C()],g.prototype,"hovering",void 0),f([C()],g.prototype,"bgFocused",void 0),f([C()],g.prototype,"fgActivation",void 0),f([C()],g.prototype,"fgDeactivation",void 0),f([C()],g.prototype,"fgScale",void 0),f([C()],g.prototype,"fgSize",void 0),f([C()],g.prototype,"translateStart",void 0),f([C()],g.prototype,"translateEnd",void 0),f([C()],g.prototype,"leftPos",void 0),f([C()],g.prototype,"topPos",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Ye=At`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Dt=class extends g{};Dt.styles=[Ye],Dt=f([xt("mwc-ripple")],Dt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tr(i,t,e){const r=i.constructor;if(!e){const s=`__${t}`;if(e=r.getPropertyDescriptor(t,s),!e)throw new Error("@ariaProperty must be used after a @property decorator")}const o=e;let n="";if(!o.set)throw new Error(`@ariaProperty requires a setter for ${t}`);if(i.dispatchWizEvent)return e;const a={configurable:!0,enumerable:!0,set(s){if(n===""){const c=r.getPropertyOptions(t);n=typeof c.attribute=="string"?c.attribute:t}this.hasAttribute(n)&&this.removeAttribute(n),o.set.call(this,s)}};return o.get&&(a.get=function(){return o.get.call(this)}),a}function ce(i,t,e){if(t!==void 0)return tr(i,t,e);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class er{constructor(t){this.startPress=e=>{t().then(r=>{r&&r.startPress(e)})},this.endPress=()=>{t().then(e=>{e&&e.endPress()})},this.startFocus=()=>{t().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{t().then(e=>{e&&e.endFocus()})},this.startHover=()=>{t().then(e=>{e&&e.startHover()})},this.endHover=()=>{t().then(e=>{e&&e.endHover()})}}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=i=>i!=null?i:v;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class x extends B{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new er(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?it`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return it`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${rr(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon?it`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}f([_({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0),f([_({type:String})],x.prototype,"icon",void 0),f([ce,_({type:String,attribute:"aria-label"})],x.prototype,"ariaLabel",void 0),f([ce,_({type:String,attribute:"aria-haspopup"})],x.prototype,"ariaHasPopup",void 0),f([Rt("button")],x.prototype,"buttonElement",void 0),f([Te("mwc-ripple")],x.prototype,"ripple",void 0),f([C()],x.prototype,"shouldRenderRipple",void 0),f([te({passive:!0})],x.prototype,"handleRippleMouseDown",null),f([te({passive:!0})],x.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const ir=At`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ft=class extends x{};Ft.styles=[ir],Ft=f([xt("mwc-icon-button")],Ft);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(i){return i<0?-1:i===0?0:1}function de(i,t,e){return(1-e)*i+e*t}function or(i,t,e){return e<i?i:e>t?t:e}function nr(i,t,e){return e<i?i:e>t?t:e}function ft(i){return i=i%360,i<0&&(i=i+360),i}function ar(i,t){return 180-Math.abs(Math.abs(i-t)-180)}function sr(i,t){const e=i[0]*t[0][0]+i[1]*t[0][1]+i[2]*t[0][2],r=i[0]*t[1][0]+i[1]*t[1][1]+i[2]*t[1][2],o=i[0]*t[2][0]+i[1]*t[2][1]+i[2]*t[2][2];return[e,r,o]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],dr=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],le=[95.047,100,108.883];function lr(i,t,e){return(255<<24|(i&255)<<16|(t&255)<<8|e&255)>>>0}function pe(i){return i>>16&255}function ue(i){return i>>8&255}function he(i){return i&255}function fe(i,t,e){const r=dr,o=r[0][0]*i+r[0][1]*t+r[0][2]*e,n=r[1][0]*i+r[1][1]*t+r[1][2]*e,a=r[2][0]*i+r[2][1]*t+r[2][2]*e,s=Pt(o),c=Pt(n),d=Pt(a);return lr(s,c,d)}function pr(i){const t=Z(pe(i)),e=Z(ue(i)),r=Z(he(i));return sr([t,e,r],cr)}function me(i){const t=(i+16)/116,e=t,r=t,o=24389/27,n=216/24389,s=i>8?t*t*t:i/o,c=t*t*t>n,d=c?r*r*r:i/o,u=c?e*e*e:i/o,l=le;return fe(d*l[0],s*l[1],u*l[2])}function mt(i){const t=pr(i)[1]/100,e=216/24389;if(t<=e)return 24389/27*t;{const r=Math.pow(t,.3333333333333333);return 116*r-16}}function ve(i){return i>8?Math.pow((i+16)/116,3)*100:i/(24389/27)*100}function Z(i){const t=i/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function Pt(i){const t=i/100;let e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,or(0,255,Math.round(e*255))}function ur(){return le}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e,r,o,n,a,s,c,d,u){this.n=t,this.aw=e,this.nbb=r,this.ncb=o,this.c=n,this.nc=a,this.rgbD=s,this.fl=c,this.fLRoot=d,this.z=u}static make(t=ur(),e=200/Math.PI*ve(50)/100,r=50,o=2,n=!1){const a=t,s=a[0]*.401288+a[1]*.650173+a[2]*-.051461,c=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,d=a[0]*-.002079+a[1]*.048952+a[2]*.953127,u=.8+o/10,l=u>=.9?de(.59,.69,(u-.9)*10):de(.525,.59,(u-.8)*10);let p=n?1:u*(1-1/3.6*Math.exp((-e-42)/92));p=p>1?1:p<0?0:p;const h=u,m=[p*(100/s)+1-p,p*(100/c)+1-p,p*(100/d)+1-p],A=1/(5*e+1),P=A*A*A*A,G=1-P,R=P*e+.1*G*G*Math.cbrt(5*e),O=ve(r)/t[1],Q=1.48+Math.sqrt(O),H=.725/Math.pow(O,.2),L=H,$=[Math.pow(R*m[0]*s/100,.42),Math.pow(R*m[1]*c/100,.42),Math.pow(R*m[2]*d/100,.42)],M=[400*$[0]/($[0]+27.13),400*$[1]/($[1]+27.13),400*$[2]/($[2]+27.13)],z=(2*M[0]+M[1]+.05*M[2])*H;return new E(O,z,H,L,l,h,m,R,Math.pow(R,.25),Q)}}E.DEFAULT=E.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t,e,r,o,n,a,s,c,d){this.hue=t,this.chroma=e,this.j=r,this.q=o,this.m=n,this.s=a,this.jstar=s,this.astar=c,this.bstar=d}distance(t){const e=this.jstar-t.jstar,r=this.astar-t.astar,o=this.bstar-t.bstar,n=Math.sqrt(e*e+r*r+o*o);return 1.41*Math.pow(n,.63)}static fromInt(t){return y.fromIntInViewingConditions(t,E.DEFAULT)}static fromIntInViewingConditions(t,e){const r=(t&16711680)>>16,o=(t&65280)>>8,n=t&255,a=Z(r),s=Z(o),c=Z(n),d=.41233895*a+.35762064*s+.18051042*c,u=.2126*a+.7152*s+.0722*c,l=.01932141*a+.11916382*s+.95034478*c,p=.401288*d+.650173*u-.051461*l,h=-.250268*d+1.204414*u+.045854*l,m=-.002079*d+.048952*u+.953127*l,A=e.rgbD[0]*p,P=e.rgbD[1]*h,G=e.rgbD[2]*m,R=Math.pow(e.fl*Math.abs(A)/100,.42),O=Math.pow(e.fl*Math.abs(P)/100,.42),Q=Math.pow(e.fl*Math.abs(G)/100,.42),H=W(A)*400*R/(R+27.13),L=W(P)*400*O/(O+27.13),$=W(G)*400*Q/(Q+27.13),M=(11*H+-12*L+$)/11,z=(H+L-2*$)/9,zt=(20*H+20*L+21*$)/20,It=(40*H+20*L+$)/20,Y=Math.atan2(z,M)*180/Math.PI,dt=Y<0?Y+360:Y>=360?Y-360:Y,ye=dt*Math.PI/180,xr=It*e.nbb,lt=100*Math.pow(xr/e.aw,e.c*e.z),kr=4/e.c*Math.sqrt(lt/100)*(e.aw+4)*e.fLRoot,Rr=dt<20.14?dt+360:dt,Hr=.25*(Math.cos(Rr*Math.PI/180+2)+3.8),Er=5e4/13*Hr*e.nc*e.ncb*Math.sqrt(M*M+z*z)/(zt+.305),be=Math.pow(Er,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),Ae=be*Math.sqrt(lt/100),$e=Ae*e.fLRoot,Dr=50*Math.sqrt(be*e.c/(e.aw+4)),Fr=(1+100*.007)*lt/(1+.007*lt),we=1/.0228*Math.log(1+.0228*$e),Pr=we*Math.cos(ye),zr=we*Math.sin(ye);return new y(dt,Ae,lt,kr,$e,Dr,Fr,Pr,zr)}static fromJch(t,e,r){return y.fromJchInViewingConditions(t,e,r,E.DEFAULT)}static fromJchInViewingConditions(t,e,r,o){const n=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,a=e*o.fLRoot,s=e/Math.sqrt(t/100),c=50*Math.sqrt(s*o.c/(o.aw+4)),d=r*Math.PI/180,u=(1+100*.007)*t/(1+.007*t),l=1/.0228*Math.log(1+.0228*a),p=l*Math.cos(d),h=l*Math.sin(d);return new y(r,e,t,n,a,c,u,p,h)}static fromUcs(t,e,r){return y.fromUcsInViewingConditions(t,e,r,E.DEFAULT)}static fromUcsInViewingConditions(t,e,r,o){const n=e,a=r,s=Math.sqrt(n*n+a*a),d=(Math.exp(s*.0228)-1)/.0228/o.fLRoot;let u=Math.atan2(a,n)*(180/Math.PI);u<0&&(u+=360);const l=t/(1-(t-100)*.007);return y.fromJchInViewingConditions(l,d,u,o)}toInt(){return this.viewed(E.DEFAULT)}viewed(t){const e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,n=.25*(Math.cos(o+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),s=n*(5e4/13)*t.nc*t.ncb,c=a/t.nbb,d=Math.sin(o),u=Math.cos(o),l=23*(c+.305)*r/(23*s+11*r*u+108*r*d),p=l*u,h=l*d,m=(460*c+451*p+288*h)/1403,A=(460*c-891*p-261*h)/1403,P=(460*c-220*p-6300*h)/1403,G=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),R=W(m)*(100/t.fl)*Math.pow(G,1/.42),O=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),Q=W(A)*(100/t.fl)*Math.pow(O,1/.42),H=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),L=W(P)*(100/t.fl)*Math.pow(H,1/.42),$=R/t.rgbD[0],M=Q/t.rgbD[1],z=L/t.rgbD[2],zt=1.86206786*$-1.01125463*M+.14918677*z,It=.38752654*$+.62144744*M-.00897398*z,ge=-.0158415*$-.03412294*M+1.04996444*z;return fe(zt,It,ge)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e,r){this.internalHue=t,this.internalChroma=e,this.internalTone=r,this.setInternalState(this.toInt())}static from(t,e,r){return new k(t,e,r)}static fromInt(t){const e=y.fromInt(t),r=mt(t);return new k(e.hue,e.chroma,r)}toInt(){return vt(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(vt(ft(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(vt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(vt(this.internalHue,this.internalChroma,t))}setInternalState(t){const e=y.fromInt(t),r=mt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=r}}const hr=.4,fr=1,mr=.2,vr=.01;function vt(i,t,e){return gr(ft(i),t,nr(0,100,e),E.DEFAULT)}function gr(i,t,e,r){if(t<1||Math.round(e)<=0||Math.round(e)>=100)return me(e);i=ft(i);let o=t,n=t,a=0,s=!0,c=null;for(;Math.abs(a-o)>=hr;){const d=yr(i,n,e);if(s){if(d!=null)return d.viewed(r);s=!1,n=a+(o-a)/2;continue}d===null?o=n:(c=d,a=n),n=a+(o-a)/2}return c===null?me(e):c.viewed(r)}function yr(i,t,e){let r=0,o=100,n=0,a=1e3,s=1e3,c=null;for(;Math.abs(r-o)>vr;){n=r+(o-r)/2;const u=y.fromJch(n,t,i).toInt(),l=mt(u),p=Math.abs(e-l);if(p<mr){const h=y.fromInt(u),m=h.distance(y.fromJch(h.j,h.chroma,i));m<=fr&&m<=s&&(a=p,s=m,c=h)}if(a===0&&s===0)break;l<e?r=n:o=n}return c}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static harmonize(t,e){const r=k.fromInt(t),o=k.fromInt(e),n=ar(r.hue,o.hue),a=Math.min(n*.5,15),s=ft(r.hue+a*gt.rotationDirection(r.hue,o.hue));return k.from(s,r.chroma,r.tone).toInt()}static hctHue(t,e,r){const o=gt.cam16Ucs(t,e,r),n=y.fromInt(o),a=y.fromInt(t);return k.from(n.hue,a.chroma,mt(t)).toInt()}static cam16Ucs(t,e,r){const o=y.fromInt(t),n=y.fromInt(e),a=o.jstar,s=o.astar,c=o.bstar,d=n.jstar,u=n.astar,l=n.bstar,p=a+(d-a)*r,h=s+(u-s)*r,m=c+(l-c)*r;return y.fromUcs(p,h,m).toInt()}static rotationDirection(t,e){const r=e-t,o=e-t+360,n=e-t-360,a=Math.abs(r),s=Math.abs(o),c=Math.abs(n);return a<=s&&a<=c?r>=0?1:-1:s<=a&&s<=c?o>=0?1:-1:n>=0?1:-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.hue=t,this.chroma=e,this.cache=new Map}static fromInt(t){const e=k.fromInt(t);return D.fromHueAndChroma(e.hue,e.chroma)}static fromHueAndChroma(t,e){return new D(t,e)}tone(t){let e=this.cache.get(t);return e===void 0&&(e=k.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){const e=k.fromInt(t),r=e.hue;this.a1=D.fromHueAndChroma(r,Math.max(48,e.chroma)),this.a2=D.fromHueAndChroma(r,16),this.a3=D.fromHueAndChroma(r+60,24),this.n1=D.fromHueAndChroma(r,4),this.n2=D.fromHueAndChroma(r,8),this.error=D.fromHueAndChroma(25,84)}static of(t){return new K(t)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.props=t}get primary(){return this.props.primary}get primaryContainer(){return this.props.primaryContainer}get onPrimary(){return this.props.onPrimary}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondary(){return this.props.onSecondary}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){const e=K.of(t);return new st({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),shadow:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static dark(t){const e=K.of(t);return new st({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),shadow:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}toJSON(){return Object.assign({},this.props)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=i=>{const t=pe(i),e=ue(i),r=he(i),o=[t.toString(16),e.toString(16),r.toString(16)];for(const[n,a]of o.entries())a.length===1&&(o[n]="0"+a);return"#"+o.join("")},Ar=i=>{i=i.replace("#","");const t=i.length===3,e=i.length===6,r=i.length===8;if(!t&&!e&&!r)throw new Error("unexpected hex "+i);let o=0,n=0,a=0;return t?(o=F(i.slice(0,1).repeat(2)),n=F(i.slice(1,2).repeat(2)),a=F(i.slice(2,3).repeat(2))):e?(o=F(i.slice(0,2)),n=F(i.slice(2,4)),a=F(i.slice(4,6))):r&&(o=F(i.slice(2,4)),n=F(i.slice(4,6)),a=F(i.slice(6,8))),(255<<24|(o&255)<<16|(n&255)<<8|a&255)>>>0};function F(i){return parseInt(i,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(i,t=[]){const e=K.of(i);return{source:i,schemes:{light:st.light(i),dark:st.dark(i)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:t.map(r=>wr(i,r))}}function wr(i,t){let e=t.value;const r=e,o=i;t.blend&&(e=gt.harmonize(r,o));const a=K.of(e).a1;return{color:t,value:e,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}function _r(i,t){var e;const r=(t==null?void 0:t.target)||document.body,n=((e=t==null?void 0:t.dark)!==null&&e!==void 0?e:!1)?i.schemes.dark:i.schemes.light;for(const[a,s]of Object.entries(n.toJSON())){const c=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),d=br(s);r.style.setProperty(`--md-sys-color-${c}`,d)}}var Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,ct=(i,t,e,r)=>{for(var o=r>1?void 0:r?Cr(t,e):t,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(t,e,o):a(o))||o);return r&&o&&Sr(t,e,o),o};const Mr="material-theme-control";let j=class extends B{constructor(){super(...arguments),this.showOptions=!1,this.dark=localStorage.getItem("theme-dark")==="true",this.color=localStorage.getItem("theme-color")||"#6750A4"}render(){return it` <mwc-icon-button
        @click=${this.toggleOptions}
        icon="palette"
      ></mwc-icon-button>
      <dialog id="theme-options" @close=${()=>this.showOptions=!1}>
        <div class="wrapper">
          <div>
            <h2 class="theme-options">Theme Options</h2>
          </div>
          <div class="row option">
            <label for="source">Source Color</label>
            <input
              id="source"
              type="color"
              .value=${this.color}
              @input=${this.onColor}
            />
          </div>
          <div class="row option">
            <label for="shuffle">Random</label>
            <mwc-icon-button
              id="shuffle"
              @click=${this.randomColor}
              icon="shuffle"
            ></mwc-icon-button>
          </div>
          <div class="row option">
            <label for="brightness">Brightness</label>
            <mwc-icon-button
              id="brightness"
              @click=${this.toggle}
              icon="${this.dark?"light_mode":"dark_mode"}"
            ></mwc-icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`}toggleOptions(){this.showOptions=!this.showOptions,this.showOptions&&this.options.showModal()}toggle(){this.dark=!this.dark,localStorage.setItem("theme-dark",this.dark.toString()),this.updateTheme()}setColor(i){this.color=i,localStorage.setItem("theme-color",i),this.updateTheme()}onColor(i){const t=i.target;this.setColor(t.value)}randomColor(){const i="0123456789ABCDEF";let t="#";for(let e=0;e<6;e++)t+=i[Math.floor(Math.random()*16)];this.setColor(t)}updateTheme(){const i=this.color,t=this.dark;this.dark?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const e=this.shadowRoot.querySelector("main"),r=$r(Ar(i));_r(r,{target:e,dark:t})}firstUpdated(){var e;const i=window.matchMedia("(prefers-color-scheme: dark)"),t=(e=localStorage.getItem("theme-dark"))!=null?e:i.matches.toString();this.dark=t==="true",this.dark&&document.body.classList.add("dark-theme"),this.updateTheme(),i.addEventListener("change",r=>{this.dark=r.matches,this.updateTheme()})}};j.styles=At`
    .theme-options {
      font-size: 1.5rem;
      font-family: "Roboto", sans-serif;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .row mwc-icon-button,
    .row input {
      margin-left: 10px;
    }
    mwc-icon-button {
      margin-left: 3px;
    }
    dialog {
      border: none;
      border-radius: 8px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 25px;
    }
    .option {
      height: 45px;
    }
    form {
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      border-radius: 16px;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      border: none;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    input[type="color"] {
      --input-size: 35px;
      width: var(--input-size);
      height: var(--input-size);
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: var(--input-size);
      border: var(--md-sys-color-outline) solid 1px;
    }
    input[type="color"]:hover {
      opacity: 0.8;
    }
    #source {
      margin-right: 5px;
    }
  `,ct([C()],j.prototype,"showOptions",2),ct([_({type:Boolean})],j.prototype,"dark",2),ct([_()],j.prototype,"color",2),ct([Rt("#theme-options")],j.prototype,"options",2),j=ct([xt(Mr)],j)});
