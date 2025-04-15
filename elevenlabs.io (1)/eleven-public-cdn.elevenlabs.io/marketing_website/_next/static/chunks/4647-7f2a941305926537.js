"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4647], {
        17439: (e, t, n) => {
            n.d(t, {
                A: () => a,
                q: () => i
            });
            var r = n(97387),
                o = n(4155);

            function i(e, t) {
                let n = r.createContext(t),
                    i = e => {
                        let {
                            children: t,
                            ...i
                        } = e, a = r.useMemo(() => i, Object.values(i));
                        return (0, o.jsx)(n.Provider, {
                            value: a,
                            children: t
                        })
                    };
                return i.displayName = e + "Provider", [i, function(o) {
                    let i = r.useContext(n);
                    if (i) return i;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function a(e, t = []) {
                let n = [],
                    i = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n ? .[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return i.scopeName = e, [function(t, i) {
                    let a = r.createContext(i),
                        u = n.length;
                    n = [...n, i];
                    let l = t => {
                        let {
                            scope: n,
                            children: i,
                            ...l
                        } = t, c = n ? .[e] ? .[u] || a, s = r.useMemo(() => l, Object.values(l));
                        return (0, o.jsx)(c.Provider, {
                            value: s,
                            children: i
                        })
                    };
                    return l.displayName = t + "Provider", [l, function(n, o) {
                        let l = o ? .[e] ? .[u] || a,
                            c = r.useContext(l);
                        if (c) return c;
                        if (void 0 !== i) return i;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(i, ...t)]
            }
        },
        26065: (e, t, n) => {
            n.d(t, {
                qW: () => f
            });
            var r, o = n(97387),
                i = n(51113),
                a = n(78273),
                u = n(93371),
                l = n(57310),
                c = n(4155),
                s = "dismissableLayer.update",
                d = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = o.forwardRef((e, t) => {
                    var n, f;
                    let {
                        disableOutsidePointerEvents: m = !1,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: g,
                        onFocusOutside: y,
                        onInteractOutside: b,
                        onDismiss: E,
                        ...w
                    } = e, C = o.useContext(d), [N, R] = o.useState(null), x = null !== (f = null == N ? void 0 : N.ownerDocument) && void 0 !== f ? f : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, P] = o.useState({}), O = (0, u.s)(t, e => R(e)), S = Array.from(C.layers), [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1), D = S.indexOf(A), M = N ? S.indexOf(N) : -1, j = C.layersWithOutsidePointerEventsDisabled.size > 0, T = M >= D, k = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, l.c)(e),
                            i = o.useRef(!1),
                            a = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !i.current) {
                                        let t = function() {
                                                p("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", a.current);
                                    i.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => i.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...C.branches].some(e => e.contains(t));
                        !T || n || (null == g || g(e), null == b || b(e), e.defaultPrevented || null == E || E())
                    }, x), L = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, l.c)(e),
                            i = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !i.current && p("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => i.current = !0,
                            onBlurCapture: () => i.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...C.branches].some(e => e.contains(t)) || (null == y || y(e), null == b || b(e), e.defaultPrevented || null == E || E())
                    }, x);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, l.c)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        M === C.layers.size - 1 && (null == h || h(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
                    }, x), o.useEffect(() => {
                        if (N) return m && (0 === C.layersWithOutsidePointerEventsDisabled.size && (r = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), C.layersWithOutsidePointerEventsDisabled.add(N)), C.layers.add(N), v(), () => {
                            m && 1 === C.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = r)
                        }
                    }, [N, x, m, C]), o.useEffect(() => () => {
                        N && (C.layers.delete(N), C.layersWithOutsidePointerEventsDisabled.delete(N), v())
                    }, [N, C]), o.useEffect(() => {
                        let e = () => P({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, c.jsx)(a.sG.div, { ...w,
                        ref: O,
                        style: {
                            pointerEvents: j ? T ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.m)(e.onFocusCapture, L.onFocusCapture),
                        onBlurCapture: (0, i.m)(e.onBlurCapture, L.onBlurCapture),
                        onPointerDownCapture: (0, i.m)(e.onPointerDownCapture, k.onPointerDownCapture)
                    })
                });

            function v() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function p(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, u = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, a.hO)(i, u) : i.dispatchEvent(u)
            }
            f.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(d),
                    r = o.useRef(null),
                    i = (0, u.s)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(a.sG.div, { ...e,
                    ref: i
                })
            }).displayName = "DismissableLayerBranch"
        },
        31151: (e, t, n) => {
            n.d(t, {
                N: () => l
            });
            var r = n(97387),
                o = n(17439),
                i = n(93371),
                a = n(40774),
                u = n(4155);

            function l(e) {
                let t = e + "CollectionProvider",
                    [n, l] = (0, o.A)(t),
                    [c, s] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), i = r.useRef(new Map).current;
                        return (0, u.jsx)(c, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o,
                            children: n
                        })
                    };
                d.displayName = t;
                let f = e + "CollectionSlot",
                    v = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, o = s(f, n), l = (0, i.s)(t, o.collectionRef);
                        return (0, u.jsx)(a.DX, {
                            ref: l,
                            children: r
                        })
                    });
                v.displayName = f;
                let p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    h = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...l
                        } = e, c = r.useRef(null), d = (0, i.s)(t, c), f = s(p, n);
                        return r.useEffect(() => (f.itemMap.set(c, {
                            ref: c,
                            ...l
                        }), () => void f.itemMap.delete(c))), (0, u.jsx)(a.DX, {
                            [m]: "",
                            ref: d,
                            children: o
                        })
                    });
                return h.displayName = p, [{
                    Provider: d,
                    Slot: v,
                    ItemSlot: h
                }, function(t) {
                    let n = s(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, l]
            }
        },
        40774: (e, t, n) => {
            n.d(t, {
                DX: () => a,
                xV: () => l
            });
            var r = n(97387),
                o = n(93371),
                i = n(4155),
                a = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...o
                    } = e, a = r.Children.toArray(n), l = a.find(c);
                    if (l) {
                        let e = l.props.children,
                            n = a.map(t => t !== l ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                        return (0, i.jsx)(u, { ...o,
                            ref: t,
                            children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, i.jsx)(u, { ...o,
                        ref: t,
                        children: n
                    })
                });
            a.displayName = "Slot";
            var u = r.forwardRef((e, t) => {
                let {
                    children: n,
                    ...i
                } = e;
                if (r.isValidElement(n)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(n),
                        a = function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(i, n.props);
                    return n.type !== r.Fragment && (a.ref = t ? (0, o.t)(t, e) : e), r.cloneElement(n, a)
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null
            });
            u.displayName = "SlotClone";
            var l = ({
                children: e
            }) => (0, i.jsx)(i.Fragment, {
                children: e
            });

            function c(e) {
                return r.isValidElement(e) && e.type === l
            }
        },
        42912: (e, t, n) => {
            n.d(t, {
                jH: () => i
            });
            var r = n(97387);
            n(4155);
            var o = r.createContext(void 0);

            function i(e) {
                let t = r.useContext(o);
                return e || t || "ltr"
            }
        },
        51113: (e, t, n) => {
            n.d(t, {
                m: () => r
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
        },
        53591: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            var r = n(97387),
                o = n(93371),
                i = n(96552),
                a = e => {
                    let {
                        present: t,
                        children: n
                    } = e, a = function(e) {
                        var t, n;
                        let [o, a] = r.useState(), l = r.useRef({}), c = r.useRef(e), s = r.useRef("none"), [d, f] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = u(l.current);
                            s.current = "mounted" === d ? e : "none"
                        }, [d]), (0, i.N)(() => {
                            let t = l.current,
                                n = c.current;
                            if (n !== e) {
                                let r = s.current,
                                    o = u(t);
                                e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), c.current = e
                            }
                        }, [e, f]), (0, i.N)(() => {
                            if (o) {
                                var e;
                                let t, n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = u(l.current).includes(e.animationName);
                                        if (e.target === o && r && (f("ANIMATION_END"), !c.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (s.current = u(l.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            f("ANIMATION_END")
                        }, [o, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(d),
                            ref: r.useCallback(e => {
                                e && (l.current = getComputedStyle(e)), a(e)
                            }, [])
                        }
                    }(t), l = "function" == typeof n ? n({
                        present: a.isPresent
                    }) : r.Children.only(n), c = (0, o.s)(a.ref, function(e) {
                        var t, n;
                        let r = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get,
                            o = r && "isReactWarning" in r && r.isReactWarning;
                        return o ? e.ref : (o = (r = null === (n = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(l));
                    return "function" == typeof n || a.isPresent ? r.cloneElement(l, {
                        ref: c
                    }) : null
                };

            function u(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            a.displayName = "Presence"
        },
        57077: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(97387),
                o = n(72042),
                i = n(78273),
                a = n(96552),
                u = n(4155),
                l = r.forwardRef((e, t) => {
                    var n, l;
                    let {
                        container: c,
                        ...s
                    } = e, [d, f] = r.useState(!1);
                    (0, a.N)(() => f(!0), []);
                    let v = c || d && (null === (l = globalThis) || void 0 === l ? void 0 : null === (n = l.document) || void 0 === n ? void 0 : n.body);
                    return v ? o.createPortal((0, u.jsx)(i.sG.div, { ...s,
                        ref: t
                    }), v) : null
                });
            l.displayName = "Portal"
        },
        57310: (e, t, n) => {
            n.d(t, {
                c: () => o
            });
            var r = n(97387);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        58170: (e, t, n) => {
            n.d(t, {
                i: () => i
            });
            var r = n(97387),
                o = n(57310);

            function i({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [i, a] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = r.useState(e),
                        [i] = n,
                        a = r.useRef(i),
                        u = (0, o.c)(t);
                    return r.useEffect(() => {
                        a.current !== i && (u(i), a.current = i)
                    }, [i, a, u]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), u = void 0 !== e, l = u ? e : i, c = (0, o.c)(n);
                return [l, r.useCallback(t => {
                    if (u) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && c(n)
                    } else a(t)
                }, [u, e, a, c])]
            }
        },
        63235: (e, t, n) => {
            n.d(t, {
                UC: () => et,
                VY: () => er,
                ZL: () => Q,
                bL: () => z,
                bm: () => eo,
                hE: () => en,
                hJ: () => ee,
                l9: () => J
            });
            var r = n(97387),
                o = n(51113),
                i = n(93371),
                a = n(17439),
                u = n(90758),
                l = n(58170),
                c = n(26065),
                s = n(73423),
                d = n(57077),
                f = n(53591),
                v = n(78273),
                p = n(72795),
                m = n(83710),
                h = n(75169),
                g = n(40774),
                y = n(4155),
                b = "Dialog",
                [E, w] = (0, a.A)(b),
                [C, N] = E(b),
                R = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: a,
                        modal: c = !0
                    } = e, s = r.useRef(null), d = r.useRef(null), [f = !1, v] = (0, l.i)({
                        prop: o,
                        defaultProp: i,
                        onChange: a
                    });
                    return (0, y.jsx)(C, {
                        scope: t,
                        triggerRef: s,
                        contentRef: d,
                        contentId: (0, u.B)(),
                        titleId: (0, u.B)(),
                        descriptionId: (0, u.B)(),
                        open: f,
                        onOpenChange: v,
                        onOpenToggle: r.useCallback(() => v(e => !e), [v]),
                        modal: c,
                        children: n
                    })
                };
            R.displayName = b;
            var x = "DialogTrigger",
                P = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(x, n), u = (0, i.s)(t, a.triggerRef);
                    return (0, y.jsx)(v.sG.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": a.open,
                        "aria-controls": a.contentId,
                        "data-state": Y(a.open),
                        ...r,
                        ref: u,
                        onClick: (0, o.m)(e.onClick, a.onOpenToggle)
                    })
                });
            P.displayName = x;
            var O = "DialogPortal",
                [S, A] = E(O, {
                    forceMount: void 0
                }),
                D = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: o,
                        container: i
                    } = e, a = N(O, t);
                    return (0, y.jsx)(S, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(o, e => (0, y.jsx)(f.C, {
                            present: n || a.open,
                            children: (0, y.jsx)(d.Z, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            D.displayName = O;
            var M = "DialogOverlay",
                j = r.forwardRef((e, t) => {
                    let n = A(M, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = N(M, e.__scopeDialog);
                    return i.modal ? (0, y.jsx)(f.C, {
                        present: r || i.open,
                        children: (0, y.jsx)(T, { ...o,
                            ref: t
                        })
                    }) : null
                });
            j.displayName = M;
            var T = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(M, n);
                    return (0, y.jsx)(m.A, {
                        as: g.DX,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, y.jsx)(v.sG.div, {
                            "data-state": Y(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                k = "DialogContent",
                L = r.forwardRef((e, t) => {
                    let n = A(k, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = N(k, e.__scopeDialog);
                    return (0, y.jsx)(f.C, {
                        present: r || i.open,
                        children: i.modal ? (0, y.jsx)(I, { ...o,
                            ref: t
                        }) : (0, y.jsx)(F, { ...o,
                            ref: t
                        })
                    })
                });
            L.displayName = k;
            var I = r.forwardRef((e, t) => {
                    let n = N(k, e.__scopeDialog),
                        a = r.useRef(null),
                        u = (0, i.s)(t, n.contentRef, a);
                    return r.useEffect(() => {
                        let e = a.current;
                        if (e) return (0, h.Eq)(e)
                    }, []), (0, y.jsx)(W, { ...e,
                        ref: u,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.m)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                F = r.forwardRef((e, t) => {
                    let n = N(k, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, y.jsx)(W, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, a;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t), t.defaultPrevented || (o.current || null === (a = n.triggerRef.current) || void 0 === a || a.focus(), t.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            var r, a;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let u = t.target;
                            (null === (a = n.triggerRef.current) || void 0 === a ? void 0 : a.contains(u)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    })
                }),
                W = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: o,
                        onOpenAutoFocus: a,
                        onCloseAutoFocus: u,
                        ...l
                    } = e, d = N(k, n), f = r.useRef(null), v = (0, i.s)(t, f);
                    return (0, p.Oh)(), (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(s.n, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: a,
                            onUnmountAutoFocus: u,
                            children: (0, y.jsx)(c.qW, {
                                role: "dialog",
                                id: d.contentId,
                                "aria-describedby": d.descriptionId,
                                "aria-labelledby": d.titleId,
                                "data-state": Y(d.open),
                                ...l,
                                ref: v,
                                onDismiss: () => d.onOpenChange(!1)
                            })
                        }), (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(Z, {
                                titleId: d.titleId
                            }), (0, y.jsx)($, {
                                contentRef: f,
                                descriptionId: d.descriptionId
                            })]
                        })]
                    })
                }),
                _ = "DialogTitle",
                B = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(_, n);
                    return (0, y.jsx)(v.sG.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            B.displayName = _;
            var K = "DialogDescription",
                U = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(K, n);
                    return (0, y.jsx)(v.sG.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            U.displayName = K;
            var H = "DialogClose",
                X = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = N(H, n);
                    return (0, y.jsx)(v.sG.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function Y(e) {
                return e ? "open" : "closed"
            }
            X.displayName = H;
            var q = "DialogTitleWarning",
                [G, V] = (0, a.q)(q, {
                    contentName: k,
                    titleName: _,
                    docsSlug: "dialog"
                }),
                Z = e => {
                    let {
                        titleId: t
                    } = e, n = V(q), o = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return r.useEffect(() => {
                        t && !document.getElementById(t) && console.error(o)
                    }, [o, t]), null
                },
                $ = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, o = V("DialogDescriptionWarning"), i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return r.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(i)
                    }, [i, t, n]), null
                },
                z = R,
                J = P,
                Q = D,
                ee = j,
                et = L,
                en = B,
                er = U,
                eo = X
        },
        72795: (e, t, n) => {
            n.d(t, {
                Oh: () => i
            });
            var r = n(97387),
                o = 0;

            function i() {
                r.useEffect(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : a()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : a()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function a() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
        },
        73423: (e, t, n) => {
            n.d(t, {
                n: () => d
            });
            var r = n(97387),
                o = n(93371),
                i = n(78273),
                a = n(57310),
                u = n(4155),
                l = "focusScope.autoFocusOnMount",
                c = "focusScope.autoFocusOnUnmount",
                s = {
                    bubbles: !1,
                    cancelable: !0
                },
                d = r.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: d = !1,
                        onMountAutoFocus: h,
                        onUnmountAutoFocus: g,
                        ...y
                    } = e, [b, E] = r.useState(null), w = (0, a.c)(h), C = (0, a.c)(g), N = r.useRef(null), R = (0, o.s)(t, e => E(e)), x = r.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    r.useEffect(() => {
                        if (d) {
                            let e = function(e) {
                                    if (x.paused || !b) return;
                                    let t = e.target;
                                    b.contains(t) ? N.current = t : p(N.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (x.paused || !b) return;
                                    let t = e.relatedTarget;
                                    null === t || b.contains(t) || p(N.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && p(b)
                            });
                            return b && n.observe(b, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [d, b, x.paused]), r.useEffect(() => {
                        if (b) {
                            m.add(x);
                            let e = document.activeElement;
                            if (!b.contains(e)) {
                                let t = new CustomEvent(l, s);
                                b.addEventListener(l, w), b.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (p(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(f(b).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && p(b))
                            }
                            return () => {
                                b.removeEventListener(l, w), setTimeout(() => {
                                    let t = new CustomEvent(c, s);
                                    b.addEventListener(c, C), b.dispatchEvent(t), t.defaultPrevented || p(null != e ? e : document.body, {
                                        select: !0
                                    }), b.removeEventListener(c, C), m.remove(x)
                                }, 0)
                            }
                        }
                    }, [b, w, C, x]);
                    let P = r.useCallback(e => {
                        if (!n && !d || x.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            r = document.activeElement;
                        if (t && r) {
                            let t = e.currentTarget,
                                [o, i] = function(e) {
                                    let t = f(e);
                                    return [v(t, e), v(t.reverse(), e)]
                                }(t);
                            o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && p(i, {
                                select: !0
                            })) : (e.preventDefault(), n && p(o, {
                                select: !0
                            })) : r === t && e.preventDefault()
                        }
                    }, [n, d, x.paused]);
                    return (0, u.jsx)(i.sG.div, {
                        tabIndex: -1,
                        ...y,
                        ref: R,
                        onKeyDown: P
                    })
                });

            function f(e) {
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

            function v(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function p(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            d.displayName = "FocusScope";
            var m = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && (null == n || n.pause()), (e = h(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n;
                        null === (n = (e = h(e, t))[0]) || void 0 === n || n.resume()
                    }
                }
            }();

            function h(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        },
        75169: (e, t, n) => {
            n.d(t, {
                Eq: () => s
            });
            var r = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                o = new WeakMap,
                i = new WeakMap,
                a = {},
                u = 0,
                l = function(e) {
                    return e && (e.host || l(e.parentNode))
                },
                c = function(e, t, n, r) {
                    var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = l(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    a[n] || (a[n] = new WeakMap);
                    var s = a[n],
                        d = [],
                        f = new Set,
                        v = new Set(c),
                        p = function(e) {
                            !e || f.has(e) || (f.add(e), p(e.parentNode))
                        };
                    c.forEach(p);
                    var m = function(e) {
                        !e || v.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (f.has(e)) m(e);
                            else try {
                                var t = e.getAttribute(r),
                                    a = null !== t && "false" !== t,
                                    u = (o.get(e) || 0) + 1,
                                    l = (s.get(e) || 0) + 1;
                                o.set(e, u), s.set(e, l), d.push(e), 1 === u && a && i.set(e, !0), 1 === l && e.setAttribute(n, "true"), a || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return m(t), f.clear(), u++,
                        function() {
                            d.forEach(function(e) {
                                var t = o.get(e) - 1,
                                    a = s.get(e) - 1;
                                o.set(e, t), s.set(e, a), t || (i.has(e) || e.removeAttribute(r), i.delete(e)), a || e.removeAttribute(n)
                            }), --u || (o = new WeakMap, o = new WeakMap, i = new WeakMap, a = {})
                        }
                },
                s = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        i = t || r(e);
                    return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), c(o, i, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        78273: (e, t, n) => {
            n.d(t, {
                hO: () => l,
                sG: () => u
            });
            var r = n(97387),
                o = n(72042),
                i = n(40774),
                a = n(4155),
                u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = r.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, u = r ? i.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, { ...o,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {});

            function l(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        83710: (e, t, n) => {
            n.d(t, {
                A: () => X
            });
            var r, o = n(64762),
                i = n(97387),
                a = "right-scroll-bar-position",
                u = "width-before-scroll-bar";

            function l(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var c = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
                s = new WeakMap;

            function d(e) {
                return e
            }
            var f = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, i, a = (t = null, void 0 === n && (n = d), r = [], i = !1, {
                        read: function() {
                            if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return r.length ? r[r.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = n(e, i);
                            return r.push(t),
                                function() {
                                    r = r.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (i = !0; r.length;) {
                                var t = r;
                                r = [], t.forEach(e)
                            }
                            r = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return r
                                }
                            }
                        },
                        assignMedium: function(e) {
                            i = !0;
                            var t = [];
                            if (r.length) {
                                var n = r;
                                r = [], n.forEach(e), t = r
                            }
                            var o = function() {
                                    var n = t;
                                    t = [], n.forEach(e)
                                },
                                a = function() {
                                    return Promise.resolve().then(o)
                                };
                            a(), r = {
                                push: function(e) {
                                    t.push(e), a()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), r
                                }
                            }
                        }
                    });
                    return a.options = (0, o.Cl)({
                        async: !0,
                        ssr: !1
                    }, e), a
                }(),
                v = function() {},
                p = i.forwardRef(function(e, t) {
                    var n, r, a, u, d = i.useRef(null),
                        p = i.useState({
                            onScrollCapture: v,
                            onWheelCapture: v,
                            onTouchMoveCapture: v
                        }),
                        m = p[0],
                        h = p[1],
                        g = e.forwardProps,
                        y = e.children,
                        b = e.className,
                        E = e.removeScrollBar,
                        w = e.enabled,
                        C = e.shards,
                        N = e.sideCar,
                        R = e.noIsolation,
                        x = e.inert,
                        P = e.allowPinchZoom,
                        O = e.as,
                        S = e.gapMode,
                        A = (0, o.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        D = (n = [d, t], r = function(e) {
                            return n.forEach(function(t) {
                                return l(t, e)
                            })
                        }, (a = (0, i.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return a.value
                                    },
                                    set current(value) {
                                        var e = a.value;
                                        e !== value && (a.value = value, a.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, u = a.facade, c(function() {
                            var e = s.get(u);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = u.current;
                                t.forEach(function(e) {
                                    r.has(e) || l(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || l(e, o)
                                })
                            }
                            s.set(u, n)
                        }, [n]), u),
                        M = (0, o.Cl)((0, o.Cl)({}, A), m);
                    return i.createElement(i.Fragment, null, w && i.createElement(N, {
                        sideCar: f,
                        removeScrollBar: E,
                        shards: C,
                        noIsolation: R,
                        inert: x,
                        setCallbacks: h,
                        allowPinchZoom: !!P,
                        lockRef: d,
                        gapMode: S
                    }), g ? i.cloneElement(i.Children.only(y), (0, o.Cl)((0, o.Cl)({}, M), {
                        ref: D
                    })) : i.createElement(void 0 === O ? "div" : O, (0, o.Cl)({}, M, {
                        className: b,
                        ref: D
                    }), y))
                });
            p.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, p.classNames = {
                fullWidth: u,
                zeroRight: a
            };
            var m = function(e) {
                var t = e.sideCar,
                    n = (0, o.Tt)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return i.createElement(r, (0, o.Cl)({}, n))
            };
            m.isSideCarExport = !0;
            var h = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(o) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = r || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, a;
                                (i = t).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                g = function() {
                    var e = h();
                    return function(t, n) {
                        i.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                y = function() {
                    var e = g();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                b = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                E = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                w = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [E(n), E(r), E(o)]
                },
                C = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return b;
                    var t = w(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                N = y(),
                R = "data-scroll-locked",
                x = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        l = e.right,
                        c = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body[").concat(R, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(u, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(u, " .").concat(u, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(R, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
                },
                P = function() {
                    var e = parseInt(document.body.getAttribute(R) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                O = function() {
                    i.useEffect(function() {
                        return document.body.setAttribute(R, (P() + 1).toString()),
                            function() {
                                var e = P() - 1;
                                e <= 0 ? document.body.removeAttribute(R) : document.body.setAttribute(R, e.toString())
                            }
                    }, [])
                },
                S = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    O();
                    var a = i.useMemo(function() {
                        return C(o)
                    }, [o]);
                    return i.createElement(N, {
                        styles: x(a, !t, o, n ? "" : "!important")
                    })
                },
                A = !1;
            if ("undefined" != typeof window) try {
                var D = Object.defineProperty({}, "passive", {
                    get: function() {
                        return A = !0, !0
                    }
                });
                window.addEventListener("test", D, D), window.removeEventListener("test", D, D)
            } catch (e) {
                A = !1
            }
            var M = !!A && {
                    passive: !1
                },
                j = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
                },
                T = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), k(e, r)) {
                            var o = L(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                k = function(e, t) {
                    return "v" === e ? j(t, "overflowY") : j(t, "overflowX")
                },
                L = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                I = function(e, t, n, r, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        u = a * r,
                        l = n.target,
                        c = t.contains(l),
                        s = !1,
                        d = u > 0,
                        f = 0,
                        v = 0;
                    do {
                        var p = L(e, l),
                            m = p[0],
                            h = p[1] - p[2] - a * m;
                        (m || h) && k(e, l) && (f += h, v += m), l = l instanceof ShadowRoot ? l.host : l.parentNode
                    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
                    return d && (o && 1 > Math.abs(f) || !o && u > f) ? s = !0 : !d && (o && 1 > Math.abs(v) || !o && -u > v) && (s = !0), s
                },
                F = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                W = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                _ = function(e) {
                    return e && "current" in e ? e.current : e
                },
                B = 0,
                K = [];
            let U = (f.useMedium(function(e) {
                var t = i.useRef([]),
                    n = i.useRef([0, 0]),
                    r = i.useRef(),
                    a = i.useState(B++)[0],
                    u = i.useState(y)[0],
                    l = i.useRef(e);
                i.useEffect(function() {
                    l.current = e
                }, [e]), i.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(a));
                        var t = (0, o.fX)([e.lockRef.current], (e.shards || []).map(_), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(a))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(a)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(a))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var c = i.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !l.current.allowPinchZoom;
                        var o, i = F(e),
                            a = n.current,
                            u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                            c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                            s = e.target,
                            d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === s.type) return !1;
                        var f = T(d, s);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = T(d, s)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                        var v = r.current || o;
                        return I(v, t, e, "h" === v ? u : c, !0)
                    }, []),
                    s = i.useCallback(function(e) {
                        if (K.length && K[K.length - 1] === u) {
                            var n = "deltaY" in e ? W(e) : F(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (l.current.shards || []).map(_).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? c(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    d = i.useCallback(function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    f = i.useCallback(function(e) {
                        n.current = F(e), r.current = void 0
                    }, []),
                    v = i.useCallback(function(t) {
                        d(t.type, W(t), t.target, c(t, e.lockRef.current))
                    }, []),
                    p = i.useCallback(function(t) {
                        d(t.type, F(t), t.target, c(t, e.lockRef.current))
                    }, []);
                i.useEffect(function() {
                    return K.push(u), e.setCallbacks({
                            onScrollCapture: v,
                            onWheelCapture: v,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", s, M), document.addEventListener("touchmove", s, M), document.addEventListener("touchstart", f, M),
                        function() {
                            K = K.filter(function(e) {
                                return e !== u
                            }), document.removeEventListener("wheel", s, M), document.removeEventListener("touchmove", s, M), document.removeEventListener("touchstart", f, M)
                        }
                }, []);
                var m = e.removeScrollBar,
                    h = e.inert;
                return i.createElement(i.Fragment, null, h ? i.createElement(u, {
                    styles: "\n  .block-interactivity-".concat(a, " {pointer-events: none;}\n  .allow-interactivity-").concat(a, " {pointer-events: all;}\n")
                }) : null, m ? i.createElement(S, {
                    gapMode: e.gapMode
                }) : null)
            }), m);
            var H = i.forwardRef(function(e, t) {
                return i.createElement(p, (0, o.Cl)({}, e, {
                    ref: t,
                    sideCar: U
                }))
            });
            H.classNames = p.classNames;
            let X = H
        },
        90758: (e, t, n) => {
            n.d(t, {
                B: () => l
            });
            var r, o = n(97387),
                i = n(96552),
                a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                u = 0;

            function l(e) {
                let [t, n] = o.useState(a());
                return (0, i.N)(() => {
                    e || n(e => e ? ? String(u++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        96552: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(97387),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        },
        98450: (e, t, n) => {
            n.d(t, {
                Tp: () => l,
                _C: () => c,
                sf: () => u,
                so: () => a
            });
            var r = n(24154),
                o = n(97387),
                i = (0, o.createContext)({
                    client: r.Ay
                });

            function a(e) {
                var t = e.children,
                    n = e.client,
                    a = e.apiKey,
                    u = e.options,
                    l = (0, o.useState)(!1),
                    c = l[0],
                    s = l[1],
                    d = (0, o.useMemo)(function() {
                        return n ? (a && console.warn("[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`."), u && console.warn("[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`."), n.__loaded && console.warn("[PostHog.js] `client` was already loaded elsewhere. This may cause issues."), n) : a ? (!1 !== c ? (a !== c.previousAPIKey && console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop."), u && ! function e(t, n, r) {
                            if (void 0 === r && (r = new WeakMap), t === n) return !0;
                            if ("object" != typeof t || null === t || "object" != typeof n || null === n) return !1;
                            if (r.has(t) && r.get(t) === n) return !0;
                            r.set(t, n);
                            var o = Object.keys(t),
                                i = Object.keys(n);
                            if (o.length !== i.length) return !1;
                            for (var a = 0; a < o.length; a++) {
                                var u = o[a];
                                if (!i.includes(u) || !e(t[u], n[u], r)) return !1
                            }
                            return !0
                        }(u, c.previousOptions) && r.Ay.set_config(u)) : (r.Ay.__loaded && console.warn("[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues."), r.Ay.init(a, u)), s({
                            previousAPIKey: a,
                            previousOptions: null != u ? u : {}
                        }), r.Ay) : (console.warn("[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior."), r.Ay)
                    }, [n, a, JSON.stringify(u)]);
                return o.createElement(i.Provider, {
                    value: {
                        client: d
                    }
                }, t)
            }
            var u = function() {
                return (0, o.useContext)(i).client
            };

            function l(e) {
                var t = u(),
                    n = (0, o.useState)(function() {
                        return t.isFeatureEnabled(e)
                    }),
                    r = n[0],
                    i = n[1];
                return (0, o.useEffect)(function() {
                    return t.onFeatureFlags(function() {
                        i(t.isFeatureEnabled(e))
                    })
                }, [t, e]), r
            }

            function c(e) {
                var t = u(),
                    n = (0, o.useState)(function() {
                        return t.getFeatureFlag(e)
                    }),
                    r = n[0],
                    i = n[1];
                return (0, o.useEffect)(function() {
                    return t.onFeatureFlags(function() {
                        i(t.getFeatureFlag(e))
                    })
                }, [t, e]), r
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function d(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }

            function f(e) {
                var t = e.flag,
                    n = e.children,
                    r = e.onIntersect,
                    o = e.onClick,
                    i = e.trackView,
                    a = e.options,
                    l = d(e, ["flag", "children", "onIntersect", "onClick", "trackView", "options"]),
                    c = useRef(null);
                return useEffect(function() {
                    if (null !== c.current && i) {
                        var e = new IntersectionObserver(function(e) {
                            return r(e[0])
                        }, s({
                            threshold: .1
                        }, a));
                        return e.observe(c.current),
                            function() {
                                return e.disconnect()
                            }
                    }
                }, [t, a, u(), c, i, r]), React.createElement("div", s({
                    ref: c
                }, l, {
                    onClick: o
                }), n)
            }
        }
    }
]);