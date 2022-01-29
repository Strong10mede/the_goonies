/*!
     Udesly Count Up Widget v1.0.0
     widget.js
     
     Copyright (c) 2018-present, Eclipse srl
     
     This source code is licensed under the MIT license
     
     */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("React")) : "function" == typeof define && define.amd ? define(["React"], t) : "object" == typeof exports ? exports.UdeslyCountUp = t(require("React")) : e.UdeslyCountUp = t(e.React)
}(window, function(e) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 8)
    }([function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }
        var a = r(n(2)),
            o = r(n(3)),
            i = n(0),
            s = r(i),
            u = r(n(6));

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var m = function(e) {
            function t() {
                var e, n, r, o;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var i = arguments.length, c = new Array(i), f = 0; f < i; f++) c[f] = arguments[f];
                return r = this, o = (e = l(t)).call.apply(e, [this].concat(c)), n = !o || "object" != typeof o && "function" != typeof o ? d(r) : o, p(d(d(n)), "createInstance", function() {
                    "function" == typeof n.props.children && u(n.containerRef.current && n.containerRef.current instanceof HTMLElement, 'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.');
                    var e = n.props,
                        t = e.decimal,
                        r = e.decimals,
                        o = e.duration,
                        i = e.easingFn,
                        s = e.end,
                        c = e.formattingFn,
                        p = e.prefix,
                        l = e.separator,
                        f = e.start,
                        d = e.suffix,
                        m = e.useEasing;
                    return new a(n.containerRef.current, f, s, r, o, {
                        decimal: t,
                        easingFn: i,
                        formattingFn: c,
                        separator: l,
                        prefix: p,
                        suffix: d,
                        useEasing: m,
                        useGrouping: !!l
                    })
                }), p(d(d(n)), "pauseResume", function() {
                    var e = d(d(n)),
                        t = e.reset,
                        r = e.restart,
                        a = e.update,
                        o = n.props.onPauseResume;
                    n.instance.pauseResume(), o({
                        reset: t,
                        start: r,
                        update: a
                    })
                }), p(d(d(n)), "reset", function() {
                    var e = d(d(n)),
                        t = e.pauseResume,
                        r = e.restart,
                        a = e.update,
                        o = n.props.onReset;
                    n.instance.reset(), o({
                        pauseResume: t,
                        start: r,
                        update: a
                    })
                }), p(d(d(n)), "restart", function() {
                    n.reset(), n.start()
                }), p(d(d(n)), "start", function() {
                    var e = d(d(n)),
                        t = e.pauseResume,
                        r = e.reset,
                        a = e.restart,
                        o = e.update,
                        i = n.props,
                        s = i.delay,
                        u = i.onEnd,
                        c = i.onStart,
                        p = function() {
                            return n.instance.start(function() {
                                return u({
                                    pauseResume: t,
                                    reset: r,
                                    start: a,
                                    update: o
                                })
                            })
                        };
                    s > 0 ? setTimeout(p, 1e3 * s) : p(), c({
                        pauseResume: t,
                        reset: r,
                        update: o
                    })
                }), p(d(d(n)), "update", function(e) {
                    var t = d(d(n)),
                        r = t.pauseResume,
                        a = t.reset,
                        o = t.restart,
                        i = n.props.onUpdate;
                    n.instance.update(e), i({
                        pauseResume: r,
                        reset: a,
                        start: o
                    })
                }), p(d(d(n)), "containerRef", s.createRef()), n
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(t, i.Component), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.delay;
                    this.instance = this.createInstance(), "function" == typeof t && 0 !== n || this.start()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props.duration !== e.duration || this.props.end !== e.end || this.props.start !== e.start || this.props.redraw
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.duration === e.duration && this.props.start === e.start || (this.instance = this.createInstance(), this.start()), this.props.end !== e.end && (this.instance.reset(), this.instance.update(this.props.end))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className,
                        r = e.style,
                        a = this.containerRef,
                        o = this.pauseResume,
                        i = this.reset,
                        u = this.restart,
                        c = this.update;
                    return "function" == typeof t ? t({
                        countUpRef: a,
                        pauseResume: o,
                        reset: i,
                        start: u,
                        update: c
                    }) : s.createElement("span", {
                        className: n,
                        ref: a,
                        style: r
                    })
                }
            }]) && c(n.prototype, r), o && c(n, o), t
        }();
        p(m, "propTypes", {
            decimal: o.string,
            decimals: o.number,
            delay: o.number,
            easingFn: o.func,
            end: o.number.isRequired,
            formattingFn: o.func,
            onEnd: o.func,
            onStart: o.func,
            prefix: o.string,
            redraw: o.bool,
            separator: o.string,
            start: o.number,
            suffix: o.string,
            style: o.object,
            useEasing: o.bool
        }), p(m, "defaultProps", {
            decimal: ".",
            decimals: 0,
            delay: null,
            duration: null,
            easingFn: null,
            formattingFn: null,
            onEnd: function() {},
            onPauseResume: function() {},
            onReset: function() {},
            onStart: function() {},
            onUpdate: function() {},
            prefix: "",
            redraw: !1,
            separator: "",
            start: 0,
            suffix: "",
            style: void 0,
            useEasing: !0
        }), e.exports = m
    }, function(e, t, n) {
        var r, a;
        void 0 === (a = "function" == typeof(r = function(e, t, n) {
            return function(e, t, n, r, a, o) {
                function i(e) {
                    return "number" == typeof e && !isNaN(e)
                }
                var s = this;
                if (s.version = function() {
                        return "1.9.3"
                    }, s.options = {
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: ".",
                        easingFn: function(e, t, n, r) {
                            return n * (1 - Math.pow(2, -10 * e / r)) * 1024 / 1023 + t
                        },
                        formattingFn: function(e) {
                            var t, n, r, a, o, i, u = e < 0;
                            if (e = Math.abs(e).toFixed(s.decimals), t = (e += "").split("."), n = t[0], r = t.length > 1 ? s.options.decimal + t[1] : "", s.options.useGrouping) {
                                for (a = "", o = 0, i = n.length; o < i; ++o) 0 !== o && o % 3 == 0 && (a = s.options.separator + a), a = n[i - o - 1] + a;
                                n = a
                            }
                            return s.options.numerals.length && (n = n.replace(/[0-9]/g, function(e) {
                                return s.options.numerals[+e]
                            }), r = r.replace(/[0-9]/g, function(e) {
                                return s.options.numerals[+e]
                            })), (u ? "-" : "") + s.options.prefix + n + r + s.options.suffix
                        },
                        prefix: "",
                        suffix: "",
                        numerals: []
                    }, o && "object" == typeof o)
                    for (var u in s.options) o.hasOwnProperty(u) && null !== o[u] && (s.options[u] = o[u]);
                "" === s.options.separator ? s.options.useGrouping = !1 : s.options.separator = "" + s.options.separator;
                for (var c = 0, p = ["webkit", "moz", "ms", "o"], l = 0; l < p.length && !window.requestAnimationFrame; ++l) window.requestAnimationFrame = window[p[l] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[l] + "CancelAnimationFrame"] || window[p[l] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(),
                        r = Math.max(0, 16 - (n - c)),
                        a = window.setTimeout(function() {
                            e(n + r)
                        }, r);
                    return c = n + r, a
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                }), s.initialize = function() {
                    return !(!s.initialized && (s.error = "", s.d = "string" == typeof e ? document.getElementById(e) : e, s.d ? (s.startVal = Number(t), s.endVal = Number(n), i(s.startVal) && i(s.endVal) ? (s.decimals = Math.max(0, r || 0), s.dec = Math.pow(10, s.decimals), s.duration = 1e3 * Number(a) || 2e3, s.countDown = s.startVal > s.endVal, s.frameVal = s.startVal, s.initialized = !0, 0) : (s.error = "[CountUp] startVal (" + t + ") or endVal (" + n + ") is not a number", 1)) : (s.error = "[CountUp] target is null or undefined", 1)))
                }, s.printValue = function(e) {
                    var t = s.options.formattingFn(e);
                    "INPUT" === s.d.tagName ? this.d.value = t : "text" === s.d.tagName || "tspan" === s.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
                }, s.count = function(e) {
                    s.startTime || (s.startTime = e), s.timestamp = e;
                    var t = e - s.startTime;
                    s.remaining = s.duration - t, s.options.useEasing ? s.countDown ? s.frameVal = s.startVal - s.options.easingFn(t, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.options.easingFn(t, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (t / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (t / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Math.round(s.frameVal * s.dec) / s.dec, s.printValue(s.frameVal), t < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.callback && s.callback()
                }, s.start = function(e) {
                    s.initialize() && (s.callback = e, s.rAF = requestAnimationFrame(s.count))
                }, s.pauseResume = function() {
                    s.paused ? (s.paused = !1, delete s.startTime, s.duration = s.remaining, s.startVal = s.frameVal, requestAnimationFrame(s.count)) : (s.paused = !0, cancelAnimationFrame(s.rAF))
                }, s.reset = function() {
                    s.paused = !1, delete s.startTime, s.initialized = !1, s.initialize() && (cancelAnimationFrame(s.rAF), s.printValue(s.startVal))
                }, s.update = function(e) {
                    if (s.initialize()) {
                        if (!i(e = Number(e))) return void(s.error = "[CountUp] update() - new endVal is not a number: " + e);
                        s.error = "", e !== s.frameVal && (cancelAnimationFrame(s.rAF), s.paused = !1, delete s.startTime, s.startVal = s.frameVal, s.endVal = e, s.countDown = s.startVal > s.endVal, s.rAF = requestAnimationFrame(s.count))
                    }
                }, s.initialize() && s.printValue(s.startVal)
            }
        }) ? r.call(t, n, t, e) : r) || (e.exports = a)
    }, function(e, t, n) {
        e.exports = n(4)()
    }, function(e, t, n) {
        "use strict";
        var r = n(5);

        function a() {}
        e.exports = function() {
            function e(e, t, n, a, o, i) {
                if (i !== r) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = a, n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        "use strict";
        var r = function() {};
        e.exports = r
    }, , function(e, t, n) {
        "use strict";
        n.r(t);
        var r, a = n(0),
            o = n.n(a),
            i = n(1),
            s = n.n(i),
            u = (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            c = function() {
                return (c = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            },
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.widgetProps,
                        n = e.widgetStyleProps;
                    return o.a.createElement("div", {
                        className: "udesly-countup"
                    }, o.a.createElement(s.a, c({}, t, n)))
                }, t
            }(a.Component);
        t.default = p
    }])
});