(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], Array(506).concat([function(e, t, n) {
        var i = n(39),
            o = n(137);
        e.exports = function() {
            return new i.SafeString(o.handlebarHelper.apply(this, arguments))
        }
    }, function(e, t, n) {
        var i = n(30),
            o = n(519);

        function s(e, t) {
            return i.t(e, t.hash, {
                comment: t.hash._comment,
                context: t.hash._context
            })
        }

        function r(e) {
            return i.t(o.cleanBlockText(e.fn()), e.hash, {
                comment: e.hash._comment,
                context: e.hash._context
            })
        }
        e.exports = function() {
            var e = arguments.length;
            if (2 === e) return s.apply(this, arguments);
            if (1 === e) return r.apply(this, arguments);
            throw new Error("Invalid signature to t helper, expected 1 or 2 arguments, got " + e)
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(18),
            s = n(31),
            r = n(138);
        e.exports = new o({
            defaults: {
                isAudible: !1,
                isUser: !1,
                isSound: !1,
                isPlaylist: !1,
                isPrivate: function() {
                    return this.isAudible && this.model.isPrivate()
                },
                isShareable: function() {
                    return this.isAudible && this.model.isShareable()
                },
                isLikeable: function() {
                    return this.isAudible && !this.model.isPrivate()
                },
                isBlocked: function() {
                    return this.isSound && this.model.isBlocked()
                },
                isBuyable: function() {
                    return !(!this.isAudible || !this.model.get("purchase_url"))
                },
                isDownloadable: function() {
                    return !(!this.isAudible || !this.model.get("downloadable"))
                },
                getShareURL: function() {
                    var e = this.model.get("permalink_url");
                    switch (this.options.resource_type) {
                        case s.USER_SOUNDS:
                            e += "/tracks";
                            break;
                        case s.USER_FAVORITES:
                            e += "/likes"
                    }
                    return this.isAudible && this.isPrivate() && (e += "/" + this.model.get("secret_token")), e
                }
            },
            before: {
                setup: function(e) {
                    if (!this.model) {
                        var t = r.getResourceTypeInfo(e.resource_type);
                        0, this.ModelClass = t.ModelClass, i.extend(this, t.props), this.model = this.getModel(e.resource_id, e.resource_type)
                    }
                }
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(131),
                s = n(5),
                r = n(11),
                a = n(18),
                l = new(n(10).Model),
                u = t(window);
            e.exports = new a({
                before: {
                    setup: function() {
                        c.call(this, !0)
                    },
                    renderDecorate: function() {
                        this.whenInserted().done(d.bind(this))
                    },
                    dispose: function() {
                        c.call(this, !1)
                    }
                },
                defaults: {
                    onWindowSizeChange: function() {},
                    getWindowHeight: function() {
                        return l.has("height") ? l.get("height") : u.height()
                    },
                    getWindowWidth: function() {
                        return l.has("width") ? l.get("width") : u.width()
                    },
                    getWindowSize: f
                }
            });

            function c(e) {
                var t = e ? "on" : "off";
                l[t]("change", p, this), r[t]("layout:change", d, this)
            }

            function d() {
                h(), p.call(this)
            }

            function h() {
                l.set({
                    width: u.width(),
                    height: u.height()
                })
            }

            function p() {
                m.call(this), this.onWindowSizeChange(f(), {
                    width: this.getWindowWidth(),
                    height: this.getWindowHeight()
                })
            }

            function m() {
                var e, t = f();
                Object.keys(o).forEach((function(n) {
                    (e = o[n]) !== o.DEFAULT && this.toggleState("state-" + e, e === t)
                }), this)
            }

            function f() {
                if (!s.get("router").layoutName) return o.DEFAULT;
                var e = l.get("width");
                return e <= 250 ? o.SMALL : e < 400 ? o.MEDIUM : o.DEFAULT
            }
            u.on("resize", i.debounce(h, 50))
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(2),
            o = n(513),
            s = n(508),
            r = n(38);

        function a(e) {
            return o.urlFrom(e.model.attributes, e.options.size)
        }
        e.exports = r.extend(s, {
            template: n(603),
            css: n(604),
            className: "image",
            defaults: {
                alt: "",
                size: 50,
                stretch: !1
            },
            setup: function() {
                var e = this.model,
                    t = this.model;
                t.imageAttribute, this.requiredAttributes = ["kind", t.imageAttribute], this.toggleState("fadeIn", !0), this.$el.addClass(["sc-artwork", o.getPlaceholderClass(this.model.id), e.stretch ? "image-full" : ""].join(" "))
            },
            renderDecorate: function() {
                var e = a(this);
                e && !o.isDefaultImage(e) ? this.addDeferred(o.load(e).done(function() {
                    this.toggleState("fadeIn", !1), o.flagCachedImage(e)
                }.bind(this))) : this.toggleState("fadeIn", !1)
            },
            getTemplateData: function(e) {
                return i.extend(e, {
                    size: this.options.size,
                    placeholderUrl: o.getPlaceholderUrl(a(this), this.options.size)
                })
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(10),
                s = e.exports = i.extend({}, o.Events);

            function r(e, t) {
                var n = t + "d",
                    o = "resize" === e ? function(e) {
                        var t = window.innerWidth,
                            n = window.innerHeight,
                            i = s.trigger.bind(s, "resize:x:" + e),
                            o = s.trigger.bind(s, "resize:y:" + e),
                            r = s.trigger.bind(s, "resize:" + e);
                        return function(e) {
                            var s = window.innerWidth,
                                a = window.innerHeight;
                            s !== t && i(e), a !== n && o(e), r(e), n = a, t = s
                        }
                    }(n) : s.trigger.bind(s, e + ":" + n);
                return i[t](o, 200)
            }
            t(window).on("resize", r("resize", "debounce")).on("resize", r("resize", "throttle")).on("scroll", r("scroll", "debounce")).on("scroll", r("scroll", "throttle"))
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(31),
            o = n(136),
            s = n(50);
        (e.exports = function(e, t) {
            var n = e.resource_type;
            return delete e.resource_type, n === i.PLAYLIST ? new o(e, t) : new s(e, t)
        }).getClass = function(e) {
            return e.resource_type === i.PLAYLIST ? o : s
        }
    }, function(e, t, n) {
        (function(t) {
            var i, o, s, r = n(588),
                a = n(2),
                l = n(40),
                u = n(52),
                c = n(53),
                d = n(590),
                h = /default/,
                p = /^.*\/(\w+)-([-a-z0-9]+)-([a-z0-9]+)\.(jpg|png|gif).*$/i,
                m = {},
                f = [
                    [20, "t20x20"],
                    [50, "t50x50"],
                    [120, "t120x120"],
                    [200, "t200x200"],
                    [500, "t500x500"]
                ],
                g = ["alt", "class", "height", "src", "title", "width"],
                v = {
                    whitelist: ["style", "title", "class", "aria-label", "aria-role", "aria-hidden"],
                    closingTag: !0
                },
                _ = {
                    cloud: {
                        40: n(591),
                        50: n(592),
                        80: n(593),
                        120: n(594),
                        200: n(595),
                        500: n(596)
                    },
                    user: {
                        40: n(597),
                        50: n(598),
                        80: n(599),
                        120: n(600),
                        200: n(601),
                        500: n(602)
                    }
                },
                b = e.exports = {
                    load: function(e, n) {
                        var i = new Image,
                            o = t.Deferred();
                        return t(i).on("load", (function() {
                            o.resolve(i)
                        })).on("error", (function() {
                            o.reject(i)
                        })), n && c.corsImg && (i.crossOrigin = !0), i.src = e, o
                    },
                    isLoaded: function(e) {
                        return !!(e.complete && e.width && e.height)
                    },
                    markup: function(e, t) {
                        var n, i, o, s;
                        return e && e.attributes && (e = e.attributes), n = t.src || this.urlFrom(e, t.size), n = this.isDefaultImage(n) ? null : "url(" + n + ")", s = t.placeholderId || e, o = t.stretch ? "100%" : t.size + "px", i = a.extend({
                            style: {
                                "background-image": n,
                                width: o,
                                height: o
                            },
                            class: "sc-artwork " + this.getPlaceholderClass(s) + " " + (t.class || ""),
                            "aria-label": this.getAltText(e),
                            "aria-role": "img"
                        }, a.omit(t, "stretch", "size", "class")), d.getMarkup("span", i, v)
                    },
                    getMarkup: function(e) {
                        var t, n = [];
                        return a.each(e, (function(e, t) {
                            -1 !== a.indexOf(g, t) && n.push(t + '="' + e + '"')
                        })), (t = y(e.src)) && x(t), "<img " + n.join(" ") + ">"
                    },
                    getAltText: function(e) {
                        return e.username ? r.get(e, !0) + " avatar" : r.get(e)
                    },
                    getPlaceholderUrl: function(e, t) {
                        var n, i, o, s, r;
                        if (o = y(b.setFormat(e, t))) {
                            if (n = o.key, m[o.type] || (m[o.type] = {}), m[o.type][n])
                                for (i = a.find(f, (function(e, n) {
                                        return r = n, t <= e[0]
                                    })); r >= 0;) {
                                    if (m[o.type][n] & 1 << r) {
                                        s = f[r];
                                        break
                                    }--r
                                }
                            if (i && s === i) return !1;
                            if (s) return b.setFormat(e, s[0])
                        }
                        return null
                    },
                    urlFrom: function(e, t) {
                        var n = e && (e.artwork_url || e.avatar_url || e.user && e.user.avatar_url) || "";
                        return t && u.isHiDPI && (t *= 2), b.isDefaultImage(n) ? n : (n = w(n).replace(/^https?\:\/\//, "//"), t ? b.setFormat(n, t) : n)
                    },
                    isDefaultImage: function(e) {
                        return !e || h.test(e)
                    },
                    getDefaultImage: function(e, t) {
                        return (_[e] || _.cloud)[i(t)]
                    },
                    setFormat: function(e, t, n) {
                        if (this.isDefaultImage(e)) return "";
                        p.lastIndex = 0;
                        var i = p.exec(e);
                        if (i) {
                            var o = i[1],
                                s = i[3],
                                r = function(e, t) {
                                    var n = a.find(f, (function(e) {
                                        return e[0] >= t
                                    })) || a.last(f);
                                    return "t20x20" === n[1] && "artworks" === e ? "tiny" : n[1]
                                }(o, t);
                            return r && (e = e.replace(s, r)), n ? w(e) : e
                        }
                        return e
                    },
                    flagCachedImage: function(e) {
                        var t = y(e);
                        t && x(t)
                    },
                    getMainColor: function(e, t) {
                        var n, i, o, s = e.data,
                            r = s.length,
                            a = {},
                            u = 0,
                            c = r / 4;
                        for (t = l.clamp(t || 0, 1, c), o = 0; o < r; o += 4 * t) a[i = (i = [s[o], s[o + 1], s[o + 2]]).join(",")] = a.hasOwnProperty(i) ? ++a[i] : 1;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                if (a[i] < u) continue;
                                u = a[i], n = i
                            }
                        return n ? n.split(",").map((function(e) {
                            return parseInt(e, 10)
                        })) : null
                    },
                    getPlaceholderClass: function(e) {
                        return "sc-artwork-placeholder-" + ("number" == typeof e ? e : e && e.id || 0) % 12
                    }
                };

            function y(e) {
                var t, n, i;
                return p.lastIndex = 0, t = e.replace(p, (function(e, t, o, s, r) {
                    return a.find(f, (function(e, t) {
                        if (e[1] === r) return n = t, !0
                    })), i = t, o
                })), i ? {
                    index: n,
                    key: parseInt(t, 10),
                    type: i
                } : null
            }

            function w(e) {
                p.lastIndex = 0;
                var t, n = p.exec(e);
                return n && 1 !== (t = n[3].charCodeAt(0) % 4 + 1) && (e = e.replace("//i1.", "//i" + t + ".")), e
            }

            function x(e) {
                m[e.type] || (m[e.type] = {}), m[e.type][e.key] |= 1 << e.index
            }(s = Object.keys(_.cloud)).sort((function(e, t) {
                return e - t
            })), o = a.last(s), i = a.memoize((function(e) {
                var t, n;
                for (t = 0; n = s[t]; ++t)
                    if (n >= e) return n;
                return o
            }))
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(2),
            o = n(628);
        e.exports = {
            getConfig: function(e) {
                return o._config[e]
            },
            gradient: function(e, t, n, i, o) {
                i = i || 1, null == o && (o = 1);
                var a = r(n),
                    l = e.canvas.height / i,
                    u = a[t];
                return 1 !== o && (u = u.map((function(e) {
                    var t = 3 === e.length ? e[2] : 1;
                    return [e[0], e[1], t * o]
                }))), u.reduce(s, e.createLinearGradient(0, 0, 0, l))
            },
            getColor: function(e, t) {
                return r(t)[e]
            }
        };

        function s(e, t) {
            var n = t[0],
                i = "rgba(" + t[1] + "," + (3 === t.length ? t[2] : 1) + ")";
            return e.addColorStop(n, i), e
        }

        function r(e) {
            return i.result(o, e)
        }
    }, function(e, t, n) {
        var i = n(11),
            o = n(699),
            s = n(700),
            r = n(51),
            a = n(30),
            l = n(508),
            u = n(31),
            c = n(7),
            d = n(38);
        e.exports = d.extend(l, {
            className: "shareIcon",
            css: n(701),
            template: n(703),
            defaults: {
                popupSize: null,
                serviceKey: null,
                serviceName: null,
                campaignName: "social_sharing",
                opensPopup: !0
            },
            events: {
                "click .sc-social-logo": "onIconClick"
            },
            onIconClick: function(e) {
                var t = this.options,
                    n = t.popupSize;
                t.opensPopup && (e.preventDefault(), o.centered(e.target.getAttribute("href"), n[0], n[1])), i.trigger(r.UI.SHARE_ICON_CLICKED, {
                    model: this.model,
                    shareIconType: this.options.serviceKey
                })
            },
            getHref: function(e) {
                0
            },
            getTemplateData: function() {
                var e = this.options;
                return {
                    href: this.getHref(h.call(this)),
                    key: e.serviceKey,
                    title: a.t("Share to [[socialnetwork]]", {
                        socialnetwork: e.serviceName
                    })
                }
            }
        });

        function h() {
            return {
                tags: f.call(this),
                share_url: p.call(this),
                share_title: m.call(this)
            }
        }

        function p() {
            var e = this.getShareURL(),
                t = this.options;
            return c.stringify({
                query: {
                    utm_source: t.serviceName || "soundcloud",
                    utm_campaign: t.campaignName,
                    utm_medium: "widget",
                    utm_content: e
                }
            }, e)
        }

        function m() {
            var e = [],
                t = this.model.toJSON();
            switch (this.options.resource_type) {
                case u.SOUND:
                case u.PLAYLIST:
                    e = a.t("[[title]] by [[username]]", {
                        title: t.title,
                        username: t.user.username
                    });
                    break;
                case u.USER_FAVORITES:
                    e = a.t("Liked tracks of [[username]]", {
                        username: t.username
                    });
                    break;
                case u.USER_SOUNDS:
                    e = a.t("Latest tracks by [[username]]", {
                        username: t.username
                    });
                    break;
                case u.GROUP_SOUNDS:
                    e = a.t("Tracks from [[group]]", {
                        group: t.username
                    })
            }
            return e
        }

        function f() {
            var e;
            return this.isAudible && (e = this.model.toJSON(), encodeURIComponent(["SoundCloud", e.user.username].concat(s.extract(e).slice(0, 4)).join(","))), ""
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(131),
                s = n(509),
                r = n(18);
            e.exports = new r({
                applyTo: function(e) {
                    s.applyTo(e), e.defaults = i.extend({
                        size: "small",
                        text_only: !1,
                        icon_only: !0,
                        responsive: !1,
                        visual: !1
                    }, e.defaults), e.states = i.extend({
                        active: "sc-button-active",
                        selected: "sc-button-selected",
                        icon: "sc-button-icon",
                        visual: "sc-button-visual"
                    }, e.states), e.className = ["sc-button", e.className].join(" ").trim(), e.events = i.extend({}, e.events, {
                        "click.button": "onClick"
                    })
                },
                defaults: {
                    tagName: "button",
                    onClick: t.noop,
                    template: function() {
                        return ""
                    },
                    loadingTemplate: null,
                    onWindowSizeChange: a
                },
                before: {
                    setup: function(e) {
                        this.$el.attr("tabIndex", 0).addClass("sc-button-" + e.size), this.toggleState("icon", e.icon_only).toggleState("visual", e.visual), a.call(this, this.getWindowSize())
                    }
                }
            });

            function a(e) {
                this.options.responsive && this.toggleState("icon", e !== o.DEFAULT)
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(2),
            o = n(32),
            s = n(50),
            r = n(608),
            a = n(609),
            l = n(53),
            u = n(38),
            c = n(611),
            d = n(612),
            h = n(627),
            p = n(629),
            m = n(632),
            f = n(633),
            g = n(634),
            v = n(635);
        e.exports = u.extend({
            template: n(636),
            css: n(637),
            className: "waveform",
            ModelClass: s,
            requiredAttributes: ["waveform_url", "state"],
            defaults: {
                single: !0,
                upperPartHeight: .7,
                waveformStyle: "default",
                show_comments: !0,
                interactive: !0,
                darkText: !0
            },
            _commentsShowing: !1,
            states: {
                playing: "playing",
                emptyWaveform: function(e) {
                    this.$el.toggleClass("waveform__empty", e), e && this.toggleState("loaded", !0)
                },
                loaded: "loaded"
            },
            element2selector: {
                sceneElement: ".waveform__scene"
            },
            waveformData: null,
            _wisDeferred: null,
            setup: function() {
                _.call(this, "on"), this.scene = new r, this.whenReadyForLayers = o.defer(), this.layersAreInserted = !1, o.all([this.whenInserted(), c.loadWaveformDataForView(this)]).done(this.whenReadyForLayers.resolve)
            },
            dispose: function() {
                _.call(this, "off")
            },
            renderDecorate: function() {
                this.model.isProcessing() ? this.toggleState("emptyWaveform", !0) : y.call(this) && this.whenInserted().done(k.bind(this)), this.whenReadyForLayers.done(w.bind(this))
            },
            teardown: function() {
                this.scene.teardown(), this._commentsShowing = !1, this.layersAreInserted = !1
            },
            addLayer: function(e, t) {
                var n, o = new a,
                    s = o.el,
                    r = this.scene,
                    l = this.getElement("sceneElement");
                return t = t || {}, this.addSubview(o), r.addLayer(o), void 0 === t.at ? l.append(s) : (n = r.getLayers()[t.at]) ? n.$el.before(s) : l.append(s), o.initCanvasDimensions(), e.filter(i.identity).forEach(o.addNode, o), o
            },
            getModelData: function() {
                return {}
            },
            getTemplateData: function(e) {
                var t = this.model,
                    n = "sound" === t.resource_type,
                    o = t.isProcessing();
                return i.extend(e, {
                    id: t.id,
                    _resource_id: t.resource_id,
                    type: n ? "track" : "playlist",
                    isProcessing: o,
                    showComments: y.call(this),
                    upperPartHeightPercent: 100 * this.options.upperPartHeight + "%"
                })
            }
        });

        function _(e) {
            this.model[e]("play pause", b, this)
        }

        function b() {
            this.toggleState("playing", this.model.isPlaying())
        }

        function y() {
            return this.options.show_comments && "sound" === this.model.resource_type
        }

        function w() {
            if (!this.disposed && !this.layersAreInserted) {
                var e = this.options,
                    t = this.model,
                    n = e.interactive,
                    o = this.getElement("sceneElement"),
                    s = {
                        resource_type: t.resource_type,
                        resource_id: t.resource_id,
                        waveformStyle: e.waveformStyle,
                        upperPartHeight: e.upperPartHeight,
                        $eventEl: o
                    };
                this.addLayer([
                    [h, i.defaults({
                        waveformData: this.waveformData
                    }, s)],
                    [f, i.clone(s)], n && !l.touch ? [g, s] : null
                ]), n && this.addLayer([
                    [v, i.clone(s)],
                    [m, i.clone(s)]
                ]), x.call(this), this.toggleState("loaded", !0), this.layersAreInserted = !0
            }
        }

        function x() {
            var e;
            !this._commentsShowing && y.call(this) && (e = this.model, this.addLayer([
                [p, {
                    sound_id: e.id,
                    resource_id: e.resource_id,
                    waveformData: this.waveformData,
                    $eventEl: this.getElement("sceneElement")
                }]
            ], {
                at: 1
            }).setDirty(!0), this._commentsShowing = !0)
        }

        function k() {
            if (!this.subviews.commentPopover) {
                var e, t = this.model,
                    n = this.el.offsetHeight * (1 - this.options.upperPartHeight);
                (e = new d({
                    sound_id: t.id,
                    resource_id: t.resource_id,
                    darkText: this.options.darkText,
                    avatarSize: n < 20 ? 10 : 20
                })).render(), this.el.appendChild(e.el), this.addSubview(e, "commentPopover")
            }
        }
    }, function(e, t, n) {
        var i = n(18),
            o = n(50),
            s = n(560),
            r = n(40).clamp,
            a = n(514),
            l = a.getConfig("barWidth") + a.getConfig("gapWidth");
        e.exports = new i(s, {
            override: {
                ModelClass: o
            },
            merge: {
                requiredAttributes: ["duration"],
                defaults: {
                    upperPartHeight: .7,
                    waveformStyle: "default"
                }
            },
            hasUnplayableArea: function() {
                return this.getPlayablePortion() < 1
            },
            getPlayablePortion: function() {
                var e = this.model.getMediaDuration(),
                    t = this.model.getFixedDuration();
                return t <= 0 ? 1 : r(e / t, 0, 1)
            },
            getPlayableWidth: function() {
                var e = this.canvas.width,
                    t = this.getPlayablePortion();
                return 1 === t ? e : c(e * t)
            },
            getUnplayableWidth: function() {
                return this.canvas.width - this.getPlayableWidth()
            },
            insideScrubbableArea: function(e, t) {
                return this.insideTopArea(t) && this.insidePlayableArea(e, "px")
            },
            roundToBar: function(e, t) {
                return (t ? u : c)(e)
            },
            getWholeBarWidth: function() {
                return l
            },
            insidePlayableArea: function(e, t) {
                return !this.hasUnplayableArea() || ("ms" === t && (e = this.msToPx(e)), e <= this.getPlayableWidth())
            },
            insideTopArea: function(e) {
                return e < this.options.upperPartHeight * this.canvas.height
            },
            msToPx: function(e) {
                return e / this.model.getFixedDuration() * this.canvas.width
            }
        });

        function u(e) {
            return Math.ceil(e / l) * l
        }

        function c(e) {
            return e - e % l
        }
    }, function(e, t) {
        var n = /\r?\n/g,
            i = /\s+/g;
        e.exports = {
            cleanBlockText: function(e) {
                return e.trim().replace(n, " ").replace(i, " ")
            }
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(579),
                s = n(580),
                r = n(52),
                a = n(639),
                l = n(133),
                u = n(5),
                c = n(513),
                d = n(522),
                h = n(508),
                p = n(19),
                m = n(53),
                f = n(38),
                g = n(517),
                v = n(514);
            e.exports = f.extend(h, d, {
                className: "visualAudible",
                css: n(640),
                template: n(642),
                states: {
                    background: "background",
                    minimal: "minimal",
                    onlyArtwork: "onlyArtwork"
                },
                _isInsertingWaveform: null,
                events: {
                    mouseenter: function() {
                        T.call(this, !0), P.call(this, !0)
                    },
                    mouseleave: function() {
                        T.call(this, !1), P.call(this, !1)
                    },
                    "click .visualAudible__artwork, .visualAudible__footer": function(e) {
                        if (this.isBlocked()) return;
                        if (t(e.target).closest(".artworkWaveform, .waveform").length) return;
                        var n = p.getCurrentSound();
                        n && p.toggle(n, {
                            userAction: !0,
                            view: "visual-audible"
                        });
                        P.call(this, !0)
                    }
                },
                requiredAttributes: {
                    sound: ["visuals", "policy"]
                },
                setup: function(e) {
                    (this.requiredAttributes[e.resource_type] = this.requiredAttributes[e.resource_type] || []).push(this.model.imageAttribute), _.call(this, !0), this.toggleState("mobile", r.isMobile)
                },
                dispose: function() {
                    _.call(this, !1)
                },
                renderDecorate: function() {
                    var e = this.isBlocked();
                    if (this.toggleState("blocked", e), !e) {
                        var t = this.model.hasVisuals && this.model.hasVisuals();
                        k.call(this), b.call(this), t || this.correctLogoColor()
                    }
                },
                onCurrentSoundChange: function() {
                    this.isBlocked() || k.call(this)
                },
                correctColors: function() {
                    this.correctLogoColor(), k.call(this)
                },
                correctLogoColor: function() {
                    I.call(this).pipe(D.bind(this)).pipe((function(e, t) {
                        l(e).diff(t.getColor()).brightness > 190 || t.toggleAltColor()
                    }))
                },
                toggleBackgroundState: function(e) {
                    this.toggleState("background", e), this.subviews.visuals && this.subviews.visuals.toggleState("background", e)
                },
                getTemplateData: function(e) {
                    return i.extend(e, {
                        is_sound: this.isSound,
                        is_blocked: this.isBlocked(),
                        has_visuals: this.model.hasVisuals && this.model.hasVisuals()
                    })
                }
            });

            function _(e) {
                var t = e ? "on" : "off";
                p[t]("play", y, this)[t]("pause", w, this)[t]("finish", x, this)
            }

            function b() {
                var e = p.getCurrentSound(),
                    t = e && e.isPlaying();
                M.call(this, !t), this.toggleState("playing", t)
            }

            function y() {
                b.call(this), k.call(this)
            }

            function w() {
                T.call(this, !1)
            }

            function x() {
                T.call(this, !1)
            }

            function k() {
                var e = p.getCurrentSound();
                e && (this.isSound || e.audio) && A.call(this, e)
            }

            function A(e) {
                this._isInsertingWaveform || (this._isInsertingWaveform = !0, L.call(this).done(function(t) {
                    var n = this.subviews.waveform;
                    if (!n || n.model !== e || t !== this.waveformStyle && this.isPlaylist) {
                        this.waveformStyle = t;
                        var i = C.call(this, e, t),
                            s = !1;
                        i.$el.addClass("hidden g-all-transitions-200"), this.$$("waveform").append(i.render().el), o.fadeOut(n ? n.$el : this.$$("total")).progress((function(e) {
                            !s && e >= .4 && (s = !0, i.$el.removeClass("hidden"))
                        })).done(function() {
                            S.call(this, i), this._isInsertingWaveform = !1
                        }.bind(this))
                    } else this._isInsertingWaveform = !1
                }.bind(this)))
            }

            function S(e) {
                var t = this.subviews.waveform;
                t && (this.removeSubview(t), t._dispose()), this.addSubview(e, "waveform")
            }

            function C(e, t) {
                return new(this.isSound ? g : s)({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type,
                    waveformStyle: t,
                    darkText: "inverted" !== t,
                    show_comments: u.get("widgetParams").show_comments
                })
            }

            function P(e) {
                var t = E.call(this);
                this.toggleState("highlight", e), t && t.toggleState("hover", e)
            }

            function T(e) {
                var t = p.getCurrentSound(),
                    n = t && t.isPlaying(),
                    i = this.getState("background"),
                    o = this.model.hasVisuals && this.model.hasVisuals();
                n && !i && o ? this.toggleState("minimal", !e) : this.toggleState("minimal", !1)
            }

            function E() {
                var e = this.subviews.waveform;
                return e && e instanceof s && (e = e.subviews.waveform), e
            }

            function I() {
                var e = t.Deferred();
                return this.whenReady().pipe((function(e) {
                    return e.subviews.header.whenReady()
                })).pipe((function(e) {
                    return e.subviews.logo.whenReady()
                })).pipe(e.resolve), e
            }

            function D(e, n) {
                var i = t.Deferred(),
                    o = this.$$("artwork")[0],
                    s = new a({
                        width: o.offsetWidth,
                        height: o.offsetHeight
                    }),
                    r = c.urlFrom(this.model.attributes, 500);
                return c.isDefaultImage(r) ? i.resolve(l("#000").rgb(), e) : (function(e, n) {
                    var i = t.Deferred();
                    if (!m.corsImg) return i.reject();
                    return c.load(n, !0).pipe((function(t) {
                        var n = Math.max(e.width, e.height) / t.width,
                            i = t.width,
                            o = t.height,
                            s = i * n,
                            r = o * n,
                            a = (e.width - s) / 2,
                            l = (e.height - r) / 2;
                        e.drawImage(t, 0, 0, i, o, a, l, s, r)
                    })).pipe(i.resolve), i
                }(s, r).done(function() {
                    if (!this.disposed) {
                        var t, r, a = (e instanceof f ? e.el : e[0]).getBoundingClientRect(),
                            l = o.getBoundingClientRect();
                        t = s.getImageData({
                            x: Math.round(a.left - l.left),
                            y: a.top
                        }, {
                            x: Math.round(a.right - l.left),
                            y: a.bottom
                        }), r = "rgb(" + c.getMainColor(t, n).join(",") + ")", i.resolve(r, e)
                    }
                }.bind(this)), i)
            }

            function M(e) {
                this.$$("artwork").toggleClass("sc-pointer", e)
            }

            function L() {
                var e, n = t.Deferred();
                return this.model.hasVisuals && this.model.hasVisuals() && (e = "default"), e ? n.resolve(e) : this.whenReady().done(function() {
                    D.call(this, this.$$("waveform")).done(function(t) {
                        var i = "rgb(" + v.getColor("backgroundGradient", "default")[0][1] + ")",
                            o = l(t).diff(i).brightness;
                        e = o > 190 ? "default" : "inverted", n.resolve(e)
                    }.bind(this))
                }.bind(this)), n
            }
        }).call(this, n(3))
    }, function(e, t) {
        e.exports = {
            INITIAL: "timed-comment-sm:initial",
            CURRENT_COMMENT: "timed-comment-sm:current-comment",
            CURRENT_TIMESTAMP: "timed-comment-sm:current-timestamp",
            ACTIVE_TIMESTAMP: "timed-comment-sm:active-timestamp"
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(19),
                o = n(18);
            e.exports = new o({
                defaults: {
                    currentSound: null,
                    onCurrentSoundChange: t.noop
                },
                before: {
                    setup: function() {
                        this.currentSound = null
                    },
                    dispose: function() {
                        this.currentSound && this.currentSound.release(), this.currentSound = null
                    },
                    renderDecorate: function() {
                        s.call(this, !0)
                    },
                    teardown: function() {
                        s.call(this, !1)
                    }
                }
            });

            function s(e) {
                i[e ? "on" : "off"]("change:current", r, this)
            }

            function r(e) {
                if (!this.disposed) {
                    var t = e.current;
                    this.currentSound && this.currentSound.release(), t && t.hold(), this.currentSound = t, this.onCurrentSoundChange(e)
                }
            }
        }).call(this, n(3))
    }, function(e, t) {
        e.exports = {
            format: function(e) {
                return "number" != typeof e && (e = parseInt(e, 10)), e != e ? "" : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            shorten: function(e) {
                var t;
                return [{
                    limit: Math.pow(1e3, 1),
                    unit: ""
                }, {
                    limit: Math.pow(1e3, 2),
                    unit: "K"
                }, {
                    limit: Math.pow(1e3, 3),
                    unit: "M"
                }, {
                    limit: Math.pow(1e3, 4),
                    unit: "B"
                }].some((function(n) {
                    return e < n.limit && (t = function(e) {
                        var t = e < 100 ? 10 : 1;
                        return Math.floor(e * t) / t
                    }(e / (n.limit / 1e3)) + n.unit), !!t
                })), t
            }
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(38),
                s = n(39);
            e.exports = o.extend({
                emptyTemplate: null,
                defaults: {
                    minDisplay: 0,
                    maxDisplay: 3,
                    inverted: !1,
                    showReadMore: !1
                },
                Subview: null,
                subviewArgs: {},
                ReadMoreView: null,
                readMoreViewArgs: null,
                listTagName: "ul",
                listClassName: "sc-list-nostyle sc-clearfix",
                itemTagName: "li",
                itemClassName: "",
                animations: {},
                template: function() {
                    return ""
                },
                _isShowingEmpty: !1,
                _listElement: null,
                _desiredLength: null,
                _setup: function(e) {
                    o.prototype._setup.call(this, e), this._desiredLength = Math.max(e.minDisplay, e.maxDisplay) || 1 / 0
                },
                renderDecorate: function() {
                    this.createListElement() && this.syncItems()
                },
                createListElement: function() {
                    var e, n = this.getListContainer();
                    return n.length && !this._listElement && (e = window.document.createElement(this.listTagName), this.listClassName && (e.className = this.listClassName), n.append(e), this.resetElementCache(), this._listElement = t(e)), this._listElement
                },
                syncItems: function() {
                    var e, t = this.getModelsToRender(),
                        n = this.getLength(),
                        i = Math.min(a.call(this), t.length);
                    if (this.removeReadMoreView(), n < i)
                        for (e = n; e < i; ++e) this.createAndInsertListItemView(t[e], -1);
                    else n > i && l.call(this);
                    this.appendReadMoreView()
                },
                getReadMoreViews: function() {
                    return this.subviews.filter(c(this.ReadMoreView))
                },
                needsReadMoreView: function() {
                    return this.options.showReadMore && this.getModelsToRender().length >= this.getDesiredNumItems()
                },
                appendReadMoreView: function() {
                    var e, t;
                    this.needsReadMoreView() && (e = this.getLength(), t = this.getSubviewModel(this.getModelsToRender()[e]), this.createAndInsertReadMoreView(t, e))
                },
                removeReadMoreView: function() {
                    var e = this;
                    this.options.showReadMore && this.getReadMoreViews().forEach((function(t) {
                        e.removeSubview(t), t._dispose()
                    }))
                },
                createAndInsertReadMoreView: function(e, t) {
                    var n = this.addSubview(new this.ReadMoreView(i.assign({
                        alreadyShown: t,
                        Subview: this.Subview,
                        subviewArgs: this.getSubviewArgs(e)
                    }, this.readMoreViewArgs))).render();
                    this.addListItemToDOM(n)
                },
                getDesiredNumItems: function() {
                    return this._desiredLength
                },
                getLength: function() {
                    return this.getListItemViews().length
                },
                setDisplayedItems: function(e) {
                    (e = Math.min(e, this.options.maxDisplay || 1 / 0)) !== this._desiredLength && (this._desiredLength = e, this.syncItems())
                },
                _teardown: function() {
                    this._listElement && (this._listElement.remove(), this._listElement = null), o.prototype._teardown.call(this)
                },
                getModelsToRender: function() {
                    return this.collection.models
                },
                createAndInsertListItemView: function(e, t) {
                    var n = this.addListItemSubview(e);
                    n.render(), this.addListItemToDOM(n, i.isNumber(t) ? t : -1), l.call(this)
                },
                getTemplate: function(e) {
                    var t = this.getEmptyTemplate();
                    return t && this.useEmptyTemplate() ? t : o.prototype.getTemplate.apply(this, arguments)
                },
                getEmptyTemplate: function() {
                    return this.emptyTemplate
                },
                useEmptyTemplate: function() {
                    return u.call(this)
                },
                getListContainer: function() {
                    return this.$el
                },
                getListElement: function() {
                    return this._listElement || t()
                },
                getListItemView: function(e) {
                    var t = this.getSubviewModel(e);
                    return i.find(this.subviews, (function(e) {
                        return e.model === t
                    }))
                },
                getListItemViews: function() {
                    return this.subviews.filter(c(this.Subview))
                },
                getSubviewArgs: function(e) {
                    return i.defaults({
                        resource_id: e.resource_id,
                        resource_type: e.resource_type
                    }, this.subviewArgs)
                },
                getSubviewModel: i.identity,
                getListItemAttributesData: function(e) {
                    return e.model ? e.model.toJSON() : {}
                },
                getListItemAttributes: function() {
                    return {}
                },
                getListItemAttributesString: function(e) {
                    var t, n, o, r, a = this.getListItemAttributes(e);
                    return new s.SafeString((t = a, r = [], i.each(t, (function(e, t) {
                        n = t + '="', o = [], i.isObject(e) ? i.each(e, (function(e, t) {
                            o.push(t + ":" + e)
                        })) : o.push(e), r.push(n + o.join(";") + '"')
                    })), r.join(" ")))
                },
                onAdd: function(e, t, n) {
                    if (!this.disposed) {
                        var i = t.indexOf(e),
                            o = a.call(this),
                            s = i >= 0 && i < o || i < 0 && this.collection.length <= o;
                        this.removeReadMoreView(), s && this.createAndInsertListItemView(e, i), this.appendReadMoreView()
                    }
                },
                onRemove: function(e, t, n) {
                    var i = this.getListItemView(e);
                    i && (this.removeReadMoreView(), this.removeSubview(i), this.removeListItemFromDOM(i, n.index), this.appendReadMoreView())
                },
                onCollectionChange: function(e, t) {
                    var n = u.call(this);
                    o.prototype.onCollectionChange.apply(this, arguments), this._isShowingEmpty !== n && this.rerender(), this._isShowingEmpty = n
                },
                addListItemSubview: function(e) {
                    var t = this.getSubviewArgs(this.getSubviewModel(e));
                    return this.addSubview(new this.Subview(t))
                },
                getListItemViewByEvent: function(e) {
                    var n, o = t(e.target).closest(this.getListItemSelector());
                    return o.length && (n = i.find(this.subviews, (function(e) {
                        return e.el === o.children()[0]
                    }))), n
                },
                getListItemSelector: function() {
                    return "." + this.itemClassName.trim().split(/\s+/).join(".")
                },
                createSubviewWrapper: function(e) {
                    var n = this.getListItemAttributesString(this.getListItemAttributesData(e));
                    return n = n.toString().length ? " " + n : "", t("<" + this.itemTagName + ' class="' + this.itemClassName + '"' + n + ">")
                },
                getSubviewWrapper: function(e) {
                    return e.$el.parent()
                },
                addListItemToDOM: function(e, t) {
                    var n, i, o = this.getListElement(),
                        s = this.getSubviewWrapper(e),
                        r = this.options.inverted;
                    s.length || (s = this.createSubviewWrapper(e)).append(e.el), -1 === t || t >= this.getLength() - 1 || void 0 === t ? o[r ? "prepend" : "append"](s) : 0 === t ? o[r ? "append" : "prepend"](s) : (i = this.getListItemView(this.collection.at(t - 1))) && (n = this.getSubviewWrapper(i), s[r ? "insertBefore" : "insertAfter"](n)), this.resetElementCache()
                },
                removeListItem: function(e) {
                    var t = this.getListItemView(e);
                    t && this.removeListItemFromDOM(t)
                },
                removeListItemFromDOM: function(e, t) {
                    var n, i = this.getSubviewWrapper(e),
                        o = this.options.maxDisplay,
                        s = !t || !1 !== t.animations;
                    n = function() {
                        var t, n;
                        i.detach(), e._dispose(), !this._disposed && o && o <= this.collection.length && this.getLength() < o && (n = r.call(this), (t = this.addListItemSubview(n)).render(), this.addListItemToDOM(t, -1))
                    }.bind(this), s && this.animations.remove ? this.addDeferred(window.setTimeout(i.fadeOut.bind(i, "slow", n), this.animations.remove.delay)) : n(), this.resetElementCache()
                },
                detachSubviewFromDOM: function(e) {
                    this.getSubviewWrapper(e).detach()
                },
                appendDOMElement: function(e) {
                    var t = this.getListContainer();
                    t && t[this.options.inverted ? "prepend" : "append"](e), this.resetElementCache()
                },
                getCollectionData: function() {
                    return []
                }
            });

            function r() {
                var e = i.pluck(this.subviews, "model");
                return this.collection.find((function(t) {
                    return -1 === e.indexOf(this.getSubviewModel(t))
                }), this)
            }

            function a() {
                return this.getDesiredNumItems() - (this.needsReadMoreView() ? 1 : 0)
            }

            function l() {
                var e, t, n = a.call(this);
                if (n)
                    for (e = this.getLength(); e-- > n;)(t = this.getListItemView(this.collection.at(n))) && (this.removeListItemFromDOM(t, {
                        animations: !1,
                        index: n
                    }), this.removeSubview(t))
            }

            function u() {
                return this.hasData() && this.collection && 0 === this.collection.length && this.collection.isFullyPopulated()
            }

            function c(e) {
                return function(t) {
                    return t instanceof e
                }
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(2),
            o = n(5),
            s = n(31),
            r = n(11),
            a = n(30),
            l = n(508),
            u = n(51),
            c = n(38),
            d = n(511);
        e.exports = c.extend(l, {
            template: n(662),
            css: n(665),
            className: "title sc-truncate",
            defaults: {
                visual: !1,
                show_link: !0,
                inline: !1,
                inverse: !1
            },
            events: {
                "click a.title__h1": function() {
                    r.trigger(u.UI.CREATOR_LINK_CLICKED, this.model)
                },
                "click a.title__h2": function() {
                    r.trigger(u.UI.TITLE_LINK_CLICKED, this.model), this.isSound && r.trigger("sound:deeplink", this.$$("h2")[0], this.model)
                }
            },
            requiredAttributes: {
                user: ["permalink_url", "username"],
                track: ["permalink_url", "title", "user", "publisher_metadata"],
                playlist: ["permalink_url", "title", "user"]
            },
            setup: function() {
                p.call(this, !0)
            },
            dispose: function() {
                p.call(this, !1)
            },
            renderDecorate: function() {
                this.whenInserted().done(f.bind(this))
            },
            getTemplateData: function() {
                var e = g.call(this),
                    t = o.get("widgetParams"),
                    n = this.options,
                    s = !n.visual && !this.isSound || t.show_user,
                    r = n.show_link && !this.isPrivate() && e.h2Link;
                return i.extend(e, {
                    resource_id: this.model.resource_id,
                    visual: n.visual,
                    inline: n.inline,
                    showH1: s,
                    inverse: n.inverse,
                    showExplicit: h.call(this),
                    h1TagName: n.show_link ? "a" : "span",
                    h2TagName: r ? "a" : "span",
                    showH2Link: r,
                    inlineTitle: (s ? e.h1Text + " – " : "") + e.h2Text,
                    h2Link: r ? e.h2Link : ""
                })
            }
        });

        function h() {
            return this.options.visual && this.isSound && this.model.isExplicit()
        }

        function p(e) {
            d[e ? "on" : "off"]("resize:x:debounced", m, this)
        }

        function m() {
            f.call(this)
        }

        function f() {
            if (h.call(this)) {
                var e = this.$el.width() - this.$$("explicit").width() - 15;
                this.$$("h2Text")[0].style.maxWidth = e + "px"
            }
        }

        function g() {
            var e, t, n, i, o = this.options.resource_type,
                r = this.model;
            switch (o) {
                case s.SOUND:
                case s.PLAYLIST:
                    e = r.get("user").username, n = r.get("user").permalink_url, t = r.get("title"), i = this.getShareURL();
                    break;
                case s.USER_SOUNDS:
                case s.USER_FAVORITES:
                case s.USER_SPOTLIGHT:
                    switch (e = r.get("username"), n = r.get("permalink_url"), o) {
                        case s.USER_FAVORITES:
                            t = a.t("Liked tracks");
                            break;
                        case s.USER_SPOTLIGHT:
                            t = a.t("Featured tracks");
                            break;
                        default:
                            t = a.t("Latest tracks")
                    }
                    i = this.getShareURL()
            }
            return {
                h1Text: e,
                h1Link: n,
                h2Text: t,
                h2Link: i
            }
        }
    }, function(e, t) {
        var n = e.exports = {
            monetizationModelToProductIds: i,
            soundRequiresUpsell: function(e) {
                return e.isSnippetized() && i(e.get("monetization_model")).length > 0
            },
            productIds: {
                HIGH_TIER: "go"
            }
        };

        function i(e) {
            switch (e) {
                case "SUB_MID_TIER":
                case "SUB_HIGH_TIER":
                    return [n.productIds.HIGH_TIER];
                default:
                    return []
            }
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(680),
            s = n(18);
        e.exports = new s({
            applyTo: function(e) {
                e.events = i.extend({
                    mouseenter: r,
                    mouseleave: r
                }, e.events)
            },
            before: {
                setup: function() {
                    this.domId = i.uniqueId("tooltip-"), this.$el.attr({
                        "aria-describedby": this.domId
                    })
                }
            },
            after: {
                renderDecorate: function() {
                    this.getState("mouseover") && a.call(this).open()
                }
            }
        });

        function r(e) {
            var t = a.call(this),
                n = this.el.getAttribute("aria-haspopup"),
                i = this.el.getAttribute("aria-owns");
            "mouseenter" !== e.type || n && (!i || document.getElementById(i)) ? "mouseleave" === e.type && (this.toggleState("mouseover", !1), t.close()) : (this.toggleState("mouseover", !0), t.open())
        }

        function a() {
            var e = this.subviews.tooltip;
            return e && e.disposed && (this.removeSubview(e), e = null), e || (e = l.call(this), this.addSubview(e, "tooltip")), this.subviews.tooltip
        }

        function l() {
            return new o({
                togglerEl: this.el,
                relativeElement: this.el,
                domId: this.domId,
                priorityLevel: o.PriorityLevels.LOW
            })
        }
    }, , function(e, t, n) {
        var i = n(11),
            o = n(18),
            s = n(51),
            r = window.performance && window.performance.timing,
            a = !0;
        e.exports = new o(r ? {
            defaults: {
                performanceSelector: null
            },
            after: {
                render: function() {
                    var e, t, n;
                    a && (a = !1, (e = this.performanceSelector) && (t = function() {
                        return this.$(e).length
                    }.bind(this), n = function() {
                        var e = Date.now() - r.fetchStart;
                        i.trigger(s.APP.LOAD, {
                            latency: e
                        })
                    }, l.call(this, t, 1e4, n)))
                }
            }
        } : {});

        function l(e, t, n) {
            var i = this.addDeferred(setTimeout(s, t)),
                o = this.addDeferred(setInterval(r, 50));

            function s() {
                clearTimeout(o), clearTimeout(i)
            }

            function r() {
                e() && (s(), n())
            }
            r()
        }
    }, , function(e, t, n) {
        var i = n(2),
            o = n(512),
            s = n(11),
            r = n(51),
            a = n(38);
        e.exports = a.extend({
            template: n(584),
            css: n(606),
            ModelClass: o,
            className: "artwork",
            events: {
                "click .artwork__link": function() {
                    var e = this.model;
                    s.trigger(r.UI.ARTWORK_CLICKED, e), s.trigger("sound:deeplink", this.$$("link")[0], e)
                }
            },
            defaults: {
                show_follow_button: !1,
                size: 200,
                is_link: !0,
                offset: 9
            },
            getTemplateData: function(e) {
                return i.extend(e, {
                    isLink: this.options.is_link && !this.model.isPrivate(),
                    wrapperStyle: (t = this.options.offset, ["top", "right", "bottom", "left"].map((function(e) {
                        return e + ":" + t + "px;"
                    })).join(""))
                });
                var t
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(41),
                s = n(11),
                r = n(33),
                a = n(54),
                l = n(7);
            e.exports = r.extend({
                CREATE: "POST",
                READ: "GET",
                DELETE: "DELETE",
                _currentRequests: null,
                next_href: null,
                _fetchDefer: null,
                readPathSuffix: "ids",
                setup: function() {
                    this._currentRequests = new a
                },
                url: function(e, t) {
                    var n = "CREATE" === t || "DELETE" === t,
                        o = i.isFunction(this.baseUrl) ? this.baseUrl(t, e) : this.baseUrl,
                        s = l.parse(o);
                    if (s.path = s.path.replace(/\/?$/, "/"), n) s.path += e;
                    else {
                        if (null !== this.next_href) return this.next_href;
                        s.path += this.readPathSuffix, s.query.linked_partitioning = 1, s.query.limit = 200
                    }
                    return l.stringify(s)
                },
                get: function() {
                    return r.prototype.get.apply(this, arguments) || !1
                },
                fetch: function() {
                    return this._fetchDefer || (this._fetchDefer = t.Deferred(), o.isLoggedIn() ? u.call(this) : s.one("connect:hasUserData", u.bind(this))), this._fetchDefer
                },
                parse: function(e) {
                    return this.next_href = e.next_href || !1, i.reduce(e.collection, (function(e, t) {
                        return e[t] = !0, e
                    }), {})
                },
                toggle: function(e, t) {
                    var n = this.get(e),
                        i = "boolean" == typeof t ? t : !n;
                    i !== n && (i ? this.set(e, !0) : this.unset(e))
                },
                setRemote: function(e, n, i) {
                    var o, s, r, a = this._currentRequests.get(e);
                    if (!a) return s = i || (n ? "CREATE" : "DELETE"), o = this.url(e, s), a = t.ajax({
                        url: o,
                        type: this[s],
                        dataType: "json"
                    }), this._currentRequests.set(e, a), r = this, a.always(function() {
                        this._currentRequests.unset(e)
                    }.bind(this)).done((function() {
                        var t = r.get(e);
                        (this.type === r.DELETE && t || this.type === r.CREATE && !t) && r.setRemote(e, t)
                    })), a
                },
                hasDataForView: function() {
                    return !!this.lastFetchTime
                }
            }, {
                neverRelease: !0,
                hashFn: function() {
                    return 1
                }
            });

            function u() {
                var e = this.url();
                e && o.isLoggedIn() ? r.prototype.fetch.apply(this, arguments).done(u.bind(this)).fail(this._fetchDefer.reject) : this._fetchDefer.resolve()
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(39),
            o = n(513);
        e.exports = function(e, t) {
            return new i.SafeString(o.markup(e, t.hash))
        }
    }, function(e, t, n) {
        var i = n(613),
            o = n(82),
            s = n(50);
        e.exports = o.extend({
            model: i,
            soundDuration: null,
            defaults: {
                sound_id: null,
                secret_token: null,
                limit: 100
            },
            baseUrl: function() {
                return this.getEndpointUrl("comments", {
                    id: this.options.sound_id
                })
            },
            setup: function() {
                var e = new s({
                    id: this.options.sound_id
                });
                this.options.secret_token = e.get("secret_token"), this.soundDuration = e.duration(), e.release()
            },
            comparator: function(e, t) {
                return new Date(e.attributes.timestamp) - new Date(t.attributes.timestamp)
            },
            getCommentAtTimestamp: function(e, t) {
                return t = t || 0, this.find((function(n) {
                    var o = n.get("timestamp");
                    return 0 === t ? o === e : Math.abs(e - o) <= t && o !== i.EMPTY_TIMESTAMP
                }))
            }
        }, {
            hashFn: function(e, t) {
                return t && t.sound_id || null
            }
        })
    }, function(e, t, n) {
        var i = n(18),
            o = n(514);
        e.exports = new i({
            _fills: null,
            requires: ["gradientName"],
            before: {
                onResize: function() {
                    this._fills = null
                }
            },
            getFillStyle: function(e, t) {
                return null == e && (e = 1), t = t || this.gradientName, this._fills = this._fills || {}, this._fills[e + "_" + t] || (this._fills[e + "_" + t] = o.gradient(this.context, t, this.options.waveformStyle, this.options.scale, e))
            }
        })
    }, function(e, t, n) {
        (function(t) {
            e.exports = {
                normalizeEvent: function(e) {
                    if (void 0 === e.offsetX || void 0 === e.offsetY) {
                        var n = t(e.target).offset(),
                            i = function(e) {
                                var t, n, i = e.type;
                                0 === i.indexOf("touch") ? (t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY) : 0 === i.indexOf("mouse") ? (t = e.clientX + window.pageXOffset, n = e.clientY + window.pageYOffset) : (t = e.x, n = e.y);
                                return {
                                    x: t,
                                    y: n
                                }
                            }(e.originalEvent);
                        e.pageX = i.x, e.pageY = i.y, e.offsetX = i.x - n.left, e.offsetY = i.y - n.top
                    }
                    return e
                }
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(30),
            o = n(519);

        function s(e, t, n, o) {
            return i.tp(t, n, e, o.hash, {
                comment: o.hash._comment,
                context: o.hash._context
            })
        }

        function r(e, t) {
            return i.tp(o.cleanBlockText(t.fn()), o.cleanBlockText(t.inverse()), e, t.hash, {
                comment: t.hash._comment,
                context: t.hash._context
            })
        }
        e.exports = function() {
            var e = arguments.length;
            if (4 === e) return s.apply(null, arguments);
            if (2 === e) return r.apply(null, arguments);
            throw new Error("Invalid signature to tp helper, expected 4 or 2 arguments, got: " + e)
        }
    }, function(e, t, n) {
        var i = n(38);
        e.exports = i.extend({
            css: n(663),
            tagName: "span",
            className: "explicitBadge sc-border-dark sc-text-light sc-font-light",
            template: function() {
                return "EXPLICIT"
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(5),
                s = n(526),
                r = n(508),
                a = n(19),
                l = n(509),
                u = n(38),
                c = o.get("widgetParams");
            e.exports = u.extend(l, r, {
                css: n(674),
                className: "soundHeader",
                template: n(676),
                requiredAttributes: {
                    sound: ["sharing"],
                    playlist: ["sharing"]
                },
                defaults: {
                    hide_action_buttons: !1,
                    show_like_button: !0,
                    show_share_button: !0,
                    show_buy_button: !0,
                    show_download_button: !0,
                    show_button_overlay: !1,
                    visual: !1
                },
                setup: function() {
                    this.toggleState("visual", this.options.visual), d.call(this, !0)
                },
                dispose: function() {
                    d.call(this, !1)
                },
                renderDecorate: function() {
                    h.call(this)
                },
                getTemplateData: function() {
                    var e = this.options;
                    return e = i.defaults({
                        show_share_button: e.show_share_button && c.sharing && this.isShareable(),
                        show_like_button: e.show_like_button && t.support.cors && c.liking && this.isLikeable() && this.isSound,
                        show_buy_button: e.show_buy_button && c.buying && this.isBuyable(),
                        show_download_button: e.show_download_button && c.download && this.isDownloadable(),
                        show_snippet_indicator: e.visual && this.isSound && s.soundRequiresUpsell(this.model)
                    }, e)
                }
            });

            function d(e) {
                var t = e ? "on" : "off";
                (this.isPlaylist ? a : this.model)[t]("play", h, this)
            }

            function h() {
                var e = this.subviews.likeButton,
                    t = this.getState("likeVisible");
                e && !t && (this.model.isPlaying() ? (this.$$("buttons").prepend(e.$el), this.toggleState("likeVisible")) : e.$el.detach())
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(30),
            o = n(38);
        e.exports = o.extend({
            css: n(677),
            className: "snippetIndicator sc-snippet-badge sc-snippet-badge-small",
            tagName: "span",
            template: function() {
                return i.t("Preview", null, {
                    comment: "Audible preview of an track"
                })
            },
            defaults: {
                color: "grey",
                backgroundColor: !1,
                size: "small"
            },
            setup: function(e) {
                this.$el.addClass("sc-snippet-badge-" + e.color).addClass("sc-snippet-badge-" + e.size).toggleClass("snippetIndicatorBackgroundActive", e.backgroundColor)
            }
        })
    }, , function(e, t, n) {
        (function(t) {
            var i = n(52),
                o = n(11),
                s = n(18),
                r = n(19),
                a = n(728),
                l = n(51),
                u = !1;
            e.exports = new s({
                TEASER_TRANSITION_DURATION: 200,
                defaults: {
                    onTeaserDismiss: t.noop,
                    teaserHasCountDown: !1
                },
                toggleTeaserView: function(e) {
                    e ? this.teaserCanBeDisplayed() && (p.call(this), u = !0) : m.call(this)
                },
                teaserCanBeDisplayed: function() {
                    return !i.isMobile && !u
                },
                createTeaserView: c
            });

            function c() {
                var e = this.subviews.teaser,
                    t = r.getCurrentSound();
                e || ((e = new a({
                    resource_id: t.resource_id,
                    resource_type: t.resource_type,
                    hasCountDown: this.teaserHasCountDown
                })).on(a.Events.DISMISS, d, this), e.on(a.Events.DOWNLOAD_CLICK, h, this), e.render(), this.addSubview(e, "teaser"), this.$$("teaser").append(e.el))
            }

            function d() {
                this.toggleTeaserView(!1), this.onTeaserDismiss()
            }

            function h() {
                o.trigger(l.UI.UPSELL_CTA_BUTTON_CLICKED, this.model)
            }

            function p() {
                var e = this.subviews.visualAudible;
                this._hideTeaserTimeoutId && clearTimeout(this._hideTeaserTimeoutId), c.call(this), e && (e.toggleBackgroundState(!0), e.toggleState("onlyArtwork", !0)), this.$el.toggleClass("teaserVisible", !0)
            }

            function m() {
                var e = this.subviews.visualAudible,
                    t = this.subviews.teaser;
                t && (e && (e.toggleBackgroundState(!1), t.scaleUpArtwork(Math.max(this.$el.height() - e.$el.height(), 0))), this._hideTeaserTimeoutId = this.addDeferred(setTimeout(function() {
                    e && e.toggleState("onlyArtwork", !1), t._dispose(), this.removeSubview(t), this.$el.toggleClass("teaserVisible", !1)
                }.bind(this), this.TEASER_TRANSITION_DURATION)))
            }
        }).call(this, n(3))
    }, , , , function(e, t, n) {
        (function(t) {
            var i = n(85),
                o = n(52),
                s = n(5),
                r = n(11),
                a = n(81),
                l = n(30),
                u = n(18),
                c = n(19),
                d = n(509),
                h = n(32);
            e.exports = new u({
                applyTo: function(e) {
                    d.applyTo(e)
                },
                defaults: {
                    getFetchErrorMessage: t.noop
                },
                after: {
                    setup: function() {
                        var e = v.call(this);
                        c.setSource(e), p.call(this).done(m.bind(this)).fail(f.bind(this))
                    }
                }
            });

            function p() {
                return (this.collection || this.model).isPopulated() && (!this.collection || this.collection.length || this.collection.isFullyPopulated()) ? h.resolve() : this.collection ? function e(t, n) {
                    return t.fetch({
                        add: !!n
                    }).then((function() {
                        if (0 === t.length && !t.isFullyPopulated()) return e(t, !0)
                    }))
                }(this.collection) : this.fetchData(this.model)
            }

            function m() {
                var e = v.call(this),
                    t = s.get("widgetParams");
                e instanceof i && !e.isEmbeddable() ? function(e) {
                    var t, n = e.get("permalink_url");
                    t = "playlist" === e.resource_type && !e.isPrivate() && n ? l.t('This playlist can’t be played outside of SoundCloud <br><a href="[[url]]">Play on SoundCloud</a>', {
                        url: n
                    }) : "playlist" === e.resource_type ? l.t("This playlist can’t be played outside of SoundCloud") : "playlist" !== e.resource_type && !e.isPrivate() && n ? l.t('This track can’t be played outside of SoundCloud <br><a href="[[url]]">Play on SoundCloud</a>', {
                        url: n
                    }) : l.t("This track can’t be played outside of SoundCloud");
                    g(t)
                }(e) : (c.setSource(e).setCursor(t.start_track), !t.auto_play || o.isMobileSafari || o.isAndroid || c.play(c.getCurrentSound()), r.trigger("widget:ready"))
            }

            function f(e) {
                var t = this.getFetchErrorMessage(e);
                t && g(t)
            }

            function g(e) {
                a.raise({
                    fatal: !0,
                    message: e
                })
            }

            function v() {
                return this.collection || this.model
            }
        }).call(this, n(3))
    }, , , , , function(e, t, n) {
        var i = n(552),
            o = n(516),
            s = n(11),
            r = n(42),
            a = n(553),
            l = n(554),
            u = n(51),
            c = n(38);
        e.exports = c.extend(o, {
            ModelClass: l,
            className: "sc-button-follow sc-button-cta",
            template: n(587),
            defaults: {
                icon_only: !1
            },
            setup: function() {
                this.observedAttributes = [this.options.resource_id], this.myFollowers = new a, this.setupModelListeners(this.myFollowers)
            },
            dispose: function() {
                this.teardownModelListeners(this.myFollowers), this.myFollowers.release(), delete this.myFollowers
            },
            renderDecorate: function() {
                var e = d.call(this);
                this.myFollowers.lastFetchTime || this.myFollowers.fetch(), this.toggleState("selected", e), this.$el.toggleClass("sc-button-cta", !e)
            },
            onClick: function(e) {
                var t = new r({
                    id: this.options.resource_id
                });
                s.trigger(u.UI.FOLLOW_BUTTON_CLICKED, t), i.follow(this.options.resource_id, !d.call(this)), e.preventDefault()
            },
            getTemplateData: function() {
                var e = d.call(this),
                    t = h.call(this);
                return {
                    selected: e,
                    followBack: !e && t
                }
            }
        });

        function d() {
            return !!this.model.get(this.options.resource_id)
        }

        function h() {
            return !!this.myFollowers.get(this.options.resource_id)
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(10),
                s = n(41),
                r = n(553),
                a = n(554),
                l = n(555),
                u = {
                    followings: new a,
                    followers: new r,
                    soundLikes: new l
                },
                c = e.exports = i.extend({}, o.Events, {
                    follow: function(e, t, n) {
                        var o, r, a = s.currentUserId();
                        n = i.defaults(n || {}, {
                            action: "follow",
                            origin: a,
                            originType: "user",
                            target: e,
                            targetType: "user",
                            state: t,
                            persist: !0
                        }), (r = n.origin) !== n.target && (n.target === a ? (o = u.followers).fetch().done((function() {
                            o.get(r) !== n.state && (o.toggle(r, n.state), n.state = o.get(r), d(n))
                        })) : (n.list = r === a ? u.followings : null, d(n)))
                    },
                    like: function(e, t, n, o) {
                        d(o = i.defaults(o || {}, {
                            action: "like",
                            origin: s.currentUserId(),
                            originType: "user",
                            target: e,
                            targetType: t,
                            state: n,
                            persist: !0,
                            list: u.soundLikes
                        }))
                    }
                });

            function d(e) {
                var n, o, r, a = !1,
                    l = e.list,
                    u = e.state,
                    h = e.target,
                    p = e.origin,
                    m = e.requestType,
                    f = p === s.currentUserId();
                return o = t.Deferred(), f && !s.isLoggedIn() ? s.login().done((function() {
                    e.origin = s.currentUserId(), d(e).done(o.resolve).fail(o.reject)
                })).fail(o.reject) : (l && f ? (n = function() {
                    l.get(h) !== u ? (l.toggle(h, u), u = l.get(h), e.persist && (r = l.setRemote(h, u, m)) && r.fail((function(t, n) {
                        "abort" !== n && c.trigger("error", i.extend({
                            xhr: t
                        }, e)), d(i.defaults({
                            persist: !1,
                            state: !u
                        }, e))
                    }))) : a = !0
                }, l.fetch().done(n).done(o.resolve).fail(o.reject)) : o.resolve(), o.done((function() {
                    if (!a) {
                        var t = e.action;
                        c.trigger([t, t + ":origin:" + e.originType + ":" + p, t + ":target:" + e.targetType + ":" + h].join(" "), {
                            state: u,
                            origin: p,
                            originType: e.originType,
                            target: h,
                            targetType: e.targetType,
                            context: e.context
                        })
                    }
                }))), o
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        (function(t) {
            var i = n(532);
            e.exports = i.extend({
                baseUrl: function() {
                    return this.getEndpointUrl("myFollowers")
                },
                setRemote: t.noop
            })
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(585).sign,
            o = n(586).__FOLLOWS_SIGNATURE_SECRET__,
            s = n(532),
            r = n(41),
            a = n(5);
        e.exports = s.extend({
            baseUrl: function(e, t) {
                switch (e) {
                    case "CREATE":
                        return this.getEndpointUrl("myFollowingsWrite", null, {
                            signature: i(r.currentUserId(), t, a.get("client_id"), o)
                        });
                    case "DELETE":
                        return this.getEndpointUrl("myFollowingsWrite");
                    default:
                        return this.getEndpointUrl("userFollowings", {
                            userId: r.currentUserId()
                        })
                }
            }
        })
    }, function(e, t, n) {
        var i = n(5),
            o = n(50),
            s = n(532);
        e.exports = s.extend({
            CREATE: "PUT",
            baseUrl: function(e) {
                if ("CREATE" === e || "DELETE" === e) {
                    var t = i.get("me");
                    return this.getEndpointUrl("userTrackLikes", {
                        userId: t.id
                    })
                }
                return this.getEndpointUrl("myTrackLikes")
            },
            onToggle: function(e, t) {
                var n = o.instances.get(e),
                    s = i.get("me");
                n && n.likesChanged(t), s && s.likesChanged(t)
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(18),
                s = n(50),
                r = n(614),
                a = n(521),
                l = t.noop;
            e.exports = new o({
                stateMachine: null,
                _stateHandlers: null,
                before: {
                    setup: function() {
                        this._stateHandlers = {}, this.sound = new s({
                            id: this.options.sound_id,
                            resource_id: this.options.resource_id
                        })
                    }
                },
                after: {
                    setup: function() {
                        var e = this.sound.get("secret_token");
                        this.stateMachine = new r(this.options.sound_id, this.options.resource_id, e), this.onState(a.INITIAL, this.onInitialState).onState(a.CURRENT_COMMENT, this.onCurrentCommentChange).onState(a.ACTIVE_TIMESTAMP, this.onActiveTimestamp).onState(a.CURRENT_TIMESTAMP, this.onCurrentTimestamp)
                    },
                    dispose: function() {
                        var e = this.stateMachine,
                            t = this;
                        this.sound.release(), this.sound = null, i.each(this._stateHandlers, (function(n, i) {
                            n.forEach((function(n) {
                                e.off(i, n, t)
                            }))
                        })), this._stateHandlers = null, e && e.release()
                    }
                },
                getCurrentComment: function() {
                    return this.stateMachine.currentComment
                },
                getCurrentCommentTimestamp: function() {
                    var e = this.getCurrentComment();
                    return e && e.get("timestamp")
                },
                cachedDimensions: function() {
                    return this._cachedDimensions || (this._cachedDimensions = this.$el.offset(), this._cachedDimensions.width = this.$el.width(), this._cachedDimensions.height = this.$el.height()), this._cachedDimensions
                },
                resetCachedDimensions: function() {
                    this._cachedDimensions = null
                },
                getTimestampByMouseEvent: function(e) {
                    return Math.floor((e.clientX - this.cachedDimensions().left) / this.cachedDimensions().width * this.sound.duration())
                },
                getCurrentState: function() {
                    return this.stateMachine.currentState
                },
                goToState: function() {
                    var e = this.stateMachine;
                    e.goToState.apply(e, arguments)
                },
                setInteracting: function(e) {
                    this.stateMachine.interactingWithComments = e
                },
                isInteracting: function() {
                    return this.stateMachine.interactingWithComments
                },
                onState: function(e, t) {
                    return this._stateHandlers[e] = this._stateHandlers[e] || [], this.stateMachine.on(e, t, this), this._stateHandlers[e].push(t), this
                },
                isActiveTimestampState: function() {
                    return !!this.stateMachine.activeTimestamp && this.getCurrentState() === a.ACTIVE_TIMESTAMP
                },
                defaults: {
                    onInitialState: l,
                    onActiveTimestamp: l,
                    onCurrentTimestamp: l,
                    onCurrentCommentChange: l
                }
            })
        }).call(this, n(3))
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.exports = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return n.reduce(i, e)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function e(t, n, i, o, s) {
            var r = s.Node,
                a = r.TEXT_NODE,
                l = r.ELEMENT_NODE,
                u = t.firstChild,
                c = void 0;
            if (u)
                do {
                    u.nodeType === a ? n(u) : u.nodeType === l && e(u, n, i, o, {
                        Node: r
                    }), c = u
                } while ((u = u.nextSibling) && (!i || i(c)));
            o && u && o(u)
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(18),
            s = n(514),
            r = {
                upperPartHeight: .7,
                waveformWidth: 1800,
                waveformHeight: 140,
                waveformData: null
            };
        e.exports = new o({
            _memo: null,
            applyTo: function(e) {
                e.defaults = i.defaults(e.defaults || {}, r)
            },
            before: {
                onResize: function() {
                    this._memo = null
                }
            },
            defaults: {
                getAudible: function() {
                    return this.model
                }
            },
            getWaveformHeightAt: function(e) {
                var t, n = this.options,
                    i = this.canvas.width / n.scale,
                    o = s.getConfig("gapWidth") + s.getConfig("barWidth"),
                    r = Math.floor(e / o),
                    a = e / i;
                return this._memo || (this._memo = new Array(Math.ceil(i / o))), null == this._memo[r] && (t = Math.floor(a * n.waveformWidth), this._memo[r] = n.waveformData[0][t]), this._memo[r]
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(18);
            e.exports = new o({
                canvas: null,
                context: null,
                isDirty: !1,
                isAnimating: !1,
                requires: ["draw"],
                applyTo: function(e) {
                    e.defaults = i.extend({
                        scale: 1,
                        $eventEl: null
                    }, e.defaults)
                },
                after: {
                    draw: function() {
                        this.setDirty(this.isAnimating)
                    },
                    onResize: function() {
                        this.setDirty(!0)
                    }
                },
                before: {
                    setup: function(e) {
                        e.$eventEl || (e.$eventEl = this.$el), this.canvas = this.el, this.context = this.el.getContext("2d")
                    }
                },
                override: {
                    render: function() {
                        this.hasData() ? this.setDirty(!0) : (this.setDirty(!1), this.fetchData())
                    },
                    destroyElement: t.noop
                },
                defaults: {
                    onResize: t.noop
                },
                setDirty: function(e) {
                    (this.isDirty = e) && this.trigger("dirty")
                }
            })
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(18);
        e.exports = new i({
            lastPosition: 0,
            after: {
                setup: function() {
                    r.call(this, !0)
                },
                dispose: function() {
                    r.call(this, !1)
                }
            },
            getPosition: function() {
                return Math.max(this.model.isPlaying() ? 1 : 0, Math.ceil(this.model.progress() * this.canvas.width / this.options.scale))
            },
            hasPositionChanged: function() {
                return this.lastPosition !== this.getPosition()
            },
            defaults: {
                shouldBeDirty: function() {
                    return this.hasPositionChanged()
                }
            }
        });

        function o() {
            !this.isDirty && this.shouldBeDirty() && this.setDirty(!0)
        }

        function s() {
            this.setDirty(!0)
        }

        function r(e) {
            var t = e ? "on" : "off";
            this.model[t]("time", o, this)[t]("seeked", s, this)
        }
    }, function(e, t, n) {
        var i = n(652),
            o = n(657);
        e.exports = i.extend(o)
    }, function(e, t, n) {
        var i = n(5),
            o = n(132),
            s = null;
        e.exports = o.extend({
            audioSourceVersion: null,
            baseUrl: function() {
                var e = i.get("me").id || null;
                e || s || (s = Math.floor(1e8 * Math.random()));
                var t = {
                    user_id: e,
                    anon_user_id: e ? null : s
                };
                return this.getEndpointUrl("relatedTracks", {
                    id: this.options.resource_id
                }, t)
            },
            getInfo: function() {
                return {
                    type: "recommender",
                    version: this.audioSourceVersion
                }
            },
            parse: function(e) {
                return this.audioSourceVersion = e.version || "no_version", o.prototype.parse.apply(this, arguments)
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(524),
                s = n(565),
                r = n(660),
                a = n(511);
            e.exports = o.extend({
                className: "relatedVisualSounds sc-clearfix",
                itemClassName: "relatedVisualSounds__item sc-pointer",
                css: n(669),
                Subview: r,
                defaults: {
                    maxDisplay: 0,
                    getRelatedSounds: null
                },
                states: {
                    relatedVisible: "relatedVisible"
                },
                setup: function(e) {
                    i.isFunction(e.getRelatedSounds) ? this.collection = e.getRelatedSounds(e.resource_id) : this.collection = new s(null, {
                        resource_id: e.resource_id
                    }), this.collection.setLimit(20), a.on("resize:debounced", l, this)
                },
                dispose: function() {
                    a.off("resize:debounced", l, this)
                },
                renderDecorate: function() {
                    o.prototype.renderDecorate.apply(this, arguments), this.whenInserted().done(l.bind(this))
                },
                getListItemAttributes: function() {
                    return {
                        style: c.call(this)
                    }
                }
            });

            function l() {
                var e = t(window).height();
                this.toggleState("relatedVisible", e > 200), u.call(this)
            }

            function u() {
                var e = c.call(this);
                this.$el.css({
                    "max-height": e.height
                }), this.$(this.getListItemSelector()).each((function(t, n) {
                    n.style.width = e.width, n.style.height = e.height
                }))
            }

            function c() {
                var e = this.$el.width(),
                    n = Math.ceil(e / 200),
                    i = Math.floor((e - 10 * (n - 1)) / n);
                return {
                    width: i + "px",
                    height: Math.min(t(window).height() - (this.$el.position().top + 60 + 40), i) + "px"
                }
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(42),
                s = n(50),
                r = n(566),
                a = n(563),
                l = [n(567), r];
            e.exports = a.extend({
                fetch: function(e) {
                    return u.call(this, e)
                },
                hasOwnSounds: !1,
                getInfo: function() {
                    return {
                        type: this.hasOwnSounds ? "own-related-sounds" : "recommender",
                        version: this.audioSourceVersion
                    }
                }
            });

            function u(e) {
                var n = t.Deferred(),
                    r = this,
                    u = r.options.resource_id;

                function d() {
                    return a.prototype.fetch.call(r, e).fail(n.reject).done(n.resolve)
                }
                return e = e ? i.clone(e) : {}, s.getUserBySoundId(u).done((function(s) {
                    s.getPlan() === o.Plans.PRO_UNLIMITED ? r.isFullyPopulated() ? n.resolve() : function(e, n) {
                        var o = t.Deferred();
                        return t.whenAll(l.map(c.bind(null, e))).done((function() {
                            var e = i.chain(arguments).flatten().uniq().value(),
                                t = e.filter((function(e) {
                                    return e.id !== n
                                }));
                            o.resolve(t)
                        })), o
                    }(s.id, u).done((function(t) {
                        t.length >= 2 ? (r.hasOwnSounds = !0, r.next_href = !1, r.lastFetchTime = Date.now(), r[e.add ? "add" : "reset"](t, e), n.resolve()) : d()
                    })).fail(n.reject) : d()
                })), n
            }

            function c(e, n) {
                var i, o = t.Deferred();
                return (i = new n(null, {
                    resource_id: e
                })).setLimit(20), i.fetch({
                    add: !!i.length
                }).always((function() {
                    o.resolve.apply(o, i.models), i.release()
                })), o
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(132);
        e.exports = i.extend({
            baseUrl: function() {
                return this.getEndpointUrl("userTracks", {
                    id: this.options.resource_id
                })
            }
        })
    }, function(e, t, n) {
        var i = n(132);
        e.exports = i.extend({
            baseUrl: function() {
                return this.getEndpointUrl("spotlightItems", {
                    id: this.options.resource_id
                })
            },
            parse: function(e) {
                return e.collection.filter(o)
            }
        });

        function o(e) {
            return "track" === e.kind
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(681),
                s = n(11),
                r = n(40),
                a = n(18),
                l = {
                    OPENED: "overlay:opened",
                    CLOSED: "overlay:closed"
                },
                u = {
                    HIGH: 1,
                    MEDIUM: 2,
                    LOW: 3
                };
            e.exports = new a({
                applyTo: function(e) {
                    var t = e.constructor;
                    i.extend(t, {
                        Events: l,
                        PriorityLevels: u
                    }), e.defaults = i.defaults(e.defaults || {}, {
                        Subview: null,
                        subviewArgs: null,
                        togglerEl: null,
                        relativeElement: null,
                        relativeElementAnchor: "center bottom",
                        anchor: "center top",
                        offset: "0 0",
                        collision: "flip",
                        width: "auto",
                        minHeight: "auto",
                        domId: null,
                        focusable: !0,
                        margin: 0,
                        priorityLevel: null
                    }), e.element2selector = i.extend({}, e.element2selector, {
                        "last-tabbable": ":tabbable:last",
                        "first-tabbable": ":tabbable:first"
                    })
                },
                before: {
                    setup: function() {
                        i.bindAll(this, "onDocumentClick", "onDocumentKeydown", "onWindowResize"), c.call(this, !0), this.$el.css({
                            outline: "none"
                        }), this.onPositionComplete = d.bind(this)
                    },
                    dispose: function() {
                        c.call(this, !1), this.close()
                    }
                },
                defaults: {
                    template: function() {
                        return ""
                    },
                    isOpened: !1,
                    open: function() {
                        this.disposed || this.isOpened || !this.canBeOpened() || (this.isOpened = !0, this.rerender(), this.$el.appendTo(document.body), this.createContentView(), this.position(), this.options.focusable && this.$el.focus(), this.trigger(l.OPENED), s.trigger(l.OPENED, this))
                    },
                    close: function(e) {
                        !this.disposed && this.isOpened && (e || this.canBeClosed()) && (this.isOpened = !1, this.$el.detach(), this.closeDecorate(), this.trigger(l.CLOSED))
                    },
                    closeDecorate: t.noop,
                    canBeClosed: m,
                    canBeOpened: m,
                    getContentView: function() {
                        return this.subviews.contentView
                    },
                    createContentView: function() {
                        if (!this.getContentView() && this.options.Subview) {
                            var e, t = this.options,
                                n = t.Subview,
                                o = i.result(t, "subviewArgs");
                            e = this.addSubview(new n(i.extend({
                                resource_id: t.resource_id,
                                resource_type: t.resource_type
                            }, o)), "contentView"), this.$el.attr({
                                tabindex: "-1",
                                id: this.options.domId || i.uniqueId("overlay_")
                            }), this.getOverlayContentEl().append(e.render().el)
                        }
                    },
                    getOverlayContentEl: function() {
                        return this.$el
                    },
                    position: function() {
                        var e = this.options;
                        this.$el.css({
                            width: e.width,
                            minHeight: e.minHeight,
                            position: "fixed"
                        }).position({
                            my: e.anchor,
                            at: e.relativeElementAnchor,
                            of: e.relativeElement,
                            offset: e.offset,
                            collision: e.collision,
                            using: this.onPositionComplete
                        }), this.positionDecorate()
                    },
                    positionDecorate: t.noop,
                    onOverlayOpen: function(e) {
                        e.isOpened && e !== this && !h.call(this, e) && this.close(!0)
                    },
                    onDocumentClick: function(e) {
                        this.isOpened && !t(e.target).closest(this.options.togglerEl).length && (t(e.target).closest(this.$el).length || this.close())
                    },
                    onDocumentKeydown: function(e) {
                        if (this.isOpened)
                            if (e.which === o.ESC) {
                                this.close();
                                var t = this._parentView && this._parentView.$el;
                                t && t.focus()
                            } else if (e.which === o.TAB) {
                            if (!e.shiftKey && e.target === this.getElement("last-tabbable")[0]) return this.getElement("first-tabbable").focus(), !1;
                            if (e.shiftKey && e.target === this.getElement("first-tabbable")[0]) return this.getElement("last-tabbable").focus(), !1
                        }
                    },
                    onWindowResize: i.throttle((function() {
                        !this.disposed && this.isOpened && this.position()
                    }), 300)
                }
            });

            function c(e) {
                var n = e ? "on" : "off";
                s[n](l.OPENED, this.onOverlayOpen, this), t(document)[n]("keydown", this.onDocumentKeydown), document[e ? "addEventListener" : "removeEventListener"]("click", this.onDocumentClick, !0), t(window)[n]("resize", this.onWindowResize)
            }

            function d(e, n) {
                var i = n.element.element,
                    o = n.target.element,
                    s = t(window),
                    a = this.$$("arrow"),
                    l = e.top,
                    u = e.left,
                    c = s.width(),
                    d = s.height(),
                    h = i.outerWidth(),
                    p = i.outerHeight(),
                    m = this.options.margin,
                    f = c - h - this.options.margin,
                    g = this.options.margin,
                    v = d - p - this.options.margin;
                l = r.clamp(l, g, v), u = r.clamp(u, m, f), this.options.relativeElement && a.length && "center top" === this.options.anchor && (a.css({
                    left: o.offset().left - u + o.outerWidth() / 2 - a.outerWidth() / 2,
                    top: -a.outerHeight()
                }), l += a.outerHeight() + 3), i.css({
                    position: "fixed",
                    top: l,
                    left: u
                })
            }

            function h(e) {
                return p(this) < p(e)
            }

            function p(e) {
                return e.options.priorityLevel || u.MEDIUM
            }

            function m() {
                return !0
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i;
        i = {
            getPurchaseTitle: function(e, t) {
                var n, i = e.purchase_url,
                    o = this._shops;
                if (i && !e.purchase_title)
                    if (o.Flattr.test(i)) e.purchase_title = "Flattr";
                    else if (o["Getty Images"].test(i)) e.purchase_title = "License";
                else
                    for (n in e.purchase_title = t || "Buy", o)
                        if (o.hasOwnProperty(n) && o[n].test(i)) {
                            e.purchase_title += " on " + n;
                            break
                        } return e.purchase_title
            },
            getStoreName: function(e) {
                var t, n = e.purchase_url,
                    i = this._shops;
                if (n)
                    for (var o in i)
                        if (i[o].test(n)) {
                            t = o;
                            break
                        }
                return t
            },
            _shops: {
                Amazon: /ama?zo?n\.(co\.(jp|uk)|com|de|to)/,
                Beatport: /beatport\.(com|it)/,
                iTunes: /apple\.com/,
                Juno: /juno(\.co\.uk|download\.com)/,
                "Digital Tunes": /digital-tunes\.net/,
                'zero"': /zero-inch\.com/,
                trackitdown: /trackitdown\.net/,
                whatpeopleplay: /whatpeopleplay\.com/,
                DJdownload: /djdownload\.com/,
                Minno: /soundra\.in/,
                Flattr: /flattr\.com/,
                Ganxy: /ganxy\.com/,
                "Getty Images": /soundcloud\.(.*-)?gettyimages\.com/
            }
        }, e.exports ? e.exports = i : (window.SC = window.SC || {}, window.SC.OnlineStores = i)
    }, function(e, t, n) {
        var i = n(508),
            o = n(11),
            s = n(51),
            r = n(38),
            a = n(7);
        e.exports = r.extend(i, {
            css: n(693),
            template: n(695),
            className: "sharePanel",
            requiredAttributes: ["permalink_url"],
            events: {
                "click  .sharePanel__embedButton": function() {
                    this.toggleState("embed", !0).$$("embedCodeInput").click(), o.trigger(s.UI.EMBED_BUTTON_CLICKED, this.model)
                },
                "click  .sharePanel__embedCodeInput": function(e) {
                    l(e.target)
                },
                "click  .sharePanel__linkButton": function() {
                    this.toggleState("embed", !1).$$("linkCodeInput").click(), o.trigger(s.UI.LINK_BUTTON_CLICKED, this.model)
                },
                "click  .sharePanel__linkCodeInput": function(e) {
                    e.isTrigger || o.trigger(s.UI.LINK_INPUT_CLICKED, this.model);
                    l(e.target)
                }
            },
            defaults: {
                show_embed_options: !0
            },
            states: {
                embed: "embedCodeVisible"
            },
            setup: function() {
                this.options.show_embed_options = !!this.isAudible && this.options.show_embed_options, o.trigger(s.UI.SHARE_VIEW_OPENED, this.model)
            },
            getTemplateData: function(e) {
                this.options.show_embed_options && this.isAudible && "all" === this.model.get("embeddable_by") && (e.embed_code = this.model.getEmbedCode());
                var t = this.getShareURL();
                return e.share_url = a.stringify({
                    query: {
                        utm_source: "clipboard",
                        utm_campaign: "wtshare",
                        utm_medium: "widget",
                        utm_content: encodeURIComponent(t)
                    }
                }, t), e
            }
        });

        function l(e) {
            e.select()
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(572),
            s = n(19),
            r = n(30),
            a = n(508),
            l = n(31),
            u = n(38);
        e.exports = u.extend(a, {
            css: n(713),
            template: n(715),
            tagName: "button",
            className: "playButton",
            loadingTemplate: null,
            events: {
                click: function() {
                    s.toggle(s.getCurrentSound(), {
                        userAction: !0,
                        view: "play-button"
                    })
                },
                mouseenter: function() {
                    var e = s.getCurrentSound();
                    e && e.isPlayable() && e.initAudio()
                }
            },
            defaults: {
                size: "medium"
            },
            setup: function() {
                c.call(this, !0), this.observedAttributes = this.observedAttributes || {}, this.observedAttributes[l.SOUND] = ["playable"], this.$el.toggleClass(this.options.size).attr("role", "application")
            },
            dispose: function() {
                c.call(this, !1)
            },
            renderDecorate: function() {
                p.call(this), this.$el.css({
                    color: o.getColorParams().mainColorDarker
                })
            },
            getTemplateData: function() {
                return {
                    custom: o.getColorParams(),
                    gradient_id: i.uniqueId("playButton__gradient")
                }
            }
        });

        function c(e) {
            var t = e ? "on" : "off";
            s[t]("finish", h, this)[t]("play pause", d, this)
        }

        function d() {
            p.call(this)
        }

        function h() {
            this.disposed || p.call(this)
        }

        function p() {
            var e = s.getCurrentSound(),
                t = e && e.isPlaying(),
                n = e && (e.isProcessing() || !e.isPlayable()),
                i = t ? r.t("Pause") : r.t("Play");
            this.toggleState("replay", !1).toggleState("playing", t).toggleState("disabled", n).$el.attr("title", i)
        }
    }, function(e, t, n) {
        var i, o = n(5),
            s = n(133);
        e.exports = {
            getColorParams: function() {
                if (!i) {
                    var e = s(o.get("widgetParams").color);
                    i = {
                        mainColor: e.hex(),
                        mainContrastColor: e.contrast("#FFFFFF", "#333333").hex(),
                        mainColorShade: r(e).hex(),
                        mainColorDarker: e.darken(10).hex(),
                        mainColorLighter: e.lighten(15).hex()
                    }
                }
                return i
            }
        };

        function r(e) {
            var t = e.hue(function(e) {
                var t = e.toHsl();
                return (t.h <= 180 ? "-" : "+") + (t.l >= 25 && t.l <= 75 ? "12" : "24")
            }(e));
            return e.diff(t.hex()).brightness < 20 && t.darken(5), t
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(11),
            s = n(30),
            r = n(508),
            a = n(509),
            l = n(51),
            u = n(38);
        e.exports = u.extend(a, r, {
            tagName: "a",
            css: n(716),
            template: n(718),
            className: "logo",
            requiredAttributes: ["permalink_url"],
            defaults: {
                inverse: !1
            },
            events: {
                click: function() {
                    this.isSound && o.trigger("sound:deeplink", this.el, this.model);
                    o.trigger(l.UI.LOGO_LINK_CLICKED, this.model)
                }
            },
            setup: function() {
                this.$el.toggleClass("inverse", this.options.inverse)
            },
            renderDecorate: function() {
                this.$el.attr(c.call(this))
            },
            getColor: function() {
                return this.getState("alt") ? "#FF5500" : "#FFFFFF"
            },
            toggleAltColor: function() {
                this.toggleState("alt")
            },
            getTemplateData: function() {
                return {
                    gradient_id: i.uniqueId("logo_hover_")
                }
            }
        });

        function c() {
            var e = this.model,
                t = this.isAudible && e.isPrivate();
            return {
                href: t ? e.get("user").permalink_url : e.get("permalink_url"),
                title: t ? s.t("SoundCloud") : s.t("Play on SoundCloud")
            }
        }
    }, , , , , , function(e, t, n) {
        (function(t) {
            var n = {
                linear: function(e, t, n, i) {
                    return n * e / i + t
                },
                "ease-in": function(e, t, n, i) {
                    return n * (e /= i) * e + t
                },
                "ease-out": function(e, t, n, i) {
                    return -n * (e /= i) * (e - 2) + t
                },
                "ease-in-out": function(e, t, n, i) {
                    if ((e /= i / 2) < 1) return n / 2 * e * e + t;
                    return -n / 2 * (--e * (e - 2) - 1) + t
                },
                "ease-in-cubic": function(e, t, n, i) {
                    return n * (e /= i) * e * e + t
                },
                "ease-out-cubic": function(e, t, n, i) {
                    return n * ((e = e / i - 1) * e * e + 1) + t
                }
            };
            e.exports = {
                fadeOut: function(e, t) {
                    return i(e, !1)
                },
                fadeIn: function(e, t) {
                    return i(e, !0)
                },
                animateValue: function(e, i, s, r) {
                    var a = t.Deferred(),
                        l = s - i,
                        u = o(e),
                        c = n[r] || n.linear;
                    return l ? (u.progress((function(t) {
                        var n = c(e * t, i, l, e);
                        a.notify(n)
                    })).done(a.resolve), a.fail(u.reject), a) : a.resolve()
                }
            };

            function i(e, n) {
                var i = t.Deferred();
                return e.removeClass("g-opacity-transition").css({
                    opacity: n ? 0 : 1
                }).addClass("g-opacity-transition").css({
                    opacity: n ? 1 : 0
                }), o(200).progress(i.notify).done((function() {
                    e.removeClass("g-opacity-transition"), i.resolve()
                })), i
            }

            function o(e) {
                var n, i, o, s = t.Deferred(),
                    r = Date.now();
                return o = setInterval((function() {
                    i = Date.now() - r, n = Math.min(1, i / e), s.notify(n), 1 === n && (s.resolve(), clearInterval(o))
                }), 16), s.fail((function() {
                    clearInterval(o)
                })), s
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(50),
            o = n(509),
            s = n(38);
        e.exports = s.extend(o, {
            css: n(581),
            template: n(583),
            className: "artworkWaveform g-box-full",
            ModelClass: i,
            defaults: {
                show_artwork: !0,
                waveformStyle: "inverted",
                show_comments: !0
            },
            states: {
                "state-small": function(e) {
                    this.options.show_artwork = !e, this.toggleState("noArtwork", e), this.rerender()
                }
            }
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(582);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".artworkWaveform{position:relative}.artworkWaveform__artwork{position:absolute;top:-3px;left:0;width:80px;height:80px}.artworkWaveform__waveform{position:absolute;top:0;left:90px;right:0;bottom:0;height:100%}.artworkWaveform.noArtwork .artworkWaveform__waveform{left:0}@media (max-height:350px){.artworkWaveform__waveform{left:60px}.artworkWaveform .artworkWaveform__artwork{width:50px;height:50px}}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '  <div class="artworkWaveform__artwork">\n    ' + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(531), {
                    name: "$view",
                    hash: {
                        size: 80,
                        resource_type: null != t ? r(t, "_resource_type") : t,
                        resource_id: null != t ? r(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 4
                        },
                        end: {
                            line: 6,
                            column: 18
                        }
                    }
                })) + "\n  </div>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return (null != (r = l(i, "if").call(a, null != (r = null != t ? l(t, "_options") : t) ? l(r, "show_artwork") : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 8,
                            column: 7
                        }
                    }
                })) ? r : "") + '<div class="artworkWaveform__waveform">\n  ' + e.escapeExpression((n(506) || t && l(t, "$view") || e.hooks.helperMissing).call(a, n(517), {
                    name: "$view",
                    hash: {
                        key: "waveform",
                        waveformStyle: null != (r = null != t ? l(t, "_options") : t) ? l(r, "waveformStyle") : r,
                        show_comments: null != (r = null != t ? l(t, "_options") : t) ? l(r, "show_comments") : r,
                        resource_type: null != t ? l(t, "_resource_type") : t,
                        resource_id: null != t ? l(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 10,
                            column: 2
                        },
                        end: {
                            line: 15,
                            column: 23
                        }
                    }
                })) + "\n</div>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <a href="' + u("function" == typeof(r = null != (r = c(i, "permalink_url") || (null != t ? c(t, "permalink_url") : t)) ? r : l) ? r.call(a, {
                    name: "permalink_url",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 13
                        },
                        end: {
                            line: 3,
                            column: 30
                        }
                    }
                }) : r) + '" title="' + u((n(507) || t && c(t, "$t") || l).call(a, "Open on SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 39
                        },
                        end: {
                            line: 3,
                            column: 66
                        }
                    }
                })) + '" class="artwork__link">\n'
            },
            3: function(e, t, n, i, o) {
                return "    </a>\n"
            },
            5: function(e, t, i, o, s) {
                var r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '    <div class="artwork__follow g-opacity-transition">\n      ' + e.escapeExpression((n(506) || t && a(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(551), {
                    name: "$view",
                    hash: {
                        resource_id: null != (r = null != t ? a(t, "user") : t) ? a(r, "id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 20,
                            column: 6
                        },
                        end: {
                            line: 20,
                            column: 65
                        }
                    }
                })) + "\n    </div>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a, l = null != t ? t : e.nullContext || {},
                    u = e.hooks.helperMissing,
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="artwork__wrapper" style="' + c("function" == typeof(a = null != (a = d(i, "wrapperStyle") || (null != t ? d(t, "wrapperStyle") : t)) ? a : u) ? a.call(l, {
                    name: "wrapperStyle",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 1,
                            column: 37
                        },
                        end: {
                            line: 1,
                            column: 53
                        }
                    }
                }) : a) + '">\n' + (null != (r = d(i, "if").call(l, null != t ? d(t, "isLink") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 4,
                            column: 9
                        }
                    }
                })) ? r : "") + "    " + c((n(506) || t && d(t, "$view") || u).call(l, n(510), {
                    name: "$view",
                    hash: {
                        stretch: !0,
                        size: null != (r = null != t ? d(t, "_options") : t) ? d(r, "size") : r,
                        className: "artwork__img",
                        resource_type: null != t ? d(t, "_resource_type") : t,
                        resource_id: null != t ? d(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 5,
                            column: 4
                        },
                        end: {
                            line: 11,
                            column: 6
                        }
                    }
                })) + "\n" + (null != (r = d(i, "if").call(l, null != t ? d(t, "isLink") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 2
                        },
                        end: {
                            line: 14,
                            column: 9
                        }
                    }
                })) ? r : "") + (null != (r = d(i, "if").call(l, null != (r = null != t ? d(t, "_options") : t) ? d(r, "show_follow_button") : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 15,
                            column: 2
                        },
                        end: {
                            line: 22,
                            column: 9
                        }
                    }
                })) ? r : "") + "</div>\n"
            },
            useData: !0
        })
    }, function(e, t) {
        var n, i, o = ["__FOLLOWS_SIGNATURE_VERSION__", "__esModule", "userAgent", "length", "sign", "toString", "defineProperty", "navigator"];
        n = o, i = 287,
            function(e) {
                for (; --e;) n.push(n.shift())
            }(++i);
        var s = function(e, t) {
            return o[e -= 0]
        };
        Object[s("0x7")](t, s("0x2"), {
            value: !0
        }), t.sign = t.__FOLLOWS_SIGNATURE_VERSION__ = void 0, t[s("0x1")] = "1", t[s("0x5")] = function(e, n, i, o) {
            for (var r = window[s("0x0")][s("0x3")].split(/[ /]/), a = t[s("0x1")] + o + i + o + n + e + r[r[0][s("0x4")] % r[s("0x4")]], l = window.unescape(window.encodeURIComponent(a)), u = 7996111, c = 0; c < l[s("0x4")]; c += 1) u = (u >> 1) + ((1 & u) << 23), u += l.charCodeAt(c), u &= 16777215;
            return t[s("0x1")] + ":" + u[s("0x6")](16)
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.__FOLLOWS_SIGNATURE_SECRET__ = void 0, t.__FOLLOWS_SIGNATURE_SECRET__ = "5Dpr3ubBw8LFtbvQcd4Hx6hU"
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "  " + e.escapeExpression((n(507) || t && r(t, "$t") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, "Follow back", {
                    name: "$t",
                    hash: {
                        _context: "button",
                        _comment: "Shows up on a profile if the user who's profile is visited, is  following the current user. Clicking equals the follow action."
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 2,
                            column: 178
                        }
                    }
                })) + "\n"
            },
            3: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "selected") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.program(6, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 4,
                            column: 2
                        },
                        end: {
                            line: 8,
                            column: 9
                        }
                    }
                })) ? s : ""
            },
            4: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "    " + e.escapeExpression((n(507) || t && r(t, "$t") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, "Following", {
                    name: "$t",
                    hash: {
                        _context: "button",
                        _comment: "Shows up on a profile if the current user is already following this user of the profile. Clicking equals the unfollow action."
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 5,
                            column: 4
                        },
                        end: {
                            line: 5,
                            column: 177
                        }
                    }
                })) + "\n"
            },
            6: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "    " + e.escapeExpression((n(507) || t && r(t, "$t") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, "Follow", {
                    name: "$t",
                    hash: {
                        _context: "button",
                        _comment: "Shows up on a profile of someone who you're not following."
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 7,
                            column: 4
                        },
                        end: {
                            line: 7,
                            column: 107
                        }
                    }
                })) + "\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "followBack") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 9,
                            column: 7
                        }
                    }
                })) ? s : ""
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(39),
            o = n(589);
        e.exports = {
            get: function(e, t) {
                var n = i.Utils.escapeExpression(e.username || e.title || e.name);
                return !0 === t && (n = o.possessive(n)), n
            }
        }
    }, function(e, t) {
        e.exports = {
            possessive: function(e) {
                return e + "’s"
            }
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(39),
            s = e.exports = {
                getMarkup: function(e, t, n) {
                    if (Array.isArray(t)) return t.map((function(t) {
                        return s.getMarkup(e, t, n)
                    })).join("");
                    var r = [],
                        a = (n = n || {}).whitelist,
                        l = "self" === n.closingTag ? "/" : "",
                        u = !0 === n.closingTag ? "</" + e + ">" : "";
                    return i.each(t, (function(e, t) {
                        "style" === t && "object" == typeof e && (e = this.getStyleAttr(e)), a && -1 === a.indexOf(t) || r.push(" " + t + '="' + o.Utils.escapeExpression(e) + '"')
                    }), this), "<" + e + r.join("") + l + ">" + u
                },
                getStyleAttr: function(e) {
                    return i.map(e, (function(e, t) {
                        return null != e && "" !== e ? t + ":" + e + ";" : ""
                    })).join("")
                }
            }
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABRklEQVR4Ae3TW0/qQBQFYP///zjnaALGGmIgAise4iVGoJ2ZXulw6Q0M7VAl4qtMim2cSPRVw8rKPH3Z87BnjsQ3c4C/EmaCN//81a7jL+DyJL2/6HRa2r+7bB+k8gjbkQ6Z7hn2wKSWpI10gnEBgUb/czhDEDUDD+47hPaowGyQiqkYg3P4NqwSdgcKDE5n0fHSg+fAZiAlRPumR5cltATHyMfMgUPBCIYVbGnntdpkB+N65sCy4ZkwDTlOl7DKZX1ewFE3NMEYLAo6BBmi/xGifVtABp/A0EHkOHmvCoECckQM1AAlEm7bZ4rrFTBB6sI1YVtgBMyAThQ4KKBggmPswtvWhm2CqjDcwbUIEXJMfUw5PB+uAr28WqGdhZiHWCQIYgTR/0pdPcTPooJrkS9Wq23nsvnmtczm5Ul5FHnVw7/+QfANR6qScfZJ748AAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAABSUlEQVR4Ae3USU/CQBjGcb//93BLwFhDDETgiRKXGIF2ZrrSYekGhnaoEvEqc7DEAYLGa/950tsvbw9Nj8SfK8n/SUlKkglePz7R7uNfk/l5+nzdajW006fsMKHyETYjHbL2JQ6SpJKktXSEoSSyWvcQmSCI6oEH95tAe91Lsl4qxmIIzuHbsArS7u0lwcUkOpt78BzYDKQgaD506HwHsQTHwMfEgUPBCPob0tCuKpXRFomrmQPLhmfCNOQJfUNkN9WpSgbt0ARjsChoH6SP7k+C5qNKGHwCQweRJ+RbqQRQCUfEQA1QIglZE6aIjkoSpC5cE7YFRsAM6EQhPZUIJjiGLrz1bNgmqErCLbIUIUKOsY8xh+fDVYiXq0RmZyGmIWYJghhBdIei25f4XewiS5HPFov1pnL56rNo9fG297PMNyt/SiUpidoXYLHXVj7jKogAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAAAAACreq1xAAAB/0lEQVR4Ae3Wy2sTURgF8HPvnZm8TFpNVGig4EIEV/7PuhHcanfG7kSwSyEtCK2kJS6mpo15zNyH30eGkDqZSaLuvOdwbhKG+WV2CeJ/HA960IMe9KAH/1fQgx78/vno9ctXb44+DeLiSGydYe/ctbsHexgcn0xRFBFjqwy6eL+vkGUyft7F+khslVH/Bg+WHuqd/te/A9P2BGL1tvbF5R+B9qNdgEhwN/fPpruC7gz4KW6R9jRS6m9pne4Kxpe30FWDcXMEDZO7czLdETT7CTQSzMMZTB5EfbgjqJHSDOZUC4dcxluC+sRh3jPQGUnoenDy7u1xP9kMjmZjjJo3MMtqWGoulYNuffjhqhyMr6EbCXSYLiEmLSTyESLae/jlqhS8+IYUCS+jNLMQcFgf2Tmdl4FhsGQMk3BUwFCL0jovAy0jKSw0jevAFdSiyPFG0NEssjBKK4nDSoL8RQtGAWa4EoJqUJio7AmlwKKOz5XLCoWplIFRFQEUTfKoKqtEYVplYCWCYjAjVfaUAgGKoh6VgYeHCFFBgJDGjRDS+HNRnqgyMFDENRjlUSMqnzUIrIt62nJloHPoPGuiihqNwTq/p/MeHiMX2ei+aJqNv3rKQGll5axqxbTm5KxmxLxqQyWQ+3pjHO4mXp9r2g/aaPFK83+WPOhBD3rQgx704C/0vAjlkZBvuQAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAAAAAAcD2kOAAADRElEQVR4Ae3a3W8bRRQF8DMzO/barms3KZGgCqiCF174/995AiQoDwGlpKWCOCComigo/tidD9irXGlE692x1gYh7tHJ1XhffprJSElWUW/w70RDYIEFFlhggQUWWGCBBRZYYIEFFlhggf/7cIGeWb++vVv5WAzG0/lcITs93+y9uFwOB4VRKgRXV/G908fqn9nx5WSefArrZ/aTJ+rAO35jp8C3+FvqW/vZ7LCX6/tzvCP2uPzixUFhN9xypIOTy2fhgPCd1Wu8M2q+/CYecMfQFbZkUp3tGf7uR3BqYINtGd8s9gWfN6S//h0AQgTgyN6W6cvNfuDqt8sIrCZFAPDVGcFNt+bB8/3Aq4dTB1TKbACvagAB8Nge/cdyL7CH8kBjA8tBiJ0wJj/1hS9egQ+2sXnfgdqS29gPXi6uQIbnC1VBEYyIthQ3/eDVvAzEOKQ20LVj0xN2MDXvmOCmG1q3w9j0+rFI2PBejYRRM3L35W2lytHjD8b58Fn5cQJXEzrqRHU5vApHGs4vLk4+HWUe9fL6Kjb8BcEJyfWAprbFjIxStpy/v/l8kQmvp9MNsL7+NTITaTbrpAF5GZ+cv8yDa6iq4SdVsuNIDTxBi7yo45+vuuC7rz1/F2voCoi0zrpWLZn/sOqAF5vXIJX36hNSUdMn2Zk974AxZvKej4nkmQfP7Kjlqh12qBPD8QJMcna2x790wY7J9D6nF8pTd86yHY5M0kyvVeSpAYXdU7fCMaAmlcseVTEZ9v7Xotd8pFQPp4DIpfh+0paPFhgChlugAGhBk2Loa/fYVjgW0GhqwA5VJRMUvStftsJQMCA7wRqDn4TkckXskgftsCYjkUzCg3epkpmbo2w4sq25JlkUtMjPsc2BqUXqpSqfQYH8mCexHR6gZDUCSEhW0zPIz1Pd8avP6exRSJiU5BNOZnY+fOg7YH3sgIKq0ivNkuVJzYx5OnPogKMDYKFKsMotmDTp9Dn36lQ7tMKcR9qWEUNghGZOcL8e0LrkJ2Pgo1cBbVF2NDuytc9962PgAX1jJ+GvORhFXr81jVVoS0QIPgK5cMKjiJ7Xbz3pEfmfPYEFFlhggQUWWGCBBRZYYIEFFvj/AP8JxqJq1hyn+9oAAAAASUVORK5CYII="
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/cloudx200-41cfbaf1.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/cloudx500-d4b192f1.png"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAAA+klEQVR4Ae3SwW6CMBzH8b3/0yyCxB2UBMqh5T+N22HgYYlKiYurzPYFZlKgEPVXd9/3/Dl+n/SD/cO/Qll+fj8AN2HwEj1HGx9czzhd4rM1hnJObfMKQkF9HMFz5iA7A/glHBQHACUNkgDWQ1gDeBpCBaBZOrc0AOrCwUIjWDm4h9C8d+7NQKiblXWrH42hqS2sjQfqDmof3Fq49UHFLeQKwoMIUgvTAEyxZ5NYUJuIJ6y6CXeLMKFRSbjYXcFGTDO6KpvmzRgeo5huFkfHEWSc7sSzIaxSulsiB5BQrw6eEgTTpocfOYKi6GFOsLyDimHIVAtL8lRe0C+x0pdObhIh3wAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAABLklEQVR4Ae3TwU7CQACEYd//ZTQWay0EqRFZtqOEDWADxARs0NDSNhXucrC4i0AHEy7G//4lc5mz/Oj+PPknSRgujiGZcs4rlQtHZSyJnJrAOlFz5hxJ3Ra+arkpRZ4ENgmfIakHLS8hyEhCyx8SRMFIEaQDo84vyGmG9WHUJ8gIRkOCTGE0JUgGo4Qg+QBa/Q+GzKE1yxmyHGPTaEmRfBUU4nnFvjItSJqfkEQFiWgyKciEJcFNQZyAIUnPdmVBfNfuJSUkhlVtQ6tdtRAfIG/CqktsJeuWeN9DYnHp+diR37DkYhcZ2w3s7fbq5ScJriUOJO3hNolqKKkabxFIlCQfTZLcoTQvM8hAojQZGOQeRA86eW1RZKaRLqi6GmmCqvlNwjaoRLghCmQqX/cJyB29vQJiQrIAAAAASUVORK5CYII="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAAAAACreq1xAAAB7UlEQVR4Ae3W326iQBTH8X3/t6mhagOrdgQE5qeVqLtU8U+j22C6VUrr/d70QuVMq+d4sRd+H+CTzEzygx/FhbuCp3cFr+AVvIKbSRg4ThBONhcB195NvdXy/ftW/cZdy8HhrdL4TCtrKAX7doS9tP0gA0c/cVRjKAEzG6UamQD0NUpFHh/MFIjaf9hgDLI+GwxB1uGCeQdkwZYJLjXonpjgHIZmTDCFoQkTHMPQIxOcwlD6v9zhCoaWTPAFhtZMsOiCrJtzwQHIBgUXHINszAafQbbkD+wDiHqCxZ6DaCoA8x7xxlsB+L4ktutdABa7RxyVfMg+9LsEB/3eSX9FdjH2ij8KAUi89LyQgxNyCQVgcnCFFwBH2OuXACQnJ5aD2wB7hVspmNYPwKCWSsA8sWsBDgprdpIzwdfYuvNRyr+z4lcGmIUVJwJZ5FSi7Exw5VZaGsZ0s+KtzgBnDUvhm5TVnJ8IPtlVDyfkVe3VCeDavfVxYr7lv3wHplWFM1LV6degrkc4q6jW/QocNnF2jaEZzBwwcjIj2AEnHZrAlQIr9WwAwS2iwU0bzNRfEhxpMNMDEnTBzqXARQfsggUBQlK3DOYuBHlvJTDVEBTNSiBk9Y7BrQtR7tsRONYQFS2OwC6E9Q/B3IWw9ueZ/wH9c2Xk1VO9SQAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAAAAAAcD2kOAAAC4ElEQVR4Ae3Yb1OiUBTH8X3/L6bdEbbSUAgF4XJSzEprLcvwDxsVoD7f2Yc7cLnX4kcPlu8b+MyduXNmzvmWflE1XMNfC9dwDddwDddwDddwDddwEFQOB76u/ThS1aPvWsd/rgyettS2ZXv0N9tqq81JJfBGb9n0T/1We42Hx6pFmWx1hIbZmUc5eZqTQOGBTpwMQsJ3HeLWucXBLxoVpIUw2GFFMHNQ8KpLhZkBCL4gQQwDv5kiuPsKge88EexNITBJBIFtsWsnADhkYpitAfCcJHoAwLcy8AQAX8vAYwA8loEvAfCVFPzfvfgaAE9k4BsAPJWBpwD4QQaeAeCFDPwIgEMZeA2AYxn4HQCnl2LXTxHwVAxPIPBcDM8h8IsY3kDg7Ujk+lsInN6LxwcGjkTwbxC8nRS7N1sILP5euG1xNytyb3cwOI2HfHcYpzh4+8KHwy0QTndLnhvssFef/Yrj7tF3rv1znrvY4y97u2HWHWxTPJzeCDYXGHyVha8qgUdZ2K8E9rPwsBJ4kIUHlcCUzasE9nLgpAJ4kwPTCg8HLcrp7BkMR47q5MGu2o+A8NpRDOJ0rjgrEDw3GoZH3DxDMeblw/GkedwjQb3j5iQuFY6GSqtPEvVbiv9aGhyyRoeRZKzd8MJS4MBu6B4dkKcr9urT8KOhmnRwpnL+9Cn4l8b9UYK6P7X7D8NL7dSmD2ef6MsPwZGjiFhBlsJeD4enqkGfTldnB8LvdpNRCbFTNz4EXp6aVFJGcyMPBycOlVb/ZC0Lv2uMSoy1Y0mYHCq1vi8HhzqVnBFJwa5XNsxIBl51qfSMUAJmVH7eQAxHJgEy34TwyEPAbCyC4y5BMhMBfMcwsDsTwA6BYsVw2EPB3agQviRY10Vw0sPBvSJ44eLg/rIAHhIwnw8nXSRsJVz4gSFh94kLXxC0IQ9OLCxsJRx4zrCwu+DAPoHzObCFhq18eOGiYXeVC4+BZHZe/wEFdGx+SEG87AAAAABJRU5ErkJggg=="
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/userx200-308b1978.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/userx500-404ae612.png"
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "  " + e.escapeExpression((n(533) || t && a(t, "$image") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, {
                    name: "$image",
                    hash: {
                        stretch: null != (r = null != t ? a(t, "_options") : t) ? a(r, "stretch") : r,
                        class: "image__placeholder",
                        size: null != t ? a(t, "size") : t,
                        src: null != t ? a(t, "placeholderUrl") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 2,
                            column: 98
                        }
                    }
                })) + "\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return (null != (r = l(i, "if").call(a, null != t ? l(t, "placeholderUrl") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 3,
                            column: 7
                        }
                    }
                })) ? r : "") + e.escapeExpression((n(533) || t && l(t, "$image") || e.hooks.helperMissing).call(a, t, {
                    name: "$image",
                    hash: {
                        stretch: null != (r = null != t ? l(t, "_options") : t) ? l(r, "stretch") : r,
                        class: "image__full g-transition-opacity",
                        size: null != t ? l(t, "size") : t,
                        src: null != t ? l(t, "src") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 4,
                            column: 0
                        },
                        end: {
                            line: 4,
                            column: 99
                        }
                    }
                })) + "\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(605);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".image{position:relative;width:100%;height:100%}.image__placeholder{position:absolute}.image__full{position:relative;opacity:1}.image__full,.image__placeholder{background-size:cover;background-position:50% 50%}.image.fadeIn>.image__full{opacity:0}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(607);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".artwork,.artwork__img,.artwork__link{display:block;position:relative;height:100%;width:100%}.artwork__wrapper{position:absolute}.artwork__userAvatar{width:100%}.artwork__follow{opacity:0;position:absolute;bottom:10px;left:0;right:0}.artwork__follow .sc-button-follow{margin:auto;display:block}.artwork:hover .artwork__follow{opacity:1;display:block}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(10);
        e.exports = Class.extend([i.Events, {
            _layers: null,
            _raf: null,
            initialize: function() {
                this._layers = [], this.update = this.update.bind(this)
            },
            teardown: function() {
                var e;
                for (window.cancelAnimationFrame(this._raf), this._raf = null; e = this._layers.pop();) e.off("dirty", o, this)
            },
            getLayers: function() {
                return this._layers
            },
            addLayer: function(e) {
                this._layers.push(e), e.on("dirty", o, this), e.isDirty && s.call(this)
            },
            update: function() {
                var e, t;
                for (this._raf = null, e = 0; t = this._layers[e]; ++e) t.isDirty && t.update()
            }
        }]);

        function o() {
            s.call(this)
        }

        function s() {
            this._raf || (this._raf = window.requestAnimationFrame(this.update))
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(610);
        e.exports = o.extend({
            className: "g-box-full sceneLayer",
            render: function() {
                return this
            },
            addNode: function(e) {
                var t = new(0, e[0])(i.extend({
                    el: this.el,
                    scale: this.scale
                }, e[1]));
                t.className && this.$el.addClass(t.className), this.addSubview(t).on("dirty", s, this).render()
            },
            onCanvasResize: function() {
                i.invoke(this.subviews, "onResize")
            },
            setDirty: function(e) {
                (this.isDirty = e) && this.trigger("dirty")
            },
            update: function() {
                if (!this.disposed && this.isDirty) {
                    var e, t, n = !1;
                    for (this.context.clearRect(0, 0, this.el.width, this.el.height), e = 0; t = this.subviews[e]; ++e) t.draw(), n = n || t.isDirty;
                    this.setDirty(n)
                }
            }
        });

        function s() {
            this.setDirty(!0)
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(52),
                o = n(38),
                s = n(511),
                r = window.devicePixelRatio ? (Math.floor(window.devicePixelRatio) || 1) / i.backingStoreRatio : 1;
            e.exports = o.extend({
                tagName: "canvas",
                className: "g-box-full waveform__layer",
                attributes: {
                    "aria-hidden": "true"
                },
                context: null,
                scale: null,
                template: function() {
                    return ""
                },
                onCanvasResize: t.noop,
                _setup: function() {
                    this.context = this.el.getContext("2d"), this.scale = r, s.on("resize:x:debounced", a, this), o.prototype._setup.apply(this, arguments)
                },
                _dispose: function() {
                    this.disposed || (s.off("resize:x:debounced", a, this), o.prototype._dispose.apply(this, arguments))
                },
                renderDecorate: function() {
                    this.whenInserted().done(this.initCanvasDimensions.bind(this))
                },
                initCanvasDimensions: function(e, t) {
                    var n = this.context,
                        o = n.canvas,
                        s = this.scale;
                    o.width = (e || this.el.offsetWidth) * s, o.height = (t || this.el.offsetHeight) * s, i.isHiDPI && 1 !== s && n.scale(s, s)
                }
            });

            function a() {
                var e = this.$el.width(),
                    t = this.$el.height();
                this.initCanvasDimensions(e, t), this.onCanvasResize()
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        (function(t) {
            var i, o, s = n(2),
                r = n(32),
                a = n(54),
                l = n(53),
                u = l.typedArrays ? Uint8Array : Array,
                c = (l.corsImg ? "//w1.sndcdn.com/" : "/_waveform/") + "90GaSwazbrh1_m.json",
                d = new a({
                    maxLength: 500
                });
            e.exports = {
                loadWaveformDataForView: function(e) {
                    var t = function(e) {
                            if (!e || e.indexOf("/images/player-waveform-medium.png") > -1) return c;
                            return e.replace(/\/w1\./, "/wis.").replace(/\.png$/i, ".json")
                        }(e.model.get("waveform_url")),
                        n = r.defer(),
                        a = d.get(t);
                    if (n.done((function() {
                            e.waveformData = s.pluck(arguments, "data")
                        })), a) return n.resolve({
                        data: a,
                        key: t
                    });
                    return n.done(p), h(t).done((function(e) {
                        var i = e.samples.reduce(o(e.height), new u(e.samples.length));
                        n.resolve({
                            key: t,
                            data: i
                        })
                    })).fail((function() {
                        n.resolve({
                            key: t,
                            data: i()
                        })
                    })), n
                }
            };

            function h(e) {
                return t.ajax({
                    url: e,
                    type: "GET",
                    dataType: "json"
                })
            }

            function p(e) {
                d.set(e.key, e.data)
            }
            i = s.memoize((function() {
                var e, t = new u(1800);
                for (e = 0; e < 1800; ++e) t[e] = Math.round(15 * Math.sin(e / 1800 * Math.PI * 10) + 105);
                return t
            })), o = s.memoize((function(e) {
                return function(t, n, i) {
                    return t[i] = Math.round(Math.pow((e - n) / e, 1 / 1.5) * e), t
                }
            }))
        }).call(this, n(3))
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(5),
                s = n(534),
                r = n(135),
                a = n(513),
                l = n(30),
                u = n(19),
                c = n(521),
                d = n(556),
                h = n(615),
                p = n(38),
                m = n(511);
            e.exports = p.extend(d, {
                className: "commentPopover",
                template: n(624),
                css: n(625),
                defaults: {
                    avatarSize: 10,
                    darkText: !1,
                    flagSize: "small"
                },
                events: {
                    click: function(e) {
                        e.stopPropagation(), e.preventDefault();
                        var t = Math.floor((w.call(this) || 0) / 1e3),
                            n = this.sound;
                        n.isPrivate() || this.getState("snippet") || (window.open(n.get("permalink_url") + "#c=" + t + "&t=" + n.timecode()), u.pause(n))
                    },
                    mouseleave: function() {
                        this._hoverTimeout && (clearTimeout(this._hoverTimeout), this._hoverTimeout = null);
                        this.getCurrentState() !== c.ACTIVE_TIMESTAMP && this.goToState(c.INITIAL)
                    },
                    mouseenter: function() {
                        this._hovered || (this._hoverTimeout = setTimeout(function() {
                            this._hovered = !0, this._hoverTimeout = null
                        }.bind(this), 50))
                    },
                    "mousemove .commentPopover__scrub": function(e) {
                        var t = this.getTimestampByMouseEvent(e),
                            n = y.call(this, e),
                            i = this.getCurrentState();
                        if (i === c.ACTIVE_TIMESTAMP) return;
                        if (i === c.CURRENT_COMMENT && this.getCurrentComment() === n) return;
                        this.setInteracting(!0), n && this._hovered ? this.goToState(c.CURRENT_COMMENT, n.get("timestamp"), n) : this.goToState(c.CURRENT_TIMESTAMP, t)
                    }
                },
                _hovered: !1,
                _hoverTimeout: null,
                setup: function(e) {
                    this.collection = new s(null, {
                        sound_id: e.sound_id,
                        secret_token: this.sound.get("secret_token")
                    }), i.bindAll(this, "onClickOutsideOfPointer"), f.call(this, !0), this.toggleState("darkText", e.darkText).toggleState("smallAvatar", 10 === e.avatarSize), this.$el.addClass(e.flagSize)
                },
                dispose: function() {
                    f.call(this, !1), t("html").off("mousedown", this.onClickOutsideOfPointer)
                },
                renderDecorate: function() {
                    var e = this.getCurrentComment(),
                        t = this.sound.duration();
                    this.toggleState("visible", !!e).toggleState("commentLeft", !1).toggleState("snippet", this.sound.getMediaDuration() < t), e && this.setPosition(e.get("timestamp") / t)
                },
                setPosition: function(e) {
                    var t = this.cachedDimensions().width,
                        n = Math.floor(e * t) - this.options.avatarSize / 2,
                        i = 0,
                        o = t - n,
                        s = this.$$("wrapper");
                    e > .5 ? (o = t - o, s.width(o), i = this.getState("leaveCommentPlaceholder") ? -1 * this.$$("body").outerWidth() : -1 * (this.$$("username").outerWidth() + this.$$("body").outerWidth()), this.toggleState("commentLeft", !0)) : (s.width(o), this.toggleState("commentLeft", !1)), s.css({
                        transform: "translateX(" + n + "px)",
                        marginLeft: i
                    }), this.$$("avatar").css({
                        left: -i
                    })
                },
                onAdd: function(e) {
                    this.toggleState("visible", !0), _.call(this, e)
                },
                onRemove: function() {
                    this.goToState(c.INITIAL)
                },
                onInitialState: function() {
                    this.setInteracting(!1), _.call(this)
                },
                onCurrentCommentChange: function() {
                    _.call(this)
                },
                onCurrentTimestamp: function(e) {
                    this.sound.isPrivate() || !this.isInteracting() || this.getState("snippet") ? _.call(this) : v.call(this, e)
                },
                onActiveTimestamp: function(e, n) {
                    _.call(this, n), t("html").on("mousedown", this.onClickOutsideOfPointer)
                },
                onClickOutsideOfPointer: function(e) {
                    this.disposed || this.getCurrentState() !== c.ACTIVE_TIMESTAMP || t(e.target).closest(".commentPopover__wrapper").length || (this.goToState(c.INITIAL), t("html").off("mousedown", this.onClickOutsideOfPointer))
                }
            });

            function f(e) {
                var t = e ? "on" : "off";
                m[t]("resize:debounced", this.resetCachedDimensions, this), this.sound[t]("finish", g, this)
            }

            function g() {
                this.isInteracting() || this.goToState(c.INITIAL)
            }

            function v(e) {
                var t = o.get("me"),
                    n = r.timecode(e),
                    i = t ? a.urlFrom(t.attributes, 10) : a.getDefaultImage("user", 10);
                this.toggleState("leaveCommentPlaceholder", !0), this.$$("body").text(""), this.$$("body").attr("title", "").html(l.t("Leave a comment at [[timecode]]", {
                    timecode: n
                })), this.$$("avatar").attr("title", "").css({
                    "background-image": "url(" + i + ")"
                }), this.setPosition(e / this.sound.duration()), this.toggleState("visible", !0)
            }

            function _(e) {
                var t = this.getState("visible");
                e = e || this.getCurrentComment(), this.toggleState("leaveCommentPlaceholder", !1), e ? (b.call(this, e), this.setPosition(e.get("timestamp") / this.sound.duration()), this.toggleState("visible", !0)) : t && !e && this.toggleState("visible", !1)
            }

            function b(e) {
                var t = e.get("user"),
                    n = t.username,
                    i = h(e.get("body"), {
                        paragraphs: !1,
                        className: "sc-truncate",
                        links: !1
                    }),
                    o = l.t("Click to reply to [[username]]", {
                        username: n
                    }, {
                        comment: "This is an alt text on the reply button"
                    }),
                    s = a.urlFrom(t, 10);
                this.$$("username").attr("href", t.permalink_url).attr("title", o).text(n), this.$$("body").attr("title", o).html(i), this.$$("avatar").attr("title", o).css({
                    "background-image": s ? "url(" + s + ")" : ""
                })
            }

            function y(e) {
                var t = this.getTimestampByMouseEvent(e),
                    n = Math.floor(this.options.avatarSize / 2 / this.cachedDimensions().width * this.sound.duration());
                return this.collection.getCommentAtTimestamp(t, n)
            }

            function w() {
                var e = this.stateMachine.currentComment;
                return e ? e.get("timestamp") : this.stateMachine.currentTimestamp
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(33);
        e.exports = i.extend({
            parse: function(e) {
                return null === e.timestamp && (e.timestamp = 1 / 0), e.user.avatar_url = e.user.avatar_url.replace("http:", "https:"), e
            }
        }, {
            EMPTY_TIMESTAMP: 1 / 0
        })
    }, function(e, t, n) {
        var i, o = n(2),
            s = n(10),
            r = n(534),
            a = n(83),
            l = n(50),
            u = n(521);

        function c(e) {
            var t = e ? "on" : "off";
            this[t](u.INITIAL, this.onInitialState, this)[t](u.CURRENT_COMMENT, this.onCurrentComment, this)[t](u.CURRENT_TIMESTAMP, this.onCurrentTimestamp, this)[t](u.ACTIVE_TIMESTAMP, this.onActiveTimestamp, this), this.sound[t]("time", this.onAudioTime, this)
        }(i = function() {
            this.setup.apply(this, arguments)
        }).extend = s.Model.extend, o.extend(i.prototype, s.Events, {
            constructor: i,
            currentComment: null,
            activeTimestamp: null,
            currentTimestamp: null,
            commentQuotaTimeout: null,
            commentQuotaExceeded: !0,
            commentIntervalTimeout: null,
            commentIntervalExceeded: !0,
            currentState: u.INITIAL,
            interactingWithComments: !1,
            setup: function(e, t, n) {
                this.collection = new r(null, {
                    sound_id: e,
                    secret_token: n
                }), this.sound = new l({
                    id: e,
                    resource_id: t
                }), c.call(this, !0)
            },
            dispose: function() {
                c.call(this, !1), this.sound.release(), this.collection.release()
            },
            onInitialState: function() {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = null
            },
            onCurrentComment: function(e, t) {
                this.activeTimestamp = null, this.currentComment = t, this.currentTimestamp = null
            },
            onCurrentTimestamp: function(e) {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = e
            },
            onActiveTimestamp: function(e) {
                this.activeTimestamp = e, this.currentComment = null, this.currentTimestamp = null
            },
            goToState: function(e) {
                var t = this.canGoToState.apply(this, arguments);
                return t && (this.currentState = e, this.trigger.apply(this, arguments)), t
            },
            canGoToState: function(e) {
                var t = this.activeTimestamp && this.currentState === u.ACTIVE_TIMESTAMP;
                switch (e) {
                    case u.CURRENT_TIMESTAMP:
                        return !t;
                    case u.CURRENT_COMMENT:
                        return this.commentIntervalExceeded && arguments[1] !== this.currentComment && !t;
                    case u.INITIAL:
                        return !0;
                    case u.ACTIVE_TIMESTAMP:
                        return arguments[1] !== this.activeTimestamp;
                    default:
                        return !1
                }
            },
            onAudioTime: o.throttle((function(e) {
                if (!this.disposed) {
                    var t, n = e.sound.currentTime();
                    !this.interactingWithComments && this.sound.isPlaying() && ((t = this.collection.getCommentAtTimestamp(n, 300)) ? this.goToState(u.CURRENT_COMMENT, n, t) && (clearTimeout(this.commentIntervalTimeout), this.commentIntervalExceeded = !1, setTimeout(function() {
                        this.commentIntervalExceeded = !0
                    }.bind(this), 1e3), clearTimeout(this.commentQuotaTimeout), this.commentQuotaExceeded = !1, this.commentQuotaTimeout = setTimeout(function() {
                        this.commentQuotaExceeded = !0, this.onAudioTime(e)
                    }.bind(this), 3e3)) : this.commentQuotaExceeded && this.goToState(u.CURRENT_TIMESTAMP, n))
                }
            }), 300)
        }), e.exports = a.applyTo(i, {
            onCleanup: function(e) {
                e.dispose()
            },
            cleanupInstantly: !0,
            hashFn: function(e) {
                return e
            }
        })
    }, function(e, t, n) {
        "use strict";
        var i = n(557),
            o = n(616),
            s = window.document.createElement.bind(window.document),
            r = window.Node;

        function a(e, t) {
            return o(e, i({
                createElement: s,
                Node: r
            }, t))
        }
        a.redirectLink = o.redirectLink, a.withDefaults = function(e) {
            return o.withDefaults(i({
                createElement: s,
                Node: r
            }, e))
        }, e.exports = a
    }, function(e, t, n) {
        "use strict";
        var i = n(557),
            o = n(617),
            s = n(618),
            r = n(619),
            a = n(620),
            l = n(621),
            u = n(622),
            c = n(623);
        e.exports = T;
        var d = /\b((?:https?:\/\/|www\d{0,3}\.|(?:[a-z0-9\-]+\.)+[a-z]{2,4}\/)[^\s'’"]*[^\s`!()\[\]{};:'".,<>?«»“”‘’])/gi,
            h = /(\b(?:[0-5]?[0-9])(?::[0-5][0-9]){1,2}\b)/g,
            p = /([a-z0-9._%+&\-]+@[a-z0-9.\-]+\.[a-z]{2,24})/gi,
            m = /(\s|[^\w/]|^)@([\w\-]+)/g,
            f = /( |^)(#([\w-]+))/gm,
            g = /^((?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.com)\/?|^\//i,
            v = /^((?:https?:\/\/)?([a-z0-9-]+\.)*soundcloud\.com)(?:\/|$)/i,
            _ = /^(?:ht|f)tps?:\/\//i,
            b = /(?:[ \t]*\r?\n[ \t]*){2,}/,
            y = /<\/p>/g,
            w = /<br\s*\/?>/g,
            x = /<\/?[a-z].*?>/gi,
            k = /\r?\n/g,
            A = /[ \t]{2,}/g,
            S = /[\r\n]+/g,
            C = /<a\s+[^>]*?href=(['"]([^'"\s]+)['"]|[^'"\s]+)[^>]*?>(.+?)<\/a>/gi,
            P = {
                paragraphs: !0,
                links: !0,
                externalLinks: !0,
                internalLinks: !0,
                userLinks: !0,
                deepLinks: !1,
                whitelist: [],
                internalLinksBaseUrl: "/",
                isOpeningNewWindow: !1,
                maxLength: null,
                truncateExternalLinks: !0,
                maxExternalLinksLength: 50,
                hashtagLinks: !0,
                splitWordsAtLength: null,
                redirectorPattern: null,
                addChecksum: null
            };

        function T(e, t) {
            var n = i({}, P, t),
                E = n.links,
                I = n.userLinks,
                D = n.internalLinks,
                M = n.externalLinks,
                L = n.deepLinks,
                O = n.escapeExpression,
                R = n.hashtagLinks,
                N = n.internalLinksBaseUrl,
                U = n.isOpeningNewWindow,
                B = n.maxExternalLinksLength,
                H = n.maxLength,
                z = n.paragraphs,
                $ = n.splitWordsAtLength,
                F = n.whitelist,
                V = n.redirectorPattern,
                W = n.addChecksum,
                j = n.createElement,
                G = n.Node,
                K = !1 !== O;
            if ("string" != typeof e) return "";
            E ? I || D || M || (E = !1) : I = D = M = !1;
            var Q = E ? l() : {},
                J = Q.flatten,
                q = Q.addPlaceholder;
            return d.lastIndex = m.lastIndex = p.lastIndex = 0, e = o(e, {
                createElement: j
            }), E && (e = e.replace(C, (function(e, t, n, i) {
                var o = n || t;
                return q(o, i !== o ? i : null)
            })).replace(d, (function(e, t) {
                return q(t)
            })).replace(p, (function(e, t) {
                return q("mailto:" + t)
            }))), e = e.replace(y, "\n\n").replace(w, "\n").replace(A, " "), e = F && F.length ? e.replace(new RegExp("<(?!\\s*\\/?(" + F.join("|") + ")\\b)[^>]*>", "ig"), "") : e.replace(x, ""), K && (e = s(e)), E && (e = J(e = e, (function(e, t) {
                var o = {},
                    a = "",
                    l = _.test(e) ? e : "http://" + e,
                    u = 0 === e.indexOf("mailto:"),
                    d = D && g.test(e);
                if (u) o.href = e, o.text = e.replace("mailto:", "");
                else if (d) o.href = e.replace(g, N), o.text = e.replace(_, "");
                else if (M) {
                    var h = v.test(l);
                    o.href = h ? l : r(V, l, v), h || (o.title = l, o.rel = "nofollow ugc"), o.text = c(e, B, _), o.target = "_blank"
                } else o.href = e;
                t && (K ? a = T(t, i({}, n, {
                    paragraphs: !1,
                    splitWordsAtLength: 0
                })).trim() + (/[!?:;.]$/.test(t) ? " " : ": ") : o.text = t);
                var p = s(o.href);
                return u || d || !M || v.test(l) || !V || "function" != typeof W || (p = W(p, l)), a + (o.text ? '<a href="' + p + '"' + (o.rel ? ' rel="' + o.rel + '"' : "") + (o.target ? ' target="' + o.target + '"' : "") + (o.title ? ' title="' + s(o.title) + '"' : "") + ">" + (K ? s(o.text) : o.text) + "</a>" : p)
            })), I && (e = e.replace(m, '$1@<a href="' + N + '$2"' + (U ? ' target="_blank"' : "") + ">$2</a>")), R && (e = e.replace(f, '$1<a href="/tags/$3">$2</a>')), L && (e = e.replace(h, '<a href="#t=$1">$1</a>'))), H && (e = a(e, H, {
                createElement: j,
                Node: G
            })), $ > 0 && (e = u(e, $, {
                createElement: j,
                Node: G
            })), e = z ? e.split(b).map((function(e) {
                return "<p>" + e.trim().replace(k, "<br>") + "</p>"
            })).join("") : e.replace(S, " ").replace(A, " ")
        }

        function E(e, t) {
            var n = e;
            return t && t.redirectorPattern && (n = r(t.redirectorPattern, e, v)), t && t.redirectorPattern && "function" == typeof t.addChecksum && n !== e && (n = t.addChecksum(n, e)), n
        }
        T.redirectLink = E, T.withDefaults = function(e) {
            var t = i({}, P, e),
                n = function(e, n) {
                    return T(e, n ? i({}, t, n) : t)
                };
            return n.redirectLink = function(e, n) {
                return E(e, n ? i({}, t, n) : t)
            }, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = (0, t.createElement)("textarea");
            return n.innerHTML = e.replace(i, "&lt;"), n.value
        };
        var i = /</g
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            if (null == e || !1 === e) return "";
            if (!s.test(e)) return e;
            return e.replace(o, r)
        };
        var i = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            o = /&(?!\w+;)|[<>"'`]/g,
            s = /[&<>"'`]/,
            r = function(e) {
                return i[e] || "&amp;"
            }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n) {
            if (!e || n && n.test(t)) return t;
            return e.replace(i, encodeURIComponent(t))
        };
        var i = /%s/
    }, function(e, t, n) {
        "use strict";
        var i = n(558);
        e.exports = function(e, t, n) {
            var o = n.createElement,
                s = n.Node;
            if (e.length < t) return e;
            var r = o("div"),
                a = o("div");
            return a.innerHTML = r.innerHTML = e, i(r, (function(e) {
                if (t > 0) {
                    var n = e.data.length;
                    (t -= n) <= 0 && (e.data = e.substringData(0, e.data.length + t))
                } else e.data = ""
            }), (function() {
                return t > 0
            }), (function(e) {
                var t = void 0;
                for (; e;) t = e, e = e.nextSibling, t.parentNode.removeChild(t)
            }), {
                Node: s
            }), r.innerHTML + (r.innerHTML === a.innerHTML ? "" : "&hellip;")
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function() {
            var e = [],
                t = Math.floor(1e4 * Math.random()),
                n = /xxxLINK[0-9]+\|([0-9]+)xxx/g;
            return {
                addPlaceholder: function(n, i) {
                    return e.push({
                        href: n,
                        text: i
                    }), "xxxLINK" + t + "|" + (e.length - 1) + "xxx"
                },
                flatten: function(t, i) {
                    var o = t.replace(n, (function(t, n) {
                        var o = e[parseInt(n, 10)];
                        return o ? i(o.href, o.text) : t
                    }));
                    return e.length = 0, o
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        var i = n(558);
        e.exports = function(e, t, n) {
            var o = n.createElement,
                s = n.Node,
                r = new RegExp("\\S{" + t + ",}", "g"),
                a = new RegExp("(\\S{" + Math.floor(t / 2) + "}(?=\\S{2}))");
            if (!r.test(e)) return e;
            var l = o("div");
            return l.innerHTML = e, i(l, (function(e) {
                r.lastIndex = 0, r.test(e.data) && (e.data = e.data.replace(r, (function(e) {
                    return e.split(a).filter(Boolean).join("​")
                })))
            }), void 0, void 0, {
                Node: s
            }), l.innerHTML
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var r, a = e[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    o = !0, s = e
                } finally {
                    try {
                        !i && a.return && a.return()
                    } finally {
                        if (o) throw s
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        e.exports = function(e, t, n) {
            var s = (e = n ? e.replace(n, "") : e).match(o) || [],
                r = i(s, 1)[0];
            if (r && e.length > t) {
                var a = e.search(o) + r.length,
                    l = Math.floor((t - a) / 2);
                return e.slice(0, a + l) + "&hellip;" + e.slice(-l)
            }
            return e
        };
        var o = /\.[a-z-]{2,30}\//
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lambda,
                    a = e.escapeExpression,
                    l = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="commentPopover__scrub"></div>\n<div class="commentPopover__wrapper g-opacity-transition">\n  <div class="commentPopover__avatar" style="width: ' + a(r(null != (s = null != t ? l(t, "_options") : t) ? l(s, "avatarSize") : s, t)) + "px; height: " + a(r(null != (s = null != t ? l(t, "_options") : t) ? l(s, "avatarSize") : s, t)) + 'px;"></div>\n  <a class="commentPopover__username sc-truncate" tabindex="-1" href=""></a>\n  <p class="commentPopover__body sc-truncate sc-pointer"></p>\n</div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(626);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, '.commentPopover{position:absolute;width:100%;top:70%;height:20px;opacity:0;transition:opacity .25s;z-index:9}.commentPopover.leaveCommentPlaceholder .commentPopover__avatar{pointer-events:none}.commentPopover.leaveCommentPlaceholder .commentPopover__username{display:none}.commentPopover.visible{opacity:1}.commentPopover__scrub{height:100%}.commentPopover:not(.snippet) .commentPopover__scrub{cursor:pointer}.commentPopover__wrapper{width:50%;transition:transform 50ms}.commentPopover:hover .commentPopover__wrapper{transition:transform 0}.commentPopover__body,.commentPopover__username{transition:padding-top .25s;box-sizing:border-box;display:inline-block}.commentPopover__username{position:relative;float:left;max-width:30%;padding-left:10px}.commentPopover.commentLeft .commentPopover__username{float:none;padding-left:0;padding-right:10px}.commentPopover__username,a.commentPopover__username:hover,a.commentPopover__username:visited{color:#f50}.commentPopover__username:before{content:"";position:absolute;top:0;bottom:0;left:0;width:1px;display:block;background-image:linear-gradient(rgba(255,85,0,.95),rgba(255,85,0,.1))}.commentPopover.commentLeft .commentPopover__username:before{right:0;left:auto}.commentPopover__body{margin:0;padding-left:10px;color:#fff;max-width:70%}.commentPopover.leaveCommentPlaceholder.commentLeft .commentPopover__body{position:absolute;left:20px}.commentPopover.leaveCommentPlaceholder.commentLeft.smallAvatar .commentPopover__body{left:10px}.commentPopover.commentLeft .commentPopover__body{float:left;padding-left:0;padding-right:10px}.commentPopover__avatar{position:absolute;top:-20px;background-size:cover;display:none}.commentPopover.visible .commentPopover__avatar{display:block;cursor:pointer}.commentPopover.smallAvatar{height:10px}.commentPopover.smallAvatar .commentPopover__avatar{top:-10px}.commentPopover.darkText .commentPopover__body{color:#333}.commentPopover.small .commentPopover__body,.commentPopover.small .commentPopover__username{padding-top:1px}.commentPopover.small.visible .commentPopover__body,.commentPopover.small.visible .commentPopover__username{padding-top:2px}.commentPopover.medium .commentPopover__body,.commentPopover.medium .commentPopover__username{padding-top:10px}.commentPopover.medium.visible .commentPopover__body,.commentPopover.medium.visible .commentPopover__username{padding-top:13px}.commentPopover.large .commentPopover__body,.commentPopover.large .commentPopover__username{padding-top:20px}.commentPopover.large.visible .commentPopover__body,.commentPopover.large.visible .commentPopover__username{padding-top:23px}.visualSound.streamContext.playing .commentPopover__body{color:#e5e5e5}.visualSound.streamContext.playing .commentPopover__body,.visualSound.streamContext.playing .commentPopover__username{padding-top:6px}.visualSound.streamContext.playing .commentPopover.visible .commentPopover__body,.visualSound.streamContext.playing .commentPopover.visible .commentPopover__username{padding-top:9px}', ""]), e.exports = t
    }, function(e, t, n) {
        var i, o = n(2),
            s = n(52),
            r = n(535),
            a = n(559),
            l = n(38),
            u = n(514),
            c = n(518);
        e.exports = l.extend(c, a, r, {
            gradientName: "backgroundGradient",
            _pattern: null,
            _currentPlayingStep: 0,
            _currentHoverStep: 0,
            _isHovered: !1,
            _isPlaying: !1,
            setup: function() {
                this._currentPlayingStep = this.model.isPlaying() ? 13 : 0, o.bindAll(this, "onHover"), this.onHover = this.onHover.bind(this), d.call(this, !0)
            },
            dispose: function() {
                d.call(this, !1)
            },
            onHover: function(e) {
                this._isHovered = "mouseenter" === e.type, this.setDirty(!0)
            },
            onResize: function() {
                this._pattern = null
            },
            draw: function() {
                var e = this.context,
                    t = this.options.scale,
                    n = this.canvas.height,
                    o = m(this._currentPlayingStep, this.model.isPlaying()),
                    s = m(this._currentHoverStep, !!this._isHovered);
                this._currentPlayingStep = o, this._currentHoverStep = s, this.isAnimating = h(s) || h(o);
                var r = Math.max(o, s),
                    a = this.getPlayableWidth(),
                    l = this.getUnplayableWidth();
                e.save(), e.fillStyle = f.call(this), e.scale(1 / t, 1 / t), e.globalAlpha = i(r), e.fillRect(0, 0, a, n), l && (e.globalAlpha = .2, e.fillRect(a, 0, l, n)), e.restore()
            }
        });

        function d(e) {
            var t = e ? "on" : "off";
            this.model[t]("play", p, this), this.options.$eventEl[t]("mouseenter mouseleave", this.onHover)
        }

        function h(e) {
            return e > 0 && e < 13
        }

        function p() {
            this.setDirty(!0)
        }

        function m(e, t) {
            var n = t ? 13 : 0;
            return n > e ? e + 1 : n < e ? e - 1 : e
        }

        function f() {
            if (this._pattern) return this._pattern;
            var e, t, n, i, o, r = document.createElement("canvas"),
                a = this.options,
                l = this.canvas,
                c = r.getContext("2d"),
                d = a.scale,
                h = l.width / d,
                p = l.height / d,
                m = a.waveformHeight,
                f = u.getConfig("gapWidth"),
                g = u.getConfig("barWidth"),
                v = g + f,
                _ = a.upperPartHeight * p,
                b = p - _,
                y = this.getFillStyle(),
                w = f > 0,
                x = w && this.getFillStyle(1, "gapGradient"),
                k = null,
                A = null;
            for (r.width = l.width, r.height = l.height, s.isHiDPI && 1 !== d && c.scale(d, d), c.beginPath(), c.fillStyle = x, e = 0; e < h; e += v) i = this.getWaveformHeightAt(e), t = Math.floor(i / m * _), n = Math.floor((1 - i / m) * b + _), c.rect(e, t, g, n - t), w && e && (o = Math.max(t, k), c.fillRect(e - f, o, f, Math.min(n, A) - o)), k = t, A = n;
            return c.fillStyle = y, c.fill(), this._pattern = this.context.createPattern(r, "no-repeat"), this._pattern
        }
        i = o.memoize((function(e) {
            var t = Math.max(0, (e - 3) / 10);
            return -Math.cos(t * Math.PI) / 8 + .875
        }))
    }, function(e, t, n) {
        var i = n(133),
            o = n(5),
            s = "51,51,51",
            r = "153,153,153",
            a = "255,255,255";

        function l(e, t) {
            return 1 === t ? "rgb(" + e + ")" : "rgba(" + e + "," + t + ")"
        }
        e.exports = {
            _config: {
                barWidth: 2,
                gapWidth: 1,
                fadeInSteps: 10,
                fixedTimeIndicator: !0,
                commentLines: !1,
                fullHighlight: !0
            },
            default: function() {
                var e = i(o.get("widgetParams").color).toRgb(),
                    t = [e.r, e.g, e.b].join(","),
                    n = "255,85,0" === t ? "255,51,0" : t;
                return {
                    progressGradient: [
                        [0, t],
                        [.7, n],
                        [.701, t],
                        [1, t]
                    ],
                    backgroundGradient: [
                        [0, s],
                        [.7, s],
                        [.701, s, .5],
                        [1, s, .5]
                    ],
                    gapGradient: [
                        [0, "102,102,102", 0],
                        [.28, "82,82,82", .6],
                        [.7, s],
                        [.701, s, .25],
                        [1, s, .25]
                    ],
                    scrubberGradientBackward: [
                        [0, s, .5],
                        [.7, s, .5],
                        [.701, s, 0],
                        [1, s, 0]
                    ],
                    scrubberGradientForward: [
                        [0, t, .5],
                        [.7, n, .5],
                        [.701, t, 0],
                        [1, t, 0]
                    ],
                    highlightGradientPlayed: [
                        [0, t],
                        [.7, n],
                        [.701, t],
                        [1, t]
                    ],
                    highlightGradientUnplayed: [
                        [0, "0,0,0", .5],
                        [1, "0,0,0", .5]
                    ],
                    progressIndicatorBg: l("0,0,0", .8),
                    progressIndicatorColor: l("255,101,0", 1),
                    durationIndicatorBg: l("0,0,0", .8),
                    durationIndicatorColor: l(r, 1),
                    dividerColorPrevious: l("255,0,0", 1),
                    dividerColorUpcoming: l(r, 1)
                }
            },
            inverted: function() {
                var e = i(o.get("widgetParams").color).toRgb(),
                    t = [e.r, e.g, e.b].join(","),
                    n = "255,85,0" === t ? "255,51,0" : t;
                return {
                    progressGradient: [
                        [0, t],
                        [.7, n],
                        [.701, t],
                        [1, t]
                    ],
                    backgroundGradient: [
                        [0, a],
                        [.7, a],
                        [.701, a, .4],
                        [1, a, .4]
                    ],
                    gapGradient: [
                        [0, a, 0],
                        [.28, a, .3],
                        [.7, a, .5],
                        [.701, a, .125],
                        [1, a, .125]
                    ],
                    scrubberGradientBackward: [
                        [0, a, .5],
                        [.7, a, .5],
                        [.701, a, 0],
                        [1, a, 0]
                    ],
                    scrubberGradientForward: [
                        [0, t, .5],
                        [.7, n, .5],
                        [.701, t, 0],
                        [1, t, 0]
                    ],
                    highlightGradientPlayed: [
                        [0, t],
                        [.7, n],
                        [.701, t],
                        [1, t]
                    ],
                    highlightGradientUnplayed: [
                        [0, a],
                        [1, a]
                    ],
                    progressIndicatorBg: l("0,0,0", .8),
                    progressIndicatorColor: l("255,101,0", 1),
                    durationIndicatorBg: l("0,0,0", .8),
                    durationIndicatorColor: l(r, 1),
                    dividerColorPrevious: l("255,0,0", 1),
                    dividerColorUpcoming: l(r, 1)
                }
            }
        }
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(534),
                s = n(5),
                r = n(32),
                a = n(559),
                l = n(513),
                u = n(536),
                c = n(560),
                d = n(521),
                h = n(556),
                p = n(38),
                m = p.prototype,
                f = [],
                g = [];
            e.exports = p.extend(c, a, h, {
                css: n(630),
                className: "waveformCommentsNode",
                defaults: {
                    sound_id: null,
                    avatarWidth: 10,
                    avatarHeight: 10,
                    fullAvatarWidth: 20,
                    fullAvatarHeight: 20,
                    drawLines: !0,
                    strokeStyle: "rgba(255,255,255,.1)",
                    bulkFetch: s.get("maxComments")
                },
                _avatarsDeferred: null,
                _hovered: !1,
                _hoverTimeout: null,
                _comments: null,
                states: {
                    loadedAvatars: "loaded"
                },
                setup: function(e) {
                    this.collection = new o(null, {
                        sound_id: e.sound_id,
                        secret_token: this.sound.get("secret_token")
                    }), this._comments = [], i.bindAll(this, "onClick", "onMouseMove", "onMouseEnter", "onMouseLeave", "onClickOutsideOfPointer", "onPlaybackFinish"), v.call(this, "on")
                },
                dispose: function() {
                    this._comments.length = 0, v.call(this, "off")
                },
                getAudible: function() {
                    return this.sound
                },
                hasData: function() {
                    if (m.hasData.call(this)) return _.call(this)
                },
                fetchData: function() {
                    return m.hasData.call(this, this.collection) ? _.call(this) ? (this.toggleState("loadedAvatars", !0), r.resolve()) : b.call(this) : m.fetchData.call(this, this.collection)
                },
                onResize: function() {
                    this.resetCachedDimensions()
                },
                draw: function() {
                    if (this._comments.length && _.call(this)) {
                        var e = this.context,
                            t = this.canvas,
                            n = this.options,
                            i = t.width / n.scale,
                            o = t.height / n.scale * n.upperPartHeight,
                            s = n.avatarHeight,
                            r = n.avatarWidth,
                            a = s / 2,
                            l = this.sound.duration();
                        this._comments.forEach((function(t) {
                            var n = t.timestamp / l,
                                u = Math.floor(i * n);
                            t.el && e.drawImage(t.el, u - a, o, s, r)
                        }), this)
                    }
                },
                onAdd: function(e) {
                    y.call(this, e).done(this.setDirty.bind(this, !0))
                },
                onRemove: function(e) {
                    this._comments.some((function(t, n, i) {
                        if (t.cid === e.cid) return i.splice(n, 1), !0
                    })) && this.setDirty(!0)
                },
                onInitialState: function() {
                    this.setInteracting(!1)
                },
                onActiveTimestamp: function() {
                    t("html").one("click", this.onClickOutsideOfPointer)
                },
                onClickOutsideOfPointer: function() {
                    this.disposed || this.getCurrentState() !== d.ACTIVE_TIMESTAMP || this.goToState(d.INITIAL)
                },
                onClick: function(e) {
                    if (e = u.normalizeEvent(e), P.call(this, e)) {
                        e.stopPropagation();
                        var t = C.call(this, e),
                            n = t ? t.get("timestamp") : this.getTimestampByMouseEvent(e);
                        this.goToState(d.ACTIVE_TIMESTAMP, n, t)
                    }
                },
                onMouseMove: function(e) {
                    var t = this.getTimestampByMouseEvent(e),
                        n = C.call(this, e),
                        i = this.getCurrentState();
                    e = u.normalizeEvent(e), P.call(this, e) ? i !== d.ACTIVE_TIMESTAMP && (i === d.CURRENT_COMMENT && this.getCurrentComment() === n || (n && this._hovered ? (this.setInteracting(!0), this.goToState(d.CURRENT_COMMENT, n.get("timestamp"), n)) : this.goToState(d.CURRENT_TIMESTAMP, t))) : i === d.CURRENT_COMMENT && this.goToState(d.INITIAL)
                },
                onMouseEnter: function() {
                    this._hovered || (this._hoverTimeout = setTimeout(function() {
                        this._hovered = !0, this._hoverTimeout = null
                    }.bind(this), 500))
                },
                onMouseLeave: function() {
                    this._hoverTimeout && (clearTimeout(this._hoverTimeout), this._hoverTimeout = null)
                },
                onPlaybackFinish: function() {
                    this.isInteracting() || this.goToState(d.INITIAL)
                }
            });

            function v(e) {
                this.options.$eventEl[e]("click", this.onClick)[e]("mousemove", this.onMouseMove)[e]("mouseenter", this.onMouseEnter)[e]("mouseleave", this.onMouseLeave), this.sound[e]("finish", this.onPlaybackFinish)
            }

            function _() {
                return !!this._avatarsDeferred && "pending" !== this._avatarsDeferred.state()
            }

            function b() {
                var e = this.collection.map(y, this).filter(i.identity);
                return this._avatarsDeferred = this.addDeferred(r.settled(e).done(function() {
                    this.setDirty(!0), this.toggleState("loadedAvatars", !0)
                }.bind(this))), this._avatarsDeferred
            }

            function y(e) {
                var t, n, i, o, s, a, u, c, d;
                if (e.length ? (n = e[0], i = e[1][0]) : (n = e.get("timestamp"), i = e), i && null != n && !(n < 0)) return t = r.defer(), s = {
                    timestamp: n,
                    cid: i.cid
                }, c = -1 !== (o = (u = !!(a = i.get("user")).avatar_t20x20) ? a.avatar_t20x20 : a.avatar_url).indexOf("default_avatar"), this.sound.get("comment_count") < 50 || !c ? (d = {
                    view: this,
                    url: u || c ? o : l.setFormat(o, 10, !0),
                    info: s,
                    imgDefer: t
                }, u ? w(d) : function(e) {
                    g.push(e), x()
                }(d)) : (this._comments.unshift(s), t.resolve()), t
            }

            function w(e) {
                var t = new Image;
                t.onload = A.bind(e.view, t, e.info, e.imgDefer), t.onerror = S.bind(e.view, e.info, e.imgDefer), t.src = e.url
            }

            function x() {
                for (var e, t, n = f.length; n < 10 && (t = g.shift());) "pending" === (e = t.imgDefer).state() && (n = f.push(t), w(t), e.always(k(t)))
            }

            function k(e) {
                return function() {
                    f.splice(f.indexOf(e), 1), x()
                }
            }

            function A(e, t, n) {
                this.disposed || (t.el = e, this._comments.unshift(t)), n.resolve()
            }

            function S(e, t) {
                this._comments.unshift(e), t.resolve()
            }

            function C(e) {
                var t = this.getTimestampByMouseEvent(e),
                    n = Math.floor(this.options.avatarWidth / 2 / this.cachedDimensions().width * this.sound.duration());
                return this.collection.getCommentAtTimestamp(t, n)
            }

            function P(e) {
                return e.offsetY >= this.options.upperPartHeight * this.cachedDimensions().height
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(4),
            o = n(631);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".waveformCommentsNode{opacity:0;transition:opacity .2s ease-in-out}.waveformCommentsNode.loaded{opacity:1}", ""]), e.exports = t
    }, function(e, t, n) {
        (function(t) {
            var i, o = n(2),
                s = n(5),
                r = n(536),
                a = n(19),
                l = n(53),
                u = n(38),
                c = n(518),
                d = Math.floor,
                h = t(window),
                p = function() {
                    return !1
                },
                m = l.touch ? "touchstart" : "mousedown",
                f = l.touch ? "touchmove" : "mousemove",
                g = l.touch ? "touchend" : "mouseup";
            e.exports = u.extend(c, {
                states: {
                    scrubbing: function(e) {
                        document.onselectstart = e ? p : null, i.toggleClass("sc-selection-disabled", e)
                    }
                },
                _cachedOffset: null,
                draw: t.noop,
                setup: function() {
                    i = i || s.get("appView").$el, o.bindAll(this, "onPointerDown", "onPointerMove", "onPointerUp"), _.call(this, "on")
                },
                dispose: function() {
                    _.call(this, "off")
                },
                onResize: function() {
                    this._cachedOffset = null
                },
                onPointerDown: function(e) {
                    e = r.normalizeEvent(e);
                    var t = this.model,
                        n = this.options.scale;
                    this.toggleState("scrubbing", !0), h.on(g, this.onPointerUp), t.isPlaying() ? v.call(this, e) : this.insideTopArea(e.offsetY * n) && a.toggle(this.model, {
                        userAction: !0
                    })
                },
                onPointerUp: function(e) {
                    h.off(g, this.onPointerUp), this.toggleState("scrubbing", !1)
                },
                onPointerMove: function(e) {
                    l.touch && e.preventDefault(), e = r.normalizeEvent(e), this.getState("scrubbing") && this.model.isPlaying() && v.call(this, e)
                },
                getCachedOffset: function() {
                    if (!this._cachedOffset) {
                        var e = this.$el,
                            t = e.offset();
                        this._cachedOffset = {
                            left: d(t.left),
                            top: d(t.top),
                            right: d(t.left + e.width()),
                            bottom: d(t.top + e.height())
                        }
                    }
                    return this._cachedOffset
                },
                getSeekPosition: function(e) {
                    var t = (e - this.getCachedOffset().left) / this.canvas.width * this.options.scale;
                    return d(t * this.model.getFixedDuration())
                }
            });

            function v(e) {
                e = r.normalizeEvent(e);
                var t = this.options.scale;
                this.insideScrubbableArea(e.offsetX * t, e.offsetY * t) && this.model.seek(this.getSeekPosition(e.pageX))
            }

            function _(e) {
                this.options.$eventEl[e](f, this.onPointerMove)[e](g, this.onPointerUp)[e](m, this.onPointerDown)
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(561),
            o = n(535),
            s = n(38),
            r = n(518),
            a = n(514);
        e.exports = s.extend(r, i, o, {
            gradientName: "progressGradient",
            setup: function() {
                l.call(this, !0)
            },
            dispose: function() {
                l.call(this, !1)
            },
            draw: function() {
                var e = this.context,
                    t = this.canvas,
                    n = this.options,
                    i = a.getConfig("fadeInSteps"),
                    o = this.lastPosition = Math.ceil(this.model.progress() * (t.width / n.scale) * i) / i,
                    s = this.getWholeBarWidth(),
                    r = this.roundToBar(o, !1),
                    l = o - r;
                e.save(), e.globalCompositeOperation = "source-atop", e.fillStyle = this.getFillStyle(), e.fillRect(0, 0, r, this.canvas.height), l && (e.fillStyle = this.getFillStyle(l / s), e.fillRect(r, 0, s, this.canvas.height)), e.restore()
            }
        });

        function l(e) {
            var t = e ? "on" : "off";
            this.model[t]("play pause seeked", u, this)
        }

        function u() {
            this.setDirty(!0)
        }
    }, function(e, t, n) {
        var i, o = n(2),
            s = n(535),
            r = n(536),
            a = n(38),
            l = n(518);
        e.exports = a.extend(l, s, {
            gradientName: "scrubberGradientBackward",
            _mouseX: null,
            _currentStep: 0,
            _targetStep: 0,
            _isHovering: !1,
            setup: function() {
                o.bindAll(this, "onMouseLeave", "onMouseMove"), c.call(this, "on")
            },
            dispose: function() {
                c.call(this, "off"), clearTimeout(this._delayTimeout)
            },
            onResize: function() {
                this._mouseX = null
            },
            onMouseLeave: function() {
                this._isHovering = !1, this.setDirty(!0)
            },
            onMouseMove: function(e) {
                e = r.normalizeEvent(e);
                var t = this._mouseX,
                    n = this._isHovering,
                    i = this.options.scale;
                (this._isHovering = this.insideScrubbableArea(e.offsetX * i, e.offsetY * i)) && (this._mouseX = e.offsetX), t === this._mouseX && n === this._isHovering || this.setDirty(!0)
            },
            draw: function() {
                this._targetStep = this.model.isPlaying() && this._isHovering ? 13 : 0;
                var e = d.call(this),
                    t = i(e);
                this.isAnimating = e !== this._currentStep, this._currentStep = e, u.call(this, t)
            }
        });

        function u(e) {
            if (e) {
                var t = this.context,
                    n = this.canvas,
                    i = this.options.scale,
                    o = this._mouseX || 0,
                    s = this.model.progress() * (n.width / i),
                    r = this.roundToBar(s, s >= o);
                t.save(), t.globalCompositeOperation = "source-atop", t.fillStyle = this.getFillStyle(e, r < o ? "scrubberGradientForward" : this.gradientName), t.fillRect(Math.min(r, o), 0, Math.abs(r - o), n.height), t.restore()
            }
        }

        function c(e) {
            this.options.$eventEl[e]("mouseleave", this.onMouseLeave)[e]("mousemove", this.onMouseMove)
        }

        function d() {
            var e = this._targetStep,
                t = this._currentStep;
            return e > t ? t + 1 : e < t ? t - 1 : t
        }
        i = o.memoize((function(e) {
            var t = Math.max(0, (e - 3) / 10);
            return -Math.cos(t * Math.PI) / 2 + .5
        }))
    }, function(e, t, n) {
        var i = n(135),
            o = n(561),
            s = n(38),
            r = n(518),
            a = n(514);
        e.exports = s.extend(r, o, {
            _lastSecs: null,
            _duration: null,
            setup: function() {
                l.call(this, !0), this.setFont()
            },
            dispose: function() {
                l.call(this, !1)
            },
            onResize: function() {
                this.setFont()
            },
            setFont: function() {
                this.context.font = '10px "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif', this.setDirty(!0)
            },
            shouldBeDirty: function() {
                return this._lastSecs !== Math.floor(this.model.currentTime() / 1e3)
            },
            getDuration: function(e) {
                if (!this._duration) {
                    var t = i.timecode(this.model.getFixedDuration());
                    this._duration = {
                        text: t,
                        width: this.context.measureText(t).width
                    }
                }
                return this._duration[e]
            },
            draw: function() {
                var e = this.el,
                    t = this.context,
                    n = this.options,
                    o = this.model,
                    s = n.waveformStyle,
                    r = o.currentTime(),
                    l = i.timecode(r),
                    u = this.getDuration("text"),
                    c = t.measureText(l).width,
                    d = this.getDuration("width") + 4,
                    h = e.width / n.scale,
                    p = n.upperPartHeight * (e.height / n.scale),
                    m = p - 12 - 2;
                t.save(), t.translate(.5, .5), t.fillStyle = a.getColor("durationIndicatorBg", s), t.fillRect(h - d, m, d, 14), (r > 0 || o.isPlaying()) && (t.fillRect(0, m, c + 4, 14), t.fillStyle = a.getColor("progressIndicatorColor", s), t.fillText(l, 2, Math.floor(p - 4))), t.fillStyle = a.getColor("durationIndicatorColor", s), t.fillText(u, Math.floor(h - d + 2), Math.floor(p - 4)), this._lastSecs = Math.floor(r / 1e3), t.restore()
            }
        });

        function l(e) {
            var t = e ? "on" : "off";
            this.model[t]("play", u, this)[t]("change:duration duration-change", c, this)
        }

        function u() {
            this.setDirty(!0)
        }

        function c() {
            this._duration = null
        }
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '  <div style="height:' + u("function" == typeof(r = null != (r = c(i, "upperPartHeightPercent") || (null != t ? c(t, "upperPartHeightPercent") : t)) ? r : l) ? r.call(a, {
                    name: "upperPartHeightPercent",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 21
                        },
                        end: {
                            line: 3,
                            column: 47
                        }
                    }
                }) : r) + ';" class="waveform__emptyWaveform sc-font sc-type-light">\n    <span class="waveform__emptyMessage">\n      ' + u((n(507) || t && c(t, "$t") || l).call(a, "We're still processing this track or playlist.", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 5,
                            column: 6
                        },
                        end: {
                            line: 5,
                            column: 61
                        }
                    }
                })) + "\n    </span>\n  </div>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '<div class="waveform__layer waveform__scene"></div>\n' + (null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "isProcessing") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 0
                        },
                        end: {
                            line: 8,
                            column: 7
                        }
                    }
                })) ? s : "")
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(638);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".waveform{position:relative;width:100%;height:100%;opacity:0;transition:opacity .2s ease-in-out}.waveform:not(.playing) .waveform__scene:hover{cursor:pointer}.waveform.loaded{opacity:1}.waveform__layer,.waveform__layer .sceneLayer{position:absolute;top:0;left:0;width:100%;height:100%}.waveform__empty .waveform__scene{opacity:.4}.waveform__emptyWaveform{position:relative}.waveform__emptyMessage{position:absolute;text-align:center;width:100%;bottom:5px;color:#000;font-size:11px;text-shadow:1px 1px 1px #fff;font-size:16px}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(2),
            o = n(52);

        function s(e) {
            e = i.defaults(e || {}, {
                width: 0,
                height: 0,
                canvas: document.createElement("canvas")
            }), this.canvas = e.canvas, this.context = e.canvas.getContext("2d"), this.width = e.width || e.canvas.offsetWidth, this.height = e.height || e.canvas.offsetHeight, this.devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1, this.backingStoreRatio = o.backingStoreRatio, this.canvasPixelRatio = this.devicePixelRatio / this.backingStoreRatio, this.canvas.setAttribute("width", this.width * this.canvasPixelRatio), this.canvas.setAttribute("height", this.height * this.canvasPixelRatio), this.devicePixelRatio !== this.backingStoreRatio && this.context.scale(this.canvasPixelRatio, this.canvasPixelRatio)
        }

        function r(e, t) {
            return {
                x: e.x * t,
                y: e.y * t
            }
        }
        e.exports = s, i.extend(s.prototype, {
            drawImage: function() {
                this.context.drawImage.apply(this.context, arguments)
            },
            putImageData: function(e, t) {
                this.context.putImageData(e, r(t, this.canvasPixelRatio))
            },
            getImageData: function(e, t) {
                return e = r(e, this.canvasPixelRatio), t = r(t, this.canvasPixelRatio), this.context.getImageData(e.x, e.y, t.x - e.x, t.y - e.y)
            }
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(641);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, '.visualAudible{width:100%;height:100%;position:relative;z-index:1}.visualAudible.mobile,.visualAudible.mobile *{-webkit-backface-visibility:hidden;backface-visibility:hidden}.visualAudible__artwork,.visualAudible__artworkOverlay,.visualAudible__artworkOverlay:after,.visualAudible__artworkOverlayBottom,.visualAudible__artworkOverlayTop,.visualAudible__blocked,.visualAudible__wrapper{position:absolute;top:0;left:0;width:100%;height:100%}.visualAudible__artworkOverlay:after{display:block;content:"";background:#000;opacity:.6}.visualAudible__artworkOverlayBottom{-webkit-filter:blur(2px)}.visualAudible__artworkOverlayTop{-webkit-filter:blur(8px);opacity:.9}.visualAudible__artworkOverlay{opacity:0}.visualAudible.background .visualAudible__artworkOverlay{opacity:1}.visualAudible__body{position:relative;margin:0 0 90px;padding:14px 11px 14px 10px;z-index:100}.visualAudible__footer{position:absolute;right:0;bottom:0;left:0;height:110px;padding:15px 10px;transform:translate(0)}.visualAudible.background .visualAudible__footer{transform:translateY(100%)}.visualAudible.adBackground .soundHeader__actions{opacity:0}.visualAudible__total{position:absolute;bottom:10px;left:10px;z-index:100}.visualAudible__waveform{position:absolute;height:74px;left:10px;right:10px;bottom:20px;transition:opacity .2s ease-out,transform .2s ease-out}.visualAudible__waveform>.artworkWaveform{position:absolute;top:0;left:0;opacity:1;z-index:101}.visualAudible__waveform>.artworkWaveform.hidden{opacity:0}.visualAudible__progressBar{position:fixed;bottom:0;left:0;right:0;opacity:0}.visualAudible__blocked{display:none}.visualAudible.blocked .visualAudible__blocked{display:block}.visualAudible.blocked .soundHeader__logo{z-index:100}.visualAudible.blocked .soundHeader__title{-webkit-filter:blur(1px)}.visualAudible.blocked .visualAudible__artwork{-webkit-filter:blur(8px)}.visualAudible.minimal .visualAudible__waveform{transform:translate3d(0,100%,0)}.visualAudible.minimal .soundHeader__actions,.visualAudible.minimal .soundHeader__playButton,.visualAudible.minimal .soundHeader__title,.visualAudible.minimal .visualAudible__waveform,.visualAudible.onlyArtwork .soundHeader__actions,.visualAudible.onlyArtwork .soundHeader__logo,.visualAudible.onlyArtwork .soundHeader__playButton,.visualAudible.onlyArtwork .soundHeader__snippetIndicator,.visualAudible.onlyArtwork .soundHeader__title,.visualAudible.onlyArtwork .visualAudible__waveform{opacity:0}.visualAudible.minimal .visualAudible__progressBar,.visualAudible.onlyArtwork .visualAudible__progressBar{opacity:1}@media (max-height:350px){.visualAudible .visualAudible__waveform{height:44px}}', ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "      " + e.escapeExpression((n(506) || t && a(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(643), {
                    name: "$view",
                    hash: {
                        key: "visuals",
                        resource_type: null != (r = null != t ? a(t, "_options") : t) ? a(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? a(t, "_options") : t) ? a(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 4,
                            column: 6
                        },
                        end: {
                            line: 8,
                            column: 8
                        }
                    }
                })) + "\n"
            },
            3: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return "      " + u((n(506) || t && c(t, "$view") || l).call(a, n(510), {
                    name: "$view",
                    hash: {
                        size: 500,
                        stretch: !0,
                        resource_type: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 10,
                            column: 6
                        },
                        end: {
                            line: 10,
                            column: 125
                        }
                    }
                })) + '\n      <div class="visualAudible__artworkOverlay g-transition-opacity">\n        ' + u((n(506) || t && c(t, "$view") || l).call(a, n(510), {
                    name: "$view",
                    hash: {
                        class: "visualAudible__artworkOverlayBottom",
                        size: 500,
                        stretch: !0,
                        resource_type: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 8
                        },
                        end: {
                            line: 12,
                            column: 171
                        }
                    }
                })) + "\n        " + u((n(506) || t && c(t, "$view") || l).call(a, n(510), {
                    name: "$view",
                    hash: {
                        class: "visualAudible__artworkOverlayTop",
                        size: 500,
                        stretch: !0,
                        resource_type: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? c(t, "_options") : t) ? c(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 13,
                            column: 8
                        },
                        end: {
                            line: 13,
                            column: 168
                        }
                    }
                })) + "\n      </div>\n"
            },
            5: function(e, t, i, o, s) {
                var r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '      <div class="visualAudible__total g-transition-opacity">\n        ' + e.escapeExpression((n(506) || t && a(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(647), {
                    name: "$view",
                    hash: {
                        key: "soundsTotal",
                        resource_type: null != (r = null != t ? a(t, "_options") : t) ? a(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? a(t, "_options") : t) ? a(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 32,
                            column: 8
                        },
                        end: {
                            line: 35,
                            column: 29
                        }
                    }
                })) + "\n      </div>\n"
            },
            7: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '      <div class="visualAudible__progressBar g-transition-opacity">\n        ' + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(562), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? r(t, "_resource_type") : t,
                        resource_id: null != t ? r(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 41,
                            column: 8
                        },
                        end: {
                            line: 41,
                            column: 103
                        }
                    }
                })) + "\n      </div>\n"
            },
            9: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '<div class="visualAudible__blocked g-transition-transform">\n  ' + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(658), {
                    name: "$view",
                    hash: {
                        sound_id: null != t ? r(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 48,
                            column: 2
                        },
                        end: {
                            line: 48,
                            column: 61
                        }
                    }
                })) + "\n</div>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="visualAudible__wrapper">\n  <div class="visualAudible__artwork">\n' + (null != (r = l(i, "if").call(a, null != t ? l(t, "has_visuals") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 4
                        },
                        end: {
                            line: 15,
                            column: 11
                        }
                    }
                })) ? r : "") + '  </div>\n  <div class="visualAudible__body">\n    <div class="visualAudible__header">\n      ' + e.escapeExpression((n(506) || t && l(t, "$view") || e.hooks.helperMissing).call(a, n(539), {
                    name: "$view",
                    hash: {
                        key: "header",
                        show_button_overlay: !0,
                        hide_action_buttons: null != t ? l(t, "is_blocked") : t,
                        visual: !0,
                        resource_type: null != (r = null != t ? l(t, "_options") : t) ? l(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? l(t, "_options") : t) ? l(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 19,
                            column: 6
                        },
                        end: {
                            line: 26,
                            column: 8
                        }
                    }
                })) + '\n    </div>\n  </div>\n  <div class="visualAudible__footer g-transition-transform">\n' + (null != (r = l(i, "unless").call(a, null != t ? l(t, "is_sound") : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 30,
                            column: 4
                        },
                        end: {
                            line: 37,
                            column: 15
                        }
                    }
                })) ? r : "") + '    <div class="visualAudible__waveform g-transition-transform"></div>\n' + (null != (r = l(i, "if").call(a, null != t ? l(t, "is_sound") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 39,
                            column: 4
                        },
                        end: {
                            line: 43,
                            column: 11
                        }
                    }
                })) ? r : "") + "  </div>\n</div>\n" + (null != (r = l(i, "if").call(a, null != t ? l(t, "is_blocked") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 46,
                            column: 0
                        },
                        end: {
                            line: 50,
                            column: 7
                        }
                    }
                })) ? r : "")
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(2),
            o = n(40),
            s = n(508),
            r = n(38);
        e.exports = r.extend(s, {
            className: "visuals",
            css: n(644),
            template: n(646),
            requiredAttributes: ["visuals"],
            setup: function() {
                this.currentVisualIndex = -1, a.call(this, "on")
            },
            dispose: function() {
                a.call(this, "off")
            },
            getTemplateData: function(e) {
                return e.visuals
            },
            renderDecorate: function() {
                l.call(this)
            },
            teardown: function() {
                this.currentVisualIndex = -1
            }
        });

        function a(e) {
            this.model[e]("seeked", l, this)[e]("time", l, this)
        }

        function l() {
            if (!this.disposed) {
                var e = this.model.currentTime(),
                    t = this.model.get("visuals").visuals,
                    n = o.clamp(i.sortedIndex(t, {
                        entry_time: e
                    }, "entry_time") - 1, 0, t.length - 1),
                    s = t[n];
                n !== this.currentVisualIndex && (this.currentVisualIndex = n, this.$$("backgroundLayer").css("background-image", "url(" + s.visual_url + ")"), this.$$("item").removeClass("visible").filter('[data-timestamp="' + s.entry_time + '"]').addClass("visible"))
            }
        }
    }, function(e, t, n) {
        var i = n(4),
            o = n(645);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, '.visuals{top:0;left:0;right:0;height:100%;width:100%;position:relative}.visuals__background,.visuals__item{position:absolute;top:0;left:0;bottom:0;right:0;background-size:cover;background-position:50%;background-repeat:no-repeat;opacity:0}.visuals__background:after{position:absolute;top:0;left:0;display:block;content:"";background:#000;opacity:.6;width:100%;height:100%}.visuals__backgroundLayer{position:absolute;top:0;left:0;background-size:cover;background-position:50%;background-repeat:no-repeat}.visuals__backgroundLayerBottom{filter:blur(2px)}.visuals__backgroundLayerTop{filter:blur(8px);opacity:.9}.visuals.background .visuals__background,.visuals__item.visible{opacity:1}', ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '  <div class="visuals__item g-transition-opacity" style="background-image: url(' + l("function" == typeof(s = null != (s = u(n, "visual_url") || (null != t ? u(t, "visual_url") : t)) ? s : a) ? s.call(r, {
                    name: "visual_url",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 79
                        },
                        end: {
                            line: 2,
                            column: 93
                        }
                    }
                }) : s) + ');" data-timestamp="' + l("function" == typeof(s = null != (s = u(n, "entry_time") || (null != t ? u(t, "entry_time") : t)) ? s : a) ? s.call(r, {
                    name: "entry_time",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 113
                        },
                        end: {
                            line: 2,
                            column: 127
                        }
                    }
                }) : s) + '"></div>\n'
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return (null != (s = r(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "visuals") : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 3,
                            column: 9
                        }
                    }
                })) ? s : "") + '<div class="visuals__background g-transition-opacity">\n  <div class="visuals__backgroundLayer visuals__backgroundLayerBottom g-box-full"></div>\n  <div class="visuals__backgroundLayer visuals__backgroundLayerTop g-box-full"></div>\n</div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(5),
            o = n(31),
            s = n(508),
            r = n(38);
        e.exports = r.extend(s, {
            css: n(648),
            template: n(650),
            className: "soundsTotal sc-font sc-pointer",
            trackCountProperty: null,
            setup: function(e) {
                this.trackCountProperty = function(e) {
                    var t = null;
                    switch (e) {
                        case o.USER_SOUNDS:
                            t = i.get("widgetParams").show_reposts ? null : "track_count";
                            break;
                        case o.PLAYLIST:
                            t = "track_count";
                            break;
                        case o.USER_FAVORITES:
                            t = "likes_count"
                    }
                    return t
                }(e.resource_type), this.trackCountProperty && (this.requiredAttributes = [this.trackCountProperty])
            },
            renderDecorate: function() {
                this.toggleState("hidden", !(this.trackCountProperty && this.model.get(this.trackCountProperty) > 0))
            },
            getTemplateData: function() {
                return {
                    track_count: this.model.get(this.trackCountProperty)
                }
            }
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(649);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".soundsTotal{width:80px;height:80px;padding:12px;overflow:hidden;background:rgba(0,0,0,.8);border-radius:50%;color:#fff;font-weight:100;text-align:center;text-transform:uppercase}.soundsTotal.hidden{display:none}.soundsTotal__number{font-size:26px;line-height:1.25}.soundsTotal__tracks{font-size:14px;line-height:1.25}@media (max-height:350px){.soundsTotal{width:50px;height:50px;padding:8px}.soundsTotal__number{font-size:16px}.soundsTotal__tracks{font-size:9px;font-family:Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif}}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="soundsTotal__number sc-font-tabular">' + l((n(651) || t && u(t, "$shortnumber") || a).call(r, null != t ? u(t, "track_count") : t, {
                    name: "$shortnumber",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 1,
                            column: 49
                        },
                        end: {
                            line: 1,
                            column: 77
                        }
                    }
                })) + '</div>\n<div class="soundsTotal__tracks">' + l((n(537) || t && u(t, "$tp") || a).call(r, null != t ? u(t, "track_count") : t, "track", "tracks", {
                    name: "$tp",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 33
                        },
                        end: {
                            line: 2,
                            column: 70
                        }
                    }
                })) + "</div>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(523);
        e.exports = i.shorten
    }, function(e, t, n) {
        var i = n(653);
        e.exports = i.extend({
            template: n(654),
            css: n(655),
            className: "thinProgressbar sc-pointer",
            colorCustomizable: !0,
            updatePlayed: function() {
                this.playedProgress && (this.$$("played")[0].style.width = 100 * this.playedProgress + "%")
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(512),
                s = n(38),
                r = n(511);
            e.exports = s.extend({
                ModelClass: o,
                _lastContainerSize: -1,
                _throttleTime: 0,
                _throttleTimeout: 0,
                setup: function() {
                    this.loadedProgress = this._getLoadedProgress(), this.playedProgress = this._getPlayedProgress(), this.isFullyLoaded = !1, i.bindAll(this, "onAudioFinish", "updateProgressBar", "rethrottle", "onInitialPlay", "onAudioPlay", "onAudioPause", "timedUpdate"), r.on("resize:debounced", this.rethrottle, this), this.model.on("finish", this.onAudioFinish).on("time", this.onInitialPlay).on("seeked", this.updateProgressBar)
                },
                dispose: function() {
                    this.model.off("finish", this.onAudioFinish).off("time", this.onInitialPlay).off("seeked", this.updateProgressBar), r.off("resize:debounced", this.rethrottle, this)
                },
                renderDecorate: function() {
                    this.updateProgressBar(), this.model.on("play", this.onAudioPlay).on("pause", this.onAudioPause), this.model.isPlaying() && (this._throttleTime || this.rethrottle(), this._throttleTimeout || this.timedUpdate())
                },
                teardown: function() {
                    this.stopTimedUpdates(), this.model.off("play", this.onAudioPlay).off("pause", this.onAudioPause)
                },
                onInitialPlay: function() {
                    this.model.off("time", this.onInitialPlay), this.updateProgressBar()
                },
                onAudioPause: function() {
                    this.stopTimedUpdates()
                },
                onAudioPlay: function() {
                    this._throttleTime || this.rethrottle(), this._throttleTimeout || this.timedUpdate()
                },
                rethrottle: function() {
                    if (!this.disposed) {
                        var e, t, n = this.el.clientWidth;
                        n !== this._lastContainerSize && (this._lastContainerSize = n, e = this.model.duration(), 0 === n ? (this._throttleTime = 0, "pending" === (t = this.whenInserted()).state() && t.done(this.rethrottle)) : this._throttleTime = Math.max(40, Math.floor(e / n)))
                    }
                },
                updateLoaded: t.noop,
                updatePlayed: t.noop,
                onAudioFinish: function() {
                    this.updateProgressBar()
                },
                updateProgressBar: function() {
                    this.disposed || (this.playedProgress = this._getPlayedProgress(), this.isFullyLoaded || (this.loadedProgress = this._getLoadedProgress(), this.isFullyLoaded = 1 === this.loadedProgress, this.updateLoaded()), this.updatePlayed())
                },
                _getLoadedProgress: function() {
                    return this.model.loadProgress()
                },
                _getPlayedProgress: function() {
                    return this.model.progress()
                },
                timedUpdate: function() {
                    var e, t = this._throttleTime;
                    this.updateProgressBar(), e = Math.max(40, t && t - this.model.currentTime() % t), this._throttleTimeout = setTimeout(this.timedUpdate, e)
                },
                stopTimedUpdates: function() {
                    clearTimeout(this._throttleTimeout), this._throttleTimeout = null
                }
            })
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                return '<div class="thinProgressbar__layer sc-background-dark"></div>\n<div class="thinProgressbar__layer thinProgressbar__played"></div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(656);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, '.thinProgressbar{height:3px;width:100%;position:relative}.thinProgressbar:after{content:"";display:block;position:absolute;height:11px;width:100%;top:-4px;left:0}.thinProgressbar__layer{position:absolute;height:100%;width:100%}.thinProgressbar__played{width:0;background-color:$mainColor}', ""]), e.exports = t
    }, function(e, t, n) {
        (function(t) {
            var i = n(2),
                o = n(512),
                s = n(19),
                r = n(5),
                a = n(53),
                l = n(18),
                u = r.get("appView").$el,
                c = t(document),
                d = {
                    CLICK: "click:scrubber",
                    MOUSE_MOVE: "mousemove:scrubber",
                    MOUSE_ENTER: "mouseenter:scrubber",
                    MOUSE_LEAVE: "mouseleave:scrubber"
                },
                h = a.touch ? "touchend" : "mouseup",
                p = a.touch ? "touchstart" : "mousedown",
                m = a.touch ? "touchmove" : "mousemove";
            e.exports = new l({
                applyTo: function(e) {
                    var t = e.constructor;
                    i.extend(t, {
                        Events: d
                    }), e.events = e.events || {}, e.events[p] = "onPointerDown", e.events[m] = "onPointerMove", e.states = i.extend({}, e.states, {
                        "selection-disabled": function(e) {
                            e ? (document.onselectstart = function() {
                                return !1
                            }, u.addClass("sc-selection-disabled")) : (document.onselectstart = null, u.removeClass("sc-selection-disabled"))
                        }
                    })
                },
                before: {
                    setup: function() {
                        this.scrubbingEnabled = !0, this.scrub = i.throttle(this.scrub.bind(this), 50), this.unscrub = this.unscrub.bind(this), this.onWindowResize = i.debounce(this.onWindowResize.bind(this), 100), _.call(this, !0)
                    },
                    dispose: function() {
                        _.call(this, !1)
                    },
                    renderDecorate: function() {
                        this.width = this.coord = null
                    }
                },
                defaults: {
                    ModelClass: o,
                    width: null,
                    coord: null,
                    onWindowResize: function() {
                        this.rerender()
                    },
                    onPlay: function() {
                        this.scrubbingEnabled = !1, i.delay(function() {
                            this.scrubbingEnabled = !0
                        }.bind(this), 500)
                    },
                    onPause: function() {
                        this.scrubbingEnabled = !1
                    },
                    onSeek: t.noop,
                    onPointerDown: function(e) {
                        this.trigger(d.CLICK), this.scrubbingEnabled && this.model.isPlaying() ? (f.call(this, e.originalEvent.pageX), c.on(m, this.scrub).on(h, this.unscrub)) : s.toggle(this.model, {
                            userAction: !0
                        })
                    },
                    onPointerMove: function(e) {
                        var t = this.model.isPlaying(),
                            n = e.originalEvent.pageX - y.call(this).left;
                        !this.scrubbingEnabled || !t || n > w.call(this) || n <= 0 || this.hasHoverIntent && !this._isEntered || this.trigger(d.MOUSE_MOVE, n - 1)
                    },
                    scrub: function(e) {
                        if (!v.call(this, e)) return c.trigger(h);
                        this.toggleState("selection-disabled", !0), f.call(this, e.originalEvent.pageX)
                    },
                    unscrub: function() {
                        this.toggleState("selection-disabled", !1), c.off(m, this.scrub).off(h, this.unscrub), a.touch && this.trigger(d.MOUSE_LEAVE)
                    }
                }
            });

            function f(e) {
                this.model.seek(g.call(this, e)), this.onSeek()
            }

            function g(e) {
                var t;
                return t = (e - y.call(this).left) / b.call(this), Math.floor(t * this.model.duration())
            }

            function v(e) {
                var t = e.originalEvent.pageX,
                    n = e.originalEvent.pageY,
                    i = y.call(this);
                return t >= i.left && t <= i.right && n >= i.top && n <= i.bottom
            }

            function _(e) {
                var n = e ? "on" : "off";
                t(window)[n]("resize", this.onWindowResize), this.model[n]("play", this.onPlay, this)[n]("pause", this.onPause, this)
            }

            function b() {
                return this.width = this.width || this.$el.width(), this.width
            }

            function y() {
                var e = this.$el.offset();
                return e.right = e.left + this.$el.width(), e.bottom = e.top + this.$el.height(), e
            }

            function w() {
                return this.model.loadProgress() * b.call(this)
            }
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(38),
            o = n(563),
            s = n(19);
        e.exports = i.extend({
            defaults: {
                sound_id: null
            },
            template: n(659),
            css: n(671),
            className: "blockedSound g-transition-opacity",
            events: {
                "click .blockedSound__relatedSoundsLink": function(e) {
                    e.preventDefault();
                    var t = a(this.options.sound_id);
                    s.setSource(t), s.play(t.at(0), {
                        userAction: !0
                    })
                }
            },
            setup: function(e) {
                this.relatedSounds = a(e.sound_id)
            },
            dispose: function() {
                this.relatedSounds.release()
            },
            renderDecorate: function() {
                this.relatedSounds.fetch().done(r.bind(this)), this.whenInserted(r.bind(this))
            },
            getTemplateData: function(e) {
                return e.getRelatedSounds = a, e
            }
        });

        function r() {
            this.disposed || this.toggleState("related", !!this.relatedSounds.length).toggleState("compact", this.$el.height() <= 300).toggleState("visible", !0)
        }

        function a(e) {
            return new o(null, {
                resource_id: e
            })
        }
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="blockedSound__placeholder"></div>\n<div class="blockedSound__content">\n  <div class="blockedSound__icon"></div>\n  <div class="blockedSound__text sc-truncate sc-text-verylight">\n    <p>\n      ' + u((n(507) || t && c(t, "$t") || l).call(a, "This track is not available in your country.", {
                    name: "$t",
                    hash: {
                        _context: "sound"
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 6,
                            column: 6
                        },
                        end: {
                            line: 6,
                            column: 76
                        }
                    }
                })) + '\n    </p>\n    <a class="blockedSound__relatedSoundsLink sc-text-verylight sc-link-verylight" href="#">\n      ' + u((n(507) || t && c(t, "$t") || l).call(a, "Play related tracks", {
                    name: "$t",
                    hash: {
                        _context: "sound"
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 9,
                            column: 6
                        },
                        end: {
                            line: 9,
                            column: 52
                        }
                    }
                })) + '\n    </a>\n  </div>\n</div>\n<div class="blockedSound__relatedSounds">\n  <div class="blockedSound__relatedSoundsTitle sc-truncate sc-text-verylight">\n    ' + u((n(507) || t && c(t, "$t") || l).call(a, "Play related tracks", {
                    name: "$t",
                    hash: {
                        _context: "sound"
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 15,
                            column: 4
                        },
                        end: {
                            line: 15,
                            column: 50
                        }
                    }
                })) + "\n  </div>\n  " + u((n(506) || t && c(t, "$view") || l).call(a, n(564), {
                    name: "$view",
                    hash: {
                        getRelatedSounds: null != t ? c(t, "getRelatedSounds") : t,
                        resource_id: null != (r = null != t ? c(t, "_options") : t) ? c(r, "sound_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 17,
                            column: 2
                        },
                        end: {
                            line: 17,
                            column: 111
                        }
                    }
                })) + "\n</div>\n\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(50),
            o = n(38);
        e.exports = o.extend({
            template: n(661),
            css: n(667),
            ModelClass: i,
            className: "visualSoundBadge g-box-full",
            requiredAttributes: ["permalink", "permalink_url"],
            getTemplateData: function(e) {
                return e.shareUrl = this.model.getShareURL(), e
            }
        })
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<a href="' + u("function" == typeof(r = null != (r = c(i, "shareUrl") || (null != t ? c(t, "shareUrl") : t)) ? r : l) ? r.call(a, {
                    name: "shareUrl",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 1,
                            column: 9
                        },
                        end: {
                            line: 1,
                            column: 21
                        }
                    }
                }) : r) + '" target="_blank">\n  ' + u((n(506) || t && c(t, "$view") || l).call(a, n(510), {
                    name: "$view",
                    hash: {
                        size: 200,
                        stretch: !0,
                        resource_type: null != t ? c(t, "_resource_type") : t,
                        resource_id: null != t ? c(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 7,
                            column: 4
                        }
                    }
                })) + '\n  <div class="visualSoundBadge__title">\n    ' + u((n(506) || t && c(t, "$view") || l).call(a, n(525), {
                    name: "$view",
                    hash: {
                        show_link: !1,
                        visual: !0,
                        resource_type: null != t ? c(t, "_resource_type") : t,
                        resource_id: null != t ? c(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 9,
                            column: 4
                        },
                        end: {
                            line: 14,
                            column: 6
                        }
                    }
                })) + "\n  </div>\n</a>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, n, i, o) {
                var s, r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return (null != (s = c(n, "if").call(a, null != t ? c(t, "showH2Link") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 4,
                            column: 9
                        }
                    }
                })) ? s : "") + '     <span title="' + u("function" == typeof(r = null != (r = c(n, "inlineTitle") || (null != t ? c(t, "inlineTitle") : t)) ? r : l) ? r.call(a, {
                    name: "inlineTitle",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 5,
                            column: 18
                        },
                        end: {
                            line: 5,
                            column: 33
                        }
                    }
                }) : r) + '" class="' + (null != (s = c(n, "if").call(a, null != t ? c(t, "inverse") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 5,
                            column: 42
                        },
                        end: {
                            line: 5,
                            column: 76
                        }
                    }
                })) ? s : "") + ' title__line">' + u("function" == typeof(r = null != (r = c(n, "inlineTitle") || (null != t ? c(t, "inlineTitle") : t)) ? r : l) ? r.call(a, {
                    name: "inlineTitle",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 5,
                            column: 90
                        },
                        end: {
                            line: 5,
                            column: 105
                        }
                    }
                }) : r) + "</span>\n" + (null != (s = c(n, "if").call(a, null != t ? c(t, "showH2Link") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 6,
                            column: 2
                        },
                        end: {
                            line: 8,
                            column: 9
                        }
                    }
                })) ? s : "")
            },
            2: function(e, t, n, i, o) {
                var s, r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <a href="' + u("function" == typeof(r = null != (r = c(n, "h2Link") || (null != t ? c(t, "h2Link") : t)) ? r : l) ? r.call(a, {
                    name: "h2Link",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 13
                        },
                        end: {
                            line: 3,
                            column: 23
                        }
                    }
                }) : r) + '" title="' + u("function" == typeof(r = null != (r = c(n, "h2Text") || (null != t ? c(t, "h2Text") : t)) ? r : l) ? r.call(a, {
                    name: "h2Text",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 32
                        },
                        end: {
                            line: 3,
                            column: 42
                        }
                    }
                }) : r) + '" class="sc-link-' + (null != (s = c(n, "if").call(a, null != t ? c(t, "inverse") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 59
                        },
                        end: {
                            line: 3,
                            column: 98
                        }
                    }
                })) ? s : "") + ' title__line">\n'
            },
            3: function(e, t, n, i, o) {
                return "white"
            },
            5: function(e, t, n, i, o) {
                return "dark"
            },
            7: function(e, t, n, i, o) {
                return "title__white"
            },
            9: function(e, t, n, i, o) {
                return "    </a>\n"
            },
            11: function(e, t, n, i, o) {
                var s, r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return (null != (s = c(n, "if").call(a, null != t ? c(t, "showH1") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 10,
                            column: 2
                        },
                        end: {
                            line: 15,
                            column: 9
                        }
                    }
                })) ? s : "") + "  <" + u("function" == typeof(r = null != (r = c(n, "h2TagName") || (null != t ? c(t, "h2TagName") : t)) ? r : l) ? r.call(a, {
                    name: "h2TagName",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 16,
                            column: 3
                        },
                        end: {
                            line: 16,
                            column: 16
                        }
                    }
                }) : r) + ' href="' + u("function" == typeof(r = null != (r = c(n, "h2Link") || (null != t ? c(t, "h2Link") : t)) ? r : l) ? r.call(a, {
                    name: "h2Link",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 16,
                            column: 23
                        },
                        end: {
                            line: 16,
                            column: 33
                        }
                    }
                }) : r) + '" title="' + u("function" == typeof(r = null != (r = c(n, "h2Text") || (null != t ? c(t, "h2Text") : t)) ? r : l) ? r.call(a, {
                    name: "h2Text",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 16,
                            column: 42
                        },
                        end: {
                            line: 16,
                            column: 52
                        }
                    }
                }) : r) + '" class="title__h2 sc-link-dark sc-truncate g-text-shadow ' + (null != (s = c(n, "if").call(a, null != t ? c(t, "visual") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 16,
                            column: 110
                        },
                        end: {
                            line: 16,
                            column: 144
                        }
                    }
                })) ? s : "") + ' title__line">\n' + (null != (s = c(n, "if").call(a, null != t ? c(t, "showExplicit") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, o, 0),
                    inverse: e.program(21, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 17,
                            column: 4
                        },
                        end: {
                            line: 24,
                            column: 11
                        }
                    }
                })) ? s : "") + "  </" + u("function" == typeof(r = null != (r = c(n, "h2TagName") || (null != t ? c(t, "h2TagName") : t)) ? r : l) ? r.call(a, {
                    name: "h2TagName",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 25,
                            column: 4
                        },
                        end: {
                            line: 25,
                            column: 17
                        }
                    }
                }) : r) + ">\n"
            },
            12: function(e, t, n, i, o) {
                var s, r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = "function",
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return "    <" + c(typeof(r = null != (r = d(n, "h1TagName") || (null != t ? d(t, "h1TagName") : t)) ? r : l) === u ? r.call(a, {
                    name: "h1TagName",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 11,
                            column: 5
                        },
                        end: {
                            line: 11,
                            column: 18
                        }
                    }
                }) : r) + ' href="' + c(typeof(r = null != (r = d(n, "h1Link") || (null != t ? d(t, "h1Link") : t)) ? r : l) === u ? r.call(a, {
                    name: "h1Link",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 11,
                            column: 25
                        },
                        end: {
                            line: 11,
                            column: 35
                        }
                    }
                }) : r) + '" title="' + c(typeof(r = null != (r = d(n, "h1Text") || (null != t ? d(t, "h1Text") : t)) ? r : l) === u ? r.call(a, {
                    name: "h1Text",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 11,
                            column: 44
                        },
                        end: {
                            line: 11,
                            column: 54
                        }
                    }
                }) : r) + '" class="title__h1 sc-truncate g-text-shadow ' + (null != (s = d(n, "if").call(a, null != t ? d(t, "visual") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, o, 0),
                    inverse: e.program(15, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 11,
                            column: 99
                        },
                        end: {
                            line: 11,
                            column: 191
                        }
                    }
                })) ? s : "") + ' title__line">\n      ' + c(typeof(r = null != (r = d(n, "h1Text") || (null != t ? d(t, "h1Text") : t)) ? r : l) === u ? r.call(a, {
                    name: "h1Text",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 12,
                            column: 6
                        },
                        end: {
                            line: 12,
                            column: 16
                        }
                    }
                }) : r) + "\n    </" + c(typeof(r = null != (r = d(n, "h1TagName") || (null != t ? d(t, "h1TagName") : t)) ? r : l) === u ? r.call(a, {
                    name: "h1TagName",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 13,
                            column: 6
                        },
                        end: {
                            line: 13,
                            column: 19
                        }
                    }
                }) : r) + ">\n    <br>\n"
            },
            13: function(e, t, n, i, o) {
                return "sc-text-verylight sc-link-verylight g-text-visual"
            },
            15: function(e, t, n, i, o) {
                return "sc-link-medium"
            },
            17: function(e, t, n, i, o) {
                return "g-text-visual"
            },
            19: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '      <span class="sc-media">\n        <span class="sc-media-left sc-truncate title__h2Text">' + u("function" == typeof(r = null != (r = c(i, "h2Text") || (null != t ? c(t, "h2Text") : t)) ? r : l) ? r.call(a, {
                    name: "h2Text",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 19,
                            column: 62
                        },
                        end: {
                            line: 19,
                            column: 72
                        }
                    }
                }) : r) + '</span>\n        <span class="sc-media-content title__explicit">' + u((n(506) || t && c(t, "$view") || l).call(a, n(538), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? c(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 20,
                            column: 55
                        },
                        end: {
                            line: 20,
                            column: 117
                        }
                    }
                })) + "</span>\n      </span>\n"
            },
            21: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '      <span class="title__h2Text">' + e.escapeExpression("function" == typeof(s = null != (s = r(n, "h2Text") || (null != t ? r(t, "h2Text") : t)) ? s : e.hooks.helperMissing) ? s.call(null != t ? t : e.nullContext || {}, {
                    name: "h2Text",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 23,
                            column: 34
                        },
                        end: {
                            line: 23,
                            column: 44
                        }
                    }
                }) : s) + "</span>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "inline") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(11, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 26,
                            column: 7
                        }
                    }
                })) ? s : ""
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(664);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".explicitBadge{display:inline-block;padding:0 1px;font-size:10px;line-height:12px;height:12px;text-transform:uppercase}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(666);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".title{font-size:12px;line-height:16px}.title__h1,.title__h2{display:inline-block;max-width:100%;vertical-align:bottom;outline-offset:-1px;font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight:100}.title__h1{margin-bottom:1px;text-decoration:underline}.title__h1.g-text-visual{padding-top:2px;padding-bottom:2px;margin-bottom:2px}.title__h1:hover{color:#999}.title__white{color:#fff}.title__h2{font-size:15px;line-height:18px}.title__h2.g-text-visual{padding-top:3px;padding-bottom:3px}.title__h2Text{max-width:80%}.title__line:focus{outline:none;text-decoration:underline}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(668);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".visualSoundBadge{position:relative;overflow:hidden}.visualSoundBadge__title{position:absolute;top:5px;left:5px;right:5px}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(670);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".relatedVisualSounds{position:relative;overflow:hidden;width:100%;height:100%;display:none}.relatedVisualSounds.relatedVisible{display:block}.relatedVisualSounds__item{float:left;margin-left:10px}.relatedVisualSounds__item:first-child{margin-left:0}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(672);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        var i = n(1),
            o = n(20),
            s = n(673);
        t = i(!1);
        var r = o(s);
        t.push([e.i, ".blockedSound{height:100%;padding:10px 10px 25px;background:rgba(0,0,0,.6);opacity:0;display:flex;flex-direction:column;justify-content:space-between}.blockedSound__placeholder{height:50px}.blockedSound__content{text-align:center;z-index:100}.blockedSound__icon{background:url(" + r + ") 50% no-repeat;background-size:45px 56px;width:45px;height:56px;margin:0 0 10px;display:inline-block}.blockedSound__relatedSounds{position:relative;height:150px;overflow:hidden;visibility:hidden}.blockedSound__relatedSoundsLink{display:none;text-decoration:underline}.blockedSound__relatedSoundsTitle{margin-bottom:5px}.blockedSound.related .blockedSound__relatedSounds{visibility:visible}.blockedSound.compact{padding-bottom:0;justify-content:center}.blockedSound.compact .blockedSound__placeholder,.blockedSound.compact .blockedSound__relatedSounds{display:none}.blockedSound.related.compact .blockedSound__relatedSoundsLink{display:inline-block}.blockedSound.compact .blockedSound__content{line-height:30px}.blockedSound.compact .blockedSound__text{display:inline-block;margin:0 0 0 10px;height:50px}.blockedSound.compact .blockedSound__text>p{margin:0;line-height:14px}.blockedSound.visible{opacity:1}", ""]), e.exports = t
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/geoblock-21961a09.png"
    }, function(e, t, n) {
        var i = n(4),
            o = n(675);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".soundHeader{display:flex;width:100%}.soundHeader__playButton{flex-shrink:0;margin:2px 5px 1px 1px}.soundHeader__title{overflow:hidden;flex-grow:1;flex-shrink:1;display:flex;flex-direction:column;justify-content:center;margin-top:6px}.soundHeader.visual .soundHeader__title{margin-top:0}.soundHeader__rightRow{flex-shrink:0;margin-left:10px;margin-top:-2px}.soundHeader__logo,.soundHeader__rightRow{position:relative}.soundHeader__logo{height:22px;text-align:right}.soundHeader__actions{float:right}.soundHeader.visual .soundHeader__actions,.soundHeader.visual .soundHeader__skipAdContainer{margin-top:3px}.soundHeader .soundHeader__likeButton{display:none}.soundHeader.likeVisible .soundHeader__likeButton{display:inline-block}.soundHeader.state-medium .soundTitle__title,.soundHeader.state-small .soundTitle__title{position:absolute;left:49px;right:65px}.soundHeader.visual.state-medium .soundTitle__title,.soundHeader.visual.state-small .soundTitle__title{left:59px}.soundHeader.visual .soundHeader__logo{right:-1px}.soundHeader__skipAdContainer{position:absolute;right:0;z-index:1}.soundHeader__snippetIndicator{margin:3px 0 1px}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '    <div class="soundHeader__snippetIndicator g-transition-opacity">\n      ' + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(540), {
                    name: "$view",
                    hash: {
                        backgroundColor: !0,
                        size: "medium",
                        color: "light"
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 16,
                            column: 6
                        },
                        end: {
                            line: 16,
                            column: 96
                        }
                    }
                })) + "\n    </div>\n"
            },
            3: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <div class="soundHeader__skipAdContainer"></div>\n    <div class="soundHeader__actions g-transition-opacity">\n      <div class="sc-button-group sc-button-group-pill soundHeader__buttons">\n' + (null != (s = a(n, "if").call(r, null != t ? a(t, "show_like_button") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 34,
                            column: 8
                        },
                        end: {
                            line: 43,
                            column: 15
                        }
                    }
                })) ? s : "") + (null != (s = a(n, "if").call(r, null != t ? a(t, "show_buy_button") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.program(8, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 44,
                            column: 8
                        },
                        end: {
                            line: 60,
                            column: 15
                        }
                    }
                })) ? s : "") + "\n" + (null != (s = a(n, "if").call(r, null != t ? a(t, "show_share_button") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 62,
                            column: 8
                        },
                        end: {
                            line: 72,
                            column: 15
                        }
                    }
                })) ? s : "") + "      </div>\n    </div>\n"
            },
            4: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "          " + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(679), {
                    name: "$view",
                    hash: {
                        className: "soundHeader__likeButton",
                        visual: null != t ? r(t, "visual") : t,
                        size: "small",
                        key: "likeButton",
                        resource_type: null != t ? r(t, "resource_type") : t,
                        resource_id: null != t ? r(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 35,
                            column: 10
                        },
                        end: {
                            line: 42,
                            column: 12
                        }
                    }
                })) + "\n"
            },
            6: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "          " + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(685), {
                    name: "$view",
                    hash: {
                        visual: null != t ? r(t, "visual") : t,
                        size: "small",
                        resource_type: null != t ? r(t, "resource_type") : t,
                        resource_id: null != t ? r(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 45,
                            column: 10
                        },
                        end: {
                            line: 50,
                            column: 12
                        }
                    }
                })) + "\n"
            },
            8: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "show_download_button") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 52,
                            column: 10
                        },
                        end: {
                            line: 59,
                            column: 17
                        }
                    }
                })) ? s : ""
            },
            9: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "            " + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(686), {
                    name: "$view",
                    hash: {
                        visual: null != t ? r(t, "visual") : t,
                        size: "small",
                        resource_type: null != t ? r(t, "resource_type") : t,
                        resource_id: null != t ? r(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 53,
                            column: 12
                        },
                        end: {
                            line: 58,
                            column: 14
                        }
                    }
                })) + "\n"
            },
            11: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return "          " + e.escapeExpression((n(506) || t && r(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, n(687), {
                    name: "$view",
                    hash: {
                        className: "soundHeader__shareButton",
                        size: "small",
                        overlay: null != t ? r(t, "show_button_overlay") : t,
                        visual: null != t ? r(t, "visual") : t,
                        resource_type: null != t ? r(t, "resource_type") : t,
                        resource_id: null != t ? r(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 63,
                            column: 10
                        },
                        end: {
                            line: 71,
                            column: 12
                        }
                    }
                })) + "\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="soundHeader__playButton g-transition-opacity">\n  ' + u((n(506) || t && c(t, "$view") || l).call(a, n(571), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? c(t, "resource_type") : t,
                        resource_id: null != t ? c(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 5,
                            column: 4
                        }
                    }
                })) + '\n</div>\n\n<div class="soundHeader__title g-transition-opacity">\n  ' + u((n(506) || t && c(t, "$view") || l).call(a, n(525), {
                    name: "$view",
                    hash: {
                        visual: null != t ? c(t, "visual") : t,
                        resource_type: null != t ? c(t, "resource_type") : t,
                        resource_id: null != t ? c(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 9,
                            column: 2
                        },
                        end: {
                            line: 13,
                            column: 4
                        }
                    }
                })) + "\n" + (null != (r = c(i, "if").call(a, null != t ? c(t, "show_snippet_indicator") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 14,
                            column: 2
                        },
                        end: {
                            line: 18,
                            column: 9
                        }
                    }
                })) ? r : "") + '</div>\n\n<div class="soundHeader__rightRow">\n  <div class="soundHeader__logo g-transition-opacity">\n    ' + u((n(506) || t && c(t, "$view") || l).call(a, n(573), {
                    name: "$view",
                    hash: {
                        key: "logo",
                        inverse: null != t ? c(t, "visual") : t,
                        resource_type: null != t ? c(t, "resource_type") : t,
                        resource_id: null != t ? c(t, "resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 23,
                            column: 4
                        },
                        end: {
                            line: 28,
                            column: 6
                        }
                    }
                })) + "\n  </div>\n" + (null != (r = c(i, "unless").call(a, null != t ? c(t, "hide_action_buttons") : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 30,
                            column: 2
                        },
                        end: {
                            line: 75,
                            column: 13
                        }
                    }
                })) ? r : "") + "</div>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(678);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".snippetIndicator.snippetIndicatorBackgroundActive{background:rgba(0,0,0,.2)}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(552),
            o = n(516),
            s = n(11),
            r = n(527),
            a = n(555),
            l = n(30),
            u = n(51),
            c = n(38);
        e.exports = c.extend(o, r, {
            className: "sc-button-like likeButton",
            template: function() {
                return l.t("Like", null, {
                    context: "button"
                })
            },
            defaults: {
                resource_id: null
            },
            attributes: {
                title: l.t("Like", null, {
                    context: "button"
                })
            },
            setup: function() {
                this.model = new a, this.observedAttributes = [this.options.resource_id]
            },
            renderDecorate: function() {
                var e = !!this.model.get(this.options.resource_id),
                    t = e ? l.t("Liked", null, {
                        context: "button"
                    }) : l.t("Like", null, {
                        context: "button"
                    });
                this.toggleState("selected", e), this.$el.attr("title", t).html(t)
            },
            onClick: function(e) {
                var t = this.options;
                s.trigger(u.UI.LIKE_BUTTON_CLICKED, this.model), i.like(t.resource_id, t.resource_type, !this.model.get(t.resource_id)), e.preventDefault()
            }
        })
    }, function(e, t, n) {
        var i = n(568),
            o = n(38);
        e.exports = o.extend(i, {
            template: n(682),
            css: n(683),
            className: "tooltip g-overlay sc-selection-disabled",
            defaults: {
                margin: 11,
                collision: "fit",
                text: null
            },
            attributes: {
                role: "tooltip"
            },
            setup: function() {
                var e = this.options;
                !e.text && e.relativeElement && (e.text = e.relativeElement.title, e.relativeElement.removeAttribute("title"))
            },
            closeDecorate: function() {
                this.toggleState("visible", !1)
            },
            renderDecorate: function() {
                this.whenInserted().done(function() {
                    this.toggleState("visible", this.isOpened)
                }.bind(this))
            }
        })
    }, function(e, t) {
        e.exports = {
            ALT: 18,
            BACKSPACE: 8,
            CTRL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            META: 97,
            PGDOWN: 34,
            PGUP: 33,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            COMMA: 188
        }
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '<div class="tooltip__arrow g-arrow g-arrow-top"></div>\n<div class="tooltip__content">' + e.escapeExpression(e.lambda(null != (s = null != t ? r(t, "_options") : t) ? r(s, "text") : s, t)) + "</div>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(684);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".tooltip{padding:3px 7px;opacity:0;transition:opacity .1s linear;font-size:12px;line-height:15px}.tooltip.visible{opacity:1}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(512),
            o = n(516),
            s = n(11),
            r = n(527),
            a = n(30),
            l = n(569),
            u = n(51),
            c = n(38);
        e.exports = c.extend(o, r, {
            tagName: "a",
            className: "sc-button-buy",
            ModelClass: i,
            requiredAttributes: ["purchase_url"],
            template: function() {
                return ""
            },
            renderDecorate: function() {
                var e = "sound" === this.options.resource_type,
                    t = this.model,
                    n = l.getPurchaseTitle(t.toJSON(), e ? a.t("Buy", null, {
                        comment: "Buy this track.",
                        context: "button"
                    }) : a.t("Buy all", null, {
                        comment: "Buy all tracks.",
                        context: "button"
                    }));
                this.$el.attr({
                    href: t.get("purchase_url"),
                    title: n
                }).html(n)
            },
            onClick: function() {
                s.trigger(u.UI.BUY_LINK_CLICKED, this.model)
            }
        })
    }, function(e, t, n) {
        (function(t) {
            var i = n(512),
                o = n(516),
                s = n(21),
                r = n(11),
                a = n(527),
                l = n(30),
                u = n(51),
                c = n(38);
            e.exports = c.extend(o, a, {
                tagName: "a",
                className: "sc-button-download",
                ModelClass: i,
                template: function() {
                    return l.t("Download")
                },
                renderDecorate: function() {
                    this.$el.attr({
                        title: l.t("Download")
                    })
                },
                onClick: function() {
                    r.trigger(u.UI.DOWNLOAD_LINK_CLICKED, this.model);
                    var e = s.getEndpointUrl("trackDownload", {
                        id: this.model.id
                    }, {
                        secret_token: this.model.isPrivate() ? this.model.get("secret_token") : void 0
                    });
                    t.ajax({
                        url: e,
                        type: "get",
                        processData: !0,
                        dataType: "json"
                    }).then((function(e) {
                        e.redirectUri && (window.location.href = e.redirectUri)
                    }))
                }
            })
        }).call(this, n(3))
    }, function(e, t, n) {
        var i = n(516),
            o = n(688),
            s = n(527),
            r = n(11),
            a = n(570),
            l = n(51),
            u = n(30),
            c = n(508),
            d = n(38);
        e.exports = d.extend(i, o, s, c, {
            className: "sc-button-share",
            defaults: {
                icon_only: !1,
                responsive: !0,
                overlay: !0,
                ContentViewClass: a,
                contentViewOptions: {
                    show_embed_options: !1
                }
            },
            states: {
                "overlay-opened": function(e) {
                    this.toggleState("selected", e)
                }
            },
            template: function() {
                return ""
            },
            renderDecorate: function() {
                var e = h.call(this);
                this.$el.attr("title", e).html(e)
            },
            onClick: function() {
                this.toggleState("selected"), r.trigger(l.UI.SHARE_BUTTON_CLICKED, this.model), this.options.overlay ? this.toggleOverlay() : this.rerender()
            }
        });

        function h() {
            return this.getState("selected") ? u.t("Hide share options") : u.t("Share")
        }
    }, function(e, t, n) {
        var i = n(2),
            o = n(689),
            s = n(18);
        e.exports = new s({
            applyTo: function(e) {
                e.defaults = i.extend({
                    el: null,
                    ContentViewClass: null,
                    contentViewOptions: null
                }, e.defaults)
            },
            defaults: {
                contentView: null,
                domId: null,
                toggleOverlay: function() {
                    var e = this.getOverlay();
                    e.isOpened ? e.close() : e.open()
                },
                getOverlay: function() {
                    var e = this.subviews.overlay;
                    return e && e.disposed && (this.removeSubview(e), e = null), e || ((e = r.call(this)).on([o.Events.CLOSED, o.Events.OPENED].join(" "), l, this), this.addSubview(e, "overlay")), this.subviews.overlay
                }
            },
            before: {
                setup: function() {
                    i.bindAll(this, "toggleOverlay"), this.domId = i.uniqueId("overlay-"), this.$el.attr({
                        "aria-haspopup": "true",
                        "aria-owns": this.domId
                    })
                }
            }
        });

        function r() {
            var e, t, n = this.options;
            return e = a.call(this, n.ContentViewClass), t = i.extend({
                resource_id: n.resource_id,
                resource_type: n.resource_type
            }, n.contentViewOptions), new o({
                togglerEl: this.el,
                relativeElement: this.el,
                Subview: e,
                subviewArgs: t,
                domId: this.domId,
                priorityLevel: o.PriorityLevels.HIGH
            })
        }

        function a(e) {
            return e ? i.isFunction(e.extend) ? e : e.call(this) : void 0
        }

        function l() {
            var e = this.subviews.overlay;
            e && this.toggleState("overlay-opened", e.isOpened)
        }
    }, function(e, t, n) {
        var i = n(568),
            o = n(38);
        e.exports = o.extend(i, {
            css: n(690),
            template: n(692),
            className: "dialog g-overlay",
            defaults: {
                margin: 11
            },
            getOverlayContentEl: function() {
                return this.$$("content")
            }
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(691);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".dialog{padding:10px}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                return '<div class="dialog__arrow g-arrow g-arrow-top"></div>\n<div class="dialog__content"></div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(694);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".sharePanel__header{height:32px;margin-bottom:14px}.sharePanel__embedCode,.sharePanel__header,.sharePanel__linkCode{overflow:hidden}.sharePanel.embedCodeVisible .sharePanel__embedCode,.sharePanel__linkCode{display:block}.sharePanel.embedCodeVisible .sharePanel__linkCode,.sharePanel__embedCode{display:none}.sharePanel-selection::-moz-selection{background:$mainColor;color:$mainContrastColor}.sharePanel-selection::selection{background:$mainColor;color:$mainContrastColor}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '    <div class="sc-media-right">\n      <button class="sharePanel__embedButton sc-button">' + e.escapeExpression((n(507) || t && r(t, "$t") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, "Embed", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 56
                        },
                        end: {
                            line: 12,
                            column: 70
                        }
                    }
                })) + "</button>\n    </div>\n"
            },
            3: function(e, t, i, o, s) {
                var r, a = null != t ? t : e.nullContext || {},
                    l = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="sharePanel__embedCode sc-media">\n  <div class="sc-media-right">\n    <button class="sharePanel__linkActionButton sharePanel__linkButton sc-button">' + e.escapeExpression((n(507) || t && l(t, "$t") || e.hooks.helperMissing).call(a, "Link", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 23,
                            column: 82
                        },
                        end: {
                            line: 23,
                            column: 95
                        }
                    }
                })) + "</button>\n  </div>\n" + (null != (r = l(i, "if").call(a, null != t ? l(t, "embed_code") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 25,
                            column: 2
                        },
                        end: {
                            line: 29,
                            column: 9
                        }
                    }
                })) ? r : "") + "</div>\n"
            },
            4: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '  <div class="sc-media-body">\n    <input class="sharePanel__embedCodeInput g-input sharePanel-selection" type="text" readonly="readonly" value="' + e.escapeExpression("function" == typeof(s = null != (s = r(n, "embed_code") || (null != t ? r(t, "embed_code") : t)) ? s : e.hooks.helperMissing) ? s.call(null != t ? t : e.nullContext || {}, {
                    name: "embed_code",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 27,
                            column: 114
                        },
                        end: {
                            line: 27,
                            column: 128
                        }
                    }
                }) : s) + '"/>\n  </div>\n'
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a, l = null != t ? t : e.nullContext || {},
                    u = e.hooks.helperMissing,
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="sharePanel__header">\n  <div class="sharePanel__icons sc-left">\n    ' + c((n(506) || t && d(t, "$view") || u).call(l, n(696), {
                    name: "$view",
                    hash: {
                        resource_type: null != (r = null != t ? d(t, "_options") : t) ? d(r, "resource_type") : r,
                        resource_id: null != (r = null != t ? d(t, "_options") : t) ? d(r, "resource_id") : r
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 4
                        },
                        end: {
                            line: 5,
                            column: 44
                        }
                    }
                })) + '\n  </div>\n</div>\n\n<div class="sharePanel__linkCode sc-media">\n' + (null != (r = d(i, "if").call(l, null != t ? d(t, "embed_code") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 10,
                            column: 2
                        },
                        end: {
                            line: 14,
                            column: 9
                        }
                    }
                })) ? r : "") + '  <div class="sc-media-body">\n    <input id="link-code-input" class="sharePanel__linkCodeInput g-input sharePanel-selection" type="text" readonly="readonly" value="' + c("function" == typeof(a = null != (a = d(i, "share_url") || (null != t ? d(t, "share_url") : t)) ? a : u) ? a.call(l, {
                    name: "share_url",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 16,
                            column: 134
                        },
                        end: {
                            line: 16,
                            column: 147
                        }
                    }
                }) : a) + '"/>\n  </div>\n</div>\n\n' + (null != (r = d(i, "if").call(l, null != (r = null != t ? d(t, "_options") : t) ? d(r, "show_embed_options") : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 20,
                            column: 0
                        },
                        end: {
                            line: 31,
                            column: 7
                        }
                    }
                })) ? r : "")
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(2),
            o = n(697),
            s = n(508),
            r = n(38),
            a = n(698),
            l = n(704),
            u = n(705),
            c = n(706),
            d = n(707),
            h = n(708),
            p = n(709),
            m = [l, d, c],
            f = {
                global: [u],
                china: [p],
                russia: [h]
            },
            g = o.isUsedLanguage("zh") ? "china" : o.isUsedLanguage("ru") || o.isUsedLanguage("uk") ? "russia" : "global";
        e.exports = r.extend(s, {
            tagName: "ul",
            template: n(710),
            css: n(711),
            className: "shareIcons sc-list-nostyle",
            getTemplateData: function(e) {
                return i.extend(e, {
                    icons: m.concat(f[g]).concat(a)
                })
            }
        })
    }, function(e, t) {
        var n = (navigator.userLanguage || navigator.language || "").toLowerCase(),
            i = n.split("-")[0];
        e.exports = {
            isUsedLanguage: function(e) {
                return i === e.toLowerCase()
            },
            isUsedLanguageAndCountry: function(e) {
                return n === e.toLowerCase()
            }
        }
    }, function(e, t, n) {
        var i = n(515),
            o = n(7);
        e.exports = i.extend({
            defaults: {
                popupSize: [550, 300],
                serviceKey: "email",
                serviceName: "Email",
                opensPopup: !1
            },
            getHref: function() {
                var e = this.model,
                    t = e.get("permalink_url"),
                    n = "?utm_source=" + this.options.serviceName + "&utm_campaign=" + this.options.campaignName + "&utm_medium=widgetutm_content=" + encodeURIComponent(t);
                return "mailto:" + o.stringify({
                    query: {
                        subject: encodeURIComponent(e.get("title")) + " - SoundCloud",
                        body: t + n
                    }
                })
            }
        })
    }, function(e, t) {
        e.exports = {
            centered: function(e, t, n) {
                var i = window.screenX + (window.outerWidth - t) / 2,
                    o = window.screenY + (window.outerHeight - n) / 2;
                return window.open(e, "", ["location=1", "width=" + t, "height=" + n, "top=" + o, "left=" + i, "toolbar=no", "scrollbars=yes"].join(","))
            }
        }
    }, function(e, t) {
        e.exports = {
            extract: function(e) {
                var t, n, i, o = e.tag_list || "",
                    s = e.genre || "",
                    r = [],
                    a = "",
                    l = !1,
                    u = !0,
                    c = /(\w+)\:(\w+)=(.+)/;
                for (s && r.push(s), t = 0, n = o.length; t < n; ++t) '"' === (i = o.charAt(t)) ? l = !l : " " === i ? l ? a += i : !1 === u && (u = !0, r.push(a), a = "") : (u = !1, a += i);
                return u || r.push(a), r.filter((function(e) {
                    return !c.test(e)
                })).map((function(e) {
                    return e.replace(/"/g, "").replace(/\s\s+/, " ").trim()
                })).filter(Boolean)
            }
        }
    }, function(e, t, n) {
        var i = n(4),
            o = n(702);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".shareIcon{display:inline-block}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<a class="sc-social-logo sc-social-logo-32 sc-social-logo-' + l("function" == typeof(s = null != (s = u(n, "key") || (null != t ? u(t, "key") : t)) ? s : a) ? s.call(r, {
                    name: "key",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 58
                        },
                        end: {
                            line: 1,
                            column: 65
                        }
                    }
                }) : s) + ' sc-ir"\n   href="' + l("function" == typeof(s = null != (s = u(n, "href") || (null != t ? u(t, "href") : t)) ? s : a) ? s.call(r, {
                    name: "href",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 9
                        },
                        end: {
                            line: 2,
                            column: 17
                        }
                    }
                }) : s) + '"\n   title="' + l("function" == typeof(s = null != (s = u(n, "title") || (null != t ? u(t, "title") : t)) ? s : a) ? s.call(r, {
                    name: "title",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 10
                        },
                        end: {
                            line: 3,
                            column: 19
                        }
                    }
                }) : s) + '">' + l("function" == typeof(s = null != (s = u(n, "title") || (null != t ? u(t, "title") : t)) ? s : a) ? s.call(r, {
                    name: "title",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 21
                        },
                        end: {
                            line: 3,
                            column: 30
                        }
                    }
                }) : s) + "</a>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(5),
            o = n(515),
            s = n(7);
        e.exports = o.extend({
            defaults: {
                popupSize: [550, 300],
                serviceKey: "facebook",
                serviceName: "Facebook"
            },
            getHref: function(e) {
                return s.stringify({
                    query: {
                        app_id: i.get("fb_app_id"),
                        display: "popup",
                        redirect_uri: encodeURI(location.protocol + "//soundcloud.com/fb_popup_callback.html"),
                        href: e.share_url
                    }
                }, "https://www.facebook.com/v2.2/dialog/share")
            }
        })
    }, function(e, t, n) {
        var i = n(513),
            o = n(30),
            s = n(515),
            r = n(7);
        e.exports = s.extend({
            defaults: {
                popupSize: [665, 300],
                serviceKey: "pinterest",
                serviceName: "Pinterest"
            },
            getHref: function(e) {
                var t = e.share_url,
                    n = i.urlFrom(this.model.toJSON(), 200),
                    s = o.t("[[title]] on SoundCloud", {
                        title: e.share_title
                    });
                return r.stringify({
                    query: {
                        url: t,
                        media: n,
                        description: s,
                        is_video: "true",
                        utm_source: "soundcloud",
                        utm_campaign: "share",
                        utm_medium: "pinterest",
                        utm_content: t
                    }
                }, "http://pinterest.com/pin/create/button/")
            },
            getTemplateData: function() {
                var e = s.prototype.getTemplateData.apply(this, arguments);
                return e.title = o.t("Pin it"), e
            }
        })
    }, function(e, t, n) {
        var i = n(515),
            o = n(7);
        e.exports = i.extend({
            defaults: {
                popupSize: [450, 450],
                serviceKey: "tumblr",
                serviceName: "Tumblr"
            },
            getHref: function(e) {
                return o.stringify({
                    query: {
                        externally_hosted_url: e.share_url,
                        tags: e.tags
                    }
                }, "http://www.tumblr.com/share/audio")
            }
        })
    }, function(e, t, n) {
        var i = n(515),
            o = n(7);
        e.exports = i.extend({
            defaults: {
                popupSize: [700, 251],
                serviceKey: "twitter",
                serviceName: "Twitter"
            },
            getHref: function(e) {
                return o.stringify({
                    query: {
                        text: e.share_title + " via #soundcloud",
                        url: e.share_url
                    }
                }, "http://twitter.com/share")
            }
        })
    }, function(e, t, n) {
        var i = n(515),
            o = n(7);
        e.exports = i.extend({
            defaults: {
                popupSize: [645, 450],
                serviceKey: "vkontakte",
                serviceName: "VK"
            },
            getHref: function(e) {
                return o.stringify({
                    query: {
                        url: e.share_url
                    }
                }, "http://vkontakte.ru/share.php")
            }
        })
    }, function(e, t, n) {
        var i = n(515),
            o = n(7);
        e.exports = i.extend({
            defaults: {
                popupSize: [450, 450],
                serviceKey: "weibo",
                serviceName: "Weibo"
            },
            getHref: function(e) {
                return o.stringify({
                    query: {
                        url: e.share_url
                    }
                }, "http://service.weibo.com/share/share.php")
            }
        })
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s, r, a) {
                var l, u = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '  <li class="shareIcons__icon">\n    ' + e.escapeExpression((n(506) || t && u(t, "$view") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, {
                    name: "$view",
                    hash: {
                        resource_type: null != (l = null != a[1] ? u(a[1], "_options") : a[1]) ? u(l, "resource_type") : l,
                        resource_id: null != (l = null != a[1] ? u(a[1], "_options") : a[1]) ? u(l, "resource_id") : l
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 4
                        },
                        end: {
                            line: 3,
                            column: 94
                        }
                    }
                })) + "\n  </li>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o, s, r) {
                var a, l = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (a = l(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? l(t, "icons") : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0, s, r),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 5,
                            column: 9
                        }
                    }
                })) ? a : ""
            },
            useData: !0,
            useDepths: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(712);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".shareIcons__icon{float:left;margin:0 4px 0 0}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(4),
            o = n(714);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".playButton{position:relative;display:inline-block;width:43px;height:43px;margin:0;padding:0;vertical-align:middle;border:0;background:transparent}.playButton:focus{outline:1px dotted currentColor}.playButton.small{width:20px;height:20px}.playButton.disabled,.playButton:disabled{opacity:.4;cursor:default}.playButton.playing .playButton__play,.playButton__pause{display:none}.playButton.playing .playButton__pause,.playButton__play{display:block}.playButton .playButton__overlay{visibility:hidden}.playButton:focus .playButton__overlay,.playButton:hover .playButton__overlay{visibility:visible}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r, a = null != t ? t : e.nullContext || {},
                    l = e.hooks.helperMissing,
                    u = e.escapeExpression,
                    c = e.lambda,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">\n  <defs>\n    <linearGradient id="' + u("function" == typeof(r = null != (r = d(n, "gradient_id") || (null != t ? d(t, "gradient_id") : t)) ? r : l) ? r.call(a, {
                    name: "gradient_id",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 3,
                            column: 24
                        },
                        end: {
                            line: 3,
                            column: 39
                        }
                    }
                }) : r) + '"\n                    x1="0%" y1="0%"\n                    x2="0%" y2="100%"\n                    spreadMethod="pad">\n      <stop offset="0%" stop-color="' + u(c(null != (s = null != t ? d(t, "custom") : t) ? d(s, "mainColor") : s, t)) + '" stop-opacity="1"/>\n      <stop offset="100%" stop-color="' + u(c(null != (s = null != t ? d(t, "custom") : t) ? d(s, "mainColorShade") : s, t)) + '" stop-opacity="1"/>\n    </linearGradient>\n  </defs>\n  <circle fill="url(#' + u("function" == typeof(r = null != (r = d(n, "gradient_id") || (null != t ? d(t, "gradient_id") : t)) ? r : l) ? r.call(a, {
                    name: "gradient_id",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 11,
                            column: 21
                        },
                        end: {
                            line: 11,
                            column: 36
                        }
                    }
                }) : r) + ')" stroke="' + u(c(null != (s = null != t ? d(t, "custom") : t) ? d(s, "mainColorDarker") : s, t)) + '" cx="21.5" cy="21.5" r="21"/>\n  <circle class="playButton__overlay" fill="#000" fill-opacity="0.08" stroke="' + u(c(null != (s = null != t ? d(t, "custom") : t) ? d(s, "mainColorDarker") : s, t)) + '" cx="21.5" cy="21.5" r="21"/>\n  <path class="playButton__play" fill="#fff" d="M31,21.5L17,33l2.5-11.5L17,10L31,21.5z"/>\n  <g fill="#fff" class="playButton__pause">\n    <rect x="15" y="12" width="5" height="19"/>\n    <rect x="23" y="12" width="5" height="19"/>\n  </g>\n</svg>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(717);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        (t = n(1)(!1)).push([e.i, ".logo,.logo:focus,.logo:hover{outline:0}", ""]), e.exports = t
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<style type="text/css">\n  .logo {\n    display: inline-block;\n    height: 22px;\n    padding: 5px 0;\n  }\n\n  .logo__path               { fill: #999; }\n  .logo.inverse .logo__path { fill: #fff; }\n  .logo.alt     .logo__path { fill: #333; }\n  .logo:hover   .logo__path,\n  .logo:focus   .logo__path { fill: url("#' + l("function" == typeof(s = null != (s = u(n, "gradient_id") || (null != t ? u(t, "gradient_id") : t)) ? s : a) ? s.call(r, {
                    name: "gradient_id",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 12,
                            column: 42
                        },
                        end: {
                            line: 12,
                            column: 57
                        }
                    }
                }) : s) + '"); }\n\n  .logo.state-small {\n    width: 25px;\n    overflow: hidden;\n  }\n</style>\n<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14">\n  <defs>\n   <linearGradient id="' + l("function" == typeof(s = null != (s = u(n, "gradient_id") || (null != t ? u(t, "gradient_id") : t)) ? s : a) ? s.call(r, {
                    name: "gradient_id",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 21,
                            column: 23
                        },
                        end: {
                            line: 21,
                            column: 38
                        }
                    }
                }) : s) + '"\n                   x1="0%" y1="0%"\n                   x2="0%" y2="100%"\n                   spreadMethod="pad">\n     <stop offset="0%"   stop-color="#ff7700" stop-opacity="1"/>\n     <stop offset="100%" stop-color="#ff3300" stop-opacity="1"/>\n   </linearGradient>\n  </defs>\n  <path\n    class="logo__path"\n    d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"/>\n </svg>\n'
            },
            useData: !0
        })
    }, , , , , , , , , , function(e, t, n) {
        var i = n(84),
            o = n(512),
            s = n(5),
            r = n(526),
            a = n(52),
            l = n(509),
            u = n(30),
            c = n(7),
            d = n(131),
            h = n(38),
            p = n(729),
            m = {
                DISMISS: "teaser:dismiss",
                DOWNLOAD_CLICK: "teaser:download-click"
            };
        e.exports = h.extend(l, {
            template: n(730),
            css: n(731),
            ModelClass: o,
            className: "teaser",
            attributes: {
                tabindex: "0"
            },
            defaults: {
                hasCountDown: !1
            },
            _leftSecondsToClose: 0,
            events: {
                "click .teaser__dismiss": y,
                click: function(e) {
                    e.target === e.currentTarget && y.call(this)
                },
                "click .teaser__button": function() {
                    this.trigger(m.DOWNLOAD_CLICK, this, {
                        ios: this.getState("ios"),
                        android: this.getState("android")
                    })
                },
                "click .consubUpsell": function(e) {
                    var t = {
                        impression: "consumer_sub_upgrade",
                        pageName: "consumer-premium:main",
                        category: "consumer_subs",
                        tCodeURN: "soundcloud:tcode:3003"
                    };
                    i.trackClickV1({
                        page_name: t.pageName,
                        click_category: t.category,
                        click_name: ["clickthrough", t.impression].join("::"),
                        click_object: t.tCodeURN
                    })
                }
            },
            requiredAttributes: ["title"],
            setup: function() {
                this.toggleState("mobile", g()).toggleState(a.isiOS ? "ios" : "android", f() && !v(this.model)).toggleState("nonVisual", !k())
            },
            renderDecorate: function() {
                this.whenInserted().done(_.bind(this))
            },
            onWindowSizeChange: function(e) {
                return k() ? x.call(this, e) : w.call(this, e)
            },
            scaleUpArtwork: function(e) {
                this.$$("artwork").addClass("g-all-transitions-200").css({
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: e || 0
                })
            },
            getTemplateData: function(e) {
                var t = this.model,
                    n = k() ? "market://details?id=com.soundcloud.android&referrer=utm_source%3Dsoundcloud%26Dutm_medium%3Dwidget%26utm_campaign%3Dwidget_upsell" : "market://details?id=com.soundcloud.android&referrer=utm_source%3Dsoundcloud%26Dutm_medium%3Dwidget%26utm_campaign%3Dplayer_widget",
                    i = k() ? "https://app.adjust.com/4mv2c5?adgroup=__browser_locale__&creative=var_a&campaign=player" : "https://app.adjust.com/4mv2c5?adgroup=__browser_locale__&creative=var_a&campaign=player_widget",
                    o = c.parse(document.referrer).host || "soundcloud",
                    s = f() ? a.isiOS ? i : n : v(t) ? "https://soundcloud.com/go" : c.stringify({
                        query: {
                            utm_source: o,
                            utm_campaign: "wtshare",
                            utm_medium: "widget",
                            utm_content: encodeURIComponent(e.permalink_url)
                        }
                    }, e.permalink_url);
                return e.consubUpsell = v(t), e.consubButtonSize = k() ? "sc-button-large" : "sc-button sc-button-medium", e.consubButtonText = g() ? u.t("Hear full track") : u.t("Try it free for 30 days"), e.link = s.replace("__browser_locale__", u.getBrowserPrimaryLocale()), e.hasCountDown = this.options.hasCountDown, e.locale = u.getLocale(), e.isMobile = g(), e.downloadAppText = a.isiOS ? u.t("Download on the App Store") : u.t("Get in on Google Play"), e.upsellMarkup = u.t("Explore more music & audio like [[[title]]] on SoundCloud.", {
                    title: p({
                        title: e.title,
                        link: s
                    })
                }), e
            }
        }, {
            Events: m
        });

        function f() {
            return g() && (a.isiOS || a.isAndroid)
        }

        function g() {
            return a.isMobile
        }

        function v(e) {
            return r.soundRequiresUpsell(e)
        }

        function _() {
            if (this.options.hasCountDown && (this._leftSecondsToClose = 15, b.call(this)), v(this.model)) {
                var e = {
                    impression: "consumer_sub_upgrade",
                    pageName: "consumer-premium:main",
                    category: "consumer_subs",
                    tCodeURN: "soundcloud:tcode:3003"
                };
                i.trackImpression({
                    page_name: e.page_name,
                    impression_name: e.impression,
                    impression_object: e.tCodeURN,
                    impression_category: e.category
                })
            }
            this.el.focus(), this.toggleState("visible", !0)
        }

        function b() {
            this.disposed || (this._leftSecondsToClose -= 1, this.$$("countdown").text(this._leftSecondsToClose), this._leftSecondsToClose > 0 ? setTimeout(b.bind(this), 1e3) : y.call(this))
        }

        function y() {
            this.trigger(m.DISMISS, this)
        }

        function w(e) {
            var t = this.$el.width(),
                n = e && e === d.SMALL ? 3 : 10,
                i = t > 450,
                o = Math.max(n, 8.1),
                s = 20 + (i ? 162 : 0),
                r = o + 65 + 10;
            i && this.$$("artwork").removeClass("g-all-transitions-200").css({
                top: 1,
                left: 1,
                width: 162,
                height: 162
            }), this.$$("text").css({
                top: o,
                left: s,
                right: i ? 50 : 2 * s
            }), this.toggleState("state-small"), this.$$("button_container").css({
                left: s,
                top: r
            })
        }

        function x(e) {
            var t = e && e === d.SMALL,
                n = t ? 15 : 35,
                i = t ? 10 : 30,
                o = t ? 10 : 40,
                s = t ? 15 : 20,
                r = this.$$("text").height(),
                a = this.$$("button_container").height(),
                l = this.$el.width(),
                u = this.$el.height(),
                c = l - 2 * o,
                h = Math.min(c, u - n - i - a - r - 3 * s),
                p = (u - h) / 2,
                m = p,
                f = h >= 100,
                g = Math.max(n, p - s - r),
                v = m - s - a - u / 20;
            f ? this.$$("artwork").removeClass("g-all-transitions-200").css({
                top: p,
                left: o,
                right: o,
                bottom: m
            }) : (g += h / 2 + s, v += h / 2), v = Math.abs(v), this.toggleState("artworkHidden", !f), this.$$("text").css({
                top: g,
                left: o,
                right: o
            }), this.$$("button_container").css({
                left: o,
                right: o,
                bottom: v
            }), this.$$("timer").css({
                right: 5,
                bottom: 3
            })
        }

        function k() {
            return s.get("widgetParams").visual
        }
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<span class="teaser__trackTitle sc-truncate sc-font-light">\n  <a href="' + l("function" == typeof(s = null != (s = u(n, "link") || (null != t ? u(t, "link") : t)) ? s : a) ? s.call(r, {
                    name: "link",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 11
                        },
                        end: {
                            line: 2,
                            column: 19
                        }
                    }
                }) : s) + '" class="teaser__trackLink">' + l("function" == typeof(s = null != (s = u(n, "title") || (null != t ? u(t, "title") : t)) ? s : a) ? s.call(r, {
                    name: "title",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 2,
                            column: 47
                        },
                        end: {
                            line: 2,
                            column: 56
                        }
                    }
                }) : s) + "</a>\n</span>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(79);
        e.exports = (i.default || i).template({
            1: function(e, t, i, o, s) {
                var r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <h2 class="sc-font-light sc-truncate">' + l((n(507) || t && u(t, "$t") || a).call(r, "Upgrade to SoundCloud Go+", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 3,
                            column: 42
                        },
                        end: {
                            line: 3,
                            column: 76
                        }
                    }
                })) + '</h2>\n    <h2 class="teaser__consubUpsellText sc-font-light sc-text-light">' + l((n(507) || t && u(t, "$t") || a).call(r, "Get our expanded catalog, with offline listening and no ads.", {
                    name: "$t",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 4,
                            column: 69
                        },
                        end: {
                            line: 4,
                            column: 138
                        }
                    }
                })) + "</h2>\n"
            },
            3: function(e, t, n, i, o) {
                var s, r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '    <h2 class="sc-font-light sc-truncate">' + (null != (s = "function" == typeof(r = null != (r = a(n, "upsellMarkup") || (null != t ? a(t, "upsellMarkup") : t)) ? r : e.hooks.helperMissing) ? r.call(null != t ? t : e.nullContext || {}, {
                    name: "upsellMarkup",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 6,
                            column: 42
                        },
                        end: {
                            line: 6,
                            column: 60
                        }
                    }
                }) : r) ? s : "") + "</h2>\n"
            },
            5: function(e, t, i, o, s) {
                var r, a, l = null != t ? t : e.nullContext || {},
                    u = e.hooks.helperMissing,
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '  <div class="teaser__button_container">\n    <a class="teaser__button consubUpsell hearmore sc-button-cta ' + c("function" == typeof(a = null != (a = d(i, "consubButtonSize") || (null != t ? d(t, "consubButtonSize") : t)) ? a : u) ? a.call(l, {
                    name: "consubButtonSize",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 65
                        },
                        end: {
                            line: 12,
                            column: 85
                        }
                    }
                }) : a) + '" href="' + c("function" == typeof(a = null != (a = d(i, "link") || (null != t ? d(t, "link") : t)) ? a : u) ? a.call(l, {
                    name: "link",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 93
                        },
                        end: {
                            line: 12,
                            column: 101
                        }
                    }
                }) : a) + '">' + c("function" == typeof(a = null != (a = d(i, "consubButtonText") || (null != t ? d(t, "consubButtonText") : t)) ? a : u) ? a.call(l, {
                    name: "consubButtonText",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 12,
                            column: 103
                        },
                        end: {
                            line: 12,
                            column: 123
                        }
                    }
                }) : a) + '</a>\n    <div class="teaser__restrictions">\n      ' + (null != (r = (n(507) || t && d(t, "$t") || u).call(l, "[[[spanStart]]]Restrictions apply - [[[spanEnd]]] [[[linkStart]]]See details to learn more[[[linkEnd]]]", {
                    name: "$t",
                    hash: {
                        linkEnd: "</a>",
                        linkStart: '<a class="sc-font-light sc-link-medium" href="https://soundcloud.com/go" target="_blank">',
                        spanEnd: "</span>",
                        spanStart: '<span class="sc-font-light sc-text-light">'
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 14,
                            column: 6
                        },
                        end: {
                            line: 19,
                            column: 9
                        }
                    }
                })) ? r : "") + "\n    </div>\n  </div>\n"
            },
            7: function(e, t, n, i, o) {
                var s, r = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return null != (s = r(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? r(t, "isMobile") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.program(10, o, 0),
                    data: o,
                    loc: {
                        start: {
                            line: 23,
                            column: 2
                        },
                        end: {
                            line: 42,
                            column: 9
                        }
                    }
                })) ? s : ""
            },
            8: function(e, t, n, i, o) {
                var s, r = null != t ? t : e.nullContext || {},
                    a = e.hooks.helperMissing,
                    l = e.escapeExpression,
                    u = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <div class="teaser__button_container">\n      <a class="teaser__button ' + l("function" == typeof(s = null != (s = u(n, "locale") || (null != t ? u(t, "locale") : t)) ? s : a) ? s.call(r, {
                    name: "locale",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 25,
                            column: 31
                        },
                        end: {
                            line: 25,
                            column: 41
                        }
                    }
                }) : s) + '" href="' + l("function" == typeof(s = null != (s = u(n, "link") || (null != t ? u(t, "link") : t)) ? s : a) ? s.call(r, {
                    name: "link",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 25,
                            column: 49
                        },
                        end: {
                            line: 25,
                            column: 57
                        }
                    }
                }) : s) + '" title="' + l("function" == typeof(s = null != (s = u(n, "downloadAppText") || (null != t ? u(t, "downloadAppText") : t)) ? s : a) ? s.call(r, {
                    name: "downloadAppText",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 25,
                            column: 66
                        },
                        end: {
                            line: 25,
                            column: 85
                        }
                    }
                }) : s) + '"><span class="sc-visuallyhidden">' + l("function" == typeof(s = null != (s = u(n, "downloadAppText") || (null != t ? u(t, "downloadAppText") : t)) ? s : a) ? s.call(r, {
                    name: "downloadAppText",
                    hash: {},
                    data: o,
                    loc: {
                        start: {
                            line: 25,
                            column: 119
                        },
                        end: {
                            line: 25,
                            column: 138
                        }
                    }
                }) : s) + "</span></a>\n    </div>\n"
            },
            10: function(e, t, i, o, s) {
                var r, a, l = null != t ? t : e.nullContext || {},
                    u = e.hooks.helperMissing,
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '    <div class="teaser__button_container">\n      <a class="teaser__button hearmore ' + c("function" == typeof(a = null != (a = d(i, "locale") || (null != t ? d(t, "locale") : t)) ? a : u) ? a.call(l, {
                    name: "locale",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 29,
                            column: 40
                        },
                        end: {
                            line: 29,
                            column: 50
                        }
                    }
                }) : a) + ' sc-link-white" href="' + c("function" == typeof(a = null != (a = d(i, "link") || (null != t ? d(t, "link") : t)) ? a : u) ? a.call(l, {
                    name: "link",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 29,
                            column: 72
                        },
                        end: {
                            line: 29,
                            column: 80
                        }
                    }
                }) : a) + '">\n        <div class="hearmore__container">\n          <div class="hearmore__left">\n            <div class="hearmore__logo"></div>\n          </div>\n          <div class="hearmore__right">\n' + (null != (r = (n(507) || t && d(t, "$t") || u).call(l, {
                    name: "$t",
                    hash: {
                        _comment: "Teaser button text"
                    },
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 35,
                            column: 12
                        },
                        end: {
                            line: 37,
                            column: 19
                        }
                    }
                })) ? r : "") + "          </div>\n        </div>\n      </a>\n    </div>\n"
            },
            11: function(e, t, n, i, o) {
                return "              Hear more on<br/>SoundCloud\n"
            },
            13: function(e, t, n, i, o) {
                return "Close"
            },
            15: function(e, t, i, o, s) {
                var r, a = e.lookupProperty || function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                };
                return '  <div class="teaser__timer sc-font-light sc-truncate">' + (null != (r = (n(507) || t && a(t, "$t") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, "Back to track in [[[seconds]]]", {
                    name: "$t",
                    hash: {
                        seconds: "<span class='teaser__countdown'></span>"
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 49,
                            column: 55
                        },
                        end: {
                            line: 49,
                            column: 146
                        }
                    }
                })) ? r : "") + " &hellip; </div>\n"
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, i, o, s) {
                var r, a, l = null != t ? t : e.nullContext || {},
                    u = e.hooks.helperMissing,
                    c = e.escapeExpression,
                    d = e.lookupProperty || function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                    };
                return '<div class="teaser__text">\n' + (null != (r = d(i, "if").call(l, null != t ? d(t, "consubUpsell") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s,
                    loc: {
                        start: {
                            line: 2,
                            column: 2
                        },
                        end: {
                            line: 7,
                            column: 9
                        }
                    }
                })) ? r : "") + "</div>\n\n" + (null != (r = d(i, "if").call(l, null != t ? d(t, "consubUpsell") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s,
                    loc: {
                        start: {
                            line: 10,
                            column: 0
                        },
                        end: {
                            line: 43,
                            column: 7
                        }
                    }
                })) ? r : "") + '\n<button class="teaser__dismiss" type="button"\n        aria-label="' + (null != (r = (n(507) || t && d(t, "$t") || u).call(l, {
                    name: "$t",
                    hash: {
                        _comment: "Label that is read out for screen readers to close a popup window"
                    },
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 46,
                            column: 20
                        },
                        end: {
                            line: 46,
                            column: 116
                        }
                    }
                })) ? r : "") + '">\n</button>\n' + (null != (r = d(i, "if").call(l, null != t ? d(t, "hasCountDown") : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s,
                    loc: {
                        start: {
                            line: 48,
                            column: 0
                        },
                        end: {
                            line: 50,
                            column: 7
                        }
                    }
                })) ? r : "") + '<div class="teaser__artwork">\n  <a href="' + c("function" == typeof(a = null != (a = d(i, "link") || (null != t ? d(t, "link") : t)) ? a : u) ? a.call(l, {
                    name: "link",
                    hash: {},
                    data: s,
                    loc: {
                        start: {
                            line: 56,
                            column: 11
                        },
                        end: {
                            line: 56,
                            column: 19
                        }
                    }
                }) : a) + '">' + c((n(506) || t && d(t, "$view") || u).call(l, n(510), {
                    name: "$view",
                    hash: {
                        size: 500,
                        stretch: !0,
                        resource_type: null != t ? d(t, "_resource_type") : t,
                        resource_id: null != t ? d(t, "_resource_id") : t
                    },
                    data: s,
                    loc: {
                        start: {
                            line: 56,
                            column: 21
                        },
                        end: {
                            line: 56,
                            column: 124
                        }
                    }
                })) + "</a>\n</div>\n"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i = n(4),
            o = n(732);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]);
        var s = {
            insert: "head",
            singleton: !1
        };
        i(o, s);
        e.exports = o.locals || {}
    }, function(e, t, n) {
        var i = n(1),
            o = n(20),
            s = n(733),
            r = n(734),
            a = n(735),
            l = n(736),
            u = n(737),
            c = n(738),
            d = n(739),
            h = n(740),
            p = n(741),
            m = n(742),
            f = n(743),
            g = n(744),
            v = n(745),
            _ = n(746),
            b = n(747),
            y = n(748),
            w = n(749),
            x = n(750),
            k = n(751),
            A = n(752),
            S = n(753),
            C = n(754),
            P = n(755),
            T = n(756),
            E = n(757),
            I = n(758),
            D = n(759),
            M = n(760),
            L = n(761),
            O = n(762),
            R = n(763),
            N = n(764),
            U = n(765),
            B = n(766),
            H = n(767),
            z = n(768),
            $ = n(769),
            F = n(770),
            V = n(771),
            W = n(772),
            j = n(773),
            G = n(774),
            K = n(775),
            Q = n(776),
            J = n(777),
            q = n(778),
            Y = n(779),
            Z = n(780),
            X = n(781),
            ee = n(782),
            te = n(783),
            ne = n(784),
            ie = n(785),
            oe = n(786),
            se = n(787);
        t = i(!1);
        var re = o(s),
            ae = o(r),
            le = o(a),
            ue = o(l),
            ce = o(u),
            de = o(c),
            he = o(d),
            pe = o(h),
            me = o(p),
            fe = o(m),
            ge = o(f),
            ve = o(g),
            _e = o(v),
            be = o(_),
            ye = o(b),
            we = o(y),
            xe = o(w),
            ke = o(x),
            Ae = o(k),
            Se = o(A),
            Ce = o(S),
            Pe = o(C),
            Te = o(P),
            Ee = o(T),
            Ie = o(E),
            De = o(I),
            Me = o(D),
            Le = o(M),
            Oe = o(L),
            Re = o(O),
            Ne = o(R),
            Ue = o(N),
            Be = o(U),
            He = o(B),
            ze = o(H),
            $e = o(z),
            Fe = o($),
            Ve = o(F),
            We = o(V),
            je = o(W),
            Ge = o(j),
            Ke = o(G),
            Qe = o(K),
            Je = o(Q),
            qe = o(J),
            Ye = o(q),
            Ze = o(Y),
            Xe = o(Z),
            et = o(X),
            tt = o(ee),
            nt = o(te),
            it = o(ne),
            ot = o(ie),
            st = o(oe),
            rt = o(se);
        t.push([e.i, ".teaser{position:relative;width:100%;height:100%;background:hsla(0,0%,100%,.9);z-index:10}.teaser>*{visibility:hidden}.teaser.visible>*{visibility:visible}.teaser__artwork,.teaser__button_container,.teaser__text,.teaser__timer{position:absolute}.teaser.artworkHidden .teaser__artwork{display:none}.teaser__text>h2{margin:3px auto 0;text-align:center}.teaser.nonVisual .teaser__text>h2{margin:3px 0 0;text-align:left;padding-right:60px}.teaser__trackTitle{font-size:24px;display:block}.teaser.state-medium .teaser__text>h2,.teaser.state-small .teaser__text>h2{font-size:14px}.teaser.state-medium .teaser__trackTitle,.teaser.state-small .teaser__trackTitle{font-size:18px}.teaser__text>.teaser__consubUpsellText{width:295px;margin-bottom:20px}.teaser.nonVisual .teaser__consubUpsellText{width:350px}.teaser__dismiss{position:absolute;top:15px;right:15px;width:29px;height:29px;cursor:pointer;background:url(" + re + ") 50% no-repeat;background-size:29px 29px;border-style:none}.teaser__button{display:block;height:57px;overflow:hidden;margin:0 auto}.teaser__button.consubUpsell{height:auto}.mobile .teaser__button.consubUpsell{max-width:134px}.teaser__restrictions{padding-top:8px;text-align:center}.teaser__button.hearmore{width:204px;background-color:#f50;border-radius:4px}.teaser__button.hearmore .hearmore__container{margin:8px 10px;height:41px}.teaser__button.hearmore .hearmore__container .hearmore__left{width:30%;display:inline-block;height:100%;border-right:1px solid #da3318}.teaser__button.hearmore .hearmore__container .hearmore__right{width:70%;float:right;height:100%;text-align:left;padding-left:10px;font-weight:100;font-size:14px}.teaser__button.hearmore .hearmore__container .hearmore__left .hearmore__logo{background:url(" + ae + ") 50% no-repeat;background-size:48px 24px;width:48px;height:24px;margin-top:9px}.teaser.android .teaser__button{background:url(" + le + ") no-repeat 50% 50%;background-size:165px 57px;width:165px}.teaser.ios .teaser__button{background:url(" + ue + ") no-repeat 50% 50%;background-size:193px 57px;width:193px}.teaser__trackLink,.teaser__trackLink:visited{color:#333}.teaser__trackLink:active,.teaser__trackLink:focus,.teaser__trackLink:hover{color:#666}.teaser.ios .teaser__button.es{background-image:url(" + ce + ")}.teaser.android .teaser__button.es{background-image:url(" + de + ")}.teaser.ios .teaser__button.pt_BR{background-image:url(" + he + ")}.teaser.android .teaser__button.pt_BR{background-image:url(" + pe + ")}.teaser.ios .teaser__button.ar{background-image:url(" + me + ")}.teaser.android .teaser__button.ar{background-image:url(" + fe + ")}.teaser.ios .teaser__button.fr{background-image:url(" + ge + ")}.teaser.android .teaser__button.fr{background-image:url(" + ve + ")}.teaser.ios .teaser__button.id{background-image:url(" + _e + ")}.teaser.android .teaser__button.id{background-image:url(" + be + ")}.teaser.ios .teaser__button.it{background-image:url(" + ye + ")}.teaser.android .teaser__button.it{background-image:url(" + we + ")}.teaser.ios .teaser__button.ja{background-image:url(" + xe + ")}.teaser.android .teaser__button.ja{background-image:url(" + ke + ")}.teaser.ios .teaser__button.ko{background-image:url(" + Ae + ")}.teaser.android .teaser__button.ko{background-image:url(" + Se + ")}.teaser.ios .teaser__button.nl{background-image:url(" + Ce + ")}.teaser.android .teaser__button.nl{background-image:url(" + Pe + ")}.teaser.ios .teaser__button.ru{background-image:url(" + Te + ")}.teaser.android .teaser__button.ru{background-image:url(" + Ee + ")}.teaser.ios .teaser__button.th{background-image:url(" + Ie + ")}.teaser.android .teaser__button.th{background-image:url(" + De + ")}.teaser.ios .teaser__button.zh{background-image:url(" + Me + ")}.teaser.android .teaser__button.zh{background-image:url(" + Le + ")}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.teaser__dismiss{background-image:url(" + Oe + ")}.teaser__button.hearmore .hearmore__container .hearmore__left .hearmore__logo{background-image:url(" + Re + ")}.teaser.android .teaser__button{background-image:url(" + Ne + ")}.teaser.ios .teaser__button{background-image:url(" + Ue + ")}.teaser.ios .teaser__button.es{background-image:url(" + Be + ")}.teaser.android .teaser__button.es{background-image:url(" + He + ")}.teaser.ios .teaser__button.pt_BR{background-image:url(" + ze + ")}.teaser.android .teaser__button.pt_BR{background-image:url(" + $e + ")}.teaser.ios .teaser__button.ar{background-image:url(" + Fe + ")}.teaser.android .teaser__button.ar{background-image:url(" + Ve + ")}.teaser.ios .teaser__button.fr{background-image:url(" + We + ")}.teaser.android .teaser__button.fr{background-image:url(" + je + ")}.teaser.ios .teaser__button.id{background-image:url(" + Ge + ")}.teaser.android .teaser__button.id{background-image:url(" + Ke + ")}.teaser.ios .teaser__button.it{background-image:url(" + Qe + ")}.teaser.android .teaser__button.it{background-image:url(" + Je + ")}.teaser.ios .teaser__button.ja{background-image:url(" + qe + ")}.teaser.android .teaser__button.ja{background-image:url(" + Ye + ")}.teaser.ios .teaser__button.ko{background-image:url(" + Ze + ")}.teaser.android .teaser__button.ko{background-image:url(" + Xe + ")}.teaser.ios .teaser__button.nl{background-image:url(" + et + ")}.teaser.android .teaser__button.nl{background-image:url(" + tt + ")}.teaser.ios .teaser__button.ru{background-image:url(" + nt + ")}.teaser.android .teaser__button.ru{background-image:url(" + it + ")}.teaser.ios .teaser__button.th{background-image:url(" + ot + ")}.teaser.android .teaser__button.th{background-image:url(" + st + ")}.teaser.ios .teaser__button.zh{background-image:url(" + Me + ")}.teaser.android .teaser__button.zh{background-image:url(" + rt + ")}}", ""]), e.exports = t
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAQAAAD8mq+EAAABY0lEQVQ4y6WVza2CQBSFpwjc+5aPDcG9HUhiAa61DKeDMcrznqNtYBk2IJLQALSAC4n8OAgP72rI5NzJPWfmQylrwUUgG9GyQQBXDSuZwuCGhBFOonFixDtjmMPPRxkdGOTcctZq53PLDDs6HUJ4TBHuJ/bd/YQHpvDswgKrz8NwyexNDI/Zcd7vxHHOoiGmw5TLYTZixbQ2MwxCNbh4wK6KI+8yp8OwrIwKRnR96++3+a1UexhuYZ6LWPxGippFuVW2ZtEUi8/4eeWSNytMJa6va+fe4SpZ4GLxsRTYhUoxQqC45tkagmHBq12oFE6yUaLbprw6X1nw2vFItOhvTkXAaOSs4xxGAndUrpzh9u1t+v8dRi7TUS8HYW0cOkz7CFEjRdpgFDwWAylhR0wfKbBq4WUoERF2ELHisOhmzkqJLxo5TCeHK/ozRsKIZ9E844KEMcwrjt4AXARci+ZaFl3/nAeUgAKyZwBMPwAAAABJRU5ErkJggg=="
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAQAAAAW9LZXAAAB2ElEQVR4AeXUTUsUcQAG8N0VsyiIoIigF0Lawm0hIkopktREaAmzDWsJxJfQLfKF1CZDTQg28yTBEtGhDt36AN07ROWhDnnv1gewCDr8gjnsIum2u9ip54GH/1zmBzPMRP6/2C5tzoIZvepF/taIShr32i8A8FH3RgJZa+WNnRsBdIutA7Bsd3XArsIpgWZj1stbNZUDO/zUIOqaWin0CayfnkqAGhlRR9EsjkYDCEoCy5UADdivESmn0GUMD0sCJEsDtYbFhGdNOK4NGR0YNItFpYGvfljxzrBNawFJHBJ111btaHMRQzKYkENeoLx8snc1EBVxDk3qccYlpGUw6hbmPMHTsgG+qCsCtZZEpdHpLLpk0KcXgSnk5PGqAoCRIpDEQUMY0BVuP0ZlkZPDfBXA+yJwFSkBbuvHuCwC4wUgXwXwvQh0otVc4ab3TOKBAI8tIO+l6gEnEDeNwASmjWFGCJhH3rOKgQ9FYA+2yeKmG5hUfFA5s3hkEc+rfckxL0SkcdkV9IfbI4M7BjHlfsiUDyzbXATCOoljWpDSihbncd2FApYtG/hs359f8haL6sSRkMABh9HoCJokcFrSN6WzYsnI2r+KsKLaw20NrzrEVm/ljfjH/Q1UjPJH1pgVVgAAAABJRU5ErkJggg=="
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-02d8612c.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-a8a90d1e.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_192x57-47a7f9da.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-900bd743.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_192x57-042e925e.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-d83e43e3.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-f26c69b0.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-7990a48b.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-00d76eeb.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-b79c95cd.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-5adad32b.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-a8473a14.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-eab52871.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-b0cb6ba0.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-fdf3cd5d.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-a14dcd5e.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-86150382.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-a976c768.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_193x57-2c2d6d83.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-0ef4d283.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_192x57-7741a9b9.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-53d3965c.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_192x57-e9fc717b.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-b3d655ee.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_192x57-133a4e93.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_165x57-455c9676.png"
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAqFBMVEUAAAAAAACZmZmYmJiZmZmZmZlVVVWYmJiAgICWlpaXl5eYmJiYmJiOjo6YmJiYmJiYmJiYmJiYmJiZmZmUlJSZmZmYmJiYmJiYmJiZmZmVlZWWlpaYmJiYmJiXl5eJiYmXl5eZmZmZmZmVlZWYmJiYmJiZmZmYmJiZmZmYmJiAgICTk5OZmZmZmZmVlZWYmJiYmJiZmZmYmJiYmJiXl5eYmJiXl5eZmZmYRPXEAAAAN3RSTlMAAZ3scwUDnAIiIHJPCXnfmWrC2xP5yeTQ8B1J1dpADYVBVQyw+9Jj1EMGIaCbNemrrLqaNmFgu/UNDQAAAe9JREFUeF6t19lu6jAQBuCxnYSmCYSwb6HsWxrKds7//m92ouogZGCwK/e/y8UnjeQZe0K/nWAfnRuJardV0jhH+8DW+fGhDy39Q+xbwGpNAcjq6TZv7XatfJvWMwCqVjVVuu4CPW9AWgZeD+iuX9Y9HAGdMT3JuAOMhiwUE6A5IyazJjARz+V8gaXnExvfW2IxfybfV1BTepmpwur9ifzCJiRDwg2+Hux8hdMHGfNxwuquZrHARpOs3WAhNDqBCskqocJEO08sp2SZ6RLDmwxG8Mg6Hka3vlqj6dtTv4n1VVa7mNEPMkP3Ogs1dOhH6aD2vwAFvePf/godiDedjqH8bxCjp8tPVDQr5Oed7SH+Bkd4Gv0DaFZI4M56OFCZoA99skUFgBQ3ef28ZYB+UIILMqJHWxG8JMqwL0GEOjGWlVRHVIICKTGWlZSiKEEDW+IsJ2mLRgkS5MRZTlKOpAQKLeIsJ6kFVYI2dsRYVtIO7VdUAkCFp3zB0lxwgpyTUnI2RKIdzoM0HU6BlJEvW+KsN6IuzY24R8ZIY/s/Dp20Gjpu1KVx1LkLRpovGIdrzeEydbjCHR4Oh+fK4ZF0eJodFgK3NcR9+bFfuZwXPff10n2pNa/S7gs8Hz8+3v82HGPr8QguUXH9WSmiS0C/nH+hnl3RoArUtAAAAABJRU5ErkJggg=="
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/sc_white_96x48-d7222a81.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-a84e9569.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-78147fe1.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-86c4e21f.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-f4f5ed0a.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-bce9de26.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-7a5c3cfd.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-b40e6a7b.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-997eb944.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-5fee0385.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-cf24c7f7.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-16b9326c.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-4a7b8143.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-209a65e3.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-f7a4536c.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-80779d0c.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-8d33be08.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-6240a8bf.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-d61575ea.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-7ce229c7.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-c27dd6e4.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-192acc5a.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-380c0d25.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/apple_385x114-4d1b2eb2.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-20991af0.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "assets/images/google_330x114-4e7dfd29.png"
    }])
]);
//# sourceMappingURL=http://ent/web-sourcemaps/widget-0-7e4495eb2804.js.map