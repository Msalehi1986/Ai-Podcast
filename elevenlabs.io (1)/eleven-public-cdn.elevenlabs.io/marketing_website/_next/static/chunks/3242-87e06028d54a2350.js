(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3242], {
        5245: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => a
            });
            let n = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                a = {};
            for (let e in n) a[e] = {
                isEnabled: t => n[e].some(e => !!t[e])
            }
        },
        11002: e => {
            e.exports = {
                style: {
                    fontFamily: "'WaldenburgHF', 'WaldenburgHF Fallback'",
                    fontWeight: 700
                },
                className: "__className_3b4b22",
                variable: "__variable_3b4b22"
            }
        },
        11671: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(97387),
                a = r(17079),
                o = r(18832);
            r(76573);
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n);
            t.IntlProvider = function(e) {
                let {
                    children: t,
                    defaultTranslationValues: r,
                    formats: l,
                    getMessageFallback: s,
                    locale: u,
                    messages: c,
                    now: f,
                    onError: d,
                    timeZone: p
                } = e, y = n.useMemo(() => a.createCache(), [u]), g = n.useMemo(() => a.createIntlFormatters(y), [y]), v = n.useMemo(() => ({ ...a.initializeConfig({
                        locale: u,
                        defaultTranslationValues: r,
                        formats: l,
                        getMessageFallback: s,
                        messages: c,
                        now: f,
                        onError: d,
                        timeZone: p
                    }),
                    formatters: g,
                    cache: y
                }), [y, r, l, g, s, u, c, f, d, p]);
                return i.default.createElement(o.IntlContext.Provider, {
                    value: v
                }, t)
            }
        },
        16457: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => n
            });
            let n = (0, r(97387).createContext)({
                strict: !1
            })
        },
        17079: (e, t, r) => {
            "use strict";
            var n = r(76573);

            function a() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.filter(Boolean).join(".")
            }

            function o(e) {
                return a(e.namespace, e.key)
            }

            function i(e) {
                console.error(e)
            }

            function l(e, t) {
                return n.memoize(e, {
                    cache: {
                        create: () => ({
                            get: e => t[e],
                            set(e, r) {
                                t[e] = r
                            }
                        })
                    },
                    strategy: n.strategies.variadic
                })
            }

            function s(e, t) {
                return l(function() {
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return new e(...r)
                }, t)
            }
            t.createCache = function() {
                return {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                }
            }, t.createIntlFormatters = function(e) {
                return {
                    getDateTimeFormat: s(Intl.DateTimeFormat, e.dateTime),
                    getNumberFormat: s(Intl.NumberFormat, e.number),
                    getPluralRules: s(Intl.PluralRules, e.pluralRules),
                    getRelativeTimeFormat: s(Intl.RelativeTimeFormat, e.relativeTime),
                    getListFormat: s(Intl.ListFormat, e.list),
                    getDisplayNames: s(Intl.DisplayNames, e.displayNames)
                }
            }, t.defaultGetMessageFallback = o, t.defaultOnError = i, t.initializeConfig = function(e) {
                let {
                    getMessageFallback: t,
                    messages: r,
                    onError: n,
                    ...a
                } = e;
                return { ...a,
                    messages: r,
                    onError: n || i,
                    getMessageFallback: t || o
                }
            }, t.joinPath = a, t.memoFn = l
        },
        18832: (e, t, r) => {
            "use strict";
            t.IntlContext = r(97387).createContext(void 0)
        },
        30789: e => {
            e.exports = {
                style: {
                    fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_fc2777",
                variable: "__variable_fc2777"
            }
        },
        46238: e => {
            e.exports = {
                style: {
                    fontFamily: "'Waldenburg', 'Waldenburg Fallback'"
                },
                className: "__className_9bc114",
                variable: "__variable_9bc114"
            }
        },
        50245: (e, t, r) => {
            "use strict";
            r.r(t);
            var n = r(6961),
                a = {};
            for (let e in n) "default" !== e && (a[e] = () => n[e]);
            r.d(t, a)
        },
        50461: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return h
                },
                handleClientScriptLoad: function() {
                    return g
                },
                initScriptLoader: function() {
                    return v
                }
            });
            let n = r(38347),
                a = r(42144),
                o = r(4155),
                i = n._(r(72042)),
                l = a._(r(97387)),
                s = r(92212),
                u = r(76076),
                c = r(80920),
                f = new Map,
                d = new Set,
                p = e => {
                    if (i.default.preinit) {
                        e.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    } {
                        let t = document.head;
                        e.forEach(e => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                        })
                    }
                },
                y = e => {
                    let {
                        src: t,
                        id: r,
                        onLoad: n = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: o,
                        children: i = "",
                        strategy: l = "afterInteractive",
                        onError: s,
                        stylesheets: c
                    } = e, y = r || t;
                    if (y && d.has(y)) return;
                    if (f.has(t)) {
                        d.add(y), f.get(t).then(n, s);
                        return
                    }
                    let g = () => {
                            a && a(), d.add(y)
                        },
                        v = document.createElement("script"),
                        b = new Promise((e, t) => {
                            v.addEventListener("load", function(t) {
                                e(), n && n.call(this, t), g()
                            }), v.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            s && s(e)
                        });
                    o ? (v.innerHTML = o.__html || "", g()) : i ? (v.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", g()) : t && (v.src = t, f.set(t, b)), (0, u.setAttributesFromProps)(v, e), "worker" === l && v.setAttribute("type", "text/partytown"), v.setAttribute("data-nscript", l), c && p(c), document.body.appendChild(v)
                };

            function g(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => y(e))
                }) : y(e)
            }

            function v(e) {
                e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    d.add(t)
                })
            }

            function b(e) {
                let {
                    id: t,
                    src: r = "",
                    onLoad: n = () => {},
                    onReady: a = null,
                    strategy: u = "afterInteractive",
                    onError: f,
                    stylesheets: p,
                    ...g
                } = e, {
                    updateScripts: v,
                    scripts: b,
                    getIsSsr: h,
                    appDir: m,
                    nonce: _
                } = (0, l.useContext)(s.HeadManagerContext), w = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || r;
                    w.current || (a && e && d.has(e) && a(), w.current = !0)
                }, [a, t, r]);
                let P = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        if (!P.current) {
                            if ("afterInteractive" === u) y(e);
                            else if ("lazyOnload" === u) "complete" === document.readyState ? (0, c.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                                (0, c.requestIdleCallback)(() => y(e))
                            });
                            P.current = !0
                        }
                    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (v ? (b[u] = (b[u] || []).concat([{
                        id: t,
                        src: r,
                        onLoad: n,
                        onReady: a,
                        onError: f,
                        ...g
                    }]), v(b)) : h && h() ? d.add(t || r) : h && !h() && y(e)), m) {
                    if (p && p.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === u)
                        if (!r) return g.dangerouslySetInnerHTML && (g.children = g.dangerouslySetInnerHTML.__html, delete g.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                            nonce: _,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...g,
                                    id: t
                                }]) + ")"
                            }
                        });
                        else return i.default.preload(r, g.integrity ? {
                            as: "script",
                            integrity: g.integrity,
                            nonce: _,
                            crossOrigin: g.crossOrigin
                        } : {
                            as: "script",
                            nonce: _,
                            crossOrigin: g.crossOrigin
                        }), (0, o.jsx)("script", {
                            nonce: _,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, { ...g,
                                    id: t
                                }]) + ")"
                            }
                        });
                    "afterInteractive" === u && r && i.default.preload(r, g.integrity ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: _,
                        crossOrigin: g.crossOrigin
                    } : {
                        as: "script",
                        nonce: _,
                        crossOrigin: g.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(b, "__nextScript", {
                value: !0
            });
            let h = b;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        59283: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => a
            });
            var n = r(5245);

            function a(e) {
                for (let t in e) n.B[t] = { ...n.B[t],
                    ...e[t]
                }
            }
        },
        66984: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => l
            });
            var n = r(4155),
                a = r(97387),
                o = r(16457),
                i = r(59283);

            function l(e) {
                let {
                    children: t,
                    features: r,
                    strict: l = !1
                } = e, [, u] = (0, a.useState)(!s(r)), c = (0, a.useRef)(void 0);
                if (!s(r)) {
                    let {
                        renderer: e,
                        ...t
                    } = r;
                    c.current = e, (0, i.Y)(t)
                }
                return (0, a.useEffect)(() => {
                    s(r) && r().then(e => {
                        let {
                            renderer: t,
                            ...r
                        } = e;
                        (0, i.Y)(r), c.current = t, u(!0)
                    })
                }, []), (0, n.jsx)(o.Y.Provider, {
                    value: {
                        renderer: c.current,
                        strict: l
                    },
                    children: t
                })
            }

            function s(e) {
                return "function" == typeof e
            }
        },
        68424: e => {
            e.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_40a907",
                variable: "__variable_40a907"
            }
        },
        76076: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                n = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function a(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function o(e, t) {
                for (let [o, i] of Object.entries(t)) {
                    if (!t.hasOwnProperty(o) || n.includes(o) || void 0 === i) continue;
                    let l = r[o] || o.toLowerCase();
                    "SCRIPT" === e.tagName && a(l) ? e[l] = !!i : e.setAttribute(l, String(i)), (!1 === i || "SCRIPT" === e.tagName && a(l) && (!i || "false" === i)) && (e.setAttribute(l, ""), e.removeAttribute(l))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        76573: (e, t, r) => {
            "use strict";

            function n(e, t) {
                var r = t && t.cache ? t.cache : s,
                    n = t && t.serializer ? t.serializer : i;
                return (t && t.strategy ? t.strategy : function(e, t) {
                    var r, n, i = 1 === e.length ? a : o;
                    return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
                })(e, {
                    cache: r,
                    serializer: n
                })
            }

            function a(e, t, r, n) {
                var a = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
                    o = t.get(a);
                return void 0 === o && (o = e.call(this, n), t.set(a, o)), o
            }

            function o(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    a = r(n),
                    o = t.get(a);
                return void 0 === o && (o = e.apply(this, n), t.set(a, o)), o
            }
            r.r(t), r.d(t, {
                memoize: () => n,
                strategies: () => u
            });
            var i = function() {
                return JSON.stringify(arguments)
            };

            function l() {
                this.cache = Object.create(null)
            }
            l.prototype.get = function(e) {
                return this.cache[e]
            }, l.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var s = {
                    create: function() {
                        return new l
                    }
                },
                u = {
                    variadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, o.bind(this, e, r, n)
                    },
                    monadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, a.bind(this, e, r, n)
                    }
                }
        },
        80920: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                cancelIdleCallback: function() {
                    return n
                },
                requestIdleCallback: function() {
                    return r
                }
            });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        87488: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => a.a
            });
            var n = r(50461),
                a = r.n(n)
        },
        98450: (e, t, r) => {
            "use strict";
            r.d(t, {
                Tp: () => s,
                _C: () => u,
                sf: () => l,
                so: () => i
            });
            var n = r(24154),
                a = r(97387),
                o = (0, a.createContext)({
                    client: n.Ay
                });

            function i(e) {
                var t = e.children,
                    r = e.client,
                    i = e.apiKey,
                    l = e.options,
                    s = (0, a.useState)(!1),
                    u = s[0],
                    c = s[1],
                    f = (0, a.useMemo)(function() {
                        return r ? (i && console.warn("[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`."), l && console.warn("[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`."), r.__loaded && console.warn("[PostHog.js] `client` was already loaded elsewhere. This may cause issues."), r) : i ? (!1 !== u ? (i !== u.previousAPIKey && console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop."), l && ! function e(t, r, n) {
                            if (void 0 === n && (n = new WeakMap), t === r) return !0;
                            if ("object" != typeof t || null === t || "object" != typeof r || null === r) return !1;
                            if (n.has(t) && n.get(t) === r) return !0;
                            n.set(t, r);
                            var a = Object.keys(t),
                                o = Object.keys(r);
                            if (a.length !== o.length) return !1;
                            for (var i = 0; i < a.length; i++) {
                                var l = a[i];
                                if (!o.includes(l) || !e(t[l], r[l], n)) return !1
                            }
                            return !0
                        }(l, u.previousOptions) && n.Ay.set_config(l)) : (n.Ay.__loaded && console.warn("[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues."), n.Ay.init(i, l)), c({
                            previousAPIKey: i,
                            previousOptions: null != l ? l : {}
                        }), n.Ay) : (console.warn("[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior."), n.Ay)
                    }, [r, i, JSON.stringify(l)]);
                return a.createElement(o.Provider, {
                    value: {
                        client: f
                    }
                }, t)
            }
            var l = function() {
                return (0, a.useContext)(o).client
            };

            function s(e) {
                var t = l(),
                    r = (0, a.useState)(function() {
                        return t.isFeatureEnabled(e)
                    }),
                    n = r[0],
                    o = r[1];
                return (0, a.useEffect)(function() {
                    return t.onFeatureFlags(function() {
                        o(t.isFeatureEnabled(e))
                    })
                }, [t, e]), n
            }

            function u(e) {
                var t = l(),
                    r = (0, a.useState)(function() {
                        return t.getFeatureFlag(e)
                    }),
                    n = r[0],
                    o = r[1];
                return (0, a.useEffect)(function() {
                    return t.onFeatureFlags(function() {
                        o(t.getFeatureFlag(e))
                    })
                }, [t, e]), n
            }
            var c = function() {
                return (c = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };

            function f(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) 0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
                return r
            }

            function d(e) {
                var t = e.flag,
                    r = e.children,
                    n = e.onIntersect,
                    a = e.onClick,
                    o = e.trackView,
                    i = e.options,
                    s = f(e, ["flag", "children", "onIntersect", "onClick", "trackView", "options"]),
                    u = useRef(null);
                return useEffect(function() {
                    if (null !== u.current && o) {
                        var e = new IntersectionObserver(function(e) {
                            return n(e[0])
                        }, c({
                            threshold: .1
                        }, i));
                        return e.observe(u.current),
                            function() {
                                return e.disconnect()
                            }
                    }
                }, [t, i, l(), u, o, n]), React.createElement("div", c({
                    ref: u
                }, s, {
                    onClick: a
                }), r)
            }
        }
    }
]);