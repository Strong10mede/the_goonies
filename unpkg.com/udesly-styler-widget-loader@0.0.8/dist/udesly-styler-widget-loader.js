/*! 
Udesly Styler Widget Loader v0.0.8
udesly-styler-widget-loader.js

Copyright (c) 2018-present, Eclipse srl

This source code is licensed under the MIT license
More details on Udesly.com
*/
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.UdeslyStylerWidgetLoader = e() : t.UdeslyStylerWidgetLoader = e()
}(window, function() {
    return function(t) {
        var e = {};

        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) r.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 3)
    }([function(t, e, r) {
        t.exports = r(7)
    }, function(t, e) {
        function r(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        t.exports = function(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new Promise(function(o, i) {
                    var a = t.apply(e, n);

                    function c(t) {
                        r(a, o, i, c, u, "next", t)
                    }

                    function u(t) {
                        r(a, o, i, c, u, "throw", t)
                    }
                    c(void 0)
                })
            }
        }
    }, function(t, e, r) {
        var n = r(4),
            o = r(5),
            i = r(6);
        t.exports = function(t) {
            return n(t) || o(t) || i()
        }
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "loadWidget", function() {
            return p
        });
        var n = r(2),
            o = r.n(n),
            i = r(0),
            a = r.n(i),
            c = r(1),
            u = r.n(c),
            s = function(t) {
                var e = t.src,
                    r = t.id;
                return new Promise(function(t, n) {
                    if (document.getElementById("scriptId")) var o = setInterval(function() {
                        window[r] && (clearInterval(o), t(!0))
                    }, 50);
                    else {
                        var i = document.createElement("script");
                        i.src = e, i.id = r, document.body.appendChild(i), i.onload = function() {
                            t(!0)
                        }, i.onerror = function(t) {
                            n(t)
                        }
                    }
                })
            },
            f = function() {
                var t = u()(a.a.mark(function t(e) {
                    var r, n;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.length) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", !0);
                            case 2:
                                return r = [], t.next = 5, Promise.all(e.map(function() {
                                    var t = u()(a.a.mark(function t(e) {
                                        return a.a.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, s(e);
                                                case 3:
                                                    r.push(!0), t.next = 9;
                                                    break;
                                                case 6:
                                                    t.prev = 6, t.t0 = t.catch(0), r.push(!1);
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t, this, [
                                            [0, 6]
                                        ])
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 5:
                                return n = r.reduce(function(t, e) {
                                    return t && e
                                }), t.abrupt("return", n);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            l = function() {
                var t = u()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", f([{
                                    src: "https://unpkg.com/react@16/umd/react.production.min.js",
                                    id: "React"
                                }, {
                                    src: "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
                                    id: "ReactDOM"
                                }]));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            p = function() {
                var t = u()(a.a.mark(function t(e) {
                    var r, n, i, c, u, s;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, l();
                            case 2:
                                if (r = document.body.querySelector('[data-widget-id="'.concat(e, '"]'))) {
                                    t.next = 5;
                                    break
                                }
                                throw new Error("Invalid widget ID");
                            case 5:
                                return n = JSON.parse(r.innerHTML), i = {
                                    src: n.widget.url,
                                    id: n.widget.name
                                }, t.next = 9, f(o()(n.dependencies).concat([i]));
                            case 9:
                                if (t.sent) {
                                    t.next = 12;
                                    break
                                }
                                throw new Error("Error loading dependencies");
                            case 12:
                                if ((c = document.createElement("div")).id = e, r.parentNode.insertBefore(c, r.nextSibling), u = window[n.widget.name]) {
                                    t.next = 18;
                                    break
                                }
                                throw new Error("Widget needs to be a umd module");
                            case 18:
                                if (s = u.default) {
                                    t.next = 21;
                                    break
                                }
                                throw new Error("Widget needs mount method");
                            case 21:
                                ReactDOM.render(React.createElement(s, {
                                    widgetProps: n.widgetProps,
                                    widgetStyleProps: n.widgetStyleProps,
                                    "data-widget": e
                                }, null), c), c.parentElement.setAttribute("data-widget", e), c.replaceWith(c.firstChild), r.remove();
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
    }, function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                return r
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }
    }, function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function(t, e, r) {
        var n = function() {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            o = n.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),
            i = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, t.exports = r(8), o) n.regeneratorRuntime = i;
        else try {
            delete n.regeneratorRuntime
        } catch (t) {
            n.regeneratorRuntime = void 0
        }
    }, function(t, e) {
        ! function(e) {
            "use strict";
            var r, n = Object.prototype,
                o = n.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                c = i.asyncIterator || "@@asyncIterator",
                u = i.toStringTag || "@@toStringTag",
                s = "object" == typeof t,
                f = e.regeneratorRuntime;
            if (f) s && (t.exports = f);
            else {
                (f = e.regeneratorRuntime = s ? t.exports : {}).wrap = x;
                var l = "suspendedStart",
                    p = "suspendedYield",
                    h = "executing",
                    d = "completed",
                    y = {},
                    v = {};
                v[a] = function() {
                    return this
                };
                var m = Object.getPrototypeOf,
                    g = m && m(m(N([])));
                g && g !== n && o.call(g, a) && (v = g);
                var w = j.prototype = E.prototype = Object.create(v);
                L.prototype = w.constructor = j, j.constructor = L, j[u] = L.displayName = "GeneratorFunction", f.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === L || "GeneratorFunction" === (e.displayName || e.name))
                }, f.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, j) : (t.__proto__ = j, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(w), t
                }, f.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, O(P.prototype), P.prototype[c] = function() {
                    return this
                }, f.AsyncIterator = P, f.async = function(t, e, r, n) {
                    var o = new P(x(t, e, r, n));
                    return f.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                        return t.done ? t.value : o.next()
                    })
                }, O(w), w[u] = "Generator", w[a] = function() {
                    return this
                }, w.toString = function() {
                    return "[object Generator]"
                }, f.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, f.values = N, R.prototype = {
                    constructor: R,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, o) {
                            return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o
                        }
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var a = this.tryEntries[i],
                                c = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var u = o.call(a, "catchLoc"),
                                    s = o.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), y
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = r), y
                    }
                }
            }

            function x(t, e, r, n) {
                var o, i, a, c, u = e && e.prototype instanceof E ? e : E,
                    s = Object.create(u.prototype),
                    f = new R(n || []);
                return s._invoke = (o = t, i = r, a = f, c = l, function(t, e) {
                    if (c === h) throw new Error("Generator is already running");
                    if (c === d) {
                        if ("throw" === t) throw e;
                        return I()
                    }
                    for (a.method = t, a.arg = e;;) {
                        var r = a.delegate;
                        if (r) {
                            var n = _(r, a);
                            if (n) {
                                if (n === y) continue;
                                return n
                            }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if (c === l) throw c = d, a.arg;
                            a.dispatchException(a.arg)
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        c = h;
                        var u = b(o, i, a);
                        if ("normal" === u.type) {
                            if (c = a.done ? d : p, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: a.done
                            }
                        }
                        "throw" === u.type && (c = d, a.method = "throw", a.arg = u.arg)
                    }
                }), s
            }

            function b(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function E() {}

            function L() {}

            function j() {}

            function O(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function P(t) {
                var e;
                this._invoke = function(r, n) {
                    function i() {
                        return new Promise(function(e, i) {
                            ! function e(r, n, i, a) {
                                var c = b(t[r], t, n);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        s = u.value;
                                    return s && "object" == typeof s && o.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                                        e("next", t, i, a)
                                    }, function(t) {
                                        e("throw", t, i, a)
                                    }) : Promise.resolve(s).then(function(t) {
                                        u.value = t, i(u)
                                    }, function(t) {
                                        return e("throw", t, i, a)
                                    })
                                }
                                a(c.arg)
                            }(r, n, e, i)
                        })
                    }
                    return e = e ? e.then(i, i) : i()
                }
            }

            function _(t, e) {
                var n = t.iterator[e.method];
                if (n === r) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = r, _(t, e), "throw" === e.method)) return y;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var o = b(n, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, y;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, y) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
            }

            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function S(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function R(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(k, this), this.reset(!0)
            }

            function N(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            i = function e() {
                                for (; ++n < t.length;)
                                    if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = r, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: I
                }
            }

            function I() {
                return {
                    value: r,
                    done: !0
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }])
});