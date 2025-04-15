"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5203], {
        32754: (e, t, o) => {
            o.d(t, {
                D: () => n,
                p: () => r
            });
            let n = {
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
                r = !1;
            ! function(e) {
                Object.keys(e).forEach(t => {
                    if (!e[t]) throw Error("Environment variable ".concat(t, " is not defined"))
                })
            }(n)
        },
        35074: (e, t, o) => {
            o.d(t, {
                jv: () => s,
                zR: () => c
            });
            var n = o(32754),
                r = o(97387),
                i = o(67145),
                a = o(75489);
            let s = () => {
                    n.p;
                    try {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone.includes("Europe")
                    } catch (e) {
                        return console.error(e), !1
                    }
                },
                c = () => {
                    (0, r.useEffect)(() => {
                        let e = () => {
                            (0, i.d)(a.y.ready_for_pixels)
                        };
                        return window.addEventListener("CookiebotOnConsentReady", e), () => {
                            window.removeEventListener("CookiebotOnConsentReady", e)
                        }
                    }, [])
                }
        },
        56764: (e, t, o) => {
            o.d(t, {
                vu: () => d,
                Jd: () => u
            });
            var n = o(4155),
                r = o(86465);
            class i {
                static fromJSON(e) {
                    let t = JSON.parse(e);
                    return new i(t, t.user_id)
                }
                constructor(e, t) {
                    this.user_id = t, this.workspace_id = e.workspace_id, this.ccpa_opt_out = "ccpa_opt_out" in e ? e.ccpa_opt_out : null, this.email = "email" in e ? e.email : ""
                }
            }
            var a = o(91046),
                s = o(97387);
            let c = (0, s.createContext)(void 0),
                l = () => {
                    let e = (0, a.U)(r.w.User);
                    if (e) try {
                        return i.fromJSON(e)
                    } catch (e) {
                        console.error("Failed to parse user cookie:", e)
                    }
                    return null
                },
                d = e => {
                    let {
                        children: t
                    } = e, [o, r] = (0, s.useState)(void 0), [i, a] = (0, s.useState)(void 0), [d, u] = (0, s.useState)(!0);
                    return (0, s.useEffect)(() => {
                        let e = l();
                        e ? (r(e), a(!0)) : (r(null), a(!1)), u(!1)
                    }, []), (0, n.jsx)(c.Provider, {
                        value: {
                            userData: o,
                            isLoggedIn: i,
                            loadingUser: d
                        },
                        children: t
                    })
                },
                u = () => {
                    let e = (0, s.useContext)(c);
                    if (void 0 === e) throw Error("useUser must be used within a UserProvider");
                    return e
                }
        },
        61292: (e, t, o) => {
            o.d(t, {
                c: () => w,
                m: () => g
            });
            var n = o(4155),
                r = o(73532),
                i = o(86465),
                a = o(35074),
                s = o(91046),
                c = o(32754),
                l = o(24154),
                d = o(98450),
                u = o(97387),
                _ = o(79597),
                p = o(71327);
            let v = e => {
                let {
                    distinctId: t
                } = e, [o, n] = (0, u.useState)(null), i = (0, a.jv)(), s = e => (!t || l.Ay.__loaded || (l.Ay.init(c.D.POSTHOG_PUBLIC_KEY, {
                    api_host: "".concat(window.location.origin, "/ingest"),
                    persistence: "memory" === e ? "memory" : "localStorage+cookie",
                    loaded: e => {
                        c.p && e.debug()
                    },
                    capture_pageview: !1,
                    autocapture: !1,
                    bootstrap: {
                        distinctID: t
                    },
                    session_recording: {
                        maskAllInputs: !1,
                        maskInputOptions: {
                            password: !0
                        }
                    },
                    disable_session_recording: !0,
                    disable_surveys: !0
                }), (0, r.ec)() && g()), l.Ay), d = () => {
                    try {
                        var e;
                        return null === (e = window) || void 0 === e ? void 0 : e.localStorage.getItem("ph_consentDecision")
                    } catch (e) {
                        return null
                    }
                }, [_, p] = (0, u.useState)((() => {
                    let e = d();
                    if (!1 === i) {
                        let e = s("localStorage+cookie");
                        return e.register({
                            consent_state: "not_applicable"
                        }), e.register({
                            persistence: "localStorage+cookie"
                        }), e
                    }
                    if (i && "true" === e) {
                        let e = s("localStorage+cookie");
                        return e.register({
                            consent_state: "granted"
                        }), e.register({
                            persistence: "localStorage+cookie"
                        }), e
                    } {
                        let e = s("memory");
                        return e.register({
                            consent_state: "undecided"
                        }), e.register({
                            persistence: "memory"
                        }), e
                    }
                })());
                return (0, u.useEffect)(() => {
                    let e = () => {
                        n(window.Cookiebot)
                    };
                    return window.addEventListener("CookiebotOnDialogInit", e), () => {
                        window.removeEventListener("CookiebotOnDialogInit", e)
                    }
                }, []), (0, u.useEffect)(() => {
                    let e = () => {
                        let e = { ...window.Cookiebot
                        };
                        e && e !== o && (n(e), function(e) {
                            try {
                                var t;
                                null === (t = window) || void 0 === t || t.localStorage.setItem("ph_consentDecision", e.toString())
                            } catch (e) {
                                return !1
                            }
                        }(e.consent.statistics))
                    };
                    return window.addEventListener("CookiebotOnConsentReady", e), () => {
                        window.removeEventListener("CookiebotOnConsentReady", e)
                    }
                }, [o]), (0, u.useEffect)(() => {
                    var e, t;
                    i || (l.Ay.set_config({
                        persistence: "localStorage+cookie"
                    }), null == _ || _.register({
                        consent_state: "not_applicable"
                    }), null == _ || _.register({
                        persistence: "localStorage+cookie"
                    })), (null == o ? void 0 : o.hasResponse) === !0 && (null == o ? void 0 : null === (e = o.consent) || void 0 === e ? void 0 : e.statistics) === !1 && (null == _ || _.register({
                        consent_state: "denied"
                    })), (null == o ? void 0 : o.hasResponse) === !0 && (null == o ? void 0 : null === (t = o.consent) || void 0 === t ? void 0 : t.statistics) === !0 && (l.Ay.set_config({
                        persistence: "localStorage+cookie"
                    }), null == _ || _.register({
                        consent_state: "granted"
                    }), null == _ || _.register({
                        persistence: "localStorage+cookie"
                    }))
                }, [o, i, _]), _
            };

            function w(e) {
                let {
                    children: t
                } = e, [o, r] = (0, u.useState)(null);
                (0, u.useEffect)(() => {
                    let e = function() {
                        let e = "",
                            t = "ph_".concat(c.D.POSTHOG_PUBLIC_KEY, "_posthog"),
                            o = p.A.get(t),
                            n = !1;
                        if (o && (e = JSON.parse(o).distinct_id), !e) {
                            let t = (0, s.U)(i.w.AnonDistinctId);
                            t ? e = t : (e = (0, _.$)(), n = !0)
                        }
                        return {
                            distinct_id: e,
                            newDistinctId: n
                        }
                    }();
                    e.newDistinctId && (0, s.T)(i.w.AnonDistinctId, e.distinct_id), r(e)
                }, []);
                let a = v({
                    distinctId: null == o ? void 0 : o.distinct_id
                });
                return a ? (0, n.jsx)(d.so, {
                    client: a,
                    children: t
                }) : (0, n.jsx)(n.Fragment, {
                    children: t
                })
            }
            let g = () => {
                l.Ay.opt_out_capturing(), l.Ay.stopSessionRecording()
            }
        },
        67145: (e, t, o) => {
            o.d(t, {
                Fd: () => c,
                c3: () => s,
                d: () => l,
                r: () => a
            });
            var n = o(75489),
                r = o(24154);
            let i = e => {
                    let t = {};
                    for (let o in e) {
                        let n = e[o];
                        if ("object" != typeof n || Array.isArray(n)) t[o] = n;
                        else {
                            let e = i(n);
                            for (let n in e) t["".concat(o, "__").concat(n)] = e[n]
                        }
                    }
                    return t
                },
                a = (e, t) => s(r.Ay, e, t),
                s = (e, t, o) => {
                    let r = i(o || {});
                    try {
                        var a;
                        let i = n.U[t];
                        if (o) {
                            let t = { ...r
                                },
                                n = { ...(null == o ? void 0 : o.$set) || {}
                                },
                                a = (null == o ? void 0 : o.$set_once) || void 0;
                            n && (t.$set = n), a && (t.$set_once = a), null == e || e.capture(i.toString(), t)
                        } else null == e || e.capture(i.toString());
                        window.dataLayer = window.dataLayer || [], null === (a = window.dataLayer) || void 0 === a || a.push({
                            event: i.toString(),
                            eventProps: o
                        })
                    } catch (e) {
                        console.error("Error capturing event", e)
                    }
                },
                c = e => {
                    a(n.U.$pageview, {
                        $current_url: e
                    })
                },
                l = (e, t) => {
                    var o;
                    let r = n.y[e];
                    window.dataLayer = window.dataLayer || [], null === (o = window.dataLayer) || void 0 === o || o.push({
                        event: r.toString(),
                        ...t
                    })
                }
        },
        73532: (e, t, o) => {
            o.d(t, {
                Ex: () => w,
                ec: () => f,
                RR: () => g,
                hN: () => y
            });
            var n = o(61292),
                r = o(56764),
                i = o(86465),
                a = o(91046),
                s = o(32754);
            let c = async () => {
                let e = "https://".concat(s.D.FIREBASE_DOMAIN, "/geolocation"),
                    t = await fetch(e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({})
                    });
                if (!t.ok) throw Error("Network response was not ok");
                let o = await t.json();
                return {
                    region: o.data.region,
                    country: o.data.country,
                    city: o.data.city
                }
            };
            class l extends Error {
                constructor(e, t, o) {
                    super(t), this.name = "HttpError", this.status = e, this.errorType = o, this.message = t, Object.setPrototypeOf(this, l.prototype)
                }
            }
            async function d(e) {
                let t, o, n;
                if (!e.ok) {
                    try {
                        var r, i;
                        t = await e.json(), o = (null === (r = t.detail) || void 0 === r ? void 0 : r.message) || e.statusText, n = (null === (i = t.detail) || void 0 === i ? void 0 : i.status) || e.statusText
                    } catch (t) {
                        throw Error(e.statusText)
                    }
                    throw new l(e.status, o, n)
                }
            }
            let u = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = await fetch("".concat(s.D.XI_SERVER_URL).concat(e), {
                            method: "GET",
                            ...t
                        });
                    return await d(o), o.json()
                },
                _ = {
                    post: async (e, t) => {
                        let o = await fetch("".concat(s.D.XI_SERVER_URL).concat(e), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(t)
                        });
                        return await d(o), o.json()
                    }
                },
                p = async e => {
                    let {
                        optOutCCPA: t
                    } = e;
                    await _.post("/v1/user/edit", {
                        ccpa_opt_out: t
                    })
                };
            var v = o(97387);
            let w = async () => {
                    let e = await c();
                    return "US" === e.country && ["ca", "co", "ct", "mt", "or", "tx", "ut", "va"].includes(e.region.toLowerCase())
                },
                g = async e => {
                    e && await p({
                        optOutCCPA: !0
                    }), (0, a.T)(i.w.CCPAOptOut, "true"), (0, n.m)(), window.location.reload()
                },
                f = () => "true" === (0, a.U)(i.w.CCPAOptOut),
                y = () => {
                    let {
                        userData: e,
                        isLoggedIn: t
                    } = (0, r.Jd)();
                    (0, v.useEffect)(() => {
                        (async () => {
                            let o = await w() && "globalPrivacyControl" in navigator && navigator.globalPrivacyControl;
                            !f() && ((null == e ? void 0 : e.ccpa_opt_out) || o) && g(!0 == t).catch(e => {
                                console.error(e)
                            }), f() && (0, n.m)()
                        })().catch(e => {
                            console.error(e)
                        })
                    }, [null == e ? void 0 : e.ccpa_opt_out, t])
                }
        },
        75489: (e, t, o) => {
            o.d(t, {
                U: () => n,
                y: () => r
            });
            var n = function(e) {
                    return e[e.$pageview = 0] = "$pageview", e[e.landing_page_tts_audio_generated = 1] = "landing_page_tts_audio_generated", e[e.cookiebot_consent_recorded = 2] = "cookiebot_consent_recorded", e[e.website_clicked_omnibox_tab = 3] = "website_clicked_omnibox_tab", e[e.marketing_site_convai_agent_call_started = 4] = "marketing_site_convai_agent_call_started", e[e.feathery_form_information_entered = 5] = "feathery_form_information_entered", e[e.feathery_form_submitted = 6] = "feathery_form_submitted", e[e.calendly_event_scheduled = 7] = "calendly_event_scheduled", e[e.contact_sales_event = 8] = "contact_sales_event", e[e.website_clicked_share_button = 9] = "website_clicked_share_button", e[e.website_clicked_share_option = 10] = "website_clicked_share_option", e
                }({}),
                r = function(e) {
                    return e[e.ready_for_pixels = 0] = "ready_for_pixels", e
                }({})
        },
        79597: (e, t, o) => {
            o.d(t, {
                $: () => r
            });
            var n = o(33964);
            let r = () => (0, n.nH)()
        },
        86465: (e, t, o) => {
            o.d(t, {
                S: () => r,
                w: () => n
            });
            var n = function(e) {
                return e.AnonDistinctId = "anon_distinct_id", e.CCPAOptOut = "ccpa_opt_out", e.User = "user", e
            }({});
            let r = e => "anon_distinct_id" == e ? "anon_distinct_id" : "".concat("xi_website_").concat(e)
        },
        91046: (e, t, o) => {
            o.d(t, {
                T: () => i,
                U: () => a
            });
            var n = o(71327),
                r = o(86465);
            let i = (e, t) => {
                    let o = "." + document.location.hostname.split(".").slice(-2).join(".");
                    n.A.set((0, r.S)(e), t, {
                        domain: o,
                        path: "/",
                        secure: !0,
                        sameSite: "strict",
                        expires: 360
                    })
                },
                a = e => n.A.get((0, r.S)(e))
        }
    }
]);