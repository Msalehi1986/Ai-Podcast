"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3306], {
        43306: (e, t, r) => {
            r.d(t, {
                In: () => eT,
                LM: () => eE,
                UC: () => eR,
                WT: () => ek,
                ZL: () => eN,
                bL: () => eC,
                l9: () => ej,
                p4: () => eP,
                q7: () => eI
            });
            var n = r(97387),
                l = r(72042),
                o = r(56406),
                a = r(51113),
                i = r(31151),
                s = r(93371),
                d = r(17439),
                u = r(42912),
                c = r(26065),
                p = r(72795),
                v = r(73423),
                f = r(90758),
                h = r(55615),
                m = r(57077),
                g = r(78273),
                w = r(40774),
                x = r(57310),
                y = r(58170),
                b = r(96552),
                S = r(63222),
                C = r(81237),
                j = r(75169),
                k = r(83710),
                T = r(4155),
                N = [" ", "Enter", "ArrowUp", "ArrowDown"],
                R = [" ", "Enter"],
                E = "Select",
                [I, P, D] = (0, i.N)(E),
                [L, M] = (0, d.A)(E, [D, h.Bk]),
                H = (0, h.Bk)(),
                [_, A] = L(E),
                [B, V] = L(E),
                G = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: l,
                        defaultOpen: o,
                        onOpenChange: a,
                        value: i,
                        defaultValue: s,
                        onValueChange: d,
                        dir: c,
                        name: p,
                        autoComplete: v,
                        disabled: m,
                        required: g,
                        form: w
                    } = e, x = H(t), [b, S] = n.useState(null), [C, j] = n.useState(null), [k, N] = n.useState(!1), R = (0, u.jH)(c), [E = !1, P] = (0, y.i)({
                        prop: l,
                        defaultProp: o,
                        onChange: a
                    }), [D, L] = (0, y.i)({
                        prop: i,
                        defaultProp: s,
                        onChange: d
                    }), M = n.useRef(null), A = !b || w || !!b.closest("form"), [V, G] = n.useState(new Set), K = Array.from(V).map(e => e.props.value).join(";");
                    return (0, T.jsx)(h.bL, { ...x,
                        children: (0, T.jsxs)(_, {
                            required: g,
                            scope: t,
                            trigger: b,
                            onTriggerChange: S,
                            valueNode: C,
                            onValueNodeChange: j,
                            valueNodeHasChildren: k,
                            onValueNodeHasChildrenChange: N,
                            contentId: (0, f.B)(),
                            value: D,
                            onValueChange: L,
                            open: E,
                            onOpenChange: P,
                            dir: R,
                            triggerPointerDownPosRef: M,
                            disabled: m,
                            children: [(0, T.jsx)(I.Provider, {
                                scope: t,
                                children: (0, T.jsx)(B, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: n.useCallback(e => {
                                        G(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: n.useCallback(e => {
                                        G(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), A ? (0, T.jsxs)(ey, {
                                "aria-hidden": !0,
                                required: g,
                                tabIndex: -1,
                                name: p,
                                autoComplete: v,
                                value: D,
                                onChange: e => L(e.target.value),
                                disabled: m,
                                form: w,
                                children: [void 0 === D ? (0, T.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(V)]
                            }, K) : null]
                        })
                    })
                };
            G.displayName = E;
            var K = "SelectTrigger",
                O = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: l = !1,
                        ...o
                    } = e, i = H(r), d = A(K, r), u = d.disabled || l, c = (0, s.s)(t, d.onTriggerChange), p = P(r), v = n.useRef("touch"), [f, m, w] = eb(e => {
                        let t = p().filter(e => !e.disabled),
                            r = t.find(e => e.value === d.value),
                            n = eS(t, e, r);
                        void 0 !== n && d.onValueChange(n.value)
                    }), x = e => {
                        u || (d.onOpenChange(!0), w()), e && (d.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, T.jsx)(h.Mz, {
                        asChild: !0,
                        ...i,
                        children: (0, T.jsx)(g.sG.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": d.contentId,
                            "aria-expanded": d.open,
                            "aria-required": d.required,
                            "aria-autocomplete": "none",
                            dir: d.dir,
                            "data-state": d.open ? "open" : "closed",
                            disabled: u,
                            "data-disabled": u ? "" : void 0,
                            "data-placeholder": ex(d.value) ? "" : void 0,
                            ...o,
                            ref: c,
                            onClick: (0, a.m)(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== v.current && x(e)
                            }),
                            onPointerDown: (0, a.m)(o.onPointerDown, e => {
                                v.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (x(e), e.preventDefault())
                            }),
                            onKeyDown: (0, a.m)(o.onKeyDown, e => {
                                let t = "" !== f.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && N.includes(e.key) && (x(), e.preventDefault())
                            })
                        })
                    })
                });
            O.displayName = K;
            var F = "SelectValue",
                W = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: l,
                        children: o,
                        placeholder: a = "",
                        ...i
                    } = e, d = A(F, r), {
                        onValueNodeHasChildrenChange: u
                    } = d, c = void 0 !== o, p = (0, s.s)(t, d.onValueNodeChange);
                    return (0, b.N)(() => {
                        u(c)
                    }, [u, c]), (0, T.jsx)(g.sG.span, { ...i,
                        ref: p,
                        style: {
                            pointerEvents: "none"
                        },
                        children: ex(d.value) ? (0, T.jsx)(T.Fragment, {
                            children: a
                        }) : o
                    })
                });
            W.displayName = F;
            var U = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...l
                } = e;
                return (0, T.jsx)(g.sG.span, {
                    "aria-hidden": !0,
                    ...l,
                    ref: t,
                    children: n || "▼"
                })
            });
            U.displayName = "SelectIcon";
            var q = e => (0, T.jsx)(m.Z, {
                asChild: !0,
                ...e
            });
            q.displayName = "SelectPortal";
            var z = "SelectContent",
                Z = n.forwardRef((e, t) => {
                    let r = A(z, e.__scopeSelect),
                        [o, a] = n.useState();
                    return ((0, b.N)(() => {
                        a(new DocumentFragment)
                    }, []), r.open) ? (0, T.jsx)(J, { ...e,
                        ref: t
                    }) : o ? l.createPortal((0, T.jsx)(X, {
                        scope: e.__scopeSelect,
                        children: (0, T.jsx)(I.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, T.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), o) : null
                });
            Z.displayName = z;
            var [X, Y] = L(z), J = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: l = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: d,
                    side: u,
                    sideOffset: f,
                    align: h,
                    alignOffset: m,
                    arrowPadding: g,
                    collisionBoundary: x,
                    collisionPadding: y,
                    sticky: b,
                    hideWhenDetached: S,
                    avoidCollisions: C,
                    ...N
                } = e, R = A(z, r), [E, I] = n.useState(null), [D, L] = n.useState(null), M = (0, s.s)(t, e => I(e)), [H, _] = n.useState(null), [B, V] = n.useState(null), G = P(r), [K, O] = n.useState(!1), F = n.useRef(!1);
                n.useEffect(() => {
                    if (E) return (0, j.Eq)(E)
                }, [E]), (0, p.Oh)();
                let W = n.useCallback(e => {
                        let [t, ...r] = G().map(e => e.ref.current), [n] = r.slice(-1), l = document.activeElement;
                        for (let r of e)
                            if (r === l || (null == r || r.scrollIntoView({
                                    block: "nearest"
                                }), r === t && D && (D.scrollTop = 0), r === n && D && (D.scrollTop = D.scrollHeight), null == r || r.focus(), document.activeElement !== l)) return
                    }, [G, D]),
                    U = n.useCallback(() => W([H, E]), [W, H, E]);
                n.useEffect(() => {
                    K && U()
                }, [K, U]);
                let {
                    onOpenChange: q,
                    triggerPointerDownPosRef: Z
                } = R;
                n.useEffect(() => {
                    if (E) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var r, n, l, o;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null !== (l = null === (r = Z.current) || void 0 === r ? void 0 : r.x) && void 0 !== l ? l : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null !== (o = null === (n = Z.current) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : E.contains(r.target) || q(!1), document.removeEventListener("pointermove", t), Z.current = null
                            };
                        return null !== Z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [E, q, Z]), n.useEffect(() => {
                    let e = () => q(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [q]);
                let [Y, J] = eb(e => {
                    let t = G().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = eS(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), ee = n.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== R.value && R.value === t || n) && (_(e), n && (F.current = !0))
                }, [R.value]), et = n.useCallback(() => null == E ? void 0 : E.focus(), [E]), er = n.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== R.value && R.value === t || n) && V(e)
                }, [R.value]), en = "popper" === l ? $ : Q, el = en === $ ? {
                    side: u,
                    sideOffset: f,
                    align: h,
                    alignOffset: m,
                    arrowPadding: g,
                    collisionBoundary: x,
                    collisionPadding: y,
                    sticky: b,
                    hideWhenDetached: S,
                    avoidCollisions: C
                } : {};
                return (0, T.jsx)(X, {
                    scope: r,
                    content: E,
                    viewport: D,
                    onViewportChange: L,
                    itemRefCallback: ee,
                    selectedItem: H,
                    onItemLeave: et,
                    itemTextRefCallback: er,
                    focusSelectedItem: U,
                    selectedItemText: B,
                    position: l,
                    isPositioned: K,
                    searchRef: Y,
                    children: (0, T.jsx)(k.A, {
                        as: w.DX,
                        allowPinchZoom: !0,
                        children: (0, T.jsx)(v.n, {
                            asChild: !0,
                            trapped: R.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: (0, a.m)(o, e => {
                                var t;
                                null === (t = R.trigger) || void 0 === t || t.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, T.jsx)(c.qW, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: d,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => R.onOpenChange(!1),
                                children: (0, T.jsx)(en, {
                                    role: "listbox",
                                    id: R.contentId,
                                    "data-state": R.open ? "open" : "closed",
                                    dir: R.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...N,
                                    ...el,
                                    onPlaced: () => O(!0),
                                    ref: M,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...N.style
                                    },
                                    onKeyDown: (0, a.m)(N.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || J(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = G().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => W(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            J.displayName = "SelectContentImpl";
            var Q = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: l,
                    ...a
                } = e, i = A(z, r), d = Y(z, r), [u, c] = n.useState(null), [p, v] = n.useState(null), f = (0, s.s)(t, e => v(e)), h = P(r), m = n.useRef(!1), w = n.useRef(!0), {
                    viewport: x,
                    selectedItem: y,
                    selectedItemText: S,
                    focusSelectedItem: C
                } = d, j = n.useCallback(() => {
                    if (i.trigger && i.valueNode && u && p && x && y && S) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = p.getBoundingClientRect(),
                            r = i.valueNode.getBoundingClientRect(),
                            n = S.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let l = n.left - t.left,
                                a = r.left - l,
                                i = e.left - a,
                                s = e.width + i,
                                d = Math.max(s, t.width),
                                c = window.innerWidth - 10,
                                p = (0, o.q)(a, [10, Math.max(10, c - d)]);
                            u.style.minWidth = s + "px", u.style.left = p + "px"
                        } else {
                            let l = t.right - n.right,
                                a = window.innerWidth - r.right - l,
                                i = window.innerWidth - e.right - a,
                                s = e.width + i,
                                d = Math.max(s, t.width),
                                c = window.innerWidth - 10,
                                p = (0, o.q)(a, [10, Math.max(10, c - d)]);
                            u.style.minWidth = s + "px", u.style.right = p + "px"
                        }
                        let a = h(),
                            s = window.innerHeight - 20,
                            d = x.scrollHeight,
                            c = window.getComputedStyle(p),
                            v = parseInt(c.borderTopWidth, 10),
                            f = parseInt(c.paddingTop, 10),
                            g = parseInt(c.borderBottomWidth, 10),
                            w = v + f + d + parseInt(c.paddingBottom, 10) + g,
                            b = Math.min(5 * y.offsetHeight, w),
                            C = window.getComputedStyle(x),
                            j = parseInt(C.paddingTop, 10),
                            k = parseInt(C.paddingBottom, 10),
                            T = e.top + e.height / 2 - 10,
                            N = y.offsetHeight / 2,
                            R = v + f + (y.offsetTop + N);
                        if (R <= T) {
                            let e = a.length > 0 && y === a[a.length - 1].ref.current;
                            u.style.bottom = "0px";
                            let t = Math.max(s - T, N + (e ? k : 0) + (p.clientHeight - x.offsetTop - x.offsetHeight) + g);
                            u.style.height = R + t + "px"
                        } else {
                            let e = a.length > 0 && y === a[0].ref.current;
                            u.style.top = "0px";
                            let t = Math.max(T, v + x.offsetTop + (e ? j : 0) + N);
                            u.style.height = t + (w - R) + "px", x.scrollTop = R - T + x.offsetTop
                        }
                        u.style.margin = "".concat(10, "px 0"), u.style.minHeight = b + "px", u.style.maxHeight = s + "px", null == l || l(), requestAnimationFrame(() => m.current = !0)
                    }
                }, [h, i.trigger, i.valueNode, u, p, x, y, S, i.dir, l]);
                (0, b.N)(() => j(), [j]);
                let [k, N] = n.useState();
                (0, b.N)(() => {
                    p && N(window.getComputedStyle(p).zIndex)
                }, [p]);
                let R = n.useCallback(e => {
                    e && !0 === w.current && (j(), null == C || C(), w.current = !1)
                }, [j, C]);
                return (0, T.jsx)(ee, {
                    scope: r,
                    contentWrapper: u,
                    shouldExpandOnScrollRef: m,
                    onScrollButtonChange: R,
                    children: (0, T.jsx)("div", {
                        ref: c,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: k
                        },
                        children: (0, T.jsx)(g.sG.div, { ...a,
                            ref: f,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...a.style
                            }
                        })
                    })
                })
            });
            Q.displayName = "SelectItemAlignedPosition";
            var $ = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: l = 10,
                    ...o
                } = e, a = H(r);
                return (0, T.jsx)(h.UC, { ...a,
                    ...o,
                    ref: t,
                    align: n,
                    collisionPadding: l,
                    style: {
                        boxSizing: "border-box",
                        ...o.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            $.displayName = "SelectPopperPosition";
            var [ee, et] = L(z, {}), er = "SelectViewport", en = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: l,
                    ...o
                } = e, i = Y(er, r), d = et(er, r), u = (0, s.s)(t, i.onViewportChange), c = n.useRef(0);
                return (0, T.jsxs)(T.Fragment, {
                    children: [(0, T.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: l
                    }), (0, T.jsx)(I.Slot, {
                        scope: r,
                        children: (0, T.jsx)(g.sG.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: u,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: (0, a.m)(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = d;
                                if ((null == n ? void 0 : n.current) && r) {
                                    let e = Math.abs(c.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            l = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (l < n) {
                                            let o = l + e,
                                                a = Math.min(n, o),
                                                i = o - a;
                                            r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                c.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            en.displayName = er;
            var el = "SelectGroup",
                [eo, ea] = L(el);
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, l = (0, f.B)();
                return (0, T.jsx)(eo, {
                    scope: r,
                    id: l,
                    children: (0, T.jsx)(g.sG.div, {
                        role: "group",
                        "aria-labelledby": l,
                        ...n,
                        ref: t
                    })
                })
            }).displayName = el;
            var ei = "SelectLabel";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, l = ea(ei, r);
                return (0, T.jsx)(g.sG.div, {
                    id: l.id,
                    ...n,
                    ref: t
                })
            }).displayName = ei;
            var es = "SelectItem",
                [ed, eu] = L(es),
                ec = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: l,
                        disabled: o = !1,
                        textValue: i,
                        ...d
                    } = e, u = A(es, r), c = Y(es, r), p = u.value === l, [v, h] = n.useState(null != i ? i : ""), [m, w] = n.useState(!1), x = (0, s.s)(t, e => {
                        var t;
                        return null === (t = c.itemRefCallback) || void 0 === t ? void 0 : t.call(c, e, l, o)
                    }), y = (0, f.B)(), b = n.useRef("touch"), S = () => {
                        o || (u.onValueChange(l), u.onOpenChange(!1))
                    };
                    if ("" === l) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, T.jsx)(ed, {
                        scope: r,
                        value: l,
                        disabled: o,
                        textId: y,
                        isSelected: p,
                        onItemTextChange: n.useCallback(e => {
                            h(t => {
                                var r;
                                return t || (null !== (r = null == e ? void 0 : e.textContent) && void 0 !== r ? r : "").trim()
                            })
                        }, []),
                        children: (0, T.jsx)(I.ItemSlot, {
                            scope: r,
                            value: l,
                            disabled: o,
                            textValue: v,
                            children: (0, T.jsx)(g.sG.div, {
                                role: "option",
                                "aria-labelledby": y,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": p && m,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...d,
                                ref: x,
                                onFocus: (0, a.m)(d.onFocus, () => w(!0)),
                                onBlur: (0, a.m)(d.onBlur, () => w(!1)),
                                onClick: (0, a.m)(d.onClick, () => {
                                    "mouse" !== b.current && S()
                                }),
                                onPointerUp: (0, a.m)(d.onPointerUp, () => {
                                    "mouse" === b.current && S()
                                }),
                                onPointerDown: (0, a.m)(d.onPointerDown, e => {
                                    b.current = e.pointerType
                                }),
                                onPointerMove: (0, a.m)(d.onPointerMove, e => {
                                    if (b.current = e.pointerType, o) {
                                        var t;
                                        null === (t = c.onItemLeave) || void 0 === t || t.call(c)
                                    } else "mouse" === b.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: (0, a.m)(d.onPointerLeave, e => {
                                    if (e.currentTarget === document.activeElement) {
                                        var t;
                                        null === (t = c.onItemLeave) || void 0 === t || t.call(c)
                                    }
                                }),
                                onKeyDown: (0, a.m)(d.onKeyDown, e => {
                                    var t;
                                    ((null === (t = c.searchRef) || void 0 === t ? void 0 : t.current) === "" || " " !== e.key) && (R.includes(e.key) && S(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            ec.displayName = es;
            var ep = "SelectItemText",
                ev = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: o,
                        style: a,
                        ...i
                    } = e, d = A(ep, r), u = Y(ep, r), c = eu(ep, r), p = V(ep, r), [v, f] = n.useState(null), h = (0, s.s)(t, e => f(e), c.onItemTextChange, e => {
                        var t;
                        return null === (t = u.itemTextRefCallback) || void 0 === t ? void 0 : t.call(u, e, c.value, c.disabled)
                    }), m = null == v ? void 0 : v.textContent, w = n.useMemo(() => (0, T.jsx)("option", {
                        value: c.value,
                        disabled: c.disabled,
                        children: m
                    }, c.value), [c.disabled, c.value, m]), {
                        onNativeOptionAdd: x,
                        onNativeOptionRemove: y
                    } = p;
                    return (0, b.N)(() => (x(w), () => y(w)), [x, y, w]), (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(g.sG.span, {
                            id: c.textId,
                            ...i,
                            ref: h
                        }), c.isSelected && d.valueNode && !d.valueNodeHasChildren ? l.createPortal(i.children, d.valueNode) : null]
                    })
                });
            ev.displayName = ep;
            var ef = "SelectItemIndicator";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return eu(ef, r).isSelected ? (0, T.jsx)(g.sG.span, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                }) : null
            }).displayName = ef;
            var eh = "SelectScrollUpButton";
            n.forwardRef((e, t) => {
                let r = Y(eh, e.__scopeSelect),
                    l = et(eh, e.__scopeSelect),
                    [o, a] = n.useState(!1),
                    i = (0, s.s)(t, l.onScrollButtonChange);
                return (0, b.N)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                a(t.scrollTop > 0)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), o ? (0, T.jsx)(eg, { ...e,
                    ref: i,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                    }
                }) : null
            }).displayName = eh;
            var em = "SelectScrollDownButton";
            n.forwardRef((e, t) => {
                let r = Y(em, e.__scopeSelect),
                    l = et(em, e.__scopeSelect),
                    [o, a] = n.useState(!1),
                    i = (0, s.s)(t, l.onScrollButtonChange);
                return (0, b.N)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                let e = t.scrollHeight - t.clientHeight;
                                a(Math.ceil(t.scrollTop) < e)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), o ? (0, T.jsx)(eg, { ...e,
                    ref: i,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                    }
                }) : null
            }).displayName = em;
            var eg = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onAutoScroll: l,
                    ...o
                } = e, i = Y("SelectScrollButton", r), s = n.useRef(null), d = P(r), u = n.useCallback(() => {
                    null !== s.current && (window.clearInterval(s.current), s.current = null)
                }, []);
                return n.useEffect(() => () => u(), [u]), (0, b.N)(() => {
                    var e;
                    let t = d().find(e => e.ref.current === document.activeElement);
                    null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                        block: "nearest"
                    })
                }, [d]), (0, T.jsx)(g.sG.div, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    style: {
                        flexShrink: 0,
                        ...o.style
                    },
                    onPointerDown: (0, a.m)(o.onPointerDown, () => {
                        null === s.current && (s.current = window.setInterval(l, 50))
                    }),
                    onPointerMove: (0, a.m)(o.onPointerMove, () => {
                        var e;
                        null === (e = i.onItemLeave) || void 0 === e || e.call(i), null === s.current && (s.current = window.setInterval(l, 50))
                    }),
                    onPointerLeave: (0, a.m)(o.onPointerLeave, () => {
                        u()
                    })
                })
            });
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return (0, T.jsx)(g.sG.div, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                })
            }).displayName = "SelectSeparator";
            var ew = "SelectArrow";

            function ex(e) {
                return "" === e || void 0 === e
            }
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, l = H(r), o = A(ew, r), a = Y(ew, r);
                return o.open && "popper" === a.position ? (0, T.jsx)(h.i3, { ...l,
                    ...n,
                    ref: t
                }) : null
            }).displayName = ew;
            var ey = n.forwardRef((e, t) => {
                let {
                    value: r,
                    ...l
                } = e, o = n.useRef(null), a = (0, s.s)(t, o), i = (0, S.Z)(r);
                return n.useEffect(() => {
                    let e = o.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (i !== r && t) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [i, r]), (0, T.jsx)(C.s, {
                    asChild: !0,
                    children: (0, T.jsx)("select", { ...l,
                        ref: a,
                        defaultValue: r
                    })
                })
            });

            function eb(e) {
                let t = (0, x.c)(e),
                    r = n.useRef(""),
                    l = n.useRef(0),
                    o = n.useCallback(e => {
                        let n = r.current + e;
                        t(n),
                            function e(t) {
                                r.current = t, window.clearTimeout(l.current), "" !== t && (l.current = window.setTimeout(() => e(""), 1e3))
                            }(n)
                    }, [t]),
                    a = n.useCallback(() => {
                        r.current = "", window.clearTimeout(l.current)
                    }, []);
                return n.useEffect(() => () => window.clearTimeout(l.current), []), [r, o, a]
            }

            function eS(e, t, r) {
                var n, l;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    a = r ? e.indexOf(r) : -1,
                    i = (n = e, l = Math.max(a, 0), n.map((e, t) => n[(l + t) % n.length]));
                1 === o.length && (i = i.filter(e => e !== r));
                let s = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return s !== r ? s : void 0
            }
            ey.displayName = "BubbleSelect";
            var eC = G,
                ej = O,
                ek = W,
                eT = U,
                eN = q,
                eR = Z,
                eE = en,
                eI = ec,
                eP = ev
        }
    }
]);