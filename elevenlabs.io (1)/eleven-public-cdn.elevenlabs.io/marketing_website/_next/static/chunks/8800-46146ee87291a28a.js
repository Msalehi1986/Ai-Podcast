"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8800], {
        29295: (t, e, n) => {
            n.d(e, {
                B1: () => _,
                C0: () => m,
                DD: () => r,
                Dz: () => v,
                Jx: () => s,
                LI: () => a,
                PG: () => p,
                RI: () => f,
                Sg: () => d,
                T9: () => o,
                TV: () => y,
                WJ: () => b,
                _3: () => h,
                aD: () => T,
                bV: () => A,
                jk: () => l,
                lP: () => R,
                nI: () => E,
                qE: () => g,
                r_: () => i,
                sq: () => w,
                w7: () => x
            });
            let i = ["top", "right", "bottom", "left"],
                r = i.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []),
                l = Math.min,
                o = Math.max,
                a = Math.round,
                f = Math.floor,
                s = t => ({
                    x: t,
                    y: t
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                u = {
                    start: "end",
                    end: "start"
                };

            function g(t, e, n) {
                return o(t, l(e, n))
            }

            function h(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function m(t) {
                return t.split("-")[0]
            }

            function d(t) {
                return t.split("-")[1]
            }

            function p(t) {
                return "x" === t ? "y" : "x"
            }

            function w(t) {
                return "y" === t ? "height" : "width"
            }

            function y(t) {
                return ["top", "bottom"].includes(m(t)) ? "y" : "x"
            }

            function v(t) {
                return p(y(t))
            }

            function x(t, e, n) {
                void 0 === n && (n = !1);
                let i = d(t),
                    r = v(t),
                    l = w(r),
                    o = "x" === r ? i === (n ? "end" : "start") ? "right" : "left" : "start" === i ? "bottom" : "top";
                return e.reference[l] > e.floating[l] && (o = A(o)), [o, A(o)]
            }

            function b(t) {
                let e = A(t);
                return [T(t), e, T(e)]
            }

            function T(t) {
                return t.replace(/start|end/g, t => u[t])
            }

            function R(t, e, n, i) {
                let r = d(t),
                    l = function(t, e, n) {
                        let i = ["left", "right"],
                            r = ["right", "left"];
                        switch (t) {
                            case "top":
                            case "bottom":
                                if (n) return e ? r : i;
                                return e ? i : r;
                            case "left":
                            case "right":
                                return e ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(m(t), "start" === n, i);
                return r && (l = l.map(t => t + "-" + r), e && (l = l.concat(l.map(T)))), l
            }

            function A(t) {
                return t.replace(/left|right|bottom|top/g, t => c[t])
            }

            function E(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function _(t) {
                let {
                    x: e,
                    y: n,
                    width: i,
                    height: r
                } = t;
                return {
                    width: i,
                    height: r,
                    top: n,
                    left: e,
                    right: e + i,
                    bottom: n + r,
                    x: e,
                    y: n
                }
            }
        },
        88800: (t, e, n) => {
            n.d(e, {
                BN: () => w,
                ER: () => y,
                Ej: () => v,
                RK: () => f,
                UE: () => a,
                UU: () => s,
                __: () => o,
                cY: () => p,
                jD: () => g,
                mG: () => m,
                rD: () => l
            });
            var i = n(29295);

            function r(t, e, n) {
                let r, {
                        reference: l,
                        floating: o
                    } = t,
                    a = (0, i.TV)(e),
                    f = (0, i.Dz)(e),
                    s = (0, i.sq)(f),
                    c = (0, i.C0)(e),
                    u = "y" === a,
                    g = l.x + l.width / 2 - o.width / 2,
                    h = l.y + l.height / 2 - o.height / 2,
                    m = l[s] / 2 - o[s] / 2;
                switch (c) {
                    case "top":
                        r = {
                            x: g,
                            y: l.y - o.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: g,
                            y: l.y + l.height
                        };
                        break;
                    case "right":
                        r = {
                            x: l.x + l.width,
                            y: h
                        };
                        break;
                    case "left":
                        r = {
                            x: l.x - o.width,
                            y: h
                        };
                        break;
                    default:
                        r = {
                            x: l.x,
                            y: l.y
                        }
                }
                switch ((0, i.Sg)(e)) {
                    case "start":
                        r[f] -= m * (n && u ? -1 : 1);
                        break;
                    case "end":
                        r[f] += m * (n && u ? -1 : 1)
                }
                return r
            }
            let l = async (t, e, n) => {
                let {
                    placement: i = "bottom",
                    strategy: l = "absolute",
                    middleware: o = [],
                    platform: a
                } = n, f = o.filter(Boolean), s = await (null == a.isRTL ? void 0 : a.isRTL(e)), c = await a.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: l
                }), {
                    x: u,
                    y: g
                } = r(c, i, s), h = i, m = {}, d = 0;
                for (let n = 0; n < f.length; n++) {
                    let {
                        name: o,
                        fn: p
                    } = f[n], {
                        x: w,
                        y: y,
                        data: v,
                        reset: x
                    } = await p({
                        x: u,
                        y: g,
                        initialPlacement: i,
                        placement: h,
                        strategy: l,
                        middlewareData: m,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    u = null != w ? w : u, g = null != y ? y : g, m = { ...m,
                        [o]: { ...m[o],
                            ...v
                        }
                    }, x && d <= 50 && (d++, "object" == typeof x && (x.placement && (h = x.placement), x.rects && (c = !0 === x.rects ? await a.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: l
                    }) : x.rects), {
                        x: u,
                        y: g
                    } = r(c, h, s)), n = -1)
                }
                return {
                    x: u,
                    y: g,
                    placement: h,
                    strategy: l,
                    middlewareData: m
                }
            };
            async function o(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: r,
                    y: l,
                    platform: o,
                    rects: a,
                    elements: f,
                    strategy: s
                } = t, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: g = "floating",
                    altBoundary: h = !1,
                    padding: m = 0
                } = (0, i._3)(e, t), d = (0, i.nI)(m), p = f[h ? "floating" === g ? "reference" : "floating" : g], w = (0, i.B1)(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(p))) || n ? p : p.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(f.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s
                })), y = "floating" === g ? {
                    x: r,
                    y: l,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(f.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
                    x: 1,
                    y: 1
                }, b = (0, i.B1)(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: f,
                    rect: y,
                    offsetParent: v,
                    strategy: s
                }) : y);
                return {
                    top: (w.top - b.top + d.top) / x.y,
                    bottom: (b.bottom - w.bottom + d.bottom) / x.y,
                    left: (w.left - b.left + d.left) / x.x,
                    right: (b.right - w.right + d.right) / x.x
                }
            }
            let a = t => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        let {
                            x: n,
                            y: r,
                            placement: l,
                            rects: o,
                            platform: a,
                            elements: f,
                            middlewareData: s
                        } = e, {
                            element: c,
                            padding: u = 0
                        } = (0, i._3)(t, e) || {};
                        if (null == c) return {};
                        let g = (0, i.nI)(u),
                            h = {
                                x: n,
                                y: r
                            },
                            m = (0, i.Dz)(l),
                            d = (0, i.sq)(m),
                            p = await a.getDimensions(c),
                            w = "y" === m,
                            y = w ? "clientHeight" : "clientWidth",
                            v = o.reference[d] + o.reference[m] - h[m] - o.floating[d],
                            x = h[m] - o.reference[m],
                            b = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c)),
                            T = b ? b[y] : 0;
                        T && await (null == a.isElement ? void 0 : a.isElement(b)) || (T = f.floating[y] || o.floating[d]);
                        let R = T / 2 - p[d] / 2 - 1,
                            A = (0, i.jk)(g[w ? "top" : "left"], R),
                            E = (0, i.jk)(g[w ? "bottom" : "right"], R),
                            _ = T - p[d] - E,
                            k = T / 2 - p[d] / 2 + (v / 2 - x / 2),
                            C = (0, i.qE)(A, k, _),
                            D = !s.arrow && null != (0, i.Sg)(l) && k !== C && o.reference[d] / 2 - (k < A ? A : E) - p[d] / 2 < 0,
                            P = D ? k < A ? k - A : k - _ : 0;
                        return {
                            [m]: h[m] + P,
                            data: {
                                [m]: C,
                                centerOffset: k - C - P,
                                ...D && {
                                    alignmentOffset: P
                                }
                            },
                            reset: D
                        }
                    }
                }),
                f = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "autoPlacement",
                        options: t,
                        async fn(e) {
                            var n, r, l, a;
                            let {
                                rects: f,
                                middlewareData: s,
                                placement: c,
                                platform: u,
                                elements: g
                            } = e, {
                                crossAxis: h = !1,
                                alignment: m,
                                allowedPlacements: d = i.DD,
                                autoAlignment: p = !0,
                                ...w
                            } = (0, i._3)(t, e), y = void 0 !== m || d === i.DD ? ((a = m || null) ? [...d.filter(t => (0, i.Sg)(t) === a), ...d.filter(t => (0, i.Sg)(t) !== a)] : d.filter(t => (0, i.C0)(t) === t)).filter(t => !a || (0, i.Sg)(t) === a || !!p && (0, i.aD)(t) !== t) : d, v = await o(e, w), x = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0, b = y[x];
                            if (null == b) return {};
                            let T = (0, i.w7)(b, f, await (null == u.isRTL ? void 0 : u.isRTL(g.floating)));
                            if (c !== b) return {
                                reset: {
                                    placement: y[0]
                                }
                            };
                            let R = [v[(0, i.C0)(b)], v[T[0]], v[T[1]]],
                                A = [...(null == (r = s.autoPlacement) ? void 0 : r.overflows) || [], {
                                    placement: b,
                                    overflows: R
                                }],
                                E = y[x + 1];
                            if (E) return {
                                data: {
                                    index: x + 1,
                                    overflows: A
                                },
                                reset: {
                                    placement: E
                                }
                            };
                            let _ = A.map(t => {
                                    let e = (0, i.Sg)(t.placement);
                                    return [t.placement, e && h ? t.overflows.slice(0, 2).reduce((t, e) => t + e, 0) : t.overflows[0], t.overflows]
                                }).sort((t, e) => t[1] - e[1]),
                                k = (null == (l = _.filter(t => t[2].slice(0, (0, i.Sg)(t[0]) ? 2 : 3).every(t => t <= 0))[0]) ? void 0 : l[0]) || _[0][0];
                            return k !== c ? {
                                data: {
                                    index: x + 1,
                                    overflows: A
                                },
                                reset: {
                                    placement: k
                                }
                            } : {}
                        }
                    }
                },
                s = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "flip",
                        options: t,
                        async fn(e) {
                            var n, r, l, a, f;
                            let {
                                placement: s,
                                middlewareData: c,
                                rects: u,
                                initialPlacement: g,
                                platform: h,
                                elements: m
                            } = e, {
                                mainAxis: d = !0,
                                crossAxis: p = !0,
                                fallbackPlacements: w,
                                fallbackStrategy: y = "bestFit",
                                fallbackAxisSideDirection: v = "none",
                                flipAlignment: x = !0,
                                ...b
                            } = (0, i._3)(t, e);
                            if (null != (n = c.arrow) && n.alignmentOffset) return {};
                            let T = (0, i.C0)(s),
                                R = (0, i.C0)(g) === g,
                                A = await (null == h.isRTL ? void 0 : h.isRTL(m.floating)),
                                E = w || (R || !x ? [(0, i.bV)(g)] : (0, i.WJ)(g));
                            w || "none" === v || E.push(...(0, i.lP)(g, x, v, A));
                            let _ = [g, ...E],
                                k = await o(e, b),
                                C = [],
                                D = (null == (r = c.flip) ? void 0 : r.overflows) || [];
                            if (d && C.push(k[T]), p) {
                                let t = (0, i.w7)(s, u, A);
                                C.push(k[t[0]], k[t[1]])
                            }
                            if (D = [...D, {
                                    placement: s,
                                    overflows: C
                                }], !C.every(t => t <= 0)) {
                                let t = ((null == (l = c.flip) ? void 0 : l.index) || 0) + 1,
                                    e = _[t];
                                if (e) return {
                                    data: {
                                        index: t,
                                        overflows: D
                                    },
                                    reset: {
                                        placement: e
                                    }
                                };
                                let n = null == (a = D.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : a.placement;
                                if (!n) switch (y) {
                                    case "bestFit":
                                        {
                                            let t = null == (f = D.map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : f[0];t && (n = t);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = g
                                }
                                if (s !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function c(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function u(t) {
                return i.r_.some(e => t[e] >= 0)
            }
            let g = function(t) {
                return void 0 === t && (t = {}), {
                    name: "hide",
                    options: t,
                    async fn(e) {
                        let {
                            rects: n
                        } = e, {
                            strategy: r = "referenceHidden",
                            ...l
                        } = (0, i._3)(t, e);
                        switch (r) {
                            case "referenceHidden":
                                {
                                    let t = c(await o(e, { ...l,
                                        elementContext: "reference"
                                    }), n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: t,
                                            referenceHidden: u(t)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    let t = c(await o(e, { ...l,
                                        altBoundary: !0
                                    }), n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: t,
                                            escaped: u(t)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };

            function h(t) {
                let e = (0, i.jk)(...t.map(t => t.left)),
                    n = (0, i.jk)(...t.map(t => t.top));
                return {
                    x: e,
                    y: n,
                    width: (0, i.T9)(...t.map(t => t.right)) - e,
                    height: (0, i.T9)(...t.map(t => t.bottom)) - n
                }
            }
            let m = function(t) {
                return void 0 === t && (t = {}), {
                    name: "inline",
                    options: t,
                    async fn(e) {
                        let {
                            placement: n,
                            elements: r,
                            rects: l,
                            platform: o,
                            strategy: a
                        } = e, {
                            padding: f = 2,
                            x: s,
                            y: c
                        } = (0, i._3)(t, e), u = Array.from(await (null == o.getClientRects ? void 0 : o.getClientRects(r.reference)) || []), g = function(t) {
                            let e = t.slice().sort((t, e) => t.y - e.y),
                                n = [],
                                r = null;
                            for (let t = 0; t < e.length; t++) {
                                let i = e[t];
                                !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i
                            }
                            return n.map(t => (0, i.B1)(h(t)))
                        }(u), m = (0, i.B1)(h(u)), d = (0, i.nI)(f), p = await o.getElementRects({
                            reference: {
                                getBoundingClientRect: function() {
                                    if (2 === g.length && g[0].left > g[1].right && null != s && null != c) return g.find(t => s > t.left - d.left && s < t.right + d.right && c > t.top - d.top && c < t.bottom + d.bottom) || m;
                                    if (g.length >= 2) {
                                        if ("y" === (0, i.TV)(n)) {
                                            let t = g[0],
                                                e = g[g.length - 1],
                                                r = "top" === (0, i.C0)(n),
                                                l = t.top,
                                                o = e.bottom,
                                                a = r ? t.left : e.left,
                                                f = r ? t.right : e.right;
                                            return {
                                                top: l,
                                                bottom: o,
                                                left: a,
                                                right: f,
                                                width: f - a,
                                                height: o - l,
                                                x: a,
                                                y: l
                                            }
                                        }
                                        let t = "left" === (0, i.C0)(n),
                                            e = (0, i.T9)(...g.map(t => t.right)),
                                            r = (0, i.jk)(...g.map(t => t.left)),
                                            l = g.filter(n => t ? n.left === r : n.right === e),
                                            o = l[0].top,
                                            a = l[l.length - 1].bottom;
                                        return {
                                            top: o,
                                            bottom: a,
                                            left: r,
                                            right: e,
                                            width: e - r,
                                            height: a - o,
                                            x: r,
                                            y: o
                                        }
                                    }
                                    return m
                                }
                            },
                            floating: r.floating,
                            strategy: a
                        });
                        return l.reference.x !== p.reference.x || l.reference.y !== p.reference.y || l.reference.width !== p.reference.width || l.reference.height !== p.reference.height ? {
                            reset: {
                                rects: p
                            }
                        } : {}
                    }
                }
            };
            async function d(t, e) {
                let {
                    placement: n,
                    platform: r,
                    elements: l
                } = t, o = await (null == r.isRTL ? void 0 : r.isRTL(l.floating)), a = (0, i.C0)(n), f = (0, i.Sg)(n), s = "y" === (0, i.TV)(n), c = ["left", "top"].includes(a) ? -1 : 1, u = o && s ? -1 : 1, g = (0, i._3)(e, t), {
                    mainAxis: h,
                    crossAxis: m,
                    alignmentAxis: d
                } = "number" == typeof g ? {
                    mainAxis: g,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...g
                };
                return f && "number" == typeof d && (m = "end" === f ? - +d : d), s ? {
                    x: m * u,
                    y: h * c
                } : {
                    x: h * c,
                    y: m * u
                }
            }
            let p = function(t) {
                    return void 0 === t && (t = 0), {
                        name: "offset",
                        options: t,
                        async fn(e) {
                            var n, i;
                            let {
                                x: r,
                                y: l,
                                placement: o,
                                middlewareData: a
                            } = e, f = await d(e, t);
                            return o === (null == (n = a.offset) ? void 0 : n.placement) && null != (i = a.arrow) && i.alignmentOffset ? {} : {
                                x: r + f.x,
                                y: l + f.y,
                                data: { ...f,
                                    placement: o
                                }
                            }
                        }
                    }
                },
                w = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "shift",
                        options: t,
                        async fn(e) {
                            let {
                                x: n,
                                y: r,
                                placement: l
                            } = e, {
                                mainAxis: a = !0,
                                crossAxis: f = !1,
                                limiter: s = {
                                    fn: t => {
                                        let {
                                            x: e,
                                            y: n
                                        } = t;
                                        return {
                                            x: e,
                                            y: n
                                        }
                                    }
                                },
                                ...c
                            } = (0, i._3)(t, e), u = {
                                x: n,
                                y: r
                            }, g = await o(e, c), h = (0, i.TV)((0, i.C0)(l)), m = (0, i.PG)(h), d = u[m], p = u[h];
                            if (a) {
                                let t = "y" === m ? "top" : "left",
                                    e = "y" === m ? "bottom" : "right",
                                    n = d + g[t],
                                    r = d - g[e];
                                d = (0, i.qE)(n, d, r)
                            }
                            if (f) {
                                let t = "y" === h ? "top" : "left",
                                    e = "y" === h ? "bottom" : "right",
                                    n = p + g[t],
                                    r = p - g[e];
                                p = (0, i.qE)(n, p, r)
                            }
                            let w = s.fn({ ...e,
                                [m]: d,
                                [h]: p
                            });
                            return { ...w,
                                data: {
                                    x: w.x - n,
                                    y: w.y - r
                                }
                            }
                        }
                    }
                },
                y = function(t) {
                    return void 0 === t && (t = {}), {
                        options: t,
                        fn(e) {
                            let {
                                x: n,
                                y: r,
                                placement: l,
                                rects: o,
                                middlewareData: a
                            } = e, {
                                offset: f = 0,
                                mainAxis: s = !0,
                                crossAxis: c = !0
                            } = (0, i._3)(t, e), u = {
                                x: n,
                                y: r
                            }, g = (0, i.TV)(l), h = (0, i.PG)(g), m = u[h], d = u[g], p = (0, i._3)(f, e), w = "number" == typeof p ? {
                                mainAxis: p,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...p
                            };
                            if (s) {
                                let t = "y" === h ? "height" : "width",
                                    e = o.reference[h] - o.floating[t] + w.mainAxis,
                                    n = o.reference[h] + o.reference[t] - w.mainAxis;
                                m < e ? m = e : m > n && (m = n)
                            }
                            if (c) {
                                var y, v;
                                let t = "y" === h ? "width" : "height",
                                    e = ["top", "left"].includes((0, i.C0)(l)),
                                    n = o.reference[g] - o.floating[t] + (e && (null == (y = a.offset) ? void 0 : y[g]) || 0) + (e ? 0 : w.crossAxis),
                                    r = o.reference[g] + o.reference[t] + (e ? 0 : (null == (v = a.offset) ? void 0 : v[g]) || 0) - (e ? w.crossAxis : 0);
                                d < n ? d = n : d > r && (d = r)
                            }
                            return {
                                [h]: m,
                                [g]: d
                            }
                        }
                    }
                },
                v = function(t) {
                    return void 0 === t && (t = {}), {
                        name: "size",
                        options: t,
                        async fn(e) {
                            let n, r, {
                                    placement: l,
                                    rects: a,
                                    platform: f,
                                    elements: s
                                } = e,
                                {
                                    apply: c = () => {},
                                    ...u
                                } = (0, i._3)(t, e),
                                g = await o(e, u),
                                h = (0, i.C0)(l),
                                m = (0, i.Sg)(l),
                                d = "y" === (0, i.TV)(l),
                                {
                                    width: p,
                                    height: w
                                } = a.floating;
                            "top" === h || "bottom" === h ? (n = h, r = m === (await (null == f.isRTL ? void 0 : f.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (r = h, n = "end" === m ? "top" : "bottom");
                            let y = w - g[n],
                                v = p - g[r],
                                x = !e.middlewareData.shift,
                                b = y,
                                T = v;
                            if (d) {
                                let t = p - g.left - g.right;
                                T = m || x ? (0, i.jk)(v, t) : t
                            } else {
                                let t = w - g.top - g.bottom;
                                b = m || x ? (0, i.jk)(y, t) : t
                            }
                            if (x && !m) {
                                let t = (0, i.T9)(g.left, 0),
                                    e = (0, i.T9)(g.right, 0),
                                    n = (0, i.T9)(g.top, 0),
                                    r = (0, i.T9)(g.bottom, 0);
                                d ? T = p - 2 * (0 !== t || 0 !== e ? t + e : (0, i.T9)(g.left, g.right)) : b = w - 2 * (0 !== n || 0 !== r ? n + r : (0, i.T9)(g.top, g.bottom))
                            }
                            await c({ ...e,
                                availableWidth: T,
                                availableHeight: b
                            });
                            let R = await f.getDimensions(s.floating);
                            return p !== R.width || w !== R.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        }
    }
]);