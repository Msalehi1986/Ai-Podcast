(function(le) {
    typeof define == "function" && define.amd ? define(le) : le()
})(function() {
    "use strict";
    var uf = Object.defineProperty;
    var df = (le, k, et) => k in le ? uf(le, k, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: et
    }) : le[k] = et;
    var Ue = (le, k, et) => df(le, typeof k != "symbol" ? k + "" : k, et);
    var le, k, et, zo, tt, jo, qo, Ko, Go, An, Pn, In, Yo, Et = {},
        Xo = [],
        Qa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        At = Array.isArray;

    function Ce(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Tn(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function J(e, t, n) {
        var o, r, i, a = {};
        for (i in t) i == "key" ? o = t[i] : i == "ref" ? r = t[i] : a[i] = t[i];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? le.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
            for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
        return Pt(e, a, o, r, null)
    }

    function Pt(e, t, n, o, r) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: r ? ? ++et,
            __i: -1,
            __u: 0
        };
        return r == null && k.vnode != null && k.vnode(i), i
    }

    function Zo() {
        return {
            current: null
        }
    }

    function oe(e) {
        return e.children
    }

    function _e(e, t) {
        this.props = e, this.context = t
    }

    function lt(e, t) {
        if (t == null) return e.__ ? lt(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
        return typeof e.type == "function" ? lt(e) : null
    }

    function Jo(e) {
        var t, n;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if ((n = e.__k[t]) != null && n.__e != null) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return Jo(e)
        }
    }

    function On(e) {
        (!e.__d && (e.__d = !0) && tt.push(e) && !Ht.__r++ || jo !== k.debounceRendering) && ((jo = k.debounceRendering) || qo)(Ht)
    }

    function Ht() {
        for (var e, t, n, o, r, i, a, s = 1; tt.length;) tt.length > s && tt.sort(Ko), e = tt.shift(), s = tt.length, e.__d && (n = void 0, r = (o = (t = e).__v).__e, i = [], a = [], t.__P && ((n = Ce({}, o)).__v = o.__v + 1, k.vnode && k.vnode(n), Nn(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, i, r ? ? lt(o), !!(32 & o.__u), a), n.__v = o.__v, n.__.__k[n.__i] = n, or(i, n, a), n.__e != r && Jo(n)));
        Ht.__r = 0
    }

    function Qo(e, t, n, o, r, i, a, s, c, l, d) {
        var u, h, p, _, f, m, g = o && o.__k || Xo,
            w = t.length;
        for (c = es(n, t, g, c, w), u = 0; u < w; u++)(p = n.__k[u]) != null && (h = p.__i === -1 ? Et : g[p.__i] || Et, p.__i = u, m = Nn(e, p, h, r, i, a, s, c, l, d), _ = p.__e, p.ref && h.ref != p.ref && (h.ref && Rn(h.ref, null, p), d.push(p.ref, p.__c || _, p)), f == null && _ != null && (f = _), 4 & p.__u || h.__k === p.__k ? c = er(p, c, e) : typeof p.type == "function" && m !== void 0 ? c = m : _ && (c = _.nextSibling), p.__u &= -7);
        return n.__e = f, c
    }

    function es(e, t, n, o, r) {
        var i, a, s, c, l, d = n.length,
            u = d,
            h = 0;
        for (e.__k = new Array(r), i = 0; i < r; i++)(a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (c = i + h, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Pt(null, a, null, null, null) : At(a) ? Pt(oe, {
            children: a
        }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? Pt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, s = null, (l = a.__i = ts(a, n, c, u)) !== -1 && (u--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v === null ? (l == -1 && (r > d ? h-- : r < d && h++), typeof a.type != "function" && (a.__u |= 4)) : l != c && (l == c - 1 ? h-- : l == c + 1 ? h++ : (l > c ? h-- : h++, a.__u |= 4))) : e.__k[i] = null;
        if (u)
            for (i = 0; i < d; i++)(s = n[i]) != null && !(2 & s.__u) && (s.__e == o && (o = lt(s)), ir(s, s));
        return o
    }

    function er(e, t, n) {
        var o, r;
        if (typeof e.type == "function") {
            for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = e, t = er(o[r], t, n));
            return t
        }
        e.__e != t && (t && e.type && !n.contains(t) && (t = lt(e)), n.insertBefore(e.__e, t || null), t = e.__e);
        do t = t && t.nextSibling; while (t != null && t.nodeType == 8);
        return t
    }

    function Te(e, t) {
        return t = t || [], e == null || typeof e == "boolean" || (At(e) ? e.some(function(n) {
            Te(n, t)
        }) : t.push(e)), t
    }

    function ts(e, t, n, o) {
        var r, i, a = e.key,
            s = e.type,
            c = t[n];
        if (c === null && e.key == null || c && a == c.key && s === c.type && !(2 & c.__u)) return n;
        if (o > (c != null && !(2 & c.__u) ? 1 : 0))
            for (r = n - 1, i = n + 1; r >= 0 || i < t.length;) {
                if (r >= 0) {
                    if ((c = t[r]) && !(2 & c.__u) && a == c.key && s === c.type) return r;
                    r--
                }
                if (i < t.length) {
                    if ((c = t[i]) && !(2 & c.__u) && a == c.key && s === c.type) return i;
                    i++
                }
            }
        return -1
    }

    function tr(e, t, n) {
        t[0] == "-" ? e.setProperty(t, n ? ? "") : e[t] = n == null ? "" : typeof n != "number" || Qa.test(t) ? n : n + "px"
    }

    function zt(e, t, n, o, r) {
        var i;
        e: if (t == "style")
            if (typeof n == "string") e.style.cssText = n;
            else {
                if (typeof o == "string" && (e.style.cssText = o = ""), o)
                    for (t in o) n && t in n || tr(e.style, t, "");
                if (n)
                    for (t in n) o && n[t] === o[t] || tr(e.style, t, n[t])
            }
        else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Go, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n.t = o.t : (n.t = An, e.addEventListener(t, i ? In : Pn, i)) : e.removeEventListener(t, i ? In : Pn, i);
        else {
            if (r == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
                e[t] = n ? ? "";
                break e
            } catch {}
            typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n))
        }
    }

    function nr(e) {
        return function(t) {
            if (this.l) {
                var n = this.l[t.type + e];
                if (t.u == null) t.u = An++;
                else if (t.u < n.t) return;
                return n(k.event ? k.event(t) : t)
            }
        }
    }

    function Nn(e, t, n, o, r, i, a, s, c, l) {
        var d, u, h, p, _, f, m, g, w, y, b, x, S, C, A, M, D, R = t.type;
        if (t.constructor !== void 0) return null;
        128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = k.__b) && d(t);
        e: if (typeof R == "function") try {
            if (g = t.props, w = "prototype" in R && R.prototype.render, y = (d = R.contextType) && o[d.__c], b = d ? y ? y.props.value : d.__ : o, n.__c ? m = (u = t.__c = n.__c).__ = u.__E : (w ? t.__c = u = new R(g, b) : (t.__c = u = new _e(g, b), u.constructor = R, u.render = os), y && y.sub(u), u.props = g, u.state || (u.state = {}), u.context = b, u.__n = o, h = u.__d = !0, u.__h = [], u._sb = []), w && u.__s == null && (u.__s = u.state), w && R.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ce({}, u.__s)), Ce(u.__s, R.getDerivedStateFromProps(g, u.__s))), p = u.props, _ = u.state, u.__v = t, h) w && R.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), w && u.componentDidMount != null && u.__h.push(u.componentDidMount);
            else {
                if (w && R.getDerivedStateFromProps == null && g !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(g, b), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(g, u.__s, b) === !1 || t.__v == n.__v)) {
                    for (t.__v != n.__v && (u.props = g, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(B) {
                            B && (B.__ = t)
                        }), x = 0; x < u._sb.length; x++) u.__h.push(u._sb[x]);
                    u._sb = [], u.__h.length && a.push(u);
                    break e
                }
                u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, b), w && u.componentDidUpdate != null && u.__h.push(function() {
                    u.componentDidUpdate(p, _, f)
                })
            }
            if (u.context = b, u.props = g, u.__P = e, u.__e = !1, S = k.__r, C = 0, w) {
                for (u.state = u.__s, u.__d = !1, S && S(t), d = u.render(u.props, u.state, u.context), A = 0; A < u._sb.length; A++) u.__h.push(u._sb[A]);
                u._sb = []
            } else
                do u.__d = !1, S && S(t), d = u.render(u.props, u.state, u.context), u.state = u.__s; while (u.__d && ++C < 25);
            u.state = u.__s, u.getChildContext != null && (o = Ce(Ce({}, o), u.getChildContext())), w && !h && u.getSnapshotBeforeUpdate != null && (f = u.getSnapshotBeforeUpdate(p, _)), M = d, d != null && d.type === oe && d.key == null && (M = rr(d.props.children)), s = Qo(e, At(M) ? M : [M], t, n, o, r, i, a, s, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), m && (u.__E = u.__ = null)
        } catch (B) {
            if (t.__v = null, c || i != null)
                if (B.then) {
                    for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
                    i[i.indexOf(s)] = null, t.__e = s
                } else
                    for (D = i.length; D--;) Tn(i[D]);
            else t.__e = n.__e, t.__k = n.__k;
            k.__e(B, t, n)
        } else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = ns(n.__e, t, n, o, r, i, a, c, l);
        return (d = k.diffed) && d(t), 128 & t.__u ? void 0 : s
    }

    function or(e, t, n) {
        for (var o = 0; o < n.length; o++) Rn(n[o], n[++o], n[++o]);
        k.__c && k.__c(t, e), e.some(function(r) {
            try {
                e = r.__h, r.__h = [], e.some(function(i) {
                    i.call(r)
                })
            } catch (i) {
                k.__e(i, r.__v)
            }
        })
    }

    function rr(e) {
        return typeof e != "object" || e == null ? e : At(e) ? e.map(rr) : Ce({}, e)
    }

    function ns(e, t, n, o, r, i, a, s, c) {
        var l, d, u, h, p, _, f, m = n.props,
            g = t.props,
            w = t.type;
        if (w == "svg" ? r = "http://www.w3.org/2000/svg" : w == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), i != null) {
            for (l = 0; l < i.length; l++)
                if ((p = i[l]) && "setAttribute" in p == !!w && (w ? p.localName == w : p.nodeType == 3)) {
                    e = p, i[l] = null;
                    break
                }
        }
        if (e == null) {
            if (w == null) return document.createTextNode(g);
            e = document.createElementNS(r, w, g.is && g), s && (k.__m && k.__m(t, i), s = !1), i = null
        }
        if (w === null) m === g || s && e.data === g || (e.data = g);
        else {
            if (i = i && le.call(e.childNodes), m = n.props || Et, !s && i != null)
                for (m = {}, l = 0; l < e.attributes.length; l++) m[(p = e.attributes[l]).name] = p.value;
            for (l in m)
                if (p = m[l], l != "children") {
                    if (l == "dangerouslySetInnerHTML") u = p;
                    else if (!(l in g)) {
                        if (l == "value" && "defaultValue" in g || l == "checked" && "defaultChecked" in g) continue;
                        zt(e, l, null, p, r)
                    }
                }
            for (l in g) p = g[l], l == "children" ? h = p : l == "dangerouslySetInnerHTML" ? d = p : l == "value" ? _ = p : l == "checked" ? f = p : s && typeof p != "function" || m[l] === p || zt(e, l, p, m[l], r);
            if (d) s || u && (d.__html === u.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
            else if (u && (e.innerHTML = ""), Qo(t.type === "template" ? e.content : e, At(h) ? h : [h], t, n, o, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && lt(n, 0), s, c), i != null)
                for (l = i.length; l--;) Tn(i[l]);
            s || (l = "value", w == "progress" && _ == null ? e.removeAttribute("value") : _ !== void 0 && (_ !== e[l] || w == "progress" && !_ || w == "option" && _ !== m[l]) && zt(e, l, _, m[l], r), l = "checked", f !== void 0 && f !== e[l] && zt(e, l, f, m[l], r))
        }
        return e
    }

    function Rn(e, t, n) {
        try {
            if (typeof e == "function") {
                var o = typeof e.__u == "function";
                o && e.__u(), o && t == null || (e.__u = e(t))
            } else e.current = t
        } catch (r) {
            k.__e(r, n)
        }
    }

    function ir(e, t, n) {
        var o, r;
        if (k.unmount && k.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Rn(o, null, t)), (o = e.__c) != null) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (i) {
                k.__e(i, t)
            }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (r = 0; r < o.length; r++) o[r] && ir(o[r], t, n || typeof e.type != "function");
        n || Tn(e.__e), e.__c = e.__ = e.__e = void 0
    }

    function os(e, t, n) {
        return this.constructor(e, n)
    }

    function We(e, t, n) {
        var o, r, i, a;
        t == document && (t = document.documentElement), k.__ && k.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Nn(t, e = (!o && n || t).__k = J(oe, null, [e]), r || Et, Et, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? le.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o, a), or(i, e, a)
    }

    function Mn(e, t) {
        We(e, t, Mn)
    }

    function Dn(e, t, n) {
        var o, r, i, a, s = Ce({}, e.props);
        for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? o = t[i] : i == "ref" ? r = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
        return arguments.length > 2 && (s.children = arguments.length > 3 ? le.call(arguments, 2) : n), Pt(e.type, s, o || e.key, r || e.ref, null)
    }

    function re(e) {
        function t(n) {
            var o, r;
            return this.getChildContext || (o = new Set, (r = {})[t.__c] = this, this.getChildContext = function() {
                return r
            }, this.componentWillUnmount = function() {
                o = null
            }, this.shouldComponentUpdate = function(i) {
                this.props.value !== i.value && o.forEach(function(a) {
                    a.__e = !0, On(a)
                })
            }, this.sub = function(i) {
                o.add(i);
                var a = i.componentWillUnmount;
                i.componentWillUnmount = function() {
                    o && o.delete(i), a && a.call(i)
                }
            }), n.children
        }
        return t.__c = "__cC" + Yo++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, o) {
            return n.children(o)
        }).contextType = t, t
    }
    le = Xo.slice, k = {
        __e: function(e, t, n, o) {
            for (var r, i, a; t = t.__;)
                if ((r = t.__c) && !r.__) try {
                    if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), a = r.__d), a) return r.__E = r
                } catch (s) {
                    e = s
                }
            throw e
        }
    }, et = 0, zo = function(e) {
        return e != null && e.constructor == null
    }, _e.prototype.setState = function(e, t) {
        var n;
        n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof e == "function" && (e = e(Ce({}, n), this.props)), e && Ce(n, e), e != null && this.__v && (t && this._sb.push(t), On(this))
    }, _e.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), On(this))
    }, _e.prototype.render = oe, tt = [], qo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ko = function(e, t) {
        return e.__v.__b - t.__v.__b
    }, Ht.__r = 0, Go = /(PointerCapture)$|Capture$/i, An = 0, Pn = nr(!1), In = nr(!0), Yo = 0;

    function Ln() {
        return (Ln = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }).apply(this, arguments)
    }
    var rs = ["context", "children"];

    function is(e) {
        this.getChildContext = function() {
            return e.context
        };
        var t = e.children,
            n = function(o, r) {
                if (o == null) return {};
                var i, a, s = {},
                    c = Object.keys(o);
                for (a = 0; a < c.length; a++) r.indexOf(i = c[a]) >= 0 || (s[i] = o[i]);
                return s
            }(e, rs);
        return Dn(t, n)
    }

    function as() {
        var e = new CustomEvent("_preact", {
            detail: {},
            bubbles: !0,
            cancelable: !0
        });
        this.dispatchEvent(e), this._vdom = J(is, Ln({}, this._props, {
            context: e.detail.context
        }), function t(n, o) {
            if (n.nodeType === 3) return n.data;
            if (n.nodeType !== 1) return null;
            var r = [],
                i = {},
                a = 0,
                s = n.attributes,
                c = n.childNodes;
            for (a = s.length; a--;) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[ar(s[a].name)] = s[a].value);
            for (a = c.length; a--;) {
                var l = t(c[a], null),
                    d = c[a].slot;
                d ? i[d] = J(sr, {
                    name: d
                }, l) : r[a] = l
            }
            var u = o ? J(sr, null, r) : r;
            return J(o || n.nodeName.toLowerCase(), i, u)
        }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Mn : We)(this._vdom, this._root)
    }

    function ar(e) {
        return e.replace(/-(\w)/g, function(t, n) {
            return n ? n.toUpperCase() : ""
        })
    }

    function ss(e, t, n) {
        if (this._vdom) {
            var o = {};
            o[e] = n = n ? ? void 0, o[ar(e)] = n, this._vdom = Dn(this._vdom, o), We(this._vdom, this._root)
        }
    }

    function cs() {
        We(this._vdom = null, this._root)
    }

    function sr(e, t) {
        var n = this;
        return J("slot", Ln({}, e, {
            ref: function(o) {
                o ? (n.ref = o, n._listener || (n._listener = function(r) {
                    r.stopPropagation(), r.detail.context = t
                }, o.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener)
            }
        }))
    }

    function ls(e, t, n, o) {
        function r() {
            var i = Reflect.construct(HTMLElement, [], r);
            return i._vdomComponent = e, i._root = i.attachShadow({
                mode: o.mode || "open"
            }), i
        }
        return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = as, r.prototype.attributeChangedCallback = ss, r.prototype.disconnectedCallback = cs, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), r.observedAttributes = n, n.forEach(function(i) {
            Object.defineProperty(r.prototype, i, {
                get: function() {
                    return this._vdom.props[i]
                },
                set: function(a) {
                    this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
                    var s = typeof a;
                    a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a)
                }
            })
        }), customElements.define(t, r)
    }
    const cr = ["full", "compact"],
        us = ["expandable"];

    function ds(e) {
        return us.includes(e) ? (console.warn(`[ConversationalAI] The variant "${e}" is deprecated. Please use "full" or "compact" instead and choose how the widget should expand.`), "full") : cr.includes(e) ? e : cr[0]
    }
    const lr = ["never", "mobile", "desktop", "always"];

    function fs(e, t) {
        return t === "expandable" ? "always" : lr.includes(e) ? e : lr[0]
    }

    function ps(e) {
        return e.replace(/_/g, "-")
    }
    const hs = ["variant", "expandable", "override-config", "avatar-image-url", "avatar-orb-color-1", "avatar-orb-color-2", "agent-id", "signed-url", "terms-key", "server-location", "language", "dynamic-variables", "show-avatar-when-collapsed", "override-prompt", "override-first-message", "override-language", "override-voice-id"],
        ur = {
            start_call_text: "Start a call",
            end_call_text: "End",
            action_text: "Need help?",
            expand_text: "Chat with AI",
            listening_text: "Listening",
            speaking_text: "Talk to interrupt"
        },
        dr = Object.keys(ur),
        fr = dr.map(ps),
        $n = [...hs, ...fr];
    var vs = 0;

    function v(e, t, n, o, r, i) {
        t || (t = {});
        var a, s, c = t;
        if ("ref" in c)
            for (s in c = {}, t) s == "ref" ? a = t[s] : c[s] = t[s];
        var l = {
            type: e,
            props: c,
            key: n,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: --vs,
            __i: -1,
            __u: 0,
            __source: r,
            __self: i
        };
        if (typeof e == "function" && (a = e.defaultProps))
            for (s in a) c[s] === void 0 && (c[s] = a[s]);
        return k.vnode && k.vnode(l), l
    }
    var Oe, K, Fn, pr, ut = 0,
        hr = [],
        Q = k,
        vr = Q.__b,
        _r = Q.__r,
        mr = Q.diffed,
        gr = Q.__c,
        wr = Q.unmount,
        yr = Q.__;

    function nt(e, t) {
        Q.__h && Q.__h(K, e, ut || t), ut = 0;
        var n = K.__H || (K.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({}), n.__[e]
    }

    function E(e) {
        return ut = 1, jt(xr, e)
    }

    function jt(e, t, n) {
        var o = nt(Oe++, 2);
        if (o.t = e, !o.__c && (o.__ = [n ? n(t) : xr(void 0, t), function(s) {
                var c = o.__N ? o.__N[0] : o.__[0],
                    l = o.t(c, s);
                c !== l && (o.__N = [l, o.__[1]], o.__c.setState({}))
            }], o.__c = K, !K.__f)) {
            var r = function(s, c, l) {
                if (!o.__c.__H) return !0;
                var d = o.__c.__H.__.filter(function(h) {
                    return !!h.__c
                });
                if (d.every(function(h) {
                        return !h.__N
                    })) return !i || i.call(this, s, c, l);
                var u = o.__c.props !== s;
                return d.forEach(function(h) {
                    if (h.__N) {
                        var p = h.__[0];
                        h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (u = !0)
                    }
                }), i && i.call(this, s, c, l) || u
            };
            K.__f = !0;
            var i = K.shouldComponentUpdate,
                a = K.componentWillUpdate;
            K.componentWillUpdate = function(s, c, l) {
                if (this.__e) {
                    var d = i;
                    i = void 0, r(s, c, l), i = d
                }
                a && a.call(this, s, c, l)
            }, K.shouldComponentUpdate = r
        }
        return o.__N || o.__
    }

    function N(e, t) {
        var n = nt(Oe++, 3);
        !Q.__s && Hn(n.__H, t) && (n.__ = e, n.u = t, K.__H.__h.push(n))
    }

    function Ne(e, t) {
        var n = nt(Oe++, 4);
        !Q.__s && Hn(n.__H, t) && (n.__ = e, n.u = t, K.__h.push(n))
    }

    function I(e) {
        return ut = 5, H(function() {
            return {
                current: e
            }
        }, [])
    }

    function Bn(e, t, n) {
        ut = 6, Ne(function() {
            if (typeof e == "function") {
                var o = e(t());
                return function() {
                    e(null), o && typeof o == "function" && o()
                }
            }
            if (e) return e.current = t(),
                function() {
                    return e.current = null
                }
        }, n == null ? n : n.concat(e))
    }

    function H(e, t) {
        var n = nt(Oe++, 7);
        return Hn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
    }

    function z(e, t) {
        return ut = 8, H(function() {
            return e
        }, t)
    }

    function Re(e) {
        var t = K.context[e.__c],
            n = nt(Oe++, 9);
        return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(K)), t.props.value) : e.__
    }

    function Un(e, t) {
        Q.useDebugValue && Q.useDebugValue(t ? t(e) : e)
    }

    function _s(e) {
        var t = nt(Oe++, 10),
            n = E();
        return t.__ = e, K.componentDidCatch || (K.componentDidCatch = function(o, r) {
            t.__ && t.__(o, r), n[1](o)
        }), [n[0], function() {
            n[1](void 0)
        }]
    }

    function Wn() {
        var e = nt(Oe++, 11);
        if (!e.__) {
            for (var t = K.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++
        }
        return e.__
    }

    function ms() {
        for (var e; e = hr.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(qt), e.__H.__h.forEach(Vn), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], Q.__e(t, e.__v)
            }
    }
    Q.__b = function(e) {
        K = null, vr && vr(e)
    }, Q.__ = function(e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), yr && yr(e, t)
    }, Q.__r = function(e) {
        _r && _r(e), Oe = 0;
        var t = (K = e.__c).__H;
        t && (Fn === K ? (t.__h = [], K.__h = [], t.__.forEach(function(n) {
            n.__N && (n.__ = n.__N), n.u = n.__N = void 0
        })) : (t.__h.forEach(qt), t.__h.forEach(Vn), t.__h = [], Oe = 0)), Fn = K
    }, Q.diffed = function(e) {
        mr && mr(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (hr.push(t) !== 1 && pr === Q.requestAnimationFrame || ((pr = Q.requestAnimationFrame) || gs)(ms)), t.__H.__.forEach(function(n) {
            n.u && (n.__H = n.u), n.u = void 0
        })), Fn = K = null
    }, Q.__c = function(e, t) {
        t.some(function(n) {
            try {
                n.__h.forEach(qt), n.__h = n.__h.filter(function(o) {
                    return !o.__ || Vn(o)
                })
            } catch (o) {
                t.some(function(r) {
                    r.__h && (r.__h = [])
                }), t = [], Q.__e(o, n.__v)
            }
        }), gr && gr(e, t)
    }, Q.unmount = function(e) {
        wr && wr(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach(function(o) {
            try {
                qt(o)
            } catch (r) {
                t = r
            }
        }), n.__H = void 0, t && Q.__e(t, n.__v))
    };
    var br = typeof requestAnimationFrame == "function";

    function gs(e) {
        var t, n = function() {
                clearTimeout(o), br && cancelAnimationFrame(t), setTimeout(e)
            },
            o = setTimeout(n, 100);
        br && (t = requestAnimationFrame(n))
    }

    function qt(e) {
        var t = K,
            n = e.__c;
        typeof n == "function" && (e.__c = void 0, n()), K = t
    }

    function Vn(e) {
        var t = K;
        e.__c = e.__(), K = t
    }

    function Hn(e, t) {
        return !e || e.length !== t.length || t.some(function(n, o) {
            return n !== e[o]
        })
    }

    function xr(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    var ws = Symbol.for("preact-signals");

    function Kt() {
        if (Ve > 1) Ve--;
        else {
            for (var e, t = !1; It !== void 0;) {
                var n = It;
                for (It = void 0, zn++; n !== void 0;) {
                    var o = n.o;
                    if (n.o = void 0, n.f &= -3, !(8 & n.f) && kr(n)) try {
                        n.c()
                    } catch (r) {
                        t || (e = r, t = !0)
                    }
                    n = o
                }
            }
            if (zn = 0, Ve--, t) throw e
        }
    }

    function Cr(e) {
        if (Ve > 0) return e();
        Ve++;
        try {
            return e()
        } finally {
            Kt()
        }
    }
    var G = void 0,
        It = void 0,
        Ve = 0,
        zn = 0,
        Gt = 0;

    function Sr(e) {
        if (G !== void 0) {
            var t = e.n;
            if (t === void 0 || t.t !== G) return t = {
                i: 0,
                S: e,
                p: G.s,
                n: void 0,
                t: G,
                e: void 0,
                x: void 0,
                r: t
            }, G.s !== void 0 && (G.s.n = t), G.s = t, e.n = t, 32 & G.f && e.S(t), t;
            if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = G.s, t.n = void 0, G.s.n = t, G.s = t), t
        }
    }

    function ie(e) {
        this.v = e, this.i = 0, this.n = void 0, this.t = void 0
    }
    ie.prototype.brand = ws, ie.prototype.h = function() {
        return !0
    }, ie.prototype.S = function(e) {
        this.t !== e && e.e === void 0 && (e.x = this.t, this.t !== void 0 && (this.t.e = e), this.t = e)
    }, ie.prototype.U = function(e) {
        if (this.t !== void 0) {
            var t = e.e,
                n = e.x;
            t !== void 0 && (t.x = n, e.e = void 0), n !== void 0 && (n.e = t, e.x = void 0), e === this.t && (this.t = n)
        }
    }, ie.prototype.subscribe = function(e) {
        var t = this;
        return ft(function() {
            var n = t.value,
                o = G;
            G = void 0;
            try {
                e(n)
            } finally {
                G = o
            }
        })
    }, ie.prototype.valueOf = function() {
        return this.value
    }, ie.prototype.toString = function() {
        return this.value + ""
    }, ie.prototype.toJSON = function() {
        return this.value
    }, ie.prototype.peek = function() {
        var e = G;
        G = void 0;
        try {
            return this.value
        } finally {
            G = e
        }
    }, Object.defineProperty(ie.prototype, "value", {
        get: function() {
            var e = Sr(this);
            return e !== void 0 && (e.i = this.i), this.v
        },
        set: function(e) {
            if (e !== this.v) {
                if (zn > 100) throw new Error("Cycle detected");
                this.v = e, this.i++, Gt++, Ve++;
                try {
                    for (var t = this.t; t !== void 0; t = t.x) t.t.N()
                } finally {
                    Kt()
                }
            }
        }
    });

    function He(e) {
        return new ie(e)
    }

    function kr(e) {
        for (var t = e.s; t !== void 0; t = t.n)
            if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
        return !1
    }

    function Er(e) {
        for (var t = e.s; t !== void 0; t = t.n) {
            var n = t.S.n;
            if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
                e.s = t;
                break
            }
        }
    }

    function Ar(e) {
        for (var t = e.s, n = void 0; t !== void 0;) {
            var o = t.p;
            t.i === -1 ? (t.S.U(t), o !== void 0 && (o.n = t.n), t.n !== void 0 && (t.n.p = o)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = o
        }
        e.s = n
    }

    function dt(e) {
        ie.call(this, void 0), this.x = e, this.s = void 0, this.g = Gt - 1, this.f = 4
    }(dt.prototype = new ie).h = function() {
        if (this.f &= -3, 1 & this.f) return !1;
        if ((36 & this.f) == 32 || (this.f &= -5, this.g === Gt)) return !0;
        if (this.g = Gt, this.f |= 1, this.i > 0 && !kr(this)) return this.f &= -2, !0;
        var e = G;
        try {
            Er(this), G = this;
            var t = this.x();
            (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++)
        } catch (n) {
            this.v = n, this.f |= 16, this.i++
        }
        return G = e, Ar(this), this.f &= -2, !0
    }, dt.prototype.S = function(e) {
        if (this.t === void 0) {
            this.f |= 36;
            for (var t = this.s; t !== void 0; t = t.n) t.S.S(t)
        }
        ie.prototype.S.call(this, e)
    }, dt.prototype.U = function(e) {
        if (this.t !== void 0 && (ie.prototype.U.call(this, e), this.t === void 0)) {
            this.f &= -33;
            for (var t = this.s; t !== void 0; t = t.n) t.S.U(t)
        }
    }, dt.prototype.N = function() {
        if (!(2 & this.f)) {
            this.f |= 6;
            for (var e = this.t; e !== void 0; e = e.x) e.t.N()
        }
    }, Object.defineProperty(dt.prototype, "value", {
        get: function() {
            if (1 & this.f) throw new Error("Cycle detected");
            var e = Sr(this);
            if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
            return this.v
        }
    });

    function me(e) {
        return new dt(e)
    }

    function Pr(e) {
        var t = e.u;
        if (e.u = void 0, typeof t == "function") {
            Ve++;
            var n = G;
            G = void 0;
            try {
                t()
            } catch (o) {
                throw e.f &= -2, e.f |= 8, jn(e), o
            } finally {
                G = n, Kt()
            }
        }
    }

    function jn(e) {
        for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
        e.x = void 0, e.s = void 0, Pr(e)
    }

    function ys(e) {
        if (G !== this) throw new Error("Out-of-order effect");
        Ar(this), G = e, this.f &= -2, 8 & this.f && jn(this), Kt()
    }

    function Tt(e) {
        this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
    }
    Tt.prototype.c = function() {
        var e = this.S();
        try {
            if (8 & this.f || this.x === void 0) return;
            var t = this.x();
            typeof t == "function" && (this.u = t)
        } finally {
            e()
        }
    }, Tt.prototype.S = function() {
        if (1 & this.f) throw new Error("Cycle detected");
        this.f |= 1, this.f &= -9, Pr(this), Er(this), Ve++;
        var e = G;
        return G = this, ys.bind(this, e)
    }, Tt.prototype.N = function() {
        2 & this.f || (this.f |= 2, this.o = It, It = this)
    }, Tt.prototype.d = function() {
        this.f |= 8, 1 & this.f || jn(this)
    };

    function ft(e) {
        var t = new Tt(e);
        try {
            t.c()
        } catch (n) {
            throw t.d(), n
        }
        return t.d.bind(t)
    }
    var qn, Yt, Kn, Ir = [],
        Tr = [];
    ft(function() {
        qn = this.N
    })();

    function pt(e, t) {
        k[e] = t.bind(null, k[e] || function() {})
    }

    function Xt(e) {
        Kn && Kn(), Kn = e && e.S()
    }

    function Or(e) {
        var t = this,
            n = e.data,
            o = Me(n);
        o.value = n;
        var r = H(function() {
                for (var s = t, c = t.__v; c = c.__;)
                    if (c.__c) {
                        c.__c.__$f |= 4;
                        break
                    }
                var l = me(function() {
                        var p = o.value.value;
                        return p === 0 ? 0 : p === !0 ? "" : p || ""
                    }),
                    d = me(function() {
                        return !zo(l.value)
                    }),
                    u = ft(function() {
                        if (this.N = Nr, d.value) {
                            var p = l.value;
                            s.base && s.base.nodeType === 3 && (s.base.data = p)
                        }
                    }),
                    h = t.__$u.d;
                return t.__$u.d = function() {
                    u(), h.call(this)
                }, [d, l]
            }, []),
            i = r[0],
            a = r[1];
        return i.value ? a.peek() : a.value
    }
    Or.displayName = "_st", Object.defineProperties(ie.prototype, {
        constructor: {
            configurable: !0,
            value: void 0
        },
        type: {
            configurable: !0,
            value: Or
        },
        props: {
            configurable: !0,
            get: function() {
                return {
                    data: this
                }
            }
        },
        __b: {
            configurable: !0,
            value: 1
        }
    }), pt("__b", function(e, t) {
        if (typeof t.type == "string") {
            var n, o = t.props;
            for (var r in o)
                if (r !== "children") {
                    var i = o[r];
                    i instanceof ie && (n || (t.__np = n = {}), n[r] = i, o[r] = i.peek())
                }
        }
        e(t)
    }), pt("__r", function(e, t) {
        Xt();
        var n, o = t.__c;
        o && (o.__$f &= -2, (n = o.__$u) === void 0 && (o.__$u = n = function(r) {
            var i;
            return ft(function() {
                i = this
            }), i.c = function() {
                o.__$f |= 1, o.setState({})
            }, i
        }())), Yt = o, Xt(n), e(t)
    }), pt("__e", function(e, t, n, o) {
        Xt(), Yt = void 0, e(t, n, o)
    }), pt("diffed", function(e, t) {
        Xt(), Yt = void 0;
        var n;
        if (typeof t.type == "string" && (n = t.__e)) {
            var o = t.__np,
                r = t.props;
            if (o) {
                var i = n.U;
                if (i)
                    for (var a in i) {
                        var s = i[a];
                        s !== void 0 && !(a in o) && (s.d(), i[a] = void 0)
                    } else i = {}, n.U = i;
                for (var c in o) {
                    var l = i[c],
                        d = o[c];
                    l === void 0 ? (l = bs(n, c, d, r), i[c] = l) : l.o(d, r)
                }
            }
        }
        e(t)
    });

    function bs(e, t, n, o) {
        var r = t in e && e.ownerSVGElement === void 0,
            i = He(n);
        return {
            o: function(a, s) {
                i.value = a, o = s
            },
            d: ft(function() {
                this.N = Nr;
                var a = i.value.value;
                o[t] !== a && (o[t] = a, r ? e[t] = a : a ? e.setAttribute(t, a) : e.removeAttribute(t))
            })
        }
    }
    pt("unmount", function(e, t) {
        if (typeof t.type == "string") {
            var n = t.__e;
            if (n) {
                var o = n.U;
                if (o) {
                    n.U = void 0;
                    for (var r in o) {
                        var i = o[r];
                        i && i.d()
                    }
                }
            }
        } else {
            var a = t.__c;
            if (a) {
                var s = a.__$u;
                s && (a.__$u = void 0, s.d())
            }
        }
        e(t)
    }), pt("__h", function(e, t, n, o) {
        (o < 3 || o === 9) && (t.__$f |= 2), e(t, n, o)
    }), _e.prototype.shouldComponentUpdate = function(e, t) {
        var n = this.__$u,
            o = n && n.s !== void 0;
        for (var r in t) return !0;
        if (this.__f || typeof this.u == "boolean" && this.u === !0) {
            var i = 2 & this.__$f;
            if (!(o || i || 4 & this.__$f) || 1 & this.__$f) return !0
        } else if (!(o || 4 & this.__$f) || 3 & this.__$f) return !0;
        for (var a in e)
            if (a !== "__source" && e[a] !== this.props[a]) return !0;
        for (var s in this.props)
            if (!(s in e)) return !0;
        return !1
    };

    function Me(e) {
        return H(function() {
            return He(e)
        }, [])
    }

    function ue(e) {
        var t = I(e);
        return t.current = e, Yt.__$f |= 4, H(function() {
            return me(function() {
                return t.current()
            })
        }, [])
    }
    var xs = typeof requestAnimationFrame > "u" ? setTimeout : requestAnimationFrame,
        Cs = function(e) {
            queueMicrotask(function() {
                queueMicrotask(e)
            })
        };

    function Ss() {
        Cr(function() {
            for (var e; e = Ir.shift();) qn.call(e)
        })
    }

    function ks() {
        Ir.push(this) === 1 && (k.requestAnimationFrame || xs)(Ss)
    }

    function Es() {
        Cr(function() {
            for (var e; e = Tr.shift();) qn.call(e)
        })
    }

    function Nr() {
        Tr.push(this) === 1 && (k.requestAnimationFrame || Cs)(Es)
    }

    function ot(e) {
        var t = I(e);
        t.current = e, N(function() {
            return ft(function() {
                return this.N = ks, t.current()
            })
        }, [])
    }

    function Rr(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Gn(e, t) {
        for (var n in e)
            if (n !== "__source" && !(n in t)) return !0;
        for (var o in t)
            if (o !== "__source" && e[o] !== t[o]) return !0;
        return !1
    }

    function Yn(e, t) {
        var n = t(),
            o = E({
                t: {
                    __: n,
                    u: t
                }
            }),
            r = o[0].t,
            i = o[1];
        return Ne(function() {
            r.__ = n, r.u = t, Xn(r) && i({
                t: r
            })
        }, [e, n, t]), N(function() {
            return Xn(r) && i({
                t: r
            }), e(function() {
                Xn(r) && i({
                    t: r
                })
            })
        }, [e]), n
    }

    function Xn(e) {
        var t, n, o = e.u,
            r = e.__;
        try {
            var i = o();
            return !((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n)
        } catch {
            return !0
        }
    }

    function Zn(e) {
        e()
    }

    function Jn(e) {
        return e
    }

    function Qn() {
        return [!1, Zn]
    }
    var eo = Ne;

    function Zt(e, t) {
        this.props = e, this.context = t
    }

    function Jt(e, t) {
        function n(r) {
            var i = this.props.ref,
                a = i == r.ref;
            return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, r) || !a : Gn(this.props, r)
        }

        function o(r) {
            return this.shouldComponentUpdate = n, J(e, r)
        }
        return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o
    }(Zt.prototype = new _e).isPureReactComponent = !0, Zt.prototype.shouldComponentUpdate = function(e, t) {
        return Gn(this.props, e) || Gn(this.state, t)
    };
    var Mr = k.__b;
    k.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mr && Mr(e)
    };
    var As = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function $(e) {
        function t(n) {
            var o = Rr({}, n);
            return delete o.ref, e(o, n.ref || null)
        }
        return t.$$typeof = As, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
    }
    var Dr = function(e, t) {
            return e == null ? null : Te(Te(e).map(t))
        },
        ze = {
            map: Dr,
            forEach: Dr,
            count: function(e) {
                return e ? Te(e).length : 0
            },
            only: function(e) {
                var t = Te(e);
                if (t.length !== 1) throw "Children.only";
                return t[0]
            },
            toArray: Te
        },
        Ps = k.__e;
    k.__e = function(e, t, n, o) {
        if (e.then) {
            for (var r, i = t; i = i.__;)
                if ((r = i.__c) && r.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t)
        }
        Ps(e, t, n, o)
    };
    var Lr = k.unmount;

    function $r(e, t, n) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
            typeof o.__c == "function" && o.__c()
        }), e.__c.__H = null), (e = Rr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
            return $r(o, t, n)
        })), e
    }

    function Fr(e, t, n) {
        return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
            return Fr(o, t, n)
        }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e
    }

    function Ot() {
        this.__u = 0, this.o = null, this.__b = null
    }

    function Br(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }

    function Ur(e) {
        var t, n, o;

        function r(i) {
            if (t || (t = e()).then(function(a) {
                    n = a.default || a
                }, function(a) {
                    o = a
                }), o) throw o;
            if (!n) throw t;
            return J(n, i)
        }
        return r.displayName = "Lazy", r.__f = !0, r
    }

    function ht() {
        this.i = null, this.l = null
    }
    k.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Lr && Lr(e)
    }, (Ot.prototype = new _e).__c = function(e, t) {
        var n = t.__c,
            o = this;
        o.o == null && (o.o = []), o.o.push(n);
        var r = Br(o.__v),
            i = !1,
            a = function() {
                i || (i = !0, n.__R = null, r ? r(s) : s())
            };
        n.__R = a;
        var s = function() {
            if (!--o.__u) {
                if (o.state.__a) {
                    var c = o.state.__a;
                    o.__v.__k[0] = Fr(c, c.__c.__P, c.__c.__O)
                }
                var l;
                for (o.setState({
                        __a: o.__b = null
                    }); l = o.o.pop();) l.forceUpdate()
            }
        };
        o.__u++ || 32 & t.__u || o.setState({
            __a: o.__b = o.__v.__k[0]
        }), e.then(a, a)
    }, Ot.prototype.componentWillUnmount = function() {
        this.o = []
    }, Ot.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    o = this.__v.__k[0].__c;
                this.__v.__k[0] = $r(this.__b, n, o.__O = o.__P)
            }
            this.__b = null
        }
        var r = t.__a && J(oe, null, e.fallback);
        return r && (r.__u &= -33), [J(oe, null, t.__a ? null : e.children), r]
    };
    var Wr = function(e, t, n) {
        if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
            for (n = e.i; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.i = n = n[2]
            }
    };

    function Is(e) {
        return this.getChildContext = function() {
            return e.context
        }, e.children
    }

    function Ts(e) {
        var t = this,
            n = e.h;
        t.componentWillUnmount = function() {
            We(null, t.v), t.v = null, t.h = null
        }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            contains: function() {
                return !0
            },
            appendChild: function(o) {
                this.childNodes.push(o), t.h.appendChild(o)
            },
            insertBefore: function(o, r) {
                this.childNodes.push(o), t.h.insertBefore(o, r)
            },
            removeChild: function(o) {
                this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o)
            }
        }), We(J(Is, {
            context: t.context
        }, e.__v), t.v)
    }

    function Qt(e, t) {
        var n = J(Ts, {
            __v: e,
            h: t
        });
        return n.containerInfo = t, n
    }(ht.prototype = new _e).__a = function(e) {
        var t = this,
            n = Br(t.__v),
            o = t.l.get(e);
        return o[0]++,
            function(r) {
                var i = function() {
                    t.props.revealOrder ? (o.push(r), Wr(t, e, o)) : r()
                };
                n ? n(i) : i()
            }
    }, ht.prototype.render = function(e) {
        this.i = null, this.l = new Map;
        var t = Te(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);
        return e.children
    }, ht.prototype.componentDidUpdate = ht.prototype.componentDidMount = function() {
        var e = this;
        this.l.forEach(function(t, n) {
            Wr(e, n, t)
        })
    };
    var Vr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
        Os = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Ns = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        Rs = /[A-Z0-9]/g,
        Ms = typeof document < "u",
        Ds = function(e) {
            return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
        };

    function Hr(e, t, n) {
        return t.__k == null && (t.textContent = ""), We(e, t), typeof n == "function" && n(), e ? e.__c : null
    }

    function zr(e, t, n) {
        return Mn(e, t), typeof n == "function" && n(), e ? e.__c : null
    }
    _e.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
        Object.defineProperty(_e.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var jr = k.event;

    function Ls() {}

    function $s() {
        return this.cancelBubble
    }

    function Fs() {
        return this.defaultPrevented
    }
    k.event = function(e) {
        return jr && (e = jr(e)), e.persist = Ls, e.isPropagationStopped = $s, e.isDefaultPrevented = Fs, e.nativeEvent = e
    };
    var to, Bs = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        qr = k.vnode;
    k.vnode = function(e) {
        typeof e.type == "string" && function(t) {
            var n = t.props,
                o = t.type,
                r = {},
                i = o.indexOf("-") === -1;
            for (var a in n) {
                var s = n[a];
                if (!(a === "value" && "defaultValue" in n && s == null || Ms && a === "children" && o === "noscript" || a === "class" || a === "className")) {
                    var c = a.toLowerCase();
                    a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Ds(n.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : Ns.test(a) && (a = c) : c = a = "oninput" : i && Os.test(a) ? a = a.replace(Rs, "-$&").toLowerCase() : s === null && (s = void 0), c === "oninput" && r[a = c] && (a = "oninputCapture"), r[a] = s
                }
            }
            o == "select" && r.multiple && Array.isArray(r.value) && (r.value = Te(n.children).forEach(function(l) {
                l.props.selected = r.value.indexOf(l.props.value) != -1
            })), o == "select" && r.defaultValue != null && (r.value = Te(n.children).forEach(function(l) {
                l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value
            })), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Bs)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className), t.props = r
        }(e), e.$$typeof = Vr, qr && qr(e)
    };
    var Kr = k.__r;
    k.__r = function(e) {
        Kr && Kr(e), to = e.__c
    };
    var Gr = k.diffed;
    k.diffed = function(e) {
        Gr && Gr(e);
        var t = e.props,
            n = e.__e;
        n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), to = null
    };
    var Yr = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(e) {
                        return to.__n[e.__c].props.value
                    },
                    useCallback: z,
                    useContext: Re,
                    useDebugValue: Un,
                    useDeferredValue: Jn,
                    useEffect: N,
                    useId: Wn,
                    useImperativeHandle: Bn,
                    useInsertionEffect: eo,
                    useLayoutEffect: Ne,
                    useMemo: H,
                    useReducer: jt,
                    useRef: I,
                    useState: E,
                    useSyncExternalStore: Yn,
                    useTransition: Qn
                }
            }
        },
        Us = "18.3.1";

    function Xr(e) {
        return J.bind(null, e)
    }

    function De(e) {
        return !!e && e.$$typeof === Vr
    }

    function Zr(e) {
        return De(e) && e.type === oe
    }

    function Jr(e) {
        return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
    }

    function Nt(e) {
        return De(e) ? Dn.apply(null, arguments) : e
    }

    function Qr(e) {
        return !!e.__k && (We(null, e), !0)
    }

    function ei(e) {
        return e && (e.base || e.nodeType === 1 && e) || null
    }
    var ti = function(e, t) {
            return e(t)
        },
        en = function(e, t) {
            return e(t)
        },
        ni = oe,
        oi = De,
        Le = {
            useState: E,
            useId: Wn,
            useReducer: jt,
            useEffect: N,
            useLayoutEffect: Ne,
            useInsertionEffect: eo,
            useTransition: Qn,
            useDeferredValue: Jn,
            useSyncExternalStore: Yn,
            startTransition: Zn,
            useRef: I,
            useImperativeHandle: Bn,
            useMemo: H,
            useCallback: z,
            useContext: Re,
            useDebugValue: Un,
            version: "18.3.1",
            Children: ze,
            render: Hr,
            hydrate: zr,
            unmountComponentAtNode: Qr,
            createPortal: Qt,
            createElement: J,
            createContext: re,
            createFactory: Xr,
            cloneElement: Nt,
            createRef: Zo,
            Fragment: oe,
            isValidElement: De,
            isElement: oi,
            isFragment: Zr,
            isMemo: Jr,
            findDOMNode: ei,
            Component: _e,
            PureComponent: Zt,
            memo: Jt,
            forwardRef: $,
            flushSync: en,
            unstable_batchedUpdates: ti,
            StrictMode: ni,
            Suspense: Ot,
            SuspenseList: ht,
            lazy: Ur,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Yr
        };
    const Ws = Object.freeze(Object.defineProperty({
        __proto__: null,
        Children: ze,
        Component: _e,
        Fragment: oe,
        PureComponent: Zt,
        StrictMode: ni,
        Suspense: Ot,
        SuspenseList: ht,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Yr,
        cloneElement: Nt,
        createContext: re,
        createElement: J,
        createFactory: Xr,
        createPortal: Qt,
        createRef: Zo,
        default: Le,
        findDOMNode: ei,
        flushSync: en,
        forwardRef: $,
        hydrate: zr,
        isElement: oi,
        isFragment: Zr,
        isMemo: Jr,
        isValidElement: De,
        lazy: Ur,
        memo: Jt,
        render: Hr,
        startTransition: Zn,
        unmountComponentAtNode: Qr,
        unstable_batchedUpdates: ti,
        useCallback: z,
        useContext: Re,
        useDebugValue: Un,
        useDeferredValue: Jn,
        useEffect: N,
        useErrorBoundary: _s,
        useId: Wn,
        useImperativeHandle: Bn,
        useInsertionEffect: eo,
        useLayoutEffect: Ne,
        useMemo: H,
        useReducer: jt,
        useRef: I,
        useState: E,
        useSyncExternalStore: Yn,
        useTransition: Qn,
        version: Us
    }, Symbol.toStringTag, {
        value: "Module"
    }));

    function Se(e) {
        const t = Re(e);
        if (t == null) throw new Error(`${e.displayName} cannot be used outside of provider`);
        return t
    }
    const ri = re(null);

    function Vs({
        value: e,
        children: t
    }) {
        const n = H(() => Object.fromEntries($n.map(o => [o, He(e[o])])), []);
        return $n.forEach(o => {
            n[o].value = e[o]
        }), v(ri.Provider, {
            value: n,
            children: t
        })
    }

    function ii() {
        return Se(ri)
    }

    function ae(e) {
        return ii()[e]
    }
    const Hs = "https://api.elevenlabs.io",
        zs = "https://api.us.elevenlabs.io",
        js = "wss://api.elevenlabs.io",
        qs = "wss://api.us.elevenlabs.io",
        ai = re(null);

    function Ks({
        children: e
    }) {
        const t = ae("server-location"),
            n = H(() => {
                const o = me(() => Gs(t.value));
                return {
                    location: o,
                    serverUrl: me(() => o.value === "us" ? zs : Hs),
                    webSocketUrl: me(() => o.value === "us" ? qs : js)
                }
            }, []);
        return v(ai.Provider, {
            value: n,
            children: e
        })
    }

    function no() {
        return Se(ai)
    }

    function Gs(e = "us") {
        switch (e) {
            case "us":
            case "global":
                return e;
            default:
                return console.warn(`[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`), "us"
        }
    }
    const si = re(null);

    function Ys({
        children: e
    }) {
        const {
            serverUrl: t
        } = no(), n = ae("agent-id"), o = ae("override-config"), r = Me(null);
        ot(() => {
            if (o.value) try {
                const d = JSON.parse(o.value);
                if (d) {
                    r.value = d;
                    return
                }
            } catch (d) {
                console.error(`[ConversationalAI] Cannot parse override-config: ${d==null?void 0:d.message}`)
            }
            if (!n.value) {
                r.value = null;
                return
            }
            const l = new AbortController;
            return Xs(n.value, t.value, l.signal).then(d => {
                l.signal.aborted || (r.value = d)
            }).catch(d => {
                console.error(`[ConversationalAI] Cannot fetch config for agent ${n.value}: ${d==null?void 0:d.message}`), l.signal.aborted || (r.value = null)
            }), () => {
                l.abort()
            }
        });
        const i = ae("variant"),
            a = ae("expandable"),
            s = ae("terms-key"),
            c = ue(() => {
                if (!r.value) return null;
                const l = i.value ? ? r.value.variant,
                    d = a.value ? ? r.value.expandable;
                return { ...r.value,
                    variant: ds(l),
                    expandable: fs(d, l),
                    termsKey: s.value ? ? r.value.terms_key
                }
            });
        return c.value ? v(si.Provider, {
            value: c,
            children: e
        }) : null
    }

    function rt() {
        return Se(si)
    }
    async function Xs(e, t, n) {
        const r = await (await fetch(`${t}/v1/convai/agents/${e}/widget`, {
            signal: n
        })).json();
        if (!r.widget_config) throw new Error("Response does not contain widget_config");
        return r.widget_config
    }
    const ci = re(null);

    function Zs({
        children: e
    }) {
        const t = rt(),
            n = ae("avatar-image-url"),
            o = ae("avatar-orb-color-1"),
            r = ae("avatar-orb-color-2"),
            i = ue(() => n.value ? {
                type: "image",
                url: n.value
            } : o.value && r.value ? {
                type: "orb",
                color_1: o.value,
                color_2: r.value
            } : t.value.avatar);
        return v(ci.Provider, {
            value: i,
            children: e
        })
    }

    function Js() {
        return Se(ci)
    }

    function tn() {
        return tn = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, tn.apply(null, arguments)
    }

    function Qs(e) {
        const t = new Uint8Array(e);
        return window.btoa(String.fromCharCode(...t))
    }

    function ec(e) {
        const t = window.atob(e),
            n = t.length,
            o = new Uint8Array(n);
        for (let r = 0; r < n; r++) o[r] = t.charCodeAt(r);
        return o.buffer
    }
    const tc = new Blob([`
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.isMuted = false;
                this.buffer = []; // Initialize an empty buffer
                this.bufferSize = data.sampleRate / 4;
                this.format = data.format;

                if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
                  globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                    this.resampler = resampler;
                  });
                }
                break;
              case "setMuted":
                this.isMuted = data.isMuted;
                break;
            }
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = this.isMuted 
                ? new Float32Array(this.buffer.length)
                : new Float32Array(this.buffer);

              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `], {
            type: "application/javascript"
        }),
        nc = URL.createObjectURL(tc);

    function li() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }
    class oo {
        static async create({
            sampleRate: t,
            format: n,
            preferHeadphonesForIosDevices: o
        }) {
            let r = null,
                i = null;
            try {
                const c = {
                    sampleRate: {
                        ideal: t
                    },
                    echoCancellation: {
                        ideal: !0
                    },
                    noiseSuppression: {
                        ideal: !0
                    }
                };
                if (li() && o) {
                    const p = (await window.navigator.mediaDevices.enumerateDevices()).find(_ => _.kind === "audioinput" && ["airpod", "headphone", "earphone"].find(f => _.label.toLowerCase().includes(f)));
                    p && (c.deviceId = {
                        ideal: p.deviceId
                    })
                }
                const l = navigator.mediaDevices.getSupportedConstraints().sampleRate;
                r = new window.AudioContext(l ? {
                    sampleRate: t
                } : {});
                const d = r.createAnalyser();
                l || await r.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"), await r.audioWorklet.addModule(nc), i = await navigator.mediaDevices.getUserMedia({
                    audio: c
                });
                const u = r.createMediaStreamSource(i),
                    h = new AudioWorkletNode(r, "raw-audio-processor");
                return h.port.postMessage({
                    type: "setFormat",
                    format: n,
                    sampleRate: t
                }), u.connect(d), d.connect(h), await r.resume(), new oo(r, d, h, i)
            } catch (c) {
                var a, s;
                throw (a = i) == null || a.getTracks().forEach(l => l.stop()), (s = r) == null || s.close(), c
            }
        }
        constructor(t, n, o, r) {
            this.context = void 0, this.analyser = void 0, this.worklet = void 0, this.inputStream = void 0, this.context = t, this.analyser = n, this.worklet = o, this.inputStream = r
        }
        async close() {
            this.inputStream.getTracks().forEach(t => t.stop()), await this.context.close()
        }
        setMuted(t) {
            this.worklet.port.postMessage({
                type: "setMuted",
                isMuted: t
            })
        }
    }
    const oc = new Blob([`
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `], {
            type: "application/javascript"
        }),
        rc = URL.createObjectURL(oc);
    class ro {
        static async create({
            sampleRate: t,
            format: n
        }) {
            let o = null;
            try {
                o = new AudioContext({
                    sampleRate: t
                });
                const i = o.createAnalyser(),
                    a = o.createGain();
                a.connect(i), i.connect(o.destination), await o.audioWorklet.addModule(rc);
                const s = new AudioWorkletNode(o, "audio-concat-processor");
                return s.port.postMessage({
                    type: "setFormat",
                    format: n
                }), s.connect(a), await o.resume(), new ro(o, i, a, s)
            } catch (i) {
                var r;
                throw (r = o) == null || r.close(), i
            }
        }
        constructor(t, n, o, r) {
            this.context = void 0, this.analyser = void 0, this.gain = void 0, this.worklet = void 0, this.context = t, this.analyser = n, this.gain = o, this.worklet = r
        }
        async close() {
            await this.context.close()
        }
    }

    function ui(e) {
        return !!e.type
    }
    class io {
        static async create(t) {
            let n = null;
            try {
                var o;
                const i = (o = t.origin) != null ? o : "wss://api.elevenlabs.io",
                    a = t.signedUrl ? t.signedUrl : i + "/v1/convai/conversation?agent_id=" + t.agentId,
                    s = ["convai"];
                t.authorization && s.push(`bearer.${t.authorization}`), n = new WebSocket(a, s);
                const c = await new Promise((_, f) => {
                        n.addEventListener("open", () => {
                            var m;
                            const g = {
                                type: "conversation_initiation_client_data"
                            };
                            var w, y, b, x;
                            t.overrides && (g.conversation_config_override = {
                                agent: {
                                    prompt: (w = t.overrides.agent) == null ? void 0 : w.prompt,
                                    first_message: (y = t.overrides.agent) == null ? void 0 : y.firstMessage,
                                    language: (b = t.overrides.agent) == null ? void 0 : b.language
                                },
                                tts: {
                                    voice_id: (x = t.overrides.tts) == null ? void 0 : x.voiceId
                                }
                            }), t.customLlmExtraBody && (g.custom_llm_extra_body = t.customLlmExtraBody), t.dynamicVariables && (g.dynamic_variables = t.dynamicVariables), (m = n) == null || m.send(JSON.stringify(g))
                        }, {
                            once: !0
                        }), n.addEventListener("error", m => {
                            setTimeout(() => f(m), 0)
                        }), n.addEventListener("close", f), n.addEventListener("message", m => {
                            const g = JSON.parse(m.data);
                            ui(g) && (g.type === "conversation_initiation_metadata" ? _(g.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."))
                        }, {
                            once: !0
                        })
                    }),
                    {
                        conversation_id: l,
                        agent_output_audio_format: d,
                        user_input_audio_format: u
                    } = c,
                    h = di(u ? ? "pcm_16000"),
                    p = di(d);
                return new io(n, l, h, p)
            } catch (i) {
                var r;
                throw (r = n) == null || r.close(), i
            }
        }
        constructor(t, n, o, r) {
            this.socket = void 0, this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.queue = [], this.disconnectionDetails = null, this.onDisconnectCallback = null, this.onMessageCallback = null, this.socket = t, this.conversationId = n, this.inputFormat = o, this.outputFormat = r, this.socket.addEventListener("error", i => {
                setTimeout(() => this.disconnect({
                    reason: "error",
                    message: "The connection was closed due to a socket error.",
                    context: i
                }), 0)
            }), this.socket.addEventListener("close", i => {
                this.disconnect(i.code === 1e3 ? {
                    reason: "agent",
                    context: i
                } : {
                    reason: "error",
                    message: i.reason || "The connection was closed by the server.",
                    context: i
                })
            }), this.socket.addEventListener("message", i => {
                try {
                    const a = JSON.parse(i.data);
                    if (!ui(a)) return;
                    this.onMessageCallback ? this.onMessageCallback(a) : this.queue.push(a)
                } catch {}
            })
        }
        close() {
            this.socket.close()
        }
        sendMessage(t) {
            this.socket.send(JSON.stringify(t))
        }
        onMessage(t) {
            this.onMessageCallback = t, this.queue.forEach(t), this.queue = []
        }
        onDisconnect(t) {
            this.onDisconnectCallback = t, this.disconnectionDetails && t(this.disconnectionDetails)
        }
        disconnect(t) {
            var n;
            this.disconnectionDetails || (this.disconnectionDetails = t, (n = this.onDisconnectCallback) == null || n.call(this, t))
        }
    }

    function di(e) {
        const [t, n] = e.split("_");
        if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
        const o = parseInt(n);
        if (isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
        return {
            format: t,
            sampleRate: o
        }
    }
    const ic = {
            clientTools: {}
        },
        ac = {
            onConnect: () => {},
            onDebug: () => {},
            onDisconnect: () => {},
            onError: () => {},
            onMessage: () => {},
            onAudio: () => {},
            onModeChange: () => {},
            onStatusChange: () => {},
            onCanSendFeedbackChange: () => {}
        };
    class ao {
        static async startSession(t) {
            var n;
            const o = tn({}, ic, ac, t);
            o.onStatusChange({
                status: "connecting"
            }), o.onCanSendFeedbackChange({
                canSendFeedback: !1
            });
            let r = null,
                i = null,
                a = null,
                s = null,
                c = null;
            if ((n = t.useWakeLock) == null || n) try {
                c = await navigator.wakeLock.request("screen")
            } catch {}
            try {
                var l, d;
                s = await navigator.mediaDevices.getUserMedia({
                    audio: !0
                });
                const w = (l = t.connectionDelay) != null ? l : {
                    default: 0,
                    android: 3e3
                };
                let y = w.default;
                var u;
                if (/android/i.test(navigator.userAgent)) y = (u = w.android) != null ? u : y;
                else if (li()) {
                    var h;
                    y = (h = w.ios) != null ? h : y
                }
                return y > 0 && await new Promise(b => setTimeout(b, y)), i = await io.create(t), [r, a] = await Promise.all([oo.create(tn({}, i.inputFormat, {
                    preferHeadphonesForIosDevices: t.preferHeadphonesForIosDevices
                })), ro.create(i.outputFormat)]), (d = s) == null || d.getTracks().forEach(b => b.stop()), s = null, new ao(o, i, r, a, c)
            } catch (w) {
                var p, _, f, m;
                o.onStatusChange({
                    status: "disconnected"
                }), (p = s) == null || p.getTracks().forEach(y => y.stop()), (_ = i) == null || _.close(), await ((f = r) == null ? void 0 : f.close()), await ((m = a) == null ? void 0 : m.close());
                try {
                    var g;
                    await ((g = c) == null ? void 0 : g.release()), c = null
                } catch {}
                throw w
            }
        }
        constructor(t, n, o, r, i) {
            var a = this;
            this.options = void 0, this.connection = void 0, this.input = void 0, this.output = void 0, this.wakeLock = void 0, this.lastInterruptTimestamp = 0, this.mode = "listening", this.status = "connecting", this.inputFrequencyData = void 0, this.outputFrequencyData = void 0, this.volume = 1, this.currentEventId = 1, this.lastFeedbackEventId = 1, this.canSendFeedback = !1, this.endSession = () => this.endSessionWithDetails({
                reason: "user"
            }), this.endSessionWithDetails = async function(s) {
                if (a.status === "connected" || a.status === "connecting") {
                    a.updateStatus("disconnecting");
                    try {
                        var c;
                        await ((c = a.wakeLock) == null ? void 0 : c.release()), a.wakeLock = null
                    } catch {}
                    a.connection.close(), await a.input.close(), await a.output.close(), a.updateStatus("disconnected"), a.options.onDisconnect(s)
                }
            }, this.updateMode = s => {
                s !== this.mode && (this.mode = s, this.options.onModeChange({
                    mode: s
                }))
            }, this.updateStatus = s => {
                s !== this.status && (this.status = s, this.options.onStatusChange({
                    status: s
                }))
            }, this.updateCanSendFeedback = () => {
                const s = this.currentEventId !== this.lastFeedbackEventId;
                this.canSendFeedback !== s && (this.canSendFeedback = s, this.options.onCanSendFeedbackChange({
                    canSendFeedback: s
                }))
            }, this.onMessage = async function(s) {
                switch (s.type) {
                    case "interruption":
                        return s.interruption_event && (a.lastInterruptTimestamp = s.interruption_event.event_id), void a.fadeOutAudio();
                    case "agent_response":
                        return void a.options.onMessage({
                            source: "ai",
                            message: s.agent_response_event.agent_response
                        });
                    case "user_transcript":
                        return void a.options.onMessage({
                            source: "user",
                            message: s.user_transcription_event.user_transcript
                        });
                    case "internal_tentative_agent_response":
                        return void a.options.onDebug({
                            type: "tentative_agent_response",
                            response: s.tentative_agent_response_internal_event.tentative_agent_response
                        });
                    case "client_tool_call":
                        if (a.options.clientTools.hasOwnProperty(s.client_tool_call.tool_name)) try {
                            var c;
                            const l = (c = await a.options.clientTools[s.client_tool_call.tool_name](s.client_tool_call.parameters)) != null ? c : "Client tool execution successful.",
                                d = typeof l == "object" ? JSON.stringify(l) : String(l);
                            a.connection.sendMessage({
                                type: "client_tool_result",
                                tool_call_id: s.client_tool_call.tool_call_id,
                                result: d,
                                is_error: !1
                            })
                        } catch (l) {
                            a.onError("Client tool execution failed with following error: " + (l == null ? void 0 : l.message), {
                                clientToolName: s.client_tool_call.tool_name
                            }), a.connection.sendMessage({
                                type: "client_tool_result",
                                tool_call_id: s.client_tool_call.tool_call_id,
                                result: "Client tool execution failed: " + (l == null ? void 0 : l.message),
                                is_error: !0
                            })
                        } else {
                            if (a.options.onUnhandledClientToolCall) return void a.options.onUnhandledClientToolCall(s.client_tool_call);
                            a.onError(`Client tool with name ${s.client_tool_call.tool_name} is not defined on client`, {
                                clientToolName: s.client_tool_call.tool_name
                            }), a.connection.sendMessage({
                                type: "client_tool_result",
                                tool_call_id: s.client_tool_call.tool_call_id,
                                result: `Client tool with name ${s.client_tool_call.tool_name} is not defined on client`,
                                is_error: !0
                            })
                        }
                        return;
                    case "audio":
                        return void(a.lastInterruptTimestamp <= s.audio_event.event_id && (a.options.onAudio(s.audio_event.audio_base_64), a.addAudioBase64Chunk(s.audio_event.audio_base_64), a.currentEventId = s.audio_event.event_id, a.updateCanSendFeedback(), a.updateMode("speaking")));
                    case "ping":
                        return void a.connection.sendMessage({
                            type: "pong",
                            event_id: s.ping_event.event_id
                        });
                    default:
                        return void a.options.onDebug(s)
                }
            }, this.onInputWorkletMessage = s => {
                this.status === "connected" && this.connection.sendMessage({
                    user_audio_chunk: Qs(s.data[0].buffer)
                })
            }, this.onOutputWorkletMessage = ({
                data: s
            }) => {
                s.type === "process" && this.updateMode(s.finished ? "listening" : "speaking")
            }, this.addAudioBase64Chunk = s => {
                this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                    type: "clearInterrupted"
                }), this.output.worklet.port.postMessage({
                    type: "buffer",
                    buffer: ec(s)
                })
            }, this.fadeOutAudio = () => {
                this.updateMode("listening"), this.output.worklet.port.postMessage({
                    type: "interrupt"
                }), this.output.gain.gain.exponentialRampToValueAtTime(1e-4, this.output.context.currentTime + 2), setTimeout(() => {
                    this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({
                        type: "clearInterrupted"
                    })
                }, 2e3)
            }, this.onError = (s, c) => {
                console.error(s, c), this.options.onError(s, c)
            }, this.calculateVolume = s => {
                if (s.length === 0) return 0;
                let c = 0;
                for (let l = 0; l < s.length; l++) c += s[l] / 255;
                return c /= s.length, c < 0 ? 0 : c > 1 ? 1 : c
            }, this.getId = () => this.connection.conversationId, this.isOpen = () => this.status === "connected", this.setVolume = ({
                volume: s
            }) => {
                this.volume = s
            }, this.setMicMuted = s => {
                this.input.setMuted(s)
            }, this.getInputByteFrequencyData = () => (this.inputFrequencyData != null || (this.inputFrequencyData = new Uint8Array(this.input.analyser.frequencyBinCount)), this.input.analyser.getByteFrequencyData(this.inputFrequencyData), this.inputFrequencyData), this.getOutputByteFrequencyData = () => (this.outputFrequencyData != null || (this.outputFrequencyData = new Uint8Array(this.output.analyser.frequencyBinCount)), this.output.analyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData), this.getInputVolume = () => this.calculateVolume(this.getInputByteFrequencyData()), this.getOutputVolume = () => this.calculateVolume(this.getOutputByteFrequencyData()), this.sendFeedback = s => {
                this.canSendFeedback ? (this.connection.sendMessage({
                    type: "feedback",
                    score: s ? "like" : "dislike",
                    event_id: this.currentEventId
                }), this.lastFeedbackEventId = this.currentEventId, this.updateCanSendFeedback()) : console.warn(this.lastFeedbackEventId === 0 ? "Cannot send feedback: the conversation has not started yet." : "Cannot send feedback: feedback has already been sent for the current response.")
            }, this.sendContextualUpdate = s => {
                this.connection.sendMessage({
                    type: "contextual_update",
                    text: s
                })
            }, this.options = t, this.connection = n, this.input = o, this.output = r, this.wakeLock = i, this.options.onConnect({
                conversationId: n.conversationId
            }), this.connection.onDisconnect(this.endSessionWithDetails), this.connection.onMessage(this.onMessage), this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.output.worklet.port.onmessage = this.onOutputWorkletMessage, this.updateStatus("connected")
        }
    }

    function sc(e, t, n = "https://api.elevenlabs.io") {
        return fetch(`${n}/v1/convai/conversations/${e}/feedback`, {
            method: "POST",
            body: JSON.stringify({
                feedback: t ? "like" : "dislike"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    const fi = re(null);

    function cc({
        children: e
    }) {
        const t = rt(),
            n = ue(() => t.value.mic_muting_enabled ? ? !1),
            o = Me(!1),
            r = H(() => ({
                isMuted: me(() => n.value ? o.value : !1),
                setIsMuted: i => {
                    o.value = i
                },
                isMutingEnabled: n
            }), []);
        return v(fi.Provider, {
            value: r,
            children: e
        })
    }

    function so() {
        return Se(fi)
    }
    const Rt = {
        en: {
            name: "English",
            flagCode: "us",
            languageCode: "en"
        },
        zh: {
            name: "Chinese",
            flagCode: "cn",
            languageCode: "zh"
        },
        es: {
            name: "Spanish",
            flagCode: "es",
            languageCode: "es"
        },
        hi: {
            name: "Hindi",
            flagCode: "in",
            languageCode: "hi"
        },
        pt: {
            name: "Portuguese (Portugal)",
            flagCode: "pt",
            languageCode: "pt"
        },
        "pt-br": {
            name: "Portuguese (Brazil)",
            flagCode: "br",
            languageCode: "pt-br"
        },
        fr: {
            name: "French",
            flagCode: "fr",
            languageCode: "fr"
        },
        de: {
            name: "German",
            flagCode: "de",
            languageCode: "de"
        },
        ja: {
            name: "Japanese",
            flagCode: "jp",
            languageCode: "ja"
        },
        ar: {
            name: "Arabic",
            flagCode: "ae",
            languageCode: "ar"
        },
        ru: {
            name: "Russian",
            flagCode: "ru",
            languageCode: "ru"
        },
        ko: {
            name: "Korean",
            flagCode: "kr",
            languageCode: "ko"
        },
        id: {
            name: "Indonesian",
            flagCode: "id",
            languageCode: "id"
        },
        it: {
            name: "Italian",
            flagCode: "it",
            languageCode: "it"
        },
        nl: {
            name: "Dutch",
            flagCode: "nl",
            languageCode: "nl"
        },
        tr: {
            name: "Turkish",
            flagCode: "tr",
            languageCode: "tr"
        },
        pl: {
            name: "Polish",
            flagCode: "pl",
            languageCode: "pl"
        },
        sv: {
            name: "Swedish",
            flagCode: "se",
            languageCode: "sv"
        },
        fil: {
            name: "Filipino",
            flagCode: "ph",
            languageCode: "fi"
        },
        ms: {
            name: "Malay",
            flagCode: "my",
            languageCode: "ms"
        },
        ro: {
            name: "Romanian",
            flagCode: "ro",
            languageCode: "ro"
        },
        uk: {
            name: "Ukrainian",
            flagCode: "ua",
            languageCode: "uk"
        },
        el: {
            name: "Greek",
            flagCode: "gr",
            languageCode: "el"
        },
        cs: {
            name: "Czech",
            flagCode: "cz",
            languageCode: "cs"
        },
        da: {
            name: "Danish",
            flagCode: "dk",
            languageCode: "da"
        },
        fi: {
            name: "Finnish",
            flagCode: "fi",
            languageCode: "fi"
        },
        bg: {
            name: "Bulgarian",
            flagCode: "bg",
            languageCode: "bg"
        },
        hr: {
            name: "Croatian",
            flagCode: "hr",
            languageCode: "hr"
        },
        sk: {
            name: "Slovak",
            flagCode: "sk",
            languageCode: "sk"
        },
        ta: {
            name: "Tamil",
            flagCode: "in",
            languageCode: "ta"
        },
        hu: {
            name: "Hungarian",
            flagCode: "hu",
            languageCode: "hu"
        },
        no: {
            name: "Norwegian",
            flagCode: "no",
            languageCode: "no"
        },
        vi: {
            name: "Vietnamese",
            flagCode: "vn",
            languageCode: "vi"
        }
    };

    function nn(e) {
        return Object.keys(Rt).includes(e ? ? "")
    }
    const pi = re(null);

    function lc({
        children: e
    }) {
        const t = rt(),
            n = ae("language"),
            o = ae("override-language"),
            r = Me(n.peek() ? ? t.peek().language),
            i = ue(() => (t.value.supported_language_overrides ? ? []).filter(nn)),
            a = ue(() => i.value.map(c => Rt[c]).sort((c, l) => c.name.localeCompare(l.name))),
            s = H(() => ({
                language: me(() => nn(o.value) ? Rt[o.value] : nn(r.value) && i.value.includes(r.value) ? Rt[r.value] : Rt[t.value.language]),
                setLanguage: c => {
                    r.value = c
                },
                options: a,
                showPicker: me(() => !nn(o.value) && a.value.length > 0)
            }), []);
        return v(pi.Provider, {
            value: s,
            children: e
        })
    }

    function co() {
        return Se(pi)
    }
    const hi = re(null);

    function uc({
        children: e
    }) {
        const {
            language: t
        } = co(), n = ae("override-prompt"), o = ae("override-first-message"), r = ae("override-voice-id"), i = ue(() => ({
            agent: {
                prompt: {
                    prompt: n.value
                },
                firstMessage: o.value,
                language: t.value.languageCode
            },
            tts: {
                voiceId: r.value
            }
        })), a = ae("dynamic-variables"), s = ue(() => {
            if (a.value) try {
                return JSON.parse(a.value)
            } catch (h) {
                console.error(`[ConversationalAI] Cannot parse dynamic-variables: ${h==null?void 0:h.message}`)
            }
        }), {
            webSocketUrl: c
        } = no(), l = ae("agent-id"), d = ae("signed-url"), u = ue(() => {
            const h = {
                dynamicVariables: s.value,
                overrides: i.value
            };
            return l.value ? {
                agentId: l.value,
                origin: c.value,
                ...h
            } : d.value ? {
                signedUrl: d.value,
                ...h
            } : (console.error("[ConversationalAI] Either agent-id or signed-url is required"), null)
        });
        return u.value ? v(hi.Provider, {
            value: u,
            children: e
        }) : null
    }

    function dc() {
        return Se(hi)
    }
    const vi = re(null);

    function fc({
        children: e
    }) {
        const t = pc();
        return v(vi.Provider, {
            value: t,
            children: e
        })
    }

    function on() {
        return Se(vi)
    }

    function pc() {
        const e = I(null),
            t = I(null),
            n = dc(),
            {
                isMuted: o
            } = so();
        return ot(() => {
            var r;
            o.value && ((r = e == null ? void 0 : e.current) == null || r.setMicMuted(o.value))
        }), N(() => () => {
            var r;
            (r = e.current) == null || r.endSession()
        }, []), H(() => {
            const r = He("disconnected"),
                i = me(() => r.value === "disconnected"),
                a = He("listening"),
                s = me(() => a.value === "speaking"),
                c = He(null),
                l = He(null),
                d = He(!1);
            return {
                status: r,
                isSpeaking: s,
                mode: a,
                isDisconnected: i,
                lastId: l,
                error: c,
                canSendFeedback: d,
                startSession: async u => {
                    var h;
                    if ((h = e.current) != null && h.isOpen()) return e.current.getId();
                    if (t.current) return (await t.current).getId();
                    try {
                        t.current = ao.startSession({ ...hc(u, n.peek()),
                            onModeChange: _ => {
                                a.value = _.mode
                            },
                            onStatusChange: _ => {
                                r.value = _.status
                            },
                            onCanSendFeedbackChange: _ => {
                                d.value = _.canSendFeedback
                            },
                            onDisconnect: _ => {
                                _.reason === "error" && (c.value = _.message, console.error("[ConversationalAI] Disconnected due to an error:", _.message))
                            }
                        }), e.current = await t.current, o.peek() !== void 0 && e.current.setMicMuted(o.peek());
                        const p = e.current.getId();
                        return l.value = p, c.value = null, p
                    } catch (p) {
                        let _ = "Could not start a conversation.";
                        p instanceof CloseEvent ? _ = p.reason || _ : p instanceof Error && (_ = p.message || _), c.value = _
                    } finally {
                        t.current = null
                    }
                },
                endSession: async () => {
                    const u = e.current;
                    e.current = null, await (u == null ? void 0 : u.endSession())
                },
                getInputVolume: () => {
                    var u;
                    return ((u = e.current) == null ? void 0 : u.getInputVolume()) ? ? 0
                },
                getOutputVolume: () => {
                    var u;
                    return ((u = e.current) == null ? void 0 : u.getOutputVolume()) ? ? 0
                },
                sendFeedback: u => {
                    var h;
                    (h = e.current) == null || h.sendFeedback(u)
                }
            }
        }, [n, o])
    }

    function hc(e, t) {
        try {
            const n = new CustomEvent("elevenlabs-convai:call", {
                bubbles: !0,
                composed: !0,
                detail: {
                    config: structuredClone(t)
                }
            });
            return e.dispatchEvent(n), n.detail.config
        } catch (n) {
            return console.error("[ConversationalAI] Could not trigger call event:", n), t
        }
    }
    const _i = 1e3 * 30,
        vc = 1e3 * 5,
        _c = 1e3 * 60 * 5,
        mi = re(null);

    function mc({
        children: e
    }) {
        const t = rt(),
            {
                serverUrl: n
            } = no(),
            {
                canSendFeedback: o,
                sendFeedback: r,
                isDisconnected: i,
                error: a,
                lastId: s
            } = on(),
            c = Me(0),
            l = Me(!1);
        ot(() => {
            s.value !== null && (l.value = !0, c.value = 0)
        }), ot(() => {
            const m = Date.now() - c.value;
            if (m >= _i) l.value = !0;
            else {
                l.value = !1;
                const g = setTimeout(() => {
                    l.value = !0
                }, _i - m);
                return () => clearTimeout(g)
            }
        });
        const d = Me(o.value);
        ot(() => {
            if (o.value) {
                const m = setTimeout(() => {
                    d.value = !0
                }, vc);
                return () => clearTimeout(m)
            } else d.value = !1
        });
        const u = Me(!0);
        ot(() => {
            if (i.value) {
                const m = setTimeout(() => {
                    u.value = !1
                }, _c);
                return () => clearTimeout(m)
            } else u.value = !0
        });
        const h = Me(null),
            p = ue(() => !!s.value && h.value !== s.value && a.value === null && i.value && (t.value.feedback_mode === "end" || t.value.feedback_mode === "during")),
            _ = ue(() => !!s.value && l.value && a.value === null && !i.value && d.value && t.value.feedback_mode === "during"),
            f = H(() => ({
                endFeedbackActive: p,
                duringFeedbackActive: _,
                postEndFeedback: m => {
                    const g = s.peek();
                    p.peek() && g && (h.value = g, sc(g, m, n.peek()).catch(() => {
                        console.error(`[ConversationalAI] Cannot send feedback for conversation ${g}`)
                    }))
                },
                postDuringFeedback: m => {
                    _.peek() && (r(m), l.value = !1, c.value = Date.now())
                }
            }), []);
        return v(mi.Provider, {
            value: f,
            children: e
        })
    }

    function lo() {
        return Se(mi)
    }
    const gi = re(null);

    function gc({
        children: e
    }) {
        const t = rt(),
            n = ii(),
            o = H(() => Object.fromEntries(dr.map((r, i) => [r, me(() => n[fr[i]].value ? ? t.value[r] ? ? ur[r])])), []);
        return v(gi.Provider, {
            value: o,
            children: e
        })
    }

    function wc() {
        return Se(gi)
    }

    function wi(e) {
        var t, n, o = "";
        if (typeof e == "string" || typeof e == "number") o += e;
        else if (typeof e == "object")
            if (Array.isArray(e)) {
                var r = e.length;
                for (t = 0; t < r; t++) e[t] && (n = wi(e[t])) && (o && (o += " "), o += n)
            } else
                for (n in e) e[n] && (o && (o += " "), o += n);
        return o
    }

    function ke() {
        for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)(e = arguments[n]) && (t = wi(e)) && (o && (o += " "), o += t);
        return o
    }

    function yc(e) {
        const t = i => typeof window < "u" ? window.matchMedia(i).matches : !1,
            [n, o] = E(t(e));

        function r() {
            o(t(e))
        }
        return N(() => {
            const i = window.matchMedia(e);
            return r(), i.addListener ? i.addListener(r) : i.addEventListener("change", r), () => {
                i.removeListener ? i.removeListener(r) : i.removeEventListener("change", r)
            }
        }, [e]), n
    }
    const bc = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,
        xc = `#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,
        yi = 0,
        Cc = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
        Sc = "https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",
        Pe = class Pe {
            constructor(t) {
                Ue(this, "gl");
                Ue(this, "program");
                Ue(this, "startTime");
                Ue(this, "rafId", null);
                Ue(this, "resizeObserver");
                Ue(this, "copyNoiseImage", () => {
                    this.gl && (this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Pe.noiseImage), this.gl.generateMipmap(this.gl.TEXTURE_2D))
                });
                Ue(this, "render", () => {
                    if (!this.gl) {
                        this.rafId = null;
                        return
                    }
                    const t = (performance.now() - this.startTime) / 1e3;
                    this.gl.uniform1f(this.gl.getUniformLocation(this.program, "uTime"), t), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), this.rafId = requestAnimationFrame(this.render)
                });
                const n = t.getContext("webgl2", {
                    depth: !1,
                    stencil: !1
                });
                this.gl = n;
                const o = this.getShader(n.FRAGMENT_SHADER, bc),
                    r = this.getShader(n.VERTEX_SHADER, xc);
                if (!o || !r) throw new Error("Failed to compile shaders");
                if (this.program = n.createProgram(), n.attachShader(this.program, o), n.attachShader(this.program, r), n.linkProgram(this.program), !n.getProgramParameter(this.program, n.LINK_STATUS)) throw new Error("Failed to link program");
                const i = n.createTexture();
                n.bindTexture(n.TEXTURE_2D, i), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([128, 128, 128, 255])), Pe.noiseImage || (Pe.noiseImage = new Image, Pe.noiseImage.crossOrigin = "anonymous", Pe.noiseImage.src = Sc), Pe.noiseImage.complete ? this.copyNoiseImage() : Pe.noiseImage.addEventListener("load", this.copyNoiseImage);
                const a = n.createBuffer();
                n.bindBuffer(n.ARRAY_BUFFER, a), n.bufferData(n.ARRAY_BUFFER, Cc, n.STATIC_DRAW), n.vertexAttribPointer(yi, 2, n.FLOAT, !1, 0, 0), n.enableVertexAttribArray(yi), n.useProgram(this.program), n.uniform1i(n.getUniformLocation(this.program, "uPerlinTexture"), 0), n.uniform1fv(n.getUniformLocation(this.program, "uOffsets"), new Float32Array(7).map(() => Math.random() * Math.PI * 2)), this.updateColors("#2792DC", "#9CE6E6"), this.resizeObserver = new ResizeObserver(c => {
                    const l = c[0],
                        d = l.devicePixelContentBoxSize ? l.devicePixelContentBoxSize[0] : l.contentBoxSize[0];
                    t.width = Math.min(512, d.inlineSize), t.height = Math.min(512, d.blockSize), this.updateViewport()
                });
                const s = t.parentElement;
                if (s) try {
                    this.resizeObserver.observe(s, {
                        box: "device-pixel-content-box"
                    })
                } catch {
                    this.resizeObserver.observe(s)
                }
                this.startTime = performance.now(), this.rafId = requestAnimationFrame(this.render)
            }
            dispose() {
                var t, n, o;
                this.rafId !== null && cancelAnimationFrame(this.rafId), (t = this.resizeObserver) == null || t.disconnect(), (o = (n = this.gl) == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || o.loseContext(), this.gl = null, this.program = null
            }
            updateViewport() {
                this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)
            }
            updateColors(t, n) {
                this.updateColor("uColor1", t), this.updateColor("uColor2", n)
            }
            updateColor(t, n) {
                try {
                    const o = parseInt(n.slice(1, 3), 16) / 255,
                        r = parseInt(n.slice(3, 5), 16) / 255,
                        i = parseInt(n.slice(5, 7), 16) / 255;
                    this.gl.uniform3fv(this.gl.getUniformLocation(this.program, t), [Math.pow(o, 2.2), Math.pow(r, 2.2), Math.pow(i, 2.2)])
                } catch (o) {
                    console.error(`[ConversationalAI] Failed to parse ${n} as color:`, o)
                }
            }
            getShader(t, n) {
                const o = this.gl.createShader(t);
                return this.gl.shaderSource(o, n), this.gl.compileShader(o), this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS) ? o : (this.gl.deleteShader(o), null)
            }
        };
    Ue(Pe, "noiseImage");
    let uo = Pe;
    const P = {
        devHost: "_devHost_1f9vw_7",
        wrapper: "_wrapper_1f9vw_18",
        box: "_box_1f9vw_39",
        open: "_open_1f9vw_57",
        compact: "_compact_1f9vw_62",
        customContent: "_customContent_1f9vw_62",
        avatar: "_avatar_1f9vw_68",
        avatarBackground: "_avatarBackground_1f9vw_80",
        avatarImage: "_avatarImage_1f9vw_90",
        canvas: "_canvas_1f9vw_102",
        actions: "_actions_1f9vw_107",
        actionButtons: "_actionButtons_1f9vw_114",
        status: "_status_1f9vw_121",
        btn: "_btn_1f9vw_132",
        avatarButton: "_avatarButton_1f9vw_165",
        disabled: "_disabled_1f9vw_188",
        secondary: "_secondary_1f9vw_202",
        iconBtn: "_iconBtn_1f9vw_216",
        select: "_select_1f9vw_223",
        ellipsis: "_ellipsis_1f9vw_230",
        iconSlot: "_iconSlot_1f9vw_236",
        btnIcon: "_btnIcon_1f9vw_241",
        minimize: "_minimize_1f9vw_247",
        poweredBy: "_poweredBy_1f9vw_251",
        full: "_full_1f9vw_276",
        terms: "_terms_1f9vw_280",
        strong: "_strong_1f9vw_311",
        show: "_show_1f9vw_339",
        termsFooter: "_termsFooter_1f9vw_343",
        feedback: "_feedback_1f9vw_354",
        inlineFeedback: "_inlineFeedback_1f9vw_380",
        feedbackText: "_feedbackText_1f9vw_399",
        flag: "_flag_1f9vw_403",
        selectContent: "_selectContent_1f9vw_411",
        selectViewport: "_selectViewport_1f9vw_422",
        selectValue: "_selectValue_1f9vw_426",
        selectIcon: "_selectIcon_1f9vw_432",
        selectItem: "_selectItem_1f9vw_436",
        selectItemIndicator: "_selectItemIndicator_1f9vw_455",
        selectScrollButton: "_selectScrollButton_1f9vw_464",
        error: "_error_1f9vw_473"
    };

    function bi() {
        const {
            getInputVolume: e,
            getOutputVolume: t,
            isSpeaking: n,
            isDisconnected: o
        } = on(), r = Js(), i = I(null), a = I(null);
        ot(() => {
            if (o.value) {
                i.current.style.transform = "", a.current.style.transform = "", a.current.style.opacity = "";
                return
            }
            let c;

            function l() {
                const d = e(),
                    u = t(),
                    h = n.peek() ? 1 : .5,
                    p = n.peek() ? 1 : 1 - d * .6,
                    _ = n.peek() ? 1 + u * .6 : 1;
                i.current.style.transform = `scale(${_})`, a.current.style.transform = `scale(${p})`, a.current.style.opacity = `${h}`, c = requestAnimationFrame(l)
            }
            return l(), () => {
                cancelAnimationFrame(c)
            }
        });
        const s = ue(() => ({
            backgroundImage: r.value.type === "image" ? `url(${r.value.url})` : r.value.type === "url" ? `url(${r.value.custom_url})` : void 0
        }));
        return v("div", {
            className: P.avatar,
            children: [v("div", {
                ref: i,
                className: P.avatarBackground
            }), v("div", {
                ref: a,
                style: s,
                className: P.avatarImage,
                children: r.value.type === "orb" && v(kc, {
                    color1: r.value.color_1,
                    color2: r.value.color_2
                })
            })]
        })
    }

    function kc({
        color1: e,
        color2: t
    }) {
        const n = I(null),
            o = I(null);
        return N(() => {
            var r;
            try {
                o.current = new uo(n.current)
            } catch {
                (r = o.current) == null || r.dispose(), o.current = null
            }
            return () => {
                var i;
                (i = o.current) == null || i.dispose()
            }
        }, []), N(() => {
            var r;
            (r = o.current) == null || r.updateColors(e, t)
        }, [e, t]), v("canvas", {
            className: P.canvas,
            ref: n
        })
    }
    const Ec = {
        phone: Ac,
        "phone-off": Pc,
        "thumbs-up": Ic,
        "thumbs-down": Tc,
        mic: Oc,
        "mic-off": Nc,
        check: Dc,
        "chevron-down": Rc,
        "chevron-up": Mc
    };

    function vt({
        name: e,
        className: t
    }) {
        const n = Ec[e];
        return v("slot", {
            name: `icon-${e}`,
            className: ke(P.iconSlot, t),
            children: v(n, {})
        })
    }

    function Ac(e) {
        return v("svg", {
            viewBox: "0 0 640 640",
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            stroke: "currentColor",
            fill: "currentColor",
            ...e,
            children: v("path", {
                d: "M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z"
            })
        })
    }

    function Pc(e) {
        return v("svg", {
            viewBox: "0 0 640 640",
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            stroke: "currentColor",
            fill: "currentColor",
            ...e,
            children: v("path", {
                d: "M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z"
            })
        })
    }

    function Ic(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "lucide lucide-thumbs-up",
            ...e,
            children: [v("path", {
                d: "M7 10v12"
            }), v("path", {
                d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
            })]
        })
    }

    function Tc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: [v("path", {
                d: "M17 14V2"
            }), v("path", {
                d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
            })]
        })
    }

    function Oc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: [v("path", {
                d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
            }), v("path", {
                d: "M19 10v2a7 7 0 0 1-14 0v-2"
            }), v("line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            })]
        })
    }

    function Nc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: [v("line", {
                x1: "2",
                x2: "22",
                y1: "2",
                y2: "22"
            }), v("path", {
                d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
            }), v("path", {
                d: "M5 10v2a7 7 0 0 0 12 5"
            }), v("path", {
                d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
            }), v("path", {
                d: "M9 9v3a3 3 0 0 0 5.12 2.12"
            }), v("line", {
                x1: "12",
                x2: "12",
                y1: "19",
                y2: "22"
            })]
        })
    }

    function Rc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: v("path", {
                d: "m6 9 6 6 6-6"
            })
        })
    }

    function Mc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: v("path", {
                d: "m18 15-6-6-6 6"
            })
        })
    }

    function Dc(e) {
        return v("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: v("path", {
                d: "M20 6 9 17l-5-5"
            })
        })
    }
    const Lc = {
        primary: "",
        secondary: P.secondary
    };

    function it({
        variant: e = "secondary",
        children: t,
        icon: n,
        className: o,
        disabledStyle: r,
        truncate: i = !0,
        ...a
    }) {
        return v("button", {
            className: ke(P.btn, Lc[e], (a.disabled || r) && P.disabled, o),
            type: "button",
            ...a,
            children: [n && v(vt, {
                className: P.btnIcon,
                name: n
            }), i ? v("div", {
                className: P.ellipsis,
                children: t
            }) : t]
        })
    }

    function $c({
        value: e,
        children: t
    }) {
        const [n, o] = E(!1);
        return N(() => {
            if (n) {
                const r = setTimeout(() => {
                    o(!1)
                }, 2e3);
                return () => {
                    clearTimeout(r)
                }
            }
        }, [n]), v("button", {
            className: ke(P.btn, P.secondary),
            onClick: () => {
                navigator.clipboard.writeText(e), o(!0)
            },
            children: n ? "Copied!" : t
        })
    }

    function Fc() {
        const {
            error: e,
            lastId: t
        } = on();
        return v("div", {
            className: P.error,
            children: [v("h1", {
                children: "An error occurred"
            }), v("p", {
                children: e.value
            }), t.value && v("p", {
                children: ["Conversation ID: ", t.value]
            }), v("div", {
                className: P.termsFooter,
                children: [t.value && v($c, {
                    value: t.value,
                    children: "Copy ID"
                }), v(it, {
                    onClick: () => {
                        e.value = null
                    },
                    children: "Close"
                })]
            })]
        })
    }

    function fo({
        className: e,
        icon: t,
        ...n
    }) {
        return v(it, {
            className: ke(P.iconBtn, e),
            truncate: !1,
            ...n,
            children: v(vt, {
                name: t
            })
        })
    }
    const Bc = () => {
            const {
                postEndFeedback: e
            } = lo();
            return v(xi, {
                text: "Was the call helpful?",
                onSubmit: e,
                show: !0,
                inline: !0
            })
        },
        Uc = () => {
            const {
                duringFeedbackActive: e,
                postDuringFeedback: t
            } = lo();
            return v(xi, {
                text: "Is this response helpful?",
                onSubmit: t,
                show: e.value
            })
        },
        xi = Jt(({
            onSubmit: e,
            text: t,
            show: n,
            inline: o
        }) => v("div", {
            className: ke(o ? P.inlineFeedback : P.feedback, n && P.show),
            children: [v("span", {
                className: P.feedbackText,
                children: t
            }), v(fo, {
                icon: "thumbs-up",
                variant: o ? "primary" : "secondary",
                title: "Yes",
                onClick: () => e == null ? void 0 : e(!0)
            }), v(fo, {
                icon: "thumbs-down",
                variant: o ? "primary" : "secondary",
                title: "No",
                onClick: () => e == null ? void 0 : e(!1)
            })]
        }));

    function Ci(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
    }

    function te(e, t, {
        checkForDefaultPrevented: n = !0
    } = {}) {
        return function(r) {
            if (e == null || e(r), n === !1 || !r.defaultPrevented) return t == null ? void 0 : t(r)
        }
    }

    function Si(e, t = []) {
        let n = [];

        function o(i, a) {
            const s = re(a),
                c = n.length;
            n = [...n, a];

            function l(u) {
                const {
                    scope: h,
                    children: p,
                    ..._
                } = u, f = (h == null ? void 0 : h[e][c]) || s, m = H(() => _, Object.values(_));
                return v(f.Provider, {
                    value: m,
                    children: p
                })
            }

            function d(u, h) {
                const p = (h == null ? void 0 : h[e][c]) || s,
                    _ = Re(p);
                if (_) return _;
                if (a !== void 0) return a;
                throw new Error(`\`${u}\` must be used within \`${i}\``)
            }
            return l.displayName = i + "Provider", [l, d]
        }
        const r = () => {
            const i = n.map(a => re(a));
            return function(s) {
                const c = (s == null ? void 0 : s[e]) || i;
                return H(() => ({
                    [`__scope${e}`]: { ...s,
                        [e]: c
                    }
                }), [s, c])
            }
        };
        return r.scopeName = e, [o, Wc(r, ...t)]
    }

    function Wc(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = () => {
            const o = e.map(r => ({
                useScope: r(),
                scopeName: r.scopeName
            }));
            return function(i) {
                const a = o.reduce((s, {
                    useScope: c,
                    scopeName: l
                }) => {
                    const u = c(i)[`__scope${l}`];
                    return { ...s,
                        ...u
                    }
                }, {});
                return H(() => ({
                    [`__scope${t.scopeName}`]: a
                }), [a])
            }
        };
        return n.scopeName = t.scopeName, n
    }

    function Vc(e, t) {
        typeof e == "function" ? e(t) : e != null && (e.current = t)
    }

    function ki(...e) {
        return t => e.forEach(n => Vc(n, t))
    }

    function se(...e) {
        return z(ki(...e), e)
    }
    var Mt = $((e, t) => {
        const {
            children: n,
            ...o
        } = e, r = ze.toArray(n), i = r.find(zc);
        if (i) {
            const a = i.props.children,
                s = r.map(c => c === i ? ze.count(a) > 1 ? ze.only(null) : De(a) ? a.props.children : null : c);
            return v(po, { ...o,
                ref: t,
                children: De(a) ? Nt(a, void 0, s) : null
            })
        }
        return v(po, { ...o,
            ref: t,
            children: n
        })
    });
    Mt.displayName = "Slot";
    var po = $((e, t) => {
        const {
            children: n,
            ...o
        } = e;
        if (De(n)) {
            const r = qc(n);
            return Nt(n, { ...jc(o, n.props),
                ref: t ? ki(t, r) : r
            })
        }
        return ze.count(n) > 1 ? ze.only(null) : null
    });
    po.displayName = "SlotClone";
    var Hc = ({
        children: e
    }) => v(oe, {
        children: e
    });

    function zc(e) {
        return De(e) && e.type === Hc
    }

    function jc(e, t) {
        const n = { ...t
        };
        for (const o in t) {
            const r = e[o],
                i = t[o];
            /^on[A-Z]/.test(o) ? r && i ? n[o] = (...s) => {
                i(...s), r(...s)
            } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
                ...i
            } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "))
        }
        return { ...e,
            ...n
        }
    }

    function qc(e) {
        var o, r;
        let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
    }

    function Kc(e) {
        const t = e + "CollectionProvider",
            [n, o] = Si(t),
            [r, i] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            }),
            a = p => {
                const {
                    scope: _,
                    children: f
                } = p, m = Le.useRef(null), g = Le.useRef(new Map).current;
                return v(r, {
                    scope: _,
                    itemMap: g,
                    collectionRef: m,
                    children: f
                })
            };
        a.displayName = t;
        const s = e + "CollectionSlot",
            c = Le.forwardRef((p, _) => {
                const {
                    scope: f,
                    children: m
                } = p, g = i(s, f), w = se(_, g.collectionRef);
                return v(Mt, {
                    ref: w,
                    children: m
                })
            });
        c.displayName = s;
        const l = e + "CollectionItemSlot",
            d = "data-radix-collection-item",
            u = Le.forwardRef((p, _) => {
                const {
                    scope: f,
                    children: m,
                    ...g
                } = p, w = Le.useRef(null), y = se(_, w), b = i(l, f);
                return Le.useEffect(() => (b.itemMap.set(w, {
                    ref: w,
                    ...g
                }), () => void b.itemMap.delete(w))), v(Mt, {
                    [d]: "",
                    ref: y,
                    children: m
                })
            });
        u.displayName = l;

        function h(p) {
            const _ = i(e + "CollectionConsumer", p);
            return Le.useCallback(() => {
                const m = _.collectionRef.current;
                if (!m) return [];
                const g = Array.from(m.querySelectorAll(`[${d}]`));
                return Array.from(_.itemMap.values()).sort((b, x) => g.indexOf(b.ref.current) - g.indexOf(x.ref.current))
            }, [_.collectionRef, _.itemMap])
        }
        return [{
            Provider: a,
            Slot: c,
            ItemSlot: u
        }, h, o]
    }

    function Gc(e, t = []) {
        let n = [];

        function o(i, a) {
            const s = re(a),
                c = n.length;
            n = [...n, a];
            const l = u => {
                var g;
                const {
                    scope: h,
                    children: p,
                    ..._
                } = u, f = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || s, m = H(() => _, Object.values(_));
                return v(f.Provider, {
                    value: m,
                    children: p
                })
            };
            l.displayName = i + "Provider";

            function d(u, h) {
                var f;
                const p = ((f = h == null ? void 0 : h[e]) == null ? void 0 : f[c]) || s,
                    _ = Re(p);
                if (_) return _;
                if (a !== void 0) return a;
                throw new Error(`\`${u}\` must be used within \`${i}\``)
            }
            return [l, d]
        }
        const r = () => {
            const i = n.map(a => re(a));
            return function(s) {
                const c = (s == null ? void 0 : s[e]) || i;
                return H(() => ({
                    [`__scope${e}`]: { ...s,
                        [e]: c
                    }
                }), [s, c])
            }
        };
        return r.scopeName = e, [o, Yc(r, ...t)]
    }

    function Yc(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = () => {
            const o = e.map(r => ({
                useScope: r(),
                scopeName: r.scopeName
            }));
            return function(i) {
                const a = o.reduce((s, {
                    useScope: c,
                    scopeName: l
                }) => {
                    const u = c(i)[`__scope${l}`];
                    return { ...s,
                        ...u
                    }
                }, {});
                return H(() => ({
                    [`__scope${t.scopeName}`]: a
                }), [a])
            }
        };
        return n.scopeName = t.scopeName, n
    }
    var Xc = re(void 0);

    function Zc(e) {
        const t = Re(Xc);
        return e || t || "ltr"
    }
    var Jc = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
        ne = Jc.reduce((e, t) => {
            const n = $((o, r) => {
                const {
                    asChild: i,
                    ...a
                } = o, s = i ? Mt : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), v(s, { ...a,
                    ref: r
                })
            });
            return n.displayName = `Primitive.${t}`, { ...e,
                [t]: n
            }
        }, {});

    function Qc(e, t) {
        e && en(() => e.dispatchEvent(t))
    }

    function $e(e) {
        const t = I(e);
        return N(() => {
            t.current = e
        }), H(() => (...n) => {
            var o;
            return (o = t.current) == null ? void 0 : o.call(t, ...n)
        }, [])
    }

    function el(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = $e(e);
        N(() => {
            const o = r => {
                r.key === "Escape" && n(r)
            };
            return t.addEventListener("keydown", o, {
                capture: !0
            }), () => t.removeEventListener("keydown", o, {
                capture: !0
            })
        }, [n, t])
    }
    var tl = "DismissableLayer",
        ho = "dismissableLayer.update",
        nl = "dismissableLayer.pointerDownOutside",
        ol = "dismissableLayer.focusOutside",
        Ei, Ai = re({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }),
        Pi = $((e, t) => {
            const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: r,
                onFocusOutside: i,
                onInteractOutside: a,
                onDismiss: s,
                ...c
            } = e, l = Re(Ai), [d, u] = E(null), h = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, p] = E({}), _ = se(t, C => u(C)), f = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), g = f.indexOf(m), w = d ? f.indexOf(d) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, b = w >= g, x = al(C => {
                const A = C.target,
                    M = [...l.branches].some(D => D.contains(A));
                !b || M || (r == null || r(C), a == null || a(C), C.defaultPrevented || s == null || s())
            }, h), S = sl(C => {
                const A = C.target;
                [...l.branches].some(D => D.contains(A)) || (i == null || i(C), a == null || a(C), C.defaultPrevented || s == null || s())
            }, h);
            return el(C => {
                w === l.layers.size - 1 && (o == null || o(C), !C.defaultPrevented && s && (C.preventDefault(), s()))
            }, h), N(() => {
                if (d) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ei = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Ii(), () => {
                    n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ei)
                }
            }, [d, h, n, l]), N(() => () => {
                d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Ii())
            }, [d, l]), N(() => {
                const C = () => p({});
                return document.addEventListener(ho, C), () => document.removeEventListener(ho, C)
            }, []), v(ne.div, { ...c,
                ref: _,
                style: {
                    pointerEvents: y ? b ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: te(e.onFocusCapture, S.onFocusCapture),
                onBlurCapture: te(e.onBlurCapture, S.onBlurCapture),
                onPointerDownCapture: te(e.onPointerDownCapture, x.onPointerDownCapture)
            })
        });
    Pi.displayName = tl;
    var rl = "DismissableLayerBranch",
        il = $((e, t) => {
            const n = Re(Ai),
                o = I(null),
                r = se(t, o);
            return N(() => {
                const i = o.current;
                if (i) return n.branches.add(i), () => {
                    n.branches.delete(i)
                }
            }, [n.branches]), v(ne.div, { ...e,
                ref: r
            })
        });
    il.displayName = rl;

    function al(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = $e(e),
            o = I(!1),
            r = I(() => {});
        return N(() => {
            const i = s => {
                    if (s.target && !o.current) {
                        let c = function() {
                            Ti(nl, n, l, {
                                discrete: !0
                            })
                        };
                        const l = {
                            originalEvent: s
                        };
                        s.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = c, t.addEventListener("click", r.current, {
                            once: !0
                        })) : c()
                    } else t.removeEventListener("click", r.current);
                    o.current = !1
                },
                a = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i)
                }, 0);
            return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current)
            }
        }, [t, n]), {
            onPointerDownCapture: () => o.current = !0
        }
    }

    function sl(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = $e(e),
            o = I(!1);
        return N(() => {
            const r = i => {
                i.target && !o.current && Ti(ol, n, {
                    originalEvent: i
                }, {
                    discrete: !1
                })
            };
            return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
        }, [t, n]), {
            onFocusCapture: () => o.current = !0,
            onBlurCapture: () => o.current = !1
        }
    }

    function Ii() {
        const e = new CustomEvent(ho);
        document.dispatchEvent(e)
    }

    function Ti(e, t, n, {
        discrete: o
    }) {
        const r = n.originalEvent.target,
            i = new CustomEvent(e, {
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
        t && r.addEventListener(e, t, {
            once: !0
        }), o ? Qc(r, i) : r.dispatchEvent(i)
    }
    var vo = 0;

    function cl() {
        N(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Oi()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Oi()), vo++, () => {
                vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), vo--
            }
        }, [])
    }

    function Oi() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
    }
    var _o = "focusScope.autoFocusOnMount",
        mo = "focusScope.autoFocusOnUnmount",
        Ni = {
            bubbles: !1,
            cancelable: !0
        },
        ll = "FocusScope",
        Ri = $((e, t) => {
            const {
                loop: n = !1,
                trapped: o = !1,
                onMountAutoFocus: r,
                onUnmountAutoFocus: i,
                ...a
            } = e, [s, c] = E(null), l = $e(r), d = $e(i), u = I(null), h = se(t, f => c(f)), p = I({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            N(() => {
                if (o) {
                    let f = function(y) {
                            if (p.paused || !s) return;
                            const b = y.target;
                            s.contains(b) ? u.current = b : je(u.current, {
                                select: !0
                            })
                        },
                        m = function(y) {
                            if (p.paused || !s) return;
                            const b = y.relatedTarget;
                            b !== null && (s.contains(b) || je(u.current, {
                                select: !0
                            }))
                        },
                        g = function(y) {
                            if (document.activeElement === document.body)
                                for (const x of y) x.removedNodes.length > 0 && je(s)
                        };
                    document.addEventListener("focusin", f), document.addEventListener("focusout", m);
                    const w = new MutationObserver(g);
                    return s && w.observe(s, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), w.disconnect()
                    }
                }
            }, [o, s, p.paused]), N(() => {
                if (s) {
                    Li.add(p);
                    const f = document.activeElement;
                    if (!s.contains(f)) {
                        const g = new CustomEvent(_o, Ni);
                        s.addEventListener(_o, l), s.dispatchEvent(g), g.defaultPrevented || (ul(vl(Mi(s)), {
                            select: !0
                        }), document.activeElement === f && je(s))
                    }
                    return () => {
                        s.removeEventListener(_o, l), setTimeout(() => {
                            const g = new CustomEvent(mo, Ni);
                            s.addEventListener(mo, d), s.dispatchEvent(g), g.defaultPrevented || je(f ? ? document.body, {
                                select: !0
                            }), s.removeEventListener(mo, d), Li.remove(p)
                        }, 0)
                    }
                }
            }, [s, l, d, p]);
            const _ = z(f => {
                if (!n && !o || p.paused) return;
                const m = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
                    g = document.activeElement;
                if (m && g) {
                    const w = f.currentTarget,
                        [y, b] = dl(w);
                    y && b ? !f.shiftKey && g === b ? (f.preventDefault(), n && je(y, {
                        select: !0
                    })) : f.shiftKey && g === y && (f.preventDefault(), n && je(b, {
                        select: !0
                    })) : g === w && f.preventDefault()
                }
            }, [n, o, p.paused]);
            return v(ne.div, {
                tabIndex: -1,
                ...a,
                ref: h,
                onKeyDown: _
            })
        });
    Ri.displayName = ll;

    function ul(e, {
        select: t = !1
    } = {}) {
        const n = document.activeElement;
        for (const o of e)
            if (je(o, {
                    select: t
                }), document.activeElement !== n) return
    }

    function dl(e) {
        const t = Mi(e),
            n = Di(t, e),
            o = Di(t.reverse(), e);
        return [n, o]
    }

    function Mi(e) {
        const t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: o => {
                    const r = o.tagName === "INPUT" && o.type === "hidden";
                    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
    }

    function Di(e, t) {
        for (const n of e)
            if (!fl(n, {
                    upTo: t
                })) return n
    }

    function fl(e, {
        upTo: t
    }) {
        if (getComputedStyle(e).visibility === "hidden") return !0;
        for (; e;) {
            if (t !== void 0 && e === t) return !1;
            if (getComputedStyle(e).display === "none") return !0;
            e = e.parentElement
        }
        return !1
    }

    function pl(e) {
        return e instanceof HTMLInputElement && "select" in e
    }

    function je(e, {
        select: t = !1
    } = {}) {
        if (e && e.focus) {
            const n = document.activeElement;
            e.focus({
                preventScroll: !0
            }), e !== n && pl(e) && t && e.select()
        }
    }
    var Li = hl();

    function hl() {
        let e = [];
        return {
            add(t) {
                const n = e[0];
                t !== n && (n == null || n.pause()), e = $i(e, t), e.unshift(t)
            },
            remove(t) {
                var n;
                e = $i(e, t), (n = e[0]) == null || n.resume()
            }
        }
    }

    function $i(e, t) {
        const n = [...e],
            o = n.indexOf(t);
        return o !== -1 && n.splice(o, 1), n
    }

    function vl(e) {
        return e.filter(t => t.tagName !== "A")
    }
    var de = globalThis != null && globalThis.document ? Ne : () => {},
        _l = Ws.useId || (() => {}),
        ml = 0;

    function go(e) {
        const [t, n] = E(_l());
        return de(() => {
            e || n(o => o ? ? String(ml++))
        }, [e]), e || (t ? `radix-${t}` : "")
    }
    const gl = ["top", "right", "bottom", "left"],
        qe = Math.min,
        fe = Math.max,
        rn = Math.round,
        an = Math.floor,
        Ke = e => ({
            x: e,
            y: e
        }),
        wl = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        yl = {
            start: "end",
            end: "start"
        };

    function wo(e, t, n) {
        return fe(e, qe(t, n))
    }

    function Fe(e, t) {
        return typeof e == "function" ? e(t) : e
    }

    function Be(e) {
        return e.split("-")[0]
    }

    function _t(e) {
        return e.split("-")[1]
    }

    function yo(e) {
        return e === "x" ? "y" : "x"
    }

    function bo(e) {
        return e === "y" ? "height" : "width"
    }

    function Ge(e) {
        return ["top", "bottom"].includes(Be(e)) ? "y" : "x"
    }

    function xo(e) {
        return yo(Ge(e))
    }

    function bl(e, t, n) {
        n === void 0 && (n = !1);
        const o = _t(e),
            r = xo(e),
            i = bo(r);
        let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (a = sn(a)), [a, sn(a)]
    }

    function xl(e) {
        const t = sn(e);
        return [Co(e), t, Co(t)]
    }

    function Co(e) {
        return e.replace(/start|end/g, t => yl[t])
    }

    function Cl(e, t, n) {
        const o = ["left", "right"],
            r = ["right", "left"],
            i = ["top", "bottom"],
            a = ["bottom", "top"];
        switch (e) {
            case "top":
            case "bottom":
                return n ? t ? r : o : t ? o : r;
            case "left":
            case "right":
                return t ? i : a;
            default:
                return []
        }
    }

    function Sl(e, t, n, o) {
        const r = _t(e);
        let i = Cl(Be(e), n === "start", o);
        return r && (i = i.map(a => a + "-" + r), t && (i = i.concat(i.map(Co)))), i
    }

    function sn(e) {
        return e.replace(/left|right|bottom|top/g, t => wl[t])
    }

    function kl(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        }
    }

    function Fi(e) {
        return typeof e != "number" ? kl(e) : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }

    function cn(e) {
        const {
            x: t,
            y: n,
            width: o,
            height: r
        } = e;
        return {
            width: o,
            height: r,
            top: n,
            left: t,
            right: t + o,
            bottom: n + r,
            x: t,
            y: n
        }
    }

    function Bi(e, t, n) {
        let {
            reference: o,
            floating: r
        } = e;
        const i = Ge(t),
            a = xo(t),
            s = bo(a),
            c = Be(t),
            l = i === "y",
            d = o.x + o.width / 2 - r.width / 2,
            u = o.y + o.height / 2 - r.height / 2,
            h = o[s] / 2 - r[s] / 2;
        let p;
        switch (c) {
            case "top":
                p = {
                    x: d,
                    y: o.y - r.height
                };
                break;
            case "bottom":
                p = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                p = {
                    x: o.x + o.width,
                    y: u
                };
                break;
            case "left":
                p = {
                    x: o.x - r.width,
                    y: u
                };
                break;
            default:
                p = {
                    x: o.x,
                    y: o.y
                }
        }
        switch (_t(t)) {
            case "start":
                p[a] -= h * (n && l ? -1 : 1);
                break;
            case "end":
                p[a] += h * (n && l ? -1 : 1);
                break
        }
        return p
    }
    const El = async (e, t, n) => {
        const {
            placement: o = "bottom",
            strategy: r = "absolute",
            middleware: i = [],
            platform: a
        } = n, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
        let l = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: r
            }),
            {
                x: d,
                y: u
            } = Bi(l, o, c),
            h = o,
            p = {},
            _ = 0;
        for (let f = 0; f < s.length; f++) {
            const {
                name: m,
                fn: g
            } = s[f], {
                x: w,
                y,
                data: b,
                reset: x
            } = await g({
                x: d,
                y: u,
                initialPlacement: o,
                placement: h,
                strategy: r,
                middlewareData: p,
                rects: l,
                platform: a,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            d = w ? ? d, u = y ? ? u, p = { ...p,
                [m]: { ...p[m],
                    ...b
                }
            }, x && _ <= 50 && (_++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (l = x.rects === !0 ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: r
            }) : x.rects), {
                x: d,
                y: u
            } = Bi(l, h, c)), f = -1)
        }
        return {
            x: d,
            y: u,
            placement: h,
            strategy: r,
            middlewareData: p
        }
    };
    async function Dt(e, t) {
        var n;
        t === void 0 && (t = {});
        const {
            x: o,
            y: r,
            platform: i,
            rects: a,
            elements: s,
            strategy: c
        } = e, {
            boundary: l = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: u = "floating",
            altBoundary: h = !1,
            padding: p = 0
        } = Fe(t, e), _ = Fi(p), m = s[h ? u === "floating" ? "reference" : "floating" : u], g = cn(await i.getClippingRect({
            element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
            boundary: l,
            rootBoundary: d,
            strategy: c
        })), w = u === "floating" ? {
            x: o,
            y: r,
            width: a.floating.width,
            height: a.floating.height
        } : a.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), b = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
            x: 1,
            y: 1
        } : {
            x: 1,
            y: 1
        }, x = cn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: w,
            offsetParent: y,
            strategy: c
        }) : w);
        return {
            top: (g.top - x.top + _.top) / b.y,
            bottom: (x.bottom - g.bottom + _.bottom) / b.y,
            left: (g.left - x.left + _.left) / b.x,
            right: (x.right - g.right + _.right) / b.x
        }
    }
    const Al = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: i,
                    platform: a,
                    elements: s,
                    middlewareData: c
                } = t, {
                    element: l,
                    padding: d = 0
                } = Fe(e, t) || {};
                if (l == null) return {};
                const u = Fi(d),
                    h = {
                        x: n,
                        y: o
                    },
                    p = xo(r),
                    _ = bo(p),
                    f = await a.getDimensions(l),
                    m = p === "y",
                    g = m ? "top" : "left",
                    w = m ? "bottom" : "right",
                    y = m ? "clientHeight" : "clientWidth",
                    b = i.reference[_] + i.reference[p] - h[p] - i.floating[_],
                    x = h[p] - i.reference[p],
                    S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
                let C = S ? S[y] : 0;
                (!C || !await (a.isElement == null ? void 0 : a.isElement(S))) && (C = s.floating[y] || i.floating[_]);
                const A = b / 2 - x / 2,
                    M = C / 2 - f[_] / 2 - 1,
                    D = qe(u[g], M),
                    R = qe(u[w], M),
                    B = D,
                    U = C - f[_] - R,
                    F = C / 2 - f[_] / 2 + A,
                    W = wo(B, F, U),
                    L = !c.arrow && _t(r) != null && F !== W && i.reference[_] / 2 - (F < B ? D : R) - f[_] / 2 < 0,
                    V = L ? F < B ? F - B : F - U : 0;
                return {
                    [p]: h[p] + V,
                    data: {
                        [p]: W,
                        centerOffset: F - W - V,
                        ...L && {
                            alignmentOffset: V
                        }
                    },
                    reset: L
                }
            }
        }),
        Pl = function(e) {
            return e === void 0 && (e = {}), {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, o;
                    const {
                        placement: r,
                        middlewareData: i,
                        rects: a,
                        initialPlacement: s,
                        platform: c,
                        elements: l
                    } = t, {
                        mainAxis: d = !0,
                        crossAxis: u = !0,
                        fallbackPlacements: h,
                        fallbackStrategy: p = "bestFit",
                        fallbackAxisSideDirection: _ = "none",
                        flipAlignment: f = !0,
                        ...m
                    } = Fe(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const g = Be(r),
                        w = Ge(s),
                        y = Be(s) === s,
                        b = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
                        x = h || (y || !f ? [sn(s)] : xl(s)),
                        S = _ !== "none";
                    !h && S && x.push(...Sl(s, f, _, b));
                    const C = [s, ...x],
                        A = await Dt(t, m),
                        M = [];
                    let D = ((o = i.flip) == null ? void 0 : o.overflows) || [];
                    if (d && M.push(A[g]), u) {
                        const F = bl(r, a, b);
                        M.push(A[F[0]], A[F[1]])
                    }
                    if (D = [...D, {
                            placement: r,
                            overflows: M
                        }], !M.every(F => F <= 0)) {
                        var R, B;
                        const F = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1,
                            W = C[F];
                        if (W) return {
                            data: {
                                index: F,
                                overflows: D
                            },
                            reset: {
                                placement: W
                            }
                        };
                        let L = (B = D.filter(V => V.overflows[0] <= 0).sort((V, O) => V.overflows[1] - O.overflows[1])[0]) == null ? void 0 : B.placement;
                        if (!L) switch (p) {
                            case "bestFit":
                                {
                                    var U;
                                    const V = (U = D.filter(O => {
                                        if (S) {
                                            const Y = Ge(O.placement);
                                            return Y === w || Y === "y"
                                        }
                                        return !0
                                    }).map(O => [O.placement, O.overflows.filter(Y => Y > 0).reduce((Y, ee) => Y + ee, 0)]).sort((O, Y) => O[1] - Y[1])[0]) == null ? void 0 : U[0];V && (L = V);
                                    break
                                }
                            case "initialPlacement":
                                L = s;
                                break
                        }
                        if (r !== L) return {
                            reset: {
                                placement: L
                            }
                        }
                    }
                    return {}
                }
            }
        };

    function Ui(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        }
    }

    function Wi(e) {
        return gl.some(t => e[t] >= 0)
    }
    const Il = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: o = "referenceHidden",
                    ...r
                } = Fe(e, t);
                switch (o) {
                    case "referenceHidden":
                        {
                            const i = await Dt(t, { ...r,
                                    elementContext: "reference"
                                }),
                                a = Ui(i, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: a,
                                    referenceHidden: Wi(a)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const i = await Dt(t, { ...r,
                                    altBoundary: !0
                                }),
                                a = Ui(i, n.floating);
                            return {
                                data: {
                                    escapedOffsets: a,
                                    escaped: Wi(a)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    };
    async function Tl(e, t) {
        const {
            placement: n,
            platform: o,
            elements: r
        } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Be(n), s = _t(n), c = Ge(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, d = i && c ? -1 : 1, u = Fe(t, e);
        let {
            mainAxis: h,
            crossAxis: p,
            alignmentAxis: _
        } = typeof u == "number" ? {
            mainAxis: u,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: u.mainAxis || 0,
            crossAxis: u.crossAxis || 0,
            alignmentAxis: u.alignmentAxis
        };
        return s && typeof _ == "number" && (p = s === "end" ? _ * -1 : _), c ? {
            x: p * d,
            y: h * l
        } : {
            x: h * l,
            y: p * d
        }
    }
    const Ol = function(e) {
            return e === void 0 && (e = 0), {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, o;
                    const {
                        x: r,
                        y: i,
                        placement: a,
                        middlewareData: s
                    } = t, c = await Tl(t, e);
                    return a === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
                        x: r + c.x,
                        y: i + c.y,
                        data: { ...c,
                            placement: a
                        }
                    }
                }
            }
        },
        Nl = function(e) {
            return e === void 0 && (e = {}), {
                name: "shift",
                options: e,
                async fn(t) {
                    const {
                        x: n,
                        y: o,
                        placement: r
                    } = t, {
                        mainAxis: i = !0,
                        crossAxis: a = !1,
                        limiter: s = {
                            fn: m => {
                                let {
                                    x: g,
                                    y: w
                                } = m;
                                return {
                                    x: g,
                                    y: w
                                }
                            }
                        },
                        ...c
                    } = Fe(e, t), l = {
                        x: n,
                        y: o
                    }, d = await Dt(t, c), u = Ge(Be(r)), h = yo(u);
                    let p = l[h],
                        _ = l[u];
                    if (i) {
                        const m = h === "y" ? "top" : "left",
                            g = h === "y" ? "bottom" : "right",
                            w = p + d[m],
                            y = p - d[g];
                        p = wo(w, p, y)
                    }
                    if (a) {
                        const m = u === "y" ? "top" : "left",
                            g = u === "y" ? "bottom" : "right",
                            w = _ + d[m],
                            y = _ - d[g];
                        _ = wo(w, _, y)
                    }
                    const f = s.fn({ ...t,
                        [h]: p,
                        [u]: _
                    });
                    return { ...f,
                        data: {
                            x: f.x - n,
                            y: f.y - o,
                            enabled: {
                                [h]: i,
                                [u]: a
                            }
                        }
                    }
                }
            }
        },
        Rl = function(e) {
            return e === void 0 && (e = {}), {
                options: e,
                fn(t) {
                    const {
                        x: n,
                        y: o,
                        placement: r,
                        rects: i,
                        middlewareData: a
                    } = t, {
                        offset: s = 0,
                        mainAxis: c = !0,
                        crossAxis: l = !0
                    } = Fe(e, t), d = {
                        x: n,
                        y: o
                    }, u = Ge(r), h = yo(u);
                    let p = d[h],
                        _ = d[u];
                    const f = Fe(s, t),
                        m = typeof f == "number" ? {
                            mainAxis: f,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...f
                        };
                    if (c) {
                        const y = h === "y" ? "height" : "width",
                            b = i.reference[h] - i.floating[y] + m.mainAxis,
                            x = i.reference[h] + i.reference[y] - m.mainAxis;
                        p < b ? p = b : p > x && (p = x)
                    }
                    if (l) {
                        var g, w;
                        const y = h === "y" ? "width" : "height",
                            b = ["top", "left"].includes(Be(r)),
                            x = i.reference[u] - i.floating[y] + (b && ((g = a.offset) == null ? void 0 : g[u]) || 0) + (b ? 0 : m.crossAxis),
                            S = i.reference[u] + i.reference[y] + (b ? 0 : ((w = a.offset) == null ? void 0 : w[u]) || 0) - (b ? m.crossAxis : 0);
                        _ < x ? _ = x : _ > S && (_ = S)
                    }
                    return {
                        [h]: p,
                        [u]: _
                    }
                }
            }
        },
        Ml = function(e) {
            return e === void 0 && (e = {}), {
                name: "size",
                options: e,
                async fn(t) {
                    var n, o;
                    const {
                        placement: r,
                        rects: i,
                        platform: a,
                        elements: s
                    } = t, {
                        apply: c = () => {},
                        ...l
                    } = Fe(e, t), d = await Dt(t, l), u = Be(r), h = _t(r), p = Ge(r) === "y", {
                        width: _,
                        height: f
                    } = i.floating;
                    let m, g;
                    u === "top" || u === "bottom" ? (m = u, g = h === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = u, m = h === "end" ? "top" : "bottom");
                    const w = f - d.top - d.bottom,
                        y = _ - d.left - d.right,
                        b = qe(f - d[m], w),
                        x = qe(_ - d[g], y),
                        S = !t.middlewareData.shift;
                    let C = b,
                        A = x;
                    if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = y), (o = t.middlewareData.shift) != null && o.enabled.y && (C = w), S && !h) {
                        const D = fe(d.left, 0),
                            R = fe(d.right, 0),
                            B = fe(d.top, 0),
                            U = fe(d.bottom, 0);
                        p ? A = _ - 2 * (D !== 0 || R !== 0 ? D + R : fe(d.left, d.right)) : C = f - 2 * (B !== 0 || U !== 0 ? B + U : fe(d.top, d.bottom))
                    }
                    await c({ ...t,
                        availableWidth: A,
                        availableHeight: C
                    });
                    const M = await a.getDimensions(s.floating);
                    return _ !== M.width || f !== M.height ? {
                        reset: {
                            rects: !0
                        }
                    } : {}
                }
            }
        };

    function ln() {
        return typeof window < "u"
    }

    function mt(e) {
        return Vi(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }

    function pe(e) {
        var t;
        return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
    }

    function Ee(e) {
        var t;
        return (t = (Vi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
    }

    function Vi(e) {
        return ln() ? e instanceof Node || e instanceof pe(e).Node : !1
    }

    function ge(e) {
        return ln() ? e instanceof Element || e instanceof pe(e).Element : !1
    }

    function Ae(e) {
        return ln() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1
    }

    function Hi(e) {
        return !ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot
    }

    function Lt(e) {
        const {
            overflow: t,
            overflowX: n,
            overflowY: o,
            display: r
        } = we(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
    }

    function Dl(e) {
        return ["table", "td", "th"].includes(mt(e))
    }

    function un(e) {
        return [":popover-open", ":modal"].some(t => {
            try {
                return e.matches(t)
            } catch {
                return !1
            }
        })
    }

    function So(e) {
        const t = ko(),
            n = ge(e) ? we(e) : e;
        return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
    }

    function Ll(e) {
        let t = Ye(e);
        for (; Ae(t) && !gt(t);) {
            if (So(t)) return t;
            if (un(t)) return null;
            t = Ye(t)
        }
        return null
    }

    function ko() {
        return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
    }

    function gt(e) {
        return ["html", "body", "#document"].includes(mt(e))
    }

    function we(e) {
        return pe(e).getComputedStyle(e)
    }

    function dn(e) {
        return ge(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }

    function Ye(e) {
        if (mt(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Hi(e) && e.host || Ee(e);
        return Hi(t) ? t.host : t
    }

    function zi(e) {
        const t = Ye(e);
        return gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ae(t) && Lt(t) ? t : zi(t)
    }

    function $t(e, t, n) {
        var o;
        t === void 0 && (t = []), n === void 0 && (n = !0);
        const r = zi(e),
            i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
            a = pe(r);
        if (i) {
            const s = Eo(a);
            return t.concat(a, a.visualViewport || [], Lt(r) ? r : [], s && n ? $t(s) : [])
        }
        return t.concat(r, $t(r, [], n))
    }

    function Eo(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }

    function ji(e) {
        const t = we(e);
        let n = parseFloat(t.width) || 0,
            o = parseFloat(t.height) || 0;
        const r = Ae(e),
            i = r ? e.offsetWidth : n,
            a = r ? e.offsetHeight : o,
            s = rn(n) !== i || rn(o) !== a;
        return s && (n = i, o = a), {
            width: n,
            height: o,
            $: s
        }
    }

    function Ao(e) {
        return ge(e) ? e : e.contextElement
    }

    function wt(e) {
        const t = Ao(e);
        if (!Ae(t)) return Ke(1);
        const n = t.getBoundingClientRect(),
            {
                width: o,
                height: r,
                $: i
            } = ji(t);
        let a = (i ? rn(n.width) : n.width) / o,
            s = (i ? rn(n.height) : n.height) / r;
        return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
            x: a,
            y: s
        }
    }
    const $l = Ke(0);

    function qi(e) {
        const t = pe(e);
        return !ko() || !t.visualViewport ? $l : {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        }
    }

    function Fl(e, t, n) {
        return t === void 0 && (t = !1), !n || t && n !== pe(e) ? !1 : t
    }

    function at(e, t, n, o) {
        t === void 0 && (t = !1), n === void 0 && (n = !1);
        const r = e.getBoundingClientRect(),
            i = Ao(e);
        let a = Ke(1);
        t && (o ? ge(o) && (a = wt(o)) : a = wt(e));
        const s = Fl(i, n, o) ? qi(i) : Ke(0);
        let c = (r.left + s.x) / a.x,
            l = (r.top + s.y) / a.y,
            d = r.width / a.x,
            u = r.height / a.y;
        if (i) {
            const h = pe(i),
                p = o && ge(o) ? pe(o) : o;
            let _ = h,
                f = Eo(_);
            for (; f && o && p !== _;) {
                const m = wt(f),
                    g = f.getBoundingClientRect(),
                    w = we(f),
                    y = g.left + (f.clientLeft + parseFloat(w.paddingLeft)) * m.x,
                    b = g.top + (f.clientTop + parseFloat(w.paddingTop)) * m.y;
                c *= m.x, l *= m.y, d *= m.x, u *= m.y, c += y, l += b, _ = pe(f), f = Eo(_)
            }
        }
        return cn({
            width: d,
            height: u,
            x: c,
            y: l
        })
    }

    function Bl(e) {
        let {
            elements: t,
            rect: n,
            offsetParent: o,
            strategy: r
        } = e;
        const i = r === "fixed",
            a = Ee(o),
            s = t ? un(t.floating) : !1;
        if (o === a || s && i) return n;
        let c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            l = Ke(1);
        const d = Ke(0),
            u = Ae(o);
        if ((u || !u && !i) && ((mt(o) !== "body" || Lt(a)) && (c = dn(o)), Ae(o))) {
            const h = at(o);
            l = wt(o), d.x = h.x + o.clientLeft, d.y = h.y + o.clientTop
        }
        return {
            width: n.width * l.x,
            height: n.height * l.y,
            x: n.x * l.x - c.scrollLeft * l.x + d.x,
            y: n.y * l.y - c.scrollTop * l.y + d.y
        }
    }

    function Ul(e) {
        return Array.from(e.getClientRects())
    }

    function Po(e, t) {
        const n = dn(e).scrollLeft;
        return t ? t.left + n : at(Ee(e)).left + n
    }

    function Wl(e) {
        const t = Ee(e),
            n = dn(e),
            o = e.ownerDocument.body,
            r = fe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            i = fe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
        let a = -n.scrollLeft + Po(e);
        const s = -n.scrollTop;
        return we(o).direction === "rtl" && (a += fe(t.clientWidth, o.clientWidth) - r), {
            width: r,
            height: i,
            x: a,
            y: s
        }
    }

    function Vl(e, t) {
        const n = pe(e),
            o = Ee(e),
            r = n.visualViewport;
        let i = o.clientWidth,
            a = o.clientHeight,
            s = 0,
            c = 0;
        if (r) {
            i = r.width, a = r.height;
            const l = ko();
            (!l || l && t === "fixed") && (s = r.offsetLeft, c = r.offsetTop)
        }
        return {
            width: i,
            height: a,
            x: s,
            y: c
        }
    }

    function Hl(e, t) {
        const n = at(e, !0, t === "fixed"),
            o = n.top + e.clientTop,
            r = n.left + e.clientLeft,
            i = Ae(e) ? wt(e) : Ke(1),
            a = e.clientWidth * i.x,
            s = e.clientHeight * i.y,
            c = r * i.x,
            l = o * i.y;
        return {
            width: a,
            height: s,
            x: c,
            y: l
        }
    }

    function Ki(e, t, n) {
        let o;
        if (t === "viewport") o = Vl(e, n);
        else if (t === "document") o = Wl(Ee(e));
        else if (ge(t)) o = Hl(t, n);
        else {
            const r = qi(e);
            o = { ...t,
                x: t.x - r.x,
                y: t.y - r.y
            }
        }
        return cn(o)
    }

    function Gi(e, t) {
        const n = Ye(e);
        return n === t || !ge(n) || gt(n) ? !1 : we(n).position === "fixed" || Gi(n, t)
    }

    function zl(e, t) {
        const n = t.get(e);
        if (n) return n;
        let o = $t(e, [], !1).filter(s => ge(s) && mt(s) !== "body"),
            r = null;
        const i = we(e).position === "fixed";
        let a = i ? Ye(e) : e;
        for (; ge(a) && !gt(a);) {
            const s = we(a),
                c = So(a);
            !c && s.position === "fixed" && (r = null), (i ? !c && !r : !c && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Lt(a) && !c && Gi(e, a)) ? o = o.filter(d => d !== a) : r = s, a = Ye(a)
        }
        return t.set(e, o), o
    }

    function jl(e) {
        let {
            element: t,
            boundary: n,
            rootBoundary: o,
            strategy: r
        } = e;
        const a = [...n === "clippingAncestors" ? un(t) ? [] : zl(t, this._c) : [].concat(n), o],
            s = a[0],
            c = a.reduce((l, d) => {
                const u = Ki(t, d, r);
                return l.top = fe(u.top, l.top), l.right = qe(u.right, l.right), l.bottom = qe(u.bottom, l.bottom), l.left = fe(u.left, l.left), l
            }, Ki(t, s, r));
        return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
        }
    }

    function ql(e) {
        const {
            width: t,
            height: n
        } = ji(e);
        return {
            width: t,
            height: n
        }
    }

    function Kl(e, t, n) {
        const o = Ae(t),
            r = Ee(t),
            i = n === "fixed",
            a = at(e, !0, i, t);
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const c = Ke(0);
        if (o || !o && !i)
            if ((mt(t) !== "body" || Lt(r)) && (s = dn(t)), o) {
                const p = at(t, !0, i, t);
                c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop
            } else r && (c.x = Po(r));
        let l = 0,
            d = 0;
        if (r && !o && !i) {
            const p = r.getBoundingClientRect();
            d = p.top + s.scrollTop, l = p.left + s.scrollLeft - Po(r, p)
        }
        const u = a.left + s.scrollLeft - c.x - l,
            h = a.top + s.scrollTop - c.y - d;
        return {
            x: u,
            y: h,
            width: a.width,
            height: a.height
        }
    }

    function Io(e) {
        return we(e).position === "static"
    }

    function Yi(e, t) {
        if (!Ae(e) || we(e).position === "fixed") return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Ee(e) === n && (n = n.ownerDocument.body), n
    }

    function Xi(e, t) {
        const n = pe(e);
        if (un(e)) return n;
        if (!Ae(e)) {
            let r = Ye(e);
            for (; r && !gt(r);) {
                if (ge(r) && !Io(r)) return r;
                r = Ye(r)
            }
            return n
        }
        let o = Yi(e, t);
        for (; o && Dl(o) && Io(o);) o = Yi(o, t);
        return o && gt(o) && Io(o) && !So(o) ? n : o || Ll(e) || n
    }
    const Gl = async function(e) {
        const t = this.getOffsetParent || Xi,
            n = this.getDimensions,
            o = await n(e.floating);
        return {
            reference: Kl(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                width: o.width,
                height: o.height
            }
        }
    };

    function Yl(e) {
        return we(e).direction === "rtl"
    }
    const Xl = {
        convertOffsetParentRelativeRectToViewportRelativeRect: Bl,
        getDocumentElement: Ee,
        getClippingRect: jl,
        getOffsetParent: Xi,
        getElementRects: Gl,
        getClientRects: Ul,
        getDimensions: ql,
        getScale: wt,
        isElement: ge,
        isRTL: Yl
    };

    function Zl(e, t) {
        let n = null,
            o;
        const r = Ee(e);

        function i() {
            var s;
            clearTimeout(o), (s = n) == null || s.disconnect(), n = null
        }

        function a(s, c) {
            s === void 0 && (s = !1), c === void 0 && (c = 1), i();
            const {
                left: l,
                top: d,
                width: u,
                height: h
            } = e.getBoundingClientRect();
            if (s || t(), !u || !h) return;
            const p = an(d),
                _ = an(r.clientWidth - (l + u)),
                f = an(r.clientHeight - (d + h)),
                m = an(l),
                w = {
                    rootMargin: -p + "px " + -_ + "px " + -f + "px " + -m + "px",
                    threshold: fe(0, qe(1, c)) || 1
                };
            let y = !0;

            function b(x) {
                const S = x[0].intersectionRatio;
                if (S !== c) {
                    if (!y) return a();
                    S ? a(!1, S) : o = setTimeout(() => {
                        a(!1, 1e-7)
                    }, 1e3)
                }
                y = !1
            }
            try {
                n = new IntersectionObserver(b, { ...w,
                    root: r.ownerDocument
                })
            } catch {
                n = new IntersectionObserver(b, w)
            }
            n.observe(e)
        }
        return a(!0), i
    }

    function Jl(e, t, n, o) {
        o === void 0 && (o = {});
        const {
            ancestorScroll: r = !0,
            ancestorResize: i = !0,
            elementResize: a = typeof ResizeObserver == "function",
            layoutShift: s = typeof IntersectionObserver == "function",
            animationFrame: c = !1
        } = o, l = Ao(e), d = r || i ? [...l ? $t(l) : [], ...$t(t)] : [];
        d.forEach(g => {
            r && g.addEventListener("scroll", n, {
                passive: !0
            }), i && g.addEventListener("resize", n)
        });
        const u = l && s ? Zl(l, n) : null;
        let h = -1,
            p = null;
        a && (p = new ResizeObserver(g => {
            let [w] = g;
            w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                var y;
                (y = p) == null || y.observe(t)
            })), n()
        }), l && !c && p.observe(l), p.observe(t));
        let _, f = c ? at(e) : null;
        c && m();

        function m() {
            const g = at(e);
            f && (g.x !== f.x || g.y !== f.y || g.width !== f.width || g.height !== f.height) && n(), f = g, _ = requestAnimationFrame(m)
        }
        return n(), () => {
            var g;
            d.forEach(w => {
                r && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n)
            }), u == null || u(), (g = p) == null || g.disconnect(), p = null, c && cancelAnimationFrame(_)
        }
    }
    const Ql = Ol,
        eu = Nl,
        tu = Pl,
        nu = Ml,
        ou = Il,
        Zi = Al,
        ru = Rl,
        iu = (e, t, n) => {
            const o = new Map,
                r = {
                    platform: Xl,
                    ...n
                },
                i = { ...r.platform,
                    _c: o
                };
            return El(e, t, { ...r,
                platform: i
            })
        };
    var fn = typeof document < "u" ? Ne : N;

    function pn(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if (typeof e == "function" && e.toString() === t.toString()) return !0;
        let n, o, r;
        if (e && t && typeof e == "object") {
            if (Array.isArray(e)) {
                if (n = e.length, n !== t.length) return !1;
                for (o = n; o-- !== 0;)
                    if (!pn(e[o], t[o])) return !1;
                return !0
            }
            if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return !1;
            for (o = n; o-- !== 0;)
                if (!{}.hasOwnProperty.call(t, r[o])) return !1;
            for (o = n; o-- !== 0;) {
                const i = r[o];
                if (!(i === "_owner" && e.$$typeof) && !pn(e[i], t[i])) return !1
            }
            return !0
        }
        return e !== e && t !== t
    }

    function Ji(e) {
        return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
    }

    function Qi(e, t) {
        const n = Ji(e);
        return Math.round(t * n) / n
    }

    function To(e) {
        const t = I(e);
        return fn(() => {
            t.current = e
        }), t
    }

    function au(e) {
        e === void 0 && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: r,
            elements: {
                reference: i,
                floating: a
            } = {},
            transform: s = !0,
            whileElementsMounted: c,
            open: l
        } = e, [d, u] = E({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        }), [h, p] = E(o);
        pn(h, o) || p(o);
        const [_, f] = E(null), [m, g] = E(null), w = z(O => {
            O !== S.current && (S.current = O, f(O))
        }, []), y = z(O => {
            O !== C.current && (C.current = O, g(O))
        }, []), b = i || _, x = a || m, S = I(null), C = I(null), A = I(d), M = c != null, D = To(c), R = To(r), B = To(l), U = z(() => {
            if (!S.current || !C.current) return;
            const O = {
                placement: t,
                strategy: n,
                middleware: h
            };
            R.current && (O.platform = R.current), iu(S.current, C.current, O).then(Y => {
                const ee = { ...Y,
                    isPositioned: B.current !== !1
                };
                F.current && !pn(A.current, ee) && (A.current = ee, en(() => {
                    u(ee)
                }))
            })
        }, [h, t, n, R, B]);
        fn(() => {
            l === !1 && A.current.isPositioned && (A.current.isPositioned = !1, u(O => ({ ...O,
                isPositioned: !1
            })))
        }, [l]);
        const F = I(!1);
        fn(() => (F.current = !0, () => {
            F.current = !1
        }), []), fn(() => {
            if (b && (S.current = b), x && (C.current = x), b && x) {
                if (D.current) return D.current(b, x, U);
                U()
            }
        }, [b, x, U, D, M]);
        const W = H(() => ({
                reference: S,
                floating: C,
                setReference: w,
                setFloating: y
            }), [w, y]),
            L = H(() => ({
                reference: b,
                floating: x
            }), [b, x]),
            V = H(() => {
                const O = {
                    position: n,
                    left: 0,
                    top: 0
                };
                if (!L.floating) return O;
                const Y = Qi(L.floating, d.x),
                    ee = Qi(L.floating, d.y);
                return s ? { ...O,
                    transform: "translate(" + Y + "px, " + ee + "px)",
                    ...Ji(L.floating) >= 1.5 && {
                        willChange: "transform"
                    }
                } : {
                    position: n,
                    left: Y,
                    top: ee
                }
            }, [n, s, L.floating, d.x, d.y]);
        return H(() => ({ ...d,
            update: U,
            refs: W,
            elements: L,
            floatingStyles: V
        }), [d, U, W, L, V])
    }
    const su = e => {
            function t(n) {
                return {}.hasOwnProperty.call(n, "current")
            }
            return {
                name: "arrow",
                options: e,
                fn(n) {
                    const {
                        element: o,
                        padding: r
                    } = typeof e == "function" ? e(n) : e;
                    return o && t(o) ? o.current != null ? Zi({
                        element: o.current,
                        padding: r
                    }).fn(n) : {} : o ? Zi({
                        element: o,
                        padding: r
                    }).fn(n) : {}
                }
            }
        },
        cu = (e, t) => ({ ...Ql(e),
            options: [e, t]
        }),
        lu = (e, t) => ({ ...eu(e),
            options: [e, t]
        }),
        uu = (e, t) => ({ ...ru(e),
            options: [e, t]
        }),
        du = (e, t) => ({ ...tu(e),
            options: [e, t]
        }),
        fu = (e, t) => ({ ...nu(e),
            options: [e, t]
        }),
        pu = (e, t) => ({ ...ou(e),
            options: [e, t]
        }),
        hu = (e, t) => ({ ...su(e),
            options: [e, t]
        });
    var vu = "Arrow",
        ea = $((e, t) => {
            const {
                children: n,
                width: o = 10,
                height: r = 5,
                ...i
            } = e;
            return v(ne.svg, { ...i,
                ref: t,
                width: o,
                height: r,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? n : v("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        });
    ea.displayName = vu;
    var _u = ea;

    function mu(e) {
        const [t, n] = E(void 0);
        return de(() => {
            if (e) {
                n({
                    width: e.offsetWidth,
                    height: e.offsetHeight
                });
                const o = new ResizeObserver(r => {
                    if (!Array.isArray(r) || !r.length) return;
                    const i = r[0];
                    let a, s;
                    if ("borderBoxSize" in i) {
                        const c = i.borderBoxSize,
                            l = Array.isArray(c) ? c[0] : c;
                        a = l.inlineSize, s = l.blockSize
                    } else a = e.offsetWidth, s = e.offsetHeight;
                    n({
                        width: a,
                        height: s
                    })
                });
                return o.observe(e, {
                    box: "border-box"
                }), () => o.unobserve(e)
            } else n(void 0)
        }, [e]), t
    }
    var Oo = "Popper",
        [ta, na] = Si(Oo),
        [gu, oa] = ta(Oo),
        ra = e => {
            const {
                __scopePopper: t,
                children: n
            } = e, [o, r] = E(null);
            return v(gu, {
                scope: t,
                anchor: o,
                onAnchorChange: r,
                children: n
            })
        };
    ra.displayName = Oo;
    var ia = "PopperAnchor",
        aa = $((e, t) => {
            const {
                __scopePopper: n,
                virtualRef: o,
                ...r
            } = e, i = oa(ia, n), a = I(null), s = se(t, a);
            return N(() => {
                i.onAnchorChange((o == null ? void 0 : o.current) || a.current)
            }), o ? null : v(ne.div, { ...r,
                ref: s
            })
        });
    aa.displayName = ia;
    var No = "PopperContent",
        [wu, yu] = ta(No),
        sa = $((e, t) => {
            var T, Z, ce, X, j, q;
            const {
                __scopePopper: n,
                side: o = "bottom",
                sideOffset: r = 0,
                align: i = "center",
                alignOffset: a = 0,
                arrowPadding: s = 0,
                avoidCollisions: c = !0,
                collisionBoundary: l = [],
                collisionPadding: d = 0,
                sticky: u = "partial",
                hideWhenDetached: h = !1,
                updatePositionStrategy: p = "optimized",
                onPlaced: _,
                ...f
            } = e, m = oa(No, n), [g, w] = E(null), y = se(t, ve => w(ve)), [b, x] = E(null), S = mu(b), C = (S == null ? void 0 : S.width) ? ? 0, A = (S == null ? void 0 : S.height) ? ? 0, M = o + (i !== "center" ? "-" + i : ""), D = typeof d == "number" ? d : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...d
            }, R = Array.isArray(l) ? l : [l], B = R.length > 0, U = {
                padding: D,
                boundary: R.filter(xu),
                altBoundary: B
            }, {
                refs: F,
                floatingStyles: W,
                placement: L,
                isPositioned: V,
                middlewareData: O
            } = au({
                strategy: "fixed",
                placement: M,
                whileElementsMounted: (...ve) => Jl(...ve, {
                    animationFrame: p === "always"
                }),
                elements: {
                    reference: m.anchor
                },
                middleware: [cu({
                    mainAxis: r + A,
                    alignmentAxis: a
                }), c && lu({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: u === "partial" ? uu() : void 0,
                    ...U
                }), c && du({ ...U
                }), fu({ ...U,
                    apply: ({
                        elements: ve,
                        rects: Ie,
                        availableWidth: Ut,
                        availableHeight: Wt
                    }) => {
                        const {
                            width: Vt,
                            height: lf
                        } = Ie.reference, En = ve.floating.style;
                        En.setProperty("--radix-popper-available-width", `${Ut}px`), En.setProperty("--radix-popper-available-height", `${Wt}px`), En.setProperty("--radix-popper-anchor-width", `${Vt}px`), En.setProperty("--radix-popper-anchor-height", `${lf}px`)
                    }
                }), b && hu({
                    element: b,
                    padding: s
                }), Cu({
                    arrowWidth: C,
                    arrowHeight: A
                }), h && pu({
                    strategy: "referenceHidden",
                    ...U
                })]
            }), [Y, ee] = ua(L), he = $e(_);
            de(() => {
                V && (he == null || he())
            }, [V, he]);
            const Qe = (T = O.arrow) == null ? void 0 : T.x,
                be = (Z = O.arrow) == null ? void 0 : Z.y,
                xe = ((ce = O.arrow) == null ? void 0 : ce.centerOffset) !== 0,
                [kt, ct] = E();
            return de(() => {
                g && ct(window.getComputedStyle(g).zIndex)
            }, [g]), v("div", {
                ref: F.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: { ...W,
                    transform: V ? W.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: kt,
                    "--radix-popper-transform-origin": [(X = O.transformOrigin) == null ? void 0 : X.x, (j = O.transformOrigin) == null ? void 0 : j.y].join(" "),
                    ...((q = O.hide) == null ? void 0 : q.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: v(wu, {
                    scope: n,
                    placedSide: Y,
                    onArrowChange: x,
                    arrowX: Qe,
                    arrowY: be,
                    shouldHideArrow: xe,
                    children: v(ne.div, {
                        "data-side": Y,
                        "data-align": ee,
                        ...f,
                        ref: y,
                        style: { ...f.style,
                            animation: V ? void 0 : "none"
                        }
                    })
                })
            })
        });
    sa.displayName = No;
    var ca = "PopperArrow",
        bu = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        },
        la = $(function(t, n) {
            const {
                __scopePopper: o,
                ...r
            } = t, i = yu(ca, o), a = bu[i.placedSide];
            return v("span", {
                ref: i.onArrowChange,
                style: {
                    position: "absolute",
                    left: i.arrowX,
                    top: i.arrowY,
                    [a]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[i.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[i.placedSide],
                    visibility: i.shouldHideArrow ? "hidden" : void 0
                },
                children: v(_u, { ...r,
                    ref: n,
                    style: { ...r.style,
                        display: "block"
                    }
                })
            })
        });
    la.displayName = ca;

    function xu(e) {
        return e !== null
    }
    var Cu = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            var m, g, w;
            const {
                placement: n,
                rects: o,
                middlewareData: r
            } = t, a = ((m = r.arrow) == null ? void 0 : m.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, d] = ua(n), u = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[d], h = (((g = r.arrow) == null ? void 0 : g.x) ? ? 0) + s / 2, p = (((w = r.arrow) == null ? void 0 : w.y) ? ? 0) + c / 2;
            let _ = "",
                f = "";
            return l === "bottom" ? (_ = a ? u : `${h}px`, f = `${-c}px`) : l === "top" ? (_ = a ? u : `${h}px`, f = `${o.floating.height+c}px`) : l === "right" ? (_ = `${-c}px`, f = a ? u : `${p}px`) : l === "left" && (_ = `${o.floating.width+c}px`, f = a ? u : `${p}px`), {
                data: {
                    x: _,
                    y: f
                }
            }
        }
    });

    function ua(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
    }
    var Su = ra,
        ku = aa,
        Eu = sa,
        Au = la,
        Pu = "Portal",
        da = $((e, t) => {
            var s;
            const {
                container: n,
                ...o
            } = e, [r, i] = E(!1);
            de(() => i(!0), []);
            const a = n || r && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
            return a ? Le.createPortal(v(ne.div, { ...o,
                ref: t
            }), a) : null
        });
    da.displayName = Pu;

    function fa({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
    }) {
        const [o, r] = Iu({
            defaultProp: t,
            onChange: n
        }), i = e !== void 0, a = i ? e : o, s = $e(n), c = z(l => {
            if (i) {
                const u = typeof l == "function" ? l(e) : l;
                u !== e && s(u)
            } else r(l)
        }, [i, e, r, s]);
        return [a, c]
    }

    function Iu({
        defaultProp: e,
        onChange: t
    }) {
        const n = E(e),
            [o] = n,
            r = I(o),
            i = $e(t);
        return N(() => {
            r.current !== o && (i(o), r.current = o)
        }, [o, r, i]), n
    }

    function Tu(e) {
        const t = I({
            value: e,
            previous: e
        });
        return H(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
    }
    var Ou = "VisuallyHidden",
        pa = $((e, t) => v(ne.span, { ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
    pa.displayName = Ou;
    var Nu = function(e) {
            if (typeof document > "u") return null;
            var t = Array.isArray(e) ? e[0] : e;
            return t.ownerDocument.body
        },
        yt = new WeakMap,
        hn = new WeakMap,
        vn = {},
        Ro = 0,
        ha = function(e) {
            return e && (e.host || ha(e.parentNode))
        },
        Ru = function(e, t) {
            return t.map(function(n) {
                if (e.contains(n)) return n;
                var o = ha(n);
                return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
            }).filter(function(n) {
                return !!n
            })
        },
        Mu = function(e, t, n, o) {
            var r = Ru(t, Array.isArray(e) ? e : [e]);
            vn[n] || (vn[n] = new WeakMap);
            var i = vn[n],
                a = [],
                s = new Set,
                c = new Set(r),
                l = function(u) {
                    !u || s.has(u) || (s.add(u), l(u.parentNode))
                };
            r.forEach(l);
            var d = function(u) {
                !u || c.has(u) || Array.prototype.forEach.call(u.children, function(h) {
                    if (s.has(h)) d(h);
                    else {
                        var p = h.getAttribute(o),
                            _ = p !== null && p !== "false",
                            f = (yt.get(h) || 0) + 1,
                            m = (i.get(h) || 0) + 1;
                        yt.set(h, f), i.set(h, m), a.push(h), f === 1 && _ && hn.set(h, !0), m === 1 && h.setAttribute(n, "true"), _ || h.setAttribute(o, "true")
                    }
                })
            };
            return d(t), s.clear(), Ro++,
                function() {
                    a.forEach(function(u) {
                        var h = yt.get(u) - 1,
                            p = i.get(u) - 1;
                        yt.set(u, h), i.set(u, p), h || (hn.has(u) || u.removeAttribute(o), hn.delete(u)), p || u.removeAttribute(n)
                    }), Ro--, Ro || (yt = new WeakMap, yt = new WeakMap, hn = new WeakMap, vn = {})
                }
        },
        Du = function(e, t, n) {
            n === void 0 && (n = "data-aria-hidden");
            var o = Array.from(Array.isArray(e) ? e : [e]),
                r = Nu(e);
            return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Mu(o, r, n, "aria-hidden")) : function() {
                return null
            }
        },
        Xe = function() {
            return Xe = Object.assign || function(t) {
                for (var n, o = 1, r = arguments.length; o < r; o++) {
                    n = arguments[o];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }, Xe.apply(this, arguments)
        };

    function Lu(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }

    function $u(e, t, n) {
        if (n || arguments.length === 2)
            for (var o = 0, r = t.length, i; o < r; o++)(i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    typeof SuppressedError == "function" && SuppressedError;
    var _n = "right-scroll-bar-position",
        mn = "width-before-scroll-bar",
        Fu = "with-scroll-bars-hidden",
        Bu = "--removed-body-scroll-bar-size";

    function Mo(e, t) {
        return typeof e == "function" ? e(t) : e && (e.current = t), e
    }

    function Uu(e, t) {
        var n = E(function() {
            return {
                value: e,
                callback: t,
                facade: {
                    get current() {
                        return n.value
                    },
                    set current(o) {
                        var r = n.value;
                        r !== o && (n.value = o, n.callback(o, r))
                    }
                }
            }
        })[0];
        return n.callback = t, n.facade
    }
    var va = new WeakMap;

    function Wu(e, t) {
        var n = Uu(null, function(o) {
            return e.forEach(function(r) {
                return Mo(r, o)
            })
        });
        return Ne(function() {
            var o = va.get(n);
            if (o) {
                var r = new Set(o),
                    i = new Set(e),
                    a = n.current;
                r.forEach(function(s) {
                    i.has(s) || Mo(s, null)
                }), i.forEach(function(s) {
                    r.has(s) || Mo(s, a)
                })
            }
            va.set(n, e)
        }, [e]), n
    }
    var gn = function() {
        return gn = Object.assign || function(t) {
            for (var n, o = 1, r = arguments.length; o < r; o++) {
                n = arguments[o];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, gn.apply(this, arguments)
    };

    function Vu(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }
    typeof SuppressedError == "function" && SuppressedError;

    function Hu(e) {
        return e
    }

    function zu(e, t) {
        t === void 0 && (t = Hu);
        var n = [],
            o = !1,
            r = {
                read: function() {
                    if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return n.length ? n[n.length - 1] : e
                },
                useMedium: function(i) {
                    var a = t(i, o);
                    return n.push(a),
                        function() {
                            n = n.filter(function(s) {
                                return s !== a
                            })
                        }
                },
                assignSyncMedium: function(i) {
                    for (o = !0; n.length;) {
                        var a = n;
                        n = [], a.forEach(i)
                    }
                    n = {
                        push: function(s) {
                            return i(s)
                        },
                        filter: function() {
                            return n
                        }
                    }
                },
                assignMedium: function(i) {
                    o = !0;
                    var a = [];
                    if (n.length) {
                        var s = n;
                        n = [], s.forEach(i), a = n
                    }
                    var c = function() {
                            var d = a;
                            a = [], d.forEach(i)
                        },
                        l = function() {
                            return Promise.resolve().then(c)
                        };
                    l(), n = {
                        push: function(d) {
                            a.push(d), l()
                        },
                        filter: function(d) {
                            return a = a.filter(d), n
                        }
                    }
                }
            };
        return r
    }

    function ju(e) {
        e === void 0 && (e = {});
        var t = zu(null);
        return t.options = gn({
            async: !0,
            ssr: !1
        }, e), t
    }
    var _a = function(e) {
        var t = e.sideCar,
            n = Vu(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var o = t.read();
        if (!o) throw new Error("Sidecar medium not found");
        return J(o, gn({}, n))
    };
    _a.isSideCarExport = !0;

    function qu(e, t) {
        return e.useMedium(t), _a
    }
    var ma = ju(),
        Do = function() {},
        wn = $(function(e, t) {
            var n = I(null),
                o = E({
                    onScrollCapture: Do,
                    onWheelCapture: Do,
                    onTouchMoveCapture: Do
                }),
                r = o[0],
                i = o[1],
                a = e.forwardProps,
                s = e.children,
                c = e.className,
                l = e.removeScrollBar,
                d = e.enabled,
                u = e.shards,
                h = e.sideCar,
                p = e.noIsolation,
                _ = e.inert,
                f = e.allowPinchZoom,
                m = e.as,
                g = m === void 0 ? "div" : m,
                w = e.gapMode,
                y = Lu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                b = h,
                x = Wu([n, t]),
                S = Xe(Xe({}, y), r);
            return J(oe, null, d && J(b, {
                sideCar: ma,
                removeScrollBar: l,
                shards: u,
                noIsolation: p,
                inert: _,
                setCallbacks: i,
                allowPinchZoom: !!f,
                lockRef: n,
                gapMode: w
            }), a ? Nt(ze.only(s), Xe(Xe({}, S), {
                ref: x
            })) : J(g, Xe({}, S, {
                className: c,
                ref: x
            }), s))
        });
    wn.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    }, wn.classNames = {
        fullWidth: mn,
        zeroRight: _n
    };
    var Ku = function() {
        if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
    };

    function Gu() {
        if (!document) return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var t = Ku();
        return t && e.setAttribute("nonce", t), e
    }

    function Yu(e, t) {
        e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
    }

    function Xu(e) {
        var t = document.head || document.getElementsByTagName("head")[0];
        t.appendChild(e)
    }
    var Zu = function() {
            var e = 0,
                t = null;
            return {
                add: function(n) {
                    e == 0 && (t = Gu()) && (Yu(t, n), Xu(t)), e++
                },
                remove: function() {
                    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
            }
        },
        Ju = function() {
            var e = Zu();
            return function(t, n) {
                N(function() {
                    return e.add(t),
                        function() {
                            e.remove()
                        }
                }, [t && n])
            }
        },
        ga = function() {
            var e = Ju(),
                t = function(n) {
                    var o = n.styles,
                        r = n.dynamic;
                    return e(o, r), null
                };
            return t
        },
        Qu = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        Lo = function(e) {
            return parseInt(e || "", 10) || 0
        },
        ed = function(e) {
            var t = window.getComputedStyle(document.body),
                n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
                o = t[e === "padding" ? "paddingTop" : "marginTop"],
                r = t[e === "padding" ? "paddingRight" : "marginRight"];
            return [Lo(n), Lo(o), Lo(r)]
        },
        td = function(e) {
            if (e === void 0 && (e = "margin"), typeof window > "u") return Qu;
            var t = ed(e),
                n = document.documentElement.clientWidth,
                o = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, o - n + t[2] - t[0])
            }
        },
        nd = ga(),
        bt = "data-scroll-locked",
        od = function(e, t, n, o) {
            var r = e.left,
                i = e.top,
                a = e.right,
                s = e.gap;
            return n === void 0 && (n = "margin"), `
  .`.concat(Fu, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body[`).concat(bt, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(o, ";"), n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(_n, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(mn, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(mn, " .").concat(mn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(bt, `] {
    `).concat(Bu, ": ").concat(s, `px;
  }
`)
        },
        wa = function() {
            var e = parseInt(document.body.getAttribute(bt) || "0", 10);
            return isFinite(e) ? e : 0
        },
        rd = function() {
            N(function() {
                return document.body.setAttribute(bt, (wa() + 1).toString()),
                    function() {
                        var e = wa() - 1;
                        e <= 0 ? document.body.removeAttribute(bt) : document.body.setAttribute(bt, e.toString())
                    }
            }, [])
        },
        id = function(e) {
            var t = e.noRelative,
                n = e.noImportant,
                o = e.gapMode,
                r = o === void 0 ? "margin" : o;
            rd();
            var i = H(function() {
                return td(r)
            }, [r]);
            return J(nd, {
                styles: od(i, !t, r, n ? "" : "!important")
            })
        },
        $o = !1;
    if (typeof window < "u") try {
        var yn = Object.defineProperty({}, "passive", {
            get: function() {
                return $o = !0, !0
            }
        });
        window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn)
    } catch {
        $o = !1
    }
    var xt = $o ? {
            passive: !1
        } : !1,
        ad = function(e) {
            return e.tagName === "TEXTAREA"
        },
        ya = function(e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ad(e) && n[t] === "visible")
        },
        sd = function(e) {
            return ya(e, "overflowY")
        },
        cd = function(e) {
            return ya(e, "overflowX")
        },
        ba = function(e, t) {
            var n = t.ownerDocument,
                o = t;
            do {
                typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
                var r = xa(e, o);
                if (r) {
                    var i = Ca(e, o),
                        a = i[1],
                        s = i[2];
                    if (a > s) return !0
                }
                o = o.parentNode
            } while (o && o !== n.body);
            return !1
        },
        ld = function(e) {
            var t = e.scrollTop,
                n = e.scrollHeight,
                o = e.clientHeight;
            return [t, n, o]
        },
        ud = function(e) {
            var t = e.scrollLeft,
                n = e.scrollWidth,
                o = e.clientWidth;
            return [t, n, o]
        },
        xa = function(e, t) {
            return e === "v" ? sd(t) : cd(t)
        },
        Ca = function(e, t) {
            return e === "v" ? ld(t) : ud(t)
        },
        dd = function(e, t) {
            return e === "h" && t === "rtl" ? -1 : 1
        },
        fd = function(e, t, n, o, r) {
            var i = dd(e, window.getComputedStyle(t).direction),
                a = i * o,
                s = n.target,
                c = t.contains(s),
                l = !1,
                d = a > 0,
                u = 0,
                h = 0;
            do {
                var p = Ca(e, s),
                    _ = p[0],
                    f = p[1],
                    m = p[2],
                    g = f - m - i * _;
                (_ || g) && xa(e, s) && (u += g, h += _), s instanceof ShadowRoot ? s = s.host : s = s.parentNode
            } while (!c && s !== document.body || c && (t.contains(s) || t === s));
            return (d && Math.abs(u) < 1 || !d && Math.abs(h) < 1) && (l = !0), l
        },
        bn = function(e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Sa = function(e) {
            return [e.deltaX, e.deltaY]
        },
        ka = function(e) {
            return e && "current" in e ? e.current : e
        },
        pd = function(e, t) {
            return e[0] === t[0] && e[1] === t[1]
        },
        hd = function(e) {
            return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
        },
        vd = 0,
        Ct = [];

    function _d(e) {
        var t = I([]),
            n = I([0, 0]),
            o = I(),
            r = E(vd++)[0],
            i = E(ga)[0],
            a = I(e);
        N(function() {
            a.current = e
        }, [e]), N(function() {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(r));
                var f = $u([e.lockRef.current], (e.shards || []).map(ka), !0).filter(Boolean);
                return f.forEach(function(m) {
                        return m.classList.add("allow-interactivity-".concat(r))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(r)), f.forEach(function(m) {
                            return m.classList.remove("allow-interactivity-".concat(r))
                        })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
        var s = z(function(f, m) {
                if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey) return !a.current.allowPinchZoom;
                var g = bn(f),
                    w = n.current,
                    y = "deltaX" in f ? f.deltaX : w[0] - g[0],
                    b = "deltaY" in f ? f.deltaY : w[1] - g[1],
                    x, S = f.target,
                    C = Math.abs(y) > Math.abs(b) ? "h" : "v";
                if ("touches" in f && C === "h" && S.type === "range") return !1;
                var A = ba(C, S);
                if (!A) return !0;
                if (A ? x = C : (x = C === "v" ? "h" : "v", A = ba(C, S)), !A) return !1;
                if (!o.current && "changedTouches" in f && (y || b) && (o.current = x), !x) return !0;
                var M = o.current || x;
                return fd(M, m, f, M === "h" ? y : b)
            }, []),
            c = z(function(f) {
                var m = f;
                if (!(!Ct.length || Ct[Ct.length - 1] !== i)) {
                    var g = "deltaY" in m ? Sa(m) : bn(m),
                        w = t.current.filter(function(x) {
                            return x.name === m.type && (x.target === m.target || m.target === x.shadowParent) && pd(x.delta, g)
                        })[0];
                    if (w && w.should) {
                        m.cancelable && m.preventDefault();
                        return
                    }
                    if (!w) {
                        var y = (a.current.shards || []).map(ka).filter(Boolean).filter(function(x) {
                                return x.contains(m.target)
                            }),
                            b = y.length > 0 ? s(m, y[0]) : !a.current.noIsolation;
                        b && m.cancelable && m.preventDefault()
                    }
                }
            }, []),
            l = z(function(f, m, g, w) {
                var y = {
                    name: f,
                    delta: m,
                    target: g,
                    should: w,
                    shadowParent: md(g)
                };
                t.current.push(y), setTimeout(function() {
                    t.current = t.current.filter(function(b) {
                        return b !== y
                    })
                }, 1)
            }, []),
            d = z(function(f) {
                n.current = bn(f), o.current = void 0
            }, []),
            u = z(function(f) {
                l(f.type, Sa(f), f.target, s(f, e.lockRef.current))
            }, []),
            h = z(function(f) {
                l(f.type, bn(f), f.target, s(f, e.lockRef.current))
            }, []);
        N(function() {
            return Ct.push(i), e.setCallbacks({
                    onScrollCapture: u,
                    onWheelCapture: u,
                    onTouchMoveCapture: h
                }), document.addEventListener("wheel", c, xt), document.addEventListener("touchmove", c, xt), document.addEventListener("touchstart", d, xt),
                function() {
                    Ct = Ct.filter(function(f) {
                        return f !== i
                    }), document.removeEventListener("wheel", c, xt), document.removeEventListener("touchmove", c, xt), document.removeEventListener("touchstart", d, xt)
                }
        }, []);
        var p = e.removeScrollBar,
            _ = e.inert;
        return J(oe, null, _ ? J(i, {
            styles: hd(r)
        }) : null, p ? J(id, {
            gapMode: e.gapMode
        }) : null)
    }

    function md(e) {
        for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
    }
    const gd = qu(ma, _d);
    var Ea = $(function(e, t) {
        return J(wn, Xe({}, e, {
            ref: t,
            sideCar: gd
        }))
    });
    Ea.classNames = wn.classNames;
    var wd = [" ", "Enter", "ArrowUp", "ArrowDown"],
        yd = [" ", "Enter"],
        Ft = "Select",
        [xn, Cn, bd] = Kc(Ft),
        [St, Qf] = Gc(Ft, [bd, na]),
        Sn = na(),
        [xd, Ze] = St(Ft),
        [Cd, Sd] = St(Ft),
        Aa = e => {
            const {
                __scopeSelect: t,
                children: n,
                open: o,
                defaultOpen: r,
                onOpenChange: i,
                value: a,
                defaultValue: s,
                onValueChange: c,
                dir: l,
                name: d,
                autoComplete: u,
                disabled: h,
                required: p,
                form: _
            } = e, f = Sn(t), [m, g] = E(null), [w, y] = E(null), [b, x] = E(!1), S = Zc(l), [C = !1, A] = fa({
                prop: o,
                defaultProp: r,
                onChange: i
            }), [M, D] = fa({
                prop: a,
                defaultProp: s,
                onChange: c
            }), R = I(null), B = m ? _ || !!m.closest("form") : !0, [U, F] = E(new Set), W = Array.from(U).map(L => L.props.value).join(";");
            return v(Su, { ...f,
                children: v(xd, {
                    required: p,
                    scope: t,
                    trigger: m,
                    onTriggerChange: g,
                    valueNode: w,
                    onValueNodeChange: y,
                    valueNodeHasChildren: b,
                    onValueNodeHasChildrenChange: x,
                    contentId: go(),
                    value: M,
                    onValueChange: D,
                    open: C,
                    onOpenChange: A,
                    dir: S,
                    triggerPointerDownPosRef: R,
                    disabled: h,
                    children: [v(xn.Provider, {
                        scope: t,
                        children: v(Cd, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: z(L => {
                                F(V => new Set(V).add(L))
                            }, []),
                            onNativeOptionRemove: z(L => {
                                F(V => {
                                    const O = new Set(V);
                                    return O.delete(L), O
                                })
                            }, []),
                            children: n
                        })
                    }), B ? v(Ya, {
                        "aria-hidden": !0,
                        required: p,
                        tabIndex: -1,
                        name: d,
                        autoComplete: u,
                        value: M,
                        onChange: L => D(L.target.value),
                        disabled: h,
                        form: _,
                        children: [M === void 0 ? v("option", {
                            value: ""
                        }) : null, Array.from(U)]
                    }, W) : null]
                })
            })
        };
    Aa.displayName = Ft;
    var Pa = "SelectTrigger",
        Ia = $((e, t) => {
            const {
                __scopeSelect: n,
                disabled: o = !1,
                ...r
            } = e, i = Sn(n), a = Ze(Pa, n), s = a.disabled || o, c = se(t, a.onTriggerChange), l = Cn(n), d = I("touch"), [u, h, p] = Xa(f => {
                const m = l().filter(y => !y.disabled),
                    g = m.find(y => y.value === a.value),
                    w = Za(m, f, g);
                w !== void 0 && a.onValueChange(w.value)
            }), _ = f => {
                s || (a.onOpenChange(!0), p()), f && (a.triggerPointerDownPosRef.current = {
                    x: Math.round(f.pageX),
                    y: Math.round(f.pageY)
                })
            };
            return v(ku, {
                asChild: !0,
                ...i,
                children: v(ne.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": a.contentId,
                    "aria-expanded": a.open,
                    "aria-required": a.required,
                    "aria-autocomplete": "none",
                    dir: a.dir,
                    "data-state": a.open ? "open" : "closed",
                    disabled: s,
                    "data-disabled": s ? "" : void 0,
                    "data-placeholder": Ga(a.value) ? "" : void 0,
                    ...r,
                    ref: c,
                    onClick: te(r.onClick, f => {
                        f.currentTarget.focus(), d.current !== "mouse" && _(f)
                    }),
                    onPointerDown: te(r.onPointerDown, f => {
                        d.current = f.pointerType;
                        const m = f.target;
                        m.hasPointerCapture(f.pointerId) && m.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (_(f), f.preventDefault())
                    }),
                    onKeyDown: te(r.onKeyDown, f => {
                        const m = u.current !== "";
                        !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && h(f.key), !(m && f.key === " ") && wd.includes(f.key) && (_(), f.preventDefault())
                    })
                })
            })
        });
    Ia.displayName = Pa;
    var Ta = "SelectValue",
        kd = $((e, t) => {
            const {
                __scopeSelect: n,
                className: o,
                style: r,
                children: i,
                placeholder: a = "",
                ...s
            } = e, c = Ze(Ta, n), {
                onValueNodeHasChildrenChange: l
            } = c, d = i !== void 0, u = se(t, c.onValueNodeChange);
            return de(() => {
                l(d)
            }, [l, d]), v(ne.span, { ...s,
                ref: u,
                style: {
                    pointerEvents: "none"
                },
                children: Ga(c.value) ? v(oe, {
                    children: a
                }) : i
            })
        });
    kd.displayName = Ta;
    var Ed = "SelectIcon",
        Oa = $((e, t) => {
            const {
                __scopeSelect: n,
                children: o,
                ...r
            } = e;
            return v(ne.span, {
                "aria-hidden": !0,
                ...r,
                ref: t,
                children: o || "▼"
            })
        });
    Oa.displayName = Ed;
    var Ad = "SelectPortal",
        Na = e => v(da, {
            asChild: !0,
            ...e
        });
    Na.displayName = Ad;
    var st = "SelectContent",
        Ra = $((e, t) => {
            const n = Ze(st, e.__scopeSelect),
                [o, r] = E();
            if (de(() => {
                    r(new DocumentFragment)
                }, []), !n.open) {
                const i = o;
                return i ? Qt(v(Ma, {
                    scope: e.__scopeSelect,
                    children: v(xn.Slot, {
                        scope: e.__scopeSelect,
                        children: v("div", {
                            children: e.children
                        })
                    })
                }), i) : null
            }
            return v(Da, { ...e,
                ref: t
            })
        });
    Ra.displayName = st;
    var ye = 10,
        [Ma, Je] = St(st),
        Pd = "SelectContentImpl",
        Da = $((e, t) => {
            const {
                __scopeSelect: n,
                position: o = "item-aligned",
                onCloseAutoFocus: r,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                side: s,
                sideOffset: c,
                align: l,
                alignOffset: d,
                arrowPadding: u,
                collisionBoundary: h,
                collisionPadding: p,
                sticky: _,
                hideWhenDetached: f,
                avoidCollisions: m,
                ...g
            } = e, w = Ze(st, n), [y, b] = E(null), [x, S] = E(null), C = se(t, T => b(T)), [A, M] = E(null), [D, R] = E(null), B = Cn(n), [U, F] = E(!1), W = I(!1);
            N(() => {
                if (y) return Du(y)
            }, [y]), cl();
            const L = z(T => {
                    const [Z, ...ce] = B().map(q => q.ref.current), [X] = ce.slice(-1), j = document.activeElement;
                    for (const q of T)
                        if (q === j || (q == null || q.scrollIntoView({
                                block: "nearest"
                            }), q === Z && x && (x.scrollTop = 0), q === X && x && (x.scrollTop = x.scrollHeight), q == null || q.focus(), document.activeElement !== j)) return
                }, [B, x]),
                V = z(() => L([A, y]), [L, A, y]);
            N(() => {
                U && V()
            }, [U, V]);
            const {
                onOpenChange: O,
                triggerPointerDownPosRef: Y
            } = w;
            N(() => {
                if (y) {
                    let T = {
                        x: 0,
                        y: 0
                    };
                    const Z = X => {
                            var j, q;
                            T = {
                                x: Math.abs(Math.round(X.pageX) - (((j = Y.current) == null ? void 0 : j.x) ? ? 0)),
                                y: Math.abs(Math.round(X.pageY) - (((q = Y.current) == null ? void 0 : q.y) ? ? 0))
                            }
                        },
                        ce = X => {
                            T.x <= 10 && T.y <= 10 ? X.preventDefault() : y.contains(X.target) || O(!1), document.removeEventListener("pointermove", Z), Y.current = null
                        };
                    return Y.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", ce, {
                        capture: !0,
                        once: !0
                    })), () => {
                        document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", ce, {
                            capture: !0
                        })
                    }
                }
            }, [y, O, Y]), N(() => {
                const T = () => O(!1);
                return window.addEventListener("blur", T), window.addEventListener("resize", T), () => {
                    window.removeEventListener("blur", T), window.removeEventListener("resize", T)
                }
            }, [O]);
            const [ee, he] = Xa(T => {
                const Z = B().filter(j => !j.disabled),
                    ce = Z.find(j => j.ref.current === document.activeElement),
                    X = Za(Z, T, ce);
                X && setTimeout(() => X.ref.current.focus())
            }), Qe = z((T, Z, ce) => {
                const X = !W.current && !ce;
                (w.value !== void 0 && w.value === Z || X) && (M(T), X && (W.current = !0))
            }, [w.value]), be = z(() => y == null ? void 0 : y.focus(), [y]), xe = z((T, Z, ce) => {
                const X = !W.current && !ce;
                (w.value !== void 0 && w.value === Z || X) && R(T)
            }, [w.value]), kt = o === "popper" ? Fo : La, ct = kt === Fo ? {
                side: s,
                sideOffset: c,
                align: l,
                alignOffset: d,
                arrowPadding: u,
                collisionBoundary: h,
                collisionPadding: p,
                sticky: _,
                hideWhenDetached: f,
                avoidCollisions: m
            } : {};
            return v(Ma, {
                scope: n,
                content: y,
                viewport: x,
                onViewportChange: S,
                itemRefCallback: Qe,
                selectedItem: A,
                onItemLeave: be,
                itemTextRefCallback: xe,
                focusSelectedItem: V,
                selectedItemText: D,
                position: o,
                isPositioned: U,
                searchRef: ee,
                children: v(Ea, {
                    as: Mt,
                    allowPinchZoom: !0,
                    children: v(Ri, {
                        asChild: !0,
                        trapped: w.open,
                        onMountAutoFocus: T => {
                            T.preventDefault()
                        },
                        onUnmountAutoFocus: te(r, T => {
                            var Z;
                            (Z = w.trigger) == null || Z.focus({
                                preventScroll: !0
                            }), T.preventDefault()
                        }),
                        children: v(Pi, {
                            asChild: !0,
                            disableOutsidePointerEvents: !0,
                            onEscapeKeyDown: i,
                            onPointerDownOutside: a,
                            onFocusOutside: T => T.preventDefault(),
                            onDismiss: () => w.onOpenChange(!1),
                            children: v(kt, {
                                role: "listbox",
                                id: w.contentId,
                                "data-state": w.open ? "open" : "closed",
                                dir: w.dir,
                                onContextMenu: T => T.preventDefault(),
                                ...g,
                                ...ct,
                                onPlaced: () => F(!0),
                                ref: C,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    outline: "none",
                                    ...g.style
                                },
                                onKeyDown: te(g.onKeyDown, T => {
                                    const Z = T.ctrlKey || T.altKey || T.metaKey;
                                    if (T.key === "Tab" && T.preventDefault(), !Z && T.key.length === 1 && he(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
                                        let X = B().filter(j => !j.disabled).map(j => j.ref.current);
                                        if (["ArrowUp", "End"].includes(T.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
                                            const j = T.target,
                                                q = X.indexOf(j);
                                            X = X.slice(q + 1)
                                        }
                                        setTimeout(() => L(X)), T.preventDefault()
                                    }
                                })
                            })
                        })
                    })
                })
            })
        });
    Da.displayName = Pd;
    var Id = "SelectItemAlignedPosition",
        La = $((e, t) => {
            const {
                __scopeSelect: n,
                onPlaced: o,
                ...r
            } = e, i = Ze(st, n), a = Je(st, n), [s, c] = E(null), [l, d] = E(null), u = se(t, C => d(C)), h = Cn(n), p = I(!1), _ = I(!0), {
                viewport: f,
                selectedItem: m,
                selectedItemText: g,
                focusSelectedItem: w
            } = a, y = z(() => {
                if (i.trigger && i.valueNode && s && l && f && m && g) {
                    const C = i.trigger.getBoundingClientRect(),
                        A = l.getBoundingClientRect(),
                        M = i.valueNode.getBoundingClientRect(),
                        D = g.getBoundingClientRect();
                    if (i.dir !== "rtl") {
                        const j = D.left - A.left,
                            q = M.left - j,
                            ve = C.left - q,
                            Ie = C.width + ve,
                            Ut = Math.max(Ie, A.width),
                            Wt = window.innerWidth - ye,
                            Vt = Ci(q, [ye, Math.max(ye, Wt - Ut)]);
                        s.style.minWidth = Ie + "px", s.style.left = Vt + "px"
                    } else {
                        const j = A.right - D.right,
                            q = window.innerWidth - M.right - j,
                            ve = window.innerWidth - C.right - q,
                            Ie = C.width + ve,
                            Ut = Math.max(Ie, A.width),
                            Wt = window.innerWidth - ye,
                            Vt = Ci(q, [ye, Math.max(ye, Wt - Ut)]);
                        s.style.minWidth = Ie + "px", s.style.right = Vt + "px"
                    }
                    const R = h(),
                        B = window.innerHeight - ye * 2,
                        U = f.scrollHeight,
                        F = window.getComputedStyle(l),
                        W = parseInt(F.borderTopWidth, 10),
                        L = parseInt(F.paddingTop, 10),
                        V = parseInt(F.borderBottomWidth, 10),
                        O = parseInt(F.paddingBottom, 10),
                        Y = W + L + U + O + V,
                        ee = Math.min(m.offsetHeight * 5, Y),
                        he = window.getComputedStyle(f),
                        Qe = parseInt(he.paddingTop, 10),
                        be = parseInt(he.paddingBottom, 10),
                        xe = C.top + C.height / 2 - ye,
                        kt = B - xe,
                        ct = m.offsetHeight / 2,
                        T = m.offsetTop + ct,
                        Z = W + L + T,
                        ce = Y - Z;
                    if (Z <= xe) {
                        const j = R.length > 0 && m === R[R.length - 1].ref.current;
                        s.style.bottom = "0px";
                        const q = l.clientHeight - f.offsetTop - f.offsetHeight,
                            ve = Math.max(kt, ct + (j ? be : 0) + q + V),
                            Ie = Z + ve;
                        s.style.height = Ie + "px"
                    } else {
                        const j = R.length > 0 && m === R[0].ref.current;
                        s.style.top = "0px";
                        const ve = Math.max(xe, W + f.offsetTop + (j ? Qe : 0) + ct) + ce;
                        s.style.height = ve + "px", f.scrollTop = Z - xe + f.offsetTop
                    }
                    s.style.margin = `${ye}px 0`, s.style.minHeight = ee + "px", s.style.maxHeight = B + "px", o == null || o(), requestAnimationFrame(() => p.current = !0)
                }
            }, [h, i.trigger, i.valueNode, s, l, f, m, g, i.dir, o]);
            de(() => y(), [y]);
            const [b, x] = E();
            de(() => {
                l && x(window.getComputedStyle(l).zIndex)
            }, [l]);
            const S = z(C => {
                C && _.current === !0 && (y(), w == null || w(), _.current = !1)
            }, [y, w]);
            return v(Od, {
                scope: n,
                contentWrapper: s,
                shouldExpandOnScrollRef: p,
                onScrollButtonChange: S,
                children: v("div", {
                    ref: c,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        zIndex: b
                    },
                    children: v(ne.div, { ...r,
                        ref: u,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...r.style
                        }
                    })
                })
            })
        });
    La.displayName = Id;
    var Td = "SelectPopperPosition",
        Fo = $((e, t) => {
            const {
                __scopeSelect: n,
                align: o = "start",
                collisionPadding: r = ye,
                ...i
            } = e, a = Sn(n);
            return v(Eu, { ...a,
                ...i,
                ref: t,
                align: o,
                collisionPadding: r,
                style: {
                    boxSizing: "border-box",
                    ...i.style,
                    "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        });
    Fo.displayName = Td;
    var [Od, Bo] = St(st, {}), Uo = "SelectViewport", $a = $((e, t) => {
        const {
            __scopeSelect: n,
            nonce: o,
            ...r
        } = e, i = Je(Uo, n), a = Bo(Uo, n), s = se(t, i.onViewportChange), c = I(0);
        return v(oe, {
            children: [v("style", {
                dangerouslySetInnerHTML: {
                    __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                },
                nonce: o
            }), v(xn.Slot, {
                scope: n,
                children: v(ne.div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...r,
                    ref: s,
                    style: {
                        position: "relative",
                        flex: 1,
                        overflow: "hidden auto",
                        ...r.style
                    },
                    onScroll: te(r.onScroll, l => {
                        const d = l.currentTarget,
                            {
                                contentWrapper: u,
                                shouldExpandOnScrollRef: h
                            } = a;
                        if (h != null && h.current && u) {
                            const p = Math.abs(c.current - d.scrollTop);
                            if (p > 0) {
                                const _ = window.innerHeight - ye * 2,
                                    f = parseFloat(u.style.minHeight),
                                    m = parseFloat(u.style.height),
                                    g = Math.max(f, m);
                                if (g < _) {
                                    const w = g + p,
                                        y = Math.min(_, w),
                                        b = w - y;
                                    u.style.height = y + "px", u.style.bottom === "0px" && (d.scrollTop = b > 0 ? b : 0, u.style.justifyContent = "flex-end")
                                }
                            }
                        }
                        c.current = d.scrollTop
                    })
                })
            })]
        })
    });
    $a.displayName = Uo;
    var Fa = "SelectGroup",
        [Nd, Rd] = St(Fa),
        Md = $((e, t) => {
            const {
                __scopeSelect: n,
                ...o
            } = e, r = go();
            return v(Nd, {
                scope: n,
                id: r,
                children: v(ne.div, {
                    role: "group",
                    "aria-labelledby": r,
                    ...o,
                    ref: t
                })
            })
        });
    Md.displayName = Fa;
    var Ba = "SelectLabel",
        Dd = $((e, t) => {
            const {
                __scopeSelect: n,
                ...o
            } = e, r = Rd(Ba, n);
            return v(ne.div, {
                id: r.id,
                ...o,
                ref: t
            })
        });
    Dd.displayName = Ba;
    var kn = "SelectItem",
        [Ld, Ua] = St(kn),
        Wa = $((e, t) => {
            const {
                __scopeSelect: n,
                value: o,
                disabled: r = !1,
                textValue: i,
                ...a
            } = e, s = Ze(kn, n), c = Je(kn, n), l = s.value === o, [d, u] = E(i ? ? ""), [h, p] = E(!1), _ = se(t, w => {
                var y;
                return (y = c.itemRefCallback) == null ? void 0 : y.call(c, w, o, r)
            }), f = go(), m = I("touch"), g = () => {
                r || (s.onValueChange(o), s.onOpenChange(!1))
            };
            if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
            return v(Ld, {
                scope: n,
                value: o,
                disabled: r,
                textId: f,
                isSelected: l,
                onItemTextChange: z(w => {
                    u(y => y || ((w == null ? void 0 : w.textContent) ? ? "").trim())
                }, []),
                children: v(xn.ItemSlot, {
                    scope: n,
                    value: o,
                    disabled: r,
                    textValue: d,
                    children: v(ne.div, {
                        role: "option",
                        "aria-labelledby": f,
                        "data-highlighted": h ? "" : void 0,
                        "aria-selected": l && h,
                        "data-state": l ? "checked" : "unchecked",
                        "aria-disabled": r || void 0,
                        "data-disabled": r ? "" : void 0,
                        tabIndex: r ? void 0 : -1,
                        ...a,
                        ref: _,
                        onFocus: te(a.onFocus, () => p(!0)),
                        onBlur: te(a.onBlur, () => p(!1)),
                        onClick: te(a.onClick, () => {
                            m.current !== "mouse" && g()
                        }),
                        onPointerUp: te(a.onPointerUp, () => {
                            m.current === "mouse" && g()
                        }),
                        onPointerDown: te(a.onPointerDown, w => {
                            m.current = w.pointerType
                        }),
                        onPointerMove: te(a.onPointerMove, w => {
                            var y;
                            m.current = w.pointerType, r ? (y = c.onItemLeave) == null || y.call(c) : m.current === "mouse" && w.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: te(a.onPointerLeave, w => {
                            var y;
                            w.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c))
                        }),
                        onKeyDown: te(a.onKeyDown, w => {
                            var b;
                            ((b = c.searchRef) == null ? void 0 : b.current) !== "" && w.key === " " || (yd.includes(w.key) && g(), w.key === " " && w.preventDefault())
                        })
                    })
                })
            })
        });
    Wa.displayName = kn;
    var Bt = "SelectItemText",
        Va = $((e, t) => {
            const {
                __scopeSelect: n,
                className: o,
                style: r,
                ...i
            } = e, a = Ze(Bt, n), s = Je(Bt, n), c = Ua(Bt, n), l = Sd(Bt, n), [d, u] = E(null), h = se(t, g => u(g), c.onItemTextChange, g => {
                var w;
                return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, g, c.value, c.disabled)
            }), p = d == null ? void 0 : d.textContent, _ = H(() => v("option", {
                value: c.value,
                disabled: c.disabled,
                children: p
            }, c.value), [c.disabled, c.value, p]), {
                onNativeOptionAdd: f,
                onNativeOptionRemove: m
            } = l;
            return de(() => (f(_), () => m(_)), [f, m, _]), v(oe, {
                children: [v(ne.span, {
                    id: c.textId,
                    ...i,
                    ref: h
                }), c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Qt(i.children, a.valueNode) : null]
            })
        });
    Va.displayName = Bt;
    var Ha = "SelectItemIndicator",
        za = $((e, t) => {
            const {
                __scopeSelect: n,
                ...o
            } = e;
            return Ua(Ha, n).isSelected ? v(ne.span, {
                "aria-hidden": !0,
                ...o,
                ref: t
            }) : null
        });
    za.displayName = Ha;
    var Wo = "SelectScrollUpButton",
        ja = $((e, t) => {
            const n = Je(Wo, e.__scopeSelect),
                o = Bo(Wo, e.__scopeSelect),
                [r, i] = E(!1),
                a = se(t, o.onScrollButtonChange);
            return de(() => {
                if (n.viewport && n.isPositioned) {
                    let s = function() {
                        const l = c.scrollTop > 0;
                        i(l)
                    };
                    const c = n.viewport;
                    return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s)
                }
            }, [n.viewport, n.isPositioned]), r ? v(Ka, { ...e,
                ref: a,
                onAutoScroll: () => {
                    const {
                        viewport: s,
                        selectedItem: c
                    } = n;
                    s && c && (s.scrollTop = s.scrollTop - c.offsetHeight)
                }
            }) : null
        });
    ja.displayName = Wo;
    var Vo = "SelectScrollDownButton",
        qa = $((e, t) => {
            const n = Je(Vo, e.__scopeSelect),
                o = Bo(Vo, e.__scopeSelect),
                [r, i] = E(!1),
                a = se(t, o.onScrollButtonChange);
            return de(() => {
                if (n.viewport && n.isPositioned) {
                    let s = function() {
                        const l = c.scrollHeight - c.clientHeight,
                            d = Math.ceil(c.scrollTop) < l;
                        i(d)
                    };
                    const c = n.viewport;
                    return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s)
                }
            }, [n.viewport, n.isPositioned]), r ? v(Ka, { ...e,
                ref: a,
                onAutoScroll: () => {
                    const {
                        viewport: s,
                        selectedItem: c
                    } = n;
                    s && c && (s.scrollTop = s.scrollTop + c.offsetHeight)
                }
            }) : null
        });
    qa.displayName = Vo;
    var Ka = $((e, t) => {
            const {
                __scopeSelect: n,
                onAutoScroll: o,
                ...r
            } = e, i = Je("SelectScrollButton", n), a = I(null), s = Cn(n), c = z(() => {
                a.current !== null && (window.clearInterval(a.current), a.current = null)
            }, []);
            return N(() => () => c(), [c]), de(() => {
                var d;
                const l = s().find(u => u.ref.current === document.activeElement);
                (d = l == null ? void 0 : l.ref.current) == null || d.scrollIntoView({
                    block: "nearest"
                })
            }, [s]), v(ne.div, {
                "aria-hidden": !0,
                ...r,
                ref: t,
                style: {
                    flexShrink: 0,
                    ...r.style
                },
                onPointerDown: te(r.onPointerDown, () => {
                    a.current === null && (a.current = window.setInterval(o, 50))
                }),
                onPointerMove: te(r.onPointerMove, () => {
                    var l;
                    (l = i.onItemLeave) == null || l.call(i), a.current === null && (a.current = window.setInterval(o, 50))
                }),
                onPointerLeave: te(r.onPointerLeave, () => {
                    c()
                })
            })
        }),
        $d = "SelectSeparator",
        Fd = $((e, t) => {
            const {
                __scopeSelect: n,
                ...o
            } = e;
            return v(ne.div, {
                "aria-hidden": !0,
                ...o,
                ref: t
            })
        });
    Fd.displayName = $d;
    var Ho = "SelectArrow",
        Bd = $((e, t) => {
            const {
                __scopeSelect: n,
                ...o
            } = e, r = Sn(n), i = Ze(Ho, n), a = Je(Ho, n);
            return i.open && a.position === "popper" ? v(Au, { ...r,
                ...o,
                ref: t
            }) : null
        });
    Bd.displayName = Ho;

    function Ga(e) {
        return e === "" || e === void 0
    }
    var Ya = $((e, t) => {
        const {
            value: n,
            ...o
        } = e, r = I(null), i = se(t, r), a = Tu(n);
        return N(() => {
            const s = r.current,
                c = window.HTMLSelectElement.prototype,
                d = Object.getOwnPropertyDescriptor(c, "value").set;
            if (a !== n && d) {
                const u = new Event("change", {
                    bubbles: !0
                });
                d.call(s, n), s.dispatchEvent(u)
            }
        }, [a, n]), v(pa, {
            asChild: !0,
            children: v("select", { ...o,
                ref: i,
                defaultValue: n
            })
        })
    });
    Ya.displayName = "BubbleSelect";

    function Xa(e) {
        const t = $e(e),
            n = I(""),
            o = I(0),
            r = z(a => {
                const s = n.current + a;
                t(s),
                    function c(l) {
                        n.current = l, window.clearTimeout(o.current), l !== "" && (o.current = window.setTimeout(() => c(""), 1e3))
                    }(s)
            }, [t]),
            i = z(() => {
                n.current = "", window.clearTimeout(o.current)
            }, []);
        return N(() => () => window.clearTimeout(o.current), []), [n, r, i]
    }

    function Za(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(l => l === t[0]) ? t[0] : t,
            i = n ? e.indexOf(n) : -1;
        let a = Ud(e, Math.max(i, 0));
        r.length === 1 && (a = a.filter(l => l !== n));
        const c = a.find(l => l.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return c !== n ? c : void 0
    }

    function Ud(e, t) {
        return e.map((n, o) => e[(t + o) % e.length])
    }
    var Wd = Aa,
        Vd = Ia,
        Hd = Oa,
        zd = Na,
        jd = Ra,
        qd = $a,
        Kd = Wa,
        Gd = Va,
        Yd = za,
        Xd = ja,
        Zd = qa;

    function Ja({
        flagCode: e
    }) {
        return v("img", {
            className: P.flag,
            src: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`,
            alt: `${e.toUpperCase()} flag`
        })
    }

    function Jd({
        portal: e
    }) {
        const [t, n] = E(!1), {
            language: o,
            setLanguage: r,
            options: i,
            showPicker: a
        } = co();
        return a.value ? v(Wd, {
            open: t,
            value: o.value.languageCode,
            onValueChange: s => {
                r(s), n(!1)
            },
            onOpenChange: s => {
                s && n(!0)
            },
            children: [v(Vd, {
                className: ke(P.btn, P.secondary, P.select),
                "aria-label": "Food",
                children: [v(Ja, {
                    flagCode: o.value.flagCode
                }), v("span", {
                    className: P.selectValue,
                    children: o.value.name
                }), v(Hd, {
                    className: P.selectIcon,
                    children: v(vt, {
                        name: "chevron-down"
                    })
                })]
            }), v(zd, {
                container: e,
                children: v(jd, {
                    className: P.selectContent,
                    position: "popper",
                    sideOffset: 8,
                    align: "end",
                    side: "top",
                    onPointerDownOutside: () => n(!1),
                    onCloseAutoFocus: () => n(!1),
                    onEscapeKeyDown: () => n(!1),
                    children: [v(Xd, {
                        className: P.selectScrollButton,
                        children: v(vt, {
                            name: "chevron-up"
                        })
                    }), v(qd, {
                        className: P.selectViewport,
                        children: i.value.map(s => v(Kd, {
                            value: s.languageCode,
                            className: ke(P.selectItem),
                            children: [v(Ja, {
                                flagCode: s.flagCode
                            }), v(Gd, {
                                children: s.name
                            }), v(Yd, {
                                className: P.selectItemIndicator,
                                children: v(vt, {
                                    name: "check"
                                })
                            })]
                        }, s.languageCode))
                    }), v(Zd, {
                        className: P.selectScrollButton,
                        children: v(vt, {
                            name: "chevron-down"
                        })
                    })]
                })
            })]
        }) : null
    }

    function Qd() {
        const {
            isMuted: e,
            isMutingEnabled: t,
            setIsMuted: n
        } = so(), o = z(() => {
            n(!e.peek())
        }, [n]);
        return t.value ? v(fo, {
            icon: e.value ? "mic-off" : "mic",
            onClick: o
        }) : null
    }

    function ef() {
        return v("div", {
            className: P.poweredBy,
            children: [v("span", {
                children: "Powered by ElevenLabs "
            }), v("a", {
                href: "https://elevenlabs.io/conversational-ai",
                target: "_blank",
                children: "Conversational AI"
            })]
        })
    }
    const tf = () => !yc("(min-width: 768px)"),
        nf = ({
            expandable: e,
            isMobile: t
        }) => {
            switch (e) {
                case "always":
                    return !0;
                case "mobile":
                    return t;
                case "desktop":
                    return !t;
                default:
                    return !1
            }
        },
        of = ({
            allowExpanding: e,
            isOpen: t
        }) => e ? t : !0,
        rf = Jt(function() {
            const {
                terms_key: t,
                terms_html: n,
                expandable: o,
                variant: r,
                disable_banner: i,
                show_avatar_when_collapsed: a
            } = rt().value, s = H(() => t ? !!localStorage.getItem(t) : !1, [t]), c = I(null), l = I(null), d = I(null), [u, h] = E(s), [p, _] = E(!1), [f, m] = E(null), [g, w] = E(!1), [y, b] = E(!1), {
                isMutingEnabled: x
            } = so(), {
                startSession: S,
                endSession: C,
                error: A,
                isSpeaking: M,
                isDisconnected: D,
                status: R
            } = on(), B = tf(), U = nf({
                expandable: o,
                isMobile: B
            }), F = y || !U || !D.value, W = wc();
            N(() => {
                var ee;
                if (d.current) {
                    const he = () => {
                        let be = null;
                        for (const xe of d.current.assignedElements())
                            if (xe instanceof HTMLFormElement) {
                                be = xe;
                                break
                            }
                        m(be), w((be == null ? void 0 : be.checkValidity()) ? ? !1)
                    };
                    he();
                    const Qe = d.current;
                    return Qe.addEventListener("slotchange", he), () => Qe.removeEventListener("slotchange", he)
                } else m(l.current), w(((ee = l.current) == null ? void 0 : ee.checkValidity()) ? ? !1)
            }, [n]), N(() => {
                s || !f ? (_(!1), h(!0)) : !s && f && h(!1)
            }, [s, f]);
            const L = of ({
                    allowExpanding: U,
                    isOpen: F
                }),
                {
                    endFeedbackActive: V
                } = lo(),
                O = co(),
                Y = ue(() => ({
                    "--additional-width": O.showPicker.value ? "68px" : x.value ? "40px" : void 0
                }));
            return v("div", {
                ref: c,
                style: Y,
                className: ke(P.wrapper, V.value ? P.compact : P[r], F && P.open, (p || A.value) && P.customContent),
                children: [L && !i && v(ef, {}), U && !F && v(it, {
                    variant: "primary",
                    icon: a ? void 0 : "phone",
                    className: ke(P.minimize, a && P.avatarButton),
                    onClick: () => b(!0),
                    title: W.expand_text,
                    children: a ? v(bi, {}) : W.expand_text
                }), v("div", {
                    className: P.box,
                    children: [A.value && v(Fc, {}), v("div", {
                        className: ke(P.terms, p && !A.value && P.show),
                        children: [n ? v("form", {
                            ref: l,
                            onInput: () => {
                                w((f == null ? void 0 : f.checkValidity()) ? ? !1)
                            },
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }) : v("slot", {
                            onInput: () => {
                                w((f == null ? void 0 : f.checkValidity()) ? ? !1)
                            },
                            ref: d,
                            name: "terms"
                        }), v("div", {
                            class: P.termsFooter,
                            children: [v(it, {
                                onClick: () => _(!1),
                                children: "Cancel"
                            }), v(it, {
                                variant: "primary",
                                disabledStyle: !g,
                                onClick: ee => {
                                    f != null && f.reportValidity() && (h(!0), t && localStorage.setItem(t, "true"), _(!1), S(ee.currentTarget))
                                },
                                children: "Agree"
                            })]
                        })]
                    }), !p && !A.value && (V.value ? v(Bc, {}) : v(oe, {
                        children: [v(bi, {}), v("div", {
                            className: P.actions,
                            children: [r !== "compact" && v("p", {
                                className: P.status,
                                children: D.value ? W.action_text : M.value ? W.speaking_text : W.listening_text
                            }), v("div", {
                                className: P.actionButtons,
                                children: D.value ? v(oe, {
                                    children: [v(it, {
                                        variant: "primary",
                                        icon: "phone",
                                        title: W.start_call_text,
                                        onClick: ee => {
                                            if (!u) {
                                                _(!0);
                                                return
                                            }
                                            S(ee.currentTarget)
                                        },
                                        children: W.start_call_text
                                    }), v(Jd, {
                                        portal: c.current ? ? void 0
                                    })]
                                }) : v(oe, {
                                    children: [v(it, {
                                        icon: "phone-off",
                                        title: W.end_call_text,
                                        disabled: R.value !== "connected",
                                        onClick: () => C(),
                                        children: W.end_call_text
                                    }), v(Qd, {})]
                                })
                            })]
                        })]
                    }))]
                }), v(Uc, {})]
            })
        }),
        af = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap";*{box-sizing:border-box}._devHost_1f9vw_7,:host{pointer-events:none;position:fixed;right:32px;bottom:32px;z-index:1000;--btn-max-width: 320px}._wrapper_1f9vw_18{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_1f9vw_39{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:20px;border-radius:var(--el-border-radius);box-shadow:0 0 64px 64px #0000001a;pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}._open_1f9vw_57 ._box_1f9vw_39{pointer-events:initial;opacity:1}._compact_1f9vw_62:not(._customContent_1f9vw_62) ._box_1f9vw_39{gap:8px;padding:12px;border-radius:32px}._avatar_1f9vw_68{position:relative;width:54px;height:54px;flex-shrink:0}._compact_1f9vw_62 ._avatar_1f9vw_68{width:36px;height:36px}._avatarBackground_1f9vw_80{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_1f9vw_90{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_1f9vw_102{width:100%;height:100%}._actions_1f9vw_107{width:min-content;display:flex;gap:11px;flex-direction:column}._actionButtons_1f9vw_114{min-width:calc(156px + var(--additional-width, 0px));max-width:var(--btn-max-width);display:flex;gap:8px}._status_1f9vw_121{font-size:14px;text-wrap:nowrap;line-height:24px;margin:-7px 0;max-width:var(--btn-max-width);overflow:hidden;text-overflow:ellipsis;color:var(--el-text-color)}._btn_1f9vw_132{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;flex-shrink:1;min-height:36px;min-width:0;max-width:var(--btn-max-width)}._avatarButton_1f9vw_165{background-color:transparent;color:transparent;box-shadow:none;height:56px;padding:0}._avatarButton_1f9vw_165 ._avatar_1f9vw_68{margin:1px}._btn_1f9vw_132:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_1f9vw_132:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_1f9vw_132._disabled_1f9vw_188{opacity:.5}._btn_1f9vw_132:disabled{opacity:.5;pointer-events:none}._btn_1f9vw_132:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_1f9vw_132._secondary_1f9vw_202{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_1f9vw_132._secondary_1f9vw_202:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_1f9vw_132._secondary_1f9vw_202:active{--el-ring-color: rgba(125, 135, 155, .2)}._btn_1f9vw_132._iconBtn_1f9vw_216{flex-grow:0;flex-shrink:0;height:36px;width:36px}._btn_1f9vw_132._select_1f9vw_223{flex-grow:0;flex-shrink:0;padding:6px;gap:4px}._ellipsis_1f9vw_230{flex-shrink:1;overflow:hidden;text-overflow:ellipsis}._iconSlot_1f9vw_236{display:flex;font-size:16px}._btnIcon_1f9vw_241{margin-left:-6px;margin-right:4px;flex-shrink:0}._minimize_1f9vw_247{pointer-events:all}._poweredBy_1f9vw_251{pointer-events:all;font-size:10px;align-self:center;text-align:center;color:var(--el-text-color)}._poweredBy_1f9vw_251 a,._poweredBy_1f9vw_251 span{opacity:.5}._poweredBy_1f9vw_251 a{white-space:nowrap;color:inherit;outline-color:var(--el-focus-color)}._poweredBy_1f9vw_251 a:hover,._poweredBy_1f9vw_251 a:focus-visible{opacity:1}._compact_1f9vw_62 ._poweredBy_1f9vw_251,._full_1f9vw_276 ._poweredBy_1f9vw_251{margin:-8px 0 -20px}._terms_1f9vw_280{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}._terms_1f9vw_280 form{display:flex;flex-direction:column;gap:16px}._terms_1f9vw_280 p,._terms_1f9vw_280 ul,._terms_1f9vw_280 ol,._terms_1f9vw_280 h1,._terms_1f9vw_280 h2,._terms_1f9vw_280 h3,._terms_1f9vw_280 h4,._terms_1f9vw_280 h5,._terms_1f9vw_280 h6{margin:0;font-weight:400}._terms_1f9vw_280 a{color:var(--el-text-color)}._terms_1f9vw_280 ._strong_1f9vw_311{font-weight:500}._terms_1f9vw_280 h1{font-size:35px}._terms_1f9vw_280 h2{font-size:28px}._terms_1f9vw_280 h3{font-size:24px}._terms_1f9vw_280 h4{font-size:20px}._terms_1f9vw_280 h5{font-size:18px}._terms_1f9vw_280 h6{font-size:16px}._terms_1f9vw_280._show_1f9vw_339{display:block}._termsFooter_1f9vw_343{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_1f9vw_343 ._btn_1f9vw_132{flex-grow:0}._feedback_1f9vw_354{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:12px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_1f9vw_354._show_1f9vw_339{opacity:.5;translate:0 0;pointer-events:auto}._feedback_1f9vw_354._show_1f9vw_339:hover{opacity:1}._inlineFeedback_1f9vw_380{display:flex;align-items:center;gap:5px;z-index:1;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:14px;font-weight:500;text-wrap:nowrap;line-height:20px}._inlineFeedback_1f9vw_380._show_1f9vw_339{translate:0 0;pointer-events:auto}._inlineFeedback_1f9vw_380 ._feedbackText_1f9vw_399{margin:0 12px}._flag_1f9vw_403{width:24px;height:24px;border-radius:50%;object-fit:cover;border:1px solid var(--el-border-color)}._selectContent_1f9vw_411{z-index:1;overflow:hidden;background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);border-radius:var(--el-border-radius);max-height:min(384px,var(--radix-select-content-available-height));min-width:var(--radix-select-trigger-width)}._selectViewport_1f9vw_422{padding:8px}._selectValue_1f9vw_426{display:none;margin-right:auto;margin-left:auto}._selectIcon_1f9vw_432{padding-right:4px}._selectItem_1f9vw_436{display:flex;-webkit-user-select:none;user-select:none;align-items:center;padding:6px 32px 6px 6px;gap:8px;cursor:pointer;border-radius:var(--el-border-radius);position:relative}._selectItem_1f9vw_436:focus-visible{outline:none}._selectItem_1f9vw_436[data-highlighted]{background-color:#8080801a}._selectItemIndicator_1f9vw_455{position:absolute;right:0;width:32px;display:inline-flex;align-items:center;justify-content:center}._selectScrollButton_1f9vw_464{display:flex;align-items:center;justify-content:center;height:24px;background-color:var(--el-bg-color);cursor:default}._error_1f9vw_473{max-width:320px;font-size:14px;line-height:20px}._error_1f9vw_473 h1{margin:0 0 16px;font-size:20px;font-weight:400}._error_1f9vw_473 p{margin:0}';

    function sf() {
        const e = rt();
        let t = af;
        const n = ue(() => `.${P.devHost}, :host {
  --el-bg-color: ${e.value.bg_color??"#fff"};
  --el-text-color: ${e.value.text_color??"#000"};
  --el-border-color: ${e.value.border_color??"#e1e1e1"};
  --el-border-radius: ${e.value.border_radius??"20"}px;
  --el-btn-color: ${e.value.btn_color??"#000"};
  --el-btn-text-color: ${e.value.btn_text_color??"#fff"};
  --el-btn-radius: ${e.value.btn_radius??"32"}px;
  --el-focus-color: ${e.value.focus_color??"#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`);
        return v("style", {
            children: [n, t]
        })
    }

    function cf(e) {
        return v(Vs, {
            value: e,
            children: v(Ks, {
                children: v(Ys, {
                    children: v(lc, {
                        children: v(cc, {
                            children: v(uc, {
                                children: v(fc, {
                                    children: v(mc, {
                                        children: v(gc, {
                                            children: v(Zs, {
                                                children: [v(sf, {}), v(rf, {})]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    ls(cf, "elevenlabs-convai", $n, {
        shadow: !0
    })
});