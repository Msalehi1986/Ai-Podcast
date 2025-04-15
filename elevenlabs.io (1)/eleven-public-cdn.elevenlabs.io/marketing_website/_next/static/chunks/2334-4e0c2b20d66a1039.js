"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2334], {
        1351: (t, e, r) => {
            r.d(e, {
                I: () => n
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        1892: (t, e, r) => {
            r.d(e, {
                $: () => s,
                H: () => a
            });
            var n = r(29081);
            let a = {};

            function s(t) {
                for (let e in t) a[e] = t[e], (0, n.j)(e) && (a[e].isCSSVariable = !0)
            }
        },
        2337: (t, e, r) => {
            r.d(e, {
                S: () => n
            });
            let n = t => !!(t && t.getVelocity)
        },
        3361: (t, e, r) => {
            r.d(e, {
                Gt: () => a,
                PP: () => o,
                WG: () => s,
                uv: () => i
            });
            var n = r(47228);
            let {
                schedule: a,
                cancel: s,
                state: i,
                steps: o
            } = (0, r(79310).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.l, !0)
        },
        6668: (t, e, r) => {
            function n(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function a(t, e, r, a) {
                if ("function" == typeof e) {
                    let [s, i] = n(a);
                    e = e(void 0 !== r ? r : t.custom, s, i)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [s, i] = n(a);
                    e = e(void 0 !== r ? r : t.custom, s, i)
                }
                return e
            }
            r.d(e, {
                a: () => a
            })
        },
        15088: (t, e, r) => {
            r.d(e, {
                x: () => i
            });
            var n = r(2337),
                a = r(56394),
                s = r(91943);

            function i(t, e, r) {
                let i = (0, s.x)(t, e, r);
                for (let r in t)((0, n.S)(t[r]) || (0, n.S)(e[r])) && (i[-1 !== a.U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return i
            }
        },
        21093: (t, e, r) => {
            r.d(e, {
                e: () => n
            });

            function n(t, {
                style: e,
                vars: r
            }, n, a) {
                for (let s in Object.assign(t.style, e, a && a.getProjectionStyles(n)), r) t.style.setProperty(s, r[s])
            }
        },
        24670: (t, e, r) => {
            r.d(e, {
                e: () => n
            });
            let n = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
        },
        27188: (t, e, r) => {
            r.d(e, {
                z: () => s
            });
            var n = r(1892),
                a = r(56394);

            function s(t, {
                layout: e,
                layoutId: r
            }) {
                return a.f.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!n.H[t] || "opacity" === t)
            }
        },
        29081: (t, e, r) => {
            r.d(e, {
                j: () => a,
                p: () => i
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                a = n("--"),
                s = n("var(--"),
                i = t => !!s(t) && o.test(t.split("/*")[0].trim()),
                o = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        31181: (t, e, r) => {
            r.d(e, {
                W: () => n
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        32625: (t, e, r) => {
            r.d(e, {
                B: () => n
            });
            let n = "undefined" != typeof window
        },
        37412: (t, e, r) => {
            r.d(e, {
                N: () => n
            });
            let n = (0, r(97387).createContext)({})
        },
        39547: (t, e, r) => {
            r.d(e, {
                N: () => n
            });

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        44622: (t, e, r) => {
            r.d(e, {
                d: () => i
            });
            var n = r(1351),
                a = r(21093),
                s = r(24670);

            function i(t, e, r, i) {
                for (let r in (0, a.e)(t, e, void 0, i), e.attrs) t.setAttribute(s.e.has(r) ? r : (0, n.I)(r), e.attrs[r])
            }
        },
        45913: (t, e, r) => {
            r.d(e, {
                X4: () => s,
                ai: () => a,
                hs: () => i
            });
            var n = r(71049);
            let a = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...a,
                    transform: t => (0, n.q)(0, 1, t)
                },
                i = { ...a,
                    default: 1
                }
        },
        47228: (t, e, r) => {
            r.d(e, {
                l: () => n
            });
            let n = t => t
        },
        53234: (t, e, r) => {
            r.d(e, {
                Q: () => a
            });
            let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function a(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
        },
        56394: (t, e, r) => {
            r.d(e, {
                U: () => n,
                f: () => a
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                a = new Set(n)
        },
        56846: (t, e, r) => {
            r.d(e, {
                W: () => l
            });
            var n = r(45913),
                a = r(73100);
            let s = {
                    borderWidth: a.px,
                    borderTopWidth: a.px,
                    borderRightWidth: a.px,
                    borderBottomWidth: a.px,
                    borderLeftWidth: a.px,
                    borderRadius: a.px,
                    radius: a.px,
                    borderTopLeftRadius: a.px,
                    borderTopRightRadius: a.px,
                    borderBottomRightRadius: a.px,
                    borderBottomLeftRadius: a.px,
                    width: a.px,
                    maxWidth: a.px,
                    height: a.px,
                    maxHeight: a.px,
                    top: a.px,
                    right: a.px,
                    bottom: a.px,
                    left: a.px,
                    padding: a.px,
                    paddingTop: a.px,
                    paddingRight: a.px,
                    paddingBottom: a.px,
                    paddingLeft: a.px,
                    margin: a.px,
                    marginTop: a.px,
                    marginRight: a.px,
                    marginBottom: a.px,
                    marginLeft: a.px,
                    backgroundPositionX: a.px,
                    backgroundPositionY: a.px
                },
                i = {
                    rotate: a.uj,
                    rotateX: a.uj,
                    rotateY: a.uj,
                    rotateZ: a.uj,
                    scale: n.hs,
                    scaleX: n.hs,
                    scaleY: n.hs,
                    scaleZ: n.hs,
                    skew: a.uj,
                    skewX: a.uj,
                    skewY: a.uj,
                    distance: a.px,
                    translateX: a.px,
                    translateY: a.px,
                    translateZ: a.px,
                    x: a.px,
                    y: a.px,
                    z: a.px,
                    perspective: a.px,
                    transformPerspective: a.px,
                    opacity: n.X4,
                    originX: a.gQ,
                    originY: a.gQ,
                    originZ: a.px
                },
                o = { ...n.ai,
                    transform: Math.round
                },
                l = { ...s,
                    ...i,
                    zIndex: o,
                    size: a.px,
                    fillOpacity: n.X4,
                    strokeOpacity: n.X4,
                    numOctaves: o
                }
        },
        60139: (t, e, r) => {
            r.d(e, {
                u: () => s
            });
            var n = r(91004),
                a = r(2337);

            function s(t) {
                let e = (0, a.S)(t) ? t.get() : t;
                return (0, n.B)(e) ? e.toValue() : e
            }
        },
        61031: (t, e, r) => {
            r.d(e, {
                O: () => d
            });
            var n = r(29081);
            let a = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var s = r(56846),
                i = r(56394);
            let o = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                l = i.U.length;

            function d(t, e, r) {
                let {
                    style: d,
                    vars: p,
                    transformOrigin: u
                } = t, f = !1, c = !1;
                for (let t in e) {
                    let r = e[t];
                    if (i.f.has(t)) {
                        f = !0;
                        continue
                    }
                    if ((0, n.j)(t)) {
                        p[t] = r;
                        continue
                    } {
                        let e = a(r, s.W[t]);
                        t.startsWith("origin") ? (c = !0, u[t] = e) : d[t] = e
                    }
                }
                if (!e.transform && (f || r ? d.transform = function(t, e, r) {
                        let n = "",
                            d = !0;
                        for (let p = 0; p < l; p++) {
                            let l = i.U[p],
                                u = t[l];
                            if (void 0 === u) continue;
                            let f = !0;
                            if (!(f = "number" == typeof u ? u === +!!l.startsWith("scale") : 0 === parseFloat(u)) || r) {
                                let t = a(u, s.W[l]);
                                if (!f) {
                                    d = !1;
                                    let e = o[l] || l;
                                    n += `${e}(${t}) `
                                }
                                r && (e[l] = t)
                            }
                        }
                        return n = n.trim(), r ? n = r(e, d ? "" : n) : d && (n = "none"), n
                    }(e, t.transform, r) : d.transform && (d.transform = "none")), c) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = u;
                    d.transformOrigin = `${t} ${e} ${r}`
                }
            }
        },
        62302: (t, e, r) => {
            r.d(e, {
                t: () => n
            });
            let n = (0, r(97387).createContext)(null)
        },
        65565: (t, e, r) => {
            r.d(e, {
                k: () => n
            });
            let {
                schedule: n,
                cancel: a
            } = (0, r(79310).I)(queueMicrotask, !1)
        },
        66021: (t, e, r) => {
            r.d(e, {
                Q: () => n
            });
            let n = {
                value: null,
                addProjectionMetrics: null
            }
        },
        66457: (t, e, r) => {
            r.d(e, {
                B: () => l
            });
            var n = r(61031),
                a = r(73100);
            let s = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                i = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function o(t, e, r) {
                return "string" == typeof t ? t : a.px.transform(e + r * t)
            }

            function l(t, {
                attrX: e,
                attrY: r,
                attrScale: l,
                originX: d,
                originY: p,
                pathLength: u,
                pathSpacing: f = 1,
                pathOffset: c = 0,
                ...m
            }, g, h) {
                if ((0, n.O)(t, m, h), g) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: x,
                    style: v,
                    dimensions: y
                } = t;
                x.transform && (y && (v.transform = x.transform), delete x.transform), y && (void 0 !== d || void 0 !== p || v.transform) && (v.transformOrigin = function(t, e, r) {
                    let n = o(e, t.x, t.width),
                        a = o(r, t.y, t.height);
                    return `${n} ${a}`
                }(y, void 0 !== d ? d : .5, void 0 !== p ? p : .5)), void 0 !== e && (x.x = e), void 0 !== r && (x.y = r), void 0 !== l && (x.scale = l), void 0 !== u && function(t, e, r = 1, n = 0, o = !0) {
                    t.pathLength = 1;
                    let l = o ? s : i;
                    t[l.offset] = a.px.transform(-n);
                    let d = a.px.transform(e),
                        p = a.px.transform(r);
                    t[l.array] = `${d} ${p}`
                }(x, u, f, c, !1)
            }
        },
        71049: (t, e, r) => {
            r.d(e, {
                q: () => n
            });
            let n = (t, e, r) => r > e ? e : r < t ? t : r
        },
        73100: (t, e, r) => {
            r.d(e, {
                KN: () => s,
                gQ: () => d,
                px: () => i,
                uj: () => a,
                vh: () => o,
                vw: () => l
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                a = n("deg"),
                s = n("%"),
                i = n("px"),
                o = n("vh"),
                l = n("vw"),
                d = { ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        73104: (t, e, r) => {
            r.d(e, {
                X: () => n
            });

            function n(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        76032: (t, e, r) => {
            r.d(e, {
                L: () => n
            });
            let n = (0, r(97387).createContext)({})
        },
        76456: (t, e, r) => {
            r.d(e, {
                H: () => n
            });

            function n(t, e) {
                try {
                    e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (t) {
                    e.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
        },
        79310: (t, e, r) => {
            r.d(e, {
                I: () => i
            });
            var n = r(31181);
            let a = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
            var s = r(66021);

            function i(t, e) {
                let r = !1,
                    i = !0,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = () => r = !0,
                    d = a.reduce((t, r) => (t[r] = function(t, e) {
                        let r = new Set,
                            n = new Set,
                            a = !1,
                            i = !1,
                            o = new WeakSet,
                            l = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            d = 0;

                        function p(e) {
                            o.has(e) && (u.schedule(e), t()), d++, e(l)
                        }
                        let u = {
                            schedule: (t, e = !1, s = !1) => {
                                let i = s && a ? r : n;
                                return e && o.add(t), i.has(t) || i.add(t), t
                            },
                            cancel: t => {
                                n.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (l = t, a) {
                                    i = !0;
                                    return
                                }
                                a = !0, [r, n] = [n, r], r.forEach(p), e && s.Q.value && s.Q.value.frameloop[e].push(d), d = 0, r.clear(), a = !1, i && (i = !1, u.process(t))
                            }
                        };
                        return u
                    }(l, e ? r : void 0), t), {}),
                    {
                        read: p,
                        resolveKeyframes: u,
                        update: f,
                        preRender: c,
                        render: m,
                        postRender: g
                    } = d,
                    h = () => {
                        let a = n.W.useManualTiming ? o.timestamp : performance.now();
                        r = !1, n.W.useManualTiming || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(a - o.timestamp, 40), 1)), o.timestamp = a, o.isProcessing = !0, p.process(o), u.process(o), f.process(o), c.process(o), m.process(o), g.process(o), o.isProcessing = !1, r && e && (i = !1, t(h))
                    },
                    x = () => {
                        r = !0, i = !0, o.isProcessing || t(h)
                    };
                return {
                    schedule: a.reduce((t, e) => {
                        let n = d[e];
                        return t[e] = (t, e = !1, a = !1) => (r || x(), n.schedule(t, e, a)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < a.length; e++) d[a[e]].cancel(t)
                    },
                    state: o,
                    steps: d
                }
            }
        },
        79542: (t, e, r) => {
            r.d(e, {
                w: () => n
            });

            function n(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        83748: (t, e, r) => {
            r.d(e, {
                O: () => o,
                e: () => i
            });
            var n = r(39547),
                a = r(79542),
                s = r(96965);

            function i(t) {
                return (0, n.N)(t.animate) || s._.some(e => (0, a.w)(t[e]))
            }

            function o(t) {
                return !!(i(t) || t.variants)
            }
        },
        85520: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        89273: (t, e, r) => {
            r.d(e, {
                p: () => n
            });
            let n = t => Array.isArray(t)
        },
        91004: (t, e, r) => {
            r.d(e, {
                B: () => a,
                K: () => s
            });
            var n = r(89273);
            let a = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                s = t => (0, n.p)(t) ? t[t.length - 1] || 0 : t
        },
        91943: (t, e, r) => {
            r.d(e, {
                x: () => s
            });
            var n = r(27188),
                a = r(2337);

            function s(t, e, r) {
                var s;
                let {
                    style: i
                } = t, o = {};
                for (let l in i)((0, a.S)(i[l]) || e.style && (0, a.S)(e.style[l]) || (0, n.z)(l, t) || (null === (s = null == r ? void 0 : r.getValue(l)) || void 0 === s ? void 0 : s.liveStyle) !== void 0) && (o[l] = i[l]);
                return o
            }
        },
        92489: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = "data-" + (0, r(1351).I)("framerAppearId")
        },
        96965: (t, e, r) => {
            r.d(e, {
                U: () => n,
                _: () => a
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                a = ["initial", ...n]
        }
    }
]);