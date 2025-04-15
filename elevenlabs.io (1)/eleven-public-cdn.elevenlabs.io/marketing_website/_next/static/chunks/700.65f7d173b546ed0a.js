"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [700], {
        21177: (t, e, i) => {
            i.d(e, {
                xQ: () => o
            });
            var s = i(97387),
                n = i(62302);

            function o(t = !0) {
                let e = (0, s.useContext)(n.t);
                if (null === e) return [!0, null];
                let {
                    isPresent: i,
                    onExitComplete: r,
                    register: a
                } = e, l = (0, s.useId)();
                (0, s.useEffect)(() => {
                    t && a(l)
                }, [t]);
                let h = (0, s.useCallback)(() => t && r && r(l), [l, r, t]);
                return !i && r ? [!1, h] : [!0]
            }
        },
        60700: (t, e, i) => {
            i.d(e, {
                z: () => e5
            });
            class s {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            var n = i(47228),
                o = i(91761);
            let r = {
                x: !1,
                y: !1
            };
            var a = i(54162);
            let l = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function h(t, e, i, s = {
                passive: !0
            }) {
                return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
            }

            function u(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let d = t => e => l(e) && t(e, u(e));

            function c(t, e, i, s) {
                return h(t, e, d(i), s)
            }
            let p = (t, e) => Math.abs(t - e);
            var m = i(77106),
                v = i(3361);
            class f {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: s,
                    dragSnapToOrigin: n = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = x(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    return Math.sqrt(p(t.x, e.x) ** 2 + p(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: s
                            } = t, {
                                timestamp: n
                            } = v.uv;
                            this.history.push({ ...s,
                                timestamp: n
                            });
                            let {
                                onStart: o,
                                onMove: r
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = g(e, this.transformPagePoint), v.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: n
                            } = this.handlers;
                            if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let o = x("pointercancel" === t.type ? this.lastMoveEventInfo : g(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, o), s && s(t, o)
                        }, !l(t)) return;
                    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.contextWindow = s || window;
                    let o = g(u(t), this.transformPagePoint),
                        {
                            point: r
                        } = o,
                        {
                            timestamp: a
                        } = v.uv;
                    this.history = [{ ...r,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: h
                    } = e;
                    h && h(t, x(o, this.history)), this.removeListeners = (0, m.F)(c(this.contextWindow, "pointermove", this.handlePointerMove), c(this.contextWindow, "pointerup", this.handlePointerUp), c(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, v.WG)(this.updatePoint)
                }
            }

            function g(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function y(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function x({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: y(t, P(e)),
                    offset: y(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            n = P(t);
                        for (; i >= 0 && (s = t[i], !(n.timestamp - s.timestamp > (0, a.f)(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let o = (0, a.X)(n.timestamp - s.timestamp);
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let r = {
                            x: (n.x - s.x) / o,
                            y: (n.y - s.y) / o
                        };
                        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
                    }(e, .1)
                }
            }

            function P(t) {
                return t[t.length - 1]
            }
            var T = i(73104),
                A = i(68401),
                E = i(52928);

            function D(t) {
                return t.max - t.min
            }

            function S(t, e, i, s = .5) {
                t.origin = s, t.originPoint = (0, E.k)(e.min, e.max, t.origin), t.scale = D(i) / D(e), t.translate = (0, E.k)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function w(t, e, i, s) {
                S(t.x, e.x, i.x, s ? s.originX : void 0), S(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function R(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + D(e)
            }

            function L(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + D(e)
            }

            function k(t, e, i) {
                L(t.x, e.x, i.x), L(t.y, e.y, i.y)
            }
            var j = i(71049);

            function b(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function C(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function V(t, e, i) {
                return {
                    min: B(t, e),
                    max: B(t, i)
                }
            }

            function B(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            var M = i(50571);

            function U(t) {
                return [t("x"), t("y")]
            }
            var F = i(48132),
                O = i(49625),
                I = i(73100),
                G = i(27735);
            let N = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;
            var W = i(49191);
            let H = new WeakMap;
            class $ {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, M.ge)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: s
                    } = this.getProps();
                    this.panSession = new f(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(u(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: s,
                                onDragStart: n
                            } = this.getProps();
                            if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                                    if ("x" === t || "y" === t)
                                        if (r[t]) return null;
                                        else return r[t] = !0, () => {
                                            r[t] = !1
                                        };
                                    return r.x || r.y ? null : (r.x = r.y = !0, () => {
                                        r.x = r.y = !1
                                    })
                                }(i), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (I.KN.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        s && (e = D(s) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && v.Gt.postRender(() => n(t, e)), (0, W.g)(this.visualElement, "transform");
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: n,
                                onDrag: o
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: r
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(r), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => U(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: s,
                        contextWindow: N(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = e;
                    this.startAnimation(s);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && v.Gt.postRender(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !z(t, s, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? (0, E.k)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, E.k)(i, t, s.max) : Math.min(t, i)), t
                    }(o, this.constraints[t], this.elastic[t])), n.set(o)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, n = this.constraints;
                    e && (0, T.X)(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: n
                    }) {
                        return {
                            x: b(t.x, i, n),
                            y: b(t.y, e, s)
                        }
                    }(s.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: V(t, "left", "right"),
                            y: V(t, "top", "bottom")
                        }
                    }(i), n !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && U(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(s.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !(0, T.X)(e)) return !1;
                    let s = e.current;
                    (0, o.V)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let r = (0, F.L)(s, n.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: C((t = n.layout.layoutBox).x, r.x),
                            y: C(t.y, r.y)
                        };
                    if (i) {
                        let t = i((0, O.pA)(a));
                        this.hasMutatedConstraints = !!t, t && (a = (0, O.FY)(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: n,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: r
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(U(r => {
                        if (!z(r, e, this.currentDirection)) return;
                        let l = a && a[r] || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[r] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(r, h)
                    })).then(r)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return (0, W.g)(this.visualElement, t), i.start((0, G.f)(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    U(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    U(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    U(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!z(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: o
                            } = s.layout.layoutBox[e];
                            n.set(t[e] - (0, E.k)(i, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!(0, T.X)(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    U(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = D(t),
                                    n = D(e);
                                return n > s ? i = (0, A.q)(e.min, e.max - s, t.min) : s > n && (i = (0, A.q)(t.min, t.max - n, e.min)), (0, j.q)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), U(e => {
                        if (!z(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: o
                            } = this.constraints[e];
                        i.set((0, E.k)(n, o, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    H.set(this.visualElement, this);
                    let t = c(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            (0, T.X)(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        s = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), v.Gt.read(e);
                    let n = h(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (U(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), t(), s(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: n = !1,
                            dragElastic: o = .35,
                            dragMomentum: r = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: n,
                        dragElastic: o,
                        dragMomentum: r
                    }
                }
            }

            function z(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class K extends s {
                constructor(t) {
                    super(t), this.removeGroupControls = n.l, this.removeListeners = n.l, this.controls = new $(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || n.l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let X = t => (e, i) => {
                t && v.Gt.postRender(() => t(e, i))
            };
            class q extends s {
                constructor() {
                    super(...arguments), this.removePointerDownListener = n.l
                }
                onPointerDown(t) {
                    this.session = new f(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: N(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: s
                    } = this.node.getProps();
                    return {
                        onSessionStart: X(t),
                        onStart: X(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && v.Gt.postRender(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = c(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var Q = i(4155),
                Y = i(97387),
                _ = i(21177),
                Z = i(76032),
                J = i(37412);
            let tt = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function te(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let ti = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t)
                        if (!I.px.test(t)) return t;
                        else t = parseFloat(t);
                    let i = te(t, e.target.x),
                        s = te(t, e.target.y);
                    return `${i}% ${s}%`
                }
            };
            var ts = i(39938),
                tn = i(1892),
                to = i(65565);
            class tr extends Y.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: n
                    } = t;
                    (0, tn.$)(tl), n && (e.group && e.group.add(n), i && i.register && s && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({ ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), tt.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: n
                    } = this.props, o = i.projection;
                    return o && (o.isPresent = n, s || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? o.promote() : o.relegate() || v.Gt.postRender(() => {
                        let t = o.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), to.k.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function ta(t) {
                let [e, i] = (0, _.xQ)(), s = (0, Y.useContext)(Z.L);
                return (0, Q.jsx)(tr, { ...t,
                    layoutGroup: s,
                    switchLayoutGroup: (0, Y.useContext)(J.N),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let tl = {
                borderRadius: { ...ti,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: ti,
                borderTopRightRadius: ti,
                borderBottomLeftRadius: ti,
                borderBottomRightRadius: ti,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let s = ts.f.parse(t);
                        if (s.length > 5) return t;
                        let n = ts.f.createTransformer(t),
                            o = +("number" != typeof s[0]),
                            r = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        s[0 + o] /= r, s[1 + o] /= a;
                        let l = (0, E.k)(r, a, .5);
                        return "number" == typeof s[2 + o] && (s[2 + o] /= l), "number" == typeof s[3 + o] && (s[3 + o] /= l), n(s)
                    }
                }
            };
            var th = i(1378),
                tu = i(77997),
                td = i(47651),
                tc = i(52415),
                tp = i(77942),
                tm = i(58815);
            let tv = (t, e) => t.depth - e.depth;
            class tf {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, tm.Kq)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, tm.Ai)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(tv), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var tg = i(62014),
                ty = i(66021),
                tx = i(3623),
                tP = i(60139),
                tT = i(37325);
            let tA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tE = tA.length,
                tD = t => "string" == typeof t ? parseFloat(t) : t,
                tS = t => "number" == typeof t || I.px.test(t);

            function tw(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tR = tk(0, .5, tT.yT),
                tL = tk(.5, .95, n.l);

            function tk(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i((0, A.q)(t, e, s))
            }

            function tj(t, e) {
                t.min = e.min, t.max = e.max
            }

            function tb(t, e) {
                tj(t.x, e.x), tj(t.y, e.y)
            }

            function tC(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }
            var tV = i(29096);

            function tB(t, e, i, s, n) {
                return t -= e, t = (0, tV.hq)(t, 1 / i, s), void 0 !== n && (t = (0, tV.hq)(t, 1 / n, s)), t
            }

            function tM(t, e, [i, s, n], o, r) {
                ! function(t, e = 0, i = 1, s = .5, n, o = t, r = t) {
                    if (I.KN.test(e) && (e = parseFloat(e), e = (0, E.k)(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
                    let a = (0, E.k)(o.min, o.max, s);
                    t === o && (a -= e), t.min = tB(t.min, e, i, a, n), t.max = tB(t.max, e, i, a, n)
                }(t, e[i], e[s], e[n], e.scale, o, r)
            }
            let tU = ["x", "scaleX", "originX"],
                tF = ["y", "scaleY", "originY"];

            function tO(t, e, i, s) {
                tM(t.x, e, tU, i ? i.x : void 0, s ? s.x : void 0), tM(t.y, e, tF, i ? i.y : void 0, s ? s.y : void 0)
            }

            function tI(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function tG(t) {
                return tI(t.x) && tI(t.y)
            }

            function tN(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function tW(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function tH(t, e) {
                return tW(t.x, e.x) && tW(t.y, e.y)
            }

            function t$(t) {
                return D(t.x) / D(t.y)
            }

            function tz(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class tK {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, tm.Kq)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, tm.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e, i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            var tX = i(54047);
            let tq = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                tQ = ["", "X", "Y", "Z"],
                tY = {
                    visibility: "hidden"
                },
                t_ = 0;

            function tZ(t, e, i, s) {
                let {
                    latestValues: n
                } = e;
                n[t] && (i[t] = n[t], e.setStaticValue(t, 0), s && (s[t] = 0))
            }

            function tJ({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = t_++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, ty.Q.value && (tq.nodes = tq.calculatedTargetDeltas = tq.calculatedProjections = 0), this.nodes.forEach(t5), this.nodes.forEach(t8), this.nodes.forEach(et), this.nodes.forEach(t7), ty.Q.addProjectionMetrics && ty.Q.addProjectionMetrics(tq)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tf)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tx.v), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = (0, tp.x)(e), this.instance = e;
                        let {
                            layoutId: s,
                            layout: n,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || s) && (this.isLayoutDirty = !0), t) {
                            let i, s = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = tc.k.now(),
                                        s = ({
                                            timestamp: n
                                        }) => {
                                            let o = n - i;
                                            o >= 250 && ((0, v.WG)(s), t(o - e))
                                        };
                                    return v.Gt.read(s, !0), () => (0, v.WG)(s)
                                }(s, 250), tt.hasAnimatedSinceResize && (tt.hasAnimatedSinceResize = !1, this.nodes.forEach(t6))
                            })
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && o && (s || n) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeLayoutChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || o.getDefaultTransition() || er,
                                {
                                    onLayoutAnimationStart: r,
                                    onLayoutAnimationComplete: a
                                } = o.getProps(),
                                l = !this.targetLayout || !tH(this.targetLayout, s),
                                h = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
                                let e = { ...(0, th.r)(n, "layout"),
                                    onPlay: r,
                                    onComplete: a
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || t6(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, v.WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ee), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let s = (0, td.P)(i);
                                if (window.MotionHasOptimisedAnimation(s, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(s, "transform", v.Gt, !(t || i))
                                }
                                let {
                                    parent: n
                                } = e;
                                n && !n.hasCheckedOptimisedAppear && t(n)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(t2);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(t9), this.isUpdating = !1, this.nodes.forEach(t4), this.nodes.forEach(t0), this.nodes.forEach(t1), this.clearAllSnapshots();
                        let t = tc.k.now();
                        v.uv.delta = (0, j.q)(0, 1e3 / 60, t - v.uv.timestamp), v.uv.timestamp = t, v.uv.isProcessing = !0, v.PP.update.process(v.uv), v.PP.preRender.process(v.uv), v.PP.render.process(v.uv), v.uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, to.k.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(t3), this.sharedNodes.forEach(ei)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, v.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        v.Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        this.snapshot || !this.instance || (this.snapshot = this.measure(), !this.snapshot || D(this.snapshot.measuredBox.x) || D(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, M.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = s(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !tG(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            o = s !== this.prevTransformTemplateValue;
                        t && (e || (0, tX.HD)(this.latestValues) || o) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), eh((e = s).x), eh(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return (0, M.ge)();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(ed))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && ((0, tV.Ql)(i.x, t.offset.x), (0, tV.Ql)(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = (0, M.ge)();
                        if (tb(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let s = this.path[e],
                                {
                                    scroll: n,
                                    options: o
                                } = s;
                            s !== this.root && n && o.layoutScroll && (n.wasRoot && tb(i, t), (0, tV.Ql)(i.x, n.offset.x), (0, tV.Ql)(i.y, n.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, M.ge)();
                        tb(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, tV.Ww)(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), (0, tX.HD)(s.latestValues) && (0, tV.Ww)(i, s.latestValues)
                        }
                        return (0, tX.HD)(this.latestValues) && (0, tV.Ww)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, M.ge)();
                        tb(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, tX.HD)(i.latestValues)) continue;
                            (0, tX.vk)(i.latestValues) && i.updateSnapshot();
                            let s = (0, M.ge)();
                            tb(s, i.measurePageBox()), tO(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return (0, tX.HD)(this.latestValues) && tO(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== v.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, s, n;
                        let o = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                        let r = !!this.resumingFrom || this !== o;
                        if (!(t || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = v.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, M.ge)(), this.relativeTargetOrigin = (0, M.ge)(), k(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, M.ge)(), this.targetWithTransforms = (0, M.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, s = this.relativeTarget, n = this.relativeParent.target, R(i.x, s.x, n.x), R(i.y, s.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tb(this.target, this.layout.layoutBox), (0, tV.o4)(this.target, this.targetDelta)) : tb(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, M.ge)(), this.relativeTargetOrigin = (0, M.ge)(), k(this.relativeTargetOrigin, this.target, t.target), tb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                ty.Q.value && tq.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || (0, tX.vk)(this.parent.latestValues) || (0, tX.vF)(this.parent.latestValues)))
                            if (this.parent.isProjecting()) return this.parent;
                            else return this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            s = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === v.uv.timestamp && (s = !1), s) return;
                        let {
                            layout: n,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || o)) return;
                        tb(this.layoutCorrected, this.layout.layoutBox);
                        let r = this.treeScale.x,
                            a = this.treeScale.y;
                        (0, tV.OU)(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = (0, M.ge)());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (tC(this.prevProjectionDelta.x, this.projectionDelta.x), tC(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), w(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === r && this.treeScale.y === a && tz(this.projectionDelta.x, this.prevProjectionDelta.x) && tz(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), ty.Q.value && tq.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = (0, M.xU)(), this.projectionDelta = (0, M.xU)(), this.projectionDeltaWithTransform = (0, M.xU)()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i, s = this.snapshot,
                            n = s ? s.latestValues : {},
                            o = { ...this.latestValues
                            },
                            r = (0, M.xU)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = (0, M.ge)(),
                            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            h = this.getStack(),
                            u = !h || h.members.length <= 1,
                            d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(eo));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let s = e / 1e3;
                            if (es(r.x, t.x, s), es(r.y, t.y, s), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var h, c, p, m, v, f;
                                if (k(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, v = a, f = s, en(p.x, m.x, v.x, f), en(p.y, m.y, v.y, f), i && (h = this.relativeTarget, c = i, tN(h.x, c.x) && tN(h.y, c.y))) this.isProjectionDirty = !1;
                                i || (i = (0, M.ge)()), tb(i, this.relativeTarget)
                            }
                            l && (this.animationValues = o, function(t, e, i, s, n, o) {
                                n ? (t.opacity = (0, E.k)(0, void 0 !== i.opacity ? i.opacity : 1, tR(s)), t.opacityExit = (0, E.k)(void 0 !== e.opacity ? e.opacity : 1, 0, tL(s))) : o && (t.opacity = (0, E.k)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                                for (let n = 0; n < tE; n++) {
                                    let o = `border${tA[n]}Radius`,
                                        r = tw(e, o),
                                        a = tw(i, o);
                                    (void 0 !== r || void 0 !== a) && (r || (r = 0), a || (a = 0), 0 === r || 0 === a || tS(r) === tS(a) ? (t[o] = Math.max((0, E.k)(tD(r), tD(a), s), 0), (I.KN.test(a) || I.KN.test(r)) && (t[o] += "%")) : t[o] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, E.k)(e.rotate || 0, i.rotate || 0, s))
                            }(o, n, this.latestValues, s, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, v.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = v.Gt.update(() => {
                            tt.hasAnimatedSinceResize = !0, tg.q.layout++, this.currentAnimation = (0, tu.z)(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onStop: () => {
                                    tg.q.layout--
                                },
                                onComplete: () => {
                                    tg.q.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: s,
                                latestValues: n
                            } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && eu(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || (0, M.ge)();
                                let e = D(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = D(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            tb(e, i), (0, tV.Ww)(e, n), w(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new tK), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let s = {};
                        i.z && tZ("z", t, s, this.animationValues);
                        for (let e = 0; e < tQ.length; e++) tZ(`rotate${tQ[e]}`, t, s, this.animationValues), tZ(`skew${tQ[e]}`, t, s, this.animationValues);
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return tY;
                        let s = {
                                visibility: ""
                            },
                            n = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = (0, tP.u)(null == t ? void 0 : t.pointerEvents) || "", s.transform = n ? n(this.latestValues, "") : "none", s;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, tP.u)(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !(0, tX.HD)(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
                        }
                        let r = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), s.transform = function(t, e, i) {
                            let s = "",
                                n = t.x.translate / e.x,
                                o = t.y.translate / e.y,
                                r = (null == i ? void 0 : i.z) || 0;
                            if ((n || o || r) && (s = `translate3d(${n}px, ${o}px, ${r}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: n,
                                    rotateY: o,
                                    skewX: r,
                                    skewY: a
                                } = i;
                                t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), n && (s += `rotateX(${n}deg) `), o && (s += `rotateY(${o}deg) `), r && (s += `skewX(${r}deg) `), a && (s += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, r), n && (s.transform = n(r, s.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, o.animationValues ? s.opacity = o === this ? null !== (i = null !== (e = r.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : s.opacity = o === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0, tn.H) {
                            if (void 0 === r[t]) continue;
                            let {
                                correct: e,
                                applyTo: i,
                                isCSSVariable: n
                            } = tn.H[t], a = "none" === s.transform ? r[t] : e(r[t], o);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) s[i[e]] = a
                            } else n ? this.options.visualElement.renderState.vars[t] = a : s[t] = a
                        }
                        return this.options.layoutId && (s.pointerEvents = o === this ? (0, tP.u)(null == t ? void 0 : t.pointerEvents) || "" : "none"), s
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(t2), this.root.sharedNodes.clear()
                    }
                }
            }

            function t0(t) {
                t.updateLayout()
            }

            function t1(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: s
                    } = t.layout, {
                        animationType: n
                    } = t.options, o = i.source !== t.layout.source;
                    "size" === n ? U(t => {
                        let s = o ? i.measuredBox[t] : i.layoutBox[t],
                            n = D(s);
                        s.min = e[t].min, s.max = s.min + n
                    }) : eu(n, i.layoutBox, e) && U(s => {
                        let n = o ? i.measuredBox[s] : i.layoutBox[s],
                            r = D(e[s]);
                        n.max = n.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + r)
                    });
                    let r = (0, M.xU)();
                    w(r, e, i.layoutBox);
                    let a = (0, M.xU)();
                    o ? w(a, t.applyTransform(s, !0), i.measuredBox) : w(a, e, i.layoutBox);
                    let l = !tG(r),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: o
                            } = s;
                            if (n && o) {
                                let r = (0, M.ge)();
                                k(r, i.layoutBox, n.layoutBox);
                                let a = (0, M.ge)();
                                k(a, e, o.layoutBox), tH(r, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = s)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: r,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function t5(t) {
                ty.Q.value && tq.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function t7(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function t3(t) {
                t.clearSnapshot()
            }

            function t2(t) {
                t.clearMeasurements()
            }

            function t9(t) {
                t.isLayoutDirty = !1
            }

            function t4(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function t6(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function t8(t) {
                t.resolveTargetDelta()
            }

            function et(t) {
                t.calcProjection()
            }

            function ee(t) {
                t.resetSkewAndRotation()
            }

            function ei(t) {
                t.removeLeadSnapshot()
            }

            function es(t, e, i) {
                t.translate = (0, E.k)(e.translate, 0, i), t.scale = (0, E.k)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function en(t, e, i, s) {
                t.min = (0, E.k)(e.min, i.min, s), t.max = (0, E.k)(e.max, i.max, s)
            }

            function eo(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let er = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                ea = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                el = ea("applewebkit/") && !ea("chrome/") ? Math.round : n.l;

            function eh(t) {
                t.min = el(t.min), t.max = el(t.max)
            }

            function eu(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(t$(e) - t$(i)))
            }

            function ed(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let ec = tJ({
                    attachResizeListener: (t, e) => h(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ep = {
                    current: void 0
                },
                em = tJ({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ep.current) {
                            let t = new ec({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ep.current = t
                        }
                        return ep.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var ev = i(39547),
                ef = i(71240),
                eg = i(10475);

            function ey(t, e, i = {}) {
                var s;
                let n = (0, ef.K)(t, e, "exit" === i.type ? null === (s = t.presenceContext) || void 0 === s ? void 0 : s.custom : void 0),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (o = i.transitionOverride);
                let r = n ? () => Promise.all((0, eg.$)(t, n, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (s = 0) => {
                        let {
                            delayChildren: n = 0,
                            staggerChildren: r,
                            staggerDirection: a
                        } = o;
                        return function(t, e, i = 0, s = 0, n = 1, o) {
                            let r = [],
                                a = (t.variantChildren.size - 1) * s,
                                l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                            return Array.from(t.variantChildren).sort(ex).forEach((t, s) => {
                                t.notify("AnimationStart", e), r.push(ey(t, e, { ...o,
                                    delay: i + l(s)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(r)
                        }(t, e, n + s, r, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (!l) return Promise.all([r(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [r, a] : [a, r];
                    return t().then(() => e())
                }
            }

            function ex(t, e) {
                return t.sortNodePosition(e)
            }
            var eP = i(89273);

            function eT(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let s = 0; s < i; s++)
                    if (e[s] !== t[s]) return !1;
                return !0
            }
            var eA = i(79542),
                eE = i(96965);
            let eD = eE._.length,
                eS = [...eE.U].reverse(),
                ew = eE.U.length;

            function eR(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function eL() {
                return {
                    animate: eR(!0),
                    whileInView: eR(),
                    whileHover: eR(),
                    whileTap: eR(),
                    whileDrag: eR(),
                    whileFocus: eR(),
                    exit: eR()
                }
            }
            class ek extends s {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let s;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) s = Promise.all(e.map(e => ey(t, e, i)));
                                else if ("string" == typeof e) s = ey(t, e, i);
                                else {
                                    let n = "function" == typeof e ? (0, ef.K)(t, e, i.custom) : e;
                                    s = Promise.all((0, eg.$)(t, n, i))
                                }
                                return s.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = eL(),
                            s = !0,
                            n = e => (i, s) => {
                                var n;
                                let o = (0, ef.K)(t, s, "exit" === e ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                                if (o) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...s
                                    } = o;
                                    i = { ...i,
                                        ...s,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function o(o) {
                            let {
                                props: r
                            } = t, a = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < eD; t++) {
                                    let s = eE._[t],
                                        n = e.props[s];
                                    ((0, eA.w)(n) || !1 === n) && (i[s] = n)
                                }
                                return i
                            }(t.parent) || {}, l = [], h = new Set, u = {}, d = 1 / 0;
                            for (let e = 0; e < ew; e++) {
                                var c, p;
                                let m = eS[e],
                                    v = i[m],
                                    f = void 0 !== r[m] ? r[m] : a[m],
                                    g = (0, eA.w)(f),
                                    y = m === o ? v.isActive : null;
                                !1 === y && (d = e);
                                let x = f === a[m] && f !== r[m] && g;
                                if (x && s && t.manuallyAnimateOnMount && (x = !1), v.protectedKeys = { ...u
                                    }, !v.isActive && null === y || !f && !v.prevProp || (0, ev.N)(f) || "boolean" == typeof f) continue;
                                let P = (c = v.prevProp, "string" == typeof(p = f) ? p !== c : !!Array.isArray(p) && !eT(p, c)),
                                    T = P || m === o && v.isActive && !x && g || e > d && g,
                                    A = !1,
                                    E = Array.isArray(f) ? f : [f],
                                    D = E.reduce(n(m), {});
                                !1 === y && (D = {});
                                let {
                                    prevResolvedValues: S = {}
                                } = v, w = { ...S,
                                    ...D
                                }, R = e => {
                                    T = !0, h.has(e) && (A = !0, h.delete(e)), v.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in w) {
                                    let e = D[t],
                                        i = S[t];
                                    if (u.hasOwnProperty(t)) continue;
                                    let s = !1;
                                    ((0, eP.p)(e) && (0, eP.p)(i) ? eT(e, i) : e === i) ? void 0 !== e && h.has(t) ? R(t) : v.protectedKeys[t] = !0: null != e ? R(t) : h.add(t)
                                }
                                v.prevProp = f, v.prevResolvedValues = D, v.isActive && (u = { ...u,
                                    ...D
                                }), s && t.blockInitialAnimation && (T = !1);
                                let L = !(x && P) || A;
                                T && L && l.push(...E.map(t => ({
                                    animation: t,
                                    options: {
                                        type: m
                                    }
                                })))
                            }
                            if (h.size) {
                                let e = {};
                                if ("boolean" != typeof r.initial) {
                                    let i = (0, ef.K)(t, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                h.forEach(i => {
                                    let s = t.getBaseTarget(i),
                                        n = t.getValue(i);
                                    n && (n.liveStyle = !0), e[i] = null != s ? s : null
                                }), l.push({
                                    animation: e
                                })
                            }
                            let m = !!l.length;
                            return s && (!1 === r.initial || r.initial === r.animate) && !t.manuallyAnimateOnMount && (m = !1), s = !1, m ? e(l) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, s) {
                                var n;
                                if (i[e].isActive === s) return Promise.resolve();
                                null === (n = t.variantChildren) || void 0 === n || n.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, s)
                                }), i[e].isActive = s;
                                let r = o(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return r
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = eL(), s = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, ev.N)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let ej = 0;
            class eb extends s {
                constructor() {
                    super(...arguments), this.id = ej++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var eC = i(83385);

            function eV(t, e) {
                let i = (0, eC.K)(t),
                    s = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: s.signal
                }, () => s.abort()]
            }

            function eB(t) {
                return !("touch" === t.pointerType || r.x || r.y)
            }

            function eM(t, e, i) {
                let {
                    props: s
                } = t;
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let n = s["onHover" + i];
                n && v.Gt.postRender(() => n(e, u(e)))
            }
            class eU extends s {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [s, n, o] = eV(t, i), r = t => {
                            if (!eB(t)) return;
                            let {
                                target: i
                            } = t, s = e(i, t);
                            if ("function" != typeof s || !i) return;
                            let o = t => {
                                eB(t) && (s(t), i.removeEventListener("pointerleave", o))
                            };
                            i.addEventListener("pointerleave", o, n)
                        };
                        return s.forEach(t => {
                            t.addEventListener("pointerenter", r, n)
                        }), o
                    }(t, (t, e) => (eM(this.node, e, "Start"), t => eM(this.node, t, "End"))))
                }
                unmount() {}
            }
            class eF extends s {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, m.F)(h(this.node.current, "focus", () => this.onFocus()), h(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let eO = (t, e) => !!e && (t === e || eO(t, e.parentElement)),
                eI = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                eG = new WeakSet;

            function eN(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function eW(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let eH = (t, e) => {
                let i = t.currentTarget;
                if (!i) return;
                let s = eN(() => {
                    if (eG.has(i)) return;
                    eW(i, "down");
                    let t = eN(() => {
                        eW(i, "up")
                    });
                    i.addEventListener("keyup", t, e), i.addEventListener("blur", () => eW(i, "cancel"), e)
                });
                i.addEventListener("keydown", s, e), i.addEventListener("blur", () => i.removeEventListener("keydown", s), e)
            };

            function e$(t) {
                return l(t) && !(r.x || r.y)
            }

            function ez(t, e, i) {
                let {
                    props: s
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let n = s["onTap" + ("End" === i ? "" : i)];
                n && v.Gt.postRender(() => n(e, u(e)))
            }
            class eK extends s {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [s, n, o] = eV(t, i), r = t => {
                            let s = t.currentTarget;
                            if (!e$(t) || eG.has(s)) return;
                            eG.add(s);
                            let o = e(s, t),
                                r = (t, e) => {
                                    window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), e$(t) && eG.has(s) && (eG.delete(s), "function" == typeof o && o(t, {
                                        success: e
                                    }))
                                },
                                a = t => {
                                    r(t, i.useGlobalTarget || eO(s, t.target))
                                },
                                l = t => {
                                    r(t, !1)
                                };
                            window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", l, n)
                        };
                        return s.forEach(t => {
                            !eI.has(t.tagName) && -1 === t.tabIndex && null === t.getAttribute("tabindex") && (t.tabIndex = 0), (i.useGlobalTarget ? window : t).addEventListener("pointerdown", r, n), t.addEventListener("focus", t => eH(t, n), n)
                        }), o
                    }(t, (t, e) => (ez(this.node, e, "Start"), (t, {
                        success: e
                    }) => ez(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let eX = new WeakMap,
                eq = new WeakMap,
                eQ = t => {
                    let e = eX.get(t.target);
                    e && e(t)
                },
                eY = t => {
                    t.forEach(eQ)
                },
                e_ = {
                    some: 0,
                    all: 1
                };
            class eZ extends s {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: s = "some",
                        once: n
                    } = t, o = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof s ? s : e_[s]
                    };
                    return function(t, e, i) {
                        let s = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            eq.has(i) || eq.set(i, {});
                            let s = eq.get(i),
                                n = JSON.stringify(e);
                            return s[n] || (s[n] = new IntersectionObserver(eY, {
                                root: t,
                                ...e
                            })), s[n]
                        }(e);
                        return eX.set(t, i), s.observe(t), () => {
                            eX.delete(t), s.unobserve(t)
                        }
                    }(this.node.current, o, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: s
                        } = this.node.getProps(), o = e ? i : s;
                        o && o(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var eJ = i(98874),
                e0 = i(17686),
                e1 = i(53234);
            let e5 = {
                renderer: (t, e) => (0, e1.Q)(t) ? new e0.l(e) : new eJ.M(e, {
                    allowProjection: t !== Y.Fragment
                }),
                animation: {
                    Feature: ek
                },
                exit: {
                    Feature: eb
                },
                inView: {
                    Feature: eZ
                },
                tap: {
                    Feature: eK
                },
                focus: {
                    Feature: eF
                },
                hover: {
                    Feature: eU
                },
                pan: {
                    Feature: q
                },
                drag: {
                    Feature: K,
                    ProjectionNode: em,
                    MeasureLayout: ta
                },
                layout: {
                    ProjectionNode: em,
                    MeasureLayout: ta
                }
            }
        },
        83385: (t, e, i) => {
            i.d(e, {
                K: () => s
            });

            function s(t, e, i) {
                var s;
                if (t instanceof Element) return [t];
                if ("string" == typeof t) {
                    let n = document;
                    e && (n = e.current);
                    let o = null !== (s = null == i ? void 0 : i[t]) && void 0 !== s ? s : n.querySelectorAll(t);
                    return o ? Array.from(o) : []
                }
                return Array.from(t)
            }
        }
    }
]);