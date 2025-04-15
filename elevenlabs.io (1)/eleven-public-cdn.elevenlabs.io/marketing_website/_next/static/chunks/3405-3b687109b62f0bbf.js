"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3405], {
        5501: (e, a, l) => {
            l.d(a, {
                Ap: () => o,
                DQ: () => m,
                PF: () => d,
                pc: () => u
            });
            var t = l(4155),
                r = l(19018),
                n = l(38970),
                s = l(82779),
                i = l(97387);
            let c = i.createContext(null);

            function d() {
                let e = i.useContext(c);
                if (!e) throw Error("useSlider must be used within a <Slider />");
                return e
            }
            let o = e => {
                let {
                    orientation: a = "horizontal",
                    opts: l,
                    setApi: d,
                    plugins: o = [],
                    className: u,
                    children: m,
                    ref: f,
                    ...p
                } = e, [h, x] = (0, s.A)({ ...l,
                    axis: "horizontal" === a ? "x" : "y"
                }, [...o, (0, n.A)()]), [b, v] = i.useState(!1), [g, j] = i.useState(!1), N = i.useCallback(e => {
                    e && (v(e.canScrollPrev()), j(e.canScrollNext()))
                }, []), y = i.useCallback(() => {
                    null == x || x.scrollPrev()
                }, [x]), w = i.useCallback(() => {
                    null == x || x.scrollNext()
                }, [x]), k = i.useCallback(e => {
                    "ArrowLeft" === e.key ? (e.preventDefault(), y()) : "ArrowRight" === e.key && (e.preventDefault(), w())
                }, [y, w]);
                return i.useEffect(() => {
                    x && d && d(x)
                }, [x, d]), i.useEffect(() => {
                    if (x) return N(x), x.on("reInit", N), x.on("select", N), () => {
                        null == x || x.off("select", N)
                    }
                }, [x, N]), (0, t.jsx)(c.Provider, {
                    value: {
                        sliderRef: h,
                        api: x,
                        opts: l,
                        orientation: a || ((null == l ? void 0 : l.axis) === "y" ? "vertical" : "horizontal"),
                        scrollPrev: y,
                        scrollNext: w,
                        canScrollPrev: b,
                        canScrollNext: g
                    },
                    children: (0, t.jsx)("div", {
                        "aria-roledescription": "slider",
                        className: (0, r.cn)("relative", u),
                        onKeyDownCapture: k,
                        ref: f,
                        role: "region",
                        ...p,
                        children: m
                    })
                })
            };
            o.displayName = "Slider";
            let u = e => {
                let {
                    className: a,
                    ref: l,
                    ...n
                } = e, {
                    sliderRef: s
                } = d();
                return (0, t.jsx)("div", {
                    className: a,
                    ref: s,
                    children: (0, t.jsx)("div", {
                        className: (0, r.cn)("flex"),
                        ref: l,
                        ...n
                    })
                })
            };
            u.displayName = "SliderContent";
            let m = e => {
                let {
                    className: a,
                    ref: l,
                    ...n
                } = e;
                return (0, t.jsx)("div", {
                    "aria-roledescription": "slide",
                    className: (0, r.cn)("min-w-0 shrink-0 grow-0", a),
                    ref: l,
                    role: "group",
                    ...n
                })
            };
            m.displayName = "SliderItem"
        },
        6581: (e, a, l) => {
            l.d(a, {
                AudioPlayer: () => h
            });
            var t = l(4155),
                r = l(47229),
                n = l(79428),
                s = l(26935),
                i = l(45327),
                c = l(8854),
                d = l(6824),
                o = l(19018),
                u = l(84297),
                m = l(97387);
            let f = e => {
                let {
                    isPlaying: a,
                    setIsPlaying: l,
                    audioRef: r,
                    children: s,
                    className: c
                } = e, [d, f] = (0, m.useState)(60), [p, h] = (0, m.useState)(!1), x = (0, m.useRef)(void 0), b = () => {
                    l(e => !e)
                }, v = (0, m.useCallback)(() => {
                    r.current && (x.current = requestAnimationFrame(v))
                }, [r]);
                return (0, m.useEffect)(() => {
                    if (r.current) return a ? r.current.play().then(() => {
                        x.current = requestAnimationFrame(v)
                    }).catch(e => {
                        console.error("Unable to play audio: ".concat(e)), l(!1)
                    }) : (r.current.pause(), x.current && cancelAnimationFrame(x.current)), () => x.current ? cancelAnimationFrame(x.current) : void 0
                }, [a, r, v, l]), (0, m.useEffect)(() => {
                    r.current && (r.current.volume = d / 100, r.current.muted = p)
                }, [d, r, p]), (0, t.jsxs)("div", {
                    className: (0, o.cn)("flex items-center gap-8", c),
                    children: [a ? (0, t.jsx)(n.$, {
                        "aria-label": "Pause",
                        iconName: u.k.PAUSE_24,
                        onClick: b,
                        size: "pill-sm",
                        variant: "ghost"
                    }) : (0, t.jsx)(n.$, {
                        "aria-label": "Play",
                        iconName: u.k.PLAY_24,
                        onClick: b,
                        size: "pill-sm",
                        variant: "ghost"
                    }), s, (0, t.jsxs)("div", {
                        className: "flex items-center gap-x-8",
                        children: [(0, t.jsx)(n.$, {
                            "aria-label": "Mute",
                            iconName: p ? u.k.VOLUME_MUTE_24 : u.k.VOLUME_24,
                            onClick: () => h(e => !e),
                            size: "pill-sm",
                            variant: "ghost"
                        }), (0, t.jsx)(i.Q, {
                            className: "w-60",
                            defaultValue: [d],
                            max: 100,
                            min: 0,
                            name: "audio-volume",
                            onValueChange: e => {
                                let [a] = e;
                                return f(a)
                            }
                        })]
                    })]
                })
            };
            f.displayName = "Controls";
            let p = e => {
                var a;
                let {
                    isPlaying: l,
                    duration: r,
                    audioRef: n,
                    className: s
                } = e, [c, u] = (0, m.useState)((null === (a = n.current) || void 0 === a ? void 0 : a.currentTime) || 0), [f, p] = (0, m.useState)(0), h = (0, m.useRef)(void 0), x = (0, m.useCallback)(() => {
                    if (n.current) {
                        let e = n.current.currentTime;
                        u(e), p(e / r * 100)
                    }
                }, [n, r]), b = (0, m.useCallback)(() => {
                    n.current && (x(), h.current = requestAnimationFrame(b))
                }, [n, x]);
                (0, m.useEffect)(() => {
                    if (n.current) return l ? h.current = requestAnimationFrame(b) : h.current && (x(), cancelAnimationFrame(h.current)), () => {
                        h.current && cancelAnimationFrame(h.current)
                    }
                }, [l, n, b, x]);
                let v = (0, m.useCallback)(e => {
                    if (!n.current) return;
                    let [a] = e, t = n.current.duration * (a / 100);
                    p(a), u(t), l || (n.current.pause(), n.current.currentTime = t)
                }, [n, l]);
                return (0, t.jsxs)("div", {
                    className: (0, o.cn)("flex items-center", s),
                    children: [(0, t.jsxs)("div", {
                        className: "f-ui-05 ml-8 mt-2 inline-flex h-full items-center",
                        children: [(0, t.jsx)("time", {
                            className: "f-ui-05 inline-flex w-36 items-center",
                            children: (0, d.f)(c)
                        }), "\xa0/\xa0", (0, t.jsx)("time", {
                            className: "f-ui-05 text-light inline-flex items-center",
                            children: (0, d.f)(r)
                        })]
                    }), (0, t.jsx)(i.Q, {
                        className: "min-w-100 mx-20 hidden w-full flex-grow md:flex",
                        defaultValue: [0],
                        max: 100,
                        min: 0,
                        onValueChange: v,
                        step: .01,
                        value: [f]
                    })]
                })
            };
            p.displayName = "ProgressBar";
            let h = e => {
                let {
                    title: a,
                    track: l,
                    cover: n,
                    className: i
                } = e, [d, u] = (0, m.useState)(!1), h = (0, m.useRef)(null), [x, b] = (0, m.useState)(0), v = (0, m.useCallback)(() => {
                    h.current && b(h.current.duration)
                }, [h]), g = (0, m.useCallback)(() => {
                    u(!1), h.current && (h.current.pause(), h.current.currentTime = 0)
                }, [h, u]);
                return (0, m.useEffect)(() => {
                    if (!h.current) return;
                    let e = h.current;
                    return e.readyState >= 2 ? v() : e.addEventListener("loadedmetadata", v), e.addEventListener("ended", g), () => {
                        e.removeEventListener("loadedmetadata", v), e.removeEventListener("ended", g)
                    }
                }, [h, v, g]), (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        "aria-label": "Audio Player ".concat(a ? "- ".concat(a) : ""),
                        className: (0, o.cn)(i, "flex items-center gap-20 rounded-sm border p-12 lg:p-20"),
                        role: "region",
                        children: [(0, c.qt)(n) && (0, t.jsx)(r.gl, {
                            className: "md:w-100 w-80 shrink-0 border",
                            ratio: "1x1",
                            children: (0, t.jsx)(s.Image, {
                                sizes: "100px",
                                ...n
                            })
                        }), (0, t.jsx)("audio", {
                            "aria-hidden": "true",
                            className: "hidden",
                            ref: h,
                            src: l
                        }), (0, t.jsxs)("div", {
                            className: "flex-1 space-y-12 lg:space-y-20",
                            children: [a && (0, t.jsx)("p", {
                                className: "f-ui-01",
                                children: a
                            }), (0, t.jsx)(f, {
                                isPlaying: d,
                                setIsPlaying: u,
                                audioRef: h,
                                className: "flex grow items-center justify-between",
                                children: (0, t.jsx)(p, {
                                    className: "mr-auto flex flex-1",
                                    audioRef: h,
                                    duration: x,
                                    isPlaying: d
                                })
                            })]
                        })]
                    })
                })
            };
            h.displayName = "AudioPlayer"
        },
        6824: (e, a, l) => {
            l.d(a, {
                f: () => t
            });
            let t = e => {
                if (e && !isNaN(e)) {
                    let a = Math.floor(e / 60),
                        l = Math.floor(e % 60);
                    return "".concat(a < 10 ? "0".concat(a) : "".concat(a), ":").concat(l < 10 ? "0".concat(l) : "".concat(l))
                }
                return "00:00"
            }
        },
        13901: (e, a, l) => {
            l.r(a), l.d(a, {
                AssetDemos: () => C,
                HorizontalHeroDemos: () => P
            });
            var t = l(4155),
                r = l(52970);
            let n = (0, r.default)(() => Promise.all([l.e(9555), l.e(5296)]).then(l.bind(l, 45296)), {
                    loadableGenerated: {
                        webpack: () => [45296]
                    }
                }),
                s = (0, r.default)(() => Promise.all([l.e(9555), l.e(4024)]).then(l.bind(l, 74024)), {
                    loadableGenerated: {
                        webpack: () => [74024]
                    }
                }),
                i = (0, r.default)(() => l.e(4925).then(l.bind(l, 4925)), {
                    loadableGenerated: {
                        webpack: () => [4925]
                    }
                }),
                c = (0, r.default)(() => Promise.all([l.e(7393), l.e(1090)]).then(l.bind(l, 31090)), {
                    loadableGenerated: {
                        webpack: () => [31090]
                    }
                }),
                d = (0, r.default)(() => l.e(8788).then(l.bind(l, 58788)), {
                    loadableGenerated: {
                        webpack: () => [58788]
                    }
                }),
                o = (0, r.default)(() => l.e(9443).then(l.bind(l, 39443)), {
                    loadableGenerated: {
                        webpack: () => [39443]
                    }
                }),
                u = (0, r.default)(() => l.e(288).then(l.bind(l, 90288)), {
                    loadableGenerated: {
                        webpack: () => [90288]
                    }
                }),
                m = (0, r.default)(() => Promise.all([l.e(6103), l.e(1440)]).then(l.bind(l, 51440)), {
                    loadableGenerated: {
                        webpack: () => [51440]
                    }
                }),
                f = (0, r.default)(() => Promise.all([l.e(7393), l.e(2704)]).then(l.bind(l, 62704)), {
                    loadableGenerated: {
                        webpack: () => [62704]
                    }
                }),
                p = (0, r.default)(() => Promise.all([l.e(3755), l.e(1186), l.e(7696), l.e(7393), l.e(4493)]).then(l.bind(l, 24493)), {
                    loadableGenerated: {
                        webpack: () => [24493]
                    }
                }),
                h = (0, r.default)(() => Promise.all([l.e(3755), l.e(1186), l.e(7696), l.e(7393), l.e(4493)]).then(l.bind(l, 24493)), {
                    loadableGenerated: {
                        webpack: () => [24493]
                    }
                }),
                x = (0, r.default)(() => Promise.all([l.e(8613), l.e(9520), l.e(7393), l.e(1204)]).then(l.bind(l, 51204)), {
                    loadableGenerated: {
                        webpack: () => [51204]
                    }
                }),
                b = (0, r.default)(() => Promise.all([l.e(9520), l.e(1186), l.e(7696), l.e(7393), l.e(7456)]).then(l.bind(l, 77456)), {
                    loadableGenerated: {
                        webpack: () => [77456]
                    }
                }),
                v = (0, r.default)(() => l.e(4178).then(l.bind(l, 94178)), {
                    loadableGenerated: {
                        webpack: () => [94178]
                    }
                }),
                g = (0, r.default)(() => l.e(8473).then(l.bind(l, 58473)), {
                    loadableGenerated: {
                        webpack: () => [58473]
                    }
                }),
                j = (0, r.default)(() => Promise.all([l.e(9520), l.e(7393), l.e(976)]).then(l.bind(l, 40976)), {
                    loadableGenerated: {
                        webpack: () => [40976]
                    }
                }),
                N = (0, r.default)(() => l.e(9155).then(l.bind(l, 9155)), {
                    loadableGenerated: {
                        webpack: () => [9155]
                    }
                }),
                y = (0, r.default)(() => l.e(2927).then(l.bind(l, 92927)), {
                    loadableGenerated: {
                        webpack: () => [92927]
                    }
                }),
                w = (0, r.default)(() => l.e(6033).then(l.bind(l, 96033)), {
                    loadableGenerated: {
                        webpack: () => [96033]
                    }
                }),
                k = (0, r.default)(() => l.e(2718).then(l.bind(l, 12718)), {
                    loadableGenerated: {
                        webpack: () => [12718]
                    }
                }),
                C = e => {
                    let {
                        demoKey: a,
                        className: l
                    } = e;
                    switch (a) {
                        case "universallyAccessibleContent":
                            return (0, t.jsx)(j, {});
                        case "elevenStudiosCarousel":
                            return (0, t.jsx)(x, {});
                        case "elevenStudiosAudience":
                            return (0, t.jsx)(p, {});
                        case "elevenStudiosTranslations":
                            return (0, t.jsx)(b, {});
                        case "elevenStudiosCreators":
                            return (0, t.jsx)(h, {});
                        case "developerDemoSpeechToText":
                            return (0, t.jsx)(s, {});
                        case "safety":
                            return (0, t.jsx)(g, {});
                        case "voices":
                            return (0, t.jsx)(y, {
                                className: l
                            });
                        case "projectsHero":
                            return (0, t.jsx)(v, {});
                        case "dubbingHero":
                            return (0, t.jsx)(f, {});
                        case "readerAppHero":
                            return (0, t.jsx)(d, {});
                        case "audioNativeHero":
                            return (0, t.jsx)(o, {});
                        case "languagesDemo":
                            return (0, t.jsx)(c, {});
                        case "voStudioHero":
                            return (0, t.jsx)(N, {});
                        case "convAIAnatomy":
                            return (0, t.jsx)(u, {});
                        case "voicesNarration":
                            return (0, t.jsx)(k, {});
                        case "voicesConversational":
                            return (0, t.jsx)(w, {});
                        case "developerDemo":
                            return (0, t.jsx)(n, {});
                        case "enterpriseFeaturesDemo":
                            return (0, t.jsx)(i, {});
                        default:
                            return null
                    }
                },
                P = e => {
                    let {
                        demoKey: a
                    } = e;
                    return "convAIHero" === a ? (0, t.jsx)(m, {}) : null
                }
        },
        15438: (e, a, l) => {
            l.d(a, {
                Accordion: () => c,
                AccordionContent: () => u,
                AccordionItem: () => d,
                AccordionTrigger: () => o
            });
            var t = l(4155),
                r = l(30927),
                n = l(91953),
                s = l(19018),
                i = l(84297);
            let c = n.bL,
                d = e => {
                    let {
                        className: a,
                        withBorder: l = !0,
                        ref: r,
                        ...i
                    } = e;
                    return (0, t.jsx)(n.q7, {
                        className: (0, s.cn)("relative", l ? "data-[state=open]:border-default rounded-xl border border-transparent" : "", a),
                        ref: r,
                        ...i
                    })
                };
            d.displayName = "AccordionItem";
            let o = e => {
                let {
                    className: a,
                    children: l,
                    withBorder: c = !0,
                    tiny: d = !1,
                    openIcon: o = i.k.PLUS_24,
                    closeIcon: u = i.k.MINUS_24,
                    ref: m,
                    ...f
                } = e;
                return (0, t.jsx)(n.Y9, {
                    className: "flex",
                    children: (0, t.jsxs)(n.l9, {
                        className: (0, s.cn)("effect-color effect-focus-before group flex flex-1 items-center justify-between gap-12 text-left", c ? "hover:border-darkest rounded-xl border pl-20 pr-8 data-[state=open]:!border-transparent" : "", d ? "f-ui-04 h-24 py-4" : "f-subhead-02 py-12", a),
                        ref: m,
                        ...f,
                        children: [l, (0, t.jsx)("span", {
                            className: (0, s.cn)("flex items-center justify-center group-data-[state=open]:hidden", d ? "" : "h-48 w-48"),
                            children: (0, t.jsx)(r.I, {
                                name: o
                            })
                        }), (0, t.jsx)("span", {
                            className: (0, s.cn)("hidden items-center justify-center group-data-[state=open]:flex", d ? "" : "h-48 w-48"),
                            children: (0, t.jsx)(r.I, {
                                name: u
                            })
                        })]
                    })
                })
            };
            o.displayName = n.l9.displayName;
            let u = e => {
                let {
                    className: a,
                    children: l,
                    padded: r = !0,
                    ref: i,
                    ...c
                } = e;
                return (0, t.jsx)(n.UC, {
                    className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all",
                    ref: i,
                    ...c,
                    children: (0, t.jsx)("div", {
                        className: (0, s.cn)("pb-28", r ? "px-20" : "", a),
                        children: l
                    })
                })
            };
            u.displayName = n.UC.displayName
        },
        16670: (e, a, l) => {
            l.r(a), l.d(a, {
                RenderWhenInView: () => i
            });
            var t = l(4155),
                r = l(19018),
                n = l(33845),
                s = l(97387);

            function i(e) {
                let {
                    children: a,
                    once: l = !0,
                    className: i
                } = e, c = (0, s.useRef)(null), d = (0, n.W)(c, {
                    once: l
                });
                return (0, t.jsx)("div", {
                    className: (0, r.cn)("w-full", i),
                    ref: c,
                    children: d && a
                })
            }
        },
        22603: (e, a, l) => {
            l.d(a, {
                ScrollerCards: () => f
            });
            var t = l(4155),
                r = l(47229),
                n = l(86834),
                s = l(93),
                i = l(11794),
                c = l(8854),
                d = l(19018),
                o = l(98450),
                u = l(97387);
            let m = e => {
                    let {
                        item: a,
                        variant: l,
                        inverse: m,
                        border: f,
                        headingLevel: p = 2,
                        index: h
                    } = e, x = (0, u.useRef)(null), b = (0, u.useMemo)(() => "square" === l, [l]), v = (0, o.Tp)("capture_scroller_card_item_scroll_events"), g = (0, o.Tp)("capture_scroller_card_item_click_events"), j = (0, o.sf)(), [N, y] = (0, u.useState)(!1);
                    return (0, u.useEffect)(() => {
                        let e = x.current,
                            l = a.title;
                        if (!e || !v || N || !l) return;
                        let t = new IntersectionObserver(e => {
                            e[0].isIntersecting && (null == j || j.capture("website_scrolled_to_scrollercarditem", {
                                textContent: l
                            }), y(!0))
                        }, {
                            threshold: .75
                        });
                        return t.observe(e), () => {
                            t.unobserve(e)
                        }
                    }, [v, N, a.title, j]), (0, t.jsxs)("div", {
                        className: "grid-layout lg:space-y-40",
                        ref: x,
                        children: [(0, t.jsx)("div", {
                            className: (0, d.cn)("grid-col-span-12 space-y-60", "lg:grid-col-span-5"),
                            children: (0, t.jsx)("div", {
                                className: (0, d.cn)("group flex h-full flex-col items-center justify-center align-middle"),
                                children: (0, t.jsxs)("div", {
                                    className: "w-full",
                                    children: [a.child && !b && (0, t.jsx)(r.gl, {
                                        border: f,
                                        className: "mb-20 lg:hidden",
                                        ratio: "3x2",
                                        children: a.child
                                    }), a.kicker && (0, t.jsx)(n.D, {
                                        className: "text-lightest font-bold uppercase",
                                        level: Math.min(Number(p) + 1, 6).toString(),
                                        children: a.kicker
                                    }), a.title && (0, t.jsx)(n.D, {
                                        className: b ? "f-heading-03" : "f-heading-05",
                                        level: p,
                                        children: a.title
                                    }), a.description && (0, t.jsx)("p", {
                                        className: (0, d.cn)("f-description-02 whitespace-pre-line", b ? "mt-12" : "mt-8"),
                                        children: a.description
                                    }), a.links && a.links.length > 0 && (0, t.jsx)("div", {
                                        className: "mt-20 flex flex-wrap items-center gap-8",
                                        children: a.links.map((e, a) => (0, t.jsxs)(s.N, {
                                            ariaLabel: e.ariaLabel,
                                            asButton: !0,
                                            buttonVariants: {
                                                variant: e.appearance || (m ? "quinary" : "secondary")
                                            },
                                            className: (0, d.cn)((0, c.qt)(e.img) ? "h-52 pl-6" : "", m ? "bg-overlay-light" : ""),
                                            href: e.href,
                                            onClick: () => (function(e) {
                                                (e || g) && (null == j || j.capture("website_clicked_scrollercarditem_button", {
                                                    textContent: e
                                                }))
                                            })(e.label),
                                            children: [(0, t.jsx)(i.h, {
                                                className: "my-6 mr-8",
                                                icon: e.img
                                            }), e.label]
                                        }, a))
                                    }), a.child && b && (0, t.jsx)(r.gl, {
                                        border: f,
                                        className: "mt-28 block lg:hidden",
                                        ratio: "1x1",
                                        children: a.child
                                    })]
                                })
                            }, "inner-".concat(h))
                        }), (0, t.jsx)("div", {
                            className: "lg:grid-col-span-1"
                        }), (0, t.jsx)("div", {
                            className: (0, d.cn)("hidden lg:block", "lg:grid-col-span-6"),
                            children: (0, t.jsx)("div", {
                                className: "flex w-full items-center overflow-hidden rounded-lg",
                                children: (0, t.jsx)(r.gl, {
                                    border: a.withBorder,
                                    className: (0, d.cn)("w-full transform-gpu", "effect-opacity"),
                                    "data-asset-index": h,
                                    ratio: b ? "1x1" : "3x2",
                                    children: a.child
                                }, h)
                            })
                        })]
                    }, h)
                },
                f = e => {
                    let {
                        tag: a,
                        className: l,
                        headingLevel: r,
                        border: n = !1,
                        items: s = [],
                        inverse: i = !1,
                        variant: c = "square"
                    } = e, o = (0, u.useRef)(null);
                    return (0, t.jsx)(a || "section", {
                        className: (0, d.cn)("gap-100 container flex flex-col", l),
                        ref: o,
                        children: s.map((e, a) => (0, t.jsx)(m, {
                            border: n,
                            headingLevel: r,
                            index: a,
                            inverse: i,
                            item: e,
                            variant: c
                        }, a))
                    })
                };
            f.displayName = "ScrollerCards"
        },
        36404: (e, a, l) => {
            l.r(a), l.d(a, {
                LazyVideoPlayer: () => v,
                default: () => g
            });
            var t = l(4155),
                r = l(47229),
                n = l(30927),
                s = l(26935),
                i = l(8854),
                c = l(95674),
                d = l(19018),
                o = l(84297),
                u = l(8608),
                m = l(52970),
                f = l(97387);
            let p = (0, m.default)(() => Promise.all([l.e(9915), l.e(3496), l.e(8800), l.e(1676), l.e(710), l.e(5306)]).then(l.bind(l, 75306)), {
                    loadableGenerated: {
                        webpack: () => [75306]
                    }
                }),
                h = (0, u.F)("pointer-events-auto inline-flex items-center shadow-sm rounded-full effect-transform group-hover:scale-105 hover:scale-105  effect-focus", {
                    variants: {
                        inverse: {},
                        size: {
                            sm: "min-h-48 gap-12 p-4",
                            lg: "min-h-60 gap-16 p-8"
                        },
                        displayLabel: {
                            true: "",
                            false: ""
                        },
                        revealOnGroupHover: {
                            true: "opacity-0 group-hover:opacity-100",
                            false: ""
                        },
                        transparent: {
                            true: "bg-overlay-light text-inverse",
                            false: "bg-default text-default"
                        }
                    },
                    compoundVariants: [{
                        displayLabel: !0,
                        size: "sm",
                        className: "pr-16"
                    }, {
                        displayLabel: !0,
                        size: "lg",
                        className: "pr-20"
                    }],
                    defaultVariants: {
                        size: "sm"
                    }
                }),
                x = e => {
                    let {
                        isMuted: a,
                        className: l,
                        onClick: r
                    } = e;
                    return (0, t.jsxs)("button", {
                        className: (0, d.cn)("effect-transform effect-focus bg-default text-default flex h-40 w-40 items-center justify-center rounded-full shadow-sm duration-300 ease-in-out hover:scale-105  group-hover:scale-105", l),
                        onClick: r,
                        children: [(0, t.jsx)(n.I, {
                            name: a ? o.k.VOLUME_MUTE_24 : o.k.VOLUME_24
                        }), (0, t.jsx)("span", {
                            className: "sr-only",
                            children: a ? "Unmute" : "Mute"
                        })]
                    })
                },
                b = e => {
                    let {
                        isPlaying: a,
                        size: l,
                        displayLabel: r = !0,
                        revealOnGroupHover: s = !1,
                        className: i,
                        transparent: c = !1,
                        onClick: u
                    } = e;
                    return (0, t.jsxs)("button", {
                        "aria-label": a ? "Pause" : "Play",
                        className: (0, d.cn)(h({
                            size: l,
                            className: i,
                            transparent: c,
                            displayLabel: r,
                            revealOnGroupHover: s && a
                        })),
                        onClick: u,
                        children: [(0, t.jsx)("span", {
                            className: (0, d.cn)("flex items-center justify-center rounded-full", r ? "bg-inverse text-inverse" : "", "lg" === l ? "h-60 w-60" : "h-40 w-40"),
                            children: (0, t.jsx)(n.I, {
                                name: a ? o.k.PAUSE_24 : o.k.PLAY_24
                            })
                        }), r && (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            className: "f-ui-04",
                            children: a ? "Pause" : "Play"
                        })]
                    })
                };
            b.displayName = "VideoPlayerButton";
            let v = e => {
                let {
                    autoplay: a = !1,
                    cover: l,
                    className: n,
                    withBorder: o = !0,
                    ratio: u = "16x9",
                    controls: m = !0,
                    withUnmuteButton: h = !1,
                    withPlayButtonLabels: v = !0,
                    transparentButton: g = !1,
                    ...j
                } = e, [N, y] = (0, f.useState)(!1), [w, k] = (0, f.useState)(!!j.muted), [C, P] = (0, f.useState)(null), S = (0, f.useRef)(null), _ = (0, i.qt)(l), [A, E] = (0, f.useState)(!a), [G, L] = (0, f.useState)(!_ || (null == l ? void 0 : l.loading) === "eager" || a), [T, z] = (0, f.useState)(!1), F = (0, c.W)(S, {
                    once: !0
                });
                (0, f.useEffect)(() => {
                    F && z(!0)
                }, [F]);
                let I = e => {
                    T || z(!0), N ? null == C || C.pause(e) : null == C || C.play(e), y(!N)
                };
                return (0, t.jsx)("div", {
                    className: (0, d.cn)("group relative w-full", n),
                    ref: S,
                    children: (0, t.jsxs)(r.gl, {
                        border: o,
                        className: (0, d.cn)("relative overflow-hidden", !_ && "bg-dark"),
                        ratio: u,
                        children: [T && (0, t.jsx)(p, { ...j,
                            autoplay: a || N,
                            controls: m,
                            coverLoaded: G,
                            hasCover: _,
                            muted: w,
                            onAutoPlayFail: () => {
                                E(!0)
                            },
                            ratio: u,
                            setIsMuted: k,
                            setIsPlaying: y,
                            setRemote: P
                        }), _ && A && (0, t.jsx)(s.Image, {
                            className: (0, d.cn)("effect-opacity bg-default absolute -bottom-2 -left-2 -right-2 -top-2 z-10 max-w-none cursor-pointer", N ? "pointer-events-none opacity-0" : ""),
                            onClick: e => {
                                N || I(e)
                            },
                            onReveal: () => {
                                L(!0)
                            },
                            style: {
                                width: "calc(100% + 4px)",
                                height: "calc(100% + 4px)"
                            },
                            ...l
                        }), !m && h && (0, t.jsx)("div", {
                            className: (0, d.cn)("z-2 absolute bottom-12 left-12", l || N || a ? "" : "bg-overlay-lighter", G ? "" : "hidden"),
                            children: (0, t.jsx)(x, {
                                isMuted: w,
                                onClick: () => {
                                    w ? null == C || C.unmute() : null == C || C.mute(), k(!w)
                                }
                            })
                        }), (0, t.jsx)("div", {
                            className: (0, d.cn)("pointer-events-none absolute inset-0 z-20 flex items-center justify-center", l || N || a ? "" : "bg-overlay-lighter", G ? "" : "hidden", m && N ? "hidden" : ""),
                            children: (0, t.jsx)(b, {
                                displayLabel: v,
                                isPlaying: N,
                                onClick: e => I(e),
                                revealOnGroupHover: !A && (m || a),
                                transparent: g
                            })
                        })]
                    })
                })
            };
            v.displayName = "LazyVideoPlayer";
            let g = v
        },
        42696: (e, a, l) => {
            l.r(a), l.d(a, {
                Tabs: () => i,
                TabsContent: () => o,
                TabsList: () => c,
                TabsTrigger: () => d
            });
            var t = l(4155),
                r = l(79428),
                n = l(32940),
                s = l(19018);
            let i = n.bL,
                c = e => {
                    let {
                        className: a,
                        variant: l,
                        ref: r,
                        ...i
                    } = e;
                    return (0, t.jsx)(n.B8, {
                        className: (0, s.cn)("flex items-center", "toggle" === l ? "bg-dark gap-x-4 rounded-full p-6" : "scroller" === l ? "breakout full-bleed-scroller scrollbar-none gap-0 border-b" : " gap-x-12", a),
                        ref: r,
                        ...i
                    })
                },
                d = e => {
                    let {
                        className: a,
                        inverse: l = !1,
                        variant: i = "default",
                        ref: c,
                        ...d
                    } = e;
                    return (0, t.jsx)(n.l9, {
                        className: (0, s.cn)((0, r.r)({
                            variant: "default" === i ? l ? "outline-inverse" : "outline" : "scroller" === i ? "ghost" : "toggle"
                        }), "w-fit", "scroller" === i ? "text-lighter hover:text-default data-[state=active]:border-darkest data-[state=active]:text-default rounded-none data-[state=active]:border-b" : "", a),
                        ref: c,
                        ...d
                    })
                },
                o = e => {
                    let {
                        className: a,
                        ref: l,
                        ...r
                    } = e;
                    return (0, t.jsx)(n.UC, {
                        className: (0, s.cn)("", a),
                        ref: l,
                        ...r
                    })
                }
        },
        45327: (e, a, l) => {
            l.d(a, {
                Q: () => s
            });
            var t = l(4155),
                r = l(17537),
                n = l(19018);
            let s = e => {
                let {
                    className: a,
                    ref: l,
                    ...s
                } = e;
                return (0, t.jsxs)(r.bL, {
                    className: (0, n.cn)("relative flex w-full touch-none select-none items-center", a),
                    ref: l,
                    ...s,
                    children: [(0, t.jsx)(r.CC, {
                        className: "bg-darker relative h-4 w-full grow overflow-hidden rounded-full",
                        children: (0, t.jsx)(r.Q6, {
                            className: "bg-inverse absolute h-full"
                        })
                    }), (0, t.jsx)(r.zi, {
                        className: "effect-focus border-darkest bg-default block h-16 w-16 rounded-full border-2"
                    })]
                })
            };
            s.displayName = r.bL.displayName
        },
        54731: (e, a, l) => {
            l.d(a, {
                $T: () => o,
                Vi: () => d,
                ev: () => u
            });
            var t = l(4155),
                r = l(5501),
                n = l(79428),
                s = l(19018),
                i = l(84297),
                c = l(40030);
            let d = e => {
                let {
                    className: a,
                    variant: l = "secondary",
                    size: d = "md",
                    ref: o,
                    ...u
                } = e, {
                    scrollNext: m,
                    canScrollNext: f
                } = (0, r.PF)(), p = (0, c.useTranslations)();
                return (0, t.jsx)(n.$, {
                    "aria-label": "Next slide",
                    className: (0, s.cn)(a, "focus:z-2"),
                    disabled: !f,
                    iconName: i.k.CHEVRON_RIGHT_24,
                    iconPosition: i.F.AFTER,
                    onClick: m,
                    ref: o,
                    size: d,
                    variant: l,
                    ...u,
                    children: (0, t.jsx)("span", {
                        className: "sr-only",
                        children: p("Globals.next_slide")
                    })
                })
            };
            d.displayName = "SliderNext";
            let o = e => {
                let {
                    className: a,
                    variant: l = "secondary",
                    size: d = "md",
                    ref: o,
                    ...u
                } = e, {
                    scrollPrev: m,
                    canScrollPrev: f
                } = (0, r.PF)(), p = (0, c.useTranslations)();
                return (0, t.jsx)(n.$, {
                    "aria-label": "Previous slide",
                    className: (0, s.cn)(a, "focus:z-2"),
                    disabled: !f,
                    iconName: i.k.CHEVRON_LEFT_24,
                    iconPosition: i.F.BEFORE,
                    onClick: m,
                    ref: o,
                    size: d,
                    variant: l,
                    ...u,
                    children: (0, t.jsx)("span", {
                        className: "sr-only",
                        children: p("Globals.previous_slide")
                    })
                })
            };
            o.displayName = "SliderPrevious";
            let u = e => {
                let {
                    inverse: a = !1,
                    className: l,
                    ...r
                } = e;
                return (0, t.jsxs)("div", {
                    className: (0, s.cn)("flex items-center rounded-full p-4", a ? "bg-overlay-light" : "bg-overlay-dark", l),
                    ...r,
                    children: [(0, t.jsx)(o, {
                        className: "",
                        size: "pill",
                        variant: a ? "quaternary" : "secondary"
                    }), (0, t.jsx)(d, {
                        className: "",
                        size: "pill",
                        variant: a ? "quaternary" : "secondary"
                    })]
                })
            };
            u.displayName = "SliderControls"
        },
        63133: (e, a, l) => {
            l.r(a), l.d(a, {
                Tooltip: () => i,
                TooltipContent: () => d,
                TooltipProvider: () => s,
                TooltipTrigger: () => c
            });
            var t = l(4155),
                r = l(72093),
                n = l(19018);
            let s = r.Kq,
                i = r.bL,
                c = r.l9,
                d = e => {
                    let {
                        className: a,
                        sideOffset: l = 4,
                        ref: s,
                        ...i
                    } = e;
                    return (0, t.jsx)(r.UC, {
                        className: (0, n.cn)("z-99 bg-default overflow-hidden rounded-md border p-20 ", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-md", a),
                        ref: s,
                        sideOffset: l,
                        ...i
                    })
                };
            d.displayName = r.UC.displayName
        },
        86834: (e, a, l) => {
            l.d(a, {
                D: () => n
            });
            var t = l(4155),
                r = l(19018);
            let n = e => {
                let {
                    children: a,
                    level: l,
                    textReveal: n,
                    className: s,
                    ref: i,
                    ...c
                } = e;
                return (0, t.jsx)("h".concat(l), { ...c,
                    className: (0, r.cn)(s),
                    ref: i,
                    children: a
                })
            };
            n.displayName = "Heading"
        },
        94736: (e, a, l) => {
            l.r(a), l.d(a, {
                Block: () => i
            });
            var t = l(4155),
                r = l(95674),
                n = l(19018),
                s = l(97387);
            let i = e => {
                let {
                    name: a,
                    tag: l = "div",
                    revealClass: i = "block-in-view",
                    className: c,
                    ...d
                } = e, o = (0, s.useRef)(null), u = (0, r.W)(o, {
                    once: !0
                });
                return (0, t.jsx)(l, {
                    className: (0, n.cn)("block-el", "block-el-".concat(a), u ? i : "", c),
                    ref: o,
                    ...d
                })
            };
            i.displayName = "Block"
        },
        99402: (e, a, l) => {
            l.r(a), l.d(a, {
                SliderGeneric: () => m
            });
            var t = l(4155),
                r = l(5501),
                n = l(54731),
                s = l(95674),
                i = l(19018),
                c = l(21380),
                d = l(8608),
                o = l(97387);
            let u = (0, d.F)("flex mt-24", {
                    variants: {
                        align: {
                            center: "justify-center",
                            end: "justify-end",
                            start: "justify-start",
                            between: "justify-between"
                        },
                        inContainer: {
                            true: "md:container",
                            false: ""
                        }
                    }
                }),
                m = e => {
                    let {
                        items: a = [],
                        smallCardsOnMobile: l = !1,
                        largeCardsOnMobile: d = !1,
                        largeCardsOnDesktop: m = !1,
                        largeCardsOnTablet: f = !1,
                        inContainer: p = !0,
                        cta: h,
                        itemsPerViewportAtLg: x = 4,
                        alignControls: b = "start",
                        className: v,
                        onDark: g = !1
                    } = e, j = (null == a ? void 0 : a.length) > 0, N = (0, o.useRef)(null), y = (0, s.W)(N, {
                        once: !0
                    }), w = {
                        align: "start",
                        active: !!(null == a ? void 0 : a.length),
                        breakpoints: {
                            ["(min-width: ".concat(c.fi.md, " )")]: {
                                active: !!(null == a ? void 0 : a.length)
                            },
                            ["(min-width: ".concat(c.fi.lg, " )")]: {
                                active: (null == a ? void 0 : a.length) > (m ? x - 1 : x)
                            }
                        }
                    }, k = "";
                    return (null == a ? void 0 : a.length) ? k = "lg:hidden" : a.length >= 2 && a.length <= (m ? x - 1 : x) && (k = "lg:hidden"), j && (0, t.jsxs)(r.Ap, {
                        className: (0, i.cn)(v, y ? "card-reveal" : ""),
                        opts: w,
                        ref: N,
                        children: [(0, t.jsx)("div", {
                            className: (0, i.cn)("breakout !relative overflow-hidden py-4 ", p ? "px-outer-gutter lg:breakout-reset lg:container lg:!px-0" : "!vp-grid"),
                            children: (0, t.jsx)(r.pc, {
                                className: "relative",
                                children: null == a ? void 0 : a.map((e, a) => (0, t.jsx)(r.DQ, {
                                    className: (0, i.cn)("pl-0", a > 0 ? "ml-inner-gutter" : "", f ? "md:w-9-cols" : "md:w-6-cols", 3 === x ? m ? "lg:w-5-cols-vw" : "lg:w-4-cols-vw" : "lg:w-3-cols", d ? "w-11-cols-vw" : l ? "w-9-cols-vw" : "w-10-cols-vw"),
                                    children: e
                                }, a))
                            })
                        }), (0, t.jsxs)("div", {
                            className: (0, i.cn)("container flex flex-wrap items-center", h ? "justify-between" : "end" === b ? "justify-end" : "center" === b ? "justify-center" : "justify-start"),
                            children: [h, (null == a ? void 0 : a.length) && (0, t.jsx)("div", {
                                className: u({
                                    align: b,
                                    className: k,
                                    inContainer: p
                                }),
                                children: (0, t.jsx)(n.ev, {
                                    inverse: g
                                })
                            })]
                        })]
                    })
                };
            m.displayName = "SliderGeneric"
        }
    }
]);