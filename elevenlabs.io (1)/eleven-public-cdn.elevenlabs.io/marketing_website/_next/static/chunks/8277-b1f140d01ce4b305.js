"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2288, 8277], {
        4014: (e, a, l) => {
            l.d(a, {
                BlockMobileHighlightsWrapper: () => r
            });
            var s = l(4155);
            let t = (0, l(52970).default)(() => l.e(7613).then(l.bind(l, 67613)).then(e => e.BlockMobileHighlights), {
                    loadableGenerated: {
                        webpack: () => [67613]
                    }
                }),
                r = e => (0, s.jsx)(t, { ...e
                })
        },
        7412: (e, a, l) => {
            l.d(a, {
                q: () => n
            });
            var s = l(15246),
                t = l(97387),
                r = l(50088);
            let n = e => {
                let {
                    url: a,
                    id: l,
                    timelineRef: n
                } = e, [i, u] = (0, t.useState)(0), [o, c] = (0, t.useState)(null), d = (0, t.useRef)(null), {
                    setPlayingItemId: g,
                    playingItemId: v
                } = (0, s.E)(), h = v === l;
                (0, t.useEffect)(() => ((() => {
                    if (!n.current) return;
                    d.current && (d.current.destroy(), d.current = null, c(null), u(0));
                    let e = {
                        barWidth: 3,
                        barGap: 3,
                        barRadius: 3,
                        barMinHeight: 3
                    };
                    d.current = r.A.create({
                        container: n.current,
                        waveColor: "#949494",
                        progressColor: "#030712",
                        cursorColor: "rgba(0,0,0,0)",
                        url: a,
                        height: 32,
                        dragToSeek: !0,
                        renderFunction(a, l) {
                            let s = a[0],
                                t = a[1] || a[0],
                                r = s.length,
                                {
                                    width: n,
                                    height: i
                                } = l.canvas,
                                u = i / 2,
                                o = window.devicePixelRatio,
                                c = e.barWidth ? e.barWidth * o : 1,
                                d = e.barGap ? e.barGap * o : e.barWidth ? c / 2 : 0,
                                g = e.barRadius || 0,
                                v = n / (c + d) / r,
                                h = g && "roundRect" in l ? "roundRect" : "rect",
                                m = Array.from(a[0]).reduce((e, a) => Math.max(e, Math.abs(a)), 0),
                                b = m ? 1 / m : 1;
                            l.beginPath();
                            let f = 0,
                                p = 0,
                                x = 0;
                            for (let a = 0; a <= r; a++) {
                                let r = Math.round(a * v);
                                if (r > f) {
                                    let a = Math.max((Math.round(p * u * o) + Math.round(x * u * o)) * b / 2, 2 * e.barMinHeight, 1),
                                        s = u - a / 2;
                                    l[h](f * (c + d), s, c, a, g), f = r, p = 0, x = 0
                                }
                                let n = Math.abs(s[a] || 0),
                                    i = Math.abs(t[a] || 0);
                                n > p && (p = n), i > x && (x = i)
                            }
                            l.fill(), l.closePath()
                        }
                    }), d.current.on("decode", () => {
                        var e, a;
                        u((null === (a = d.current) || void 0 === a ? void 0 : null === (e = a.getDuration) || void 0 === e ? void 0 : e.call(a)) || 0)
                    }), d.current.on("dragstart", () => {
                        var e;
                        null === (e = d.current) || void 0 === e || e.pause()
                    }), d.current.on("click", () => {
                        var e;
                        null === (e = d.current) || void 0 === e || e.play(), g(l)
                    }), d.current.on("dragend", () => {
                        var e;
                        null === (e = d.current) || void 0 === e || e.play(), g(l)
                    }), d.current.on("finish", () => {
                        var e;
                        null === (e = d.current) || void 0 === e || e.seekTo(0), g(null)
                    }), c(d.current.getMediaElement())
                })(), () => {
                    d.current && (d.current.destroy(), d.current = null, c(null), u(0))
                }), [a, l, n, g]), (0, t.useEffect)(() => {
                    if (null !== v && l !== v) {
                        var e;
                        null === (e = d.current) || void 0 === e || e.seekTo(0)
                    }
                    let a = e => {
                        var a;
                        (null === (a = d.current) || void 0 === a ? void 0 : a.getCurrentTime()) !== 0 && "Space" === e.code && (e.preventDefault(), m())
                    };
                    return document.addEventListener("keydown", a), () => {
                        document.removeEventListener("keydown", a)
                    }
                }, [v]), (0, t.useEffect)(() => {
                    var e, a;
                    h ? null === (e = d.current) || void 0 === e || e.play() : null === (a = d.current) || void 0 === a || a.pause()
                }, [h, g]);
                let m = (0, t.useCallback)(e => {
                        null == e || e.stopPropagation(), h ? g(null) : g(l)
                    }, [h, l, g]),
                    b = (0, t.useCallback)(e => {
                        var a;
                        null === (a = d.current) || void 0 === a || a.seekTo(e / i)
                    }, [i]);
                return {
                    duration: i,
                    isPlaying: h,
                    togglePlayPause: m,
                    seekTo: b,
                    mediaElement: o
                }
            }
        },
        9919: (e, a, l) => {
            l.d(a, {
                C: () => h,
                Player: () => m
            });
            var s = l(4155),
                t = l(27595),
                r = l(93695),
                n = l(12109),
                i = l(79428),
                u = l(30927),
                o = l(26935),
                c = l(19018),
                d = l(84297),
                g = l(16899),
                v = l(97387);
            let h = e => {
                    let {
                        playingState: a,
                        onClick: l,
                        buttonSize: t = "md",
                        buttonVariant: r = "secondary"
                    } = e;
                    return (0, s.jsx)(i.$, {
                        className: (0, c.cn)("me-10 flex items-center md:me-0", {
                            "h-32 w-32": "sm" === t,
                            "h-44 w-44 md:h-48 md:w-48": "md" === t
                        }),
                        onClick: l,
                        variant: r,
                        children: (0, s.jsx)(g.hJ, {
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            children: "playing" === a ? (0, s.jsx)(u.I, {
                                className: "color-white",
                                name: d.k.PAUSE_20
                            }) : (0, s.jsx)(u.I, {
                                className: "color-white",
                                name: d.k.PLAY_20
                            })
                        }, a)
                    })
                },
                m = e => {
                    let {
                        classNames: a,
                        name: l,
                        audioSrc: i,
                        tags: u,
                        imgSrc: d,
                        playerButton: g
                    } = e, {
                        activePlayer: m,
                        setActivePlayer: b
                    } = (0, t.R)(), [f, p] = (0, v.useState)("paused"), x = (0, v.useRef)(null), j = (0, v.useId)();
                    (0, v.useEffect)(() => {
                        if (m != j) {
                            var e;
                            null === (e = x.current) || void 0 === e || e.pause(), p("paused")
                        }
                    }, [m, j]);
                    let y = () => {
                        var e, a;
                        "paused" == f ? (b(j), null === (e = x.current) || void 0 === e || e.play()) : null === (a = x.current) || void 0 === a || a.pause(), p(e => "playing" === e ? "paused" : "playing")
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("audio", {
                            onEnded: () => p("paused"),
                            onPause: () => p("paused"),
                            onPlay: () => p("playing"),
                            ref: x,
                            src: "string" == typeof i ? i : (0, r.g5)(i)
                        }), (0, s.jsxs)("div", {
                            className: "md:f-ui-01 relative flex h-auto flex-1 flex-row-reverse items-center justify-end md:flex-row md:justify-start md:justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, s.jsx)("div", {
                                    className: (0, c.cn)("user-select-none pointer-events-none shrink-0 overflow-hidden rounded-full", "bg-darker absolute left-0 top-0 h-24 w-24 -translate-x-1/4 -translate-y-1/4", "md:bg-dark md:static md:me-12 md:h-48 md:w-48 md:translate-x-0 md:translate-y-0"),
                                    children: (0, s.jsx)(o.Image, {
                                        alt: l,
                                        fit: "cover",
                                        height: 40,
                                        resource: d,
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        width: 40
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-1 flex-col gap-6",
                                    children: [(0, s.jsx)("div", {
                                        className: "f-ui-03 text-default",
                                        children: l
                                    }), (0, s.jsx)("div", {
                                        className: "text-default flex gap-4",
                                        children: null == u ? void 0 : u.map((e, a) => (0, s.jsx)(n.E, {
                                            className: (0, c.cn)("f-ui-02", e.className),
                                            children: e.name
                                        }, a))
                                    })]
                                })]
                            }), g ? g({
                                onClick: y,
                                playingState: f
                            }) : (0, s.jsx)(h, {
                                onClick: y,
                                playingState: f
                            })]
                        })]
                    })
                }
        },
        12109: (e, a, l) => {
            l.d(a, {
                E: () => n
            });
            var s = l(4155),
                t = l(19018);
            let r = (0, l(8608).F)(["inline-flex items-center flex-none justify-center whitespace-nowrap", "rounded-full"], {
                variants: {
                    variant: {
                        default: "bg-dark",
                        strong: "bg-inverse text-inverse",
                        inverse: "bg-default text-default",
                        positive: "bg-positive text-positive",
                        negative: "bg-negative text-negative",
                        professional: "bg-yellow"
                    },
                    size: {
                        sm: "px-8 py-2 f-ui-04",
                        md: "px-8 py-4 f-ui-04",
                        lg: "px-20 py-16 f-ui-03"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "md"
                }
            });

            function n(e) {
                let {
                    className: a,
                    variant: l,
                    size: n,
                    ...i
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, t.cn)(r({
                        variant: l,
                        size: n
                    }), a),
                    ...i
                })
            }
        },
        14139: (e, a, l) => {
            l.d(a, {
                qE: () => s,
                y1: () => r
            });
            let s = function(e) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return Math.min(l, Math.max(a, e))
                },
                t = (e, a, l) => e * (1 - l) + a * l,
                r = (e, a, l, s, r) => t(l, s, n(e, a, r)),
                n = (e, a, l) => s((l - e) / (a - e))
        },
        15246: (e, a, l) => {
            l.d(a, {
                E: () => i,
                M: () => n
            });
            var s = l(4155),
                t = l(97387);
            let r = t.createContext(null);

            function n(e) {
                let {
                    children: a
                } = e, [l, n] = (0, t.useState)(null);
                return (0, s.jsx)(r.Provider, {
                    value: {
                        playingItemId: l,
                        setPlayingItemId: n
                    },
                    children: a
                })
            }
            let i = () => {
                let e = (0, t.useContext)(r);
                if (!e) throw Error("useAudioList must be used within a AudioListProvider");
                return e
            }
        },
        16810: (e, a, l) => {
            l.d(a, {
                AudioList: () => C
            });
            var s = l(4155),
                t = l(15246),
                r = l(47229),
                n = l(38354),
                i = l(54099),
                u = l(79428),
                o = l(42028),
                c = l(26935),
                d = l(93),
                g = l(92952),
                v = l(63133),
                h = l(7412),
                m = l(8854),
                b = l(6824),
                f = l(84297),
                p = l(50245),
                x = l(40030),
                j = l(97387),
                y = l(13987);
            let w = e => {
                let {
                    isPlaying: a,
                    children: l,
                    className: t,
                    track: r,
                    onDownload: n,
                    togglePlayPause: o
                } = e, c = (0, x.useTranslations)();
                return (0, s.jsxs)(i.rw, {
                    className: t,
                    children: [(0, s.jsx)(g.x, {
                        isPlaying: a,
                        onClick: o
                    }), l, (0, s.jsx)(v.TooltipProvider, {
                        children: (0, s.jsxs)(v.Tooltip, {
                            children: [(0, s.jsx)(v.TooltipTrigger, {
                                asChild: !0,
                                children: (0, s.jsx)(u.$, {
                                    "aria-label": "Download",
                                    iconName: f.k.DOWNLOAD_20,
                                    onClick: e => {
                                        null == e || e.stopPropagation(), n(r)
                                    },
                                    size: "pill-sm",
                                    variant: "ghost"
                                })
                            }), (0, s.jsx)(v.TooltipContent, {
                                className: "f-ui-03 border-none px-10 py-8",
                                children: c("Globals.download")
                            })]
                        })
                    })]
                })
            };
            w.displayName = "Controls";
            let N = e => {
                let {
                    isOpen: a,
                    onOpenChange: l,
                    image: t
                } = e, r = (0, p.usePathname)(), n = (0, x.useTranslations)();
                return (0, s.jsx)(o.lG, {
                    onOpenChange: l,
                    open: a,
                    children: (0, s.jsxs)(o.Cf, {
                        className: "bg-default flex w-[calc(100%-40px)] max-w-3xl items-center overflow-hidden rounded-xl",
                        children: [(0, s.jsx)("div", {
                            className: "hidden h-[320px] min-h-[320px] w-[320px] min-w-[320px] md:block",
                            children: "string" == typeof t ? (0, s.jsx)("img", {
                                alt: "",
                                className: "h-full w-full",
                                src: t
                            }) : (null == t ? void 0 : t.url) ? (0, s.jsx)("img", {
                                alt: t.alt || "",
                                className: "h-full w-full",
                                src: t.url
                            }) : null
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-8 p-32",
                            children: [(0, s.jsx)("h2", {
                                className: "f-heading-04",
                                children: n("SignUp.sign_up_experience")
                            }), (0, s.jsx)("p", {
                                className: "f-description-02",
                                children: n("SignUp.sign_up_description")
                            }), (0, s.jsx)(d.N, {
                                asButton: !0,
                                buttonVariants: {
                                    variant: "primary"
                                },
                                className: "mt-8",
                                href: "https://elevenlabs.io/app/sign-up?redirect=".concat(r),
                                children: n("SignUp.sign_up_for_free")
                            })]
                        })]
                    })
                })
            };
            N.displayName = "SubscribeModal";
            let k = e => {
                    let {
                        title: a,
                        shortDescription: l,
                        description: n,
                        track: u,
                        cover: o,
                        id: d,
                        labels: g,
                        onDownload: v
                    } = e, f = (0, j.useRef)(null), {
                        duration: p,
                        isPlaying: x,
                        togglePlayPause: y
                    } = (0, h.q)({
                        url: u,
                        timelineRef: f,
                        id: d
                    }), {
                        setPlayingItemId: N,
                        playingItemId: k
                    } = (0, t.E)();
                    return (0, s.jsxs)(i.Qu, {
                        "aria-label": "Audio Player ".concat(a ? "- ".concat(a) : ""),
                        onClick: () => {
                            N(k === d ? null : d)
                        },
                        children: [(0, m.qt)(o) && (0, s.jsx)(r.gl, {
                            className: " w-full border",
                            ratio: "1x1",
                            children: (0, s.jsx)(c.Image, {
                                sizes: "100px",
                                ...o
                            })
                        }), (0, s.jsxs)(w, {
                            id: d,
                            isPlaying: x,
                            track: u,
                            togglePlayPause: y,
                            onDownload: v,
                            children: [(0, s.jsxs)("div", {
                                className: "w-auto md:w-[280px]",
                                children: [(0, s.jsx)("div", {
                                    className: "flex items-center gap-4",
                                    children: a && (0, s.jsx)("h4", {
                                        className: "f-ui-03",
                                        children: a
                                    })
                                }), l && (0, s.jsx)("h4", {
                                    className: "f-ui-05",
                                    children: l
                                }), n && (0, s.jsx)("p", {
                                    className: "h-0 w-full overflow-y-hidden",
                                    children: n
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-grow items-center justify-end gap-20",
                                children: [(0, s.jsx)("div", {
                                    className: "f-ui-05 ml-8 inline-flex h-full items-center",
                                    children: (0, s.jsx)("time", {
                                        className: "f-ui-05 text-light inline-flex items-center",
                                        children: (0, b.f)(p)
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "-my-8 hidden w-[80%] md:block",
                                    onClick: e => e.stopPropagation(),
                                    ref: f
                                })]
                            })]
                        })]
                    })
                },
                C = e => {
                    let {
                        soundGroups: a,
                        cover: l
                    } = e, [t, r] = (0, j.useState)(!1), [i, u] = (0, y.A)("xi:marketing-sfx-download-count", 0);
                    (0, x.useTranslations)();
                    let o = async e => {
                        if (3 === i) {
                            r(!0);
                            return
                        }
                        let a = await fetch(e),
                            l = await a.blob(),
                            s = URL.createObjectURL(l),
                            t = document.createElement("a");
                        t.href = s, t.download = e.split("/").pop() || "sound.mp3", t.click(), URL.revokeObjectURL(s), u((i || 0) + 1)
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(n.AudioList, {
                            className: "my-24 w-full border-0",
                            children: a.map((e, a) => (0, s.jsxs)("li", {
                                className: "mt-32 w-full first:mt-0",
                                children: [e.title && (0, s.jsx)("h3", {
                                    className: "f-ui-03 border-b px-12 py-12",
                                    children: e.title
                                }), (0, s.jsx)("ul", {
                                    className: "w-full divide-y",
                                    children: e.sounds.map(e => (0, s.jsx)("li", {
                                        children: (0, s.jsx)(k, { ...e,
                                            id: "".concat(a, "-").concat(e.id),
                                            onDownload: o
                                        })
                                    }, "".concat(a, "-").concat(e.id)))
                                })]
                            }, a))
                        }), (0, s.jsx)(N, {
                            image: l,
                            isOpen: t,
                            onOpenChange: r
                        })]
                    })
                };
            C.displayName = "AudioList"
        },
        26808: (e, a, l) => {
            l.d(a, {
                BlockFeatheryForm: () => r
            });
            var s = l(4155);
            let t = (0, l(52970).default)(() => Promise.all([l.e(4909), l.e(2669), l.e(76), l.e(1676), l.e(8934), l.e(1883)]).then(l.bind(l, 41883)), {
                    loadableGenerated: {
                        webpack: () => [41883]
                    }
                }),
                r = e => {
                    let {
                        title: a,
                        formId: l,
                        reset: r,
                        fullWidth: n = !1
                    } = e;
                    return (0, s.jsx)(t, {
                        formId: l,
                        fullWidth: n,
                        reset: r,
                        title: a
                    })
                }
        },
        27595: (e, a, l) => {
            l.d(a, {
                R: () => i,
                d: () => n
            });
            var s = l(4155),
                t = l(97387);
            let r = (0, t.createContext)(void 0),
                n = e => {
                    let {
                        children: a
                    } = e, [l, n] = (0, t.useState)(null);
                    return (0, s.jsx)(r.Provider, {
                        value: {
                            activePlayer: l,
                            setActivePlayer: n
                        },
                        children: a
                    })
                },
                i = () => {
                    let e = (0, t.useContext)(r);
                    if (void 0 === e) throw Error("useActivePlayer must be used within an ActivePlayerProvider");
                    return e
                }
        },
        36683: (e, a, l) => {
            l.d(a, {
                BlockCustomersStoriesWrapper: () => r
            });
            var s = l(4155);
            let t = (0, l(52970).default)(() => l.e(2591).then(l.bind(l, 92591)).then(e => e.BlockCustomersStories), {
                    loadableGenerated: {
                        webpack: () => [92591]
                    }
                }),
                r = e => (0, s.jsx)(t, { ...e
                })
        },
        38354: (e, a, l) => {
            l.d(a, {
                AudioItem: () => d,
                AudioList: () => g
            });
            var s = l(4155),
                t = l(15246),
                r = l(54099),
                n = l(92952),
                i = l(7412),
                u = l(6824),
                o = l(19018),
                c = l(97387);
            let d = e => {
                    let {
                        id: a,
                        title: l,
                        description: d,
                        sampleUrl: g,
                        children: v,
                        ref: h,
                        hideDuration: m,
                        hoverEffects: b = !0,
                        endAligned: f = !0,
                        hideWaveformOnMobile: p = !0
                    } = e, x = c.useRef(null), {
                        duration: j,
                        isPlaying: y,
                        togglePlayPause: w
                    } = (0, i.q)({
                        url: g,
                        timelineRef: x,
                        id: a
                    }), {
                        setPlayingItemId: N,
                        playingItemId: k
                    } = (0, t.E)();
                    return (0, s.jsxs)(r.Qu, {
                        "aria-label": "Audio Player ".concat(l ? "- ".concat(l) : ""),
                        hoverEffects: b,
                        onClick: () => {
                            N(k === a ? null : a)
                        },
                        children: [(0, s.jsxs)(r.rw, {
                            endAligned: f,
                            children: [(0, s.jsx)(n.x, {
                                isPlaying: y,
                                onClick: w
                            }), (l || d) && (0, s.jsxs)(r.JB, {
                                children: [(0, s.jsx)("h4", {
                                    className: "f-ui-03",
                                    children: l
                                }), d && (0, s.jsx)("h4", {
                                    className: "f-ui-05 line-clamp-2",
                                    title: d,
                                    children: d
                                })]
                            }), (0, s.jsxs)("div", {
                                className: (0, o.cn)("flex items-center gap-20", f && "justify-end", p ? "lg:flex-auto" : "flex-auto"),
                                children: [!m && (0, s.jsx)("time", {
                                    className: "f-ui-05 text-light",
                                    children: (0, u.f)(j)
                                }), (0, s.jsx)("div", {
                                    className: "flex h-32 flex-grow",
                                    children: (0, s.jsx)("div", {
                                        className: (0, o.cn)("w-full", p && "hidden lg:block"),
                                        onClick: e => e.stopPropagation(),
                                        ref: x
                                    })
                                })]
                            })]
                        }), v]
                    })
                },
                g = e => {
                    let {
                        children: a,
                        className: l,
                        ref: r,
                        ...n
                    } = e;
                    return (0, s.jsx)("ul", {
                        className: (0, o.cn)("w-full divide-y rounded-lg border", l),
                        ref: r,
                        ...n,
                        children: (0, s.jsx)(t.M, {
                            children: a
                        })
                    })
                }
        },
        42028: (e, a, l) => {
            l.d(a, {
                Cf: () => v,
                Es: () => m,
                L3: () => b,
                c7: () => h,
                lG: () => o,
                rr: () => f,
                zM: () => c
            });
            var s = l(4155),
                t = l(30927),
                r = l(63235),
                n = l(19018),
                i = l(84297),
                u = l(40030);
            let o = r.bL,
                c = r.l9,
                d = r.ZL;
            r.bm;
            let g = e => {
                let {
                    className: a,
                    ref: l,
                    ...o
                } = e, c = (0, u.useTranslations)();
                return (0, s.jsx)(r.hJ, {
                    className: (0, n.cn)("z-9999 bg-overlay-darkest-plus data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 backdrop-blur-[18px]", a),
                    ref: l,
                    ...o,
                    children: (0, s.jsx)(r.bm, {
                        asChild: !0,
                        className: "effect-focus z-9999 absolute right-20 top-20 rounded-full",
                        children: (0, s.jsxs)("button", {
                            className: "effect-opacity effect-focus-inverse bg-default text-default flex h-40 w-40 items-center justify-center rounded-full hover:opacity-85",
                            type: "button",
                            children: [(0, s.jsx)(t.I, {
                                name: i.k.CLOSE_24
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: c("Globals.close")
                            })]
                        })
                    })
                })
            };
            g.displayName = r.hJ.displayName;
            let v = e => {
                let {
                    hasOverlay: a = !0,
                    overlayClassName: l,
                    className: t,
                    children: i,
                    ref: u,
                    ...o
                } = e;
                return (0, s.jsxs)(d, {
                    children: [a && (0, s.jsx)(g, {
                        className: l
                    }), (0, s.jsx)(r.UC, {
                        className: (0, n.cn)("z-9999 bg-default fixed left-[50%] top-[50%] rounded-lg", "w-full translate-x-[-50%] translate-y-[-50%]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200", t),
                        ref: u,
                        ...o,
                        children: i
                    })]
                })
            };
            v.displayName = r.UC.displayName;
            let h = e => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, n.cn)("flex flex-col justify-center space-y-4", a),
                    ...l
                })
            };
            h.displayName = "DialogHeader";
            let m = e => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a),
                    ...l
                })
            };
            m.displayName = "DialogFooter";
            let b = e => {
                let {
                    className: a,
                    ref: l,
                    ...t
                } = e;
                return (0, s.jsx)(r.hE, {
                    className: (0, n.cn)("f-heading-05 leading-none", a),
                    ref: l,
                    ...t
                })
            };
            b.displayName = r.hE.displayName;
            let f = e => {
                let {
                    className: a,
                    ref: l,
                    ...t
                } = e;
                return (0, s.jsx)(r.VY, {
                    className: (0, n.cn)("text-body", a),
                    ref: l,
                    ...t
                })
            };
            f.displayName = r.VY.displayName
        },
        52956: (e, a, l) => {
            l.d(a, {
                Fi: () => r,
                In: () => n,
                Je: () => t,
                yt: () => u
            });
            let s = [{
                label: "English",
                value: "en",
                slug: "english",
                asr: !0,
                tts: !0
            }, {
                label: "Hindi",
                value: "hi",
                slug: "hindi",
                asr: !0,
                tts: !0
            }, {
                label: "Portuguese",
                value: "pt",
                slug: "portuguese",
                asr: !0,
                tts: !0
            }, {
                label: "Chinese",
                value: "zh",
                slug: "chinese",
                asr: !0,
                tts: !0
            }, {
                label: "Spanish",
                value: "es",
                slug: "spanish",
                asr: !0,
                tts: !0
            }, {
                label: "French",
                value: "fr",
                slug: "french",
                asr: !0,
                tts: !0
            }, {
                label: "German",
                value: "de",
                slug: "german",
                asr: !0,
                tts: !0
            }, {
                label: "Japanese",
                value: "ja",
                slug: "japanese",
                asr: !0,
                tts: !0
            }, {
                label: "Arabic",
                value: "ar",
                slug: "arabic",
                asr: !0,
                tts: !0
            }, {
                label: "Russian",
                value: "ru",
                slug: "russian",
                asr: !0,
                tts: !0
            }, {
                label: "Korean",
                value: "ko",
                slug: "korean",
                asr: !0,
                tts: !0
            }, {
                label: "Indonesian",
                value: "id",
                slug: "indonesian",
                asr: !0,
                tts: !0
            }, {
                label: "Italian",
                value: "it",
                slug: "italian",
                asr: !0,
                tts: !0
            }, {
                label: "Dutch",
                value: "nl",
                slug: "dutch",
                asr: !0,
                tts: !0
            }, {
                label: "Turkish",
                value: "tr",
                slug: "turkish",
                asr: !0,
                tts: !0
            }, {
                label: "Polish",
                value: "pl",
                slug: "polish",
                asr: !0,
                tts: !0
            }, {
                label: "Swedish",
                value: "sv",
                slug: "swedish",
                asr: !0,
                tts: !0
            }, {
                label: "Norwegian",
                value: "no",
                slug: "norwegian",
                asr: !0,
                tts: !0
            }, {
                label: "Filipino",
                value: "tl",
                slug: "filipino",
                asr: !0,
                tts: !0
            }, {
                label: "Malay",
                value: "ms",
                slug: "malay",
                asr: !0,
                tts: !0
            }, {
                label: "Romanian",
                value: "ro",
                slug: "romanian",
                asr: !0,
                tts: !0
            }, {
                label: "Hungarian",
                value: "hu",
                slug: "hungarian",
                asr: !0,
                tts: !0
            }, {
                label: "Ukrainian",
                value: "uk",
                slug: "ukrainian",
                asr: !0,
                tts: !0
            }, {
                label: "Greek",
                value: "el",
                slug: "greek",
                asr: !0,
                tts: !0
            }, {
                label: "Czech",
                value: "cs",
                slug: "czech",
                asr: !0,
                tts: !0
            }, {
                label: "Danish",
                value: "da",
                slug: "danish",
                asr: !0,
                tts: !0
            }, {
                label: "Finnish",
                value: "fi",
                slug: "finnish",
                asr: !0,
                tts: !0
            }, {
                label: "Bulgarian",
                value: "bg",
                slug: "bulgarian",
                asr: !0,
                tts: !0
            }, {
                label: "Croatian",
                value: "hr",
                slug: "croatian",
                asr: !0,
                tts: !0
            }, {
                label: "Slovak",
                value: "sk",
                slug: "slovak",
                asr: !0,
                tts: !0
            }, {
                label: "Tamil",
                value: "ta",
                slug: "tamil",
                asr: !0,
                tts: !0
            }, {
                label: "Vietnamese",
                value: "vi",
                slug: "vietnamese",
                asr: !0,
                tts: !0
            }, {
                label: "Afrikaans",
                value: "af",
                slug: "afrikaans",
                asr: !0,
                tts: !1
            }, {
                label: "Amharic",
                value: "am",
                slug: "amharic",
                asr: !0,
                tts: !1
            }, {
                label: "Armenian",
                value: "hy",
                slug: "armenian",
                asr: !0,
                tts: !1
            }, {
                label: "Assamese",
                value: "as",
                slug: "assamese",
                asr: !0,
                tts: !1
            }, {
                label: "Asturian",
                value: "ast",
                slug: "asturian",
                asr: !0,
                tts: !1
            }, {
                label: "Azerbaijani",
                value: "az",
                slug: "azerbaijani",
                asr: !0,
                tts: !1
            }, {
                label: "Bengali",
                value: "bn",
                slug: "bengali",
                asr: !0,
                tts: !1
            }, {
                label: "Belarusian",
                value: "be",
                slug: "belarusian",
                asr: !0,
                tts: !1
            }, {
                label: "Bosnian",
                value: "bs",
                slug: "bosnian",
                asr: !0,
                tts: !1
            }, {
                label: "Burmese",
                value: "my",
                slug: "burmese",
                asr: !0,
                tts: !1
            }, {
                label: "Cantonese",
                value: "yue",
                slug: "cantonese",
                asr: !0,
                tts: !1
            }, {
                label: "Catalan",
                value: "ca",
                slug: "catalan",
                asr: !0,
                tts: !1
            }, {
                label: "Central Kurdish",
                value: "ckb",
                slug: "central-kurdish",
                asr: !0,
                tts: !1
            }, {
                label: "Chichewa",
                value: "ny",
                slug: "chichewa",
                asr: !0,
                tts: !1
            }, {
                label: "Estonian",
                value: "et",
                slug: "estonian",
                asr: !0,
                tts: !1
            }, {
                label: "Fulah",
                value: "ff",
                slug: "fulah",
                asr: !0,
                tts: !1
            }, {
                label: "Galician",
                value: "gl",
                slug: "galician",
                asr: !0,
                tts: !1
            }, {
                label: "Ganda",
                value: "lg",
                slug: "ganda",
                asr: !0,
                tts: !1
            }, {
                label: "Georgian",
                value: "ka",
                slug: "georgian",
                asr: !0,
                tts: !1
            }, {
                label: "Gujarati",
                value: "gu",
                slug: "gujarati",
                asr: !0,
                tts: !1
            }, {
                label: "Hausa",
                value: "ha",
                slug: "hausa",
                asr: !0,
                tts: !1
            }, {
                label: "Hebrew",
                value: "he",
                slug: "hebrew",
                asr: !0,
                tts: !1
            }, {
                label: "Icelandic",
                value: "is",
                slug: "icelandic",
                asr: !0,
                tts: !1
            }, {
                label: "Igbo",
                value: "ig",
                slug: "igbo",
                asr: !0,
                tts: !1
            }, {
                label: "Irish",
                value: "ga",
                slug: "irish",
                asr: !0,
                tts: !1
            }, {
                label: "Javanese",
                value: "jv",
                slug: "javanese",
                asr: !0,
                tts: !1
            }, {
                label: "Kabuverdianu",
                value: "kea",
                slug: "kabuverdianu",
                asr: !0,
                tts: !1
            }, {
                label: "Kannada",
                value: "kn",
                slug: "kannada",
                asr: !0,
                tts: !1
            }, {
                label: "Kazakh",
                value: "kk",
                slug: "kazakh",
                asr: !0,
                tts: !1
            }, {
                label: "Khmer",
                value: "km",
                slug: "khmer",
                asr: !0,
                tts: !1
            }, {
                label: "Kirghiz",
                value: "ky",
                slug: "kirghiz",
                asr: !0,
                tts: !1
            }, {
                label: "Lao",
                value: "lo",
                slug: "lao",
                asr: !0,
                tts: !1
            }, {
                label: "Latvian",
                value: "lv",
                slug: "latvian",
                asr: !0,
                tts: !1
            }, {
                label: "Lingala",
                value: "ln",
                slug: "lingala",
                asr: !0,
                tts: !1
            }, {
                label: "Lithuanian",
                value: "lt",
                slug: "lithuanian",
                asr: !0,
                tts: !1
            }, {
                label: "Luo",
                value: "luo",
                slug: "luo",
                asr: !0,
                tts: !1
            }, {
                label: "Luxembourgish",
                value: "lb",
                slug: "luxembourgish",
                asr: !0,
                tts: !1
            }, {
                label: "Macedonian",
                value: "mk",
                slug: "macedonian",
                asr: !0,
                tts: !1
            }, {
                label: "Maltese",
                value: "mt",
                slug: "maltese",
                asr: !0,
                tts: !1
            }, {
                label: "Malayalam",
                value: "ml",
                slug: "malayalam",
                asr: !0,
                tts: !1
            }, {
                label: "Maori",
                value: "mi",
                slug: "maori",
                asr: !0,
                tts: !1
            }, {
                label: "Marathi",
                value: "mr",
                slug: "marathi",
                asr: !0,
                tts: !1
            }, {
                label: "Mongolian",
                value: "mn",
                slug: "mongolian",
                asr: !0,
                tts: !1
            }, {
                label: "Nepali",
                value: "ne",
                slug: "nepali",
                asr: !0,
                tts: !1
            }, {
                label: "Northern Sotho",
                value: "nso",
                slug: "northern-sotho",
                asr: !0,
                tts: !1
            }, {
                label: "Occitan",
                value: "oc",
                slug: "occitan",
                asr: !0,
                tts: !1
            }, {
                label: "Oriya",
                value: "or",
                slug: "oriya",
                asr: !0,
                tts: !1
            }, {
                label: "Pashto",
                value: "ps",
                slug: "pashto",
                asr: !0,
                tts: !1
            }, {
                label: "Punjabi",
                value: "pa",
                slug: "punjabi",
                asr: !0,
                tts: !1
            }, {
                label: "Pedi",
                value: "nso",
                slug: "pedi",
                asr: !0,
                tts: !1
            }, {
                label: "Persian",
                value: "fa",
                slug: "persian",
                asr: !0,
                tts: !1
            }, {
                label: "Serbian",
                value: "sr",
                slug: "serbian",
                asr: !0,
                tts: !1
            }, {
                label: "Shona",
                value: "sn",
                slug: "shona",
                asr: !0,
                tts: !1
            }, {
                label: "Sindhi",
                value: "sd",
                slug: "sindhi",
                asr: !0,
                tts: !1
            }, {
                label: "Slovenian",
                value: "sl",
                slug: "slovenian",
                asr: !0,
                tts: !1
            }, {
                label: "Somali",
                value: "so",
                slug: "somali",
                asr: !0,
                tts: !1
            }, {
                label: "Swahili",
                value: "sw",
                slug: "swahili",
                asr: !0,
                tts: !1
            }, {
                label: "Tajik",
                value: "tg",
                slug: "tajik",
                asr: !0,
                tts: !1
            }, {
                label: "Telugu",
                value: "te",
                slug: "telugu",
                asr: !0,
                tts: !1
            }, {
                label: "Thai",
                value: "th",
                slug: "thai",
                asr: !0,
                tts: !1
            }, {
                label: "Umbundu",
                value: "umb",
                slug: "umbundu",
                asr: !0,
                tts: !1
            }, {
                label: "Uzbek",
                value: "uz",
                slug: "uzbek",
                asr: !0,
                tts: !1
            }, {
                label: "Urdu",
                value: "ur",
                slug: "urdu",
                asr: !0,
                tts: !1
            }, {
                label: "Welsh",
                value: "cy",
                slug: "welsh",
                asr: !0,
                tts: !1
            }, {
                label: "Wolof",
                value: "wo",
                slug: "wolof",
                asr: !0,
                tts: !1
            }, {
                label: "Zulu",
                value: "zu",
                slug: "zulu",
                asr: !0,
                tts: !1
            }, {
                label: "Xhosa",
                value: "xh",
                slug: "xhosa",
                asr: !0,
                tts: !1
            }];
            s.map(e => ({
                label: e.label,
                slug: e.slug
            }));
            let t = s.filter(e => e.tts).map(e => {
                    let {
                        label: a,
                        slug: l,
                        value: s
                    } = e;
                    return {
                        label: a,
                        slug: l,
                        value: s
                    }
                }),
                r = t.reduce((e, a) => (e[a.value] = a, e), {}),
                n = s.filter(e => e.asr).sort((e, a) => e.label.localeCompare(a.label)).map(e => {
                    let {
                        label: a,
                        slug: l,
                        value: s
                    } = e;
                    return {
                        label: a,
                        slug: l,
                        value: s
                    }
                }),
                i = [...t, {
                    label: "Spanish Castilian",
                    value: "es-castilian",
                    slug: "spanish-castilian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "French Swiss",
                    value: "fr-swiss",
                    slug: "french-swiss-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Turkish Istanbul",
                    value: "tr-istanbul",
                    slug: "turkish-istanbul-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Czech Moravian",
                    value: "cs-moravian",
                    slug: "czech-moravian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "British",
                    value: "en-british",
                    slug: "british-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Canadian",
                    value: "en-canadian",
                    slug: "canadian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "New York",
                    value: "en-newyork",
                    slug: "new-york-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Australian",
                    value: "en-australian",
                    slug: "australian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Indian",
                    value: "en-indian",
                    slug: "indian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Irish",
                    value: "en-irish",
                    slug: "irish-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Italian",
                    value: "it-italian",
                    slug: "italian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Essex",
                    value: "en-essex",
                    slug: "essex-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Scandinavian",
                    value: "sv-scandinavian",
                    slug: "scandinavian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "German",
                    value: "de-german",
                    slug: "german-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "German Bavarian",
                    value: "de-bavarian",
                    slug: "german-bavarian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Russian",
                    value: "ru-russian",
                    slug: "russian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Spanish",
                    value: "es-spanish",
                    slug: "spanish-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Latin American",
                    value: "es-latinamerican",
                    slug: "latin-american-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Mexican",
                    value: "es-mexican",
                    slug: "mexican-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Argentine",
                    value: "es-argentine",
                    slug: "argentine-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Portuguese",
                    value: "pt-portuguese",
                    slug: "portuguese-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Californian",
                    value: "en-californian",
                    slug: "californian-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "African",
                    value: "en-african",
                    slug: "african-accent",
                    asr: !1,
                    tts: !0
                }, {
                    label: "Pakistani",
                    value: "ur-pakistani",
                    slug: "pakistani-accent",
                    asr: !1,
                    tts: !0
                }],
                u = e => {
                    let a = i.find(a => a.value === e);
                    if (!a) throw Error("Language or accent not found: ".concat(e));
                    return a
                }
        },
        54099: (e, a, l) => {
            l.d(a, {
                JB: () => i,
                Qu: () => r,
                rw: () => n
            });
            var s = l(4155),
                t = l(19018);
            let r = e => {
                    let {
                        children: a,
                        className: l,
                        ref: r,
                        hoverEffects: n = !0,
                        ...i
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, t.cn)("flex min-h-[72px] cursor-pointer items-center gap-20 border-b px-8 py-16 last:border-b-0 md:px-16", n && "hover:bg-dark", l),
                        ref: r,
                        role: "region",
                        ...i,
                        children: a
                    })
                },
                n = e => {
                    let {
                        children: a,
                        className: l,
                        ref: r,
                        endAligned: n = !0,
                        ...i
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, t.cn)("flex-1 space-y-12 lg:space-y-20", l),
                        ref: r,
                        ...i,
                        children: (0, s.jsx)("div", {
                            className: (0, t.cn)("flex grow items-center gap-20 xl:gap-64 xl:px-8", n && "justify-between"),
                            children: a
                        })
                    })
                },
                i = e => {
                    let {
                        children: a,
                        className: l,
                        ref: r,
                        ...n
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, t.cn)("flex flex-col md:flex-1", l),
                        ref: r,
                        ...n,
                        children: a
                    })
                }
        },
        58132: (e, a, l) => {
            l.d(a, {
                BlockAgentWrapper: () => r
            });
            var s = l(4155);
            let t = (0, l(52970).default)(() => l.e(5011).then(l.bind(l, 35011)).then(e => e.BlockAgent), {
                    loadableGenerated: {
                        webpack: () => [35011]
                    }
                }),
                r = e => (0, s.jsx)(t, { ...e
                })
        },
        60461: (e, a, l) => {
            l.r(a), l.d(a, {
                SliderExpressive: () => d
            });
            var s = l(4155),
                t = l(5501),
                r = l(54731),
                n = l(93),
                i = l(99813),
                u = l(14139),
                o = l(19018),
                c = l(97387);
            let d = e => {
                let {
                    items: a,
                    inverse: l,
                    className: d,
                    compact: g = !1,
                    cta: v
                } = e, h = (0, c.useRef)(null), [m, b] = (0, c.useState)(), [f, p] = (0, c.useState)(0), x = (0, c.useRef)(0), j = (0, c.useRef)([]), y = (0, c.useCallback)(e => {
                    j.current = (null == e ? void 0 : e.slideNodes().map(e => e.querySelector(".slider-item-content"))) || []
                }, []), w = (0, c.useCallback)(e => {
                    x.current = .46 * ((null == e ? void 0 : e.scrollSnapList().length) || 0)
                }, []), N = (0, c.useCallback)((e, a) => {
                    if (!e) return;
                    let l = e.internalEngine(),
                        s = e.scrollProgress(),
                        t = e.slidesInView(),
                        r = "scroll" === a;
                    p(e.selectedScrollSnap()), e.scrollSnapList().forEach((e, a) => {
                        let n = e - s;
                        l.slideRegistry[a].forEach(a => {
                            if (r && !t.includes(a)) return;
                            l.options.loop && l.slideLooper.loopPoints.forEach(l => {
                                let t = l.target();
                                if (a === l.index && 0 !== t) {
                                    let a = Math.sign(t); - 1 === a && (n = e - (1 + s)), 1 === a && (n = e + (1 - s))
                                }
                            });
                            let i = 1 - Math.abs(n * x.current),
                                o = (0, u.y1)(0, 1, .35, 1, i),
                                c = (0, u.qE)(o, .35, 1).toString(),
                                d = j.current[a],
                                g = d.parentElement;
                            d.style.transform = "scale(".concat(c, ")"), g && (g.style.pointerEvents = ""), i > .5 ? d.style.opacity = (0, u.y1)(.5, 1, .2, 1, i).toString() : i > .25 ? d.style.opacity = (0, u.y1)(.25, .4999, 0, .2, i).toString() : (d.style.opacity = "0", g && (g.style.pointerEvents = "none")), 0 === n ? d.style.zIndex = "10" : d.style.zIndex = ""
                        })
                    })
                }, []);
                (0, c.useEffect)(() => {
                    if (m) return h.current && h.current.classList.remove("opacity-0"), y(m), w(m), N(m), m.on("reInit", y).on("reInit", w).on("reInit", N).on("scroll", N).on("select", N), () => {
                        m.off("reInit", y).off("reInit", w).off("reInit", N).off("scroll", N).off("select", N)
                    }
                }, [m, w, y, N, h]);
                let k = (0, i.P)(v);
                for (; a.length < 6;) a.push(...a);
                let C = (0, c.useCallback)(e => {
                    m && e !== f && m.scrollTo(e)
                }, [f, m]);
                return (0, s.jsxs)(t.Ap, {
                    className: (0, o.cn)("slider-expressive ease-out-slow relative overflow-x-hidden opacity-0 transition-opacity duration-700", d),
                    opts: {
                        align: "center",
                        loop: !0,
                        slides: ".slider-item"
                    },
                    ref: h,
                    setApi: b,
                    children: [(0, s.jsx)(t.pc, {
                        className: (0, o.cn)("breakout py-4", g ? "lg:breakout-reset" : ""),
                        children: null == a ? void 0 : a.map((e, a) => (0, s.jsx)(t.DQ, {
                            className: (0, o.cn)(["slider-item z-1 relative", "-mr-[10%] pl-0", g ? "lg:-mr-3-cols" : "lg:mr-2-cols-no-gutter xxl:w-5-cols-vw", "w-10-cols-vw lg:w-4-cols-vw", "effect-focus-before transform-gpu", a === f ? "slider-item-active z-10 px-0 opacity-100" : "cursor-pointer"]),
                            onClick: () => {
                                C(a)
                            },
                            children: (0, s.jsx)("div", {
                                className: (0, o.cn)("slider-item-content", a === f ? "" : "pointer-events-none select-none"),
                                children: e
                            })
                        }, a))
                    }), !g && (0, s.jsxs)("div", {
                        className: "w-4-cols-vw pointer-events-none absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 lg:flex",
                        children: [(0, s.jsx)("div", {
                            className: "-ml-inner-gutter -left-1-cols pointer-events-auto absolute top-1/2 -translate-y-1/2",
                            children: (0, s.jsx)(r.$T, {
                                size: "pill-sm",
                                variant: l ? "ghost-inverse" : "ghost"
                            })
                        }), (0, s.jsx)("div", {
                            className: "-mr-inner-gutter -right-1-cols pointer-events-auto absolute top-1/2 -translate-y-1/2",
                            children: (0, s.jsx)(r.Vi, {
                                size: "pill-sm",
                                variant: l ? "ghost-inverse" : "ghost"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, o.cn)("container mt-40 flex items-center", k ? "justify-between lg:justify-center" : "justify-center", k || g ? "" : "lg:hidden"),
                        children: [(0, s.jsx)(r.ev, {
                            className: (0, o.cn)(g ? "" : "lg:hidden"),
                            inverse: l
                        }), k && (0, s.jsx)(n.N, {
                            asButton: !0,
                            buttonVariants: {
                                variant: l ? "outline-inverse" : "outline"
                            },
                            ...v
                        })]
                    })]
                })
            };
            d.displayName = "SliderExpressive"
        },
        75400: (e, a, l) => {
            l.d(a, {
                PricingTableHeader: () => u
            });
            var s = l(4155),
                t = l(93),
                r = l(40030);

            function n(e) {
                let {
                    children: a
                } = e;
                return (0, s.jsx)("div", {
                    className: "basis-full",
                    children: (0, s.jsx)("div", {
                        className: "min-w-160 grow",
                        children: (0, s.jsx)("div", {
                            className: "h-120 space-y-12 border-b p-20",
                            children: a
                        })
                    })
                })
            }

            function i(e) {
                let {
                    children: a
                } = e;
                return (0, s.jsx)("p", {
                    className: "f-subhead-01 text-nowrap",
                    children: a
                })
            }
            let u = e => {
                let {
                    offers: a
                } = e, l = (0, r.useTranslations)("PricingCard");
                return (0, s.jsxs)("div", {
                    className: "bg-default container sticky top-[63px] z-10 mt-60 hidden w-full overflow-hidden text-start md:flex",
                    children: [(0, s.jsx)("div", {
                        className: "w-3-cols h-120 border-b"
                    }), (0, s.jsx)("div", {
                        className: "w-9-cols flex gap-0 overflow-x-auto",
                        children: a.map(e => (0, s.jsxs)(n, {
                            children: [(0, s.jsx)(i, {
                                children: l("tiers.".concat(e.plan_id, ".title"))
                            }), (0, s.jsx)(t.N, {
                                asButton: !0,
                                buttonVariants: {
                                    size: "md",
                                    variant: "creator" === e.plan_id ? "primary" : "secondary"
                                },
                                className: "w-full",
                                href: e.cta.href,
                                label: l("cta_label")
                            })]
                        }, e.plan_id))
                    })]
                })
            }
        },
        78472: (e, a, l) => {
            l.r(a), l.d(a, {
                FlagPill: () => p,
                FlagPlayAndLink: () => N,
                FlagPlayer: () => y,
                LargeFlagPill: () => j,
                LinkOrButton: () => x,
                languages: () => w
            });
            var s = l(4155),
                t = l(23916),
                r = l(40030);
            let n = () => {
                let e = (0, r.useLocale)();
                return e === t.q ? "" : "/".concat(e)
            };
            var i = l(93695),
                u = l(86834),
                o = l(30927),
                c = l(93),
                d = l(52956);
            let g = (0, l(8608).F)(["relative container grid-layout rounded-xl overflow-hidden"], {
                variants: {
                    background: {
                        blue: "bg-blue",
                        cyan: "bg-cyan",
                        green: "bg-green",
                        magenta: "bg-magenta",
                        yellow: "bg-yellow",
                        orange: "bg-orange",
                        purple: "bg-purple",
                        red: "bg-red",
                        teal: "bg-teal",
                        neutral: "bg-dark",
                        black: "bg-inverse-light text-inverse"
                    }
                },
                defaultVariants: {
                    background: "neutral"
                }
            });
            var v = l(19018),
                h = l(84297),
                m = l(16899),
                b = l(97387),
                f = l(67393);
            let p = e => {
                    let {
                        name: a,
                        flag: l,
                        href: t,
                        hiddenEnding: i,
                        hideArrow: u = !1
                    } = e, c = n(), d = (0, r.useTranslations)();
                    return (0, s.jsxs)("a", {
                        className: "f-ui-04 bg-default md:f-ui-03 hover:border-darkest flex w-full items-center justify-between overflow-hidden rounded-full border p-8",
                        href: "".concat(c).concat(t),
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, s.jsx)("div", {
                                children: l
                            }), (0, s.jsxs)("div", {
                                className: "mx-8 whitespace-nowrap",
                                children: [d("LanguagesAndAccents.".concat(a)), i && (0, s.jsxs)("span", {
                                    className: "hidden",
                                    children: [" ", i]
                                })]
                            })]
                        }), !u && (0, s.jsx)("div", {
                            className: "text-light mr-4",
                            children: (0, s.jsx)(o.I, {
                                name: h.k.ARROW_UP_RIGHT_16
                            })
                        })]
                    })
                },
                x = e => {
                    let {
                        asButton: a,
                        href: l,
                        children: t,
                        onClick: r,
                        className: n
                    } = e;
                    return a ? (0, s.jsx)("button", {
                        className: n,
                        onClick: r,
                        children: t
                    }) : (0, s.jsx)("a", {
                        className: n,
                        href: l,
                        children: t
                    })
                },
                j = e => {
                    let {
                        flag: a,
                        text: l,
                        onClick: t,
                        href: r,
                        icon: n
                    } = e;
                    return (0, s.jsxs)(x, {
                        asButton: !!t,
                        className: "bg-default md:f-ui-01 hover:border-darkest flex cursor-pointer items-center justify-between rounded-full border p-8",
                        href: r,
                        onClick: t,
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, s.jsx)("div", {
                                children: a
                            }), (0, s.jsx)("div", {
                                className: "f-ui-03 ml-12",
                                children: l
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mr-6 p-12",
                            children: n
                        })]
                    })
                },
                y = e => {
                    let {
                        name: a,
                        flag: l,
                        isPlaying: t,
                        onClick: r
                    } = e;
                    return (0, s.jsx)(j, {
                        flag: l,
                        icon: (0, s.jsxs)(m.hJ, {
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            children: [(0, s.jsx)(o.I, {
                                className: t ? "text-default" : "hidden",
                                name: h.k.PAUSE_20
                            }), (0, s.jsx)(o.I, {
                                className: t ? "hidden" : "text-default",
                                name: h.k.PLAY_20
                            })]
                        }),
                        onClick: r,
                        text: a
                    })
                },
                w = [{
                    label: "English",
                    value: "en",
                    icon: h.k.US_FLAG_20
                }, {
                    label: "Swedish",
                    value: "se",
                    icon: h.k.SE_FLAG_20
                }],
                N = e => {
                    let {
                        headingLevel: a = 2,
                        title: l = "Generate high-quality speech in 32 languages",
                        cta: t = {
                            appearance: "primary",
                            href: "/",
                            label: "View all languages"
                        },
                        samples: r
                    } = e, n = r && r.map(e => {
                        if (!e.languageOrAccentKey) throw Error("Language or accent key is required");
                        let a = (0, d.yt)(e.languageOrAccentKey),
                            l = (0, i.g5)(e.audio);
                        if (!l) throw Error("Audio is required");
                        let s = new Howl({
                            src: [l],
                            autoplay: !1,
                            onend: () => {
                                p(-1)
                            }
                        });
                        return { ...e,
                            languageOrAccent: a,
                            howl: s
                        }
                    }), [o, h] = (0, b.useState)(null), [m, p] = (0, b.useState)(-1), x = e => {
                        if (n && (o && o.stop(), e !== m)) {
                            p(e);
                            let a = n[e].howl;
                            h(a), a.play()
                        }
                    };
                    return (0, s.jsx)("div", {
                        className: (0, v.cn)(g({
                            background: "neutral"
                        })),
                        children: (0, s.jsxs)("div", {
                            className: "grid-col-span-12 flex flex-col p-20 lg:p-28",
                            children: [(0, s.jsx)("div", {
                                children: (0, s.jsx)(u.D, {
                                    className: "f-heading-03 grid-col-span-12 lg:grid-col-span-5 flex flex-grow flex-col",
                                    level: a,
                                    children: l
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex h-full w-full justify-items-stretch gap-12 py-20",
                                children: n && n.map((e, a) => (0, s.jsx)(y, {
                                    flag: (0, s.jsx)(f.default, {
                                        locale: e.languageOrAccent.value,
                                        size: 40
                                    }),
                                    isPlaying: m === a,
                                    name: e.languageOrAccent.label,
                                    onClick: () => x(a)
                                }, a))
                            }), (0, s.jsx)("div", {
                                className: "mt-auto space-y-20 pt-20",
                                children: (0, s.jsx)(c.N, {
                                    asButton: !0,
                                    buttonVariants: {
                                        variant: "primary",
                                        size: "md"
                                    },
                                    ...t
                                })
                            })]
                        })
                    })
                }
        },
        84043: (e, a, l) => {
            l.d(a, {
                Popover: () => i,
                PopoverContent: () => o,
                PopoverTrigger: () => u
            });
            var s = l(4155),
                t = l(53531),
                r = l(19018),
                n = l(97387);
            let i = t.bL,
                u = t.l9;
            t.Mz;
            let o = n.forwardRef((e, a) => {
                let {
                    className: l,
                    align: n = "center",
                    sideOffset: i = 4,
                    ...u
                } = e;
                return (0, s.jsx)(t.ZL, {
                    children: (0, s.jsx)(t.UC, {
                        align: n,
                        className: (0, r.cn)("bg-popover text-popover-foreground z-99 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-72 rounded-md border p-20 shadow-md outline-none", l),
                        ref: a,
                        sideOffset: i,
                        ...u
                    })
                })
            });
            o.displayName = t.UC.displayName
        },
        92952: (e, a, l) => {
            l.d(a, {
                x: () => n
            });
            var s = l(4155),
                t = l(79428),
                r = l(84297);
            let n = e => {
                let {
                    isPlaying: a,
                    ref: l,
                    ...n
                } = e;
                return a ? (0, s.jsx)(t.$, {
                    "aria-label": "Pause",
                    iconName: r.k.PAUSE_24,
                    size: "pill-sm",
                    variant: "ghost",
                    ...n,
                    ref: l
                }) : (0, s.jsx)(t.$, {
                    "aria-label": "Play",
                    iconName: r.k.PLAY_24,
                    size: "pill-sm",
                    variant: "ghost",
                    ...n,
                    ref: l
                })
            }
        },
        93695: (e, a, l) => {
            l.d(a, {
                Qg: () => s,
                bF: () => t,
                f_: () => n,
                g5: () => i
            }), l(55036);
            let s = e => null != e && "object" == typeof e,
                t = e => Array.isArray(e) ? e.filter(e => s(e) && r(e)) : [],
                r = e => "object" == typeof e && "_status" in e && "published" === e._status,
                n = e => {
                    var a;
                    if (s(e) && (null === (a = e.mimeType) || void 0 === a ? void 0 : a.startsWith("video")) && e.url) return e.url
                },
                i = e => {
                    var a;
                    if (s(e) && (null === (a = e.mimeType) || void 0 === a ? void 0 : a.startsWith("audio")) && e.url) return e.url
                }
        }
    }
]);