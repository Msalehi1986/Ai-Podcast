! function() {
    "use strict";
    var t, e, n = function() {
            var t = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
        },
        r = function(t) {
            if ("loading" === document.readyState) return "loading";
            var e = n();
            if (e) {
                if (t < e.domInteractive) return "loading";
                if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
                if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
            }
            return "complete"
        },
        i = function(t) {
            var e = t.nodeName;
            return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
        },
        a = function(t, e) {
            var n = "";
            try {
                for (; t && 9 !== t.nodeType;) {
                    var r = t,
                        a = r.id ? "#" + r.id : i(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                    if (n.length + a.length > (e || 100) - 1) return n || a;
                    if (n = n ? a + ">" + n : a, r.id) break;
                    t = r.parentNode
                }
            } catch (t) {}
            return n
        },
        o = -1,
        s = function() {
            return o
        },
        u = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && (o = e.timeStamp, t(e))
            }), !0)
        },
        c = function() {
            var t = n();
            return t && t.activationStart || 0
        },
        f = function(t, e) {
            var r = n(),
                i = "navigate";
            return s() >= 0 ? i = "back-forward-cache" : r && (document.prerendering || c() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), {
                name: t,
                value: void 0 === e ? -1 : e,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: i
            }
        },
        l = function(t, e, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    var r = new PerformanceObserver((function(t) {
                        Promise.resolve().then((function() {
                            e(t.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({
                        type: t,
                        buffered: !0
                    }, n || {})), r
                }
            } catch (t) {}
        },
        d = function(t, e, n, r) {
            var i, a;
            return function(o) {
                e.value >= 0 && (o || r) && ((a = e.value - (i || 0)) || void 0 === i) && (i = e.value, e.delta = a, e.rating = function(t, e) {
                    return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"
                }(e.value, n), t(e))
            }
        },
        m = function(t) {
            requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                    return t()
                }))
            }))
        },
        p = function(t) {
            document.addEventListener("visibilitychange", (function() {
                "hidden" === document.visibilityState && t()
            }))
        },
        v = function(t) {
            var e = !1;
            return function() {
                e || (t(), e = !0)
            }
        },
        g = -1,
        h = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        y = function(t) {
            "hidden" === document.visibilityState && g > -1 && (g = "visibilitychange" === t.type ? t.timeStamp : 0, E())
        },
        T = function() {
            addEventListener("visibilitychange", y, !0), addEventListener("prerenderingchange", y, !0)
        },
        E = function() {
            removeEventListener("visibilitychange", y, !0), removeEventListener("prerenderingchange", y, !0)
        },
        S = function() {
            return g < 0 && (g = h(), T(), u((function() {
                setTimeout((function() {
                    g = h(), T()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return g
                }
            }
        },
        b = function(t) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return t()
            }), !0) : t()
        },
        C = [1800, 3e3],
        L = function(t, e) {
            e = e || {}, b((function() {
                var n, r = S(),
                    i = f("FCP"),
                    a = l("paint", (function(t) {
                        t.forEach((function(t) {
                            "first-contentful-paint" === t.name && (a.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - c(), 0), i.entries.push(t), n(!0)))
                        }))
                    }));
                a && (n = d(t, i, C, e.reportAllChanges), u((function(r) {
                    i = f("FCP"), n = d(t, i, C, e.reportAllChanges), m((function() {
                        i.value = performance.now() - r.timeStamp, n(!0)
                    }))
                })))
            }))
        },
        M = [.1, .25],
        w = 0,
        P = 1 / 0,
        I = 0,
        x = function(t) {
            t.forEach((function(t) {
                t.interactionId && (P = Math.min(P, t.interactionId), I = Math.max(I, t.interactionId), w = I ? (I - P) / 7 + 1 : 0)
            }))
        },
        k = function() {
            return t ? w : performance.interactionCount || 0
        },
        A = function() {
            "interactionCount" in performance || t || (t = l("event", x, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        _ = [],
        F = new Map,
        D = 0,
        R = [],
        B = function(t) {
            if (R.forEach((function(e) {
                    return e(t)
                })), t.interactionId || "first-input" === t.entryType) {
                var e = _[_.length - 1],
                    n = F.get(t.interactionId);
                if (n || _.length < 10 || t.duration > e.latency) {
                    if (n) t.duration > n.latency ? (n.entries = [t], n.latency = t.duration) : t.duration === n.latency && t.startTime === n.entries[0].startTime && n.entries.push(t);
                    else {
                        var r = {
                            id: t.interactionId,
                            latency: t.duration,
                            entries: [t]
                        };
                        F.set(r.id, r), _.push(r)
                    }
                    _.sort((function(t, e) {
                        return e.latency - t.latency
                    })), _.length > 10 && _.splice(10).forEach((function(t) {
                        return F.delete(t.id)
                    }))
                }
            }
        },
        H = function(t) {
            var e = self.requestIdleCallback || self.setTimeout,
                n = -1;
            return t = v(t), "hidden" === document.visibilityState ? t() : (n = e(t), p(t)), n
        },
        q = [200, 500],
        O = function(t, e) {
            "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (e = e || {}, b((function() {
                var n;
                A();
                var r, i = f("INP"),
                    a = function(t) {
                        H((function() {
                            t.forEach(B);
                            var e = function() {
                                var t = Math.min(_.length - 1, Math.floor((k() - D) / 50));
                                return _[t]
                            }();
                            e && e.latency !== i.value && (i.value = e.latency, i.entries = e.entries, r())
                        }))
                    },
                    o = l("event", a, {
                        durationThreshold: null !== (n = e.durationThreshold) && void 0 !== n ? n : 40
                    });
                r = d(t, i, q, e.reportAllChanges), o && (o.observe({
                    type: "first-input",
                    buffered: !0
                }), p((function() {
                    a(o.takeRecords()), r(!0)
                })), u((function() {
                    D = k(), _.length = 0, F.clear(), i = f("INP"), r = d(t, i, q, e.reportAllChanges)
                })))
            })))
        },
        j = [],
        N = [],
        W = 0,
        V = new WeakMap,
        X = new Map,
        z = -1,
        U = function(t) {
            j = j.concat(t), G()
        },
        G = function() {
            z < 0 && (z = H(J))
        },
        J = function() {
            X.size > 10 && X.forEach((function(t, e) {
                F.has(e) || X.delete(e)
            }));
            var t = _.map((function(t) {
                    return V.get(t.entries[0])
                })),
                e = N.length - 50;
            N = N.filter((function(n, r) {
                return r >= e || t.includes(n)
            }));
            for (var n = new Set, r = 0; r < N.length; r++) {
                var i = N[r];
                K(i.startTime, i.processingEnd).forEach((function(t) {
                    n.add(t)
                }))
            }
            var a = j.length - 1 - 50;
            j = j.filter((function(t, e) {
                return t.startTime > W && e > a || n.has(t)
            })), z = -1
        };
    R.push((function(t) {
        t.interactionId && t.target && !X.has(t.interactionId) && X.set(t.interactionId, t.target)
    }), (function(t) {
        var e, n = t.startTime + t.duration;
        W = Math.max(W, t.processingEnd);
        for (var r = N.length - 1; r >= 0; r--) {
            var i = N[r];
            if (Math.abs(n - i.renderTime) <= 8) {
                (e = i).startTime = Math.min(t.startTime, e.startTime), e.processingStart = Math.min(t.processingStart, e.processingStart), e.processingEnd = Math.max(t.processingEnd, e.processingEnd), e.entries.push(t);
                break
            }
        }
        e || (e = {
            startTime: t.startTime,
            processingStart: t.processingStart,
            processingEnd: t.processingEnd,
            renderTime: n,
            entries: [t]
        }, N.push(e)), (t.interactionId || "first-input" === t.entryType) && V.set(t, e), G()
    }));
    var K = function(t, e) {
            for (var n, r = [], i = 0; n = j[i]; i++)
                if (!(n.startTime + n.duration < t)) {
                    if (n.startTime > e) break;
                    r.push(n)
                }
            return r
        },
        Q = [2500, 4e3],
        Y = {},
        Z = "undefined" != typeof window ? window : void 0,
        $ = "undefined" != typeof globalThis ? globalThis : Z,
        tt = null == $ ? void 0 : $.navigator;
    null == $ || $.document, null == $ || $.location, null == $ || $.fetch, null != $ && $.XMLHttpRequest && "withCredentials" in new $.XMLHttpRequest && $.XMLHttpRequest, null == $ || $.AbortController, null == tt || tt.userAgent;
    var et = null != Z ? Z : {},
        nt = {
            onLCP: function(t, e) {
                ! function(t, e) {
                    e = e || {}, b((function() {
                        var n, r = S(),
                            i = f("LCP"),
                            a = function(t) {
                                e.reportAllChanges || (t = t.slice(-1)), t.forEach((function(t) {
                                    t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - c(), 0), i.entries = [t], n())
                                }))
                            },
                            o = l("largest-contentful-paint", a);
                        if (o) {
                            n = d(t, i, Q, e.reportAllChanges);
                            var s = v((function() {
                                Y[i.id] || (a(o.takeRecords()), o.disconnect(), Y[i.id] = !0, n(!0))
                            }));
                            ["keydown", "click"].forEach((function(t) {
                                addEventListener(t, (function() {
                                    return H(s)
                                }), {
                                    once: !0,
                                    capture: !0
                                })
                            })), p(s), u((function(r) {
                                i = f("LCP"), n = d(t, i, Q, e.reportAllChanges), m((function() {
                                    i.value = performance.now() - r.timeStamp, Y[i.id] = !0, n(!0)
                                }))
                            }))
                        }
                    }))
                }((function(e) {
                    var r = function(t) {
                        var e = {
                            timeToFirstByte: 0,
                            resourceLoadDelay: 0,
                            resourceLoadDuration: 0,
                            elementRenderDelay: t.value
                        };
                        if (t.entries.length) {
                            var r = n();
                            if (r) {
                                var i = r.activationStart || 0,
                                    o = t.entries[t.entries.length - 1],
                                    s = o.url && performance.getEntriesByType("resource").filter((function(t) {
                                        return t.name === o.url
                                    }))[0],
                                    u = Math.max(0, r.responseStart - i),
                                    c = Math.max(u, s ? (s.requestStart || s.startTime) - i : 0),
                                    f = Math.max(c, s ? s.responseEnd - i : 0),
                                    l = Math.max(f, o.startTime - i);
                                e = {
                                    element: a(o.element),
                                    timeToFirstByte: u,
                                    resourceLoadDelay: c - u,
                                    resourceLoadDuration: f - c,
                                    elementRenderDelay: l - f,
                                    navigationEntry: r,
                                    lcpEntry: o
                                }, o.url && (e.url = o.url), s && (e.lcpResourceEntry = s)
                            }
                        }
                        return Object.assign(t, {
                            attribution: e
                        })
                    }(e);
                    t(r)
                }), e)
            },
            onCLS: function(t, e) {
                ! function(t, e) {
                    e = e || {}, L(v((function() {
                        var n, r = f("CLS", 0),
                            i = 0,
                            a = [],
                            o = function(t) {
                                t.forEach((function(t) {
                                    if (!t.hadRecentInput) {
                                        var e = a[0],
                                            n = a[a.length - 1];
                                        i && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value, a.push(t)) : (i = t.value, a = [t])
                                    }
                                })), i > r.value && (r.value = i, r.entries = a, n())
                            },
                            s = l("layout-shift", o);
                        s && (n = d(t, r, M, e.reportAllChanges), p((function() {
                            o(s.takeRecords()), n(!0)
                        })), u((function() {
                            i = 0, r = f("CLS", 0), n = d(t, r, M, e.reportAllChanges), m((function() {
                                return n()
                            }))
                        })), setTimeout(n, 0))
                    })))
                }((function(e) {
                    var n = function(t) {
                        var e, n = {};
                        if (t.entries.length) {
                            var i = t.entries.reduce((function(t, e) {
                                return t && t.value > e.value ? t : e
                            }));
                            if (i && i.sources && i.sources.length) {
                                var o = (e = i.sources).find((function(t) {
                                    return t.node && 1 === t.node.nodeType
                                })) || e[0];
                                o && (n = {
                                    largestShiftTarget: a(o.node),
                                    largestShiftTime: i.startTime,
                                    largestShiftValue: i.value,
                                    largestShiftSource: o,
                                    largestShiftEntry: i,
                                    loadState: r(i.startTime)
                                })
                            }
                        }
                        return Object.assign(t, {
                            attribution: n
                        })
                    }(e);
                    t(n)
                }), e)
            },
            onFCP: function(t, e) {
                L((function(e) {
                    var i = function(t) {
                        var e = {
                            timeToFirstByte: 0,
                            firstByteToFCP: t.value,
                            loadState: r(s())
                        };
                        if (t.entries.length) {
                            var i = n(),
                                a = t.entries[t.entries.length - 1];
                            if (i) {
                                var o = i.activationStart || 0,
                                    u = Math.max(0, i.responseStart - o);
                                e = {
                                    timeToFirstByte: u,
                                    firstByteToFCP: t.value - u,
                                    loadState: r(t.entries[0].startTime),
                                    navigationEntry: i,
                                    fcpEntry: a
                                }
                            }
                        }
                        return Object.assign(t, {
                            attribution: e
                        })
                    }(e);
                    t(i)
                }), e)
            },
            onINP: function(t, n) {
                e || (e = l("long-animation-frame", U)), O((function(e) {
                    var n = function(t) {
                        var e = t.entries[0],
                            n = V.get(e),
                            i = e.processingStart,
                            o = n.processingEnd,
                            s = n.entries.sort((function(t, e) {
                                return t.processingStart - e.processingStart
                            })),
                            u = K(e.startTime, o),
                            c = t.entries.find((function(t) {
                                return t.target
                            })),
                            f = c && c.target || X.get(e.interactionId),
                            l = [e.startTime + e.duration, o].concat(u.map((function(t) {
                                return t.startTime + t.duration
                            }))),
                            d = Math.max.apply(Math, l),
                            m = {
                                interactionTarget: a(f),
                                interactionTargetElement: f,
                                interactionType: e.name.startsWith("key") ? "keyboard" : "pointer",
                                interactionTime: e.startTime,
                                nextPaintTime: d,
                                processedEventEntries: s,
                                longAnimationFrameEntries: u,
                                inputDelay: i - e.startTime,
                                processingDuration: o - i,
                                presentationDelay: Math.max(d - o, 0),
                                loadState: r(e.startTime)
                            };
                        return Object.assign(t, {
                            attribution: m
                        })
                    }(e);
                    t(n)
                }), n)
            }
        };
    et.__PosthogExtensions__ = et.__PosthogExtensions__ || {}, et.__PosthogExtensions__.postHogWebVitalsCallbacks = nt, et.postHogWebVitalsCallbacks = nt
}();
//# sourceMappingURL=web-vitals.js.map