"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6279], {
        713: (e, t, n) => {
            let r, o, i, l, a;
            n.d(t, {
                A: () => ec,
                B: () => H,
                C: () => eu,
                E: () => F,
                F: () => ev,
                a: () => R,
                b: () => L,
                c: () => eL,
                d: () => ez,
                e: () => ey,
                f: () => eX,
                i: () => A,
                u: () => z
            });
            var s = n(94979),
                c = n(97387),
                u = n(82403),
                f = n(50867);
            let p = e => {
                    let t, n = new Set,
                        r = (e, r) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), n.forEach(n => n(t, e))
                            }
                        },
                        o = () => t,
                        i = {
                            setState: r,
                            getState: o,
                            getInitialState: () => l,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        },
                        l = t = e(r, o, i);
                    return i
                },
                d = e => e ? p(e) : p,
                {
                    useDebugValue: v
                } = c,
                {
                    useSyncExternalStoreWithSelector: h
                } = f,
                b = e => e,
                m = (e, t) => {
                    let n = d(e),
                        r = (e, r = t) => (function(e, t = b, n) {
                            let r = h(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
                            return v(r), r
                        })(n, e, r);
                    return Object.assign(r, n), r
                },
                y = (e, t) => e ? m(e, t) : m;
            var g = n(81214),
                w = n.n(g),
                j = n(90233);
            let C = e => "object" == typeof e && "function" == typeof e.then,
                S = [];

            function E(e, t, n = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = e.length;
                if (t.length !== r) return !1;
                for (let o = 0; o < r; o++)
                    if (!n(e[o], t[o])) return !1;
                return !0
            }

            function x(e, t = null, n = !1, r = {}) {
                for (let o of (null === t && (t = [e]), S))
                    if (E(t, o.keys, o.equal)) {
                        if (n) return;
                        if (Object.prototype.hasOwnProperty.call(o, "error")) throw o.error;
                        if (Object.prototype.hasOwnProperty.call(o, "response")) return r.lifespan && r.lifespan > 0 && (o.timeout && clearTimeout(o.timeout), o.timeout = setTimeout(o.remove, r.lifespan)), o.response;
                        if (!n) throw o.promise
                    }
                let o = {
                    keys: t,
                    equal: r.equal,
                    remove: () => {
                        let e = S.indexOf(o); - 1 !== e && S.splice(e, 1)
                    },
                    promise: (C(e) ? e : e(...t)).then(e => {
                        o.response = e, r.lifespan && r.lifespan > 0 && (o.timeout = setTimeout(o.remove, r.lifespan))
                    }).catch(e => o.error = e)
                };
                if (S.push(o), !n) throw o.promise
            }
            let P = (e, t, n) => x(e, t, !1, n),
                M = (e, t, n) => void x(e, t, !0, n),
                _ = e => {
                    if (void 0 === e || 0 === e.length) S.splice(0, S.length);
                    else {
                        let t = S.find(t => E(e, t.keys, t.equal));
                        t && t.remove()
                    }
                };
            var O = n(4155),
                k = n(12757);

            function T(e) {
                let t = e.root;
                for (; t.getState().previousRoot;) t = t.getState().previousRoot;
                return t
            }
            n(55036), c.act;
            let I = e => e && e.isOrthographicCamera,
                A = e => e && e.hasOwnProperty("current"),
                L = ((e, t) => "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || (null == (t = window.navigator) ? void 0 : t.product) === "ReactNative"))() ? c.useLayoutEffect : c.useEffect;

            function R(e) {
                let t = c.useRef(e);
                return L(() => void(t.current = e), [e]), t
            }

            function z() {
                let e = (0, k.u5)(),
                    t = (0, k.y3)();
                return c.useMemo(() => ({
                    children: n
                }) => {
                    let r = (0, k.Nz)(e, !0, e => e.type === c.StrictMode) ? c.StrictMode : c.Fragment;
                    return (0, O.jsx)(r, {
                        children: (0, O.jsx)(t, {
                            children: n
                        })
                    })
                }, [e, t])
            }

            function H({
                set: e
            }) {
                return L(() => (e(new Promise(() => null)), () => e(!1)), [e]), null
            }
            let F = (e => ((e = class extends c.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }).getDerivedStateFromError = () => ({
                error: !0
            }), e))();

            function D(e) {
                var t;
                let n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
                return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
            }

            function q(e) {
                var t;
                return null == (t = e.__r3f) ? void 0 : t.root.getState()
            }
            let B = {
                    obj: e => e === Object(e) && !B.arr(e) && "function" != typeof e,
                    fun: e => "function" == typeof e,
                    str: e => "string" == typeof e,
                    num: e => "number" == typeof e,
                    boo: e => "boolean" == typeof e,
                    und: e => void 0 === e,
                    nul: e => null === e,
                    arr: e => Array.isArray(e),
                    equ(e, t, {
                        arrays: n = "shallow",
                        objects: r = "reference",
                        strict: o = !0
                    } = {}) {
                        let i;
                        if (typeof e != typeof t || !!e != !!t) return !1;
                        if (B.str(e) || B.num(e) || B.boo(e)) return e === t;
                        let l = B.obj(e);
                        if (l && "reference" === r) return e === t;
                        let a = B.arr(e);
                        if (a && "reference" === n) return e === t;
                        if ((a || l) && e === t) return !0;
                        for (i in e)
                            if (!(i in t)) return !1;
                        if (l && "shallow" === n && "shallow" === r) {
                            for (i in o ? t : e)
                                if (!B.equ(e[i], t[i], {
                                        strict: o,
                                        objects: "reference"
                                    })) return !1
                        } else
                            for (i in o ? t : e)
                                if (e[i] !== t[i]) return !1;
                        if (B.und(i)) {
                            if (a && 0 === e.length && 0 === t.length || l && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                            if (e !== t) return !1
                        }
                        return !0
                    }
                },
                N = ["children", "key", "ref"];

            function U(e, t, n, r) {
                let o = null == e ? void 0 : e.__r3f;
                return !o && (o = {
                    root: t,
                    type: n,
                    parent: null,
                    children: [],
                    props: function(e) {
                        let t = {};
                        for (let n in e) N.includes(n) || (t[n] = e[n]);
                        return t
                    }(r),
                    object: e,
                    eventCount: 0,
                    handlers: {},
                    isHidden: !1
                }, e && (e.__r3f = o)), o
            }

            function V(e, t) {
                var n;
                let r = e[t];
                if (!t.includes("-")) return {
                    root: e,
                    key: t,
                    target: r
                };
                let o = t.split("-");
                return r = o.reduce((e, t) => e[t], e), t = o.pop(), null != (n = r) && n.set || (e = o.reduce((e, t) => e[t], e)), {
                    root: e,
                    key: t,
                    target: r
                }
            }
            let $ = /-\d+$/;

            function W(e, t) {
                if (B.str(t.props.attach)) {
                    if ($.test(t.props.attach)) {
                        let n = t.props.attach.replace($, ""),
                            {
                                root: r,
                                key: o
                            } = V(e.object, n);
                        Array.isArray(r[o]) || (r[o] = [])
                    }
                    let {
                        root: n,
                        key: r
                    } = V(e.object, t.props.attach);
                    t.previousAttach = n[r], n[r] = t.object
                } else B.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object))
            }

            function G(e, t) {
                if (B.str(t.props.attach)) {
                    let {
                        root: n,
                        key: r
                    } = V(e.object, t.props.attach), o = t.previousAttach;
                    void 0 === o ? delete n[r] : n[r] = o
                } else null == t.previousAttach || t.previousAttach(e.object, t.object);
                delete t.previousAttach
            }
            let Y = [...N, "args", "dispose", "attach", "object", "onUpdate", "dispose"],
                X = new Map;

            function J(e) {
                let t = X.get(e.constructor);
                try {
                    t || (t = new e.constructor, X.set(e.constructor, t))
                } catch (e) {}
                return t
            }
            let K = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"],
                Q = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;

            function Z(e, t) {
                var n, r;
                let o = e.__r3f,
                    i = o && T(o).getState(),
                    l = null == o ? void 0 : o.eventCount;
                for (let n in t) {
                    let l = t[n];
                    if (Y.includes(n) || (o && Q.test(n) && ("function" == typeof l ? o.handlers[n] = l : delete o.handlers[n], o.eventCount = Object.keys(o.handlers).length), void 0 === l)) continue;
                    let {
                        root: a,
                        key: c,
                        target: u
                    } = V(e, n);
                    if (null != u && u.copy && null != l && l.constructor && u.constructor === l.constructor) {
                        let e = J(a);
                        !B.und(e) && (B.und(e[c]) || B.nul(e[c])) ? a[c] = l : u.copy(l)
                    } else u instanceof s.Layers && l instanceof s.Layers ? u.mask = l.mask : null != u && u.set && Array.isArray(l) ? u.fromArray ? u.fromArray(l) : u.set(...l) : null != u && u.set && "object" != typeof l ? (null == u ? void 0 : u.isColor) || !u.setScalar || "number" != typeof l ? u.set(l) : u.setScalar(l) : (a[c] = l, i && !i.linear && K.includes(c) && null != (r = a[c]) && r.isTexture && a[c].format === s.RGBAFormat && a[c].type === s.UnsignedByteType && (a[c].colorSpace = s.SRGBColorSpace))
                }
                if (null != o && o.parent && null != i && i.internal && null != (n = o.object) && n.isObject3D && l !== o.eventCount) {
                    let e = o.object,
                        t = i.internal.interaction.indexOf(e);
                    t > -1 && i.internal.interaction.splice(t, 1), o.eventCount && null !== e.raycast && i.internal.interaction.push(e)
                }
                return o && void 0 === o.props.attach && (o.object.isBufferGeometry ? o.props.attach = "geometry" : o.object.isMaterial && (o.props.attach = "material")), o && ee(o), e
            }

            function ee(e) {
                var t;
                if (!e.parent) return;
                null == e.props.onUpdate || e.props.onUpdate(e.object);
                let n = null == (t = e.root) ? void 0 : null == t.getState ? void 0 : t.getState();
                n && 0 === n.internal.frames && n.invalidate()
            }

            function et(e, t) {
                e.manual || (I(e) ? (e.left = -(t.width / 2), e.right = t.width / 2, e.top = t.height / 2, e.bottom = -(t.height / 2)) : e.aspect = t.width / t.height, e.updateProjectionMatrix())
            }
            let en = e => null == e ? void 0 : e.isObject3D;

            function er(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
            }

            function eo(e, t, n, r) {
                let o = n.get(t);
                o && (n.delete(t), 0 === n.size && (e.delete(r), o.target.releasePointerCapture(r)))
            }
            let ei = e => !!(null != e && e.render),
                el = c.createContext(null),
                ea = (e, t) => {
                    let n = y((n, r) => {
                            let o, i = new s.Vector3,
                                l = new s.Vector3,
                                a = new s.Vector3;

                            function u(e = r().camera, t = l, n = r().size) {
                                let {
                                    width: o,
                                    height: s,
                                    top: c,
                                    left: f
                                } = n, p = o / s;
                                t.isVector3 ? a.copy(t) : a.set(...t);
                                let d = e.getWorldPosition(i).distanceTo(a);
                                if (I(e)) return {
                                    width: o / e.zoom,
                                    height: s / e.zoom,
                                    top: c,
                                    left: f,
                                    factor: 1,
                                    distance: d,
                                    aspect: p
                                }; {
                                    let t = 2 * Math.tan(e.fov * Math.PI / 180 / 2) * d,
                                        n = o / s * t;
                                    return {
                                        width: n,
                                        height: t,
                                        top: c,
                                        left: f,
                                        factor: o / n,
                                        distance: d,
                                        aspect: p
                                    }
                                }
                            }
                            let f = e => n(t => ({
                                    performance: { ...t.performance,
                                        current: e
                                    }
                                })),
                                p = new s.Vector2;
                            return {
                                set: n,
                                get: r,
                                gl: null,
                                camera: null,
                                raycaster: null,
                                events: {
                                    priority: 1,
                                    enabled: !0,
                                    connected: !1
                                },
                                scene: null,
                                xr: null,
                                invalidate: (t = 1) => e(r(), t),
                                advance: (e, n) => t(e, n, r()),
                                legacy: !1,
                                linear: !1,
                                flat: !1,
                                controls: null,
                                clock: new s.Clock,
                                pointer: p,
                                mouse: p,
                                frameloop: "always",
                                onPointerMissed: void 0,
                                performance: {
                                    current: 1,
                                    min: .5,
                                    max: 1,
                                    debounce: 200,
                                    regress: () => {
                                        let e = r();
                                        o && clearTimeout(o), e.performance.current !== e.performance.min && f(e.performance.min), o = setTimeout(() => f(r().performance.max), e.performance.debounce)
                                    }
                                },
                                size: {
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0
                                },
                                viewport: {
                                    initialDpr: 0,
                                    dpr: 0,
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0,
                                    aspect: 0,
                                    distance: 0,
                                    factor: 0,
                                    getCurrentViewport: u
                                },
                                setEvents: e => n(t => ({ ...t,
                                    events: { ...t.events,
                                        ...e
                                    }
                                })),
                                setSize: (e, t, o = 0, i = 0) => {
                                    let a = r().camera,
                                        s = {
                                            width: e,
                                            height: t,
                                            top: o,
                                            left: i
                                        };
                                    n(e => ({
                                        size: s,
                                        viewport: { ...e.viewport,
                                            ...u(a, l, s)
                                        }
                                    }))
                                },
                                setDpr: e => n(t => {
                                    let n = D(e);
                                    return {
                                        viewport: { ...t.viewport,
                                            dpr: n,
                                            initialDpr: t.viewport.initialDpr || n
                                        }
                                    }
                                }),
                                setFrameloop: (e = "always") => {
                                    let t = r().clock;
                                    t.stop(), t.elapsedTime = 0, "never" !== e && (t.start(), t.elapsedTime = 0), n(() => ({
                                        frameloop: e
                                    }))
                                },
                                previousRoot: void 0,
                                internal: {
                                    interaction: [],
                                    hovered: new Map,
                                    subscribers: [],
                                    initialClick: [0, 0],
                                    initialHits: [],
                                    capturedMap: new Map,
                                    lastEvent: c.createRef(),
                                    active: !1,
                                    frames: 0,
                                    priority: 0,
                                    subscribe: (e, t, n) => {
                                        let o = r().internal;
                                        return o.priority = o.priority + +(t > 0), o.subscribers.push({
                                            ref: e,
                                            priority: t,
                                            store: n
                                        }), o.subscribers = o.subscribers.sort((e, t) => e.priority - t.priority), () => {
                                            let n = r().internal;
                                            null != n && n.subscribers && (n.priority = n.priority - +(t > 0), n.subscribers = n.subscribers.filter(t => t.ref !== e))
                                        }
                                    }
                                }
                            }
                        }),
                        r = n.getState(),
                        o = r.size,
                        i = r.viewport.dpr,
                        l = r.camera;
                    return n.subscribe(() => {
                        let {
                            camera: e,
                            size: t,
                            viewport: r,
                            gl: a,
                            set: s
                        } = n.getState();
                        if (t.width !== o.width || t.height !== o.height || r.dpr !== i) {
                            o = t, i = r.dpr, et(e, t), r.dpr > 0 && a.setPixelRatio(r.dpr);
                            let n = "undefined" != typeof HTMLCanvasElement && a.domElement instanceof HTMLCanvasElement;
                            a.setSize(t.width, t.height, n)
                        }
                        e !== l && (l = e, s(t => ({
                            viewport: { ...t.viewport,
                                ...t.viewport.getCurrentViewport(e)
                            }
                        })))
                    }), n.subscribe(t => e(t)), n
                };

            function es() {
                let e = c.useContext(el);
                if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
                return e
            }

            function ec(e = e => e, t) {
                return es()(e, t)
            }

            function eu(e, t = 0) {
                let n = es(),
                    r = n.getState().internal.subscribe,
                    o = R(e);
                return L(() => r(o, t, n), [t, r, n]), null
            }
            let ef = new WeakMap,
                ep = e => {
                    var t;
                    return "function" == typeof e && (null == e ? void 0 : null == (t = e.prototype) ? void 0 : t.constructor) === e
                };

            function ed(e, t) {
                return function(n, ...r) {
                    let o;
                    return ep(n) ? (o = ef.get(n)) || (o = new n, ef.set(n, o)) : o = n, e && e(o), Promise.all(r.map(e => new Promise((n, r) => o.load(e, e => {
                        en(null == e ? void 0 : e.scene) && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material)
                            }), t
                        }(e.scene)), n(e)
                    }, t, t => r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))
                }
            }

            function ev(e, t, n, r) {
                let o = Array.isArray(t) ? t : [t],
                    i = P(ed(n, r), [e, ...o], {
                        equal: B.equ
                    });
                return Array.isArray(t) ? i : i[0]
            }
            ev.preload = function(e, t, n) {
                let r = Array.isArray(t) ? t : [t];
                return M(ed(n), [e, ...r])
            }, ev.clear = function(e, t) {
                return _([e, ...Array.isArray(t) ? t : [t]])
            };
            let eh = {},
                eb = 0,
                em = e => "function" == typeof e;

            function ey(e) {
                if (em(e)) {
                    let t = `${eb++}`;
                    return eh[t] = e, t
                }
                Object.assign(eh, e)
            }

            function eg(e, t) {
                let n = `${e[0].toUpperCase()}${e.slice(1)}`,
                    r = eh[n];
                if ("primitive" !== e && !r) throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                if ("primitive" === e && !t.object) throw Error("R3F: Primitives without 'object' are invalid!");
                if (void 0 !== t.args && !Array.isArray(t.args)) throw Error("R3F: The args prop must be an array!")
            }

            function ew(e) {
                if (e.isHidden) {
                    var t;
                    e.props.attach && null != (t = e.parent) && t.object ? W(e.parent, e) : en(e.object) && !1 !== e.props.visible && (e.object.visible = !0), e.isHidden = !1, ee(e)
                }
            }

            function ej(e, t, n) {
                let r = t.root.getState();
                if (e.parent || e.object === r.scene) {
                    if (!t.object) {
                        var o, i;
                        let e = eh[`${t.type[0].toUpperCase()}${t.type.slice(1)}`];
                        t.object = null != (o = t.props.object) ? o : new e(...null != (i = t.props.args) ? i : []), t.object.__r3f = t
                    }
                    if (Z(t.object, t.props), t.props.attach) W(e, t);
                    else if (en(t.object) && en(e.object)) {
                        let r = e.object.children.indexOf(null == n ? void 0 : n.object);
                        n && -1 !== r ? (t.object.parent = e.object, e.object.children.splice(r, 0, t.object), t.object.dispatchEvent({
                            type: "added"
                        }), e.object.dispatchEvent({
                            type: "childadded",
                            child: t.object
                        })) : e.object.add(t.object)
                    }
                    for (let e of t.children) ej(t, e);
                    ee(t)
                }
            }

            function eC(e, t) {
                t && (t.parent = e, e.children.push(t), ej(e, t))
            }

            function eS(e, t, n) {
                if (!t || !n) return;
                t.parent = e;
                let r = e.children.indexOf(n); - 1 !== r ? e.children.splice(r, 0, t) : e.children.push(t), ej(e, t, n)
            }

            function eE(e) {
                if ("function" == typeof e.dispose) {
                    let t = () => {
                        try {
                            e.dispose()
                        } catch {}
                    };
                    "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? t() : (0, j.unstable_scheduleCallback)(j.unstable_IdlePriority, t)
                }
            }

            function ex(e, t, n) {
                if (!t) return;
                t.parent = null;
                let r = e.children.indexOf(t); - 1 !== r && e.children.splice(r, 1), t.props.attach ? G(e, t) : en(t.object) && en(e.object) && (e.object.remove(t.object), function(e, t) {
                    let {
                        internal: n
                    } = e.getState();
                    n.interaction = n.interaction.filter(e => e !== t), n.initialHits = n.initialHits.filter(e => e !== t), n.hovered.forEach((e, r) => {
                        (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                    }), n.capturedMap.forEach((e, r) => {
                        eo(n.capturedMap, t, e, r)
                    })
                }(T(t), t.object));
                let o = null !== t.props.dispose && !1 !== n;
                for (let e = t.children.length - 1; e >= 0; e--) {
                    let n = t.children[e];
                    ex(t, n, o)
                }
                t.children.length = 0, delete t.object.__r3f, o && "primitive" !== t.type && "Scene" !== t.object.type && eE(t.object), void 0 === n && ee(t)
            }
            let eP = [],
                eM = () => {},
                e_ = {},
                eO = 0,
                ek = function(e) {
                    let t = w()(e);
                    return t.injectIntoDevTools({
                        bundleType: 0,
                        rendererPackageName: "@react-three/fiber",
                        version: c.version
                    }), t
                }({
                    isPrimaryRenderer: !1,
                    warnsIfNotActing: !1,
                    supportsMutation: !0,
                    supportsPersistence: !1,
                    supportsHydration: !1,
                    createInstance: function(e, t, n) {
                        var r;
                        return eg(e, t), "primitive" === e && null != (r = t.object) && r.__r3f && delete t.object.__r3f, U(t.object, n, e, t)
                    },
                    removeChild: ex,
                    appendChild: eC,
                    appendInitialChild: eC,
                    insertBefore: eS,
                    appendChildToContainer(e, t) {
                        let n = e.getState().scene.__r3f;
                        t && n && eC(n, t)
                    },
                    removeChildFromContainer(e, t) {
                        let n = e.getState().scene.__r3f;
                        t && n && ex(n, t)
                    },
                    insertInContainerBefore(e, t, n) {
                        let r = e.getState().scene.__r3f;
                        t && n && r && eS(r, t, n)
                    },
                    getRootHostContext: () => e_,
                    getChildHostContext: () => e_,
                    commitUpdate(e, t, n, r, o) {
                        var i, l, a;
                        eg(t, r);
                        let s = !1;
                        if ("primitive" === e.type && n.object !== r.object ? s = !0 : (null == (i = r.args) ? void 0 : i.length) !== (null == (l = n.args) ? void 0 : l.length) ? s = !0 : null != (a = r.args) && a.some((e, t) => {
                                var r;
                                return e !== (null == (r = n.args) ? void 0 : r[t])
                            }) && (s = !0), s) eP.push([e, { ...r
                        }, o]);
                        else {
                            let t = function(e, t) {
                                let n = {};
                                for (let r in t)
                                    if (!Y.includes(r) && !B.equ(t[r], e.props[r]))
                                        for (let e in n[r] = t[r], t) e.startsWith(`${r}-`) && (n[e] = t[e]);
                                for (let r in e.props) {
                                    if (Y.includes(r) || t.hasOwnProperty(r)) continue;
                                    let {
                                        root: o,
                                        key: i
                                    } = V(e.object, r);
                                    if (o.constructor && 0 === o.constructor.length) {
                                        let e = J(o);
                                        B.und(e) || (n[i] = e[i])
                                    } else n[i] = 0
                                }
                                return n
                            }(e, r);
                            Object.keys(t).length && (Object.assign(e.props, t), Z(e.object, t))
                        }(null === o.sibling || (4 & o.flags) == 0) && function() {
                            for (let [e] of eP) {
                                let t = e.parent;
                                if (t)
                                    for (let n of (e.props.attach ? G(t, e) : en(e.object) && en(t.object) && t.object.remove(e.object), e.children)) n.props.attach ? G(e, n) : en(n.object) && en(e.object) && e.object.remove(n.object);
                                e.isHidden && ew(e), e.object.__r3f && delete e.object.__r3f, "primitive" !== e.type && eE(e.object)
                            }
                            for (let [r, o, i] of eP) {
                                r.props = o;
                                let l = r.parent;
                                if (l) {
                                    let o = eh[`${r.type[0].toUpperCase()}${r.type.slice(1)}`];
                                    r.object = null != (e = r.props.object) ? e : new o(...null != (t = r.props.args) ? t : []), r.object.__r3f = r;
                                    var e, t, n = r.object;
                                    for (let e of [i, i.alternate])
                                        if (null !== e)
                                            if ("function" == typeof e.ref) {
                                                null == e.refCleanup || e.refCleanup();
                                                let t = e.ref(n);
                                                "function" == typeof t && (e.refCleanup = t)
                                            } else e.ref && (e.ref.current = n);
                                    for (let e of (Z(r.object, r.props), r.props.attach ? W(l, r) : en(r.object) && en(l.object) && l.object.add(r.object), r.children)) e.props.attach ? W(r, e) : en(e.object) && en(r.object) && r.object.add(e.object);
                                    ee(r)
                                }
                            }
                            eP.length = 0
                        }()
                    },
                    finalizeInitialChildren: () => !1,
                    commitMount() {},
                    getPublicInstance: e => null == e ? void 0 : e.object,
                    prepareForCommit: () => null,
                    preparePortalMount: e => U(e.getState().scene, e, "", {}),
                    resetAfterCommit: () => {},
                    shouldSetTextContent: () => !1,
                    clearContainer: () => !1,
                    hideInstance: function(e) {
                        if (!e.isHidden) {
                            var t;
                            e.props.attach && null != (t = e.parent) && t.object ? G(e.parent, e) : en(e.object) && (e.object.visible = !1), e.isHidden = !0, ee(e)
                        }
                    },
                    unhideInstance: ew,
                    createTextInstance: eM,
                    hideTextInstance: eM,
                    unhideTextInstance: eM,
                    scheduleTimeout: "function" == typeof setTimeout ? setTimeout : void 0,
                    cancelTimeout: "function" == typeof clearTimeout ? clearTimeout : void 0,
                    noTimeout: -1,
                    getInstanceFromNode: () => null,
                    beforeActiveInstanceBlur() {},
                    afterActiveInstanceBlur() {},
                    detachDeletedInstance() {},
                    prepareScopeUpdate() {},
                    getInstanceFromScope: () => null,
                    shouldAttemptEagerTransition: () => !1,
                    trackSchedulerEvent: () => {},
                    resolveEventType: () => null,
                    resolveEventTimeStamp: () => -1.1,
                    requestPostPaintCallback() {},
                    maySuspendCommit: () => !1,
                    preloadInstance: () => !0,
                    startSuspendingCommit() {},
                    suspendInstance() {},
                    waitForCommitToBeReady: () => null,
                    NotPendingTransition: null,
                    HostTransitionContext: c.createContext(null),
                    setCurrentUpdatePriority(e) {
                        eO = e
                    },
                    getCurrentUpdatePriority: () => eO,
                    resolveUpdatePriority() {
                        var e;
                        if (0 !== eO) return eO;
                        switch ("undefined" != typeof window && (null == (e = window.event) ? void 0 : e.type)) {
                            case "click":
                            case "contextmenu":
                            case "dblclick":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointerup":
                                return u.DiscreteEventPriority;
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerenter":
                            case "pointerleave":
                            case "wheel":
                                return u.ContinuousEventPriority;
                            default:
                                return u.DefaultEventPriority
                        }
                    },
                    resetFormInstance() {}
                }),
                eT = new Map,
                eI = {
                    objects: "shallow",
                    strict: !1
                };
            async function eA(e, t) {
                let n = {
                        canvas: t,
                        powerPreference: "high-performance",
                        antialias: !0,
                        alpha: !0
                    },
                    r = "function" == typeof e ? await e(n) : e;
                return ei(r) ? r : new s.WebGLRenderer({ ...n,
                    ...e
                })
            }

            function eL(e) {
                let t, n, r = eT.get(e),
                    o = null == r ? void 0 : r.fiber,
                    i = null == r ? void 0 : r.store;
                r && console.warn("R3F.createRoot should only be called once!");
                let l = "function" == typeof reportError ? reportError : console.error,
                    a = i || ea(eW, eG),
                    c = o || ek.createContainer(a, u.ConcurrentRoot, null, !1, null, "", l, l, l, null);
                r || eT.set(e, {
                    fiber: c,
                    store: a
                });
                let f = !1;
                return {
                    async configure(r = {}) {
                        var o, i;
                        let {
                            gl: l,
                            size: c,
                            scene: u,
                            events: p,
                            onCreated: d,
                            shadows: v = !1,
                            linear: h = !1,
                            flat: b = !1,
                            legacy: m = !1,
                            orthographic: y = !1,
                            frameloop: g = "always",
                            dpr: w = [1, 2],
                            performance: j,
                            raycaster: C,
                            camera: S,
                            onPointerMissed: E
                        } = r, x = a.getState(), P = x.gl;
                        x.gl || x.set({
                            gl: P = await eA(l, e)
                        });
                        let M = x.raycaster;
                        M || x.set({
                            raycaster: M = new s.Raycaster
                        });
                        let {
                            params: _,
                            ...O
                        } = C || {};
                        if (B.equ(O, M, eI) || Z(M, { ...O
                            }), B.equ(_, M.params, eI) || Z(M, {
                                params: { ...M.params,
                                    ..._
                                }
                            }), !x.camera || x.camera === n && !B.equ(n, S, eI)) {
                            n = S;
                            let e = null == S ? void 0 : S.isCamera,
                                t = e ? S : y ? new s.OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new s.PerspectiveCamera(75, 0, .1, 1e3);
                            e || (t.position.z = 5, S && (Z(t, S), !t.manual && ("aspect" in S || "left" in S || "right" in S || "bottom" in S || "top" in S) && (t.manual = !0, t.updateProjectionMatrix())), x.camera || null != S && S.rotation || t.lookAt(0, 0, 0)), x.set({
                                camera: t
                            }), M.camera = t
                        }
                        if (!x.scene) {
                            let e;
                            null != u && u.isScene ? U(e = u, a, "", {}) : (U(e = new s.Scene, a, "", {}), u && Z(e, u)), x.set({
                                scene: e
                            })
                        }
                        p && !x.events.handlers && x.set({
                            events: p(a)
                        });
                        let k = function(e, t) {
                            if (!t && "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                                let {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: o
                                } = e.parentElement.getBoundingClientRect();
                                return {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: o
                                }
                            }
                            return !t && "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                                width: e.width,
                                height: e.height,
                                top: 0,
                                left: 0
                            } : {
                                width: 0,
                                height: 0,
                                top: 0,
                                left: 0,
                                ...t
                            }
                        }(e, c);
                        if (B.equ(k, x.size, eI) || x.setSize(k.width, k.height, k.top, k.left), w && x.viewport.dpr !== D(w) && x.setDpr(w), x.frameloop !== g && x.setFrameloop(g), x.onPointerMissed || x.set({
                                onPointerMissed: E
                            }), j && !B.equ(j, x.performance, eI) && x.set(e => ({
                                performance: { ...e.performance,
                                    ...j
                                }
                            })), !x.xr) {
                            let e = (e, t) => {
                                    let n = a.getState();
                                    "never" !== n.frameloop && eG(e, !0, n, t)
                                },
                                t = () => {
                                    let t = a.getState();
                                    t.gl.xr.enabled = t.gl.xr.isPresenting, t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null), t.gl.xr.isPresenting || eW(t)
                                },
                                n = {
                                    connect() {
                                        let e = a.getState().gl;
                                        e.xr.addEventListener("sessionstart", t), e.xr.addEventListener("sessionend", t)
                                    },
                                    disconnect() {
                                        let e = a.getState().gl;
                                        e.xr.removeEventListener("sessionstart", t), e.xr.removeEventListener("sessionend", t)
                                    }
                                };
                            "function" == typeof(null == (o = P.xr) ? void 0 : o.addEventListener) && n.connect(), x.set({
                                xr: n
                            })
                        }
                        if (P.shadowMap) {
                            let e = P.shadowMap.enabled,
                                t = P.shadowMap.type;
                            if (P.shadowMap.enabled = !!v, B.boo(v)) P.shadowMap.type = s.PCFSoftShadowMap;
                            else if (B.str(v)) {
                                let e = {
                                    basic: s.BasicShadowMap,
                                    percentage: s.PCFShadowMap,
                                    soft: s.PCFSoftShadowMap,
                                    variance: s.VSMShadowMap
                                };
                                P.shadowMap.type = null != (i = e[v]) ? i : s.PCFSoftShadowMap
                            } else B.obj(v) && Object.assign(P.shadowMap, v);
                            (e !== P.shadowMap.enabled || t !== P.shadowMap.type) && (P.shadowMap.needsUpdate = !0)
                        }
                        return s.ColorManagement.enabled = !m, f || (P.outputColorSpace = h ? s.LinearSRGBColorSpace : s.SRGBColorSpace, P.toneMapping = b ? s.NoToneMapping : s.ACESFilmicToneMapping), x.legacy !== m && x.set(() => ({
                            legacy: m
                        })), x.linear !== h && x.set(() => ({
                            linear: h
                        })), x.flat !== b && x.set(() => ({
                            flat: b
                        })), !l || B.fun(l) || ei(l) || B.equ(l, P, eI) || Z(P, l), t = d, f = !0, this
                    },
                    render(n) {
                        if (!f) throw "The root has to be configured before it can be rendered, call 'configure' first!";
                        return ek.updateContainer((0, O.jsx)(eR, {
                            store: a,
                            children: n,
                            onCreated: t,
                            rootElement: e
                        }), c, null, () => void 0), a
                    },
                    unmount() {
                        ez(e)
                    }
                }
            }

            function eR({
                store: e,
                children: t,
                onCreated: n,
                rootElement: r
            }) {
                return L(() => {
                    let t = e.getState();
                    t.set(e => ({
                        internal: { ...e.internal,
                            active: !0
                        }
                    })), n && n(t), e.getState().events.connected || null == t.events.connect || t.events.connect(r)
                }, []), (0, O.jsx)(el.Provider, {
                    value: e,
                    children: t
                })
            }

            function ez(e, t) {
                let n = eT.get(e),
                    r = null == n ? void 0 : n.fiber;
                if (r) {
                    let o = null == n ? void 0 : n.store.getState();
                    o && (o.internal.active = !1), ek.updateContainer(null, r, null, () => {
                        o && setTimeout(() => {
                            try {
                                null == o.events.disconnect || o.events.disconnect(), null == (n = o.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(), null == (i = o.gl) || null == i.forceContextLoss || i.forceContextLoss(), null != (l = o.gl) && l.xr && o.xr.disconnect();
                                var n, r, i, l, a = o.scene;
                                for (let e in "Scene" !== a.type && (null == a.dispose || a.dispose()), a) {
                                    let t = a[e];
                                    (null == t ? void 0 : t.type) !== "Scene" && (null == t || null == t.dispose || t.dispose())
                                }
                                eT.delete(e), t && t(e)
                            } catch (e) {}
                        }, 500)
                    })
                }
            }
            let eH = new Set,
                eF = new Set,
                eD = new Set;

            function eq(e, t) {
                if (e.size)
                    for (let {
                            callback: n
                        } of e.values()) n(t)
            }

            function eB(e, t) {
                switch (e) {
                    case "before":
                        return eq(eH, t);
                    case "after":
                        return eq(eF, t);
                    case "tail":
                        return eq(eD, t)
                }
            }

            function eN(e, t, n) {
                let i = t.clock.getDelta();
                "never" === t.frameloop && "number" == typeof e && (i = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), r = t.internal.subscribers;
                for (let e = 0; e < r.length; e++)(o = r[e]).ref.current(o.store.getState(), i, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }
            let eU = !1,
                eV = !1;

            function e$(e) {
                for (let n of (l = requestAnimationFrame(e$), eU = !0, i = 0, eB("before", e), eV = !0, eT.values())) {
                    var t;
                    (a = n.store.getState()).internal.active && ("always" === a.frameloop || a.internal.frames > 0) && !(null != (t = a.gl.xr) && t.isPresenting) && (i += eN(e, a))
                }
                if (eV = !1, eB("after", e), 0 === i) return eB("tail", e), eU = !1, cancelAnimationFrame(l)
            }

            function eW(e, t = 1) {
                var n;
                if (!e) return eT.forEach(e => eW(e.store.getState(), t));
                null != (n = e.gl.xr) && n.isPresenting || !e.internal.active || "never" === e.frameloop || (t > 1 ? e.internal.frames = Math.min(60, e.internal.frames + t) : eV ? e.internal.frames = 2 : e.internal.frames = 1, eU || (eU = !0, requestAnimationFrame(e$)))
            }

            function eG(e, t = !0, n, r) {
                if (t && eB("before", e), n) eN(e, n, r);
                else
                    for (let t of eT.values()) eN(e, t.store.getState());
                t && eB("after", e)
            }
            let eY = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function eX(e) {
                let {
                    handlePointer: t
                } = function(e) {
                    function t(e) {
                        return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
                            var n;
                            return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
                        }))
                    }

                    function n(t) {
                        let {
                            internal: n
                        } = e.getState();
                        for (let e of n.hovered.values())
                            if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                                let r = e.eventObject.__r3f;
                                if (n.hovered.delete(er(e)), null != r && r.eventCount) {
                                    let n = r.handlers,
                                        o = { ...e,
                                            intersections: t
                                        };
                                    null == n.onPointerOut || n.onPointerOut(o), null == n.onPointerLeave || n.onPointerLeave(o)
                                }
                            }
                    }

                    function r(e, t) {
                        for (let n = 0; n < t.length; n++) {
                            let r = t[n].__r3f;
                            null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
                        }
                    }
                    return {
                        handlePointer: function(o) {
                            switch (o) {
                                case "onPointerLeave":
                                case "onPointerCancel":
                                    return () => n([]);
                                case "onLostPointerCapture":
                                    return t => {
                                        let {
                                            internal: r
                                        } = e.getState();
                                        "pointerId" in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
                                            r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId), n([]))
                                        })
                                    }
                            }
                            return function(i) {
                                let {
                                    onPointerMissed: l,
                                    internal: a
                                } = e.getState();
                                a.lastEvent.current = i;
                                let c = "onPointerMove" === o,
                                    u = "onClick" === o || "onContextMenu" === o || "onDoubleClick" === o,
                                    f = function(t, n) {
                                        let r = e.getState(),
                                            o = new Set,
                                            i = [],
                                            l = n ? n(r.internal.interaction) : r.internal.interaction;
                                        for (let e = 0; e < l.length; e++) {
                                            let t = q(l[e]);
                                            t && (t.raycaster.camera = void 0)
                                        }
                                        r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                                        let a = l.flatMap(function(e) {
                                            let n = q(e);
                                            if (!n || !n.events.enabled || null === n.raycaster.camera) return [];
                                            if (void 0 === n.raycaster.camera) {
                                                var r;
                                                null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()), void 0 === n.raycaster.camera && (n.raycaster.camera = null)
                                            }
                                            return n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []
                                        }).sort((e, t) => {
                                            let n = q(e.object),
                                                r = q(t.object);
                                            return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                                        }).filter(e => {
                                            let t = er(e);
                                            return !o.has(t) && (o.add(t), !0)
                                        });
                                        for (let e of (r.events.filter && (a = r.events.filter(a, r)), a)) {
                                            let t = e.object;
                                            for (; t;) {
                                                var s;
                                                null != (s = t.__r3f) && s.eventCount && i.push({ ...e,
                                                    eventObject: t
                                                }), t = t.parent
                                            }
                                        }
                                        if ("pointerId" in t && r.internal.capturedMap.has(t.pointerId))
                                            for (let e of r.internal.capturedMap.get(t.pointerId).values()) o.has(er(e.intersection)) || i.push(e.intersection);
                                        return i
                                    }(i, c ? t : void 0),
                                    p = u ? function(t) {
                                        let {
                                            internal: n
                                        } = e.getState(), r = t.offsetX - n.initialClick[0], o = t.offsetY - n.initialClick[1];
                                        return Math.round(Math.sqrt(r * r + o * o))
                                    }(i) : 0;
                                "onPointerDown" === o && (a.initialClick = [i.offsetX, i.offsetY], a.initialHits = f.map(e => e.eventObject)), u && !f.length && p <= 2 && (r(i, a.interaction), l && l(i)), c && n(f), ! function(e, t, r, o) {
                                    if (e.length) {
                                        let i = {
                                            stopped: !1
                                        };
                                        for (let l of e) {
                                            let a = q(l.object);
                                            if (a) {
                                                let {
                                                    raycaster: c,
                                                    pointer: u,
                                                    camera: f,
                                                    internal: p
                                                } = a, d = new s.Vector3(u.x, u.y, 0).unproject(f), v = e => {
                                                    var t, n;
                                                    return null != (t = null == (n = p.capturedMap.get(e)) ? void 0 : n.has(l.eventObject)) && t
                                                }, h = e => {
                                                    let n = {
                                                        intersection: l,
                                                        target: t.target
                                                    };
                                                    p.capturedMap.has(e) ? p.capturedMap.get(e).set(l.eventObject, n) : p.capturedMap.set(e, new Map([
                                                        [l.eventObject, n]
                                                    ])), t.target.setPointerCapture(e)
                                                }, b = e => {
                                                    let t = p.capturedMap.get(e);
                                                    t && eo(p.capturedMap, l.eventObject, t, e)
                                                }, m = {};
                                                for (let e in t) {
                                                    let n = t[e];
                                                    "function" != typeof n && (m[e] = n)
                                                }
                                                let y = { ...l,
                                                    ...m,
                                                    pointer: u,
                                                    intersections: e,
                                                    stopped: i.stopped,
                                                    delta: r,
                                                    unprojectedPoint: d,
                                                    ray: c.ray,
                                                    camera: f,
                                                    stopPropagation() {
                                                        let r = "pointerId" in t && p.capturedMap.get(t.pointerId);
                                                        (!r || r.has(l.eventObject)) && (y.stopped = i.stopped = !0, p.hovered.size && Array.from(p.hovered.values()).find(e => e.eventObject === l.eventObject) && n([...e.slice(0, e.indexOf(l)), l]))
                                                    },
                                                    target: {
                                                        hasPointerCapture: v,
                                                        setPointerCapture: h,
                                                        releasePointerCapture: b
                                                    },
                                                    currentTarget: {
                                                        hasPointerCapture: v,
                                                        setPointerCapture: h,
                                                        releasePointerCapture: b
                                                    },
                                                    nativeEvent: t
                                                };
                                                if (o(y), !0 === i.stopped) break
                                            }
                                        }
                                    }
                                }(f, i, p, function(e) {
                                    let t = e.eventObject,
                                        n = t.__r3f;
                                    if (!(null != n && n.eventCount)) return;
                                    let l = n.handlers;
                                    if (c) {
                                        if (l.onPointerOver || l.onPointerEnter || l.onPointerOut || l.onPointerLeave) {
                                            let t = er(e),
                                                n = a.hovered.get(t);
                                            n ? n.stopped && e.stopPropagation() : (a.hovered.set(t, e), null == l.onPointerOver || l.onPointerOver(e), null == l.onPointerEnter || l.onPointerEnter(e))
                                        }
                                        null == l.onPointerMove || l.onPointerMove(e)
                                    } else {
                                        let n = l[o];
                                        n ? (!u || a.initialHits.includes(t)) && (r(i, a.interaction.filter(e => !a.initialHits.includes(e))), n(e)) : u && a.initialHits.includes(t) && r(i, a.interaction.filter(e => !a.initialHits.includes(e)))
                                    }
                                })
                            }
                        }
                    }
                }(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, n) {
                        t.pointer.set((e.offsetX - t.size.left) / t.size.width * 2 - 1, -(2 * ((e.offsetY - t.size.top) / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(eY).reduce((e, n) => ({ ...e,
                        [n]: t(n)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: n,
                            internal: r
                        } = e.getState();
                        null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
                    },
                    connect: t => {
                        let {
                            set: n,
                            events: r
                        } = e.getState();
                        if (null == r.disconnect || r.disconnect(), n(e => ({
                                events: { ...e.events,
                                    connected: t
                                }
                            })), r.handlers)
                            for (let e in r.handlers) {
                                let n = r.handlers[e],
                                    [o, i] = eY[e];
                                t.addEventListener(o, n, {
                                    passive: i
                                })
                            }
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: n
                        } = e.getState();
                        if (n.connected) {
                            if (n.handlers)
                                for (let e in n.handlers) {
                                    let t = n.handlers[e],
                                        [r] = eY[e];
                                    n.connected.removeEventListener(r, t)
                                }
                            t(e => ({
                                events: { ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
        },
        3226: (e, t) => {
            function n(e, t) {
                var n = e.length;
                for (e.push(t); 0 < n;) {
                    var r = n - 1 >>> 1,
                        o = e[r];
                    if (0 < i(o, t)) e[r] = t, e[n] = o, n = r;
                    else break
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function o(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    for (var r = 0, o = e.length, l = o >>> 1; r < l;) {
                        var a = 2 * (r + 1) - 1,
                            s = e[a],
                            c = a + 1,
                            u = e[c];
                        if (0 > i(s, n)) c < o && 0 > i(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[a] = n, r = a);
                        else if (c < o && 0 > i(u, n)) e[r] = u, e[c] = n, r = c;
                        else break
                    }
                }
                return t
            }

            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
                var l, a = performance;
                t.unstable_now = function() {
                    return a.now()
                }
            } else {
                var s = Date,
                    c = s.now();
                t.unstable_now = function() {
                    return s.now() - c
                }
            }
            var u = [],
                f = [],
                p = 1,
                d = null,
                v = 3,
                h = !1,
                b = !1,
                m = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                g = "function" == typeof clearTimeout ? clearTimeout : null,
                w = "undefined" != typeof setImmediate ? setImmediate : null;

            function j(e) {
                for (var t = r(f); null !== t;) {
                    if (null === t.callback) o(f);
                    else if (t.startTime <= e) o(f), t.sortIndex = t.expirationTime, n(u, t);
                    else break;
                    t = r(f)
                }
            }

            function C(e) {
                if (m = !1, j(e), !b)
                    if (null !== r(u)) b = !0, T();
                    else {
                        var t = r(f);
                        null !== t && I(C, t.startTime - e)
                    }
            }
            var S = !1,
                E = -1,
                x = 5,
                P = -1;

            function M() {
                return !(t.unstable_now() - P < x)
            }

            function _() {
                if (S) {
                    var e = t.unstable_now();
                    P = e;
                    var n = !0;
                    try {
                        e: {
                            b = !1,
                            m && (m = !1, g(E), E = -1),
                            h = !0;
                            var i = v;
                            try {
                                t: {
                                    for (j(e), d = r(u); null !== d && !(d.expirationTime > e && M());) {
                                        var a = d.callback;
                                        if ("function" == typeof a) {
                                            d.callback = null, v = d.priorityLevel;
                                            var s = a(d.expirationTime <= e);
                                            if (e = t.unstable_now(), "function" == typeof s) {
                                                d.callback = s, j(e), n = !0;
                                                break t
                                            }
                                            d === r(u) && o(u), j(e)
                                        } else o(u);
                                        d = r(u)
                                    }
                                    if (null !== d) n = !0;
                                    else {
                                        var c = r(f);
                                        null !== c && I(C, c.startTime - e), n = !1
                                    }
                                }
                                break e
                            }
                            finally {
                                d = null, v = i, h = !1
                            }
                            n = void 0
                        }
                    }
                    finally {
                        n ? l() : S = !1
                    }
                }
            }
            if ("function" == typeof w) l = function() {
                w(_)
            };
            else if ("undefined" != typeof MessageChannel) {
                var O = new MessageChannel,
                    k = O.port2;
                O.port1.onmessage = _, l = function() {
                    k.postMessage(null)
                }
            } else l = function() {
                y(_, 0)
            };

            function T() {
                S || (S = !0, l())
            }

            function I(e, n) {
                E = y(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                b || h || (b = !0, T())
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return v
            }, t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }, t.unstable_next = function(e) {
                switch (v) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = v
                }
                var n = v;
                v = t;
                try {
                    return e()
                } finally {
                    v = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = v;
                v = e;
                try {
                    return t()
                } finally {
                    v = n
                }
            }, t.unstable_scheduleCallback = function(e, o, i) {
                var l = t.unstable_now();
                switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? l + i : l, e) {
                    case 1:
                        var a = -1;
                        break;
                    case 2:
                        a = 250;
                        break;
                    case 5:
                        a = 0x3fffffff;
                        break;
                    case 4:
                        a = 1e4;
                        break;
                    default:
                        a = 5e3
                }
                return a = i + a, e = {
                    id: p++,
                    callback: o,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: a,
                    sortIndex: -1
                }, i > l ? (e.sortIndex = i, n(f, e), null === r(u) && e === r(f) && (m ? (g(E), E = -1) : m = !0, I(C, i - l))) : (e.sortIndex = a, n(u, e), b || h || (b = !0, T())), e
            }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
                var t = v;
                return function() {
                    var n = v;
                    v = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        v = n
                    }
                }
            }
        },
        12177: (e, t, n) => {
            e.exports = n(93422)
        },
        12757: (e, t, n) => {
            n.d(t, {
                Af: () => g,
                Nz: () => h,
                u5: () => w,
                y3: () => j
            });
            var r, o, i = n(97387),
                l = Object.defineProperty,
                a = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                p = (e, t, n) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
                    if (c)
                        for (var n of c(t)) f.call(t, n) && p(e, n, t[n]);
                    return e
                },
                v = (e, t) => a(e, s(t));

            function h(e, t, n) {
                if (!e) return;
                if (!0 === n(e)) return e;
                let r = t ? e.return : e.child;
                for (; r;) {
                    let e = h(r, t, n);
                    if (e) return e;
                    r = t ? null : r.sibling
                }
            }

            function b(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }
            "undefined" != typeof window && ((null == (r = window.document) ? void 0 : r.createElement) || (null == (o = window.navigator) ? void 0 : o.product) === "ReactNative") ? i.useLayoutEffect : i.useEffect;
            let m = console.error;
            console.error = function() {
                let e = [...arguments].join("");
                if ((null == e ? void 0 : e.startsWith("Warning:")) && e.includes("useContext")) {
                    console.error = m;
                    return
                }
                return m.apply(this, arguments)
            };
            let y = b(i.createContext(null));
            class g extends i.Component {
                render() {
                    return i.createElement(y.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }

            function w() {
                let e = i.useContext(y);
                if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                let t = i.useId();
                return i.useMemo(() => {
                    for (let n of [e, null == e ? void 0 : e.alternate]) {
                        if (!n) continue;
                        let e = h(n, !1, e => {
                            let n = e.memoizedState;
                            for (; n;) {
                                if (n.memoizedState === t) return !0;
                                n = n.next
                            }
                        });
                        if (e) return e
                    }
                }, [e, t])
            }

            function j() {
                let e = function() {
                    let e = w(),
                        [t] = i.useState(() => new Map);
                    t.clear();
                    let n = e;
                    for (; n;) {
                        if (n.type && "object" == typeof n.type) {
                            let e = void 0 === n.type._context && n.type.Provider === n.type ? n.type : n.type._context;
                            e && e !== y && !t.has(e) && t.set(e, i.useContext(b(e)))
                        }
                        n = n.return
                    }
                    return t
                }();
                return i.useMemo(() => Array.from(e.keys()).reduce((t, n) => r => i.createElement(t, null, i.createElement(n.Provider, v(d({}, r), {
                    value: e.get(n)
                }))), e => i.createElement(g, d({}, e))), [e])
            }
        },
        46279: (e, t, n) => {
            n.d(t, {
                Hl: () => p
            });
            var r = n(713),
                o = n(97387),
                i = n(94979);

            function l(e, t) {
                let n;
                return (...r) => {
                    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t)
                }
            }
            let a = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                s = (e, t) => a.every(n => e[n] === t[n]);
            var c = n(12757),
                u = n(4155);

            function f({
                ref: e,
                children: t,
                fallback: n,
                resize: a,
                style: c,
                gl: f,
                events: p = r.f,
                eventSource: d,
                eventPrefix: v,
                shadows: h,
                linear: b,
                flat: m,
                legacy: y,
                orthographic: g,
                frameloop: w,
                dpr: j,
                performance: C,
                raycaster: S,
                camera: E,
                scene: x,
                onPointerMissed: P,
                onCreated: M,
                ..._
            }) {
                o.useMemo(() => (0, r.e)(i), []);
                let O = (0, r.u)(),
                    [k, T] = function({
                        debounce: e,
                        scroll: t,
                        polyfill: n,
                        offsetSize: r
                    } = {
                        debounce: 0,
                        scroll: !1,
                        offsetSize: !1
                    }) {
                        var i, a, c;
                        let u = n || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                        if (!u) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                        let [f, p] = (0, o.useState)({
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0,
                            bottom: 0,
                            right: 0,
                            x: 0,
                            y: 0
                        }), d = (0, o.useRef)({
                            element: null,
                            scrollContainers: null,
                            resizeObserver: null,
                            lastBounds: f,
                            orientationHandler: null
                        }), v = e ? "number" == typeof e ? e : e.scroll : null, h = e ? "number" == typeof e ? e : e.resize : null, b = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => (b.current = !0, () => void(b.current = !1)));
                        let [m, y, g] = (0, o.useMemo)(() => {
                            let e = () => {
                                if (!d.current.element) return;
                                let {
                                    left: e,
                                    top: t,
                                    width: n,
                                    height: o,
                                    bottom: i,
                                    right: l,
                                    x: a,
                                    y: c
                                } = d.current.element.getBoundingClientRect(), u = {
                                    left: e,
                                    top: t,
                                    width: n,
                                    height: o,
                                    bottom: i,
                                    right: l,
                                    x: a,
                                    y: c
                                };
                                d.current.element instanceof HTMLElement && r && (u.height = d.current.element.offsetHeight, u.width = d.current.element.offsetWidth), Object.freeze(u), b.current && !s(d.current.lastBounds, u) && p(d.current.lastBounds = u)
                            };
                            return [e, h ? l(e, h) : e, v ? l(e, v) : e]
                        }, [p, r, v, h]);

                        function w() {
                            d.current.scrollContainers && (d.current.scrollContainers.forEach(e => e.removeEventListener("scroll", g, !0)), d.current.scrollContainers = null), d.current.resizeObserver && (d.current.resizeObserver.disconnect(), d.current.resizeObserver = null), d.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", d.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", d.current.orientationHandler))
                        }

                        function j() {
                            d.current.element && (d.current.resizeObserver = new u(g), d.current.resizeObserver.observe(d.current.element), t && d.current.scrollContainers && d.current.scrollContainers.forEach(e => e.addEventListener("scroll", g, {
                                capture: !0,
                                passive: !0
                            })), d.current.orientationHandler = () => {
                                g()
                            }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", d.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", d.current.orientationHandler))
                        }
                        return i = g, a = !!t, (0, o.useEffect)(() => {
                            if (a) return window.addEventListener("scroll", i, {
                                capture: !0,
                                passive: !0
                            }), () => void window.removeEventListener("scroll", i, !0)
                        }, [i, a]), c = y, (0, o.useEffect)(() => (window.addEventListener("resize", c), () => void window.removeEventListener("resize", c)), [c]), (0, o.useEffect)(() => {
                            w(), j()
                        }, [t, g, y]), (0, o.useEffect)(() => w, []), [e => {
                            e && e !== d.current.element && (w(), d.current.element = e, d.current.scrollContainers = function e(t) {
                                let n = [];
                                if (!t || t === document.body) return n;
                                let {
                                    overflow: r,
                                    overflowX: o,
                                    overflowY: i
                                } = window.getComputedStyle(t);
                                return [r, o, i].some(e => "auto" === e || "scroll" === e) && n.push(t), [...n, ...e(t.parentElement)]
                            }(e), j())
                        }, f, m]
                    }({
                        scroll: !0,
                        debounce: {
                            scroll: 50,
                            resize: 0
                        },
                        ...a
                    }),
                    I = o.useRef(null),
                    A = o.useRef(null);
                o.useImperativeHandle(e, () => I.current);
                let L = (0, r.a)(P),
                    [R, z] = o.useState(!1),
                    [H, F] = o.useState(!1);
                if (R) throw R;
                if (H) throw H;
                let D = o.useRef(null);
                (0, r.b)(() => {
                    let e = I.current;
                    T.width > 0 && T.height > 0 && e && (D.current || (D.current = (0, r.c)(e)), async function() {
                        await D.current.configure({
                            gl: f,
                            scene: x,
                            events: p,
                            shadows: h,
                            linear: b,
                            flat: m,
                            legacy: y,
                            orthographic: g,
                            frameloop: w,
                            dpr: j,
                            performance: C,
                            raycaster: S,
                            camera: E,
                            size: T,
                            onPointerMissed: (...e) => null == L.current ? void 0 : L.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(d ? (0, r.i)(d) ? d.current : d : A.current), v && e.setEvents({
                                    compute: (e, t) => {
                                        let n = e[v + "X"],
                                            r = e[v + "Y"];
                                        t.pointer.set(n / t.size.width * 2 - 1, -(2 * (r / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == M || M(e)
                            }
                        }), D.current.render((0, u.jsx)(O, {
                            children: (0, u.jsx)(r.E, {
                                set: F,
                                children: (0, u.jsx)(o.Suspense, {
                                    fallback: (0, u.jsx)(r.B, {
                                        set: z
                                    }),
                                    children: t
                                })
                            })
                        }))
                    }())
                }), o.useEffect(() => {
                    let e = I.current;
                    if (e) return () => (0, r.d)(e)
                }, []);
                let q = d ? "none" : "auto";
                return (0, u.jsx)("div", {
                    ref: A,
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: q,
                        ...c
                    },
                    ..._,
                    children: (0, u.jsx)("div", {
                        ref: k,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: (0, u.jsx)("canvas", {
                            ref: I,
                            style: {
                                display: "block"
                            },
                            children: n
                        })
                    })
                })
            }

            function p(e) {
                return (0, u.jsx)(c.Af, {
                    children: (0, u.jsx)(f, { ...e
                    })
                })
            }
            n(82403), n(81214), n(90233)
        },
        50867: (e, t, n) => {
            e.exports = n(92125)
        },
        66234: (e, t) => {
            t.ConcurrentRoot = 1, t.ContinuousEventPriority = 8, t.DefaultEventPriority = 32, t.DiscreteEventPriority = 2
        },
        81214: (e, t, n) => {
            e.exports = n(38162)
        },
        82403: (e, t, n) => {
            e.exports = n(66234)
        },
        90233: (e, t, n) => {
            e.exports = n(3226)
        },
        92125: (e, t, n) => {
            var r = n(97387),
                o = n(12177),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                l = o.useSyncExternalStore,
                a = r.useRef,
                s = r.useEffect,
                c = r.useMemo,
                u = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
                var f = a(null);
                if (null === f.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = p
                } else p = f.current;
                var d = l(e, (f = c(function() {
                    function e(e) {
                        if (!s) {
                            if (s = !0, l = e, e = r(e), void 0 !== o && p.hasValue) {
                                var t = p.value;
                                if (o(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, i(l, e)) return t;
                        var n = r(e);
                        return void 0 !== o && o(t, n) ? t : (l = e, a = n)
                    }
                    var l, a, s = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, n, r, o]))[0], f[1]);
                return s(function() {
                    p.hasValue = !0, p.value = d
                }, [d]), u(d), d
            }
        },
        93422: (e, t, n) => {
            var r = n(97387),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = r.useState,
                l = r.useEffect,
                a = r.useLayoutEffect,
                s = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }
            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    u = r[1];
                return a(function() {
                    o.value = n, o.getSnapshot = t, c(o) && u({
                        inst: o
                    })
                }, [e, n, t]), l(function() {
                    return c(o) && u({
                        inst: o
                    }), e(function() {
                        c(o) && u({
                            inst: o
                        })
                    })
                }, [e]), s(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
        }
    }
]);