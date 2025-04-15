"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1684, 3799, 4065, 4541, 6922, 9303], {
        13059: (e, t, r) => {
            r.d(t, {
                tH: () => i
            });
            var n = r(97387);
            let o = (0, n.createContext)(null),
                l = {
                    didCatch: !1,
                    error: null
                };
            class i extends n.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, r, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
                            args: o,
                            reason: "imperative-api"
                        }), this.setState(l)
                    }
                }
                componentDidCatch(e, t) {
                    var r, n;
                    null === (r = (n = this.props).onError) || void 0 === r || r.call(n, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: r
                    } = this.state, {
                        resetKeys: n
                    } = this.props;
                    if (r && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
                        }(e.resetKeys, n)) {
                        var o, i;
                        null === (o = (i = this.props).onReset) || void 0 === o || o.call(i, {
                            next: n,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(l)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: r,
                        fallback: l
                    } = this.props, {
                        didCatch: i,
                        error: a
                    } = this.state, s = e;
                    if (i) {
                        let e = {
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ("function" == typeof t) s = t(e);
                        else if (r) s = (0, n.createElement)(r, e);
                        else if (null === l || (0, n.isValidElement)(l)) s = l;
                        else throw a
                    }
                    return (0, n.createElement)(o.Provider, {
                        value: {
                            didCatch: i,
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, s)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = l
                }
            }
        },
        13987: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var n = r(97387),
                o = r(81137);
            let l = function(e, t, r) {
                if (!o.Bd) return [t, o.lQ, o.lQ];
                if (!e) throw Error("useLocalStorage key may not be falsy");
                var l = r ? r.raw ? function(e) {
                        return e
                    } : r.deserializer : JSON.parse,
                    i = (0, n.useRef)(function(e) {
                        try {
                            var n = r ? r.raw ? String : r.serializer : JSON.stringify,
                                o = localStorage.getItem(e);
                            if (null !== o) return l(o);
                            return t && localStorage.setItem(e, n(t)), t
                        } catch (e) {
                            return t
                        }
                    }),
                    a = (0, n.useState)(function() {
                        return i.current(e)
                    }),
                    s = a[0],
                    u = a[1];
                (0, n.useLayoutEffect)(function() {
                    return u(i.current(e))
                }, [e]);
                var c = (0, n.useCallback)(function(t) {
                    try {
                        var n = "function" == typeof t ? t(s) : t;
                        if (void 0 === n) return;
                        var o = void 0;
                        o = r ? r.raw ? "string" == typeof n ? n : JSON.stringify(n) : r.serializer ? r.serializer(n) : JSON.stringify(n) : JSON.stringify(n), localStorage.setItem(e, o), u(l(o))
                    } catch (e) {}
                }, [e, u]);
                return [s, c, (0, n.useCallback)(function() {
                    try {
                        localStorage.removeItem(e), u(void 0)
                    } catch (e) {}
                }, [e, u])]
            }
        },
        53531: (e, t, r) => {
            r.d(t, {
                Mz: () => T,
                UC: () => W,
                ZL: () => Q,
                bL: () => G,
                l9: () => K
            });
            var n = r(97387),
                o = r(51113),
                l = r(93371),
                i = r(17439),
                a = r(26065),
                s = r(72795),
                u = r(73423),
                c = r(90758),
                d = r(55615),
                f = r(57077),
                p = r(53591),
                h = r(78273),
                v = r(40774),
                y = r(58170),
                g = r(75169),
                m = r(83710),
                w = r(4155),
                x = "Popover",
                [b, P] = (0, i.A)(x, [d.Bk]),
                C = (0, d.Bk)(),
                [E, k] = b(x),
                S = e => {
                    let {
                        __scopePopover: t,
                        children: r,
                        open: o,
                        defaultOpen: l,
                        onOpenChange: i,
                        modal: a = !1
                    } = e, s = C(t), u = n.useRef(null), [f, p] = n.useState(!1), [h = !1, v] = (0, y.i)({
                        prop: o,
                        defaultProp: l,
                        onChange: i
                    });
                    return (0, w.jsx)(d.bL, { ...s,
                        children: (0, w.jsx)(E, {
                            scope: t,
                            contentId: (0, c.B)(),
                            triggerRef: u,
                            open: h,
                            onOpenChange: v,
                            onOpenToggle: n.useCallback(() => v(e => !e), [v]),
                            hasCustomAnchor: f,
                            onCustomAnchorAdd: n.useCallback(() => p(!0), []),
                            onCustomAnchorRemove: n.useCallback(() => p(!1), []),
                            modal: a,
                            children: r
                        })
                    })
                };
            S.displayName = x;
            var O = "PopoverAnchor",
                _ = n.forwardRef((e, t) => {
                    let {
                        __scopePopover: r,
                        ...o
                    } = e, l = k(O, r), i = C(r), {
                        onCustomAnchorAdd: a,
                        onCustomAnchorRemove: s
                    } = l;
                    return n.useEffect(() => (a(), () => s()), [a, s]), (0, w.jsx)(d.Mz, { ...i,
                        ...o,
                        ref: t
                    })
                });
            _.displayName = O;
            var j = "PopoverTrigger",
                R = n.forwardRef((e, t) => {
                    let {
                        __scopePopover: r,
                        ...n
                    } = e, i = k(j, r), a = C(r), s = (0, l.s)(t, i.triggerRef), u = (0, w.jsx)(h.sG.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": J(i.open),
                        ...n,
                        ref: s,
                        onClick: (0, o.m)(e.onClick, i.onOpenToggle)
                    });
                    return i.hasCustomAnchor ? u : (0, w.jsx)(d.Mz, {
                        asChild: !0,
                        ...a,
                        children: u
                    })
                });
            R.displayName = j;
            var N = "PopoverPortal",
                [A, D] = b(N, {
                    forceMount: void 0
                }),
                B = e => {
                    let {
                        __scopePopover: t,
                        forceMount: r,
                        children: n,
                        container: o
                    } = e, l = k(N, t);
                    return (0, w.jsx)(A, {
                        scope: t,
                        forceMount: r,
                        children: (0, w.jsx)(p.C, {
                            present: r || l.open,
                            children: (0, w.jsx)(f.Z, {
                                asChild: !0,
                                container: o,
                                children: n
                            })
                        })
                    })
                };
            B.displayName = N;
            var F = "PopoverContent",
                I = n.forwardRef((e, t) => {
                    let r = D(F, e.__scopePopover),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        l = k(F, e.__scopePopover);
                    return (0, w.jsx)(p.C, {
                        present: n || l.open,
                        children: l.modal ? (0, w.jsx)(M, { ...o,
                            ref: t
                        }) : (0, w.jsx)(z, { ...o,
                            ref: t
                        })
                    })
                });
            I.displayName = F;
            var M = n.forwardRef((e, t) => {
                    let r = k(F, e.__scopePopover),
                        i = n.useRef(null),
                        a = (0, l.s)(t, i),
                        s = n.useRef(!1);
                    return n.useEffect(() => {
                        let e = i.current;
                        if (e) return (0, g.Eq)(e)
                    }, []), (0, w.jsx)(m.A, {
                        as: v.DX,
                        allowPinchZoom: !0,
                        children: (0, w.jsx)(L, { ...e,
                            ref: a,
                            trapFocus: r.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, e => {
                                var t;
                                e.preventDefault(), s.current || null === (t = r.triggerRef.current) || void 0 === t || t.focus()
                            }),
                            onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, e => {
                                let t = e.detail.originalEvent,
                                    r = 0 === t.button && !0 === t.ctrlKey;
                                s.current = 2 === t.button || r
                            }, {
                                checkForDefaultPrevented: !1
                            }),
                            onFocusOutside: (0, o.m)(e.onFocusOutside, e => e.preventDefault(), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                }),
                z = n.forwardRef((e, t) => {
                    let r = k(F, e.__scopePopover),
                        o = n.useRef(!1),
                        l = n.useRef(!1);
                    return (0, w.jsx)(L, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var n, i;
                            null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current || null === (i = r.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), o.current = !1, l.current = !1
                        },
                        onInteractOutside: t => {
                            var n, i;
                            null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (l.current = !0));
                            let a = t.target;
                            (null === (i = r.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && l.current && t.preventDefault()
                        }
                    })
                }),
                L = n.forwardRef((e, t) => {
                    let {
                        __scopePopover: r,
                        trapFocus: n,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: l,
                        disableOutsidePointerEvents: i,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: f,
                        onFocusOutside: p,
                        onInteractOutside: h,
                        ...v
                    } = e, y = k(F, r), g = C(r);
                    return (0, s.Oh)(), (0, w.jsx)(u.n, {
                        asChild: !0,
                        loop: !0,
                        trapped: n,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: l,
                        children: (0, w.jsx)(a.qW, {
                            asChild: !0,
                            disableOutsidePointerEvents: i,
                            onInteractOutside: h,
                            onEscapeKeyDown: c,
                            onPointerDownOutside: f,
                            onFocusOutside: p,
                            onDismiss: () => y.onOpenChange(!1),
                            children: (0, w.jsx)(d.UC, {
                                "data-state": J(y.open),
                                role: "dialog",
                                id: y.contentId,
                                ...g,
                                ...v,
                                ref: t,
                                style: { ...v.style,
                                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                                }
                            })
                        })
                    })
                }),
                U = "PopoverClose";

            function J(e) {
                return e ? "open" : "closed"
            }
            n.forwardRef((e, t) => {
                let {
                    __scopePopover: r,
                    ...n
                } = e, l = k(U, r);
                return (0, w.jsx)(h.sG.button, {
                    type: "button",
                    ...n,
                    ref: t,
                    onClick: (0, o.m)(e.onClick, () => l.onOpenChange(!1))
                })
            }).displayName = U, n.forwardRef((e, t) => {
                let {
                    __scopePopover: r,
                    ...n
                } = e, o = C(r);
                return (0, w.jsx)(d.i3, { ...o,
                    ...n,
                    ref: t
                })
            }).displayName = "PopoverArrow";
            var G = S,
                T = _,
                K = R,
                Q = B,
                W = I
        },
        75919: function(e, t, r) {
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                    return l(t, e), t
                },
                a = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))(function(o, l) {
                        function i(e) {
                            try {
                                s(n.next(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function a(e) {
                            try {
                                s(n.throw(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(i, a)
                        }
                        s((n = n.apply(e, t || [])).next())
                    })
                },
                s = this && this.__generator || function(e, t) {
                    var r, n, o, l, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function a(l) {
                        return function(a) {
                            var s = [l, a];
                            if (r) throw TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                                switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            i.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && i.label < o[1]) {
                                            i.label = o[1], o = s;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(s);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PayloadAdminBar = void 0;
            var u = i(r(97387)),
                c = {
                    email: "dev@email.com",
                    id: "12345"
                };
            t.PayloadAdminBar = function(e) {
                var t = e.cmsURL,
                    r = void 0 === t ? "http://localhost:8000" : t,
                    o = e.apiPath,
                    l = void 0 === o ? "/api" : o,
                    i = e.adminPath,
                    d = void 0 === i ? "/admin" : i,
                    f = e.collection,
                    p = e.collectionLabels,
                    h = e.id,
                    v = e.logo,
                    y = e.className,
                    g = e.logoProps,
                    m = e.editProps,
                    w = e.createProps,
                    x = e.userProps,
                    b = e.logoutProps,
                    P = e.divProps,
                    C = e.style,
                    E = e.unstyled,
                    k = e.onAuthChange,
                    S = e.classNames,
                    O = e.devMode,
                    _ = e.preview,
                    j = e.onPreviewExit,
                    R = e.previewProps,
                    N = (0, u.useState)(),
                    A = N[0],
                    D = N[1];
                if ((0, u.useEffect)(function() {
                        a(void 0, void 0, void 0, function() {
                            var e;
                            return s(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 3, , 4]), [4, fetch("" + r + l + "/users/me", {
                                            method: "get",
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return [4, t.sent().json()];
                                    case 2:
                                        return (e = t.sent().user) ? D(e) : !0 !== O ? D(null) : D(c), [3, 4];
                                    case 3:
                                        return console.warn(t.sent()), !0 === O && D(c), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, [r, d, l]), (0, u.useEffect)(function() {
                        "function" == typeof k && k(A)
                    }, [A, k]), A) {
                    var B = A.email,
                        F = A.id;
                    return u.default.createElement("div", {
                        className: y,
                        style: n(n({}, !0 !== E ? {
                            fontSize: "small",
                            position: "fixed",
                            display: "flex",
                            minWidth: "0",
                            alignItems: "center",
                            top: 0,
                            left: 0,
                            width: "100%",
                            padding: "0.5rem",
                            zIndex: 99999,
                            boxSizing: "border-box",
                            backgroundColor: "#222",
                            color: "#fff",
                            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
                        } : {}), C)
                    }, u.default.createElement("a", n({
                        href: "" + r + d,
                        className: null == S ? void 0 : S.logo
                    }, g, {
                        style: n({}, !0 !== E ? n({
                            marginRight: "10px",
                            flexShrink: 0,
                            display: "flex",
                            height: "20px",
                            textDecoration: "none",
                            color: "inherit",
                            alignItems: "center"
                        }, (null == g ? void 0 : g.style) ? n({}, g.style) : {}) : {})
                    }), v || "Payload CMS"), u.default.createElement("a", n({
                        href: "" + r + d + "/collections/users/" + F,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: null == S ? void 0 : S.user
                    }, x, {
                        style: n({}, !0 !== E ? n({
                            marginRight: "10px",
                            display: "block",
                            minWidth: "50px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            color: "inherit"
                        }, (null == x ? void 0 : x.style) ? n({}, x.style) : {}) : {})
                    }), u.default.createElement("span", {
                        style: n({}, !0 !== E ? {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        } : {})
                    }, B || "Profile")), u.default.createElement("div", n({
                        className: null == S ? void 0 : S.controls
                    }, P, {
                        style: n({}, !0 !== E ? n({
                            display: "flex",
                            marginRight: "10px",
                            flexShrink: 1,
                            flexGrow: 1,
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }, (null == P ? void 0 : P.style) ? n({}, P.style) : {}) : {})
                    }), f && h && u.default.createElement("a", n({
                        href: "" + r + d + "/collections/" + f + "/" + h,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: null == S ? void 0 : S.edit
                    }, m, {
                        style: n({
                            display: "block"
                        }, !0 !== E ? n({
                            marginRight: "10px",
                            textDecoration: "none",
                            color: "inherit",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            flexShrink: 1
                        }, (null == m ? void 0 : m.style) ? n({}, m.style) : {}) : {})
                    }), u.default.createElement("span", {
                        style: n({}, !0 !== E ? {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        } : {})
                    }, "Edit " + ((null == p ? void 0 : p.singular) || "page"))), f && u.default.createElement("a", n({
                        href: "" + r + d + "/collections/" + f + "/create",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: null == S ? void 0 : S.create
                    }, w, {
                        style: n({}, !0 !== E ? n({
                            flexShrink: 1,
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        }, (null == w ? void 0 : w.style) ? n({}, w.style) : {}) : {})
                    }), u.default.createElement("span", {
                        style: n({}, !0 !== E ? {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        } : {})
                    }, "New " + ((null == p ? void 0 : p.singular) || "page"))), _ && u.default.createElement("button", n({
                        className: null == S ? void 0 : S.preview,
                        onClick: j
                    }, R, {
                        style: n({}, !0 !== E ? n({
                            marginLeft: "10px",
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            color: "inherit",
                            fontFamily: "inherit",
                            fontSize: "inherit"
                        }, (null == R ? void 0 : R.style) ? n({}, R.style) : {}) : {})
                    }), "Exit preview mode")), u.default.createElement("a", n({
                        href: "" + r + d + "/logout",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: null == S ? void 0 : S.logout
                    }, b, {
                        style: n({}, !0 !== E ? n({
                            textDecoration: "none",
                            color: "inherit",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            display: "block",
                            flexShrink: 1
                        }, (null == b ? void 0 : b.style) ? n({}, b.style) : {}) : {})
                    }), u.default.createElement("span", {
                        style: n({}, !0 !== E ? {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        } : {})
                    }, "Logout")))
                }
                return null
            }
        },
        81137: (e, t, r) => {
            r.d(t, {
                Bd: () => o,
                lQ: () => n
            });
            var n = function() {},
                o = "undefined" != typeof window
        }
    }
]);