(function(P){typeof define=="function"&&define.amd?define(P):P()})(function(){"use strict";var Pr=Object.defineProperty,Er=Object.defineProperties;var Dr=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var Ir=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable;var _e=(P,_,S)=>_ in P?Pr(P,_,{enumerable:!0,configurable:!0,writable:!0,value:S}):P[_]=S,At=(P,_)=>{for(var S in _||(_={}))Ir.call(_,S)&&_e(P,S,_[S]);if(Me)for(var S of Me(_))Lr.call(_,S)&&_e(P,S,_[S]);return P},wt=(P,_)=>Er(P,Dr(_));const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S=Symbol(),Ut=new Map;class Bt{constructor(t,e){if(this._$cssResult$=!0,e!==S)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Ut.get(this.cssText);return _&&t===void 0&&(Ut.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Qe=n=>new Bt(typeof n=="string"?n:n+"",S),$t=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new Bt(e,S)},xe=(n,t)=>{_?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,n.appendChild(r)})},jt=_?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Qe(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const Gt=window.trustedTypes,Se=Gt?Gt.emptyScript:"",Nt=window.reactiveElementPolyfillSupport,Mt={toAttribute(n,t){switch(t){case Boolean:n=n?Se:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Vt=(n,t)=>t!==n&&(t==t||n==n),_t={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Vt};class Y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(jt(i))}else t!==void 0&&e.push(jt(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=_t){var i,o;const a=this.constructor._$Eh(t,r);if(a!==void 0&&r.reflect===!0){const s=((o=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:Mt.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var r,i,o;const a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const c=a.getPropertyOptions(s),d=c.converter,l=(o=(i=(r=d)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof d=="function"?d:null)!==null&&o!==void 0?o:Mt.fromAttribute;this._$Ei=s,this[s]=l(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Vt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$ES(r,this[r],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}Y.finalized=!0,Y.elementProperties=new Map,Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Nt==null||Nt({ReactiveElement:Y}),((Ct=globalThis.reactiveElementVersions)!==null&&Ct!==void 0?Ct:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt;const tt=globalThis.trustedTypes,qt=tt?tt.createPolicy("lit-html",{createHTML:n=>n}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,Zt="?"+N,Re=`<${Zt}>`,et=document,at=(n="")=>et.createComment(n),st=n=>n===null||typeof n!="object"&&typeof n!="function",Xt=Array.isArray,ke=n=>{var t;return Xt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jt=/-->/g,Wt=/>/g,X=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Kt=/'/g,Yt=/"/g,te=/^(?:script|style|textarea|title)$/i,Fe=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),J=Fe(1),V=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ee=new WeakMap,Pe=(n,t,e)=>{var r,i;const o=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let a=o._$litPart$;if(a===void 0){const s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=a=new lt(t.insertBefore(at(),s),s,void 0,e!=null?e:{})}return a._$AI(n),a},rt=et.createTreeWalker(et,129,null,!1),Ee=(n,t)=>{const e=n.length-1,r=[];let i,o=t===2?"<svg>":"",a=ct;for(let c=0;c<e;c++){const d=n[c];let l,p,h=-1,f=0;for(;f<d.length&&(a.lastIndex=f,p=a.exec(d),p!==null);)f=a.lastIndex,a===ct?p[1]==="!--"?a=Jt:p[1]!==void 0?a=Wt:p[2]!==void 0?(te.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=X):p[3]!==void 0&&(a=X):a===X?p[0]===">"?(a=i!=null?i:ct,h=-1):p[1]===void 0?h=-2:(h=a.lastIndex-p[2].length,l=p[1],a=p[3]===void 0?X:p[3]==='"'?Yt:Kt):a===Yt||a===Kt?a=X:a===Jt||a===Wt?a=ct:(a=X,i=void 0);const m=a===X&&n[c+1].startsWith("/>")?" ":"";o+=a===ct?d+Re:h>=0?(r.push(l),d.slice(0,h)+"$lit$"+d.slice(h)+N+m):d+N+(h===-2?(r.push(void 0),c):m)}const s=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qt!==void 0?qt.createHTML(s):s,r]};class dt{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,a=0;const s=t.length-1,c=this.parts,[d,l]=Ee(t,e);if(this.el=dt.createElement(d,r),rt.currentNode=this.el.content,e===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(i=rt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const p=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(N)){const f=l[a++];if(p.push(h),f!==void 0){const m=i.getAttribute(f.toLowerCase()+"$lit$").split(N),v=/([.?@])?(.*)/.exec(f);c.push({type:1,index:o,name:v[2],strings:m,ctor:v[1]==="."?Ie:v[1]==="?"?He:v[1]==="@"?ze:ft})}else c.push({type:6,index:o})}for(const h of p)i.removeAttribute(h)}if(te.test(i.tagName)){const p=i.textContent.split(N),h=p.length-1;if(h>0){i.textContent=tt?tt.emptyScript:"";for(let f=0;f<h;f++)i.append(p[f],at()),rt.nextNode(),c.push({type:2,index:++o});i.append(p[h],at())}}}else if(i.nodeType===8)if(i.data===Zt)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(N,p+1))!==-1;)c.push({type:7,index:o}),p+=N.length-1}o++}}static createElement(t,e){const r=et.createElement("template");return r.innerHTML=t,r}}function it(n,t,e=n,r){var i,o,a,s;if(t===V)return t;let c=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu;const d=st(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),d===void 0?c=void 0:(c=new d(n),c._$AT(n,e,r)),r!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=it(n,c._$AS(n,t.values),c,r)),t}class De{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:et).importNode(r,!0);rt.currentNode=o;let a=rt.nextNode(),s=0,c=0,d=i[0];for(;d!==void 0;){if(s===d.index){let l;d.type===2?l=new lt(a,a.nextSibling,this,t):d.type===1?l=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(l=new Oe(a,this,t)),this.v.push(l),d=i[++c]}s!==(d==null?void 0:d.index)&&(a=rt.nextNode(),s++)}return o}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class lt{constructor(t,e,r,i){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),st(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==V&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ke(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==b&&st(this._$AH)?this._$AA.nextSibling.data=t:this.k(et.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=dt.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(r);else{const a=new De(o,this),s=a.p(this.options);a.m(r),this.k(s),this._$AH=a}}_$AC(t){let e=ee.get(t.strings);return e===void 0&&ee.set(t.strings,e=new dt(t)),e}S(t){Xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new lt(this.M(at()),this.M(at()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ft{constructor(t,e,r,i,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const o=this.strings;let a=!1;if(o===void 0)t=it(this,t,e,0),a=!st(t)||t!==this._$AH&&t!==V,a&&(this._$AH=t);else{const s=t;let c,d;for(t=o[0],c=0;c<o.length-1;c++)d=it(this,s[r+c],e,c),d===V&&(d=this._$AH[c]),a||(a=!st(d)||d!==this._$AH[c]),d===b?t=b:t!==b&&(t+=(d!=null?d:"")+o[c+1]),this._$AH[c]=d}a&&!i&&this.C(t)}C(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ie extends ft{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===b?void 0:t}}const Le=tt?tt.emptyScript:"";class He extends ft{constructor(){super(...arguments),this.type=4}C(t){t&&t!==b?this.element.setAttribute(this.name,Le):this.element.removeAttribute(this.name)}}class ze extends ft{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=it(this,t,e,0))!==null&&r!==void 0?r:b)===V)return;const i=this._$AH,o=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==b&&(i===b||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Oe{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const re=window.litHtmlPolyfillSupport;re==null||re(dt,lt),((Qt=globalThis.litHtmlVersions)!==null&&Qt!==void 0?Qt:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt,St;class W extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Pe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return V}}W.finalized=!0,W._$litElement$=!0,(xt=globalThis.litElementHydrateSupport)===null||xt===void 0||xt.call(globalThis,{LitElement:W});const ie=globalThis.litElementPolyfillSupport;ie==null||ie({LitElement:W}),((St=globalThis.litElementVersions)!==null&&St!==void 0?St:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=n=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(n,t):((e,r)=>{const{kind:i,elements:o}=r;return{kind:i,elements:o,finisher(a){window.customElements.define(e,a)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?wt(At({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function E(n){return(t,e)=>e!==void 0?((r,i,o)=>{i.constructor.createProperty(o,r)})(n,t,e):Te(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(n){return E(wt(At({},n),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=({finisher:n,descriptor:t})=>(e,r)=>{var i;if(r===void 0){const o=(i=e.originalKey)!==null&&i!==void 0?i:e.key,a=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:wt(At({},e),{key:o});return n!=null&&(a.finisher=function(s){n(s,o)}),a}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),n==null||n(o,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(n){return kt({finisher:(t,e)=>{Object.assign(t.prototype[e],n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ft(n,t){return kt({descriptor:e=>{const r={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var o,a;return this[i]===void 0&&(this[i]=(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&a!==void 0?a:null),this[i]}}return r}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ue(n){return kt({descriptor:t=>({async get(){var e;return await this.updateComplete,(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(n)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;((Pt=window.HTMLSlotElement)===null||Pt===void 0?void 0:Pt.prototype.assignedElements)!=null;var Et=function(n,t){return Et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},Et(n,t)};function Be(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Et(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var pt=function(){return pt=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},pt.apply(this,arguments)};function g(n,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o}function mt(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
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
 */function je(n,t){var e=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return e.call(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oe=()=>{},Ge={get passive(){return!1}};document.addEventListener("x",oe,Ge),document.removeEventListener("x",oe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ne extends W{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
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
 */var Ve=function(){function n(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */var qe={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ze={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ae={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function Xe(n,t,e){if(!n)return{x:0,y:0};var r=t.x,i=t.y,o=r+e.left,a=i+e.top,s,c;if(n.type==="touchstart"){var d=n;s=d.changedTouches[0].pageX-o,c=d.changedTouches[0].pageY-a}else{var l=n;s=l.pageX-o,c=l.pageY-a}return{x:s,y:c}}/**
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
 */var se=["touchstart","pointerdown","mousedown","keydown"],ce=["touchend","pointerup","mouseup","contextmenu"],gt=[],Je=function(n){Be(t,n);function t(e){var r=n.call(this,pt(pt({},t.defaultAdapter),e))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(i){r.activateImpl(i)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return Object.defineProperty(t,"cssClasses",{get:function(){return qe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ze},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ae},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,r=this.supportsPressRipple();if(this.registerRootHandlers(r),r){var i=t.cssClasses,o=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(o),e.adapter.isUnbounded()&&(e.adapter.addClass(a),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var r=t.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(i),e.adapter.removeClass(o),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var r=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var r,i;if(e){try{for(var o=mt(se),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var r,i;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=mt(ce),a=o.next();!a.done;a=o.next()){var s=a.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.deregisterRootHandlers=function(){var e,r;try{for(var i=mt(se),o=i.next();!o.done;o=i.next()){var a=o.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,r;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=mt(ce),o=i.next();!o.done;o=i.next()){var a=o.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,r=t.strings,i=Object.keys(r);i.forEach(function(o){o.indexOf("VAR_")===0&&e.adapter.updateCssVariable(r[o],null)})},t.prototype.activateImpl=function(e){var r=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var o=this.previousActivationEvent,a=o&&e!==void 0&&o.type!==e.type;if(!a){i.isActivated=!0,i.isProgrammatic=e===void 0,i.activationEvent=e,i.wasActivatedByPointer=i.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var s=e!==void 0&&gt.length>0&&gt.some(function(c){return r.adapter.containsEventTarget(c)});if(s){this.resetActivationState();return}e!==void 0&&(gt.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){gt=[],!i.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(i.wasElementMadeActive=r.checkElementMadeActive(e),i.wasElementMadeActive&&r.animateActivation()),i.wasElementMadeActive||(r.activationState=r.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,r=t.strings,i=r.VAR_FG_TRANSLATE_START,o=r.VAR_FG_TRANSLATE_END,a=t.cssClasses,s=a.FG_DEACTIVATION,c=a.FG_ACTIVATION,d=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",p="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),f=h.startPoint,m=h.endPoint;l=f.x+"px, "+f.y+"px",p=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(o,p),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(c),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},d)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,r=e.activationEvent,i=e.wasActivatedByPointer,o;i?o=Xe(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):o={x:this.frame.width/2,y:this.frame.height/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:o,endPoint:a}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,r=t.cssClasses.FG_DEACTIVATION,i=this.activationState,o=i.hasDeactivationUXRun,a=i.isActivated,s=o||!a;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(r)},ae.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,r=this.activationState;if(!!r.isActivated){var i=pt({},r);r.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(i),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var r=e.wasActivatedByPointer,i=e.wasElementMadeActive;(r||i)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var r=Math.max(this.frame.height,this.frame.width),i=function(){var a=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return a+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?r:i();var o=Math.floor(r*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!==0?this.initialSize=o-1:this.initialSize=o,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,r=e.VAR_FG_SIZE,i=e.VAR_LEFT,o=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},t}(Ve),We=Je;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},le=n=>(...t)=>({_$litDirective$:n,values:t});class pe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=le(class extends pe{constructor(n){var t;if(super(n),n.type!==de.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var e,r;if(this.et===void 0){this.et=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.et.add(o);return this.render(t)}const i=n.element.classList;this.et.forEach(o=>{o in t||(i.remove(o),this.et.delete(o))});for(const o in t){const a=!!t[o];a===this.et.has(o)||((r=this.st)===null||r===void 0?void 0:r.has(o))||(a?(i.add(o),this.et.add(o)):(i.remove(o),this.et.delete(o)))}return V}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=le(class extends pe{constructor(n){var t;if(super(n),n.type!==de.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const r=n[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const i=t[r];i!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,i):e[r]=i)}return V}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class A extends Ne{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=We}get isActive(){return je(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return J`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ke(r)}"
          style="${Ye({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}g([Ft(".mdc-ripple-surface")],A.prototype,"mdcRoot",void 0),g([E({type:Boolean})],A.prototype,"primary",void 0),g([E({type:Boolean})],A.prototype,"accent",void 0),g([E({type:Boolean})],A.prototype,"unbounded",void 0),g([E({type:Boolean})],A.prototype,"disabled",void 0),g([E({type:Boolean})],A.prototype,"activated",void 0),g([E({type:Boolean})],A.prototype,"selected",void 0),g([E({type:Boolean})],A.prototype,"internalUseStateLayerCustomProperties",void 0),g([I()],A.prototype,"hovering",void 0),g([I()],A.prototype,"bgFocused",void 0),g([I()],A.prototype,"fgActivation",void 0),g([I()],A.prototype,"fgDeactivation",void 0),g([I()],A.prototype,"fgScale",void 0),g([I()],A.prototype,"fgSize",void 0),g([I()],A.prototype,"translateStart",void 0),g([I()],A.prototype,"translateEnd",void 0),g([I()],A.prototype,"leftPos",void 0),g([I()],A.prototype,"topPos",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const tr=$t`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Dt=class extends A{};Dt.styles=[tr],Dt=g([Rt("mwc-ripple")],Dt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function er(n,t,e){const r=n.constructor;if(!e){const s=`__${t}`;if(e=r.getPropertyDescriptor(t,s),!e)throw new Error("@ariaProperty must be used after a @property decorator")}const i=e;let o="";if(!i.set)throw new Error(`@ariaProperty requires a setter for ${t}`);if(n.dispatchWizEvent)return e;const a={configurable:!0,enumerable:!0,set(s){if(o===""){const c=r.getPropertyOptions(t);o=typeof c.attribute=="string"?c.attribute:t}this.hasAttribute(o)&&this.removeAttribute(o),i.set.call(this,s)}};return i.get&&(a.get=function(){return i.get.call(this)}),a}function ue(n,t,e){if(t!==void 0)return er(n,t,e);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rr{constructor(t){this.startPress=e=>{t().then(r=>{r&&r.startPress(e)})},this.endPress=()=>{t().then(e=>{e&&e.endPress()})},this.startFocus=()=>{t().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{t().then(e=>{e&&e.endFocus()})},this.startHover=()=>{t().then(e=>{e&&e.startHover()})},this.endHover=()=>{t().then(e=>{e&&e.endHover()})}}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=n=>n!=null?n:b;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class H extends W{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new rr(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?J`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return J`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${ir(this.ariaHasPopup)}"
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
    ${this.icon?J`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}g([E({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0),g([E({type:String})],H.prototype,"icon",void 0),g([ue,E({type:String,attribute:"aria-label"})],H.prototype,"ariaLabel",void 0),g([ue,E({type:String,attribute:"aria-haspopup"})],H.prototype,"ariaHasPopup",void 0),g([Ft("button")],H.prototype,"buttonElement",void 0),g([Ue("mwc-ripple")],H.prototype,"ripple",void 0),g([I()],H.prototype,"shouldRenderRipple",void 0),g([ne({passive:!0})],H.prototype,"handleRippleMouseDown",null),g([ne({passive:!0})],H.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const nr=$t`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let It=class extends H{};It.styles=[nr],It=g([Rt("mwc-icon-button")],It);/**
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
 */function q(n){return n<0?-1:n===0?0:1}function he(n,t,e){return(1-e)*n+e*t}function or(n,t,e){return e<n?n:e>t?t:e}function Lt(n){return n=n%360,n<0&&(n=n+360),n}function ar(n,t){return Lt(t-n)<=180?1:-1}function sr(n,t){return 180-Math.abs(Math.abs(n-t)-180)}function Ht(n,t){const e=n[0]*t[0][0]+n[1]*t[0][1]+n[2]*t[0][2],r=n[0]*t[1][0]+n[1]*t[1][1]+n[2]*t[1][2],i=n[0]*t[2][0]+n[1]*t[2][1]+n[2]*t[2][2];return[e,r,i]}/**
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
 */const cr=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],dr=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],lr=[95.047,100,108.883];function zt(n,t,e){return(255<<24|(n&255)<<16|(t&255)<<8|e&255)>>>0}function fe(n){const t=K(n[0]),e=K(n[1]),r=K(n[2]);return zt(t,e,r)}function me(n){return n>>16&255}function ge(n){return n>>8&255}function ve(n){return n&255}function pr(n,t,e){const r=dr,i=r[0][0]*n+r[0][1]*t+r[0][2]*e,o=r[1][0]*n+r[1][1]*t+r[1][2]*e,a=r[2][0]*n+r[2][1]*t+r[2][2]*e,s=K(i),c=K(o),d=K(a);return zt(s,c,d)}function ur(n){const t=nt(me(n)),e=nt(ge(n)),r=nt(ve(n));return Ht([t,e,r],cr)}function hr(n){const t=vt(n),e=K(t);return zt(e,e,e)}function Ot(n){const t=ur(n)[1];return 116*mr(t/100)-16}function vt(n){return 100*gr((n+16)/116)}function nt(n){const t=n/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function K(n){const t=n/100;let e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,or(0,255,Math.round(e*255))}function fr(){return lr}function mr(n){const t=.008856451679035631,e=24389/27;return n>t?Math.pow(n,1/3):(e*n+16)/116}function gr(n){const t=.008856451679035631,e=24389/27,r=n*n*n;return r>t?r:(116*n-16)/e}/**
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
 */class U{constructor(t,e,r,i,o,a,s,c,d,l){this.n=t,this.aw=e,this.nbb=r,this.ncb=i,this.c=o,this.nc=a,this.rgbD=s,this.fl=c,this.fLRoot=d,this.z=l}static make(t=fr(),e=200/Math.PI*vt(50)/100,r=50,i=2,o=!1){const a=t,s=a[0]*.401288+a[1]*.650173+a[2]*-.051461,c=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,d=a[0]*-.002079+a[1]*.048952+a[2]*.953127,l=.8+i/10,p=l>=.9?he(.59,.69,(l-.9)*10):he(.525,.59,(l-.8)*10);let h=o?1:l*(1-1/3.6*Math.exp((-e-42)/92));h=h>1?1:h<0?0:h;const f=l,m=[h*(100/s)+1-h,h*(100/c)+1-h,h*(100/d)+1-h],v=1/(5*e+1),y=v*v*v*v,$=1-y,w=y*e+.1*$*$*Math.cbrt(5*e),C=vt(r)/t[1],k=1.48+Math.sqrt(C),x=.725/Math.pow(C,.2),O=x,M=[Math.pow(w*m[0]*s/100,.42),Math.pow(w*m[1]*c/100,.42),Math.pow(w*m[2]*d/100,.42)],D=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)],L=(2*D[0]+D[1]+.05*D[2])*x;return new U(C,L,x,O,p,f,m,w,Math.pow(w,.25),k)}}U.DEFAULT=U.make();/**
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
 */class Q{constructor(t,e,r,i,o,a,s,c,d){this.hue=t,this.chroma=e,this.j=r,this.q=i,this.m=o,this.s=a,this.jstar=s,this.astar=c,this.bstar=d}distance(t){const e=this.jstar-t.jstar,r=this.astar-t.astar,i=this.bstar-t.bstar,o=Math.sqrt(e*e+r*r+i*i);return 1.41*Math.pow(o,.63)}static fromInt(t){return Q.fromIntInViewingConditions(t,U.DEFAULT)}static fromIntInViewingConditions(t,e){const r=(t&16711680)>>16,i=(t&65280)>>8,o=t&255,a=nt(r),s=nt(i),c=nt(o),d=.41233895*a+.35762064*s+.18051042*c,l=.2126*a+.7152*s+.0722*c,p=.01932141*a+.11916382*s+.95034478*c,h=.401288*d+.650173*l-.051461*p,f=-.250268*d+1.204414*l+.045854*p,m=-.002079*d+.048952*l+.953127*p,v=e.rgbD[0]*h,y=e.rgbD[1]*f,$=e.rgbD[2]*m,w=Math.pow(e.fl*Math.abs(v)/100,.42),C=Math.pow(e.fl*Math.abs(y)/100,.42),k=Math.pow(e.fl*Math.abs($)/100,.42),x=q(v)*400*w/(w+27.13),O=q(y)*400*C/(C+27.13),M=q($)*400*k/(k+27.13),D=(11*x+-12*O+M)/11,L=(x+O-2*M)/9,F=(20*x+20*O+21*M)/20,ut=(40*x+20*O+M)/20,Z=Math.atan2(L,D)*180/Math.PI,T=Z<0?Z+360:Z>=360?Z-360:Z,be=T*Math.PI/180,Cr=ut*e.nbb,ht=100*Math.pow(Cr/e.aw,e.c*e.z),Mr=4/e.c*Math.sqrt(ht/100)*(e.aw+4)*e.fLRoot,_r=T<20.14?T+360:T,Qr=.25*(Math.cos(_r*Math.PI/180+2)+3.8),xr=5e4/13*Qr*e.nc*e.ncb*Math.sqrt(D*D+L*L)/(F+.305),Ae=Math.pow(xr,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),we=Ae*Math.sqrt(ht/100),$e=we*e.fLRoot,Sr=50*Math.sqrt(Ae*e.c/(e.aw+4)),Rr=(1+100*.007)*ht/(1+.007*ht),Ce=1/.0228*Math.log(1+.0228*$e),kr=Ce*Math.cos(be),Fr=Ce*Math.sin(be);return new Q(T,we,ht,Mr,$e,Sr,Rr,kr,Fr)}static fromJch(t,e,r){return Q.fromJchInViewingConditions(t,e,r,U.DEFAULT)}static fromJchInViewingConditions(t,e,r,i){const o=4/i.c*Math.sqrt(t/100)*(i.aw+4)*i.fLRoot,a=e*i.fLRoot,s=e/Math.sqrt(t/100),c=50*Math.sqrt(s*i.c/(i.aw+4)),d=r*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),p=1/.0228*Math.log(1+.0228*a),h=p*Math.cos(d),f=p*Math.sin(d);return new Q(r,e,t,o,a,c,l,h,f)}static fromUcs(t,e,r){return Q.fromUcsInViewingConditions(t,e,r,U.DEFAULT)}static fromUcsInViewingConditions(t,e,r,i){const o=e,a=r,s=Math.sqrt(o*o+a*a),d=(Math.exp(s*.0228)-1)/.0228/i.fLRoot;let l=Math.atan2(a,o)*(180/Math.PI);l<0&&(l+=360);const p=t/(1-(t-100)*.007);return Q.fromJchInViewingConditions(p,d,l,i)}toInt(){return this.viewed(U.DEFAULT)}viewed(t){const e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),i=this.hue*Math.PI/180,o=.25*(Math.cos(i+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),s=o*(5e4/13)*t.nc*t.ncb,c=a/t.nbb,d=Math.sin(i),l=Math.cos(i),p=23*(c+.305)*r/(23*s+11*r*l+108*r*d),h=p*l,f=p*d,m=(460*c+451*h+288*f)/1403,v=(460*c-891*h-261*f)/1403,y=(460*c-220*h-6300*f)/1403,$=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),w=q(m)*(100/t.fl)*Math.pow($,1/.42),C=Math.max(0,27.13*Math.abs(v)/(400-Math.abs(v))),k=q(v)*(100/t.fl)*Math.pow(C,1/.42),x=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),O=q(y)*(100/t.fl)*Math.pow(x,1/.42),M=w/t.rgbD[0],D=k/t.rgbD[1],L=O/t.rgbD[2],F=1.86206786*M-1.01125463*D+.14918677*L,ut=.38752654*M+.62144744*D-.00897398*L,bt=-.0158415*M-.03412294*D+1.04996444*L;return pr(F,ut,bt)}}/**
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
 */class u{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const e=t/100;let r=0;return e<=.0031308?r=e*12.92:r=1.055*Math.pow(e,1/2.4)-.055,r*255}static chromaticAdaptation(t){const e=Math.pow(Math.abs(t),.42);return q(t)*400*e/(e+27.13)}static hueOf(t){const e=Ht(t,u.SCALED_DISCOUNT_FROM_LINRGB),r=u.chromaticAdaptation(e[0]),i=u.chromaticAdaptation(e[1]),o=u.chromaticAdaptation(e[2]),a=(11*r+-12*i+o)/11,s=(r+i-2*o)/9;return Math.atan2(s,a)}static areInCyclicOrder(t,e,r){const i=u.sanitizeRadians(e-t),o=u.sanitizeRadians(r-t);return i<o}static intercept(t,e,r){return(e-t)/(r-t)}static lerpPoint(t,e,r){return[t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e,t[2]+(r[2]-t[2])*e]}static setCoordinate(t,e,r,i){const o=u.intercept(t[i],e,r[i]);return u.lerpPoint(t,o,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,e){const r=u.Y_FROM_LINRGB[0],i=u.Y_FROM_LINRGB[1],o=u.Y_FROM_LINRGB[2],a=e%4<=1?0:100,s=e%2===0?0:100;if(e<4){const c=a,d=s,l=(t-c*i-d*o)/r;return u.isBounded(l)?[l,c,d]:[-1,-1,-1]}else if(e<8){const c=a,d=s,l=(t-d*r-c*o)/i;return u.isBounded(l)?[d,l,c]:[-1,-1,-1]}else{const c=a,d=s,l=(t-c*r-d*i)/o;return u.isBounded(l)?[c,d,l]:[-1,-1,-1]}}static bisectToSegment(t,e){let r=[-1,-1,-1],i=r,o=0,a=0,s=!1,c=!0;for(let d=0;d<12;d++){const l=u.nthVertex(t,d);if(l[0]<0)continue;const p=u.hueOf(l);if(!s){r=l,i=l,o=p,a=p,s=!0;continue}(c||u.areInCyclicOrder(o,p,a))&&(c=!1,u.areInCyclicOrder(o,e,p)?(i=l,a=p):(r=l,o=p))}return[r,i]}static midpoint(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,e){const r=u.bisectToSegment(t,e);let i=r[0],o=u.hueOf(i),a=r[1];for(let s=0;s<3;s++)if(i[s]!==a[s]){let c=-1,d=255;i[s]<a[s]?(c=u.criticalPlaneBelow(u.trueDelinearized(i[s])),d=u.criticalPlaneAbove(u.trueDelinearized(a[s]))):(c=u.criticalPlaneAbove(u.trueDelinearized(i[s])),d=u.criticalPlaneBelow(u.trueDelinearized(a[s])));for(let l=0;l<8&&!(Math.abs(d-c)<=1);l++){const p=Math.floor((c+d)/2),h=u.CRITICAL_PLANES[p],f=u.setCoordinate(i,h,a,s),m=u.hueOf(f);u.areInCyclicOrder(o,e,m)?(a=f,d=p):(i=f,o=m,c=p)}}return u.midpoint(i,a)}static inverseChromaticAdaptation(t){const e=Math.abs(t),r=Math.max(0,27.13*e/(400-e));return q(t)*Math.pow(r,1/.42)}static findResultByJ(t,e,r){let i=Math.sqrt(r)*11;const o=U.DEFAULT,a=1/Math.pow(1.64-Math.pow(.29,o.n),.73),c=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,d=Math.sin(t),l=Math.cos(t);for(let p=0;p<5;p++){const h=i/100,f=e===0||i===0?0:e/Math.sqrt(h),m=Math.pow(f*a,1/.9),y=o.aw*Math.pow(h,1/o.c/o.z)/o.nbb,$=23*(y+.305)*m/(23*c+11*m*l+108*m*d),w=$*l,C=$*d,k=(460*y+451*w+288*C)/1403,x=(460*y-891*w-261*C)/1403,O=(460*y-220*w-6300*C)/1403,M=u.inverseChromaticAdaptation(k),D=u.inverseChromaticAdaptation(x),L=u.inverseChromaticAdaptation(O),F=Ht([M,D,L],u.LINRGB_FROM_SCALED_DISCOUNT);if(F[0]<0||F[1]<0||F[2]<0)return 0;const ut=u.Y_FROM_LINRGB[0],bt=u.Y_FROM_LINRGB[1],Z=u.Y_FROM_LINRGB[2],T=ut*F[0]+bt*F[1]+Z*F[2];if(T<=0)return 0;if(p===4||Math.abs(T-r)<.002)return F[0]>100.01||F[1]>100.01||F[2]>100.01?0:fe(F);i=i-(T-r)*i/(2*T)}return 0}static solveToInt(t,e,r){if(e<1e-4||r<1e-4||r>99.9999)return hr(r);t=Lt(t);const i=t/180*Math.PI,o=vt(r),a=u.findResultByJ(i,e,o);if(a!==0)return a;const s=u.bisectToLimit(o,i);return fe(s)}static solveToCam(t,e,r){return Q.fromInt(u.solveToInt(t,e,r))}}u.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],u.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],u.Y_FROM_LINRGB=[.2126,.7152,.0722],u.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class z{constructor(t){this.argb=t;const e=Q.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=Ot(t),this.argb=t}static from(t,e,r){return new z(u.solveToInt(t,e,r))}static fromInt(t){return new z(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(u.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(u.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(u.solveToInt(this.internalHue,this.internalChroma,t))}setInternalState(t){const e=Q.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=Ot(t),this.argb=t}}/**
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
 */class Tt{static harmonize(t,e){const r=z.fromInt(t),i=z.fromInt(e),o=sr(r.hue,i.hue),a=Math.min(o*.5,15),s=Lt(r.hue+a*ar(r.hue,i.hue));return z.from(s,r.chroma,r.tone).toInt()}static hctHue(t,e,r){const i=Tt.cam16Ucs(t,e,r),o=Q.fromInt(i),a=Q.fromInt(t);return z.from(o.hue,a.chroma,Ot(t)).toInt()}static cam16Ucs(t,e,r){const i=Q.fromInt(t),o=Q.fromInt(e),a=i.jstar,s=i.astar,c=i.bstar,d=o.jstar,l=o.astar,p=o.bstar,h=a+(d-a)*r,f=s+(l-s)*r,m=c+(p-c)*r;return Q.fromUcs(h,f,m).toInt()}}/**
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
 */class R{constructor(t,e){this.hue=t,this.chroma=e,this.cache=new Map}static fromInt(t){const e=z.fromInt(t);return R.fromHueAndChroma(e.hue,e.chroma)}static fromHueAndChroma(t,e){return new R(t,e)}tone(t){let e=this.cache.get(t);return e===void 0&&(e=z.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}}/**
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
 */class B{constructor(t,e){const r=z.fromInt(t),i=r.hue,o=r.chroma;e?(this.a1=R.fromHueAndChroma(i,o),this.a2=R.fromHueAndChroma(i,o/3),this.a3=R.fromHueAndChroma(i+60,o/2),this.n1=R.fromHueAndChroma(i,Math.min(o/12,4)),this.n2=R.fromHueAndChroma(i,Math.min(o/6,8))):(this.a1=R.fromHueAndChroma(i,Math.max(48,o)),this.a2=R.fromHueAndChroma(i,16),this.a3=R.fromHueAndChroma(i+60,24),this.n1=R.fromHueAndChroma(i,4),this.n2=R.fromHueAndChroma(i,8)),this.error=R.fromHueAndChroma(25,84)}static of(t){return new B(t,!1)}static contentOf(t){return new B(t,!0)}}/**
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
 */class j{constructor(t){this.props=t}get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return j.lightFromCorePalette(B.of(t))}static dark(t){return j.darkFromCorePalette(B.of(t))}static lightContent(t){return j.lightFromCorePalette(B.contentOf(t))}static darkContent(t){return j.darkFromCorePalette(B.contentOf(t))}static lightFromCorePalette(t){return new j({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new j({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}toJSON(){return Object.assign({},this.props)}}/**
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
 */const ye=n=>{const t=me(n),e=ge(n),r=ve(n),i=[t.toString(16),e.toString(16),r.toString(16)];for(const[o,a]of i.entries())a.length===1&&(i[o]="0"+a);return"#"+i.join("")},vr=n=>{n=n.replace("#","");const t=n.length===3,e=n.length===6,r=n.length===8;if(!t&&!e&&!r)throw new Error("unexpected hex "+n);let i=0,o=0,a=0;return t?(i=G(n.slice(0,1).repeat(2)),o=G(n.slice(1,2).repeat(2)),a=G(n.slice(2,3).repeat(2))):e?(i=G(n.slice(0,2)),o=G(n.slice(2,4)),a=G(n.slice(4,6))):r&&(i=G(n.slice(2,4)),o=G(n.slice(4,6)),a=G(n.slice(6,8))),(255<<24|(i&255)<<16|(o&255)<<8|a&255)>>>0};function G(n){return parseInt(n,16)}/**
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
 */function yr(n,t=[]){const e=B.of(n);return{source:n,schemes:{light:j.light(n),dark:j.dark(n)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:t.map(r=>br(n,r))}}function br(n,t){let e=t.value;const r=e,i=n;t.blend&&(e=Tt.harmonize(r,i));const a=B.of(e).a1;return{color:t,value:e,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}var Ar=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,yt=(n,t,e,r)=>{for(var i=r>1?void 0:r?wr(t,e):t,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Ar(t,e,i),i};const $r="material-theme-control";let ot=class extends W{constructor(){super(...arguments),this.showOptions=!1,this.color=localStorage.getItem("theme-color")||"#6750A4"}render(){const n=document.body.classList.contains("dark-theme");return J` <mwc-icon-button @click=${this.toggleOptions}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewBox="0 0 48 48"
        >
          >
          <path
            d="M24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.75 5.6 16.1Q7.2 12.45 9.975 9.75Q12.75 7.05 16.475 5.525Q20.2 4 24.45 4Q28.4 4 31.95 5.325Q35.5 6.65 38.175 9Q40.85 11.35 42.425 14.575Q44 17.8 44 21.65Q44 27.05 40.85 30.175Q37.7 33.3 32.5 33.3H28.75Q27.85 33.3 27.2 34Q26.55 34.7 26.55 35.55Q26.55 36.9 27.275 37.85Q28 38.8 28 40.05Q28 41.95 26.95 42.975Q25.9 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM12.35 25.3Q13.35 25.3 14.1 24.55Q14.85 23.8 14.85 22.8Q14.85 21.8 14.1 21.05Q13.35 20.3 12.35 20.3Q11.35 20.3 10.6 21.05Q9.85 21.8 9.85 22.8Q9.85 23.8 10.6 24.55Q11.35 25.3 12.35 25.3ZM18.65 16.8Q19.65 16.8 20.4 16.05Q21.15 15.3 21.15 14.3Q21.15 13.3 20.4 12.55Q19.65 11.8 18.65 11.8Q17.65 11.8 16.9 12.55Q16.15 13.3 16.15 14.3Q16.15 15.3 16.9 16.05Q17.65 16.8 18.65 16.8ZM29.35 16.8Q30.35 16.8 31.1 16.05Q31.85 15.3 31.85 14.3Q31.85 13.3 31.1 12.55Q30.35 11.8 29.35 11.8Q28.35 11.8 27.6 12.55Q26.85 13.3 26.85 14.3Q26.85 15.3 27.6 16.05Q28.35 16.8 29.35 16.8ZM35.9 25.3Q36.9 25.3 37.65 24.55Q38.4 23.8 38.4 22.8Q38.4 21.8 37.65 21.05Q36.9 20.3 35.9 20.3Q34.9 20.3 34.15 21.05Q33.4 21.8 33.4 22.8Q33.4 23.8 34.15 24.55Q34.9 25.3 35.9 25.3ZM24 41Q24.55 41 24.775 40.775Q25 40.55 25 40.05Q25 39.35 24.275 38.75Q23.55 38.15 23.55 36.1Q23.55 33.8 25.05 32.05Q26.55 30.3 28.85 30.3H32.5Q36.3 30.3 38.65 28.075Q41 25.85 41 21.65Q41 15.05 36 11.025Q31 7 24.45 7Q17.15 7 12.075 11.925Q7 16.85 7 24Q7 31.05 11.975 36.025Q16.95 41 24 41Z"
          />
        </svg>
      </mwc-icon-button>
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
            <mwc-icon-button id="shuffle" @click=${this.randomColor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 48 48"
              >
                >
                <path
                  d="M19.75 21.8 7.5 9.6 9.65 7.45 21.9 19.65ZM29.05 40.5V37.5H35.3L26.1 28.35L28.2 26.2L37.5 35.4V29.05H40.5V40.5ZM9.6 40.5 7.5 38.35 35.4 10.45H29.05V7.45H40.5V18.9H37.5V12.6Z"
                />
              </svg>
            </mwc-icon-button>
          </div>
          <div class="row option">
            <label for="brightness">Brightness</label>
            <mwc-icon-button id="brightness" @click=${this.toggle}>
              ${n?J`<svg
                    class="icon"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 31Q26.9 31 28.95 28.95Q31 26.9 31 24Q31 21.1 28.95 19.05Q26.9 17 24 17Q21.1 17 19.05 19.05Q17 21.1 17 24Q17 26.9 19.05 28.95Q21.1 31 24 31ZM24 34Q19.85 34 16.925 31.075Q14 28.15 14 24Q14 19.85 16.925 16.925Q19.85 14 24 14Q28.15 14 31.075 16.925Q34 19.85 34 24Q34 28.15 31.075 31.075Q28.15 34 24 34ZM3.5 25.5Q2.85 25.5 2.425 25.075Q2 24.65 2 24Q2 23.35 2.425 22.925Q2.85 22.5 3.5 22.5H8.5Q9.15 22.5 9.575 22.925Q10 23.35 10 24Q10 24.65 9.575 25.075Q9.15 25.5 8.5 25.5ZM39.5 25.5Q38.85 25.5 38.425 25.075Q38 24.65 38 24Q38 23.35 38.425 22.925Q38.85 22.5 39.5 22.5H44.5Q45.15 22.5 45.575 22.925Q46 23.35 46 24Q46 24.65 45.575 25.075Q45.15 25.5 44.5 25.5ZM24 10Q23.35 10 22.925 9.575Q22.5 9.15 22.5 8.5V3.5Q22.5 2.85 22.925 2.425Q23.35 2 24 2Q24.65 2 25.075 2.425Q25.5 2.85 25.5 3.5V8.5Q25.5 9.15 25.075 9.575Q24.65 10 24 10ZM24 46Q23.35 46 22.925 45.575Q22.5 45.15 22.5 44.5V39.5Q22.5 38.85 22.925 38.425Q23.35 38 24 38Q24.65 38 25.075 38.425Q25.5 38.85 25.5 39.5V44.5Q25.5 45.15 25.075 45.575Q24.65 46 24 46ZM12 14.1 9.15 11.3Q8.7 10.85 8.725 10.225Q8.75 9.6 9.15 9.15Q9.6 8.7 10.225 8.7Q10.85 8.7 11.3 9.15L14.1 12Q14.5 12.45 14.5 13.05Q14.5 13.65 14.1 14.05Q13.7 14.5 13.075 14.5Q12.45 14.5 12 14.1ZM36.7 38.85 33.9 36Q33.5 35.55 33.5 34.925Q33.5 34.3 33.95 33.9Q34.35 33.45 34.95 33.45Q35.55 33.45 36 33.9L38.85 36.7Q39.3 37.15 39.275 37.775Q39.25 38.4 38.85 38.85Q38.4 39.3 37.775 39.3Q37.15 39.3 36.7 38.85ZM33.9 14.1Q33.45 13.65 33.45 13.05Q33.45 12.45 33.9 12L36.7 9.15Q37.15 8.7 37.775 8.725Q38.4 8.75 38.85 9.15Q39.3 9.6 39.3 10.225Q39.3 10.85 38.85 11.3L36 14.1Q35.6 14.5 34.975 14.5Q34.35 14.5 33.9 14.1ZM9.15 38.85Q8.7 38.4 8.7 37.775Q8.7 37.15 9.15 36.7L12 33.9Q12.45 33.45 13.05 33.45Q13.65 33.45 14.1 33.9Q14.55 34.35 14.55 34.95Q14.55 35.55 14.1 36L11.3 38.85Q10.85 39.3 10.225 39.275Q9.6 39.25 9.15 38.85ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Z"
                    />
                  </svg>`:J`<svg
                    class="icon"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 42Q16.5 42 11.25 36.75Q6 31.5 6 24Q6 16.5 11.25 11.25Q16.5 6 24 6Q24.4 6 24.85 6.025Q25.3 6.05 26 6.1Q24.2 7.7 23.2 10.05Q22.2 12.4 22.2 15Q22.2 19.5 25.35 22.65Q28.5 25.8 33 25.8Q35.6 25.8 37.95 24.875Q40.3 23.95 41.9 22.3Q41.95 22.9 41.975 23.275Q42 23.65 42 24Q42 31.5 36.75 36.75Q31.5 42 24 42ZM24 39Q29.45 39 33.5 35.625Q37.55 32.25 38.55 27.7Q37.3 28.25 35.875 28.525Q34.45 28.8 33 28.8Q27.25 28.8 23.225 24.775Q19.2 20.75 19.2 15Q19.2 13.8 19.45 12.425Q19.7 11.05 20.35 9.3Q15.45 10.65 12.225 14.775Q9 18.9 9 24Q9 30.25 13.375 34.625Q17.75 39 24 39ZM23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Z"
                    />
                  </svg>`}
            </mwc-icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`}toggleOptions(){this.showOptions=!this.showOptions,this.showOptions&&this.options.showModal()}toggle(){document.body.classList.contains("dark-theme")?document.body.classList.remove("dark-theme"):document.body.classList.add("dark-theme"),this.requestUpdate()}setColor(n){this.color=n,localStorage.setItem("theme-color",n),this.updateTheme(),this.dispatchEvent(new CustomEvent("color",{detail:{color:n},bubbles:!0,composed:!0}))}onColor(n){const t=n.target;this.setColor(t.value)}randomColor(){const n="0123456789ABCDEF";let t="#";for(let e=0;e<6;e++)t+=n[Math.floor(Math.random()*16)];this.setColor(t)}updateTheme(){const n=this.color,t=this.shadowRoot.querySelector("main"),e=yr(vr(n)),r=Array.from(Array(101).keys());let i=[];i.push(":root {");const o=(f,m)=>{var v;for(const[y,$]of Object.entries(f.toJSON())){const w=y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),C=ye($),k=`--md-sys-color-${w}${(v=m==null?void 0:m.suffix)!=null?v:""}`;m!=null&&m.apply?t.style.setProperty(k,C):i.push(`  ${k}: ${C};`)}};o(e.schemes.light,{suffix:"-light"}),o(e.schemes.dark,{suffix:"-dark"}),i.push("}"),i.push(":root, .light-theme {"),i.push("  color-scheme: light;"),o(e.schemes.light),i.push("}"),i.push(".dark-theme {"),i.push("  color-scheme: dark;"),o(e.schemes.dark),i.push("}"),this.findStyleTag("theme").innerHTML=i.join(`
`);const a=(f,m,v,y)=>{const $=[];$.push(":root {");for(const w of v){const C=f.tone(w),k=`--md-ref-palette-${m}${w}`,x=ye(C);y!=null&&y.apply?t.style.setProperty(k,x):$.push(`  ${k}: ${x};`)}return $.push("}"),$.join(`
`)},s=a(e.palettes.primary,"primary",r);this.findStyleTag("palette-primary").innerHTML=s;const c=a(e.palettes.secondary,"secondary",r);this.findStyleTag("palette-secondary").innerHTML=c;const d=a(e.palettes.tertiary,"tertiary",r);this.findStyleTag("palette-tertiary").innerHTML=d;const l=a(e.palettes.error,"error",r);this.findStyleTag("palette-error").innerHTML=l;const p=a(e.palettes.neutral,"neutral",r);this.findStyleTag("palette-neutral").innerHTML=p;const h=a(e.palettes.neutralVariant,"neutral-variant",r);this.findStyleTag("palette-neutral-variant").innerHTML=h}findStyleTag(n){const t=`generated-material-${n}`;let e=document.getElementById(t);return e==null&&(e=document.createElement("style"),e.id=t,document.head.appendChild(e)),e}toggleClass(n){n?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),this.requestUpdate()}firstUpdated(){this.updateTheme();const n=window.matchMedia("(prefers-color-scheme: dark)");this.toggleClass(n.matches),n.addEventListener("change",t=>{const e=t.matches;this.toggleClass(e)})}};ot.styles=$t`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
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
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
      border: 1px solid var(--md-sys-color-outline);
    }
    dialog::backdrop {
      background-color: var(--dialog-backdrop-color, rgba(0, 0, 0, 0.5));
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
    .icon {
      width: 25px;
      height: 25px;
    }
  `,yt([I()],ot.prototype,"showOptions",2),yt([E()],ot.prototype,"color",2),yt([Ft("#theme-options")],ot.prototype,"options",2),ot=yt([Rt($r)],ot)});
