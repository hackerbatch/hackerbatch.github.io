! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = re.type(e);
        return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = we[e] = {};
        return re.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), re.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Se, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, o, a = re.expando,
                s = e.nodeType,
                l = s ? re.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: re.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? re.cache : e,
                s = o ? e[re.expando] : re.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function p() {
        try {
            return pe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Le.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
    }

    function v(e) {
        Ee.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, o = re._data(e),
                a = re._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (i in r.events) re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ee.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var i, r = re(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }

    function S(e) {
        var t = pe,
            n = Ke[e];
        return n || (n = C(e, t), "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ze.detach()), Ke[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function D(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
            if (t = ft[r] + n, t in e) return t;
        return i
    }

    function j(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (o[a] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = je(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function F(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function E(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + De[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + De[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + De[o] + "Width", !0, r))) : (a += re.css(e, "padding" + De[o], !0, r), "padding" !== n && (a += re.css(e, "border" + De[o] + "Width", !0, r)));
        return a
    }

    function N(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
            i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + E(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function A(e, t, n, i, r) {
        return new A.prototype.init(e, t, n, i, r)
    }

    function M() {
        return setTimeout(function() {
            ht = void 0
        }), ht = re.now()
    }

    function $(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = De[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function O(e, t, n) {
        for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function L(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            f = {},
            h = e.style,
            p = e.nodeType && je(e),
            m = re._data(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], mt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    p = !0
                }
                f[i] = m && m[i] || re.style(e, i)
            } else u = void 0;
        if (re.isEmptyObject(f)) "inline" === ("none" === u ? S(e.nodeName) : u) && (h.display = u);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !p), p ? re(e).show() : d.done(function() {
                re(e).hide()
            }), d.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in f) re.style(e, t, f[t])
            });
            for (i in f) a = O(p ? m[i] : 0, i, d), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function H(e, t, n) {
        var i, r, o = 0,
            a = yt.length,
            s = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = ht || M(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (P(c, u.opts.specialEasing); a > o; o++)
            if (i = yt[o].call(u, e, c, u.opts)) return i;
        return re.map(c, O, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Q(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, re.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === Wt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Y(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n), e
    }

    function q(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, i) {
        var r;
        if (re.isArray(t)) re.each(t, function(t, r) {
            n || Ut.test(e) ? i(e, r) : R(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else
            for (r in t) R(e + "[" + r + "]", t[r], n, i)
    }

    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function z() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        G = J.slice,
        V = J.concat,
        X = J.push,
        Z = J.indexOf,
        K = {},
        ee = K.toString,
        te = K.hasOwnProperty,
        ne = {},
        ie = "1.11.1",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: J.sort,
        splice: J.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Z) return Z.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(G.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, h, p, m;
            if ((t ? t.ownerDocument || t : Q) !== A && N(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if ($ && !i) {
                if (r = ye.exec(e))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (_.qsa && (!O || !O.test(e))) {
                    if (h = d = I, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + f(u[l]);
                        p = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(n, p.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[I] = !0, e
        }

        function r(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = q++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [Y, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[I] || (t[I] = {}), (s = l[i]) && s[0] === Y && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, d, f = [],
                    h = [],
                    p = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, f, e, s, l),
                    b = n ? o || (i ? e : p || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, h), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? te.call(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    return !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                }]; r > s; s++)
                if (n = x.relative[e[s].type]) c = [h(p(c), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (i = ++s; r > i && !x.relative[e[i].type]; i++);
                        return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, f, h = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = j,
                        b = i || o && x.find.TAG("*", u),
                        w = Y += null == y ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (u && (j = a !== A && a); p !== _ && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (Y = w)
                        }
                        r && ((c = !f && c) && h--, i && m.push(c))
                    }
                    if (h += p, r && p !== h) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (i) {
                            if (h > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = X.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (Y = w, j = y), m
                };
            return r ? i(a) : a
        }
        var w, _, x, T, C, S, k, D, j, F, E, N, A, M, $, O, L, P, H, I = "sizzle" + -new Date,
            Q = e.document,
            Y = 0,
            q = 0,
            W = n(),
            R = n(),
            B = n(),
            z = function(e, t) {
                return e === t && (E = !0), 0
            },
            U = "undefined",
            J = 1 << 31,
            G = {}.hasOwnProperty,
            V = [],
            X = V.pop,
            Z = V.push,
            K = V.push,
            ee = V.slice,
            te = V.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            fe = new RegExp(se),
            he = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            K.apply(V = ee.call(Q.childNodes), Q.childNodes), V[Q.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: V.length ? function(e, t) {
                    Z.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : Q,
                i = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, M = n.documentElement, $ = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                N()
            })), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), _.getById = r(function(e) {
                return M.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), _.getById ? (x.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && $) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && $ ? t.getElementsByClassName(e) : void 0
            }, L = [], O = [], (_.qsa = ve.test(n.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
            }), r(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (_.matchesSelector = ve.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), L.push("!=", se)
            }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(M.compareDocumentPosition), H = t || ve.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === Q && H(Q, e) ? -1 : t === n || t.ownerDocument === Q && H(Q, t) ? 1 : F ? te.call(F, e) - te.call(F, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var i, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : F ? te.call(F, e) - te.call(F, t) : 0;
                if (o === s) return a(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) u.unshift(i);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === Q ? -1 : u[r] === Q ? 1 : 0
            }, n) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && N(e), n = n.replace(de, "='$1']"), !(!_.matchesSelector || !$ || L && L.test(n) || O && O.test(n))) try {
                var i = P.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && N(e), H(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && N(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && G.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
            return void 0 !== i ? i : _.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (E = !_.detectDuplicates, F = !_.sortStable && e.slice(0), e.sort(z), E) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return F = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(_e, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[I] || (g[I] = {}), u = c[e] || [], h = u[0] === Y && u[1], f = u[0] === Y && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [Y, h, f];
                                        break
                                    }
                            } else if (y && (u = (t[I] || (t[I] = {}))[e]) && u[0] === Y) f = u[1];
                            else
                                for (;
                                    (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [Y, f]), d !== t)););
                            return f -= r, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = te.call(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = k(e.replace(le, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === M
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = l(w);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = R[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = x.preFilter; s;) {
                (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in x.filter) !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = B[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[I] ? i.push(o) : r.push(o);
                o = B(e, b(r, i)), o.selector = e
            }
            return o
        }, D = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && S(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === t.nodeType && $ && x.relative[o[1].type]) {
                    if (t = (x.find.ID(a.matches[0].replace(_e, xe), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(_e, xe), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || k(e, d))(i, t, !$, n, be.test(e) && c(t.parentNode) || t), n
        }, _.sortStable = I.split("").sort(z).join("") === I, _.detectDuplicates = !!E, N(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) re.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var he, pe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = re.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), de.test(n[1]) && re.isPlainObject(t))
                        for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = pe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return he.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = pe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    ge.prototype = re.fn, he = re(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), re.fn.extend({
        has: function(e) {
            var t, n = re(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (re.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return re.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return re.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return re.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(n, i) {
            var r = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g,
        we = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || o(e) : re.extend({}, e);
        var t, n, i, r, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(t) {
                            re.each(t, function(t, n) {
                                var i = re.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), t ? r = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(n) {
                            re.each(t, function(t, o) {
                                var a = re.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = G.call(arguments),
                a = o.length,
                s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : re.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var _e;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!pe.body) return setTimeout(re.ready);
                re.isReady = !0, e !== !0 && --re.readyWait > 0 || (_e.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
            }
        }
    }), re.ready.promise = function(t) {
        if (!_e)
            if (_e = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
            else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            pe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && pe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return _e.promise(t)
    };
    var xe, Te = "undefined";
    for (xe in re(ne)) break;
    ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, n, i;
            n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = pe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : o ? l(o, e, re.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(e, t),
                a = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return re._data(e, n) || re._data(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = ["Top", "Right", "Bottom", "Left"],
        je = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Fe = re.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (s in n) re.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(re(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Ee = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = pe.createElement("input"),
            t = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = pe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ne = /^(?:input|select|textarea)$/i,
        Ae = /^key/,
        Me = /^(?:mouse|pointer|contextmenu)|click/,
        $e = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, m, g = re._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof re === Te || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Oe.exec(t[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (u = re.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = re.event.special[h] || {}, d = re.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, h, p, m, g = re.hasData(e) && re._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = Oe.exec(t[u]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || re.removeEvent(e, h, g.handle), delete c[h])
                    } else
                        for (h in c) re.event.remove(e, h + t[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || pe],
                h = te.call(t, "type") ? t.type : t,
                p = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !$e.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[h] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || h, $e.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || pe) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || h, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = h, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                    c = i[a], c && (i[a] = null), re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    re.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, o, a = [],
                s = G.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Me.test(r) ? this.mouseHooks : Ae.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pe, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = pe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Ne.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t);
                r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t) - 1;
                r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
            }
        }
    }), re.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(e) {
                return re().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                re.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pe = / jQuery\d+="(?:null|\d+)"/g,
        He = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
        Ie = /^\s+/,
        Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ye = /<([\w:]+)/,
        qe = /<tbody/i,
        We = /<|&#?\w+;/,
        Re = /<(?:script|style|link)/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ve = m(pe),
        Xe = Ve.appendChild(pe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
            if (ne.html5Clone || re.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Xe.innerHTML = e.outerHTML, Xe.removeChild(o = Xe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) x(r, i[a]);
                else x(e, o);
            return i = g(o, "script"), i.length > 0 && _(i, !l && g(e, "script")), i = s = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(h, o.nodeType ? [o] : o);
                    else if (We.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Ye.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, s.innerHTML = c[1] + o.replace(Qe, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Ie.test(o) && h.push(t.createTextNode(Ie.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || qe.test(o) ? "<table>" !== c[1] || qe.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else h.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || re.grep(g(h, "input"), v), p = 0; o = h[p++];)
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && _(s), n))
                    for (r = 0; o = s[r++];) ze.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
                if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, J.push(r))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return Fe(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && _(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Fe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pe, "") : void 0;
                if (!("string" != typeof e || Re.test(e) || !ne.htmlSerialize && He.test(e) || !ne.leadingWhitespace && Ie.test(e) || Ge[(Ye.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Qe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = V.apply([], e);
            var n, i, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                h = re.isFunction(f);
            if (h || u > 1 && "string" == typeof f && !ne.checkClone && Be.test(f)) return this.each(function(n) {
                var i = c.eq(n);
                h && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = re.map(g(s, "script"), b), r = o.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, re.map(o, w), l = 0; r > l; l++) i = o[l], ze.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ze, Ke = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)),
            void 0 === a ? a : a + ""
    }) : pe.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, r;
            n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, r = t.appendChild(pe.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, a, s, l;
        n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == o && t(), o
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), re.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + ke + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + ke + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[s] || (re.cssProps[s] = D(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = D(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                    return N(e, t, i)
                }) : N(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && et(e);
                return F(e, n, i ? E(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + De[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nt.test(e) || (re.cssHooks[e + t].set = F)
    }), re.fn.extend({
        css: function(e, t) {
            return Fe(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = A, A.prototype = {
        constructor: A,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = A.prototype.init, re.fx.step = {};
    var ht, pt, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [L],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = gt.exec(t),
                    o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                    a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(H, {
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), re.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(je).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = re.isEmptyObject(e),
                    o = re.speed(t, n, i),
                    a = function() {
                        var t = H(this, re.extend({}, e), o);
                        (r || re._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = re.timers,
                        a = re._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = re._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var n = re.fn[t];
            re.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
            }
        }), re.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = re.timers,
                n = 0;
            for (ht = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || re.fx.stop(), ht = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            pt || (pt = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(pt), pt = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, r;
            t = pe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = pe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                        if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _t, xt, Tt = re.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        St = ne.getSetAttribute,
        kt = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return Fe(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Te ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : _t)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? kt && St || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(St ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), xt = {
        set: function(e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : kt && St || !Ct.test(n) ? e.setAttribute(!St && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || re.find.attr;
        Tt[t] = kt && St || !Ct.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = Tt[t], Tt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = o), r
        } : function(e, t, n) {
            return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), kt && St || (re.attrHooks.value = {
        set: function(e, t, n) {
            return re.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
        }
    }), St || (_t = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: _t.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, n) {
            _t.set(e, "" === t ? !1 : t, n)
        }
    }, re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Dt = /^(?:input|select|textarea|button|object)$/i,
        jt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Fe(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var Ft = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ft, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ft, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                re(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ft, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Et = re.now(),
        Nt = /\?/,
        At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = re.trim(t + "");
        return r && !re.trim(r.replace(At, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }, re.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var Mt, $t, Ot = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qt = {},
        Wt = {},
        Rt = "*/".concat("*");
    try {
        $t = location.href
    } catch (Bt) {
        $t = pe.createElement("a"), $t.href = "", $t = $t.href
    }
    Mt = Yt.exec($t.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t,
            type: "GET",
            isLocal: Ht.test(Mt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, re.ajaxSettings), t) : Y(re.ajaxSettings, e)
        },
        ajaxPrefilter: I(qt),
        ajaxTransport: I(Wt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, w, x = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", _.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = q(d, _, n)), y = W(d, y, _, r), r ? (d.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (re.lastModified[o] = w), w = _.getResponseHeader("etag"), w && (re.etag[o] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, r = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", r ? p.resolveWith(f, [c, x, _]) : p.rejectWith(f, [_, x, v]), _.statusCode(g), g = void 0, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [_, d, r ? c : v]), m.fireWith(f, [_, x]), l && (h.trigger("ajaxComplete", [_, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, d = re.ajaxSetup({}, t),
                f = d.context || d,
                h = d.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                p = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Pt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (p.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || $t) + "").replace(Ot, "").replace(Qt, Mt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Yt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Mt[1] && i[2] === Mt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mt[3] || ("http:" === Mt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), Q(qt, d, t, _), 2 === b) return _;
            l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !It.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Nt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Lt.test(o) ? o.replace(Lt, "$1_=" + Et++) : o + (Nt.test(o) ? "&" : "?") + "_=" + Et++)), d.ifModified && (re.lastModified[o] && _.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && _.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) _.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === b)) return _.abort();
            w = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[r](d[r]);
            if (u = Q(Wt, d, t, _)) {
                _.readyState = 1, l && h.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            } : function() {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var zt = /%20/g,
        Ut = /\[\]$/,
        Jt = /\r?\n/g,
        Gt = /^(?:submit|button|image|reset|file)$/i,
        Vt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, r);
        return i.join("&").replace(zt, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Vt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ee.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jt, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || z()
    } : B;
    var Xt = 0,
        Zt = {},
        Kt = re.ajaxSettings.xhr();
    e.ActiveXObject && re(e).on("unload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), ne.cors = !!Kt && "withCredentials" in Kt, Kt = ne.ajax = !!Kt, Kt && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Xt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState))
                            if (delete Zt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = pe.head || re("head")[0] || pe.documentElement;
            return {
                send: function(i, r) {
                    t = pe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || re.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || pe;
        var i = de.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = re.css(e, "position"),
                d = re(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = U(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        re.fn[e] = function(i) {
            return Fe(this, function(e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Fe(this, function(t, n, i) {
                    var r;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a);
                }, t, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var on = e.jQuery,
        an = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
    }, typeof t === Te && (e.jQuery = e.$ = re), re
});
var B64 = {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        lookup: null,
        ie: /MSIE /.test(navigator.userAgent),
        ieo: /MSIE [67]/.test(navigator.userAgent),
        encode: function(e) {
            var t, n, i, r = B64.toUtf8(e),
                o = -1,
                a = r.length,
                s = [, , , ];
            if (B64.ie) {
                for (var l = []; ++o < a;) t = r[o], n = r[++o], s[0] = t >> 2, s[1] = (3 & t) << 4 | n >> 4, isNaN(n) ? s[2] = s[3] = 64 : (i = r[++o], s[2] = (15 & n) << 2 | i >> 6, s[3] = isNaN(i) ? 64 : 63 & i), l.push(B64.alphabet.charAt(s[0]), B64.alphabet.charAt(s[1]), B64.alphabet.charAt(s[2]), B64.alphabet.charAt(s[3]));
                return l.join("")
            }
            for (var l = ""; ++o < a;) t = r[o], n = r[++o], s[0] = t >> 2, s[1] = (3 & t) << 4 | n >> 4, isNaN(n) ? s[2] = s[3] = 64 : (i = r[++o], s[2] = (15 & n) << 2 | i >> 6, s[3] = isNaN(i) ? 64 : 63 & i), l += B64.alphabet[s[0]] + B64.alphabet[s[1]] + B64.alphabet[s[2]] + B64.alphabet[s[3]];
            return l
        },
        decode: function(e) {
            if (e.length % 4) throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");
            var t = B64.fromUtf8(e),
                n = 0,
                i = t.length;
            if (B64.ieo) {
                for (var r = []; i > n;) t[n] < 128 ? r.push(String.fromCharCode(t[n++])) : t[n] > 191 && t[n] < 224 ? r.push(String.fromCharCode((31 & t[n++]) << 6 | 63 & t[n++])) : r.push(String.fromCharCode((15 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]));
                return r.join("")
            }
            for (var r = ""; i > n;) r += t[n] < 128 ? String.fromCharCode(t[n++]) : t[n] > 191 && t[n] < 224 ? String.fromCharCode((31 & t[n++]) << 6 | 63 & t[n++]) : String.fromCharCode((15 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]);
            return r
        },
        toUtf8: function(e) {
            var t, n = -1,
                i = e.length,
                r = [];
            if (/^[\x00-\x7f]*$/.test(e))
                for (; ++n < i;) r.push(e.charCodeAt(n));
            else
                for (; ++n < i;) t = e.charCodeAt(n), 128 > t ? r.push(t) : 2048 > t ? r.push(t >> 6 | 192, 63 & t | 128) : r.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
            return r
        },
        fromUtf8: function(e) {
            var t, n = -1,
                i = [],
                r = [, , , ];
            if (!B64.lookup) {
                for (t = B64.alphabet.length, B64.lookup = {}; ++n < t;) B64.lookup[B64.alphabet.charAt(n)] = n;
                n = -1
            }
            for (t = e.length; ++n < t && (r[0] = B64.lookup[e.charAt(n)], r[1] = B64.lookup[e.charAt(++n)], i.push(r[0] << 2 | r[1] >> 4), r[2] = B64.lookup[e.charAt(++n)], 64 != r[2]) && (i.push((15 & r[1]) << 4 | r[2] >> 2), r[3] = B64.lookup[e.charAt(++n)], 64 != r[3]);) i.push((3 & r[2]) << 6 | r[3]);
            return i
        }
    },
    base64_encode = function(e) {
        return B64.encode(e)
    },
    base64_decode = function(e) {
        return B64.decode(e)
    };
try {
    module.exports = {
        base64_encode: base64_encode,
        base64_decode: base64_decode
    }
} catch (e) {}
this.JSON || (this.JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, i, r, o, a, s = gap,
                l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length, n = 0; o > n; n += 1) a[n] = str(n, l) || "null";
                        return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; o > n; n += 1) i = rep[n], "string" == typeof i && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                    else
                        for (i in l) Object.hasOwnProperty.call(l, i) && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                    return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; n > i; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, i, r = e[t];
                if (r && "object" == typeof r)
                    for (n in r) Object.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                return reviver.call(e, t, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), Translate = function() {
        this.translations = [], this.missing_translation = [];
        this.get = function(e) {
            var t;
            for (t = 0; t < this.translations.length; t++)
                if (this.translations[t].original == e) return this.translations[t].translated;
            return this.logMissingTranslation(e), e
        }, this.logMissingTranslation = function(e) {
            var t;
            for (t = 0; t < this.missing_translation.length; t++)
                if (this.missing_translation[t] && this.missing_translation[t].original == e) return !1;
            this.missing_translation.push(e)
        }, this.printMissingTranslation = function() {
            var e;
            if (this.missing_translation.length > 0)
                for (e = 0; e <= this.missing_translation.length; e++) console.log('_Translate.set( "' + this.missing_translation[e] + '", "<?php echo I18n::__( "' + this.missing_translation[e] + '" ); ?>" );')
        }, this.set = function(e, t) {
            this.translations.push(new TranslateElement(e, t))
        }
    }, TranslateElement = function(e, t) {
        this.original = e, this.translated = t
    },
    function(e) {
        "function" == typeof define && define.amd ? window.ijQuery ? define(["ijQuery"], e) : define(["jquery"], e) : e(window.ijQuery || jQuery)
    }(function(e) {
        function t(e) {
            if (r.raw) return e;
            try {
                return decodeURIComponent(e.replace(i, " "))
            } catch (t) {}
        }

        function n(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = t(e);
            try {
                return r.json ? JSON.parse(e) : e
            } catch (n) {}
        }
        var i = /\+/g,
            r = e.cookie = function(i, o, a) {
                if (void 0 !== o) {
                    if (a = e.extend({}, r.defaults, a), "number" == typeof a.expires) {
                        var s = a.expires,
                            l = a.expires = new Date;
                        l.setDate(l.getDate() + s)
                    }
                    return o = r.json ? JSON.stringify(o) : String(o), document.cookie = [r.raw ? i : encodeURIComponent(i), "=", r.raw ? o : encodeURIComponent(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
                }
                for (var u = i ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], d = 0, f = c.length; f > d; d++) {
                    var h = c[d].split("="),
                        p = t(h.shift()),
                        m = h.join("=");
                    if (i && i === p) {
                        u = n(m);
                        break
                    }
                    i || void 0 === (m = n(m)) || (u[p] = m)
                }
                return u
            };
        r.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !0) : !1
        }
    }),
    function($) {
        "use strict";
        var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
            meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            hasOwn = Object.prototype.hasOwnProperty;
        $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(e) {
            if (null === e) return "null";
            var t, n, i, r, o = $.type(e);
            if ("undefined" !== o) {
                if ("number" === o || "boolean" === o) return String(e);
                if ("string" === o) return $.quoteString(e);
                if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
                if ("date" === o) {
                    var a = e.getUTCMonth() + 1,
                        s = e.getUTCDate(),
                        l = e.getUTCFullYear(),
                        u = e.getUTCHours(),
                        c = e.getUTCMinutes(),
                        d = e.getUTCSeconds(),
                        f = e.getUTCMilliseconds();
                    return 10 > a && (a = "0" + a), 10 > s && (s = "0" + s), 10 > u && (u = "0" + u), 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), 100 > f && (f = "0" + f), 10 > f && (f = "0" + f), '"' + l + "-" + a + "-" + s + "T" + u + ":" + c + ":" + d + "." + f + 'Z"'
                }
                if (t = [], $.isArray(e)) {
                    for (n = 0; n < e.length; n++) t.push($.toJSON(e[n]) || "null");
                    return "[" + t.join(",") + "]"
                }
                if ("object" == typeof e) {
                    for (n in e)
                        if (hasOwn.call(e, n)) {
                            if (o = typeof n, "number" === o) i = '"' + n + '"';
                            else {
                                if ("string" !== o) continue;
                                i = $.quoteString(n)
                            }
                            o = typeof e[n], "function" !== o && "undefined" !== o && (r = $.toJSON(e[n]), t.push(i + ":" + r))
                        }
                    return "{" + t.join(",") + "}"
                }
            }
        }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
            return eval("(" + str + ")")
        }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
            var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }, $.quoteString = function(e) {
            return e.match(escape) ? '"' + e.replace(escape, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
            }) + '"' : '"' + e + '"'
        }
    }(window.ijQuery || jQuery),
    function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function i() {
                        var i;
                        return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function() {
                    t = t && n.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var n = {},
                    i = this;
                return e.each(t.split(/\s/), function(e, t) {
                    n[t] = i.attr(t), i.removeAttr(t)
                }), n
            },
            rules: function(t, n) {
                var i = this[0];
                if (t) {
                    var r = e.data(i.form, "validator").settings,
                        o = r.rules,
                        a = e.validator.staticRules(i);
                    switch (t) {
                        case "add":
                            e.extend(a, e.validator.normalizeRule(n)), delete a.messages, o[i.name] = a, n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete o[i.name], a;
                            var s = {};
                            return e.each(n.split(/\s/), function(e, t) {
                                s[t] = a[t], delete a[t]
                            }), s
                    }
                }
                var l = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
                if (l.required) {
                    var u = l.required;
                    delete l.required, l = e.extend({
                        required: u
                    }, l)
                }
                return l
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val())
            },
            filled: function(t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function(t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function(t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function(t, n) {
            return 1 === arguments.length ? function() {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e, t) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function(e, t) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(e, t) {
                    (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
                },
                onclick: function(e, t) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var n = e.data(this[0].form, "validator"),
                            i = "on" + t.type.replace(/^validate/, "");
                        n.settings[i] && n.settings[i].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    e.each(this.settings.groups, function(t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
                            n[i] = t
                        })
                    });
                    var i = this.settings.rules;
                    e.each(i, function(t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = this.check(t) !== !1;
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var n = e(t).attr("type"),
                        i = e(t).val();
                    return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i = e(t).rules(),
                        r = !1,
                        o = this.elementValue(t);
                    for (var a in i) {
                        var s = {
                            method: a,
                            parameters: i[a]
                        };
                        try {
                            if (n = e.validator.methods[a].call(this, o, t, s.parameters), "dependency-mismatch" === n) {
                                r = !0;
                                continue
                            }
                            if (r = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!n) return this.formatAndAdd(t, s), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", l), l
                        }
                    }
                    return r ? void 0 : (this.objectLength(i) && this.successList.push(t), !0)
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function(t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, n) {
                    var i = this.defaultMessage(t, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: t
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, n) {
                    var i = this.errorsFor(t);
                    i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
                },
                errorsFor: function(t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function() {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function(e, t) {
                        return e
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var n = {},
                    i = e(t).attr("class");
                return i && e.each(i.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(t) {
                var n = {},
                    i = e(t),
                    r = i[0].getAttribute("type");
                for (var o in e.validator.methods) {
                    var a;
                    "required" === o ? (a = i.get(0).getAttribute(o), "" === a && (a = !0), a = !!a) : a = i.attr(o), /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? n[o] = a : r === o && "range" !== r && (n[o] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(t) {
                var n, i, r = {},
                    o = e(t);
                for (n in e.validator.methods) i = o.data("rule-" + n.toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function(t) {
                var n = {},
                    i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function(t, n) {
                return e.each(t, function(i, r) {
                    if (r === !1) return void delete t[i];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!e(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
                    }
                }), e.each(t, function(i, r) {
                    t[i] = e.isFunction(r) ? r(n) : r
                }), e.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function(t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = e(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                email: function(e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n = 0,
                        i = 0,
                        r = !1;
                    e = e.replace(/\D/g, "");
                    for (var o = e.length - 1; o >= 0; o--) {
                        var a = e.charAt(o);
                        i = parseInt(a, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
                    }
                    return n % 10 === 0
                },
                minlength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r
                },
                rangelength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function(e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                equalTo: function(t, n, i) {
                    var r = e(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        e(n).valid()
                    }), t === r.val()
                },
                remote: function(t, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                            url: i
                        } || i, r.old === t) return r.valid;
                    r.old = t;
                    var o = this;
                    this.startRequest(n);
                    var a = {};
                    return a[n.name] = t, e.ajax(e.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: a,
                        success: function(i) {
                            o.settings.messages[n.name].remote = r.originalMessage;
                            var a = i === !0 || "true" === i;
                            if (a) {
                                var s = o.formSubmitted;
                                o.prepareElement(n), o.formSubmitted = s, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
                            } else {
                                var l = {},
                                    u = i || o.defaultMessage(n, "remote");
                                l[n.name] = r.message = e.isFunction(u) ? u(t) : u, o.invalid[n.name] = !0, o.showErrors(l)
                            }
                            r.valid = a, o.stopRequest(n, a)
                        }
                    }, i)), "pending"
                }
            }
        }), e.format = e.validator.format
    }(jQuery),
    function(e) {
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, i) {
            var r = e.port;
            "abort" === e.mode && (t[r] && t[r].abort(), t[r] = i)
        });
        else {
            var n = e.ajax;
            e.ajax = function(i) {
                var r = ("mode" in i ? i : e.ajaxSettings).mode,
                    o = ("port" in i ? i : e.ajaxSettings).port;
                return "abort" === r ? (t[o] && t[o].abort(), t[o] = n.apply(this, arguments), t[o]) : n.apply(this, arguments)
            }
        }
    }(jQuery),
    function(e) {
        e.extend(e.fn, {
            validateDelegate: function(t, n, i) {
                return this.bind(n, function(n) {
                    var r = e(n.target);
                    return r.is(t) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }(jQuery);
var FormErrorPosition = function() {
    return this
};
FormErrorPosition.prototype.fixAllPositions = function(e) {
    var t, n = !1,
        i = this;
    e ? (t = e.find(".email-form"), n = !0) : (t = ijQuery.find(".block-inner > .page-element"), t = ijQuery(t).find(".email-form")), t.each(function() {
        var e = ijQuery(this);
        i.fixPosition(e, n)
    })
}, FormErrorPosition.prototype.fixPosition = function(e, t) {
    var n = e.find("button.submit-button");
    if (n.length)
        if (parseInt(n.css("left"), 10) >= e.width() / 2) e.addClass("error-on-left");
        else {
            var i, r = 0 - parseInt(e.find(".email-form-messagebox-wrapper").css("right"), 10),
                o = parseInt(e.parents(".page-element").css("left"), 10),
                a = e.width();
            i = t ? e.parents(".popup-inner").width() : e.parents(".block-inner").width(), a + o + r > i && e.addClass("error-on-left")
        }
}, Number.isFinite = Number.isFinite || function(e) {
    return "number" == typeof e && isFinite(e)
}, "undefined" == typeof ijQuery && (ijQuery = jQuery);
var InstapageFormController = function() {};
InstapageFormController.prototype.init = function() {
    var e = navigator.userAgent;
    this.is_mobile = !1, (e.match(/Iphone/i) || e.match(/Ipod/i) || e.match(/Android/i) || e.match(/J2ME/i) || e.match(/BlackBerry/i) || e.match(/iPhone|iPod/i) || e.match(/Opera Mini/i) || e.match(/IEMobile/i) || e.match(/Mobile/i) || e.match(/HTC/i)) && (this.is_mobile = !0);
    var t = this;
    ijQuery(document).ready(function() {
        t.initForm()
    })
}, InstapageFormController.prototype.initForm = function() {
    var e = this;
    ijQuery.validator.addMethod("checknumericvalue", function(e, t) {
        return e = e.replace(/\s/g, ""), "" !== e && /^[^a-zA-Z]+$/.test(e) || "" === e && t.required === !1
    }, _Translate.get("requires a valid number.")), ijQuery.validator.addMethod("lightlime-expirationDate", function(e, t) {
        return e = e.replace(/\s/g, ""), /^[0-9]{2}\/[0-9]{2}$/.test(e)
    }, _Translate.get("Please fill as mm/yy. ( 02/20 )")), ijQuery.extend(ijQuery.validator.messages, {
        required: function() {
            return _Translate.get("is required.")
        },
        remote: function() {
            return _Translate.get("Please fix this field.")
        },
        email: function() {
            return _Translate.get("is required.")
        },
        url: function() {
            return _Translate.get("Please enter a valid URL.")
        },
        date: function() {
            return _Translate.get("Please enter a valid date.")
        },
        dateISO: function() {
            return _Translate.get("Please enter a valid date (ISO).")
        },
        number: function() {
            return _Translate.get("requires a valid number.")
        },
        digits: function() {
            return _Translate.get("Please enter only digits.")
        },
        creditcard: function() {
            return _Translate.get("Please enter a valid credit card number.")
        },
        equalTo: function() {
            return _Translate.get("Please enter the same value again.")
        },
        accept: function() {
            return _Translate.get("Please enter a value with a valid extension.")
        },
        maxlength: ijQuery.validator.format(function() {
            return _Translate.get("Please enter no more than {0} characters.")
        }),
        minlength: ijQuery.validator.format(function() {
            return _Translate.get("Please enter at least {0} characters.")
        }),
        rangelength: ijQuery.validator.format(function() {
            return _Translate.get("Please enter a value between {0} and {1} characters long.")
        }),
        range: ijQuery.validator.format(function() {
            return _Translate.get("Please enter a value between {0} and {1}.")
        }),
        max: ijQuery.validator.format(function() {
            return _Translate.get("Please enter a value less than or equal to {0}.")
        }),
        min: ijQuery.validator.format(function() {
            return _Translate.get("Please enter a value greater than or equal to {0}.")
        })
    }), "undefined" != typeof __page_type && 3 === __page_type && ijQuery("form").addClass("email-form"), ijQuery(".email-form").each(function() {
        function t(e) {
            return parseInt(e.substr(0, e.length - 2))
        }
        var n, i, r, o, a, s, l = 250,
            u = ijQuery(this),
            c = null;
        if (("instapage-form" === u.attr("data") || 3 === __page_type) && (n = ijQuery(this).parents(".page-element-type-form"), n.length)) {
            a = n.width(), i = t(n.css("left")), r = t(n.css("top")), i + a + l >= 960 ? i -= l : i = i + a + 5, "modal-content" === n.parent().attr("class") && i + l > n.parent().width() && (i = i - a - l - 5), 0 === r && (r = parseInt(n.css("top").substr(0, n.css("top").length - 2))), s = ijQuery("#form-error-box").tmpl({
                id: this.getAttribute("data-wid"),
                left: i + "px",
                top: r + "px"
            }), o = document.createElement("div"), o.innerHTML = s[0].outerHTML, n.parent().append(o), s = "#email-form-messagebox-wrapper-" + this.getAttribute("data-wid"), c = u.validate({
                ignore: "",
                errorClass: "form-validation-error",
                validClass: "form-validation-valid",
                errorPlacement: function(e, t) {
                    e.appendTo(t.parent().parent()), e.appendTo(t.parent())
                },
                errorLabelContainer: s + " .email-form-messagebox",
                wrapper: "li",
                showErrors: function(t, n) {
                    var i, r, o, a, l, c, d = ijQuery(s);
                    ijQuery(s + " .email-form-messagebox-header").html(_Translate.get("Please Fix These Errors")), n.length > 0 ? ((new FormErrorPosition).fixAllPositions(), e.is_mobile || ijQuery(s).show(), this.defaultShowErrors(), i = 0, r = "", ijQuery.each(t, function(e, t) {
                        switch (n[i].element.type) {
                            case "checkbox":
                            case "radio":
                                r = s + ' label[for="' + e + '"]';
                                break;
                            default:
                                r = s + " label[for=" + n[i].element.id + "]"
                        }
                        try {
                            c = base64_decode(e) ? base64_decode(e) : n[i].element.type
                        } catch (u) {
                            c = n[i].element.type
                        }
                        c = c + " " + _Translate.get(n[i].message), ijQuery(r).html(c), ijQuery("#" + n[i].element.id).attr("placeholder", c), ijQuery("#placeholder-style") || (o = "e12627", a = "input:-moz-placeholder, textarea:-moz-placeholder {color: #" + o + ";} input::-webkit-input-placeholder,textarea::-webkit-input-placeholder  {color: #" + o + ";}", l = '<style id="placeholder-style">' + a + "</style>", ijQuery("head").append(l)), i++
                    }), u.parents(".page-element").addClass("error")) : e.is_mobile || (0 === this.numberOfInvalids() ? (d.hide(), u.parents(".page-element").removeClass("error"), u.find(".input-holder .form-validation-error").removeClass("form-validation-error"), ijQuery(s + " .email-form-messagebox").empty()) : this.defaultShowErrors())
                },
                highlight: function(e, t, n) {
                    ijQuery(e).addClass(t).removeClass(n), ijQuery(e.form).find("label[for=" + e.id + "]").addClass(t), 0 === this.numberOfInvalids() && ijQuery(s).hide()
                },
                unhighlight: function(e, t, n) {
                    ijQuery(e).removeClass(t).addClass(n), ijQuery(e.form).find("label[for=" + e.id + "]").removeClass(t), 0 === this.numberOfInvalids() && ijQuery(s).hide()
                },
                submitHandler: function() {
                    var t, n, i, r, o, a, s, l, u, d, f;
                    try {
                        for (f = !(!window.__conversions_settings || !window.__keen_io_called_parameters), t = ijQuery(".notification"), ijQuery(".popup.modal.fade.in").length > 0 && t.css("z-index", ijQuery(".popup.modal.fade.in").css("z-index") + 1), n = t.find(".notification-inner"), t.show(), n.css("left", (ijQuery(window).width() - ijQuery(".notification-inner").width()) / 2 + "px"), ijQuery(".notification .loading").show(), ijQuery(".notification .message").html(_Translate.get("Processing...")), a = this.currentForm, ijQuery(a).find("input").each(function() {
                                ijQuery(this).hasClass("required") || ijQuery(this).attr("default_value") !== ijQuery(this).val() || ijQuery(this).remove()
                            }), u = ["variant", "submission", "redirect", "mailchimp-integration", "madmimi-integration", "aweber-integration", "constantcontact-integration", "salesforce-integration", "getresponse-integration", "gotowebinar-integration", "webhook-integration", "egoi-integration", "infusionsoft-integration", "limelight-integration", "zoho-integration", "activecampaign-integration", "campaignmonitor-integration", "autopilot-integration", "thank-you-message", "validation", "download_file", "name", "custom"], o = {}, o.ajax = !0, o.fields = ijQuery(a).serializeArray(), r = 0; r < o.fields.length; r++)
                            if (s = ijQuery('input[name="' + o.fields[r].name + '"], select[name="' + o.fields[r].name + '"]').first(), o.fields[r].type = s.hasClass("hidden-checkbox") ? "checkbox" : s.attr("type"), o.fields[r].type = o.fields[r].type || (s.is("select") ? "select" : null), -1 === ijQuery.inArray(o.fields[r].name, u) && !/-integration/.test(o.fields[r].name)) {
                                window.InstapageLocalStorage && "password" !== o.fields[r].type && InstapageLocalStorage.set(o.fields[r].name, o.fields[r].value);
                                try {
                                    o.fields[r].name = base64_decode(o.fields[r].name)
                                } catch (h) {}
                            }
                        return l = ijQuery(a).height(), ijQuery(a).css("height", l + "px"), ijQuery(a).fadeTo("slow", 1), page_version || (page_version = 1), o.version = window.__version, o.variant = 2 === window.__mobile_version && is_new_mobile_visible() && window.__variant.indexOf("-mobile") < 0 ? window.__variant + "-mobile" : window.__variant, o.preview = window.__preview, o.disable_conversion = f, "PROXY_SERVICES" !== __instapage_proxy_services && (__instapage_services = __instapage_proxy_services), d = ijQuery(a).find("input[name=redirect]"), window.__facebook && d.length > 0 && (i = window.open(), i.location = d.val()), -1 !== navigator.appName.indexOf("Internet Explorer") && -1 === navigator.appVersion.indexOf("MSIE 1") ? void ijQuery(a)[0].submit() : (ijQuery.ajax({
                            url: __instapage_services + "/ajax/pageserver/email/" + window.__page_id,
                            data: o,
                            type: "post",
                            dataType: "json",
                            async: !0,
                            success: function(i) {
                                i.response.error ? e.formSubmitError(i.response, a, t, n, c) : (ijQuery(".widget-form").find(".input-holder .form-validation-error").removeClass("form-validation-error").end().find("input").each(function() {
                                    this.getAttribute("id") && this.setAttribute("placeholder", this.getAttribute("data-label-inside") || "")
                                }), ijQuery(".widget-form").find(".input-holder .form-validation-error").removeClass("form-validation-error").end().find("textarea").each(function() {
                                    this.getAttribute("id") && (this.value = "")
                                }), e.formSubmitSuccess(i, a, t, n))
                            },
                            error: function(i, r, o) {
                                if (i.responseText) try {
                                    var s = i.responseText,
                                        l = s.indexOf("{"),
                                        u = s.lastIndexOf("}"),
                                        d = s.substring(l, u + 1),
                                        f = null;
                                    try {
                                        f = ijQuery.parseJSON(d)
                                    } catch (h) {}
                                    if (null === f) {
                                        var p = {
                                            error_message: atob("Error parsing the response")
                                        };
                                        e.formSubmitError(p, a, t, n, c)
                                    } else e.formSubmitSuccess(f, a, t, n)
                                } catch (h) {
                                    e.closeDim()
                                } else e.closeDim()
                            }
                        }), !1)
                    } catch (p) {
                        window.console && console.log(p)
                    }
                }
            }), u.find('input[type="text"]').on({
                click: function() {
                    ijQuery(this).val() === ijQuery(this).attr("default_value") && ijQuery(this).val("")
                },
                focusout: function() {
                    "" === ijQuery(this).val() && ijQuery(this).val(ijQuery(this).attr("default_value"))
                }
            }), u.find('input[type="email"]').keyup(function() {
                var e = this.value,
                    t = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                e && "" !== e && t.test(e) && ijQuery(this).removeClass("form-validation-error")
            }), u.find('input[type="checkbox"]').change(function() {
                ijQuery("#hidden-" + ijQuery(this).attr("id")).val(ijQuery(this).is(":checked") ? "yes" : "no")
            }), u.find('input[type="radio"]').click(function() {
                this.previous && (this.checked = !1), this.previous = this.checked
            });
            var d = Math.random().toString(36).slice(2);
            u.find('input[type="radio"][name=""]').each(function() {
                this.name = d
            }), u.find('input[type="radio"]').change(function() {
                if (this.checked) {
                    var e = this;
                    ijQuery(".email-form").find('input[type="radio"][name="' + this.name + '"]').each(function() {
                        this !== e && (this.previous = !1)
                    })
                }
            })
        }
    }), ijQuery(".widget-image a").off("click"), ijQuery(".IN-widget a").off("click"), ijQuery("a.on-page-scroll, a.onpage-link").on("click", function(e) {
        e.preventDefault();
        var t, n = ijQuery(this),
            i = n.attr("href");
        return t = parseInt(n.closest(".page-block").offset().top - ijQuery(i).offset().top, 10), t = t > 0 ? t : -1 * t, t /= 2, window.InstapagejScrollPaneApi ? window.InstapagejScrollPaneApi.scrollToY(ijQuery(i).offset().top, {
            animateDuration: t
        }) : ijQuery("body").animate({
            scrollTop: ijQuery(i).offset().top
        }, t), !1
    })
}, InstapageFormController.prototype.downloadFile = function(e) {
    var t, n, i, r = window.__instapage_services ? window.__instapage_services : "//app.instapage.com",
        o = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
    e && "object" == typeof e && (n = e.direct_download, e = e.url), /ip(ad|hone|od)/.test(o) ? (document.activeElement.blur(), setTimeout(function() {
        window.location = e
    }, 1e3)) : /Edge\/12./i.test(o) ? document.execCommand && window.open(e, "_blank") : n ? window.location = e : ("//" === e.substring(0, 1) && (e = "http:" + e), t = document.title.replace(/[^\da-z ]/i, ""), i = r + "/ajax/pageserver/files/serve-file?filename=" + t + "&path=http:" + e + "&page_id=" + window.__page_id + "&variant=" + window.__variant, ijQuery.ajax({
        url: i,
        type: "POST",
        success: function() {
            window.location = i
        }
    }))
}, InstapageFormController.prototype.formSubmitError = function(e, t, n, r, o) {
    var a = this,
        s = {};
    if (ijQuery(".notification .loading").hide(), e.error_message ? (ijQuery(".notification .message").html(base64_decode(e.error_message)), setTimeout(function() {
            a.closeDim()
        }, e.error_message_timeout ? e.error_message_timeout : 5e3)) : a.closeDim(), e.error_fields) {
        for (i = 0; i < e.error_fields.length; i++) s[e.error_fields[i].name] = base64_decode(e.error_fields[i].error);
        o.showErrors(s), ijQuery(t).find(".email-form-messagebox-wrapper").show()
    }
}, InstapageFormController.prototype.formSubmitSuccess = function(e, t, n, i) {
    function r() {
        if (-1 !== p) {
            if (Number.isFinite(p) && p > 0 && clearTimeout(p), p = -1, "function" == typeof window.instapageFormSubmitSuccess) try {
                window.instapageFormSubmitSuccess(t, f ? parseInt(f, 10) : null)
            } catch (n) {
                window.console && console.log(n)
            }
            if (ijQuery(t).find("input").each(function() {
                    if (!ijQuery(this).hasClass("submit-button") && !ijQuery(this).hasClass("configuration")) {
                        if ("hidden" === ijQuery(this).attr("type") || "radio" === ijQuery(this).attr("type")) return;
                        ijQuery(this).val("")
                    }
                }), e.thank_you_message && (d = e.thank_you_message), s = d ? base64_decode(d) : !1, o = s ? s : _Translate.get("Thank You!<br />Your Message Has been Sent."), o && d && !/^\s*$/.test(d) && (ijQuery(".notification .loading").hide(), ijQuery(".notification .message").html(o)), c) {
                try {
                    c = ijQuery.parseJSON(base64_decode(c))
                } catch (n) {
                    c = a
                }
                u.downloadFile(c), setTimeout(function() {
                    u.processRedirect(t, e, s, d)
                }, 100)
            } else u.processRedirect(t, e, s, d)
        }
    }
    var o, a, s, l, u = this,
        c = e.response.download_file ? e.response.download_file : ijQuery(t).find("input[name=download_file]").val(),
        d = ijQuery(t).find('input[name="thank-you-message"]') ? ijQuery(t).find('input[name="thank-you-message"]').val() : !1,
        f = t.getAttribute("data-wid"),
        h = !(!window.__conversions_settings || !window.__keen_io_called_parameters),
        p = !1;
    return a = c, e.response.thank_you_message && (d = e.response.thank_you_message), !e || e.error ? (ijQuery(".notification .loading").hide(), ijQuery(".notification .close-button").show().on("click", function() {
        closeDim()
    }), ijQuery(".notification .message").html(e && e.error_message ? _Translate.get(e.error_message) : _Translate.get("Something went wrong, message not sent.")), !1) : (h && window.__conversions_settings.forms ? (l = iCopyKeenEvent("conversion", {
        conversion_type: "form"
    }), p = setTimeout(r, 4500), iCreateTrackingPixel(iEncodePixelUrl.apply(iEncodePixelUrl, l)).load(function() {
        r()
    }).error(function() {
        r()
    }).appendTo(ijQuery("body"))) : r(), void(window.popup_controller && window.popup_controller.destroyParentPopupAfterFormSubmit(t)))
}, InstapageFormController.prototype.processRedirect = function(e, t, n, i) {
    var r = t.response.redirect ? t.response.redirect : ijQuery(e).find("input[name=redirect]").val(),
        o = function(e) {
            window.location !== window.parent.location ? window.parent.location = e : window.location = e
        };
    r && r.length > 0 && !window.__facebook ? (t.response.submission && -1 === r.indexOf("#!") && (r += -1 === r.indexOf("?") ? "?" : "&", r += "submission=" + t.response.submission), n && i && !/^\s*$/.test(i) ? setTimeout(function() {
        o(r), setTimeout(function() {
            ijQuery(".notification").hide()
        }, 1e4)
    }, window.custom_time_for_thank_you_message || 3e3) : o(r)) : setTimeout(function() {
        ijQuery(".notification").hide()
    }, window.custom_time_for_thank_you_message || 3e3)
}, InstapageFormController.prototype.closeDim = function() {
    ijQuery(".notification").hide()
};
var _form_controller = new InstapageFormController;
_form_controller.init(), ijQuery(document).ready(function() {
        setTimeout(function() {
            ijQuery(".social.tiles [id^=___plus]").width("58px"), ijQuery(".social.tiles [id^=___plus]").each(function(e, t) {
                ijQuery(t).children().first().width("58px")
            }), ijQuery(".social.lines [id^=___plus]").width("84px"), ijQuery(".social.lines [id^=___plus]").each(function(e, t) {
                ijQuery(t).children().first().width("84px")
            }), ijQuery(".social.buttons [id^=___plus]").width("58px"), ijQuery(".social.buttons [id^=___plus]").each(function(e, t) {
                ijQuery(t).children().first().width("58px")
            }), /^((?!chrome).)*safari/i.test(navigator.userAgent) && (ijQuery(".horizontal .IN-widget, .horizontal [id^=twitter-widget-]").css({
                display: "inline",
                "line-height": "",
                width: "auto"
            }), setTimeout(function() {
                ijQuery(".horizontal [id^=twitter-widget-]").css({
                    width: "auto",
                    display: "inline",
                    "line-height": "",
                    "float": "none"
                }), setTimeout(function() {
                    ijQuery(".horizontal [id^=twitter-widget-]").css({
                        width: "58px",
                        "float": "left"
                    }), ijQuery(".horizontal [id^=___plus]").parent().css({
                        "padding-top": "0px"
                    })
                }, 100), ijQuery(".horizontal .IN-widget").css("width", "61px")
            }, 100))
        }, 1500), ijQuery("a").on("click", function(e) {
            function t() {
                if ("function" == typeof window.instapageAnchorClick) try {
                    window.instapageAnchorClick(r, a ? parseInt(a, 10) : null)
                } catch (e) {
                    window.console && console.log(e)
                }
            }

            function n(e) {
                function t() {
                    "function" == typeof e && e()
                }
                var n, i = window.__conversions_settings || {},
                    r = s.attr("href");
                return i.links === !1 || Array.isArray(i.links) && i.links.indexOf(r) < 0 ? void t() : (n = iCopyKeenEvent("conversion", {
                    conversion_type: "link",
                    href: r
                }), iCreateTrackingPixel(iEncodePixelUrl.apply(iEncodePixelUrl, n)).load(t).error(t).appendTo(ijQuery("body")), !1)
            }

            function i(e) {
                var t = window.__variant;
                try {
                    if (window.__conversions_settings && window.__keen_io_called_parameters) return n(e);
                    "PROXY_SERVICES" !== __instapage_proxy_services && (__instapage_services = __instapage_proxy_services), 2 === window.__mobile_version && is_new_mobile_visible() && t.indexOf("-mobile") < 0 && (t += "-mobile"), ijQuery.ajax({
                        url: __instapage_services + "/ajax/pageserver/stats/conversion/" + window.__page_id + "/" + window.__version + "/" + t + "/",
                        data: {
                            type: "link",
                            link: s.attr("href")
                        },
                        type: "post",
                        dataType: "json",
                        success: function() {
                            "function" == typeof e && e()
                        },
                        error: function(t, n, i) {
                            "function" == typeof e && e()
                        }
                    })
                } catch (i) {
                    "function" == typeof e && e()
                }
            }
            if (window.__preview) return !0;
            var r = this,
                o = ijQuery(this),
                a = r.getAttribute("data-wid"),
                s = "IMG" === o[0].nodeName ? o.parentsUntil(".page-element", "a") : o;
            return s.attr("href") && "#" === s.attr("href").substr(0, 1) ? !0 : ijQuery(s).hasClass("custom-twitter-widget") ? !0 : "_blank" === ijQuery(s).attr("target") || /mailto:/i.test(s.attr("href")) ? (i(), t(), s.hasClass("ip-stay-on-page") ? !1 : !0) : (i(function() {
                t(), s.hasClass("ip-stay-on-page") || setTimeout(function() {
                    window.location.href = s.attr("href")
                }, 250)
            }), !1)
        })
    }),
    function(e, t) {
        "use strict";
        var n = function(t) {
            function n(t) {
                i.events.push(t), i.event = t, i.message = t.data;
                try {
                    i.data = JSON.parse(t.data), "get" === i.data.message && "instapage-local-storage-iframe" === i.data.key ? (i.iframe_name_test = i.data.response, i.iframes.push(e.frames[i.data.response]), i.iframe = !0, "function" == typeof i.connectTestCallback && i.connectTestCallback()) : "get" === i.data.message && (i.local_data[i.data.key] = i.data.response)
                } catch (n) {}
            }
            var i = this;
            this.message = !1, this.data = !1, this.event = !1, this.events = [], this.iframes = [], this.options = t, this.local_data = {}, e.addEventListener("message", n, !1)
        };
        n.prototype.connect = function(n) {
            var i, r;
            if (n)
                for (i = 0; i < this.iframes.length; i++)
                    if (r = this.iframes[i], r === e) {
                        if ("get" === n.request) return t.jStorage.get(n.key);
                        if ("set" === n.request) return t.jStorage.set(n.key, n.val);
                        "setWithTime" === n.request && (t.jStorage.set(n.key, n.val), t.jStorage.setTTL(n.key, n.time ? n.time : 0))
                    } else n.good = !0, r.postMessage(n, "*")
        }, n.prototype.get = function(e, t) {
            return "undefined" == typeof __page_type || 2 !== __page_type || t || (e = base64_decode(e)), !this.iframes && this.iframes.length > 0 || !e ? !1 : this.local_data[e] ? this.local_data[e] : (this.local_data[e] = this.connect({
                request: "get",
                key: e
            }), this.local_data[e] = this.local_data[e] ? this.local_data[e] : this.getData(e), this.local_data[e])
        }, n.prototype.getData = function(e) {
            return this.data && this.data[e] ? this.data[e] : ""
        }, n.prototype.getMessage = function() {
            return this.message
        }, n.prototype.set = function(e, t, n) {
            return !this.iframes && this.iframes.length > 0 ? !1 : ("undefined" == typeof __page_type || 2 !== __page_type || n || (e = base64_decode(e)), void this.connect({
                request: "set",
                key: e,
                val: t
            }))
        }, n.prototype.setWithTime = function(e, t, n, i) {
            return !this.iframes && this.iframes.length > 0 ? !1 : ("undefined" == typeof __page_type || 2 !== __page_type || n || (e = base64_decode(e)), void this.connect({
                request: "setWithTime",
                key: e,
                val: t,
                time: i
            }))
        }, n.prototype.connectTest = function(n) {
            var i, r;
            r = this.iframes, i = t(n).attr("name"), this.iframes = [e.frames[i]], this.set("instapage-local-storage-iframe", i, !0), this.get("instapage-local-storage-iframe", !0), this.iframes = r
        }, n.prototype.test = function() {
            return !this.iframes && this.iframes.length > 0 ? !1 : void this.connect({
                request: "test"
            })
        }, n.prototype.fillForm = function() {
            var e = this;
            this.iframes && this.iframes.length > 0 && (t(".field-text input, .field-textarea textarea").each(function() {
                var n = t(this),
                    i = n.attr("name"),
                    r = e.get(i);
                r ? n.val(r) : setTimeout(function() {
                    r = e.get(i), n.val(r ? r : "")
                }, 100)
            }), t(".field-select select").each(function() {
                var n = t(this),
                    i = n.attr("name"),
                    r = e.get(i);
                r ? n.find('[value="' + r + '"]').attr("selected", !0) : setTimeout(function() {
                    r = e.get(i), r && n.find('[value="' + r + '"]').attr("selected", !0)
                }, 100)
            }), t(".field-radio input").each(function() {
                var n = t(this),
                    i = n.attr("name"),
                    r = e.get(i);
                r ? r === n.attr("value") && n.attr("name") === i && n.selected(!0) : setTimeout(function() {
                    r = e.get(i), r === n.attr("value") && n.attr("name") === i && n.prop("checked", !0)
                }, 100)
            }), t('.field-checkbox input[type="checkbox"]').each(function() {
                var n = t(this),
                    i = n.attr("name"),
                    r = e.get(i);
                r ? r === n.attr("value") && n.attr("name") === i && n.selected(!0) : setTimeout(function() {
                    r = e.get(i), r === n.attr("value") && n.attr("name") === i && (n.prop("checked", !0), n.parent().children(".hidden-checkbox").length && n.parent().children(".hidden-checkbox").val("yes"))
                }, 100)
            }))
        }, n.prototype.saveConversionData = function(t, n) {
            var i = {
                page_id: t,
                variation: n,
                timestamp_created: Date.now(),
                timestamp_sent: null
            };
            (!e.__conversions_settings || e.__conversions_settings.external) && (e.__keen_io_called_parameters && (i.external_image = iEncodePixelUrl.apply(iEncodePixelUrl, iCopyKeenEvent("conversion", {
                type: "external"
            }))), this.iframes && this.iframes.length > 0 && this.setWithTime("instapage_conversion_" + t, i, !0, 26784e5))
        }, n.prototype.conversionDataSent = function(e, t, n) {
            this.iframes && this.iframes.length > 0 && (t ? t.timestamp_sent = Date.now() : t = {
                page_id: e,
                variation: n,
                timestamp_created: Date.now(),
                timestamp_sent: null
            }, this.setWithTime("instapage_conversion_" + e, t, !0, 26784e5))
        }, n.prototype.getConversionData = function(e, t) {
            var n, i = this;
            this.iframes && this.iframes.length > 0 && (n = this.get("instapage_conversion_" + e, !0), n ? t(n) : setTimeout(function() {
                n = i.get("instapage_conversion_" + e, !0), t(n)
            }, 100))
        }, e.ServerStorageLocal = n, t(document).ready(function() {
            function i() {
                e.InstapageLocalStorage || (e.InstapageLocalStorage = new n, e.InstapageLocalStorage.connectTestCallback = function() {
                    this.saveConversionData(e.__page_id, e.__variant), "undefined" != typeof e.form_prepopulate_disable && e.form_prepopulate_disable || this.fillForm()
                }), e.InstapageLocalStorage.connectTest(this)
            }
            t("iframe.instapage-noscrap").on("load", i)
        })
    }(window, ijQuery || $),
    function(e, t, n) {
        function i(e) {
            var t = {},
                i = /^jQuery\d+$/;
            return n.each(e.attributes, function(e, n) {
                n.specified && !i.test(n.name) && (t[n.name] = n.value)
            }), t
        }

        function r(e, t) {
            var i = this,
                r = n(i);
            if (i.value == r.attr("placeholder") && r.hasClass("placeholder"))
                if (r.data("placeholder-password")) {
                    if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), e === !0) return r[0].value = t;
                    r.focus()
                } else i.value = "", r.removeClass("placeholder"), i == a() && i.select()
        }

        function o() {
            var e, t = this,
                o = n(t),
                a = this.id;
            if ("" == t.value) {
                if ("password" == t.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            e = o.clone().attr({
                                type: "text"
                            })
                        } catch (s) {
                            e = n("<input>").attr(n.extend(i(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": o,
                            "placeholder-id": a
                        }).bind("focus.placeholder", r), o.data({
                            "placeholder-textinput": e,
                            "placeholder-id": a
                        }).before(e)
                    }
                    o = o.removeAttr("id").hide().prev().attr("id", a).show()
                }
                o.addClass("placeholder"), o[0].value = o.attr("placeholder")
            } else o.removeClass("placeholder")
        }

        function a() {
            try {
                return t.activeElement
            } catch (e) {}
        }
        var s, l, u = "placeholder" in t.createElement("input"),
            c = "placeholder" in t.createElement("textarea"),
            d = n.fn,
            f = n.valHooks,
            h = n.propHooks;
        u && c ? (l = d.placeholder = function() {
            return this
        }, l.input = l.textarea = !0) : (l = d.placeholder = function() {
            var e = this;
            return e.filter((u ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": r,
                "blur.placeholder": o
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, l.input = u, l.textarea = c, s = {
            get: function(e) {
                var t = n(e),
                    i = t.data("placeholder-password");
                return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, t) {
                var i = n(e),
                    s = i.data("placeholder-password");
                return s ? s[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != a() && o.call(e)) : i.hasClass("placeholder") ? r.call(e, !0, t) || (e.value = t) : e.value = t, i) : e.value = t
            }
        }, u || (f.input = s, h.value = s), c || (f.textarea = s, h.value = s), n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(r);
                setTimeout(function() {
                    e.each(o)
                }, 10)
            })
        }), n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery);
var MobileHelper = function() {};
MobileHelper.prototype.initViewport = function(e, t) {
        function n() {
            s && (s = !1, o = setTimeout(i, 250))
        }

        function i() {
            var e, t, n, i, r;
            r = window.innerHeight > window.innerWidth ? 0 : 1, 0 === r ? (t = screen.width < screen.height ? screen.width : screen.height, n = screen.width > screen.height ? screen.width : screen.height) : (t = screen.width > screen.height ? screen.width : screen.height, n = screen.width < screen.height ? screen.width : screen.height), t && t > 0 && (i = t / u, e = document.getElementById("mobile-viewport"), e && (t > u ? e.setAttribute("content", "minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,width=" + t / i + ",height=" + n / i) : e.setAttribute("content", "minimum-scale=" + i + ",maximum-scale=" + i + ",initial-scale=" + i + ",width=" + t + ",height=" + n))), s = !0
        }

        function r() {
            var e, t = screen.width;
            t && t > 0 && u > t && (e = document.getElementById("mobile-viewport"), e && e.setAttribute("content", "initial-scale=" + t / u))
        }
        var o, a, s = !0,
            l = navigator.userAgent,
            u = e;
        t ? (screen.width < 400 || screen.height < 400) && (u = 400, i(), ijQuery(window).bind("orientationchange", n)) : (l.indexOf("Android") >= 0 && (a = parseFloat(l.slice(l.indexOf("Android") + 8))), !a || a > 4.3 ? (i(), ijQuery(window).bind("orientationchange", n)) : r())
    },
    function() {
        "use strict";

        function e() {
            var e = !1;
            if ("localStorage" in window) try {
                window.localStorage.setItem("_tmptest", "tmpval"), e = !0, window.localStorage.removeItem("_tmptest")
            } catch (t) {}
            if (e) try {
                    window.localStorage && (_ = window.localStorage, C = "localStorage", D = _.jStorage_update)
                } catch (r) {} else if ("globalStorage" in window) try {
                    window.globalStorage && (_ = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], C = "globalStorage", D = _.jStorage_update)
                } catch (o) {} else {
                    if (x = document.createElement("link"), !x.addBehavior) return void(x = null);
                    x.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(x);
                    try {
                        x.load("jStorage")
                    } catch (a) {
                        x.setAttribute("jStorage", "{}"), x.save("jStorage"), x.load("jStorage")
                    }
                    var l = "{}";
                    try {
                        l = x.getAttribute("jStorage")
                    } catch (u) {}
                    try {
                        D = x.getAttribute("jStorage_update")
                    } catch (f) {}
                    _.jStorage = l, C = "userDataBehavior"
                }
                s(), c(), n(), d(), "addEventListener" in window && window.addEventListener("pageshow", function(e) {
                e.persisted && i()
            }, !1)
        }

        function t() {
            var e = "{}";
            if ("userDataBehavior" == C) {
                x.load("jStorage");
                try {
                    e = x.getAttribute("jStorage")
                } catch (t) {}
                try {
                    D = x.getAttribute("jStorage_update")
                } catch (n) {}
                _.jStorage = e
            }
            s(), c(), d()
        }

        function n() {
            "localStorage" == C || "globalStorage" == C ? "addEventListener" in window ? window.addEventListener("storage", i, !1) : document.attachEvent("onstorage", i) : "userDataBehavior" == C && setInterval(i, 1e3)
        }

        function i() {
            var e;
            clearTimeout(k), k = setTimeout(function() {
                if ("localStorage" == C || "globalStorage" == C) e = _.jStorage_update;
                else if ("userDataBehavior" == C) {
                    x.load("jStorage");
                    try {
                        e = x.getAttribute("jStorage_update")
                    } catch (t) {}
                }
                e && e != D && (D = e, r())
            }, 25)
        }

        function r() {
            var e, n = y.parse(y.stringify(w.__jstorage_meta.CRC32));
            t(), e = y.parse(y.stringify(w.__jstorage_meta.CRC32));
            var i, r = [],
                a = [];
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    if (!e[i]) {
                        a.push(i);
                        continue
                    }
                    n[i] != e[i] && "2." == String(n[i]).substr(0, 2) && r.push(i)
                }
            for (i in e) e.hasOwnProperty(i) && (n[i] || r.push(i));
            o(r, "updated"), o(a, "deleted")
        }

        function o(e, t) {
            e = [].concat(e || []);
            var n, i, r, o;
            if ("flushed" == t) {
                e = [];
                for (var a in S) S.hasOwnProperty(a) && e.push(a);
                t = "deleted"
            }
            for (n = 0, r = e.length; r > n; n++) {
                if (S[e[n]])
                    for (i = 0, o = S[e[n]].length; o > i; i++) S[e[n]][i](e[n], t);
                if (S["*"])
                    for (i = 0, o = S["*"].length; o > i; i++) S["*"][i](e[n], t)
            }
        }

        function a() {
            var e = (+new Date).toString();
            if ("localStorage" == C || "globalStorage" == C) try {
                _.jStorage_update = e
            } catch (t) {
                C = !1
            } else "userDataBehavior" == C && (x.setAttribute("jStorage_update", e), x.save("jStorage"));
            i()
        }

        function s() {
            if (_.jStorage) try {
                w = y.parse(String(_.jStorage))
            } catch (e) {
                _.jStorage = "{}"
            } else _.jStorage = "{}";
            T = _.jStorage ? String(_.jStorage).length : 0, w.__jstorage_meta || (w.__jstorage_meta = {}), w.__jstorage_meta.CRC32 || (w.__jstorage_meta.CRC32 = {})
        }

        function l() {
            h();
            try {
                _.jStorage = y.stringify(w), x && (x.setAttribute("jStorage", _.jStorage), x.save("jStorage")), T = _.jStorage ? String(_.jStorage).length : 0
            } catch (e) {}
        }

        function u(e) {
            if ("string" != typeof e && "number" != typeof e) throw new TypeError("Key name must be string or numeric");
            if ("__jstorage_meta" == e) throw new TypeError("Reserved key name");
            return !0
        }

        function c() {
            var e, t, n, i, r = 1 / 0,
                s = !1,
                u = [];
            if (clearTimeout(b), w.__jstorage_meta && "object" == typeof w.__jstorage_meta.TTL) {
                e = +new Date, n = w.__jstorage_meta.TTL, i = w.__jstorage_meta.CRC32;
                for (t in n) n.hasOwnProperty(t) && (n[t] <= e ? (delete n[t], delete i[t], delete w[t], s = !0, u.push(t)) : n[t] < r && (r = n[t]));
                r != 1 / 0 && (b = setTimeout(c, Math.min(r - e, 2147483647))), s && (l(), a(), o(u, "deleted"))
            }
        }

        function d() {
            var e, t;
            if (w.__jstorage_meta.PubSub) {
                var n, i = F,
                    r = [];
                for (e = t = w.__jstorage_meta.PubSub.length - 1; e >= 0; e--) n = w.__jstorage_meta.PubSub[e], n[0] > F && (i = n[0], r.unshift(n));
                for (e = r.length - 1; e >= 0; e--) f(r[e][1], r[e][2]);
                F = i
            }
        }

        function f(e, t) {
            if (j[e])
                for (var n = 0, i = j[e].length; i > n; n++) try {
                    j[e][n](e, y.parse(y.stringify(t)))
                } catch (r) {}
        }

        function h() {
            if (w.__jstorage_meta.PubSub) {
                for (var e = +new Date - 2e3, t = 0, n = w.__jstorage_meta.PubSub.length; n > t; t++)
                    if (w.__jstorage_meta.PubSub[t][0] <= e) {
                        w.__jstorage_meta.PubSub.splice(t, w.__jstorage_meta.PubSub.length - t);
                        break
                    }
                w.__jstorage_meta.PubSub.length || delete w.__jstorage_meta.PubSub
            }
        }

        function p(e, t) {
            w.__jstorage_meta || (w.__jstorage_meta = {}), w.__jstorage_meta.PubSub || (w.__jstorage_meta.PubSub = []), w.__jstorage_meta.PubSub.unshift([+new Date, e, t]), l(), a()
        }

        function m(e, t) {
            for (var n, i = e.length, r = t ^ i, o = 0; i >= 4;) n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ n, i -= 4, ++o;
            switch (i) {
                case 3:
                    r ^= (255 & e.charCodeAt(o + 2)) << 16;
                case 2:
                    r ^= (255 & e.charCodeAt(o + 1)) << 8;
                case 1:
                    r ^= 255 & e.charCodeAt(o), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
            }
            return r ^= r >>> 13, r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16), r ^= r >>> 15, r >>> 0
        }
        var g = "0.4.12",
            v = window.jQuery || window.$ || (window.$ = {}),
            y = {
                parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(e) {
                    return String(e).evalJSON()
                } || v.parseJSON || v.evalJSON,
                stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON
            };
        if ("function" != typeof y.parse || "function" != typeof y.stringify) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
        var b, w = {
                __jstorage_meta: {
                    CRC32: {}
                }
            },
            _ = {
                jStorage: "{}"
            },
            x = null,
            T = 0,
            C = !1,
            S = {},
            k = !1,
            D = 0,
            j = {},
            F = +new Date,
            E = {
                isXML: function(e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                },
                encode: function(e) {
                    if (!this.isXML(e)) return !1;
                    try {
                        return (new XMLSerializer).serializeToString(e)
                    } catch (t) {
                        try {
                            return e.xml
                        } catch (n) {}
                    }
                    return !1
                },
                decode: function(e) {
                    var t, n = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(e) {
                        var t = new ActiveXObject("Microsoft.XMLDOM");
                        return t.async = "false", t.loadXML(e), t
                    };
                    return n ? (t = n.call("DOMParser" in window && new DOMParser || window, e, "text/xml"), this.isXML(t) ? t : !1) : !1
                }
            };
        v.jStorage = {
            version: g,
            set: function(e, t, n) {
                if (u(e), n = n || {}, "undefined" == typeof t) return this.deleteKey(e), t;
                if (E.isXML(t)) t = {
                    _is_xml: !0,
                    xml: E.encode(t)
                };
                else {
                    if ("function" == typeof t) return;
                    t && "object" == typeof t && (t = y.parse(y.stringify(t)))
                }
                return w[e] = t, w.__jstorage_meta.CRC32[e] = "2." + m(y.stringify(t), 2538058380), this.setTTL(e, n.TTL || 0), o(e, "updated"), t
            },
            get: function(e, t) {
                return u(e), e in w ? w[e] && "object" == typeof w[e] && w[e]._is_xml ? E.decode(w[e].xml) : w[e] : "undefined" == typeof t ? null : t
            },
            deleteKey: function(e) {
                return u(e), e in w ? (delete w[e], "object" == typeof w.__jstorage_meta.TTL && e in w.__jstorage_meta.TTL && delete w.__jstorage_meta.TTL[e], delete w.__jstorage_meta.CRC32[e], l(), a(), o(e, "deleted"), !0) : !1
            },
            setTTL: function(e, t) {
                var n = +new Date;
                return u(e), t = Number(t) || 0, e in w ? (w.__jstorage_meta.TTL || (w.__jstorage_meta.TTL = {}), t > 0 ? w.__jstorage_meta.TTL[e] = n + t : delete w.__jstorage_meta.TTL[e], l(), c(), a(), !0) : !1
            },
            getTTL: function(e) {
                var t, n = +new Date;
                return u(e), e in w && w.__jstorage_meta.TTL && w.__jstorage_meta.TTL[e] ? (t = w.__jstorage_meta.TTL[e] - n, t || 0) : 0
            },
            flush: function() {
                return w = {
                    __jstorage_meta: {
                        CRC32: {}
                    }
                }, l(), a(), o(null, "flushed"), !0
            },
            storageObj: function() {
                function e() {}
                return e.prototype = w, new e
            },
            index: function() {
                var e, t = [];
                for (e in w) w.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
                return t
            },
            storageSize: function() {
                return T
            },
            currentBackend: function() {
                return C
            },
            storageAvailable: function() {
                return !!C
            },
            listenKeyChange: function(e, t) {
                u(e), S[e] || (S[e] = []), S[e].push(t)
            },
            stopListening: function(e, t) {
                if (u(e), S[e]) {
                    if (!t) return void delete S[e];
                    for (var n = S[e].length - 1; n >= 0; n--) S[e][n] == t && S[e].splice(n, 1)
                }
            },
            subscribe: function(e, t) {
                if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
                j[e] || (j[e] = []), j[e].push(t)
            },
            unsubscribe: function(e, t) {
                var n, i = [];
                if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
                if (j[e]) {
                    for (var r = 0, n = j[e].length; n > r; r++) try {
                        j[e][r].toString() !== t.toString() && i.push(j[e][r])
                    } catch (o) {}
                    return j[e] = i, !0
                }
                return !0
            },
            unsubscribeChannel: function(e) {
                if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
                return j[e] ? (j[e] = !1, !0) : !1
            },
            publish: function(e, t) {
                if (e = (e || "").toString(), !e) throw new TypeError("Channel not defined");
                p(e, t)
            },
            reInit: function() {
                t()
            },
            noConflict: function(e) {
                return delete window.$.jStorage, e && (window.jStorage = this), this
            }
        }, e()
    }(), ! function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return $n.apply(null, arguments)
        }

        function t(e) {
            $n = e
        }

        function n(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function r(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function a(e, t) {
            for (var n in t) o(t, n) && (e[n] = t[n]);
            return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function s(e, t, n, i) {
            return je(e, t, n, i, !0).utc()
        }

        function l() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function u(e) {
            return null == e._pf && (e._pf = l()), e._pf
        }

        function c(e) {
            if (null == e._isValid) {
                var t = u(e);
                e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function d(e) {
            var t = s(NaN);
            return null != e ? a(u(t), e) : u(t).userInvalidated = !0, t
        }

        function f(e, t) {
            var n, i, r;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = u(t)), "undefined" != typeof t._locale && (e._locale = t._locale), Ln.length > 0)
                for (n in Ln) i = Ln[n], r = t[i], "undefined" != typeof r && (e[i] = r);
            return e
        }

        function h(t) {
            f(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), Pn === !1 && (Pn = !0, e.updateOffset(this), Pn = !1)
        }

        function p(e) {
            return e instanceof h || null != e && null != e._isAMomentObject
        }

        function m(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function g(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = m(t)), n
        }

        function v(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                a = 0;
            for (i = 0; r > i; i++)(n && e[i] !== t[i] || !n && g(e[i]) !== g(t[i])) && a++;
            return a + o
        }

        function y() {}

        function b(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function w(e) {
            for (var t, n, i, r, o = 0; o < e.length;) {
                for (r = b(e[o]).split("-"), t = r.length, n = b(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = _(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }

        function _(e) {
            var t = null;
            if (!Hn[e] && "undefined" != typeof module && module && module.exports) try {
                t = On._abbr, require("./locale/" + e), x(t)
            } catch (n) {}
            return Hn[e]
        }

        function x(e, t) {
            var n;
            return e && (n = "undefined" == typeof t ? C(e) : T(e, t), n && (On = n)), On._abbr
        }

        function T(e, t) {
            return null !== t ? (t.abbr = e, Hn[e] = Hn[e] || new y, Hn[e].set(t), x(e), Hn[e]) : (delete Hn[e], null)
        }

        function C(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return On;
            if (!n(e)) {
                if (t = _(e)) return t;
                e = [e]
            }
            return w(e)
        }

        function S(e, t) {
            var n = e.toLowerCase();
            In[n] = In[n + "s"] = In[t] = e
        }

        function k(e) {
            return "string" == typeof e ? In[e] || In[e.toLowerCase()] : void 0
        }

        function D(e) {
            var t, n, i = {};
            for (n in e) o(e, n) && (t = k(n), t && (i[t] = e[n]));
            return i
        }

        function j(t, n) {
            return function(i) {
                return null != i ? (E(this, t, i), e.updateOffset(this, n), this) : F(this, t)
            }
        }

        function F(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function E(e, t, n) {
            return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function N(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else if (e = k(e), "function" == typeof this[e]) return this[e](t);
            return this
        }

        function A(e, t, n) {
            var i = "" + Math.abs(e),
                r = t - i.length,
                o = e >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function M(e, t, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), e && (Wn[e] = r), t && (Wn[t[0]] = function() {
                return A(r.apply(this, arguments), t[1], t[2])
            }), n && (Wn[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            })
        }

        function $(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function O(e) {
            var t, n, i = e.match(Qn);
            for (t = 0, n = i.length; n > t; t++) Wn[i[t]] ? i[t] = Wn[i[t]] : i[t] = $(i[t]);
            return function(r) {
                var o = "";
                for (t = 0; n > t; t++) o += i[t] instanceof Function ? i[t].call(r, e) : i[t];
                return o
            }
        }

        function L(e, t) {
            return e.isValid() ? (t = P(t, e.localeData()), qn[t] = qn[t] || O(t), qn[t](e)) : e.localeData().invalidDate()
        }

        function P(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (Yn.lastIndex = 0; i >= 0 && Yn.test(e);) e = e.replace(Yn, n), Yn.lastIndex = 0, i -= 1;
            return e
        }

        function H(e) {
            return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
        }

        function I(e, t, n) {
            ri[e] = H(t) ? t : function(e) {
                return e && n ? n : t
            }
        }

        function Q(e, t) {
            return o(ri, e) ? ri[e](t._strict, t._locale) : new RegExp(Y(e))
        }

        function Y(e) {
            return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                return t || n || i || r
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function q(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function(e, n) {
                    n[t] = g(e)
                }), n = 0; n < e.length; n++) oi[e[n]] = i
        }

        function W(e, t) {
            q(e, function(e, n, i, r) {
                i._w = i._w || {}, t(e, i._w, i, r)
            })
        }

        function R(e, t, n) {
            null != t && o(oi, e) && oi[e](t, n._a, n, e)
        }

        function B(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function z(e) {
            return this._months[e.month()]
        }

        function U(e) {
            return this._monthsShort[e.month()]
        }

        function J(e, t, n) {
            var i, r, o;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (r = s([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }

        function G(e, t) {
            var n;
            return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), B(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
        }

        function V(t) {
            return null != t ? (G(this, t), e.updateOffset(this, !0), this) : F(this, "Month")
        }

        function X() {
            return B(this.year(), this.month())
        }

        function Z(e) {
            var t, n = e._a;
            return n && -2 === u(e).overflow && (t = n[si] < 0 || n[si] > 11 ? si : n[li] < 1 || n[li] > B(n[ai], n[si]) ? li : n[ui] < 0 || n[ui] > 24 || 24 === n[ui] && (0 !== n[ci] || 0 !== n[di] || 0 !== n[fi]) ? ui : n[ci] < 0 || n[ci] > 59 ? ci : n[di] < 0 || n[di] > 59 ? di : n[fi] < 0 || n[fi] > 999 ? fi : -1, u(e)._overflowDayOfYear && (ai > t || t > li) && (t = li), u(e).overflow = t), e
        }

        function K(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function ee(e, t) {
            var n = !0;
            return a(function() {
                return n && (K(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
            }, t)
        }

        function te(e, t) {
            mi[e] || (K(t), mi[e] = !0)
        }

        function ne(e) {
            var t, n, i = e._i,
                r = gi.exec(i);
            if (r) {
                for (u(e).iso = !0, t = 0, n = vi.length; n > t; t++)
                    if (vi[t][1].exec(i)) {
                        e._f = vi[t][0];
                        break
                    }
                for (t = 0, n = yi.length; n > t; t++)
                    if (yi[t][1].exec(i)) {
                        e._f += (r[6] || " ") + yi[t][0];
                        break
                    }
                i.match(ti) && (e._f += "Z"), _e(e)
            } else e._isValid = !1
        }

        function ie(t) {
            var n = bi.exec(t._i);
            return null !== n ? void(t._d = new Date(+n[1])) : (ne(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function re(e, t, n, i, r, o, a) {
            var s = new Date(e, t, n, i, r, o, a);
            return 1970 > e && s.setFullYear(e), s
        }

        function oe(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e), t
        }

        function ae(e) {
            return se(e) ? 366 : 365
        }

        function se(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function le() {
            return se(this.year())
        }

        function ue(e, t, n) {
            var i, r = n - t,
                o = n - e.day();
            return o > r && (o -= 7), r - 7 > o && (o += 7), i = Fe(e).add(o, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function ce(e) {
            return ue(e, this._week.dow, this._week.doy).week
        }

        function de() {
            return this._week.dow
        }

        function fe() {
            return this._week.doy
        }

        function he(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function pe(e) {
            var t = ue(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function me(e, t, n, i, r) {
            var o, a = 6 + r - i,
                s = oe(e, 0, 1 + a),
                l = s.getUTCDay();
            return r > l && (l += 7), n = null != n ? 1 * n : r, o = 1 + a + 7 * (t - 1) - l + n, {
                year: o > 0 ? e : e - 1,
                dayOfYear: o > 0 ? o : ae(e - 1) + o
            }
        }

        function ge(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function ve(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function ye(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function be(e) {
            var t, n, i, r, o = [];
            if (!e._d) {
                for (i = ye(e), e._w && null == e._a[li] && null == e._a[si] && we(e), e._dayOfYear && (r = ve(e._a[ai], i[ai]), e._dayOfYear > ae(r) && (u(e)._overflowDayOfYear = !0), n = oe(r, 0, e._dayOfYear), e._a[si] = n.getUTCMonth(), e._a[li] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
                for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[ui] && 0 === e._a[ci] && 0 === e._a[di] && 0 === e._a[fi] && (e._nextDay = !0, e._a[ui] = 0), e._d = (e._useUTC ? oe : re).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ui] = 24)
            }
        }

        function we(e) {
            var t, n, i, r, o, a, s;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (o = 1, a = 4, n = ve(t.GG, e._a[ai], ue(Fe(), 1, 4).year), i = ve(t.W, 1), r = ve(t.E, 1)) : (o = e._locale._week.dow, a = e._locale._week.doy, n = ve(t.gg, e._a[ai], ue(Fe(), o, a).year), i = ve(t.w, 1), null != t.d ? (r = t.d, o > r && ++i) : r = null != t.e ? t.e + o : o), s = me(n, i, r, a, o), e._a[ai] = s.year, e._dayOfYear = s.dayOfYear
        }

        function _e(t) {
            if (t._f === e.ISO_8601) return void ne(t);
            t._a = [], u(t).empty = !0;
            var n, i, r, o, a, s = "" + t._i,
                l = s.length,
                c = 0;
            for (r = P(t._f, t._locale).match(Qn) || [], n = 0; n < r.length; n++) o = r[n], i = (s.match(Q(o, t)) || [])[0], i && (a = s.substr(0, s.indexOf(i)), a.length > 0 && u(t).unusedInput.push(a), s = s.slice(s.indexOf(i) + i.length), c += i.length), Wn[o] ? (i ? u(t).empty = !1 : u(t).unusedTokens.push(o), R(o, i, t)) : t._strict && !i && u(t).unusedTokens.push(o);
            u(t).charsLeftOver = l - c, s.length > 0 && u(t).unusedInput.push(s), u(t).bigHour === !0 && t._a[ui] <= 12 && t._a[ui] > 0 && (u(t).bigHour = void 0), t._a[ui] = xe(t._locale, t._a[ui], t._meridiem), be(t), Z(t)
        }

        function xe(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function Te(e) {
            var t, n, i, r, o;
            if (0 === e._f.length) return u(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) o = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], _e(t), c(t) && (o += u(t).charsLeftOver, o += 10 * u(t).unusedTokens.length, u(t).score = o, (null == i || i > o) && (i = o, n = t));
            a(e, n || t)
        }

        function Ce(e) {
            if (!e._d) {
                var t = D(e._i);
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], be(e)
            }
        }

        function Se(e) {
            var t = new h(Z(ke(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function ke(e) {
            var t = e._i,
                r = e._f;
            return e._locale = e._locale || C(e._l), null === t || void 0 === r && "" === t ? d({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new h(Z(t)) : (n(r) ? Te(e) : r ? _e(e) : i(t) ? e._d = t : De(e), e))
        }

        function De(t) {
            var o = t._i;
            void 0 === o ? t._d = new Date : i(o) ? t._d = new Date(+o) : "string" == typeof o ? ie(t) : n(o) ? (t._a = r(o.slice(0), function(e) {
                return parseInt(e, 10)
            }), be(t)) : "object" == typeof o ? Ce(t) : "number" == typeof o ? t._d = new Date(o) : e.createFromInputFallback(t)
        }

        function je(e, t, n, i, r) {
            var o = {};
            return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = e, o._f = t, o._strict = i, Se(o)
        }

        function Fe(e, t, n, i) {
            return je(e, t, n, i, !1)
        }

        function Ee(e, t) {
            var i, r;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Fe();
            for (i = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](i)) && (i = t[r]);
            return i
        }

        function Ne() {
            var e = [].slice.call(arguments, 0);
            return Ee("isBefore", e)
        }

        function Ae() {
            var e = [].slice.call(arguments, 0);
            return Ee("isAfter", e)
        }

        function Me(e) {
            var t = D(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                o = t.week || 0,
                a = t.day || 0,
                s = t.hour || 0,
                l = t.minute || 0,
                u = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * s, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = C(), this._bubble()
        }

        function $e(e) {
            return e instanceof Me
        }

        function Oe(e, t) {
            M(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return 0 > e && (e = -e, n = "-"), n + A(~~(e / 60), 2) + t + A(~~e % 60, 2)
            })
        }

        function Le(e) {
            var t = (e || "").match(ti) || [],
                n = t[t.length - 1] || [],
                i = (n + "").match(Ci) || ["-", 0, 0],
                r = +(60 * i[1]) + g(i[2]);
            return "+" === i[0] ? r : -r
        }

        function Pe(t, n) {
            var r, o;
            return n._isUTC ? (r = n.clone(), o = (p(t) || i(t) ? +t : +Fe(t)) - +r, r._d.setTime(+r._d + o), e.updateOffset(r, !1), r) : Fe(t).local()
        }

        function He(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Ie(t, n) {
            var i, r = this._offset || 0;
            return null != t ? ("string" == typeof t && (t = Le(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = He(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? tt(this, Ve(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : He(this)
        }

        function Qe(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function Ye(e) {
            return this.utcOffset(0, e)
        }

        function qe(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(He(this), "m")), this
        }

        function We() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Le(this._i)), this
        }

        function Re(e) {
            return e = e ? Fe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
        }

        function Be() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function ze() {
            if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
            var e = {};
            if (f(e, this), e = ke(e), e._a) {
                var t = e._isUTC ? s(e._a) : Fe(e._a);
                this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Ue() {
            return !this._isUTC
        }

        function Je() {
            return this._isUTC
        }

        function Ge() {
            return this._isUTC && 0 === this._offset
        }

        function Ve(e, t) {
            var n, i, r, a = e,
                s = null;
            return $e(e) ? a = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = Si.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
                y: 0,
                d: g(s[li]) * n,
                h: g(s[ui]) * n,
                m: g(s[ci]) * n,
                s: g(s[di]) * n,
                ms: g(s[fi]) * n
            }) : (s = ki.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
                y: Xe(s[2], n),
                M: Xe(s[3], n),
                d: Xe(s[4], n),
                h: Xe(s[5], n),
                m: Xe(s[6], n),
                s: Xe(s[7], n),
                w: Xe(s[8], n)
            }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (r = Ke(Fe(a.from), Fe(a.to)), a = {}, a.ms = r.milliseconds, a.M = r.months), i = new Me(a), $e(e) && o(e, "_locale") && (i._locale = e._locale), i
        }

        function Xe(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Ze(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Ke(e, t) {
            var n;
            return t = Pe(t, e), e.isBefore(t) ? n = Ze(e, t) : (n = Ze(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function et(e, t) {
            return function(n, i) {
                var r, o;
                return null === i || isNaN(+i) || (te(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = Ve(n, i), tt(this, r, e), this
            }
        }

        function tt(t, n, i, r) {
            var o = n._milliseconds,
                a = n._days,
                s = n._months;
            r = null == r ? !0 : r, o && t._d.setTime(+t._d + o * i), a && E(t, "Date", F(t, "Date") + a * i), s && G(t, F(t, "Month") + s * i), r && e.updateOffset(t, a || s)
        }

        function nt(e, t) {
            var n = e || Fe(),
                i = Pe(n, this).startOf("day"),
                r = this.diff(i, "days", !0),
                o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
            return this.format(t && t[o] || this.localeData().calendar(o, this, Fe(n)))
        }

        function it() {
            return new h(this)
        }

        function rt(e, t) {
            var n;
            return t = k("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = p(e) ? e : Fe(e), +this > +e) : (n = p(e) ? +e : +Fe(e), n < +this.clone().startOf(t))
        }

        function ot(e, t) {
            var n;
            return t = k("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = p(e) ? e : Fe(e), +e > +this) : (n = p(e) ? +e : +Fe(e), +this.clone().endOf(t) < n)
        }

        function at(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        }

        function st(e, t) {
            var n;
            return t = k(t || "millisecond"), "millisecond" === t ? (e = p(e) ? e : Fe(e), +this === +e) : (n = +Fe(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        }

        function lt(e, t, n) {
            var i, r, o = Pe(e, this),
                a = 6e4 * (o.utcOffset() - this.utcOffset());
            return t = k(t), "year" === t || "month" === t || "quarter" === t ? (r = ut(this, o), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - o, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i), n ? r : m(r)
        }

        function ut(e, t) {
            var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                o = e.clone().add(r, "months");
            return 0 > t - o ? (n = e.clone().add(r - 1, "months"), i = (t - o) / (o - n)) : (n = e.clone().add(r + 1, "months"), i = (t - o) / (n - o)), -(r + i)
        }

        function ct() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function dt() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : L(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : L(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function ft(t) {
            var n = L(this, t || e.defaultFormat);
            return this.localeData().postformat(n)
        }

        function ht(e, t) {
            return this.isValid() ? Ve({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function pt(e) {
            return this.from(Fe(), e)
        }

        function mt(e, t) {
            return this.isValid() ? Ve({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function gt(e) {
            return this.to(Fe(), e)
        }

        function vt(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = C(e), null != t && (this._locale = t), this)
        }

        function yt() {
            return this._locale
        }

        function bt(e) {
            switch (e = k(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function wt(e) {
            return e = k(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        }

        function _t() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function xt() {
            return Math.floor(+this / 1e3)
        }

        function Tt() {
            return this._offset ? new Date(+this) : this._d
        }

        function Ct() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function St() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function kt() {
            return c(this)
        }

        function Dt() {
            return a({}, u(this))
        }

        function jt() {
            return u(this).overflow
        }

        function Ft(e, t) {
            M(0, [e, e.length], 0, t)
        }

        function Et(e, t, n) {
            return ue(Fe([e, 11, 31 + t - n]), t, n).week
        }

        function Nt(e) {
            var t = ue(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function At(e) {
            var t = ue(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function Mt() {
            return Et(this.year(), 1, 4)
        }

        function $t() {
            var e = this.localeData()._week;
            return Et(this.year(), e.dow, e.doy)
        }

        function Ot(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function Lt(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Pt(e) {
            return this._weekdays[e.day()]
        }

        function Ht(e) {
            return this._weekdaysShort[e.day()]
        }

        function It(e) {
            return this._weekdaysMin[e.day()]
        }

        function Qt(e) {
            var t, n, i;
            for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = Fe([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        }

        function Yt(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Lt(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function qt(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function Wt(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        }

        function Rt(e, t) {
            M(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Bt(e, t) {
            return t._meridiemParse
        }

        function zt(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Ut(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Jt(e, t) {
            t[fi] = g(1e3 * ("0." + e))
        }

        function Gt() {
            return this._isUTC ? "UTC" : ""
        }

        function Vt() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Xt(e) {
            return Fe(1e3 * e)
        }

        function Zt() {
            return Fe.apply(null, arguments).parseZone()
        }

        function Kt(e, t, n) {
            var i = this._calendar[e];
            return "function" == typeof i ? i.call(t, n) : i
        }

        function en(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function tn() {
            return this._invalidDate
        }

        function nn(e) {
            return this._ordinal.replace("%d", e)
        }

        function rn(e) {
            return e
        }

        function on(e, t, n, i) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
        }

        function an(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        }

        function sn(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function ln(e, t, n, i) {
            var r = C(),
                o = s().set(i, t);
            return r[n](o, e)
        }

        function un(e, t, n, i, r) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return ln(e, t, n, r);
            var o, a = [];
            for (o = 0; i > o; o++) a[o] = ln(e, o, n, r);
            return a
        }

        function cn(e, t) {
            return un(e, t, "months", 12, "month")
        }

        function dn(e, t) {
            return un(e, t, "monthsShort", 12, "month")
        }

        function fn(e, t) {
            return un(e, t, "weekdays", 7, "day")
        }

        function hn(e, t) {
            return un(e, t, "weekdaysShort", 7, "day")
        }

        function pn(e, t) {
            return un(e, t, "weekdaysMin", 7, "day")
        }

        function mn() {
            var e = this._data;
            return this._milliseconds = Gi(this._milliseconds), this._days = Gi(this._days), this._months = Gi(this._months), e.milliseconds = Gi(e.milliseconds), e.seconds = Gi(e.seconds), e.minutes = Gi(e.minutes), e.hours = Gi(e.hours), e.months = Gi(e.months), e.years = Gi(e.years), this
        }

        function gn(e, t, n, i) {
            var r = Ve(t, n);
            return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
        }

        function vn(e, t) {
            return gn(this, e, t, 1)
        }

        function yn(e, t) {
            return gn(this, e, t, -1)
        }

        function bn(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function wn() {
            var e, t, n, i, r, o = this._milliseconds,
                a = this._days,
                s = this._months,
                l = this._data;
            return o >= 0 && a >= 0 && s >= 0 || 0 >= o && 0 >= a && 0 >= s || (o += 864e5 * bn(xn(s) + a), a = 0, s = 0), l.milliseconds = o % 1e3, e = m(o / 1e3), l.seconds = e % 60, t = m(e / 60), l.minutes = t % 60, n = m(t / 60), l.hours = n % 24, a += m(n / 24), r = m(_n(a)), s += r, a -= bn(xn(r)), i = m(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
        }

        function _n(e) {
            return 4800 * e / 146097
        }

        function xn(e) {
            return 146097 * e / 4800
        }

        function Tn(e) {
            var t, n, i = this._milliseconds;
            if (e = k(e), "month" === e || "year" === e) return t = this._days + i / 864e5, n = this._months + _n(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(xn(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function Cn() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
        }

        function Sn(e) {
            return function() {
                return this.as(e)
            }
        }

        function kn(e) {
            return e = k(e), this[e + "s"]()
        }

        function Dn(e) {
            return function() {
                return this._data[e]
            }
        }

        function jn() {
            return m(this.days() / 7)
        }

        function Fn(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }

        function En(e, t, n) {
            var i = Ve(e).abs(),
                r = dr(i.as("s")),
                o = dr(i.as("m")),
                a = dr(i.as("h")),
                s = dr(i.as("d")),
                l = dr(i.as("M")),
                u = dr(i.as("y")),
                c = r < fr.s && ["s", r] || 1 === o && ["m"] || o < fr.m && ["mm", o] || 1 === a && ["h"] || a < fr.h && ["hh", a] || 1 === s && ["d"] || s < fr.d && ["dd", s] || 1 === l && ["M"] || l < fr.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
            return c[2] = t, c[3] = +e > 0, c[4] = n, Fn.apply(null, c)
        }

        function Nn(e, t) {
            return void 0 === fr[e] ? !1 : void 0 === t ? fr[e] : (fr[e] = t, !0)
        }

        function An(e) {
            var t = this.localeData(),
                n = En(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function Mn() {
            var e, t, n, i = hr(this._milliseconds) / 1e3,
                r = hr(this._days),
                o = hr(this._months);
            e = m(i / 60), t = m(e / 60), i %= 60, e %= 60, n = m(o / 12), o %= 12;
            var a = n,
                s = o,
                l = r,
                u = t,
                c = e,
                d = i,
                f = this.asSeconds();
            return f ? (0 > f ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
        }
        var $n, On, Ln = e.momentProperties = [],
            Pn = !1,
            Hn = {},
            In = {},
            Qn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Yn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            qn = {},
            Wn = {},
            Rn = /\d/,
            Bn = /\d\d/,
            zn = /\d{3}/,
            Un = /\d{4}/,
            Jn = /[+-]?\d{6}/,
            Gn = /\d\d?/,
            Vn = /\d{1,3}/,
            Xn = /\d{1,4}/,
            Zn = /[+-]?\d{1,6}/,
            Kn = /\d+/,
            ei = /[+-]?\d+/,
            ti = /Z|[+-]\d\d:?\d\d/gi,
            ni = /[+-]?\d+(\.\d{1,3})?/,
            ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ri = {},
            oi = {},
            ai = 0,
            si = 1,
            li = 2,
            ui = 3,
            ci = 4,
            di = 5,
            fi = 6;
        M("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), M("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), M("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), S("month", "M"), I("M", Gn), I("MM", Gn, Bn), I("MMM", ii), I("MMMM", ii), q(["M", "MM"], function(e, t) {
            t[si] = g(e) - 1
        }), q(["MMM", "MMMM"], function(e, t, n, i) {
            var r = n._locale.monthsParse(e, i, n._strict);
            null != r ? t[si] = r : u(n).invalidMonth = e
        });
        var hi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            pi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            mi = {};
        e.suppressDeprecationWarnings = !1;
        var gi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            vi = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            yi = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            bi = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), M(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), M(0, ["YYYY", 4], 0, "year"), M(0, ["YYYYY", 5], 0, "year"), M(0, ["YYYYYY", 6, !0], 0, "year"), S("year", "y"), I("Y", ei), I("YY", Gn, Bn), I("YYYY", Xn, Un), I("YYYYY", Zn, Jn), I("YYYYYY", Zn, Jn), q(["YYYYY", "YYYYYY"], ai), q("YYYY", function(t, n) {
            n[ai] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t)
        }), q("YY", function(t, n) {
            n[ai] = e.parseTwoDigitYear(t)
        }), e.parseTwoDigitYear = function(e) {
            return g(e) + (g(e) > 68 ? 1900 : 2e3)
        };
        var wi = j("FullYear", !1);
        M("w", ["ww", 2], "wo", "week"), M("W", ["WW", 2], "Wo", "isoWeek"), S("week", "w"), S("isoWeek", "W"), I("w", Gn), I("ww", Gn, Bn), I("W", Gn), I("WW", Gn, Bn), W(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = g(e)
        });
        var _i = {
            dow: 0,
            doy: 6
        };
        M("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), S("dayOfYear", "DDD"), I("DDD", Vn), I("DDDD", zn), q(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = g(e)
        }), e.ISO_8601 = function() {};
        var xi = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Fe.apply(null, arguments);
                return this > e ? this : e
            }),
            Ti = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Fe.apply(null, arguments);
                return e > this ? this : e
            });
        Oe("Z", ":"), Oe("ZZ", ""), I("Z", ti), I("ZZ", ti), q(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Le(e)
        });
        var Ci = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Si = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            ki = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Ve.fn = Me.prototype;
        var Di = et(1, "add"),
            ji = et(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Fi = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        M(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), M(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Ft("gggg", "weekYear"), Ft("ggggg", "weekYear"), Ft("GGGG", "isoWeekYear"), Ft("GGGGG", "isoWeekYear"), S("weekYear", "gg"), S("isoWeekYear", "GG"), I("G", ei), I("g", ei), I("GG", Gn, Bn), I("gg", Gn, Bn), I("GGGG", Xn, Un), I("gggg", Xn, Un), I("GGGGG", Zn, Jn), I("ggggg", Zn, Jn), W(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = g(e)
        }), W(["gg", "GG"], function(t, n, i, r) {
            n[r] = e.parseTwoDigitYear(t)
        }), M("Q", 0, 0, "quarter"), S("quarter", "Q"), I("Q", Rn), q("Q", function(e, t) {
            t[si] = 3 * (g(e) - 1)
        }), M("D", ["DD", 2], "Do", "date"), S("date", "D"), I("D", Gn), I("DD", Gn, Bn), I("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), q(["D", "DD"], li), q("Do", function(e, t) {
            t[li] = g(e.match(Gn)[0], 10)
        });
        var Ei = j("Date", !0);
        M("d", 0, "do", "day"), M("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), M("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), M("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), M("e", 0, 0, "weekday"), M("E", 0, 0, "isoWeekday"), S("day", "d"), S("weekday", "e"), S("isoWeekday", "E"), I("d", Gn), I("e", Gn), I("E", Gn), I("dd", ii), I("ddd", ii), I("dddd", ii), W(["dd", "ddd", "dddd"], function(e, t, n) {
            var i = n._locale.weekdaysParse(e);
            null != i ? t.d = i : u(n).invalidWeekday = e
        }), W(["d", "e", "E"], function(e, t, n, i) {
            t[i] = g(e)
        });
        var Ni = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Ai = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Mi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        M("H", ["HH", 2], 0, "hour"), M("h", ["hh", 2], 0, function() {
            return this.hours() % 12 || 12
        }), Rt("a", !0), Rt("A", !1), S("hour", "h"), I("a", Bt), I("A", Bt), I("H", Gn), I("h", Gn), I("HH", Gn, Bn), I("hh", Gn, Bn), q(["H", "HH"], ui), q(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), q(["h", "hh"], function(e, t, n) {
            t[ui] = g(e), u(n).bigHour = !0
        });
        var $i = /[ap]\.?m?\.?/i,
            Oi = j("Hours", !0);
        M("m", ["mm", 2], 0, "minute"), S("minute", "m"), I("m", Gn), I("mm", Gn, Bn), q(["m", "mm"], ci);
        var Li = j("Minutes", !1);
        M("s", ["ss", 2], 0, "second"), S("second", "s"), I("s", Gn), I("ss", Gn, Bn), q(["s", "ss"], di);
        var Pi = j("Seconds", !1);
        M("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), M(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), M(0, ["SSS", 3], 0, "millisecond"), M(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), M(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), M(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), M(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), M(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), M(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), S("millisecond", "ms"), I("S", Vn, Rn), I("SS", Vn, Bn), I("SSS", Vn, zn);
        var Hi;
        for (Hi = "SSSS"; Hi.length <= 9; Hi += "S") I(Hi, Kn);
        for (Hi = "S"; Hi.length <= 9; Hi += "S") q(Hi, Jt);
        var Ii = j("Milliseconds", !1);
        M("z", 0, 0, "zoneAbbr"), M("zz", 0, 0, "zoneName");
        var Qi = h.prototype;
        Qi.add = Di, Qi.calendar = nt, Qi.clone = it, Qi.diff = lt, Qi.endOf = wt, Qi.format = ft, Qi.from = ht, Qi.fromNow = pt, Qi.to = mt, Qi.toNow = gt, Qi.get = N, Qi.invalidAt = jt, Qi.isAfter = rt, Qi.isBefore = ot, Qi.isBetween = at, Qi.isSame = st, Qi.isValid = kt, Qi.lang = Fi, Qi.locale = vt, Qi.localeData = yt, Qi.max = Ti, Qi.min = xi, Qi.parsingFlags = Dt, Qi.set = N, Qi.startOf = bt, Qi.subtract = ji, Qi.toArray = Ct, Qi.toObject = St, Qi.toDate = Tt, Qi.toISOString = dt, Qi.toJSON = dt, Qi.toString = ct, Qi.unix = xt, Qi.valueOf = _t, Qi.year = wi, Qi.isLeapYear = le, Qi.weekYear = Nt, Qi.isoWeekYear = At, Qi.quarter = Qi.quarters = Ot, Qi.month = V, Qi.daysInMonth = X, Qi.week = Qi.weeks = he, Qi.isoWeek = Qi.isoWeeks = pe,
            Qi.weeksInYear = $t, Qi.isoWeeksInYear = Mt, Qi.date = Ei, Qi.day = Qi.days = Yt, Qi.weekday = qt, Qi.isoWeekday = Wt, Qi.dayOfYear = ge, Qi.hour = Qi.hours = Oi, Qi.minute = Qi.minutes = Li, Qi.second = Qi.seconds = Pi, Qi.millisecond = Qi.milliseconds = Ii, Qi.utcOffset = Ie, Qi.utc = Ye, Qi.local = qe, Qi.parseZone = We, Qi.hasAlignedHourOffset = Re, Qi.isDST = Be, Qi.isDSTShifted = ze, Qi.isLocal = Ue, Qi.isUtcOffset = Je, Qi.isUtc = Ge, Qi.isUTC = Ge, Qi.zoneAbbr = Gt, Qi.zoneName = Vt, Qi.dates = ee("dates accessor is deprecated. Use date instead.", Ei), Qi.months = ee("months accessor is deprecated. Use month instead", V), Qi.years = ee("years accessor is deprecated. Use year instead", wi), Qi.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Qe);
        var Yi = Qi,
            qi = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Wi = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Ri = "Invalid date",
            Bi = "%d",
            zi = /\d{1,2}/,
            Ui = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Ji = y.prototype;
        Ji._calendar = qi, Ji.calendar = Kt, Ji._longDateFormat = Wi, Ji.longDateFormat = en, Ji._invalidDate = Ri, Ji.invalidDate = tn, Ji._ordinal = Bi, Ji.ordinal = nn, Ji._ordinalParse = zi, Ji.preparse = rn, Ji.postformat = rn, Ji._relativeTime = Ui, Ji.relativeTime = on, Ji.pastFuture = an, Ji.set = sn, Ji.months = z, Ji._months = hi, Ji.monthsShort = U, Ji._monthsShort = pi, Ji.monthsParse = J, Ji.week = ce, Ji._week = _i, Ji.firstDayOfYear = fe, Ji.firstDayOfWeek = de, Ji.weekdays = Pt, Ji._weekdays = Ni, Ji.weekdaysMin = It, Ji._weekdaysMin = Mi, Ji.weekdaysShort = Ht, Ji._weekdaysShort = Ai, Ji.weekdaysParse = Qt, Ji.isPM = zt, Ji._meridiemParse = $i, Ji.meridiem = Ut, x("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), e.lang = ee("moment.lang is deprecated. Use moment.locale instead.", x), e.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", C);
        var Gi = Math.abs,
            Vi = Sn("ms"),
            Xi = Sn("s"),
            Zi = Sn("m"),
            Ki = Sn("h"),
            er = Sn("d"),
            tr = Sn("w"),
            nr = Sn("M"),
            ir = Sn("y"),
            rr = Dn("milliseconds"),
            or = Dn("seconds"),
            ar = Dn("minutes"),
            sr = Dn("hours"),
            lr = Dn("days"),
            ur = Dn("months"),
            cr = Dn("years"),
            dr = Math.round,
            fr = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            hr = Math.abs,
            pr = Me.prototype;
        pr.abs = mn, pr.add = vn, pr.subtract = yn, pr.as = Tn, pr.asMilliseconds = Vi, pr.asSeconds = Xi, pr.asMinutes = Zi, pr.asHours = Ki, pr.asDays = er, pr.asWeeks = tr, pr.asMonths = nr, pr.asYears = ir, pr.valueOf = Cn, pr._bubble = wn, pr.get = kn, pr.milliseconds = rr, pr.seconds = or, pr.minutes = ar, pr.hours = sr, pr.days = lr, pr.weeks = jn, pr.months = ur, pr.years = cr, pr.humanize = An, pr.toISOString = Mn, pr.toString = Mn, pr.toJSON = Mn, pr.locale = vt, pr.localeData = yt, pr.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mn), pr.lang = Fi, M("X", 0, 0, "unix"), M("x", 0, 0, "valueOf"), I("x", ei), I("X", ni), q("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), q("x", function(e, t, n) {
            n._d = new Date(g(e))
        }), e.version = "2.10.6", t(Fe), e.fn = Yi, e.min = Ne, e.max = Ae, e.utc = s, e.unix = Xt, e.months = cn, e.isDate = i, e.locale = x, e.invalid = d, e.duration = Ve, e.isMoment = p, e.weekdays = fn, e.parseZone = Zt, e.localeData = C, e.isDuration = $e, e.monthsShort = dn, e.weekdaysMin = pn, e.defineLocale = T, e.weekdaysShort = hn, e.normalizeUnits = k, e.relativeTimeThreshold = Nn;
        var mr = e;
        return mr
    }),
    function(e) {
        function t(t, n, i, r) {
            var o = {
                data: r || 0 === r || r === !1 ? r : n ? n.data : {},
                _wrap: n ? n._wrap : null,
                tmpl: null,
                parent: n || null,
                nodes: [],
                calls: u,
                nest: c,
                wrap: d,
                html: f,
                update: h
            };
            return t && e.extend(o, t, {
                nodes: [],
                parent: n
            }), i && (o.tmpl = i, o._ctnt = o._ctnt || o.tmpl(e, o), o.key = ++_, (T.length ? b : y)[_] = o), o
        }

        function n(t, r, o) {
            var a, s = o ? e.map(o, function(e) {
                return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + g + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
            }) : t;
            return r ? s : (s = s.join(""), s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, n, r, o) {
                a = e(r).get(), l(a), n && (a = i(n).concat(a)), o && (a = a.concat(i(o)))
            }), a ? a : i(s))
        }

        function i(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, e.makeArray(n.childNodes)
        }

        function r(t) {
            return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, n, i, r, o, s, l) {
                var u, c, d, f = e.tmpl.tag[i];
                if (!f) throw "Unknown template tag: " + i;
                return u = f._default || [], s && !/\w$/.test(o) && (o += s, s = ""), o ? (o = a(o), l = l ? "," + a(l) + ")" : s ? ")" : "", c = s ? o.indexOf(".") > -1 ? o + a(s) : "(" + o + ").call($item" + l : o, d = s ? c : "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = c = u.$1 || "null", r = a(r), "');" + f[n ? "close" : "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null" : "true").split("$1a").join(d).split("$1").join(c).split("$2").join(r || u.$2 || "") + "__.push('"
            }) + "');}return __;")
        }

        function o(t, i) {
            t._wrap = n(t, !0, e.isArray(i) ? i : [v.test(i) ? i : e(i).html()]).join("")
        }

        function a(e) {
            return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
        }

        function s(e) {
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML
        }

        function l(n) {
            function i(n) {
                function i(e) {
                    e += u, a = c[e] = c[e] || t(a, y[a.parent.key + u] || a.parent)
                }
                var r, o, a, s, l = n;
                if (s = n.getAttribute(g)) {
                    for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(r = l.getAttribute(g)););
                    r !== s && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(g) || 0 : 0, (a = y[s]) || (a = b[s], a = t(a, y[l] || b[l]), a.key = ++_, y[_] = a), x && i(s)), n.removeAttribute(g)
                } else x && (a = e.data(n, "tmplItem")) && (i(a.key), y[a.key] = a, l = e.data(n.parentNode, "tmplItem"), l = l ? l.key : 0);
                if (a) {
                    for (o = a; o && o.key != l;) o.nodes.push(n), o = o.parent;
                    delete a._ctnt, delete a._wrap, e.data(n, "tmplItem", a)
                }
            }
            var r, o, a, s, l, u = "_" + x,
                c = {};
            for (a = 0, s = n.length; s > a; a++)
                if (1 === (r = n[a]).nodeType) {
                    for (o = r.getElementsByTagName("*"), l = o.length - 1; l >= 0; l--) i(o[l]);
                    i(r)
                }
        }

        function u(e, t, n, i) {
            return e ? void T.push({
                _: e,
                tmpl: t,
                item: this,
                data: n,
                options: i
            }) : T.pop()
        }

        function c(t, n, i) {
            return e.tmpl(e.template(t), n, i, this)
        }

        function d(t, n) {
            var i = t.options || {};
            return i.wrapped = n, e.tmpl(e.template(t.tmpl), t.data, i, t.item)
        }

        function f(t, n) {
            var i = this._wrap;
            return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"), function(e) {
                return n ? e.innerText || e.textContent : e.outerHTML || s(e)
            })
        }

        function h() {
            var t = this.nodes;
            e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
        }
        var p, m = e.fn.domManip,
            g = "_tmplitem",
            v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
            y = {},
            b = {},
            w = {
                key: 0,
                data: {}
            },
            _ = 0,
            x = 0,
            T = [];
        e.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, n) {
            e.fn[t] = function(i) {
                var r, o, a, s, l = [],
                    u = e(i),
                    c = 1 === this.length && this[0].parentNode;
                if (p = y || {}, c && 11 === c.nodeType && 1 === c.childNodes.length && 1 === u.length) u[n](this[0]), l = this;
                else {
                    for (o = 0, a = u.length; a > o; o++) x = o, r = (o > 0 ? this.clone(!0) : this).get(), e(u[o])[n](r), l = l.concat(r);
                    x = 0, l = this.pushStack(l, t, u.selector)
                }
                return s = p, p = null, e.tmpl.complete(s), l
            }
        }), e.fn.extend({
            tmpl: function(t, n, i) {
                return e.tmpl(this[0], t, n, i)
            },
            tmplItem: function() {
                return e.tmplItem(this[0])
            },
            template: function(t) {
                return e.template(t, this[0])
            },
            domManip: function(t, n, i) {
                if (t[0] && e.isArray(t[0])) {
                    for (var r, o = e.makeArray(arguments), a = t[0], s = a.length, l = 0; s > l && !(r = e.data(a[l++], "tmplItem")););
                    r && x && (o[2] = function(t) {
                        e.tmpl.afterManip(this, t, i)
                    }), m.apply(this, o)
                } else m.apply(this, arguments);
                return x = 0, !p && e.tmpl.complete(y), this
            }
        }), e.extend({
            tmpl: function(i, r, a, s) {
                var l, u = !s;
                if (u) s = w, i = e.template[i] || e.template(null, i), b = {};
                else if (!i) return i = s.tmpl, y[s.key] = s, s.nodes = [], s.wrapped && o(s, s.wrapped), e(n(s, null, s.tmpl(e, s)));
                return i ? ("function" == typeof r && (r = r.call(s || {})), a && a.wrapped && o(a, a.wrapped), l = e.isArray(r) ? e.map(r, function(e) {
                    return e ? t(a, s, i, e) : null
                }) : [t(a, s, i, r)], u ? e(n(s, null, l)) : l) : []
            },
            tmplItem: function(t) {
                var n;
                for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
                return n || w
            },
            template: function(t, n) {
                return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))), "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, v.test(t) ? t : e(t)) : null
            },
            encode: function(e) {
                return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
            }
        }), e.extend(e.tmpl, {
            tag: {
                tmpl: {
                    _default: {
                        $2: "null"
                    },
                    open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
                },
                wrap: {
                    _default: {
                        $2: "null"
                    },
                    open: "$item.calls(__,$1,$2);__=[];",
                    close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
                },
                each: {
                    _default: {
                        $2: "$index, $value"
                    },
                    open: "if($notnull_1){$.each($1a,function($2){with(this){",
                    close: "}});}"
                },
                "if": {
                    open: "if(($notnull_1) && $1a){",
                    close: "}"
                },
                "else": {
                    _default: {
                        $1: "true"
                    },
                    open: "}else if(($notnull_1) && $1a){"
                },
                html: {
                    open: "if($notnull_1){__.push($1a);}"
                },
                "=": {
                    _default: {
                        $1: "$data"
                    },
                    open: "if($notnull_1){__.push($.encode($1a));}"
                },
                "!": {
                    open: ""
                }
            },
            complete: function() {
                y = {}
            },
            afterManip: function(t, n, i) {
                var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
                i.call(t, n), l(r), x++
            }
        })
    }(jQuery);
var PopupController = function() {
    var e = this,
        t = ijQuery;
    t(".popup-link, .popup-link img").off("click").on("click", function(n) {
        var i, r, o = t(this),
            a = t("html");
        o.hasClass("popup-link") || (o = o.closest(".popup-link")), i = o.attr("id").replace("link-", ""), r = t("#popup-" + i), r.off("show.bs.modal").on("show.bs.modal", function(e) {
            var n = t(this).find(".popup-inner"),
                i = t(this).find(".modal-content"),
                r = (t(window).height() - i.height()) / 2;
            t(this).parents(".new-mobile-preview").size() && (r = (t(window).height() / 1.5 - i.height()) / 2, setTimeout(function() {
                t(".modal-backdrop").prependTo(t(".popup").parent())
            }, 250)), 10 > r && (r = 10), t("#plug").hide(), n.css("margin-top", r)
        }), r.off("shown.bs.modal").on("shown.bs.modal", function(n) {
            (new FormErrorPosition).fixAllPositions(r), e.showVideos(r), r.find(".widget-map").each(function() {
                initGoogleMap(t(this).find(".map_canvas").data("address"), ijQuery(this).find(".map_canvas").data("zoom"), t(this).attr("id"), !0)
            }), r.find(":input:enabled:visible:first").focus()
        }), r.off("hide.bs.modal").on("hide.bs.modal", function(n) {
            t(".modal-backdrop.fade.in").remove(), t("#plug").show(), e.hideVideos(r), a.css("margin-left", 0)
        });
        var s = document.documentElement.clientWidth || document.body.clientWidth,
            l = window.innerWidth;
        if (l > s) {
            var u, c, d, f = t('<div class="instapage-dialog-scroll-width-inner"></div>'),
                h = t('<div class="instapage-dialog-scroll-width-outer"></div>').append(f),
                p = f[0],
                m = h[0],
                g = t(" body ");
            g.append(h), u = p.offsetWidth, h.addClass("add-overflow"), c = m.clientWidth, h.remove(), d = u - c, a.css("margin-left", -d)
        }
        return r.modal("show"), !1
    })
};
if (PopupController.prototype.showVideos = function(e) {
        e.find(".widget-video iframe").each(function(e, t) {
            var n = ijQuery(t);
            n.attr("src", n.attr("data-src"))
        })
    }, PopupController.prototype.hideVideos = function(e) {
        e.find(".widget-video iframe").each(function(e, t) {
            var n = ijQuery(t);
            n.attr("src", "")
        })
    }, PopupController.prototype.destroyParentPopupAfterFormSubmit = function(e) {
        var t = ijQuery;
        if (t(e).parents(".page-element").eq(0).length) {
            var n = t(e).parents(".page-element").eq(0);
            if (n.attr("id").indexOf("popup") > 0) {
                var i = n.attr("id").split("_"),
                    r = t("#popup-" + i[1]);
                r.modal("toggle")
            }
        }
    }, ijQuery(document).ready(function() {
        window.popup_controller = new PopupController
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(t) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this),
            r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(r);
        t && t.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), i[r](null == o[t] ? this.options[t] : o[t]), setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t).on("keydown.bs.carousel", e.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(e) {
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.to = function(t) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, n) {
        var i = this.$element.find(".item.active"),
            r = n || i[t](),
            o = this.interval,
            a = "next" == t ? "left" : "right",
            s = "next" == t ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[s]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = e.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, i.addClass(a), r.addClass(a), i.one("bsTransitionEnd", function() {
                r.removeClass([t, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, r = e(this),
            o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = e.extend({}, o.data(), r.data()),
                s = r.attr("data-slide-to");
            s && (a.interval = !1), t.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.collapse"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            !r && o.toggle && "show" == t && (t = !t), r || i.data("bs.collapse", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = e.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var r = i.data("bs.collapse");
                    if (r && r.transitioning) return;
                    t.call(i, "hide"), r || i.data("bs.collapse", null)
                }
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return a.call(this);
                var s = e.camelCase(["scroll", o].join("-"));
                this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = e.fn.collapse;
    e.fn.collapse = t, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, r = e(this),
            o = r.attr("data-target") || n.preventDefault() || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            a = e(o),
            s = a.data("bs.collapse"),
            l = s ? "toggle" : r.data(),
            u = r.attr("data-parent"),
            c = u && e(u);
        s && s.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), t.call(a, l)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        t && 3 === t.which || (e(r).remove(), e(o).each(function() {
            var i = n(e(this)),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        }))
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.2.0", a.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r),
                a = o.hasClass("open");
            if (t(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                r.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i),
                    a = r.hasClass("open");
                if (!a || a && 27 == t.keyCode) return 27 == t.which && r.find(o).trigger("focus"), i.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = r.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == t.keyCode && u > 0 && u--, 40 == t.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', a.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var r = e(this),
                o = r.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](i) : a.show && o.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var n = this,
            i = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && i;
            if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
        } else t && t()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            r = i.attr("href"),
            o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (r || "destroy" != t) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var n = e.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !n) return;
            var i = this,
                r = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                l = s.test(a);
            l && (a = a.replace(s, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                c = r[0].offsetWidth,
                d = r[0].offsetHeight;
            if (l) {
                var f = a,
                    h = this.$element.parent(),
                    p = this.getPosition(h);
                a = "bottom" == a && u.top + u.height + d - p.scroll > p.height ? "top" : "top" == a && u.top - p.scroll - d < 0 ? "bottom" : "right" == a && u.right + c > p.width ? "left" : "left" == a && u.left - c < p.left ? "right" : a, r.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, c, d);
            this.applyPlacement(m, a);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top = t.top + a, t.left = t.left + s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != o && (t.top = t.top + o - u);
        var c = this.getViewportAdjustedDelta(n, t, l, u);
        c.left ? t.left += c.left : t.top += c.top;
        var d = c.left ? 2 * c.left - r + l : 2 * c.top - o + u,
            f = c.left ? "left" : "top",
            h = c.left ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(d, i[0][h], f)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            r = e.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName;
        return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: i ? e(window).width() : t.outerWidth(),
            height: i ? e(window).height() : t.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : t.offset())
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll,
                l = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var u = t.left - o,
                c = t.left + o + n;
            u < a.left ? r.left = a.left - u : c > a.width && (r.left = a.left + a.width - c)
        }
        return r
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof t && t;
            (r || "destroy" != t) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        var r = e.proxy(this.process, this);
        this.$body = e("body"), this.$scrollElement = e(e(n).is("body") ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }
    t.VERSION = "3.2.0", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = "offset",
            n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = e(this),
                r = i.data("target") || i.attr("href"),
                o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [
                [o[t]().top + n, r]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t <= r[0]) return a != (e = o[0]) && this.activate(e);
        for (e = r.length; e--;) a != o[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: r
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var o = n.find("> .active"),
            a = i && e.support.transition && o.hasClass("fade");
        a ? o.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), o.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), t.call(e(this), "show")
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = e(document).height(),
                i = this.$target.scrollTop(),
                r = this.$element.offset(),
                o = this.options.offset,
                a = o.top,
                s = o.bottom;
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= t - s ? "bottom" : null != a && a >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = e.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(e.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: t - this.$element.height() - s
                }))
            }
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery);
