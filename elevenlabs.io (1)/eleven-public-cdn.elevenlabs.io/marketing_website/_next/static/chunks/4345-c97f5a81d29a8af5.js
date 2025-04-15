"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4345], {
        4325: (e, t, n) => {
            n.d(t, {
                default: () => c
            });
            var r = n(82997),
                o = n(75008),
                l = n.n(o),
                i = n(50245),
                a = n(97387),
                u = n(22753),
                c = (0, a.forwardRef)(function(e, t) {
                    let {
                        defaultLocale: n,
                        href: o,
                        locale: c,
                        localeCookie: s,
                        onClick: d,
                        prefetch: p,
                        unprefixed: f,
                        ...h
                    } = e, v = (0, u.A)(), x = null != c && c !== v, g = c || v, m = function() {
                        let [e, t] = (0, a.useState)();
                        return (0, a.useEffect)(() => {
                            t(window.location.host)
                        }, []), e
                    }(), y = m && f && (f.domains[m] === g || !Object.keys(f.domains).includes(m) && v === n && !c) ? f.pathname : o, b = (0, i.usePathname)();
                    return x && (p && console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"), p = !1), a.createElement(l(), (0, r._)({
                        ref: t,
                        href: y,
                        hrefLang: x ? c : void 0,
                        onClick: function(e) {
                            (function(e, t, n, r) {
                                if (!e || r === n || null == r || !t) return;
                                let o = function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
                                        return "/" === e ? t : t.replace(e, "")
                                    }(t),
                                    {
                                        name: l,
                                        ...i
                                    } = e;
                                i.path || (i.path = "" !== o ? o : "/");
                                let a = "".concat(l, "=").concat(r, ";");
                                for (let [e, t] of Object.entries(i)) a += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (a += "=" + t), a += ";";
                                document.cookie = a
                            })(s, b, v, c), d && d(e)
                        },
                        prefetch: p
                    }, h))
                })
        },
        5791: (e, t, n) => {
            n.d(t, {
                default: () => v
            });
            var r = n(82997),
                o = n(50245),
                l = n(97387),
                i = n(22753),
                a = n(55036);

            function u(e) {
                return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && ! function(e) {
                    let t = "object" == typeof e ? e.pathname : e;
                    return null != t && !t.startsWith("/")
                }(e)
            }

            function c(e, t) {
                let n;
                return "string" == typeof e ? n = s(t, e) : (n = { ...e
                }, e.pathname && (n.pathname = s(t, e.pathname))), n
            }

            function s(e, t) {
                let n = e;
                return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), n += t
            }

            function d(e) {
                return e.includes("[[...")
            }

            function p(e) {
                return e.includes("[...")
            }

            function f(e) {
                return e.includes("[")
            }
            var h = n(4325);
            let v = (0, l.forwardRef)(function(e, t) {
                let {
                    href: n,
                    locale: a,
                    localeCookie: s,
                    localePrefixMode: d,
                    prefix: p,
                    ...f
                } = e, v = (0, o.usePathname)(), x = (0, i.A)(), g = a !== x, [m, y] = (0, l.useState)(() => u(n) && ("never" !== d || g) ? c(n, p) : n);
                return (0, l.useEffect)(() => {
                    v && y(function(e, t) {
                        var n, r;
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            l = arguments.length > 3 ? arguments[3] : void 0,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        if (!u(e)) return e;
                        let a = (n = i, (r = l) === n || r.startsWith("".concat(n, "/")));
                        return (t !== o || a) && null != i ? c(e, i) : e
                    }(n, a, x, v, p))
                }, [x, n, a, v, p]), l.createElement(h.default, (0, r._)({
                    ref: t,
                    href: m,
                    locale: a,
                    localeCookie: s
                }, f))
            });
            v.displayName = "ClientLink"
        },
        22753: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(50245),
                o = n(1506);
            let l = "locale";

            function i() {
                let e, t = (0, r.useParams)();
                try {
                    e = (0, o.useLocale)()
                } catch (n) {
                    if ("string" != typeof(null == t ? void 0 : t[l])) throw n;
                    e = t[l]
                }
                return e
            }
        },
        72093: (e, t, n) => {
            n.d(t, {
                Kq: () => F,
                UC: () => q,
                bL: () => H,
                l9: () => W
            });
            var r = n(97387),
                o = n(51113),
                l = n(93371),
                i = n(17439),
                a = n(26065),
                u = n(90758),
                c = n(55615),
                s = (n(57077), n(53591)),
                d = n(78273),
                p = n(40774),
                f = n(58170),
                h = n(81237),
                v = n(4155),
                [x, g] = (0, i.A)("Tooltip", [c.Bk]),
                m = (0, c.Bk)(),
                y = "TooltipProvider",
                b = "tooltip.open",
                [w, C] = x(y),
                E = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: o = 300,
                        disableHoverableContent: l = !1,
                        children: i
                    } = e, [a, u] = r.useState(!0), c = r.useRef(!1), s = r.useRef(0);
                    return r.useEffect(() => {
                        let e = s.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, v.jsx)(w, {
                        scope: t,
                        isOpenDelayed: a,
                        delayDuration: n,
                        onOpen: r.useCallback(() => {
                            window.clearTimeout(s.current), u(!1)
                        }, []),
                        onClose: r.useCallback(() => {
                            window.clearTimeout(s.current), s.current = window.setTimeout(() => u(!0), o)
                        }, [o]),
                        isPointerInTransitRef: c,
                        onPointerInTransitChange: r.useCallback(e => {
                            c.current = e
                        }, []),
                        disableHoverableContent: l,
                        children: i
                    })
                };
            E.displayName = y;
            var T = "Tooltip",
                [k, L] = x(T),
                j = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: l = !1,
                        onOpenChange: i,
                        disableHoverableContent: a,
                        delayDuration: s
                    } = e, d = C(T, e.__scopeTooltip), p = m(t), [h, x] = r.useState(null), g = (0, u.B)(), y = r.useRef(0), w = null != a ? a : d.disableHoverableContent, E = null != s ? s : d.delayDuration, L = r.useRef(!1), [j = !1, P] = (0, f.i)({
                        prop: o,
                        defaultProp: l,
                        onChange: e => {
                            e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(b))) : d.onClose(), null == i || i(e)
                        }
                    }), R = r.useMemo(() => j ? L.current ? "delayed-open" : "instant-open" : "closed", [j]), _ = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, L.current = !1, P(!0)
                    }, [P]), O = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, P(!1)
                    }, [P]), M = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                            L.current = !0, P(!0), y.current = 0
                        }, E)
                    }, [E, P]);
                    return r.useEffect(() => () => {
                        y.current && (window.clearTimeout(y.current), y.current = 0)
                    }, []), (0, v.jsx)(c.bL, { ...p,
                        children: (0, v.jsx)(k, {
                            scope: t,
                            contentId: g,
                            open: j,
                            stateAttribute: R,
                            trigger: h,
                            onTriggerChange: x,
                            onTriggerEnter: r.useCallback(() => {
                                d.isOpenDelayed ? M() : _()
                            }, [d.isOpenDelayed, M, _]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? O() : (window.clearTimeout(y.current), y.current = 0)
                            }, [O, w]),
                            onOpen: _,
                            onClose: O,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            j.displayName = T;
            var P = "TooltipTrigger",
                R = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...i
                    } = e, a = L(P, n), u = C(P, n), s = m(n), p = r.useRef(null), f = (0, l.s)(t, p, a.onTriggerChange), h = r.useRef(!1), x = r.useRef(!1), g = r.useCallback(() => h.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, v.jsx)(c.Mz, {
                        asChild: !0,
                        ...s,
                        children: (0, v.jsx)(d.sG.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...i,
                            ref: f,
                            onPointerMove: (0, o.m)(e.onPointerMove, e => {
                                "touch" === e.pointerType || x.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), x.current = !0)
                            }),
                            onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), x.current = !1
                            }),
                            onPointerDown: (0, o.m)(e.onPointerDown, () => {
                                h.current = !0, document.addEventListener("pointerup", g, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => {
                                h.current || a.onOpen()
                            }),
                            onBlur: (0, o.m)(e.onBlur, a.onClose),
                            onClick: (0, o.m)(e.onClick, a.onClose)
                        })
                    })
                });
            R.displayName = P;
            var [_, O] = x("TooltipPortal", {
                forceMount: void 0
            }), M = "TooltipContent", I = r.forwardRef((e, t) => {
                let n = O(M, e.__scopeTooltip),
                    {
                        forceMount: r = n.forceMount,
                        side: o = "top",
                        ...l
                    } = e,
                    i = L(M, e.__scopeTooltip);
                return (0, v.jsx)(s.C, {
                    present: r || i.open,
                    children: i.disableHoverableContent ? (0, v.jsx)(B, {
                        side: o,
                        ...l,
                        ref: t
                    }) : (0, v.jsx)(N, {
                        side: o,
                        ...l,
                        ref: t
                    })
                })
            }), N = r.forwardRef((e, t) => {
                let n = L(M, e.__scopeTooltip),
                    o = C(M, e.__scopeTooltip),
                    i = r.useRef(null),
                    a = (0, l.s)(t, i),
                    [u, c] = r.useState(null),
                    {
                        trigger: s,
                        onClose: d
                    } = n,
                    p = i.current,
                    {
                        onPointerInTransitChange: f
                    } = o,
                    h = r.useCallback(() => {
                        c(null), f(!1)
                    }, [f]),
                    x = r.useCallback((e, t) => {
                        let n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t) {
                                let n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    l = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, l)) {
                                    case l:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect());
                        c(function(e) {
                            let t = e.slice();
                            return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                                function(e) {
                                    if (e.length <= 1) return e.slice();
                                    let t = [];
                                    for (let n = 0; n < e.length; n++) {
                                        let r = e[n];
                                        for (; t.length >= 2;) {
                                            let e = t[t.length - 1],
                                                n = t[t.length - 2];
                                            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                            else break
                                        }
                                        t.push(r)
                                    }
                                    t.pop();
                                    let n = [];
                                    for (let t = e.length - 1; t >= 0; t--) {
                                        let r = e[t];
                                        for (; n.length >= 2;) {
                                            let e = n[n.length - 1],
                                                t = n[n.length - 2];
                                            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                            else break
                                        }
                                        n.push(r)
                                    }
                                    return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                }(t)
                        }([... function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                r = [];
                            switch (t) {
                                case "top":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y + n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "bottom":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y - n
                                    });
                                    break;
                                case "left":
                                    r.push({
                                        x: e.x + n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "right":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x - n,
                                        y: e.y + n
                                    })
                            }
                            return r
                        }(r, o), ... function(e) {
                            let {
                                top: t,
                                right: n,
                                bottom: r,
                                left: o
                            } = e;
                            return [{
                                x: o,
                                y: t
                            }, {
                                x: n,
                                y: t
                            }, {
                                x: n,
                                y: r
                            }, {
                                x: o,
                                y: r
                            }]
                        }(t.getBoundingClientRect())])), f(!0)
                    }, [f]);
                return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                    if (s && p) {
                        let e = e => x(e, p),
                            t = e => x(e, s);
                        return s.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
                            s.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t)
                        }
                    }
                }, [s, p, x, h]), r.useEffect(() => {
                    if (u) {
                        let e = e => {
                            let t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = (null == s ? void 0 : s.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                o = ! function(e, t) {
                                    let {
                                        x: n,
                                        y: r
                                    } = e, o = !1;
                                    for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                                        let i = t[e].x,
                                            a = t[e].y,
                                            u = t[l].x,
                                            c = t[l].y;
                                        a > r != c > r && n < (u - i) * (r - a) / (c - a) + i && (o = !o)
                                    }
                                    return o
                                }(n, u);
                            r ? h() : o && (h(), d())
                        };
                        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                    }
                }, [s, p, u, d, h]), (0, v.jsx)(B, { ...e,
                    ref: a
                })
            }), [A, D] = x(T, {
                isInside: !1
            }), B = r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    children: o,
                    "aria-label": l,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: u,
                    ...s
                } = e, d = L(M, n), f = m(n), {
                    onClose: x
                } = d;
                return r.useEffect(() => (document.addEventListener(b, x), () => document.removeEventListener(b, x)), [x]), r.useEffect(() => {
                    if (d.trigger) {
                        let e = e => {
                            let t = e.target;
                            (null == t ? void 0 : t.contains(d.trigger)) && x()
                        };
                        return window.addEventListener("scroll", e, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    }
                }, [d.trigger, x]), (0, v.jsx)(a.qW, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: u,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: x,
                    children: (0, v.jsxs)(c.UC, {
                        "data-state": d.stateAttribute,
                        ...f,
                        ...s,
                        ref: t,
                        style: { ...s.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        },
                        children: [(0, v.jsx)(p.xV, {
                            children: o
                        }), (0, v.jsx)(A, {
                            scope: n,
                            isInside: !0,
                            children: (0, v.jsx)(h.b, {
                                id: d.contentId,
                                role: "tooltip",
                                children: l || o
                            })
                        })]
                    })
                })
            });
            I.displayName = M;
            var S = "TooltipArrow";
            r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...r
                } = e, o = m(n);
                return D(S, n).isInside ? null : (0, v.jsx)(c.i3, { ...o,
                    ...r,
                    ref: t
                })
            }).displayName = S;
            var F = E,
                H = j,
                W = R,
                q = I
        },
        78487: (e, t, n) => {
            n.d(t, {
                default: () => i
            });
            var r = n(82997),
                o = n(97387),
                l = n(11671);

            function i(e) {
                let {
                    locale: t,
                    ...n
                } = e;
                if (!t) throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");
                return o.createElement(l.IntlProvider, (0, r._)({
                    locale: t
                }, n))
            }
        },
        82997: (e, t, n) => {
            n.d(t, {
                _: () => r
            });

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(null, arguments)
            }
        }
    }
]);