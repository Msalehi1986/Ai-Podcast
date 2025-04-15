"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [163], {
        66349: (e, t, n) => {
            n.d(t, {
                B8: () => ep,
                C1: () => eh,
                JD: () => U,
                KS: () => L,
                LM: () => eC,
                N_: () => eg,
                UC: () => ex,
                Ws: () => W,
                bL: () => ev,
                l9: () => ew,
                q7: () => em
            });
            var r = n(97387),
                o = n(72042),
                i = n(17439),
                a = n(51113),
                u = n(78273),
                s = n(58170),
                l = n(93371),
                c = n(42912),
                d = n(53591),
                f = n(90758),
                v = n(31151),
                p = n(26065),
                m = n(63222),
                w = n(96552),
                g = n(57310),
                h = n(81237),
                x = n(4155),
                C = "NavigationMenu",
                [R, b, E] = (0, v.N)(C),
                [y, N, j] = (0, v.N)(C),
                [T, M] = (0, i.A)(C, [E, j]),
                [I, k] = T(C),
                [P, D] = T(C),
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        onValueChange: i,
                        defaultValue: a,
                        delayDuration: d = 200,
                        skipDelayDuration: f = 300,
                        orientation: v = "horizontal",
                        dir: p,
                        ...m
                    } = e, [w, g] = r.useState(null), h = (0, l.s)(t, e => g(e)), C = (0, c.jH)(p), R = r.useRef(0), b = r.useRef(0), E = r.useRef(0), [y, N] = r.useState(!0), [j = "", T] = (0, s.i)({
                        prop: o,
                        onChange: e => {
                            let t = f > 0;
                            "" !== e ? (window.clearTimeout(E.current), t && N(!1)) : (window.clearTimeout(E.current), E.current = window.setTimeout(() => N(!0), f)), null == i || i(e)
                        },
                        defaultProp: a
                    }), M = r.useCallback(() => {
                        window.clearTimeout(b.current), b.current = window.setTimeout(() => T(""), 150)
                    }, [T]), I = r.useCallback(e => {
                        window.clearTimeout(b.current), T(e)
                    }, [T]), k = r.useCallback(e => {
                        j === e ? window.clearTimeout(b.current) : R.current = window.setTimeout(() => {
                            window.clearTimeout(b.current), T(e)
                        }, d)
                    }, [j, T, d]);
                    return r.useEffect(() => () => {
                        window.clearTimeout(R.current), window.clearTimeout(b.current), window.clearTimeout(E.current)
                    }, []), (0, x.jsx)(A, {
                        scope: n,
                        isRootMenu: !0,
                        value: j,
                        dir: C,
                        orientation: v,
                        rootNavigationMenu: w,
                        onTriggerEnter: e => {
                            window.clearTimeout(R.current), y ? k(e) : I(e)
                        },
                        onTriggerLeave: () => {
                            window.clearTimeout(R.current), M()
                        },
                        onContentEnter: () => window.clearTimeout(b.current),
                        onContentLeave: M,
                        onItemSelect: e => {
                            T(t => t === e ? "" : e)
                        },
                        onItemDismiss: () => T(""),
                        children: (0, x.jsx)(u.sG.nav, {
                            "aria-label": "Main",
                            "data-orientation": v,
                            dir: C,
                            ...m,
                            ref: h
                        })
                    })
                });
            L.displayName = C;
            var _ = "NavigationMenuSub";
            r.forwardRef((e, t) => {
                let {
                    __scopeNavigationMenu: n,
                    value: r,
                    onValueChange: o,
                    defaultValue: i,
                    orientation: a = "horizontal",
                    ...l
                } = e, c = k(_, n), [d = "", f] = (0, s.i)({
                    prop: r,
                    onChange: o,
                    defaultProp: i
                });
                return (0, x.jsx)(A, {
                    scope: n,
                    isRootMenu: !1,
                    value: d,
                    dir: c.dir,
                    orientation: a,
                    rootNavigationMenu: c.rootNavigationMenu,
                    onTriggerEnter: e => f(e),
                    onItemSelect: e => f(e),
                    onItemDismiss: () => f(""),
                    children: (0, x.jsx)(u.sG.div, {
                        "data-orientation": a,
                        ...l,
                        ref: t
                    })
                })
            }).displayName = _;
            var A = e => {
                    let {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: o,
                        dir: i,
                        orientation: a,
                        children: u,
                        value: s,
                        onItemSelect: l,
                        onItemDismiss: c,
                        onTriggerEnter: d,
                        onTriggerLeave: v,
                        onContentEnter: p,
                        onContentLeave: w
                    } = e, [h, C] = r.useState(null), [b, E] = r.useState(new Map), [y, N] = r.useState(null);
                    return (0, x.jsx)(I, {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: o,
                        value: s,
                        previousValue: (0, m.Z)(s),
                        baseId: (0, f.B)(),
                        dir: i,
                        orientation: a,
                        viewport: h,
                        onViewportChange: C,
                        indicatorTrack: y,
                        onIndicatorTrackChange: N,
                        onTriggerEnter: (0, g.c)(d),
                        onTriggerLeave: (0, g.c)(v),
                        onContentEnter: (0, g.c)(p),
                        onContentLeave: (0, g.c)(w),
                        onItemSelect: (0, g.c)(l),
                        onItemDismiss: (0, g.c)(c),
                        onViewportContentChange: r.useCallback((e, t) => {
                            E(n => (n.set(e, t), new Map(n)))
                        }, []),
                        onViewportContentRemove: r.useCallback(e => {
                            E(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
                        }, []),
                        children: (0, x.jsx)(R.Provider, {
                            scope: t,
                            children: (0, x.jsx)(P, {
                                scope: t,
                                items: b,
                                children: u
                            })
                        })
                    })
                },
                F = "NavigationMenuList",
                S = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = k(F, n), i = (0, x.jsx)(u.sG.ul, {
                        "data-orientation": o.orientation,
                        ...r,
                        ref: t
                    });
                    return (0, x.jsx)(u.sG.div, {
                        style: {
                            position: "relative"
                        },
                        ref: o.onIndicatorTrackChange,
                        children: (0, x.jsx)(R.Slot, {
                            scope: n,
                            children: o.isRootMenu ? (0, x.jsx)(er, {
                                asChild: !0,
                                children: i
                            }) : i
                        })
                    })
                });
            S.displayName = F;
            var O = "NavigationMenuItem",
                [K, G] = T(O),
                U = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        ...i
                    } = e, a = (0, f.B)(), s = r.useRef(null), l = r.useRef(null), c = r.useRef(null), d = r.useRef(() => {}), v = r.useRef(!1), p = r.useCallback(function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start";
                        if (s.current) {
                            d.current();
                            let t = ea(s.current);
                            t.length && eu("start" === e ? t : t.reverse())
                        }
                    }, []), m = r.useCallback(() => {
                        if (s.current) {
                            let e = ea(s.current);
                            e.length && (d.current = function(e) {
                                return e.forEach(e => {
                                    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                                }), () => {
                                    e.forEach(e => {
                                        let t = e.dataset.tabindex;
                                        e.setAttribute("tabindex", t)
                                    })
                                }
                            }(e))
                        }
                    }, []);
                    return (0, x.jsx)(K, {
                        scope: n,
                        value: o || a || "LEGACY_REACT_AUTO_VALUE",
                        triggerRef: l,
                        contentRef: s,
                        focusProxyRef: c,
                        wasEscapeCloseRef: v,
                        onEntryKeyDown: p,
                        onFocusProxyEnter: p,
                        onRootContentClose: m,
                        onContentFocusOutside: m,
                        children: (0, x.jsx)(u.sG.li, { ...i,
                            ref: t
                        })
                    })
                });
            U.displayName = O;
            var z = "NavigationMenuTrigger",
                V = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        disabled: o,
                        ...i
                    } = e, s = k(z, e.__scopeNavigationMenu), c = G(z, e.__scopeNavigationMenu), d = r.useRef(null), f = (0, l.s)(d, c.triggerRef, t), v = ec(s.baseId, c.value), p = ed(s.baseId, c.value), m = r.useRef(!1), w = r.useRef(!1), g = c.value === s.value;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(R.ItemSlot, {
                            scope: n,
                            value: c.value,
                            children: (0, x.jsx)(ei, {
                                asChild: !0,
                                children: (0, x.jsx)(u.sG.button, {
                                    id: v,
                                    disabled: o,
                                    "data-disabled": o ? "" : void 0,
                                    "data-state": el(g),
                                    "aria-expanded": g,
                                    "aria-controls": p,
                                    ...i,
                                    ref: f,
                                    onPointerEnter: (0, a.m)(e.onPointerEnter, () => {
                                        w.current = !1, c.wasEscapeCloseRef.current = !1
                                    }),
                                    onPointerMove: (0, a.m)(e.onPointerMove, ef(() => {
                                        o || w.current || c.wasEscapeCloseRef.current || m.current || (s.onTriggerEnter(c.value), m.current = !0)
                                    })),
                                    onPointerLeave: (0, a.m)(e.onPointerLeave, ef(() => {
                                        o || (s.onTriggerLeave(), m.current = !1)
                                    })),
                                    onClick: (0, a.m)(e.onClick, () => {
                                        s.onItemSelect(c.value), w.current = g
                                    }),
                                    onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                        let t = {
                                            horizontal: "ArrowDown",
                                            vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight"
                                        }[s.orientation];
                                        g && e.key === t && (c.onEntryKeyDown(), e.preventDefault())
                                    })
                                })
                            })
                        }), g && (0, x.jsxs)(x.Fragment, {
                            children: [(0, x.jsx)(h.b, {
                                "aria-hidden": !0,
                                tabIndex: 0,
                                ref: c.focusProxyRef,
                                onFocus: e => {
                                    let t = c.contentRef.current,
                                        n = e.relatedTarget,
                                        r = n === d.current,
                                        o = null == t ? void 0 : t.contains(n);
                                    (r || !o) && c.onFocusProxyEnter(r ? "start" : "end")
                                }
                            }), s.viewport && (0, x.jsx)("span", {
                                "aria-owns": p
                            })]
                        })]
                    })
                });
            V.displayName = z;
            var B = "navigationMenu.linkSelect",
                W = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        active: r,
                        onSelect: o,
                        ...i
                    } = e;
                    return (0, x.jsx)(ei, {
                        asChild: !0,
                        children: (0, x.jsx)(u.sG.a, {
                            "data-active": r ? "" : void 0,
                            "aria-current": r ? "page" : void 0,
                            ...i,
                            ref: t,
                            onClick: (0, a.m)(e.onClick, e => {
                                let t = e.target,
                                    n = new CustomEvent(B, {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                if (t.addEventListener(B, e => null == o ? void 0 : o(e), {
                                        once: !0
                                    }), (0, u.hO)(t, n), !n.defaultPrevented && !e.metaKey) {
                                    let e = new CustomEvent(Q, {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                    (0, u.hO)(t, e)
                                }
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            W.displayName = "NavigationMenuLink";
            var H = "NavigationMenuIndicator",
                q = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, i = k(H, e.__scopeNavigationMenu), a = !!i.value;
                    return i.indicatorTrack ? o.createPortal((0, x.jsx)(d.C, {
                        present: n || a,
                        children: (0, x.jsx)(Y, { ...r,
                            ref: t
                        })
                    }), i.indicatorTrack) : null
                });
            q.displayName = H;
            var Y = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...o
                    } = e, i = k(H, n), a = b(n), [s, l] = r.useState(null), [c, d] = r.useState(null), f = "horizontal" === i.orientation, v = !!i.value;
                    r.useEffect(() => {
                        var e;
                        let t = null === (e = a().find(e => e.value === i.value)) || void 0 === e ? void 0 : e.ref.current;
                        t && l(t)
                    }, [a, i.value]);
                    let p = () => {
                        s && d({
                            size: f ? s.offsetWidth : s.offsetHeight,
                            offset: f ? s.offsetLeft : s.offsetTop
                        })
                    };
                    return es(s, p), es(i.indicatorTrack, p), c ? (0, x.jsx)(u.sG.div, {
                        "aria-hidden": !0,
                        "data-state": v ? "visible" : "hidden",
                        "data-orientation": i.orientation,
                        ...o,
                        ref: t,
                        style: {
                            position: "absolute",
                            ...f ? {
                                left: 0,
                                width: c.size + "px",
                                transform: "translateX(".concat(c.offset, "px)")
                            } : {
                                top: 0,
                                height: c.size + "px",
                                transform: "translateY(".concat(c.offset, "px)")
                            },
                            ...o.style
                        }
                    }) : null
                }),
                J = "NavigationMenuContent",
                X = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, o = k(J, e.__scopeNavigationMenu), i = G(J, e.__scopeNavigationMenu), u = (0, l.s)(i.contentRef, t), s = i.value === o.value, c = {
                        value: i.value,
                        triggerRef: i.triggerRef,
                        focusProxyRef: i.focusProxyRef,
                        wasEscapeCloseRef: i.wasEscapeCloseRef,
                        onContentFocusOutside: i.onContentFocusOutside,
                        onRootContentClose: i.onRootContentClose,
                        ...r
                    };
                    return o.viewport ? (0, x.jsx)(Z, {
                        forceMount: n,
                        ...c,
                        ref: u
                    }) : (0, x.jsx)(d.C, {
                        present: n || s,
                        children: (0, x.jsx)($, {
                            "data-state": el(s),
                            ...c,
                            ref: u,
                            onPointerEnter: (0, a.m)(e.onPointerEnter, o.onContentEnter),
                            onPointerLeave: (0, a.m)(e.onPointerLeave, ef(o.onContentLeave)),
                            style: {
                                pointerEvents: !s && o.isRootMenu ? "none" : void 0,
                                ...c.style
                            }
                        })
                    })
                });
            X.displayName = J;
            var Z = r.forwardRef((e, t) => {
                    let {
                        onViewportContentChange: n,
                        onViewportContentRemove: r
                    } = k(J, e.__scopeNavigationMenu);
                    return (0, w.N)(() => {
                        n(e.value, {
                            ref: t,
                            ...e
                        })
                    }, [e, t, n]), (0, w.N)(() => () => r(e.value), [e.value, r]), null
                }),
                Q = "navigationMenu.rootContentDismiss",
                $ = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        triggerRef: i,
                        focusProxyRef: u,
                        wasEscapeCloseRef: s,
                        onRootContentClose: c,
                        onContentFocusOutside: d,
                        ...f
                    } = e, v = k(J, n), m = r.useRef(null), w = (0, l.s)(m, t), g = ec(v.baseId, o), h = ed(v.baseId, o), C = b(n), R = r.useRef(null), {
                        onItemDismiss: E
                    } = v;
                    r.useEffect(() => {
                        let e = m.current;
                        if (v.isRootMenu && e) {
                            let t = () => {
                                var t;
                                E(), c(), e.contains(document.activeElement) && (null === (t = i.current) || void 0 === t || t.focus())
                            };
                            return e.addEventListener(Q, t), () => e.removeEventListener(Q, t)
                        }
                    }, [v.isRootMenu, e.value, i, E, c]);
                    let y = r.useMemo(() => {
                        let e = C().map(e => e.value);
                        "rtl" === v.dir && e.reverse();
                        let t = e.indexOf(v.value),
                            n = e.indexOf(v.previousValue),
                            r = o === v.value,
                            i = n === e.indexOf(o);
                        if (!r && !i) return R.current;
                        let a = (() => {
                            if (t !== n) {
                                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                                if (i && -1 !== t) return t > n ? "to-start" : "to-end"
                            }
                            return null
                        })();
                        return R.current = a, a
                    }, [v.previousValue, v.value, v.dir, C, o]);
                    return (0, x.jsx)(er, {
                        asChild: !0,
                        children: (0, x.jsx)(p.qW, {
                            id: h,
                            "aria-labelledby": g,
                            "data-motion": y,
                            "data-orientation": v.orientation,
                            ...f,
                            ref: w,
                            disableOutsidePointerEvents: !1,
                            onDismiss: () => {
                                var e;
                                let t = new Event(Q, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                null === (e = m.current) || void 0 === e || e.dispatchEvent(t)
                            },
                            onFocusOutside: (0, a.m)(e.onFocusOutside, e => {
                                var t;
                                d();
                                let n = e.target;
                                (null === (t = v.rootNavigationMenu) || void 0 === t ? void 0 : t.contains(n)) && e.preventDefault()
                            }),
                            onPointerDownOutside: (0, a.m)(e.onPointerDownOutside, e => {
                                var t;
                                let n = e.target,
                                    r = C().some(e => {
                                        var t;
                                        return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n)
                                    }),
                                    o = v.isRootMenu && (null === (t = v.viewport) || void 0 === t ? void 0 : t.contains(n));
                                (r || o || !v.isRootMenu) && e.preventDefault()
                            }),
                            onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                let t = e.altKey || e.ctrlKey || e.metaKey;
                                if ("Tab" === e.key && !t) {
                                    let t = ea(e.currentTarget),
                                        r = document.activeElement,
                                        o = t.findIndex(e => e === r);
                                    if (eu(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length))) e.preventDefault();
                                    else {
                                        var n;
                                        null === (n = u.current) || void 0 === n || n.focus()
                                    }
                                }
                            }),
                            onEscapeKeyDown: (0, a.m)(e.onEscapeKeyDown, e => {
                                s.current = !0
                            })
                        })
                    })
                }),
                ee = "NavigationMenuViewport",
                et = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, o = !!k(ee, e.__scopeNavigationMenu).value;
                    return (0, x.jsx)(d.C, {
                        present: n || o,
                        children: (0, x.jsx)(en, { ...r,
                            ref: t
                        })
                    })
                });
            et.displayName = ee;
            var en = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        children: o,
                        ...i
                    } = e, s = k(ee, n), c = (0, l.s)(t, s.onViewportChange), f = D(J, e.__scopeNavigationMenu), [v, p] = r.useState(null), [m, w] = r.useState(null), g = v ? (null == v ? void 0 : v.width) + "px" : void 0, h = v ? (null == v ? void 0 : v.height) + "px" : void 0, C = !!s.value, R = C ? s.value : s.previousValue;
                    return es(m, () => {
                        m && p({
                            width: m.offsetWidth,
                            height: m.offsetHeight
                        })
                    }), (0, x.jsx)(u.sG.div, {
                        "data-state": el(C),
                        "data-orientation": s.orientation,
                        ...i,
                        ref: c,
                        style: {
                            pointerEvents: !C && s.isRootMenu ? "none" : void 0,
                            "--radix-navigation-menu-viewport-width": g,
                            "--radix-navigation-menu-viewport-height": h,
                            ...i.style
                        },
                        onPointerEnter: (0, a.m)(e.onPointerEnter, s.onContentEnter),
                        onPointerLeave: (0, a.m)(e.onPointerLeave, ef(s.onContentLeave)),
                        children: Array.from(f.items).map(e => {
                            let [t, {
                                ref: n,
                                forceMount: r,
                                ...o
                            }] = e, i = R === t;
                            return (0, x.jsx)(d.C, {
                                present: r || i,
                                children: (0, x.jsx)($, { ...o,
                                    ref: (0, l.t)(n, e => {
                                        i && e && w(e)
                                    })
                                })
                            }, t)
                        })
                    })
                }),
                er = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = k("FocusGroup", n);
                    return (0, x.jsx)(y.Provider, {
                        scope: n,
                        children: (0, x.jsx)(y.Slot, {
                            scope: n,
                            children: (0, x.jsx)(u.sG.div, {
                                dir: o.dir,
                                ...r,
                                ref: t
                            })
                        })
                    })
                }),
                eo = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
                ei = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = N(n), i = k("FocusGroupItem", n);
                    return (0, x.jsx)(y.ItemSlot, {
                        scope: n,
                        children: (0, x.jsx)(u.sG.button, { ...r,
                            ref: t,
                            onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                if (["Home", "End", ...eo].includes(e.key)) {
                                    let t = o().map(e => e.ref.current);
                                    if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), eo.includes(e.key)) {
                                        let n = t.indexOf(e.currentTarget);
                                        t = t.slice(n + 1)
                                    }
                                    setTimeout(() => eu(t)), e.preventDefault()
                                }
                            })
                        })
                    })
                });

            function ea(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function eu(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }

            function es(e, t) {
                let n = (0, g.c)(t);
                (0, w.N)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                        });
                        return r.observe(e), () => {
                            window.cancelAnimationFrame(t), r.unobserve(e)
                        }
                    }
                }, [e, n])
            }

            function el(e) {
                return e ? "open" : "closed"
            }

            function ec(e, t) {
                return "".concat(e, "-trigger-").concat(t)
            }

            function ed(e, t) {
                return "".concat(e, "-content-").concat(t)
            }

            function ef(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            var ev = L,
                ep = S,
                em = U,
                ew = V,
                eg = W,
                eh = q,
                ex = X,
                eC = et
        },
        71327: (e, t, n) => {
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }
            n.d(t, {
                A: () => o
            });
            var o = function e(t, n) {
                function o(e, o, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(i = r({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var a = "";
                        for (var u in i) i[u] && (a += "; " + u, !0 !== i[u] && (a += "=" + i[u].split(";")[0]));
                        return document.cookie = e + "=" + t.write(o, e) + a
                    }
                }
                return Object.create({
                    set: o,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, o = 0; o < n.length; o++) {
                                var i = n[o].split("="),
                                    a = i.slice(1).join("=");
                                try {
                                    var u = decodeURIComponent(i[0]);
                                    if (r[u] = t.read(a, u), e === u) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, t) {
                        o(e, "", r({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, r({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(r({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        }
    }
]);