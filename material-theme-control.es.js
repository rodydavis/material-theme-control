var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$6 = Symbol(), n$5 = /* @__PURE__ */ new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$6)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$5.get(this.cssText);
    return t$3 && e2 === void 0 && (n$5.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$5 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$6), r$2 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$6);
}, i$5 = (e2, n2) => {
  t$3 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$1 = t$3 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$5(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$5 = window.trustedTypes, r$1 = e$5 ? e$5.emptyScript : "", h$1 = window.reactiveElementPolyfillSupport, o$4 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$1 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$4 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$3 = { attribute: true, type: String, converter: o$4, reflect: false, hasChanged: n$4 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Eh(s2, i2);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$3) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S$1(i3));
    } else
      i2 !== void 0 && s2.push(S$1(i2));
    return s2;
  }
  static _$Eh(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$5(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i2, s2 = l$3) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$4.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$4.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$4)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3) => this[i3] = t3), this._$Et = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i2 = false, this._$EU(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$EC !== void 0 && (this._$EC.forEach((t3, i2) => this._$ES(i2, this[i2], t3)), this._$EC = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.elementProperties = /* @__PURE__ */ new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = { mode: "open" }, h$1 == null || h$1({ ReactiveElement: a$1 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$4 = globalThis.trustedTypes, s$1 = i$4 ? i$4.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$4 = `lit$${(Math.random() + "").slice(9)}$`, o$3 = "?" + e$4, n$3 = `<${o$3}>`, l$2 = document, h = (t2 = "") => l$2.createComment(t2), r = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d = Array.isArray, u = (t2) => {
  var i2;
  return d(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), $ = p(1), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), x = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$2.createTreeWalker(l$2, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$3 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$4 + y) : s2 + e$4 + (p2 === -2 ? (l2.push(void 0), i3) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class E {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$4)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$4), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$4), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$4 ? i$4.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$3)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$4, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$4.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$2.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$2).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), r(t2) ? t2 === w || t2 == null || t2 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$2.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new V(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.k(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T.get(t2.strings);
    return i2 === void 0 && T.set(t2.strings, i2 = new E(t2)), i2;
  }
  S(t2) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.M(h()), this.M(h()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i2, 0), n2 = !r(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.C(t2);
  }
  C(t2) {
    t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t2) {
    this.element[this.name] = t2 === w ? void 0 : t2;
  }
}
const k = i$4 ? i$4.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t2) {
    t2 && t2 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w) === b)
      return;
    const e2 = this._$AH, o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w && (e2 === w || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push("2.2.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$2;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l$1 = globalThis.litElementHydrateSupport) === null || l$1 === void 0 || l$1.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({ LitElement: s });
((o$2 = globalThis.litElementVersions) !== null && o$2 !== void 0 ? o$2 : globalThis.litElementVersions = []).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t2, elements: i2 } = e3;
  return { kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3 = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e$3(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$3(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$1(t2) {
  return e$3(__spreadProps(__spreadValues({}, t2), { state: true }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = ({ finisher: e2, descriptor: t2 }) => (o2, n2) => {
  var r2;
  if (n2 === void 0) {
    const n3 = (r2 = o2.originalKey) !== null && r2 !== void 0 ? r2 : o2.key, i2 = t2 != null ? { kind: "method", placement: "prototype", key: n3, descriptor: t2(o2.key) } : __spreadProps(__spreadValues({}, o2), { key: n3 });
    return e2 != null && (i2.finisher = function(t3) {
      e2(t3, n3);
    }), i2;
  }
  {
    const r3 = o2.constructor;
    t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e2 == null || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$2(e2) {
  return o$1({ finisher: (r2, t2) => {
    Object.assign(r2.prototype[t2], e2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$2(i2, n2) {
  return o$1({ descriptor: (o2) => {
    const t2 = { get() {
      var o3, n3;
      return (n3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && n3 !== void 0 ? n3 : null;
    }, enumerable: true, configurable: true };
    if (n2) {
      const n3 = typeof o2 == "symbol" ? Symbol() : "__" + o2;
      t2.get = function() {
        var o3, t3;
        return this[n3] === void 0 && (this[n3] = (t3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && t3 !== void 0 ? t3 : null), this[n3];
      };
    }
    return t2;
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$1(e2) {
  return o$1({ descriptor: (r2) => ({ async get() {
    var r3;
    return await this.updateComplete, (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelector(e2);
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
((n = window.HTMLSlotElement) === null || n === void 0 ? void 0 : n.prototype.assignedElements) != null ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
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
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fn = () => {
};
const optionsBlock = {
  get passive() {
    return false;
  }
};
document.addEventListener("x", fn, optionsBlock);
document.removeEventListener("x", fn);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class BaseElement extends s {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus();
      this.mdcRoot.click();
      return;
    }
    super.click();
  }
  createFoundation() {
    if (this.mdcFoundation !== void 0) {
      this.mdcFoundation.destroy();
    }
    if (this.mdcFoundationClass) {
      this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
      this.mdcFoundation.init();
    }
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
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
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
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
 */
var cssClasses = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x2 = pageOffset.x, y = pageOffset.y;
  var documentX = x2 + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
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
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e2) {
      _this.activateImpl(e2);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
var MDCRippleFoundation$1 = MDCRippleFoundation;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$1 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = e(class extends i$1 {
  constructor(t$12) {
    var i2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || t$12.name !== "class" || ((i2 = t$12.strings) === null || i2 === void 0 ? void 0 : i2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
  }
  update(i2, [s2]) {
    var r2, o2;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i2.strings !== void 0 && (this.st = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => t2 !== "")));
      for (const t2 in s2)
        s2[t2] && !((r2 = this.st) === null || r2 === void 0 ? void 0 : r2.has(t2)) && this.et.add(t2);
      return this.render(s2);
    }
    const e2 = i2.element.classList;
    this.et.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.et.delete(t2));
    });
    for (const t2 in s2) {
      const i3 = !!s2[t2];
      i3 === this.et.has(t2) || ((o2 = this.st) === null || o2 === void 0 ? void 0 : o2.has(t2)) || (i3 ? (e2.add(t2), this.et.add(t2)) : (e2.remove(t2), this.et.delete(t2)));
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = e(class extends i$1 {
  constructor(t$12) {
    var e2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || t$12.name !== "style" || ((e2 = t$12.strings) === null || e2 === void 0 ? void 0 : e2.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r2) => {
      const s2 = t2[r2];
      return s2 == null ? e2 : e2 + `${r2 = r2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e2, [r2]) {
    const { style: s2 } = e2.element;
    if (this.ct === void 0) {
      this.ct = /* @__PURE__ */ new Set();
      for (const t2 in r2)
        this.ct.add(t2);
      return this.render(r2);
    }
    this.ct.forEach((t2) => {
      r2[t2] == null && (this.ct.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
    });
    for (const t2 in r2) {
      const e3 = r2[t2];
      e3 != null && (this.ct.add(t2), t2.includes("-") ? s2.setProperty(t2, e3) : s2[t2] = e3);
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class RippleBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.activated = false;
    this.selected = false;
    this.internalUseStateLayerCustomProperties = false;
    this.hovering = false;
    this.bgFocused = false;
    this.fgActivation = false;
    this.fgDeactivation = false;
    this.fgScale = "";
    this.fgSize = "";
    this.translateStart = "";
    this.translateEnd = "";
    this.leftPos = "";
    this.topPos = "";
    this.mdcFoundationClass = MDCRippleFoundation$1;
  }
  get isActive() {
    return matches(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => true,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = true;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = true;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = true;
            break;
        }
      },
      removeClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = false;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = false;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = false;
            break;
        }
      },
      containsEventTarget: () => true,
      registerInteractionHandler: () => void 0,
      deregisterInteractionHandler: () => void 0,
      registerDocumentInteractionHandler: () => void 0,
      deregisterDocumentInteractionHandler: () => void 0,
      registerResizeHandler: () => void 0,
      deregisterResizeHandler: () => void 0,
      updateCssVariable: (varName, value) => {
        switch (varName) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = value;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = value;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = value;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = value;
            break;
          case "--mdc-ripple-left":
            this.leftPos = value;
            break;
          case "--mdc-ripple-top":
            this.topPos = value;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(ev) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(ev);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = true;
  }
  endHover() {
    this.hovering = false;
  }
  waitForFoundation(fn2) {
    if (this.mdcFoundation) {
      fn2();
    } else {
      this.updateComplete.then(fn2);
    }
  }
  update(changedProperties) {
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this.endHover();
      }
    }
    super.update(changedProperties);
  }
  render() {
    const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
    const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
    const classes = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": shouldActivateInPrimary,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": shouldSelectInPrimary,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return $`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o(classes)}"
          style="${i({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
__decorate([
  i$2(".mdc-ripple-surface")
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
  e$3({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = r$2`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ripple = class Ripple2 extends RippleBase {
};
Ripple.styles = [styles$1];
Ripple = __decorate([
  n$1("mwc-ripple")
], Ripple);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function tsDecorator(prototype, name, descriptor) {
  const constructor = prototype.constructor;
  if (!descriptor) {
    const litInternalPropertyKey = `__${name}`;
    descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);
    if (!descriptor) {
      throw new Error("@ariaProperty must be used after a @property decorator");
    }
  }
  const propDescriptor = descriptor;
  let attribute = "";
  if (!propDescriptor.set) {
    throw new Error(`@ariaProperty requires a setter for ${name}`);
  }
  if (prototype.dispatchWizEvent) {
    return descriptor;
  }
  const wrappedDescriptor = {
    configurable: true,
    enumerable: true,
    set(value) {
      if (attribute === "") {
        const options = constructor.getPropertyOptions(name);
        attribute = typeof options.attribute === "string" ? options.attribute : name;
      }
      if (this.hasAttribute(attribute)) {
        this.removeAttribute(attribute);
      }
      propDescriptor.set.call(this, value);
    }
  };
  if (propDescriptor.get) {
    wrappedDescriptor.get = function() {
      return propDescriptor.get.call(this);
    };
  }
  return wrappedDescriptor;
}
function ariaProperty(protoOrDescriptor, name, descriptor) {
  if (name !== void 0) {
    return tsDecorator(protoOrDescriptor, name, descriptor);
  } else {
    throw new Error("@ariaProperty only supports TypeScript Decorators");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class RippleHandlers {
  constructor(rippleFn) {
    this.startPress = (ev) => {
      rippleFn().then((r2) => {
        r2 && r2.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then((r2) => {
        r2 && r2.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then((r2) => {
        r2 && r2.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then((r2) => {
        r2 && r2.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then((r2) => {
        r2 && r2.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then((r2) => {
        r2 && r2.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = (l2) => l2 != null ? l2 : w;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class IconButtonBase extends s {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.icon = "";
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  renderRipple() {
    return this.shouldRenderRipple ? $`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  render() {
    return $`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l(this.ariaHasPopup)}"
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
    ${this.icon ? $`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
  }
  handleRippleMouseDown(event) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(event);
  }
  handleRippleTouchStart(event) {
    this.rippleHandlers.startPress(event);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
__decorate([
  e$3({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
  e$3({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
  ariaProperty,
  e$3({ type: String, attribute: "aria-label" })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
  ariaProperty,
  e$3({ type: String, attribute: "aria-haspopup" })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
  i$2("button")
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
  e$1("mwc-ripple")
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
  t$1()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  e$2({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
  e$2({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = r$2`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let IconButton = class IconButton2 extends IconButtonBase {
};
IconButton.styles = [styles];
IconButton = __decorate([
  n$1("mwc-icon-button")
], IconButton);
const encodedJs = "LyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMKICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwpmdW5jdGlvbiBzaWdudW0obnVtKSB7CiAgaWYgKG51bSA8IDApIHsKICAgIHJldHVybiAtMTsKICB9IGVsc2UgaWYgKG51bSA9PT0gMCkgewogICAgcmV0dXJuIDA7CiAgfSBlbHNlIHsKICAgIHJldHVybiAxOwogIH0KfQpmdW5jdGlvbiBsZXJwKHN0YXJ0LCBzdG9wLCBhbW91bnQpIHsKICByZXR1cm4gKDEgLSBhbW91bnQpICogc3RhcnQgKyBhbW91bnQgKiBzdG9wOwp9CmZ1bmN0aW9uIGNsYW1wSW50KG1pbiwgbWF4LCBpbnB1dCkgewogIGlmIChpbnB1dCA8IG1pbikgewogICAgcmV0dXJuIG1pbjsKICB9IGVsc2UgaWYgKGlucHV0ID4gbWF4KSB7CiAgICByZXR1cm4gbWF4OwogIH0KICByZXR1cm4gaW5wdXQ7Cn0KZnVuY3Rpb24gc2FuaXRpemVEZWdyZWVzRG91YmxlKGRlZ3JlZXMpIHsKICBkZWdyZWVzID0gZGVncmVlcyAlIDM2MDsKICBpZiAoZGVncmVlcyA8IDApIHsKICAgIGRlZ3JlZXMgPSBkZWdyZWVzICsgMzYwOwogIH0KICByZXR1cm4gZGVncmVlczsKfQpmdW5jdGlvbiByb3RhdGlvbkRpcmVjdGlvbihmcm9tLCB0bykgewogIGNvbnN0IGluY3JlYXNpbmdEaWZmZXJlbmNlID0gc2FuaXRpemVEZWdyZWVzRG91YmxlKHRvIC0gZnJvbSk7CiAgcmV0dXJuIGluY3JlYXNpbmdEaWZmZXJlbmNlIDw9IDE4MCA/IDEgOiAtMTsKfQpmdW5jdGlvbiBkaWZmZXJlbmNlRGVncmVlcyhhLCBiKSB7CiAgcmV0dXJuIDE4MCAtIE1hdGguYWJzKE1hdGguYWJzKGEgLSBiKSAtIDE4MCk7Cn0KZnVuY3Rpb24gbWF0cml4TXVsdGlwbHkocm93LCBtYXRyaXgpIHsKICBjb25zdCBhID0gcm93WzBdICogbWF0cml4WzBdWzBdICsgcm93WzFdICogbWF0cml4WzBdWzFdICsgcm93WzJdICogbWF0cml4WzBdWzJdOwogIGNvbnN0IGIgPSByb3dbMF0gKiBtYXRyaXhbMV1bMF0gKyByb3dbMV0gKiBtYXRyaXhbMV1bMV0gKyByb3dbMl0gKiBtYXRyaXhbMV1bMl07CiAgY29uc3QgYyA9IHJvd1swXSAqIG1hdHJpeFsyXVswXSArIHJvd1sxXSAqIG1hdHJpeFsyXVsxXSArIHJvd1syXSAqIG1hdHJpeFsyXVsyXTsKICByZXR1cm4gW2EsIGIsIGNdOwp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDCiAqCiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAogKgogKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAogKgogKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgogKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgogKi8KY29uc3QgU1JHQl9UT19YWVogPSBbCiAgWzAuNDEyMzM4OTUsIDAuMzU3NjIwNjQsIDAuMTgwNTEwNDJdLAogIFswLjIxMjYsIDAuNzE1MiwgMC4wNzIyXSwKICBbMC4wMTkzMjE0MSwgMC4xMTkxNjM4MiwgMC45NTAzNDQ3OF0KXTsKY29uc3QgWFlaX1RPX1NSR0IgPSBbCiAgWwogICAgMy4yNDEzNzc0NzkyMzg4Njg1LAogICAgLTEuNTM3NjY1MjQwMjg1MTg1MSwKICAgIC0wLjQ5ODg1MzY2ODQ2MjY4MDUzCiAgXSwKICBbCiAgICAtMC45NjkxNDUyNTEzMDA1MzIxLAogICAgMS44NzU4ODUzNDUxMDY3ODcyLAogICAgMC4wNDE1NjU4NTYxNjkxMjA2MQogIF0sCiAgWwogICAgMC4wNTU2MjA5MzY4OTY5MTMwNSwKICAgIC0wLjIwMzk1NTI0NTY0NzQyMTIzLAogICAgMS4wNTcxNzk5MTExMjIwMzM1CiAgXQpdOwpjb25zdCBXSElURV9QT0lOVF9ENjUgPSBbOTUuMDQ3LCAxMDAsIDEwOC44ODNdOwpmdW5jdGlvbiBhcmdiRnJvbVJnYihyZWQsIGdyZWVuLCBibHVlKSB7CiAgcmV0dXJuICgyNTUgPDwgMjQgfCAocmVkICYgMjU1KSA8PCAxNiB8IChncmVlbiAmIDI1NSkgPDwgOCB8IGJsdWUgJiAyNTUpID4+PiAwOwp9CmZ1bmN0aW9uIGFyZ2JGcm9tTGlucmdiKGxpbnJnYikgewogIGNvbnN0IHIgPSBkZWxpbmVhcml6ZWQobGlucmdiWzBdKTsKICBjb25zdCBnID0gZGVsaW5lYXJpemVkKGxpbnJnYlsxXSk7CiAgY29uc3QgYiA9IGRlbGluZWFyaXplZChsaW5yZ2JbMl0pOwogIHJldHVybiBhcmdiRnJvbVJnYihyLCBnLCBiKTsKfQpmdW5jdGlvbiByZWRGcm9tQXJnYihhcmdiKSB7CiAgcmV0dXJuIGFyZ2IgPj4gMTYgJiAyNTU7Cn0KZnVuY3Rpb24gZ3JlZW5Gcm9tQXJnYihhcmdiKSB7CiAgcmV0dXJuIGFyZ2IgPj4gOCAmIDI1NTsKfQpmdW5jdGlvbiBibHVlRnJvbUFyZ2IoYXJnYikgewogIHJldHVybiBhcmdiICYgMjU1Owp9CmZ1bmN0aW9uIGFyZ2JGcm9tWHl6KHgsIHksIHopIHsKICBjb25zdCBtYXRyaXggPSBYWVpfVE9fU1JHQjsKICBjb25zdCBsaW5lYXJSID0gbWF0cml4WzBdWzBdICogeCArIG1hdHJpeFswXVsxXSAqIHkgKyBtYXRyaXhbMF1bMl0gKiB6OwogIGNvbnN0IGxpbmVhckcgPSBtYXRyaXhbMV1bMF0gKiB4ICsgbWF0cml4WzFdWzFdICogeSArIG1hdHJpeFsxXVsyXSAqIHo7CiAgY29uc3QgbGluZWFyQiA9IG1hdHJpeFsyXVswXSAqIHggKyBtYXRyaXhbMl1bMV0gKiB5ICsgbWF0cml4WzJdWzJdICogejsKICBjb25zdCByID0gZGVsaW5lYXJpemVkKGxpbmVhclIpOwogIGNvbnN0IGcgPSBkZWxpbmVhcml6ZWQobGluZWFyRyk7CiAgY29uc3QgYiA9IGRlbGluZWFyaXplZChsaW5lYXJCKTsKICByZXR1cm4gYXJnYkZyb21SZ2IociwgZywgYik7Cn0KZnVuY3Rpb24geHl6RnJvbUFyZ2IoYXJnYikgewogIGNvbnN0IHIgPSBsaW5lYXJpemVkKHJlZEZyb21BcmdiKGFyZ2IpKTsKICBjb25zdCBnID0gbGluZWFyaXplZChncmVlbkZyb21BcmdiKGFyZ2IpKTsKICBjb25zdCBiID0gbGluZWFyaXplZChibHVlRnJvbUFyZ2IoYXJnYikpOwogIHJldHVybiBtYXRyaXhNdWx0aXBseShbciwgZywgYl0sIFNSR0JfVE9fWFlaKTsKfQpmdW5jdGlvbiBhcmdiRnJvbUxzdGFyKGxzdGFyKSB7CiAgY29uc3QgeSA9IHlGcm9tTHN0YXIobHN0YXIpOwogIGNvbnN0IGNvbXBvbmVudCA9IGRlbGluZWFyaXplZCh5KTsKICByZXR1cm4gYXJnYkZyb21SZ2IoY29tcG9uZW50LCBjb21wb25lbnQsIGNvbXBvbmVudCk7Cn0KZnVuY3Rpb24gbHN0YXJGcm9tQXJnYihhcmdiKSB7CiAgY29uc3QgeSA9IHh5ekZyb21BcmdiKGFyZ2IpWzFdOwogIHJldHVybiAxMTYgKiBsYWJGKHkgLyAxMDApIC0gMTY7Cn0KZnVuY3Rpb24geUZyb21Mc3Rhcihsc3RhcikgewogIHJldHVybiAxMDAgKiBsYWJJbnZmKChsc3RhciArIDE2KSAvIDExNik7Cn0KZnVuY3Rpb24gbGluZWFyaXplZChyZ2JDb21wb25lbnQpIHsKICBjb25zdCBub3JtYWxpemVkID0gcmdiQ29tcG9uZW50IC8gMjU1OwogIGlmIChub3JtYWxpemVkIDw9IDAuMDQwNDQ5OTM2KSB7CiAgICByZXR1cm4gbm9ybWFsaXplZCAvIDEyLjkyICogMTAwOwogIH0gZWxzZSB7CiAgICByZXR1cm4gTWF0aC5wb3coKG5vcm1hbGl6ZWQgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSAqIDEwMDsKICB9Cn0KZnVuY3Rpb24gZGVsaW5lYXJpemVkKHJnYkNvbXBvbmVudCkgewogIGNvbnN0IG5vcm1hbGl6ZWQgPSByZ2JDb21wb25lbnQgLyAxMDA7CiAgbGV0IGRlbGluZWFyaXplZDIgPSAwOwogIGlmIChub3JtYWxpemVkIDw9IDMxMzA4ZS03KSB7CiAgICBkZWxpbmVhcml6ZWQyID0gbm9ybWFsaXplZCAqIDEyLjkyOwogIH0gZWxzZSB7CiAgICBkZWxpbmVhcml6ZWQyID0gMS4wNTUgKiBNYXRoLnBvdyhub3JtYWxpemVkLCAxIC8gMi40KSAtIDAuMDU1OwogIH0KICByZXR1cm4gY2xhbXBJbnQoMCwgMjU1LCBNYXRoLnJvdW5kKGRlbGluZWFyaXplZDIgKiAyNTUpKTsKfQpmdW5jdGlvbiB3aGl0ZVBvaW50RDY1KCkgewogIHJldHVybiBXSElURV9QT0lOVF9ENjU7Cn0KZnVuY3Rpb24gbGFiRih0KSB7CiAgY29uc3QgZSA9IDIxNiAvIDI0Mzg5OwogIGNvbnN0IGthcHBhID0gMjQzODkgLyAyNzsKICBpZiAodCA+IGUpIHsKICAgIHJldHVybiBNYXRoLnBvdyh0LCAxIC8gMyk7CiAgfSBlbHNlIHsKICAgIHJldHVybiAoa2FwcGEgKiB0ICsgMTYpIC8gMTE2OwogIH0KfQpmdW5jdGlvbiBsYWJJbnZmKGZ0KSB7CiAgY29uc3QgZSA9IDIxNiAvIDI0Mzg5OwogIGNvbnN0IGthcHBhID0gMjQzODkgLyAyNzsKICBjb25zdCBmdDMgPSBmdCAqIGZ0ICogZnQ7CiAgaWYgKGZ0MyA+IGUpIHsKICAgIHJldHVybiBmdDM7CiAgfSBlbHNlIHsKICAgIHJldHVybiAoMTE2ICogZnQgLSAxNikgLyBrYXBwYTsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMKICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwpjbGFzcyBWaWV3aW5nQ29uZGl0aW9ucyB7CiAgY29uc3RydWN0b3IobiwgYXcsIG5iYiwgbmNiLCBjLCBuYywgcmdiRCwgZmwsIGZMUm9vdCwgeikgewogICAgdGhpcy5uID0gbjsKICAgIHRoaXMuYXcgPSBhdzsKICAgIHRoaXMubmJiID0gbmJiOwogICAgdGhpcy5uY2IgPSBuY2I7CiAgICB0aGlzLmMgPSBjOwogICAgdGhpcy5uYyA9IG5jOwogICAgdGhpcy5yZ2JEID0gcmdiRDsKICAgIHRoaXMuZmwgPSBmbDsKICAgIHRoaXMuZkxSb290ID0gZkxSb290OwogICAgdGhpcy56ID0gejsKICB9CiAgc3RhdGljIG1ha2Uod2hpdGVQb2ludCA9IHdoaXRlUG9pbnRENjUoKSwgYWRhcHRpbmdMdW1pbmFuY2UgPSAyMDAgLyBNYXRoLlBJICogeUZyb21Mc3Rhcig1MCkgLyAxMDAsIGJhY2tncm91bmRMc3RhciA9IDUwLCBzdXJyb3VuZCA9IDIsIGRpc2NvdW50aW5nSWxsdW1pbmFudCA9IGZhbHNlKSB7CiAgICBjb25zdCB4eXogPSB3aGl0ZVBvaW50OwogICAgY29uc3QgclcgPSB4eXpbMF0gKiAwLjQwMTI4OCArIHh5elsxXSAqIDAuNjUwMTczICsgeHl6WzJdICogLTAuMDUxNDYxOwogICAgY29uc3QgZ1cgPSB4eXpbMF0gKiAtMC4yNTAyNjggKyB4eXpbMV0gKiAxLjIwNDQxNCArIHh5elsyXSAqIDAuMDQ1ODU0OwogICAgY29uc3QgYlcgPSB4eXpbMF0gKiAtMjA3OWUtNiArIHh5elsxXSAqIDAuMDQ4OTUyICsgeHl6WzJdICogMC45NTMxMjc7CiAgICBjb25zdCBmID0gMC44ICsgc3Vycm91bmQgLyAxMDsKICAgIGNvbnN0IGMgPSBmID49IDAuOSA/IGxlcnAoMC41OSwgMC42OSwgKGYgLSAwLjkpICogMTApIDogbGVycCgwLjUyNSwgMC41OSwgKGYgLSAwLjgpICogMTApOwogICAgbGV0IGQgPSBkaXNjb3VudGluZ0lsbHVtaW5hbnQgPyAxIDogZiAqICgxIC0gMSAvIDMuNiAqIE1hdGguZXhwKCgtYWRhcHRpbmdMdW1pbmFuY2UgLSA0MikgLyA5MikpOwogICAgZCA9IGQgPiAxID8gMSA6IGQgPCAwID8gMCA6IGQ7CiAgICBjb25zdCBuYyA9IGY7CiAgICBjb25zdCByZ2JEID0gWwogICAgICBkICogKDEwMCAvIHJXKSArIDEgLSBkLAogICAgICBkICogKDEwMCAvIGdXKSArIDEgLSBkLAogICAgICBkICogKDEwMCAvIGJXKSArIDEgLSBkCiAgICBdOwogICAgY29uc3QgayA9IDEgLyAoNSAqIGFkYXB0aW5nTHVtaW5hbmNlICsgMSk7CiAgICBjb25zdCBrNCA9IGsgKiBrICogayAqIGs7CiAgICBjb25zdCBrNEYgPSAxIC0gazQ7CiAgICBjb25zdCBmbCA9IGs0ICogYWRhcHRpbmdMdW1pbmFuY2UgKyAwLjEgKiBrNEYgKiBrNEYgKiBNYXRoLmNicnQoNSAqIGFkYXB0aW5nTHVtaW5hbmNlKTsKICAgIGNvbnN0IG4gPSB5RnJvbUxzdGFyKGJhY2tncm91bmRMc3RhcikgLyB3aGl0ZVBvaW50WzFdOwogICAgY29uc3QgeiA9IDEuNDggKyBNYXRoLnNxcnQobik7CiAgICBjb25zdCBuYmIgPSAwLjcyNSAvIE1hdGgucG93KG4sIDAuMik7CiAgICBjb25zdCBuY2IgPSBuYmI7CiAgICBjb25zdCByZ2JBRmFjdG9ycyA9IFsKICAgICAgTWF0aC5wb3coZmwgKiByZ2JEWzBdICogclcgLyAxMDAsIDAuNDIpLAogICAgICBNYXRoLnBvdyhmbCAqIHJnYkRbMV0gKiBnVyAvIDEwMCwgMC40MiksCiAgICAgIE1hdGgucG93KGZsICogcmdiRFsyXSAqIGJXIC8gMTAwLCAwLjQyKQogICAgXTsKICAgIGNvbnN0IHJnYkEgPSBbCiAgICAgIDQwMCAqIHJnYkFGYWN0b3JzWzBdIC8gKHJnYkFGYWN0b3JzWzBdICsgMjcuMTMpLAogICAgICA0MDAgKiByZ2JBRmFjdG9yc1sxXSAvIChyZ2JBRmFjdG9yc1sxXSArIDI3LjEzKSwKICAgICAgNDAwICogcmdiQUZhY3RvcnNbMl0gLyAocmdiQUZhY3RvcnNbMl0gKyAyNy4xMykKICAgIF07CiAgICBjb25zdCBhdyA9ICgyICogcmdiQVswXSArIHJnYkFbMV0gKyAwLjA1ICogcmdiQVsyXSkgKiBuYmI7CiAgICByZXR1cm4gbmV3IFZpZXdpbmdDb25kaXRpb25zKG4sIGF3LCBuYmIsIG5jYiwgYywgbmMsIHJnYkQsIGZsLCBNYXRoLnBvdyhmbCwgMC4yNSksIHopOwogIH0KfQpWaWV3aW5nQ29uZGl0aW9ucy5ERUZBVUxUID0gVmlld2luZ0NvbmRpdGlvbnMubWFrZSgpOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQwogKgogKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgogKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKICoKICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKICoKICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICovCmNsYXNzIENhbTE2IHsKICBjb25zdHJ1Y3RvcihodWUsIGNocm9tYSwgaiwgcSwgbSwgcywganN0YXIsIGFzdGFyLCBic3RhcikgewogICAgdGhpcy5odWUgPSBodWU7CiAgICB0aGlzLmNocm9tYSA9IGNocm9tYTsKICAgIHRoaXMuaiA9IGo7CiAgICB0aGlzLnEgPSBxOwogICAgdGhpcy5tID0gbTsKICAgIHRoaXMucyA9IHM7CiAgICB0aGlzLmpzdGFyID0ganN0YXI7CiAgICB0aGlzLmFzdGFyID0gYXN0YXI7CiAgICB0aGlzLmJzdGFyID0gYnN0YXI7CiAgfQogIGRpc3RhbmNlKG90aGVyKSB7CiAgICBjb25zdCBkSiA9IHRoaXMuanN0YXIgLSBvdGhlci5qc3RhcjsKICAgIGNvbnN0IGRBID0gdGhpcy5hc3RhciAtIG90aGVyLmFzdGFyOwogICAgY29uc3QgZEIgPSB0aGlzLmJzdGFyIC0gb3RoZXIuYnN0YXI7CiAgICBjb25zdCBkRVByaW1lID0gTWF0aC5zcXJ0KGRKICogZEogKyBkQSAqIGRBICsgZEIgKiBkQik7CiAgICBjb25zdCBkRSA9IDEuNDEgKiBNYXRoLnBvdyhkRVByaW1lLCAwLjYzKTsKICAgIHJldHVybiBkRTsKICB9CiAgc3RhdGljIGZyb21JbnQoYXJnYikgewogICAgcmV0dXJuIENhbTE2LmZyb21JbnRJblZpZXdpbmdDb25kaXRpb25zKGFyZ2IsIFZpZXdpbmdDb25kaXRpb25zLkRFRkFVTFQpOwogIH0KICBzdGF0aWMgZnJvbUludEluVmlld2luZ0NvbmRpdGlvbnMoYXJnYiwgdmlld2luZ0NvbmRpdGlvbnMpIHsKICAgIGNvbnN0IHJlZCA9IChhcmdiICYgMTY3MTE2ODApID4+IDE2OwogICAgY29uc3QgZ3JlZW4gPSAoYXJnYiAmIDY1MjgwKSA+PiA4OwogICAgY29uc3QgYmx1ZSA9IGFyZ2IgJiAyNTU7CiAgICBjb25zdCByZWRMID0gbGluZWFyaXplZChyZWQpOwogICAgY29uc3QgZ3JlZW5MID0gbGluZWFyaXplZChncmVlbik7CiAgICBjb25zdCBibHVlTCA9IGxpbmVhcml6ZWQoYmx1ZSk7CiAgICBjb25zdCB4ID0gMC40MTIzMzg5NSAqIHJlZEwgKyAwLjM1NzYyMDY0ICogZ3JlZW5MICsgMC4xODA1MTA0MiAqIGJsdWVMOwogICAgY29uc3QgeSA9IDAuMjEyNiAqIHJlZEwgKyAwLjcxNTIgKiBncmVlbkwgKyAwLjA3MjIgKiBibHVlTDsKICAgIGNvbnN0IHogPSAwLjAxOTMyMTQxICogcmVkTCArIDAuMTE5MTYzODIgKiBncmVlbkwgKyAwLjk1MDM0NDc4ICogYmx1ZUw7CiAgICBjb25zdCByQyA9IDAuNDAxMjg4ICogeCArIDAuNjUwMTczICogeSAtIDAuMDUxNDYxICogejsKICAgIGNvbnN0IGdDID0gLTAuMjUwMjY4ICogeCArIDEuMjA0NDE0ICogeSArIDAuMDQ1ODU0ICogejsKICAgIGNvbnN0IGJDID0gLTIwNzllLTYgKiB4ICsgMC4wNDg5NTIgKiB5ICsgMC45NTMxMjcgKiB6OwogICAgY29uc3QgckQgPSB2aWV3aW5nQ29uZGl0aW9ucy5yZ2JEWzBdICogckM7CiAgICBjb25zdCBnRCA9IHZpZXdpbmdDb25kaXRpb25zLnJnYkRbMV0gKiBnQzsKICAgIGNvbnN0IGJEID0gdmlld2luZ0NvbmRpdGlvbnMucmdiRFsyXSAqIGJDOwogICAgY29uc3QgckFGID0gTWF0aC5wb3codmlld2luZ0NvbmRpdGlvbnMuZmwgKiBNYXRoLmFicyhyRCkgLyAxMDAsIDAuNDIpOwogICAgY29uc3QgZ0FGID0gTWF0aC5wb3codmlld2luZ0NvbmRpdGlvbnMuZmwgKiBNYXRoLmFicyhnRCkgLyAxMDAsIDAuNDIpOwogICAgY29uc3QgYkFGID0gTWF0aC5wb3codmlld2luZ0NvbmRpdGlvbnMuZmwgKiBNYXRoLmFicyhiRCkgLyAxMDAsIDAuNDIpOwogICAgY29uc3QgckEgPSBzaWdudW0ockQpICogNDAwICogckFGIC8gKHJBRiArIDI3LjEzKTsKICAgIGNvbnN0IGdBID0gc2lnbnVtKGdEKSAqIDQwMCAqIGdBRiAvIChnQUYgKyAyNy4xMyk7CiAgICBjb25zdCBiQSA9IHNpZ251bShiRCkgKiA0MDAgKiBiQUYgLyAoYkFGICsgMjcuMTMpOwogICAgY29uc3QgYSA9ICgxMSAqIHJBICsgLTEyICogZ0EgKyBiQSkgLyAxMTsKICAgIGNvbnN0IGIgPSAockEgKyBnQSAtIDIgKiBiQSkgLyA5OwogICAgY29uc3QgdSA9ICgyMCAqIHJBICsgMjAgKiBnQSArIDIxICogYkEpIC8gMjA7CiAgICBjb25zdCBwMiA9ICg0MCAqIHJBICsgMjAgKiBnQSArIGJBKSAvIDIwOwogICAgY29uc3QgYXRhbjIgPSBNYXRoLmF0YW4yKGIsIGEpOwogICAgY29uc3QgYXRhbkRlZ3JlZXMgPSBhdGFuMiAqIDE4MCAvIE1hdGguUEk7CiAgICBjb25zdCBodWUgPSBhdGFuRGVncmVlcyA8IDAgPyBhdGFuRGVncmVlcyArIDM2MCA6IGF0YW5EZWdyZWVzID49IDM2MCA/IGF0YW5EZWdyZWVzIC0gMzYwIDogYXRhbkRlZ3JlZXM7CiAgICBjb25zdCBodWVSYWRpYW5zID0gaHVlICogTWF0aC5QSSAvIDE4MDsKICAgIGNvbnN0IGFjID0gcDIgKiB2aWV3aW5nQ29uZGl0aW9ucy5uYmI7CiAgICBjb25zdCBqID0gMTAwICogTWF0aC5wb3coYWMgLyB2aWV3aW5nQ29uZGl0aW9ucy5hdywgdmlld2luZ0NvbmRpdGlvbnMuYyAqIHZpZXdpbmdDb25kaXRpb25zLnopOwogICAgY29uc3QgcSA9IDQgLyB2aWV3aW5nQ29uZGl0aW9ucy5jICogTWF0aC5zcXJ0KGogLyAxMDApICogKHZpZXdpbmdDb25kaXRpb25zLmF3ICsgNCkgKiB2aWV3aW5nQ29uZGl0aW9ucy5mTFJvb3Q7CiAgICBjb25zdCBodWVQcmltZSA9IGh1ZSA8IDIwLjE0ID8gaHVlICsgMzYwIDogaHVlOwogICAgY29uc3QgZUh1ZSA9IDAuMjUgKiAoTWF0aC5jb3MoaHVlUHJpbWUgKiBNYXRoLlBJIC8gMTgwICsgMikgKyAzLjgpOwogICAgY29uc3QgcDEgPSA1ZTQgLyAxMyAqIGVIdWUgKiB2aWV3aW5nQ29uZGl0aW9ucy5uYyAqIHZpZXdpbmdDb25kaXRpb25zLm5jYjsKICAgIGNvbnN0IHQgPSBwMSAqIE1hdGguc3FydChhICogYSArIGIgKiBiKSAvICh1ICsgMC4zMDUpOwogICAgY29uc3QgYWxwaGEgPSBNYXRoLnBvdyh0LCAwLjkpICogTWF0aC5wb3coMS42NCAtIE1hdGgucG93KDAuMjksIHZpZXdpbmdDb25kaXRpb25zLm4pLCAwLjczKTsKICAgIGNvbnN0IGMgPSBhbHBoYSAqIE1hdGguc3FydChqIC8gMTAwKTsKICAgIGNvbnN0IG0gPSBjICogdmlld2luZ0NvbmRpdGlvbnMuZkxSb290OwogICAgY29uc3QgcyA9IDUwICogTWF0aC5zcXJ0KGFscGhhICogdmlld2luZ0NvbmRpdGlvbnMuYyAvICh2aWV3aW5nQ29uZGl0aW9ucy5hdyArIDQpKTsKICAgIGNvbnN0IGpzdGFyID0gKDEgKyAxMDAgKiA3ZS0zKSAqIGogLyAoMSArIDdlLTMgKiBqKTsKICAgIGNvbnN0IG1zdGFyID0gMSAvIDAuMDIyOCAqIE1hdGgubG9nKDEgKyAwLjAyMjggKiBtKTsKICAgIGNvbnN0IGFzdGFyID0gbXN0YXIgKiBNYXRoLmNvcyhodWVSYWRpYW5zKTsKICAgIGNvbnN0IGJzdGFyID0gbXN0YXIgKiBNYXRoLnNpbihodWVSYWRpYW5zKTsKICAgIHJldHVybiBuZXcgQ2FtMTYoaHVlLCBjLCBqLCBxLCBtLCBzLCBqc3RhciwgYXN0YXIsIGJzdGFyKTsKICB9CiAgc3RhdGljIGZyb21KY2goaiwgYywgaCkgewogICAgcmV0dXJuIENhbTE2LmZyb21KY2hJblZpZXdpbmdDb25kaXRpb25zKGosIGMsIGgsIFZpZXdpbmdDb25kaXRpb25zLkRFRkFVTFQpOwogIH0KICBzdGF0aWMgZnJvbUpjaEluVmlld2luZ0NvbmRpdGlvbnMoaiwgYywgaCwgdmlld2luZ0NvbmRpdGlvbnMpIHsKICAgIGNvbnN0IHEgPSA0IC8gdmlld2luZ0NvbmRpdGlvbnMuYyAqIE1hdGguc3FydChqIC8gMTAwKSAqICh2aWV3aW5nQ29uZGl0aW9ucy5hdyArIDQpICogdmlld2luZ0NvbmRpdGlvbnMuZkxSb290OwogICAgY29uc3QgbSA9IGMgKiB2aWV3aW5nQ29uZGl0aW9ucy5mTFJvb3Q7CiAgICBjb25zdCBhbHBoYSA9IGMgLyBNYXRoLnNxcnQoaiAvIDEwMCk7CiAgICBjb25zdCBzID0gNTAgKiBNYXRoLnNxcnQoYWxwaGEgKiB2aWV3aW5nQ29uZGl0aW9ucy5jIC8gKHZpZXdpbmdDb25kaXRpb25zLmF3ICsgNCkpOwogICAgY29uc3QgaHVlUmFkaWFucyA9IGggKiBNYXRoLlBJIC8gMTgwOwogICAgY29uc3QganN0YXIgPSAoMSArIDEwMCAqIDdlLTMpICogaiAvICgxICsgN2UtMyAqIGopOwogICAgY29uc3QgbXN0YXIgPSAxIC8gMC4wMjI4ICogTWF0aC5sb2coMSArIDAuMDIyOCAqIG0pOwogICAgY29uc3QgYXN0YXIgPSBtc3RhciAqIE1hdGguY29zKGh1ZVJhZGlhbnMpOwogICAgY29uc3QgYnN0YXIgPSBtc3RhciAqIE1hdGguc2luKGh1ZVJhZGlhbnMpOwogICAgcmV0dXJuIG5ldyBDYW0xNihoLCBjLCBqLCBxLCBtLCBzLCBqc3RhciwgYXN0YXIsIGJzdGFyKTsKICB9CiAgc3RhdGljIGZyb21VY3MoanN0YXIsIGFzdGFyLCBic3RhcikgewogICAgcmV0dXJuIENhbTE2LmZyb21VY3NJblZpZXdpbmdDb25kaXRpb25zKGpzdGFyLCBhc3RhciwgYnN0YXIsIFZpZXdpbmdDb25kaXRpb25zLkRFRkFVTFQpOwogIH0KICBzdGF0aWMgZnJvbVVjc0luVmlld2luZ0NvbmRpdGlvbnMoanN0YXIsIGFzdGFyLCBic3Rhciwgdmlld2luZ0NvbmRpdGlvbnMpIHsKICAgIGNvbnN0IGEgPSBhc3RhcjsKICAgIGNvbnN0IGIgPSBic3RhcjsKICAgIGNvbnN0IG0gPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7CiAgICBjb25zdCBNID0gKE1hdGguZXhwKG0gKiAwLjAyMjgpIC0gMSkgLyAwLjAyMjg7CiAgICBjb25zdCBjID0gTSAvIHZpZXdpbmdDb25kaXRpb25zLmZMUm9vdDsKICAgIGxldCBoID0gTWF0aC5hdGFuMihiLCBhKSAqICgxODAgLyBNYXRoLlBJKTsKICAgIGlmIChoIDwgMCkgewogICAgICBoICs9IDM2MDsKICAgIH0KICAgIGNvbnN0IGogPSBqc3RhciAvICgxIC0gKGpzdGFyIC0gMTAwKSAqIDdlLTMpOwogICAgcmV0dXJuIENhbTE2LmZyb21KY2hJblZpZXdpbmdDb25kaXRpb25zKGosIGMsIGgsIHZpZXdpbmdDb25kaXRpb25zKTsKICB9CiAgdG9JbnQoKSB7CiAgICByZXR1cm4gdGhpcy52aWV3ZWQoVmlld2luZ0NvbmRpdGlvbnMuREVGQVVMVCk7CiAgfQogIHZpZXdlZCh2aWV3aW5nQ29uZGl0aW9ucykgewogICAgY29uc3QgYWxwaGEgPSB0aGlzLmNocm9tYSA9PT0gMCB8fCB0aGlzLmogPT09IDAgPyAwIDogdGhpcy5jaHJvbWEgLyBNYXRoLnNxcnQodGhpcy5qIC8gMTAwKTsKICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhhbHBoYSAvIE1hdGgucG93KDEuNjQgLSBNYXRoLnBvdygwLjI5LCB2aWV3aW5nQ29uZGl0aW9ucy5uKSwgMC43MyksIDEgLyAwLjkpOwogICAgY29uc3QgaFJhZCA9IHRoaXMuaHVlICogTWF0aC5QSSAvIDE4MDsKICAgIGNvbnN0IGVIdWUgPSAwLjI1ICogKE1hdGguY29zKGhSYWQgKyAyKSArIDMuOCk7CiAgICBjb25zdCBhYyA9IHZpZXdpbmdDb25kaXRpb25zLmF3ICogTWF0aC5wb3codGhpcy5qIC8gMTAwLCAxIC8gdmlld2luZ0NvbmRpdGlvbnMuYyAvIHZpZXdpbmdDb25kaXRpb25zLnopOwogICAgY29uc3QgcDEgPSBlSHVlICogKDVlNCAvIDEzKSAqIHZpZXdpbmdDb25kaXRpb25zLm5jICogdmlld2luZ0NvbmRpdGlvbnMubmNiOwogICAgY29uc3QgcDIgPSBhYyAvIHZpZXdpbmdDb25kaXRpb25zLm5iYjsKICAgIGNvbnN0IGhTaW4gPSBNYXRoLnNpbihoUmFkKTsKICAgIGNvbnN0IGhDb3MgPSBNYXRoLmNvcyhoUmFkKTsKICAgIGNvbnN0IGdhbW1hID0gMjMgKiAocDIgKyAwLjMwNSkgKiB0IC8gKDIzICogcDEgKyAxMSAqIHQgKiBoQ29zICsgMTA4ICogdCAqIGhTaW4pOwogICAgY29uc3QgYSA9IGdhbW1hICogaENvczsKICAgIGNvbnN0IGIgPSBnYW1tYSAqIGhTaW47CiAgICBjb25zdCByQSA9ICg0NjAgKiBwMiArIDQ1MSAqIGEgKyAyODggKiBiKSAvIDE0MDM7CiAgICBjb25zdCBnQSA9ICg0NjAgKiBwMiAtIDg5MSAqIGEgLSAyNjEgKiBiKSAvIDE0MDM7CiAgICBjb25zdCBiQSA9ICg0NjAgKiBwMiAtIDIyMCAqIGEgLSA2MzAwICogYikgLyAxNDAzOwogICAgY29uc3QgckNCYXNlID0gTWF0aC5tYXgoMCwgMjcuMTMgKiBNYXRoLmFicyhyQSkgLyAoNDAwIC0gTWF0aC5hYnMockEpKSk7CiAgICBjb25zdCByQyA9IHNpZ251bShyQSkgKiAoMTAwIC8gdmlld2luZ0NvbmRpdGlvbnMuZmwpICogTWF0aC5wb3cockNCYXNlLCAxIC8gMC40Mik7CiAgICBjb25zdCBnQ0Jhc2UgPSBNYXRoLm1heCgwLCAyNy4xMyAqIE1hdGguYWJzKGdBKSAvICg0MDAgLSBNYXRoLmFicyhnQSkpKTsKICAgIGNvbnN0IGdDID0gc2lnbnVtKGdBKSAqICgxMDAgLyB2aWV3aW5nQ29uZGl0aW9ucy5mbCkgKiBNYXRoLnBvdyhnQ0Jhc2UsIDEgLyAwLjQyKTsKICAgIGNvbnN0IGJDQmFzZSA9IE1hdGgubWF4KDAsIDI3LjEzICogTWF0aC5hYnMoYkEpIC8gKDQwMCAtIE1hdGguYWJzKGJBKSkpOwogICAgY29uc3QgYkMgPSBzaWdudW0oYkEpICogKDEwMCAvIHZpZXdpbmdDb25kaXRpb25zLmZsKSAqIE1hdGgucG93KGJDQmFzZSwgMSAvIDAuNDIpOwogICAgY29uc3QgckYgPSByQyAvIHZpZXdpbmdDb25kaXRpb25zLnJnYkRbMF07CiAgICBjb25zdCBnRiA9IGdDIC8gdmlld2luZ0NvbmRpdGlvbnMucmdiRFsxXTsKICAgIGNvbnN0IGJGID0gYkMgLyB2aWV3aW5nQ29uZGl0aW9ucy5yZ2JEWzJdOwogICAgY29uc3QgeCA9IDEuODYyMDY3ODYgKiByRiAtIDEuMDExMjU0NjMgKiBnRiArIDAuMTQ5MTg2NzcgKiBiRjsKICAgIGNvbnN0IHkgPSAwLjM4NzUyNjU0ICogckYgKyAwLjYyMTQ0NzQ0ICogZ0YgLSA4OTczOThlLTggKiBiRjsKICAgIGNvbnN0IHogPSAtMC4wMTU4NDE1ICogckYgLSAwLjAzNDEyMjk0ICogZ0YgKyAxLjA0OTk2NDQ0ICogYkY7CiAgICBjb25zdCBhcmdiID0gYXJnYkZyb21YeXooeCwgeSwgeik7CiAgICByZXR1cm4gYXJnYjsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMKICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwpjbGFzcyBIY3RTb2x2ZXIgewogIHN0YXRpYyBzYW5pdGl6ZVJhZGlhbnMoYW5nbGUpIHsKICAgIHJldHVybiAoYW5nbGUgKyBNYXRoLlBJICogOCkgJSAoTWF0aC5QSSAqIDIpOwogIH0KICBzdGF0aWMgdHJ1ZURlbGluZWFyaXplZChyZ2JDb21wb25lbnQpIHsKICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSByZ2JDb21wb25lbnQgLyAxMDA7CiAgICBsZXQgZGVsaW5lYXJpemVkMiA9IDA7CiAgICBpZiAobm9ybWFsaXplZCA8PSAzMTMwOGUtNykgewogICAgICBkZWxpbmVhcml6ZWQyID0gbm9ybWFsaXplZCAqIDEyLjkyOwogICAgfSBlbHNlIHsKICAgICAgZGVsaW5lYXJpemVkMiA9IDEuMDU1ICogTWF0aC5wb3cobm9ybWFsaXplZCwgMSAvIDIuNCkgLSAwLjA1NTsKICAgIH0KICAgIHJldHVybiBkZWxpbmVhcml6ZWQyICogMjU1OwogIH0KICBzdGF0aWMgY2hyb21hdGljQWRhcHRhdGlvbihjb21wb25lbnQpIHsKICAgIGNvbnN0IGFmID0gTWF0aC5wb3coTWF0aC5hYnMoY29tcG9uZW50KSwgMC40Mik7CiAgICByZXR1cm4gc2lnbnVtKGNvbXBvbmVudCkgKiA0MDAgKiBhZiAvIChhZiArIDI3LjEzKTsKICB9CiAgc3RhdGljIGh1ZU9mKGxpbnJnYikgewogICAgY29uc3Qgc2NhbGVkRGlzY291bnQgPSBtYXRyaXhNdWx0aXBseShsaW5yZ2IsIEhjdFNvbHZlci5TQ0FMRURfRElTQ09VTlRfRlJPTV9MSU5SR0IpOwogICAgY29uc3QgckEgPSBIY3RTb2x2ZXIuY2hyb21hdGljQWRhcHRhdGlvbihzY2FsZWREaXNjb3VudFswXSk7CiAgICBjb25zdCBnQSA9IEhjdFNvbHZlci5jaHJvbWF0aWNBZGFwdGF0aW9uKHNjYWxlZERpc2NvdW50WzFdKTsKICAgIGNvbnN0IGJBID0gSGN0U29sdmVyLmNocm9tYXRpY0FkYXB0YXRpb24oc2NhbGVkRGlzY291bnRbMl0pOwogICAgY29uc3QgYSA9ICgxMSAqIHJBICsgLTEyICogZ0EgKyBiQSkgLyAxMTsKICAgIGNvbnN0IGIgPSAockEgKyBnQSAtIDIgKiBiQSkgLyA5OwogICAgcmV0dXJuIE1hdGguYXRhbjIoYiwgYSk7CiAgfQogIHN0YXRpYyBhcmVJbkN5Y2xpY09yZGVyKGEsIGIsIGMpIHsKICAgIGNvbnN0IGRlbHRhQUIgPSBIY3RTb2x2ZXIuc2FuaXRpemVSYWRpYW5zKGIgLSBhKTsKICAgIGNvbnN0IGRlbHRhQUMgPSBIY3RTb2x2ZXIuc2FuaXRpemVSYWRpYW5zKGMgLSBhKTsKICAgIHJldHVybiBkZWx0YUFCIDwgZGVsdGFBQzsKICB9CiAgc3RhdGljIGludGVyY2VwdChzb3VyY2UsIG1pZCwgdGFyZ2V0KSB7CiAgICByZXR1cm4gKG1pZCAtIHNvdXJjZSkgLyAodGFyZ2V0IC0gc291cmNlKTsKICB9CiAgc3RhdGljIGxlcnBQb2ludChzb3VyY2UsIHQsIHRhcmdldCkgewogICAgcmV0dXJuIFsKICAgICAgc291cmNlWzBdICsgKHRhcmdldFswXSAtIHNvdXJjZVswXSkgKiB0LAogICAgICBzb3VyY2VbMV0gKyAodGFyZ2V0WzFdIC0gc291cmNlWzFdKSAqIHQsCiAgICAgIHNvdXJjZVsyXSArICh0YXJnZXRbMl0gLSBzb3VyY2VbMl0pICogdAogICAgXTsKICB9CiAgc3RhdGljIHNldENvb3JkaW5hdGUoc291cmNlLCBjb29yZGluYXRlLCB0YXJnZXQsIGF4aXMpIHsKICAgIGNvbnN0IHQgPSBIY3RTb2x2ZXIuaW50ZXJjZXB0KHNvdXJjZVtheGlzXSwgY29vcmRpbmF0ZSwgdGFyZ2V0W2F4aXNdKTsKICAgIHJldHVybiBIY3RTb2x2ZXIubGVycFBvaW50KHNvdXJjZSwgdCwgdGFyZ2V0KTsKICB9CiAgc3RhdGljIGlzQm91bmRlZCh4KSB7CiAgICByZXR1cm4gMCA8PSB4ICYmIHggPD0gMTAwOwogIH0KICBzdGF0aWMgbnRoVmVydGV4KHksIG4pIHsKICAgIGNvbnN0IGtSID0gSGN0U29sdmVyLllfRlJPTV9MSU5SR0JbMF07CiAgICBjb25zdCBrRyA9IEhjdFNvbHZlci5ZX0ZST01fTElOUkdCWzFdOwogICAgY29uc3Qga0IgPSBIY3RTb2x2ZXIuWV9GUk9NX0xJTlJHQlsyXTsKICAgIGNvbnN0IGNvb3JkQSA9IG4gJSA0IDw9IDEgPyAwIDogMTAwOwogICAgY29uc3QgY29vcmRCID0gbiAlIDIgPT09IDAgPyAwIDogMTAwOwogICAgaWYgKG4gPCA0KSB7CiAgICAgIGNvbnN0IGcgPSBjb29yZEE7CiAgICAgIGNvbnN0IGIgPSBjb29yZEI7CiAgICAgIGNvbnN0IHIgPSAoeSAtIGcgKiBrRyAtIGIgKiBrQikgLyBrUjsKICAgICAgaWYgKEhjdFNvbHZlci5pc0JvdW5kZWQocikpIHsKICAgICAgICByZXR1cm4gW3IsIGcsIGJdOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBbLTEsIC0xLCAtMV07CiAgICAgIH0KICAgIH0gZWxzZSBpZiAobiA8IDgpIHsKICAgICAgY29uc3QgYiA9IGNvb3JkQTsKICAgICAgY29uc3QgciA9IGNvb3JkQjsKICAgICAgY29uc3QgZyA9ICh5IC0gciAqIGtSIC0gYiAqIGtCKSAvIGtHOwogICAgICBpZiAoSGN0U29sdmVyLmlzQm91bmRlZChnKSkgewogICAgICAgIHJldHVybiBbciwgZywgYl07CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIFstMSwgLTEsIC0xXTsKICAgICAgfQogICAgfSBlbHNlIHsKICAgICAgY29uc3QgciA9IGNvb3JkQTsKICAgICAgY29uc3QgZyA9IGNvb3JkQjsKICAgICAgY29uc3QgYiA9ICh5IC0gciAqIGtSIC0gZyAqIGtHKSAvIGtCOwogICAgICBpZiAoSGN0U29sdmVyLmlzQm91bmRlZChiKSkgewogICAgICAgIHJldHVybiBbciwgZywgYl07CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIFstMSwgLTEsIC0xXTsKICAgICAgfQogICAgfQogIH0KICBzdGF0aWMgYmlzZWN0VG9TZWdtZW50KHksIHRhcmdldEh1ZSkgewogICAgbGV0IGxlZnQgPSBbLTEsIC0xLCAtMV07CiAgICBsZXQgcmlnaHQgPSBsZWZ0OwogICAgbGV0IGxlZnRIdWUgPSAwOwogICAgbGV0IHJpZ2h0SHVlID0gMDsKICAgIGxldCBpbml0aWFsaXplZCA9IGZhbHNlOwogICAgbGV0IHVuY3V0ID0gdHJ1ZTsKICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMTI7IG4rKykgewogICAgICBjb25zdCBtaWQgPSBIY3RTb2x2ZXIubnRoVmVydGV4KHksIG4pOwogICAgICBpZiAobWlkWzBdIDwgMCkgewogICAgICAgIGNvbnRpbnVlOwogICAgICB9CiAgICAgIGNvbnN0IG1pZEh1ZSA9IEhjdFNvbHZlci5odWVPZihtaWQpOwogICAgICBpZiAoIWluaXRpYWxpemVkKSB7CiAgICAgICAgbGVmdCA9IG1pZDsKICAgICAgICByaWdodCA9IG1pZDsKICAgICAgICBsZWZ0SHVlID0gbWlkSHVlOwogICAgICAgIHJpZ2h0SHVlID0gbWlkSHVlOwogICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTsKICAgICAgICBjb250aW51ZTsKICAgICAgfQogICAgICBpZiAodW5jdXQgfHwgSGN0U29sdmVyLmFyZUluQ3ljbGljT3JkZXIobGVmdEh1ZSwgbWlkSHVlLCByaWdodEh1ZSkpIHsKICAgICAgICB1bmN1dCA9IGZhbHNlOwogICAgICAgIGlmIChIY3RTb2x2ZXIuYXJlSW5DeWNsaWNPcmRlcihsZWZ0SHVlLCB0YXJnZXRIdWUsIG1pZEh1ZSkpIHsKICAgICAgICAgIHJpZ2h0ID0gbWlkOwogICAgICAgICAgcmlnaHRIdWUgPSBtaWRIdWU7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIGxlZnQgPSBtaWQ7CiAgICAgICAgICBsZWZ0SHVlID0gbWlkSHVlOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgcmV0dXJuIFtsZWZ0LCByaWdodF07CiAgfQogIHN0YXRpYyBtaWRwb2ludChhLCBiKSB7CiAgICByZXR1cm4gWwogICAgICAoYVswXSArIGJbMF0pIC8gMiwKICAgICAgKGFbMV0gKyBiWzFdKSAvIDIsCiAgICAgIChhWzJdICsgYlsyXSkgLyAyCiAgICBdOwogIH0KICBzdGF0aWMgY3JpdGljYWxQbGFuZUJlbG93KHgpIHsKICAgIHJldHVybiBNYXRoLmZsb29yKHggLSAwLjUpOwogIH0KICBzdGF0aWMgY3JpdGljYWxQbGFuZUFib3ZlKHgpIHsKICAgIHJldHVybiBNYXRoLmNlaWwoeCAtIDAuNSk7CiAgfQogIHN0YXRpYyBiaXNlY3RUb0xpbWl0KHksIHRhcmdldEh1ZSkgewogICAgY29uc3Qgc2VnbWVudCA9IEhjdFNvbHZlci5iaXNlY3RUb1NlZ21lbnQoeSwgdGFyZ2V0SHVlKTsKICAgIGxldCBsZWZ0ID0gc2VnbWVudFswXTsKICAgIGxldCBsZWZ0SHVlID0gSGN0U29sdmVyLmh1ZU9mKGxlZnQpOwogICAgbGV0IHJpZ2h0ID0gc2VnbWVudFsxXTsKICAgIGZvciAobGV0IGF4aXMgPSAwOyBheGlzIDwgMzsgYXhpcysrKSB7CiAgICAgIGlmIChsZWZ0W2F4aXNdICE9PSByaWdodFtheGlzXSkgewogICAgICAgIGxldCBsUGxhbmUgPSAtMTsKICAgICAgICBsZXQgclBsYW5lID0gMjU1OwogICAgICAgIGlmIChsZWZ0W2F4aXNdIDwgcmlnaHRbYXhpc10pIHsKICAgICAgICAgIGxQbGFuZSA9IEhjdFNvbHZlci5jcml0aWNhbFBsYW5lQmVsb3coSGN0U29sdmVyLnRydWVEZWxpbmVhcml6ZWQobGVmdFtheGlzXSkpOwogICAgICAgICAgclBsYW5lID0gSGN0U29sdmVyLmNyaXRpY2FsUGxhbmVBYm92ZShIY3RTb2x2ZXIudHJ1ZURlbGluZWFyaXplZChyaWdodFtheGlzXSkpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBsUGxhbmUgPSBIY3RTb2x2ZXIuY3JpdGljYWxQbGFuZUFib3ZlKEhjdFNvbHZlci50cnVlRGVsaW5lYXJpemVkKGxlZnRbYXhpc10pKTsKICAgICAgICAgIHJQbGFuZSA9IEhjdFNvbHZlci5jcml0aWNhbFBsYW5lQmVsb3coSGN0U29sdmVyLnRydWVEZWxpbmVhcml6ZWQocmlnaHRbYXhpc10pKTsKICAgICAgICB9CiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHsKICAgICAgICAgIGlmIChNYXRoLmFicyhyUGxhbmUgLSBsUGxhbmUpIDw9IDEpIHsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBjb25zdCBtUGxhbmUgPSBNYXRoLmZsb29yKChsUGxhbmUgKyByUGxhbmUpIC8gMik7CiAgICAgICAgICAgIGNvbnN0IG1pZFBsYW5lQ29vcmRpbmF0ZSA9IEhjdFNvbHZlci5DUklUSUNBTF9QTEFORVNbbVBsYW5lXTsKICAgICAgICAgICAgY29uc3QgbWlkID0gSGN0U29sdmVyLnNldENvb3JkaW5hdGUobGVmdCwgbWlkUGxhbmVDb29yZGluYXRlLCByaWdodCwgYXhpcyk7CiAgICAgICAgICAgIGNvbnN0IG1pZEh1ZSA9IEhjdFNvbHZlci5odWVPZihtaWQpOwogICAgICAgICAgICBpZiAoSGN0U29sdmVyLmFyZUluQ3ljbGljT3JkZXIobGVmdEh1ZSwgdGFyZ2V0SHVlLCBtaWRIdWUpKSB7CiAgICAgICAgICAgICAgcmlnaHQgPSBtaWQ7CiAgICAgICAgICAgICAgclBsYW5lID0gbVBsYW5lOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGxlZnQgPSBtaWQ7CiAgICAgICAgICAgICAgbGVmdEh1ZSA9IG1pZEh1ZTsKICAgICAgICAgICAgICBsUGxhbmUgPSBtUGxhbmU7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIHJldHVybiBIY3RTb2x2ZXIubWlkcG9pbnQobGVmdCwgcmlnaHQpOwogIH0KICBzdGF0aWMgaW52ZXJzZUNocm9tYXRpY0FkYXB0YXRpb24oYWRhcHRlZCkgewogICAgY29uc3QgYWRhcHRlZEFicyA9IE1hdGguYWJzKGFkYXB0ZWQpOwogICAgY29uc3QgYmFzZSA9IE1hdGgubWF4KDAsIDI3LjEzICogYWRhcHRlZEFicyAvICg0MDAgLSBhZGFwdGVkQWJzKSk7CiAgICByZXR1cm4gc2lnbnVtKGFkYXB0ZWQpICogTWF0aC5wb3coYmFzZSwgMSAvIDAuNDIpOwogIH0KICBzdGF0aWMgZmluZFJlc3VsdEJ5SihodWVSYWRpYW5zLCBjaHJvbWEsIHkpIHsKICAgIGxldCBqID0gTWF0aC5zcXJ0KHkpICogMTE7CiAgICBjb25zdCB2aWV3aW5nQ29uZGl0aW9ucyA9IFZpZXdpbmdDb25kaXRpb25zLkRFRkFVTFQ7CiAgICBjb25zdCB0SW5uZXJDb2VmZiA9IDEgLyBNYXRoLnBvdygxLjY0IC0gTWF0aC5wb3coMC4yOSwgdmlld2luZ0NvbmRpdGlvbnMubiksIDAuNzMpOwogICAgY29uc3QgZUh1ZSA9IDAuMjUgKiAoTWF0aC5jb3MoaHVlUmFkaWFucyArIDIpICsgMy44KTsKICAgIGNvbnN0IHAxID0gZUh1ZSAqICg1ZTQgLyAxMykgKiB2aWV3aW5nQ29uZGl0aW9ucy5uYyAqIHZpZXdpbmdDb25kaXRpb25zLm5jYjsKICAgIGNvbnN0IGhTaW4gPSBNYXRoLnNpbihodWVSYWRpYW5zKTsKICAgIGNvbnN0IGhDb3MgPSBNYXRoLmNvcyhodWVSYWRpYW5zKTsKICAgIGZvciAobGV0IGl0ZXJhdGlvblJvdW5kID0gMDsgaXRlcmF0aW9uUm91bmQgPCA1OyBpdGVyYXRpb25Sb3VuZCsrKSB7CiAgICAgIGNvbnN0IGpOb3JtYWxpemVkID0gaiAvIDEwMDsKICAgICAgY29uc3QgYWxwaGEgPSBjaHJvbWEgPT09IDAgfHwgaiA9PT0gMCA/IDAgOiBjaHJvbWEgLyBNYXRoLnNxcnQoak5vcm1hbGl6ZWQpOwogICAgICBjb25zdCB0ID0gTWF0aC5wb3coYWxwaGEgKiB0SW5uZXJDb2VmZiwgMSAvIDAuOSk7CiAgICAgIGNvbnN0IGFjID0gdmlld2luZ0NvbmRpdGlvbnMuYXcgKiBNYXRoLnBvdyhqTm9ybWFsaXplZCwgMSAvIHZpZXdpbmdDb25kaXRpb25zLmMgLyB2aWV3aW5nQ29uZGl0aW9ucy56KTsKICAgICAgY29uc3QgcDIgPSBhYyAvIHZpZXdpbmdDb25kaXRpb25zLm5iYjsKICAgICAgY29uc3QgZ2FtbWEgPSAyMyAqIChwMiArIDAuMzA1KSAqIHQgLyAoMjMgKiBwMSArIDExICogdCAqIGhDb3MgKyAxMDggKiB0ICogaFNpbik7CiAgICAgIGNvbnN0IGEgPSBnYW1tYSAqIGhDb3M7CiAgICAgIGNvbnN0IGIgPSBnYW1tYSAqIGhTaW47CiAgICAgIGNvbnN0IHJBID0gKDQ2MCAqIHAyICsgNDUxICogYSArIDI4OCAqIGIpIC8gMTQwMzsKICAgICAgY29uc3QgZ0EgPSAoNDYwICogcDIgLSA4OTEgKiBhIC0gMjYxICogYikgLyAxNDAzOwogICAgICBjb25zdCBiQSA9ICg0NjAgKiBwMiAtIDIyMCAqIGEgLSA2MzAwICogYikgLyAxNDAzOwogICAgICBjb25zdCByQ1NjYWxlZCA9IEhjdFNvbHZlci5pbnZlcnNlQ2hyb21hdGljQWRhcHRhdGlvbihyQSk7CiAgICAgIGNvbnN0IGdDU2NhbGVkID0gSGN0U29sdmVyLmludmVyc2VDaHJvbWF0aWNBZGFwdGF0aW9uKGdBKTsKICAgICAgY29uc3QgYkNTY2FsZWQgPSBIY3RTb2x2ZXIuaW52ZXJzZUNocm9tYXRpY0FkYXB0YXRpb24oYkEpOwogICAgICBjb25zdCBsaW5yZ2IgPSBtYXRyaXhNdWx0aXBseShbckNTY2FsZWQsIGdDU2NhbGVkLCBiQ1NjYWxlZF0sIEhjdFNvbHZlci5MSU5SR0JfRlJPTV9TQ0FMRURfRElTQ09VTlQpOwogICAgICBpZiAobGlucmdiWzBdIDwgMCB8fCBsaW5yZ2JbMV0gPCAwIHx8IGxpbnJnYlsyXSA8IDApIHsKICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBjb25zdCBrUiA9IEhjdFNvbHZlci5ZX0ZST01fTElOUkdCWzBdOwogICAgICBjb25zdCBrRyA9IEhjdFNvbHZlci5ZX0ZST01fTElOUkdCWzFdOwogICAgICBjb25zdCBrQiA9IEhjdFNvbHZlci5ZX0ZST01fTElOUkdCWzJdOwogICAgICBjb25zdCBmbmogPSBrUiAqIGxpbnJnYlswXSArIGtHICogbGlucmdiWzFdICsga0IgKiBsaW5yZ2JbMl07CiAgICAgIGlmIChmbmogPD0gMCkgewogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmIChpdGVyYXRpb25Sb3VuZCA9PT0gNCB8fCBNYXRoLmFicyhmbmogLSB5KSA8IDJlLTMpIHsKICAgICAgICBpZiAobGlucmdiWzBdID4gMTAwLjAxIHx8IGxpbnJnYlsxXSA+IDEwMC4wMSB8fCBsaW5yZ2JbMl0gPiAxMDAuMDEpIHsKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gYXJnYkZyb21MaW5yZ2IobGlucmdiKTsKICAgICAgfQogICAgICBqID0gaiAtIChmbmogLSB5KSAqIGogLyAoMiAqIGZuaik7CiAgICB9CiAgICByZXR1cm4gMDsKICB9CiAgc3RhdGljIHNvbHZlVG9JbnQoaHVlRGVncmVlcywgY2hyb21hLCBsc3RhcikgewogICAgaWYgKGNocm9tYSA8IDFlLTQgfHwgbHN0YXIgPCAxZS00IHx8IGxzdGFyID4gOTkuOTk5OSkgewogICAgICByZXR1cm4gYXJnYkZyb21Mc3Rhcihsc3Rhcik7CiAgICB9CiAgICBodWVEZWdyZWVzID0gc2FuaXRpemVEZWdyZWVzRG91YmxlKGh1ZURlZ3JlZXMpOwogICAgY29uc3QgaHVlUmFkaWFucyA9IGh1ZURlZ3JlZXMgLyAxODAgKiBNYXRoLlBJOwogICAgY29uc3QgeSA9IHlGcm9tTHN0YXIobHN0YXIpOwogICAgY29uc3QgZXhhY3RBbnN3ZXIgPSBIY3RTb2x2ZXIuZmluZFJlc3VsdEJ5SihodWVSYWRpYW5zLCBjaHJvbWEsIHkpOwogICAgaWYgKGV4YWN0QW5zd2VyICE9PSAwKSB7CiAgICAgIHJldHVybiBleGFjdEFuc3dlcjsKICAgIH0KICAgIGNvbnN0IGxpbnJnYiA9IEhjdFNvbHZlci5iaXNlY3RUb0xpbWl0KHksIGh1ZVJhZGlhbnMpOwogICAgcmV0dXJuIGFyZ2JGcm9tTGlucmdiKGxpbnJnYik7CiAgfQogIHN0YXRpYyBzb2x2ZVRvQ2FtKGh1ZURlZ3JlZXMsIGNocm9tYSwgbHN0YXIpIHsKICAgIHJldHVybiBDYW0xNi5mcm9tSW50KEhjdFNvbHZlci5zb2x2ZVRvSW50KGh1ZURlZ3JlZXMsIGNocm9tYSwgbHN0YXIpKTsKICB9Cn0KSGN0U29sdmVyLlNDQUxFRF9ESVNDT1VOVF9GUk9NX0xJTlJHQiA9IFsKICBbCiAgICAwLjAwMTIwMDgzMzU2ODc4NDUwNCwKICAgIDAuMDAyMzg5Njk0NDkyMTcwODg5LAogICAgMjc5NTc0Mjg4NTg2MTEyNGUtMTkKICBdLAogIFsKICAgIDU4OTEwODY2NTEzNzU5OTllLTE5LAogICAgMC4wMDI5Nzg1NTAyNTczNDM4NzU4LAogICAgMzI3MDY2NjEwNDAwODM5OGUtMTkKICBdLAogIFsKICAgIDEwMTQ2NjkyNDkxNjQwNTcyZS0yMCwKICAgIDUzNjQyMTQzNTkxODY2OTRlLTE5LAogICAgMC4wMDMyOTc5NDAxNzcwNzEyMDc2CiAgXQpdOwpIY3RTb2x2ZXIuTElOUkdCX0ZST01fU0NBTEVEX0RJU0NPVU5UID0gWwogIFsKICAgIDEzNzMuMjE5ODcwOTU5NDIzMSwKICAgIC0xMTAwLjQyNTExOTA3NTQ4MjEsCiAgICAtNy4yNzg2ODEwODkxMDEyMTMKICBdLAogIFsKICAgIC0yNzEuODE1OTY5MDc3OTAzLAogICAgNTU5LjY1ODA0NjU5NDA3MzMsCiAgICAtMzIuNDYwNDc0ODI3OTExOTQKICBdLAogIFsKICAgIDEuOTYyMjg5OTU5OTY2NTY2NiwKICAgIC01Ny4xNzM4MTQ1Mzg4NDQwMDYsCiAgICAzMDguNzIzMzE5NzgxMjM4NQogIF0KXTsKSGN0U29sdmVyLllfRlJPTV9MSU5SR0IgPSBbMC4yMTI2LCAwLjcxNTIsIDAuMDcyMl07CkhjdFNvbHZlci5DUklUSUNBTF9QTEFORVMgPSBbCiAgMC4wMTUxNzYzNDkxNzc0NDE4NzYsCiAgMC4wNDU1MjkwNDc1MzIzMjU2MjQsCiAgMC4wNzU4ODE3NDU4ODcyMDkzOCwKICAwLjEwNjIzNDQ0NDI0MjA5MzEzLAogIDAuMTM2NTg3MTQyNTk2OTc2ODUsCiAgMC4xNjY5Mzk4NDA5NTE4NjA2MiwKICAwLjE5NzI5MjUzOTMwNjc0NDM0LAogIDAuMjI3NjQ1MjM3NjYxNjI4MSwKICAwLjI1Nzk5NzkzNjAxNjUxMTksCiAgMC4yODgzNTA2MzQzNzEzOTU2MywKICAwLjMxODgzMDA5MDQ0MzA1MzIsCiAgMC4zNTA5MjU5MzQ5NTgxMjMsCiAgMC4zODQ4MzE0OTMzMDk2NDI2LAogIDAuNDIwNTc0ODAzMDEwNDk0NjYsCiAgMC40NTgxODMyNzQwNTI4MzgsCiAgMC40OTc2ODM3MjUwMjc0MDIzLAogIDAuNTM5MTAyNDE1OTgwNjM4MSwKICAwLjU4MjQ2NTA3ODQwNDA4OTgsCiAgMC42Mjc3OTY5NDI2OTE0MTA3LAogIDAuNjc1MTIyNzYzMzQ5ODYyMywKICAwLjcyNDQ2Njg0MjIxMjg5MjEsCiAgMC43NzU4NTMwNDk4NjY3ODYsCiAgMC44MjkzMDQ4NDU0NzYyMzMsCiAgMC44ODQ4NDUyOTUxNjk4NDk4LAogIDAuOTQyNDk3MDg5MTI2NjA5LAogIDEuMDAyMjgyNTU3NDg2OTAzOSwKICAxLjA2NDIyMzY4NTE5NzM1NzcsCiAgMS4xMjgzNDIxMjU4ODU4Mjk3LAogIDEuMTk0NjU5MjE0ODUyMjEyOCwKICAxLjI2MzE5NTk4MTI1MTE4NjQsCiAgMS4zMzM5NzMxNTk1MzQ5MDM0LAogIDEuNDA3MDExMjAwMjE2NDQ3LAogIDEuNDgyMzMwMjgwMDA4NjQxNSwKICAxLjU1OTk1MDMxMTM4NzMyNzIsCiAgMS42Mzk4OTA5NTE2MjMzNjc3LAogIDEuNzIyMTcxNjExMzIzNDEwNSwKICAxLjgwNjgxMTQ2MjUxNTYzNzcsCiAgMS44OTM4Mjk0NDYzMTM0MDczLAogIDEuOTgzMjQ0MjgwMTg2Njg1MiwKICAyLjA3NTA3NDQ2NDg2ODU1MSwKICAyLjE2OTMzODI5MDkyMTYyMzQsCiAgMi4yNjYwNTM4NDQ5ODcyMDYzLAogIDIuMzY1MjM5MDE1NzM3OTUsCiAgMi40NjY5MTE0OTk1NTMyMDA3LAogIDIuNTcxMDg4ODA1OTM0NTc2NCwKICAyLjY3Nzc4ODI2MjY3Nzk3ODUsCiAgMi43ODcwMjcwMjA4MTY5MjU3LAogIDIuODk4ODIyMDU5MzUwOTk3LAogIDMuMDEzMTkwMTg5NzcyMDkwNywKICAzLjEzMDE0ODA2MDQwMDI4NjMsCiAgMy4yNDk3MTIxNjA1NDAyMjI2LAogIDMuMzcxODk4ODI0NDY4MTA4NywKICAzLjQ5NjcyNDIzNTI1ODc5NDYsCiAgMy42MjQyMDQ0Mjg0NjE2MzksCiAgMy43NTQzNTUyOTU2MzMzMTEsCiAgMy44ODcxOTI1ODc3MzUxNTgsCiAgNC4wMjI3MzE5MTg0MDIxODUsCiAgNC4xNjA5ODg3NjcwOTAyODksCiAgNC4zMDE5Nzg0ODIxMDc5NDEsCiAgNC40NDU3MTYyODM1MzgwOTIsCiAgNC41OTIyMTcyNjYwNTU3NDYsCiAgNC43NDE0OTY0MDE2NDYyODIsCiAgNC44OTM1Njg1NDIyMjkyOTgsCiAgNS4wNDg0NDg0MjIxOTI0ODgsCiAgNS4yMDYxNTA2NjA4Mzk3MiwKICA1LjM2NjY4OTc2NDc1NzMzNzUsCiAgNS41MzAwODAxMzAxMDIzODY1LAogIDUuNjk2MzM2MDQ0ODE2Mjk0LAogIDUuODY1NDcxNjkwNzY3MzU0LAogIDYuMDM3NTAxMTQ1ODI1MDgyLAogIDYuMjEyNDM4Mzg1ODY5NDc1LAogIDYuMzkwMjk3Mjg2NzM3OTI0LAogIDYuNTcxMDkxNjI2MTEyNDYxLAogIDYuNzU0ODM1MDg1MzQ5ODA0NSwKICA2Ljk0MTU0MTI1MTI1NjYxMSwKICA3LjEzMTIyMzYxNzgxMjE0MywKICA3LjMyMzg5NTU4Nzg0MDU0MywKICA3LjUxOTU3MDQ3NDYzNDY2NjUsCiAgNy43MTgyNjE1MDM1MzM0MzQ1LAogIDcuOTE5OTgxODEzNDU0NTA0LAogIDguMTI0NzQ0NDU4Mzg0MDQyLAogIDguMzMyNTYyNDA4ODI1MTY1LAogIDguNTQzNDQ4NTUzMjA2NzAzLAogIDguNzU3NDE1Njk5MjUzNjgyLAogIDguOTc0NDc2NTc1MzIxMDYzLAogIDkuMTk0NjQzODMxNjkxOTc3LAogIDkuNDE3OTMwMDQxODQxODM5LAogIDkuNjQ0MzQ3NzAzNjY5NTAzLAogIDkuODczOTA5MjQwNjk2Njk0LAogIDEwLjEwNjYyNzAwMzIzNjc4MSwKICAxMC4zNDI1MTMyNjk1MzQwMjQsCiAgMTAuNTgxNTgwMjQ2ODc0MjcsCiAgMTAuODIzODQwMDcyNjY4MSwKICAxMS4wNjkzMDQ4MTU1MDczNjQsCiAgMTEuMzE3OTg2NDc2MTk2MDA4LAogIDExLjU2OTg5Njk4ODc1NjAwOSwKICAxMS44MjUwNDgyMjE0MDkzNDEsCiAgMTIuMDgzNDUxOTc3NTM2NjA2LAogIDEyLjM0NTExOTk5NjYxMzI0NywKICAxMi42MTAwNjM5NTUxMjM5MzgsCiAgMTIuODc4Mjk1NDY3NDU1OTQyLAogIDEzLjE0OTgyNjA4Njc3MjA0OCwKICAxMy40MjQ2NjczMDU4NjM3MiwKICAxMy43MDI4MzA1NTc5ODUxMDgsCiAgMTMuOTg0MzI3MjE3NjY4NTEzLAogIDE0LjI2OTE2ODYwMTUyMTgyOCwKICAxNC41NTczNjU5NjkwMDg1NiwKICAxNC44NDg5MzA1MjMyMTA4NzEsCiAgMTUuMTQzODczNDExNTc2MjczLAogIDE1LjQ0MjIwNTcyNjY0ODMyLAogIDE1Ljc0MzkzODUwNjc4MTg5MSwKICAxNi4wNDkwODI3MzY4NDMzNywKICAxNi4zNTc2NDkzNDg4OTYzNCwKICAxNi42Njk2NDkyMjI4NzMwNCwKICAxNi45ODUwOTMxODcyMzIwNTMsCiAgMTcuMzAzOTkyMDE5NjAyNjksCiAgMTcuNjI2MzU2NDQ3NDE2MjUsCiAgMTcuOTUyMTk3MTQ4NTI0NzYsCiAgMTguMjgxNTI0NzUxODA3MzMyLAogIDE4LjYxNDM0OTgzNzc2NDU2NCwKICAxOC45NTA2ODI5MzkxMDEzOCwKICAxOS4yOTA1MzQ1NDEyOTg0NTYsCiAgMTkuNjMzOTE1MDgzMTcyNjkyLAogIDE5Ljk4MDgzNDk1NzQyNjg5LAogIDIwLjMzMTMwNDUxMTE4OTA2NywKICAyMC42ODUzMzQwNDY1NDE1MDIsCiAgMjEuMDQyOTMzODIxMDM5OTc3LAogIDIxLjQwNDExNDA0ODIyMzI1NiwKICAyMS43Njg4ODQ4OTgxMTMyMiwKICAyMi4xMzcyNTY0OTc3MDU4NzcsCiAgMjIuNTA5MjM4OTMxNDUzMjgsCiAgMjIuODg0ODQyMjQxNzM2OTE2LAogIDIzLjI2NDA3NjQyOTMzMjQ2MiwKICAyMy42NDY5NTE0NTM4NjYzLAogIDI0LjAzMzQ3NzIzNDI2NDAxNiwKICAyNC40MjM2NjM2NDkxOTA4MywKICAyNC44MTc1MjA1Mzc0ODQ1NTgsCiAgMjUuMjE1MDU3Njk4NTgwODksCiAgMjUuNjE2Mjg0ODkyOTMxMzgsCiAgMjYuMDIxMjExODQyNDE0MzQyLAogIDI2LjQyOTg0ODIzMDczODY2NCwKICAyNi44NDIyMDM3MDM4NDA4MjcsCiAgMjcuMjU4Mjg3ODcwMjc1MzUzLAogIDI3LjY3ODExMDMwMTU5ODUyMiwKICAyOC4xMDE2ODA1MzI3NDU5NywKICAyOC41MjkwMDgwNjI0MDM4OTMsCiAgMjguOTYwMTAyMzUzMzc0MjIsCiAgMjkuMzk0OTcyODMyOTMzOTYsCiAgMjkuODMzNjI4ODkzMTg4NDUsCiAgMzAuMjc2MDc5ODkxNDE5MzMyLAogIDMwLjcyMjMzNTE1MDQyNjYyNywKICAzMS4xNzI0MDM5NTg4NjU1MTIsCiAgMzEuNjI2Mjk1NTcxNTc3ODUsCiAgMzIuMDg0MDE5MjA5OTE4MzcsCiAgMzIuNTQ1NTg0MDYyMDc1OTIsCiAgMzMuMDEwOTk5MjgzMzg5NjY1LAogIDMzLjQ4MDI3Mzk5NjY2MDMsCiAgMzMuOTUzNDE3MjkyNDU2ODM0LAogIDM0LjQzMDQzODIyOTQxODI2NCwKICAzNC45MTEzNDU4MzQ1NTEwODUsCiAgMzUuMzk2MTQ5MTAzNTIyMDcsCiAgMzUuODg0ODU3MDAwOTQ2NzEsCiAgMzYuMzc3NDc4NDYwNjczNDksCiAgMzYuODc0MDIyMzg2MDYzODIsCiAgMzcuMzc0NDk3NjUwMjY3ODksCiAgMzcuODc4OTEzMDk2NDk2NTksCiAgMzguMzg3Mjc3NTM4Mjg5MjYsCiAgMzguODk5NTk5NzU5Nzc3ODUsCiAgMzkuNDE1ODg4NTE1OTQ2OTcsCiAgMzkuOTM2MTUyNTMyODkwNTQsCiAgNDAuNDYwNDAwNTA4MDY0NTQ1LAogIDQwLjk4ODY0MTExMDUzNjI5LAogIDQxLjUyMDg4Mjk4MTIzMDE5NCwKICA0Mi4wNTcxMzQ3MzMxNzAxNiwKICA0Mi41OTc0MDQ5NTE3MTgzOTYsCiAgNDMuMTQxNzAyMTk0ODExMjI0LAogIDQzLjY5MDAzNDk5MzE5MTMsCiAgNDQuMjQyNDExODUwNjM2OTcsCiAgNDQuNzk4ODQxMjQ0MTg4MzI0LAogIDQ1LjM1OTMzMTYyNDM3MDE3LAogIDQ1LjkyMzg5MTQxNTQxMjA5LAogIDQ2LjQ5MjUyOTAxNTQ2NTUyLAogIDQ3LjA2NTI1Mjc5NjgxNzkxNiwKICA0Ny42NDIwNzExMDYxMDQwOSwKICA0OC4yMjI5OTIyNjQ1MTQ2OCwKICA0OC44MDgwMjQ1NjgwMDIwNTQsCiAgNDkuMzk3MTc2Mjg3NDgzMywKICA0OS45OTA0NTU2NjkwNDA4LAogIDUwLjU4Nzg3MDkzNDExOTk4NCwKICA1MS4xODk0MzAyNzk3MjQ3MjUsCiAgNTEuNzk1MTQxODc4NjEwMTQsCiAgNTIuNDA1MDEzODc5NDcyODgsCiAgNTMuMDE5MDU0NDA3MTM5MiwKICA1My42MzcyNzE1NjI3NTAzNjQsCiAgNTQuMjU5NjczNDIzOTQ1OTc2LAogIDU0Ljg4NjI2ODA0NTA0NDkzLAogIDU1LjUxNzA2MzQ1NzIyMzkzNCwKICA1Ni4xNTIwNjc2Njg2OTQyNCwKICA1Ni43OTEyODg2NjQ4NzU3NCwKICA1Ny40MzQ3MzQ0MDg1NjkxNiwKICA1OC4wODI0MTI4NDAxMjYyMSwKICA1OC43MzQzMzE4Nzc2MTczNjUsCiAgNTkuMzkwNDk5NDE2OTk4MDcsCiAgNjAuMDUwOTIzMzMyMjcyNTEsCiAgNjAuNzE1NjExNDc1NjU1NTg1LAogIDYxLjM4NDU3MTY3NzczMzExLAogIDYyLjA1NzgxMTc0NzYxOTg5NCwKICA2Mi43MzUzMzk0NzMxMTU5LAogIDYzLjQxNzE2MjYyMDg2MDkxNCwKICA2NC4xMDMyODg5MzY0ODY5MiwKICA2NC43OTM3MjYxNDQ3NjkyMSwKICA2NS40ODg0ODE5NDk3NzUyOSwKICA2Ni4xODc1NjQwMzUwMTIyNCwKICA2Ni44OTA5ODAwNjM1NzI1OCwKICA2Ny41OTg3Mzc2NzgyNzgwOCwKICA2OC4zMTA4NDQ1MDE4MjIyMiwKICA2OS4wMjczMDgxMzY5MTA5MywKICA2OS43NDgxMzYxNjY0MDE2NCwKICA3MC40NzMzMzYxNTM0NDEwNywKICA3MS4yMDI5MTU2NDE2MDEwNCwKICA3MS45MzY4ODIxNTUwMTMxMiwKICA3Mi42NzUyNDMxOTg1MDE3MiwKICA3My40MTgwMDYyNTc3MTU0MiwKICA3NC4xNjUxNzg3OTkyNTczMywKICA3NC45MTY3NjgyNzA4MTM2LAogIDc1LjY3Mjc4MjEwMTI4MDcyLAogIDc2LjQzMzIyNzcwMDg5MTQ2LAogIDc3LjE5ODExMjQ2MTMzOTMsCiAgNzcuOTY3NDQzNzU1OTAxNjcsCiAgNzguNzQxMjI4OTM5NTYxNzQsCiAgNzkuNTE5NDc1MzQ5MTI5MDQsCiAgODAuMzAyMTkwMzAzMzU4NjksCiAgODEuMDg5MzgxMTAzMDY5MzQsCiAgODEuODgxMDU1MDMxMjU5OTksCiAgODIuNjc3MjE5MzUzMjI1NDEsCiAgODMuNDc3ODgxMzE2NjcwNiwKICA4NC4yODMwNDgxNTE4MjM3MiwKICA4NS4wOTI3MjcwNzE1NDgwOCwKICA4NS45MDY5MjUyNzE0NTMwMiwKICA4Ni43MjU2NDk5MzAwMDM0MywKICA4Ny41NDg5MDgyMDg2MjgxOSwKICA4OC4zNzY3MDcyNTE4Mjc3LAogIDg5LjIwOTA1NDE4NzI4MDEsCiAgOTAuMDQ1OTU2MTI1OTQ2NTUsCiAgOTAuODg3NDIwMTYyMTc1MTgsCiAgOTEuNzMzNDUzMzczODA0MzgsCiAgOTIuNTg0MDYyODIyMjY0OTEsCiAgOTMuNDM5MjU1NTUyNjgwNjYsCiAgOTQuMjk5MDM4NTkzOTY5MDIsCiAgOTUuMTYzNDE4OTU4OTM5NjksCiAgOTYuMDMyNDAzNjQ0MzkyNzQsCiAgOTYuOTA1OTk5NjMxMjE1OSwKICA5Ny43ODQyMTM4ODQ0ODA0NCwKICA5OC42NjcwNTMzNTM1MzY2LAogIDk5LjU1NDUyNDk3MjEwNzc2Cl07Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDCiAqCiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAogKgogKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAogKgogKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgogKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgogKi8KY2xhc3MgSGN0IHsKICBjb25zdHJ1Y3RvcihhcmdiKSB7CiAgICB0aGlzLmFyZ2IgPSBhcmdiOwogICAgY29uc3QgY2FtID0gQ2FtMTYuZnJvbUludChhcmdiKTsKICAgIHRoaXMuaW50ZXJuYWxIdWUgPSBjYW0uaHVlOwogICAgdGhpcy5pbnRlcm5hbENocm9tYSA9IGNhbS5jaHJvbWE7CiAgICB0aGlzLmludGVybmFsVG9uZSA9IGxzdGFyRnJvbUFyZ2IoYXJnYik7CiAgICB0aGlzLmFyZ2IgPSBhcmdiOwogIH0KICBzdGF0aWMgZnJvbShodWUsIGNocm9tYSwgdG9uZSkgewogICAgcmV0dXJuIG5ldyBIY3QoSGN0U29sdmVyLnNvbHZlVG9JbnQoaHVlLCBjaHJvbWEsIHRvbmUpKTsKICB9CiAgc3RhdGljIGZyb21JbnQoYXJnYikgewogICAgcmV0dXJuIG5ldyBIY3QoYXJnYik7CiAgfQogIHRvSW50KCkgewogICAgcmV0dXJuIHRoaXMuYXJnYjsKICB9CiAgZ2V0IGh1ZSgpIHsKICAgIHJldHVybiB0aGlzLmludGVybmFsSHVlOwogIH0KICBzZXQgaHVlKG5ld0h1ZSkgewogICAgdGhpcy5zZXRJbnRlcm5hbFN0YXRlKEhjdFNvbHZlci5zb2x2ZVRvSW50KG5ld0h1ZSwgdGhpcy5pbnRlcm5hbENocm9tYSwgdGhpcy5pbnRlcm5hbFRvbmUpKTsKICB9CiAgZ2V0IGNocm9tYSgpIHsKICAgIHJldHVybiB0aGlzLmludGVybmFsQ2hyb21hOwogIH0KICBzZXQgY2hyb21hKG5ld0Nocm9tYSkgewogICAgdGhpcy5zZXRJbnRlcm5hbFN0YXRlKEhjdFNvbHZlci5zb2x2ZVRvSW50KHRoaXMuaW50ZXJuYWxIdWUsIG5ld0Nocm9tYSwgdGhpcy5pbnRlcm5hbFRvbmUpKTsKICB9CiAgZ2V0IHRvbmUoKSB7CiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFRvbmU7CiAgfQogIHNldCB0b25lKG5ld1RvbmUpIHsKICAgIHRoaXMuc2V0SW50ZXJuYWxTdGF0ZShIY3RTb2x2ZXIuc29sdmVUb0ludCh0aGlzLmludGVybmFsSHVlLCB0aGlzLmludGVybmFsQ2hyb21hLCBuZXdUb25lKSk7CiAgfQogIHNldEludGVybmFsU3RhdGUoYXJnYikgewogICAgY29uc3QgY2FtID0gQ2FtMTYuZnJvbUludChhcmdiKTsKICAgIHRoaXMuaW50ZXJuYWxIdWUgPSBjYW0uaHVlOwogICAgdGhpcy5pbnRlcm5hbENocm9tYSA9IGNhbS5jaHJvbWE7CiAgICB0aGlzLmludGVybmFsVG9uZSA9IGxzdGFyRnJvbUFyZ2IoYXJnYik7CiAgICB0aGlzLmFyZ2IgPSBhcmdiOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQwogKgogKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgogKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKICoKICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKICoKICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICovCmNsYXNzIEJsZW5kIHsKICBzdGF0aWMgaGFybW9uaXplKGRlc2lnbkNvbG9yLCBzb3VyY2VDb2xvcikgewogICAgY29uc3QgZnJvbUhjdCA9IEhjdC5mcm9tSW50KGRlc2lnbkNvbG9yKTsKICAgIGNvbnN0IHRvSGN0ID0gSGN0LmZyb21JbnQoc291cmNlQ29sb3IpOwogICAgY29uc3QgZGlmZmVyZW5jZURlZ3JlZXMkMSA9IGRpZmZlcmVuY2VEZWdyZWVzKGZyb21IY3QuaHVlLCB0b0hjdC5odWUpOwogICAgY29uc3Qgcm90YXRpb25EZWdyZWVzID0gTWF0aC5taW4oZGlmZmVyZW5jZURlZ3JlZXMkMSAqIDAuNSwgMTUpOwogICAgY29uc3Qgb3V0cHV0SHVlID0gc2FuaXRpemVEZWdyZWVzRG91YmxlKGZyb21IY3QuaHVlICsgcm90YXRpb25EZWdyZWVzICogcm90YXRpb25EaXJlY3Rpb24oZnJvbUhjdC5odWUsIHRvSGN0Lmh1ZSkpOwogICAgcmV0dXJuIEhjdC5mcm9tKG91dHB1dEh1ZSwgZnJvbUhjdC5jaHJvbWEsIGZyb21IY3QudG9uZSkudG9JbnQoKTsKICB9CiAgc3RhdGljIGhjdEh1ZShmcm9tLCB0bywgYW1vdW50KSB7CiAgICBjb25zdCB1Y3MgPSBCbGVuZC5jYW0xNlVjcyhmcm9tLCB0bywgYW1vdW50KTsKICAgIGNvbnN0IHVjc0NhbSA9IENhbTE2LmZyb21JbnQodWNzKTsKICAgIGNvbnN0IGZyb21DYW0gPSBDYW0xNi5mcm9tSW50KGZyb20pOwogICAgY29uc3QgYmxlbmRlZCA9IEhjdC5mcm9tKHVjc0NhbS5odWUsIGZyb21DYW0uY2hyb21hLCBsc3RhckZyb21BcmdiKGZyb20pKTsKICAgIHJldHVybiBibGVuZGVkLnRvSW50KCk7CiAgfQogIHN0YXRpYyBjYW0xNlVjcyhmcm9tLCB0bywgYW1vdW50KSB7CiAgICBjb25zdCBmcm9tQ2FtID0gQ2FtMTYuZnJvbUludChmcm9tKTsKICAgIGNvbnN0IHRvQ2FtID0gQ2FtMTYuZnJvbUludCh0byk7CiAgICBjb25zdCBmcm9tSiA9IGZyb21DYW0uanN0YXI7CiAgICBjb25zdCBmcm9tQSA9IGZyb21DYW0uYXN0YXI7CiAgICBjb25zdCBmcm9tQiA9IGZyb21DYW0uYnN0YXI7CiAgICBjb25zdCB0b0ogPSB0b0NhbS5qc3RhcjsKICAgIGNvbnN0IHRvQSA9IHRvQ2FtLmFzdGFyOwogICAgY29uc3QgdG9CID0gdG9DYW0uYnN0YXI7CiAgICBjb25zdCBqc3RhciA9IGZyb21KICsgKHRvSiAtIGZyb21KKSAqIGFtb3VudDsKICAgIGNvbnN0IGFzdGFyID0gZnJvbUEgKyAodG9BIC0gZnJvbUEpICogYW1vdW50OwogICAgY29uc3QgYnN0YXIgPSBmcm9tQiArICh0b0IgLSBmcm9tQikgKiBhbW91bnQ7CiAgICByZXR1cm4gQ2FtMTYuZnJvbVVjcyhqc3RhciwgYXN0YXIsIGJzdGFyKS50b0ludCgpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQwogKgogKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgogKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKICoKICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKICoKICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICovCmNsYXNzIFRvbmFsUGFsZXR0ZSB7CiAgY29uc3RydWN0b3IoaHVlLCBjaHJvbWEpIHsKICAgIHRoaXMuaHVlID0gaHVlOwogICAgdGhpcy5jaHJvbWEgPSBjaHJvbWE7CiAgICB0aGlzLmNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICB9CiAgc3RhdGljIGZyb21JbnQoYXJnYikgewogICAgY29uc3QgaGN0ID0gSGN0LmZyb21JbnQoYXJnYik7CiAgICByZXR1cm4gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoaGN0Lmh1ZSwgaGN0LmNocm9tYSk7CiAgfQogIHN0YXRpYyBmcm9tSHVlQW5kQ2hyb21hKGh1ZSwgY2hyb21hKSB7CiAgICByZXR1cm4gbmV3IFRvbmFsUGFsZXR0ZShodWUsIGNocm9tYSk7CiAgfQogIHRvbmUodG9uZSkgewogICAgbGV0IGFyZ2IgPSB0aGlzLmNhY2hlLmdldCh0b25lKTsKICAgIGlmIChhcmdiID09PSB2b2lkIDApIHsKICAgICAgYXJnYiA9IEhjdC5mcm9tKHRoaXMuaHVlLCB0aGlzLmNocm9tYSwgdG9uZSkudG9JbnQoKTsKICAgICAgdGhpcy5jYWNoZS5zZXQodG9uZSwgYXJnYik7CiAgICB9CiAgICByZXR1cm4gYXJnYjsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMKICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwpjbGFzcyBDb3JlUGFsZXR0ZSB7CiAgY29uc3RydWN0b3IoYXJnYiwgaXNDb250ZW50KSB7CiAgICBjb25zdCBoY3QgPSBIY3QuZnJvbUludChhcmdiKTsKICAgIGNvbnN0IGh1ZSA9IGhjdC5odWU7CiAgICBjb25zdCBjaHJvbWEgPSBoY3QuY2hyb21hOwogICAgaWYgKGlzQ29udGVudCkgewogICAgICB0aGlzLmExID0gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoaHVlLCBjaHJvbWEpOwogICAgICB0aGlzLmEyID0gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoaHVlLCBjaHJvbWEgLyAzKTsKICAgICAgdGhpcy5hMyA9IFRvbmFsUGFsZXR0ZS5mcm9tSHVlQW5kQ2hyb21hKGh1ZSArIDYwLCBjaHJvbWEgLyAyKTsKICAgICAgdGhpcy5uMSA9IFRvbmFsUGFsZXR0ZS5mcm9tSHVlQW5kQ2hyb21hKGh1ZSwgTWF0aC5taW4oY2hyb21hIC8gMTIsIDQpKTsKICAgICAgdGhpcy5uMiA9IFRvbmFsUGFsZXR0ZS5mcm9tSHVlQW5kQ2hyb21hKGh1ZSwgTWF0aC5taW4oY2hyb21hIC8gNiwgOCkpOwogICAgfSBlbHNlIHsKICAgICAgdGhpcy5hMSA9IFRvbmFsUGFsZXR0ZS5mcm9tSHVlQW5kQ2hyb21hKGh1ZSwgTWF0aC5tYXgoNDgsIGNocm9tYSkpOwogICAgICB0aGlzLmEyID0gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoaHVlLCAxNik7CiAgICAgIHRoaXMuYTMgPSBUb25hbFBhbGV0dGUuZnJvbUh1ZUFuZENocm9tYShodWUgKyA2MCwgMjQpOwogICAgICB0aGlzLm4xID0gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoaHVlLCA0KTsKICAgICAgdGhpcy5uMiA9IFRvbmFsUGFsZXR0ZS5mcm9tSHVlQW5kQ2hyb21hKGh1ZSwgOCk7CiAgICB9CiAgICB0aGlzLmVycm9yID0gVG9uYWxQYWxldHRlLmZyb21IdWVBbmRDaHJvbWEoMjUsIDg0KTsKICB9CiAgc3RhdGljIG9mKGFyZ2IpIHsKICAgIHJldHVybiBuZXcgQ29yZVBhbGV0dGUoYXJnYiwgZmFsc2UpOwogIH0KICBzdGF0aWMgY29udGVudE9mKGFyZ2IpIHsKICAgIHJldHVybiBuZXcgQ29yZVBhbGV0dGUoYXJnYiwgdHJ1ZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDCiAqCiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAogKgogKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAogKgogKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgogKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgogKi8KY2xhc3MgU2NoZW1lIHsKICBjb25zdHJ1Y3Rvcihwcm9wcykgewogICAgdGhpcy5wcm9wcyA9IHByb3BzOwogIH0KICBnZXQgcHJpbWFyeSgpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLnByaW1hcnk7CiAgfQogIGdldCBvblByaW1hcnkoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vblByaW1hcnk7CiAgfQogIGdldCBwcmltYXJ5Q29udGFpbmVyKCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMucHJpbWFyeUNvbnRhaW5lcjsKICB9CiAgZ2V0IG9uUHJpbWFyeUNvbnRhaW5lcigpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLm9uUHJpbWFyeUNvbnRhaW5lcjsKICB9CiAgZ2V0IHNlY29uZGFyeSgpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLnNlY29uZGFyeTsKICB9CiAgZ2V0IG9uU2Vjb25kYXJ5KCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMub25TZWNvbmRhcnk7CiAgfQogIGdldCBzZWNvbmRhcnlDb250YWluZXIoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWNvbmRhcnlDb250YWluZXI7CiAgfQogIGdldCBvblNlY29uZGFyeUNvbnRhaW5lcigpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLm9uU2Vjb25kYXJ5Q29udGFpbmVyOwogIH0KICBnZXQgdGVydGlhcnkoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXJ0aWFyeTsKICB9CiAgZ2V0IG9uVGVydGlhcnkoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vblRlcnRpYXJ5OwogIH0KICBnZXQgdGVydGlhcnlDb250YWluZXIoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXJ0aWFyeUNvbnRhaW5lcjsKICB9CiAgZ2V0IG9uVGVydGlhcnlDb250YWluZXIoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vblRlcnRpYXJ5Q29udGFpbmVyOwogIH0KICBnZXQgZXJyb3IoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5lcnJvcjsKICB9CiAgZ2V0IG9uRXJyb3IoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkVycm9yOwogIH0KICBnZXQgZXJyb3JDb250YWluZXIoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5lcnJvckNvbnRhaW5lcjsKICB9CiAgZ2V0IG9uRXJyb3JDb250YWluZXIoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkVycm9yQ29udGFpbmVyOwogIH0KICBnZXQgYmFja2dyb3VuZCgpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLmJhY2tncm91bmQ7CiAgfQogIGdldCBvbkJhY2tncm91bmQoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkJhY2tncm91bmQ7CiAgfQogIGdldCBzdXJmYWNlKCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMuc3VyZmFjZTsKICB9CiAgZ2V0IG9uU3VyZmFjZSgpIHsKICAgIHJldHVybiB0aGlzLnByb3BzLm9uU3VyZmFjZTsKICB9CiAgZ2V0IHN1cmZhY2VWYXJpYW50KCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMuc3VyZmFjZVZhcmlhbnQ7CiAgfQogIGdldCBvblN1cmZhY2VWYXJpYW50KCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMub25TdXJmYWNlVmFyaWFudDsKICB9CiAgZ2V0IG91dGxpbmUoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5vdXRsaW5lOwogIH0KICBnZXQgc2hhZG93KCkgewogICAgcmV0dXJuIHRoaXMucHJvcHMuc2hhZG93OwogIH0KICBnZXQgaW52ZXJzZVN1cmZhY2UoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnZlcnNlU3VyZmFjZTsKICB9CiAgZ2V0IGludmVyc2VPblN1cmZhY2UoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnZlcnNlT25TdXJmYWNlOwogIH0KICBnZXQgaW52ZXJzZVByaW1hcnkoKSB7CiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnZlcnNlUHJpbWFyeTsKICB9CiAgc3RhdGljIGxpZ2h0KGFyZ2IpIHsKICAgIHJldHVybiBTY2hlbWUubGlnaHRGcm9tQ29yZVBhbGV0dGUoQ29yZVBhbGV0dGUub2YoYXJnYikpOwogIH0KICBzdGF0aWMgZGFyayhhcmdiKSB7CiAgICByZXR1cm4gU2NoZW1lLmRhcmtGcm9tQ29yZVBhbGV0dGUoQ29yZVBhbGV0dGUub2YoYXJnYikpOwogIH0KICBzdGF0aWMgbGlnaHRDb250ZW50KGFyZ2IpIHsKICAgIHJldHVybiBTY2hlbWUubGlnaHRGcm9tQ29yZVBhbGV0dGUoQ29yZVBhbGV0dGUuY29udGVudE9mKGFyZ2IpKTsKICB9CiAgc3RhdGljIGRhcmtDb250ZW50KGFyZ2IpIHsKICAgIHJldHVybiBTY2hlbWUuZGFya0Zyb21Db3JlUGFsZXR0ZShDb3JlUGFsZXR0ZS5jb250ZW50T2YoYXJnYikpOwogIH0KICBzdGF0aWMgbGlnaHRGcm9tQ29yZVBhbGV0dGUoY29yZSkgewogICAgcmV0dXJuIG5ldyBTY2hlbWUoewogICAgICBwcmltYXJ5OiBjb3JlLmExLnRvbmUoNDApLAogICAgICBvblByaW1hcnk6IGNvcmUuYTEudG9uZSgxMDApLAogICAgICBwcmltYXJ5Q29udGFpbmVyOiBjb3JlLmExLnRvbmUoOTApLAogICAgICBvblByaW1hcnlDb250YWluZXI6IGNvcmUuYTEudG9uZSgxMCksCiAgICAgIHNlY29uZGFyeTogY29yZS5hMi50b25lKDQwKSwKICAgICAgb25TZWNvbmRhcnk6IGNvcmUuYTIudG9uZSgxMDApLAogICAgICBzZWNvbmRhcnlDb250YWluZXI6IGNvcmUuYTIudG9uZSg5MCksCiAgICAgIG9uU2Vjb25kYXJ5Q29udGFpbmVyOiBjb3JlLmEyLnRvbmUoMTApLAogICAgICB0ZXJ0aWFyeTogY29yZS5hMy50b25lKDQwKSwKICAgICAgb25UZXJ0aWFyeTogY29yZS5hMy50b25lKDEwMCksCiAgICAgIHRlcnRpYXJ5Q29udGFpbmVyOiBjb3JlLmEzLnRvbmUoOTApLAogICAgICBvblRlcnRpYXJ5Q29udGFpbmVyOiBjb3JlLmEzLnRvbmUoMTApLAogICAgICBlcnJvcjogY29yZS5lcnJvci50b25lKDQwKSwKICAgICAgb25FcnJvcjogY29yZS5lcnJvci50b25lKDEwMCksCiAgICAgIGVycm9yQ29udGFpbmVyOiBjb3JlLmVycm9yLnRvbmUoOTApLAogICAgICBvbkVycm9yQ29udGFpbmVyOiBjb3JlLmVycm9yLnRvbmUoMTApLAogICAgICBiYWNrZ3JvdW5kOiBjb3JlLm4xLnRvbmUoOTkpLAogICAgICBvbkJhY2tncm91bmQ6IGNvcmUubjEudG9uZSgxMCksCiAgICAgIHN1cmZhY2U6IGNvcmUubjEudG9uZSg5OSksCiAgICAgIG9uU3VyZmFjZTogY29yZS5uMS50b25lKDEwKSwKICAgICAgc3VyZmFjZVZhcmlhbnQ6IGNvcmUubjIudG9uZSg5MCksCiAgICAgIG9uU3VyZmFjZVZhcmlhbnQ6IGNvcmUubjIudG9uZSgzMCksCiAgICAgIG91dGxpbmU6IGNvcmUubjIudG9uZSg1MCksCiAgICAgIHNoYWRvdzogY29yZS5uMS50b25lKDApLAogICAgICBpbnZlcnNlU3VyZmFjZTogY29yZS5uMS50b25lKDIwKSwKICAgICAgaW52ZXJzZU9uU3VyZmFjZTogY29yZS5uMS50b25lKDk1KSwKICAgICAgaW52ZXJzZVByaW1hcnk6IGNvcmUuYTEudG9uZSg4MCkKICAgIH0pOwogIH0KICBzdGF0aWMgZGFya0Zyb21Db3JlUGFsZXR0ZShjb3JlKSB7CiAgICByZXR1cm4gbmV3IFNjaGVtZSh7CiAgICAgIHByaW1hcnk6IGNvcmUuYTEudG9uZSg4MCksCiAgICAgIG9uUHJpbWFyeTogY29yZS5hMS50b25lKDIwKSwKICAgICAgcHJpbWFyeUNvbnRhaW5lcjogY29yZS5hMS50b25lKDMwKSwKICAgICAgb25QcmltYXJ5Q29udGFpbmVyOiBjb3JlLmExLnRvbmUoOTApLAogICAgICBzZWNvbmRhcnk6IGNvcmUuYTIudG9uZSg4MCksCiAgICAgIG9uU2Vjb25kYXJ5OiBjb3JlLmEyLnRvbmUoMjApLAogICAgICBzZWNvbmRhcnlDb250YWluZXI6IGNvcmUuYTIudG9uZSgzMCksCiAgICAgIG9uU2Vjb25kYXJ5Q29udGFpbmVyOiBjb3JlLmEyLnRvbmUoOTApLAogICAgICB0ZXJ0aWFyeTogY29yZS5hMy50b25lKDgwKSwKICAgICAgb25UZXJ0aWFyeTogY29yZS5hMy50b25lKDIwKSwKICAgICAgdGVydGlhcnlDb250YWluZXI6IGNvcmUuYTMudG9uZSgzMCksCiAgICAgIG9uVGVydGlhcnlDb250YWluZXI6IGNvcmUuYTMudG9uZSg5MCksCiAgICAgIGVycm9yOiBjb3JlLmVycm9yLnRvbmUoODApLAogICAgICBvbkVycm9yOiBjb3JlLmVycm9yLnRvbmUoMjApLAogICAgICBlcnJvckNvbnRhaW5lcjogY29yZS5lcnJvci50b25lKDMwKSwKICAgICAgb25FcnJvckNvbnRhaW5lcjogY29yZS5lcnJvci50b25lKDgwKSwKICAgICAgYmFja2dyb3VuZDogY29yZS5uMS50b25lKDEwKSwKICAgICAgb25CYWNrZ3JvdW5kOiBjb3JlLm4xLnRvbmUoOTApLAogICAgICBzdXJmYWNlOiBjb3JlLm4xLnRvbmUoMTApLAogICAgICBvblN1cmZhY2U6IGNvcmUubjEudG9uZSg5MCksCiAgICAgIHN1cmZhY2VWYXJpYW50OiBjb3JlLm4yLnRvbmUoMzApLAogICAgICBvblN1cmZhY2VWYXJpYW50OiBjb3JlLm4yLnRvbmUoODApLAogICAgICBvdXRsaW5lOiBjb3JlLm4yLnRvbmUoNjApLAogICAgICBzaGFkb3c6IGNvcmUubjEudG9uZSgwKSwKICAgICAgaW52ZXJzZVN1cmZhY2U6IGNvcmUubjEudG9uZSg5MCksCiAgICAgIGludmVyc2VPblN1cmZhY2U6IGNvcmUubjEudG9uZSgyMCksCiAgICAgIGludmVyc2VQcmltYXJ5OiBjb3JlLmExLnRvbmUoNDApCiAgICB9KTsKICB9CiAgdG9KU09OKCkgewogICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQwogKgogKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgogKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKICoKICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKICoKICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICovCmNvbnN0IGhleEZyb21BcmdiID0gKGFyZ2IpID0+IHsKICBjb25zdCByID0gcmVkRnJvbUFyZ2IoYXJnYik7CiAgY29uc3QgZyA9IGdyZWVuRnJvbUFyZ2IoYXJnYik7CiAgY29uc3QgYiA9IGJsdWVGcm9tQXJnYihhcmdiKTsKICBjb25zdCBvdXRQYXJ0cyA9IFtyLnRvU3RyaW5nKDE2KSwgZy50b1N0cmluZygxNiksIGIudG9TdHJpbmcoMTYpXTsKICBmb3IgKGNvbnN0IFtpLCBwYXJ0XSBvZiBvdXRQYXJ0cy5lbnRyaWVzKCkpIHsKICAgIGlmIChwYXJ0Lmxlbmd0aCA9PT0gMSkgewogICAgICBvdXRQYXJ0c1tpXSA9ICIwIiArIHBhcnQ7CiAgICB9CiAgfQogIHJldHVybiAiIyIgKyBvdXRQYXJ0cy5qb2luKCIiKTsKfTsKY29uc3QgYXJnYkZyb21IZXggPSAoaGV4KSA9PiB7CiAgaGV4ID0gaGV4LnJlcGxhY2UoIiMiLCAiIik7CiAgY29uc3QgaXNUaHJlZSA9IGhleC5sZW5ndGggPT09IDM7CiAgY29uc3QgaXNTaXggPSBoZXgubGVuZ3RoID09PSA2OwogIGNvbnN0IGlzRWlnaHQgPSBoZXgubGVuZ3RoID09PSA4OwogIGlmICghaXNUaHJlZSAmJiAhaXNTaXggJiYgIWlzRWlnaHQpIHsKICAgIHRocm93IG5ldyBFcnJvcigidW5leHBlY3RlZCBoZXggIiArIGhleCk7CiAgfQogIGxldCByID0gMDsKICBsZXQgZyA9IDA7CiAgbGV0IGIgPSAwOwogIGlmIChpc1RocmVlKSB7CiAgICByID0gcGFyc2VJbnRIZXgoaGV4LnNsaWNlKDAsIDEpLnJlcGVhdCgyKSk7CiAgICBnID0gcGFyc2VJbnRIZXgoaGV4LnNsaWNlKDEsIDIpLnJlcGVhdCgyKSk7CiAgICBiID0gcGFyc2VJbnRIZXgoaGV4LnNsaWNlKDIsIDMpLnJlcGVhdCgyKSk7CiAgfSBlbHNlIGlmIChpc1NpeCkgewogICAgciA9IHBhcnNlSW50SGV4KGhleC5zbGljZSgwLCAyKSk7CiAgICBnID0gcGFyc2VJbnRIZXgoaGV4LnNsaWNlKDIsIDQpKTsKICAgIGIgPSBwYXJzZUludEhleChoZXguc2xpY2UoNCwgNikpOwogIH0gZWxzZSBpZiAoaXNFaWdodCkgewogICAgciA9IHBhcnNlSW50SGV4KGhleC5zbGljZSgyLCA0KSk7CiAgICBnID0gcGFyc2VJbnRIZXgoaGV4LnNsaWNlKDQsIDYpKTsKICAgIGIgPSBwYXJzZUludEhleChoZXguc2xpY2UoNiwgOCkpOwogIH0KICByZXR1cm4gKDI1NSA8PCAyNCB8IChyICYgMjU1KSA8PCAxNiB8IChnICYgMjU1KSA8PCA4IHwgYiAmIDI1NSkgPj4+IDA7Cn07CmZ1bmN0aW9uIHBhcnNlSW50SGV4KHZhbHVlKSB7CiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxNik7Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMKICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwpmdW5jdGlvbiB0aGVtZUZyb21Tb3VyY2VDb2xvcihzb3VyY2UsIGN1c3RvbUNvbG9ycyA9IFtdKSB7CiAgY29uc3QgcGFsZXR0ZSA9IENvcmVQYWxldHRlLm9mKHNvdXJjZSk7CiAgcmV0dXJuIHsKICAgIHNvdXJjZSwKICAgIHNjaGVtZXM6IHsKICAgICAgbGlnaHQ6IFNjaGVtZS5saWdodChzb3VyY2UpLAogICAgICBkYXJrOiBTY2hlbWUuZGFyayhzb3VyY2UpCiAgICB9LAogICAgcGFsZXR0ZXM6IHsKICAgICAgcHJpbWFyeTogcGFsZXR0ZS5hMSwKICAgICAgc2Vjb25kYXJ5OiBwYWxldHRlLmEyLAogICAgICB0ZXJ0aWFyeTogcGFsZXR0ZS5hMywKICAgICAgbmV1dHJhbDogcGFsZXR0ZS5uMSwKICAgICAgbmV1dHJhbFZhcmlhbnQ6IHBhbGV0dGUubjIsCiAgICAgIGVycm9yOiBwYWxldHRlLmVycm9yCiAgICB9LAogICAgY3VzdG9tQ29sb3JzOiBjdXN0b21Db2xvcnMubWFwKChjKSA9PiBjdXN0b21Db2xvcihzb3VyY2UsIGMpKQogIH07Cn0KZnVuY3Rpb24gY3VzdG9tQ29sb3Ioc291cmNlLCBjb2xvcikgewogIGxldCB2YWx1ZSA9IGNvbG9yLnZhbHVlOwogIGNvbnN0IGZyb20gPSB2YWx1ZTsKICBjb25zdCB0byA9IHNvdXJjZTsKICBpZiAoY29sb3IuYmxlbmQpIHsKICAgIHZhbHVlID0gQmxlbmQuaGFybW9uaXplKGZyb20sIHRvKTsKICB9CiAgY29uc3QgcGFsZXR0ZSA9IENvcmVQYWxldHRlLm9mKHZhbHVlKTsKICBjb25zdCB0b25lcyA9IHBhbGV0dGUuYTE7CiAgcmV0dXJuIHsKICAgIGNvbG9yLAogICAgdmFsdWUsCiAgICBsaWdodDogewogICAgICBjb2xvcjogdG9uZXMudG9uZSg0MCksCiAgICAgIG9uQ29sb3I6IHRvbmVzLnRvbmUoMTAwKSwKICAgICAgY29sb3JDb250YWluZXI6IHRvbmVzLnRvbmUoOTApLAogICAgICBvbkNvbG9yQ29udGFpbmVyOiB0b25lcy50b25lKDEwKQogICAgfSwKICAgIGRhcms6IHsKICAgICAgY29sb3I6IHRvbmVzLnRvbmUoODApLAogICAgICBvbkNvbG9yOiB0b25lcy50b25lKDIwKSwKICAgICAgY29sb3JDb250YWluZXI6IHRvbmVzLnRvbmUoMzApLAogICAgICBvbkNvbG9yQ29udGFpbmVyOiB0b25lcy50b25lKDkwKQogICAgfQogIH07Cn0Kb25tZXNzYWdlID0gZnVuY3Rpb24oZSkgewogIGNvbnN0IHsgc291cmNlLCByZ2IsIHRvbmVzIH0gPSBlLmRhdGE7CiAgY29uc3QgdGhlbWUgPSB0aGVtZUZyb21Tb3VyY2VDb2xvcihhcmdiRnJvbUhleChzb3VyY2UpKTsKICBhcHBseVNjaGVtZXModGhlbWUsIHNvdXJjZSwgcmdiKTsKICBhcHBseVBhbGV0dGVzKHRoZW1lLCB0b25lcywgcmdiKTsKfTsKZnVuY3Rpb24gYXBwbHlTY2hlbWVzKHRoZW1lLCBzb3VyY2UsIHJnYikgewogIGxldCBzYiA9IFtdOwogIHNiLnB1c2goYDpyb290IHtgKTsKICBzYi5wdXNoKGAgIC0tbWQtc291cmNlOiAke3NvdXJjZX07YCk7CiAgY29uc3QgYXBwbHlTY2hlbWUgPSAoc2NoZW1lLCBvcHRpb25zKSA9PiB7CiAgICB2YXIgX2E7CiAgICBmb3IgKGNvbnN0IFtrZXksIGNvbG9yXSBvZiBPYmplY3QuZW50cmllcyhzY2hlbWUudG9KU09OKCkpKSB7CiAgICAgIGNvbnN0IHRva2VuID0ga2V5LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICIkMS0kMiIpLnRvTG93ZXJDYXNlKCk7CiAgICAgIGNvbnN0IHRva2VuTmFtZSA9IGAtLW1kLXN5cy1jb2xvci0ke3Rva2VufSR7KF9hID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zdWZmaXgpICE9IG51bGwgPyBfYSA6ICIifWA7CiAgICAgIGFkZFRva2VuKHNiLCB0b2tlbk5hbWUsIGNvbG9yLCByZ2IpOwogICAgfQogIH07CiAgYXBwbHlTY2hlbWUodGhlbWUuc2NoZW1lcy5saWdodCwgeyBzdWZmaXg6ICItbGlnaHQiIH0pOwogIGFwcGx5U2NoZW1lKHRoZW1lLnNjaGVtZXMuZGFyaywgeyBzdWZmaXg6ICItZGFyayIgfSk7CiAgc2IucHVzaChgfWApOwogIHNiLnB1c2goYDpyb290LCAubGlnaHQtdGhlbWUge2ApOwogIHNiLnB1c2goYCAgY29sb3Itc2NoZW1lOiBsaWdodDtgKTsKICBhcHBseVNjaGVtZSh0aGVtZS5zY2hlbWVzLmxpZ2h0KTsKICBzYi5wdXNoKGB9YCk7CiAgc2IucHVzaChgLmRhcmstdGhlbWUge2ApOwogIHNiLnB1c2goYCAgY29sb3Itc2NoZW1lOiBkYXJrO2ApOwogIGFwcGx5U2NoZW1lKHRoZW1lLnNjaGVtZXMuZGFyayk7CiAgc2IucHVzaChgfWApOwogIHVwZGF0ZVN0eWxlKCJ0aGVtZSIsIHNiLmpvaW4oIlxuIikpOwp9CmZ1bmN0aW9uIGFwcGx5UGFsZXR0ZXModGhlbWUsIHRvbmVzLCByZ2IpIHsKICBjb25zdCBhcHBseVBhbGV0dGUgPSAocGFsZXR0ZSwgZ3JvdXAsIHRvbmVzMikgPT4gewogICAgY29uc3Qgc2IgPSBbXTsKICAgIHNiLnB1c2goYDpyb290IHtgKTsKICAgIGZvciAoY29uc3QgdG9uZSBvZiB0b25lczIpIHsKICAgICAgY29uc3QgY29sb3IgPSBwYWxldHRlLnRvbmUodG9uZSk7CiAgICAgIGNvbnN0IHRva2VuTmFtZSA9IGAtLW1kLXJlZi1wYWxldHRlLSR7Z3JvdXB9JHt0b25lfWA7CiAgICAgIGFkZFRva2VuKHNiLCB0b2tlbk5hbWUsIGNvbG9yLCByZ2IpOwogICAgfQogICAgc2IucHVzaChgfWApOwogICAgcmV0dXJuIHNiLmpvaW4oIlxuIik7CiAgfTsKICBjb25zdCBwcmltYXJ5UGFsZXR0ZSA9IGFwcGx5UGFsZXR0ZSh0aGVtZS5wYWxldHRlcy5wcmltYXJ5LCAicHJpbWFyeSIsIHRvbmVzKTsKICB1cGRhdGVTdHlsZSgicGFsZXR0ZS1wcmltYXJ5IiwgcHJpbWFyeVBhbGV0dGUpOwogIGNvbnN0IHNlY29uZGFyeVBhbGV0dGUgPSBhcHBseVBhbGV0dGUodGhlbWUucGFsZXR0ZXMuc2Vjb25kYXJ5LCAic2Vjb25kYXJ5IiwgdG9uZXMpOwogIHVwZGF0ZVN0eWxlKCJwYWxldHRlLXNlY29uZGFyeSIsIHNlY29uZGFyeVBhbGV0dGUpOwogIGNvbnN0IHRlcnRpYXJ5UGFsZXR0ZSA9IGFwcGx5UGFsZXR0ZSh0aGVtZS5wYWxldHRlcy50ZXJ0aWFyeSwgInRlcnRpYXJ5IiwgdG9uZXMpOwogIHVwZGF0ZVN0eWxlKCJwYWxldHRlLXRlcnRpYXJ5IiwgdGVydGlhcnlQYWxldHRlKTsKICBjb25zdCBlcnJvclBhbGV0dGUgPSBhcHBseVBhbGV0dGUodGhlbWUucGFsZXR0ZXMuZXJyb3IsICJlcnJvciIsIHRvbmVzKTsKICB1cGRhdGVTdHlsZSgicGFsZXR0ZS1lcnJvciIsIGVycm9yUGFsZXR0ZSk7CiAgY29uc3QgbmV1dHJhbFBhbGV0dGUgPSBhcHBseVBhbGV0dGUodGhlbWUucGFsZXR0ZXMubmV1dHJhbCwgIm5ldXRyYWwiLCB0b25lcyk7CiAgdXBkYXRlU3R5bGUoInBhbGV0dGUtbmV1dHJhbCIsIG5ldXRyYWxQYWxldHRlKTsKICBjb25zdCBuZXV0cmFsVmFyaWFudFBhbGV0dGUgPSBhcHBseVBhbGV0dGUodGhlbWUucGFsZXR0ZXMubmV1dHJhbFZhcmlhbnQsICJuZXV0cmFsLXZhcmlhbnQiLCB0b25lcyk7CiAgdXBkYXRlU3R5bGUoInBhbGV0dGUtbmV1dHJhbC12YXJpYW50IiwgbmV1dHJhbFZhcmlhbnRQYWxldHRlKTsKfQpmdW5jdGlvbiBhZGRUb2tlbihzYiwgdG9rZW4sIHZhbHVlLCByZ2IpIHsKICBpZiAocmdiKSB7CiAgICBjb25zdCBbciwgZywgYl0gPSBbCiAgICAgIHZhbHVlID4+IDE2ICYgMjU1LAogICAgICB2YWx1ZSA+PiA4ICYgMjU1LAogICAgICB2YWx1ZSAmIDI1NQogICAgXTsKICAgIHNiLnB1c2goYCAgJHt0b2tlbn0tcmdiOiAke3J9LCAke2d9LCAke2J9O2ApOwogICAgc2IucHVzaChgICAke3Rva2VufTogcmdiYSh2YXIoJHt0b2tlbn0tcmdiKSwgMSk7YCk7CiAgfSBlbHNlIHsKICAgIHNiLnB1c2goYCAgJHt0b2tlbn06ICR7aGV4RnJvbUFyZ2IodmFsdWUpfTtgKTsKICB9Cn0KZnVuY3Rpb24gdXBkYXRlU3R5bGUoaWQsIGNvbnRlbnQpIHsKICBwb3N0TWVzc2FnZSh7CiAgICBpZCwKICAgIGNvbnRlbnQKICB9KTsKfQo=";
const blob = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper() {
  const objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
  try {
    return objURL ? new Worker(objURL, { type: "module" }) : new Worker("data:application/javascript;base64," + encodedJs, { type: "module" });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
const tagName = "material-theme-control";
let MaterialThemeControl = class extends s {
  constructor() {
    super(...arguments);
    this.rgb = false;
    this.expanded = false;
    this.showOptions = false;
    this.color = localStorage.getItem("theme-color") || "#6750A4";
  }
  render() {
    const dark = document.body.classList.contains("dark-theme");
    return $` <mwc-icon-button @click=${this.toggleOptions}>
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
      <dialog id="theme-options" @close=${() => this.showOptions = false}>
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
              ${!dark ? $`<svg
                    class="icon"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 42Q16.5 42 11.25 36.75Q6 31.5 6 24Q6 16.5 11.25 11.25Q16.5 6 24 6Q24.4 6 24.85 6.025Q25.3 6.05 26 6.1Q24.2 7.7 23.2 10.05Q22.2 12.4 22.2 15Q22.2 19.5 25.35 22.65Q28.5 25.8 33 25.8Q35.6 25.8 37.95 24.875Q40.3 23.95 41.9 22.3Q41.95 22.9 41.975 23.275Q42 23.65 42 24Q42 31.5 36.75 36.75Q31.5 42 24 42ZM24 39Q29.45 39 33.5 35.625Q37.55 32.25 38.55 27.7Q37.3 28.25 35.875 28.525Q34.45 28.8 33 28.8Q27.25 28.8 23.225 24.775Q19.2 20.75 19.2 15Q19.2 13.8 19.45 12.425Q19.7 11.05 20.35 9.3Q15.45 10.65 12.225 14.775Q9 18.9 9 24Q9 30.25 13.375 34.625Q17.75 39 24 39ZM23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Z"
                    />
                  </svg>` : $`<svg
                    class="icon"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 31Q26.9 31 28.95 28.95Q31 26.9 31 24Q31 21.1 28.95 19.05Q26.9 17 24 17Q21.1 17 19.05 19.05Q17 21.1 17 24Q17 26.9 19.05 28.95Q21.1 31 24 31ZM24 34Q19.85 34 16.925 31.075Q14 28.15 14 24Q14 19.85 16.925 16.925Q19.85 14 24 14Q28.15 14 31.075 16.925Q34 19.85 34 24Q34 28.15 31.075 31.075Q28.15 34 24 34ZM3.5 25.5Q2.85 25.5 2.425 25.075Q2 24.65 2 24Q2 23.35 2.425 22.925Q2.85 22.5 3.5 22.5H8.5Q9.15 22.5 9.575 22.925Q10 23.35 10 24Q10 24.65 9.575 25.075Q9.15 25.5 8.5 25.5ZM39.5 25.5Q38.85 25.5 38.425 25.075Q38 24.65 38 24Q38 23.35 38.425 22.925Q38.85 22.5 39.5 22.5H44.5Q45.15 22.5 45.575 22.925Q46 23.35 46 24Q46 24.65 45.575 25.075Q45.15 25.5 44.5 25.5ZM24 10Q23.35 10 22.925 9.575Q22.5 9.15 22.5 8.5V3.5Q22.5 2.85 22.925 2.425Q23.35 2 24 2Q24.65 2 25.075 2.425Q25.5 2.85 25.5 3.5V8.5Q25.5 9.15 25.075 9.575Q24.65 10 24 10ZM24 46Q23.35 46 22.925 45.575Q22.5 45.15 22.5 44.5V39.5Q22.5 38.85 22.925 38.425Q23.35 38 24 38Q24.65 38 25.075 38.425Q25.5 38.85 25.5 39.5V44.5Q25.5 45.15 25.075 45.575Q24.65 46 24 46ZM12 14.1 9.15 11.3Q8.7 10.85 8.725 10.225Q8.75 9.6 9.15 9.15Q9.6 8.7 10.225 8.7Q10.85 8.7 11.3 9.15L14.1 12Q14.5 12.45 14.5 13.05Q14.5 13.65 14.1 14.05Q13.7 14.5 13.075 14.5Q12.45 14.5 12 14.1ZM36.7 38.85 33.9 36Q33.5 35.55 33.5 34.925Q33.5 34.3 33.95 33.9Q34.35 33.45 34.95 33.45Q35.55 33.45 36 33.9L38.85 36.7Q39.3 37.15 39.275 37.775Q39.25 38.4 38.85 38.85Q38.4 39.3 37.775 39.3Q37.15 39.3 36.7 38.85ZM33.9 14.1Q33.45 13.65 33.45 13.05Q33.45 12.45 33.9 12L36.7 9.15Q37.15 8.7 37.775 8.725Q38.4 8.75 38.85 9.15Q39.3 9.6 39.3 10.225Q39.3 10.85 38.85 11.3L36 14.1Q35.6 14.5 34.975 14.5Q34.35 14.5 33.9 14.1ZM9.15 38.85Q8.7 38.4 8.7 37.775Q8.7 37.15 9.15 36.7L12 33.9Q12.45 33.45 13.05 33.45Q13.65 33.45 14.1 33.9Q14.55 34.35 14.55 34.95Q14.55 35.55 14.1 36L11.3 38.85Q10.85 39.3 10.225 39.275Q9.6 39.25 9.15 38.85ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Z"
                    />
                  </svg>`}
            </mwc-icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`;
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      this.options.showModal();
    }
  }
  toggle() {
    const dark = document.body.classList.contains("dark-theme");
    if (!dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    this.requestUpdate();
  }
  setColor(val) {
    this.color = val;
    localStorage.setItem("theme-color", val);
    this.updateTheme();
    this.dispatchEvent(new CustomEvent("color", {
      detail: { color: val },
      bubbles: true,
      composed: true
    }));
  }
  onColor(e2) {
    const target = e2.target;
    this.setColor(target.value);
  }
  randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i2 = 0; i2 < 6; i2++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setColor(color);
  }
  updateTheme() {
    const source = this.color;
    const w2 = new WorkerWrapper();
    w2.addEventListener("message", (e2) => {
      const { id, content } = e2.data;
      this.updateStyle(id, content);
    });
    const defaultTones = [100, 99, 98, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
    const fullTones = Array.from(Array(101).keys());
    w2.postMessage({
      source,
      rgb: this.rgb,
      tones: this.expanded ? fullTones : defaultTones
    });
  }
  updateStyle(id, content) {
    const styleId = `generated-material-${id}`;
    let style = document.getElementById(styleId);
    if (style == null) {
      style = document.createElement("style");
      style.id = styleId;
      style.type = "text/css";
      document.head.appendChild(style);
    }
    const chunks = content.match(/.{1,500}/g) || [];
    for (const chunk of chunks) {
      style.appendChild(document.createTextNode(chunk));
    }
  }
  toggleClass(dark) {
    if (dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    this.requestUpdate();
  }
  firstUpdated() {
    this.updateTheme();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.toggleClass(prefersDark.matches);
    prefersDark.addEventListener("change", (e2) => {
      const dark = e2.matches;
      this.toggleClass(dark);
    });
  }
};
MaterialThemeControl.styles = r$2`
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
  `;
__decorateClass([
  e$3({ type: Boolean })
], MaterialThemeControl.prototype, "rgb", 2);
__decorateClass([
  e$3({ type: Boolean })
], MaterialThemeControl.prototype, "expanded", 2);
__decorateClass([
  t$1()
], MaterialThemeControl.prototype, "showOptions", 2);
__decorateClass([
  e$3()
], MaterialThemeControl.prototype, "color", 2);
__decorateClass([
  i$2("#theme-options")
], MaterialThemeControl.prototype, "options", 2);
MaterialThemeControl = __decorateClass([
  n$1(tagName)
], MaterialThemeControl);
