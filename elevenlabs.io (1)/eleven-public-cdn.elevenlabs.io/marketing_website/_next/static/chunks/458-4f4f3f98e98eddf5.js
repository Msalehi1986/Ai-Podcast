"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [458], {
        932: (e, t, r) => {
            e.exports = r(63132)
        },
        1167: (e, t, r) => {
            e.exports = r(11671)
        },
        5245: (e, t, r) => {
            r.d(t, {
                B: () => o
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
                o = {};
            for (let e in n) o[e] = {
                isEnabled: t => n[e].some(e => !!t[e])
            }
        },
        7240: (e, t, r) => {
            r.d(t, {
                M: () => o
            });
            var n = r(97387);

            function o(e) {
                let t = (0, n.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        8608: (e, t, r) => {
            r.d(t, {
                F: () => i
            });
            let n = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                o = function() {
                    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                        var r, n, o = "";
                        if ("string" == typeof t || "number" == typeof t) o += t;
                        else if ("object" == typeof t)
                            if (Array.isArray(t))
                                for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n);
                            else
                                for (r in t) t[r] && (o && (o += " "), o += r);
                        return o
                    }(e)) && (n && (n += " "), n += t);
                    return n
                },
                i = (e, t) => r => {
                    var i;
                    if ((null == t ? void 0 : t.variants) == null) return o(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: a,
                        defaultVariants: s
                    } = t, l = Object.keys(a).map(e => {
                        let t = null == r ? void 0 : r[e],
                            o = null == s ? void 0 : s[e];
                        if (null === t) return null;
                        let i = n(t) || n(o);
                        return a[e][i]
                    }), u = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return o(e, l, null == t ? void 0 : null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...s,
                                ...u
                            }[t]) : ({ ...s,
                                ...u
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        11331: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(932);

            function o(e, t) {
                return function() {
                    try {
                        return t(...arguments)
                    } catch (e) {
                        throw Error(void 0)
                    }
                }
            }
            let i = o(0, n.useTranslations);
            t.useFormatter = o(0, n.useFormatter), t.useTranslations = i, Object.keys(n).forEach(function(e) {
                "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                })
            })
        },
        11521: (e, t, r) => {
            r.d(t, {
                E: () => o
            });
            var n = r(97387);
            let o = r(32625).B ? n.useLayoutEffect : n.useEffect
        },
        11671: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(97387),
                o = r(17079),
                i = r(18832);
            r(76573);
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n);
            t.IntlProvider = function(e) {
                let {
                    children: t,
                    defaultTranslationValues: r,
                    formats: s,
                    getMessageFallback: l,
                    locale: u,
                    messages: c,
                    now: h,
                    onError: f,
                    timeZone: p
                } = e, d = n.useMemo(() => o.createCache(), [u]), m = n.useMemo(() => o.createIntlFormatters(d), [d]), g = n.useMemo(() => ({ ...o.initializeConfig({
                        locale: u,
                        defaultTranslationValues: r,
                        formats: s,
                        getMessageFallback: l,
                        messages: c,
                        now: h,
                        onError: f,
                        timeZone: p
                    }),
                    formatters: m,
                    cache: d
                }), [d, r, s, m, l, u, c, h, f, p]);
                return a.default.createElement(i.IntlContext.Provider, {
                    value: g
                }, t)
            }
        },
        16457: (e, t, r) => {
            r.d(t, {
                Y: () => n
            });
            let n = (0, r(97387).createContext)({
                strict: !1
            })
        },
        16617: (e, t, r) => {
            r.d(t, {
                DX: () => a
            });
            var n = r(97387),
                o = r(93371),
                i = r(4155),
                a = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, a = n.Children.toArray(r), l = a.find(u);
                    if (l) {
                        let e = l.props.children,
                            r = a.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, i.jsx)(s, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, i.jsx)(s, { ...o,
                        ref: t,
                        children: r
                    })
                });
            a.displayName = "Slot";
            var s = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...i
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            r = t && "isReactWarning" in t && t.isReactWarning;
                        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(r);
                    return n.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(i, r.props),
                        ref: t ? (0, o.t)(t, e) : e
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            var l = ({
                children: e
            }) => (0, i.jsx)(i.Fragment, {
                children: e
            });

            function u(e) {
                return n.isValidElement(e) && e.type === l
            }
        },
        16899: (e, t, r) => {
            r.d(t, {
                vi: () => W,
                pD: () => J,
                Uu: () => Y,
                rL: () => Q,
                _I: () => ee,
                hJ: () => q,
                bi: () => et,
                yP: () => $
            });
            var n = r(4155),
                o = r(97387),
                i = r(76032),
                a = r(16457),
                s = r(51023);
            let l = (0, o.createContext)({});
            var u = r(83748),
                c = r(79542);

            function h(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            var f = r(32625),
                p = r(5245),
                d = r(59283);
            let m = Symbol.for("motionComponentSymbol");
            var g = r(73104),
                b = r(62302),
                v = r(11521),
                y = r(92489),
                E = r(65565),
                T = r(37412),
                w = r(27188),
                _ = r(2337),
                H = r(61031);
            let A = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function I(e, t, r) {
                for (let n in t)(0, _.S)(t[n]) || (0, w.z)(n, r) || (e[n] = t[n])
            }
            let S = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function C(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || S.has(e)
            }
            let B = e => !C(e);
            try {
                ! function(e) {
                    e && (B = t => t.startsWith("on") ? !C(t) : e(t))
                }(require("@emotion/is-prop-valid").default)
            } catch (e) {}
            var N = r(53234),
                P = r(66457);
            let M = () => ({ ...A(),
                attrs: {}
            });
            var L = r(85520),
                R = r(39547),
                x = r(6668),
                O = r(7240),
                F = r(60139);
            let G = e => (t, r) => {
                    let n = (0, o.useContext)(l),
                        i = (0, o.useContext)(b.t),
                        a = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: t,
                            onUpdate: r
                        }, n, o, i) {
                            let a = {
                                latestValues: function(e, t, r, n) {
                                    let o = {},
                                        i = n(e, {});
                                    for (let e in i) o[e] = (0, F.u)(i[e]);
                                    let {
                                        initial: a,
                                        animate: s
                                    } = e, l = (0, u.e)(e), c = (0, u.O)(e);
                                    t && c && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                                    let h = !!r && !1 === r.initial,
                                        f = (h = h || !1 === a) ? s : a;
                                    if (f && "boolean" != typeof f && !(0, R.N)(f)) {
                                        let t = Array.isArray(f) ? f : [f];
                                        for (let r = 0; r < t.length; r++) {
                                            let n = (0, x.a)(e, t[r]);
                                            if (n) {
                                                let {
                                                    transitionEnd: e,
                                                    transition: t,
                                                    ...r
                                                } = n;
                                                for (let e in r) {
                                                    let t = r[e];
                                                    if (Array.isArray(t)) {
                                                        let e = h ? t.length - 1 : 0;
                                                        t = t[e]
                                                    }
                                                    null !== t && (o[e] = t)
                                                }
                                                for (let t in e) o[t] = e[t]
                                            }
                                        }
                                    }
                                    return o
                                }(n, o, i, e),
                                renderState: t()
                            };
                            return r && (a.onMount = e => r({
                                props: n,
                                current: e,
                                ...a
                            }), a.onUpdate = e => r(e)), a
                        })(e, t, n, i);
                    return r ? a() : (0, O.M)(a)
                },
                k = {
                    useVisualState: G({
                        scrapeMotionValuesFromProps: r(91943).x,
                        createRenderState: A
                    })
                };
            var U = r(3361),
                D = r(56394),
                j = r(76456),
                V = r(44622),
                z = r(15088);
            let X = ["x", "y", "width", "height", "cx", "cy", "r"],
                K = {
                    useVisualState: G({
                        scrapeMotionValuesFromProps: z.x,
                        createRenderState: M,
                        onUpdate: ({
                            props: e,
                            prevProps: t,
                            current: r,
                            renderState: n,
                            latestValues: o
                        }) => {
                            if (!r) return;
                            let i = !!e.drag;
                            if (!i) {
                                for (let e in o)
                                    if (D.f.has(e)) {
                                        i = !0;
                                        break
                                    }
                            }
                            if (!i) return;
                            let a = !t;
                            if (t)
                                for (let r = 0; r < X.length; r++) {
                                    let n = X[r];
                                    e[n] !== t[n] && (a = !0)
                                }
                            a && U.Gt.read(() => {
                                (0, j.H)(r, n), U.Gt.render(() => {
                                    (0, P.B)(n, o, (0, L.n)(r.tagName), e.transformTemplate), (0, V.d)(r, n)
                                })
                            })
                        }
                    })
                },
                Z = function(e, {
                    forwardMotionProps: t
                } = {
                    forwardMotionProps: !1
                }) {
                    return function(e) {
                        var t, r;
                        let {
                            preloadedFeatures: w,
                            createVisualElement: _,
                            useRender: H,
                            useVisualState: A,
                            Component: I
                        } = e;

                        function S(e, t) {
                            var r, d, m;
                            let w, S = { ...(0, o.useContext)(s.Q),
                                    ...e,
                                    layoutId: function(e) {
                                        let {
                                            layoutId: t
                                        } = e, r = (0, o.useContext)(i.L).id;
                                        return r && void 0 !== t ? r + "-" + t : t
                                    }(e)
                                },
                                {
                                    isStatic: C
                                } = S,
                                B = function(e) {
                                    let {
                                        initial: t,
                                        animate: r
                                    } = function(e, t) {
                                        if ((0, u.e)(e)) {
                                            let {
                                                initial: t,
                                                animate: r
                                            } = e;
                                            return {
                                                initial: !1 === t || (0, c.w)(t) ? t : void 0,
                                                animate: (0, c.w)(r) ? r : void 0
                                            }
                                        }
                                        return !1 !== e.inherit ? t : {}
                                    }(e, (0, o.useContext)(l));
                                    return (0, o.useMemo)(() => ({
                                        initial: t,
                                        animate: r
                                    }), [h(t), h(r)])
                                }(e),
                                N = A(e, C);
                            if (!C && f.B) {
                                d = 0, m = 0, (0, o.useContext)(a.Y).strict;
                                let e = function(e) {
                                    let {
                                        drag: t,
                                        layout: r
                                    } = p.B;
                                    if (!t && !r) return {};
                                    let n = { ...t,
                                        ...r
                                    };
                                    return {
                                        MeasureLayout: (null == t ? void 0 : t.isEnabled(e)) || (null == r ? void 0 : r.isEnabled(e)) ? n.MeasureLayout : void 0,
                                        ProjectionNode: n.ProjectionNode
                                    }
                                }(S);
                                w = e.MeasureLayout, B.visualElement = function(e, t, r, n, i) {
                                    var u, c;
                                    let {
                                        visualElement: h
                                    } = (0, o.useContext)(l), f = (0, o.useContext)(a.Y), p = (0, o.useContext)(b.t), d = (0, o.useContext)(s.Q).reducedMotion, m = (0, o.useRef)(null);
                                    n = n || f.renderer, !m.current && n && (m.current = n(e, {
                                        visualState: t,
                                        parent: h,
                                        props: r,
                                        presenceContext: p,
                                        blockInitialAnimation: !!p && !1 === p.initial,
                                        reducedMotionConfig: d
                                    }));
                                    let w = m.current,
                                        _ = (0, o.useContext)(T.N);
                                    w && !w.projection && i && ("html" === w.type || "svg" === w.type) && function(e, t, r, n) {
                                        let {
                                            layoutId: o,
                                            layout: i,
                                            drag: a,
                                            dragConstraints: s,
                                            layoutScroll: l,
                                            layoutRoot: u
                                        } = t;
                                        e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                                        }(e.parent)), e.projection.setOptions({
                                            layoutId: o,
                                            layout: i,
                                            alwaysMeasureLayout: !!a || s && (0, g.X)(s),
                                            visualElement: e,
                                            animationType: "string" == typeof i ? i : "both",
                                            initialPromotionConfig: n,
                                            layoutScroll: l,
                                            layoutRoot: u
                                        })
                                    }(m.current, r, i, _);
                                    let H = (0, o.useRef)(!1);
                                    (0, o.useInsertionEffect)(() => {
                                        w && H.current && w.update(r, p)
                                    });
                                    let A = r[y.n],
                                        I = (0, o.useRef)(!!A && !(null === (u = window.MotionHandoffIsComplete) || void 0 === u ? void 0 : u.call(window, A)) && (null === (c = window.MotionHasOptimisedAnimation) || void 0 === c ? void 0 : c.call(window, A)));
                                    return (0, v.E)(() => {
                                        w && (H.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), E.k.render(w.render), I.current && w.animationState && w.animationState.animateChanges())
                                    }), (0, o.useEffect)(() => {
                                        w && (!I.current && w.animationState && w.animationState.animateChanges(), I.current && (queueMicrotask(() => {
                                            var e;
                                            null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, A)
                                        }), I.current = !1))
                                    }), w
                                }(I, N, S, _, e.ProjectionNode)
                            }
                            return (0, n.jsxs)(l.Provider, {
                                value: B,
                                children: [w && B.visualElement ? (0, n.jsx)(w, {
                                    visualElement: B.visualElement,
                                    ...S
                                }) : null, H(I, e, (r = B.visualElement, (0, o.useCallback)(e => {
                                    e && N.onMount && N.onMount(e), r && (e ? r.mount(e) : r.unmount()), t && ("function" == typeof t ? t(e) : (0, g.X)(t) && (t.current = e))
                                }, [r])), N, C, B.visualElement)]
                            })
                        }
                        w && (0, d.Y)(w), S.displayName = "motion.".concat("string" == typeof I ? I : "create(".concat(null !== (r = null !== (t = I.displayName) && void 0 !== t ? t : I.name) && void 0 !== r ? r : "", ")"));
                        let C = (0, o.forwardRef)(S);
                        return C[m] = I, C
                    }({ ...(0, N.Q)(e) ? K : k,
                        preloadedFeatures: void 0,
                        useRender: function(e = !1) {
                            return (t, r, n, {
                                latestValues: i
                            }, a) => {
                                let s = ((0, N.Q)(t) ? function(e, t, r, n) {
                                        let i = (0, o.useMemo)(() => {
                                            let r = M();
                                            return (0, P.B)(r, t, (0, L.n)(n), e.transformTemplate), { ...r.attrs,
                                                style: { ...r.style
                                                }
                                            }
                                        }, [t]);
                                        if (e.style) {
                                            let t = {};
                                            I(t, e.style, e), i.style = { ...t,
                                                ...i.style
                                            }
                                        }
                                        return i
                                    } : function(e, t) {
                                        let r = {},
                                            n = function(e, t) {
                                                let r = e.style || {},
                                                    n = {};
                                                return I(n, r, e), Object.assign(n, function({
                                                    transformTemplate: e
                                                }, t) {
                                                    return (0, o.useMemo)(() => {
                                                        let r = A();
                                                        return (0, H.O)(r, t, e), Object.assign({}, r.vars, r.style)
                                                    }, [t])
                                                }(e, t)), n
                                            }(e, t);
                                        return e.drag && !1 !== e.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = n, r
                                    })(r, i, a, t),
                                    l = function(e, t, r) {
                                        let n = {};
                                        for (let o in e)("values" !== o || "object" != typeof e.values) && (B(o) || !0 === r && C(o) || !t && !C(o) || e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
                                        return n
                                    }(r, "string" == typeof t, e),
                                    u = t !== o.Fragment ? { ...l,
                                        ...s,
                                        ref: n
                                    } : {},
                                    {
                                        children: c
                                    } = r,
                                    h = (0, o.useMemo)(() => (0, _.S)(c) ? c.get() : c, [c]);
                                return (0, o.createElement)(t, { ...u,
                                    children: h
                                })
                            }
                        }(t),
                        createVisualElement: void 0,
                        Component: e
                    })
                },
                W = Z("button"),
                Y = Z("div"),
                Q = Z("p"),
                q = Z("span"),
                $ = Z("video"),
                J = Z("circle"),
                ee = Z("path"),
                et = Z("svg")
        },
        17079: (e, t, r) => {
            var n = r(76573);

            function o() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.filter(Boolean).join(".")
            }

            function i(e) {
                return o(e.namespace, e.key)
            }

            function a(e) {
                console.error(e)
            }

            function s(e, t) {
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

            function l(e, t) {
                return s(function() {
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
                    getDateTimeFormat: l(Intl.DateTimeFormat, e.dateTime),
                    getNumberFormat: l(Intl.NumberFormat, e.number),
                    getPluralRules: l(Intl.PluralRules, e.pluralRules),
                    getRelativeTimeFormat: l(Intl.RelativeTimeFormat, e.relativeTime),
                    getListFormat: l(Intl.ListFormat, e.list),
                    getDisplayNames: l(Intl.DisplayNames, e.displayNames)
                }
            }, t.defaultGetMessageFallback = i, t.defaultOnError = a, t.initializeConfig = function(e) {
                let {
                    getMessageFallback: t,
                    messages: r,
                    onError: n,
                    ...o
                } = e;
                return { ...o,
                    messages: r,
                    onError: n || a,
                    getMessageFallback: t || i
                }
            }, t.joinPath = o, t.memoFn = s
        },
        18832: (e, t, r) => {
            t.IntlContext = r(97387).createContext(void 0)
        },
        21702: (e, t, r) => {
            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                        } else
                            for (n in t) t[n] && (o && (o += " "), o += n);
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
            r.d(t, {
                $: () => n,
                A: () => o
            });
            let o = n
        },
        32630: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var n = r(97387);
            let o = function(e, t) {
                var r = (0, n.useState)(null),
                    o = r[0],
                    i = r[1];
                return (0, n.useEffect)(function() {
                    if (e.current && "function" == typeof IntersectionObserver) {
                        var r = new IntersectionObserver(function(e) {
                            i(e[0])
                        }, t);
                        return r.observe(e.current),
                            function() {
                                i(null), r.disconnect()
                            }
                    }
                    return function() {}
                }, [e.current, t.threshold, t.root, t.rootMargin]), o
            }
        },
        33859: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(64429),
                o = r(17079);
            r(68181), r(97387), r(76573), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t._createCache = o.createCache, t._createIntlFormatters = o.createIntlFormatters, t.initializeConfig = o.initializeConfig, t.createTranslator = function(e) {
                let {
                    _cache: t = o.createCache(),
                    _formatters: r = o.createIntlFormatters(t),
                    getMessageFallback: i = o.defaultGetMessageFallback,
                    messages: a,
                    namespace: s,
                    onError: l = o.defaultOnError,
                    ...u
                } = e;
                return function(e, t) {
                    let {
                        messages: r,
                        namespace: o,
                        ...i
                    } = e;
                    return r = r["!"], o = n.resolveNamespace(o, "!"), n.createBaseTranslator({ ...i,
                        messages: r,
                        namespace: o
                    })
                }({ ...u,
                    onError: l,
                    cache: t,
                    formatters: r,
                    getMessageFallback: i,
                    messages: {
                        "!": a
                    },
                    namespace: s ? "!.".concat(s) : "!"
                }, "!")
            }
        },
        40030: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(11331),
                o = r(28362),
                i = r(59593),
                a = r(932);
            t.useFormatter = n.useFormatter, t.useTranslations = n.useTranslations, t.useLocale = o.default, t.NextIntlClientProvider = i.default, Object.keys(a).forEach(function(e) {
                "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                })
            })
        },
        50245: (e, t, r) => {
            r.r(t);
            var n = r(6961),
                o = {};
            for (let e in n) "default" !== e && (o[e] = () => n[e]);
            r.d(t, o)
        },
        51023: (e, t, r) => {
            r.d(t, {
                Q: () => n
            });
            let n = (0, r(97387).createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        59283: (e, t, r) => {
            r.d(t, {
                Y: () => o
            });
            var n = r(5245);

            function o(e) {
                for (let t in e) n.B[t] = { ...n.B[t],
                    ...e[t]
                }
            }
        },
        59593: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(87683),
                o = r(97387),
                i = r(1167),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o);
            t.default = function(e) {
                let {
                    locale: t,
                    ...r
                } = e;
                if (!t) throw Error(void 0);
                return a.default.createElement(i.IntlProvider, n.extends({
                    locale: t
                }, r))
            }
        },
        63132: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(64429),
                o = r(33859),
                i = r(17079),
                a = r(11671),
                s = r(77187),
                l = r(36387);
            r(68181), r(97387), r(76573), r(18832), t.IntlError = n.IntlError, t.IntlErrorCode = n.IntlErrorCode, t.createFormatter = n.createFormatter, t.createTranslator = o.createTranslator, t._createCache = i.createCache, t._createIntlFormatters = i.createIntlFormatters, t.initializeConfig = i.initializeConfig, t.IntlProvider = a.IntlProvider, t.useFormatter = s.useFormatter, t.useMessages = s.useMessages, t.useNow = s.useNow, t.useTimeZone = s.useTimeZone, t.useTranslations = s.useTranslations, t.useLocale = l.useLocale
        },
        64429: (e, t, r) => {
            var n = r(68181),
                o = r(97387),
                i = r(17079),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n);

            function s(e, t, r) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            let l = function(e) {
                return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e
            }({});
            class u extends Error {
                constructor(e, t) {
                    let r = e;
                    t && (r += ": " + t), super(r), s(this, "code", void 0), s(this, "originalMessage", void 0), this.code = e, t && (this.originalMessage = t)
                }
            }

            function c(e, t) {
                return e ? Object.keys(e).reduce((r, n) => (r[n] = {
                    timeZone: t,
                    ...e[n]
                }, r), {}) : e
            }

            function h(e, t, r, n) {
                let o = i.joinPath(n, r);
                if (!t) throw Error(o);
                let a = t;
                return r.split(".").forEach(t => {
                    let r = a[t];
                    if (null == t || null == r) throw Error(o + " (".concat(e, ")"));
                    a = r
                }), a
            }
            let f = 365 / 12 * 86400,
                p = {
                    second: 1,
                    seconds: 1,
                    minute: 60,
                    minutes: 60,
                    hour: 3600,
                    hours: 3600,
                    day: 86400,
                    days: 86400,
                    week: 604800,
                    weeks: 604800,
                    month: 365 / 12 * 86400,
                    months: 365 / 12 * 86400,
                    quarter: 365 / 12 * 259200,
                    quarters: 365 / 12 * 259200,
                    year: 31536e3,
                    years: 31536e3
                };
            t.IntlError = u, t.IntlErrorCode = l, t.createBaseTranslator = function(e) {
                let t = function(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.defaultOnError;
                    try {
                        if (!t) throw Error(void 0);
                        let n = r ? h(e, t, r) : t;
                        if (!n) throw Error(r);
                        return n
                    } catch (t) {
                        let e = new u(l.MISSING_MESSAGE, t.message);
                        return n(e), e
                    }
                }(e.locale, e.messages, e.namespace, e.onError);
                return function(e) {
                    let {
                        cache: t,
                        defaultTranslationValues: r,
                        formats: n,
                        formatters: s,
                        getMessageFallback: f = i.defaultGetMessageFallback,
                        locale: p,
                        messagesOrError: d,
                        namespace: m,
                        onError: g,
                        timeZone: b
                    } = e, v = d instanceof u;

                    function y(e, t, r) {
                        let n = new u(t, r);
                        return g(n), f({
                            error: n,
                            key: e,
                            namespace: m
                        })
                    }

                    function E(e, u, g) {
                        let E, T;
                        if (v) return f({
                            error: d,
                            key: e,
                            namespace: m
                        });
                        try {
                            E = h(p, d, e, m)
                        } catch (t) {
                            return y(e, l.MISSING_MESSAGE, t.message)
                        }
                        if ("object" == typeof E) {
                            let t;
                            return y(e, Array.isArray(E) ? l.INVALID_MESSAGE : l.INSUFFICIENT_PATH, t)
                        }
                        let w = function(e, t) {
                            if (t) return;
                            let r = e.replace(/'([{}])/gi, "$1");
                            return /<|{/.test(r) ? void 0 : r
                        }(E, u);
                        if (w) return w;
                        s.getMessageFormat || (s.getMessageFormat = i.memoFn(function() {
                            return new a.default(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], {
                                formatters: s,
                                ...arguments.length <= 3 ? void 0 : arguments[3]
                            })
                        }, t.message));
                        try {
                            T = s.getMessageFormat(E, p, function(e, t) {
                                let r = t ? { ...e,
                                        dateTime: c(e.dateTime, t)
                                    } : e,
                                    n = a.default.formats.date,
                                    o = t ? c(n, t) : n,
                                    i = a.default.formats.time,
                                    s = t ? c(i, t) : i;
                                return { ...r,
                                    date: { ...o,
                                        ...r.dateTime
                                    },
                                    time: { ...s,
                                        ...r.dateTime
                                    }
                                }
                            }({ ...n,
                                ...g
                            }, b), {
                                formatters: { ...s,
                                    getDateTimeFormat: (e, t) => s.getDateTimeFormat(e, {
                                        timeZone: b,
                                        ...t
                                    })
                                }
                            })
                        } catch (t) {
                            return y(e, l.INVALID_MESSAGE, t.message)
                        }
                        try {
                            let e = T.format(function(e) {
                                if (0 === Object.keys(e).length) return;
                                let t = {};
                                return Object.keys(e).forEach(r => {
                                    let n, i = 0,
                                        a = e[r];
                                    n = "function" == typeof a ? e => {
                                        let t = a(e);
                                        return o.isValidElement(t) ? o.cloneElement(t, {
                                            key: r + i++
                                        }) : t
                                    } : a, t[r] = n
                                }), t
                            }({ ...r,
                                ...u
                            }));
                            if (null == e) throw Error(void 0);
                            return o.isValidElement(e) || Array.isArray(e) || "string" == typeof e ? e : String(e)
                        } catch (t) {
                            return y(e, l.FORMATTING_ERROR, t.message)
                        }
                    }

                    function T(e, t, r) {
                        let n = E(e, t, r);
                        return "string" != typeof n ? y(e, l.INVALID_MESSAGE, void 0) : n
                    }
                    return T.rich = E, T.markup = (e, t, r) => {
                        let n = E(e, t, r);
                        if ("string" != typeof n) {
                            let t = new u(l.FORMATTING_ERROR, void 0);
                            return g(t), f({
                                error: t,
                                key: e,
                                namespace: m
                            })
                        }
                        return n
                    }, T.raw = e => {
                        if (v) return f({
                            error: d,
                            key: e,
                            namespace: m
                        });
                        try {
                            return h(p, d, e, m)
                        } catch (t) {
                            return y(e, l.MISSING_MESSAGE, t.message)
                        }
                    }, T.has = e => {
                        if (v) return !1;
                        try {
                            return h(p, d, e, m), !0
                        } catch (e) {
                            return !1
                        }
                    }, T
                }({ ...e,
                    messagesOrError: t
                })
            }, t.createFormatter = function(e) {
                let {
                    _cache: t = i.createCache(),
                    _formatters: r = i.createIntlFormatters(t),
                    formats: n,
                    locale: o,
                    now: a,
                    onError: s = i.defaultOnError,
                    timeZone: c
                } = e;

                function h(e) {
                    var t;
                    return null !== (t = e) && void 0 !== t && t.timeZone || (c ? e = { ...e,
                        timeZone: c
                    } : s(new u(l.ENVIRONMENT_FALLBACK, void 0))), e
                }

                function d(e, t, r, n) {
                    let o;
                    try {
                        o = function(e, t) {
                            let r;
                            if ("string" == typeof t) {
                                if (!(r = null == e ? void 0 : e[t])) {
                                    let e = new u(l.MISSING_FORMAT, void 0);
                                    throw s(e), e
                                }
                            } else r = t;
                            return r
                        }(t, e)
                    } catch (e) {
                        return n()
                    }
                    try {
                        return r(o)
                    } catch (e) {
                        return s(new u(l.FORMATTING_ERROR, e.message)), n()
                    }
                }

                function m(e, t) {
                    return d(t, null == n ? void 0 : n.dateTime, t => (t = h(t), r.getDateTimeFormat(o, t).format(e)), () => String(e))
                }

                function g() {
                    return a || (s(new u(l.ENVIRONMENT_FALLBACK, void 0)), new Date)
                }
                return {
                    dateTime: m,
                    number: function(e, t) {
                        return d(t, null == n ? void 0 : n.number, t => r.getNumberFormat(o, t).format(e), () => String(e))
                    },
                    relativeTime: function(e, t) {
                        try {
                            var n;
                            let i, a, s = {};
                            t instanceof Date || "number" == typeof t ? i = new Date(t) : t && (i = null != t.now ? new Date(t.now) : g(), a = t.unit, s.style = t.style, s.numberingSystem = t.numberingSystem), i || (i = g());
                            let l = (new Date(e).getTime() - i.getTime()) / 1e3;
                            a || (a = function(e) {
                                let t = Math.abs(e);
                                return t < 60 ? "second" : t < 3600 ? "minute" : t < 86400 ? "hour" : t < 604800 ? "day" : t < f ? "week" : t < 31536e3 ? "month" : "year"
                            }(l)), s.numeric = "second" === a ? "auto" : "always";
                            let u = (n = a, Math.round(l / p[n]));
                            return r.getRelativeTimeFormat(o, s).format(u, a)
                        } catch (t) {
                            return s(new u(l.FORMATTING_ERROR, t.message)), String(e)
                        }
                    },
                    list: function(e, t) {
                        let i = [],
                            a = new Map,
                            s = 0;
                        for (let t of e) {
                            let e;
                            "object" == typeof t ? (e = String(s), a.set(e, t)) : e = String(t), i.push(e), s++
                        }
                        return d(t, null == n ? void 0 : n.list, e => {
                            let t = r.getListFormat(o, e).formatToParts(i).map(e => "literal" === e.type ? e.value : a.get(e.value) || e.value);
                            return a.size > 0 ? t : t.join("")
                        }, () => String(e))
                    },
                    dateTimeRange: function(e, t, i) {
                        return d(i, null == n ? void 0 : n.dateTime, n => (n = h(n), r.getDateTimeFormat(o, n).formatRange(e, t)), () => [m(e), m(t)].join(" – "))
                    }
                }
            }, t.resolveNamespace = function(e, t) {
                return e === t ? void 0 : e.slice((t + ".").length)
            }
        },
        64762: (e, t, r) => {
            r.d(t, {
                C6: () => o,
                Cl: () => i,
                Tt: () => a,
                YH: () => l,
                fX: () => u,
                sH: () => s
            });
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r
            }

            function s(e, t, r, n) {
                return new(r || (r = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            }

            function l(e, t) {
                var r, n, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(l) {
                        var u = [s, l];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                            if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                            switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, n = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        i.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && i.label < o[1]) {
                                        i.label = o[1], o = u;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(u);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            u = t.call(e, i)
                        } catch (e) {
                            u = [6, e], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            Object.create;

            function u(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }
            Object.create, "function" == typeof SuppressedError && SuppressedError
        },
        68181: (e, t, r) => {
            r.r(t), r.d(t, {
                ErrorCode: () => l,
                FormatError: () => er,
                IntlMessageFormat: () => eu,
                InvalidValueError: () => en,
                InvalidValueTypeError: () => eo,
                MissingValueError: () => ei,
                PART_TYPE: () => u,
                default: () => ec,
                formatToParts: () => es,
                isFormatXMLElementFn: () => ea
            });
            var n, o, i, a, s, l, u, c = r(64762),
                h = r(76573);

            function f(e) {
                return e.type === o.literal
            }

            function p(e) {
                return e.type === o.number
            }

            function d(e) {
                return e.type === o.date
            }

            function m(e) {
                return e.type === o.time
            }

            function g(e) {
                return e.type === o.select
            }

            function b(e) {
                return e.type === o.plural
            }

            function v(e) {
                return e.type === o.tag
            }

            function y(e) {
                return !!(e && "object" == typeof e && e.type === i.number)
            }

            function E(e) {
                return !!(e && "object" == typeof e && e.type === i.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(n || (n = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(o || (o = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(i || (i = {}));
            var T = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                w = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                _ = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                H = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                A = /^(@+)?(\+|#+)?[rs]?$/g,
                I = /(\*)(0+)|(#+)(0+)|(0+)/g,
                S = /^(0+)$/;

            function C(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(A, function(e, r, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                }), t
            }

            function B(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function N(e) {
                var t = B(e);
                return t || {}
            }
            var P = {
                    "001": ["H", "h"],
                    419: ["h", "H", "hB", "hb"],
                    AC: ["H", "h", "hb", "hB"],
                    AD: ["H", "hB"],
                    AE: ["h", "hB", "hb", "H"],
                    AF: ["H", "hb", "hB", "h"],
                    AG: ["h", "hb", "H", "hB"],
                    AI: ["H", "h", "hb", "hB"],
                    AL: ["h", "H", "hB"],
                    AM: ["H", "hB"],
                    AO: ["H", "hB"],
                    AR: ["h", "H", "hB", "hb"],
                    AS: ["h", "H"],
                    AT: ["H", "hB"],
                    AU: ["h", "hb", "H", "hB"],
                    AW: ["H", "hB"],
                    AX: ["H"],
                    AZ: ["H", "hB", "h"],
                    BA: ["H", "hB", "h"],
                    BB: ["h", "hb", "H", "hB"],
                    BD: ["h", "hB", "H"],
                    BE: ["H", "hB"],
                    BF: ["H", "hB"],
                    BG: ["H", "hB", "h"],
                    BH: ["h", "hB", "hb", "H"],
                    BI: ["H", "h"],
                    BJ: ["H", "hB"],
                    BL: ["H", "hB"],
                    BM: ["h", "hb", "H", "hB"],
                    BN: ["hb", "hB", "h", "H"],
                    BO: ["h", "H", "hB", "hb"],
                    BQ: ["H"],
                    BR: ["H", "hB"],
                    BS: ["h", "hb", "H", "hB"],
                    BT: ["h", "H"],
                    BW: ["H", "h", "hb", "hB"],
                    BY: ["H", "h"],
                    BZ: ["H", "h", "hb", "hB"],
                    CA: ["h", "hb", "H", "hB"],
                    CC: ["H", "h", "hb", "hB"],
                    CD: ["hB", "H"],
                    CF: ["H", "h", "hB"],
                    CG: ["H", "hB"],
                    CH: ["H", "hB", "h"],
                    CI: ["H", "hB"],
                    CK: ["H", "h", "hb", "hB"],
                    CL: ["h", "H", "hB", "hb"],
                    CM: ["H", "h", "hB"],
                    CN: ["H", "hB", "hb", "h"],
                    CO: ["h", "H", "hB", "hb"],
                    CP: ["H"],
                    CR: ["h", "H", "hB", "hb"],
                    CU: ["h", "H", "hB", "hb"],
                    CV: ["H", "hB"],
                    CW: ["H", "hB"],
                    CX: ["H", "h", "hb", "hB"],
                    CY: ["h", "H", "hb", "hB"],
                    CZ: ["H"],
                    DE: ["H", "hB"],
                    DG: ["H", "h", "hb", "hB"],
                    DJ: ["h", "H"],
                    DK: ["H"],
                    DM: ["h", "hb", "H", "hB"],
                    DO: ["h", "H", "hB", "hb"],
                    DZ: ["h", "hB", "hb", "H"],
                    EA: ["H", "h", "hB", "hb"],
                    EC: ["h", "H", "hB", "hb"],
                    EE: ["H", "hB"],
                    EG: ["h", "hB", "hb", "H"],
                    EH: ["h", "hB", "hb", "H"],
                    ER: ["h", "H"],
                    ES: ["H", "hB", "h", "hb"],
                    ET: ["hB", "hb", "h", "H"],
                    FI: ["H"],
                    FJ: ["h", "hb", "H", "hB"],
                    FK: ["H", "h", "hb", "hB"],
                    FM: ["h", "hb", "H", "hB"],
                    FO: ["H", "h"],
                    FR: ["H", "hB"],
                    GA: ["H", "hB"],
                    GB: ["H", "h", "hb", "hB"],
                    GD: ["h", "hb", "H", "hB"],
                    GE: ["H", "hB", "h"],
                    GF: ["H", "hB"],
                    GG: ["H", "h", "hb", "hB"],
                    GH: ["h", "H"],
                    GI: ["H", "h", "hb", "hB"],
                    GL: ["H", "h"],
                    GM: ["h", "hb", "H", "hB"],
                    GN: ["H", "hB"],
                    GP: ["H", "hB"],
                    GQ: ["H", "hB", "h", "hb"],
                    GR: ["h", "H", "hb", "hB"],
                    GT: ["h", "H", "hB", "hb"],
                    GU: ["h", "hb", "H", "hB"],
                    GW: ["H", "hB"],
                    GY: ["h", "hb", "H", "hB"],
                    HK: ["h", "hB", "hb", "H"],
                    HN: ["h", "H", "hB", "hb"],
                    HR: ["H", "hB"],
                    HU: ["H", "h"],
                    IC: ["H", "h", "hB", "hb"],
                    ID: ["H"],
                    IE: ["H", "h", "hb", "hB"],
                    IL: ["H", "hB"],
                    IM: ["H", "h", "hb", "hB"],
                    IN: ["h", "H"],
                    IO: ["H", "h", "hb", "hB"],
                    IQ: ["h", "hB", "hb", "H"],
                    IR: ["hB", "H"],
                    IS: ["H"],
                    IT: ["H", "hB"],
                    JE: ["H", "h", "hb", "hB"],
                    JM: ["h", "hb", "H", "hB"],
                    JO: ["h", "hB", "hb", "H"],
                    JP: ["H", "K", "h"],
                    KE: ["hB", "hb", "H", "h"],
                    KG: ["H", "h", "hB", "hb"],
                    KH: ["hB", "h", "H", "hb"],
                    KI: ["h", "hb", "H", "hB"],
                    KM: ["H", "h", "hB", "hb"],
                    KN: ["h", "hb", "H", "hB"],
                    KP: ["h", "H", "hB", "hb"],
                    KR: ["h", "H", "hB", "hb"],
                    KW: ["h", "hB", "hb", "H"],
                    KY: ["h", "hb", "H", "hB"],
                    KZ: ["H", "hB"],
                    LA: ["H", "hb", "hB", "h"],
                    LB: ["h", "hB", "hb", "H"],
                    LC: ["h", "hb", "H", "hB"],
                    LI: ["H", "hB", "h"],
                    LK: ["H", "h", "hB", "hb"],
                    LR: ["h", "hb", "H", "hB"],
                    LS: ["h", "H"],
                    LT: ["H", "h", "hb", "hB"],
                    LU: ["H", "h", "hB"],
                    LV: ["H", "hB", "hb", "h"],
                    LY: ["h", "hB", "hb", "H"],
                    MA: ["H", "h", "hB", "hb"],
                    MC: ["H", "hB"],
                    MD: ["H", "hB"],
                    ME: ["H", "hB", "h"],
                    MF: ["H", "hB"],
                    MG: ["H", "h"],
                    MH: ["h", "hb", "H", "hB"],
                    MK: ["H", "h", "hb", "hB"],
                    ML: ["H"],
                    MM: ["hB", "hb", "H", "h"],
                    MN: ["H", "h", "hb", "hB"],
                    MO: ["h", "hB", "hb", "H"],
                    MP: ["h", "hb", "H", "hB"],
                    MQ: ["H", "hB"],
                    MR: ["h", "hB", "hb", "H"],
                    MS: ["H", "h", "hb", "hB"],
                    MT: ["H", "h"],
                    MU: ["H", "h"],
                    MV: ["H", "h"],
                    MW: ["h", "hb", "H", "hB"],
                    MX: ["h", "H", "hB", "hb"],
                    MY: ["hb", "hB", "h", "H"],
                    MZ: ["H", "hB"],
                    NA: ["h", "H", "hB", "hb"],
                    NC: ["H", "hB"],
                    NE: ["H"],
                    NF: ["H", "h", "hb", "hB"],
                    NG: ["H", "h", "hb", "hB"],
                    NI: ["h", "H", "hB", "hb"],
                    NL: ["H", "hB"],
                    NO: ["H", "h"],
                    NP: ["H", "h", "hB"],
                    NR: ["H", "h", "hb", "hB"],
                    NU: ["H", "h", "hb", "hB"],
                    NZ: ["h", "hb", "H", "hB"],
                    OM: ["h", "hB", "hb", "H"],
                    PA: ["h", "H", "hB", "hb"],
                    PE: ["h", "H", "hB", "hb"],
                    PF: ["H", "h", "hB"],
                    PG: ["h", "H"],
                    PH: ["h", "hB", "hb", "H"],
                    PK: ["h", "hB", "H"],
                    PL: ["H", "h"],
                    PM: ["H", "hB"],
                    PN: ["H", "h", "hb", "hB"],
                    PR: ["h", "H", "hB", "hb"],
                    PS: ["h", "hB", "hb", "H"],
                    PT: ["H", "hB"],
                    PW: ["h", "H"],
                    PY: ["h", "H", "hB", "hb"],
                    QA: ["h", "hB", "hb", "H"],
                    RE: ["H", "hB"],
                    RO: ["H", "hB"],
                    RS: ["H", "hB", "h"],
                    RU: ["H"],
                    RW: ["H", "h"],
                    SA: ["h", "hB", "hb", "H"],
                    SB: ["h", "hb", "H", "hB"],
                    SC: ["H", "h", "hB"],
                    SD: ["h", "hB", "hb", "H"],
                    SE: ["H"],
                    SG: ["h", "hb", "H", "hB"],
                    SH: ["H", "h", "hb", "hB"],
                    SI: ["H", "hB"],
                    SJ: ["H"],
                    SK: ["H"],
                    SL: ["h", "hb", "H", "hB"],
                    SM: ["H", "h", "hB"],
                    SN: ["H", "h", "hB"],
                    SO: ["h", "H"],
                    SR: ["H", "hB"],
                    SS: ["h", "hb", "H", "hB"],
                    ST: ["H", "hB"],
                    SV: ["h", "H", "hB", "hb"],
                    SX: ["H", "h", "hb", "hB"],
                    SY: ["h", "hB", "hb", "H"],
                    SZ: ["h", "hb", "H", "hB"],
                    TA: ["H", "h", "hb", "hB"],
                    TC: ["h", "hb", "H", "hB"],
                    TD: ["h", "H", "hB"],
                    TF: ["H", "h", "hB"],
                    TG: ["H", "hB"],
                    TH: ["H", "h"],
                    TJ: ["H", "h"],
                    TL: ["H", "hB", "hb", "h"],
                    TM: ["H", "h"],
                    TN: ["h", "hB", "hb", "H"],
                    TO: ["h", "H"],
                    TR: ["H", "hB"],
                    TT: ["h", "hb", "H", "hB"],
                    TW: ["hB", "hb", "h", "H"],
                    TZ: ["hB", "hb", "H", "h"],
                    UA: ["H", "hB", "h"],
                    UG: ["hB", "hb", "H", "h"],
                    UM: ["h", "hb", "H", "hB"],
                    US: ["h", "hb", "H", "hB"],
                    UY: ["h", "H", "hB", "hb"],
                    UZ: ["H", "hB", "h"],
                    VA: ["H", "h", "hB"],
                    VC: ["h", "hb", "H", "hB"],
                    VE: ["h", "H", "hB", "hb"],
                    VG: ["h", "hb", "H", "hB"],
                    VI: ["h", "hb", "H", "hB"],
                    VN: ["H", "h"],
                    VU: ["h", "H"],
                    WF: ["H", "hB"],
                    WS: ["h", "H"],
                    XK: ["H", "hB", "h"],
                    YE: ["h", "hB", "hb", "H"],
                    YT: ["H", "hB"],
                    ZA: ["H", "h", "hb", "hB"],
                    ZM: ["h", "hb", "H", "hB"],
                    ZW: ["H", "h"],
                    "af-ZA": ["H", "h", "hB", "hb"],
                    "ar-001": ["h", "hB", "hb", "H"],
                    "ca-ES": ["H", "h", "hB"],
                    "en-001": ["h", "hb", "H", "hB"],
                    "en-HK": ["h", "hb", "H", "hB"],
                    "en-IL": ["H", "h", "hb", "hB"],
                    "en-MY": ["h", "hb", "H", "hB"],
                    "es-BR": ["H", "h", "hB", "hb"],
                    "es-ES": ["H", "h", "hB", "hb"],
                    "es-GQ": ["H", "h", "hB", "hb"],
                    "fr-CA": ["H", "h", "hB"],
                    "gl-ES": ["H", "h", "hB"],
                    "gu-IN": ["hB", "hb", "h", "H"],
                    "hi-IN": ["hB", "h", "H"],
                    "it-CH": ["H", "h", "hB"],
                    "it-IT": ["H", "h", "hB"],
                    "kn-IN": ["hB", "h", "H"],
                    "ml-IN": ["hB", "h", "H"],
                    "mr-IN": ["hB", "hb", "h", "H"],
                    "pa-IN": ["hB", "hb", "h", "H"],
                    "ta-IN": ["hB", "h", "hb", "H"],
                    "te-IN": ["hB", "h", "H"],
                    "zu-ZA": ["H", "hB", "hb", "h"]
                },
                M = new RegExp("^".concat(T.source, "*")),
                L = new RegExp("".concat(T.source, "*$"));

            function R(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var x = !!String.prototype.startsWith && "_a".startsWith("a", 1),
                O = !!String.fromCodePoint,
                F = !!Object.fromEntries,
                G = !!String.prototype.codePointAt,
                k = !!String.prototype.trimStart,
                U = !!String.prototype.trimEnd,
                D = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 0x1fffffffffffff >= Math.abs(e)
                },
                j = !0;
            try {
                var V = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                j = (null === (a = V.exec("a")) || void 0 === a ? void 0 : a[0]) === "a"
            } catch (e) {
                j = !1
            }
            var z = x ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                X = O ? String.fromCodePoint : function() {
                    for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    for (var n = "", o = t.length, i = 0; o > i;) {
                        if ((e = t[i++]) > 1114111) throw RangeError(e + " is not a valid code point");
                        n += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320)
                    }
                    return n
                },
                K = F ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r],
                            o = n[0],
                            i = n[1];
                        t[o] = i
                    }
                    return t
                },
                Z = G ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r, n = e.length;
                    if (!(t < 0) && !(t >= n)) {
                        var o = e.charCodeAt(t);
                        return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : (o - 55296 << 10) + (r - 56320) + 65536
                    }
                },
                W = k ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(M, "")
                },
                Y = U ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(L, "")
                };

            function Q(e, t) {
                return new RegExp(e, t)
            }
            if (j) {
                var q = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                s = function(e, t) {
                    var r;
                    return q.lastIndex = t, null !== (r = q.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else s = function(e, t) {
                for (var r = [];;) {
                    var n, o = Z(e, t);
                    if (void 0 === o || ee(o) || (n = o) >= 33 && n <= 35 || 36 === n || n >= 37 && n <= 39 || 40 === n || 41 === n || 42 === n || 43 === n || 44 === n || 45 === n || n >= 46 && n <= 47 || n >= 58 && n <= 59 || n >= 60 && n <= 62 || n >= 63 && n <= 64 || 91 === n || 92 === n || 93 === n || 94 === n || 96 === n || 123 === n || 124 === n || 125 === n || 126 === n || 161 === n || n >= 162 && n <= 165 || 166 === n || 167 === n || 169 === n || 171 === n || 172 === n || 174 === n || 176 === n || 177 === n || 182 === n || 187 === n || 191 === n || 215 === n || 247 === n || n >= 8208 && n <= 8213 || n >= 8214 && n <= 8215 || 8216 === n || 8217 === n || 8218 === n || n >= 8219 && n <= 8220 || 8221 === n || 8222 === n || 8223 === n || n >= 8224 && n <= 8231 || n >= 8240 && n <= 8248 || 8249 === n || 8250 === n || n >= 8251 && n <= 8254 || n >= 8257 && n <= 8259 || 8260 === n || 8261 === n || 8262 === n || n >= 8263 && n <= 8273 || 8274 === n || 8275 === n || n >= 8277 && n <= 8286 || n >= 8592 && n <= 8596 || n >= 8597 && n <= 8601 || n >= 8602 && n <= 8603 || n >= 8604 && n <= 8607 || 8608 === n || n >= 8609 && n <= 8610 || 8611 === n || n >= 8612 && n <= 8613 || 8614 === n || n >= 8615 && n <= 8621 || 8622 === n || n >= 8623 && n <= 8653 || n >= 8654 && n <= 8655 || n >= 8656 && n <= 8657 || 8658 === n || 8659 === n || 8660 === n || n >= 8661 && n <= 8691 || n >= 8692 && n <= 8959 || n >= 8960 && n <= 8967 || 8968 === n || 8969 === n || 8970 === n || 8971 === n || n >= 8972 && n <= 8991 || n >= 8992 && n <= 8993 || n >= 8994 && n <= 9e3 || 9001 === n || 9002 === n || n >= 9003 && n <= 9083 || 9084 === n || n >= 9085 && n <= 9114 || n >= 9115 && n <= 9139 || n >= 9140 && n <= 9179 || n >= 9180 && n <= 9185 || n >= 9186 && n <= 9254 || n >= 9255 && n <= 9279 || n >= 9280 && n <= 9290 || n >= 9291 && n <= 9311 || n >= 9472 && n <= 9654 || 9655 === n || n >= 9656 && n <= 9664 || 9665 === n || n >= 9666 && n <= 9719 || n >= 9720 && n <= 9727 || n >= 9728 && n <= 9838 || 9839 === n || n >= 9840 && n <= 10087 || 10088 === n || 10089 === n || 10090 === n || 10091 === n || 10092 === n || 10093 === n || 10094 === n || 10095 === n || 10096 === n || 10097 === n || 10098 === n || 10099 === n || 10100 === n || 10101 === n || n >= 10132 && n <= 10175 || n >= 10176 && n <= 10180 || 10181 === n || 10182 === n || n >= 10183 && n <= 10213 || 10214 === n || 10215 === n || 10216 === n || 10217 === n || 10218 === n || 10219 === n || 10220 === n || 10221 === n || 10222 === n || 10223 === n || n >= 10224 && n <= 10239 || n >= 10240 && n <= 10495 || n >= 10496 && n <= 10626 || 10627 === n || 10628 === n || 10629 === n || 10630 === n || 10631 === n || 10632 === n || 10633 === n || 10634 === n || 10635 === n || 10636 === n || 10637 === n || 10638 === n || 10639 === n || 10640 === n || 10641 === n || 10642 === n || 10643 === n || 10644 === n || 10645 === n || 10646 === n || 10647 === n || 10648 === n || n >= 10649 && n <= 10711 || 10712 === n || 10713 === n || 10714 === n || 10715 === n || n >= 10716 && n <= 10747 || 10748 === n || 10749 === n || n >= 10750 && n <= 11007 || n >= 11008 && n <= 11055 || n >= 11056 && n <= 11076 || n >= 11077 && n <= 11078 || n >= 11079 && n <= 11084 || n >= 11085 && n <= 11123 || n >= 11124 && n <= 11125 || n >= 11126 && n <= 11157 || 11158 === n || n >= 11159 && n <= 11263 || n >= 11776 && n <= 11777 || 11778 === n || 11779 === n || 11780 === n || 11781 === n || n >= 11782 && n <= 11784 || 11785 === n || 11786 === n || 11787 === n || 11788 === n || 11789 === n || n >= 11790 && n <= 11798 || 11799 === n || n >= 11800 && n <= 11801 || 11802 === n || 11803 === n || 11804 === n || 11805 === n || n >= 11806 && n <= 11807 || 11808 === n || 11809 === n || 11810 === n || 11811 === n || 11812 === n || 11813 === n || 11814 === n || 11815 === n || 11816 === n || 11817 === n || n >= 11818 && n <= 11822 || 11823 === n || n >= 11824 && n <= 11833 || n >= 11834 && n <= 11835 || n >= 11836 && n <= 11839 || 11840 === n || 11841 === n || 11842 === n || n >= 11843 && n <= 11855 || n >= 11856 && n <= 11857 || 11858 === n || n >= 11859 && n <= 11903 || n >= 12289 && n <= 12291 || 12296 === n || 12297 === n || 12298 === n || 12299 === n || 12300 === n || 12301 === n || 12302 === n || 12303 === n || 12304 === n || 12305 === n || n >= 12306 && n <= 12307 || 12308 === n || 12309 === n || 12310 === n || 12311 === n || 12312 === n || 12313 === n || 12314 === n || 12315 === n || 12316 === n || 12317 === n || n >= 12318 && n <= 12319 || 12320 === n || 12336 === n || 64830 === n || 64831 === n || n >= 65093 && n <= 65094) break;
                    r.push(o), t += o >= 65536 ? 2 : 1
                }
                return X.apply(void 0, r)
            };
            var $ = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var i = []; !this.isEOF();) {
                        var a = this.char();
                        if (123 === a) {
                            var s = this.parseArgument(e, r);
                            if (s.err) return s;
                            i.push(s.val)
                        } else if (125 === a && e > 0) break;
                        else if (35 === a && ("plural" === t || "selectordinal" === t)) {
                            var l = this.clonePosition();
                            this.bump(), i.push({
                                type: o.pound,
                                location: R(l, this.clonePosition())
                            })
                        } else if (60 !== a || this.ignoreTag || 47 !== this.peek())
                            if (60 === a && !this.ignoreTag && J(this.peek() || 0)) {
                                var s = this.parseTag(e, t);
                                if (s.err) return s;
                                i.push(s.val)
                            } else {
                                var s = this.parseLiteral(e, t);
                                if (s.err) return s;
                                i.push(s.val)
                            }
                        else if (!r) return this.error(n.UNMATCHED_CLOSING_TAG, R(this.clonePosition(), this.clonePosition()));
                        else break
                    }
                    return {
                        val: i,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var i = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: o.literal,
                            value: "<".concat(i, "/>"),
                            location: R(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (!this.bumpIf(">")) return this.error(n.INVALID_TAG, R(r, this.clonePosition()));
                    var a = this.parseMessage(e + 1, t, !0);
                    if (a.err) return a;
                    var s = a.val,
                        l = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(n.UNCLOSED_TAG, R(r, this.clonePosition()));
                    if (this.isEOF() || !J(this.char())) return this.error(n.INVALID_TAG, R(l, this.clonePosition()));
                    var u = this.clonePosition();
                    return i !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, R(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                        val: {
                            type: o.tag,
                            value: i,
                            children: s,
                            location: R(r, this.clonePosition())
                        },
                        err: null
                    } : this.error(n.INVALID_TAG, R(l, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) {
                            n += i;
                            continue
                        }
                        var a = this.tryParseUnquoted(e, t);
                        if (a) {
                            n += a;
                            continue
                        }
                        var s = this.tryParseLeftAngleBracket();
                        if (s) {
                            n += s;
                            continue
                        }
                        break
                    }
                    var l = R(r, this.clonePosition());
                    return {
                        val: {
                            type: o.literal,
                            value: n,
                            location: l
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    var e;
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (J(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r)
                            if (39 === this.peek()) t.push(39), this.bump();
                            else {
                                this.bump();
                                break
                            }
                        else t.push(r);
                        this.bump()
                    }
                    return X.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), X(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, R(r, this.clonePosition()));
                    var i = this.parseIdentifierIfPossible().value;
                    if (!i) return this.error(n.MALFORMED_ARGUMENT, R(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: o.argument,
                                    value: i,
                                    location: R(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, R(r, this.clonePosition()));
                            return this.parseArgumentOptions(e, t, i, r);
                        default:
                            return this.error(n.MALFORMED_ARGUMENT, R(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = s(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: R(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, a) {
                    var s, l = this.clonePosition(),
                        u = this.parseIdentifierIfPossible().value,
                        h = this.clonePosition();
                    switch (u) {
                        case "":
                            return this.error(n.EXPECT_ARGUMENT_TYPE, R(l, h));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var f = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var p = this.clonePosition(),
                                    d = this.parseSimpleArgStyleIfPossible();
                                if (d.err) return d;
                                var m = Y(d.val);
                                if (0 === m.length) return this.error(n.EXPECT_ARGUMENT_STYLE, R(this.clonePosition(), this.clonePosition()));
                                f = {
                                    style: m,
                                    styleLocation: R(p, this.clonePosition())
                                }
                            }
                            var g = this.tryParseArgumentClose(a);
                            if (g.err) return g;
                            var b = R(a, this.clonePosition());
                            if (f && z(null == f ? void 0 : f.style, "::", 0)) {
                                var v = W(f.style.slice(2));
                                if ("number" === u) {
                                    var d = this.parseNumberSkeletonFromString(v, f.styleLocation);
                                    if (d.err) return d;
                                    return {
                                        val: {
                                            type: o.number,
                                            value: r,
                                            location: b,
                                            style: d.val
                                        },
                                        err: null
                                    }
                                }
                                if (0 === v.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, b);
                                var y, E = v;
                                this.locale && (E = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var o = e.charAt(n);
                                        if ("j" === o) {
                                            for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                                            var a = 1 + (1 & i),
                                                s = i < 2 ? 1 : 3 + (i >> 1),
                                                l = function(e) {
                                                    var t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    var n = e.language;
                                                    return "root" !== n && (t = e.maximize().region), (P[t || ""] || P[n || ""] || P["".concat(n, "-001")] || P["001"])[0]
                                                }(t);
                                            for (("H" == l || "k" == l) && (s = 0); s-- > 0;) r += "a";
                                            for (; a-- > 0;) r = l + r
                                        } else "J" === o ? r += "H" : r += o
                                    }
                                    return r
                                }(v, this.locale));
                                var m = {
                                    type: i.dateTime,
                                    pattern: E,
                                    location: f.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? (y = {}, E.replace(w, function(e) {
                                        var t = e.length;
                                        switch (e[0]) {
                                            case "G":
                                                y.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "y":
                                                y.year = 2 === t ? "2-digit" : "numeric";
                                                break;
                                            case "Y":
                                            case "u":
                                            case "U":
                                            case "r":
                                                throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                            case "q":
                                            case "Q":
                                                throw RangeError("`q/Q` (quarter) patterns are not supported");
                                            case "M":
                                            case "L":
                                                y.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                break;
                                            case "w":
                                            case "W":
                                                throw RangeError("`w/W` (week) patterns are not supported");
                                            case "d":
                                                y.day = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "D":
                                            case "F":
                                            case "g":
                                                throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                            case "E":
                                                y.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                break;
                                            case "e":
                                                if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                y.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "c":
                                                if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                y.weekday = ["short", "long", "narrow", "short"][t - 4];
                                                break;
                                            case "a":
                                                y.hour12 = !0;
                                                break;
                                            case "b":
                                            case "B":
                                                throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                            case "h":
                                                y.hourCycle = "h12", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "H":
                                                y.hourCycle = "h23", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "K":
                                                y.hourCycle = "h11", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "k":
                                                y.hourCycle = "h24", y.hour = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "j":
                                            case "J":
                                            case "C":
                                                throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                            case "m":
                                                y.minute = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "s":
                                                y.second = ["numeric", "2-digit"][t - 1];
                                                break;
                                            case "S":
                                            case "A":
                                                throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                            case "z":
                                                y.timeZoneName = t < 4 ? "short" : "long";
                                                break;
                                            case "Z":
                                            case "O":
                                            case "v":
                                            case "V":
                                            case "X":
                                            case "x":
                                                throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                        }
                                        return ""
                                    }), y) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === u ? o.date : o.time,
                                        value: r,
                                        location: b,
                                        style: m
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === u ? o.number : "date" === u ? o.date : o.time,
                                    value: r,
                                    location: b,
                                    style: null !== (s = null == f ? void 0 : f.style) && void 0 !== s ? s : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var T = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, R(T, (0, c.Cl)({}, T)));
                            this.bumpSpace();
                            var _ = this.parseIdentifierIfPossible(),
                                H = 0;
                            if ("select" !== u && "offset" === _.value) {
                                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, R(this.clonePosition(), this.clonePosition()));
                                this.bumpSpace();
                                var d = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                                if (d.err) return d;
                                this.bumpSpace(), _ = this.parseIdentifierIfPossible(), H = d.val
                            }
                            var A = this.tryParsePluralOrSelectOptions(e, u, t, _);
                            if (A.err) return A;
                            var g = this.tryParseArgumentClose(a);
                            if (g.err) return g;
                            var I = R(a, this.clonePosition());
                            if ("select" === u) return {
                                val: {
                                    type: o.select,
                                    value: r,
                                    options: K(A.val),
                                    location: I
                                },
                                err: null
                            };
                            return {
                                val: {
                                    type: o.plural,
                                    value: r,
                                    options: K(A.val),
                                    offset: H,
                                    pluralType: "plural" === u ? "cardinal" : "ordinal",
                                    location: I
                                },
                                err: null
                            };
                        default:
                            return this.error(n.INVALID_ARGUMENT_TYPE, R(l, h))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, R(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var r = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, R(r, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw Error("Number skeleton cannot be empty");
                            for (var t = e.split(_).filter(function(e) {
                                    return e.length > 0
                                }), r = [], n = 0; n < t.length; n++) {
                                var o = t[n].split("/");
                                if (0 === o.length) throw Error("Invalid number skeleton");
                                for (var i = o[0], a = o.slice(1), s = 0; s < a.length; s++)
                                    if (0 === a[s].length) throw Error("Invalid number skeleton");
                                r.push({
                                    stem: i,
                                    options: a
                                })
                            }
                            return r
                        }(e)
                    } catch (e) {
                        return this.error(n.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: i.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? function(e) {
                                for (var t = {}, r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    switch (n.stem) {
                                        case "percent":
                                        case "%":
                                            t.style = "percent";
                                            continue;
                                        case "%x100":
                                            t.style = "percent", t.scale = 100;
                                            continue;
                                        case "currency":
                                            t.style = "currency", t.currency = n.options[0];
                                            continue;
                                        case "group-off":
                                        case ",_":
                                            t.useGrouping = !1;
                                            continue;
                                        case "precision-integer":
                                        case ".":
                                            t.maximumFractionDigits = 0;
                                            continue;
                                        case "measure-unit":
                                        case "unit":
                                            t.style = "unit", t.unit = n.options[0].replace(/^(.*?)-/, "");
                                            continue;
                                        case "compact-short":
                                        case "K":
                                            t.notation = "compact", t.compactDisplay = "short";
                                            continue;
                                        case "compact-long":
                                        case "KK":
                                            t.notation = "compact", t.compactDisplay = "long";
                                            continue;
                                        case "scientific":
                                            t = (0, c.Cl)((0, c.Cl)((0, c.Cl)({}, t), {
                                                notation: "scientific"
                                            }), n.options.reduce(function(e, t) {
                                                return (0, c.Cl)((0, c.Cl)({}, e), N(t))
                                            }, {}));
                                            continue;
                                        case "engineering":
                                            t = (0, c.Cl)((0, c.Cl)((0, c.Cl)({}, t), {
                                                notation: "engineering"
                                            }), n.options.reduce(function(e, t) {
                                                return (0, c.Cl)((0, c.Cl)({}, e), N(t))
                                            }, {}));
                                            continue;
                                        case "notation-simple":
                                            t.notation = "standard";
                                            continue;
                                        case "unit-width-narrow":
                                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                            continue;
                                        case "unit-width-short":
                                            t.currencyDisplay = "code", t.unitDisplay = "short";
                                            continue;
                                        case "unit-width-full-name":
                                            t.currencyDisplay = "name", t.unitDisplay = "long";
                                            continue;
                                        case "unit-width-iso-code":
                                            t.currencyDisplay = "symbol";
                                            continue;
                                        case "scale":
                                            t.scale = parseFloat(n.options[0]);
                                            continue;
                                        case "rounding-mode-floor":
                                            t.roundingMode = "floor";
                                            continue;
                                        case "rounding-mode-ceiling":
                                            t.roundingMode = "ceil";
                                            continue;
                                        case "rounding-mode-down":
                                            t.roundingMode = "trunc";
                                            continue;
                                        case "rounding-mode-up":
                                            t.roundingMode = "expand";
                                            continue;
                                        case "rounding-mode-half-even":
                                            t.roundingMode = "halfEven";
                                            continue;
                                        case "rounding-mode-half-down":
                                            t.roundingMode = "halfTrunc";
                                            continue;
                                        case "rounding-mode-half-up":
                                            t.roundingMode = "halfExpand";
                                            continue;
                                        case "integer-width":
                                            if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                            n.options[0].replace(I, function(e, r, n, o, i, a) {
                                                if (r) t.minimumIntegerDigits = n.length;
                                                else if (o && i) throw Error("We currently do not support maximum integer digits");
                                                else if (a) throw Error("We currently do not support exact integer digits");
                                                return ""
                                            });
                                            continue
                                    }
                                    if (S.test(n.stem)) {
                                        t.minimumIntegerDigits = n.stem.length;
                                        continue
                                    }
                                    if (H.test(n.stem)) {
                                        if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                        n.stem.replace(H, function(e, r, n, o, i, a) {
                                            return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                        });
                                        var o = n.options[0];
                                        "w" === o ? t = (0, c.Cl)((0, c.Cl)({}, t), {
                                            trailingZeroDisplay: "stripIfInteger"
                                        }) : o && (t = (0, c.Cl)((0, c.Cl)({}, t), C(o)));
                                        continue
                                    }
                                    if (A.test(n.stem)) {
                                        t = (0, c.Cl)((0, c.Cl)({}, t), C(n.stem));
                                        continue
                                    }
                                    var i = B(n.stem);
                                    i && (t = (0, c.Cl)((0, c.Cl)({}, t), i));
                                    var a = function(e) {
                                        var t;
                                        if ("E" === e[0] && "E" === e[1] ? (t = {
                                                notation: "engineering"
                                            }, e = e.slice(2)) : "E" === e[0] && (t = {
                                                notation: "scientific"
                                            }, e = e.slice(1)), t) {
                                            var r = e.slice(0, 2);
                                            if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !S.test(e)) throw Error("Malformed concise eng/scientific notation");
                                            t.minimumIntegerDigits = e.length
                                        }
                                        return t
                                    }(n.stem);
                                    a && (t = (0, c.Cl)((0, c.Cl)({}, t), a))
                                }
                                return t
                            }(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, o) {
                    for (var i, a = !1, s = [], l = new Set, u = o.value, c = o.location;;) {
                        if (0 === u.length) {
                            var h = this.clonePosition();
                            if ("select" !== t && this.bumpIf("=")) {
                                var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (f.err) return f;
                                c = R(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset())
                            } else break
                        }
                        if (l.has(u)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (a = !0), this.bumpSpace();
                        var p = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, R(this.clonePosition(), this.clonePosition()));
                        var d = this.parseMessage(e + 1, t, r);
                        if (d.err) return d;
                        var m = this.tryParseArgumentClose(p);
                        if (m.err) return m;
                        s.push([u, {
                            value: d.val,
                            location: R(p, this.clonePosition())
                        }]), l.add(u), this.bumpSpace(), u = (i = this.parseIdentifierIfPossible()).value, c = i.location
                    }
                    return 0 === s.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, R(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, R(this.clonePosition(), this.clonePosition())) : {
                        val: s,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var o = !1, i = 0; !this.isEOF();) {
                        var a = this.char();
                        if (a >= 48 && a <= 57) o = !0, i = 10 * i + (a - 48), this.bump();
                        else break
                    }
                    var s = R(n, this.clonePosition());
                    return o ? D(i *= r) ? {
                        val: i,
                        err: null
                    } : this.error(t, s) : this.error(e, s)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = Z(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (z(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && ee(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, e
            }();

            function J(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function ee(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function et(e, t) {
                void 0 === t && (t = {});
                var r = new $(e, t = (0, c.Cl)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t)).parse();
                if (r.err) {
                    var o = SyntaxError(n[r.err.kind]);
                    throw o.location = r.err.location, o.originalMessage = r.err.message, o
                }
                return (null == t ? void 0 : t.captureLocation) || function e(t) {
                    t.forEach(function(t) {
                        if (delete t.location, g(t) || b(t))
                            for (var r in t.options) delete t.options[r].location, e(t.options[r].value);
                        else p(t) && y(t.style) ? delete t.style.location : (d(t) || m(t)) && E(t.style) ? delete t.style.location : v(t) && e(t.children)
                    })
                }(r.val), r.val
            }! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(l || (l = {}));
            var er = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t) || this;
                        return o.code = r, o.originalMessage = n, o
                    }
                    return (0, c.C6)(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                en = function(e) {
                    function t(t, r, n, o) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), l.INVALID_VALUE, o) || this
                    }
                    return (0, c.C6)(t, e), t
                }(er),
                eo = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), l.INVALID_VALUE, n) || this
                    }
                    return (0, c.C6)(t, e), t
                }(er),
                ei = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), l.MISSING_VALUE, r) || this
                    }
                    return (0, c.C6)(t, e), t
                }(er);

            function ea(e) {
                return "function" == typeof e
            }

            function es(e, t, r, n, i, a, s) {
                if (1 === e.length && f(e[0])) return [{
                    type: u.literal,
                    value: e[0].value
                }];
                for (var c = [], h = 0; h < e.length; h++) {
                    var T = e[h];
                    if (f(T)) {
                        c.push({
                            type: u.literal,
                            value: T.value
                        });
                        continue
                    }
                    if (T.type === o.pound) {
                        "number" == typeof a && c.push({
                            type: u.literal,
                            value: r.getNumberFormat(t).format(a)
                        });
                        continue
                    }
                    var w = T.value;
                    if (!(i && w in i)) throw new ei(w, s);
                    var _ = i[w];
                    if (T.type === o.argument) {
                        _ && "string" != typeof _ && "number" != typeof _ || (_ = "string" == typeof _ || "number" == typeof _ ? String(_) : ""), c.push({
                            type: "string" == typeof _ ? u.literal : u.object,
                            value: _
                        });
                        continue
                    }
                    if (d(T)) {
                        var H = "string" == typeof T.style ? n.date[T.style] : E(T.style) ? T.style.parsedOptions : void 0;
                        c.push({
                            type: u.literal,
                            value: r.getDateTimeFormat(t, H).format(_)
                        });
                        continue
                    }
                    if (m(T)) {
                        var H = "string" == typeof T.style ? n.time[T.style] : E(T.style) ? T.style.parsedOptions : n.time.medium;
                        c.push({
                            type: u.literal,
                            value: r.getDateTimeFormat(t, H).format(_)
                        });
                        continue
                    }
                    if (p(T)) {
                        var H = "string" == typeof T.style ? n.number[T.style] : y(T.style) ? T.style.parsedOptions : void 0;
                        H && H.scale && (_ *= H.scale || 1), c.push({
                            type: u.literal,
                            value: r.getNumberFormat(t, H).format(_)
                        });
                        continue
                    }
                    if (v(T)) {
                        var A = T.children,
                            I = T.value,
                            S = i[I];
                        if (!ea(S)) throw new eo(I, "function", s);
                        var C = S(es(A, t, r, n, i, a).map(function(e) {
                            return e.value
                        }));
                        Array.isArray(C) || (C = [C]), c.push.apply(c, C.map(function(e) {
                            return {
                                type: "string" == typeof e ? u.literal : u.object,
                                value: e
                            }
                        }))
                    }
                    if (g(T)) {
                        var B = T.options[_] || T.options.other;
                        if (!B) throw new en(T.value, _, Object.keys(T.options), s);
                        c.push.apply(c, es(B.value, t, r, n, i));
                        continue
                    }
                    if (b(T)) {
                        var B = T.options["=".concat(_)];
                        if (!B) {
                            if (!Intl.PluralRules) throw new er('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', l.MISSING_INTL_API, s);
                            var N = r.getPluralRules(t, {
                                type: T.pluralType
                            }).select(_ - (T.offset || 0));
                            B = T.options[N] || T.options.other
                        }
                        if (!B) throw new en(T.value, _, Object.keys(T.options), s);
                        c.push.apply(c, es(B.value, t, r, n, i, _ - (T.offset || 0)));
                        continue
                    }
                }
                return c.length < 2 ? c : c.reduce(function(e, t) {
                    var r = e[e.length - 1];
                    return r && r.type === u.literal && t.type === u.literal ? r.value += t.value : e.push(t), e
                }, [])
            }

            function el(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(u || (u = {}));
            var eu = function() {
                function e(t, r, n, o) {
                    void 0 === r && (r = e.defaultLocale);
                    var i, a, s = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = s.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function(e, t) {
                                return e.length && t.type === u.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }, []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return es(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
                            }
                        }, this.getAst = function() {
                            return s.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                        if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var l = o || {},
                            f = (l.formatters, (0, c.Tt)(l, ["formatters"]));
                        this.ast = e.__parse(t, (0, c.Cl)((0, c.Cl)({}, f), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                    this.formats = (i = e.formats, n ? Object.keys(i).reduce(function(e, t) {
                        var r, o;
                        return e[t] = (r = i[t], (o = n[t]) ? (0, c.Cl)((0, c.Cl)((0, c.Cl)({}, r || {}), o || {}), Object.keys(r).reduce(function(e, t) {
                            return e[t] = (0, c.Cl)((0, c.Cl)({}, r[t]), o[t] || {}), e
                        }, {})) : r), e
                    }, (0, c.Cl)({}, i)) : i), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: (0, h.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, (0, c.fX)([void 0], t, !1)))
                        }, {
                            cache: el(a.number),
                            strategy: h.strategies.variadic
                        }),
                        getDateTimeFormat: (0, h.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, c.fX)([void 0], t, !1)))
                        }, {
                            cache: el(a.dateTime),
                            strategy: h.strategies.variadic
                        }),
                        getPluralRules: (0, h.memoize)(function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, (0, c.fX)([void 0], t, !1)))
                        }, {
                            cache: el(a.pluralRules),
                            strategy: h.strategies.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if (void 0 !== Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                    }
                }, e.__parse = et, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }();
            let ec = eu
        },
        76573: (e, t, r) => {
            function n(e, t) {
                var r = t && t.cache ? t.cache : l,
                    n = t && t.serializer ? t.serializer : a;
                return (t && t.strategy ? t.strategy : function(e, t) {
                    var r, n, a = 1 === e.length ? o : i;
                    return r = t.cache.create(), n = t.serializer, a.bind(this, e, r, n)
                })(e, {
                    cache: r,
                    serializer: n
                })
            }

            function o(e, t, r, n) {
                var o = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
                    i = t.get(o);
                return void 0 === i && (i = e.call(this, n), t.set(o, i)), i
            }

            function i(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    o = r(n),
                    i = t.get(o);
                return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
            }
            r.r(t), r.d(t, {
                memoize: () => n,
                strategies: () => u
            });
            var a = function() {
                return JSON.stringify(arguments)
            };

            function s() {
                this.cache = Object.create(null)
            }
            s.prototype.get = function(e) {
                return this.cache[e]
            }, s.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var l = {
                    create: function() {
                        return new s
                    }
                },
                u = {
                    variadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
                    },
                    monadic: function(e, t) {
                        var r, n;
                        return r = t.cache.create(), n = t.serializer, o.bind(this, e, r, n)
                    }
                }
        },
        77187: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(11671),
                o = r(36387),
                i = r(97387),
                a = r(64429);
            r(17079), r(76573), r(18832), r(68181);
            let s = !1,
                l = "undefined" == typeof window;
            t.IntlProvider = n.IntlProvider, t.useLocale = o.useLocale, t.useFormatter = function() {
                let {
                    formats: e,
                    formatters: t,
                    locale: r,
                    now: n,
                    onError: s,
                    timeZone: l
                } = o.useIntlContext();
                return i.useMemo(() => a.createFormatter({
                    formats: e,
                    locale: r,
                    now: n,
                    onError: s,
                    timeZone: l,
                    _formatters: t
                }), [e, t, n, r, s, l])
            }, t.useMessages = function() {
                let e = o.useIntlContext();
                if (!e.messages) throw Error(void 0);
                return e.messages
            }, t.useNow = function(e) {
                let t = null == e ? void 0 : e.updateInterval,
                    {
                        now: r
                    } = o.useIntlContext(),
                    [n, a] = i.useState(r || new Date);
                return i.useEffect(() => {
                    if (!t) return;
                    let e = setInterval(() => {
                        a(new Date)
                    }, t);
                    return () => {
                        clearInterval(e)
                    }
                }, [r, t]), null == t && r ? r : n
            }, t.useTimeZone = function() {
                return o.useIntlContext().timeZone
            }, t.useTranslations = function(e) {
                return function(e, t, r) {
                    let {
                        cache: n,
                        defaultTranslationValues: u,
                        formats: c,
                        formatters: h,
                        getMessageFallback: f,
                        locale: p,
                        onError: d,
                        timeZone: m
                    } = o.useIntlContext(), g = e["!"], b = a.resolveNamespace(t, "!");
                    return m || s || !l || (s = !0, d(new a.IntlError(a.IntlErrorCode.ENVIRONMENT_FALLBACK, void 0))), i.useMemo(() => a.createBaseTranslator({
                        cache: n,
                        formatters: h,
                        getMessageFallback: f,
                        messages: g,
                        defaultTranslationValues: u,
                        namespace: b,
                        onError: d,
                        formats: c,
                        locale: p,
                        timeZone: m
                    }), [n, h, f, g, u, b, d, c, p, m])
                }({
                    "!": o.useIntlContext().messages
                }, e ? "!.".concat(e) : "!", "!")
            }
        },
        93371: (e, t, r) => {
            r.d(t, {
                s: () => a,
                t: () => i
            });
            var n = r(97387);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = o(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
                }
            }

            function a(...e) {
                return n.useCallback(i(...e), e)
            }
        },
        96146: (e, t, r) => {
            r.d(t, {
                QP: () => O
            });
            let n = /^\[(.+)\]$/;

            function o(e, t) {
                let r = e;
                return t.split("-").forEach(e => {
                    r.nextPart.has(e) || r.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(e)
                }), r
            }
            let i = /\s+/;

            function a() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    let r;
                    if ("string" == typeof t) return t;
                    let n = "";
                    for (let o = 0; o < t.length; o++) t[o] && (r = e(t[o])) && (n && (n += " "), n += r);
                    return n
                }(e)) && (n && (n += " "), n += t);
                return n
            }

            function s(e) {
                let t = t => t[e] || [];
                return t.isThemeGetter = !0, t
            }
            let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                u = /^\d+\/\d+$/,
                c = new Set(["px", "full", "screen"]),
                h = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                d = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function g(e) {
                return v(e) || c.has(e) || u.test(e)
            }

            function b(e) {
                return P(e, "length", M)
            }

            function v(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function y(e) {
                return P(e, "number", v)
            }

            function E(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function T(e) {
                return e.endsWith("%") && v(e.slice(0, -1))
            }

            function w(e) {
                return l.test(e)
            }

            function _(e) {
                return h.test(e)
            }
            let H = new Set(["length", "size", "percentage"]);

            function A(e) {
                return P(e, H, L)
            }

            function I(e) {
                return P(e, "position", L)
            }
            let S = new Set(["image", "url"]);

            function C(e) {
                return P(e, S, x)
            }

            function B(e) {
                return P(e, "", R)
            }

            function N() {
                return !0
            }

            function P(e, t, r) {
                let n = l.exec(e);
                return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
            }

            function M(e) {
                return f.test(e) && !p.test(e)
            }

            function L() {
                return !1
            }

            function R(e) {
                return d.test(e)
            }

            function x(e) {
                return m.test(e)
            }
            Symbol.toStringTag;
            let O = function(e, ...t) {
                let r, s, l, u = function(i) {
                    var a;
                    return s = (r = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let t = 0,
                                r = new Map,
                                n = new Map;

                            function o(o, i) {
                                r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                            }
                            return {
                                get(e) {
                                    let t = r.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                                },
                                set(e, t) {
                                    r.has(e) ? r.set(e, t) : o(e, t)
                                }
                            }
                        }((a = t.reduce((e, t) => t(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let t = e.separator,
                                r = 1 === t.length,
                                n = t[0],
                                o = t.length;
                            return function(e) {
                                let i, a = [],
                                    s = 0,
                                    l = 0;
                                for (let u = 0; u < e.length; u++) {
                                    let c = e[u];
                                    if (0 === s) {
                                        if (c === n && (r || e.slice(u, u + o) === t)) {
                                            a.push(e.slice(l, u)), l = u + o;
                                            continue
                                        }
                                        if ("/" === c) {
                                            i = u;
                                            continue
                                        }
                                    }
                                    "[" === c ? s++ : "]" === c && s--
                                }
                                let u = 0 === a.length ? e : e.substring(l),
                                    c = u.startsWith("!"),
                                    h = c ? u.substring(1) : u;
                                return {
                                    modifiers: a,
                                    hasImportantModifier: c,
                                    baseClassName: h,
                                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                                }
                            }
                        }(a),
                        ... function(e) {
                            let t = function(e) {
                                    var t, r;
                                    let {
                                        theme: n,
                                        prefix: i
                                    } = e, a = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (t = Object.entries(e.classGroups), (r = i) ? t.map(([e, t]) => [e, t.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [r + e, t])) : e)]) : t).forEach(([e, t]) => {
                                        (function e(t, r, n, i) {
                                            t.forEach(t => {
                                                if ("string" == typeof t) {
                                                    ("" === t ? r : o(r, t)).classGroupId = n;
                                                    return
                                                }
                                                if ("function" == typeof t) {
                                                    if (t.isThemeGetter) {
                                                        e(t(i), r, n, i);
                                                        return
                                                    }
                                                    r.validators.push({
                                                        validator: t,
                                                        classGroupId: n
                                                    });
                                                    return
                                                }
                                                Object.entries(t).forEach(([t, a]) => {
                                                    e(a, o(r, t), n, i)
                                                })
                                            })
                                        })(t, a, e, n)
                                    }), a
                                }(e),
                                {
                                    conflictingClassGroups: r,
                                    conflictingClassGroupModifiers: i
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let r = e.split("-");
                                    return "" === r[0] && 1 !== r.length && r.shift(),
                                        function e(t, r) {
                                            if (0 === t.length) return r.classGroupId;
                                            let n = t[0],
                                                o = r.nextPart.get(n),
                                                i = o ? e(t.slice(1), o) : void 0;
                                            if (i) return i;
                                            if (0 === r.validators.length) return;
                                            let a = t.join("-");
                                            return r.validators.find(({
                                                validator: e
                                            }) => e(a)) ? .classGroupId
                                        }(r, t) || function(e) {
                                            if (n.test(e)) {
                                                let t = n.exec(e)[1],
                                                    r = t ? .substring(0, t.indexOf(":"));
                                                if (r) return "arbitrary.." + r
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    let n = r[e] || [];
                                    return t && i[e] ? [...n, ...i[e]] : n
                                }
                            }
                        }(a)
                    }).cache.get, l = r.cache.set, u = c, c(i)
                };

                function c(e) {
                    let t = s(e);
                    if (t) return t;
                    let n = function(e, t) {
                        let {
                            splitModifiers: r,
                            getClassGroupId: n,
                            getConflictingClassGroupIds: o
                        } = t, a = new Set;
                        return e.trim().split(i).map(e => {
                            let {
                                modifiers: t,
                                hasImportantModifier: o,
                                baseClassName: i,
                                maybePostfixModifierPosition: a
                            } = r(e), s = n(a ? i.substring(0, a) : i), l = !!a;
                            if (!s) {
                                if (!a || !(s = n(i))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                l = !1
                            }
                            let u = (function(e) {
                                if (e.length <= 1) return e;
                                let t = [],
                                    r = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                                }), t.push(...r.sort()), t
                            })(t).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: o ? u + "!" : u,
                                classGroupId: s,
                                originalClassName: e,
                                hasPostfixModifier: l
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: t,
                                classGroupId: r,
                                hasPostfixModifier: n
                            } = e, i = t + r;
                            return !a.has(i) && (a.add(i), o(r, n).forEach(e => a.add(t + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, r);
                    return l(e, n), n
                }
                return function() {
                    return u(a.apply(null, arguments))
                }
            }(function() {
                let e = s("colors"),
                    t = s("spacing"),
                    r = s("blur"),
                    n = s("brightness"),
                    o = s("borderColor"),
                    i = s("borderRadius"),
                    a = s("borderSpacing"),
                    l = s("borderWidth"),
                    u = s("contrast"),
                    c = s("grayscale"),
                    h = s("hueRotate"),
                    f = s("invert"),
                    p = s("gap"),
                    d = s("gradientColorStops"),
                    m = s("gradientColorStopPositions"),
                    H = s("inset"),
                    S = s("margin"),
                    P = s("opacity"),
                    M = s("padding"),
                    L = s("saturate"),
                    R = s("scale"),
                    x = s("sepia"),
                    O = s("skew"),
                    F = s("space"),
                    G = s("translate"),
                    k = () => ["auto", "contain", "none"],
                    U = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    D = () => ["auto", w, t],
                    j = () => [w, t],
                    V = () => ["", g, b],
                    z = () => ["auto", v, w],
                    X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    K = () => ["solid", "dashed", "dotted", "double", "none"],
                    Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    W = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Y = () => ["", "0", w],
                    Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    q = () => [v, y],
                    $ = () => [v, w];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [N],
                        spacing: [g, b],
                        blur: ["none", "", _, w],
                        brightness: q(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", _, w],
                        borderSpacing: j(),
                        borderWidth: V(),
                        contrast: q(),
                        grayscale: Y(),
                        hueRotate: $(),
                        invert: Y(),
                        gap: j(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [T, b],
                        inset: D(),
                        margin: D(),
                        opacity: q(),
                        padding: j(),
                        saturate: q(),
                        scale: q(),
                        sepia: Y(),
                        skew: $(),
                        space: j(),
                        translate: j()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", w]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [_]
                        }],
                        "break-after": [{
                            "break-after": Q()
                        }],
                        "break-before": [{
                            "break-before": Q()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...X(), w]
                        }],
                        overflow: [{
                            overflow: U()
                        }],
                        "overflow-x": [{
                            "overflow-x": U()
                        }],
                        "overflow-y": [{
                            "overflow-y": U()
                        }],
                        overscroll: [{
                            overscroll: k()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": k()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": k()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [H]
                        }],
                        "inset-x": [{
                            "inset-x": [H]
                        }],
                        "inset-y": [{
                            "inset-y": [H]
                        }],
                        start: [{
                            start: [H]
                        }],
                        end: [{
                            end: [H]
                        }],
                        top: [{
                            top: [H]
                        }],
                        right: [{
                            right: [H]
                        }],
                        bottom: [{
                            bottom: [H]
                        }],
                        left: [{
                            left: [H]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", E, w]
                        }],
                        basis: [{
                            basis: D()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", w]
                        }],
                        grow: [{
                            grow: Y()
                        }],
                        shrink: [{
                            shrink: Y()
                        }],
                        order: [{
                            order: ["first", "last", "none", E, w]
                        }],
                        "grid-cols": [{
                            "grid-cols": [N]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", E, w]
                            }, w]
                        }],
                        "col-start": [{
                            "col-start": z()
                        }],
                        "col-end": [{
                            "col-end": z()
                        }],
                        "grid-rows": [{
                            "grid-rows": [N]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [E, w]
                            }, w]
                        }],
                        "row-start": [{
                            "row-start": z()
                        }],
                        "row-end": [{
                            "row-end": z()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", w]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", w]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...W()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...W(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...W(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [M]
                        }],
                        px: [{
                            px: [M]
                        }],
                        py: [{
                            py: [M]
                        }],
                        ps: [{
                            ps: [M]
                        }],
                        pe: [{
                            pe: [M]
                        }],
                        pt: [{
                            pt: [M]
                        }],
                        pr: [{
                            pr: [M]
                        }],
                        pb: [{
                            pb: [M]
                        }],
                        pl: [{
                            pl: [M]
                        }],
                        m: [{
                            m: [S]
                        }],
                        mx: [{
                            mx: [S]
                        }],
                        my: [{
                            my: [S]
                        }],
                        ms: [{
                            ms: [S]
                        }],
                        me: [{
                            me: [S]
                        }],
                        mt: [{
                            mt: [S]
                        }],
                        mr: [{
                            mr: [S]
                        }],
                        mb: [{
                            mb: [S]
                        }],
                        ml: [{
                            ml: [S]
                        }],
                        "space-x": [{
                            "space-x": [F]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [F]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", w, t]
                        }],
                        "min-w": [{
                            "min-w": [w, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [w, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [_]
                            }, _]
                        }],
                        h: [{
                            h: [w, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [w, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", _, b]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [N]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", v, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, w]
                        }],
                        "list-image": [{
                            "list-image": ["none", w]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", w]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [P]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [P]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...K(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", g, b]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", g, w]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: j()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", w]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [P]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...X(), I]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", A]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, C]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [m]
                        }],
                        "gradient-via-pos": [{
                            via: [m]
                        }],
                        "gradient-to-pos": [{
                            to: [m]
                        }],
                        "gradient-from": [{
                            from: [d]
                        }],
                        "gradient-via": [{
                            via: [d]
                        }],
                        "gradient-to": [{
                            to: [d]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [l]
                        }],
                        "border-w-x": [{
                            "border-x": [l]
                        }],
                        "border-w-y": [{
                            "border-y": [l]
                        }],
                        "border-w-s": [{
                            "border-s": [l]
                        }],
                        "border-w-e": [{
                            "border-e": [l]
                        }],
                        "border-w-t": [{
                            "border-t": [l]
                        }],
                        "border-w-r": [{
                            "border-r": [l]
                        }],
                        "border-w-b": [{
                            "border-b": [l]
                        }],
                        "border-w-l": [{
                            "border-l": [l]
                        }],
                        "border-opacity": [{
                            "border-opacity": [P]
                        }],
                        "border-style": [{
                            border: [...K(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [l]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [l]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [P]
                        }],
                        "divide-style": [{
                            divide: K()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...K()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [g, w]
                        }],
                        "outline-w": [{
                            outline: [g, b]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: V()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [P]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [g, b]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", _, B]
                        }],
                        "shadow-color": [{
                            shadow: [N]
                        }],
                        opacity: [{
                            opacity: [P]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": Z()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [u]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", _, w]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [h]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [L]
                        }],
                        sepia: [{
                            sepia: [x]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [u]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [h]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [P]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [L]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [x]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [a]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [a]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [a]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
                        }],
                        duration: [{
                            duration: $()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", w]
                        }],
                        delay: [{
                            delay: $()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", w]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [R]
                        }],
                        "scale-x": [{
                            "scale-x": [R]
                        }],
                        "scale-y": [{
                            "scale-y": [R]
                        }],
                        rotate: [{
                            rotate: [E, w]
                        }],
                        "translate-x": [{
                            "translate-x": [G]
                        }],
                        "translate-y": [{
                            "translate-y": [G]
                        }],
                        "skew-x": [{
                            "skew-x": [O]
                        }],
                        "skew-y": [{
                            "skew-y": [O]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": j()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": j()
                        }],
                        "scroll-my": [{
                            "scroll-my": j()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": j()
                        }],
                        "scroll-me": [{
                            "scroll-me": j()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": j()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": j()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": j()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": j()
                        }],
                        "scroll-p": [{
                            "scroll-p": j()
                        }],
                        "scroll-px": [{
                            "scroll-px": j()
                        }],
                        "scroll-py": [{
                            "scroll-py": j()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": j()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": j()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": j()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": j()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": j()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": j()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", w]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [g, b, y]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);