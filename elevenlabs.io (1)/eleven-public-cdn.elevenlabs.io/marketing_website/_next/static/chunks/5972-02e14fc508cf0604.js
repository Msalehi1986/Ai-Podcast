"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5972], {
        93: (e, t, a) => {
            a.d(t, {
                N: () => f
            });
            var l = a(4155),
                i = a(5291),
                s = a(30927),
                n = a(19018),
                r = a(84297),
                o = a(8608),
                c = a(79428);
            let d = (0, o.F)("inline-flex justify-center items-center rounded-sm", {
                    variants: {
                        variant: {
                            expressive: "",
                            functional: "underline underline-offset-2",
                            clean: "no-underline"
                        },
                        inverse: {
                            true: "text-inverse hover:text-lightest effect-focus-inverse group-hover:text-lightest",
                            false: "hover:text-light group-hover:text-light effect-focus"
                        },
                        size: {
                            xs: "",
                            sm: "",
                            md: "",
                            lg: ""
                        },
                        disabled: {
                            true: "cursor-not-allowed pointer-events-none",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        variant: "functional",
                        size: "sm",
                        className: "f-ui-05"
                    }, {
                        variant: "functional",
                        size: "lg",
                        className: "f-ui-02"
                    }, {
                        variant: "functional",
                        inverse: !1,
                        className: "decoration-darker"
                    }, {
                        variant: "functional",
                        inverse: !0,
                        className: "decoration-lighter"
                    }, {
                        variant: "expressive",
                        size: "xs",
                        className: "f-ui-05"
                    }, {
                        variant: "expressive",
                        size: "sm",
                        className: "f-ui-04"
                    }, {
                        variant: "expressive",
                        size: "md",
                        className: "f-ui-02"
                    }, {
                        variant: "expressive",
                        size: "lg",
                        className: "f-ui-03"
                    }],
                    defaultVariants: {
                        size: "sm",
                        variant: "expressive",
                        inverse: !1,
                        disabled: !1
                    }
                }),
                u = e => {
                    let {
                        href: t,
                        prefetch: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("a", {
                        href: t,
                        ...i,
                        children: i.children
                    })
                },
                f = e => {
                    let {
                        className: t,
                        variant: a,
                        size: o,
                        inverse: f,
                        disabled: m = !1,
                        iconName: x,
                        asButton: h,
                        buttonVariants: p,
                        iconPosition: v = r.F.BEFORE,
                        label: j,
                        children: g,
                        img: C,
                        href: N,
                        ref: w,
                        prefetch: y = !1,
                        ...b
                    } = e, H = function(e) {
                        return "string" != typeof e || e.startsWith("https://") ? e : e.startsWith("http://") ? e.replace("http://", "https://") : e.startsWith("/") ? e : "/".concat(e)
                    }(N), V = "string" == typeof H && (H.startsWith("/docs") || H.startsWith("/app") || H.startsWith("/v1")) ? u : i.N_;
                    return h ? (0, l.jsx)(c.$, {
                        asChild: !0,
                        className: t,
                        disabled: m || !1,
                        link: !0,
                        ...p,
                        iconName: x,
                        iconPosition: v,
                        children: (0, l.jsxs)(V, {
                            "aria-label": b.ariaLabel,
                            href: H,
                            prefetch: y,
                            ref: w,
                            ...b,
                            children: [x && v === r.F.BEFORE && (0, l.jsx)(s.I, {
                                name: x
                            }), j || g, x && v === r.F.AFTER && (0, l.jsx)(s.I, {
                                name: x
                            })]
                        })
                    }) : (0, l.jsx)(V, {
                        "aria-label": b.ariaLabel,
                        className: (0, n.cn)(d({
                            size: o,
                            variant: a,
                            inverse: f,
                            className: t,
                            disabled: m
                        })),
                        href: H,
                        prefetch: y,
                        ref: w,
                        ...b,
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [x && v === r.F.BEFORE && (0, l.jsx)("span", {
                                className: "pr-4",
                                children: (0, l.jsx)(s.I, {
                                    name: x
                                })
                            }), j || g, x && v === r.F.AFTER && (0, l.jsx)("span", {
                                className: "pl-4",
                                children: (0, l.jsx)(s.I, {
                                    name: x
                                })
                            })]
                        })
                    })
                };
            f.displayName = "Link"
        },
        5291: (e, t, a) => {
            a.d(t, {
                N_: () => n,
                a8: () => o,
                rd: () => c
            });
            var l = a(23916),
                i = a(31738);
            let s = (0, a(89469).o)({
                    locales: l.IB,
                    localePrefix: "as-needed",
                    defaultLocale: l.q,
                    localeDetection: !0,
                    alternateLinks: !1
                }),
                {
                    Link: n,
                    redirect: r,
                    usePathname: o,
                    useRouter: c
                } = (0, i.xp)(s)
        },
        8854: (e, t, a) => {
            a.d(t, {
                iu: () => s,
                qt: () => i
            }), a(47229);
            var l = a(21380);
            a(93347).hp;
            let i = e => {
                    var t, a, l;
                    return !!(null == e ? void 0 : null === (t = e.src) || void 0 === t ? void 0 : t.length) || "string" != typeof(null == e ? void 0 : e.resource) && "number" != typeof(null == e ? void 0 : e.resource) && !!(null == e ? void 0 : null === (l = e.resource) || void 0 === l ? void 0 : null === (a = l.url) || void 0 === a ? void 0 : a.length)
                },
                s = {
                    FULL_HALF_ON_LG: "(min-width: ".concat(l.fi.lg, ") 50vw, 100vw"),
                    FULL_3_4_ON_LG: "(min-width: ".concat(l.fi.lg, ") 75vw, 100vw"),
                    FULL_1_3_ON_LG: "(min-width: ".concat(l.fi.lg, ") 33vw, 90vw"),
                    INDUSTRY_CARDS: "(min-width: ".concat(l.fi.lg, ") 33vw, (min-width: ").concat(l.fi.md, " and max-width: ").concat(l.fi.lg, ") 100vw, 160px"),
                    CONTENT_CARDS: "(min-width: ".concat(l.fi.lg, ") 33vw, (min-width: ").concat(l.fi.md, ") and (max-width: ").concat(l.fi.lg, ") 50vw, 100vw")
                }
        },
        11794: (e, t, a) => {
            a.d(t, {
                h: () => o
            });
            var l = a(4155),
                i = a(47229),
                s = a(26935),
                n = a(8854),
                r = a(19018);
            let o = e => {
                let {
                    icon: t,
                    className: a
                } = e;
                return (0, n.qt)(t) && (0, l.jsx)(i.gl, {
                    border: !0,
                    className: (0, r.cn)("bg-default inline-flex w-40 items-center justify-center overflow-hidden rounded-full p-8", a),
                    ratio: "1x1",
                    children: (0, l.jsx)(s.Image, {
                        className: "h-auto w-full",
                        ...t,
                        sizes: "40px"
                    })
                })
            };
            o.displayName = "ProductIcon"
        },
        15972: (e, t, a) => {
            a.d(t, {
                NavigationBar: () => S
            });
            var l = a(4155),
                i = a(30927),
                s = a(93),
                n = a(58529),
                r = a(66349),
                o = a(19018),
                c = a(8608);
            let d = e => {
                let {
                    className: t,
                    children: a,
                    ref: i,
                    ...s
                } = e;
                return (0, l.jsxs)(r.bL, {
                    className: (0, o.cn)("relative z-[1] flex justify-center", t),
                    ref: i,
                    ...s,
                    children: [a, (0, l.jsx)(p, {})]
                })
            };
            d.displayName = r.bL.displayName;
            let u = e => {
                let {
                    className: t,
                    ref: a,
                    ...i
                } = e;
                return (0, l.jsx)(r.B8, {
                    className: (0, o.cn)("flex flex-1 list-none items-center justify-center", t),
                    ref: a,
                    ...i
                })
            };
            u.displayName = r.B8.displayName;
            let f = r.q7,
                m = (0, c.F)(["inline-flex items-center", "effect-color rounded-sm hover:text-light data-[state=open]:text-light effect-focus"], {
                    variants: {
                        expressive: {
                            true: "f-ui-01",
                            false: "f-ui-04"
                        }
                    },
                    defaultVariants: {
                        expressive: !1
                    }
                }),
                x = e => {
                    let {
                        className: t,
                        expressive: a,
                        children: i,
                        ref: s,
                        ...n
                    } = e;
                    return (0, l.jsx)(r.l9, {
                        className: (0, o.cn)(m({
                            expressive: a
                        }), t),
                        ref: s,
                        ...n,
                        children: i
                    })
                };
            x.displayName = r.l9.displayName;
            let h = e => {
                let {
                    className: t,
                    ref: a,
                    ...i
                } = e;
                return (0, l.jsx)(r.UC, {
                    className: (0, o.cn)("origin-top-center absolute left-0 top-0 w-full p-20 sm:w-auto", "data-[motion=from-end]:animate-nav-enter-from-right data-[motion=from-start]:animate-nav-enter-from-left data-[motion=to-end]:animate-nav-exit-to-right data-[motion=to-start]:animate-nav-exit-to-left", "z-99 transform-gpu", t),
                    ref: a,
                    ...i
                })
            };
            h.displayName = r.UC.displayName, r.N_;
            let p = e => {
                let {
                    className: t,
                    ref: a,
                    ...i
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, o.cn)("absolute top-full flex justify-center"),
                    children: (0, l.jsx)(r.LM, {
                        className: (0, o.cn)("bg-default relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl shadow-lg sm:w-[var(--radix-navigation-menu-viewport-width)]", "data-[state=closed]:animate-nav-scale-out data-[state=open]:animate-nav-scale-in origin-top transition-[width,_height] duration-300", t),
                        ref: a,
                        ...i
                    })
                })
            };
            p.displayName = r.LM.displayName, r.C1.displayName;
            var v = a(79428);
            let j = e => {
                let {
                    inverse: t = !1,
                    label: a,
                    id: i = "content"
                } = e;
                return (0, l.jsx)(v.$, {
                    asChild: !0,
                    className: "absolute left-[-99999px] top-20 z-[99999] focus-visible:left-20",
                    variant: t ? "secondary" : "primary",
                    children: (0, l.jsx)("a", {
                        href: "#".concat(i),
                        children: a
                    })
                })
            };
            j.displayName = "SkipToContentLink";
            var g = a(84297),
                C = a(98450),
                N = a(97387),
                w = a(5291),
                y = a(26935),
                b = a(8854),
                H = a(99813);
            let V = e => {
                let {
                    background: t = "light",
                    ctaLabel: a,
                    description: i,
                    descriptionItems: s,
                    image: n,
                    link: r,
                    className: c,
                    ...d
                } = e, u = {
                    resource: n
                };
                return r && (0, H.P)(r) && (0, l.jsx)(w.N_, {
                    className: (0, o.cn)("effect-focus inline-flex h-auto w-full rounded-lg", c),
                    href: r.href,
                    ...d,
                    children: (0, l.jsxs)("div", {
                        className: (0, o.cn)("flex w-full flex-col justify-between gap-24 overflow-hidden rounded-lg", "dark" === t ? "bg-inverse-light text-inverse" : "bg-dark text-default"),
                        children: [(0, l.jsxs)("div", {
                            className: "p-20",
                            children: [(0, l.jsx)("p", {
                                className: "f-ui-03",
                                children: r.label
                            }), i && (0, l.jsx)("p", {
                                className: "f-ui-05 mt-4",
                                children: i
                            }), s && (0, l.jsx)("ul", {
                                className: "f-ui-05 mt-4 list-disc p-4 pl-12",
                                children: s.map(e => (0, l.jsx)("li", {
                                    children: e.label
                                }, e.label))
                            }), a && (0, l.jsx)(v.$, {
                                className: "mt-24",
                                size: "sm",
                                variant: "primary",
                                children: a
                            })]
                        }), (0, b.qt)(u) && (0, l.jsx)(y.Image, {
                            className: "cover",
                            ...u,
                            sizes: "500px"
                        })]
                    })
                })
            };
            V.displayName = "FeatureCard";
            var _ = a(56764);
            let L = e => {
                let {
                    ctas: t,
                    buttonSize: a = "sm",
                    buttonGrow: i = !1,
                    inverse: n = !1,
                    keepLastOnDesktop: r = !1,
                    className: c,
                    goToAppCta: d
                } = e, {
                    isLoggedIn: u
                } = (0, _.Jd)();
                return !u && t && (null == t ? void 0 : t.length) > 0 ? (0, l.jsx)("div", {
                    className: (0, o.cn)("flex items-center gap-x-8", c),
                    children: null == t ? void 0 : t.slice(0, 2).map((e, c) => {
                        let {
                            href: d,
                            label: u
                        } = e;
                        return (0, l.jsx)(s.N, {
                            asButton: !0,
                            buttonVariants: {
                                size: a,
                                variant: c > 0 ? n ? "tertiary" : "primary" : "secondary"
                            },
                            className: (0, o.cn)(t.length > 1 && c < 1 && r ? "hidden lg:inline-flex" : "", i ? "grow" : ""),
                            href: d,
                            children: u
                        }, c)
                    })
                }) : u && d && (0, l.jsx)("div", {
                    className: (0, o.cn)("flex items-center"),
                    children: (0, l.jsx)(s.N, {
                        asButton: !0,
                        buttonVariants: {
                            size: a,
                            variant: n ? "tertiary" : "primary"
                        },
                        className: (0, o.cn)(i ? "grow" : ""),
                        href: d.href,
                        children: d.label
                    })
                })
            };
            L.displayName = "MenuCta";
            var M = a(50245);
            let F = e => {
                let {
                    href: t,
                    children: a,
                    className: i,
                    variant: n = null,
                    ...o
                } = e, c = (0, M.usePathname)();
                return (0, l.jsx)(r.Ws, {
                    active: t === c,
                    asChild: !0,
                    children: (0, l.jsx)(s.N, {
                        className: i,
                        href: t,
                        variant: n,
                        ...o,
                        children: a
                    })
                })
            };
            var I = a(49577),
                Z = a(40030),
                k = a(11794);
            let E = e => {
                let {
                    items: t = [],
                    label: a,
                    index: i,
                    onClick: s
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("p", {
                        className: (0, o.cn)("f-ui-02 text-light px-10", 0 !== i ? "lg:h-20 lg:min-h-[1ch]" : ""),
                        children: a
                    }), (0, l.jsx)("ul", {
                        className: "mt-8 space-y-4",
                        children: null == t ? void 0 : t.map((e, t) => {
                            let {
                                description: a,
                                href: i,
                                target: n,
                                rel: r,
                                icon: c,
                                label: d
                            } = e;
                            return (0, l.jsx)("li", {
                                className: "w-full",
                                children: (0, l.jsxs)(F, {
                                    className: (0, o.cn)("text-default hover:bg-dark hover:text-default w-full justify-start rounded-md p-10 transition-all duration-200 ease-in-out", a ? "min-h-[75px] items-start" : "items-center"),
                                    href: i,
                                    onClick: s,
                                    rel: r,
                                    target: n,
                                    children: [(0, l.jsx)(k.h, {
                                        className: "mr-12 flex-none",
                                        icon: c
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, l.jsx)("span", {
                                            className: "f-ui-03 text-default",
                                            children: d
                                        }), a && (0, l.jsx)("span", {
                                            className: "f-ui-05 text-light mt-2",
                                            children: a
                                        })]
                                    })]
                                })
                            }, t)
                        })
                    })]
                })
            };
            E.displayName = "SuNav";
            let R = e => {
                let {
                    nav: t = [],
                    logoHref: a = "/",
                    ctas: c = [],
                    inverse: d,
                    goToAppCta: u
                } = e, [f, m] = (0, N.useState)(!1), [x, h] = (0, N.useState)(null), p = (0, N.useRef)(null), j = (0, Z.useTranslations)("Globals");
                return (0, l.jsxs)(I.cj, {
                    onOpenChange: e => {
                        m(e), e || h(null)
                    },
                    open: f,
                    children: [(0, l.jsx)(I.CG, {
                        asChild: !0,
                        className: "relative lg:hidden",
                        children: (0, l.jsx)(v.$, {
                            "aria-label": "Open menu",
                            className: "-mr-8",
                            iconName: g.k.MENU_24,
                            size: "pill",
                            variant: d ? "ghost-inverse" : "ghost"
                        })
                    }), (0, l.jsxs)(I.h, {
                        className: "px-outer-gutter flex w-full flex-col border-none",
                        effect: "fade",
                        children: [(0, l.jsx)(I.Fm, {
                            className: "flex h-64 w-full items-center pr-24",
                            children: (0, l.jsx)(I.qp, {
                                className: "flex items-center",
                                children: (0, l.jsx)(s.N, {
                                    href: a,
                                    children: (0, l.jsx)(n.Logo, {})
                                })
                            })
                        }), (0, l.jsx)(r.KS, {
                            className: "flex grow flex-col",
                            orientation: "vertical",
                            ref: p,
                            children: (null == t ? void 0 : t.length) > 0 && (0, l.jsx)("ul", {
                                className: "grow space-y-12",
                                children: t.map((e, t) => {
                                    let {
                                        href: a,
                                        label: s,
                                        subNavs: n,
                                        featured: c
                                    } = e;
                                    return n && n.length > 0 ? (0, l.jsxs)(r.JD, {
                                        className: "menu-item group flex h-32 items-center",
                                        "data-state": (null == x ? void 0 : x.index) === t ? "open" : "closed",
                                        children: [(0, l.jsxs)("button", {
                                            className: "effect-focus effect-color f-ui-01 hover:text-light flex w-full items-center justify-between",
                                            onClick: () => h({
                                                label: s,
                                                index: t
                                            }),
                                            type: "button",
                                            children: [(0, l.jsx)("span", {
                                                children: s
                                            }), (0, l.jsx)(i.I, {
                                                name: g.k.CHEVRON_RIGHT_24
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: (0, o.cn)("px-outer-gutter -mx-outer-gutter bg-default absolute bottom-0 top-0 flex w-screen flex-col gap-28 overflow-y-auto overflow-x-hidden pb-28", "opacity-100 transition-all duration-500 ease-in-out", "transform-gpu", "group-data-[state=closed]:pointer-events-none", "group-data-[state=closed]:translate-x-full", "md:grid-layout"),
                                            children: [(0, l.jsx)("button", {
                                                "aria-label": j("back"),
                                                className: "effect-focus effect-color f-ui-01 hover:text-light absolute left-16 top-20 flex items-center justify-between rounded-full",
                                                onClick: () => h(null),
                                                type: "button",
                                                children: (0, l.jsx)(i.I, {
                                                    name: g.k.CHEVRON_LEFT_24
                                                })
                                            }), (0, l.jsx)("div", {
                                                className: (0, o.cn)("md:grid-col-span-6 mt-48"),
                                                children: n.map((e, t) => {
                                                    let {
                                                        items: a,
                                                        label: i
                                                    } = e;
                                                    return (0, l.jsx)("div", {
                                                        className: (0, o.cn)(i ? "mt-24" : "mt-0"),
                                                        children: (0, l.jsx)(E, {
                                                            items: a,
                                                            label: i,
                                                            onClick: () => m(!1)
                                                        })
                                                    }, t)
                                                })
                                            }), c && (0, l.jsx)("div", {
                                                className: "md:grid-col-span-5 md:grid-col-start-8 pt-28 md:mt-0 md:pt-0",
                                                children: (0, l.jsx)(V, { ...c
                                                })
                                            })]
                                        })]
                                    }, t) : a && s ? (0, l.jsx)(r.JD, {
                                        className: "flex h-32 items-center",
                                        children: (0, l.jsx)(F, {
                                            className: "f-ui-01",
                                            href: a,
                                            onClick: () => m(!1),
                                            variant: null,
                                            children: s
                                        })
                                    }, t) : c ? (0, l.jsx)(r.JD, {
                                        className: "mt-auto flex pt-28",
                                        children: (0, l.jsx)(V, { ...c
                                        })
                                    }, t) : void 0
                                })
                            })
                        }), (null == c ? void 0 : c.length) > 0 && !x && (0, l.jsx)(I.XW, {
                            className: "flex h-80 flex-none items-center md:justify-center",
                            children: (0, l.jsx)(L, {
                                buttonGrow: !0,
                                buttonSize: "lg",
                                className: "w-full md:w-1/2",
                                ctas: c,
                                goToAppCta: u
                            })
                        })]
                    })]
                })
            };
            R.displayName = "MobileMenu";
            let z = e => {
                let {
                    nav: t = [],
                    className: a,
                    panel: n
                } = e;
                return (0, l.jsx)(d, {
                    className: (0, o.cn)("absolute left-1/2 flex -translate-x-1/2 items-center justify-center", a),
                    children: (0, l.jsx)(u, {
                        className: (0, o.cn)(n ? "space-y-12" : "flex items-center"),
                        children: t.map((e, t) => {
                            let {
                                href: a,
                                subNavs: n,
                                label: r,
                                featured: c,
                                rootLink: d
                            } = e, u = (0, l.jsxs)(l.Fragment, {
                                children: [r, n ? (0, l.jsx)("div", {
                                    className: "h-16 w-16",
                                    children: (0, l.jsx)(i.I, {
                                        className: "transition-transform duration-300 ease-in-out",
                                        name: g.k.CHEVRON_DOWN_16
                                    })
                                }) : ""]
                            }), m = d ? (0, l.jsx)(s.N, {
                                href: d.href,
                                variant: "expressive",
                                children: u
                            }) : u;
                            return n || c ? (0, l.jsxs)(f, {
                                className: (0, o.cn)("inline-flex h-40 shrink-0 items-center px-10", n && n.length > 1 ? "" : "relative"),
                                children: [(0, l.jsx)(x, {
                                    className: "py-2",
                                    children: m
                                }), (0, l.jsx)(h, {
                                    children: (0, l.jsxs)("div", {
                                        className: "flex",
                                        children: [null == n ? void 0 : n.map((e, t) => {
                                            let {
                                                items: a,
                                                label: i
                                            } = e;
                                            return (0, l.jsx)("div", {
                                                className: (0, o.cn)("", n.length > 1 ? "min-w-240 mr-12 lg:min-w-[260px]" : "min-w-240", t > 0 && i ? "border-l pl-12" : "", "basis-full"),
                                                children: (0, l.jsx)(E, {
                                                    index: t,
                                                    items: a,
                                                    label: i
                                                })
                                            }, t)
                                        }), c && (0, l.jsx)(V, {
                                            className: "min-w-240 max-w-120 ml-12 w-full lg:min-w-[250px]",
                                            ...c
                                        })]
                                    })
                                })]
                            }, t) : a && (0, l.jsx)(f, {
                                className: "inline-flex h-40 items-center px-10",
                                children: (0, l.jsx)(F, {
                                    href: a,
                                    variant: "expressive",
                                    children: r
                                })
                            }, t)
                        })
                    })
                })
            };
            z.displayName = "MainMenu";
            let S = e => {
                let {
                    className: t,
                    logoHref: a = "/",
                    skipLinkLabel: i,
                    goToAppCta: r,
                    ctas: c,
                    inverse: d = !1,
                    nav: u = []
                } = e, [f, m] = (0, N.useState)(u.filter(e => !e.featureFlag || !e.featureFlagVariant)), x = (0, C.sf)();
                return (0, N.useEffect)(() => {
                    m(u.filter(e => {
                        if (e.featureFlag) {
                            let t = x.getFeatureFlag(e.featureFlag);
                            return !!e.featureFlagVariant == ("test" === t)
                        }
                        return !0
                    }))
                }, [u, x, x.__loaded]), (0, l.jsxs)("div", {
                    className: (0, o.cn)("container z-50 flex min-h-64 items-center justify-between gap-x-20", t, d ? "text-inverse" : ""),
                    children: [(0, l.jsxs)("div", {
                        className: "z-10 flex items-center",
                        children: [(0, l.jsx)(s.N, {
                            href: a,
                            children: (0, l.jsx)(n.Logo, {})
                        }), (0, l.jsx)(j, {
                            id: "content",
                            inverse: d,
                            label: i
                        })]
                    }), f.length > 0 && (0, l.jsx)(z, {
                        className: "hidden lg:flex",
                        nav: f
                    }), (0, l.jsxs)("div", {
                        className: "z-10 flex items-center gap-x-8",
                        children: [(0, l.jsx)(L, {
                            ctas: c,
                            goToAppCta: r,
                            inverse: d,
                            keepLastOnDesktop: !0
                        }), (0, l.jsx)(R, {
                            ctas: c,
                            goToAppCta: r,
                            inverse: d,
                            logoHref: a,
                            nav: f
                        })]
                    })]
                })
            };
            S.displayName = "NavigationBar"
        },
        21380: (e, t, a) => {
            a.d(t, {
                fi: () => l
            });
            let l = {
                sm: "0",
                md: "600px",
                lg: "900px",
                xl: "1280px",
                xxl: "1440px",
                xxxl: "1920px"
            }
        },
        23916: (e, t, a) => {
            a.d(t, {
                $1: () => r,
                IB: () => n,
                cA: () => i,
                q: () => s
            });
            let l = ["hi", "es", "de", "fr", "ja", "pl", "sv"],
                i = ["sv", "pl", "ja", "hi", "fr", "de"],
                s = "en";
            [...l], [...i];
            let n = ["en", ...l];

            function r(e) {
                if ("en" === e);
                else if ("hi" === e) return "hi-in";
                else if ("es" === e) return "es-es";
                else if ("de" === e) return "de-de";
                else if ("fr" === e) return "fr-fr";
                else if ("ja" === e) return "ja-jp";
                else if ("sv" === e) return "sv-se";
                else if ("pl" === e) return "pl-pl";
                return "en-us"
            }
        },
        26935: (e, t, a) => {
            a.r(t), a.d(t, {
                Image: () => d
            });
            var l = a(4155),
                i = a(19018),
                s = a(8608),
                n = a(42600),
                r = a(97387);
            let o = ["storage.googleapis.com", "eleven-public-cdn.elevenlabs.io", a(55036).env.NEXT_PUBLIC_MEDIA_SERVER_URL].filter(e => !!e).map(e => null == e ? void 0 : e.replace("https://", "")),
                c = (0, s.F)("w-full h-full transition-all duration-700 ease-out-slow transform-gpu", {
                    variants: {
                        fit: {
                            cover: "object-cover",
                            contain: "object-contain"
                        },
                        isLoading: {
                            true: "opacity-0 scale-[1.025]",
                            false: ""
                        }
                    },
                    defaultVariants: {
                        fit: "cover",
                        isLoading: !0
                    }
                }),
                d = e => {
                    let {
                        className: t,
                        onLoad: a,
                        onReveal: s,
                        resource: d,
                        fit: u,
                        fill: f,
                        src: m,
                        alt: x,
                        loading: h = "lazy",
                        quality: p = 95,
                        width: v,
                        height: j,
                        sizes: g = "100vw",
                        contained: C,
                        ...N
                    } = e, [w, y] = (0, r.useState)("lazy" === h), [b, H] = (0, r.useState)(!1), V = (0, r.useRef)(null), _ = v, L = j, M = x, F = m || "", I = !0;
                    if (d && "string" != typeof d && "number" != typeof d) {
                        let {
                            width: e,
                            height: t,
                            url: a,
                            alt: l
                        } = d;
                        null !== e && (_ = e), null !== t && (L = t), M = l, "string" == typeof a && (F = a);
                        let i = "";
                        try {
                            i = new URL(F).host
                        } catch (e) {}
                        i && (f || _ && L) && o.includes(i) && (I = !1)
                    }
                    return d && "string" == typeof d && (F = d), F.startsWith("/") && (I = !1), (0, r.useEffect)(() => {
                        if (V.current) {
                            let e = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    t.isIntersecting && (H(!0), e.disconnect())
                                })
                            });
                            return V.current.complete && (y(!1), "function" == typeof s && s()), e.observe(V.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [I, s]), F && (I ? (0, l.jsx)("img", {
                        alt: M || "",
                        className: (0, i.cn)(c({
                            fit: u,
                            isLoading: !b && w,
                            className: t
                        })),
                        height: L,
                        loading: h,
                        onLoad: e => {
                            y(!1), "function" == typeof a && a(e)
                        },
                        onTransitionEnd: () => {
                            "function" == typeof s && s()
                        },
                        ref: V,
                        sizes: g,
                        src: F,
                        width: _,
                        ...N
                    }) : (0, l.jsx)(n.default, {
                        alt: M || "",
                        className: (0, i.cn)(c({
                            fit: u,
                            isLoading: !(b && !w),
                            className: t
                        })),
                        height: f ? void 0 : L,
                        loading: h,
                        onLoad: e => {
                            window.requestAnimationFrame(() => {
                                y(!1)
                            }), "function" == typeof a && a(e)
                        },
                        onTransitionEnd: () => {
                            "function" == typeof s && s()
                        },
                        quality: p,
                        ref: V,
                        sizes: g,
                        src: F,
                        width: f ? void 0 : _,
                        ...N
                    }))
                };
            d.displayName = "Image"
        },
        47229: (e, t, a) => {
            a.d(t, {
                gl: () => n
            });
            var l = a(4155),
                i = a(19018);
            let s = (0, a(8608).F)("relative overflow-hidden", {
                    variants: {
                        ratio: {
                            "1x1": "aspect-1x1",
                            "3x2": "aspect-3x2",
                            "4x3": "aspect-4x3",
                            "16x9": "aspect-16x9",
                            "21x9": "aspect-21x9",
                            responsive: "aspect-1x1 lg:aspect-16x9",
                            responsiveMD: "aspect-1x1 md:aspect-16x9"
                        },
                        border: {
                            true: "border",
                            false: ""
                        },
                        rounded: {
                            true: "rounded-xl",
                            false: ""
                        },
                        centered: {
                            true: "flex justify-center items-center",
                            false: ""
                        }
                    },
                    defaultVariants: {
                        rounded: !0,
                        centered: !0,
                        border: !1
                    }
                }),
                n = e => {
                    let {
                        className: t,
                        ratio: a = "16x9",
                        rounded: n,
                        border: r,
                        centered: o,
                        width: c,
                        height: d,
                        ref: u,
                        ...f
                    } = e, m = "number" == typeof c && "number" == typeof d;
                    return (0, l.jsx)("div", {
                        className: (0, i.cn)(s({
                            ratio: m ? null : a,
                            border: r,
                            rounded: n,
                            centered: o,
                            className: t
                        })),
                        ref: u,
                        style: m ? {
                            aspectRatio: (c || 16) / (d || 9)
                        } : void 0,
                        ...f
                    })
                };
            n.displayName = "AspectRatio"
        },
        49577: (e, t, a) => {
            a.d(t, {
                CG: () => u,
                Fm: () => p,
                XW: () => v,
                cj: () => d,
                h: () => h,
                qp: () => j
            });
            var l = a(4155),
                i = a(30927),
                s = a(63235),
                n = a(19018),
                r = a(84297),
                o = a(8608),
                c = a(40030);
            let d = s.bL,
                u = s.l9;
            s.bm;
            let f = s.ZL,
                m = e => {
                    let {
                        className: t,
                        ref: a,
                        ...i
                    } = e;
                    return (0, l.jsx)(s.hJ, {
                        className: (0, n.cn)("bg-darkest data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0 fixed inset-0 z-50", t),
                        ...i,
                        ref: a
                    })
                };
            m.displayName = s.hJ.displayName;
            let x = (0, o.F)(["fixed z-[999] bg-default", "shadow-lg", "transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500"], {
                    variants: {
                        effect: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
                            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                            fade: "inset-0 h-full data-[state=closed]:fade-out data-[state=open]:fade-in"
                        }
                    },
                    defaultVariants: {
                        effect: "right"
                    }
                }),
                h = e => {
                    let {
                        effect: t = "right",
                        className: a,
                        children: o,
                        hideCloseButton: d = !1,
                        ref: u,
                        ...h
                    } = e, p = (0, c.useTranslations)();
                    return (0, l.jsxs)(f, {
                        children: [(0, l.jsx)(m, {}), (0, l.jsxs)(s.UC, {
                            className: (0, n.cn)(x({
                                effect: t
                            }), a),
                            ref: u,
                            ...h,
                            children: [o, !d && (0, l.jsxs)(s.bm, {
                                className: (0, n.cn)("absolute right-16 top-20", "effect-focus rounded-full", "effect-color hover:text-light", "disabled:pointer-events-none"),
                                children: [(0, l.jsx)(i.I, {
                                    name: r.k.CLOSE_24
                                }), (0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: p("Globals.close")
                                })]
                            })]
                        })]
                    })
                };
            h.displayName = s.UC.displayName;
            let p = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, n.cn)("", t),
                    ...a
                })
            };
            p.displayName = "SheetHeader";
            let v = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, n.cn)("flex w-full", t),
                    ...a
                })
            };
            v.displayName = "SheetFooter";
            let j = e => {
                let {
                    className: t,
                    ref: a,
                    ...i
                } = e;
                return (0, l.jsx)(s.hE, {
                    className: (0, n.cn)("f-ui-01", t),
                    ref: a,
                    ...i
                })
            };
            j.displayName = s.hE.displayName, s.VY.displayName
        },
        56764: (e, t, a) => {
            a.d(t, {
                vu: () => d,
                Jd: () => u
            });
            var l = a(4155),
                i = a(86465);
            class s {
                static fromJSON(e) {
                    let t = JSON.parse(e);
                    return new s(t, t.user_id)
                }
                constructor(e, t) {
                    this.user_id = t, this.workspace_id = e.workspace_id, this.ccpa_opt_out = "ccpa_opt_out" in e ? e.ccpa_opt_out : null, this.email = "email" in e ? e.email : ""
                }
            }
            var n = a(91046),
                r = a(97387);
            let o = (0, r.createContext)(void 0),
                c = () => {
                    let e = (0, n.U)(i.w.User);
                    if (e) try {
                        return s.fromJSON(e)
                    } catch (e) {
                        console.error("Failed to parse user cookie:", e)
                    }
                    return null
                },
                d = e => {
                    let {
                        children: t
                    } = e, [a, i] = (0, r.useState)(void 0), [s, n] = (0, r.useState)(void 0), [d, u] = (0, r.useState)(!0);
                    return (0, r.useEffect)(() => {
                        let e = c();
                        e ? (i(e), n(!0)) : (i(null), n(!1)), u(!1)
                    }, []), (0, l.jsx)(o.Provider, {
                        value: {
                            userData: a,
                            isLoggedIn: s,
                            loadingUser: d
                        },
                        children: t
                    })
                },
                u = () => {
                    let e = (0, r.useContext)(o);
                    if (void 0 === e) throw Error("useUser must be used within a UserProvider");
                    return e
                }
        },
        58529: (e, t, a) => {
            a.r(t), a.d(t, {
                Logo: () => c,
                LogoIcon: () => d,
                StaticLogo: () => u
            });
            var l = a(4155),
                i = a(95674),
                s = a(19018),
                n = a(16899),
                r = a(40030),
                o = a(97387);
            let c = () => {
                let e = (0, o.useRef)(null),
                    t = (0, i.W)(e, {});
                return (0, l.jsx)("div", {
                    className: (0, s.cn)("flex max-w-[121px] items-center"),
                    ref: e,
                    children: t && (0, l.jsx)(m, {})
                })
            };
            c.displayName = "Logo";
            let d = e => {
                let {
                    className: t
                } = e, a = (0, r.useTranslations)();
                return (0, l.jsxs)("div", {
                    className: (0, s.cn)("border-shadow bg-default flex h-60 w-60 items-center justify-center rounded-[15px]", t),
                    children: [(0, l.jsxs)("svg", {
                        fill: "none",
                        height: "20",
                        viewBox: "0 0 12 20",
                        width: "12",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            d: "M4 0H0V20H4V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M12 0H8V20H12V0Z",
                            fill: "currentColor"
                        })]
                    }), (0, l.jsx)("span", {
                        className: "sr-only",
                        children: a("Globals.elevenlabs")
                    })]
                })
            };

            function u(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, s.cn)("flex", t),
                    children: (0, l.jsxs)("svg", {
                        className: "icon icon--logo",
                        fill: "currentColor",
                        height: "22",
                        viewBox: "0 0 171 22",
                        width: "171",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            d: "M61.171 5.42424H56.7863L62.0844 21.6364H66.804L72.1022 5.42424H67.7175L64.3998 17.6364L61.171 5.42424Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M0 0H4.53691V21.6364H0V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M9.01292 0H13.5498V21.6364H9.01292V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M18.0252 0H31.4533V3.60606H22.5622V8.75758H30.8443V12.3636H22.5622V18.0303H31.4533V21.6364H18.0252V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M34.2235 0H38.5169V21.6364H34.2235V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M41.105 13.5152C41.105 7.60606 44.0586 5.06061 48.6564 5.06061C53.2542 5.06061 55.8728 7.57576 55.8728 13.5758V14.5455H45.3375C45.4897 18.0606 46.5554 19.2424 48.5955 19.2424C50.2093 19.2424 51.2141 18.303 51.3968 16.6667H55.6901C55.4161 20.2424 52.4321 22 48.5955 22C43.7237 22 41.105 19.4242 41.105 13.5152ZM51.6404 11.7273C51.4273 8.75758 50.392 7.78788 48.5955 7.78788C46.799 7.78788 45.6724 8.78788 45.3679 11.7273H51.6404Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M72.9243 13.5152C72.9243 7.60606 75.8779 5.06061 80.4757 5.06061C85.0735 5.06061 87.6921 7.57576 87.6921 13.5758V14.5455H77.1567C77.309 18.0606 78.3747 19.2424 80.4148 19.2424C82.0286 19.2424 83.0334 18.303 83.2161 16.6667H87.5094C87.2354 20.2424 84.2514 22 80.4148 22C75.5429 22 72.9243 19.4242 72.9243 13.5152ZM83.4597 11.7273C83.2465 8.75758 82.2113 7.78788 80.4148 7.78788C78.6183 7.78788 77.4917 8.78788 77.1872 11.7273H83.4597Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M108.031 0H112.568V18.0303H121.094V21.6364H108.031V0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M122.16 13.5152C122.16 7.33333 125.022 5.06061 128.706 5.06061C130.533 5.06061 132.208 6.09091 132.878 7.18182V5.42424H137.262V21.6364H133V19.7273C132.36 21 130.564 22 128.584 22C124.687 22 122.16 19.5152 122.16 13.5152ZM129.833 8.24242C131.964 8.24242 133.121 9.84848 133.121 13.5152C133.121 17.1818 131.964 18.8182 129.833 18.8182C127.701 18.8182 126.483 17.1818 126.483 13.5152C126.483 9.84848 127.701 8.24242 129.833 8.24242Z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        }), (0, l.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M144.844 19.7273V21.6364H140.581V0H144.875V7.18182C145.605 6.06061 147.311 5.06061 149.138 5.06061C152.731 5.06061 155.593 7.33333 155.593 13.5152C155.593 19.697 152.791 22 149.046 22C147.067 22 145.453 21 144.844 19.7273ZM147.92 8.27273C150.051 8.27273 151.269 9.84848 151.269 13.5152C151.269 17.1818 150.051 18.8182 147.92 18.8182C145.788 18.8182 144.631 17.1818 144.631 13.5152C144.631 9.84848 145.788 8.27273 147.92 8.27273Z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        }), (0, l.jsx)("path", {
                            d: "M157.359 16.8182H161.652C161.713 18.5152 162.627 19.3333 164.24 19.3333C165.854 19.3333 166.768 18.6061 166.768 17.3333C166.768 16.1818 166.067 15.7576 164.545 15.3939L163.235 15.0606C159.521 14.1212 157.663 13.1212 157.663 10.0606C157.663 7 160.526 5.06061 164.179 5.06061C167.833 5.06061 170.604 6.48485 170.726 9.84848H166.433C166.341 8.36364 165.428 7.72727 164.119 7.72727C162.809 7.72727 161.896 8.36364 161.896 9.57576C161.896 10.697 162.627 11.1212 163.905 11.4242L165.245 11.7576C168.777 12.6364 171 13.5152 171 16.7879C171 20.0606 168.077 22 164.119 22C159.825 22 157.45 20.3939 157.359 16.8182Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M94.6345 12.0909C94.6345 9.54545 95.8524 8.15152 97.7403 8.15152C99.2932 8.15152 100.176 9.12121 100.176 11.2121V21.6364H104.47V10.5455C104.47 6.78788 102.338 5.06061 99.2323 5.06061C97.1313 5.06061 95.3957 6.12121 94.6345 7.51515V5.42424H90.2803V21.6364H94.6345V12.0909Z",
                            fill: "currentColor"
                        })]
                    })
                })
            }

            function f(e) {
                return .5 + .025 * e
            }

            function m(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, s.cn)("flex overflow-visible", t),
                    children: (0, l.jsxs)(n.bi, {
                        className: "icon icon--logo h-full w-full",
                        fill: "currentColor",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 171 22",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                scaleY: 1
                            },
                            d: "M0 0H4.53691V21.6364H0V0Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                scaleY: 1.5
                            },
                            transition: {
                                type: "tween",
                                duration: .3
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                scaleY: 1
                            },
                            d: "M9.01292 0H13.5498V21.6364H9.01292V0Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                scaleY: 1.5
                            },
                            transition: {
                                type: "tween",
                                duration: .3
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M18.0252 0H31.4533V3.60606H22.5622V8.75758H30.8443V12.3636H22.5622V18.0303H31.4533V21.6364H18.0252V0Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(0)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M34.2235 0H38.5169V21.6364H34.2235V0Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(1)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M41.105 13.5152C41.105 7.60606 44.0586 5.06061 48.6564 5.06061C53.2542 5.06061 55.8728 7.57576 55.8728 13.5758V14.5455H45.3375C45.4897 18.0606 46.5554 19.2424 48.5955 19.2424C50.2093 19.2424 51.2141 18.303 51.3968 16.6667H55.6901C55.4161 20.2424 52.4321 22 48.5955 22C43.7237 22 41.105 19.4242 41.105 13.5152ZM51.6404 11.7273C51.4273 8.75758 50.392 7.78788 48.5955 7.78788C46.799 7.78788 45.6724 8.78788 45.3679 11.7273H51.6404Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(2)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M61.171 5.42424H56.7863L62.0844 21.6364H66.804L72.1022 5.42424H67.7175L64.3998 17.6364L61.171 5.42424Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(3)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M72.9243 13.5152C72.9243 7.60606 75.8779 5.06061 80.4757 5.06061C85.0735 5.06061 87.6921 7.57576 87.6921 13.5758V14.5455H77.1567C77.309 18.0606 78.3747 19.2424 80.4148 19.2424C82.0286 19.2424 83.0334 18.303 83.2161 16.6667H87.5094C87.2354 20.2424 84.2514 22 80.4148 22C75.5429 22 72.9243 19.4242 72.9243 13.5152ZM83.4597 11.7273C83.2465 8.75758 82.2113 7.78788 80.4148 7.78788C78.6183 7.78788 77.4917 8.78788 77.1872 11.7273H83.4597Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(4)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M94.6345 12.0909C94.6345 9.54545 95.8524 8.15152 97.7403 8.15152C99.2932 8.15152 100.176 9.12121 100.176 11.2121V21.6364H104.47V10.5455C104.47 6.78788 102.338 5.06061 99.2323 5.06061C97.1313 5.06061 95.3957 6.12121 94.6345 7.51515V5.42424H90.2803V21.6364H94.6345V12.0909Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(5)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M108.031 0H112.568V18.0303H121.094V21.6364H108.031V0Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(6)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            clipRule: "evenodd",
                            d: "M122.16 13.5152C122.16 7.33333 125.022 5.06061 128.706 5.06061C130.533 5.06061 132.208 6.09091 132.878 7.18182V5.42424H137.262V21.6364H133V19.7273C132.36 21 130.564 22 128.584 22C124.687 22 122.16 19.5152 122.16 13.5152ZM129.833 8.24242C131.964 8.24242 133.121 9.84848 133.121 13.5152C133.121 17.1818 131.964 18.8182 129.833 18.8182C127.701 18.8182 126.483 17.1818 126.483 13.5152C126.483 9.84848 127.701 8.24242 129.833 8.24242Z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(7)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            clipRule: "evenodd",
                            d: "M144.844 19.7273V21.6364H140.581V0H144.875V7.18182C145.605 6.06061 147.311 5.06061 149.138 5.06061C152.731 5.06061 155.593 7.33333 155.593 13.5152C155.593 19.697 152.791 22 149.046 22C147.067 22 145.453 21 144.844 19.7273ZM147.92 8.27273C150.051 8.27273 151.269 9.84848 151.269 13.5152C151.269 17.1818 150.051 18.8182 147.92 18.8182C145.788 18.8182 144.631 17.1818 144.631 13.5152C144.631 9.84848 145.788 8.27273 147.92 8.27273Z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(8)
                            }
                        }), (0, l.jsx)(n._I, {
                            animate: {
                                opacity: 1,
                                width: "auto"
                            },
                            d: "M157.359 16.8182H161.652C161.713 18.5152 162.627 19.3333 164.24 19.3333C165.854 19.3333 166.768 18.6061 166.768 17.3333C166.768 16.1818 166.067 15.7576 164.545 15.3939L163.235 15.0606C159.521 14.1212 157.663 13.1212 157.663 10.0606C157.663 7 160.526 5.06061 164.179 5.06061C167.833 5.06061 170.604 6.48485 170.726 9.84848H166.433C166.341 8.36364 165.428 7.72727 164.119 7.72727C162.809 7.72727 161.896 8.36364 161.896 9.57576C161.896 10.697 162.627 11.1212 163.905 11.4242L165.245 11.7576C168.777 12.6364 171 13.5152 171 16.7879C171 20.0606 168.077 22 164.119 22C159.825 22 157.45 20.3939 157.359 16.8182Z",
                            fill: "currentColor",
                            initial: {
                                opacity: 0,
                                width: 0
                            },
                            transition: {
                                type: "tween",
                                duration: .3,
                                delay: f(9)
                            }
                        })]
                    })
                })
            }
            d.displayName = "LogoIcon"
        },
        86465: (e, t, a) => {
            a.d(t, {
                S: () => i,
                w: () => l
            });
            var l = function(e) {
                return e.AnonDistinctId = "anon_distinct_id", e.CCPAOptOut = "ccpa_opt_out", e.User = "user", e
            }({});
            let i = e => "anon_distinct_id" == e ? "anon_distinct_id" : "".concat("xi_website_").concat(e)
        },
        91046: (e, t, a) => {
            a.d(t, {
                T: () => s,
                U: () => n
            });
            var l = a(71327),
                i = a(86465);
            let s = (e, t) => {
                    let a = "." + document.location.hostname.split(".").slice(-2).join(".");
                    l.A.set((0, i.S)(e), t, {
                        domain: a,
                        path: "/",
                        secure: !0,
                        sameSite: "strict",
                        expires: 360
                    })
                },
                n = e => l.A.get((0, i.S)(e))
        },
        99813: (e, t, a) => {
            a.d(t, {
                P: () => l
            });
            let l = e => !!(e && (null == e ? void 0 : e.href) && (null == e ? void 0 : e.label))
        }
    }
]);