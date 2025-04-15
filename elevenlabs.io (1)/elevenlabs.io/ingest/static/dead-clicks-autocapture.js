! function() {
    "use strict";

    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function e(e) {
        for (var r = 1; r < arguments.length; r++) {
            var i = null != arguments[r] ? arguments[r] : {};
            r % 2 ? t(Object(i), !0).forEach((function(t) {
                n(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var r = "undefined" != typeof window ? window : void 0,
        i = "undefined" != typeof globalThis ? globalThis : r,
        a = Array.prototype.forEach,
        o = null == i ? void 0 : i.navigator,
        l = null == i ? void 0 : i.document;
    null == i || i.location, null == i || i.fetch, null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest && i.XMLHttpRequest, null == i || i.AbortController, null == o || o.userAgent;
    var s, c = null != r ? r : {};

    function u(t, e) {
        return -1 !== t.indexOf(e)
    }! function(t) {
        t.GZipJS = "gzip-js", t.Base64 = "base64"
    }(s || (s = {}));
    var _ = function(t) {
            return t.trim()
        },
        h = Array.isArray,
        d = Object.prototype,
        f = d.hasOwnProperty,
        m = d.toString,
        v = h || function(t) {
            return "[object Array]" === m.call(t)
        },
        g = t => "function" == typeof t,
        p = t => g(t) && -1 !== t.toString().indexOf("[native code]"),
        b = () => !!r.Zone,
        y = t => void 0 === t,
        C = t => "[object String]" == m.call(t),
        k = t => null === t,
        w = t => y(t) || k(t),
        O = t => "[object Number]" == m.call(t),
        x = t => t instanceof FormData,
        D = t => {
            var e = {
                _log: function(e) {
                    if (r && c.POSTHOG_DEBUG && !y(r.console) && r.console) {
                        for (var n = ("__rrweb_original__" in r.console[e] ? r.console[e].__rrweb_original__ : r.console[e]), i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        n(t, ...a)
                    }
                },
                info: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e._log("log", ...n)
                },
                warn: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e._log("warn", ...n)
                },
                error: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e._log("error", ...n)
                },
                critical: function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    console.error(t, ...n)
                },
                uninitializedWarning: t => {
                    e.error("You must initialize PostHog before calling ".concat(t))
                },
                createLogger: e => D("".concat(t, " ").concat(e))
            };
            return e
        },
        M = D("[PostHog.js]"),
        N = {};

    function E(t, e, n) {
        if (v(t))
            if (a && t.forEach === a) t.forEach(e, n);
            else if ("length" in t && t.length === +t.length)
            for (var r = 0, i = t.length; r < i; r++)
                if (r in t && e.call(n, t[r], r) === N) return
    }

    function A(t, e, n) {
        if (!w(t)) {
            if (v(t)) return E(t, e, n);
            if (x(t)) {
                for (var r of t.entries())
                    if (e.call(n, r[1], r[0]) === N) return
            } else
                for (var i in t)
                    if (f.call(t, i) && e.call(n, t[i], i) === N) return
        }
    }
    var S = function(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return E(n, (function(e) {
            for (var n in e) void 0 !== e[n] && (t[n] = e[n])
        })), t
    };

    function $(t) {
        for (var e = Object.keys(t), n = e.length, r = new Array(n); n--;) r[n] = [e[n], t[e[n]]];
        return r
    }

    function j(t, e, n, r) {
        var {
            capture: i = !1,
            passive: a = !0
        } = null != r ? r : {};
        null == t || t.addEventListener(e, n, {
            capture: i,
            passive: a
        })
    }

    function L(t) {
        return !!t && 1 === t.nodeType
    }

    function T(t, e) {
        return !!t && !!t.tagName && t.tagName.toLowerCase() === e.toLowerCase()
    }

    function P(t) {
        return t ? _(t).split(/\s+/) : []
    }

    function R(t) {
        var e = "";
        switch (typeof t.className) {
            case "string":
                e = t.className;
                break;
            case "object":
                e = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
                break;
            default:
                e = ""
        }
        return P(e)
    }

    function H(t) {
        var e = "";
        return z(t) && !G(t) && t.childNodes && t.childNodes.length && A(t.childNodes, (function(t) {
            var n, r;
            (function(t) {
                return !!t && 3 === t.nodeType
            })(t) && t.textContent && (e += null !== (r = t.textContent, n = w(r) ? null : _(r).split(/(\s+)/).filter((t => F(t))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)) && void 0 !== n ? n : "")
        })), _(e)
    }
    var q = ["a", "button", "form", "input", "select", "textarea", "label"];

    function z(t) {
        for (var e = t; e.parentNode && !T(e, "body"); e = e.parentNode) {
            var n = R(e);
            if (u(n, "ph-sensitive") || u(n, "ph-no-capture")) return !1
        }
        if (u(R(t), "ph-include")) return !0;
        var r = t.type || "";
        if (C(r)) switch (r.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
        }
        var i = t.name || t.id || "";
        if (C(i)) {
            if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""))) return !1
        }
        return !0
    }

    function G(t) {
        return !!(T(t, "input") && !["button", "checkbox", "submit", "reset"].includes(t.type) || T(t, "select") || T(t, "textarea") || "true" === t.getAttribute("contenteditable"))
    }
    var B = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
        W = new RegExp("^(?:".concat(B, ")$")),
        X = new RegExp(B),
        Z = "\\d{3}-?\\d{2}-?\\d{4}",
        I = new RegExp("^(".concat(Z, ")$")),
        V = new RegExp("(".concat(Z, ")"));

    function F(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (w(t)) return !1;
        if (C(t)) {
            if (t = _(t), (e ? W : X).test((t || "").replace(/[- ]/g, ""))) return !1;
            if ((e ? I : V).test(t)) return !1
        }
        return !0
    }

    function J(t) {
        var e = H(t);
        return F(e = "".concat(e, " ").concat(U(t)).trim()) ? e : ""
    }

    function U(t) {
        var e = "";
        return t && t.childNodes && t.childNodes.length && A(t.childNodes, (function(t) {
            var n;
            if (t && "span" === (null === (n = t.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
                var r = H(t);
                e = "".concat(e, " ").concat(r).trim(), t.childNodes && t.childNodes.length && (e = "".concat(e, " ").concat(U(t)).trim())
            } catch (t) {
                M.error("[AutoCapture]", t)
            }
        })), e
    }

    function Y(t) {
        return function(t) {
            var n = t.map((t => {
                var n, r, i = "";
                if (t.tag_name && (i += t.tag_name), t.attr_class)
                    for (var a of (t.attr_class.sort(), t.attr_class)) i += ".".concat(a.replace(/"/g, ""));
                var o = e(e(e(e({}, t.text ? {
                        text: t.text
                    } : {}), {}, {
                        "nth-child": null !== (n = t.nth_child) && void 0 !== n ? n : 0,
                        "nth-of-type": null !== (r = t.nth_of_type) && void 0 !== r ? r : 0
                    }, t.href ? {
                        href: t.href
                    } : {}), t.attr_id ? {
                        attr_id: t.attr_id
                    } : {}), t.attributes),
                    l = {};
                return $(o).sort(((t, e) => {
                    var [n] = t, [r] = e;
                    return n.localeCompare(r)
                })).forEach((t => {
                    var [e, n] = t;
                    return l[K(e.toString())] = K(n.toString())
                })), i += ":", i += $(o).map((t => {
                    var [e, n] = t;
                    return "".concat(e, '="').concat(n, '"')
                })).join("")
            }));
            return n.join(";")
        }(function(t) {
            return t.map((t => {
                var e, n, r = {
                    text: null === (e = t.$el_text) || void 0 === e ? void 0 : e.slice(0, 400),
                    tag_name: t.tag_name,
                    href: null === (n = t.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
                    attr_class: Q(t),
                    attr_id: t.attr__id,
                    nth_child: t.nth_child,
                    nth_of_type: t.nth_of_type,
                    attributes: {}
                };
                return $(t).filter((t => {
                    var [e] = t;
                    return 0 === e.indexOf("attr__")
                })).forEach((t => {
                    var [e, n] = t;
                    return r.attributes[e] = n
                })), r
            }))
        }(t))
    }

    function K(t) {
        return t.replace(/"|\\"/g, '\\"')
    }

    function Q(t) {
        var e = t.attr__class;
        return e ? v(e) ? e : P(e) : void 0
    }

    function tt(t, e) {
        return e.length > t ? e.slice(0, t) + "..." : e
    }

    function et(t) {
        if (t.previousElementSibling) return t.previousElementSibling;
        var e = t;
        do {
            e = e.previousSibling
        } while (e && !L(e));
        return e
    }

    function nt(t, e, n, r) {
        var i = t.tagName.toLowerCase(),
            a = {
                tag_name: i
            };
        q.indexOf(i) > -1 && !n && ("a" === i.toLowerCase() || "button" === i.toLowerCase() ? a.$el_text = tt(1024, J(t)) : a.$el_text = tt(1024, H(t)));
        var o = R(t);
        o.length > 0 && (a.classes = o.filter((function(t) {
            return "" !== t
        }))), A(t.attributes, (function(n) {
            var i;
            if ((!G(t) || -1 !== ["name", "id", "class", "aria-label"].indexOf(n.name)) && ((null == r || !r.includes(n.name)) && !e && F(n.value) && (i = n.name, !C(i) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7)))) {
                var o = n.value;
                "class" === n.name && (o = P(o).join(" ")), a["attr__" + n.name] = tt(1024, o)
            }
        }));
        for (var l = 1, s = 1, c = t; c = et(c);) l++, c.tagName === t.tagName && s++;
        return a.nth_child = l, a.nth_of_type = s, a
    }

    function rt(t, e) {
        for (var n, i, a, {
                e: o,
                maskAllElementAttributes: s,
                maskAllText: c,
                elementAttributeIgnoreList: _,
                elementsChainAsString: h
            } = e, d = [t], f = t; f.parentNode && !T(f, "body");)(a = f.parentNode) && 11 === a.nodeType ? (d.push(f.parentNode.host), f = f.parentNode.host) : (d.push(f.parentNode), f = f.parentNode);
        var m, v, g, p = [],
            b = {},
            C = !1,
            k = !1;
        if (A(d, (t => {
                var e = z(t);
                "a" === t.tagName.toLowerCase() && (C = t.getAttribute("href"), C = e && C && F(C) && C), u(R(t), "ph-no-capture") && (k = !0), p.push(nt(t, s, c, _));
                var n = function(t) {
                    if (!z(t)) return {};
                    var e = {};
                    return A(t.attributes, (function(t) {
                        if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                            var n = t.name.replace("data-ph-capture-attribute-", ""),
                                r = t.value;
                            n && r && F(r) && (e[n] = r)
                        }
                    })), e
                }(t);
                S(b, n)
            })), k) return {
            props: {},
            explicitNoCapture: k
        };
        if (c || ("a" === t.tagName.toLowerCase() || "button" === t.tagName.toLowerCase() ? p[0].$el_text = J(t) : p[0].$el_text = H(t)), C) {
            var w, O;
            p[0].attr__href = C;
            var x = null === (v = C, g = null == l ? void 0 : l.createElement("a"), w = y(g) ? null : (g.href = v, g)) || void 0 === w ? void 0 : w.host,
                D = null == r || null === (O = r.location) || void 0 === O ? void 0 : O.host;
            x && D && x !== D && (m = C)
        }
        return {
            props: S({
                $event_type: o.type,
                $ce_version: 1
            }, h ? {} : {
                $elements: p
            }, {
                $elements_chain: Y(p)
            }, null !== (n = p[0]) && void 0 !== n && n.$el_text ? {
                $el_text: null === (i = p[0]) || void 0 === i ? void 0 : i.$el_text
            } : {}, m && "click" === o.type ? {
                $external_click_url: m
            } : {}, b)
        }
    }
    var it = {};

    function at(t) {
        return function(t, e) {
            var n = it[t];
            if (n) return n;
            var r = e[t];
            if (p(r) && !b()) return it[t] = r.bind(e);
            var i = e.document;
            if (i && g(i.createElement)) try {
                var a = i.createElement("iframe");
                a.hidden = !0, i.head.appendChild(a);
                var o = a.contentWindow;
                o && o[t] && (r = o[t]), i.head.removeChild(a)
            } catch (e) {
                M.warn("Could not create sandbox iframe for ".concat(t, " check, bailing to assignableWindow.").concat(t, ": "), e)
            }
            return r && g(r) ? it[t] = r.bind(e) : r
        }("MutationObserver", t)
    }

    function ot(t) {
        var e, n, r = y((e = t).target) ? e.srcElement || null : null !== (n = e.target) && void 0 !== n && n.shadowRoot ? e.composedPath()[0] || null : e.target || null;
        return r ? {
            node: r,
            originalEvent: t,
            timestamp: Date.now()
        } : null
    }

    function lt(t, e) {
        return O(t) && t >= e
    }
    class st {
        asRequiredConfig(t) {
            var e, n, r, i, a = this._defaultConfig((null == t ? void 0 : t.__onCapture) || this._captureDeadClick.bind(this));
            return {
                element_attribute_ignorelist: null !== (e = null == t ? void 0 : t.element_attribute_ignorelist) && void 0 !== e ? e : a.element_attribute_ignorelist,
                scroll_threshold_ms: null !== (n = null == t ? void 0 : t.scroll_threshold_ms) && void 0 !== n ? n : a.scroll_threshold_ms,
                selection_change_threshold_ms: null !== (r = null == t ? void 0 : t.selection_change_threshold_ms) && void 0 !== r ? r : a.selection_change_threshold_ms,
                mutation_threshold_ms: null !== (i = null == t ? void 0 : t.mutation_threshold_ms) && void 0 !== i ? i : a.mutation_threshold_ms,
                __onCapture: a.__onCapture
            }
        }
        constructor(t, e) {
            n(this, "_clicks", []), n(this, "_defaultConfig", (t => ({
                element_attribute_ignorelist: [],
                scroll_threshold_ms: 100,
                selection_change_threshold_ms: 100,
                mutation_threshold_ms: 2500,
                __onCapture: t
            }))), n(this, "_onClick", (t => {
                var e = ot(t);
                k(e) || this._ignoreClick(e) || this._clicks.push(e), this._clicks.length && y(this._checkClickTimer) && (this._checkClickTimer = c.setTimeout((() => {
                    this._checkClicks()
                }), 1e3))
            })), n(this, "_onScroll", (() => {
                var t = Date.now();
                t % 50 == 0 && this._clicks.forEach((e => {
                    y(e.scrollDelayMs) && (e.scrollDelayMs = t - e.timestamp)
                }))
            })), n(this, "_onSelectionChange", (() => {
                this._lastSelectionChanged = Date.now()
            })), this.instance = t, this._config = this.asRequiredConfig(e), this._onCapture = this._config.__onCapture
        }
        start(t) {
            this._startClickObserver(), this._startScrollObserver(), this._startSelectionChangedObserver(), this._startMutationObserver(t)
        }
        _startMutationObserver(t) {
            if (!this._mutationObserver) {
                var e = at(c);
                this._mutationObserver = new e((t => {
                    this.onMutation(t)
                })), this._mutationObserver.observe(t, {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                })
            }
        }
        stop() {
            var t;
            null === (t = this._mutationObserver) || void 0 === t || t.disconnect(), this._mutationObserver = void 0, c.removeEventListener("click", this._onClick), c.removeEventListener("scroll", this._onScroll, {
                capture: !0
            }), c.removeEventListener("selectionchange", this._onSelectionChange)
        }
        onMutation(t) {
            this._lastMutation = Date.now()
        }
        _startClickObserver() {
            j(c, "click", this._onClick)
        }
        _startScrollObserver() {
            j(c, "scroll", this._onScroll, {
                capture: !0
            })
        }
        _startSelectionChangedObserver() {
            j(c, "selectionchange", this._onSelectionChange)
        }
        _ignoreClick(t) {
            return !t || (!!((e = t.node) instanceof Element && ("__POSTHOG_TOOLBAR__" === e.id || null !== (n = e.closest) && void 0 !== n && n.call(e, ".toolbar-global-fade-container"))) || (!!this._clicks.some((e => e.node === t.node && Math.abs(e.timestamp - t.timestamp) < 1e3)) || !(!T(t.node, "html") && L(t.node) && !q.includes(t.node.tagName.toLowerCase()))));
            var e, n
        }
        _checkClicks() {
            if (this._clicks.length) {
                clearTimeout(this._checkClickTimer), this._checkClickTimer = void 0;
                var t = this._clicks;
                for (var e of (this._clicks = [], t)) {
                    var n;
                    e.mutationDelayMs = null !== (n = e.mutationDelayMs) && void 0 !== n ? n : this._lastMutation && e.timestamp <= this._lastMutation ? this._lastMutation - e.timestamp : void 0, e.absoluteDelayMs = Date.now() - e.timestamp, e.selectionChangedDelayMs = this._lastSelectionChanged && e.timestamp <= this._lastSelectionChanged ? this._lastSelectionChanged - e.timestamp : void 0;
                    var r = lt(e.scrollDelayMs, this._config.scroll_threshold_ms),
                        i = lt(e.selectionChangedDelayMs, this._config.selection_change_threshold_ms),
                        a = lt(e.mutationDelayMs, this._config.mutation_threshold_ms),
                        o = lt(e.absoluteDelayMs, 1.1 * this._config.mutation_threshold_ms),
                        l = O(e.scrollDelayMs) && e.scrollDelayMs < this._config.scroll_threshold_ms,
                        s = O(e.mutationDelayMs) && e.mutationDelayMs < this._config.mutation_threshold_ms,
                        u = O(e.selectionChangedDelayMs) && e.selectionChangedDelayMs < this._config.selection_change_threshold_ms;
                    l || s || u || (r || a || o || i ? this._onCapture(e, {
                        $dead_click_last_mutation_timestamp: this._lastMutation,
                        $dead_click_event_timestamp: e.timestamp,
                        $dead_click_scroll_timeout: r,
                        $dead_click_mutation_timeout: a,
                        $dead_click_absolute_timeout: o,
                        $dead_click_selection_changed_timeout: i
                    }) : e.absoluteDelayMs < this._config.mutation_threshold_ms && this._clicks.push(e))
                }
                this._clicks.length && y(this._checkClickTimer) && (this._checkClickTimer = c.setTimeout((() => {
                    this._checkClicks()
                }), 1e3))
            }
        }
        _captureDeadClick(t, n) {
            this.instance.capture("$dead_click", e(e(e({}, n), rt(t.node, {
                e: t.originalEvent,
                maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                maskAllText: this.instance.config.mask_all_text,
                elementAttributeIgnoreList: this._config.element_attribute_ignorelist,
                elementsChainAsString: !1
            }).props), {}, {
                $dead_click_scroll_delay_ms: t.scrollDelayMs,
                $dead_click_mutation_delay_ms: t.mutationDelayMs,
                $dead_click_absolute_delay_ms: t.absoluteDelayMs,
                $dead_click_selection_changed_delay_ms: t.selectionChangedDelayMs
            }), {
                timestamp: new Date(t.timestamp)
            })
        }
    }
    c.__PosthogExtensions__ = c.__PosthogExtensions__ || {}, c.__PosthogExtensions__.initDeadClicksAutocapture = (t, e) => new st(t, e)
}();
//# sourceMappingURL=dead-clicks-autocapture.js.map