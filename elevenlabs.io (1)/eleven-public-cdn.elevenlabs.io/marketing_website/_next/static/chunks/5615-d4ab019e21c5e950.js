"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5615], {
        40802: (e, t, n) => {
            n.d(t, {
                UE: () => O,
                RK: () => j,
                ll: () => T,
                rD: () => B,
                __: () => P,
                UU: () => D,
                jD: () => U,
                mG: () => H,
                ER: () => q,
                cY: () => k,
                iD: () => A,
                BN: () => z,
                Ej: () => N
            });
            var r = n(29295),
                o = n(88800);
            let i = Math.min,
                l = Math.max,
                u = Math.round,
                a = Math.floor,
                c = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                f = {
                    start: "end",
                    end: "start"
                };
            var d = n(63840);

            function p(e) {
                let t = (0, d.L9)(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = (0, d.sb)(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = u(n) !== i || u(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function h(e) {
                return (0, d.vq)(e) ? e : e.contextElement
            }

            function m(e) {
                let t = h(e);
                if (!(0, d.sb)(t)) return c(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = p(t),
                    l = (i ? u(n.width) : n.width) / r,
                    a = (i ? u(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let v = c(0);

            function g(e) {
                let t = (0, d.zk)(e);
                return (0, d.Tc)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : v
            }

            function y(e, t, n, o) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let l = e.getBoundingClientRect(),
                    u = h(e),
                    a = c(1);
                t && (o ? (0, d.vq)(o) && (a = m(o)) : a = m(e));
                let s = (void 0 === (i = n) && (i = !1), o && (!i || o === (0, d.zk)(u)) && i) ? g(u) : c(0),
                    f = (l.left + s.x) / a.x,
                    p = (l.top + s.y) / a.y,
                    v = l.width / a.x,
                    y = l.height / a.y;
                if (u) {
                    let e = (0, d.zk)(u),
                        t = o && (0, d.vq)(o) ? (0, d.zk)(o) : o,
                        n = e,
                        r = n.frameElement;
                    for (; r && o && t !== n;) {
                        let e = m(r),
                            t = r.getBoundingClientRect(),
                            o = (0, d.L9)(r),
                            i = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            l = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
                        f *= e.x, p *= e.y, v *= e.x, y *= e.y, f += i, p += l, r = (n = (0, d.zk)(r)).frameElement
                    }
                }
                return (0, r.B1)({
                    width: v,
                    height: y,
                    x: f,
                    y: p
                })
            }
            let w = [":popover-open", ":modal"];

            function x(e) {
                return w.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function b(e) {
                return y((0, d.ep)(e)).left + (0, d.CP)(e).scrollLeft
            }

            function E(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = (0, d.zk)(e),
                        r = (0, d.ep)(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        u = 0,
                        a = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = (0, d.Tc)();
                        (!e || e && "fixed" === t) && (u = o.offsetLeft, a = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: u,
                        y: a
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = (0, d.ep)(e),
                        n = (0, d.CP)(e),
                        r = e.ownerDocument.body,
                        o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        u = -n.scrollLeft + b(e),
                        a = -n.scrollTop;
                    return "rtl" === (0, d.L9)(r).direction && (u += l(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: u,
                        y: a
                    }
                }((0, d.ep)(e));
                else if ((0, d.vq)(t)) o = function(e, t) {
                    let n = y(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = (0, d.sb)(e) ? m(e) : c(1),
                        l = e.clientWidth * i.x,
                        u = e.clientHeight * i.y;
                    return {
                        width: l,
                        height: u,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = g(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.B1)(o)
            }

            function R(e) {
                return "static" === (0, d.L9)(e).position
            }

            function L(e, t) {
                return (0, d.sb)(e) && "fixed" !== (0, d.L9)(e).position ? t ? t(e) : e.offsetParent : null
            }

            function C(e, t) {
                let n = (0, d.zk)(e);
                if (x(e)) return n;
                if (!(0, d.sb)(e)) {
                    let t = (0, d.$4)(e);
                    for (; t && !(0, d.eu)(t);) {
                        if ((0, d.vq)(t) && !R(t)) return t;
                        t = (0, d.$4)(t)
                    }
                    return n
                }
                let r = L(e, t);
                for (; r && (0, d.Lv)(r) && R(r);) r = L(r, t);
                return r && (0, d.eu)(r) && R(r) && !(0, d.sQ)(r) ? n : r || (0, d.gJ)(e) || n
            }
            let S = async function(e) {
                    let t = this.getOffsetParent || C,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = (0, d.sb)(t),
                                o = (0, d.ep)(t),
                                i = "fixed" === n,
                                l = y(e, !0, i, t),
                                u = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                a = c(0);
                            if (r || !r && !i)
                                if (("body" !== (0, d.mq)(t) || (0, d.ZU)(o)) && (u = (0, d.CP)(t)), r) {
                                    let e = y(t, !0, i, t);
                                    a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                                } else o && (a.x = b(o));
                            return {
                                x: l.left + u.scrollLeft - a.x,
                                y: l.top + u.scrollTop - a.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                A = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = (0, d.ep)(r), u = !!t && x(t.floating);
                        if (r === l || u && i) return n;
                        let a = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = c(1),
                            f = c(0),
                            p = (0, d.sb)(r);
                        if ((p || !p && !i) && (("body" !== (0, d.mq)(r) || (0, d.ZU)(l)) && (a = (0, d.CP)(r)), (0, d.sb)(r))) {
                            let e = y(r);
                            s = m(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                        }
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - a.scrollLeft * s.x + f.x,
                            y: n.y * s.y - a.scrollTop * s.y + f.y
                        }
                    },
                    getDocumentElement: d.ep,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, u = [..."clippingAncestors" === n ? x(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = (0, d.v9)(e, [], !1).filter(e => (0, d.vq)(e) && "body" !== (0, d.mq)(e)),
                                o = null,
                                i = "fixed" === (0, d.L9)(e).position,
                                l = i ? (0, d.$4)(e) : e;
                            for (;
                                (0, d.vq)(l) && !(0, d.eu)(l);) {
                                let t = (0, d.L9)(l),
                                    n = (0, d.sQ)(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || (0, d.ZU)(l) && !n && function e(t, n) {
                                    let r = (0, d.$4)(t);
                                    return !(r === n || !(0, d.vq)(r) || (0, d.eu)(r)) && ("fixed" === (0, d.L9)(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = (0, d.$4)(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], a = u[0], c = u.reduce((e, n) => {
                            let r = E(t, n, o);
                            return e.top = l(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = l(r.left, e.left), e
                        }, E(t, a, o));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: C,
                    getElementRects: S,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = p(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: m,
                    isElement: d.vq,
                    isRTL: function(e) {
                        return "rtl" === (0, d.L9)(e).direction
                    }
                };

            function T(e, t, n, r) {
                let o;
                void 0 === r && (r = {});
                let {
                    ancestorScroll: u = !0,
                    ancestorResize: c = !0,
                    elementResize: s = "function" == typeof ResizeObserver,
                    layoutShift: f = "function" == typeof IntersectionObserver,
                    animationFrame: p = !1
                } = r, m = h(e), v = u || c ? [...m ? (0, d.v9)(m) : [], ...(0, d.v9)(t)] : [];
                v.forEach(e => {
                    u && e.addEventListener("scroll", n, {
                        passive: !0
                    }), c && e.addEventListener("resize", n)
                });
                let g = m && f ? function(e, t) {
                        let n, r = null,
                            o = (0, d.ep)(e);

                        function u() {
                            var e;
                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                        }
                        return ! function c(s, f) {
                            void 0 === s && (s = !1), void 0 === f && (f = 1), u();
                            let {
                                left: d,
                                top: p,
                                width: h,
                                height: m
                            } = e.getBoundingClientRect();
                            if (s || t(), !h || !m) return;
                            let v = a(p),
                                g = a(o.clientWidth - (d + h)),
                                y = {
                                    rootMargin: -v + "px " + -g + "px " + -a(o.clientHeight - (p + m)) + "px " + -a(d) + "px",
                                    threshold: l(0, i(1, f)) || 1
                                },
                                w = !0;

                            function x(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== f) {
                                    if (!w) return c();
                                    t ? c(!1, t) : n = setTimeout(() => {
                                        c(!1, 1e-7)
                                    }, 1e3)
                                }
                                w = !1
                            }
                            try {
                                r = new IntersectionObserver(x, { ...y,
                                    root: o.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(x, y)
                            }
                            r.observe(e)
                        }(!0), u
                    }(m, n) : null,
                    w = -1,
                    x = null;
                s && (x = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === m && x && (x.unobserve(t), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
                        var e;
                        null == (e = x) || e.observe(t)
                    })), n()
                }), m && !p && x.observe(m), x.observe(t));
                let b = p ? y(e) : null;
                return p && function t() {
                    let r = y(e);
                    b && (r.x !== b.x || r.y !== b.y || r.width !== b.width || r.height !== b.height) && n(), b = r, o = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    v.forEach(e => {
                        u && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                    }), null == g || g(), null == (e = x) || e.disconnect(), x = null, p && cancelAnimationFrame(o)
                }
            }
            let P = o.__,
                k = o.cY,
                j = o.RK,
                z = o.BN,
                D = o.UU,
                N = o.Ej,
                U = o.jD,
                O = o.UE,
                H = o.mG,
                q = o.ER,
                B = (e, t, n) => {
                    let r = new Map,
                        i = {
                            platform: A,
                            ...n
                        },
                        l = { ...i.platform,
                            _c: r
                        };
                    return (0, o.rD)(e, t, { ...i,
                        platform: l
                    })
                }
        },
        55615: (e, t, n) => {
            n.d(t, {
                Mz: () => D,
                i3: () => U,
                UC: () => N,
                bL: () => z,
                Bk: () => v
            });
            var r = n(97387),
                o = n(80163),
                i = n(40802),
                l = n(78273),
                u = n(4155),
                a = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, u.jsx)(l.sG.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, u.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            a.displayName = "Arrow";
            var c = n(93371),
                s = n(17439),
                f = n(57310),
                d = n(96552),
                p = n(84838),
                h = "Popper",
                [m, v] = (0, s.A)(h),
                [g, y] = m(h),
                w = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, u.jsx)(g, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            w.displayName = h;
            var x = "PopperAnchor",
                b = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...i
                    } = e, a = y(x, n), s = r.useRef(null), f = (0, c.s)(t, s);
                    return r.useEffect(() => {
                        a.onAnchorChange((null == o ? void 0 : o.current) || s.current)
                    }), o ? null : (0, u.jsx)(l.sG.div, { ...i,
                        ref: f
                    })
                });
            b.displayName = x;
            var E = "PopperContent",
                [R, L] = m(E),
                C = r.forwardRef((e, t) => {
                    var n, a, s, h, m, v, g, w;
                    let {
                        __scopePopper: x,
                        side: b = "bottom",
                        sideOffset: L = 0,
                        align: C = "center",
                        alignOffset: S = 0,
                        arrowPadding: A = 0,
                        avoidCollisions: T = !0,
                        collisionBoundary: z = [],
                        collisionPadding: D = 0,
                        sticky: N = "partial",
                        hideWhenDetached: U = !1,
                        updatePositionStrategy: O = "optimized",
                        onPlaced: H,
                        ...q
                    } = e, B = y(E, x), [M, F] = r.useState(null), W = (0, c.s)(t, e => F(e)), [_, Y] = r.useState(null), $ = (0, p.X)(_), V = null !== (g = null == $ ? void 0 : $.width) && void 0 !== g ? g : 0, G = null !== (w = null == $ ? void 0 : $.height) && void 0 !== w ? w : 0, X = "number" == typeof D ? D : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...D
                    }, I = Array.isArray(z) ? z : [z], K = I.length > 0, Z = {
                        padding: X,
                        boundary: I.filter(P),
                        altBoundary: K
                    }, {
                        refs: Q,
                        floatingStyles: J,
                        placement: ee,
                        isPositioned: et,
                        middlewareData: en
                    } = (0, o.we)({
                        strategy: "fixed",
                        placement: b + ("center" !== C ? "-" + C : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return (0, i.ll)(...t, {
                                animationFrame: "always" === O
                            })
                        },
                        elements: {
                            reference: B.anchor
                        },
                        middleware: [(0, o.cY)({
                            mainAxis: L + G,
                            alignmentAxis: S
                        }), T && (0, o.BN)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === N ? (0, o.ER)() : void 0,
                            ...Z
                        }), T && (0, o.UU)({ ...Z
                        }), (0, o.Ej)({ ...Z,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: l
                                } = n.reference, u = t.floating.style;
                                u.setProperty("--radix-popper-available-width", "".concat(r, "px")), u.setProperty("--radix-popper-available-height", "".concat(o, "px")), u.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), u.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), _ && (0, o.UE)({
                            element: _,
                            padding: A
                        }), k({
                            arrowWidth: V,
                            arrowHeight: G
                        }), U && (0, o.jD)({
                            strategy: "referenceHidden",
                            ...Z
                        })]
                    }), [er, eo] = j(ee), ei = (0, f.c)(H);
                    (0, d.N)(() => {
                        et && (null == ei || ei())
                    }, [et, ei]);
                    let el = null === (n = en.arrow) || void 0 === n ? void 0 : n.x,
                        eu = null === (a = en.arrow) || void 0 === a ? void 0 : a.y,
                        ea = (null === (s = en.arrow) || void 0 === s ? void 0 : s.centerOffset) !== 0,
                        [ec, es] = r.useState();
                    return (0, d.N)(() => {
                        M && es(window.getComputedStyle(M).zIndex)
                    }, [M]), (0, u.jsx)("div", {
                        ref: Q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...J,
                            transform: et ? J.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ec,
                            "--radix-popper-transform-origin": [null === (h = en.transformOrigin) || void 0 === h ? void 0 : h.x, null === (m = en.transformOrigin) || void 0 === m ? void 0 : m.y].join(" "),
                            ...(null === (v = en.hide) || void 0 === v ? void 0 : v.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, u.jsx)(R, {
                            scope: x,
                            placedSide: er,
                            onArrowChange: Y,
                            arrowX: el,
                            arrowY: eu,
                            shouldHideArrow: ea,
                            children: (0, u.jsx)(l.sG.div, {
                                "data-side": er,
                                "data-align": eo,
                                ...q,
                                ref: W,
                                style: { ...q.style,
                                    animation: et ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            C.displayName = E;
            var S = "PopperArrow",
                A = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                T = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = L(S, n), i = A[o.placedSide];
                    return (0, u.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, u.jsx)(a, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function P(e) {
                return null !== e
            }
            T.displayName = S;
            var k = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: u,
                        rects: a,
                        middlewareData: c
                    } = t, s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, f = s ? 0 : e.arrowWidth, d = s ? 0 : e.arrowHeight, [p, h] = j(u), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== i ? i : 0) + f / 2, g = (null !== (l = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== l ? l : 0) + d / 2, y = "", w = "";
                    return "bottom" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(-d, "px")) : "top" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(a.floating.height + d, "px")) : "right" === p ? (y = "".concat(-d, "px"), w = s ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(a.floating.width + d, "px"), w = s ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function j(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var z = w,
                D = b,
                N = C,
                U = T
        },
        63840: (e, t, n) => {
            function r(e) {
                return l(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function o(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function i(e) {
                var t;
                return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function l(e) {
                return e instanceof Node || e instanceof o(e).Node
            }

            function u(e) {
                return e instanceof Element || e instanceof o(e).Element
            }

            function a(e) {
                return e instanceof HTMLElement || e instanceof o(e).HTMLElement
            }

            function c(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
            }

            function s(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = v(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function f(e) {
                return ["table", "td", "th"].includes(r(e))
            }

            function d(e) {
                let t = h(),
                    n = v(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function p(e) {
                let t = y(e);
                for (; a(t) && !m(t);) {
                    if (d(t)) return t;
                    t = y(t)
                }
                return null
            }

            function h() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function m(e) {
                return ["html", "body", "#document"].includes(r(e))
            }

            function v(e) {
                return o(e).getComputedStyle(e)
            }

            function g(e) {
                return u(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function y(e) {
                if ("html" === r(e)) return e;
                let t = e.assignedSlot || e.parentNode || c(e) && e.host || i(e);
                return c(t) ? t.host : t
            }
            n.d(t, {
                $4: () => y,
                CP: () => g,
                L9: () => v,
                Lv: () => f,
                Tc: () => h,
                ZU: () => s,
                ep: () => i,
                eu: () => m,
                gJ: () => p,
                mq: () => r,
                sQ: () => d,
                sb: () => a,
                v9: () => function e(t, n, r) {
                    var i;
                    void 0 === n && (n = []), void 0 === r && (r = !0);
                    let l = function e(t) {
                            let n = y(t);
                            return m(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : a(n) && s(n) ? n : e(n)
                        }(t),
                        u = l === (null == (i = t.ownerDocument) ? void 0 : i.body),
                        c = o(l);
                    return u ? n.concat(c, c.visualViewport || [], s(l) ? l : [], c.frameElement && r ? e(c.frameElement) : []) : n.concat(l, e(l, [], r))
                },
                vq: () => u,
                zk: () => o
            })
        },
        80163: (e, t, n) => {
            n.d(t, {
                BN: () => h,
                ER: () => m,
                Ej: () => g,
                RK: () => y,
                UE: () => b,
                UU: () => v,
                cY: () => p,
                jD: () => w,
                mG: () => x,
                we: () => f
            });
            var r = n(40802),
                o = n(97387),
                i = n(72042),
                l = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function u(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!u(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !u(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function a(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function c(e, t) {
                let n = a(e);
                return Math.round(t * n) / n
            }

            function s(e) {
                let t = o.useRef(e);
                return l(() => {
                    t.current = e
                }), t
            }

            function f(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: f = [],
                    platform: d,
                    elements: {
                        reference: p,
                        floating: h
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: v,
                    open: g
                } = e, [y, w] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [x, b] = o.useState(f);
                u(x, f) || b(f);
                let [E, R] = o.useState(null), [L, C] = o.useState(null), S = o.useCallback(e => {
                    e !== k.current && (k.current = e, R(e))
                }, []), A = o.useCallback(e => {
                    e !== j.current && (j.current = e, C(e))
                }, []), T = p || E, P = h || L, k = o.useRef(null), j = o.useRef(null), z = o.useRef(y), D = null != v, N = s(v), U = s(d), O = o.useCallback(() => {
                    if (!k.current || !j.current) return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: x
                    };
                    U.current && (e.platform = U.current), (0, r.rD)(k.current, j.current, e).then(e => {
                        let t = { ...e,
                            isPositioned: !0
                        };
                        H.current && !u(z.current, t) && (z.current = t, i.flushSync(() => {
                            w(t)
                        }))
                    })
                }, [x, t, n, U]);
                l(() => {
                    !1 === g && z.current.isPositioned && (z.current.isPositioned = !1, w(e => ({ ...e,
                        isPositioned: !1
                    })))
                }, [g]);
                let H = o.useRef(!1);
                l(() => (H.current = !0, () => {
                    H.current = !1
                }), []), l(() => {
                    if (T && (k.current = T), P && (j.current = P), T && P) {
                        if (N.current) return N.current(T, P, O);
                        O()
                    }
                }, [T, P, O, N, D]);
                let q = o.useMemo(() => ({
                        reference: k,
                        floating: j,
                        setReference: S,
                        setFloating: A
                    }), [S, A]),
                    B = o.useMemo(() => ({
                        reference: T,
                        floating: P
                    }), [T, P]),
                    M = o.useMemo(() => {
                        let e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!B.floating) return e;
                        let t = c(B.floating, y.x),
                            r = c(B.floating, y.y);
                        return m ? { ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...a(B.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: t,
                            top: r
                        }
                    }, [n, m, B.floating, y.x, y.y]);
                return o.useMemo(() => ({ ...y,
                    update: O,
                    refs: q,
                    elements: B,
                    floatingStyles: M
                }), [y, O, q, B, M])
            }
            let d = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: o
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? (0, r.UE)({
                            element: n.current,
                            padding: o
                        }).fn(t) : {} : n ? (0, r.UE)({
                            element: n,
                            padding: o
                        }).fn(t) : {}
                    }
                }),
                p = (e, t) => ({ ...(0, r.cY)(e),
                    options: [e, t]
                }),
                h = (e, t) => ({ ...(0, r.BN)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({ ...(0, r.ER)(e),
                    options: [e, t]
                }),
                v = (e, t) => ({ ...(0, r.UU)(e),
                    options: [e, t]
                }),
                g = (e, t) => ({ ...(0, r.Ej)(e),
                    options: [e, t]
                }),
                y = (e, t) => ({ ...(0, r.RK)(e),
                    options: [e, t]
                }),
                w = (e, t) => ({ ...(0, r.jD)(e),
                    options: [e, t]
                }),
                x = (e, t) => ({ ...(0, r.mG)(e),
                    options: [e, t]
                }),
                b = (e, t) => ({ ...d(e),
                    options: [e, t]
                })
        },
        84838: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            var r = n(97387),
                o = n(96552);

            function i(e) {
                let [t, n] = r.useState(void 0);
                return (0, o.N)(() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let r, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize, o = t.blockSize
                            } else r = e.offsetWidth, o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }, [e]), t
            }
        }
    }
]);