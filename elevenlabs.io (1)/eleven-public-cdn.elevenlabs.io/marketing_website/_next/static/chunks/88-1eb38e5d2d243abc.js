"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [88], {
        50088: (t, e, i) => {
            function r(t, e, i, r) {
                return new(i || (i = Promise))(function(s, n) {
                    function o(t) {
                        try {
                            l(r.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(r.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? s(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(o, a)
                    }
                    l((r = r.apply(t, e || [])).next())
                })
            }
            i.d(e, {
                A: () => m
            }), "function" == typeof SuppressedError && SuppressedError;
            class s {
                constructor() {
                    this.listeners = {}
                }
                on(t, e, i) {
                    if (this.listeners[t] || (this.listeners[t] = new Set), this.listeners[t].add(e), null == i ? void 0 : i.once) {
                        let i = () => {
                            this.un(t, i), this.un(t, e)
                        };
                        return this.on(t, i), i
                    }
                    return () => this.un(t, e)
                }
                un(t, e) {
                    var i;
                    null === (i = this.listeners[t]) || void 0 === i || i.delete(e)
                }
                once(t, e) {
                    return this.on(t, e, {
                        once: !0
                    })
                }
                unAll() {
                    this.listeners = {}
                }
                emit(t, ...e) {
                    this.listeners[t] && this.listeners[t].forEach(t => t(...e))
                }
            }
            let n = {
                decode: function(t, e) {
                    return r(this, void 0, void 0, function*() {
                        let i = new AudioContext({
                            sampleRate: e
                        });
                        return i.decodeAudioData(t).finally(() => i.close())
                    })
                },
                createBuffer: function(t, e) {
                    return "number" == typeof t[0] && (t = [t]),
                        function(t) {
                            let e = t[0];
                            if (e.some(t => t > 1 || t < -1)) {
                                let i = e.length,
                                    r = 0;
                                for (let t = 0; t < i; t++) {
                                    let i = Math.abs(e[t]);
                                    i > r && (r = i)
                                }
                                for (let e of t)
                                    for (let t = 0; t < i; t++) e[t] /= r
                            }
                        }(t), {
                            duration: e,
                            length: t[0].length,
                            sampleRate: t[0].length / e,
                            numberOfChannels: t.length,
                            getChannelData: e => null == t ? void 0 : t[e],
                            copyFromChannel: AudioBuffer.prototype.copyFromChannel,
                            copyToChannel: AudioBuffer.prototype.copyToChannel
                        }
                }
            };

            function o(t, e, i) {
                let r = function t(e, i) {
                    let r = i.xmlns ? document.createElementNS(i.xmlns, e) : document.createElement(e);
                    for (let [e, s] of Object.entries(i))
                        if ("children" === e)
                            for (let [e, s] of Object.entries(i)) "string" == typeof s ? r.appendChild(document.createTextNode(s)) : r.appendChild(t(e, s));
                        else "style" === e ? Object.assign(r.style, s) : "textContent" === e ? r.textContent = s : r.setAttribute(e, s.toString());
                    return r
                }(t, e || {});
                return null == i || i.appendChild(r), r
            }
            var a = Object.freeze({
                __proto__: null,
                createElement: o,
                default: o
            });
            let l = {
                fetchBlob: function(t, e, i) {
                    return r(this, void 0, void 0, function*() {
                        let s = yield fetch(t, i);
                        if (s.status >= 400) throw Error(`Failed to fetch ${t}: ${s.status} (${s.statusText})`);
                        return function(t, e) {
                            r(this, void 0, void 0, function*() {
                                if (!t.body || !t.headers) return;
                                let i = t.body.getReader(),
                                    s = Number(t.headers.get("Content-Length")) || 0,
                                    n = 0,
                                    o = t => r(this, void 0, void 0, function*() {
                                        e(Math.round((n += (null == t ? void 0 : t.length) || 0) / s * 100))
                                    }),
                                    a = () => r(this, void 0, void 0, function*() {
                                        let t;
                                        try {
                                            t = yield i.read()
                                        } catch (t) {
                                            return
                                        }
                                        t.done || (o(t.value), yield a())
                                    });
                                a()
                            })
                        }(s.clone(), e), s.blob()
                    })
                }
            };
            class h extends s {
                constructor(t) {
                    super(), this.isExternalMedia = !1, t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), null != t.playbackRate && this.onMediaEvent("canplay", () => {
                        null != t.playbackRate && (this.media.playbackRate = t.playbackRate)
                    }, {
                        once: !0
                    })
                }
                onMediaEvent(t, e, i) {
                    return this.media.addEventListener(t, e, i), () => this.media.removeEventListener(t, e, i)
                }
                getSrc() {
                    return this.media.currentSrc || this.media.src || ""
                }
                revokeSrc() {
                    let t = this.getSrc();
                    t.startsWith("blob:") && URL.revokeObjectURL(t)
                }
                canPlayType(t) {
                    return "" !== this.media.canPlayType(t)
                }
                setSrc(t, e) {
                    let i = this.getSrc();
                    if (t && i === t) return;
                    this.revokeSrc();
                    let r = e instanceof Blob && (this.canPlayType(e.type) || !t) ? URL.createObjectURL(e) : t;
                    try {
                        this.media.src = r
                    } catch (e) {
                        this.media.src = t
                    }
                }
                destroy() {
                    this.media.pause(), this.isExternalMedia || (this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load())
                }
                setMediaElement(t) {
                    this.media = t
                }
                play() {
                    return r(this, void 0, void 0, function*() {
                        return this.media.play()
                    })
                }
                pause() {
                    this.media.pause()
                }
                isPlaying() {
                    return !this.media.paused && !this.media.ended
                }
                setTime(t) {
                    this.media.currentTime = t
                }
                getDuration() {
                    return this.media.duration
                }
                getCurrentTime() {
                    return this.media.currentTime
                }
                getVolume() {
                    return this.media.volume
                }
                setVolume(t) {
                    this.media.volume = t
                }
                getMuted() {
                    return this.media.muted
                }
                setMuted(t) {
                    this.media.muted = t
                }
                getPlaybackRate() {
                    return this.media.playbackRate
                }
                isSeeking() {
                    return this.media.seeking
                }
                setPlaybackRate(t, e) {
                    null != e && (this.media.preservesPitch = e), this.media.playbackRate = t
                }
                getMediaElement() {
                    return this.media
                }
                setSinkId(t) {
                    return this.media.setSinkId(t)
                }
            }
            class d extends s {
                constructor(t, e) {
                    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.subscriptions = [], this.options = t;
                    let i = this.parentFromOptionsContainer(t.container);
                    this.parent = i;
                    let [r, s] = this.initHtml();
                    i.appendChild(r), this.container = r, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), e && s.appendChild(e), this.initEvents()
                }
                parentFromOptionsContainer(t) {
                    let e;
                    if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (e = t), !e) throw Error("Container not found");
                    return e
                }
                initEvents() {
                    let t = t => {
                        let e = this.wrapper.getBoundingClientRect(),
                            i = t.clientX - e.left,
                            r = t.clientY - e.top;
                        return [i / e.width, r / e.height]
                    };
                    if (this.wrapper.addEventListener("click", e => {
                            let [i, r] = t(e);
                            this.emit("click", i, r)
                        }), this.wrapper.addEventListener("dblclick", e => {
                            let [i, r] = t(e);
                            this.emit("dblclick", i, r)
                        }), !0 !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
                            let {
                                scrollLeft: t,
                                scrollWidth: e,
                                clientWidth: i
                            } = this.scrollContainer;
                            this.emit("scroll", t / e, (t + i) / e, t, t + i)
                        }), "function" == typeof ResizeObserver) {
                        let t = this.createDelay(100);
                        this.resizeObserver = new ResizeObserver(() => {
                            t().then(() => this.onContainerResize()).catch(() => {})
                        }), this.resizeObserver.observe(this.scrollContainer)
                    }
                }
                onContainerResize() {
                    let t = this.parent.clientWidth;
                    t === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t, this.reRender())
                }
                initDrag() {
                    this.subscriptions.push(function(t, e, i, r, s = 3, n = 0, o = 100) {
                        if (!t) return () => {};
                        let a = matchMedia("(pointer: coarse)").matches,
                            l = () => {},
                            h = h => {
                                if (h.button !== n) return;
                                h.preventDefault(), h.stopPropagation();
                                let d = h.clientX,
                                    u = h.clientY,
                                    c = !1,
                                    p = Date.now(),
                                    m = r => {
                                        if (r.preventDefault(), r.stopPropagation(), a && Date.now() - p < o) return;
                                        let n = r.clientX,
                                            l = r.clientY,
                                            h = n - d,
                                            m = l - u;
                                        if (c || Math.abs(h) > s || Math.abs(m) > s) {
                                            let {
                                                left: r,
                                                top: s
                                            } = t.getBoundingClientRect();
                                            c || (null == i || i(d - r, u - s), c = !0), e(h, m, n - r, l - s), d = n, u = l
                                        }
                                    },
                                    g = e => {
                                        if (c) {
                                            let i = e.clientX,
                                                s = e.clientY,
                                                {
                                                    left: n,
                                                    top: o
                                                } = t.getBoundingClientRect();
                                            null == r || r(i - n, s - o)
                                        }
                                        l()
                                    },
                                    f = t => {
                                        t.relatedTarget && t.relatedTarget !== document.documentElement || g(t)
                                    },
                                    v = t => {
                                        c && (t.stopPropagation(), t.preventDefault())
                                    },
                                    b = t => {
                                        c && t.preventDefault()
                                    };
                                document.addEventListener("pointermove", m), document.addEventListener("pointerup", g), document.addEventListener("pointerout", f), document.addEventListener("pointercancel", f), document.addEventListener("touchmove", b, {
                                    passive: !1
                                }), document.addEventListener("click", v, {
                                    capture: !0
                                }), l = () => {
                                    document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", g), document.removeEventListener("pointerout", f), document.removeEventListener("pointercancel", f), document.removeEventListener("touchmove", b), setTimeout(() => {
                                        document.removeEventListener("click", v, {
                                            capture: !0
                                        })
                                    }, 10)
                                }
                            };
                        return t.addEventListener("pointerdown", h), () => {
                            l(), t.removeEventListener("pointerdown", h)
                        }
                    }(this.wrapper, (t, e, i) => {
                        this.emit("drag", Math.max(0, Math.min(1, i / this.wrapper.getBoundingClientRect().width)))
                    }, t => {
                        this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)))
                    }, t => {
                        this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)))
                    }))
                }
                getHeight(t, e) {
                    var i;
                    let r = (null === (i = this.audioData) || void 0 === i ? void 0 : i.numberOfChannels) || 1;
                    if (null == t) return 128;
                    if (!isNaN(Number(t))) return Number(t);
                    if ("auto" === t) {
                        let t = this.parent.clientHeight || 128;
                        return (null == e ? void 0 : e.every(t => !t.overlay)) ? t / r : t
                    }
                    return 128
                }
                initHtml() {
                    let t = document.createElement("div"),
                        e = t.attachShadow({
                            mode: "open"
                        });
                    return e.innerHTML = `
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t, e]
                }
                setOptions(t) {
                    if (this.options.container !== t.container) {
                        let e = this.parentFromOptionsContainer(t.container);
                        e.appendChild(this.container), this.parent = e
                    }!0 !== t.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t, this.reRender()
                }
                getWrapper() {
                    return this.wrapper
                }
                getWidth() {
                    return this.scrollContainer.clientWidth
                }
                getScroll() {
                    return this.scrollContainer.scrollLeft
                }
                setScroll(t) {
                    this.scrollContainer.scrollLeft = t
                }
                setScrollPercentage(t) {
                    let {
                        scrollWidth: e
                    } = this.scrollContainer;
                    this.setScroll(e * t)
                }
                destroy() {
                    var t, e;
                    this.subscriptions.forEach(t => t()), this.container.remove(), null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), null === (e = this.unsubscribeOnScroll) || void 0 === e || e.call(this)
                }
                createDelay(t = 10) {
                    let e, i, r = () => {
                        e && clearTimeout(e), i && i()
                    };
                    return this.timeouts.push(r), () => new Promise((s, n) => {
                        r(), i = n, e = setTimeout(() => {
                            e = void 0, i = void 0, s()
                        }, t)
                    })
                }
                convertColorValues(t) {
                    if (!Array.isArray(t)) return t || "";
                    if (t.length < 2) return t[0] || "";
                    let e = document.createElement("canvas"),
                        i = e.getContext("2d"),
                        r = e.height * (window.devicePixelRatio || 1),
                        s = i.createLinearGradient(0, 0, 0, r),
                        n = 1 / (t.length - 1);
                    return t.forEach((t, e) => {
                        s.addColorStop(e * n, t)
                    }), s
                }
                getPixelRatio() {
                    return Math.max(1, window.devicePixelRatio || 1)
                }
                renderBarWaveform(t, e, i, r) {
                    let s = t[0],
                        n = t[1] || t[0],
                        o = s.length,
                        {
                            width: a,
                            height: l
                        } = i.canvas,
                        h = l / 2,
                        d = this.getPixelRatio(),
                        u = e.barWidth ? e.barWidth * d : 1,
                        c = e.barGap ? e.barGap * d : e.barWidth ? u / 2 : 0,
                        p = e.barRadius || 0,
                        m = a / (u + c) / o,
                        g = p && "roundRect" in i ? "roundRect" : "rect";
                    i.beginPath();
                    let f = 0,
                        v = 0,
                        b = 0;
                    for (let t = 0; t <= o; t++) {
                        let o = Math.round(t * m);
                        if (o > f) {
                            let t = Math.round(v * h * r),
                                s = t + Math.round(b * h * r) || 1,
                                n = h - t;
                            "top" === e.barAlign ? n = 0 : "bottom" === e.barAlign && (n = l - s), i[g](f * (u + c), n, u, s, p), f = o, v = 0, b = 0
                        }
                        let a = Math.abs(s[t] || 0),
                            d = Math.abs(n[t] || 0);
                        a > v && (v = a), d > b && (b = d)
                    }
                    i.fill(), i.closePath()
                }
                renderLineWaveform(t, e, i, r) {
                    let s = e => {
                        let s = t[e] || t[0],
                            n = s.length,
                            {
                                height: o
                            } = i.canvas,
                            a = o / 2,
                            l = i.canvas.width / n;
                        i.moveTo(0, a);
                        let h = 0,
                            d = 0;
                        for (let t = 0; t <= n; t++) {
                            let n = Math.round(t * l);
                            if (n > h) {
                                let t = a + (Math.round(d * a * r) || 1) * (0 === e ? -1 : 1);
                                i.lineTo(h, t), h = n, d = 0
                            }
                            let o = Math.abs(s[t] || 0);
                            o > d && (d = o)
                        }
                        i.lineTo(h, a)
                    };
                    i.beginPath(), s(0), s(1), i.fill(), i.closePath()
                }
                renderWaveform(t, e, i) {
                    if (i.fillStyle = this.convertColorValues(e.waveColor), e.renderFunction) return void e.renderFunction(t, i);
                    let r = e.barHeight || 1;
                    if (e.normalize) {
                        let e = Array.from(t[0]).reduce((t, e) => Math.max(t, Math.abs(e)), 0);
                        r = e ? 1 / e : 1
                    }
                    e.barWidth || e.barGap || e.barAlign ? this.renderBarWaveform(t, e, i, r) : this.renderLineWaveform(t, e, i, r)
                }
                renderSingleCanvas(t, e, i, r, s, n, o) {
                    let a = this.getPixelRatio(),
                        l = document.createElement("canvas");
                    l.width = Math.round(i * a), l.height = Math.round(r * a), l.style.width = `${i}px`, l.style.height = `${r}px`, l.style.left = `${Math.round(s)}px`, n.appendChild(l);
                    let h = l.getContext("2d");
                    if (this.renderWaveform(t, e, h), l.width > 0 && l.height > 0) {
                        let t = l.cloneNode(),
                            i = t.getContext("2d");
                        i.drawImage(l, 0, 0), i.globalCompositeOperation = "source-in", i.fillStyle = this.convertColorValues(e.progressColor), i.fillRect(0, 0, l.width, l.height), o.appendChild(t)
                    }
                }
                renderMultiCanvas(t, e, i, r, s, n) {
                    let o = this.getPixelRatio(),
                        {
                            clientWidth: a
                        } = this.scrollContainer;
                    if (a * o >= i) return void this.renderSingleCanvas(t, e, a, r, 0, s, n);
                    let l = i / o,
                        h = Math.min(d.MAX_CANVAS_WIDTH, a, l),
                        u = {};
                    if (e.barWidth || e.barGap) {
                        let t = e.barWidth || .5,
                            i = t + (e.barGap || t / 2);
                        h % i != 0 && (h = Math.floor(h / i) * i)
                    }
                    let c = i => {
                            if (i < 0 || i >= p || u[i]) return;
                            u[i] = !0;
                            let o = i * h,
                                a = Math.min(l - o, h);
                            if (a <= 0) return;
                            let d = t.map(t => {
                                let e = Math.floor(o / l * t.length),
                                    i = Math.floor((o + a) / l * t.length);
                                return t.slice(e, i)
                            });
                            this.renderSingleCanvas(d, e, a, r, o, s, n)
                        },
                        p = Math.ceil(l / h),
                        m = Math.floor(this.scrollContainer.scrollLeft / l * p);
                    c(m - 1), c(m), c(m + 1), p > 1 && (this.unsubscribeOnScroll = this.on("scroll", () => {
                        let {
                            scrollLeft: t
                        } = this.scrollContainer, e = Math.floor(t / l * p);
                        Object.keys(u).length > d.MAX_NODES && (s.innerHTML = "", n.innerHTML = "", u = {}), c(e - 1), c(e), c(e + 1)
                    }))
                }
                renderChannel(t, e, i, r) {
                    var {
                        overlay: s
                    } = e, n = function(t, e) {
                        var i = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (i[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (r = Object.getOwnPropertySymbols(t); s < r.length; s++) 0 > e.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (i[r[s]] = t[r[s]])
                        }
                        return i
                    }(e, ["overlay"]);
                    let o = document.createElement("div"),
                        a = this.getHeight(n.height, n.splitChannels);
                    o.style.height = `${a}px`, s && r > 0 && (o.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(o);
                    let l = o.cloneNode();
                    this.progressWrapper.appendChild(l), this.renderMultiCanvas(t, n, i, a, o, l)
                }
                render(t) {
                    return r(this, void 0, void 0, function*() {
                        var e;
                        this.timeouts.forEach(t => t()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
                        let i = this.getPixelRatio(),
                            r = this.scrollContainer.clientWidth,
                            s = Math.ceil(t.duration * (this.options.minPxPerSec || 0));
                        this.isScrollable = s > r;
                        let n = this.options.fillParent && !this.isScrollable,
                            o = (n ? r : s) * i;
                        if (this.wrapper.style.width = n ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor||this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = t, this.emit("render"), this.options.splitChannels)
                            for (let i = 0; i < t.numberOfChannels; i++) {
                                let r = Object.assign(Object.assign({}, this.options), null === (e = this.options.splitChannels) || void 0 === e ? void 0 : e[i]);
                                this.renderChannel([t.getChannelData(i)], r, o, i)
                            } else {
                                let e = [t.getChannelData(0)];
                                t.numberOfChannels > 1 && e.push(t.getChannelData(1)), this.renderChannel(e, this.options, o, 0)
                            }
                        Promise.resolve().then(() => this.emit("rendered"))
                    })
                }
                reRender() {
                    var t;
                    if (null === (t = this.unsubscribeOnScroll) || void 0 === t || t.call(this), delete this.unsubscribeOnScroll, !this.audioData) return;
                    let {
                        scrollWidth: e
                    } = this.scrollContainer, {
                        right: i
                    } = this.progressWrapper.getBoundingClientRect();
                    if (this.render(this.audioData), this.isScrollable && e !== this.scrollContainer.scrollWidth) {
                        let {
                            right: t
                        } = this.progressWrapper.getBoundingClientRect(), e = t - i;
                        e *= 2, e = (e < 0 ? Math.floor(e) : Math.ceil(e)) / 2, this.scrollContainer.scrollLeft += e
                    }
                }
                zoom(t) {
                    this.options.minPxPerSec = t, this.reRender()
                }
                scrollIntoView(t, e = !1) {
                    let {
                        scrollLeft: i,
                        scrollWidth: r,
                        clientWidth: s
                    } = this.scrollContainer, n = t * r, o = i + s, a = s / 2;
                    if (this.isDragging) n + 30 > o ? this.scrollContainer.scrollLeft += 30 : n - 30 < i && (this.scrollContainer.scrollLeft -= 30);
                    else {
                        (n < i || n > o) && (this.scrollContainer.scrollLeft = n - (this.options.autoCenter ? a : 0));
                        let t = n - i - a;
                        e && this.options.autoCenter && t > 0 && (this.scrollContainer.scrollLeft += Math.min(t, 10))
                    } {
                        let t = this.scrollContainer.scrollLeft;
                        this.emit("scroll", t / r, (t + s) / r, t, t + s)
                    }
                }
                renderProgress(t, e) {
                    if (isNaN(t)) return;
                    let i = 100 * t;
                    this.canvasWrapper.style.clipPath = `polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = `translateX(-${100===Math.round(i)?this.options.cursorWidth:0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t, e)
                }
                exportImage(t, e, i) {
                    return r(this, void 0, void 0, function*() {
                        let r = this.canvasWrapper.querySelectorAll("canvas");
                        if (!r.length) throw Error("No waveform data");
                        return "dataURL" === i ? Promise.resolve(Array.from(r).map(i => i.toDataURL(t, e))) : Promise.all(Array.from(r).map(i => new Promise((r, s) => {
                            i.toBlob(t => {
                                t ? r(t) : s(Error("Could not export image"))
                            }, t, e)
                        })))
                    })
                }
            }
            d.MAX_CANVAS_WIDTH = 8e3, d.MAX_NODES = 10;
            class u extends s {
                constructor() {
                    super(...arguments), this.unsubscribe = () => {}
                }
                start() {
                    this.unsubscribe = this.on("tick", () => {
                        requestAnimationFrame(() => {
                            this.emit("tick")
                        })
                    }), this.emit("tick")
                }
                stop() {
                    this.unsubscribe()
                }
                destroy() {
                    this.unsubscribe()
                }
            }
            class c extends s {
                constructor(t = new AudioContext) {
                    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination)
                }
                load() {
                    return r(this, void 0, void 0, function*() {})
                }
                get src() {
                    return this.currentSrc
                }
                set src(t) {
                    if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
                    fetch(t).then(e => {
                        if (e.status >= 400) throw Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);
                        return e.arrayBuffer()
                    }).then(e => this.currentSrc !== t ? null : this.audioContext.decodeAudioData(e)).then(e => {
                        this.currentSrc === t && (this.buffer = e, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play())
                    })
                }
                _play() {
                    var t;
                    if (!this.paused) return;
                    this.paused = !1, null === (t = this.bufferNode) || void 0 === t || t.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
                    let e = this.playedDuration * this._playbackRate;
                    e >= this.duration && (e = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
                        this.currentTime >= this.duration && (this.pause(), this.emit("ended"))
                    }
                }
                _pause() {
                    var t;
                    this.paused = !0, null === (t = this.bufferNode) || void 0 === t || t.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime
                }
                play() {
                    return r(this, void 0, void 0, function*() {
                        this.paused && (this._play(), this.emit("play"))
                    })
                }
                pause() {
                    this.paused || (this._pause(), this.emit("pause"))
                }
                stopAt(t) {
                    var e, i;
                    let r = t - this.currentTime;
                    null === (e = this.bufferNode) || void 0 === e || e.stop(this.audioContext.currentTime + r), null === (i = this.bufferNode) || void 0 === i || i.addEventListener("ended", () => {
                        this.bufferNode = null, this.pause()
                    }, {
                        once: !0
                    })
                }
                setSinkId(t) {
                    return r(this, void 0, void 0, function*() {
                        return this.audioContext.setSinkId(t)
                    })
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(t) {
                    this._playbackRate = t, this.bufferNode && (this.bufferNode.playbackRate.value = t)
                }
                get currentTime() {
                    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate
                }
                set currentTime(t) {
                    let e = !this.paused;
                    e && this._pause(), this.playedDuration = t / this._playbackRate, e && this._play(), this.emit("seeking"), this.emit("timeupdate")
                }
                get duration() {
                    var t, e;
                    return null !== (t = this._duration) && void 0 !== t ? t : (null === (e = this.buffer) || void 0 === e ? void 0 : e.duration) || 0
                }
                set duration(t) {
                    this._duration = t
                }
                get volume() {
                    return this.gainNode.gain.value
                }
                set volume(t) {
                    this.gainNode.gain.value = t, this.emit("volumechange")
                }
                get muted() {
                    return this._muted
                }
                set muted(t) {
                    this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination))
                }
                canPlayType(t) {
                    return /^(audio|video)\//.test(t)
                }
                getGainNode() {
                    return this.gainNode
                }
                getChannelData() {
                    let t = [];
                    if (!this.buffer) return t;
                    let e = this.buffer.numberOfChannels;
                    for (let i = 0; i < e; i++) t.push(this.buffer.getChannelData(i));
                    return t
                }
            }
            let p = {
                waveColor: "#999",
                progressColor: "#555",
                cursorWidth: 1,
                minPxPerSec: 0,
                fillParent: !0,
                interact: !0,
                dragToSeek: !1,
                autoScroll: !0,
                autoCenter: !0,
                sampleRate: 8e3
            };
            class m extends h {
                static create(t) {
                    return new m(t)
                }
                constructor(t) {
                    let e = t.media || ("WebAudio" === t.backend ? new c : void 0);
                    super({
                        media: e,
                        mediaControls: t.mediaControls,
                        autoplay: t.autoplay,
                        playbackRate: t.audioRate
                    }), this.plugins = [], this.decodedData = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, p, t), this.timer = new u;
                    let i = e ? void 0 : this.getMediaElement();
                    this.renderer = new d(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
                    let r = this.options.url || this.getSrc() || "";
                    Promise.resolve().then(() => {
                        this.emit("init");
                        let {
                            peaks: t,
                            duration: e
                        } = this.options;
                        (r || t && e) && this.load(r, t, e).catch(() => null)
                    })
                }
                updateProgress(t = this.getCurrentTime()) {
                    return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t
                }
                initTimerEvents() {
                    this.subscriptions.push(this.timer.on("tick", () => {
                        if (!this.isSeeking()) {
                            let t = this.updateProgress();
                            this.emit("timeupdate", t), this.emit("audioprocess", t)
                        }
                    }))
                }
                initPlayerEvents() {
                    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
                        let t = this.updateProgress();
                        this.emit("timeupdate", t)
                    }), this.onMediaEvent("play", () => {
                        this.emit("play"), this.timer.start()
                    }), this.onMediaEvent("pause", () => {
                        this.emit("pause"), this.timer.stop()
                    }), this.onMediaEvent("emptied", () => {
                        this.timer.stop()
                    }), this.onMediaEvent("ended", () => {
                        this.emit("finish")
                    }), this.onMediaEvent("seeking", () => {
                        this.emit("seeking", this.getCurrentTime())
                    }), this.onMediaEvent("error", t => {
                        this.emit("error", t.error)
                    }))
                }
                initRendererEvents() {
                    this.subscriptions.push(this.renderer.on("click", (t, e) => {
                        this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, e))
                    }), this.renderer.on("dblclick", (t, e) => {
                        this.emit("dblclick", t, e)
                    }), this.renderer.on("scroll", (t, e, i, r) => {
                        let s = this.getDuration();
                        this.emit("scroll", t * s, e * s, i, r)
                    }), this.renderer.on("render", () => {
                        this.emit("redraw")
                    }), this.renderer.on("rendered", () => {
                        this.emit("redrawcomplete")
                    }), this.renderer.on("dragstart", t => {
                        this.emit("dragstart", t)
                    }), this.renderer.on("dragend", t => {
                        this.emit("dragend", t)
                    })); {
                        let t;
                        this.subscriptions.push(this.renderer.on("drag", e => {
                            let i;
                            this.options.interact && (this.renderer.renderProgress(e), clearTimeout(t), this.isPlaying() ? i = 0 : !0 === this.options.dragToSeek ? i = 200 : "object" == typeof this.options.dragToSeek && void 0 !== this.options.dragToSeek && (i = this.options.dragToSeek.debounceTime), t = setTimeout(() => {
                                this.seekTo(e)
                            }, i), this.emit("interaction", e * this.getDuration()), this.emit("drag", e))
                        }))
                    }
                }
                initPlugins() {
                    var t;
                    (null === (t = this.options.plugins) || void 0 === t ? void 0 : t.length) && this.options.plugins.forEach(t => {
                        this.registerPlugin(t)
                    })
                }
                unsubscribePlayerEvents() {
                    this.mediaSubscriptions.forEach(t => t()), this.mediaSubscriptions = []
                }
                setOptions(t) {
                    this.options = Object.assign({}, this.options, t), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), null != t.mediaControls && (this.getMediaElement().controls = t.mediaControls)
                }
                registerPlugin(t) {
                    return t._init(this), this.plugins.push(t), this.subscriptions.push(t.once("destroy", () => {
                        this.plugins = this.plugins.filter(e => e !== t)
                    })), t
                }
                getWrapper() {
                    return this.renderer.getWrapper()
                }
                getWidth() {
                    return this.renderer.getWidth()
                }
                getScroll() {
                    return this.renderer.getScroll()
                }
                setScroll(t) {
                    return this.renderer.setScroll(t)
                }
                setScrollTime(t) {
                    let e = t / this.getDuration();
                    this.renderer.setScrollPercentage(e)
                }
                getActivePlugins() {
                    return this.plugins
                }
                loadAudio(t, e, i, s) {
                    return r(this, void 0, void 0, function*() {
                        var r;
                        if (this.emit("load", t), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, !e && !i) {
                            let i = this.options.fetchParams || {};
                            window.AbortController && !i.signal && (this.abortController = new AbortController, i.signal = null === (r = this.abortController) || void 0 === r ? void 0 : r.signal), e = yield l.fetchBlob(t, t => this.emit("loading", t), i)
                        }
                        this.setSrc(t, e);
                        let o = yield new Promise(t => {
                            let e = s || this.getDuration();
                            e ? t(e) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t(this.getDuration()), {
                                once: !0
                            }))
                        });
                        if (!t && !e) {
                            let t = this.getMediaElement();
                            t instanceof c && (t.duration = o)
                        }
                        if (i) this.decodedData = n.createBuffer(i, o || 0);
                        else if (e) {
                            let t = yield e.arrayBuffer();
                            this.decodedData = yield n.decode(t, this.options.sampleRate)
                        }
                        this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration())
                    })
                }
                load(t, e, i) {
                    return r(this, void 0, void 0, function*() {
                        try {
                            return yield this.loadAudio(t, void 0, e, i)
                        } catch (t) {
                            throw this.emit("error", t), t
                        }
                    })
                }
                loadBlob(t, e, i) {
                    return r(this, void 0, void 0, function*() {
                        try {
                            return yield this.loadAudio("", t, e, i)
                        } catch (t) {
                            throw this.emit("error", t), t
                        }
                    })
                }
                zoom(t) {
                    if (!this.decodedData) throw Error("No audio loaded");
                    this.renderer.zoom(t), this.emit("zoom", t)
                }
                getDecodedData() {
                    return this.decodedData
                }
                exportPeaks({
                    channels: t = 2,
                    maxLength: e = 8e3,
                    precision: i = 1e4
                } = {}) {
                    if (!this.decodedData) throw Error("The audio has not been decoded yet");
                    let r = Math.min(t, this.decodedData.numberOfChannels),
                        s = [];
                    for (let t = 0; t < r; t++) {
                        let r = this.decodedData.getChannelData(t),
                            n = [],
                            o = r.length / e;
                        for (let t = 0; t < e; t++) {
                            let e = r.slice(Math.floor(t * o), Math.ceil((t + 1) * o)),
                                s = 0;
                            for (let t = 0; t < e.length; t++) {
                                let i = e[t];
                                Math.abs(i) > Math.abs(s) && (s = i)
                            }
                            n.push(Math.round(s * i) / i)
                        }
                        s.push(n)
                    }
                    return s
                }
                getDuration() {
                    let t = super.getDuration() || 0;
                    return (0 === t || t === 1 / 0) && this.decodedData && (t = this.decodedData.duration), t
                }
                toggleInteraction(t) {
                    this.options.interact = t
                }
                setTime(t) {
                    super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t)
                }
                seekTo(t) {
                    let e = this.getDuration() * t;
                    this.setTime(e)
                }
                playPause() {
                    return r(this, void 0, void 0, function*() {
                        return this.isPlaying() ? this.pause() : this.play()
                    })
                }
                stop() {
                    this.pause(), this.setTime(0)
                }
                skip(t) {
                    this.setTime(this.getCurrentTime() + t)
                }
                empty() {
                    this.load("", [
                        [0]
                    ], .001)
                }
                setMediaElement(t) {
                    this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents()
                }
                exportImage() {
                    return r(this, arguments, void 0, function*(t = "image/png", e = 1, i = "dataURL") {
                        return this.renderer.exportImage(t, e, i)
                    })
                }
                destroy() {
                    var t;
                    this.emit("destroy"), null === (t = this.abortController) || void 0 === t || t.abort(), this.plugins.forEach(t => t.destroy()), this.subscriptions.forEach(t => t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy()
                }
            }
            m.BasePlugin = class extends s {
                constructor(t) {
                    super(), this.subscriptions = [], this.options = t
                }
                onInit() {}
                _init(t) {
                    this.wavesurfer = t, this.onInit()
                }
                destroy() {
                    this.emit("destroy"), this.subscriptions.forEach(t => t())
                }
            }, m.dom = a
        }
    }
]);