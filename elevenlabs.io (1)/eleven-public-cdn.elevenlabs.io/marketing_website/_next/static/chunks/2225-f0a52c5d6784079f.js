"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2225], {
        1506: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(36387);
            r(97387), r(18832), t.useLocale = n.useLocale
        },
        28149: (e, t) => {
            function r(e) {
                let t = {};
                for (let [r, n] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
                }
                return t
            }

            function n(e) {
                return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function o(e) {
                let t = new URLSearchParams;
                for (let [r, o] of Object.entries(e))
                    if (Array.isArray(o))
                        for (let e of o) t.append(r, n(e));
                    else t.set(r, n(o));
                return t
            }

            function u(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, n] of t.entries()) e.append(r, n)
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                assign: function() {
                    return u
                },
                searchParamsToUrlQuery: function() {
                    return r
                },
                urlQueryToSearchParams: function() {
                    return o
                }
            })
        },
        28362: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(50245),
                o = r(33674),
                u = r(93602);
            t.default = function() {
                let e, t = n.useParams();
                try {
                    e = o.useLocale()
                } catch (r) {
                    if ("string" != typeof(null == t ? void 0 : t[u.LOCALE_SEGMENT_NAME])) throw r;
                    e = t[u.LOCALE_SEGMENT_NAME]
                }
                return e
            }
        },
        33674: (e, t, r) => {
            e.exports = r(1506)
        },
        35197: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                DecodeError: function() {
                    return h
                },
                MiddlewareNotFoundError: function() {
                    return b
                },
                MissingStaticPage: function() {
                    return E
                },
                NormalizeError: function() {
                    return y
                },
                PageNotFoundError: function() {
                    return g
                },
                SP: function() {
                    return p
                },
                ST: function() {
                    return d
                },
                WEB_VITALS: function() {
                    return r
                },
                execOnce: function() {
                    return n
                },
                getDisplayName: function() {
                    return i
                },
                getLocationOrigin: function() {
                    return l
                },
                getURL: function() {
                    return a
                },
                isAbsoluteUrl: function() {
                    return u
                },
                isResSent: function() {
                    return f
                },
                loadGetInitialProps: function() {
                    return c
                },
                normalizeRepeatedSlashes: function() {
                    return s
                },
                stringifyError: function() {
                    return m
                }
            });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(e) {
                let t, r = !1;
                return function() {
                    for (var n = arguments.length, o = Array(n), u = 0; u < n; u++) o[u] = arguments[u];
                    return r || (r = !0, t = e(...o)), t
                }
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                u = e => o.test(e);

            function l() {
                let {
                    protocol: e,
                    hostname: t,
                    port: r
                } = window.location;
                return e + "//" + t + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: e
                } = window.location, t = l();
                return e.substring(t.length)
            }

            function i(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function f(e) {
                return e.finished || e.headersSent
            }

            function s(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function c(e, t) {
                let r = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await c(t.Component, t.ctx)
                } : {};
                let n = await e.getInitialProps(t);
                if (r && f(r)) return n;
                if (!n) throw Object.defineProperty(Error('"' + i(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
                return n
            }
            let p = "undefined" != typeof performance,
                d = p && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class h extends Error {}
            class y extends Error {}
            class g extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class E extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class b extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function m(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        },
        36387: (e, t, r) => {
            var n = r(97387),
                o = r(18832);

            function u() {
                let e = n.useContext(o.IntlContext);
                if (!e) throw Error(void 0);
                return e
            }
            t.useIntlContext = u, t.useLocale = function() {
                return u().locale
            }
        },
        71312: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(97387);

            function o(e, t) {
                let r = (0, n.useRef)(null),
                    o = (0, n.useRef)(null);
                return (0, n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = o.current;
                        t && (o.current = null, t())
                    } else e && (r.current = u(e, n)), t && (o.current = u(t, n))
                }, [e, t])
            }

            function u(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        75008: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let n = r(38347),
                o = r(4155),
                u = n._(r(97387)),
                l = r(76759),
                a = r(99321),
                i = r(4380),
                f = r(71312),
                s = r(35197),
                c = r(77403);
            r(16944);
            let p = r(41200);

            function d(e) {
                return "string" == typeof e ? e : (0, l.formatUrl)(e)
            }
            let h = u.default.forwardRef(function(e, t) {
                let r, n, {
                    href: l,
                    as: h,
                    children: y,
                    prefetch: g = null,
                    passHref: E,
                    replace: b,
                    shallow: m,
                    scroll: _,
                    onClick: P,
                    onMouseEnter: v,
                    onTouchStart: O,
                    legacyBehavior: j = !1,
                    ...C
                } = e;
                r = y, j && ("string" == typeof r || "number" == typeof r) && (r = (0, o.jsx)("a", {
                    children: r
                }));
                let M = u.default.useContext(a.AppRouterContext),
                    N = !1 !== g,
                    A = null === g ? i.PrefetchKind.AUTO : i.PrefetchKind.FULL,
                    {
                        href: L,
                        as: T
                    } = u.default.useMemo(() => {
                        let e = d(l);
                        return {
                            href: e,
                            as: h ? d(h) : e
                        }
                    }, [l, h]);
                j && (n = u.default.Children.only(r));
                let x = j ? n && "object" == typeof n && n.ref : t,
                    S = u.default.useCallback(e => (N && null !== M && (0, p.mountLinkInstance)(e, L, M, A), () => {
                        (0, p.unmountLinkInstance)(e)
                    }), [N, L, M, A]),
                    w = {
                        ref: (0, f.useMergedRef)(S, x),
                        onClick(e) {
                            j || "function" != typeof P || P(e), j && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), M && (e.defaultPrevented || function(e, t, r, n, o, l, a) {
                                let {
                                    nodeName: i
                                } = e.currentTarget;
                                !("A" === i.toUpperCase() && function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e)) && (e.preventDefault(), u.default.startTransition(() => {
                                    let e = null == a || a;
                                    "beforePopState" in t ? t[o ? "replace" : "push"](r, n, {
                                        shallow: l,
                                        scroll: e
                                    }) : t[o ? "replace" : "push"](n || r, {
                                        scroll: e
                                    })
                                }))
                            }(e, M, L, T, b, m, _))
                        },
                        onMouseEnter(e) {
                            j || "function" != typeof v || v(e), j && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), M && N && (0, p.onNavigationIntent)(e.currentTarget)
                        },
                        onTouchStart: function(e) {
                            j || "function" != typeof O || O(e), j && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), M && N && (0, p.onNavigationIntent)(e.currentTarget)
                        }
                    };
                return (0, s.isAbsoluteUrl)(T) ? w.href = T : j && !E && ("a" !== n.type || "href" in n.props) || (w.href = (0, c.addBasePath)(T)), j ? u.default.cloneElement(n, w) : (0, o.jsx)("a", { ...C,
                    ...w,
                    children: r
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        76759: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                formatUrl: function() {
                    return u
                },
                formatWithValidation: function() {
                    return a
                },
                urlObjectKeys: function() {
                    return l
                }
            });
            let n = r(42144)._(r(28149)),
                o = /https?|ftp|gopher|file/;

            function u(e) {
                let {
                    auth: t,
                    hostname: r
                } = e, u = e.protocol || "", l = e.pathname || "", a = e.hash || "", i = e.query || "", f = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? f = t + e.host : r && (f = t + (~r.indexOf(":") ? "[" + r + "]" : r), e.port && (f += ":" + e.port)), i && "object" == typeof i && (i = String(n.urlQueryToSearchParams(i)));
                let s = e.search || i && "?" + i || "";
                return u && !u.endsWith(":") && (u += ":"), e.slashes || (!u || o.test(u)) && !1 !== f ? (f = "//" + (f || ""), l && "/" !== l[0] && (l = "/" + l)) : f || (f = ""), a && "#" !== a[0] && (a = "#" + a), s && "?" !== s[0] && (s = "?" + s), "" + u + f + (l = l.replace(/[?#]/g, encodeURIComponent)) + (s = s.replace("#", "%23")) + a
            }
            let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(e) {
                return u(e)
            }
        },
        87683: (e, t) => {
            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extends = r
        },
        93602: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", t.LOCALE_SEGMENT_NAME = "locale"
        }
    }
]);