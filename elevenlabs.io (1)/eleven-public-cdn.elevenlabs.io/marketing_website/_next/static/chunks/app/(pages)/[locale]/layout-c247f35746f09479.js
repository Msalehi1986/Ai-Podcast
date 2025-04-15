(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3646], {
        15594: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            let r = (0, n(52970).default)(() => Promise.all([n.e(2225), n.e(7371)]).then(n.bind(n, 97371)), {
                loadableGenerated: {
                    webpack: () => [97371]
                },
                ssr: !1
            })
        },
        16819: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hh: () => r,
                Lg: () => o,
                ZB: () => a
            });
            var r = function(e) {
                return e.CONTACT_FORM_DATA = "contact_form_data", e.CONTACT_FORM_STAGE = "contact_form_stage", e.GCLID = "gclid", e.UTM_CAMPAIGN = "utm_campaign", e.UTM_CONTENT = "utm_content", e.UTM_MEDIUM = "utm_medium", e.UTM_SOURCE = "utm_source", e.UTM_TERM = "utm_term", e
            }({});
            let a = (e, t) => {
                    localStorage.setItem(e, t)
                },
                o = e => localStorage.getItem(e)
        },
        27595: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => i,
                d: () => s
            });
            var r = n(4155),
                a = n(97387);
            let o = (0, a.createContext)(void 0),
                s = e => {
                    let {
                        children: t
                    } = e, [n, s] = (0, a.useState)(null);
                    return (0, r.jsx)(o.Provider, {
                        value: {
                            activePlayer: n,
                            setActivePlayer: s
                        },
                        children: t
                    })
                },
                i = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useActivePlayer must be used within an ActivePlayerProvider");
                    return e
                }
        },
        43290: (e, t, n) => {
            "use strict";
            n.d(t, {
                GridHelper: () => a
            });
            var r = n(4155);
            let a = () => (0, r.jsxs)("div", {
                className: "dev-tools",
                children: [(0, r.jsx)("button", {
                    "aria-label": "Toggle grid",
                    className: "dev-tools-toggle",
                    onClick: e => {
                        e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden
                    },
                    type: "button"
                }), (0, r.jsx)("div", {
                    className: "dev-tools-grid",
                    hidden: !0
                })]
            })
        },
        52938: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => N
            });
            var r = n(4155),
                a = n(67145),
                o = n(50245),
                s = n(97387);
            let i = () => {
                let e = (0, o.usePathname)(),
                    t = (0, o.useSearchParams)();
                (0, s.useEffect)(() => {
                    if (e) {
                        let n = window.origin + e;
                        t && t.toString() && (n += "?".concat(t.toString())), (0, a.Fd)(n)
                    }
                }, [e, t])
            };
            var c = n(87711),
                d = n(35074),
                l = n(87488),
                m = n(72042),
                u = n(73532),
                g = n(32754);
            let p = () => ((0, d.zR)(), m.preconnect("https://www.googletagmanager.com"), m.preconnect("https://consentcdn.cookiebot.com"), m.preconnect("https://consent.cookiebot.com"), m.preload("https://consent.cookiebot.com/uc.js", {
                as: "script",
                fetchPriority: "high"
            }), (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.default, {
                    dangerouslySetInnerHTML: {
                        __html: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n\n          gtag('consent', 'default', {\n              'ad_personalization': 'denied',\n              'analytics_storage': 'denied',\n              'ad_storage': 'denied',\n              'ad_user_data': 'denied',\n              'functionality_storage': 'denied',\n              'personalization_storage': 'denied',\n              'security_storage': 'granted',\n              'wait_for_update': 500,\n              'region':\n              [\n                'AD', 'AL', 'AM', 'AT', 'AZ', 'BA', 'BE', 'BG', 'BY', 'CH', 'CY', 'CZ',\n                'DE', 'DK', 'EE', 'ES', 'FI', 'FO', 'FR', 'GB', 'GE', 'GG', 'GI', 'GR',\n                'HR', 'HU', 'IC', 'IE', 'IM', 'IS', 'IT', 'JE', 'KZ', 'LI', 'LT', 'LU',\n                'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS',\n                'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'TR', 'UA', 'VA'\n            ]\n          });\n\n          gtag('consent', 'default', {\n            'ad_personalization': 'granted',\n            'analytics_storage': 'granted',\n            'ad_storage': 'granted',\n            'ad_user_data': 'granted',\n            'functionality_storage': 'granted',\n            'personalization_storage': 'granted',\n            'security_storage': 'granted',\n            'wait_for_update': 500\n        });\n\n          gtag('set', 'ads_data_redaction', true);\n          gtag('set', 'url_passthrough', true);\n\n          gtag ('config', '".concat(g.D.GTM_ID, "', {'restricted_data_processing': ").concat((0, u.ec)() ? "true" : "false", " } )\n\n          dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});\n          ")
                    },
                    "data-cookieconsent": "ignore",
                    id: "google-consent-mode-gtm",
                    strategy: "afterInteractive"
                }), (0, r.jsx)(l.default, {
                    dangerouslySetInnerHTML: {
                        __html: "\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=".concat(g.D.GTM_AUTH, "&gtm_preview=env-").concat(g.D.GTM_ENV, "&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','").concat(g.D.GTM_ID, "');")
                    },
                    "data-cookieconsent": "ignore",
                    id: "google-gtm",
                    strategy: "afterInteractive"
                }), (0, r.jsx)(l.default, {
                    async: !0,
                    "data-cbid": g.D.COOKIEBOT_DOMAIN_ID,
                    "data-consentmode-defaults": "disabled",
                    id: "Cookiebot",
                    src: "https://consent.cookiebot.com/uc.js",
                    strategy: "afterInteractive"
                })]
            }));
            var h = n(71327);
            let f = "viaReferralLink",
                y = "from",
                v = () => {
                    (0, s.useEffect)(() => {
                        if (!(0, u.ec)()) try {
                            w()
                        } catch (e) {
                            console.error(e)
                        }
                    }, [])
                },
                w = () => {
                    _(), b()
                },
                _ = () => {
                    let {
                        head: e
                    } = document, t = document.createElement("script");
                    t.innerText = "(function() {var gs = document.createElement('script');gs.src = 'https://try.elevenlabs.io/pr/js';gs.type = 'text/javascript';gs.async = 'true';gs.onload = gs.onreadystatechange = function() {var rs = this.readyState;if (rs && rs != 'complete' && rs != 'loaded') return;try {growsumo._initialize('pk_KEommGpdHbee56mN5pTwtbJiHJNfxzKP'); if (typeof(growsumoInit) === 'function') {growsumoInit();}} catch (e) {}};var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gs, s);})();", e.insertBefore(t, e.firstChild)
                },
                b = () => {
                    let e = new URL(window.location.href);
                    if (e.searchParams.has("ps_partner_key") && "undefined" != typeof document) {
                        localStorage.removeItem(f);
                        return
                    }
                    if (e.searchParams.has(y)) {
                        "undefined" != typeof document && setTimeout(() => {
                            h.A.remove("growSumoPartnerKey", {
                                path: "/",
                                domain: window.location.hostname
                            }), h.A.remove("ps_partner_key", {
                                path: "/",
                                domain: window.location.hostname
                            }), h.A.remove("ps_xid", {
                                path: "/",
                                domain: window.location.hostname
                            }), window.growsumo && (window.growsumo = null), console.log("Deleted referral cookie as visit came from Google Ads (forbidden by Terms of Service)")
                        }, 2e3);
                        let t = new Date().getTime() + 7776e6,
                            n = {
                                value: e.searchParams.get(y),
                                expiresTimestamp: t
                            };
                        localStorage.setItem(f, JSON.stringify(n))
                    }
                },
                E = {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "ElevenLabs",
                    url: "https://elevenlabs.io"
                },
                T = {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    url: "https://elevenlabs.io",
                    logo: "https://elevenlabs.io/favicon.ico",
                    name: "ElevenLabs",
                    description: "ElevenLabs is a voice AI research & deployment company with a mission to make content universally accessible in any language & voice.",
                    sameAs: ["https://twitter.com/elevenlabsio", "https://www.linkedin.com/company/elevenlabsio", "https://www.facebook.com/elevenlabsio", "https://www.youtube.com/channel/UC-ew9TfeD887qUSiWWAAj1w", "https://en.wikipedia.org/wiki/ElevenLabs", "https://www.instagram.com/elevenlabsio/"]
                },
                M = {
                    "@context": "https://schema.org",
                    name: "ElevenLabs Text to Speech",
                    description: "High quality, human-like AI voice generator in 32 languages",
                    image: ["https://eleven-public-cdn.elevenlabs.io/payloadcms/s4hyenfavaj-tts-product-data-1x1.webp", "https://eleven-public-cdn.elevenlabs.io/payloadcms/p11e1kms6f-tts-product-data-4x3.webp", "https://eleven-public-cdn.elevenlabs.io/payloadcms/poe9kpvwk2q-tts-product-data-16x9.webp"],
                    "@type": "Product",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.7",
                        reviewCount: "161"
                    },
                    review: [{
                        "@type": "Review",
                        reviewRating: {
                            "@type": "Rating",
                            ratingValue: "4.7",
                            bestRating: "5"
                        },
                        author: {
                            "@type": "Organization",
                            name: "G2"
                        }
                    }],
                    offers: [{
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                        description: "Free - 10,000 credits per month"
                    }, {
                        "@type": "Offer",
                        price: "5",
                        priceCurrency: "USD",
                        description: "Starter Plan - 30,000 credits per month & many other features"
                    }, {
                        "@type": "Offer",
                        price: "11",
                        priceCurrency: "USD",
                        description: "Creator Plan - 100,000 credits per month & many other features"
                    }, {
                        "@type": "Offer",
                        price: "99",
                        priceCurrency: "USD",
                        description: "Pro Plan - 500,000 credits per month & many other features"
                    }, {
                        "@type": "Offer",
                        price: "330",
                        priceCurrency: "USD",
                        description: "Scale Plan - 2,000,000 credits per month & many other features"
                    }, {
                        "@type": "Offer",
                        price: "1320",
                        priceCurrency: "USD",
                        description: "Business Plan - 11,000,000 credits per month & many other features"
                    }, {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                        description: "Enterprise Plan - Volume based discounts & many other features"
                    }]
                },
                S = () => (0, r.jsx)(x, {
                    data: [T, E, M],
                    id: "structured-data"
                }),
                x = e => {
                    let {
                        id: t,
                        data: n
                    } = e;
                    return (0, r.jsx)(l.default, {
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": n
                            })
                        },
                        id: t,
                        strategy: "lazyOnload",
                        type: "application/ld+json"
                    })
                };
            var C = n(66984),
                P = n(81497),
                j = n(27595),
                I = n(61292),
                L = n(56764);
            let U = () => (i(), (0, r.jsx)(r.Fragment, {})),
                A = () => ((0, u.hN)(), (0, r.jsx)(r.Fragment, {})),
                D = () => (v(), null),
                O = () => Promise.all([n.e(2334), n.e(1186), n.e(700), n.e(3045)]).then(n.bind(n, 23045)).then(e => e.default);

            function N(e) {
                let {
                    children: t
                } = e;
                return (0, s.useEffect)(() => {
                    let e = document.createElement("div");
                    e.style.overflow = "scroll", document.body.appendChild(e);
                    let t = e.offsetWidth - e.clientWidth;

                    function n() {
                        let e = document.documentElement.scrollHeight > document.documentElement.clientHeight,
                            n = "scroll" === window.getComputedStyle(document.documentElement, null).getPropertyValue("overflow-y");
                        document.documentElement.style.setProperty("--scrollbar-visible-width", "".concat(e || n ? t : 0, "px"))
                    }
                    return document.body.removeChild(e), document.documentElement.style.setProperty("--scrollbar-width", "".concat(t, "px")), window.addEventListener("load", n, !1), window.addEventListener("resized", n, !1), n(), () => {
                        window.removeEventListener("load", n, !1), window.removeEventListener("resized", n, !1)
                    }
                }), (0, r.jsxs)(I.c, {
                    children: [(0, r.jsx)(P.l, {
                        toastOptions: {
                            unstyled: !0,
                            classNames: {
                                toast: "flex gap-6 bg-default border p-20 rounded-lg shadow-lg",
                                title: "f-ui-03",
                                description: "f-description-04"
                            }
                        }
                    }), (0, r.jsx)(S, {}), (0, r.jsxs)(s.Suspense, {
                        children: [(0, r.jsx)(U, {}), (0, r.jsx)(c.P, {})]
                    }), (0, r.jsxs)(L.vu, {
                        children: [(0, r.jsx)(A, {}), (0, r.jsx)(p, {}), (0, r.jsx)(D, {}), (0, r.jsx)(C.F, {
                            features: O,
                            strict: !0,
                            children: (0, r.jsx)(j.d, {
                                children: t
                            })
                        })]
                    })]
                })
            }
        },
        71469: () => {},
        87711: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => c,
                P: () => i
            });
            var r = n(4155),
                a = n(16819),
                o = n(50245),
                s = n(97387);
            let i = () => {
                    let e = (0, o.useSearchParams)();
                    return (0, s.useEffect)(() => {
                        let t = e.get("utm_source"),
                            n = e.get("utm_medium"),
                            r = e.get("utm_campaign"),
                            o = e.get("utm_content"),
                            s = e.get("utm_term"),
                            i = e.get("gclid");
                        (t || n || r || o || s || i) && ((0, a.ZB)(a.Hh.UTM_SOURCE, t || ""), (0, a.ZB)(a.Hh.UTM_MEDIUM, n || ""), (0, a.ZB)(a.Hh.UTM_CAMPAIGN, r || ""), (0, a.ZB)(a.Hh.UTM_CONTENT, o || ""), (0, a.ZB)(a.Hh.UTM_TERM, s || ""), (0, a.ZB)(a.Hh.GCLID, i || ""))
                    }, [e]), (0, r.jsx)(r.Fragment, {})
                },
                c = () => ({
                    utmSource: (0, a.Lg)(a.Hh.UTM_SOURCE) || "",
                    utmMedium: (0, a.Lg)(a.Hh.UTM_MEDIUM) || "",
                    utmCampaign: (0, a.Lg)(a.Hh.UTM_CAMPAIGN) || "",
                    utmContent: (0, a.Lg)(a.Hh.UTM_CONTENT) || "",
                    utmTerm: (0, a.Lg)(a.Hh.UTM_TERM) || "",
                    gclid: (0, a.Lg)(a.Hh.GCLID) || ""
                })
        },
        89715: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 78487)), Promise.resolve().then(n.t.bind(n, 46238, 23)), Promise.resolve().then(n.t.bind(n, 11002, 23)), Promise.resolve().then(n.t.bind(n, 30789, 23)), Promise.resolve().then(n.t.bind(n, 68424, 23)), Promise.resolve().then(n.bind(n, 15594)), Promise.resolve().then(n.bind(n, 52938)), Promise.resolve().then(n.bind(n, 43290)), Promise.resolve().then(n.t.bind(n, 71469, 23))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [9283, 1356, 1071, 1497, 6269, 3242, 5203, 8331, 1968, 7358], () => t(89715)), _N_E = e.O()
    }
]);