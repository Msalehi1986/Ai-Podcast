"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4228], {
        1412: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = (0, r(11985).A)("Settings2", [
                ["path", {
                    d: "M20 7h-9",
                    key: "3s1dr2"
                }],
                ["path", {
                    d: "M14 17H5",
                    key: "gfn3mx"
                }],
                ["circle", {
                    cx: "17",
                    cy: "17",
                    r: "3",
                    key: "18b49y"
                }],
                ["circle", {
                    cx: "7",
                    cy: "7",
                    r: "3",
                    key: "dfmy0x"
                }]
            ])
        },
        11985: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(97387);
            let n = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                l = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let s = (0, a.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: n = 24,
                        strokeWidth: s = 2,
                        absoluteStrokeWidth: d,
                        className: o = "",
                        children: c,
                        iconNode: u,
                        ...f
                    } = e;
                    return (0, a.createElement)("svg", {
                        ref: t,
                        ...i,
                        width: n,
                        height: n,
                        stroke: r,
                        strokeWidth: d ? 24 * Number(s) / Number(n) : s,
                        className: l("lucide", o),
                        ...f
                    }, [...u.map(e => {
                        let [t, r] = e;
                        return (0, a.createElement)(t, r)
                    }), ...Array.isArray(c) ? c : [c]])
                }),
                d = (e, t) => {
                    let r = (0, a.forwardRef)((r, i) => {
                        let {
                            className: d,
                            ...o
                        } = r;
                        return (0, a.createElement)(s, {
                            ref: i,
                            iconNode: t,
                            className: l("lucide-".concat(n(e)), d),
                            ...o
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        },
        16812: (e, t, r) => {
            r.d(t, {
                A: () => i,
                h: () => s
            });
            var a = r(4155),
                n = r(19018),
                l = r(97387);
            let i = e => ({
                    addEventListener: (t, r) => {
                        e.on(t, r)
                    },
                    removeEventListener: (t, r) => {
                        e.off(t, r)
                    },
                    get currentTime() {
                        return e.seek()
                    },
                    get duration() {
                        return e.duration()
                    }
                }),
                s = function(e) {
                    let {
                        mediaElement: t,
                        className: r,
                        ref: i
                    } = e, s = (0, l.useRef)(null), d = (0, l.useRef)(null), o = (0, l.useRef)(0), c = (0, l.useRef)(0), u = (0, l.useRef)(0), f = (0, l.useRef)(0), v = (0, l.useCallback)(() => {
                        if (!t) return;
                        let {
                            currentTime: e,
                            duration: r
                        } = t;
                        u.current = r, o.current = Date.now(), c.current = e,
                            function e() {
                                if (!s.current || !d.current) return;
                                let t = (Date.now() - o.current) / 1e3 + c.current;
                                if (t <= u.current) {
                                    var r;
                                    let a = (null === (r = s.current) || void 0 === r ? void 0 : r.clientWidth) * (t / u.current);
                                    d.current.style.transform = "translateX(".concat(a, "px)"), f.current = requestAnimationFrame(e)
                                } else d.current.style.transform = "translateX(0px)"
                            }()
                    }, [t]), h = (0, l.useCallback)(() => {
                        cancelAnimationFrame(f.current)
                    }, []);
                    (0, l.useEffect)(() => {
                        if (t) return t.addEventListener("play", v), t.addEventListener("pause", h), () => {
                            t.removeEventListener("play", v), t.removeEventListener("pause", h)
                        }
                    }, [t, v, h]);
                    let m = (0, l.useCallback)(e => {
                        if (!s.current || !d.current || !t) return;
                        "function" == typeof t.seek ? t.seek(e) : t.currentTime = e;
                        let r = s.current.clientWidth * (e / u.current);
                        d.current.style.transform = "translateX(".concat(r, "px)"), o.current = Date.now(), c.current = e
                    }, [t]);
                    (0, l.useImperativeHandle)(i, () => ({
                        seek: m
                    }));
                    let g = (0, l.useCallback)(e => {
                        if (!s.current || !t) return;
                        let r = s.current.getBoundingClientRect();
                        m((e.clientX - r.left) / r.width * u.current)
                    }, [t, m]);
                    return (0, a.jsx)("div", {
                        className: (0, n.cn)("bg-dark relative mx-16 h-2 cursor-pointer overflow-hidden rounded-full", r),
                        onClick: g,
                        ref: s,
                        children: (0, a.jsx)("div", {
                            className: "transition-width bg-inverse absolute -left-full h-full w-full rounded-full",
                            ref: d
                        })
                    })
                }
        },
        31259: (e, t, r) => {
            r.d(t, {
                z: () => n
            });
            var a = r(84297);
            let n = {
                idle: a.k.PLAY_20,
                playing: a.k.PAUSE_20,
                paused: a.k.PLAY_20,
                loading: a.k.SPINNER_20
            }
        },
        46375: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = (0, r(11985).A)("Shrink", [
                ["path", {
                    d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
                    key: "17vawe"
                }],
                ["path", {
                    d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
                    key: "chjx8e"
                }],
                ["path", {
                    d: "M15 4.2V9m0 0h4.8M15 9l6-6",
                    key: "lav6yq"
                }],
                ["path", {
                    d: "M9 4.2V9m0 0H4.2M9 9 3 3",
                    key: "1pxi2q"
                }]
            ])
        },
        55924: (e, t, r) => {
            r.d(t, {
                bq: () => f,
                eb: () => h,
                gC: () => v,
                l6: () => c,
                yv: () => u
            });
            var a = r(4155),
                n = r(43306),
                l = r(19018),
                i = r(84297),
                s = r(8608),
                d = r(30927);
            let o = (0, s.F)("inline-flex items-center justify-between whitespace-nowrap rounded-full effect-color disabled:cursor-not-allowed", {
                    variants: {
                        variant: {
                            primary: "bg-inverse text-inverse effect-focus-light data-[state=active]:bg-darkest",
                            secondary: "bg-dark text-default effect-focus-light data-[state=active]:bg-overlay-darker",
                            tertiary: "bg-default text-default effect-focus-inverse-light ring-offset-darkest data-[state=active]:bg-overlay-lighter",
                            quaternary: "text-inverse effect-focus-inverse-light ring-offset-darkest data-[state=active]:bg-overlay-light",
                            quinary: "text-inverse effect-focus-inverse-light bg-overlay-light ring-offset-darkest data-[state=active]:bg-overlay-lighter",
                            outline: "bg-default border text-default effect-focus-inverse ring-offset-darkest data-[state=active]:bg-overlay-lighter",
                            "outline-inverse": "bg-transparent border border-overlay-light text-inverse effect-focus-inverse-light data-[state=active]:bg-default data-[state=active]:text-default data-[state=active]:border-inverse",
                            ghost: "bg-transparent text-default hover:text-lighter effect-focus data-[state=active]:bg-default",
                            "ghost-inverse": "bg-transparent text-inverse hover:text-lighter effect-focus data-[state=active]:bg-default"
                        },
                        expand: {
                            true: "w-full",
                            false: "w-fit"
                        },
                        size: {
                            md: "h-40 f-ui-03 ps-16 pe-12",
                            lg: "h-48 f-ui-03 ps-20 pe-16"
                        },
                        icon: {
                            true: "",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        icon: !0,
                        size: ["md"],
                        className: "ps-10"
                    }, {
                        icon: !0,
                        size: ["lg"],
                        className: "ps-12"
                    }, {
                        variant: "primary",
                        className: "enabled:hover:bg-darkest"
                    }, {
                        variant: "primary",
                        className: "hover:bg-darkest"
                    }, {
                        variant: "secondary",
                        className: "enabled:hover:bg-overlay-darker"
                    }, {
                        variant: "secondary",
                        className: "hover:bg-overlay-darker"
                    }, {
                        variant: "tertiary",
                        className: "enabled:hover:bg-overlay-lighter"
                    }, {
                        variant: "tertiary",
                        className: "hover:bg-overlay-lighter"
                    }, {
                        variant: "quaternary",
                        className: "enabled:hover:bg-overlay-light"
                    }, {
                        variant: "quaternary",
                        className: "hover:bg-overlay-light"
                    }, {
                        variant: "quinary",
                        className: "enabled:hover:bg-overlay-lighter"
                    }, {
                        variant: "quinary",
                        className: "hover:bg-overlay-lighter"
                    }, {
                        variant: "outline",
                        className: "enabled:hover:bg-overlay-lighter enabled:hover:border-darkest"
                    }, {
                        variant: "outline",
                        className: "hover:bg-overlay-lighter hover:border-darkest"
                    }, {
                        variant: "outline-inverse",
                        className: "enabled:hover:bg-default enabled:hover:text-default"
                    }, {
                        variant: "outline-inverse",
                        className: "hover:bg-default hover:text-default"
                    }],
                    defaultVariants: {
                        variant: "outline",
                        size: "md",
                        expand: !1
                    }
                }),
                c = n.bL,
                u = n.WT,
                f = e => {
                    let {
                        className: t,
                        variant: r,
                        size: s,
                        expand: c,
                        icon: u,
                        children: f,
                        ref: v,
                        ...h
                    } = e;
                    return (0, a.jsxs)(n.l9, {
                        className: (0, l.cn)(o({
                            variant: r,
                            size: s,
                            className: t,
                            expand: c,
                            icon: !!u
                        })),
                        ref: v,
                        ...h,
                        children: [(0, a.jsxs)("span", {
                            className: "flex items-center gap-8",
                            children: [u && u, f]
                        }), (0, a.jsx)(n.In, {
                            asChild: !0,
                            children: (0, a.jsx)(d.I, {
                                name: i.k.CHEVRON_DOWN_16
                            })
                        })]
                    })
                };
            f.displayName = n.l9.displayName;
            let v = e => {
                let {
                    className: t,
                    children: r,
                    position: i = "popper",
                    ref: s,
                    ...d
                } = e;
                return (0, a.jsx)(n.ZL, {
                    children: (0, a.jsx)(n.UC, {
                        className: (0, l.cn)("border-default bg-default z-9999 relative min-w-[var(--radix-select-trigger-width)] rounded-xl border p-6", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === i && "data-[side=bottom]:translate-y-4 data-[side=left]:-translate-x-4 data-[side=right]:translate-x-4 data-[side=top]:-translate-y-4", t),
                        position: i,
                        ref: s,
                        ...d,
                        children: (0, a.jsx)(n.LM, {
                            className: (0, l.cn)("popper" === i && "h-[var(--radix-select-trigger-height)] w-full"),
                            children: r
                        })
                    })
                })
            };
            v.displayName = n.UC.displayName;
            let h = e => {
                let {
                    className: t,
                    children: r,
                    icon: i,
                    ref: s,
                    ...d
                } = e;
                return (0, a.jsxs)(n.q7, {
                    className: (0, l.cn)("f-ui-03 data-[highlighted]:bg-dark flex h-40 w-full items-center gap-8 rounded-lg px-16 outline-none", "".concat(i ? "pl-10" : "ps-16"), t),
                    ref: s,
                    ...d,
                    children: [i && i, (0, a.jsx)(n.p4, {
                        children: r
                    })]
                })
            };
            h.displayName = n.q7.displayName
        },
        74034: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = (0, r(11985).A)("Expand", [
                ["path", {
                    d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8",
                    key: "1c15vz"
                }],
                ["path", {
                    d: "M3 16.2V21m0 0h4.8M3 21l6-6",
                    key: "1fsnz2"
                }],
                ["path", {
                    d: "M21 7.8V3m0 0h-4.8M21 3l-6 6",
                    key: "hawz9i"
                }],
                ["path", {
                    d: "M3 7.8V3m0 0h4.8M3 3l6 6",
                    key: "u9ee12"
                }]
            ])
        },
        86732: (e, t, r) => {
            r.d(t, {
                al: () => i,
                v6: () => s
            });
            var a = r(21380),
                n = r(97387);

            function l(e) {
                let [t, r] = n.useState(void 0), l = parseInt(a.fi[e]);
                return n.useEffect(() => {
                    let e = window.matchMedia("(max-width: ".concat(l - 1, "px)")),
                        t = () => {
                            r(window.innerWidth < l)
                        };
                    return e.addEventListener("change", t), r(window.innerWidth < l), () => e.removeEventListener("change", t)
                }, [l]), !!t
            }

            function i() {
                return l("md")
            }

            function s() {
                return !l("lg")
            }
        },
        92459: (e, t, r) => {
            r.d(t, {
                e: () => c
            });
            var a = r(4155),
                n = r(26935),
                l = r(93),
                i = r(8854),
                s = r(19018),
                d = r(21380);
            let o = (0, r(8608).F)(["rounded-full overflow-hidden bg-default", "border border-overlay-darker"], {
                    variants: {
                        withLink: {
                            true: "group-hover:border-dark transition-all duration-300",
                            false: ""
                        },
                        size: {
                            xs: "w-20 h-20",
                            sm: "w-28 h-28",
                            md: "w-48 h-48",
                            lg: "w-80 h-80",
                            xl: "w-100 h-100",
                            responsive: "w-48 h-48 md:w-80 md:h-80 xl:w-100 xl:h-100"
                        }
                    },
                    defaultVariants: {
                        size: "responsive"
                    }
                }),
                c = e => {
                    let {
                        image: t,
                        link: r,
                        name: c,
                        size: u = "responsive",
                        className: f,
                        height: v,
                        width: h
                    } = e;
                    if (!(0, i.qt)(t)) return null;
                    let m = !!(null == r ? void 0 : r.href),
                        g = "";
                    switch (u) {
                        case "xs":
                            g = "20px";
                            break;
                        case "sm":
                            g = "28px";
                            break;
                        case "md":
                            g = "48px";
                            break;
                        case "lg":
                            g = "80px";
                            break;
                        case "xl":
                            g = "100px";
                            break;
                        case "responsive":
                            g = "(min-width: ".concat(d.fi.xl, ") 100px, (min-width: ").concat(d.fi.md, ") 80px, 28px")
                    }
                    let p = (0, a.jsx)("div", {
                        className: (0, s.cn)(o({
                            size: u,
                            withLink: m,
                            className: f
                        })),
                        children: (0, a.jsx)(n.Image, {
                            fit: "contain",
                            ...t,
                            height: v,
                            sizes: g,
                            width: h
                        })
                    });
                    return m ? (0, a.jsx)(l.N, {
                        className: "effect-focus group relative overflow-hidden rounded-full",
                        ...r,
                        label: void 0,
                        title: (null == r ? void 0 : r.label) || c,
                        children: p
                    }) : p
                };
            c.displayName = "Avatar"
        },
        96431: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(97387);

            function n() {
                let [e, t] = (0, a.useState)(!1), r = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let e = r.current;
                    if (!e) return;
                    let a = () => {
                        t(e.scrollLeft > 0)
                    };
                    return e.addEventListener("scroll", a), a(), () => {
                        e.removeEventListener("scroll", a)
                    }
                }, []), {
                    hasScrolled: e,
                    scrollContainerRef: r
                }
            }
        }
    }
]);