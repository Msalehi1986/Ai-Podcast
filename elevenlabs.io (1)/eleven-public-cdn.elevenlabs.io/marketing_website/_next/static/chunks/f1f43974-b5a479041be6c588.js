"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1071], {
        24154: (e, t, i) => {
            i.d(t, {
                Ay: () => na
            });
            var s, r = "undefined" != typeof window ? window : void 0,
                n = "undefined" != typeof globalThis ? globalThis : r,
                o = Array.prototype,
                a = o.forEach,
                l = o.indexOf,
                c = null == n ? void 0 : n.navigator,
                u = null == n ? void 0 : n.document,
                d = null == n ? void 0 : n.location,
                h = null == n ? void 0 : n.fetch,
                _ = null != n && n.XMLHttpRequest && "withCredentials" in new n.XMLHttpRequest ? n.XMLHttpRequest : void 0,
                p = null == n ? void 0 : n.AbortController,
                g = null == c ? void 0 : c.userAgent,
                v = null != r ? r : {},
                f = {
                    DEBUG: !1,
                    LIB_VERSION: "1.217.6"
                },
                m = "$copy_autocapture",
                b = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
            ! function(e) {
                e.GZipJS = "gzip-js", e.Base64 = "base64"
            }(s || (s = {}));
            var y = {};

            function w(e, t, i) {
                if (B(e)) {
                    if (a && e.forEach === a) e.forEach(t, i);
                    else if ("length" in e && e.length === +e.length) {
                        for (var s = 0, r = e.length; s < r; s++)
                            if (s in e && t.call(i, e[s], s) === y) return
                    }
                }
            }

            function S(e, t, i) {
                if (!J(e)) {
                    if (B(e)) return w(e, t, i);
                    if (X(e)) {
                        for (var s of e.entries())
                            if (t.call(i, s[1], s[0]) === y) return
                    } else
                        for (var r in e)
                            if (N.call(e, r) && t.call(i, e[r], r) === y) return
                }
            }
            var k = function(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    return w(i, function(t) {
                        for (var i in t) void 0 !== t[i] && (e[i] = t[i])
                    }), e
                },
                E = function(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    return w(i, function(t) {
                        w(t, function(t) {
                            e.push(t)
                        })
                    }), e
                };

            function x(e) {
                for (var t = Object.keys(e), i = t.length, s = Array(i); i--;) s[i] = [t[i], e[t[i]]];
                return s
            }
            var I = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                C = function(e) {
                    return function() {
                        try {
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            return e.apply(this, i)
                        } catch (e) {
                            et.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), et.critical(e)
                        }
                    }
                },
                P = function(e) {
                    var t = {};
                    return S(e, function(e, i) {
                        W(e) && e.length > 0 && (t[i] = e)
                    }), t
                },
                F = ["herokuapp.com", "vercel.app", "netlify.app"];

            function R(e, t) {
                for (var i = 0; i < e.length; i++)
                    if (t(e[i])) return e[i]
            }

            function T(e, t, i, s) {
                var {
                    capture: r = !1,
                    passive: n = !0
                } = null != s ? s : {};
                null == e || e.addEventListener(t, i, {
                    capture: r,
                    passive: n
                })
            }

            function $(e, t) {
                return -1 !== e.indexOf(t)
            }
            var O = function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                },
                A = function(e) {
                    return e.replace(/^\$/, "")
                },
                M = function(e, t) {
                    if (! function(e) {
                            try {
                                new RegExp(e)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }(t)) return !1;
                    try {
                        return new RegExp(t).test(e)
                    } catch (e) {
                        return !1
                    }
                },
                L = Array.isArray,
                D = Object.prototype,
                N = D.hasOwnProperty,
                q = D.toString,
                B = L || function(e) {
                    return "[object Array]" === q.call(e)
                },
                H = e => "function" == typeof e,
                U = e => e === Object(e) && !B(e),
                z = e => {
                    if (U(e)) {
                        for (var t in e)
                            if (N.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                },
                j = e => void 0 === e,
                W = e => "[object String]" == q.call(e),
                V = e => W(e) && 0 === e.trim().length,
                G = e => null === e,
                J = e => j(e) || G(e),
                Y = e => "[object Number]" == q.call(e),
                K = e => "[object Boolean]" === q.call(e),
                X = e => e instanceof FormData,
                Q = e => e instanceof Error,
                Z = e => $(b, e),
                ee = e => {
                    var t = {
                        _log: function(t) {
                            if (r && (f.DEBUG || v.POSTHOG_DEBUG) && !j(r.console) && r.console) {
                                for (var i = ("__rrweb_original__" in r.console[t]) ? r.console[t].__rrweb_original__ : r.console[t], s = arguments.length, n = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) n[o - 1] = arguments[o];
                                i(e, ...n)
                            }
                        },
                        info: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("log", ...i)
                        },
                        warn: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("warn", ...i)
                        },
                        error: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("error", ...i)
                        },
                        critical: function() {
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            console.error(e, ...i)
                        },
                        uninitializedWarning: e => {
                            t.error("You must initialize PostHog before calling ".concat(e))
                        },
                        createLogger: t => ee("".concat(e, " ").concat(t))
                    };
                    return t
                },
                et = ee("[PostHog.js]"),
                ei = et.createLogger,
                es = ei("[ExternalScriptsLoader]"),
                er = (e, t, i) => {
                    if (e.config.disable_external_dependency_loading) return es.warn("".concat(t, " was requested but loading of external scripts is disabled.")), i("Loading of external scripts is disabled");
                    var s = () => {
                        if (!u) return i("document not found");
                        var s = u.createElement("script");
                        if (s.type = "text/javascript", s.crossOrigin = "anonymous", s.src = t, s.onload = e => i(void 0, e), s.onerror = e => i(e), e.config.prepare_external_dependency_script && (s = e.config.prepare_external_dependency_script(s)), !s) return i("prepare_external_dependency_script returned null");
                        var r, n = u.querySelectorAll("body > script");
                        n.length > 0 ? null === (r = n[0].parentNode) || void 0 === r || r.insertBefore(s, n[0]) : u.body.appendChild(s)
                    };
                    null != u && u.body ? s() : null == u || u.addEventListener("DOMContentLoaded", s)
                };

            function en(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, s)
                }
                return i
            }

            function eo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? en(Object(i), !0).forEach(function(t) {
                        ea(e, t, i[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : en(Object(i)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    })
                }
                return e
            }

            function ea(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function el(e, t) {
                if (null == e) return {};
                var i, s, r = function(e, t) {
                    if (null == e) return {};
                    var i, s, r = {},
                        n = Object.keys(e);
                    for (s = 0; s < n.length; s++) i = n[s], t.indexOf(i) >= 0 || (r[i] = e[i]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < n.length; s++) i = n[s], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
                }
                return r
            }
            v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
                var s = "/static/".concat(t, ".js") + "?v=".concat(e.version);
                if ("remote-config" === t && (s = "/array/".concat(e.config.token, "/config.js")), "toolbar" === t) {
                    var r = 3e5 * Math.floor(Date.now() / 3e5);
                    s = "".concat(s, "&t=").concat(r)
                }
                var n = e.requestRouter.endpointFor("assets", s);
                er(e, n, i)
            }, v.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
                var s = e.requestRouter.endpointFor("api", t);
                er(e, s, i)
            };
            var ec = "$people_distinct_id",
                eu = "__alias",
                ed = "__timers",
                eh = "$autocapture_disabled_server_side",
                e_ = "$heatmaps_enabled_server_side",
                ep = "$exception_capture_enabled_server_side",
                eg = "$web_vitals_enabled_server_side",
                ev = "$dead_clicks_enabled_server_side",
                ef = "$web_vitals_allowed_metrics",
                em = "$session_recording_enabled_server_side",
                eb = "$console_log_recording_enabled_server_side",
                ey = "$session_recording_network_payload_capture",
                ew = "$session_recording_canvas_recording",
                eS = "$replay_sample_rate",
                ek = "$replay_minimum_duration",
                eE = "$replay_script_config",
                ex = "$sesid",
                eI = "$session_is_sampled",
                eC = "$session_recording_url_trigger_activated_session",
                eP = "$session_recording_event_trigger_activated_session",
                eF = "$enabled_feature_flags",
                eR = "$early_access_features",
                eT = "$stored_person_properties",
                e$ = "$stored_group_properties",
                eO = "$surveys",
                eA = "$surveys_activated",
                eM = "$flag_call_reported",
                eL = "$user_state",
                eD = "$client_session_props",
                eN = "$capture_rate_limit",
                eq = "$initial_campaign_params",
                eB = "$initial_referrer_info",
                eH = "$initial_person_info",
                eU = "$epp",
                ez = "__POSTHOG_TOOLBAR__",
                ej = "$posthog_cookieless",
                eW = [ec, eu, "__cmpns", ed, em, e_, ex, eF, eL, eR, e$, eT, eO, eM, eD, eN, eq, eB, eU],
                eV = ei("[FeatureFlags]"),
                eG = "$active_feature_flags",
                eJ = "$override_feature_flags",
                eY = "$feature_flag_payloads",
                eK = "$override_feature_flag_payloads",
                eX = e => {
                    var t = {};
                    for (var [i, s] of x(e || {})) s && (t[i] = s);
                    return t
                };
            class eQ {
                constructor(e) {
                    ea(this, "_override_warning", !1), ea(this, "_hasLoadedFlags", !1), ea(this, "_requestInFlight", !1), ea(this, "_reloadingDisabled", !1), ea(this, "_additionalReloadRequested", !1), ea(this, "_decideCalled", !1), ea(this, "_flagsLoadedFromRemote", !1), this.instance = e, this.featureFlagEventHandlers = []
                }
                decide() {
                    if (this.instance.config.__preview_remote_config) this._decideCalled = !0;
                    else {
                        var e = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
                        this._callDecideEndpoint({
                            disableFlags: e
                        })
                    }
                }
                get hasLoadedFlags() {
                    return this._hasLoadedFlags
                }
                getFlags() {
                    return Object.keys(this.getFlagVariants())
                }
                getFlagVariants() {
                    var e = this.instance.get_property(eF),
                        t = this.instance.get_property(eJ);
                    if (!t) return e || {};
                    for (var i = k({}, e), s = Object.keys(t), r = 0; r < s.length; r++) i[s[r]] = t[s[r]];
                    return this._override_warning || (eV.warn(" Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: i
                    }), this._override_warning = !0), i
                }
                getFlagPayloads() {
                    var e = this.instance.get_property(eY),
                        t = this.instance.get_property(eK);
                    if (!t) return e || {};
                    for (var i = k({}, e || {}), s = Object.keys(t), r = 0; r < s.length; r++) i[s[r]] = t[s[r]];
                    return this._override_warning || (eV.warn(" Overriding feature flag payloads!", {
                        flagPayloads: e,
                        overriddenPayloads: t,
                        finalPayloads: i
                    }), this._override_warning = !0), i
                }
                reloadFeatureFlags() {
                    this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout(() => {
                        this._callDecideEndpoint()
                    }, 5))
                }
                clearDebouncer() {
                    clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
                }
                ensureFlagsLoaded() {
                    this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
                }
                setAnonymousDistinctId(e) {
                    this.$anon_distinct_id = e
                }
                setReloadingPaused(e) {
                    this._reloadingDisabled = e
                }
                _callDecideEndpoint(e) {
                    if (this.clearDebouncer(), !this.instance.config.advanced_disable_decide)
                        if (this._requestInFlight) this._additionalReloadRequested = !0;
                        else {
                            var t = {
                                token: this.instance.config.token,
                                distinct_id: this.instance.get_distinct_id(),
                                groups: this.instance.getGroups(),
                                $anon_distinct_id: this.$anon_distinct_id,
                                person_properties: this.instance.get_property(eT),
                                group_properties: this.instance.get_property(e$)
                            };
                            (null != e && e.disableFlags || this.instance.config.advanced_disable_feature_flags) && (t.disable_flags = !0), this._requestInFlight = !0, this.instance._send_request({
                                method: "POST",
                                url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                data: t,
                                compression: this.instance.config.disable_compression ? void 0 : s.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: e => {
                                    var i, s, r = !0;
                                    200 === e.statusCode && (this.$anon_distinct_id = void 0, r = !1), this._requestInFlight = !1, this._decideCalled || (this._decideCalled = !0, this.instance._onRemoteConfig(null !== (s = e.json) && void 0 !== s ? s : {})), t.disable_flags || (this._flagsLoadedFromRemote = !r, this.receivedFeatureFlags(null !== (i = e.json) && void 0 !== i ? i : {}, r), this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callDecideEndpoint()))
                                }
                            })
                        }
                }
                getFeatureFlag(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
                        var i, s, r, n, o, a = this.getFlagVariants()[e],
                            l = "".concat(a),
                            c = this.instance.get_property(eM) || {};
                        return !t.send_event && "send_event" in t || e in c && c[e].includes(l) || (B(c[e]) ? c[e].push(l) : c[e] = [l], null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [eM]: c
                        }), this.instance.capture("$feature_flag_called", {
                            $feature_flag: e,
                            $feature_flag_response: a,
                            $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
                            $feature_flag_bootstrapped_response: (null === (s = this.instance.config.bootstrap) || void 0 === s || null === (r = s.featureFlags) || void 0 === r ? void 0 : r[e]) || null,
                            $feature_flag_bootstrapped_payload: (null === (n = this.instance.config.bootstrap) || void 0 === n || null === (o = n.featureFlagPayloads) || void 0 === o ? void 0 : o[e]) || null,
                            $used_bootstrap_value: !this._flagsLoadedFromRemote
                        })), a
                    }
                    eV.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
                getFeatureFlagPayload(e) {
                    return this.getFlagPayloads()[e]
                }
                isFeatureEnabled(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                    eV.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
                addFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers.push(e)
                }
                removeFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(t => t !== e)
                }
                receivedFeatureFlags(e, t) {
                    if (this.instance.persistence) {
                        this._hasLoadedFlags = !0;
                        var i = this.getFlagVariants(),
                            s = this.getFlagPayloads();
                        ! function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                r = e.featureFlags,
                                n = e.featureFlagPayloads;
                            if (r)
                                if (B(r)) {
                                    var o = {};
                                    if (r)
                                        for (var a = 0; a < r.length; a++) o[r[a]] = !0;
                                    t && t.register({
                                        [eG]: r,
                                        [eF]: o
                                    })
                                } else {
                                    var l = r,
                                        c = n;
                                    e.errorsWhileComputingFlags && (l = eo(eo({}, i), l), c = eo(eo({}, s), c)), t && t.register({
                                        [eG]: Object.keys(eX(l)),
                                        [eF]: l || {},
                                        [eY]: c || {}
                                    })
                                }
                        }(e, this.instance.persistence, i, s), this._fireFeatureFlagsCallbacks(t)
                    }
                }
                override(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    eV.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
                        flags: e,
                        suppressWarning: t
                    })
                }
                overrideFeatureFlags(e) {
                    if (!this.instance.__loaded || !this.instance.persistence) return eV.uninitializedWarning("posthog.feature_flags.overrideFeatureFlags");
                    if (!1 === e) return this.instance.persistence.unregister(eJ), this.instance.persistence.unregister(eK), void this._fireFeatureFlagsCallbacks();
                    if (e && "object" == typeof e && ("flags" in e || "payloads" in e)) {
                        var t;
                        if (this._override_warning = !!(null !== (t = e.suppressWarning) && void 0 !== t && t), "flags" in e) {
                            if (!1 === e.flags) this.instance.persistence.unregister(eJ);
                            else if (e.flags)
                                if (B(e.flags)) {
                                    for (var i = {}, s = 0; s < e.flags.length; s++) i[e.flags[s]] = !0;
                                    this.instance.persistence.register({
                                        [eJ]: i
                                    })
                                } else this.instance.persistence.register({
                                    [eJ]: e.flags
                                })
                        }
                        return "payloads" in e && (!1 === e.payloads ? this.instance.persistence.unregister(eK) : e.payloads && this.instance.persistence.register({
                            [eK]: e.payloads
                        })), void this._fireFeatureFlagsCallbacks()
                    }
                    this._fireFeatureFlagsCallbacks()
                }
                onFeatureFlags(e) {
                    if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
                        var {
                            flags: t,
                            flagVariants: i
                        } = this._prepareFeatureFlagsForCallbacks();
                        e(t, i)
                    }
                    return () => this.removeFeatureFlagsHandler(e)
                }
                updateEarlyAccessFeatureEnrollment(e, t) {
                    var i, s = (this.instance.get_property(eR) || []).find(t => t.flagKey === e),
                        r = {
                            ["$feature_enrollment/".concat(e)]: t
                        },
                        n = {
                            $feature_flag: e,
                            $feature_enrollment: t,
                            $set: r
                        };
                    s && (n.$early_access_feature_name = s.name), this.instance.capture("$feature_enrollment_update", n), this.setPersonPropertiesForFlags(r, !1);
                    var o = eo(eo({}, this.getFlagVariants()), {}, {
                        [e]: t
                    });
                    null === (i = this.instance.persistence) || void 0 === i || i.register({
                        [eG]: Object.keys(eX(o)),
                        [eF]: o
                    }), this._fireFeatureFlagsCallbacks()
                }
                getEarlyAccessFeatures(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.instance.get_property(eR);
                    if (i && !t) return e(i);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        callback: t => {
                            var i;
                            if (t.json) {
                                var s = t.json.earlyAccessFeatures;
                                return null === (i = this.instance.persistence) || void 0 === i || i.register({
                                    [eR]: s
                                }), e(s)
                            }
                        }
                    })
                }
                _prepareFeatureFlagsForCallbacks() {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter(e => t[e]),
                        flagVariants: Object.keys(t).filter(e => t[e]).reduce((e, i) => (e[i] = t[i], e), {})
                    }
                }
                _fireFeatureFlagsCallbacks(e) {
                    var {
                        flags: t,
                        flagVariants: i
                    } = this._prepareFeatureFlagsForCallbacks();
                    this.featureFlagEventHandlers.forEach(s => s(t, i, {
                        errorsLoading: e
                    }))
                }
                setPersonPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(eT) || {};
                    this.instance.register({
                        [eT]: eo(eo({}, i), e)
                    }), t && this.instance.reloadFeatureFlags()
                }
                resetPersonPropertiesForFlags() {
                    this.instance.unregister(eT)
                }
                setGroupPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(e$) || {};
                    0 !== Object.keys(i).length && Object.keys(i).forEach(t => {
                        i[t] = eo(eo({}, i[t]), e[t]), delete e[t]
                    }), this.instance.register({
                        [e$]: eo(eo({}, i), e)
                    }), t && this.instance.reloadFeatureFlags()
                }
                resetGroupPropertiesForFlags(e) {
                    if (e) {
                        var t = this.instance.get_property(e$) || {};
                        this.instance.register({
                            [e$]: eo(eo({}, t), {}, {
                                [e]: {}
                            })
                        })
                    } else this.instance.unregister(e$)
                }
            }
            Math.trunc || (Math.trunc = function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }), Number.isInteger || (Number.isInteger = function(e) {
                return Y(e) && isFinite(e) && Math.floor(e) === e
            });
            var eZ = "0123456789abcdef";
            class e0 {
                constructor(e) {
                    if (this.bytes = e, 16 !== e.length) throw TypeError("not 128-bit length")
                }
                static fromFieldsV7(e, t, i, s) {
                    if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(s) || e < 0 || t < 0 || i < 0 || s < 0 || e > 0xffffffffffff || t > 4095 || i > 0x3fffffff || s > 0xffffffff) throw RangeError("invalid field value");
                    var r = new Uint8Array(16);
                    return r[0] = e / 0x10000000000, r[1] = e / 0x100000000, r[2] = e / 0x1000000, r[3] = e / 65536, r[4] = e / 256, r[5] = e, r[6] = 112 | t >>> 8, r[7] = t, r[8] = 128 | i >>> 24, r[9] = i >>> 16, r[10] = i >>> 8, r[11] = i, r[12] = s >>> 24, r[13] = s >>> 16, r[14] = s >>> 8, r[15] = s, new e0(r)
                }
                toString() {
                    for (var e = "", t = 0; t < this.bytes.length; t++) e = e + eZ.charAt(this.bytes[t] >>> 4) + eZ.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                    if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
                    return e
                }
                clone() {
                    return new e0(this.bytes.slice(0))
                }
                equals(e) {
                    return 0 === this.compareTo(e)
                }
                compareTo(e) {
                    for (var t = 0; t < 16; t++) {
                        var i = this.bytes[t] - e.bytes[t];
                        if (0 !== i) return Math.sign(i)
                    }
                    return 0
                }
            }
            class e1 {
                constructor() {
                    ea(this, "timestamp", 0), ea(this, "counter", 0), ea(this, "random", new e5)
                }
                generate() {
                    var e = this.generateOrAbort();
                    if (j(e)) {
                        this.timestamp = 0;
                        var t = this.generateOrAbort();
                        if (j(t)) throw Error("Could not generate UUID after timestamp reset");
                        return t
                    }
                    return e
                }
                generateOrAbort() {
                    var e = Date.now();
                    if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                    else {
                        if (!(e + 1e4 > this.timestamp)) return;
                        this.counter++, this.counter > 0x3ffffffffff && (this.timestamp++, this.resetCounter())
                    }
                    return e0.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 0x40000000), 0x3fffffff & this.counter, this.random.nextUint32())
                }
                resetCounter() {
                    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                }
            }
            var e2, e3 = e => {
                if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
                for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
                return e
            };
            r && !j(r.crypto) && crypto.getRandomValues && (e3 = e => crypto.getRandomValues(e));
            class e5 {
                constructor() {
                    ea(this, "buffer", new Uint32Array(8)), ea(this, "cursor", 1 / 0)
                }
                nextUint32() {
                    return this.cursor >= this.buffer.length && (e3(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                }
            }
            var e6 = () => e8().toString(),
                e8 = () => (e2 || (e2 = new e1)).generate(),
                e4 = "",
                e7 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
                e9 = {
                    is_supported: () => !!u,
                    error: function(e) {
                        et.error("cookieStore error: " + e)
                    },
                    get: function(e) {
                        if (u) {
                            try {
                                for (var t = e + "=", i = u.cookie.split(";").filter(e => e.length), s = 0; s < i.length; s++) {
                                    for (var r = i[s];
                                        " " == r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
                                }
                            } catch (e) {}
                            return null
                        }
                    },
                    parse: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e9.get(e)) || {}
                        } catch (e) {}
                        return t
                    },
                    set: function(e, t, i, s, r) {
                        if (u) try {
                            var n = "",
                                o = "",
                                a = function(e, t) {
                                    if (t) {
                                        var i = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                                            if (e4) return e4;
                                            if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                            for (var i = e.split("."), s = Math.min(i.length, 8), r = "dmn_chk_" + e6(), n = RegExp("(^|;)\\s*" + r + "=1"); !e4 && s--;) {
                                                var o = i.slice(s).join("."),
                                                    a = r + "=1;domain=." + o;
                                                t.cookie = a, n.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", e4 = o)
                                            }
                                            return e4
                                        }(e);
                                        if (!i) {
                                            var s, r = (s = e.match(e7)) ? s[0] : "";
                                            r !== i && et.info("Warning: cookie subdomain discovery mismatch", r, i), i = r
                                        }
                                        return i ? "; domain=." + i : ""
                                    }
                                    return ""
                                }(u.location.hostname, s);
                            if (i) {
                                var l = new Date;
                                l.setTime(l.getTime() + 24 * i * 36e5), n = "; expires=" + l.toUTCString()
                            }
                            r && (o = "; secure");
                            var c = e + "=" + encodeURIComponent(JSON.stringify(t)) + n + "; SameSite=Lax; path=/" + a + o;
                            return c.length > 3686.4 && et.warn("cookieStore warning: large cookie, len=" + c.length), u.cookie = c, c
                        } catch (e) {
                            return
                        }
                    },
                    remove: function(e, t) {
                        try {
                            e9.set(e, "", -1, t)
                        } catch (e) {
                            return
                        }
                    }
                },
                te = null,
                tt = {
                    is_supported: function() {
                        if (!G(te)) return te;
                        var e = !0;
                        if (j(r)) e = !1;
                        else try {
                            var t = "__mplssupport__";
                            tt.set(t, "xyz"), '"xyz"' !== tt.get(t) && (e = !1), tt.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e || et.error("localStorage unsupported; falling back to cookie store"), te = e, e
                    },
                    error: function(e) {
                        et.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return null == r ? void 0 : r.localStorage.getItem(e)
                        } catch (e) {
                            tt.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(tt.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == r || r.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            tt.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == r || r.localStorage.removeItem(e)
                        } catch (e) {
                            tt.error(e)
                        }
                    }
                },
                ti = ["distinct_id", ex, eI, eU, eH],
                ts = eo(eo({}, tt), {}, {
                    parse: function(e) {
                        try {
                            var t = {};
                            try {
                                t = e9.parse(e) || {}
                            } catch (e) {}
                            var i = k(t, JSON.parse(tt.get(e) || "{}"));
                            return tt.set(e, i), i
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t, i, s, r, n) {
                        try {
                            tt.set(e, t, void 0, void 0, n);
                            var o = {};
                            ti.forEach(e => {
                                t[e] && (o[e] = t[e])
                            }), Object.keys(o).length && e9.set(e, o, i, s, r, n)
                        } catch (e) {
                            tt.error(e)
                        }
                    },
                    remove: function(e, t) {
                        try {
                            null == r || r.localStorage.removeItem(e), e9.remove(e, t)
                        } catch (e) {
                            tt.error(e)
                        }
                    }
                }),
                tr = {},
                tn = {
                    is_supported: function() {
                        return !0
                    },
                    error: function(e) {
                        et.error("memoryStorage error: " + e)
                    },
                    get: function(e) {
                        return tr[e] || null
                    },
                    parse: function(e) {
                        return tr[e] || null
                    },
                    set: function(e, t) {
                        tr[e] = t
                    },
                    remove: function(e) {
                        delete tr[e]
                    }
                },
                to = null,
                ta = {
                    is_supported: function() {
                        if (!G(to)) return to;
                        if (to = !0, j(r)) to = !1;
                        else try {
                            var e = "__support__";
                            ta.set(e, "xyz"), '"xyz"' !== ta.get(e) && (to = !1), ta.remove(e)
                        } catch (e) {
                            to = !1
                        }
                        return to
                    },
                    error: function(e) {
                        et.error("sessionStorage error: ", e)
                    },
                    get: function(e) {
                        try {
                            return null == r ? void 0 : r.sessionStorage.getItem(e)
                        } catch (e) {
                            ta.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(ta.get(e)) || null
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == r || r.sessionStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            ta.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == r || r.sessionStorage.removeItem(e)
                        } catch (e) {
                            ta.error(e)
                        }
                    }
                },
                tl = ["localhost", "127.0.0.1"],
                tc = e => {
                    var t = null == u ? void 0 : u.createElement("a");
                    return j(t) ? null : (t.href = e, t)
                },
                tu = function(e) {
                    var t, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                        r = [];
                    return S(e, function(e, s) {
                        j(e) || j(s) || "undefined" === s || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()), i = encodeURIComponent(s), r[r.length] = i + "=" + t)
                    }), r.join(s)
                },
                td = function(e, t) {
                    for (var i, s = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < s.length; r++) {
                        var n = s[r].split("=");
                        if (n[0] === t) {
                            i = n;
                            break
                        }
                    }
                    if (!B(i) || i.length < 2) return "";
                    var o = i[1];
                    try {
                        o = decodeURIComponent(o)
                    } catch (e) {
                        et.error("Skipping decoding for malformed query param: " + o)
                    }
                    return o.replace(/\+/g, " ")
                },
                th = function(e, t, i) {
                    if (!e || !t || !t.length) return e;
                    for (var s = e.split("#"), r = s[0] || "", n = s[1], o = r.split("?"), a = o[1], l = o[0], c = (a || "").split("&"), u = [], d = 0; d < c.length; d++) {
                        var h = c[d].split("=");
                        B(h) && (t.includes(h[0]) ? u.push(h[0] + "=" + i) : u.push(c[d]))
                    }
                    var _ = l;
                    return null != a && (_ += "?" + u.join("&")), null != n && (_ += "#" + n), _
                },
                t_ = function(e, t) {
                    var i = e.match(RegExp(t + "=([^&]*)"));
                    return i ? i[1] : null
                },
                tp = "Mobile",
                tg = "Android",
                tv = "Tablet",
                tf = tg + " " + tv,
                tm = "iPad",
                tb = "Apple",
                ty = tb + " Watch",
                tw = "Safari",
                tS = "BlackBerry",
                tk = "Samsung",
                tE = tk + "Browser",
                tx = tk + " Internet",
                tI = "Chrome",
                tC = tI + " OS",
                tP = tI + " iOS",
                tF = "Internet Explorer",
                tR = tF + " " + tp,
                tT = "Opera",
                t$ = tT + " Mini",
                tO = "Edge",
                tA = "Microsoft " + tO,
                tM = "Firefox",
                tL = tM + " iOS",
                tD = "Nintendo",
                tN = "PlayStation",
                tq = "Xbox",
                tB = tg + " " + tp,
                tH = tp + " " + tw,
                tU = "Windows",
                tz = tU + " Phone",
                tj = "Nokia",
                tW = "Ouya",
                tV = "Generic",
                tG = tV + " " + tp.toLowerCase(),
                tJ = tV + " " + tv.toLowerCase(),
                tY = "Konqueror",
                tK = "(\\d+(\\.\\d+)?)",
                tX = RegExp("Version/" + tK),
                tQ = RegExp(tq, "i"),
                tZ = RegExp(tN + " \\w+", "i"),
                t0 = RegExp(tD + " \\w+", "i"),
                t1 = RegExp(tS + "|PlayBook|BB10", "i"),
                t2 = {
                    "NT3.51": "NT 3.11",
                    "NT4.0": "NT 4.0",
                    "5.0": "2000",
                    5.1: "XP",
                    5.2: "XP",
                    "6.0": "Vista",
                    6.1: "7",
                    6.2: "8",
                    6.3: "8.1",
                    6.4: "10",
                    "10.0": "10"
                },
                t3 = (e, t) => t && $(t, tb) || function(e) {
                    return $(e, tw) && !$(e, tI) && !$(e, tg)
                }(e),
                t5 = function(e, t) {
                    return t = t || "", $(e, " OPR/") && $(e, "Mini") ? t$ : $(e, " OPR/") ? tT : t1.test(e) ? tS : $(e, "IE" + tp) || $(e, "WPDesktop") ? tR : $(e, tE) ? tx : $(e, tO) || $(e, "Edg/") ? tA : $(e, "FBIOS") ? "Facebook " + tp : $(e, "UCWEB") || $(e, "UCBrowser") ? "UC Browser" : $(e, "CriOS") ? tP : $(e, "CrMo") || $(e, tI) ? tI : $(e, tg) && $(e, tw) ? tB : $(e, "FxiOS") ? tL : $(e.toLowerCase(), tY.toLowerCase()) ? tY : t3(e, t) ? $(e, tp) ? tH : tw : $(e, tM) ? tM : $(e, "MSIE") || $(e, "Trident/") ? tF : $(e, "Gecko") ? tM : ""
                },
                t6 = {
                    [tR]: [RegExp("rv:" + tK)],
                    [tA]: [RegExp(tO + "?\\/" + tK)],
                    [tI]: [RegExp("(" + tI + "|CrMo)\\/" + tK)],
                    [tP]: [RegExp("CriOS\\/" + tK)],
                    "UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + tK)],
                    [tw]: [tX],
                    [tH]: [tX],
                    [tT]: [RegExp("(Opera|OPR)\\/" + tK)],
                    [tM]: [RegExp(tM + "\\/" + tK)],
                    [tL]: [RegExp("FxiOS\\/" + tK)],
                    [tY]: [RegExp("Konqueror[:/]?" + tK, "i")],
                    [tS]: [RegExp(tS + " " + tK), tX],
                    [tB]: [RegExp("android\\s" + tK, "i")],
                    [tx]: [RegExp(tE + "\\/" + tK)],
                    [tF]: [RegExp("(rv:|MSIE )" + tK)],
                    Mozilla: [RegExp("rv:" + tK)]
                },
                t8 = [
                    [RegExp(tq + "; " + tq + " (.*?)[);]", "i"), e => [tq, e && e[1] || ""]],
                    [RegExp(tD, "i"), [tD, ""]],
                    [RegExp(tN, "i"), [tN, ""]],
                    [t1, [tS, ""]],
                    [RegExp(tU, "i"), (e, t) => {
                        if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tz, ""];
                        if (new RegExp(tp).test(t) && !/IEMobile\b/.test(t)) return [tU + " " + tp, ""];
                        var i = /Windows NT ([0-9.]+)/i.exec(t);
                        if (i && i[1]) {
                            var s = t2[i[1]] || "";
                            return /arm/i.test(t) && (s = "RT"), [tU, s]
                        }
                        return [tU, ""]
                    }],
                    [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]],
                    [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
                        var t = "";
                        return e && e.length >= 3 && (t = j(e[2]) ? e[3] : e[2]), ["watchOS", t]
                    }],
                    [RegExp("(" + tg + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + tg + ")", "i"), e => e && e[2] ? [tg, [e[2], e[3], e[4] || "0"].join(".")] : [tg, ""]],
                    [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
                        var t = ["Mac OS X", ""];
                        if (e && e[1]) {
                            var i = [e[1], e[2], e[3] || "0"];
                            t[1] = i.join(".")
                        }
                        return t
                    }],
                    [/Mac/i, ["Mac OS X", ""]],
                    [/CrOS/, [tC, ""]],
                    [/Linux|debian/i, ["Linux", ""]]
                ],
                t4 = function(e) {
                    return t0.test(e) ? tD : tZ.test(e) ? tN : tQ.test(e) ? tq : RegExp(tW, "i").test(e) ? tW : RegExp("(" + tz + "|WPDesktop)", "i").test(e) ? tz : /iPad/.test(e) ? tm : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? ty : t1.test(e) ? tS : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(tj, "i").test(e) ? tj : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(tp).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? tg : tf : tg : RegExp("(pda|" + tp + ")", "i").test(e) ? tG : RegExp(tv, "i").test(e) && !RegExp(tv + " pc", "i").test(e) ? tJ : ""
                },
                t7 = "https?://(.*)",
                t9 = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "irclid", "_kx"],
                ie = E(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid"], t9),
                it = "<masked>",
                ii = {
                    campaignParams: function() {
                        var {
                            customTrackedParams: e,
                            maskPersonalDataProperties: t,
                            customPersonalDataProperties: i
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!u) return {};
                        var s = t ? E([], t9, i || []) : [];
                        return this._campaignParamsFromUrl(th(u.URL, s, it), e)
                    },
                    _campaignParamsFromUrl: function(e, t) {
                        var i = ie.concat(t || []),
                            s = {};
                        return S(i, function(t) {
                            var i = td(e, t);
                            s[t] = i || null
                        }), s
                    },
                    _searchEngine: function(e) {
                        return e ? 0 === e.search(t7 + "google.([^/?]*)") ? "google" : 0 === e.search(t7 + "bing.com") ? "bing" : 0 === e.search(t7 + "yahoo.com") ? "yahoo" : 0 === e.search(t7 + "duckduckgo.com") ? "duckduckgo" : null : null
                    },
                    _searchInfoFromReferrer: function(e) {
                        var t = ii._searchEngine(e),
                            i = {};
                        if (!G(t)) {
                            i.$search_engine = t;
                            var s = u ? td(u.referrer, "yahoo" != t ? "q" : "p") : "";
                            s.length && (i.ph_keyword = s)
                        }
                        return i
                    },
                    searchInfo: function() {
                        var e = null == u ? void 0 : u.referrer;
                        return e ? this._searchInfoFromReferrer(e) : {}
                    },
                    browser: t5,
                    browserVersion: function(e, t) {
                        var i = t6[t5(e, t)];
                        if (j(i)) return null;
                        for (var s = 0; s < i.length; s++) {
                            var r = i[s],
                                n = e.match(r);
                            if (n) return parseFloat(n[n.length - 2])
                        }
                        return null
                    },
                    browserLanguage: function() {
                        return navigator.language || navigator.userLanguage
                    },
                    browserLanguagePrefix: function() {
                        var e = this.browserLanguage();
                        return "string" == typeof e ? e.split("-")[0] : void 0
                    },
                    os: function(e) {
                        for (var t = 0; t < t8.length; t++) {
                            var [i, s] = t8[t], r = i.exec(e), n = r && (H(s) ? s(r, e) : s);
                            if (n) return n
                        }
                        return ["", ""]
                    },
                    device: t4,
                    deviceType: function(e) {
                        var t = t4(e);
                        return t === tm || t === tf || "Kobo" === t || "Kindle Fire" === t || t === tJ ? tv : t === tD || t === tq || t === tN || t === tW ? "Console" : t === ty ? "Wearable" : t ? tp : "Desktop"
                    },
                    referrer: function() {
                        return (null == u ? void 0 : u.referrer) || "$direct"
                    },
                    referringDomain: function() {
                        var e;
                        return null != u && u.referrer && (null === (e = tc(u.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
                    },
                    referrerInfo: function() {
                        return {
                            $referrer: this.referrer(),
                            $referring_domain: this.referringDomain()
                        }
                    },
                    initialPersonInfo: function() {
                        return {
                            r: this.referrer().substring(0, 1e3),
                            u: null == d ? void 0 : d.href.substring(0, 1e3)
                        }
                    },
                    initialPersonPropsFromInfo: function(e) {
                        var t, {
                                r: i,
                                u: s
                            } = e,
                            r = {
                                $initial_referrer: i,
                                $initial_referring_domain: null == i ? void 0 : "$direct" == i ? "$direct" : null === (t = tc(i)) || void 0 === t ? void 0 : t.host
                            };
                        if (s) {
                            r.$initial_current_url = s;
                            var n = tc(s);
                            r.$initial_host = null == n ? void 0 : n.host, r.$initial_pathname = null == n ? void 0 : n.pathname, S(this._campaignParamsFromUrl(s), function(e, t) {
                                r["$initial_" + A(t)] = e
                            })
                        }
                        return i && S(this._searchInfoFromReferrer(i), function(e, t) {
                            r["$initial_" + A(t)] = e
                        }), r
                    },
                    timezone: function() {
                        try {
                            return Intl.DateTimeFormat().resolvedOptions().timeZone
                        } catch (e) {
                            return
                        }
                    },
                    timezoneOffset: function() {
                        try {
                            return (new Date).getTimezoneOffset()
                        } catch (e) {
                            return
                        }
                    },
                    properties: function() {
                        var {
                            maskPersonalDataProperties: e,
                            customPersonalDataProperties: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!g) return {};
                        var i = e ? E([], t9, t || []) : [],
                            [s, n] = ii.os(g);
                        return k(P({
                            $os: s,
                            $os_version: n,
                            $browser: ii.browser(g, navigator.vendor),
                            $device: ii.device(g),
                            $device_type: ii.deviceType(g),
                            $timezone: ii.timezone(),
                            $timezone_offset: ii.timezoneOffset()
                        }), {
                            $current_url: th(null == d ? void 0 : d.href, i, it),
                            $host: null == d ? void 0 : d.host,
                            $pathname: null == d ? void 0 : d.pathname,
                            $raw_user_agent: g.length > 1e3 ? g.substring(0, 997) + "..." : g,
                            $browser_version: ii.browserVersion(g, navigator.vendor),
                            $browser_language: ii.browserLanguage(),
                            $browser_language_prefix: ii.browserLanguagePrefix(),
                            $screen_height: null == r ? void 0 : r.screen.height,
                            $screen_width: null == r ? void 0 : r.screen.width,
                            $viewport_height: null == r ? void 0 : r.innerHeight,
                            $viewport_width: null == r ? void 0 : r.innerWidth,
                            $lib: "web",
                            $lib_version: f.LIB_VERSION,
                            $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                            $time: Date.now() / 1e3
                        })
                    },
                    people_properties: function() {
                        if (!g) return {};
                        var [e, t] = ii.os(g);
                        return k(P({
                            $os: e,
                            $os_version: t,
                            $browser: ii.browser(g, navigator.vendor)
                        }), {
                            $browser_version: ii.browserVersion(g, navigator.vendor)
                        })
                    }
                },
                is = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
            class ir {
                constructor(e) {
                    this.config = e, this.props = {}, this.campaign_params_saved = !1, this.name = (e => {
                        var t = "";
                        return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
                    })(e), this.storage = this.buildStorage(e), this.load(), e.debug && et.info("Persistence loaded", e.persistence, eo({}, this.props)), this.update_config(e, e), this.save()
                }
                buildStorage(e) {
                    -1 === is.indexOf(e.persistence.toLowerCase()) && (et.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
                    var t = e.persistence.toLowerCase();
                    return "localstorage" === t && tt.is_supported() ? tt : "localstorage+cookie" === t && ts.is_supported() ? ts : "sessionstorage" === t && ta.is_supported() ? ta : "memory" === t ? tn : "cookie" === t ? e9 : ts.is_supported() ? ts : e9
                }
                properties() {
                    var e = {};
                    return S(this.props, function(t, i) {
                        if (i === eF && U(t))
                            for (var s, r = Object.keys(t), n = 0; n < r.length; n++) e["$feature/".concat(r[n])] = t[r[n]];
                        else s = !1, (G(eW) ? s : l && eW.indexOf === l ? -1 != eW.indexOf(i) : (S(eW, function(e) {
                            if (s || (s = e === i)) return y
                        }), s)) || (e[i] = t)
                    }), e
                }
                load() {
                    if (!this.disabled) {
                        var e = this.storage.parse(this.name);
                        e && (this.props = k({}, e))
                    }
                }
                save() {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug)
                }
                remove() {
                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                }
                clear() {
                    this.remove(), this.props = {}
                }
                register_once(e, t, i) {
                    if (U(e)) {
                        j(t) && (t = "None"), this.expire_days = j(i) ? this.default_expiry : i;
                        var s = !1;
                        if (S(e, (e, i) => {
                                this.props.hasOwnProperty(i) && this.props[i] !== t || (this.props[i] = e, s = !0)
                            }), s) return this.save(), !0
                    }
                    return !1
                }
                register(e, t) {
                    if (U(e)) {
                        this.expire_days = j(t) ? this.default_expiry : t;
                        var i = !1;
                        if (S(e, (t, s) => {
                                e.hasOwnProperty(s) && this.props[s] !== t && (this.props[s] = t, i = !0)
                            }), i) return this.save(), !0
                    }
                    return !1
                }
                unregister(e) {
                    e in this.props && (delete this.props[e], this.save())
                }
                update_campaign_params() {
                    if (!this.campaign_params_saved) {
                        var e = ii.campaignParams({
                            customTrackedParams: this.config.custom_campaign_params,
                            maskPersonalDataProperties: this.config.mask_personal_data_properties,
                            customPersonalDataProperties: this.config.custom_personal_data_properties
                        });
                        z(P(e)) || this.register(e), this.campaign_params_saved = !0
                    }
                }
                update_search_keyword() {
                    this.register(ii.searchInfo())
                }
                update_referrer_info() {
                    this.register_once(ii.referrerInfo(), void 0)
                }
                set_initial_person_info() {
                    this.props[eq] || this.props[eB] || this.register_once({
                        [eH]: ii.initialPersonInfo()
                    }, void 0)
                }
                get_referrer_info() {
                    return P({
                        $referrer: this.props.$referrer,
                        $referring_domain: this.props.$referring_domain
                    })
                }
                get_initial_props() {
                    var e = {};
                    S([eB, eq], t => {
                        var i = this.props[t];
                        i && S(i, function(t, i) {
                            e["$initial_" + A(i)] = t
                        })
                    });
                    var t = this.props[eH];
                    return t && k(e, ii.initialPersonPropsFromInfo(t)), e
                }
                safe_merge(e) {
                    return S(this.props, function(t, i) {
                        i in e || (e[i] = t)
                    }), e
                }
                update_config(e, t) {
                    if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
                        var i = this.buildStorage(e),
                            s = this.props;
                        this.clear(), this.storage = i, this.props = s, this.save()
                    }
                }
                set_disabled(e) {
                    this.disabled = e, this.disabled ? this.remove() : this.save()
                }
                set_cross_subdomain(e) {
                    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                }
                get_cross_subdomain() {
                    return !!this.cross_subdomain
                }
                set_secure(e) {
                    e !== this.secure && (this.secure = e, this.remove(), this.save())
                }
                set_event_timer(e, t) {
                    var i = this.props[ed] || {};
                    i[e] = t, this.props[ed] = i, this.save()
                }
                remove_event_timer(e) {
                    var t = (this.props[ed] || {})[e];
                    return j(t) || (delete this.props[ed][e], this.save()), t
                }
                get_property(e) {
                    return this.props[e]
                }
                set_property(e, t) {
                    this.props[e] = t, this.save()
                }
            }

            function io(e) {
                var t, i;
                return (null === (t = JSON.stringify(e, (i = [], function(e, t) {
                    if (U(t)) {
                        for (; i.length > 0 && i[i.length - 1] !== this;) i.pop();
                        return i.includes(t) ? "[Circular]" : (i.push(t), t)
                    }
                    return t
                }))) || void 0 === t ? void 0 : t.length) || 0
            }
            var ia = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(ia || {}),
                il = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(il || {});

            function ic(e) {
                var t;
                return e instanceof Element && (e.id === ez || !(null === (t = e.closest) || void 0 === t || !t.call(e, ".toolbar-global-fade-container")))
            }

            function iu(e) {
                return !!e && 1 === e.nodeType
            }

            function id(e, t) {
                return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
            }

            function ih(e) {
                return !!e && 3 === e.nodeType
            }

            function i_(e) {
                return !!e && 11 === e.nodeType
            }

            function ip(e) {
                return e ? O(e).split(/\s+/) : []
            }

            function ig(e) {
                var t = null == r ? void 0 : r.location.href;
                return !!(t && e && e.some(e => t.match(e)))
            }

            function iv(e) {
                var t = "";
                switch (typeof e.className) {
                    case "string":
                        t = e.className;
                        break;
                    case "object":
                        t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                        break;
                    default:
                        t = ""
                }
                return ip(t)
            }

            function im(e) {
                return J(e) ? null : O(e).split(/(\s+)/).filter(e => iT(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
            }

            function ib(e) {
                var t = "";
                return ik(e) && !iE(e) && e.childNodes && e.childNodes.length && S(e.childNodes, function(e) {
                    var i;
                    ih(e) && e.textContent && (t += null !== (i = im(e.textContent)) && void 0 !== i ? i : "")
                }), O(t)
            }

            function iy(e) {
                var t;
                return j(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
            }
            var iw = ["a", "button", "form", "input", "select", "textarea", "label"];

            function iS(e) {
                var t = e.parentNode;
                return !(!t || !iu(t)) && t
            }

            function ik(e) {
                for (var t = e; t.parentNode && !id(t, "body"); t = t.parentNode) {
                    var i = iv(t);
                    if ($(i, "ph-sensitive") || $(i, "ph-no-capture")) return !1
                }
                if ($(iv(e), "ph-include")) return !0;
                var s = e.type || "";
                if (W(s)) switch (s.toLowerCase()) {
                    case "hidden":
                    case "password":
                        return !1
                }
                var r = e.name || e.id || "";
                return !(W(r) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, "")))
            }

            function iE(e) {
                return !!(id(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || id(e, "select") || id(e, "textarea") || "true" === e.getAttribute("contenteditable"))
            }
            var ix = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
                iI = new RegExp("^(?:".concat(ix, ")$")),
                iC = new RegExp(ix),
                iP = "\\d{3}-?\\d{2}-?\\d{4}",
                iF = new RegExp("^(".concat(iP, ")$")),
                iR = new RegExp("(".concat(iP, ")"));

            function iT(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return !(J(e) || W(e) && (e = O(e), (t ? iI : iC).test((e || "").replace(/[- ]/g, "")) || (t ? iF : iR).test(e)))
            }

            function i$(e) {
                var t = ib(e);
                return iT(t = "".concat(t, " ").concat(function e(t) {
                    var i = "";
                    return t && t.childNodes && t.childNodes.length && S(t.childNodes, function(t) {
                        var s;
                        if (t && "span" === (null === (s = t.tagName) || void 0 === s ? void 0 : s.toLowerCase())) try {
                            var r = ib(t);
                            i = "".concat(i, " ").concat(r).trim(), t.childNodes && t.childNodes.length && (i = "".concat(i, " ").concat(e(t)).trim())
                        } catch (e) {
                            et.error("[AutoCapture]", e)
                        }
                    }), i
                }(e)).trim()) ? t : ""
            }

            function iO(e) {
                return e.replace(/"|\\"/g, '\\"')
            }
            var iA = "[SessionRecording]",
                iM = "redacted",
                iL = {
                    initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
                    maskRequestFn: e => e,
                    recordHeaders: !1,
                    recordBody: !1,
                    recordInitialRequests: !1,
                    recordPerformance: !1,
                    performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
                    payloadSizeLimitBytes: 1e6,
                    payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"]
                },
                iD = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
                iN = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
                iq = ["/s/", "/e/", "/i/"];

            function iB(e, t, i, s) {
                if (J(e)) return e;
                var r = (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
                return W(r) && (r = parseInt(r)), r > i ? iA + " ".concat(s, " body too large to record (").concat(r, " bytes)") : e
            }

            function iH(e, t) {
                if (J(e)) return e;
                var i = e;
                return iT(i, !1) || (i = iA + " " + t + " body " + iM), S(iN, e => {
                    var s, r;
                    null !== (s = i) && void 0 !== s && s.length && -1 !== (null === (r = i) || void 0 === r ? void 0 : r.indexOf(e)) && (i = iA + " " + t + " body " + iM + " as might contain: " + e)
                }), i
            }
            var iU = (e, t) => {
                var i, s, r = {
                        payloadSizeLimitBytes: iL.payloadSizeLimitBytes,
                        performanceEntryTypeToObserve: [...iL.performanceEntryTypeToObserve],
                        payloadHostDenyList: [...t.payloadHostDenyList || [], ...iL.payloadHostDenyList]
                    },
                    n = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
                    o = !1 !== e.session_recording.recordBody && t.recordBody,
                    a = !1 !== e.capture_performance && t.recordPerformance,
                    l = (s = Math.min(1e6, null !== (i = r.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6), e => (null != e && e.requestBody && (e.requestBody = iB(e.requestBody, e.requestHeaders, s, "Request")), null != e && e.responseBody && (e.responseBody = iB(e.responseBody, e.responseHeaders, s, "Response")), e)),
                    c = t => {
                        var i;
                        return l(((e, t) => {
                            var i, s = tc(e.name),
                                r = 0 === t.indexOf("http") ? null === (i = tc(t)) || void 0 === i ? void 0 : i.pathname : t;
                            "/" === r && (r = "");
                            var n = null == s ? void 0 : s.pathname.replace(r || "", "");
                            if (!(s && n && iq.some(e => 0 === n.indexOf(e)))) return e
                        })((J(i = t.requestHeaders) || S(Object.keys(null != i ? i : {}), e => {
                            iD.includes(e.toLowerCase()) && (i[e] = iM)
                        }), t), e.api_host))
                    },
                    u = H(e.session_recording.maskNetworkRequestFn);
                return u && H(e.session_recording.maskCapturedNetworkRequestFn) && et.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), u && (e.session_recording.maskCapturedNetworkRequestFn = t => {
                    var i = e.session_recording.maskNetworkRequestFn({
                        url: t.name
                    });
                    return eo(eo({}, t), {}, {
                        name: null == i ? void 0 : i.url
                    })
                }), r.maskRequestFn = H(e.session_recording.maskCapturedNetworkRequestFn) ? t => {
                    var i, s, r, n = c(t);
                    return n && null !== (i = null === (s = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === s ? void 0 : s.call(r, n)) && void 0 !== i ? i : void 0
                } : e => (function(e) {
                    if (!j(e)) return e.requestBody = iH(e.requestBody, "Request"), e.responseBody = iH(e.responseBody, "Response"), e
                })(c(e)), eo(eo(eo({}, iL), r), {}, {
                    recordHeaders: n,
                    recordBody: o,
                    recordPerformance: a,
                    recordInitialRequests: a
                })
            };

            function iz(e, t, i, s, r) {
                return t > i && (et.warn("min cannot be greater than max."), t = i), Y(e) ? e > i ? (s && et.warn(s + " cannot be  greater than max: " + i + ". Using max value instead."), i) : e < t ? (s && et.warn(s + " cannot be less than min: " + t + ". Using min value instead."), t) : e : (s && et.warn(s + " must be a number. using max or fallback. max: " + i + ", fallback: " + r), iz(r || i, t, i, s))
            }
            class ij {
                constructor(e) {
                    var t, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ea(this, "bucketSize", 100), ea(this, "refillRate", 10), ea(this, "mutationBuckets", {}), ea(this, "loggedTracker", {}), ea(this, "refillBuckets", () => {
                        Object.keys(this.mutationBuckets).forEach(e => {
                            this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate, this.mutationBuckets[e] >= this.bucketSize && delete this.mutationBuckets[e]
                        })
                    }), ea(this, "getNodeOrRelevantParent", e => {
                        var t = this.rrweb.mirror.getNode(e);
                        if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                            var i = t.closest("svg");
                            if (i) return [this.rrweb.mirror.getId(i), i]
                        }
                        return [e, t]
                    }), ea(this, "numberOfChanges", e => {
                        var t, i, s, r, n, o, a, l;
                        return (null !== (t = null === (i = e.removes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) + (null !== (s = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0) + (null !== (n = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0)
                    }), ea(this, "throttleMutations", e => {
                        if (3 !== e.type || 0 !== e.data.source) return e;
                        var t = e.data,
                            i = this.numberOfChanges(t);
                        t.attributes && (t.attributes = t.attributes.filter(e => {
                            var t, i, s, [r, n] = this.getNodeOrRelevantParent(e.id);
                            return 0 !== this.mutationBuckets[r] && (this.mutationBuckets[r] = null !== (t = this.mutationBuckets[r]) && void 0 !== t ? t : this.bucketSize, this.mutationBuckets[r] = Math.max(this.mutationBuckets[r] - 1, 0), 0 === this.mutationBuckets[r] && (this.loggedTracker[r] || (this.loggedTracker[r] = !0, null === (i = (s = this.options).onBlockedNode) || void 0 === i || i.call(s, r, n))), e)
                        }));
                        var s = this.numberOfChanges(t);
                        return 0 !== s || i === s ? e : void 0
                    }), this.rrweb = e, this.options = s, this.refillRate = iz(null !== (t = this.options.refillRate) && void 0 !== t ? t : this.refillRate, 0, 100, "mutation throttling refill rate"), this.bucketSize = iz(null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"), setInterval(() => {
                        this.refillBuckets()
                    }, 1e3)
                }
            }
            var iW = Uint8Array,
                iV = Uint16Array,
                iG = Uint32Array,
                iJ = new iW([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                iY = new iW([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                iK = new iW([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                iX = function(e, t) {
                    for (var i = new iV(31), s = 0; s < 31; ++s) i[s] = t += 1 << e[s - 1];
                    var r = new iG(i[30]);
                    for (s = 1; s < 30; ++s)
                        for (var n = i[s]; n < i[s + 1]; ++n) r[n] = n - i[s] << 5 | s;
                    return [i, r]
                },
                iQ = iX(iJ, 2),
                iZ = iQ[0],
                i0 = iQ[1];
            iZ[28] = 258, i0[258] = 28;
            for (var i1 = iX(iY, 0)[1], i2 = new iV(32768), i3 = 0; i3 < 32768; ++i3) {
                var i5 = (43690 & i3) >>> 1 | (21845 & i3) << 1;
                i5 = (61680 & (i5 = (52428 & i5) >>> 2 | (13107 & i5) << 2)) >>> 4 | (3855 & i5) << 4, i2[i3] = ((65280 & i5) >>> 8 | (255 & i5) << 8) >>> 1
            }
            var i6 = function(e, t, i) {
                    for (var s = e.length, r = 0, n = new iV(t); r < s; ++r) ++n[e[r] - 1];
                    var o, a = new iV(t);
                    for (r = 0; r < t; ++r) a[r] = a[r - 1] + n[r - 1] << 1;
                    if (i) {
                        o = new iV(1 << t);
                        var l = 15 - t;
                        for (r = 0; r < s; ++r)
                            if (e[r])
                                for (var c = r << 4 | e[r], u = t - e[r], d = a[e[r] - 1]++ << u, h = d | (1 << u) - 1; d <= h; ++d) o[i2[d] >>> l] = c
                    } else
                        for (o = new iV(s), r = 0; r < s; ++r) o[r] = i2[a[e[r] - 1]++] >>> 15 - e[r];
                    return o
                },
                i8 = new iW(288);
            for (i3 = 0; i3 < 144; ++i3) i8[i3] = 8;
            for (i3 = 144; i3 < 256; ++i3) i8[i3] = 9;
            for (i3 = 256; i3 < 280; ++i3) i8[i3] = 7;
            for (i3 = 280; i3 < 288; ++i3) i8[i3] = 8;
            var i4 = new iW(32);
            for (i3 = 0; i3 < 32; ++i3) i4[i3] = 5;
            var i7 = i6(i8, 9, 0),
                i9 = i6(i4, 5, 0),
                se = function(e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                st = function(e, t, i) {
                    (null == i || i > e.length) && (i = e.length);
                    var s = new(e instanceof iV ? iV : e instanceof iG ? iG : iW)(i - t);
                    return s.set(e.subarray(t, i)), s
                },
                si = function(e, t, i) {
                    i <<= 7 & t;
                    var s = t / 8 >> 0;
                    e[s] |= i, e[s + 1] |= i >>> 8
                },
                ss = function(e, t, i) {
                    i <<= 7 & t;
                    var s = t / 8 >> 0;
                    e[s] |= i, e[s + 1] |= i >>> 8, e[s + 2] |= i >>> 16
                },
                sr = function(e, t) {
                    for (var i = [], s = 0; s < e.length; ++s) e[s] && i.push({
                        s: s,
                        f: e[s]
                    });
                    var r = i.length,
                        n = i.slice();
                    if (!r) return [new iW(0), 0];
                    if (1 == r) {
                        var o = new iW(i[0].s + 1);
                        return o[i[0].s] = 1, [o, 1]
                    }
                    i.sort(function(e, t) {
                        return e.f - t.f
                    }), i.push({
                        s: -1,
                        f: 25001
                    });
                    var a = i[0],
                        l = i[1],
                        c = 0,
                        u = 1,
                        d = 2;
                    for (i[0] = {
                            s: -1,
                            f: a.f + l.f,
                            l: a,
                            r: l
                        }; u != r - 1;) a = i[i[c].f < i[d].f ? c++ : d++], l = i[c != u && i[c].f < i[d].f ? c++ : d++], i[u++] = {
                        s: -1,
                        f: a.f + l.f,
                        l: a,
                        r: l
                    };
                    var h = n[0].s;
                    for (s = 1; s < r; ++s) n[s].s > h && (h = n[s].s);
                    var _ = new iV(h + 1),
                        p = sn(i[u - 1], _, 0);
                    if (p > t) {
                        s = 0;
                        var g = 0,
                            v = p - t,
                            f = 1 << v;
                        for (n.sort(function(e, t) {
                                return _[t.s] - _[e.s] || e.f - t.f
                            }); s < r; ++s) {
                            var m = n[s].s;
                            if (!(_[m] > t)) break;
                            g += f - (1 << p - _[m]), _[m] = t
                        }
                        for (g >>>= v; g > 0;) {
                            var b = n[s].s;
                            _[b] < t ? g -= 1 << t - _[b]++ - 1 : ++s
                        }
                        for (; s >= 0 && g; --s) {
                            var y = n[s].s;
                            _[y] == t && (--_[y], ++g)
                        }
                        p = t
                    }
                    return [new iW(_), p]
                },
                sn = function(e, t, i) {
                    return -1 == e.s ? Math.max(sn(e.l, t, i + 1), sn(e.r, t, i + 1)) : t[e.s] = i
                },
                so = function(e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var i = new iV(++t), s = 0, r = e[0], n = 1, o = function(e) {
                            i[s++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == r && a != t) ++n;
                        else {
                            if (!r && n > 2) {
                                for (; n > 138; n -= 138) o(32754);
                                n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0)
                            } else if (n > 3) {
                                for (o(r), --n; n > 6; n -= 6) o(8304);
                                n > 2 && (o(n - 3 << 5 | 8208), n = 0)
                            }
                            for (; n--;) o(r);
                            n = 1, r = e[a]
                        }
                    return [i.subarray(0, s), t]
                },
                sa = function(e, t) {
                    for (var i = 0, s = 0; s < t.length; ++s) i += e[s] * t[s];
                    return i
                },
                sl = function(e, t, i) {
                    var s = i.length,
                        r = se(t + 2);
                    e[r] = 255 & s, e[r + 1] = s >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
                    for (var n = 0; n < s; ++n) e[r + n + 4] = i[n];
                    return 8 * (r + 4 + s)
                },
                sc = function(e, t, i, s, r, n, o, a, l, c, u) {
                    si(t, u++, i), ++r[256];
                    for (var d = sr(r, 15), h = d[0], _ = d[1], p = sr(n, 15), g = p[0], v = p[1], f = so(h), m = f[0], b = f[1], y = so(g), w = y[0], S = y[1], k = new iV(19), E = 0; E < m.length; ++E) k[31 & m[E]]++;
                    for (E = 0; E < w.length; ++E) k[31 & w[E]]++;
                    for (var x = sr(k, 7), I = x[0], C = x[1], P = 19; P > 4 && !I[iK[P - 1]]; --P);
                    var F, R, T, $, O = c + 5 << 3,
                        A = sa(r, i8) + sa(n, i4) + o,
                        M = sa(r, h) + sa(n, g) + o + 14 + 3 * P + sa(k, I) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
                    if (O <= A && O <= M) return sl(t, u, e.subarray(l, l + c));
                    if (si(t, u, 1 + (M < A)), u += 2, M < A) {
                        F = i6(h, _, 0), R = h, T = i6(g, v, 0), $ = g;
                        var L = i6(I, C, 0);
                        for (si(t, u, b - 257), si(t, u + 5, S - 1), si(t, u + 10, P - 4), u += 14, E = 0; E < P; ++E) si(t, u + 3 * E, I[iK[E]]);
                        u += 3 * P;
                        for (var D = [m, w], N = 0; N < 2; ++N) {
                            var q = D[N];
                            for (E = 0; E < q.length; ++E) {
                                var B = 31 & q[E];
                                si(t, u, L[B]), u += I[B], B > 15 && (si(t, u, q[E] >>> 5 & 127), u += q[E] >>> 12)
                            }
                        }
                    } else F = i7, R = i8, T = i9, $ = i4;
                    for (E = 0; E < a; ++E)
                        if (s[E] > 255) {
                            ss(t, u, F[(B = s[E] >>> 18 & 31) + 257]), u += R[B + 257], B > 7 && (si(t, u, s[E] >>> 23 & 31), u += iJ[B]);
                            var H = 31 & s[E];
                            ss(t, u, T[H]), u += $[H], H > 3 && (ss(t, u, s[E] >>> 5 & 8191), u += iY[H])
                        } else ss(t, u, F[s[E]]), u += R[s[E]];
                    return ss(t, u, F[256]), u + R[256]
                },
                su = new iG([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                sd = function() {
                    for (var e = new iG(256), t = 0; t < 256; ++t) {
                        for (var i = t, s = 9; --s;) i = (1 & i && 0xedb88320) ^ i >>> 1;
                        e[t] = i
                    }
                    return e
                }(),
                sh = function() {
                    var e = 0xffffffff;
                    return {
                        p: function(t) {
                            for (var i = e, s = 0; s < t.length; ++s) i = sd[255 & i ^ t[s]] ^ i >>> 8;
                            e = i
                        },
                        d: function() {
                            return 0xffffffff ^ e
                        }
                    }
                },
                s_ = function(e, t, i) {
                    for (; i; ++t) e[t] = i, i >>>= 8
                },
                sp = function(e, t) {
                    var i = t.filename;
                    if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 2 * (9 == t.level), e[9] = 3, 0 != t.mtime && s_(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), i) {
                        e[3] = 8;
                        for (var s = 0; s <= i.length; ++s) e[s + 10] = i.charCodeAt(s)
                    }
                };

            function sg(e, t) {
                void 0 === t && (t = {});
                var i, s, r, n = sh(),
                    o = e.length;
                n.p(e);
                var a = (s = t, r = 10 + ((i = t).filename && i.filename.length + 1 || 0), function(e, t, i, s, r, n) {
                        var o = e.length,
                            a = new iW(s + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                            l = a.subarray(s, a.length - r),
                            c = 0;
                        if (!t || o < 8)
                            for (var u = 0; u <= o; u += 65535) {
                                var d = u + 65535;
                                d < o ? c = sl(l, c, e.subarray(u, d)) : (l[u] = n, c = sl(l, c, e.subarray(u, o)))
                            } else {
                                for (var h = su[t - 1], _ = h >>> 13, p = 8191 & h, g = (1 << i) - 1, v = new iV(32768), f = new iV(g + 1), m = Math.ceil(i / 3), b = 2 * m, y = function(t) {
                                        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << b) & g
                                    }, w = new iG(25e3), S = new iV(288), k = new iV(32), E = 0, x = 0, I = (u = 0, 0), C = 0, P = 0; u < o; ++u) {
                                    var F = y(u),
                                        R = 32767 & u,
                                        T = f[F];
                                    if (v[R] = T, f[F] = R, C <= u) {
                                        var $ = o - u;
                                        if ((E > 7e3 || I > 24576) && $ > 423) {
                                            c = sc(e, l, 0, w, S, k, x, I, P, u - P, c), I = E = x = 0, P = u;
                                            for (var O = 0; O < 286; ++O) S[O] = 0;
                                            for (O = 0; O < 30; ++O) k[O] = 0
                                        }
                                        var A = 2,
                                            M = 0,
                                            L = p,
                                            D = R - T & 32767;
                                        if ($ > 2 && F == y(u - D))
                                            for (var N = Math.min(_, $) - 1, q = Math.min(32767, u), B = Math.min(258, $); D <= q && --L && R != T;) {
                                                if (e[u + A] == e[u + A - D]) {
                                                    for (var H = 0; H < B && e[u + H] == e[u + H - D]; ++H);
                                                    if (H > A) {
                                                        if (A = H, M = D, H > N) break;
                                                        var U = Math.min(D, H - 2),
                                                            z = 0;
                                                        for (O = 0; O < U; ++O) {
                                                            var j = u - D + O + 32768 & 32767,
                                                                W = j - v[j] + 32768 & 32767;
                                                            W > z && (z = W, T = j)
                                                        }
                                                    }
                                                }
                                                D += (R = T) - (T = v[R]) + 32768 & 32767
                                            }
                                        if (M) {
                                            w[I++] = 0x10000000 | i0[A] << 18 | i1[M];
                                            var V = 31 & i0[A],
                                                G = 31 & i1[M];
                                            x += iJ[V] + iY[G], ++S[257 + V], ++k[G], C = u + A, ++E
                                        } else w[I++] = e[u], ++S[e[u]]
                                    }
                                }
                                c = sc(e, l, n, w, S, k, x, I, P, u - P, c)
                            }
                        return st(a, 0, s + se(c) + r)
                    }(e, null == s.level ? 6 : s.level, null == s.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + s.mem, r, 8, !0)),
                    l = a.length;
                return sp(a, t), s_(a, l - 8, n.d()), s_(a, l - 4, o), a
            }

            function sv(e, t) {
                var i = e.length;
                if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                for (var s = new iW(e.length + (e.length >>> 1)), r = 0, n = function(e) {
                        s[r++] = e
                    }, o = 0; o < i; ++o) {
                    if (r + 5 > s.length) {
                        var a = new iW(r + 8 + (i - o << 1));
                        a.set(s), s = a
                    }
                    var l = e.charCodeAt(o);
                    l < 128 || t ? n(l) : (l < 2048 ? n(192 | l >>> 6) : (l > 55295 && l < 57344 ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18), n(128 | l >>> 12 & 63)) : n(224 | l >>> 12), n(128 | l >>> 6 & 63)), n(128 | 63 & l))
                }
                return st(s, 0, r)
            }
            var sf = "[SessionRecording]",
                sm = ei(sf),
                sb = [il.MouseMove, il.MouseInteraction, il.Scroll, il.ViewportResize, il.Input, il.TouchMove, il.MediaInteraction, il.Drag],
                sy = e => ({
                    rrwebMethod: e,
                    enqueuedAt: Date.now(),
                    attempt: 1
                });

            function sw(e) {
                return function(e, t) {
                    for (var i = "", s = 0; s < e.length;) {
                        var r = e[s++];
                        r < 128 || t ? i += String.fromCharCode(r) : r < 224 ? i += String.fromCharCode((31 & r) << 6 | 63 & e[s++]) : r < 240 ? i += String.fromCharCode((15 & r) << 12 | (63 & e[s++]) << 6 | 63 & e[s++]) : i += String.fromCharCode(55296 | (r = ((15 & r) << 18 | (63 & e[s++]) << 12 | (63 & e[s++]) << 6 | 63 & e[s++]) - 65536) >> 10, 56320 | 1023 & r)
                    }
                    return i
                }(sg(sv(JSON.stringify(e))), !0)
            }

            function sS(e) {
                return e.type === ia.Custom && "sessionIdle" === e.data.tag
            }

            function sk(e, t) {
                return t.some(t => "regex" === t.matching && new RegExp(t.url).test(e))
            }
            class sE {
                get sessionIdleThresholdMilliseconds() {
                    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5
                }
                get rrwebRecord() {
                    var e, t;
                    return null == v || null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record
                }
                get started() {
                    return this._captureStarted
                }
                get sessionManager() {
                    if (!this.instance.sessionManager) throw Error(sf + " must be started with a valid sessionManager.");
                    return this.instance.sessionManager
                }
                get fullSnapshotIntervalMillis() {
                    var e, t;
                    return "trigger_pending" === this.triggerStatus ? 6e4 : null !== (e = null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.full_snapshot_interval_millis) && void 0 !== e ? e : 3e5
                }
                get isSampled() {
                    var e = this.instance.get_property(eI);
                    return K(e) ? e : null
                }
                get sessionDuration() {
                    var e, t, i = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                        {
                            sessionStartTimestamp: s
                        } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
                    return i ? i.timestamp - s : null
                }
                get isRecordingEnabled() {
                    var e = !!this.instance.get_property(em),
                        t = !this.instance.config.disable_session_recording;
                    return r && e && t
                }
                get isConsoleLogCaptureEnabled() {
                    var e = !!this.instance.get_property(eb),
                        t = this.instance.config.enable_recording_console_log;
                    return null != t ? t : e
                }
                get canvasRecording() {
                    var e, t, i, s, r, n, o = this.instance.config.session_recording.captureCanvas,
                        a = this.instance.get_property(ew),
                        l = null !== (e = null !== (t = null == o ? void 0 : o.recordCanvas) && void 0 !== t ? t : null == a ? void 0 : a.enabled) && void 0 !== e && e,
                        c = null !== (i = null !== (s = null == o ? void 0 : o.canvasFps) && void 0 !== s ? s : null == a ? void 0 : a.fps) && void 0 !== i ? i : 4,
                        u = null !== (r = null !== (n = null == o ? void 0 : o.canvasQuality) && void 0 !== n ? n : null == a ? void 0 : a.quality) && void 0 !== r ? r : .4;
                    if ("string" == typeof u) {
                        var d = parseFloat(u);
                        u = isNaN(d) ? .4 : d
                    }
                    return {
                        enabled: l,
                        fps: iz(c, 0, 12, "canvas recording fps", 4),
                        quality: iz(u, 0, 1, "canvas recording quality", .4)
                    }
                }
                get networkPayloadCapture() {
                    var e, t, i = this.instance.get_property(ey),
                        s = {
                            recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                            recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                        },
                        r = (null == s ? void 0 : s.recordHeaders) || (null == i ? void 0 : i.recordHeaders),
                        n = (null == s ? void 0 : s.recordBody) || (null == i ? void 0 : i.recordBody),
                        o = U(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
                        a = !!(K(o) ? o : null == i ? void 0 : i.capturePerformance);
                    return r || n || a ? {
                        recordHeaders: r,
                        recordBody: n,
                        recordPerformance: a
                    } : void 0
                }
                get sampleRate() {
                    var e = this.instance.get_property(eS);
                    return Y(e) ? e : null
                }
                get minimumDuration() {
                    var e = this.instance.get_property(ek);
                    return Y(e) ? e : null
                }
                get status() {
                    return this.receivedDecide ? this.isRecordingEnabled ? !1 === this.isSampled ? "disabled" : this._urlBlocked ? "paused" : J(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.triggerStatus ? "buffering" : K(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
                }
                get urlTriggerStatus() {
                    var e;
                    return 0 === this._urlTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(eC)) === this.sessionId ? "trigger_activated" : "trigger_pending"
                }
                get eventTriggerStatus() {
                    var e;
                    return 0 === this._eventTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(eP)) === this.sessionId ? "trigger_activated" : "trigger_pending"
                }
                get triggerStatus() {
                    var e = "trigger_activated" === this.eventTriggerStatus || "trigger_activated" === this.urlTriggerStatus,
                        t = "trigger_pending" === this.eventTriggerStatus || "trigger_pending" === this.urlTriggerStatus;
                    return e ? "trigger_activated" : t ? "trigger_pending" : "trigger_disabled"
                }
                constructor(e) {
                    if (ea(this, "queuedRRWebEvents", []), ea(this, "isIdle", !1), ea(this, "_linkedFlagSeen", !1), ea(this, "_lastActivityTimestamp", Date.now()), ea(this, "_linkedFlag", null), ea(this, "_removePageViewCaptureHook", void 0), ea(this, "_onSessionIdListener", void 0), ea(this, "_persistDecideOnSessionListener", void 0), ea(this, "_samplingSessionListener", void 0), ea(this, "_urlTriggers", []), ea(this, "_urlBlocklist", []), ea(this, "_urlBlocked", !1), ea(this, "_eventTriggers", []), ea(this, "_removeEventTriggerCaptureHook", void 0), ea(this, "_forceAllowLocalhostNetworkCapture", !1), ea(this, "_onBeforeUnload", () => {
                            this._flushBuffer()
                        }), ea(this, "_onOffline", () => {
                            this._tryAddCustomEvent("browser offline", {})
                        }), ea(this, "_onOnline", () => {
                            this._tryAddCustomEvent("browser online", {})
                        }), ea(this, "_onVisibilityChange", () => {
                            if (null != u && u.visibilityState) {
                                var e = "window " + u.visibilityState;
                                this._tryAddCustomEvent(e, {})
                            }
                        }), this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, !this.instance.sessionManager) throw sm.error("started without valid sessionManager"), Error(sf + " started without valid sessionManager. This is a bug.");
                    if (this.instance.config.__preview_experimental_cookieless_mode) throw Error(sf + " cannot be used with __preview_experimental_cookieless_mode.");
                    var {
                        sessionId: t,
                        windowId: i
                    } = this.sessionManager.checkAndGetSessionAndWindowId();
                    this.sessionId = t, this.windowId = i, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && sm.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"))
                }
                startIfEnabledOrStop(e) {
                    this.isRecordingEnabled ? (this._startCapture(e), T(r, "beforeunload", this._onBeforeUnload), T(r, "offline", this._onOffline), T(r, "online", this._onOnline), T(r, "visibilitychange", this._onVisibilityChange), this._setupSampling(), this._addEventTriggerListener(), J(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", e => {
                        try {
                            if ("$pageview" === e.event) {
                                var t = null != e && e.properties.$current_url ? this._maskUrl(null == e ? void 0 : e.properties.$current_url) : "";
                                if (!t) return;
                                this._tryAddCustomEvent("$pageview", {
                                    href: t
                                })
                            }
                        } catch (e) {
                            sm.error("Could not add $pageview to rrweb session", e)
                        }
                    })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((e, t, i) => {
                        var s, r, n, o;
                        i && (this._tryAddCustomEvent("$session_id_change", {
                            sessionId: e,
                            windowId: t,
                            changeReason: i
                        }), null === (s = this.instance) || void 0 === s || null === (r = s.persistence) || void 0 === r || r.unregister(eP), null === (n = this.instance) || void 0 === n || null === (o = n.persistence) || void 0 === o || o.unregister(eC))
                    }))) : this.stopRecording()
                }
                stopRecording() {
                    var e, t, i, s;
                    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, null == r || r.removeEventListener("beforeunload", this._onBeforeUnload), null == r || r.removeEventListener("offline", this._onOffline), null == r || r.removeEventListener("online", this._onOnline), null == r || r.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (e = this._removePageViewCaptureHook) || void 0 === e || e.call(this), this._removePageViewCaptureHook = void 0, null === (t = this._removeEventTriggerCaptureHook) || void 0 === t || t.call(this), this._removeEventTriggerCaptureHook = void 0, null === (i = this._onSessionIdListener) || void 0 === i || i.call(this), this._onSessionIdListener = void 0, null === (s = this._samplingSessionListener) || void 0 === s || s.call(this), this._samplingSessionListener = void 0, sm.info("stopped"))
                }
                makeSamplingDecision(e) {
                    var t, i, s = this.sessionId !== e,
                        r = this.sampleRate;
                    if (Y(r)) {
                        var n = this.isSampled,
                            o = s || !K(n),
                            a = o ? function(e) {
                                for (var t = 0, i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i) | 0;
                                return Math.abs(t)
                            }(e) % 100 < iz(100 * r, 0, 100) : n;
                        o && (a ? this._reportStarted("sampled") : sm.warn("Sample rate (".concat(r, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                            sampleRate: r,
                            isSampled: a
                        })), null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [eI]: a
                        })
                    } else null === (t = this.instance.persistence) || void 0 === t || t.register({
                        [eI]: null
                    })
                }
                onRemoteConfig(e) {
                    var t, i, s, r, n, o;
                    if (this._tryAddCustomEvent("$remote_config_received", e), this._persistRemoteConfig(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (i = e.sessionRecording) && void 0 !== i && i.endpoint && (this._endpoint = null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.endpoint), this._setupSampling(), !J(this._linkedFlag) && !this._linkedFlagSeen) {
                        var a = W(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                            l = W(this._linkedFlag) ? null : this._linkedFlag.variant;
                        this.instance.onFeatureFlags((e, t) => {
                            var i = U(t) && a in t,
                                s = l ? t[a] === l : i;
                            s && this._reportStarted("linked_flag_matched", {
                                linkedFlag: a,
                                linkedVariant: l
                            }), this._linkedFlagSeen = s
                        })
                    }
                    null !== (s = e.sessionRecording) && void 0 !== s && s.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers), null !== (r = e.sessionRecording) && void 0 !== r && r.urlBlocklist && (this._urlBlocklist = e.sessionRecording.urlBlocklist), null !== (n = e.sessionRecording) && void 0 !== n && n.eventTriggers && (this._eventTriggers = e.sessionRecording.eventTriggers), this.receivedDecide = !0, this.startIfEnabledOrStop()
                }
                _setupSampling() {
                    Y(this.sampleRate) && J(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(e => {
                        this.makeSamplingDecision(e)
                    }))
                }
                _persistRemoteConfig(e) {
                    if (this.instance.persistence) {
                        var t, i = this.instance.persistence,
                            s = () => {
                                var t, s, r, n, o, a, l, c, u = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate,
                                    d = J(u) ? null : parseFloat(u),
                                    h = null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.minimumDurationMilliseconds;
                                i.register({
                                    [em]: !!e.sessionRecording,
                                    [eb]: null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.consoleLogRecordingEnabled,
                                    [ey]: eo({
                                        capturePerformance: e.capturePerformance
                                    }, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.networkPayloadCapture),
                                    [ew]: {
                                        enabled: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recordCanvas,
                                        fps: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.canvasFps,
                                        quality: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasQuality
                                    },
                                    [eS]: d,
                                    [ek]: j(h) ? null : h,
                                    [eE]: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.scriptConfig
                                })
                            };
                        s(), null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(s)
                    }
                }
                log(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                    null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                        type: 6,
                        data: {
                            plugin: "rrweb/console@1",
                            payload: {
                                level: i,
                                trace: [],
                                payload: [JSON.stringify(e)]
                            }
                        },
                        timestamp: Date.now()
                    })
                }
                _startCapture(e) {
                    if (!j(Object.assign) && !j(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
                        var t, i;
                        (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord) ? this._onScriptLoaded(): null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, this.scriptName, e => {
                            if (e) return sm.error("could not load recorder", e);
                            this._onScriptLoaded()
                        }), sm.info("starting"), "active" === this.status && this._reportStarted(e || "recording_initialized")
                    }
                }
                get scriptName() {
                    var e, t, i;
                    return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t || null === (i = t.get_property(eE)) || void 0 === i ? void 0 : i.script) || "recorder"
                }
                isInteractiveEvent(e) {
                    var t;
                    return 3 === e.type && -1 !== sb.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                }
                _updateWindowAndSessionIds(e) {
                    var t = this.isInteractiveEvent(e);
                    t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
                        eventTimestamp: e.timestamp,
                        lastActivityTimestamp: this._lastActivityTimestamp,
                        threshold: this.sessionIdleThresholdMilliseconds,
                        bufferLength: this.buffer.data.length,
                        bufferSize: this.buffer.size
                    }), this._flushBuffer());
                    var i = !1;
                    if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                            reason: "user activity",
                            type: e.type
                        }), i = !0)), !this.isIdle) {
                        var {
                            windowId: s,
                            sessionId: r
                        } = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), n = this.sessionId !== r, o = this.windowId !== s;
                        this.windowId = s, this.sessionId = r, n || o ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot()
                    }
                }
                _tryRRWebMethod(e) {
                    try {
                        return e.rrwebMethod(), !0
                    } catch (t) {
                        return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                            enqueuedAt: e.enqueuedAt || Date.now(),
                            attempt: e.attempt++,
                            rrwebMethod: e.rrwebMethod
                        }) : sm.warn("could not emit queued rrweb event.", t, e), !1
                    }
                }
                _tryAddCustomEvent(e, t) {
                    return this._tryRRWebMethod(sy(() => this.rrwebRecord.addCustomEvent(e, t)))
                }
                _tryTakeFullSnapshot() {
                    return this._tryRRWebMethod(sy(() => this.rrwebRecord.takeFullSnapshot()))
                }
                _onScriptLoaded() {
                    var e, t = {
                        blockClass: "ph-no-capture",
                        blockSelector: void 0,
                        ignoreClass: "ph-ignore-input",
                        maskTextClass: "ph-mask",
                        maskTextSelector: void 0,
                        maskTextFn: void 0,
                        maskAllInputs: !0,
                        maskInputOptions: {
                            password: !0
                        },
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0,
                        recordCrossOriginIframes: !1
                    };
                    for (var [i, s] of Object.entries(this.instance.config.session_recording || {})) i in t && ("maskInputOptions" === i ? t.maskInputOptions = eo({
                        password: !0
                    }, s) : t[i] = s);
                    if (this.canvasRecording && this.canvasRecording.enabled && (t.recordCanvas = !0, t.sampling = {
                            canvas: this.canvasRecording.fps
                        }, t.dataURLOptions = {
                            type: "image/webp",
                            quality: this.canvasRecording.quality
                        }), this.rrwebRecord) {
                        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new ij(this.rrwebRecord, {
                            refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
                            bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
                            onBlockedNode: (e, t) => {
                                var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                sm.info(i, {
                                    node: t
                                }), this.log(sf + " " + i, "warn")
                            }
                        });
                        var r = this._gatherRRWebPlugins();
                        this.stopRrweb = this.rrwebRecord(eo({
                            emit: e => {
                                this.onRRwebEmit(e)
                            },
                            plugins: r
                        }, t)), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                            sessionRecordingOptions: t,
                            activePlugins: r.map(e => null == e ? void 0 : e.name)
                        }), this._tryAddCustomEvent("$posthog_config", {
                            config: this.instance.config
                        })
                    } else sm.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                }
                _scheduleFullSnapshot() {
                    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
                        var e = this.fullSnapshotIntervalMillis;
                        e && (this._fullSnapshotTimer = setInterval(() => {
                            this._tryTakeFullSnapshot()
                        }, e))
                    }
                }
                _gatherRRWebPlugins() {
                    var e, t, i, s, r = [],
                        n = null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
                    n && this.isConsoleLogCaptureEnabled && r.push(n());
                    var o = null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.rrwebPlugins) || void 0 === s ? void 0 : s.getRecordNetworkPlugin;
                    return this.networkPayloadCapture && H(o) && (!tl.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r.push(o(iU(this.instance.config, this.networkPayloadCapture))) : sm.info("NetworkCapture not started because we are on localhost.")), r
                }
                onRRwebEmit(e) {
                    var t;
                    if (this._processQueuedEvents(), e && U(e)) {
                        if (e.type === ia.Meta) {
                            var i = this._maskUrl(e.data.href);
                            if (this._lastHref = i, !i) return;
                            e.data.href = i
                        } else this._pageViewFallBack();
                        if (this._checkUrlTriggerConditions(), !this._urlBlocked || e.type === ia.Custom && "recording paused" === e.data.tag) {
                            e.type === ia.FullSnapshot && this._scheduleFullSnapshot(), e.type === ia.FullSnapshot && "trigger_pending" === this.triggerStatus && this.clearBuffer();
                            var s = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                            if (s) {
                                var r = function(e) {
                                    if (e && U(e) && 6 === e.type && U(e.data) && "rrweb/console@1" === e.data.plugin) {
                                        e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                                        for (var t = [], i = 0; i < e.data.payload.payload.length; i++) e.data.payload.payload[i] && e.data.payload.payload[i].length > 2e3 ? t.push(e.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[i]);
                                        return e.data.payload.payload = t, e
                                    }
                                    return e
                                }(s);
                                if (this._updateWindowAndSessionIds(r), !this.isIdle || sS(r)) {
                                    if (sS(r)) {
                                        var n = r.data.payload;
                                        n && (r.timestamp = n.lastActivityTimestamp + n.threshold)
                                    }
                                    var o = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
                                            if (1024 > io(e)) return e;
                                            try {
                                                if (e.type === ia.FullSnapshot) return eo(eo({}, e), {}, {
                                                    data: sw(e.data),
                                                    cv: "2024-10"
                                                });
                                                if (e.type === ia.IncrementalSnapshot && e.data.source === il.Mutation) return eo(eo({}, e), {}, {
                                                    cv: "2024-10",
                                                    data: eo(eo({}, e.data), {}, {
                                                        texts: sw(e.data.texts),
                                                        attributes: sw(e.data.attributes),
                                                        removes: sw(e.data.removes),
                                                        adds: sw(e.data.adds)
                                                    })
                                                });
                                                if (e.type === ia.IncrementalSnapshot && e.data.source === il.StyleSheetRule) return eo(eo({}, e), {}, {
                                                    cv: "2024-10",
                                                    data: eo(eo({}, e.data), {}, {
                                                        adds: e.data.adds ? sw(e.data.adds) : void 0,
                                                        removes: e.data.removes ? sw(e.data.removes) : void 0
                                                    })
                                                })
                                            } catch (e) {
                                                sm.error("could not compress event - will use uncompressed event", e)
                                            }
                                            return e
                                        }(r) : r,
                                        a = {
                                            $snapshot_bytes: io(o),
                                            $snapshot_data: o,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId
                                        };
                                    "disabled" !== this.status ? this._captureSnapshotBuffered(a) : this.clearBuffer()
                                }
                            }
                        }
                    }
                }
                _pageViewFallBack() {
                    if (!this.instance.config.capture_pageview && r) {
                        var e = this._maskUrl(r.location.href);
                        this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                            href: e
                        }), this._lastHref = e)
                    }
                }
                _processQueuedEvents() {
                    if (this.queuedRRWebEvents.length) {
                        var e = [...this.queuedRRWebEvents];
                        this.queuedRRWebEvents = [], e.forEach(e => {
                            Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e)
                        })
                    }
                }
                _maskUrl(e) {
                    var t = this.instance.config.session_recording;
                    if (t.maskNetworkRequestFn) {
                        var i, s = {
                            url: e
                        };
                        return null === (i = s = t.maskNetworkRequestFn(s)) || void 0 === i ? void 0 : i.url
                    }
                    return e
                }
                clearBuffer() {
                    return this.buffer = {
                        size: 0,
                        data: [],
                        sessionId: this.sessionId,
                        windowId: this.windowId
                    }, this.buffer
                }
                _flushBuffer() {
                    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                    var e = this.minimumDuration,
                        t = this.sessionDuration,
                        i = Y(t) && t >= 0,
                        s = Y(e) && i && t < e;
                    return "buffering" === this.status || "paused" === this.status || "disabled" === this.status || s ? (this.flushBufferTimer = setTimeout(() => {
                        this._flushBuffer()
                    }, 2e3), this.buffer) : (this.buffer.data.length > 0 && (function e(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
                        if (t.size >= i && t.data.length > 1) {
                            var s = Math.floor(t.data.length / 2),
                                r = t.data.slice(0, s),
                                n = t.data.slice(s);
                            return [e({
                                size: io(r),
                                data: r,
                                sessionId: t.sessionId,
                                windowId: t.windowId
                            }), e({
                                size: io(n),
                                data: n,
                                sessionId: t.sessionId,
                                windowId: t.windowId
                            })].flatMap(e => e)
                        }
                        return [t]
                    })(this.buffer).forEach(e => {
                        this._captureSnapshot({
                            $snapshot_bytes: e.size,
                            $snapshot_data: e.data,
                            $session_id: e.sessionId,
                            $window_id: e.windowId,
                            $lib: "web",
                            $lib_version: f.LIB_VERSION
                        })
                    }), this.clearBuffer())
                }
                _captureSnapshotBuffered(e) {
                    var t, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                    !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(() => {
                        this._flushBuffer()
                    }, 2e3))
                }
                _captureSnapshot(e) {
                    this.instance.capture("$snapshot", e, {
                        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                        _noTruncate: !0,
                        _batchKey: "recordings",
                        skip_client_rate_limiting: !0
                    })
                }
                _checkUrlTriggerConditions() {
                    if (void 0 !== r && r.location.href) {
                        var e = r.location.href,
                            t = this._urlBlocked,
                            i = sk(e, this._urlBlocklist);
                        i && !t ? this._pauseRecording() : !i && t && this._resumeRecording(), sk(e, this._urlTriggers) && this._activateTrigger("url")
                    }
                }
                _activateTrigger(e) {
                    var t, i;
                    "trigger_pending" === this.triggerStatus && (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                        ["url" === e ? eC : eP]: this.sessionId
                    }), this._flushBuffer(), this._reportStarted(e + "_trigger_matched"))
                }
                _pauseRecording() {
                    this._urlBlocked || (this._urlBlocked = !0, clearInterval(this._fullSnapshotTimer), sm.info("recording paused due to URL blocker"), this._tryAddCustomEvent("recording paused", {
                        reason: "url blocker"
                    }))
                }
                _resumeRecording() {
                    this._urlBlocked && (this._urlBlocked = !1, this._tryTakeFullSnapshot(), this._scheduleFullSnapshot(), this._tryAddCustomEvent("recording resumed", {
                        reason: "left blocked url"
                    }), sm.info("recording resumed"))
                }
                _addEventTriggerListener() {
                    0 !== this._eventTriggers.length && J(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", e => {
                        try {
                            this._eventTriggers.includes(e.event) && this._activateTrigger("event")
                        } catch (e) {
                            sm.error("Could not activate event trigger", e)
                        }
                    }))
                }
                overrideLinkedFlag() {
                    this._linkedFlagSeen = !0, this._tryTakeFullSnapshot(), this._reportStarted("linked_flag_overridden")
                }
                overrideSampling() {
                    var e;
                    null === (e = this.instance.persistence) || void 0 === e || e.register({
                        [eI]: !0
                    }), this._tryTakeFullSnapshot(), this._reportStarted("sampling_overridden")
                }
                overrideTrigger(e) {
                    this._activateTrigger(e)
                }
                _reportStarted(e, t) {
                    this.instance.register_for_session({
                        $session_recording_start_reason: e
                    }), sm.info(e.replace("_", " "), t), $(["recording_initialized", "session_id_changed"], e) || this._tryAddCustomEvent(e, t)
                }
            }
            var sx = ei("[RemoteConfig]");
            class sI {
                constructor(e) {
                    this.instance = e
                }
                get remoteConfig() {
                    var e, t;
                    return null === (e = v._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.config
                }
                _loadRemoteConfigJs(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.loadExternalDependency ? null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "remote-config", () => e(this.remoteConfig)) : (sx.error("PostHog Extensions not found. Cannot load remote config."), e())
                }
                _loadRemoteConfigJSON(e) {
                    this.instance._send_request({
                        method: "GET",
                        url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")),
                        callback: t => {
                            e(t.json)
                        }
                    })
                }
                load() {
                    try {
                        if (this.remoteConfig) return sx.info("Using preloaded remote config", this.remoteConfig), void this.onRemoteConfig(this.remoteConfig);
                        if (this.instance.config.advanced_disable_decide) return void sx.warn("Remote config is disabled. Falling back to local config.");
                        this._loadRemoteConfigJs(e => {
                            if (!e) return sx.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON(e => {
                                this.onRemoteConfig(e)
                            });
                            this.onRemoteConfig(e)
                        })
                    } catch (e) {
                        sx.error("Error loading remote config", e)
                    }
                }
                onRemoteConfig(e) {
                    e ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e), !1 !== e.hasFeatureFlags && this.instance.featureFlags.ensureFlagsLoaded()) : sx.info("__preview_remote_config is disabled. Logging config instead", e) : sx.error("Failed to fetch remote config from PostHog.")
                }
            }
            var sC, sP = null != r && r.location ? t_(r.location.hash, "__posthog") || t_(location.hash, "state") : null,
                sF = "_postHogToolbarParams",
                sR = ei("[Toolbar]");
            ! function(e) {
                e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED"
            }(sC || (sC = {}));
            class sT {
                constructor(e) {
                    this.instance = e
                }
                setToolbarState(e) {
                    v.ph_toolbar_state = e
                }
                getToolbarState() {
                    var e;
                    return null !== (e = v.ph_toolbar_state) && void 0 !== e ? e : sC.UNINITIALIZED
                }
                maybeLoadToolbar() {
                    var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (!r || !u) return !1;
                    i = null !== (e = i) && void 0 !== e ? e : r.location, n = null !== (t = n) && void 0 !== t ? t : r.history;
                    try {
                        if (!s) {
                            try {
                                r.localStorage.setItem("test", "test"), r.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            s = null == r ? void 0 : r.localStorage
                        }
                        var o, a = sP || t_(i.hash, "__posthog") || t_(i.hash, "state"),
                            l = a ? I(() => JSON.parse(atob(decodeURIComponent(a)))) || I(() => JSON.parse(decodeURIComponent(a))) : null;
                        return l && "ph_authorize" === l.action ? ((o = l).source = "url", o && Object.keys(o).length > 0 && (l.desiredHash ? i.hash = l.desiredHash : n ? n.replaceState(n.state, "", i.pathname + i.search) : i.hash = "")) : ((o = JSON.parse(s.getItem(sF) || "{}")).source = "localstorage", delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), !0)
                    } catch (e) {
                        return !1
                    }
                }
                _callLoadToolbar(e) {
                    var t = v.ph_load_toolbar || v.ph_load_editor;
                    !J(t) && H(t) ? t(e, this.instance) : sR.warn("No toolbar load function found")
                }
                loadToolbar(e) {
                    var t, i, s = !(null == u || !u.getElementById(ez));
                    if (!r || s) return !1;
                    var n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                        o = eo(eo({
                            token: this.instance.config.token
                        }, e), {}, {
                            apiURL: this.instance.requestRouter.endpointFor("ui")
                        }, n ? {
                            instrument: !1
                        } : {});
                    return (r.localStorage.setItem(sF, JSON.stringify(eo(eo({}, o), {}, {
                        source: void 0
                    }))), this.getToolbarState() === sC.LOADED) ? this._callLoadToolbar(o) : this.getToolbarState() === sC.UNINITIALIZED && (this.setToolbarState(sC.LOADING), null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "toolbar", e => {
                        if (e) return sR.error("[Toolbar] Failed to load", e), void this.setToolbarState(sC.UNINITIALIZED);
                        this.setToolbarState(sC.LOADED), this._callLoadToolbar(o)
                    }), T(r, "turbolinks:load", () => {
                        this.setToolbarState(sC.UNINITIALIZED), this.loadToolbar(o)
                    })), !0
                }
                _loadEditor(e) {
                    return this.loadToolbar(e)
                }
                maybeLoadEditor() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return this.maybeLoadToolbar(e, t, i)
                }
            }
            class s$ {
                constructor(e, t) {
                    ea(this, "isPaused", !0), ea(this, "queue", []), this.flushTimeoutMs = iz((null == t ? void 0 : t.flush_interval_ms) || 3e3, 250, 5e3, "flush interval", 3e3), this.sendRequest = e
                }
                enqueue(e) {
                    this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                }
                unload() {
                    this.clearFlushTimeout();
                    var e = Object.values(this.queue.length > 0 ? this.formatQueue() : {});
                    [...e.filter(e => 0 === e.url.indexOf("/e")), ...e.filter(e => 0 !== e.url.indexOf("/e"))].map(e => {
                        this.sendRequest(eo(eo({}, e), {}, {
                            transport: "sendBeacon"
                        }))
                    })
                }
                enable() {
                    this.isPaused = !1, this.setFlushTimeout()
                }
                setFlushTimeout() {
                    var e = this;
                    this.isPaused || (this.flushTimeout = setTimeout(() => {
                        if (this.clearFlushTimeout(), this.queue.length > 0) {
                            var t = this.formatQueue();
                            for (var i in t) ! function(i) {
                                var s = t[i],
                                    r = (new Date).getTime();
                                s.data && B(s.data) && S(s.data, e => {
                                    e.offset = Math.abs(e.timestamp - r), delete e.timestamp
                                }), e.sendRequest(s)
                            }(i)
                        }
                    }, this.flushTimeoutMs))
                }
                clearFlushTimeout() {
                    clearTimeout(this.flushTimeout), this.flushTimeout = void 0
                }
                formatQueue() {
                    var e = {};
                    return S(this.queue, t => {
                        var i, s = (t ? t.batchKey : null) || t.url;
                        j(e[s]) && (e[s] = eo(eo({}, t), {}, {
                            data: []
                        })), null === (i = e[s].data) || void 0 === i || i.push(t.data)
                    }), this.queue = [], e
                }
            }
            var sO = function(e) {
                    var t, i, s, r, n = "";
                    for (t = i = 0, s = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < s; r++) {
                        var o = e.charCodeAt(r),
                            a = null;
                        o < 128 ? i++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), G(a) || (i > t && (n += e.substring(t, i)), n += a, t = i = r + 1)
                    }
                    return i > t && (n += e.substring(t, e.length)), n
                },
                sA = !!_ || !!h,
                sM = "text/plain",
                sL = (e, t) => {
                    var [i, s] = e.split("?"), r = eo({}, t);
                    null == s || s.split("&").forEach(e => {
                        var [t] = e.split("=");
                        delete r[t]
                    });
                    var n = tu(r);
                    return n = n ? (s ? s + "&" : "") + n : s, "".concat(i, "?").concat(n)
                },
                sD = (e, t) => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() : t, t),
                sN = e => {
                    var {
                        data: t,
                        compression: i
                    } = e;
                    if (t) {
                        if (i === s.GZipJS) {
                            var r = new Blob([sg(sv(sD(t)), {
                                mtime: 0
                            })], {
                                type: sM
                            });
                            return {
                                contentType: sM,
                                body: r,
                                estimatedSize: r.size
                            }
                        }
                        if (i === s.Base64) {
                            var n = (e => "data=" + encodeURIComponent("string" == typeof e ? e : sD(e)))(function(e) {
                                var t, i, s, r, n, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                    a = 0,
                                    l = 0,
                                    c = "",
                                    u = [];
                                if (!e) return e;
                                e = sO(e);
                                do t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, i = n >> 12 & 63, s = n >> 6 & 63, r = 63 & n, u[l++] = o.charAt(t) + o.charAt(i) + o.charAt(s) + o.charAt(r); while (a < e.length);
                                switch (c = u.join(""), e.length % 3) {
                                    case 1:
                                        c = c.slice(0, -2) + "==";
                                        break;
                                    case 2:
                                        c = c.slice(0, -1) + "="
                                }
                                return c
                            }(sD(t)));
                            return {
                                contentType: "application/x-www-form-urlencoded",
                                body: n,
                                estimatedSize: new Blob([n]).size
                            }
                        }
                        var o = sD(t);
                        return {
                            contentType: "application/json",
                            body: o,
                            estimatedSize: new Blob([o]).size
                        }
                    }
                },
                sq = [];
            h && sq.push({
                transport: "fetch",
                method: e => {
                    var t, i, {
                            contentType: s,
                            body: r,
                            estimatedSize: n
                        } = null !== (t = sN(e)) && void 0 !== t ? t : {},
                        o = new Headers;
                    S(e.headers, function(e, t) {
                        o.append(t, e)
                    }), s && o.append("Content-Type", s);
                    var a = e.url,
                        l = null;
                    if (p) {
                        var c = new p;
                        l = {
                            signal: c.signal,
                            timeout: setTimeout(() => c.abort(), e.timeout)
                        }
                    }
                    h(a, eo({
                        method: (null == e ? void 0 : e.method) || "GET",
                        headers: o,
                        keepalive: "POST" === e.method && 52428.8 > (n || 0),
                        body: r,
                        signal: null === (i = l) || void 0 === i ? void 0 : i.signal
                    }, e.fetchOptions)).then(t => t.text().then(i => {
                        var s, r = {
                            statusCode: t.status,
                            text: i
                        };
                        if (200 === t.status) try {
                            r.json = JSON.parse(i)
                        } catch (e) {
                            et.error(e)
                        }
                        null === (s = e.callback) || void 0 === s || s.call(e, r)
                    })).catch(t => {
                        var i;
                        et.error(t), null === (i = e.callback) || void 0 === i || i.call(e, {
                            statusCode: 0,
                            text: t
                        })
                    }).finally(() => l ? clearTimeout(l.timeout) : null)
                }
            }), _ && sq.push({
                transport: "XHR",
                method: e => {
                    var t, i = new _;
                    i.open(e.method || "GET", e.url, !0);
                    var {
                        contentType: s,
                        body: r
                    } = null !== (t = sN(e)) && void 0 !== t ? t : {};
                    S(e.headers, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), s && i.setRequestHeader("Content-Type", s), e.timeout && (i.timeout = e.timeout), i.withCredentials = !0, i.onreadystatechange = () => {
                        if (4 === i.readyState) {
                            var t, s = {
                                statusCode: i.status,
                                text: i.responseText
                            };
                            if (200 === i.status) try {
                                s.json = JSON.parse(i.responseText)
                            } catch (e) {}
                            null === (t = e.callback) || void 0 === t || t.call(e, s)
                        }
                    }, i.send(r)
                }
            }), null != c && c.sendBeacon && sq.push({
                transport: "sendBeacon",
                method: e => {
                    var t = sL(e.url, {
                        beacon: "1"
                    });
                    try {
                        var i, {
                                contentType: s,
                                body: r
                            } = null !== (i = sN(e)) && void 0 !== i ? i : {},
                            n = "string" == typeof r ? new Blob([r], {
                                type: s
                            }) : r;
                        c.sendBeacon(t, n)
                    } catch (e) {}
                }
            });
            var sB = ["retriesPerformedSoFar"];
            class sH {
                constructor(e) {
                    ea(this, "isPolling", !1), ea(this, "pollIntervalMs", 3e3), ea(this, "queue", []), this.instance = e, this.queue = [], this.areWeOnline = !0, !j(r) && "onLine" in r.navigator && (this.areWeOnline = r.navigator.onLine, T(r, "online", () => {
                        this.areWeOnline = !0, this.flush()
                    }), T(r, "offline", () => {
                        this.areWeOnline = !1
                    }))
                }
                retriableRequest(e) {
                    var {
                        retriesPerformedSoFar: t
                    } = e, i = el(e, sB);
                    Y(t) && t > 0 && (i.url = sL(i.url, {
                        retry_count: t
                    })), this.instance._send_request(eo(eo({}, i), {}, {
                        callback: e => {
                            var s;
                            200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != t ? t : 0) < 10 ? this.enqueue(eo({
                                retriesPerformedSoFar: t
                            }, i)) : null === (s = i.callback) || void 0 === s || s.call(i, e)
                        }
                    }))
                }
                enqueue(e) {
                    var t, i, s, r = e.retriesPerformedSoFar || 0;
                    e.retriesPerformedSoFar = r + 1;
                    var n = (s = (Math.random() - .5) * ((i = Math.min(18e5, t = 3e3 * Math.pow(2, r))) - t / 2), Math.ceil(i + s)),
                        o = Date.now() + n;
                    this.queue.push({
                        retryAt: o,
                        requestOptions: e
                    });
                    var a = "Enqueued failed request for retry in ".concat(n);
                    navigator.onLine || (a += " (Browser is offline)"), et.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
                }
                poll() {
                    this.poller && clearTimeout(this.poller), this.poller = setTimeout(() => {
                        this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll()
                    }, this.pollIntervalMs)
                }
                flush() {
                    var e = Date.now(),
                        t = [],
                        i = this.queue.filter(i => i.retryAt < e || (t.push(i), !1));
                    if (this.queue = t, i.length > 0)
                        for (var {
                                requestOptions: s
                            } of i) this.retriableRequest(s)
                }
                unload() {
                    for (var {
                            requestOptions: e
                        } of (this.poller && (clearTimeout(this.poller), this.poller = void 0), this.queue)) try {
                        this.instance._send_request(eo(eo({}, e), {}, {
                            transport: "sendBeacon"
                        }))
                    } catch (e) {
                        et.error(e)
                    }
                    this.queue = []
                }
            }
            var sU, sz = ei("[SessionId]");
            class sj {
                constructor(e, t, i) {
                    if (ea(this, "_sessionIdChangedHandlers", []), !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
                    if (e.config.__preview_experimental_cookieless_mode) throw Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
                    this.config = e.config, this.persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || e6, this._windowIdGenerator = i || e6;
                    var s, r = this.config.persistence_name || this.config.token,
                        n = this.config.session_idle_timeout_seconds || 1800;
                    if (this._sessionTimeoutMs = 1e3 * iz(n, 60, 36e3, "session_idle_timeout_seconds", 1800), e.register({
                            $configured_session_timeout_ms: this._sessionTimeoutMs
                        }), this.resetIdleTimer(), this._window_id_storage_key = "ph_" + r + "_window_id", this._primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists", this._canUseSessionStorage()) {
                        var o = ta.parse(this._window_id_storage_key),
                            a = ta.parse(this._primary_window_exists_storage_key);
                        o && !a ? this._windowId = o : ta.remove(this._window_id_storage_key), ta.set(this._primary_window_exists_storage_key, !0)
                    }
                    if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
                        var l = (e => {
                            var t = e.replace(/-/g, "");
                            if (32 !== t.length) throw Error("Not a valid UUID");
                            if ("7" !== t[12]) throw Error("Not a UUIDv7");
                            return parseInt(t.substring(0, 12), 16)
                        })(this.config.bootstrap.sessionID);
                        this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), l)
                    } catch (e) {
                        sz.error("Invalid sessionID in bootstrap", e)
                    }
                    this._listenToReloadWindow()
                }
                get sessionTimeoutMs() {
                    return this._sessionTimeoutMs
                }
                onSessionId(e) {
                    return j(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
                        this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(t => t !== e)
                    }
                }
                _canUseSessionStorage() {
                    return "memory" !== this.config.persistence && !this.persistence.disabled && ta.is_supported()
                }
                _setWindowId(e) {
                    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && ta.set(this._window_id_storage_key, e))
                }
                _getWindowId() {
                    return this._windowId ? this._windowId : this._canUseSessionStorage() ? ta.parse(this._window_id_storage_key) : null
                }
                _setSessionId(e, t, i) {
                    e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register({
                        [ex]: [t, e, i]
                    }))
                }
                _getSessionId() {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[ex];
                    return B(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                }
                resetSessionId() {
                    this._setSessionId(null, null, null)
                }
                _listenToReloadWindow() {
                    T(r, "beforeunload", () => {
                        this._canUseSessionStorage() && ta.remove(this._primary_window_exists_storage_key)
                    }, {
                        capture: !1
                    })
                }
                checkAndGetSessionAndWindowId() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (this.config.__preview_experimental_cookieless_mode) throw Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
                    var i = t || (new Date).getTime(),
                        [s, r, n] = this._getSessionId(),
                        o = this._getWindowId(),
                        a = Y(n) && n > 0 && Math.abs(i - n) > 864e5,
                        l = !1,
                        c = !r,
                        u = !e && Math.abs(i - s) > this.sessionTimeoutMs;
                    c || u || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), sz.info("new session ID generated", {
                        sessionId: r,
                        windowId: o,
                        changeReason: {
                            noSessionId: c,
                            activityTimeout: u,
                            sessionPastMaximumLength: a
                        }
                    }), n = i, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
                    var d = 0 === s || !e || a ? i : s,
                        h = 0 === n ? (new Date).getTime() : n;
                    return this._setWindowId(o), this._setSessionId(r, d, h), e || this.resetIdleTimer(), l && this._sessionIdChangedHandlers.forEach(e => e(r, o, l ? {
                        noSessionId: c,
                        activityTimeout: u,
                        sessionPastMaximumLength: a
                    } : void 0)), {
                        sessionId: r,
                        windowId: o,
                        sessionStartTimestamp: h,
                        changeReason: l ? {
                            noSessionId: c,
                            activityTimeout: u,
                            sessionPastMaximumLength: a
                        } : void 0,
                        lastActivityTimestamp: s
                    }
                }
                resetIdleTimer() {
                    clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout(() => {
                        this.resetSessionId()
                    }, 1.1 * this.sessionTimeoutMs)
                }
            }! function(e) {
                e.US = "us", e.EU = "eu", e.CUSTOM = "custom"
            }(sU || (sU = {}));
            var sW = "i.posthog.com";
            class sV {
                constructor(e) {
                    ea(this, "_regionCache", {}), this.instance = e
                }
                get apiHost() {
                    var e = this.instance.config.api_host.trim().replace(/\/$/, "");
                    return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e
                }
                get uiHost() {
                    var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
                    return t || (t = this.apiHost.replace(".".concat(sW), ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t
                }
                get region() {
                    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = sU.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = sU.EU : this._regionCache[this.apiHost] = sU.CUSTOM), this._regionCache[this.apiHost]
                }
                endpointFor(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return this.uiHost + t;
                    if (this.region === sU.CUSTOM) return this.apiHost + t;
                    var i = sW + t;
                    switch (e) {
                        case "assets":
                            return "https://".concat(this.region, "-assets.").concat(i);
                        case "api":
                            return "https://".concat(this.region, ".").concat(i)
                    }
                }
            }
            var sG = "posthog-js";

            function sJ(e) {
                var {
                    organization: t,
                    projectId: i,
                    prefix: s,
                    severityAllowList: r = ["error"]
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n => {
                    if (!("*" === r || r.includes(n.level)) || !e.__loaded) return n;
                    n.tags || (n.tags = {});
                    var o, a, l, c, u, d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
                    n.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (n.tags["PostHog Recording URL"] = e.get_session_replay_url({
                        withTimestamp: !0
                    }));
                    var h = (null === (o = n.exception) || void 0 === o ? void 0 : o.values) || [];
                    h.forEach(e => {
                        e.stacktrace && (e.stacktrace.type = "raw", e.stacktrace.frames.forEach(e => {
                            e.platform = "web:javascript"
                        }))
                    });
                    var _ = {
                        $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || n.message,
                        $exception_type: null === (l = h[0]) || void 0 === l ? void 0 : l.type,
                        $exception_personURL: d,
                        $exception_level: n.level,
                        $exception_list: h,
                        $sentry_event_id: n.event_id,
                        $sentry_exception: n.exception,
                        $sentry_exception_message: (null === (c = h[0]) || void 0 === c ? void 0 : c.value) || n.message,
                        $sentry_exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
                        $sentry_tags: n.tags
                    };
                    return t && i && (_.$sentry_url = (s || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + n.event_id), e.exceptions.sendExceptionEvent(_), n
                }
            }
            class sY {
                constructor(e, t, i, s, r) {
                    this.name = sG, this.setupOnce = function(n) {
                        n(sJ(e, {
                            organization: t,
                            projectId: i,
                            prefix: s,
                            severityAllowList: r
                        }))
                    }
                }
            }
            var sK = ei("[SegmentIntegration]");
            class sX {
                constructor(e) {
                    this._instance = e
                }
                doPageView(e, t) {
                    var i, s = this._previousPageViewProperties(e, t);
                    return this._currentPageview = {
                        pathname: null !== (i = null == r ? void 0 : r.location.pathname) && void 0 !== i ? i : "",
                        pageViewId: t,
                        timestamp: e
                    }, this._instance.scrollManager.resetContext(), s
                }
                doPageLeave(e) {
                    var t;
                    return this._previousPageViewProperties(e, null === (t = this._currentPageview) || void 0 === t ? void 0 : t.pageViewId)
                }
                doEvent() {
                    var e;
                    return {
                        $pageview_id: null === (e = this._currentPageview) || void 0 === e ? void 0 : e.pageViewId
                    }
                }
                _previousPageViewProperties(e, t) {
                    var i = this._currentPageview;
                    if (!i) return {
                        $pageview_id: t
                    };
                    var s = {
                            $pageview_id: t,
                            $prev_pageview_id: i.pageViewId
                        },
                        r = this._instance.scrollManager.getContext();
                    if (r && !this._instance.config.disable_scroll_properties) {
                        var {
                            maxScrollHeight: n,
                            lastScrollY: o,
                            maxScrollY: a,
                            maxContentHeight: l,
                            lastContentY: c,
                            maxContentY: u
                        } = r;
                        if (!(j(n) || j(o) || j(a) || j(l) || j(c) || j(u))) {
                            n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), c = Math.ceil(c), u = Math.ceil(u);
                            var d = n <= 1 ? 1 : iz(o / n, 0, 1),
                                h = n <= 1 ? 1 : iz(a / n, 0, 1),
                                _ = l <= 1 ? 1 : iz(c / l, 0, 1),
                                p = l <= 1 ? 1 : iz(u / l, 0, 1);
                            s = k(s, {
                                $prev_pageview_last_scroll: o,
                                $prev_pageview_last_scroll_percentage: d,
                                $prev_pageview_max_scroll: a,
                                $prev_pageview_max_scroll_percentage: h,
                                $prev_pageview_last_content: c,
                                $prev_pageview_last_content_percentage: _,
                                $prev_pageview_max_content: u,
                                $prev_pageview_max_content_percentage: p
                            })
                        }
                    }
                    return i.pathname && (s.$prev_pageview_pathname = i.pathname), i.timestamp && (s.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3), s
                }
            }
            var sQ, sZ, s0, s1, s2, s3, s5, s6, s8 = {},
                s4 = [],
                s7 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                s9 = Array.isArray;

            function re(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            }

            function rt(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function ri(e, t, i, s, r) {
                var n = {
                    type: e,
                    props: t,
                    key: i,
                    ref: s,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == r ? ++s0 : r,
                    __i: -1,
                    __u: 0
                };
                return null == r && null != sZ.vnode && sZ.vnode(n), n
            }

            function rs(e) {
                return e.children
            }

            function rr(e, t) {
                this.props = e, this.context = t
            }

            function rn(e, t) {
                if (null == t) return e.__ ? rn(e.__, e.__i + 1) : null;
                for (var i; t < e.__k.length; t++)
                    if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
                return "function" == typeof e.type ? rn(e) : null
            }

            function ro(e) {
                (!e.__d && (e.__d = !0) && s1.push(e) && !ra.__r++ || s2 !== sZ.debounceRendering) && ((s2 = sZ.debounceRendering) || s3)(ra)
            }

            function ra() {
                var e, t, i, s, r, n, o, a, l;
                for (s1.sort(s5); e = s1.shift();) e.__d && (t = s1.length, s = void 0, n = (r = (i = e).__v).__e, a = [], l = [], (o = i.__P) && ((s = re({}, r)).__v = r.__v + 1, sZ.vnode && sZ.vnode(s), r_(o, s, r, i.__n, void 0 !== o.ownerSVGElement, 32 & r.__u ? [n] : null, a, null == n ? rn(r) : n, !!(32 & r.__u), l), s.__.__k[s.__i] = s, function(e, t, i) {
                    t.__d = void 0;
                    for (var s = 0; s < i.length; s++) rp(i[s], i[++s], i[++s]);
                    sZ.__c && sZ.__c(t, e), e.some(function(t) {
                        try {
                            e = t.__h, t.__h = [], e.some(function(e) {
                                e.call(t)
                            })
                        } catch (e) {
                            sZ.__e(e, t.__v)
                        }
                    })
                }(a, s, l), s.__e != n && function e(t) {
                    var i, s;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, i = 0; i < t.__k.length; i++)
                            if (null != (s = t.__k[i]) && null != s.__e) {
                                t.__e = t.__c.base = s.__e;
                                break
                            }
                        return e(t)
                    }
                }(s)), s1.length > t && s1.sort(s5));
                ra.__r = 0
            }

            function rl(e, t, i, s, r, n, o, a, l, c, u) {
                var d, h, _, p, g, v = s && s.__k || s4,
                    f = t.length;
                for (i.__d = l, function(e, t, i) {
                        var s, r, n, o, a, l = t.length,
                            c = i.length,
                            u = c,
                            d = 0;
                        for (e.__k = [], s = 0; s < l; s++) null != (r = e.__k[s] = null == (r = t[s]) || "boolean" == typeof r || "function" == typeof r ? null : "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? ri(null, r, null, null, r) : s9(r) ? ri(rs, {
                            children: r
                        }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? ri(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) ? (r.__ = e, r.__b = e.__b + 1, a = function(e, t, i, s) {
                            var r = e.key,
                                n = e.type,
                                o = i - 1,
                                a = i + 1,
                                l = t[i];
                            if (null === l || l && r == l.key && n === l.type) return i;
                            if (s > +(null != l && 0 == (131072 & l.__u)))
                                for (; o >= 0 || a < t.length;) {
                                    if (o >= 0) {
                                        if ((l = t[o]) && 0 == (131072 & l.__u) && r == l.key && n === l.type) return o;
                                        o--
                                    }
                                    if (a < t.length) {
                                        if ((l = t[a]) && 0 == (131072 & l.__u) && r == l.key && n === l.type) return a;
                                        a++
                                    }
                                }
                            return -1
                        }(r, i, o = s + d, u), r.__i = a, n = null, -1 !== a && (u--, (n = i[a]) && (n.__u |= 131072)), null == n || null === n.__v ? (-1 == a && d--, "function" != typeof r.type && (r.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? u > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, a !== s + d && (r.__u |= 65536))) : (n = i[s]) && null == n.key && n.__e && (n.__e == e.__d && (e.__d = rn(n)), rg(n, n, !1), i[s] = null, u--);
                        if (u)
                            for (s = 0; s < c; s++) null != (n = i[s]) && 0 == (131072 & n.__u) && (n.__e == e.__d && (e.__d = rn(n)), rg(n, n))
                    }(i, t, v), l = i.__d, d = 0; d < f; d++) null != (_ = i.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (h = -1 === _.__i ? s8 : v[_.__i] || s8, _.__i = d, r_(e, _, h, r, n, o, a, l, c, u), p = _.__e, _.ref && h.ref != _.ref && (h.ref && rp(h.ref, null, _), u.push(_.ref, _.__c || p, _)), null == g && null != p && (g = p), 65536 & _.__u || h.__k === _.__k ? l = function e(t, i, s) {
                    var r, n;
                    if ("function" == typeof t.type) {
                        for (r = t.__k, n = 0; r && n < r.length; n++) r[n] && (r[n].__ = t, i = e(r[n], i, s));
                        return i
                    }
                    return t.__e != i && (s.insertBefore(t.__e, i || null), i = t.__e), i && i.nextSibling
                }(_, l, e) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : p && (l = p.nextSibling), _.__d = void 0, _.__u &= -196609);
                i.__d = l, i.__e = g
            }

            function rc(e, t, i) {
                "-" === t[0] ? e.setProperty(t, null == i ? "" : i) : e[t] = null == i ? "" : "number" != typeof i || s7.test(t) ? i : i + "px"
            }

            function ru(e, t, i, s, r) {
                var n;
                e: if ("style" === t)
                    if ("string" == typeof i) e.style.cssText = i;
                    else {
                        if ("string" == typeof s && (e.style.cssText = s = ""), s)
                            for (t in s) i && t in i || rc(e.style, t, "");
                        if (i)
                            for (t in i) s && i[t] === s[t] || rc(e.style, t, i[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) n = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = i, i ? s ? i.u = s.u : (i.u = Date.now(), e.addEventListener(t, n ? rh : rd, n)) : e.removeEventListener(t, n ? rh : rd, n);
                else {
                    if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == i ? "" : i;
                        break e
                    } catch (e) {}
                    "function" == typeof i || (null == i || !1 === i && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, i))
                }
            }

            function rd(e) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u) return
                } else e.t = Date.now();
                return t(sZ.event ? sZ.event(e) : e)
            }

            function rh(e) {
                return this.l[e.type + !0](sZ.event ? sZ.event(e) : e)
            }

            function r_(e, t, i, s, r, n, o, a, l, c) {
                var u, d, h, _, p, g, v, f, m, b, y, w, S, k, E, x = t.type;
                if (void 0 !== t.constructor) return null;
                128 & i.__u && (l = !!(32 & i.__u), n = [a = t.__e = i.__e]), (u = sZ.__b) && u(t);
                e: if ("function" == typeof x) try {
                    if (f = t.props, m = (u = x.contextType) && s[u.__c], b = u ? m ? m.props.value : u.__ : s, i.__c ? v = (d = t.__c = i.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(f, b) : (t.__c = d = new rr(f, b), d.constructor = x, d.render = rv), m && m.sub(d), d.props = f, d.state || (d.state = {}), d.context = b, d.__n = s, h = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = re({}, d.__s)), re(d.__s, x.getDerivedStateFromProps(f, d.__s))), _ = d.props, p = d.state, d.__v = t, h) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == x.getDerivedStateFromProps && f !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, b), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d.__s, b) || t.__v === i.__v)) {
                            for (t.__v !== i.__v && (d.props = f, d.state = d.__s, d.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), y = 0; y < d._sb.length; y++) d.__h.push(d._sb[y]);
                            d._sb = [], d.__h.length && o.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(f, d.__s, b), null != d.componentDidUpdate && d.__h.push(function() {
                            d.componentDidUpdate(_, p, g)
                        })
                    }
                    if (d.context = b, d.props = f, d.__P = e, d.__e = !1, w = sZ.__r, S = 0, "prototype" in x && x.prototype.render) {
                        for (d.state = d.__s, d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                        d._sb = []
                    } else
                        do d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++S < 25);
                    d.state = d.__s, null != d.getChildContext && (s = re(re({}, s), d.getChildContext())), h || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(_, p)), rl(e, s9(E = null != u && u.type === rs && null == u.key ? u.props.children : u) ? E : [E], t, i, s, r, n, o, a, l, c), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), v && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null, l || null != n ? (t.__e = a, t.__u |= l ? 160 : 32, n[n.indexOf(a)] = null) : (t.__e = i.__e, t.__k = i.__k), sZ.__e(e, t, i)
                } else null == n && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = function(e, t, i, s, r, n, o, a, l) {
                    var c, u, d, h, _, p, g, v = i.props,
                        f = t.props,
                        m = t.type;
                    if ("svg" === m && (r = !0), null != n) {
                        for (c = 0; c < n.length; c++)
                            if ((_ = n[c]) && "setAttribute" in _ == !!m && (m ? _.localName === m : 3 === _.nodeType)) {
                                e = _, n[c] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === m) return document.createTextNode(f);
                        e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, f.is && f), n = null, a = !1
                    }
                    if (null === m) v === f || a && e.data === f || (e.data = f);
                    else {
                        if (n = n && sQ.call(e.childNodes), v = i.props || s8, !a && null != n)
                            for (v = {}, c = 0; c < e.attributes.length; c++) v[(_ = e.attributes[c]).name] = _.value;
                        for (c in v) _ = v[c], "children" == c || ("dangerouslySetInnerHTML" == c ? d = _ : "key" === c || c in f || ru(e, c, null, _, r));
                        for (c in f) _ = f[c], "children" == c ? h = _ : "dangerouslySetInnerHTML" == c ? u = _ : "value" == c ? p = _ : "checked" == c ? g = _ : "key" === c || a && "function" != typeof _ || v[c] === _ || ru(e, c, _, v[c], r);
                        if (u) a || d && (u.__html === d.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
                        else if (d && (e.innerHTML = ""), rl(e, s9(h) ? h : [h], t, i, s, r && "foreignObject" !== m, n, o, n ? n[0] : i.__k && rn(i, 0), a, l), null != n)
                            for (c = n.length; c--;) null != n[c] && rt(n[c]);
                        a || (c = "value", void 0 === p || p === e[c] && ("progress" !== m || p) && ("option" !== m || p === v[c]) || ru(e, c, p, v[c], !1), c = "checked", void 0 !== g && g !== e[c] && ru(e, c, g, v[c], !1))
                    }
                    return e
                }(i.__e, t, i, s, r, n, o, l, c);
                (u = sZ.diffed) && u(t)
            }

            function rp(e, t, i) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    sZ.__e(e, i)
                }
            }

            function rg(e, t, i) {
                var s, r;
                if (sZ.unmount && sZ.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || rp(s, null, t)), null != (s = e.__c)) {
                    if (s.componentWillUnmount) try {
                        s.componentWillUnmount()
                    } catch (e) {
                        sZ.__e(e, t)
                    }
                    s.base = s.__P = null, e.__c = void 0
                }
                if (s = e.__k)
                    for (r = 0; r < s.length; r++) s[r] && rg(s[r], t, i || "function" != typeof e.type);
                i || null == e.__e || rt(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function rv(e, t, i) {
                return this.constructor(e, i)
            }
            sQ = s4.slice, sZ = {
                    __e: function(e, t, i, s) {
                        for (var r, n, o; t = t.__;)
                            if ((r = t.__c) && !r.__) try {
                                if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, s || {}), o = r.__d), o) return r.__E = r
                            } catch (t) {
                                e = t
                            }
                        throw e
                    }
                }, s0 = 0, rr.prototype.setState = function(e, t) {
                    var i;
                    i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = re({}, this.state), "function" == typeof e && (e = e(re({}, i), this.props)), e && re(i, e), null != e && this.__v && (t && this._sb.push(t), ro(this))
                }, rr.prototype.forceUpdate = function(e) {
                    this.__v && (this.__e = !0, e && this.__h.push(e), ro(this))
                }, rr.prototype.render = rs, s1 = [], s3 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, s5 = function(e, t) {
                    return e.__v.__b - t.__v.__b
                }, ra.__r = 0, s6 = 0,
                function(e, t) {
                    var i = {
                        __c: t = "__cC" + s6++,
                        __: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e) {
                            var i, s;
                            return this.getChildContext || (i = [], (s = {})[t] = this, this.getChildContext = function() {
                                return s
                            }, this.shouldComponentUpdate = function(e) {
                                this.props.value !== e.value && i.some(function(e) {
                                    e.__e = !0, ro(e)
                                })
                            }, this.sub = function(e) {
                                i.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    i.splice(i.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                    i.Provider.__ = i.Consumer.contextType = i
                }({
                    isPreviewMode: !1,
                    previewPageIndex: 0,
                    handleCloseSurveyPopup: () => {},
                    isPopup: !0,
                    onPreviewSubmit: () => {}
                }),
                function(e) {
                    e.Popover = "popover", e.API = "api", e.Widget = "widget"
                }(ni || (ni = {})),
                function(e) {
                    e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", e.Rating = "rating", e.Link = "link"
                }(ns || (ns = {})),
                function(e) {
                    e.NextQuestion = "next_question", e.End = "end", e.ResponseBased = "response_based", e.SpecificQuestion = "specific_question"
                }(nr || (nr = {}));
            class rf {
                constructor() {
                    ea(this, "events", {}), this.events = {}
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
                        this.events[e] = this.events[e].filter(e => e !== t)
                    }
                }
                emit(e, t) {
                    for (var i of this.events[e] || []) i(t);
                    for (var s of this.events["*"] || []) s(e, t)
                }
            }
            class rm {
                constructor(e) {
                    ea(this, "_debugEventEmitter", new rf), ea(this, "checkStep", (e, t) => this.checkStepEvent(e, t) && this.checkStepUrl(e, t) && this.checkStepElement(e, t)), ea(this, "checkStepEvent", (e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event)), this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set
                }
                init() {
                    var e, t;
                    j(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook) || null === (t = this.instance) || void 0 === t || t._addCaptureHook((e, t) => {
                        this.on(e, t)
                    })
                }
                register(e) {
                    var t, i;
                    if (!j(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach(e => {
                            var t, i;
                            null === (t = this.actionRegistry) || void 0 === t || t.add(e), null === (i = e.steps) || void 0 === i || i.forEach(e => {
                                var t;
                                null === (t = this.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "")
                            })
                        }), null !== (i = this.instance) && void 0 !== i && i.autocapture)) {
                        var s, r = new Set;
                        e.forEach(e => {
                            var t;
                            null === (t = e.steps) || void 0 === t || t.forEach(e => {
                                null != e && e.selector && r.add(null == e ? void 0 : e.selector)
                            })
                        }), null === (s = this.instance) || void 0 === s || s.autocapture.setElementSelectors(r)
                    }
                }
                on(e, t) {
                    var i;
                    null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (i = this.actionRegistry) || void 0 === i ? void 0 : i.size) > 0 && this.actionRegistry.forEach(e => {
                        this.checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name)
                    })
                }
                _addActionHook(e) {
                    this.onAction("actionCaptured", t => e(t))
                }
                checkAction(e, t) {
                    if (null == (null == t ? void 0 : t.steps)) return !1;
                    for (var i of t.steps)
                        if (this.checkStep(e, i)) return !0;
                    return !1
                }
                onAction(e, t) {
                    return this._debugEventEmitter.on(e, t)
                }
                checkStepUrl(e, t) {
                    if (null != t && t.url) {
                        var i, s = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
                        if (!s || "string" != typeof s || !rm.matchString(s, null == t ? void 0 : t.url, (null == t ? void 0 : t.url_matching) || "contains")) return !1
                    }
                    return !0
                }
                static matchString(e, t, i) {
                    switch (i) {
                        case "regex":
                            return !!r && M(e, t);
                        case "exact":
                            return t === e;
                        case "contains":
                            return M(e, rm.escapeStringRegexp(t).replace(/_/g, ".").replace(/%/g, ".*"));
                        default:
                            return !1
                    }
                }
                static escapeStringRegexp(e) {
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                }
                checkStepElement(e, t) {
                    if ((null != t && t.href || null != t && t.tag_name || null != t && t.text) && !this.getElementsList(e).some(e => !(null != t && t.href && !rm.matchString(e.href || "", null == t ? void 0 : t.href, (null == t ? void 0 : t.href_matching) || "exact")) && (null == t || !t.tag_name || e.tag_name === (null == t ? void 0 : t.tag_name)) && !(null != t && t.text && !rm.matchString(e.text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact") && !rm.matchString(e.$el_text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact")))) return !1;
                    if (null != t && t.selector) {
                        var i, s = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
                        if (!s || !s.includes(null == t ? void 0 : t.selector)) return !1
                    }
                    return !0
                }
                getElementsList(e) {
                    return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements
                }
            }
            class rb {
                constructor(e) {
                    this.instance = e, this.eventToSurveys = new Map, this.actionToSurveys = new Map
                }
                register(e) {
                    var t;
                    j(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e))
                }
                setupActionBasedSurveys(e) {
                    var t = e.filter(e => {
                        var t, i, s, r;
                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (i = e.conditions) || void 0 === i || null === (s = i.actions) || void 0 === s || null === (r = s.values) || void 0 === r ? void 0 : r.length) > 0
                    });
                    0 !== t.length && (null == this.actionMatcher && (this.actionMatcher = new rm(this.instance), this.actionMatcher.init(), this.actionMatcher._addActionHook(e => {
                        this.onAction(e)
                    })), t.forEach(e => {
                        var t, i, s, r, n, o, a, l, c, u;
                        e.conditions && null !== (t = e.conditions) && void 0 !== t && t.actions && null !== (i = e.conditions) && void 0 !== i && null !== (s = i.actions) && void 0 !== s && s.values && (null === (r = e.conditions) || void 0 === r || null === (n = r.actions) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 && (null === (a = this.actionMatcher) || void 0 === a || a.register(e.conditions.actions.values), null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u || u.forEach(t => {
                            if (t && t.name) {
                                var i = this.actionToSurveys.get(t.name);
                                i && i.push(e.id), this.actionToSurveys.set(t.name, i || [e.id])
                            }
                        }))
                    }))
                }
                setupEventBasedSurveys(e) {
                    var t;
                    0 !== e.filter(e => {
                        var t, i, s, r;
                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s || null === (r = s.values) || void 0 === r ? void 0 : r.length) > 0
                    }).length && (null === (t = this.instance) || void 0 === t || t._addCaptureHook((e, t) => {
                        this.onEvent(e, t)
                    }), e.forEach(e => {
                        var t, i, s;
                        null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (s = i.values) || void 0 === s || s.forEach(t => {
                            if (t && t.name) {
                                var i = this.eventToSurveys.get(t.name);
                                i && i.push(e.id), this.eventToSurveys.set(t.name, i || [e.id])
                            }
                        })
                    }))
                }
                onEvent(e, t) {
                    var i, s, r = (null === (i = this.instance) || void 0 === i || null === (s = i.persistence) || void 0 === s ? void 0 : s.props[eA]) || [];
                    if (rb.SURVEY_SHOWN_EVENT_NAME == e && t && r.length > 0) {
                        var n, o = null == t || null === (n = t.properties) || void 0 === n ? void 0 : n.$survey_id;
                        if (o) {
                            var a = r.indexOf(o);
                            a >= 0 && (r.splice(a, 1), this._updateActivatedSurveys(r))
                        }
                    } else this.eventToSurveys.has(e) && this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e) || []))
                }
                onAction(e) {
                    var t, i, s = (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i ? void 0 : i.props[eA]) || [];
                    this.actionToSurveys.has(e) && this._updateActivatedSurveys(s.concat(this.actionToSurveys.get(e) || []))
                }
                _updateActivatedSurveys(e) {
                    var t, i;
                    null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                        [eA]: [...new Set(e)]
                    })
                }
                getSurveys() {
                    var e, t;
                    return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[eA]) || []
                }
                getEventToSurveys() {
                    return this.eventToSurveys
                }
                _getActionMatcher() {
                    return this.actionMatcher
                }
            }
            ea(rb, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
            var ry = ei("[Surveys]"),
                rw = {
                    icontains: (e, t) => e.some(e => t.toLowerCase().includes(e.toLowerCase())),
                    not_icontains: (e, t) => e.every(e => !t.toLowerCase().includes(e.toLowerCase())),
                    regex: (e, t) => e.some(e => M(t, e)),
                    not_regex: (e, t) => e.every(e => !M(t, e)),
                    exact: (e, t) => e.some(e => t === e),
                    is_not: (e, t) => e.every(e => t !== e)
                };

            function rS(e, t, i) {
                var s, r = e.questions[t],
                    n = t + 1;
                if (null === (s = r.branching) || void 0 === s || !s.type) return t === e.questions.length - 1 ? nr.End : n;
                if (r.branching.type === nr.End) return nr.End;
                if (r.branching.type === nr.SpecificQuestion) {
                    if (Number.isInteger(r.branching.index)) return r.branching.index
                } else if (r.branching.type === nr.ResponseBased) {
                    if (r.type === ns.SingleChoice) {
                        var o, a, l = r.choices.indexOf("".concat(i));
                        if (null !== (o = r.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(l)) {
                            var c = r.branching.responseValues[l];
                            return Number.isInteger(c) ? c : c === nr.End ? nr.End : n
                        }
                    } else if (r.type === ns.Rating) {
                        if ("number" != typeof i || !Number.isInteger(i)) throw Error("The response type must be an integer");
                        var u, d, h = function(e, t) {
                            if (3 === t) {
                                if (e < 1 || e > 3) throw Error("The response must be in range 1-3");
                                return 1 === e ? "negative" : 2 === e ? "neutral" : "positive"
                            }
                            if (5 === t) {
                                if (e < 1 || e > 5) throw Error("The response must be in range 1-5");
                                return e <= 2 ? "negative" : 3 === e ? "neutral" : "positive"
                            }
                            if (7 === t) {
                                if (e < 1 || e > 7) throw Error("The response must be in range 1-7");
                                return e <= 3 ? "negative" : 4 === e ? "neutral" : "positive"
                            }
                            if (10 === t) {
                                if (e < 0 || e > 10) throw Error("The response must be in range 0-10");
                                return e <= 6 ? "detractors" : e <= 8 ? "passives" : "promoters"
                            }
                            throw Error("The scale must be one of: 3, 5, 7, 10")
                        }(i, r.scale);
                        if (null !== (u = r.branching) && void 0 !== u && null !== (d = u.responseValues) && void 0 !== d && d.hasOwnProperty(h)) {
                            var _ = r.branching.responseValues[h];
                            return Number.isInteger(_) ? _ : _ === nr.End ? nr.End : n
                        }
                    }
                    return n
                }
                return ry.warn("Falling back to next question index due to unexpected branching type"), n
            }

            function rk(e) {
                return null != e ? e : "icontains"
            }
            class rE {
                constructor(e) {
                    ea(this, "getNextSurveyStep", rS), this.instance = e, this._surveyEventReceiver = null
                }
                onRemoteConfig(e) {
                    this._decideServerResponse = !!e.surveys, ry.info("decideServerResponse set to ".concat(this._decideServerResponse)), this.loadIfEnabled()
                }
                reset() {
                    localStorage.removeItem("lastSeenSurveyDate"), (() => {
                        for (var e = [], t = 0; t < localStorage.length; t++) {
                            var i = localStorage.key(t);
                            null != i && i.startsWith("seenSurvey_") && e.push(i)
                        }
                        return e
                    })().forEach(e => localStorage.removeItem(e))
                }
                loadIfEnabled() {
                    if (!this._surveyManager)
                        if (this.instance.config.disable_surveys) ry.info("Disabled. Not loading surveys.");
                        else {
                            var e = null == v ? void 0 : v.__PosthogExtensions__;
                            if (e) {
                                var t = e.generateSurveys;
                                if (this._decideServerResponse)
                                    if (null == this._surveyEventReceiver && (this._surveyEventReceiver = new rb(this.instance)), t) this._surveyManager = t(this.instance);
                                    else {
                                        var i = e.loadExternalDependency;
                                        i ? i(this.instance, "surveys", t => {
                                            var i;
                                            t ? ry.error("Could not load surveys script", t) : this._surveyManager = null === (i = e.generateSurveys) || void 0 === i ? void 0 : i.call(e, this.instance)
                                        }) : ry.error("PostHog loadExternalDependency extension not found. Cannot load remote config.")
                                    }
                                else ry.warn("Decide not loaded yet. Not loading surveys.")
                            } else ry.error("PostHog Extensions not found.")
                        }
                }
                getSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.instance.config.disable_surveys) return ry.info("Disabled. Not loading surveys."), e([]);
                    null == this._surveyEventReceiver && (this._surveyEventReceiver = new rb(this.instance));
                    var i = this.instance.get_property(eO);
                    if (i && !t) return e(i);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        callback: t => {
                            var i, s = t.statusCode;
                            if (200 !== s || !t.json) return ry.error("Surveys API could not be loaded, status: ".concat(s)), e([]);
                            var r, n = t.json.surveys || [],
                                o = n.filter(e => {
                                    var t, i, s, r, n, o, a, l, c, u, d, h;
                                    return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s ? void 0 : s.values) && (null === (r = e.conditions) || void 0 === r || null === (n = r.events) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (u = e.conditions) || void 0 === u || null === (d = u.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0
                                });
                            return o.length > 0 && (null === (r = this._surveyEventReceiver) || void 0 === r || r.register(o)), null === (i = this.instance.persistence) || void 0 === i || i.register({
                                [eO]: n
                            }), e(n)
                        }
                    })
                }
                isSurveyFeatureFlagEnabled(e) {
                    return !e || this.instance.featureFlags.isFeatureEnabled(e)
                }
                getActiveMatchingSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.getSurveys(t => {
                        var i, s = t.filter(e => !(!e.start_date || e.end_date)).filter(e => {
                                if (!e.conditions) return !0;
                                var t, i = function(e) {
                                        if (null === (t = e.conditions) || void 0 === t || !t.url) return !0;
                                        var t, i, s, n = null == r || null === (i = r.location) || void 0 === i ? void 0 : i.href;
                                        if (!n) return !1;
                                        var o = [e.conditions.url];
                                        return rw[rk(null === (s = e.conditions) || void 0 === s ? void 0 : s.urlMatchType)](o, n)
                                    }(e),
                                    s = null === (t = e.conditions) || void 0 === t || !t.selector || (null == u ? void 0 : u.querySelector(e.conditions.selector)),
                                    n = function(e) {
                                        if (null === (t = e.conditions) || void 0 === t || !t.deviceTypes) return !0;
                                        if (!g) return !1;
                                        var t, i, s = ii.deviceType(g);
                                        return rw[rk(null === (i = e.conditions) || void 0 === i ? void 0 : i.deviceTypesMatchType)](e.conditions.deviceTypes, s)
                                    }(e);
                                return i && s && n
                            }),
                            n = null === (i = this._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys();
                        return e(s.filter(e => {
                            if (!(e.linked_flag_key || e.targeting_flag_key || e.internal_targeting_flag_key || null !== (t = e.feature_flag_keys) && void 0 !== t && t.length)) return !0;
                            var t, i, s, r, o, a, l, c, u, d = this.isSurveyFeatureFlagEnabled(e.linked_flag_key),
                                h = this.isSurveyFeatureFlagEnabled(e.targeting_flag_key),
                                _ = (null !== (i = null === (s = e.conditions) || void 0 === s || null === (r = s.events) || void 0 === r || null === (o = r.values) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0) > 0,
                                p = (null !== (a = null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0) > 0,
                                g = !_ && !p || (null == n ? void 0 : n.includes(e.id)),
                                v = this._canActivateRepeatedly(e) || this.isSurveyFeatureFlagEnabled(e.internal_targeting_flag_key),
                                f = this.checkFlags(e);
                            return d && h && v && g && f
                        }))
                    }, t)
                }
                checkFlags(e) {
                    var t;
                    return null === (t = e.feature_flag_keys) || void 0 === t || !t.length || e.feature_flag_keys.every(e => {
                        var {
                            key: t,
                            value: i
                        } = e;
                        return !t || !i || this.instance.featureFlags.isFeatureEnabled(i)
                    })
                }
                _canActivateRepeatedly(e) {
                    var t;
                    return J(null === (t = v.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (ry.warn("init was not called"), !1) : v.__PosthogExtensions__.canActivateRepeatedly(e)
                }
                canRenderSurvey(e) {
                    J(this._surveyManager) ? ry.warn("init was not called") : this.getSurveys(t => {
                        var i = t.filter(t => t.id === e)[0];
                        this._surveyManager.canRenderSurvey(i)
                    })
                }
                renderSurvey(e, t) {
                    J(this._surveyManager) ? ry.warn("init was not called") : this.getSurveys(i => {
                        var s = i.filter(t => t.id === e)[0];
                        this._surveyManager.renderSurvey(s, null == u ? void 0 : u.querySelector(t))
                    })
                }
            }
            var rx = ei("[RateLimiter]");
            class rI {
                constructor(e) {
                    var t, i;
                    ea(this, "serverLimits", {}), ea(this, "lastEventRateLimited", !1), ea(this, "checkForLimiting", e => {
                        var t = e.text;
                        if (t && t.length) try {
                            (JSON.parse(t).quota_limited || []).forEach(e => {
                                rx.info("".concat(e || "events", " is quota limited.")), this.serverLimits[e] = (new Date).getTime() + 6e4
                            })
                        } catch (e) {
                            return void rx.warn('could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                                text: t
                            })
                        }
                    }), this.instance = e, this.captureEventsPerSecond = (null === (t = e.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i = e.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
                }
                clientRateLimitContext() {
                    var e, t, i, s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = (new Date).getTime(),
                        n = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(eN)) && void 0 !== e ? e : {
                            tokens: this.captureEventsBurstLimit,
                            last: r
                        };
                    n.tokens += (r - n.last) / 1e3 * this.captureEventsPerSecond, n.last = r, n.tokens > this.captureEventsBurstLimit && (n.tokens = this.captureEventsBurstLimit);
                    var o = n.tokens < 1;
                    return o || s || (n.tokens = Math.max(0, n.tokens - 1)), !o || this.lastEventRateLimited || s || this.instance.capture("$$client_ingestion_warning", {
                        $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
                    }, {
                        skip_client_rate_limiting: !0
                    }), this.lastEventRateLimited = o, null === (i = this.instance.persistence) || void 0 === i || i.set_property(eN, n), {
                        isRateLimited: o,
                        remainingTokens: n.tokens
                    }
                }
                isServerRateLimited(e) {
                    var t = this.serverLimits[e || "events"] || !1;
                    return !1 !== t && (new Date).getTime() < t
                }
            }
            var rC = e => {
                var t = null == e ? void 0 : e.config;
                return eo({
                    initialPathName: (null == d ? void 0 : d.pathname) || "",
                    referringDomain: ii.referringDomain()
                }, ii.campaignParams({
                    customTrackedParams: null == t ? void 0 : t.custom_campaign_params,
                    maskPersonalDataProperties: null == t ? void 0 : t.mask_personal_data_properties,
                    customPersonalDataProperties: null == t ? void 0 : t.custom_personal_data_properties
                }))
            };
            class rP {
                constructor(e, t, i, s) {
                    ea(this, "_onSessionIdCallback", e => {
                        var t = this._getStoredProps();
                        if (!t || t.sessionId !== e) {
                            var i = {
                                sessionId: e,
                                props: this._sessionSourceParamGenerator(this.instance)
                            };
                            this._persistence.register({
                                [eD]: i
                            })
                        }
                    }), this.instance = e, this._sessionIdManager = t, this._persistence = i, this._sessionSourceParamGenerator = s || rC, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
                }
                _getStoredProps() {
                    return this._persistence.props[eD]
                }
                getSessionProps() {
                    var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                    return t ? {
                        $client_session_initial_referring_host: t.referringDomain,
                        $client_session_initial_pathname: t.initialPathName,
                        $client_session_initial_utm_source: t.utm_source,
                        $client_session_initial_utm_campaign: t.utm_campaign,
                        $client_session_initial_utm_medium: t.utm_medium,
                        $client_session_initial_utm_content: t.utm_content,
                        $client_session_initial_utm_term: t.utm_term
                    } : {}
                }
            }
            var rF = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "better uptime bot", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "gptbot", "oai-searchbot", "chatgpt-user", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
                rR = function(e, t) {
                    if (!e) return !1;
                    var i = e.toLowerCase();
                    return rF.concat(t || []).some(e => {
                        var t = e.toLowerCase();
                        return -1 !== i.indexOf(t)
                    })
                },
                rT = function(e, t) {
                    if (!e) return !1;
                    var i = e.userAgent;
                    if (i && rR(i, t)) return !0;
                    try {
                        var s = null == e ? void 0 : e.userAgentData;
                        if (null != s && s.brands && s.brands.some(e => rR(null == e ? void 0 : e.brand, t))) return !0
                    } catch (e) {}
                    return !!e.webdriver
                };
            class r$ {
                constructor() {
                    this.clicks = []
                }
                isRageClick(e, t, i) {
                    var s = this.clicks[this.clicks.length - 1];
                    if (s && Math.abs(e - s.x) + Math.abs(t - s.y) < 30 && i - s.timestamp < 1e3) {
                        if (this.clicks.push({
                                x: e,
                                y: t,
                                timestamp: i
                            }), 3 === this.clicks.length) return !0
                    } else this.clicks = [{
                        x: e,
                        y: t,
                        timestamp: i
                    }];
                    return !1
                }
            }
            var rO = ei("[Dead Clicks]"),
                rA = () => !0,
                rM = e => {
                    var t, i = !(null === (t = e.instance.persistence) || void 0 === t || !t.get_property(ev)),
                        s = e.instance.config.capture_dead_clicks;
                    return K(s) ? s : i
                };
            class rL {
                get lazyLoadedDeadClicksAutocapture() {
                    return this._lazyLoadedDeadClicksAutocapture
                }
                constructor(e, t, i) {
                    this.instance = e, this.isEnabled = t, this.onCapture = i, this.startIfEnabled()
                }
                onRemoteConfig(e) {
                    this.instance.persistence && this.instance.persistence.register({
                        [ev]: null == e ? void 0 : e.captureDeadClicks
                    }), this.startIfEnabled()
                }
                startIfEnabled() {
                    this.isEnabled(this) && this.loadScript(() => {
                        this.start()
                    })
                }
                loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.initDeadClicksAutocapture && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "dead-clicks-autocapture", t => {
                        t ? rO.error("failed to load script", t) : e()
                    })
                }
                start() {
                    var e;
                    if (u) {
                        if (!this._lazyLoadedDeadClicksAutocapture && null !== (e = v.__PosthogExtensions__) && void 0 !== e && e.initDeadClicksAutocapture) {
                            var t = U(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                            t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this._lazyLoadedDeadClicksAutocapture.start(u), rO.info("starting...")
                        }
                    } else rO.error("`document` not found. Cannot start.")
                }
                stop() {
                    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, rO.info("stopping..."))
                }
            }
            var rD = ei("[Heatmaps]");

            function rN(e) {
                return U(e) && "clientX" in e && "clientY" in e && Y(e.clientX) && Y(e.clientY)
            }
            class rq {
                constructor(e) {
                    var t;
                    ea(this, "rageclicks", new r$), ea(this, "_enabledServerSide", !1), ea(this, "_initialized", !1), ea(this, "_flushInterval", null), this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[e_])
                }
                get flushIntervalMilliseconds() {
                    var e = 5e3;
                    return U(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e
                }
                get isEnabled() {
                    return j(this.instance.config.capture_heatmaps) ? j(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps
                }
                startIfEnabled() {
                    if (this.isEnabled) this._initialized || (rD.info("starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds));
                    else {
                        var e, t;
                        clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), null === (t = this.deadClicksCapture) || void 0 === t || t.stop(), this.getAndClearBuffer()
                    }
                }
                onRemoteConfig(e) {
                    var t = !!e.heatmaps;
                    this.instance.persistence && this.instance.persistence.register({
                        [e_]: t
                    }), this._enabledServerSide = t, this.startIfEnabled()
                }
                getAndClearBuffer() {
                    var e = this.buffer;
                    return this.buffer = void 0, e
                }
                _onDeadClick(e) {
                    this._onClick(e.originalEvent, "deadclick")
                }
                _setupListeners() {
                    r && u && (T(r, "beforeunload", this.flush.bind(this)), T(u, "click", e => this._onClick(e || (null == r ? void 0 : r.event)), {
                        capture: !0
                    }), T(u, "mousemove", e => this._onMouseMove(e || (null == r ? void 0 : r.event)), {
                        capture: !0
                    }), this.deadClicksCapture = new rL(this.instance, rA, this._onDeadClick.bind(this)), this.deadClicksCapture.startIfEnabled(), this._initialized = !0)
                }
                _getProperties(e, t) {
                    var i = this.instance.scrollManager.scrollY(),
                        s = this.instance.scrollManager.scrollX(),
                        n = this.instance.scrollManager.scrollElement(),
                        o = function(e, t, i) {
                            for (var s = e; s && iu(s) && !id(s, "body") && s !== i;) {
                                if ($(t, null == r ? void 0 : r.getComputedStyle(s).position)) return !0;
                                s = iS(s)
                            }
                            return !1
                        }(iy(e), ["fixed", "sticky"], n);
                    return {
                        x: e.clientX + (o ? 0 : s),
                        y: e.clientY + (o ? 0 : i),
                        target_fixed: o,
                        type: t
                    }
                }
                _onClick(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
                    if (!ic(e.target) && rN(e)) {
                        var s = this._getProperties(e, i);
                        null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(eo(eo({}, s), {}, {
                            type: "rageclick"
                        })), this._capture(s)
                    }
                }
                _onMouseMove(e) {
                    !ic(e.target) && rN(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
                        this._capture(this._getProperties(e, "mousemove"))
                    }, 500))
                }
                _capture(e) {
                    if (r) {
                        var t = r.location.href;
                        this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
                    }
                }
                flush() {
                    this.buffer && !z(this.buffer) && this.instance.capture("$$heatmap", {
                        $heatmap_data: this.getAndClearBuffer()
                    })
                }
            }
            class rB {
                constructor(e) {
                    ea(this, "_updateScrollData", () => {
                        this.context || (this.context = {});
                        var e, t, i, s, r = this.scrollElement(),
                            n = this.scrollY(),
                            o = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0,
                            a = n + ((null == r ? void 0 : r.clientHeight) || 0),
                            l = (null == r ? void 0 : r.scrollHeight) || 0;
                        this.context.lastScrollY = Math.ceil(n), this.context.maxScrollY = Math.max(n, null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0), this.context.maxScrollHeight = Math.max(o, null !== (t = this.context.maxScrollHeight) && void 0 !== t ? t : 0), this.context.lastContentY = a, this.context.maxContentY = Math.max(a, null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0), this.context.maxContentHeight = Math.max(l, null !== (s = this.context.maxContentHeight) && void 0 !== s ? s : 0)
                    }), this.instance = e
                }
                getContext() {
                    return this.context
                }
                resetContext() {
                    var e = this.context;
                    return setTimeout(this._updateScrollData, 0), e
                }
                startMeasuringScrollPosition() {
                    T(r, "scroll", this._updateScrollData, {
                        capture: !0
                    }), T(r, "scrollend", this._updateScrollData, {
                        capture: !0
                    }), T(r, "resize", this._updateScrollData)
                }
                scrollElement() {
                    if (!this.instance.config.scroll_root_selector) return null == r ? void 0 : r.document.documentElement;
                    for (var e of B(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]) {
                        var t = null == r ? void 0 : r.document.querySelector(e);
                        if (t) return t
                    }
                }
                scrollY() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollTop || 0
                    }
                    return r && (r.scrollY || r.pageYOffset || r.document.documentElement.scrollTop) || 0
                }
                scrollX() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollLeft || 0
                    }
                    return r && (r.scrollX || r.pageXOffset || r.document.documentElement.scrollLeft) || 0
                }
            }
            var rH = ei("[AutoCapture]");

            function rU(e, t) {
                return t.length > e ? t.slice(0, e) + "..." : t
            }
            class rz {
                constructor(e) {
                    ea(this, "_initialized", !1), ea(this, "_isDisabledServerSide", null), ea(this, "rageclicks", new r$), ea(this, "_elementsChainAsString", !1), this.instance = e, this._elementSelectors = null
                }
                get config() {
                    var e, t, i = U(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                    return i.url_allowlist = null === (e = i.url_allowlist) || void 0 === e ? void 0 : e.map(e => new RegExp(e)), i.url_ignorelist = null === (t = i.url_ignorelist) || void 0 === t ? void 0 : t.map(e => new RegExp(e)), i
                }
                _addDomEventHandlers() {
                    if (this.isBrowserSupported()) {
                        if (r && u) {
                            var e = e => {
                                e = e || (null == r ? void 0 : r.event);
                                try {
                                    this._captureEvent(e)
                                } catch (e) {
                                    rH.error("Failed to capture event", e)
                                }
                            };
                            if (T(u, "submit", e, {
                                    capture: !0
                                }), T(u, "change", e, {
                                    capture: !0
                                }), T(u, "click", e, {
                                    capture: !0
                                }), this.config.capture_copied_text) {
                                var t = e => {
                                    e = e || (null == r ? void 0 : r.event), this._captureEvent(e, m)
                                };
                                T(u, "copy", t, {
                                    capture: !0
                                }), T(u, "cut", t, {
                                    capture: !0
                                })
                            }
                        }
                    } else rH.info("Disabling Automatic Event Collection because this browser is not supported")
                }
                startIfEnabled() {
                    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
                }
                onRemoteConfig(e) {
                    e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
                        [eh]: !!e.autocapture_opt_out
                    }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
                }
                setElementSelectors(e) {
                    this._elementSelectors = e
                }
                getElementSelectors(e) {
                    var t, i = [];
                    return null === (t = this._elementSelectors) || void 0 === t || t.forEach(t => {
                        var s = null == u ? void 0 : u.querySelectorAll(t);
                        null == s || s.forEach(s => {
                            e === s && i.push(t)
                        })
                    }), i
                }
                get isEnabled() {
                    var e, t, i = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[eh];
                    if (G(this._isDisabledServerSide) && !K(i) && !this.instance.config.advanced_disable_decide) return !1;
                    var s = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
                    return !!this.instance.config.autocapture && !s
                }
                _captureEvent(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
                    if (this.isEnabled) {
                        var i, s = iy(e);
                        ih(s) && (s = s.parentNode || null), "$autocapture" === t && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null !== (i = this.rageclicks) && void 0 !== i && i.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                        var n = t === m;
                        if (s && function(e, t) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = arguments.length > 3 ? arguments[3] : void 0,
                                    n = arguments.length > 4 ? arguments[4] : void 0;
                                if (!r || !e || id(e, "html") || !iu(e) || null != i && i.url_allowlist && !ig(i.url_allowlist) || null != i && i.url_ignorelist && ig(i.url_ignorelist)) return !1;
                                if (null != i && i.dom_event_allowlist) {
                                    var o = i.dom_event_allowlist;
                                    if (o && !o.some(e => t.type === e)) return !1
                                }
                                for (var a = !1, l = [e], c = !0, u = e; u.parentNode && !id(u, "body");)
                                    if (i_(u.parentNode)) l.push(u.parentNode.host), u = u.parentNode.host;
                                    else {
                                        if (!(c = iS(u))) break;
                                        if (s || iw.indexOf(c.tagName.toLowerCase()) > -1) a = !0;
                                        else {
                                            var d = r.getComputedStyle(c);
                                            d && "pointer" === d.getPropertyValue("cursor") && (a = !0)
                                        }
                                        l.push(c), u = c
                                    }
                                if (! function(e, t) {
                                        var i = null == t ? void 0 : t.element_allowlist;
                                        if (j(i)) return !0;
                                        var s = function(e) {
                                            if (i.some(t => e.tagName.toLowerCase() === t)) return {
                                                v: !0
                                            }
                                        };
                                        for (var r of e) {
                                            var n = s(r);
                                            if ("object" == typeof n) return n.v
                                        }
                                        return !1
                                    }(l, i) || ! function(e, t) {
                                        var i = null == t ? void 0 : t.css_selector_allowlist;
                                        if (j(i)) return !0;
                                        var s = function(e) {
                                            if (i.some(t => e.matches(t))) return {
                                                v: !0
                                            }
                                        };
                                        for (var r of e) {
                                            var n = s(r);
                                            if ("object" == typeof n) return n.v
                                        }
                                        return !1
                                    }(l, i)) return !1;
                                var h = r.getComputedStyle(e);
                                if (h && "pointer" === h.getPropertyValue("cursor") && "click" === t.type) return !0;
                                var _ = e.tagName.toLowerCase();
                                switch (_) {
                                    case "html":
                                        return !1;
                                    case "form":
                                        return (n || ["submit"]).indexOf(t.type) >= 0;
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        return (n || ["change", "click"]).indexOf(t.type) >= 0;
                                    default:
                                        return a ? (n || ["click"]).indexOf(t.type) >= 0 : (n || ["click"]).indexOf(t.type) >= 0 && (iw.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"))
                                }
                            }(s, e, this.config, n, n ? ["copy", "cut"] : void 0)) {
                            var {
                                props: o,
                                explicitNoCapture: a
                            } = function(e, t) {
                                for (var i, s, {
                                        e: n,
                                        maskAllElementAttributes: o,
                                        maskAllText: a,
                                        elementAttributeIgnoreList: l,
                                        elementsChainAsString: c
                                    } = t, u = [e], d = e; d.parentNode && !id(d, "body");) i_(d.parentNode) ? (u.push(d.parentNode.host), d = d.parentNode.host) : (u.push(d.parentNode), d = d.parentNode);
                                var h, _ = [],
                                    p = {},
                                    g = !1,
                                    v = !1;
                                if (S(u, e => {
                                        var t = ik(e);
                                        "a" === e.tagName.toLowerCase() && (g = e.getAttribute("href"), g = t && g && iT(g) && g), $(iv(e), "ph-no-capture") && (v = !0), _.push(function(e, t, i, s) {
                                            var r = e.tagName.toLowerCase(),
                                                n = {
                                                    tag_name: r
                                                };
                                            iw.indexOf(r) > -1 && !i && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? n.$el_text = rU(1024, i$(e)) : n.$el_text = rU(1024, ib(e)));
                                            var o = iv(e);
                                            o.length > 0 && (n.classes = o.filter(function(e) {
                                                return "" !== e
                                            })), S(e.attributes, function(i) {
                                                var r;
                                                if ((!iE(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i.name)) && (null == s || !s.includes(i.name)) && !t && iT(i.value) && (!W(r = i.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) {
                                                    var o = i.value;
                                                    "class" === i.name && (o = ip(o).join(" ")), n["attr__" + i.name] = rU(1024, o)
                                                }
                                            });
                                            for (var a = 1, l = 1, c = e; c = function(e) {
                                                    if (e.previousElementSibling) return e.previousElementSibling;
                                                    var t = e;
                                                    do t = t.previousSibling; while (t && !iu(t));
                                                    return t
                                                }(c);) a++, c.tagName === e.tagName && l++;
                                            return n.nth_child = a, n.nth_of_type = l, n
                                        }(e, o, a, l)), k(p, function(e) {
                                            if (!ik(e)) return {};
                                            var t = {};
                                            return S(e.attributes, function(e) {
                                                if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                                                    var i = e.name.replace("data-ph-capture-attribute-", ""),
                                                        s = e.value;
                                                    i && s && iT(s) && (t[i] = s)
                                                }
                                            }), t
                                        }(e))
                                    }), v) return {
                                    props: {},
                                    explicitNoCapture: v
                                };
                                if (a || ("a" === e.tagName.toLowerCase() || "button" === e.tagName.toLowerCase() ? _[0].$el_text = i$(e) : _[0].$el_text = ib(e)), g) {
                                    _[0].attr__href = g;
                                    var f, m, b = null === (f = tc(g)) || void 0 === f ? void 0 : f.host,
                                        y = null == r || null === (m = r.location) || void 0 === m ? void 0 : m.host;
                                    b && y && b !== y && (h = g)
                                }
                                return {
                                    props: k({
                                        $event_type: n.type,
                                        $ce_version: 1
                                    }, c ? {} : {
                                        $elements: _
                                    }, {
                                        $elements_chain: _.map(e => {
                                            var t, i, s, r = {
                                                text: null === (i = e.$el_text) || void 0 === i ? void 0 : i.slice(0, 400),
                                                tag_name: e.tag_name,
                                                href: null === (s = e.attr__href) || void 0 === s ? void 0 : s.slice(0, 2048),
                                                attr_class: (t = e.attr__class) ? B(t) ? t : ip(t) : void 0,
                                                attr_id: e.attr__id,
                                                nth_child: e.nth_child,
                                                nth_of_type: e.nth_of_type,
                                                attributes: {}
                                            };
                                            return x(e).filter(e => {
                                                var [t] = e;
                                                return 0 === t.indexOf("attr__")
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return r.attributes[t] = i
                                            }), r
                                        }).map(e => {
                                            var t, i, s = "";
                                            if (e.tag_name && (s += e.tag_name), e.attr_class)
                                                for (var r of (e.attr_class.sort(), e.attr_class)) s += ".".concat(r.replace(/"/g, ""));
                                            var n = eo(eo(eo(eo({}, e.text ? {
                                                    text: e.text
                                                } : {}), {}, {
                                                    "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                                                    "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
                                                }, e.href ? {
                                                    href: e.href
                                                } : {}), e.attr_id ? {
                                                    attr_id: e.attr_id
                                                } : {}), e.attributes),
                                                o = {};
                                            return x(n).sort((e, t) => {
                                                var [i] = e, [s] = t;
                                                return i.localeCompare(s)
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return o[iO(t.toString())] = iO(i.toString())
                                            }), s += ":", s += x(n).map(e => {
                                                var [t, i] = e;
                                                return "".concat(t, '="').concat(i, '"')
                                            }).join("")
                                        }).join(";")
                                    }, null !== (i = _[0]) && void 0 !== i && i.$el_text ? {
                                        $el_text: null === (s = _[0]) || void 0 === s ? void 0 : s.$el_text
                                    } : {}, h && "click" === n.type ? {
                                        $external_click_url: h
                                    } : {}, p)
                                }
                            }(s, {
                                e: e,
                                maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                                maskAllText: this.instance.config.mask_all_text,
                                elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
                                elementsChainAsString: this._elementsChainAsString
                            });
                            if (a) return !1;
                            var l = this.getElementSelectors(s);
                            if (l && l.length > 0 && (o.$element_selectors = l), t === m) {
                                var c, u = im(null == r || null === (c = r.getSelection()) || void 0 === c ? void 0 : c.toString()),
                                    d = e.type || "clipboard";
                                if (!u) return !1;
                                o.$selected_content = u, o.$copy_type = d
                            }
                            return this.instance.capture(t, o), !0
                        }
                    }
                }
                isBrowserSupported() {
                    return H(null == u ? void 0 : u.querySelectorAll)
                }
            }
            var rj = ei("[TracingHeaders]");
            class rW {
                constructor(e) {
                    ea(this, "_restoreXHRPatch", void 0), ea(this, "_restoreFetchPatch", void 0), ea(this, "_startCapturing", () => {
                        var e, t, i, s;
                        j(this._restoreXHRPatch) && (null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(this.instance.sessionManager)), j(this._restoreFetchPatch) && (null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.tracingHeadersPatchFns) || void 0 === s || s._patchFetch(this.instance.sessionManager))
                    }), this.instance = e
                }
                _loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "tracing-headers", t => {
                        if (t) return rj.error("failed to load script", t);
                        e()
                    })
                }
                startIfEnabledOrStop() {
                    var e, t;
                    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0)
                }
            }! function(e) {
                e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED"
            }(nn || (nn = {}));
            class rV {
                constructor(e) {
                    this.instance = e
                }
                get config() {
                    return this.instance.config
                }
                get consent() {
                    return this.getDnt() ? nn.DENIED : this.storedConsent
                }
                isOptedOut() {
                    return this.consent === nn.DENIED || this.consent === nn.PENDING && this.config.opt_out_capturing_by_default
                }
                isOptedIn() {
                    return !this.isOptedOut()
                }
                optInOut(e) {
                    this.storage.set(this.storageKey, +!!e, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
                }
                reset() {
                    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
                }
                get storageKey() {
                    var {
                        token: e,
                        opt_out_capturing_cookie_prefix: t
                    } = this.instance.config;
                    return (t || "__ph_opt_in_out_") + e
                }
                get storedConsent() {
                    var e = this.storage.get(this.storageKey);
                    return "1" === e ? nn.GRANTED : "0" === e ? nn.DENIED : nn.PENDING
                }
                get storage() {
                    if (!this._storage) {
                        var e = this.config.opt_out_capturing_persistence_type;
                        this._storage = "localStorage" === e ? tt : e9;
                        var t = "localStorage" === e ? e9 : tt;
                        t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
                    }
                    return this._storage
                }
                getDnt() {
                    return !!this.config.respect_dnt && !!R([null == c ? void 0 : c.doNotTrack, null == c ? void 0 : c.msDoNotTrack, v.doNotTrack], e => $([!0, 1, "1", "yes"], e))
                }
            }
            var rG = ei("[ExceptionAutocapture]");
            class rJ {
                constructor(e) {
                    var t;
                    ea(this, "startCapturing", () => {
                        var e, t, i, s;
                        if (r && this.isEnabled && !this.hasHandlers) {
                            var n = null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.errorWrappingFunctions) || void 0 === t ? void 0 : t.wrapOnError,
                                o = null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.errorWrappingFunctions) || void 0 === s ? void 0 : s.wrapUnhandledRejection;
                            if (n && o) try {
                                this.unwrapOnError = n(this.captureException.bind(this)), this.unwrapUnhandledRejection = o(this.captureException.bind(this))
                            } catch (e) {
                                rG.error("failed to start", e), this.stopCapturing()
                            } else rG.error("failed to load error wrapping functions - cannot start")
                        }
                    }), this.instance = e, this.remoteEnabled = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[ep]), this.startIfEnabled()
                }
                get isEnabled() {
                    var e;
                    return K(this.instance.config.capture_exceptions) ? this.instance.config.capture_exceptions : null !== (e = this.remoteEnabled) && void 0 !== e && e
                }
                get hasHandlers() {
                    return !j(this.unwrapOnError)
                }
                startIfEnabled() {
                    this.isEnabled && !this.hasHandlers && (rG.info("enabled, starting..."), this.loadScript(this.startCapturing))
                }
                loadScript(e) {
                    var t, i;
                    this.hasHandlers && e(), null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "exception-autocapture", t => {
                        if (t) return rG.error("failed to load script", t);
                        e()
                    })
                }
                stopCapturing() {
                    var e, t;
                    null === (e = this.unwrapOnError) || void 0 === e || e.call(this), this.unwrapOnError = void 0, null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this), this.unwrapUnhandledRejection = void 0
                }
                onRemoteConfig(e) {
                    var t = e.autocaptureExceptions;
                    this.remoteEnabled = !!t, this.instance.persistence && this.instance.persistence.register({
                        [ep]: this.remoteEnabled
                    }), this.startIfEnabled()
                }
                captureException(e) {
                    var t = this.instance.requestRouter.endpointFor("ui");
                    e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.instance.exceptions.sendExceptionEvent(e)
                }
            }
            var rY = ei("[Web Vitals]");
            class rK {
                constructor(e) {
                    var t;
                    ea(this, "_enabledServerSide", !1), ea(this, "_initialized", !1), ea(this, "buffer", {
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    }), ea(this, "_flushToCapture", () => {
                        clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce((e, t) => eo(eo({}, e), {}, {
                            ["$web_vitals_".concat(t.name, "_event")]: eo({}, t),
                            ["$web_vitals_".concat(t.name, "_value")]: t.value
                        }), {})), this.buffer = {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        })
                    }), ea(this, "_addToBuffer", e => {
                        var t, i = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
                        if (j(i)) rY.error("Could not read session ID. Dropping metrics!");
                        else {
                            this.buffer = this.buffer || {
                                url: void 0,
                                metrics: [],
                                firstMetricTimestamp: void 0
                            };
                            var s = this._currentURL();
                            j(s) || (J(null == e ? void 0 : e.name) || J(null == e ? void 0 : e.value) ? rY.error("Invalid metric received", e) : this._maxAllowedValue && e.value >= this._maxAllowedValue ? rY.error("Ignoring metric with value >= " + this._maxAllowedValue, e) : (this.buffer.url !== s && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), j(this.buffer.url) && (this.buffer.url = s), this.buffer.firstMetricTimestamp = j(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), this.buffer.metrics.push(eo(eo({}, e), {}, {
                                $current_url: s,
                                $session_id: i.sessionId,
                                $window_id: i.windowId,
                                timestamp: Date.now()
                            })), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()))
                        }
                    }), ea(this, "_startCapturing", () => {
                        var e, t, i, s, r = v.__PosthogExtensions__;
                        j(r) || j(r.postHogWebVitalsCallbacks) || ({
                            onLCP: e,
                            onCLS: t,
                            onFCP: i,
                            onINP: s
                        } = r.postHogWebVitalsCallbacks), e && t && i && s ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && s(this._addToBuffer.bind(this)), this._initialized = !0) : rY.error("web vitals callbacks not loaded - not starting")
                    }), this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[eg]), this.startIfEnabled()
                }
                get allowedMetrics() {
                    var e, t, i = U(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
                    return j(i) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[ef]) || ["CLS", "FCP", "INP", "LCP"] : i
                }
                get flushToCaptureTimeoutMs() {
                    return (U(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3
                }
                get _maxAllowedValue() {
                    var e = U(this.instance.config.capture_performance) && Y(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : 9e5;
                    return 0 < e && e <= 6e4 ? 9e5 : e
                }
                get isEnabled() {
                    var e = U(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
                    return K(e) ? e : this._enabledServerSide
                }
                startIfEnabled() {
                    this.isEnabled && !this._initialized && (rY.info("enabled, starting..."), this.loadScript(this._startCapturing))
                }
                onRemoteConfig(e) {
                    var t = U(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                        i = U(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
                    this.instance.persistence && (this.instance.persistence.register({
                        [eg]: t
                    }), this.instance.persistence.register({
                        [ef]: i
                    })), this._enabledServerSide = t, this.startIfEnabled()
                }
                loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "web-vitals", t => {
                        t ? rY.error("failed to load script", t) : e()
                    })
                }
                _currentURL() {
                    var e = r ? r.location.href : void 0;
                    return e || rY.error("Could not determine current URL"), e
                }
            }
            var rX = {
                icontains: (e, t) => !!r && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
                not_icontains: (e, t) => !!r && -1 === t.href.toLowerCase().indexOf(e.toLowerCase()),
                regex: (e, t) => !!r && M(t.href, e),
                not_regex: (e, t) => !!r && !M(t.href, e),
                exact: (e, t) => t.href === e,
                is_not: (e, t) => t.href !== e
            };
            class rQ {
                constructor(e) {
                    var t = this;
                    ea(this, "getWebExperimentsAndEvaluateDisplayLogic", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        t.getWebExperiments(e => {
                            rQ.logInfo("retrieved web experiments from the server"), t._flagToExperiments = new Map, e.forEach(e => {
                                if (e.feature_flag_key) {
                                    t._flagToExperiments && (rQ.logInfo("setting flag key ", e.feature_flag_key, " to web experiment ", e), null === (i = t._flagToExperiments) || void 0 === i || i.set(e.feature_flag_key, e));
                                    var i, s = t.instance.getFeatureFlag(e.feature_flag_key);
                                    W(s) && e.variants[s] && t.applyTransforms(e.name, s, e.variants[s].transforms)
                                } else if (e.variants)
                                    for (var r in e.variants) {
                                        var n = e.variants[r];
                                        rQ.matchesTestVariant(n) && t.applyTransforms(e.name, r, n.transforms)
                                    }
                            })
                        }, e)
                    }), this.instance = e, this.instance.onFeatureFlags(e => {
                        this.onFeatureFlags(e)
                    })
                }
                onFeatureFlags(e) {
                    if (this._is_bot()) rQ.logInfo("Refusing to render web experiment since the viewer is a likely bot");
                    else if (!this.instance.config.disable_web_experiments) {
                        if (J(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
                        rQ.logInfo("applying feature flags", e), e.forEach(e => {
                            var t;
                            if (this._flagToExperiments && null !== (t = this._flagToExperiments) && void 0 !== t && t.has(e)) {
                                var i, s = this.instance.getFeatureFlag(e),
                                    r = null === (i = this._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
                                s && null != r && r.variants[s] && this.applyTransforms(r.name, s, r.variants[s].transforms)
                            }
                        })
                    }
                }
                previewWebExperiment() {
                    var e = rQ.getWindowLocation();
                    if (null != e && e.search) {
                        var t = td(null == e ? void 0 : e.search, "__experiment_id"),
                            i = td(null == e ? void 0 : e.search, "__experiment_variant");
                        t && i && (rQ.logInfo("previewing web experiments ".concat(t, " && ").concat(i)), this.getWebExperiments(e => {
                            this.showPreviewWebExperiment(parseInt(t), i, e)
                        }, !1, !0))
                    }
                }
                loadIfEnabled() {
                    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
                }
                getWebExperiments(e, t, i) {
                    if (this.instance.config.disable_web_experiments && !i) return e([]);
                    var s = this.instance.get_property("$web_experiments");
                    if (s && !t) return e(s);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        callback: t => 200 === t.statusCode && t.json ? e(t.json.experiments || []) : e([])
                    })
                }
                showPreviewWebExperiment(e, t, i) {
                    var s = i.filter(t => t.id === e);
                    s && s.length > 0 && (rQ.logInfo("Previewing web experiment [".concat(s[0].name, "] with variant [").concat(t, "]")), this.applyTransforms(s[0].name, t, s[0].variants[t].transforms))
                }
                static matchesTestVariant(e) {
                    return !J(e.conditions) && rQ.matchUrlConditions(e) && rQ.matchUTMConditions(e)
                }
                static matchUrlConditions(e) {
                    if (J(e.conditions) || J(null === (t = e.conditions) || void 0 === t ? void 0 : t.url)) return !0;
                    var t, i, s, r, n = rQ.getWindowLocation();
                    return !!n && (null === (i = e.conditions) || void 0 === i || !i.url || rX[null !== (s = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== s ? s : "icontains"](e.conditions.url, n))
                }
                static getWindowLocation() {
                    return null == r ? void 0 : r.location
                }
                static matchUTMConditions(e) {
                    if (J(e.conditions) || J(null === (i = e.conditions) || void 0 === i ? void 0 : i.utm)) return !0;
                    var t = ii.campaignParams();
                    if (t.utm_source) {
                        var i, s, r, n, o, a, l, c, u, d, h, _, p, g, v, f, m, b = null === (s = e.conditions) || void 0 === s || null === (r = s.utm) || void 0 === r || !r.utm_campaign || (null === (n = e.conditions) || void 0 === n || null === (o = n.utm) || void 0 === o ? void 0 : o.utm_campaign) == t.utm_campaign,
                            y = null === (a = e.conditions) || void 0 === a || null === (l = a.utm) || void 0 === l || !l.utm_source || (null === (c = e.conditions) || void 0 === c || null === (u = c.utm) || void 0 === u ? void 0 : u.utm_source) == t.utm_source,
                            w = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (_ = e.conditions) || void 0 === _ || null === (p = _.utm) || void 0 === p ? void 0 : p.utm_medium) == t.utm_medium,
                            S = null === (g = e.conditions) || void 0 === g || null === (v = g.utm) || void 0 === v || !v.utm_term || (null === (f = e.conditions) || void 0 === f || null === (m = f.utm) || void 0 === m ? void 0 : m.utm_term) == t.utm_term;
                        return b && w && S && y
                    }
                    return !1
                }
                static logInfo(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    et.info("[WebExperiments] ".concat(e), i)
                }
                applyTransforms(e, t, i) {
                    this._is_bot() ? rQ.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t ? i.forEach(i => {
                        if (i.selector) {
                            rQ.logInfo("applying transform of variant ".concat(t, " for experiment ").concat(e, " "), i);
                            var s, r = null === (s = document) || void 0 === s ? void 0 : s.querySelectorAll(i.selector);
                            null == r || r.forEach(e => {
                                i.html && (e.innerHTML = i.html), i.css && e.setAttribute("style", i.css)
                            })
                        }
                    }) : rQ.logInfo("Control variants leave the page unmodified.")
                }
                _is_bot() {
                    return c && this.instance ? rT(c, this.instance.config.custom_blocked_useragents) : void 0
                }
            }
            class rZ {
                constructor(e) {
                    this.instance = e
                }
                sendExceptionEvent(e) {
                    this.instance.capture("$exception", e, {
                        _noTruncate: !0,
                        _batchKey: "exceptionEvent"
                    })
                }
            }
            var r0 = ["$set_once", "$set"],
                r1 = ei("[SiteApps]");
            class r2 {
                constructor(e) {
                    this.instance = e, this.bufferedInvocations = [], this.apps = {}
                }
                get isEnabled() {
                    return !!this.instance.config.opt_in_site_apps
                }
                eventCollector(e, t) {
                    if (t) {
                        var i = this.globalsForEvent(t);
                        this.bufferedInvocations.push(i), this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10))
                    }
                }
                get siteAppLoaders() {
                    var e, t;
                    return null === (e = v._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.siteApps
                }
                init() {
                    if (this.isEnabled) {
                        var e = this.instance._addCaptureHook(this.eventCollector.bind(this));
                        this.stopBuffering = () => {
                            e(), this.bufferedInvocations = [], this.stopBuffering = void 0
                        }
                    }
                }
                globalsForEvent(e) {
                    if (!e) throw Error("Event payload is required");
                    var t, i, s, r, n, o, a, l = {},
                        c = this.instance.get_property("$groups") || [];
                    for (var [u, d] of Object.entries(this.instance.get_property("$stored_group_properties") || {})) l[u] = {
                        id: c[u],
                        type: u,
                        properties: d
                    };
                    var {
                        $set_once: h,
                        $set: _
                    } = e;
                    return {
                        event: eo(eo({}, el(e, r0)), {}, {
                            properties: eo(eo(eo({}, e.properties), _ ? {
                                $set: eo(eo({}, null !== (t = null === (i = e.properties) || void 0 === i ? void 0 : i.$set) && void 0 !== t ? t : {}), _)
                            } : {}), h ? {
                                $set_once: eo(eo({}, null !== (s = null === (r = e.properties) || void 0 === r ? void 0 : r.$set_once) && void 0 !== s ? s : {}), h)
                            } : {}),
                            elements_chain: null !== (n = null === (o = e.properties) || void 0 === o ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                            distinct_id: null === (a = e.properties) || void 0 === a ? void 0 : a.distinct_id
                        }),
                        person: {
                            properties: this.instance.get_property("$stored_person_properties")
                        },
                        groups: l
                    }
                }
                setupSiteApp(e) {
                    var t = {
                        id: e.id,
                        loaded: !1,
                        errored: !1
                    };
                    this.apps[e.id] = t;
                    var i = i => {
                        var s;
                        for (var r of (this.apps[e.id].errored = !i, this.apps[e.id].loaded = !0, r1.info("Site app with id ".concat(e.id, " ").concat(i ? "loaded" : "errored")), i && this.bufferedInvocations.length && (r1.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e.id)), this.bufferedInvocations.forEach(e => {
                                var i;
                                return null === (i = t.processEvent) || void 0 === i ? void 0 : i.call(t, e)
                            })), Object.values(this.apps)))
                            if (!r.loaded) return;
                        null === (s = this.stopBuffering) || void 0 === s || s.call(this)
                    };
                    try {
                        var {
                            processEvent: s
                        } = e.init({
                            posthog: this.instance,
                            callback: e => {
                                i(e)
                            }
                        });
                        s && (t.processEvent = s)
                    } catch (t) {
                        r1.error("Error while initializing PostHog app with config id ".concat(e.id), t), i(!1)
                    }
                }
                onCapturedEvent(e) {
                    if (0 !== Object.keys(this.apps).length) {
                        var t, i = this.globalsForEvent(e);
                        for (var s of Object.values(this.apps)) try {
                            null === (t = s.processEvent) || void 0 === t || t.call(s, i)
                        } catch (t) {
                            r1.error("Error while processing event ".concat(e.event, " for site app ").concat(s.id), t)
                        }
                    }
                }
                onRemoteConfig(e) {
                    var t, i, s, r = this;
                    if (null !== (t = this.siteAppLoaders) && void 0 !== t && t.length) {
                        if (!this.isEnabled) return void r1.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                        for (var n of this.siteAppLoaders) this.setupSiteApp(n);
                        this.instance.on("eventCaptured", e => this.onCapturedEvent(e))
                    } else if (null === (i = this.stopBuffering) || void 0 === i || i.call(this), null !== (s = e.siteApps) && void 0 !== s && s.length)
                        if (this.isEnabled) {
                            var o = function(e, t) {
                                var i, s;
                                v["__$$ph_site_app_".concat(e)] = r.instance, null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadSiteApp) || void 0 === s || s.call(i, r.instance, t, t => {
                                    if (t) return r1.error("Error while initializing PostHog app with config id ".concat(e), t)
                                })
                            };
                            for (var {
                                    id: a,
                                    url: l
                                } of e.siteApps) o(a, l)
                        } else r1.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                }
            }

            function r3(e, t, i) {
                return sD({
                    distinct_id: e,
                    userPropertiesToSet: t,
                    userPropertiesToSetOnce: i
                })
            }
            var r5 = {},
                r6 = () => {},
                r8 = "posthog",
                r4 = !sA && -1 === (null == g ? void 0 : g.indexOf("MSIE")) && -1 === (null == g ? void 0 : g.indexOf("Mozilla")),
                r7 = () => {
                    var e;
                    return {
                        api_host: "https://us.i.posthog.com",
                        ui_host: null,
                        token: "",
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie: function(e) {
                            var t = null == e ? void 0 : e.hostname;
                            if (!W(t)) return !1;
                            var i = t.split(".").slice(-2).join(".");
                            for (var s of F)
                                if (i === s) return !1;
                            return !0
                        }(null == u ? void 0 : u.location),
                        persistence: "localStorage+cookie",
                        persistence_name: "",
                        loaded: r6,
                        save_campaign_params: !0,
                        custom_campaign_params: [],
                        custom_blocked_useragents: [],
                        save_referrer: !0,
                        capture_pageview: !0,
                        capture_pageleave: "if_capture_pageview",
                        debug: d && W(null == d ? void 0 : d.search) && -1 !== d.search.indexOf("__posthog_debug=true") || !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_web_experiments: !0,
                        disable_surveys: !1,
                        disable_external_dependency_loading: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie: "https:" === (null == r || null === (e = r.location) || void 0 === e ? void 0 : e.protocol),
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_useragent_filter: !1,
                        opt_out_capturing_persistence_type: "localStorage",
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_denylist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        request_headers: {},
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        mask_personal_data_properties: !1,
                        custom_personal_data_properties: [],
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        feature_flag_request_timeout_ms: 3e3,
                        on_request_error: e => {
                            var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                            et.error(t)
                        },
                        get_device_id: e => e,
                        capture_performance: void 0,
                        name: "posthog",
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800,
                        person_profiles: "identified_only",
                        before_send: void 0,
                        request_queue_config: {
                            flush_interval_ms: 3e3
                        },
                        _onCapture: r6
                    }
                },
                r9 = e => {
                    var t = {};
                    j(e.process_person) || (t.person_profiles = e.process_person), j(e.xhr_headers) || (t.request_headers = e.xhr_headers), j(e.cookie_name) || (t.persistence_name = e.cookie_name), j(e.disable_cookie) || (t.disable_persistence = e.disable_cookie), j(e.store_google) || (t.save_campaign_params = e.store_google), j(e.verbose) || (t.debug = e.verbose);
                    var i = k({}, t, e);
                    return B(e.property_blacklist) && (j(e.property_denylist) ? i.property_denylist = e.property_blacklist : B(e.property_denylist) ? i.property_denylist = [...e.property_blacklist, ...e.property_denylist] : et.error("Invalid value for property_denylist config: " + e.property_denylist)), i
                };
            class ne {
                constructor() {
                    ea(this, "__forceAllowLocalhost", !1)
                }
                get _forceAllowLocalhost() {
                    return this.__forceAllowLocalhost
                }
                set _forceAllowLocalhost(e) {
                    et.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                }
            }
            class nt {
                get decideEndpointWasHit() {
                    var e, t;
                    return null !== (e = null === (t = this.featureFlags) || void 0 === t ? void 0 : t.hasLoadedFlags) && void 0 !== e && e
                }
                constructor() {
                    ea(this, "webPerformance", new ne), ea(this, "version", f.LIB_VERSION), ea(this, "_internalEventEmitter", new rf), this.config = r7(), this.SentryIntegration = sY, this.sentryIntegration = e => (function(e, t) {
                        var i = sJ(e, t);
                        return {
                            name: sG,
                            processEvent: e => i(e)
                        }
                    })(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._initialPersonProfilesConfig = null, this._cachedIdentify = null, this.featureFlags = new eQ(this), this.toolbar = new sT(this), this.scrollManager = new rB(this), this.pageViewManager = new sX(this), this.surveys = new rE(this), this.experiments = new rQ(this), this.exceptions = new rZ(this), this.rateLimiter = new rI(this), this.requestRouter = new sV(this), this.consent = new rV(this), this.people = {
                        set: (e, t, i) => {
                            var s = W(e) ? {
                                [e]: t
                            } : e;
                            this.setPersonProperties(s), null == i || i({})
                        },
                        set_once: (e, t, i) => {
                            var s = W(e) ? {
                                [e]: t
                            } : e;
                            this.setPersonProperties(void 0, s), null == i || i({})
                        }
                    }, this.on("eventCaptured", e => et.info('send "'.concat(null == e ? void 0 : e.event, '"'), e))
                }
                init(e, t, i) {
                    if (i && i !== r8) {
                        var s, r = null !== (s = r5[i]) && void 0 !== s ? s : new nt;
                        return r._init(e, t, i), r5[i] = r, r5[r8][i] = r, r
                    }
                    return this._init(e, t, i)
                }
                _init(e) {
                    var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    if (j(e) || V(e)) return et.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                    if (this.__loaded) return et.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                    this.__loaded = !0, this.config = {}, this._triggered_notifs = [], n.person_profiles && (this._initialPersonProfilesConfig = n.person_profiles), this.set_config(k({}, r7(), r9(n), {
                        name: o,
                        token: e
                    })), this.config.on_xhr_error && et.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = n.disable_compression ? void 0 : s.GZipJS, this.persistence = new ir(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new ir(eo(eo({}, this.config), {}, {
                        persistence: "sessionStorage"
                    }));
                    var a = eo({}, this.persistence.props),
                        l = eo({}, this.sessionPersistence.props);
                    if (this._requestQueue = new s$(e => this._send_retriable_request(e), this.config.request_queue_config), this._retryQueue = new sH(this), this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new sj(this), this.sessionPropsManager = new rP(this, this.sessionManager, this.persistence)), new rW(this).startIfEnabledOrStop(), this.siteApps = new r2(this), null === (t = this.siteApps) || void 0 === t || t.init(), this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new sE(this), this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new rz(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new rq(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new rK(this), this.exceptionObserver = new rJ(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new rL(this, rM), this.deadClicksAutocapture.startIfEnabled(), f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && et.info("Starting in debug mode", {
                            this: this,
                            config: n,
                            thisC: eo({}, this.config),
                            p: a,
                            s: l
                        }), this._sync_opt_out_with_persistence(), void 0 !== (null === (i = n.bootstrap) || void 0 === i ? void 0 : i.distinctID)) {
                        var c, u, d = this.config.get_device_id(e6()),
                            h = null !== (c = n.bootstrap) && void 0 !== c && c.isIdentifiedID ? d : n.bootstrap.distinctID;
                        this.persistence.set_property(eL, null !== (u = n.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
                            distinct_id: n.bootstrap.distinctID,
                            $device_id: h
                        })
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                        var _, p, g = Object.keys((null === (_ = n.bootstrap) || void 0 === _ ? void 0 : _.featureFlags) || {}).filter(e => {
                                var t, i;
                                return !(null === (t = n.bootstrap) || void 0 === t || null === (i = t.featureFlags) || void 0 === i || !i[e])
                            }).reduce((e, t) => {
                                var i, s;
                                return e[t] = (null === (i = n.bootstrap) || void 0 === i || null === (s = i.featureFlags) || void 0 === s ? void 0 : s[t]) || !1, e
                            }, {}),
                            v = Object.keys((null === (p = n.bootstrap) || void 0 === p ? void 0 : p.featureFlagPayloads) || {}).filter(e => g[e]).reduce((e, t) => {
                                var i, s, r, o;
                                return null !== (i = n.bootstrap) && void 0 !== i && null !== (s = i.featureFlagPayloads) && void 0 !== s && s[t] && (e[t] = null === (r = n.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]), e
                            }, {});
                        this.featureFlags.receivedFeatureFlags({
                            featureFlags: g,
                            featureFlagPayloads: v
                        })
                    }
                    if (this.config.__preview_experimental_cookieless_mode) this.register_once({
                        distinct_id: ej,
                        $device_id: null
                    }, "");
                    else if (!this.get_distinct_id()) {
                        var m = this.config.get_device_id(e6());
                        this.register_once({
                            distinct_id: m,
                            $device_id: m
                        }, ""), this.persistence.set_property(eL, "anonymous")
                    }
                    return T(r, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
                        passive: !1
                    }), this.toolbar.maybeLoadToolbar(), n.segment ? function(e, t) {
                        var i = e.config.segment;
                        if (!i) return t();
                        ! function(e, t) {
                            var i = e.config.segment;
                            if (!i) return t();
                            var s = i => {
                                    var s = () => i.anonymousId() || e6();
                                    e.config.get_device_id = s, i.id() && (e.register({
                                        distinct_id: i.id(),
                                        $device_id: s()
                                    }), e.persistence.set_property(eL, "identified")), t()
                                },
                                r = i.user();
                            "then" in r && H(r.then) ? r.then(e => s(e)) : s(r)
                        }(e, () => {
                            var s;
                            i.register((Promise && Promise.resolve || sK.warn("This browser does not have Promise support, and can not use the segment integration"), s = (t, i) => {
                                if (!i) return t;
                                t.event.userId || t.event.anonymousId === e.get_distinct_id() || (sK.info("No userId set, resetting PostHog"), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (sK.info("UserId set, identifying with PostHog"), e.identify(t.event.userId));
                                var s, r = e._calculate_event_properties(i, null !== (s = t.event.properties) && void 0 !== s ? s : {}, new Date);
                                return t.event.properties = Object.assign({}, r, t.event.properties), t
                            }, {
                                name: "PostHog JS",
                                type: "enrichment",
                                version: "1.0.0",
                                isLoaded: () => !0,
                                load: () => Promise.resolve(),
                                track: e => s(e, e.event.event),
                                page: e => s(e, "$pageview"),
                                identify: e => s(e, "$identify"),
                                screen: e => s(e, "$screen")
                            })).then(() => {
                                t()
                            })
                        })
                    }(this, () => this._loaded()) : this._loaded(), H(this.config._onCapture) && this.config._onCapture !== r6 && (et.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", e => this.config._onCapture(e.event, e))), this
                }
                _onRemoteConfig(e) {
                    var t, i, r, n, o, a, l, c;
                    if (!u || !u.body) return et.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
                        this._onRemoteConfig(e)
                    }, 500);
                    this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = $(e.supportedCompression, s.GZipJS) ? s.GZipJS : $(e.supportedCompression, s.Base64) ? s.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
                        person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : "identified_only"
                    }), null === (i = this.siteApps) || void 0 === i || i.onRemoteConfig(e), null === (r = this.sessionRecording) || void 0 === r || r.onRemoteConfig(e), null === (n = this.autocapture) || void 0 === n || n.onRemoteConfig(e), null === (o = this.heatmaps) || void 0 === o || o.onRemoteConfig(e), this.surveys.onRemoteConfig(e), null === (a = this.webVitalsAutocapture) || void 0 === a || a.onRemoteConfig(e), null === (l = this.exceptionObserver) || void 0 === l || l.onRemoteConfig(e), null === (c = this.deadClicksAutocapture) || void 0 === c || c.onRemoteConfig(e)
                }
                _loaded() {
                    try {
                        this.config.loaded(this)
                    } catch (e) {
                        et.critical("`loaded` function failed", e)
                    }
                    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(() => {
                        this.consent.isOptedIn() && this._captureInitialPageview()
                    }, 1), new sI(this).load(), this.featureFlags.decide()
                }
                _start_queue_if_opted_in() {
                    var e;
                    this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
                }
                _dom_loaded() {
                    this.has_opted_out_capturing() || w(this.__request_queue, e => this._send_retriable_request(e)), this.__request_queue = [], this._start_queue_if_opted_in()
                }
                _handle_unload() {
                    var e, t;
                    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
                        transport: "sendBeacon"
                    })
                }
                _send_request(e) {
                    this.__loaded && (r4 ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = sL(e.url, {
                        ip: +!!this.config.ip
                    }), e.headers = eo({}, this.config.request_headers), e.compression = "best-available" === e.compression ? this.compression : e.compression, e.fetchOptions = e.fetchOptions || this.config.fetch_options, (e => {
                        var t, i, s, r = eo({}, e);
                        r.timeout = r.timeout || 6e4, r.url = sL(r.url, {
                            _: (new Date).getTime().toString(),
                            ver: f.LIB_VERSION,
                            compression: r.compression
                        });
                        var n = null !== (t = r.transport) && void 0 !== t ? t : "fetch",
                            o = null !== (i = null === (s = R(sq, e => e.transport === n)) || void 0 === s ? void 0 : s.method) && void 0 !== i ? i : sq[0].method;
                        if (!o) throw Error("No available transport method");
                        o(r)
                    })(eo(eo({}, e), {}, {
                        callback: t => {
                            var i, s, r;
                            this.rateLimiter.checkForLimiting(t), t.statusCode >= 400 && (null === (s = (r = this.config).on_request_error) || void 0 === s || s.call(r, t)), null === (i = e.callback) || void 0 === i || i.call(e, t)
                        }
                    }))))
                }
                _send_retriable_request(e) {
                    this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                }
                _execute_array(e) {
                    var t, i = [],
                        s = [],
                        r = [];
                    w(e, e => {
                        e && (B(t = e[0]) ? r.push(e) : H(e) ? e.call(this) : B(e) && "alias" === t ? i.push(e) : B(e) && -1 !== t.indexOf("capture") && H(this[t]) ? r.push(e) : s.push(e))
                    });
                    var n = function(e, t) {
                        w(e, function(e) {
                            if (B(e[0])) {
                                var i = t;
                                S(e, function(e) {
                                    i = i[e[0]].apply(i, e.slice(1))
                                })
                            } else this[e[0]].apply(this, e.slice(1))
                        }, t)
                    };
                    n(i, this), n(s, this), n(r, this)
                }
                _hasBootstrappedFeatureFlags() {
                    var e, t;
                    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                }
                push(e) {
                    this._execute_array([e])
                }
                capture(e, t, i) {
                    var s;
                    if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
                        if (!this.consent.isOptedOut())
                            if (!j(e) && W(e)) {
                                if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                                    var r = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                                    if (null == r || !r.isRateLimited) {
                                        this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                        var n, o, a, l, c = new Date,
                                            u = (null == i ? void 0 : i.timestamp) || c,
                                            d = e6(),
                                            h = {
                                                uuid: d,
                                                event: e,
                                                properties: this._calculate_event_properties(e, t || {}, u, d)
                                            };
                                        r && (h.properties.$lib_rate_limit_remaining_tokens = r.remainingTokens), (null == i ? void 0 : i.$set) && (h.$set = null == i ? void 0 : i.$set);
                                        var _ = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
                                        _ && (h.$set_once = _), (n = h, o = null != i && i._noTruncate ? null : this.config.properties_string_max_length, a = e => W(e) && !G(o) ? e.slice(0, o) : e, l = new Set, h = function e(t, i) {
                                            var s;
                                            return t !== Object(t) ? a ? a(t, i) : t : l.has(t) ? void 0 : (l.add(t), B(t) ? (s = [], w(t, t => {
                                                s.push(e(t))
                                            })) : (s = {}, S(t, (t, i) => {
                                                l.has(t) || (s[i] = e(t, i))
                                            })), s)
                                        }(n)).timestamp = u, j(null == i ? void 0 : i.timestamp) || (h.properties.$event_time_override_provided = !0, h.properties.$event_time_override_system_time = c);
                                        var p = eo(eo({}, h.properties.$set), h.$set);
                                        if (z(p) || this.setPersonPropertiesForFlags(p), !J(this.config.before_send)) {
                                            var g = this._runBeforeSend(h);
                                            if (!g) return;
                                            h = g
                                        }
                                        this._internalEventEmitter.emit("eventCaptured", h);
                                        var v = {
                                            method: "POST",
                                            url: null !== (s = null == i ? void 0 : i._url) && void 0 !== s ? s : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                            data: h,
                                            compression: "best-available",
                                            batchKey: null == i ? void 0 : i._batchKey
                                        };
                                        return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(v) : this._requestQueue.enqueue(v), h
                                    }
                                    et.critical("This capture call is ignored due to client rate limiting.")
                                }
                            } else et.error("No event name provided to posthog.capture")
                    } else et.uninitializedWarning("posthog.capture")
                }
                _addCaptureHook(e) {
                    return this.on("eventCaptured", t => e(t.event, t))
                }
                _calculate_event_properties(e, t, i, s) {
                    if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
                    var r = this.persistence.remove_event_timer(e),
                        n = eo({}, t);
                    if (n.token = this.config.token, this.config.__preview_experimental_cookieless_mode && (n.$cookieless_mode = !0), "$snapshot" === e) {
                        var o = eo(eo({}, this.persistence.properties()), this.sessionPersistence.properties());
                        return n.distinct_id = o.distinct_id, (!W(n.distinct_id) && !Y(n.distinct_id) || V(n.distinct_id)) && et.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), n
                    }
                    var a, l = ii.properties({
                        maskPersonalDataProperties: this.config.mask_personal_data_properties,
                        customPersonalDataProperties: this.config.custom_personal_data_properties
                    });
                    if (this.sessionManager) {
                        var {
                            sessionId: c,
                            windowId: d
                        } = this.sessionManager.checkAndGetSessionAndWindowId();
                        n.$session_id = c, n.$window_id = d
                    }
                    if (this.sessionRecording && (n.$recording_status = this.sessionRecording.status), this.requestRouter.region === sU.CUSTOM && (n.$lib_custom_api_host = this.config.api_host), a = "$pageview" === e ? this.pageViewManager.doPageView(i, s) : "$pageleave" === e ? this.pageViewManager.doPageLeave(i) : this.pageViewManager.doEvent(), n = k(n, a), "$pageview" === e && u && (n.title = u.title), !j(r)) {
                        var h = i.getTime() - r;
                        n.$duration = parseFloat((h / 1e3).toFixed(3))
                    }
                    g && this.config.opt_out_useragent_filter && (n.$browser_type = this._is_bot() ? "bot" : "browser"), (n = k({}, l, this.persistence.properties(), this.sessionPersistence.properties(), n)).$is_identified = this._isIdentified(), B(this.config.property_denylist) ? S(this.config.property_denylist, function(e) {
                        delete n[e]
                    }) : et.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                    var _ = this.config.sanitize_properties;
                    _ && (et.error("sanitize_properties is deprecated. Use before_send instead"), n = _(n, e));
                    var p = this._hasPersonProcessing();
                    return n.$process_person_profile = p, p && this._requirePersonProcessing("_calculate_event_properties"), n
                }
                _calculate_set_once_properties(e) {
                    if (!this.persistence || !this._hasPersonProcessing()) return e;
                    var t = k({}, this.persistence.get_initial_props(), e || {}),
                        i = this.config.sanitize_properties;
                    return i && (et.error("sanitize_properties is deprecated. Use before_send instead"), t = i(t, "$set_once")), z(t) ? void 0 : t
                }
                register(e, t) {
                    var i;
                    null === (i = this.persistence) || void 0 === i || i.register(e, t)
                }
                register_once(e, t, i) {
                    var s;
                    null === (s = this.persistence) || void 0 === s || s.register_once(e, t, i)
                }
                register_for_session(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                }
                unregister(e) {
                    var t;
                    null === (t = this.persistence) || void 0 === t || t.unregister(e)
                }
                unregister_for_session(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                }
                _register_single(e, t) {
                    this.register({
                        [e]: t
                    })
                }
                getFeatureFlag(e, t) {
                    return this.featureFlags.getFeatureFlag(e, t)
                }
                getFeatureFlagPayload(e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                isFeatureEnabled(e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t)
                }
                reloadFeatureFlags() {
                    this.featureFlags.reloadFeatureFlags()
                }
                updateEarlyAccessFeatureEnrollment(e, t) {
                    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                }
                getEarlyAccessFeatures(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.featureFlags.getEarlyAccessFeatures(e, t)
                }
                on(e, t) {
                    return this._internalEventEmitter.on(e, t)
                }
                onFeatureFlags(e) {
                    return this.featureFlags.onFeatureFlags(e)
                }
                onSessionId(e) {
                    var t, i;
                    return null !== (t = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.onSessionId(e)) && void 0 !== t ? t : () => {}
                }
                getSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getSurveys(e, t)
                }
                getActiveMatchingSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getActiveMatchingSurveys(e, t)
                }
                renderSurvey(e, t) {
                    this.surveys.renderSurvey(e, t)
                }
                canRenderSurvey(e) {
                    this.surveys.canRenderSurvey(e)
                }
                getNextSurveyStep(e, t, i) {
                    return this.surveys.getNextSurveyStep(e, t, i)
                }
                identify(e, t, i) {
                    if (!this.__loaded || !this.persistence) return et.uninitializedWarning("posthog.identify");
                    if (Y(e) && (e = e.toString(), et.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
                        if (["distinct_id", "distinctid"].includes(e.toLowerCase())) et.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                        else if (this._requirePersonProcessing("posthog.identify")) {
                            var s = this.get_distinct_id();
                            this.register({
                                $user_id: e
                            }), this.get_property("$device_id") || this.register_once({
                                $had_persisted_distinct_id: !0,
                                $device_id: s
                            }, ""), e !== s && e !== this.get_property(eu) && (this.unregister(eu), this.register({
                                distinct_id: e
                            }));
                            var r = "anonymous" === (this.persistence.get_property(eL) || "anonymous");
                            e !== s && r ? (this.persistence.set_property(eL, "identified"), this.setPersonPropertiesForFlags(eo(eo({}, i || {}), t || {}), !1), this.capture("$identify", {
                                distinct_id: e,
                                $anon_distinct_id: s
                            }, {
                                $set: t || {},
                                $set_once: i || {}
                            }), this.featureFlags.setAnonymousDistinctId(s), this._cachedIdentify = r3(e, t, i)) : (t || i) && (this._cachedIdentify !== r3(e, t, i) ? (this.setPersonProperties(t, i), this._cachedIdentify = r3(e, t, i)) : et.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")), e !== s && (this.reloadFeatureFlags(), this.unregister(eM))
                        }
                    } else et.error("Unique user id has not been set in posthog.identify")
                }
                setPersonProperties(e, t) {
                    (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(eo(eo({}, t || {}), e || {})), this.capture("$set", {
                        $set: e || {},
                        $set_once: t || {}
                    }))
                }
                group(e, t, i) {
                    if (e && t) {
                        if (this._requirePersonProcessing("posthog.group")) {
                            var s = this.getGroups();
                            s[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                                $groups: eo(eo({}, s), {}, {
                                    [e]: t
                                })
                            }), i && (this.capture("$groupidentify", {
                                $group_type: e,
                                $group_key: t,
                                $group_set: i
                            }), this.setGroupPropertiesForFlags({
                                [e]: i
                            })), s[e] === t || i || this.reloadFeatureFlags()
                        }
                    } else et.error("posthog.group requires a group type and group key")
                }
                resetGroups() {
                    this.register({
                        $groups: {}
                    }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                }
                setPersonPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.featureFlags.setPersonPropertiesForFlags(e, t)
                }
                resetPersonPropertiesForFlags() {
                    this.featureFlags.resetPersonPropertiesForFlags()
                }
                setGroupPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
                }
                resetGroupPropertiesForFlags(e) {
                    this.featureFlags.resetGroupPropertiesForFlags(e)
                }
                reset(e) {
                    if (et.info("reset"), !this.__loaded) return et.uninitializedWarning("posthog.reset");
                    var t, i, s, r, n = this.get_property("$device_id");
                    if (this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), null === (i = this.sessionPersistence) || void 0 === i || i.clear(), this.surveys.reset(), null === (s = this.persistence) || void 0 === s || s.set_property(eL, "anonymous"), null === (r = this.sessionManager) || void 0 === r || r.resetSessionId(), this._cachedIdentify = null, this.config.__preview_experimental_cookieless_mode) this.register_once({
                        distinct_id: ej,
                        $device_id: null
                    }, "");
                    else {
                        var o = this.config.get_device_id(e6());
                        this.register_once({
                            distinct_id: o,
                            $device_id: e ? o : n
                        }, "")
                    }
                    this.register({
                        $last_posthog_reset: (new Date).toISOString()
                    }, 1)
                }
                get_distinct_id() {
                    return this.get_property("distinct_id")
                }
                getGroups() {
                    return this.get_property("$groups") || {}
                }
                get_session_id() {
                    var e, t;
                    return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                }
                get_session_replay_url(e) {
                    if (!this.sessionManager) return "";
                    var {
                        sessionId: t,
                        sessionStartTimestamp: i
                    } = this.sessionManager.checkAndGetSessionAndWindowId(!0), s = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t));
                    if (null != e && e.withTimestamp && i) {
                        var r, n = null !== (r = e.timestampLookBack) && void 0 !== r ? r : 10;
                        if (!i) return s;
                        var o = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - n, 0);
                        s += "?t=".concat(o)
                    }
                    return s
                }
                alias(e, t) {
                    return e === this.get_property(ec) ? (et.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (j(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(eu, e), this.capture("$create_alias", {
                        alias: e,
                        distinct_id: t
                    })) : (et.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
                }
                set_config(e) {
                    var t, i, s, r, n = eo({}, this.config);
                    U(e) && (k(this.config, r9(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, n), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new ir(eo(eo({}, this.config), {}, {
                        persistence: "sessionStorage"
                    })), tt.is_supported() && "true" === tt.get("ph_debug") && (this.config.debug = !0), this.config.debug && (f.DEBUG = !0, et.info("set_config", {
                        config: e,
                        oldConfig: n,
                        newConfig: eo({}, this.config)
                    })), null === (i = this.sessionRecording) || void 0 === i || i.startIfEnabledOrStop(), null === (s = this.autocapture) || void 0 === s || s.startIfEnabled(), null === (r = this.heatmaps) || void 0 === r || r.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
                }
                startSessionRecording(e) {
                    var t, i, s, r, n, o = !0 === e,
                        a = {
                            sampling: o || !(null == e || !e.sampling),
                            linked_flag: o || !(null == e || !e.linked_flag),
                            url_trigger: o || !(null == e || !e.url_trigger),
                            event_trigger: o || !(null == e || !e.event_trigger)
                        };
                    Object.values(a).some(Boolean) && (null === (t = this.sessionManager) || void 0 === t || t.checkAndGetSessionAndWindowId(), a.sampling && (null === (i = this.sessionRecording) || void 0 === i || i.overrideSampling()), a.linked_flag && (null === (s = this.sessionRecording) || void 0 === s || s.overrideLinkedFlag()), a.url_trigger && (null === (r = this.sessionRecording) || void 0 === r || r.overrideTrigger("url")), a.event_trigger && (null === (n = this.sessionRecording) || void 0 === n || n.overrideTrigger("event"))), this.set_config({
                        disable_session_recording: !1
                    })
                }
                stopSessionRecording() {
                    this.set_config({
                        disable_session_recording: !0
                    })
                }
                sessionRecordingStarted() {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                }
                captureException(e, t) {
                    var i, s = Error("PostHog syntheticException"),
                        r = H(null === (i = v.__PosthogExtensions__) || void 0 === i ? void 0 : i.parseErrorAsProperties) ? eo(eo({}, v.__PosthogExtensions__.parseErrorAsProperties(Q(e) ? {
                            error: e,
                            event: e.message
                        } : {
                            event: e
                        }, {
                            syntheticException: s
                        })), t) : eo({
                            $exception_level: "error",
                            $exception_list: [{
                                type: Q(e) ? e.name : "Error",
                                value: Q(e) ? e.message : e,
                                mechanism: {
                                    handled: !0,
                                    synthetic: !1
                                }
                            }]
                        }, t);
                    this.exceptions.sendExceptionEvent(r)
                }
                loadToolbar(e) {
                    return this.toolbar.loadToolbar(e)
                }
                get_property(e) {
                    var t;
                    return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                }
                getSessionProperty(e) {
                    var t;
                    return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                }
                toString() {
                    var e, t = null !== (e = this.config.name) && void 0 !== e ? e : r8;
                    return t !== r8 && (t = r8 + "." + t), t
                }
                _isIdentified() {
                    var e, t;
                    return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(eL)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(eL))
                }
                _hasPersonProcessing() {
                    var e, t, i, s;
                    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && z(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[eu]) && (null === (i = this.persistence) || void 0 === i || null === (s = i.props) || void 0 === s || !s[eU]))
                }
                _shouldCapturePageleave() {
                    return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
                }
                createPersonProfile() {
                    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
                }
                _requirePersonProcessing(e) {
                    return "never" === this.config.person_profiles ? (et.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(eU, !0), !0)
                }
                _sync_opt_out_with_persistence() {
                    var e, t, i, s, r = this.consent.isOptedOut(),
                        n = this.config.opt_out_persistence_by_default,
                        o = this.config.disable_persistence || r && !!n;
                    (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (i = this.persistence) || void 0 === i || i.set_disabled(o)), (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (s = this.sessionPersistence) || void 0 === s || s.set_disabled(o))
                }
                opt_in_capturing(e) {
                    var t;
                    this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), (j(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
                        send_instantly: !0
                    }), this.config.capture_pageview && this._captureInitialPageview()
                }
                opt_out_capturing() {
                    this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
                }
                has_opted_in_capturing() {
                    return this.consent.isOptedIn()
                }
                has_opted_out_capturing() {
                    return this.consent.isOptedOut()
                }
                clear_opt_in_out_capturing() {
                    this.consent.reset(), this._sync_opt_out_with_persistence()
                }
                _is_bot() {
                    return c ? rT(c, this.config.custom_blocked_useragents) : void 0
                }
                _captureInitialPageview() {
                    u && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
                        title: u.title
                    }, {
                        send_instantly: !0
                    }))
                }
                debug(e) {
                    !1 === e ? (null == r || r.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                        debug: !1
                    })) : (null == r || r.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                        debug: !0
                    }))
                }
                _runBeforeSend(e) {
                    if (J(this.config.before_send)) return e;
                    var t = B(this.config.before_send) ? this.config.before_send : [this.config.before_send],
                        i = e;
                    for (var s of t) {
                        if (J(i = s(i))) {
                            var r = "Event '".concat(e.event, "' was rejected in beforeSend function");
                            return Z(e.event) ? et.warn("".concat(r, ". This can cause unexpected behavior.")) : et.info(r), null
                        }
                        i.properties && !z(i.properties) || et.warn("Event '".concat(e.event, "' has no properties after beforeSend function, this is likely an error."))
                    }
                    return i
                }
                getPageViewId() {
                    var e;
                    return null === (e = this.pageViewManager._currentPageview) || void 0 === e ? void 0 : e.pageViewId
                }
            }! function(e, t) {
                for (var i = 0; i < t.length; i++) e.prototype[t[i]] = C(e.prototype[t[i]])
            }(nt, ["identify"]);
            var ni, ns, nr, nn, no, na = (no = r5[r8] = new nt, function() {
                function e() {
                    e.done || (e.done = !0, r4 = !1, S(r5, function(e) {
                        e._dom_loaded()
                    }))
                }
                null != u && u.addEventListener ? "complete" === u.readyState ? e() : T(u, "DOMContentLoaded", e, {
                    capture: !1
                }) : r && et.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
            }(), no)
        }
    }
]);