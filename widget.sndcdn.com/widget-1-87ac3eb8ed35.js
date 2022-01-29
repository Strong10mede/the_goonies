(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        550: function(e, n, t) {
            (function(n) {
                var o = t(50),
                    i = t(520),
                    s = t(719),
                    l = t(723),
                    a = t(727),
                    r = t(38),
                    u = t(55),
                    c = t(522),
                    d = t(511),
                    p = t(131),
                    h = n(window);
                e.exports = r.extend(c, {
                    className: "soundContainer g-box-full",
                    template: function() {
                        return ""
                    },
                    ModelClass: o,
                    requiredAttributes: ["policy"],
                    setup: function() {
                        d.on("resize:debounced", _, this)
                    },
                    dispose: function() {
                        d.off("resize:debounced", _, this)
                    },
                    onCurrentSoundChange: _,
                    renderDecorate: function() {
                        this.whenInserted().done(_.bind(this))
                    }
                });

                function _() {
                    var e, n, t = this.currentSound || this.model,
                        o = this.subviews.sound,
                        r = (e = t.isBlocked(), n = h.height(), u.isMini() ? l : n < p.CONTAINER_HEIGHT.DEFAULT ? e ? i : s : e ? i : a),
                        c = o && o instanceof r,
                        d = o && o.model === t;
                    c && d || (o && o._dispose(), o = this.addSubview(new r({
                        resource_id: t.resource_id,
                        resource_type: t.resource_type
                    }), "sound"), this.$el.append(o.el), o.render())
                }
            }).call(this, t(3))
        },
        719: function(e, n, t) {
            var o = t(38),
                i = t(509),
                s = t(512);
            e.exports = o.extend(i, {
                className: "compactSound g-box-full g-background-default",
                css: t(720),
                template: t(722),
                ModelClass: s,
                requiredAttributes: ["permalink", "monetization_model"],
                renderDecorate: function() {
                    var e = this.model.getCurrentSound();
                    this.toggleState("go", !(!e || !e.isHighTier()))
                }
            })
        },
        720: function(e, n, t) {
            var o = t(4),
                i = t(721);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.i, i, ""]
            ]);
            var s = {
                insert: "head",
                singleton: !1
            };
            o(i, s);
            e.exports = i.locals || {}
        },
        721: function(e, n, t) {
            var o = t(1),
                i = t(20),
                s = t(528);
            n = o(!1);
            var l = i(s);
            n.push([e.i, '.compactSound{padding:7px}.compactSound__artwork{margin-right:15px;width:100px}.compactSound__artwork,.compactSound__content{height:100px;position:relative}.compactSound__header{position:absolute;left:0;right:0;top:0;height:55px}.compactSound__waveform{position:absolute;left:0;right:0;top:55px;height:45px}.compactSound.state-small .compactSound__artwork{display:none;margin-right:0}.compactSound.go .compactSound__artwork:after{display:block;content:"";position:absolute;width:23px;height:20px;background-size:23px 20px;background-image:url(' + l + ");top:0;right:-5px}", ""]), e.exports = n
        },
        722: function(e, n, t) {
            var o = t(79);
            e.exports = (o.default || o).template({
                1: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '  <div class="compactSound__artwork sc-media-left">\n    ' + e.escapeExpression((t(506) || n && l(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(531), {
                        name: "$view",
                        hash: {
                            resource_type: null != n ? l(n, "_resource_type") : n,
                            resource_id: null != n ? l(n, "_resource_id") : n,
                            offset: 0
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 4,
                                column: 4
                            },
                            end: {
                                line: 7,
                                column: 42
                            }
                        }
                    })) + "\n  </div>\n"
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, o, i, s) {
                    var l, a = null != n ? n : e.nullContext || {},
                        r = e.hooks.helperMissing,
                        u = e.escapeExpression,
                        c = e.lookupProperty || function(e, n) {
                            if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                        };
                    return '<div class="sc-media">\n' + (null != (l = c(o, "if").call(a, null != (l = null != n ? c(n, "_params") : n) ? c(l, "show_artwork") : l, {
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
                                line: 9,
                                column: 9
                            }
                        }
                    })) ? l : "") + '  <div class="compactSound__content sc-media-body">\n    <div class="compactSound__header">\n      ' + u((t(506) || n && c(n, "$view") || r).call(a, t(539), {
                        name: "$view",
                        hash: {
                            show_share_button: !1,
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 12,
                                column: 6
                            },
                            end: {
                                line: 16,
                                column: 8
                            }
                        }
                    })) + '\n    </div>\n\n    <div class="compactSound__waveform">\n      ' + u((t(506) || n && c(n, "$view") || r).call(a, t(517), {
                        name: "$view",
                        hash: {
                            show_comments: !1,
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 20,
                                column: 6
                            },
                            end: {
                                line: 24,
                                column: 8
                            }
                        }
                    })) + "\n    </div>\n  </div>\n</div>\n"
                },
                useData: !0
            })
        },
        723: function(e, n, t) {
            var o = t(526),
                i = t(38),
                s = t(50),
                l = t(529);
            e.exports = i.extend(l, {
                className: "miniSound g-box-full sc-media",
                css: t(724),
                template: t(726),
                ModelClass: s,
                performanceSelector: ".playButton",
                requiredAttributes: ["permalink", "policy"],
                setup: function() {
                    a.call(this, "on")
                },
                dispose: function() {
                    a.call(this, "off")
                },
                getTemplateData: function(e) {
                    return e.blocked = this.model.isBlocked(), e.waveformStyle = e._params.inverse ? "inverted" : "default", e.show_snippet_indicator = o.soundRequiresUpsell(this.model), e
                }
            });

            function a(e) {
                this.model[e]("play pause finish", r, this)
            }

            function r() {
                this.toggleState("playing", this.model.isPlaying())
            }
        },
        724: function(e, n, t) {
            var o = t(4),
                i = t(725);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.i, i, ""]
            ]);
            var s = {
                insert: "head",
                singleton: !1
            };
            o(i, s);
            e.exports = i.locals || {}
        },
        725: function(e, n, t) {
            var o = t(1),
                i = t(20),
                s = t(541);
            n = o(!1);
            var l = i(s);
            n.push([e.i, ".miniSound__body{height:100%}.miniSound__title{margin:2px 0;opacity:1}.miniSound__title,.miniSound__waveform{transition:transform .25s ease-in-out,opacity .25s ease-in-out}.miniSound__waveform{position:absolute;top:0;opacity:0;transform:translate(-100%)}.miniSound.playing .miniSound__title{opacity:0;transform:translate(100%)}.miniSound.playing .miniSound__waveform{opacity:1;transform:translate(0)}.miniSound__logo{margin-top:-2px}.miniSound__blocked{padding-left:15px;background:url(" + l + ") 0 2px no-repeat;background-size:10px 10px}.miniSound__snippetIndicator{margin:2px 0 0}", ""]), e.exports = n
        },
        726: function(e, n, t) {
            var o = t(79);
            e.exports = (o.default || o).template({
                1: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '  <div class="miniSound__snippetIndicator sc-media-right">\n    ' + e.escapeExpression((t(506) || n && l(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(540), {
                        name: "$view",
                        hash: {},
                        data: s,
                        loc: {
                            start: {
                                line: 17,
                                column: 4
                            },
                            end: {
                                line: 17,
                                column: 45
                            }
                        }
                    })) + "\n  </div>\n"
                },
                3: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '        <div class="miniSound__blocked sc-truncate">\n          <span>\n            ' + e.escapeExpression((t(507) || n && l(n, "$t") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, "This track is not available in your country.", {
                        name: "$t",
                        hash: {
                            _context: "sound"
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 26,
                                column: 12
                            },
                            end: {
                                line: 26,
                                column: 82
                            }
                        }
                    })) + "\n          </span>\n        </div>\n"
                },
                5: function(e, n, o, i, s) {
                    var l, a = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return "        " + e.escapeExpression((t(506) || n && a(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(525), {
                        name: "$view",
                        hash: {
                            inverse: null != (l = null != n ? a(n, "_params") : n) ? a(l, "inverse") : l,
                            inline: !0,
                            resource_type: null != n ? a(n, "_resource_type") : n,
                            resource_id: null != n ? a(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 30,
                                column: 8
                            },
                            end: {
                                line: 35,
                                column: 10
                            }
                        }
                    })) + "\n"
                },
                7: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '    <div class="miniSound__waveform g-box-full">\n      ' + e.escapeExpression((t(506) || n && l(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(517), {
                        name: "$view",
                        hash: {
                            waveformStyle: null != n ? l(n, "waveformStyle") : n,
                            show_comments: !1,
                            resource_type: null != n ? l(n, "_resource_type") : n,
                            resource_id: null != n ? l(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 40,
                                column: 6
                            },
                            end: {
                                line: 45,
                                column: 8
                            }
                        }
                    })) + "\n    </div>\n"
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, o, i, s) {
                    var l, a = null != n ? n : e.nullContext || {},
                        r = e.hooks.helperMissing,
                        u = e.escapeExpression,
                        c = e.lookupProperty || function(e, n) {
                            if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                        };
                    return '<div class="sc-media-left">\n  ' + u((t(506) || n && c(n, "$view") || r).call(a, t(571), {
                        name: "$view",
                        hash: {
                            size: "small",
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 6,
                                column: 4
                            }
                        }
                    })) + '\n</div>\n<div class="miniSound__logo sc-media-right">\n  ' + u((t(506) || n && c(n, "$view") || r).call(a, t(573), {
                        name: "$view",
                        hash: {
                            inverse: null != (l = null != n ? c(n, "_params") : n) ? c(l, "inverse") : l,
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
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
                    })) + "\n</div>\n" + (null != (l = c(o, "if").call(a, null != n ? c(n, "show_snippet_indicator") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, s, 0),
                        inverse: e.noop,
                        data: s,
                        loc: {
                            start: {
                                line: 15,
                                column: 0
                            },
                            end: {
                                line: 19,
                                column: 7
                            }
                        }
                    })) ? l : "") + '<div class="miniSound__body sc-media-body">\n  <div class="g-box-full">\n    <div class="miniSound__title">\n' + (null != (l = c(o, "if").call(a, null != n ? c(n, "blocked") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(3, s, 0),
                        inverse: e.program(5, s, 0),
                        data: s,
                        loc: {
                            start: {
                                line: 23,
                                column: 6
                            },
                            end: {
                                line: 36,
                                column: 13
                            }
                        }
                    })) ? l : "") + "    </div>\n" + (null != (l = c(o, "unless").call(a, null != n ? c(n, "blocked") : n, {
                        name: "unless",
                        hash: {},
                        fn: e.program(7, s, 0),
                        inverse: e.noop,
                        data: s,
                        loc: {
                            start: {
                                line: 38,
                                column: 4
                            },
                            end: {
                                line: 47,
                                column: 15
                            }
                        }
                    })) ? l : "") + "  </div>\n</div>\n"
                },
                useData: !0
            })
        },
        727: function(e, n, t) {
            (function(n) {
                var o = t(2),
                    i = t(5),
                    s = t(526),
                    l = t(542),
                    a = t(30),
                    r = t(19),
                    u = t(788),
                    c = t(570),
                    d = t(50),
                    p = t(38);
                e.exports = p.extend(l, {
                    className: "sound g-box-full g-background-default g-shadow-inset",
                    css: t(796),
                    template: t(798),
                    ModelClass: d,
                    requiredAttributes: ["permalink"],
                    isSharePanelVisible: !1,
                    showRelatedAfterTeaser: !1,
                    states: {
                        panelVisible: function(e) {
                            k.call(this, "panelVisible", e)
                        },
                        artworkVisible: function(e) {
                            k.call(this, "artworkVisible", e)
                        },
                        relatedSounds: function(e) {
                            if (this.$$("content").toggleClass("g-left-transition", e), e) {
                                var n = y.call(this);
                                b.call(this, n), this.toggleState("teaser", !1)
                            }
                            S().show_artwork && this.toggleState("artworkVisible", !e);
                            this.toggleState("panelVisible", e)
                        },
                        teaser: function(e) {
                            e && (this.toggleState("relatedSounds", !1), this.toggleState("sharePanel", !1));
                            this.toggleTeaserView(e)
                        },
                        sharePanel: function(e) {
                            if (e) {
                                var n = x.call(this);
                                b.call(this, n)
                            }
                            this.toggleState("panelVisible", e), this.$$("shareLink").toggleClass("sc-button-selected", e), this.isSharePanelVisible = e
                        }
                    },
                    events: {
                        "click .soundHeader__shareButton": function(e) {
                            e.preventDefault(), this.toggleState("sharePanel", n(e.target).hasClass("sc-button-selected"))
                        }
                    },
                    setup: function() {
                        S().show_artwork && this.toggleState("artworkVisible", !0), h.call(this, "on")
                    },
                    dispose: function() {
                        h.call(this, "off")
                    },
                    renderDecorate: function() {
                        this.toggleState("go", this.model.getCurrentSound().isHighTier())
                    },
                    getTemplateData: function(e) {
                        return o.extend(e, {
                            show_follow_button: S().following,
                            show_comments: S().show_comments,
                            show_snippet_indicator: s.soundRequiresUpsell(this.model)
                        })
                    },
                    onTeaserDismiss: function() {
                        this.showRelatedAfterTeaser && this.model.areRelatedSoundsEnabled() && this.addDeferred(setTimeout(function() {
                            this.toggleState("relatedSounds", !0), this.showRelatedAfterTeaser = !1
                        }.bind(this), 1.5 * this.TEASER_TRANSITION_DURATION))
                    }
                });

                function h(e) {
                    this.model[e]("play", _, this)[e]("pause", g, this)[e]("finish", f, this)
                }

                function _() {
                    r.source === this.model && this.model.areRelatedSoundsEnabled() && y.call(this), this.toggleState("relatedSounds", !1)
                }

                function m() {
                    this.model.off("play", m, this), this.toggleState("relatedSounds", !1).toggleState("teaser", !1).toggleState("sharePanel", !1)
                }

                function f() {
                    this.disposed || $(this.model) && this.model.on("play", m, this)
                }

                function g() {
                    $(this.model) ? w.call(this) : v.call(this)
                }

                function v() {
                    this.teaserCanBeDisplayed() && this.model.isTeaserEnabled() ? (this.toggleState("teaser", !0), this.showRelatedAfterTeaser = this.model.isEnded()) : this.model.areRelatedSoundsEnabled() && this.toggleState("relatedSounds", !0)
                }

                function w() {
                    this.disposed || !this.teaserCanBeDisplayed() || !this.model.collection.isTeaserEnabled() || this.model.playbackOptions.interrupted || r.hasNextSound() && this.model.isEnded() || this.toggleState("teaser", !0)
                }

                function y() {
                    var e = this.subviews.relatedSounds,
                        n = a.t("Play another track");
                    return e || (e = this.addSubview(new u({
                        resource_id: this.model.resource_id,
                        title: n
                    }), "relatedSounds")).render(), e
                }

                function x() {
                    var e = this.subviews.sharePanel;
                    return e || (e = this.addSubview(new c({
                        resource_id: this.model.resource_id,
                        resource_type: this.model.resource_type
                    }), "sharePanel")), e.render(), e
                }

                function b(e) {
                    this.$$("panelContent").empty().append(e.el)
                }

                function S() {
                    return i.get("widgetParams") || {}
                }

                function k(e, n) {
                    this.$el.toggleClass(e, n), this.subviews.waveform && !n && this.subviews.waveform.rerender()
                }

                function $(e) {
                    return !!e.collection
                }
            }).call(this, t(3))
        },
        788: function(e, n, t) {
            var o = t(11),
                i = t(524),
                s = t(565),
                l = t(51),
                a = t(50),
                r = t(789);
            e.exports = i.extend({
                Subview: r,
                className: "relatedSounds",
                itemClassName: "relatedSounds__item",
                css: t(793),
                template: t(795),
                defaults: {
                    maxDisplay: 2,
                    title: null
                },
                events: {
                    "click .soundBadge__item a": function(e) {
                        var n = this.getListItemViewByEvent(e);
                        n && o.trigger(l.UI.RELATED_VIEW_CLICKED, n.model)
                    }
                },
                setup: function() {
                    this.collection = new s(null, {
                        resource_id: this.options.resource_id
                    });
                    var e = a.instances.get(this.options.resource_id);
                    o.trigger(l.UI.RELATED_VIEW_OPENED, e)
                },
                getListContainer: function() {
                    return this.$$("list")
                }
            })
        },
        789: function(e, n, t) {
            var o = t(50),
                i = t(38);
            e.exports = i.extend({
                template: t(790),
                css: t(791),
                className: "soundBadge sc-media",
                ModelClass: o,
                requiredAttributes: ["permalink_url", "user"]
            })
        },
        790: function(e, n, t) {
            var o = t(79);
            e.exports = (o.default || o).template({
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, o, i, s) {
                    var l, a = null != n ? n : e.nullContext || {},
                        r = e.hooks.helperMissing,
                        u = e.escapeExpression,
                        c = e.lookupProperty || function(e, n) {
                            if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                        };
                    return '<a href="' + u("function" == typeof(l = null != (l = c(o, "permalink_url") || (null != n ? c(n, "permalink_url") : n)) ? l : r) ? l.call(a, {
                        name: "permalink_url",
                        hash: {},
                        data: s,
                        loc: {
                            start: {
                                line: 1,
                                column: 9
                            },
                            end: {
                                line: 1,
                                column: 26
                            }
                        }
                    }) : l) + '" class="sc-media-image">\n  ' + u((t(533) || n && c(n, "$image") || r).call(a, n, {
                        name: "$image",
                        hash: {
                            size: 50
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 2,
                                column: 25
                            }
                        }
                    })) + '\n</a>\n<div class="sc-media-content soundBadge__content">\n  ' + u((t(506) || n && c(n, "$view") || r).call(a, t(525), {
                        name: "$view",
                        hash: {
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 5,
                                column: 2
                            },
                            end: {
                                line: 5,
                                column: 85
                            }
                        }
                    })) + '\n  <div class="soundBadge__stats">\n    ' + u((t(506) || n && c(n, "$view") || r).call(a, t(530), {
                        name: "$view",
                        hash: {
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 7,
                                column: 4
                            },
                            end: {
                                line: 7,
                                column: 77
                            }
                        }
                    })) + "\n  </div>\n</div>\n"
                },
                useData: !0
            })
        },
        791: function(e, n, t) {
            var o = t(4),
                i = t(792);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.i, i, ""]
            ]);
            var s = {
                insert: "head",
                singleton: !1
            };
            o(i, s);
            e.exports = i.locals || {}
        },
        792: function(e, n, t) {
            (n = t(1)(!1)).push([e.i, ".soundBadge{min-height:60px;padding:5px 0}.soundBadge,.soundBadge__content{position:relative}", ""]), e.exports = n
        },
        793: function(e, n, t) {
            var o = t(4),
                i = t(794);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.i, i, ""]
            ]);
            var s = {
                insert: "head",
                singleton: !1
            };
            o(i, s);
            e.exports = i.locals || {}
        },
        794: function(e, n, t) {
            (n = t(1)(!1)).push([e.i, ".relatedSounds__item{width:50%;padding-right:10px;float:left}", ""]), e.exports = n
        },
        795: function(e, n, t) {
            var o = t(79);
            e.exports = (o.default || o).template({
                1: function(e, n, t, o, i) {
                    var s, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return "  <h3>" + e.escapeExpression(e.lambda(null != (s = null != n ? l(n, "_options") : n) ? l(s, "title") : s, n)) + "</h3>\n"
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, t, o, i) {
                    var s, l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return (null != (s = l(t, "if").call(null != n ? n : e.nullContext || {}, null != (s = null != n ? l(n, "_options") : n) ? l(s, "title") : s, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.noop,
                        data: i,
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
                    })) ? s : "") + '<div class="relatedSounds__list"></div>\n'
                },
                useData: !0
            })
        },
        796: function(e, n, t) {
            var o = t(4),
                i = t(797);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.i, i, ""]
            ]);
            var s = {
                insert: "head",
                singleton: !1
            };
            o(i, s);
            e.exports = i.locals || {}
        },
        797: function(e, n, t) {
            var o = t(1),
                i = t(20),
                s = t(528);
            n = o(!1);
            var l = i(s);
            n.push([e.i, '.sound{overflow:hidden}.sound__artwork{float:left;width:162px;height:162px;margin:1px;overflow:hidden;border-radius:2px 0 0 2px;display:none;opacity:1}.sound.go .sound__artwork:after{display:block;content:"";position:absolute;width:23px;height:20px;background-size:23px 20px;background-image:url(' + l + ");top:4px;right:4px}.sound__content{position:absolute;height:154px;top:6px;right:10px;bottom:6px;left:6px;overflow:hidden;opacity:1}.sound__header{top:2px;height:55px}.sound__header,.sound__waveform{position:absolute;left:0;right:0}.sound__waveform{top:60px;height:65px}.sound.teaserVisible .sound__artwork,.sound.teaserVisible .sound__content{opacity:0}.sound__footer{position:absolute;left:0;right:0;top:125px;height:26px}.sound__stats{padding-top:8px}.sound.artworkVisible .sound__artwork{display:block;position:relative;overflow:hidden}.sound.artworkVisible .sound__content{left:175px}.sound__panel{position:absolute;right:0;bottom:0;left:0;top:100%;z-index:10;padding-top:10px;background:#f6f6f6}.sound__panelContent{padding:7px 0 0}.sound.panelVisible .sound__panel{top:54px}.sound.adState .soundHeader__actions{opacity:0}.sound.adState .sc-media-right{margin-left:32px}.sound .adPanel{margin-top:-10px}.sound__teaser{position:absolute;right:0;bottom:0;left:0;top:0;opacity:0;pointer-events:none;z-index:-1}.sound.teaserVisible .sound__teaser{opacity:1;pointer-events:auto;z-index:0}.sound__snippetIndicator{margin:11px 0 0 3px}@media (max-width:349px){.sound.artworkVisible .sound__artwork{display:none}.sound.artworkVisible .sound__content{left:6px}}", ""]), e.exports = n
        },
        798: function(e, n, t) {
            var o = t(79);
            e.exports = (o.default || o).template({
                1: function(e, n, o, i, s) {
                    var l, a = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '  <div class="sound__artwork g-transition-opacity">\n    ' + e.escapeExpression((t(506) || n && a(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(531), {
                        name: "$view",
                        hash: {
                            show_follow_button: null != n ? a(n, "show_follow_button") : n,
                            resource_type: null != (l = null != n ? a(n, "_options") : n) ? a(l, "resource_type") : l,
                            resource_id: null != (l = null != n ? a(n, "_options") : n) ? a(l, "resource_id") : l
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 3,
                                column: 4
                            },
                            end: {
                                line: 6,
                                column: 51
                            }
                        }
                    })) + "\n  </div>\n"
                },
                3: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '      <div class="sound__snippetIndicator sc-media-left">\n        ' + e.escapeExpression((t(506) || n && l(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(540), {
                        name: "$view",
                        hash: {},
                        data: s,
                        loc: {
                            start: {
                                line: 21,
                                column: 8
                            },
                            end: {
                                line: 21,
                                column: 49
                            }
                        }
                    })) + "\n      </div>\n"
                },
                5: function(e, n, o, i, s) {
                    var l = e.lookupProperty || function(e, n) {
                        if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                    };
                    return '      <div class="sound__stats sc-media-right">\n        ' + e.escapeExpression((t(506) || n && l(n, "$view") || e.hooks.helperMissing).call(null != n ? n : e.nullContext || {}, t(530), {
                        name: "$view",
                        hash: {
                            resource_type: null != n ? l(n, "_resource_type") : n,
                            resource_id: null != n ? l(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 26,
                                column: 8
                            },
                            end: {
                                line: 26,
                                column: 91
                            }
                        }
                    })) + "\n      </div>\n"
                },
                compiler: [8, ">= 4.3.0"],
                main: function(e, n, o, i, s) {
                    var l, a = null != n ? n : e.nullContext || {},
                        r = e.hooks.helperMissing,
                        u = e.escapeExpression,
                        c = e.lookupProperty || function(e, n) {
                            if (Object.prototype.hasOwnProperty.call(e, n)) return e[n]
                        };
                    return (null != (l = c(o, "if").call(a, null != (l = null != n ? c(n, "_params") : n) ? c(l, "show_artwork") : l, {
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
                    })) ? l : "") + '<div class="sound__content g-transition-opacity">\n  <div class="sound__header">\n    ' + u((t(506) || n && c(n, "$view") || r).call(a, t(539), {
                        name: "$view",
                        hash: {
                            key: "header",
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 11,
                                column: 4
                            },
                            end: {
                                line: 11,
                                column: 101
                            }
                        }
                    })) + '\n  </div>\n\n  <div class="sound__waveform">\n    ' + u((t(506) || n && c(n, "$view") || r).call(a, t(517), {
                        name: "$view",
                        hash: {
                            key: "waveform",
                            show_comments: null != n ? c(n, "show_comments") : n,
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 15,
                                column: 4
                            },
                            end: {
                                line: 15,
                                column: 136
                            }
                        }
                    })) + '\n  </div>\n\n  <div class="sound__footer sc-media">\n' + (null != (l = c(o, "if").call(a, null != n ? c(n, "show_snippet_indicator") : n, {
                        name: "if",
                        hash: {},
                        fn: e.program(3, s, 0),
                        inverse: e.noop,
                        data: s,
                        loc: {
                            start: {
                                line: 19,
                                column: 4
                            },
                            end: {
                                line: 23,
                                column: 11
                            }
                        }
                    })) ? l : "") + (null != (l = c(o, "if").call(a, null != (l = null != n ? c(n, "_params") : n) ? c(l, "show_playcount") : l, {
                        name: "if",
                        hash: {},
                        fn: e.program(5, s, 0),
                        inverse: e.noop,
                        data: s,
                        loc: {
                            start: {
                                line: 24,
                                column: 4
                            },
                            end: {
                                line: 28,
                                column: 11
                            }
                        }
                    })) ? l : "") + '  </div>\n  <div class="sound__panel g-top-transition">\n    ' + u((t(506) || n && c(n, "$view") || r).call(a, t(562), {
                        name: "$view",
                        hash: {
                            resource_type: null != n ? c(n, "_resource_type") : n,
                            resource_id: null != n ? c(n, "_resource_id") : n
                        },
                        data: s,
                        loc: {
                            start: {
                                line: 31,
                                column: 4
                            },
                            end: {
                                line: 31,
                                column: 99
                            }
                        }
                    })) + '\n    <div class="sound__panelContent"></div>\n  </div>\n</div>\n\n<div class="sound__teaser g-transition-opacity"></div>\n'
                },
                useData: !0
            })
        }
    }
]);
//# sourceMappingURL=http://ent/web-sourcemaps/widget-1-87ac3eb8ed35.js.map