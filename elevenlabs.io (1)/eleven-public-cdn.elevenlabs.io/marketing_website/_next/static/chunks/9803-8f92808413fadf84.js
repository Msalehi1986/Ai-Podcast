(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9803], {
        5213: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            var r = n(67145),
                s = n(98450);
            let i = () => {
                let e = (0, s.sf)();
                return {
                    captureEvent: (t, n) => (0, r.c3)(e, t, n)
                }
            }
        },
        9456: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => A
            });
            var r = n(4155),
                s = n(75489),
                i = n(56764),
                o = n(32754);
            let l = {
                    signIn: "".concat(o.D.WEB_APP_URL, "/sign-in"),
                    signUp: "".concat(o.D.WEB_APP_URL, "/sign-up")
                },
                a = {
                    root: "".concat(o.D.WEB_APP_URL, "/home"),
                    soundEffects: "".concat(o.D.WEB_APP_URL, "/sound-effects"),
                    collections: "".concat(o.D.WEB_APP_URL, "/voice-library/collections")
                };
            var d = n(26935),
                c = n(42696),
                b = n(5213),
                h = n(19018),
                m = n(84297),
                v = n(20808),
                u = n(16899),
                f = n(40030),
                P = n(97387),
                _ = n(93),
                p = n(52970);
            let x = (0, p.default)(() => Promise.all([n.e(1497), n.e(3306), n.e(4228), n.e(226)]).then(n.bind(n, 60226)), {
                    loadableGenerated: {
                        webpack: () => [60226]
                    }
                }),
                g = (0, p.default)(() => Promise.all([n.e(1497), n.e(2724)]).then(n.bind(n, 62724)), {
                    loadableGenerated: {
                        webpack: () => [62724]
                    }
                }),
                w = (0, p.default)(() => Promise.all([n.e(88), n.e(1497), n.e(3306), n.e(2456), n.e(9973)]).then(n.bind(n, 89973)).then(e => e.STT), {
                    loadableGenerated: {
                        webpack: () => [89973]
                    }
                }),
                y = (0, p.default)(() => n.e(2485).then(n.bind(n, 22485)), {
                    loadableGenerated: {
                        webpack: () => [22485]
                    }
                }),
                j = (0, p.default)(() => Promise.all([n.e(1497), n.e(4261), n.e(8467)]).then(n.bind(n, 8467)), {
                    loadableGenerated: {
                        webpack: () => [8467]
                    }
                }),
                k = (0, p.default)(() => Promise.all([n.e(6103), n.e(4890)]).then(n.bind(n, 34890)), {
                    loadableGenerated: {
                        webpack: () => [34890]
                    }
                }),
                N = (0, p.default)(() => Promise.all([n.e(9520), n.e(7393), n.e(4760)]).then(n.bind(n, 44760)), {
                    loadableGenerated: {
                        webpack: () => [44760]
                    }
                }),
                E = (0, p.default)(() => Promise.all([n.e(1497), n.e(4261), n.e(6315)]).then(n.bind(n, 66315)), {
                    loadableGenerated: {
                        webpack: () => [66315]
                    }
                }),
                C = (0, p.default)(() => Promise.all([n.e(1497), n.e(3306), n.e(7393), n.e(4228), n.e(4997), n.e(2288)]).then(n.bind(n, 44997)), {
                    loadableGenerated: {
                        webpack: () => [44997]
                    }
                }),
                T = (0, p.default)(() => Promise.all([n.e(1497), n.e(7282)]).then(n.bind(n, 47282)), {
                    loadableGenerated: {
                        webpack: () => [47282]
                    }
                }),
                L = e => {
                    let {
                        demoKey: t,
                        variant: n,
                        ...s
                    } = e;
                    switch (t) {
                        case "tts":
                            return (0, r.jsx)(C, {
                                variant: n,
                                ...s
                            });
                        case "sts":
                            return (0, r.jsx)(E, { ...s
                            });
                        case "stt":
                            return (0, r.jsx)(w, {
                                variant: n,
                                ...s
                            });
                        case "dubbing":
                            return (0, r.jsx)(N, {
                                variant: n,
                                ...s
                            });
                        case "ttsfx":
                            return (0, r.jsx)(T, { ...s
                            });
                        case "aiSpeechClassifier":
                            return (0, r.jsx)(g, { ...s
                            });
                        case "voiceCloning":
                            return (0, r.jsx)(y, {
                                variant: n,
                                ...s
                            });
                        case "voiceIsolator":
                            return (0, r.jsx)(j, { ...s
                            });
                        case "textToBark":
                            return (0, r.jsx)(x, { ...s
                            });
                        case "convAI":
                            return (0, r.jsx)(k, {});
                        default:
                            return null
                    }
                },
                S = {
                    tts: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.TTS_20
                    }),
                    sts: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.STS_20
                    }),
                    dubbing: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.DUBBING_20
                    }),
                    ttsfx: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.TTSFX_20
                    }),
                    voiceCloning: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.VOICE_CLONING_20
                    }),
                    stt: () => (0, r.jsx)(v.A, {
                        iconKey: m.k.STT_20
                    })
                };

            function A(e) {
                let {
                    demos: t,
                    ctaLink: n = a.root,
                    size: o = "md",
                    useNewUi: m,
                    hideCta: v = !1,
                    variant: p = "default",
                    className: x
                } = e, [g, w] = (0, P.useState)(t[0].component), {
                    isLoggedIn: y
                } = (0, i.Jd)(), j = (0, P.useRef)([]), k = (0, P.useRef)(null), N = (0, b.s)(), E = (0, f.useTranslations)(), C = (e, t) => {
                    w(t), j.current[e].scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    }), N.captureEvent(s.U.website_clicked_omnibox_tab, {
                        tabComponentName: t
                    })
                };

                function T(e) {
                    var t;
                    let {
                        sampleType: n
                    } = e.detail;
                    w(n), null === (t = k.current) || void 0 === t || t.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
                return (0, P.useEffect)(() => (document.addEventListener("sample", T), () => {
                    document.removeEventListener("sample", T)
                }), []), (0, r.jsx)("div", {
                    className: (0, h.cn)("container flex justify-center", {
                        "mt-32": "xl" === o || "2xl" === o
                    }, x),
                    ref: k,
                    children: (0, r.jsxs)("div", {
                        className: (0, h.cn)("w-12-cols @container", {
                            "lg:w-8-cols": "md" === o,
                            "lg:w-10-cols": "xl" === o,
                            "lg:w-12-cols": "2xl" === o
                        }),
                        children: [(0, r.jsxs)(c.Tabs, {
                            className: "flex flex-col",
                            defaultValue: "tts",
                            value: g,
                            children: [t.length > 1 && (0, r.jsx)(c.TabsList, {
                                className: "scrollbar-none -ms-16 mb-16 w-[calc(100%+2rem)] gap-8 overflow-scroll px-16 py-4 lg:flex lg:w-auto lg:justify-center lg:overflow-visible",
                                children: t.map((e, t) => {
                                    let {
                                        component: n,
                                        icon: s,
                                        title: i
                                    } = e, o = g === n;
                                    return (0, r.jsxs)("button", {
                                        className: (0, h.cn)("effect-color f-ui-03 bg-default text-default effect-focus-inverse ring-offset-darkest data-[state=active]:border-darkest inline-flex h-40 w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full border p-0 disabled:cursor-not-allowed", "v1.5" === p ? "text-light enabled:hover:border-darkest rounded-lg" : "enabled:hover:bg-overlay-lighter enabled:hover:border-darkest", o && ("default" === p ? "border-darkest" : "bg-dark text-default")),
                                        onClick: () => C(t, n),
                                        ref: e => {
                                            j.current[t] = e
                                        },
                                        children: [(0, r.jsx)("span", {
                                            className: "flex h-40 w-40 shrink-0 items-center justify-center",
                                            children: S[n] ? S[n]() : (0, r.jsx)(d.Image, {
                                                className: "h-20 w-20",
                                                height: 20,
                                                resource: s,
                                                width: 20
                                            })
                                        }), (0, r.jsx)(u.hJ, {
                                            className: "pe-12",
                                            children: i
                                        })]
                                    }, n)
                                })
                            }), (0, r.jsx)("div", {
                                className: "bg-default overflow-y-auto rounded-xl border shadow-lg",
                                children: t.map(e => {
                                    let {
                                        component: t,
                                        ...n
                                    } = e;
                                    return (0, r.jsx)(c.TabsContent, {
                                        asChild: !0,
                                        className: "outline-none",
                                        tabIndex: -1,
                                        value: t,
                                        children: (0, r.jsx)(u.Uu, {
                                            animate: {
                                                opacity: 1
                                            },
                                            className: (0, h.cn)("h-[300px] outline-none md:h-[375px]", {
                                                "xl:h-[550px]": "xl" === o,
                                                "lg:h-[550px]": "2xl" === o
                                            }),
                                            initial: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: .5
                                            },
                                            children: (0, r.jsx)(L, {
                                                demoKey: t,
                                                variant: p,
                                                ...n,
                                                size: o,
                                                useNewUi: m
                                            })
                                        }, t)
                                    }, "component-".concat(t))
                                })
                            })]
                        }), !v && (0, r.jsxs)("div", {
                            className: "mt-16 flex transform-gpu flex-col items-center justify-center gap-12 md:flex-row",
                            children: [(0, r.jsx)("p", {
                                className: "f-ui-03",
                                children: E("Globals.experience_full_audio_platform")
                            }), (0, r.jsx)("div", {
                                className: "flex gap-8",
                                children: "aiSpeechClassifier" !== g && (0, r.jsx)(_.N, {
                                    asButton: !0,
                                    buttonVariants: {
                                        size: "md"
                                    },
                                    href: y ? n : l.signUp,
                                    size: "sm",
                                    target: "_blank",
                                    children: E(y ? "Globals.go_to_app" : "Globals.try_for_free")
                                })
                            })]
                        }, "cta-".concat(g))]
                    })
                })
            }
        },
        11277: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => c
            });
            var r = n(4155),
                s = n(95674),
                i = n(19018),
                o = n(52970),
                l = n(97387),
                a = n(13059);
            let d = (0, o.default)(() => Promise.all([n.e(1504), n.e(8912), n.e(6279), n.e(6608)]).then(n.bind(n, 56608)), {
                    loadableGenerated: {
                        webpack: () => [56608]
                    },
                    ssr: !1
                }),
                c = (0, l.memo)(function(e) {
                    let {
                        className: t,
                        color: n,
                        speed: o
                    } = e, c = (0, l.useRef)(null), [b, h] = (0, l.useState)(!1), m = (0, s.W)(c, {
                        once: !0,
                        threshold: .1
                    }), v = (0, l.useCallback)(() => {
                        "requestIdleCallback" in window ? requestIdleCallback(() => h(!0), {
                            timeout: 3e3
                        }) : setTimeout(() => h(!0), 1e3)
                    }, []);
                    (0, l.useEffect)(() => {
                        if (!(/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || new URLSearchParams(window.location.search).has("noWaveform")) && m && !b)
                            if ("complete" === document.readyState) v();
                            else {
                                let e = () => v();
                                return window.addEventListener("load", e), () => window.removeEventListener("load", e)
                            }
                    }, [m, b, v]);
                    let u = (0, l.useMemo)(() => b ? (0, r.jsx)(d, {
                        color: n,
                        displayCanvas: b,
                        speed: o
                    }) : null, [b, n, o]);
                    return (0, r.jsx)(a.tH, {
                        fallback: null,
                        children: (0, r.jsx)("div", {
                            className: (0, i.cn)("h-400 relative w-full", t),
                            ref: c,
                            children: u
                        })
                    })
                })
        },
        32754: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => r,
                p: () => s
            });
            let r = {
                    WEB_APP_URL: "https://elevenlabs.io/app",
                    POSTHOG_PUBLIC_KEY: "phc_KQDh5IkRcTsPOoUtwmVxoATdOqNYCo0vTdwE77aNOQv",
                    FIREBASE_DOMAIN: "us-central1-xi-labs.cloudfunctions.net",
                    XI_SERVER_URL: "https://api.elevenlabs.io",
                    COOKIEBOT_DOMAIN_ID: "8f403faf-c7b3-4b3e-8ee6-f2c1dc632a0a",
                    GTM_ID: "GTM-5F5KLXC3",
                    GTM_AUTH: "S3MJNNL6YCsEysRWjsJQ-g",
                    GTM_ENV: "1",
                    FEATHERY_SDK_KEY: "d14e3874-cd10-4337-be98-1d9ff9de7e5f"
                },
                s = !1;
            ! function(e) {
                Object.keys(e).forEach(t => {
                    if (!e[t]) throw Error("Environment variable ".concat(t, " is not defined"))
                })
            }(r)
        },
        45418: (e, t, n) => {
            "use strict";
            n.d(t, {
                HeroButton: () => l
            });
            var r = n(4155),
                s = n(93),
                i = n(98450);
            let o = (e, t, n) => "string" != typeof n || "conversational-ai" !== e || "/app/sign-up" !== n && "https://elevenlabs.io/app/sign-up" !== n ? n : "test" === t ? n + "?redirect=/app/conversational-ai" : n;

            function l(e) {
                let {
                    index: t,
                    inverse: n,
                    href: l,
                    eventLabel: a,
                    slug: d,
                    children: c
                } = e, b = (0, i.sf)(), h = (0, i._C)("convai_signup_redirect"), m = (0, i.Tp)("capture_hero_button_click_events");
                return (0, r.jsx)("div", {
                    className: "anim-fade-translate-y-in",
                    style: {
                        animationDelay: "".concat(200 + 300 * t, "ms"),
                        "--translate-y-from": "4px"
                    },
                    children: (0, r.jsx)(s.N, {
                        asButton: !0,
                        buttonVariants: {
                            variant: n ? "tertiary" : 0 === t ? "primary" : "secondary"
                        },
                        href: o(d, h, l),
                        onClick: () => void(a && m && b.capture("website_clicked_herobutton", {
                            textContent: a
                        })),
                        children: c
                    })
                })
            }
        },
        67145: (e, t, n) => {
            "use strict";
            n.d(t, {
                Fd: () => a,
                c3: () => l,
                d: () => d,
                r: () => o
            });
            var r = n(75489),
                s = n(24154);
            let i = e => {
                    let t = {};
                    for (let n in e) {
                        let r = e[n];
                        if ("object" != typeof r || Array.isArray(r)) t[n] = r;
                        else {
                            let e = i(r);
                            for (let r in e) t["".concat(n, "__").concat(r)] = e[r]
                        }
                    }
                    return t
                },
                o = (e, t) => l(s.Ay, e, t),
                l = (e, t, n) => {
                    let s = i(n || {});
                    try {
                        var o;
                        let i = r.U[t];
                        if (n) {
                            let t = { ...s
                                },
                                r = { ...(null == n ? void 0 : n.$set) || {}
                                },
                                o = (null == n ? void 0 : n.$set_once) || void 0;
                            r && (t.$set = r), o && (t.$set_once = o), null == e || e.capture(i.toString(), t)
                        } else null == e || e.capture(i.toString());
                        window.dataLayer = window.dataLayer || [], null === (o = window.dataLayer) || void 0 === o || o.push({
                            event: i.toString(),
                            eventProps: n
                        })
                    } catch (e) {
                        console.error("Error capturing event", e)
                    }
                },
                a = e => {
                    o(r.U.$pageview, {
                        $current_url: e
                    })
                },
                d = (e, t) => {
                    var n;
                    let s = r.y[e];
                    window.dataLayer = window.dataLayer || [], null === (n = window.dataLayer) || void 0 === n || n.push({
                        event: s.toString(),
                        ...t
                    })
                }
        },
        70431: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var r = n(4155),
                s = n(40030);

            function i(e) {
                let {
                    languageCode: t,
                    size: n = 110
                } = e, i = (0, s.useTranslations)();
                return (0, r.jsx)("img", {
                    alt: i("language_flag_alt"),
                    className: "inline-block",
                    height: n,
                    src: "https://storage.googleapis.com/eleven-public-cdn/marketing_website/assets/square-language-svgs/svgs/".concat(t, ".svg"),
                    width: n
                })
            }
        },
        75489: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => r,
                y: () => s
            });
            var r = function(e) {
                    return e[e.$pageview = 0] = "$pageview", e[e.landing_page_tts_audio_generated = 1] = "landing_page_tts_audio_generated", e[e.cookiebot_consent_recorded = 2] = "cookiebot_consent_recorded", e[e.website_clicked_omnibox_tab = 3] = "website_clicked_omnibox_tab", e[e.marketing_site_convai_agent_call_started = 4] = "marketing_site_convai_agent_call_started", e[e.feathery_form_information_entered = 5] = "feathery_form_information_entered", e[e.feathery_form_submitted = 6] = "feathery_form_submitted", e[e.calendly_event_scheduled = 7] = "calendly_event_scheduled", e[e.contact_sales_event = 8] = "contact_sales_event", e[e.website_clicked_share_button = 9] = "website_clicked_share_button", e[e.website_clicked_share_option = 10] = "website_clicked_share_option", e
                }({}),
                s = function(e) {
                    return e[e.ready_for_pixels = 0] = "ready_for_pixels", e
                }({})
        },
        78770: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var r = n(4155),
                s = n(40030),
                i = n(98450),
                o = n(79428);

            function l(e) {
                let {
                    className: t,
                    style: n,
                    sampleType: l
                } = e, a = (0, i.sf)(), d = (0, i.Tp)("capture_hero_button_click_events"), c = (0, s.useTranslations)()("Globals.sample_button.text");
                return (0, r.jsx)(o.$, {
                    className: t,
                    onClick: function() {
                        let e = new CustomEvent("sample", {
                            detail: {
                                sampleType: l
                            }
                        });
                        document.dispatchEvent(e), d && a.capture("website_clicked_herobutton", {
                            textContent: c
                        })
                    },
                    style: n,
                    variant: "secondary",
                    children: c
                })
            }
        },
        79803: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 4325)), Promise.resolve().then(n.bind(n, 5791)), Promise.resolve().then(n.bind(n, 78487)), Promise.resolve().then(n.t.bind(n, 34537, 23)), Promise.resolve().then(n.t.bind(n, 50461, 23)), Promise.resolve().then(n.bind(n, 94736)), Promise.resolve().then(n.bind(n, 58132)), Promise.resolve().then(n.bind(n, 36683)), Promise.resolve().then(n.bind(n, 26808)), Promise.resolve().then(n.bind(n, 4014)), Promise.resolve().then(n.bind(n, 92868)), Promise.resolve().then(n.bind(n, 45418)), Promise.resolve().then(n.bind(n, 9919)), Promise.resolve().then(n.bind(n, 16670)), Promise.resolve().then(n.bind(n, 22603)), Promise.resolve().then(n.bind(n, 60461)), Promise.resolve().then(n.bind(n, 99402)), Promise.resolve().then(n.bind(n, 11277)), Promise.resolve().then(n.bind(n, 15438)), Promise.resolve().then(n.bind(n, 38354)), Promise.resolve().then(n.bind(n, 16810)), Promise.resolve().then(n.bind(n, 6581)), Promise.resolve().then(n.bind(n, 26935)), Promise.resolve().then(n.bind(n, 36404)), Promise.resolve().then(n.bind(n, 84043)), Promise.resolve().then(n.bind(n, 78770)), Promise.resolve().then(n.bind(n, 42696)), Promise.resolve().then(n.bind(n, 63133)), Promise.resolve().then(n.bind(n, 13901)), Promise.resolve().then(n.bind(n, 9456)), Promise.resolve().then(n.bind(n, 67393)), Promise.resolve().then(n.bind(n, 78472)), Promise.resolve().then(n.bind(n, 70431)), Promise.resolve().then(n.bind(n, 91606)), Promise.resolve().then(n.bind(n, 15972)), Promise.resolve().then(n.bind(n, 75400)), Promise.resolve().then(n.bind(n, 26390)), Promise.resolve().then(n.bind(n, 53628)), Promise.resolve().then(n.bind(n, 85236)), Promise.resolve().then(n.bind(n, 6168)), Promise.resolve().then(n.bind(n, 30257)), Promise.resolve().then(n.bind(n, 23368)), Promise.resolve().then(n.bind(n, 27488)), Promise.resolve().then(n.bind(n, 92291)), Promise.resolve().then(n.bind(n, 91538)), Promise.resolve().then(n.bind(n, 60459)), Promise.resolve().then(n.bind(n, 97699)), Promise.resolve().then(n.bind(n, 46444)), Promise.resolve().then(n.bind(n, 60714)), Promise.resolve().then(n.bind(n, 97382)), Promise.resolve().then(n.bind(n, 93388)), Promise.resolve().then(n.bind(n, 86303)), Promise.resolve().then(n.bind(n, 50593)), Promise.resolve().then(n.bind(n, 5703)), Promise.resolve().then(n.bind(n, 39592)), Promise.resolve().then(n.bind(n, 54436)), Promise.resolve().then(n.bind(n, 75824)), Promise.resolve().then(n.bind(n, 11122)), Promise.resolve().then(n.bind(n, 76507)), Promise.resolve().then(n.bind(n, 41124)), Promise.resolve().then(n.bind(n, 62341)), Promise.resolve().then(n.bind(n, 20521)), Promise.resolve().then(n.bind(n, 59305)), Promise.resolve().then(n.bind(n, 56264)), Promise.resolve().then(n.bind(n, 75560)), Promise.resolve().then(n.bind(n, 60932)), Promise.resolve().then(n.bind(n, 27039)), Promise.resolve().then(n.bind(n, 86163)), Promise.resolve().then(n.bind(n, 80021)), Promise.resolve().then(n.bind(n, 99824)), Promise.resolve().then(n.bind(n, 62720)), Promise.resolve().then(n.bind(n, 13550)), Promise.resolve().then(n.bind(n, 54324)), Promise.resolve().then(n.bind(n, 29374)), Promise.resolve().then(n.bind(n, 69520)), Promise.resolve().then(n.bind(n, 37024)), Promise.resolve().then(n.bind(n, 90305)), Promise.resolve().then(n.bind(n, 31539)), Promise.resolve().then(n.bind(n, 66171)), Promise.resolve().then(n.bind(n, 17934)), Promise.resolve().then(n.bind(n, 26006)), Promise.resolve().then(n.bind(n, 98294)), Promise.resolve().then(n.bind(n, 76297)), Promise.resolve().then(n.bind(n, 77552)), Promise.resolve().then(n.bind(n, 12889)), Promise.resolve().then(n.bind(n, 44072)), Promise.resolve().then(n.bind(n, 39625)), Promise.resolve().then(n.bind(n, 52641)), Promise.resolve().then(n.bind(n, 62644)), Promise.resolve().then(n.bind(n, 46733)), Promise.resolve().then(n.bind(n, 86261)), Promise.resolve().then(n.bind(n, 15107)), Promise.resolve().then(n.bind(n, 22860)), Promise.resolve().then(n.bind(n, 98365)), Promise.resolve().then(n.bind(n, 64884)), Promise.resolve().then(n.bind(n, 89485)), Promise.resolve().then(n.bind(n, 45761)), Promise.resolve().then(n.bind(n, 79831)), Promise.resolve().then(n.bind(n, 82025)), Promise.resolve().then(n.bind(n, 57023)), Promise.resolve().then(n.bind(n, 43466)), Promise.resolve().then(n.bind(n, 69114)), Promise.resolve().then(n.bind(n, 51245)), Promise.resolve().then(n.bind(n, 27989)), Promise.resolve().then(n.bind(n, 40581)), Promise.resolve().then(n.bind(n, 91408))
        },
        86732: (e, t, n) => {
            "use strict";
            n.d(t, {
                al: () => o,
                v6: () => l
            });
            var r = n(21380),
                s = n(97387);

            function i(e) {
                let [t, n] = s.useState(void 0), i = parseInt(r.fi[e]);
                return s.useEffect(() => {
                    let e = window.matchMedia("(max-width: ".concat(i - 1, "px)")),
                        t = () => {
                            n(window.innerWidth < i)
                        };
                    return e.addEventListener("change", t), n(window.innerWidth < i), () => e.removeEventListener("change", t)
                }, [i]), !!t
            }

            function o() {
                return i("md")
            }

            function l() {
                return !i("lg")
            }
        },
        91606: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ContextualNavigation: () => h
            });
            var r = n(4155),
                s = n(93),
                i = n(11794),
                o = n(86732),
                l = n(99813),
                a = n(19018),
                d = n(50245),
                c = n(97387),
                b = n(58529);
            let h = e => {
                let {
                    className: t,
                    ctas: n,
                    inverse: h = !1,
                    icon: m,
                    title: v,
                    children: u,
                    trackerClass: f = "tracker-contextual-nav"
                } = e, P = (0, c.useRef)(null), _ = (0, o.al)(), [p, x] = (0, c.useState)(!1), [g, w] = (0, c.useState)(!1), y = (0, d.usePathname)();
                return (0, c.useEffect)(() => {
                    let e = document.querySelector(".".concat(f)),
                        t = new IntersectionObserver(t => {
                            t.forEach(t => {
                                t.target === e && (t.boundingClientRect.top < 0 ? (x(!0), w(!0)) : (x(!1), w(!1))), t.target === P.current && g && "/pricing" !== y && (t.boundingClientRect.top < 0 ? x(!1) : t.isIntersecting && t.boundingClientRect.top > 0 && x(!0))
                            })
                        }, {
                            root: null,
                            rootMargin: "0px",
                            threshold: 1
                        });
                    return e && t.observe(e), P.current && t.observe(P.current), () => {
                        t.disconnect()
                    }
                }), (0, r.jsxs)("div", {
                    className: "",
                    children: [(0, r.jsx)("div", {
                        "aria-hidden": !p,
                        className: (0, a.cn)("container-reset breakout z-9999 fixed top-0 flex h-64 items-center border-b", "effect-transform", p ? "translate-y-0" : "pointer-events-none -translate-y-full", h ? "border-darker-alt bg-inverse-light text-inverse" : "bg-default", t),
                        children: (0, r.jsxs)("div", {
                            className: "container flex items-center justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: " flex items-center gap-8",
                                children: [(0, r.jsx)(i.h, {
                                    icon: m
                                }), (0, r.jsx)("p", {
                                    className: _ ? "f-ui-04" : "f-ui-01",
                                    children: v
                                }), !v && !m && (0, r.jsx)(s.N, {
                                    href: "/",
                                    children: (0, r.jsx)(b.Logo, {})
                                })]
                            }), n && (null == n ? void 0 : n.length) > 0 && (0, r.jsx)("ul", {
                                className: "flex items-center gap-x-8",
                                children: null == n ? void 0 : n.filter(l.P).map((e, t) => (0, r.jsx)("li", {
                                    children: (0, r.jsx)(s.N, {
                                        asButton: !0,
                                        buttonVariants: {
                                            size: _ ? "sm" : "md",
                                            variant: h ? "tertiary" : n.length > 1 && 0 === t ? "secondary" : "primary"
                                        },
                                        className: n.length > 1 && 0 === t ? "hidden md:inline-flex" : "",
                                        ...e
                                    })
                                }, t))
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "relative",
                        children: [u, (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: "absolute inset-x-0 bottom-[50vh] h-1 w-full",
                            ref: P
                        })]
                    })]
                })
            };
            h.displayName = "ContextualNavigation"
        },
        92868: (e, t, n) => {
            "use strict";
            n.d(t, {
                AdminBarClient: () => o
            });
            var r = n(4155),
                s = n(75919);
            let i = () => (0, r.jsx)("span", {
                    children: "ElevenLabs CMS"
                }),
                o = e => {
                    let {
                        adminBarProps: t
                    } = e || {};
                    return (0, r.jsx)(s.PayloadAdminBar, {
                        className: "relative",
                        ...t,
                        cmsURL: "https://payload.elevenlabs.io",
                        logo: (0, r.jsx)(i, {}),
                        onPreviewExit: async () => {
                            await fetch("/next/exit-preview"), window.location.reload()
                        },
                        style: {
                            backgroundColor: "black",
                            top: "unset",
                            bottom: 0,
                            height: "40px"
                        }
                    })
                }
        }
    }
]);