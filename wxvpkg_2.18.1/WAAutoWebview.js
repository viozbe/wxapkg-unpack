(() => {
  var t = {
      954: t => {
        function e(t, e, r, n, o, s, i) {
          try {
            var u = t[s](i),
              a = u.value
          } catch (t) {
            return void r(t)
          }
          u.done ? e(a) : Promise.resolve(a).then(n, o)
        }
        t.exports = function (t) {
          return function () {
            var r = this,
              n = arguments;
            return new Promise((function (o, s) {
              var i = t.apply(r, n);

              function u(t) {
                e(i, o, s, u, a, "next", t)
              }

              function a(t) {
                e(i, o, s, u, a, "throw", t)
              }
              u(void 0)
            }))
          }
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      220: (t, e, r) => {
        var n = r(834);
        t.exports = function (t, e) {
          if (null == t) return {};
          var r, o, s = n(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (o = 0; o < i.length; o++) r = i[o], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (s[r] = t[r])
          }
          return s
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      834: t => {
        t.exports = function (t, e) {
          if (null == t) return {};
          var r, n, o = {},
            s = Object.keys(t);
          for (n = 0; n < s.length; n++) r = s[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
          return o
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      601: (t, e, r) => {
        var n = r(479),
          o = r(535),
          s = r(673),
          i = Object.getOwnPropertyNames,
          u = Object.getOwnPropertySymbols;
        e = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e.prototype,
            a = void 0 === r || r,
            c = e.unenumerable,
            l = void 0 !== c && c,
            p = e.symbol,
            h = void 0 !== p && p,
            f = [];
          if ((l || h) && i) {
            var d = n;
            l && i && (d = i);
            do {
              f = f.concat(d(t)), h && u && (f = f.concat(u(t)))
            } while (a && (t = o(t)) && t !== Object.prototype);
            f = s(f)
          } else if (a)
            for (var g in t) f.push(g);
          else f = n(t);
          return f
        }, t.exports = e
      },
      69: (t, e, r) => {
        var n = r(589),
          o = r(463);
        e = function (t, e) {
          if (o(t)) return t;
          if (e && n(e, t)) return [t];
          var r = [];
          return t.replace(s, (function (t, e, n, o) {
            r.push(n ? o.replace(i, "$1") : e || t)
          })), r
        };
        var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          i = /\\(\\)?/g;
        t.exports = e
      },
      31: (t, e, r) => {
        var n = r(768),
          o = r(304);
        e = function (t, e) {
          return function (r) {
            return o(arguments, (function (s, i) {
              if (0 !== i) {
                var u = t(s);
                o(u, (function (t) {
                  e && !n(r[t]) || (r[t] = s[t])
                }))
              }
            })), r
          }
        }, t.exports = e
      },
      181: (t, e, r) => {
        e = r(31)(r(601), !0), t.exports = e
      },
      304: (t, e, r) => {
        var n = r(82),
          o = r(479),
          s = r(749);
        e = function (t, e, r) {
          var i, u;
          if (e = s(e, r), n(t))
            for (i = 0, u = t.length; i < u; i++) e(t[i], i, t);
          else {
            var a = o(t);
            for (i = 0, u = a.length; i < u; i++) e(t[a[i]], a[i], t)
          }
          return t
        }, t.exports = e
      },
      207: (t, e, r) => {
        var n = r(479);
        e = r(31)(n), t.exports = e
      },
      206: (t, e, r) => {
        var n = r(261),
          o = r(304);
        e = function (t, e, r) {
          var s = [];
          return e = n(e, r), o(t, (function (t, r, n) {
            e(t, r, n) && s.push(t)
          })), s
        }, t.exports = e
      },
      535: (t, e, r) => {
        var n = r(765),
          o = r(18),
          s = Object.getPrototypeOf,
          i = {}.constructor;
        e = function (t) {
          if (n(t)) {
            if (s) return s(t);
            var e = t.__proto__;
            return e || null === e ? e : o(t.constructor) ? t.constructor.prototype : t instanceof i ? i.prototype : void 0
          }
        }, t.exports = e
      },
      589: (t, e) => {
        var r = Object.prototype.hasOwnProperty;
        e = function (t, e) {
          return r.call(t, e)
        }, t.exports = e
      },
      496: (t, e) => {
        e = function (t) {
          return t
        }, t.exports = e
      },
      483: (t, e, r) => {
        var n = r(913);
        e = function (t) {
          return "[object Arguments]" === n(t)
        }, t.exports = e
      },
      463: (t, e, r) => {
        var n = r(913);
        e = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === n(t)
        }, t.exports = e
      },
      82: (t, e, r) => {
        var n = r(264),
          o = r(18),
          s = Math.pow(2, 53) - 1;
        e = function (t) {
          if (!t) return !1;
          var e = t.length;
          return n(e) && e >= 0 && e <= s && !o(t)
        }, t.exports = e
      },
      272: (t, e) => {
        e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
      },
      349: (t, e, r) => {
        var n = r(82),
          o = r(463),
          s = r(38),
          i = r(483),
          u = r(479);
        e = function (t) {
          return null == t || (n(t) && (o(t) || s(t) || i(t)) ? 0 === t.length : 0 === u(t).length)
        }, t.exports = e
      },
      18: (t, e, r) => {
        var n = r(913);
        e = function (t) {
          var e = n(t);
          return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
        }, t.exports = e
      },
      114: (t, e, r) => {
        var n = r(479);
        e = function (t, e) {
          var r = n(e),
            o = r.length;
          if (null == t) return !o;
          t = Object(t);
          for (var s = 0; s < o; s++) {
            var i = r[s];
            if (e[i] !== t[i] || !(i in t)) return !1
          }
          return !0
        }, t.exports = e
      },
      51: (t, e, r) => {
        var n = r(913);
        e = "undefined" != typeof process && "[object process]" === n(process), t.exports = e
      },
      264: (t, e, r) => {
        var n = r(913);
        e = function (t) {
          return "[object Number]" === n(t)
        }, t.exports = e
      },
      765: (t, e) => {
        e = function (t) {
          var e = typeof t;
          return !!t && ("function" === e || "object" === e)
        }, t.exports = e
      },
      38: (t, e, r) => {
        var n = r(913);
        e = function (t) {
          return "[object String]" === n(t)
        }, t.exports = e
      },
      768: (t, e) => {
        e = function (t) {
          return void 0 === t
        }, t.exports = e
      },
      479: (t, e, r) => {
        var n = r(589);
        e = Object.keys ? Object.keys : function (t) {
          var e = [];
          for (var r in t) n(t, r) && e.push(r);
          return e
        }, t.exports = e
      },
      443: (t, e) => {
        var r = /^\s+/;
        e = function (t, e) {
          if (null == e) return t.replace(r, "");
          for (var n, o, s = 0, i = t.length, u = e.length, a = !0; a && s < i;)
            for (a = !1, n = -1, o = t.charAt(s); ++n < u;)
              if (o === e[n]) {
                a = !0, s++;
                break
              } return s >= i ? "" : t.substr(s, i)
        }, t.exports = e
      },
      803: (t, e, r) => {
        var n = r(261),
          o = r(479),
          s = r(82);
        e = function (t, e, r) {
          e = n(e, r);
          for (var i = !s(t) && o(t), u = (i || t).length, a = Array(u), c = 0; c < u; c++) {
            var l = i ? i[c] : c;
            a[c] = e(t[l], l, t)
          }
          return a
        }, t.exports = e
      },
      705: (t, e, r) => {
        var n = r(207),
          o = r(114);
        e = function (t) {
          return t = n({}, t),
            function (e) {
              return o(e, t)
            }
        }, t.exports = e
      },
      137: (t, e) => {
        e = Date.now ? Date.now : function () {
          return (new Date).getTime()
        }, t.exports = e
      },
      913: (t, e) => {
        var r = Object.prototype.toString;
        e = function (t) {
          return r.call(t)
        }, t.exports = e
      },
      749: (t, e, r) => {
        var n = r(768);
        e = function (t, e, r) {
          if (n(e)) return t;
          switch (null == r ? 3 : r) {
            case 1:
              return function (r) {
                return t.call(e, r)
              };
            case 3:
              return function (r, n, o) {
                return t.call(e, r, n, o)
              };
            case 4:
              return function (r, n, o, s) {
                return t.call(e, r, n, o, s)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        }, t.exports = e
      },
      85: (t, e, r) => {
        var n = r(463),
          o = r(708);
        e = function (t) {
          return n(t) ? function (e) {
            return o(e, t)
          } : (e = t, function (t) {
            return null == t ? void 0 : t[e]
          });
          var e
        }, t.exports = e
      },
      908: (t, e) => {
        e = function (t, e, r) {
          null == e && (e = t, t = 0);
          var n = Math.random();
          return r || t % 1 || e % 1 ? Math.min(t + n * (e - t + parseFloat("1e-" + ((n + "").length - 1))), e) : t + Math.floor(n * (e - t + 1))
        }, t.exports = e
      },
      663: (t, e, r) => {
        var n = r(908),
          o = r(272),
          s = r(51),
          i;
        e = function (t) {
          for (var e = new Uint8Array(t), r = 0; r < t; r++) e[r] = n(0, 255);
          return e
        }, o ? (i = window.crypto || window.msCrypto, i && (e = function (t) {
          var e = new Uint8Array(t);
          return i.getRandomValues(e), e
        })) : s && (i = eval("require")("crypto"), e = function (t) {
          return i.randomBytes(t)
        }), t.exports = e
      },
      367: (t, e) => {
        var r = /\s+$/;
        e = function (t, e) {
          if (null == e) return t.replace(r, "");
          for (var n, o, s = t.length - 1, i = e.length, u = !0; u && s >= 0;)
            for (u = !1, n = -1, o = t.charAt(s); ++n < i;)
              if (o === e[n]) {
                u = !0, s--;
                break
              } return s >= 0 ? t.substring(0, s + 1) : ""
        }, t.exports = e
      },
      261: (t, e, r) => {
        var n = r(18),
          o = r(765),
          s = r(463),
          i = r(749),
          u = r(705),
          a = r(496),
          c = r(85);
        e = function (t, e, r) {
          return null == t ? a : n(t) ? i(t, e, r) : o(t) && !s(t) ? u(t) : c(t)
        }, t.exports = e
      },
      708: (t, e, r) => {
        var n = r(768),
          o = r(69);
        e = function (t, e) {
          var r;
          for (r = (e = o(e, t)).shift(); !n(r);) {
            if (null == (t = t[r])) return;
            r = e.shift()
          }
          return t
        }, t.exports = e
      },
      468: (t, e, r) => {
        var n = r(968),
          o = r(304),
          s = r(496),
          i = r(803),
          u = "[\\x20\\t\\r\\n\\f]",
          a = "(?:\\\\[\\da-fA-F]{1,6}".concat(u, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
          c = "\\[".concat(u, "*(").concat(a, ")(?:").concat(u, "*([*^$|!~]?=)").concat(u, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(a, "))|)").concat(u, "*\\]"),
          l = "::?(".concat(a, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(c, ")*)|.*)\\)|)"),
          p = new RegExp("^".concat(u, "*,").concat(u, "*")),
          h = new RegExp("^".concat(u, "*([>+~]|").concat(u, ")").concat(u, "*")),
          f = {
            id: {
              reg: new RegExp("^#(".concat(a, ")")),
              value: function (t) {
                return t.slice(1)
              },
              toStr: function (t) {
                return "#".concat(t)
              }
            },
            class: {
              reg: new RegExp("^\\.(".concat(a, ")")), value: function (t) {
                return t.slice(1)
              }, toStr: function (t) {
                return ".".concat(t)
              }
            },
            tag: {
              reg: new RegExp("^(".concat(a, "|[*])")),
              value: s
            },
            attribute: {
              reg: new RegExp("^".concat(c)),
              value: function (t) {
                return t.slice(1, t.length - 1)
              },
              toStr: function (t) {
                return "[".concat(t, "]")
              }
            },
            pseudo: {
              reg: new RegExp("^".concat(l)),
              value: s
            }
          };
        o(f, (function (t) {
          t.value || (t.value = s), t.toStr || (t.toStr = s)
        })), e = {
          parse: function (t) {
            t = n(t);
            for (var e, r, s, i = []; t && (s && !(r = p.exec(t)) || (r && (t = t.slice(r[0].length)), e = [], i.push(e)), s = !1, (r = h.exec(t)) && (s = r.shift(), t = t.slice(s.length), (s = n(s)) || (s = " "), e.push({
                value: s,
                type: "combinator"
              })), o(f, (function (o, i) {
                var u = o.reg,
                  a = o.value;
                (r = u.exec(t)) && (s = r.shift(), t = t.slice(s.length), s = n(s), e.push({
                  value: a(s),
                  type: i
                }))
              })), s););
            return i
          },
          stringify: function (t) {
            return i(t, (function (t) {
              return (t = i(t, (function (t) {
                var e = t.type,
                  r = t.value;
                return "combinator" === e ? " " === r ? r : " ".concat(r, " ") : f[e].toStr(r)
              }))).join("")
            })).join(", ")
          }
        }, t.exports = e
      },
      564: (t, e) => {
        e = function (t, e) {
          return 0 === t.indexOf(e)
        }, t.exports = e
      },
      571: (t, e, r) => {
        var n = r(82),
          o = r(803),
          s = r(463),
          i = r(38);
        e = function (t) {
          return t ? s(t) ? t : n(t) && !i(t) ? o(t) : [t] : []
        }, t.exports = e
      },
      968: (t, e, r) => {
        var n = r(443),
          o = r(367),
          s = /^\s+|\s+$/g;
        e = function (t, e) {
          return null == e ? t.replace(s, "") : n(o(t, e), e)
        }, t.exports = e
      },
      673: (t, e, r) => {
        var n = r(206);

        function o(t, e) {
          return t === e
        }
        e = function (t, e) {
          return e = e || o, n(t, (function (t, r, n) {
            for (var o = n.length; ++r < o;)
              if (e(t, n[r])) return !1;
            return !0
          }))
        }, t.exports = e
      },
      920: (t, e, r) => {
        var n = r(663);
        e = function () {
          var t = n(16);
          return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, o[t[0]] + o[t[1]] + o[t[2]] + o[t[3]] + "-" + o[t[4]] + o[t[5]] + "-" + o[t[6]] + o[t[7]] + "-" + o[t[8]] + o[t[9]] + "-" + o[t[10]] + o[t[11]] + o[t[12]] + o[t[13]] + o[t[14]] + o[t[15]]
        };
        for (var o = [], s = 0; s < 256; s++) o[s] = (s + 256).toString(16).substr(1);
        t.exports = e
      },
      44: (t, e, r) => {
        var n = r(137);
        e = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;

          function o() {
            return new Promise((function (e, r) {
              try {
                e(t())
              } catch (t) {
                r(t)
              }
            }))
          }
          return new Promise((function (t, s) {
            var i = n(),
              u = function () {
                o().then((function (o) {
                  var a = n() - i;
                  o ? t(o) : e && a >= e ? s(Error("Wait timed out after ".concat(e, " ms"))) : setTimeout(u, r)
                }), s)
              };
            u()
          }))
        }, t.exports = e
      },
      969: (t, e) => {
        ! function (t) {
          "use strict";
          var e = function (t, e) {
              for (var r = 0; r < e.length; r += 1) t(e[r], r, e)
            },
            r = function (t, r, n) {
              var o = r;
              return e((function (e, r) {
                o = t(o, e, r)
              }), n), o
            },
            n = function (t, r) {
              var n = new Array(r.length);
              return e((function (e, r) {
                n[r] = t(e)
              }), r), n
            };

          function o(t) {
            return t.toString()
          }
          var s = function (t, e) {
              return e.join(t)
            },
            i = function (t, e, r) {
              return t + r + e
            },
            u = Array.prototype.concat;

          function a(t, e) {
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
              var o = arguments[n];
              if (null != o)
                for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
            }
            return r
          }

          function c() {
            this.init()
          }

          function l(t) {
            this.expression = t
          }

          function p(t, e, r) {
            e in t || (t[e] = r)
          }

          function h() {}

          function f(t) {
            arguments.length > 0 && this.init(t)
          }

          function d(t) {
            arguments.length > 0 && this.init(t)
          }

          function g(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function y(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function E(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function m(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function v(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function N(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function w(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function A(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function b(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function T(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function S(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function x(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function O(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function R(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function _(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function I(t, e, r) {
            arguments.length > 0 && this.init(t, e, r)
          }

          function P(t) {
            for (; t && t.parentNode;) t = t.parentNode;
            return t
          }

          function C(t, e, r) {
            return I.applyPredicates(t.predicates, e, I.applyStep(t, e, r))
          }

          function L(t, e, r) {
            return function (t) {
              for (var e = [], r = 0; r < t.length; r += 32767) {
                var n = t.slice(r, r + 32767);
                e = u.apply(e, n)
              }
              return e
            }(n(C.bind(null, r, t), e))
          }

          function D(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function F(t, e, r) {
            arguments.length > 0 && this.init(t, e, r)
          }

          function M(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function U(t) {
            arguments.length > 0 && this.init(t)
          }

          function B(t, e) {
            arguments.length > 0 && this.init(t, e)
          }
          c.prototype = new Object, c.prototype.constructor = c, c.superclass = Object.prototype, c.prototype.init = function () {
            this.reduceActions = [], this.reduceActions[3] = function (t) {
              return new y(t[0], t[2])
            }, this.reduceActions[5] = function (t) {
              return new E(t[0], t[2])
            }, this.reduceActions[7] = function (t) {
              return new m(t[0], t[2])
            }, this.reduceActions[8] = function (t) {
              return new v(t[0], t[2])
            }, this.reduceActions[10] = function (t) {
              return new N(t[0], t[2])
            }, this.reduceActions[11] = function (t) {
              return new w(t[0], t[2])
            }, this.reduceActions[12] = function (t) {
              return new A(t[0], t[2])
            }, this.reduceActions[13] = function (t) {
              return new b(t[0], t[2])
            }, this.reduceActions[15] = function (t) {
              return new T(t[0], t[2])
            }, this.reduceActions[16] = function (t) {
              return new S(t[0], t[2])
            }, this.reduceActions[18] = function (t) {
              return new x(t[0], t[2])
            }, this.reduceActions[19] = function (t) {
              return new O(t[0], t[2])
            }, this.reduceActions[20] = function (t) {
              return new R(t[0], t[2])
            }, this.reduceActions[22] = function (t) {
              return new d(t[1])
            }, this.reduceActions[24] = function (t) {
              return new _(t[0], t[2])
            }, this.reduceActions[25] = function (t) {
              return new I(void 0, void 0, t[0])
            }, this.reduceActions[27] = function (t) {
              return t[0].locationPath = t[2], t[0]
            }, this.reduceActions[28] = function (t) {
              return t[0].locationPath = t[2], t[0].locationPath.steps.unshift(new F(F.DESCENDANTORSELF, M.nodeTest, [])), t[0]
            }, this.reduceActions[29] = function (t) {
              return new I(t[0], [], void 0)
            }, this.reduceActions[30] = function (t) {
              return K.instance_of(t[0], I) ? (null == t[0].filterPredicates && (t[0].filterPredicates = []), t[0].filterPredicates.push(t[1]), t[0]) : new I(t[0], [t[1]], void 0)
            }, this.reduceActions[32] = function (t) {
              return t[1]
            }, this.reduceActions[33] = function (t) {
              return new H(t[0])
            }, this.reduceActions[34] = function (t) {
              return new j(t[0])
            }, this.reduceActions[36] = function (t) {
              return new B(t[0], [])
            }, this.reduceActions[37] = function (t) {
              return new B(t[0], t[2])
            }, this.reduceActions[38] = function (t) {
              return [t[0]]
            }, this.reduceActions[39] = function (t) {
              return t[2].unshift(t[0]), t[2]
            }, this.reduceActions[43] = function (t) {
              return new D(!0, [])
            }, this.reduceActions[44] = function (t) {
              return t[1].absolute = !0, t[1]
            }, this.reduceActions[46] = function (t) {
              return new D(!1, [t[0]])
            }, this.reduceActions[47] = function (t) {
              return t[0].steps.push(t[2]), t[0]
            }, this.reduceActions[49] = function (t) {
              return new F(t[0], t[1], [])
            }, this.reduceActions[50] = function (t) {
              return new F(F.CHILD, t[0], [])
            }, this.reduceActions[51] = function (t) {
              return new F(t[0], t[1], t[2])
            }, this.reduceActions[52] = function (t) {
              return new F(F.CHILD, t[0], t[1])
            }, this.reduceActions[54] = function (t) {
              return [t[0]]
            }, this.reduceActions[55] = function (t) {
              return t[1].unshift(t[0]), t[1]
            }, this.reduceActions[56] = function (t) {
              return "ancestor" == t[0] ? F.ANCESTOR : "ancestor-or-self" == t[0] ? F.ANCESTORORSELF : "attribute" == t[0] ? F.ATTRIBUTE : "child" == t[0] ? F.CHILD : "descendant" == t[0] ? F.DESCENDANT : "descendant-or-self" == t[0] ? F.DESCENDANTORSELF : "following" == t[0] ? F.FOLLOWING : "following-sibling" == t[0] ? F.FOLLOWINGSIBLING : "namespace" == t[0] ? F.NAMESPACE : "parent" == t[0] ? F.PARENT : "preceding" == t[0] ? F.PRECEDING : "preceding-sibling" == t[0] ? F.PRECEDINGSIBLING : "self" == t[0] ? F.SELF : -1
            }, this.reduceActions[57] = function (t) {
              return F.ATTRIBUTE
            }, this.reduceActions[59] = function (t) {
              return "comment" == t[0] ? M.commentTest : "text" == t[0] ? M.textTest : "processing-instruction" == t[0] ? M.anyPiTest : "node" == t[0] ? M.nodeTest : new M(-1, void 0)
            }, this.reduceActions[60] = function (t) {
              return new M.PITest(t[2])
            }, this.reduceActions[61] = function (t) {
              return t[1]
            }, this.reduceActions[63] = function (t) {
              return t[1].absolute = !0, t[1].steps.unshift(new F(F.DESCENDANTORSELF, M.nodeTest, [])), t[1]
            }, this.reduceActions[64] = function (t) {
              return t[0].steps.push(new F(F.DESCENDANTORSELF, M.nodeTest, [])), t[0].steps.push(t[2]), t[0]
            }, this.reduceActions[65] = function (t) {
              return new F(F.SELF, M.nodeTest, [])
            }, this.reduceActions[66] = function (t) {
              return new F(F.PARENT, M.nodeTest, [])
            }, this.reduceActions[67] = function (t) {
              return new U(t[1])
            }, this.reduceActions[68] = function (t) {
              return M.nameTestAny
            }, this.reduceActions[69] = function (t) {
              return new M.NameTestPrefixAny(t[0].split(":")[0])
            }, this.reduceActions[70] = function (t) {
              return new M.NameTestQName(t[0])
            }
          }, c.actionTable = [" s s        sssssssss    s ss  s  ss", "                 s                  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                rrrrr               ", " s s        sssssssss    s ss  s  ss", "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ", " s s        sssssssss    s ss  s  ss", "                            s       ", "                            s       ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "  s                                 ", "                            s       ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "a                                   ", "r       s                    rr  r  ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrs  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  srrrrrrrr         rrrrrrs rr sr  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                sssss               ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "              s                     ", "                             s      ", "                rrrrr               ", " s s        sssssssss    s sss s  ss", "r  srrrrrrrr         rrrrrrs rr  r  ", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss      ss  s  ss", " s s        sssssssss    s ss  s  ss", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             rr     ", "                             s      ", "                             rs     ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "                                 r  ", "                                 s  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s s        sssssssss    s ss  s  ss", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             r      "], c.actionTableNumber = [" 1 0        /.-,+*)('    & %$  #  \"!", "                 J                  ", "a  aaaaaaaaa         aaaaaaa aa  a  ", "                YYYYY               ", " 1 0        /.-,+*)('    & %$  #  \"!", "K1  KKKKKKKK .  +*)('KKKKKK  KK# K\" ", " 1 0        /.-,+*)('    & %$  #  \"!", "                            N       ", "                            O       ", "e  eeeeeeeee         eeeeeee ee ee  ", "f  fffffffff         fffffff ff ff  ", "d  ddddddddd         ddddddd dd dd  ", "B  BBBBBBBBB         BBBBBBB BB BB  ", "A  AAAAAAAAA         AAAAAAA AA AA  ", "  P                                 ", "                            Q       ", " 1           .  +*)('          #  \" ", "b  bbbbbbbbb         bbbbbbb bb  b  ", "                                    ", "!       S                    !!  !  ", '"      T"                    ""  "  ', "$   V  $$            U       $$  $  ", "&   &ZY&&            &XW     &&  &  ", ")   )))))            )))\\[   ))  )  ", ".   ....._^]         .....   ..  .  ", "1   11111111         11111   11  1  ", "5   55555555         55555`  55  5  ", "7   77777777         777777  77  7  ", "9   99999999         999999  99  9  ", ":  c::::::::         ::::::b :: a:  ", "I  fIIIIIIII         IIIIIIe II  I  ", "=  =========         ======= == ==  ", "?  ?????????         ??????? ?? ??  ", "C  CCCCCCCCC         CCCCCCC CC CC  ", "J   JJJJJJJJ         JJJJJJ  JJ  J  ", "M   MMMMMMMM         MMMMMM  MM  M  ", "N  NNNNNNNNN         NNNNNNN NN  N  ", "P  PPPPPPPPP         PPPPPPP PP  P  ", "                +*)('               ", "R  RRRRRRRRR         RRRRRRR RR aR  ", "U  UUUUUUUUU         UUUUUUU UU  U  ", "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ", "c  ccccccccc         ccccccc cc cc  ", "                             j      ", "L  fLLLLLLLL         LLLLLLe LL  L  ", "6   66666666         66666   66  6  ", "              k                     ", "                             l      ", "                XXXXX               ", " 1 0        /.-,+*)('    & %$m #  \"!", "_  f________         ______e __  _  ", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('      %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", ">  >>>>>>>>>         >>>>>>> >> >>  ", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ", "V  VVVVVVVVV         VVVVVVV VV aV  ", "T  TTTTTTTTT         TTTTTTT TT  T  ", "@  @@@@@@@@@         @@@@@@@ @@ @@  ", "                                   ", "[  [[[[[[[[[         [[[[[[[ [[ [[  ", "D  DDDDDDDDD         DDDDDDD DD DD  ", "                             HH     ", "                                   ", "                             F     ", "#      T#                    ##  #  ", "%   V  %%            U       %%  %  ", "'   'ZY''            'XW     ''  '  ", "(   (ZY((            (XW     ((  (  ", "+   +++++            +++\\[   ++  +  ", "*   *****            ***\\[   **  *  ", "-   -----            ---\\[   --  -  ", ",   ,,,,,            ,,,\\[   ,,  ,  ", "0   00000_^]         00000   00  0  ", "/   /////_^]         /////   //  /  ", "2   22222222         22222   22  2  ", "3   33333333         33333   33  3  ", "4   44444444         44444   44  4  ", "8   88888888         888888  88  8  ", "                                 ^  ", "                                   ", ";  f;;;;;;;;         ;;;;;;e ;;  ;  ", "<  f<<<<<<<<         <<<<<<e <<  <  ", "O  OOOOOOOOO         OOOOOOO OO  O  ", "`  `````````         ``````` ``  `  ", "S  SSSSSSSSS         SSSSSSS SS  S  ", "W  WWWWWWWWW         WWWWWWW WW  W  ", "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ", "E  EEEEEEEEE         EEEEEEE EE EE  ", " 1 0        /.-,+*)('    & %$  #  \"!", "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ", "                             G      "], c.gotoTable = ["3456789:;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "L456789:;<=>?@ AB  CDEFGH IJ ", "            M        EFGH IJ ", "       N;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "            S        EFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "              e              ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                        h  J ", "              i          j   ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABpqCDEFGH IJ ", "                             ", "  r6789:;<=>?@ AB  CDEFGH IJ ", "   s789:;<=>?@ AB  CDEFGH IJ ", "    t89:;<=>?@ AB  CDEFGH IJ ", "    u89:;<=>?@ AB  CDEFGH IJ ", "     v9:;<=>?@ AB  CDEFGH IJ ", "     w9:;<=>?@ AB  CDEFGH IJ ", "     x9:;<=>?@ AB  CDEFGH IJ ", "     y9:;<=>?@ AB  CDEFGH IJ ", "      z:;<=>?@ AB  CDEFGH IJ ", "      {:;<=>?@ AB  CDEFGH IJ ", "       |;<=>?@ AB  CDEFGH IJ ", "       };<=>?@ AB  CDEFGH IJ ", "       ~;<=>?@ AB  CDEFGH IJ ", "         =>?@ AB  CDEFGH IJ ", "456789:;<=>?@ AB  CDEFGH IJ", "                    EFGH IJ ", "                    EFGH IJ ", "                             ", "                      GH IJ ", "                      GH IJ ", "              i             ", "              i             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABqCDEFGH IJ ", "                             ", "                             "], c.productions = [
            [1, 1, 2],
            [2, 1, 3],
            [3, 1, 4],
            [3, 3, 3, -9, 4],
            [4, 1, 5],
            [4, 3, 4, -8, 5],
            [5, 1, 6],
            [5, 3, 5, -22, 6],
            [5, 3, 5, -5, 6],
            [6, 1, 7],
            [6, 3, 6, -23, 7],
            [6, 3, 6, -24, 7],
            [6, 3, 6, -6, 7],
            [6, 3, 6, -7, 7],
            [7, 1, 8],
            [7, 3, 7, -25, 8],
            [7, 3, 7, -26, 8],
            [8, 1, 9],
            [8, 3, 8, -12, 9],
            [8, 3, 8, -11, 9],
            [8, 3, 8, -10, 9],
            [9, 1, 10],
            [9, 2, -26, 9],
            [10, 1, 11],
            [10, 3, 10, -27, 11],
            [11, 1, 12],
            [11, 1, 13],
            [11, 3, 13, -28, 14],
            [11, 3, 13, -4, 14],
            [13, 1, 15],
            [13, 2, 13, 16],
            [15, 1, 17],
            [15, 3, -29, 2, -30],
            [15, 1, -15],
            [15, 1, -16],
            [15, 1, 18],
            [18, 3, -13, -29, -30],
            [18, 4, -13, -29, 19, -30],
            [19, 1, 20],
            [19, 3, 20, -31, 19],
            [20, 1, 2],
            [12, 1, 14],
            [12, 1, 21],
            [21, 1, -28],
            [21, 2, -28, 14],
            [21, 1, 22],
            [14, 1, 23],
            [14, 3, 14, -28, 23],
            [14, 1, 24],
            [23, 2, 25, 26],
            [23, 1, 26],
            [23, 3, 25, 26, 27],
            [23, 2, 26, 27],
            [23, 1, 28],
            [27, 1, 16],
            [27, 2, 16, 27],
            [25, 2, -14, -3],
            [25, 1, -32],
            [26, 1, 29],
            [26, 3, -20, -29, -30],
            [26, 4, -21, -29, -15, -30],
            [16, 3, -33, 30, -34],
            [30, 1, 2],
            [22, 2, -4, 14],
            [24, 3, 14, -4, 23],
            [28, 1, -35],
            [28, 1, -2],
            [17, 2, -36, -18],
            [29, 1, -17],
            [29, 1, -19],
            [29, 1, -18]
          ], c.DOUBLEDOT = 2, c.DOUBLECOLON = 3, c.DOUBLESLASH = 4, c.NOTEQUAL = 5, c.LESSTHANOREQUAL = 6, c.GREATERTHANOREQUAL = 7, c.AND = 8, c.OR = 9, c.MOD = 10, c.DIV = 11, c.MULTIPLYOPERATOR = 12, c.FUNCTIONNAME = 13, c.AXISNAME = 14, c.LITERAL = 15, c.NUMBER = 16, c.ASTERISKNAMETEST = 17, c.QNAME = 18, c.NCNAMECOLONASTERISK = 19, c.NODETYPE = 20, c.PROCESSINGINSTRUCTIONWITHLITERAL = 21, c.EQUALS = 22, c.LESSTHAN = 23, c.GREATERTHAN = 24, c.PLUS = 25, c.MINUS = 26, c.BAR = 27, c.SLASH = 28, c.LEFTPARENTHESIS = 29, c.RIGHTPARENTHESIS = 30, c.COMMA = 31, c.AT = 32, c.LEFTBRACKET = 33, c.RIGHTBRACKET = 34, c.DOT = 35, c.DOLLAR = 36, c.prototype.tokenize = function (t) {
            for (var e = [], r = [], n = t + "\0", o = 0, s = n.charAt(o++);;) {
              for (;
                " " == s || "\t" == s || "\r" == s || "\n" == s;) s = n.charAt(o++);
              if ("\0" == s || o >= n.length) break;
              if ("(" != s)
                if (")" != s)
                  if ("[" != s)
                    if ("]" != s)
                      if ("@" != s)
                        if ("," != s)
                          if ("|" != s)
                            if ("+" != s)
                              if ("-" != s)
                                if ("=" != s)
                                  if ("$" != s)
                                    if ("." != s)
                                      if ("'" != s && '"' != s)
                                        if (s >= "0" && s <= "9") {
                                          p = s;
                                          for (s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                                          if ("." == s && n.charAt(o) >= "0" && n.charAt(o) <= "9")
                                            for (p += s, p += n.charAt(o++), s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                                          e.push(c.NUMBER), r.push(p)
                                        } else if ("*" != s)
                if (":" != s || ":" != n.charAt(o))
                  if ("/" != s)
                    if ("!" != s || "=" != n.charAt(o))
                      if ("<" != s)
                        if (">" != s) {
                          if ("_" != s && !K.isLetter(s.charCodeAt(0))) throw new Error("Unexpected character " + s);
                          var i = s;
                          for (s = n.charAt(o++); K.isNCNameChar(s.charCodeAt(0));) i += s, s = n.charAt(o++);
                          if (e.length > 0 && (u = e[e.length - 1]) != c.AT && u != c.DOUBLECOLON && u != c.LEFTPARENTHESIS && u != c.LEFTBRACKET && u != c.AND && u != c.OR && u != c.MOD && u != c.DIV && u != c.MULTIPLYOPERATOR && u != c.SLASH && u != c.DOUBLESLASH && u != c.BAR && u != c.PLUS && u != c.MINUS && u != c.EQUALS && u != c.NOTEQUAL && u != c.LESSTHAN && u != c.LESSTHANOREQUAL && u != c.GREATERTHAN && u != c.GREATERTHANOREQUAL) {
                            if ("and" == i) {
                              e.push(c.AND), r.push(i);
                              continue
                            }
                            if ("or" == i) {
                              e.push(c.OR), r.push(i);
                              continue
                            }
                            if ("mod" == i) {
                              e.push(c.MOD), r.push(i);
                              continue
                            }
                            if ("div" == i) {
                              e.push(c.DIV), r.push(i);
                              continue
                            }
                          }
                          if (":" == s) {
                            if ("*" == n.charAt(o)) {
                              e.push(c.NCNAMECOLONASTERISK), r.push(i + ":*"), o++, s = n.charAt(o++);
                              continue
                            }
                            if ("_" == n.charAt(o) || K.isLetter(n.charCodeAt(o))) {
                              for (i += ":", s = n.charAt(o++); K.isNCNameChar(s.charCodeAt(0));) i += s, s = n.charAt(o++);
                              if ("(" == s) {
                                e.push(c.FUNCTIONNAME), r.push(i);
                                continue
                              }
                              e.push(c.QNAME), r.push(i);
                              continue
                            }
                            if (":" == n.charAt(o)) {
                              e.push(c.AXISNAME), r.push(i);
                              continue
                            }
                          }
                          if ("(" == s) {
                            if ("comment" == i || "text" == i || "node" == i) {
                              e.push(c.NODETYPE), r.push(i);
                              continue
                            }
                            if ("processing-instruction" == i) {
                              ")" == n.charAt(o) ? e.push(c.NODETYPE) : e.push(c.PROCESSINGINSTRUCTIONWITHLITERAL), r.push(i);
                              continue
                            }
                            e.push(c.FUNCTIONNAME), r.push(i);
                            continue
                          }
                          e.push(c.QNAME), r.push(i)
                        } else {
                          if ("=" == n.charAt(o)) {
                            e.push(c.GREATERTHANOREQUAL), r.push(">="), o++, s = n.charAt(o++);
                            continue
                          }
                          e.push(c.GREATERTHAN), r.push(">"), s = n.charAt(o++)
                        }
              else {
                if ("=" == n.charAt(o)) {
                  e.push(c.LESSTHANOREQUAL), r.push("<="), o++, s = n.charAt(o++);
                  continue
                }
                e.push(c.LESSTHAN), r.push("<"), s = n.charAt(o++)
              } else e.push(c.NOTEQUAL), r.push("!="), o++, s = n.charAt(o++);
              else {
                if ("/" == (s = n.charAt(o++))) {
                  e.push(c.DOUBLESLASH), r.push("//"), s = n.charAt(o++);
                  continue
                }
                e.push(c.SLASH), r.push("/")
              } else e.push(c.DOUBLECOLON), r.push("::"), o++, s = n.charAt(o++);
              else {
                var u;
                if (e.length > 0 && (u = e[e.length - 1]) != c.AT && u != c.DOUBLECOLON && u != c.LEFTPARENTHESIS && u != c.LEFTBRACKET && u != c.AND && u != c.OR && u != c.MOD && u != c.DIV && u != c.MULTIPLYOPERATOR && u != c.SLASH && u != c.DOUBLESLASH && u != c.BAR && u != c.PLUS && u != c.MINUS && u != c.EQUALS && u != c.NOTEQUAL && u != c.LESSTHAN && u != c.LESSTHANOREQUAL && u != c.GREATERTHAN && u != c.GREATERTHANOREQUAL) {
                  e.push(c.MULTIPLYOPERATOR), r.push(s), s = n.charAt(o++);
                  continue
                }
                e.push(c.ASTERISKNAMETEST), r.push(s), s = n.charAt(o++)
              } else {
                for (var a = s, l = ""; o < n.length && (s = n.charAt(o)) !== a;) l += s, o += 1;
                if (s !== a) throw Z.fromMessage("Unterminated string literal: " + a + l);
                o += 1, e.push(c.LITERAL), r.push(l), s = n.charAt(o++)
              } else {
                if ("." == (s = n.charAt(o++))) {
                  e.push(c.DOUBLEDOT), r.push(".."), s = n.charAt(o++);
                  continue
                }
                if (s >= "0" && s <= "9") {
                  var p = "." + s;
                  for (s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                  e.push(c.NUMBER), r.push(p);
                  continue
                }
                e.push(c.DOT), r.push(".")
              } else e.push(c.DOLLAR), r.push(s), s = n.charAt(o++);
              else e.push(c.EQUALS), r.push(s), s = n.charAt(o++);
              else e.push(c.MINUS), r.push(s), s = n.charAt(o++);
              else e.push(c.PLUS), r.push(s), s = n.charAt(o++);
              else e.push(c.BAR), r.push(s), s = n.charAt(o++);
              else e.push(c.COMMA), r.push(s), s = n.charAt(o++);
              else e.push(c.AT), r.push(s), s = n.charAt(o++);
              else e.push(c.RIGHTBRACKET), r.push(s), s = n.charAt(o++);
              else e.push(c.LEFTBRACKET), r.push(s), s = n.charAt(o++);
              else e.push(c.RIGHTPARENTHESIS), r.push(s), s = n.charAt(o++);
              else e.push(c.LEFTPARENTHESIS), r.push(s), s = n.charAt(o++)
            }
            return e.push(1), r.push("[EOF]"), [e, r]
          }, c.SHIFT = "s", c.REDUCE = "r", c.ACCEPT = "a", c.prototype.parse = function (t) {
            var e, r, n = this.tokenize(t);
            if (null != n) {
              e = n[0], r = n[1];
              var o, s, i = 0,
                u = [],
                a = [],
                p = [];
              for (u.push(0), a.push(1), p.push("_S"), o = e[i], s = r[i++];;) switch (t = u[u.length - 1], c.actionTable[t].charAt(o - 1)) {
                case c.SHIFT:
                  a.push(-o), p.push(s), u.push(c.actionTableNumber[t].charCodeAt(o - 1) - 32), o = e[i], s = r[i++];
                  break;
                case c.REDUCE:
                  for (var h = c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][1], f = [], d = 0; d < h; d++) a.pop(), f.unshift(p.pop()), u.pop();
                  var g = u[u.length - 1];
                  a.push(c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][0]), null == this.reduceActions[c.actionTableNumber[t].charCodeAt(o - 1) - 32] ? p.push(f[0]) : p.push(this.reduceActions[c.actionTableNumber[t].charCodeAt(o - 1) - 32](f)), u.push(c.gotoTable[g].charCodeAt(c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][0] - 2) - 33);
                  break;
                case c.ACCEPT:
                  return new l(p.pop());
                default:
                  throw new Error("XPath parse error")
              }
            }
          }, l.prototype = new Object, l.prototype.constructor = l, l.superclass = Object.prototype, l.prototype.toString = function () {
            return this.expression.toString()
          }, l.prototype.evaluate = function (t) {
            return t.contextNode = t.expressionContextNode, t.contextSize = 1, t.contextPosition = 1, t.isHtml && (p(t, "caseInsensitive", !0), p(t, "allowAnyNamespaceForNoPrefix", !0)), p(t, "caseInsensitive", !1), this.expression.evaluate(t)
          }, l.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace", l.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/", h.prototype = new Object, h.prototype.constructor = h, h.superclass = Object.prototype, h.prototype.init = function () {}, h.prototype.toString = function () {
            return "<Expression>"
          }, h.prototype.evaluate = function (t) {
            throw new Error("Could not evaluate expression.")
          }, f.prototype = new h, f.prototype.constructor = f, f.superclass = h.prototype, f.prototype.init = function (t) {
            this.rhs = t
          }, d.prototype = new f, d.prototype.constructor = d, d.superclass = f.prototype, d.prototype.init = function (t) {
            d.superclass.init.call(this, t)
          }, d.prototype.evaluate = function (t) {
            return this.rhs.evaluate(t).number().negate()
          }, d.prototype.toString = function () {
            return "-" + this.rhs.toString()
          }, g.prototype = new h, g.prototype.constructor = g, g.superclass = h.prototype, g.prototype.init = function (t, e) {
            this.lhs = t, this.rhs = e
          }, y.prototype = new g, y.prototype.constructor = y, y.superclass = g.prototype, y.prototype.init = function (t, e) {
            y.superclass.init.call(this, t, e)
          }, y.prototype.toString = function () {
            return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
          }, y.prototype.evaluate = function (t) {
            var e = this.lhs.evaluate(t).bool();
            return e.booleanValue() ? e : this.rhs.evaluate(t).bool()
          }, E.prototype = new g, E.prototype.constructor = E, E.superclass = g.prototype, E.prototype.init = function (t, e) {
            E.superclass.init.call(this, t, e)
          }, E.prototype.toString = function () {
            return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
          }, E.prototype.evaluate = function (t) {
            var e = this.lhs.evaluate(t).bool();
            return e.booleanValue() ? this.rhs.evaluate(t).bool() : e
          }, m.prototype = new g, m.prototype.constructor = m, m.superclass = g.prototype, m.prototype.init = function (t, e) {
            m.superclass.init.call(this, t, e)
          }, m.prototype.toString = function () {
            return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
          }, m.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).equals(this.rhs.evaluate(t))
          }, v.prototype = new g, v.prototype.constructor = v, v.superclass = g.prototype, v.prototype.init = function (t, e) {
            v.superclass.init.call(this, t, e)
          }, v.prototype.toString = function () {
            return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")"
          }, v.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).notequal(this.rhs.evaluate(t))
          }, N.prototype = new g, N.prototype.constructor = N, N.superclass = g.prototype, N.prototype.init = function (t, e) {
            N.superclass.init.call(this, t, e)
          }, N.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).lessthan(this.rhs.evaluate(t))
          }, N.prototype.toString = function () {
            return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")"
          }, w.prototype = new g, w.prototype.constructor = w, w.superclass = g.prototype, w.prototype.init = function (t, e) {
            w.superclass.init.call(this, t, e)
          }, w.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
          }, w.prototype.toString = function () {
            return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
          }, A.prototype = new g, A.prototype.constructor = A, A.superclass = g.prototype, A.prototype.init = function (t, e) {
            A.superclass.init.call(this, t, e)
          }, A.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
          }, A.prototype.toString = function () {
            return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")"
          }, b.prototype = new g, b.prototype.constructor = b, b.superclass = g.prototype, b.prototype.init = function (t, e) {
            b.superclass.init.call(this, t, e)
          }, b.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).greaterthanorequal(this.rhs.evaluate(t))
          }, b.prototype.toString = function () {
            return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")"
          }, T.prototype = new g, T.prototype.constructor = T, T.superclass = g.prototype, T.prototype.init = function (t, e) {
            T.superclass.init.call(this, t, e)
          }, T.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().plus(this.rhs.evaluate(t).number())
          }, T.prototype.toString = function () {
            return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")"
          }, S.prototype = new g, S.prototype.constructor = S, S.superclass = g.prototype, S.prototype.init = function (t, e) {
            S.superclass.init.call(this, t, e)
          }, S.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
          }, S.prototype.toString = function () {
            return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
          }, x.prototype = new g, x.prototype.constructor = x, x.superclass = g.prototype, x.prototype.init = function (t, e) {
            x.superclass.init.call(this, t, e)
          }, x.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
          }, x.prototype.toString = function () {
            return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
          }, O.prototype = new g, O.prototype.constructor = O, O.superclass = g.prototype, O.prototype.init = function (t, e) {
            O.superclass.init.call(this, t, e)
          }, O.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
          }, O.prototype.toString = function () {
            return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")"
          }, R.prototype = new g, R.prototype.constructor = R, R.superclass = g.prototype, R.prototype.init = function (t, e) {
            R.superclass.init.call(this, t, e)
          }, R.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().mod(this.rhs.evaluate(t).number())
          }, R.prototype.toString = function () {
            return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")"
          }, _.prototype = new g, _.prototype.constructor = _, _.superclass = g.prototype, _.prototype.init = function (t, e) {
            _.superclass.init.call(this, t, e)
          }, _.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).nodeset().union(this.rhs.evaluate(t).nodeset())
          }, _.prototype.toString = function () {
            return n(o, [this.lhs, this.rhs]).join(" | ")
          }, I.prototype = new h, I.prototype.constructor = I, I.superclass = h.prototype, I.prototype.init = function (t, e, r) {
            I.superclass.init.call(this), this.filter = t, this.filterPredicates = e, this.locationPath = r
          }, I.applyPredicates = function (t, n, o) {
            if (0 === t.length) return o;
            var s = n.extend({});
            return r((function (t, r) {
              return s.contextSize = t.length, n = function (t, e) {
                return s.contextNode = t, s.contextPosition = e + 1, I.predicateMatches(r, s)
              }, o = [], e((function (t, e) {
                n(t, e) && o.push(t)
              }), t), o;
              var n, o
            }), o, t)
          }, I.getRoot = function (t, e) {
            var r = e[0];
            if (9 === r.nodeType) return r;
            if (t.virtualRoot) return t.virtualRoot;
            var n = r.ownerDocument;
            if (n) return n;
            for (var o = r; null != o.parentNode;) o = o.parentNode;
            return o
          }, I.applyStep = function (t, e, r) {
            var n = [];
            switch (e.contextNode = r, t.axis) {
              case F.ANCESTOR:
                if (e.contextNode === e.virtualRoot) break;
                for (o = 2 == e.contextNode.nodeType ? I.getOwnerElement(e.contextNode) : e.contextNode.parentNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot);) o = o.parentNode;
                break;
              case F.ANCESTORORSELF:
                for (var o = e.contextNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot); o = 2 == o.nodeType ? I.getOwnerElement(o) : o.parentNode);
                break;
              case F.ATTRIBUTE:
                var s = e.contextNode.attributes;
                if (null != s)
                  for (var i = 0; i < s.length; i++) {
                    o = s.item(i);
                    t.nodeTest.matches(o, e) && n.push(o)
                  }
                break;
              case F.CHILD:
                for (o = e.contextNode.firstChild; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case F.DESCENDANT:
                for (var u = [e.contextNode.firstChild]; u.length > 0;)
                  for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                break;
              case F.DESCENDANTORSELF:
                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode);
                for (u = [e.contextNode.firstChild]; u.length > 0;)
                  for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                break;
              case F.FOLLOWING:
                if (e.contextNode === e.virtualRoot) break;
                u = [];
                null != e.contextNode.firstChild ? u.unshift(e.contextNode.firstChild) : u.unshift(e.contextNode.nextSibling);
                for (o = e.contextNode.parentNode; null != o && 9 != o.nodeType && o !== e.virtualRoot; o = o.parentNode) u.unshift(o.nextSibling);
                do {
                  for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                } while (u.length > 0);
                break;
              case F.FOLLOWINGSIBLING:
                if (e.contextNode === e.virtualRoot) break;
                for (o = e.contextNode.nextSibling; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case F.NAMESPACE:
                var a = {};
                if (1 == e.contextNode.nodeType) {
                  a.xml = l.XML_NAMESPACE_URI, a.xmlns = l.XMLNS_NAMESPACE_URI;
                  for (o = e.contextNode; null != o && 1 == o.nodeType; o = o.parentNode)
                    for (i = 0; i < o.attributes.length; i++) {
                      var c = o.attributes.item(i),
                        p = String(c.name);
                      if ("xmlns" == p) null == a[""] && (a[""] = c.value);
                      else if (p.length > 6 && "xmlns:" == p.substring(0, 6)) {
                        null == a[h = p.substring(6, p.length)] && (a[h] = c.value)
                      }
                    }
                  for (var h in a) {
                    var f = new q(h, a[h], e.contextNode);
                    t.nodeTest.matches(f, e) && n.push(f)
                  }
                }
                break;
              case F.PARENT:
                o = null, e.contextNode !== e.virtualRoot && (o = 2 == e.contextNode.nodeType ? I.getOwnerElement(e.contextNode) : e.contextNode.parentNode), null != o && t.nodeTest.matches(o, e) && n.push(o);
                break;
              case F.PRECEDING:
                u = null != e.virtualRoot ? [e.virtualRoot] : [P(e.contextNode)];
                t: for (; u.length > 0;)
                  for (o = u.pop(); null != o;) {
                    if (o == e.contextNode) break t;
                    t.nodeTest.matches(o, e) && n.unshift(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                  }
                break;
              case F.PRECEDINGSIBLING:
                if (e.contextNode === e.virtualRoot) break;
                for (o = e.contextNode.previousSibling; null != o; o = o.previousSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case F.SELF:
                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode)
            }
            return n
          }, I.applySteps = function (t, e, n) {
            return r(L.bind(null, e), n, t)
          }, I.prototype.applyFilter = function (t, e) {
            if (!this.filter) return {
              nodes: [t.contextNode]
            };
            var r = this.filter.evaluate(t);
            if (!K.instance_of(r, G)) {
              if (null != this.filterPredicates && this.filterPredicates.length > 0 || null != this.locationPath) throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
              return {
                nonNodes: r
              }
            }
            return {
              nodes: I.applyPredicates(this.filterPredicates || [], e, r.toUnsortedArray())
            }
          }, I.applyLocationPath = function (t, e, r) {
            if (!t) return r;
            var n = t.absolute ? [I.getRoot(e, r)] : r;
            return I.applySteps(t.steps, e, n)
          }, I.prototype.evaluate = function (t) {
            var e = a(new $, t),
              r = this.applyFilter(t, e);
            if ("nonNodes" in r) return r.nonNodes;
            var n = new G;
            return n.addArray(I.applyLocationPath(this.locationPath, e, r.nodes)), n
          }, I.predicateMatches = function (t, e) {
            var r = t.evaluate(e);
            return K.instance_of(r, j) ? e.contextPosition === r.numberValue() : r.booleanValue()
          }, I.predicateString = function (t) {
            return i("[", "]", t.toString())
          }, I.predicatesString = function (t) {
            return s("", n(I.predicateString, t))
          }, I.prototype.toString = function () {
            if (null != this.filter) {
              var t = o(this.filter);
              return K.instance_of(this.filter, H) ? i("'", "'", t) : null != this.filterPredicates && this.filterPredicates.length ? i("(", ")", t) + I.predicatesString(this.filterPredicates) : null != this.locationPath ? t + (this.locationPath.absolute ? "" : "/") + o(this.locationPath) : t
            }
            return o(this.locationPath)
          }, I.getOwnerElement = function (t) {
            if (t.ownerElement) return t.ownerElement;
            try {
              if (t.selectSingleNode) return t.selectSingleNode("..")
            } catch (t) {}
            for (var e = (9 == t.nodeType ? t : t.ownerDocument).getElementsByTagName("*"), r = 0; r < e.length; r++)
              for (var n = e.item(r), o = n.attributes, s = 0; s < o.length; s++) {
                if (o.item(s) === t) return n
              }
            return null
          }, D.prototype = new Object, D.prototype.constructor = D, D.superclass = Object.prototype, D.prototype.init = function (t, e) {
            this.absolute = t, this.steps = e
          }, D.prototype.toString = function () {
            return (this.absolute ? "/" : "") + n(o, this.steps).join("/")
          }, F.prototype = new Object, F.prototype.constructor = F, F.superclass = Object.prototype, F.prototype.init = function (t, e, r) {
            this.axis = t, this.nodeTest = e, this.predicates = r
          }, F.prototype.toString = function () {
            return F.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + I.predicatesString(this.predicates)
          }, F.ANCESTOR = 0, F.ANCESTORORSELF = 1, F.ATTRIBUTE = 2, F.CHILD = 3, F.DESCENDANT = 4, F.DESCENDANTORSELF = 5, F.FOLLOWING = 6, F.FOLLOWINGSIBLING = 7, F.NAMESPACE = 8, F.PARENT = 9, F.PRECEDING = 10, F.PRECEDINGSIBLING = 11, F.SELF = 12, F.STEPNAMES = r((function (t, e) {
            return t[e[0]] = e[1], t
          }), {}, [
            [F.ANCESTOR, "ancestor"],
            [F.ANCESTORORSELF, "ancestor-or-self"],
            [F.ATTRIBUTE, "attribute"],
            [F.CHILD, "child"],
            [F.DESCENDANT, "descendant"],
            [F.DESCENDANTORSELF, "descendant-or-self"],
            [F.FOLLOWING, "following"],
            [F.FOLLOWINGSIBLING, "following-sibling"],
            [F.NAMESPACE, "namespace"],
            [F.PARENT, "parent"],
            [F.PRECEDING, "preceding"],
            [F.PRECEDINGSIBLING, "preceding-sibling"],
            [F.SELF, "self"]
          ]), M.prototype = new Object, M.prototype.constructor = M, M.superclass = Object.prototype, M.prototype.init = function (t, e) {
            this.type = t, this.value = e
          }, M.prototype.toString = function () {
            return "<unknown nodetest type>"
          }, M.prototype.matches = function (t, e) {
            console.warn("unknown node test type")
          }, M.NAMETESTANY = 0, M.NAMETESTPREFIXANY = 1, M.NAMETESTQNAME = 2, M.COMMENT = 3, M.TEXT = 4, M.PI = 5, M.NODE = 6, M.isNodeType = function (t) {
            return function (e) {
              return function (t, e) {
                for (var r = 0; r < t.length; r += 1)
                  if (t[r] === e) return !0;
                return !1
              }(t, e.nodeType)
            }
          }, M.makeNodeTestType = function (t, e, r) {
            var n = r || function () {};
            return n.prototype = new M(t), n.prototype.constructor = n, a(n.prototype, e), n
          }, M.makeNodeTypeTest = function (t, e, r) {
            return new(M.makeNodeTestType(t, {
              matches: M.isNodeType(e),
              toString: (n = r, function () {
                return n
              })
            }));
            var n
          }, M.hasPrefix = function (t) {
            return t.prefix || -1 !== (t.nodeName || t.tagName).indexOf(":")
          }, M.isElementOrAttribute = M.isNodeType([1, 2]), M.nameSpaceMatches = function (t, e, r) {
            var n = r.namespaceURI || "";
            if (!t) return !n || e.allowAnyNamespaceForNoPrefix && !M.hasPrefix(r);
            var o = e.namespaceResolver.getNamespace(t, e.expressionContextNode);
            if (null == o) throw new Error("Cannot resolve QName " + t);
            return o === n
          }, M.localNameMatches = function (t, e, r) {
            var n = r.localName || r.nodeName;
            return e.caseInsensitive ? t.toLowerCase() === n.toLowerCase() : t === n
          }, M.NameTestPrefixAny = M.makeNodeTestType(M.NAMETESTPREFIXANY, {
            matches: function (t, e) {
              return M.isElementOrAttribute(t) && M.nameSpaceMatches(this.prefix, e, t)
            },
            toString: function () {
              return this.prefix + ":*"
            }
          }, (function (t) {
            this.prefix = t
          })), M.NameTestQName = M.makeNodeTestType(M.NAMETESTQNAME, {
            matches: function (t, e) {
              return M.isNodeType([1, 2, q.XPATH_NAMESPACE_NODE])(t) && M.nameSpaceMatches(this.prefix, e, t) && M.localNameMatches(this.localName, e, t)
            },
            toString: function () {
              return this.name
            }
          }, (function (t) {
            var e = t.split(":");
            this.name = t, this.prefix = e.length > 1 ? e[0] : null, this.localName = e[e.length > 1 ? 1 : 0]
          })), M.PITest = M.makeNodeTestType(M.PI, {
            matches: function (t, e) {
              return M.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
            },
            toString: function () {
              return i('processing-instruction("', '")', this.name)
            }
          }, (function (t) {
            this.name = t
          })), M.nameTestAny = M.makeNodeTypeTest(M.NAMETESTANY, [1, 2, q.XPATH_NAMESPACE_NODE], "*"), M.textTest = M.makeNodeTypeTest(M.TEXT, [3, 4], "text()"), M.commentTest = M.makeNodeTypeTest(M.COMMENT, [8], "comment()"), M.nodeTest = M.makeNodeTypeTest(M.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"), M.anyPiTest = M.makeNodeTypeTest(M.PI, [7], "processing-instruction()"), U.prototype = new h, U.prototype.constructor = U, U.superclass = h.prototype, U.prototype.init = function (t) {
            this.variable = t
          }, U.prototype.toString = function () {
            return "$" + this.variable
          }, U.prototype.evaluate = function (t) {
            var e = K.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
            if (null == e[0]) throw new Error("Cannot resolve QName " + fn);
            var r = t.variableResolver.getVariable(e[1], e[0]);
            if (!r) throw Z.fromMessage("Undeclared variable: " + this.toString());
            return r
          }, B.prototype = new h, B.prototype.constructor = B, B.superclass = h.prototype, B.prototype.init = function (t, e) {
            this.functionName = t, this.arguments = e
          }, B.prototype.toString = function () {
            for (var t = this.functionName + "(", e = 0; e < this.arguments.length; e++) e > 0 && (t += ", "), t += this.arguments[e].toString();
            return t + ")"
          }, B.prototype.evaluate = function (t) {
            var e = k.getFunctionFromContext(this.functionName, t);
            if (!e) throw new Error("Unknown function " + this.functionName);
            var r = [t].concat(this.arguments);
            return e.apply(t.functionResolver.thisArg, r)
          };
          var V = new Object;

          function H(t) {
            arguments.length > 0 && this.init(t)
          }

          function j(t) {
            arguments.length > 0 && this.init(t)
          }

          function W(t) {
            arguments.length > 0 && this.init(t)
          }

          function Y(t) {
            this.init(t)
          }

          function G() {
            this.init()
          }

          function q(t, e, r) {
            this.isXPathNamespace = !0, this.ownerDocument = r.ownerDocument, this.nodeName = "#namespace", this.prefix = t, this.localName = t, this.namespaceURI = e, this.nodeValue = e, this.ownerElement = r, this.nodeType = q.XPATH_NAMESPACE_NODE
          }

          function $(t, e, r) {
            this.variableResolver = null != t ? t : new X, this.namespaceResolver = null != e ? e : new J, this.functionResolver = null != r ? r : new k
          }

          function X() {}

          function k(t) {
            this.thisArg = null != t ? t : Q, this.functions = new Object, this.addStandardFunctions()
          }

          function J() {}
          V.equals = function (t, e) {
            return t.equals(e)
          }, V.notequal = function (t, e) {
            return t.notequal(e)
          }, V.lessthan = function (t, e) {
            return t.lessthan(e)
          }, V.greaterthan = function (t, e) {
            return t.greaterthan(e)
          }, V.lessthanorequal = function (t, e) {
            return t.lessthanorequal(e)
          }, V.greaterthanorequal = function (t, e) {
            return t.greaterthanorequal(e)
          }, H.prototype = new h, H.prototype.constructor = H, H.superclass = h.prototype, H.prototype.init = function (t) {
            this.str = String(t)
          }, H.prototype.toString = function () {
            return this.str
          }, H.prototype.evaluate = function (t) {
            return this
          }, H.prototype.string = function () {
            return this
          }, H.prototype.number = function () {
            return new j(this.str)
          }, H.prototype.bool = function () {
            return new W(this.str)
          }, H.prototype.nodeset = function () {
            throw new Error("Cannot convert string to nodeset")
          }, H.prototype.stringValue = function () {
            return this.str
          }, H.prototype.numberValue = function () {
            return this.number().numberValue()
          }, H.prototype.booleanValue = function () {
            return this.bool().booleanValue()
          }, H.prototype.equals = function (t) {
            return K.instance_of(t, W) ? this.bool().equals(t) : K.instance_of(t, j) ? this.number().equals(t) : K.instance_of(t, G) ? t.compareWithString(this, V.equals) : new W(this.str == t.str)
          }, H.prototype.notequal = function (t) {
            return K.instance_of(t, W) ? this.bool().notequal(t) : K.instance_of(t, j) ? this.number().notequal(t) : K.instance_of(t, G) ? t.compareWithString(this, V.notequal) : new W(this.str != t.str)
          }, H.prototype.lessthan = function (t) {
            return this.number().lessthan(t)
          }, H.prototype.greaterthan = function (t) {
            return this.number().greaterthan(t)
          }, H.prototype.lessthanorequal = function (t) {
            return this.number().lessthanorequal(t)
          }, H.prototype.greaterthanorequal = function (t) {
            return this.number().greaterthanorequal(t)
          }, j.prototype = new h, j.prototype.constructor = j, j.superclass = h.prototype, j.prototype.init = function (t) {
            this.num = "string" == typeof t ? this.parse(t) : Number(t)
          }, j.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/, j.prototype.parse = function (t) {
            return this.numberFormat.test(t) ? parseFloat(t) : Number.NaN
          }, j.prototype.toString = function () {
            var t = this.num.toString();
            return -1 !== t.indexOf("e-") ? function (t) {
              for (var e = t.split("e-"), r = e[0].replace(".", ""), n = Number(e[1]), o = 0; o < n - 1; o += 1) r = "0" + r;
              return "0." + r
            }(t) : -1 !== t.indexOf("e") ? function (t) {
              for (var e = t.split("e"), r = e[0].replace(".", ""), n = Number(e[1]) + 1 - r.length, o = 0; o < n; o += 1) r += "0";
              return r
            }(t) : t
          }, j.prototype.evaluate = function (t) {
            return this
          }, j.prototype.string = function () {
            return new H(this.toString())
          }, j.prototype.number = function () {
            return this
          }, j.prototype.bool = function () {
            return new W(this.num)
          }, j.prototype.nodeset = function () {
            throw new Error("Cannot convert number to nodeset")
          }, j.prototype.stringValue = function () {
            return this.string().stringValue()
          }, j.prototype.numberValue = function () {
            return this.num
          }, j.prototype.booleanValue = function () {
            return this.bool().booleanValue()
          }, j.prototype.negate = function () {
            return new j(-this.num)
          }, j.prototype.equals = function (t) {
            return K.instance_of(t, W) ? this.bool().equals(t) : K.instance_of(t, H) ? this.equals(t.number()) : K.instance_of(t, G) ? t.compareWithNumber(this, V.equals) : new W(this.num == t.num)
          }, j.prototype.notequal = function (t) {
            return K.instance_of(t, W) ? this.bool().notequal(t) : K.instance_of(t, H) ? this.notequal(t.number()) : K.instance_of(t, G) ? t.compareWithNumber(this, V.notequal) : new W(this.num != t.num)
          }, j.prototype.lessthan = function (t) {
            return K.instance_of(t, G) ? t.compareWithNumber(this, V.greaterthan) : K.instance_of(t, W) || K.instance_of(t, H) ? this.lessthan(t.number()) : new W(this.num < t.num)
          }, j.prototype.greaterthan = function (t) {
            return K.instance_of(t, G) ? t.compareWithNumber(this, V.lessthan) : K.instance_of(t, W) || K.instance_of(t, H) ? this.greaterthan(t.number()) : new W(this.num > t.num)
          }, j.prototype.lessthanorequal = function (t) {
            return K.instance_of(t, G) ? t.compareWithNumber(this, V.greaterthanorequal) : K.instance_of(t, W) || K.instance_of(t, H) ? this.lessthanorequal(t.number()) : new W(this.num <= t.num)
          }, j.prototype.greaterthanorequal = function (t) {
            return K.instance_of(t, G) ? t.compareWithNumber(this, V.lessthanorequal) : K.instance_of(t, W) || K.instance_of(t, H) ? this.greaterthanorequal(t.number()) : new W(this.num >= t.num)
          }, j.prototype.plus = function (t) {
            return new j(this.num + t.num)
          }, j.prototype.minus = function (t) {
            return new j(this.num - t.num)
          }, j.prototype.multiply = function (t) {
            return new j(this.num * t.num)
          }, j.prototype.div = function (t) {
            return new j(this.num / t.num)
          }, j.prototype.mod = function (t) {
            return new j(this.num % t.num)
          }, W.prototype = new h, W.prototype.constructor = W, W.superclass = h.prototype, W.prototype.init = function (t) {
            this.b = Boolean(t)
          }, W.prototype.toString = function () {
            return this.b.toString()
          }, W.prototype.evaluate = function (t) {
            return this
          }, W.prototype.string = function () {
            return new H(this.b)
          }, W.prototype.number = function () {
            return new j(this.b)
          }, W.prototype.bool = function () {
            return this
          }, W.prototype.nodeset = function () {
            throw new Error("Cannot convert boolean to nodeset")
          }, W.prototype.stringValue = function () {
            return this.string().stringValue()
          }, W.prototype.numberValue = function () {
            return this.number().numberValue()
          }, W.prototype.booleanValue = function () {
            return this.b
          }, W.prototype.not = function () {
            return new W(!this.b)
          }, W.prototype.equals = function (t) {
            return K.instance_of(t, H) || K.instance_of(t, j) ? this.equals(t.bool()) : K.instance_of(t, G) ? t.compareWithBoolean(this, V.equals) : new W(this.b == t.b)
          }, W.prototype.notequal = function (t) {
            return K.instance_of(t, H) || K.instance_of(t, j) ? this.notequal(t.bool()) : K.instance_of(t, G) ? t.compareWithBoolean(this, V.notequal) : new W(this.b != t.b)
          }, W.prototype.lessthan = function (t) {
            return this.number().lessthan(t)
          }, W.prototype.greaterthan = function (t) {
            return this.number().greaterthan(t)
          }, W.prototype.lessthanorequal = function (t) {
            return this.number().lessthanorequal(t)
          }, W.prototype.greaterthanorequal = function (t) {
            return this.number().greaterthanorequal(t)
          }, W.true_ = new W(!0), W.false_ = new W(!1), Y.prototype = new Object, Y.prototype.constructor = Y, Y.superclass = Object.prototype, Y.prototype.init = function (t) {
            this.left = null, this.right = null, this.node = t, this.depth = 1
          }, Y.prototype.balance = function () {
            var t = null == this.left ? 0 : this.left.depth,
              e = null == this.right ? 0 : this.right.depth;
            if (t > e + 1)(null == this.left.left ? 0 : this.left.left.depth) < (null == this.left.right ? 0 : this.left.right.depth) && this.left.rotateRR(), this.rotateLL();
            else if (t + 1 < e) {
              var r = null == this.right.right ? 0 : this.right.right.depth;
              (null == this.right.left ? 0 : this.right.left.depth) > r && this.right.rotateLL(), this.rotateRR()
            }
          }, Y.prototype.rotateLL = function () {
            var t = this.node,
              e = this.right;
            this.node = this.left.node, this.right = this.left, this.left = this.left.left, this.right.left = this.right.right, this.right.right = e, this.right.node = t, this.right.updateInNewLocation(), this.updateInNewLocation()
          }, Y.prototype.rotateRR = function () {
            var t = this.node,
              e = this.left;
            this.node = this.right.node, this.left = this.right, this.right = this.right.right, this.left.right = this.left.left, this.left.left = e, this.left.node = t, this.left.updateInNewLocation(), this.updateInNewLocation()
          }, Y.prototype.updateInNewLocation = function () {
            this.getDepthFromChildren()
          }, Y.prototype.getDepthFromChildren = function () {
            this.depth = null == this.node ? 0 : 1, null != this.left && (this.depth = this.left.depth + 1), null != this.right && this.depth <= this.right.depth && (this.depth = this.right.depth + 1)
          }, Y.prototype.add = function (t) {
            if (t === this.node) return !1;
            var e = function (t, e) {
                if (t === e) return 0;
                if (t.compareDocumentPosition) {
                  var r = t.compareDocumentPosition(e);
                  return 1 & r || 10 & r ? 1 : 20 & r ? -1 : 0
                }
                for (var n = 0, o = 0, s = t; null != s; s = s.parentNode || s.ownerElement) n++;
                for (var i = e; null != i; i = i.parentNode || i.ownerElement) o++;
                if (n > o) {
                  for (; n > o;) t = t.parentNode || t.ownerElement, n--;
                  if (t === e) return 1
                } else if (o > n) {
                  for (; o > n;) e = e.parentNode || e.ownerElement, o--;
                  if (t === e) return -1
                }
                for (var u = t.parentNode || t.ownerElement, a = e.parentNode || e.ownerElement; u !== a;) e = a, u = (t = u).parentNode || t.ownerElement, a = e.parentNode || e.ownerElement;
                var c = K.isAttribute(t),
                  l = K.isAttribute(e);
                if (c && !l) return -1;
                if (!c && l) return 1;
                if (u)
                  for (var p = c ? u.attributes : u.childNodes, h = p.length, f = 0; f < h; f += 1) {
                    var d = p[f];
                    if (d === t) return -1;
                    if (d === e) return 1
                  }
                throw new Error("Unexpected: could not determine node order")
              }(t, this.node),
              r = !1;
            return -1 == e ? null == this.left ? (this.left = new Y(t), r = !0) : (r = this.left.add(t)) && this.balance() : 1 == e && (null == this.right ? (this.right = new Y(t), r = !0) : (r = this.right.add(t)) && this.balance()), r && this.getDepthFromChildren(), r
          }, G.prototype = new h, G.prototype.constructor = G, G.superclass = h.prototype, G.prototype.init = function () {
            this.tree = null, this.nodes = [], this.size = 0
          }, G.prototype.toString = function () {
            var t = this.first();
            return null == t ? "" : this.stringForNode(t)
          }, G.prototype.evaluate = function (t) {
            return this
          }, G.prototype.string = function () {
            return new H(this.toString())
          }, G.prototype.stringValue = function () {
            return this.toString()
          }, G.prototype.number = function () {
            return new j(this.string())
          }, G.prototype.numberValue = function () {
            return Number(this.string())
          }, G.prototype.bool = function () {
            return new W(this.booleanValue())
          }, G.prototype.booleanValue = function () {
            return !!this.size
          }, G.prototype.nodeset = function () {
            return this
          }, G.prototype.stringForNode = function (t) {
            return 9 == t.nodeType || 1 == t.nodeType || 11 === t.nodeType ? this.stringForContainerNode(t) : 2 === t.nodeType ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
          }, G.prototype.stringForContainerNode = function (t) {
            for (var e = "", r = t.firstChild; null != r; r = r.nextSibling) {
              var n = r.nodeType;
              1 !== n && 3 !== n && 4 !== n && 9 !== n && 11 !== n || (e += this.stringForNode(r))
            }
            return e
          }, G.prototype.buildTree = function () {
            if (!this.tree && this.nodes.length) {
              this.tree = new Y(this.nodes[0]);
              for (var t = 1; t < this.nodes.length; t += 1) this.tree.add(this.nodes[t])
            }
            return this.tree
          }, G.prototype.first = function () {
            var t = this.buildTree();
            if (null == t) return null;
            for (; null != t.left;) t = t.left;
            return t.node
          }, G.prototype.add = function (t) {
            for (var e = 0; e < this.nodes.length; e += 1)
              if (t === this.nodes[e]) return;
            this.tree = null, this.nodes.push(t), this.size += 1
          }, G.prototype.addArray = function (t) {
            var r = this;
            e((function (t) {
              r.add(t)
            }), t)
          }, G.prototype.toArray = function () {
            var t = [];
            return this.toArrayRec(this.buildTree(), t), t
          }, G.prototype.toArrayRec = function (t, e) {
            null != t && (this.toArrayRec(t.left, e), e.push(t.node), this.toArrayRec(t.right, e))
          }, G.prototype.toUnsortedArray = function () {
            return this.nodes.slice()
          }, G.prototype.compareWithString = function (t, e) {
            for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
              var o = r[n],
                s = e(new H(this.stringForNode(o)), t);
              if (s.booleanValue()) return s
            }
            return new W(!1)
          }, G.prototype.compareWithNumber = function (t, e) {
            for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
              var o = r[n],
                s = e(new j(this.stringForNode(o)), t);
              if (s.booleanValue()) return s
            }
            return new W(!1)
          }, G.prototype.compareWithBoolean = function (t, e) {
            return e(this.bool(), t)
          }, G.prototype.compareWithNodeSet = function (t, e) {
            for (var r = this.toUnsortedArray(), n = function (t, r) {
                return e(r, t)
              }, o = 0; o < r.length; o++) {
              var s = new H(this.stringForNode(r[o])),
                i = t.compareWithString(s, n);
              if (i.booleanValue()) return i
            }
            return new W(!1)
          }, G.compareWith = function (t) {
            var e = Array.prototype.slice,
              r = t.length,
              n = function (t, r) {
                return function () {
                  return r.apply(this, t.concat(e.call(arguments)))
                }
              },
              o = function () {
                var s = e.call(arguments);
                return s.length < r ? n(s, o) : t.apply(this, e.apply(arguments, [0, r]))
              };
            return o
          }((function (t, e) {
            return K.instance_of(e, H) ? this.compareWithString(e, t) : K.instance_of(e, j) ? this.compareWithNumber(e, t) : K.instance_of(e, W) ? this.compareWithBoolean(e, t) : this.compareWithNodeSet(e, t)
          })), G.prototype.equals = G.compareWith(V.equals), G.prototype.notequal = G.compareWith(V.notequal), G.prototype.lessthan = G.compareWith(V.lessthan), G.prototype.greaterthan = G.compareWith(V.greaterthan), G.prototype.lessthanorequal = G.compareWith(V.lessthanorequal), G.prototype.greaterthanorequal = G.compareWith(V.greaterthanorequal), G.prototype.union = function (t) {
            var e = new G;
            return e.addArray(this.toUnsortedArray()), e.addArray(t.toUnsortedArray()), e
          }, q.prototype = new Object, q.prototype.constructor = q, q.superclass = Object.prototype, q.prototype.toString = function () {
            return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
          }, $.prototype = new Object, $.prototype.constructor = $, $.superclass = Object.prototype, $.prototype.extend = function (t) {
            return a(new $, this, t)
          }, X.prototype = new Object, X.prototype.constructor = X, X.superclass = Object.prototype, X.prototype.getVariable = function (t, e) {
            return null
          }, k.prototype = new Object, k.prototype.constructor = k, k.superclass = Object.prototype, k.prototype.addStandardFunctions = function () {
            this.functions["{}last"] = Q.last, this.functions["{}position"] = Q.position, this.functions["{}count"] = Q.count, this.functions["{}id"] = Q.id, this.functions["{}local-name"] = Q.localName, this.functions["{}namespace-uri"] = Q.namespaceURI, this.functions["{}name"] = Q.name, this.functions["{}string"] = Q.string, this.functions["{}concat"] = Q.concat, this.functions["{}starts-with"] = Q.startsWith, this.functions["{}contains"] = Q.contains, this.functions["{}substring-before"] = Q.substringBefore, this.functions["{}substring-after"] = Q.substringAfter, this.functions["{}substring"] = Q.substring, this.functions["{}string-length"] = Q.stringLength, this.functions["{}normalize-space"] = Q.normalizeSpace, this.functions["{}translate"] = Q.translate, this.functions["{}boolean"] = Q.boolean_, this.functions["{}not"] = Q.not, this.functions["{}true"] = Q.true_, this.functions["{}false"] = Q.false_, this.functions["{}lang"] = Q.lang, this.functions["{}number"] = Q.number, this.functions["{}sum"] = Q.sum, this.functions["{}floor"] = Q.floor, this.functions["{}ceiling"] = Q.ceiling, this.functions["{}round"] = Q.round
          }, k.prototype.addFunction = function (t, e, r) {
            this.functions["{" + t + "}" + e] = r
          }, k.getFunctionFromContext = function (t, e) {
            var r = K.resolveQName(t, e.namespaceResolver, e.contextNode, !1);
            if (null === r[0]) throw new Error("Cannot resolve QName " + name);
            return e.functionResolver.getFunction(r[1], r[0])
          }, k.prototype.getFunction = function (t, e) {
            return this.functions["{" + e + "}" + t]
          }, J.prototype = new Object, J.prototype.constructor = J, J.superclass = Object.prototype, J.prototype.getNamespace = function (t, e) {
            if ("xml" == t) return l.XML_NAMESPACE_URI;
            if ("xmlns" == t) return l.XMLNS_NAMESPACE_URI;
            for (9 == e.nodeType ? e = e.documentElement : 2 == e.nodeType ? e = I.getOwnerElement(e) : 1 != e.nodeType && (e = e.parentNode); null != e && 1 == e.nodeType;) {
              for (var r = e.attributes, n = 0; n < r.length; n++) {
                var o = r.item(n),
                  s = o.name || o.nodeName;
                if ("xmlns" === s && "" === t || s === "xmlns:" + t) return String(o.value || o.nodeValue)
              }
              e = e.parentNode
            }
            return null
          };
          var Q = new Object;
          Q.last = function (t) {
            if (1 != arguments.length) throw new Error("Function last expects ()");
            return new j(t.contextSize)
          }, Q.position = function (t) {
            if (1 != arguments.length) throw new Error("Function position expects ()");
            return new j(t.contextPosition)
          }, Q.count = function () {
            var t, e = arguments[0];
            if (2 != arguments.length || !K.instance_of(t = arguments[1].evaluate(e), G)) throw new Error("Function count expects (node-set)");
            return new j(t.size)
          }, Q.id = function () {
            var t, e = arguments[0];
            if (2 != arguments.length) throw new Error("Function id expects (object)");
            t = arguments[1].evaluate(e);
            for (var r = (t = K.instance_of(t, G) ? t.toArray().join(" ") : t.stringValue()).split(/[\x0d\x0a\x09\x20]+/), n = new G, o = 9 == e.contextNode.nodeType ? e.contextNode : e.contextNode.ownerDocument, s = 0; s < r.length; s++) {
              var i;
              null != (i = o.getElementById ? o.getElementById(r[s]) : K.getElementById(o, r[s])) && (n.add(i))
            }
            return n
          }, Q.localName = function (t, e) {
            var r;
            if (1 == arguments.length) r = t.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function local-name expects (node-set?)");
              r = e.evaluate(t).first()
            }
            return new H(null == r ? "" : r.localName || r.baseName || r.target || r.nodeName || "")
          }, Q.namespaceURI = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = e.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function namespace-uri expects (node-set?)");
              t = arguments[1].evaluate(e).first()
            }
            return new H(null == t ? "" : t.namespaceURI)
          }, Q.name = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = e.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function name expects (node-set?)");
              t = arguments[1].evaluate(e).first()
            }
            return null == t ? new H("") : 1 == t.nodeType ? new H(t.nodeName) : 2 == t.nodeType ? new H(t.name || t.nodeName) : 7 === t.nodeType ? new H(t.target || t.nodeName) : null == t.localName ? new H("") : new H(t.localName)
          }, Q.string = function () {
            var t = arguments[0];
            if (1 == arguments.length) return new H(G.prototype.stringForNode(t.contextNode));
            if (2 == arguments.length) return arguments[1].evaluate(t).string();
            throw new Error("Function string expects (object?)")
          }, Q.concat = function (t) {
            if (arguments.length < 3) throw new Error("Function concat expects (string, string[, string]*)");
            for (var e = "", r = 1; r < arguments.length; r++) e += arguments[r].evaluate(t).stringValue();
            return new H(e)
          }, Q.startsWith = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function startsWith expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new W(e.substring(0, r.length) == r)
          }, Q.contains = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function contains expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new W(-1 !== e.indexOf(r))
          }, Q.substringBefore = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function substring-before expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new H(e.substring(0, e.indexOf(r)))
          }, Q.substringAfter = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function substring-after expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            if (0 == r.length) return new H(e);
            var n = e.indexOf(r);
            return new H(-1 == n ? "" : e.substring(n + r.length))
          }, Q.substring = function () {
            var t = arguments[0];
            if (3 != arguments.length && 4 != arguments.length) throw new Error("Function substring expects (string, number, number?)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = Math.round(arguments[2].evaluate(t).numberValue()) - 1,
              n = 4 == arguments.length ? r + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
            return new H(e.substring(r, n))
          }, Q.stringLength = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = G.prototype.stringForNode(e.contextNode);
            else {
              if (2 != arguments.length) throw new Error("Function string-length expects (string?)");
              t = arguments[1].evaluate(e).stringValue()
            }
            return new j(t.length)
          }, Q.normalizeSpace = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = G.prototype.stringForNode(e.contextNode);
            else {
              if (2 != arguments.length) throw new Error("Function normalize-space expects (string?)");
              t = arguments[1].evaluate(e).stringValue()
            }
            for (var r = 0, n = t.length - 1; K.isSpace(t.charCodeAt(n));) n--;
            for (var o = ""; r <= n && K.isSpace(t.charCodeAt(r));) r++;
            for (; r <= n;)
              if (K.isSpace(t.charCodeAt(r)))
                for (o += " "; r <= n && K.isSpace(t.charCodeAt(r));) r++;
              else o += t.charAt(r), r++;
            return new H(o)
          }, Q.translate = function (t, e, o, i) {
            if (4 != arguments.length) throw new Error("Function translate expects (string, string, string)");
            var u = e.evaluate(t).stringValue(),
              a = o.evaluate(t).stringValue(),
              c = i.evaluate(t).stringValue(),
              l = r((function (t, e, r) {
                return e in t || (t[e] = r > c.length ? "" : c[r]), t
              }), {}, a),
              p = s("", n((function (t) {
                return t in l ? l[t] : t
              }), u));
            return new H(p)
          }, Q.boolean_ = function () {
            var t = arguments[0];
            if (2 != arguments.length) throw new Error("Function boolean expects (object)");
            return arguments[1].evaluate(t).bool()
          }, Q.not = function (t, e) {
            if (2 != arguments.length) throw new Error("Function not expects (object)");
            return e.evaluate(t).bool().not()
          }, Q.true_ = function () {
            if (1 != arguments.length) throw new Error("Function true expects ()");
            return W.true_
          }, Q.false_ = function () {
            if (1 != arguments.length) throw new Error("Function false expects ()");
            return W.false_
          }, Q.lang = function () {
            var t, e = arguments[0];
            if (2 != arguments.length) throw new Error("Function lang expects (string)");
            for (var r = e.contextNode; null != r && 9 != r.nodeType; r = r.parentNode) {
              var n = r.getAttributeNS(l.XML_NAMESPACE_URI, "lang");
              if (null != n) {
                t = String(n);
                break
              }
            }
            if (null == t) return W.false_;
            var o = arguments[1].evaluate(e).stringValue();
            return new W(t.substring(0, o.length) == o && (t.length == o.length || "-" == t.charAt(o.length)))
          }, Q.number = function () {
            var t = arguments[0];
            if (1 != arguments.length && 2 != arguments.length) throw new Error("Function number expects (object?)");
            return 1 == arguments.length ? new j(G.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
          }, Q.sum = function () {
            var t, e = arguments[0];
            if (2 != arguments.length || !K.instance_of(t = arguments[1].evaluate(e), G)) throw new Error("Function sum expects (node-set)");
            t = t.toUnsortedArray();
            for (var r = 0, n = 0; n < t.length; n++) r += new j(G.prototype.stringForNode(t[n])).numberValue();
            return new j(r)
          }, Q.floor = function () {
            var t = arguments[0];
            if (2 != arguments.length) throw new Error("Function floor expects (number)");
            return new j(Math.floor(arguments[1].evaluate(t).numberValue()))
          }, Q.ceiling = function () {
            var t = arguments[0];
            if (2 != arguments.length) throw new Error("Function ceiling expects (number)");
            return new j(Math.ceil(arguments[1].evaluate(t).numberValue()))
          }, Q.round = function () {
            var t = arguments[0];
            if (2 != arguments.length) throw new Error("Function round expects (number)");
            return new j(Math.round(arguments[1].evaluate(t).numberValue()))
          };
          var K = new Object;
          K.isAttribute = function (t) {
            return t && (2 === t.nodeType || t.ownerElement)
          }, K.splitQName = function (t) {
            var e = t.indexOf(":");
            return -1 == e ? [null, t] : [t.substring(0, e), t.substring(e + 1)]
          }, K.resolveQName = function (t, e, r, n) {
            var o = K.splitQName(t);
            return null != o[0] ? o[0] = e.getNamespace(o[0], r) : n ? (o[0] = e.getNamespace("", r), null == o[0] && (o[0] = "")) : o[0] = "", o
          }, K.isSpace = function (t) {
            return 9 == t || 13 == t || 10 == t || 32 == t
          }, K.isLetter = function (t) {
            return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || 902 == t || t >= 904 && t <= 906 || 908 == t || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || 986 == t || 988 == t || 990 == t || 992 == t || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || 1369 == t || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || 1749 == t || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || 2365 == t || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || 2482 == t || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || 2654 == t || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || 2701 == t || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || 2749 == t || 2784 == t || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || 2877 == t || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || 2972 == t || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || 3294 == t || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || 3632 == t || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || 3716 == t || t >= 3719 && t <= 3720 || 3722 == t || 3725 == t || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || 3749 == t || 3751 == t || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || 3760 == t || t >= 3762 && t <= 3763 || 3773 == t || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || 4352 == t || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || 4361 == t || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || 4412 == t || 4414 == t || 4416 == t || 4428 == t || 4430 == t || 4432 == t || t >= 4436 && t <= 4437 || 4441 == t || t >= 4447 && t <= 4449 || 4451 == t || 4453 == t || 4455 == t || 4457 == t || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || 4469 == t || 4510 == t || 4520 == t || 4523 == t || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || 4538 == t || t >= 4540 && t <= 4546 || 4587 == t || 4592 == t || 4601 == t || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || 8025 == t || 8027 == t || 8029 == t || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || 8126 == t || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || 8486 == t || t >= 8490 && t <= 8491 || 8494 == t || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || 12295 == t || t >= 12321 && t <= 12329
          }, K.isNCNameChar = function (t) {
            return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || 46 == t || 45 == t || 95 == t || K.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || 1471 == t || t >= 1473 && t <= 1474 || 1476 == t || t >= 1611 && t <= 1618 || 1648 == t || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || 2364 == t || t >= 2366 && t <= 2380 || 2381 == t || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || 2492 == t || 2494 == t || 2495 == t || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || 2519 == t || t >= 2530 && t <= 2531 || 2562 == t || 2620 == t || 2622 == t || 2623 == t || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || 2748 == t || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || 2876 == t || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || 3031 == t || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || 3415 == t || 3633 == t || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || 3761 == t || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || 3893 == t || 3895 == t || 3897 == t || 3902 == t || 3903 == t || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || 3991 == t || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || 4025 == t || t >= 8400 && t <= 8412 || 8417 == t || t >= 12330 && t <= 12335 || 12441 == t || 12442 == t || 183 == t || 720 == t || 721 == t || 903 == t || 1600 == t || 3654 == t || 3782 == t || 12293 == t || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
          }, K.coalesceText = function (t) {
            for (var e = t.firstChild; null != e; e = e.nextSibling)
              if (3 == e.nodeType || 4 == e.nodeType) {
                var r = e.nodeValue,
                  n = e;
                for (e = e.nextSibling; null != e && (3 == e.nodeType || 4 == e.nodeType);) {
                  r += e.nodeValue;
                  var o = e;
                  e = e.nextSibling, o.parentNode.removeChild(o)
                }
                if (4 == n.nodeType) {
                  var s = n.parentNode;
                  if (null == n.nextSibling) s.removeChild(n), s.appendChild(s.ownerDocument.createTextNode(r));
                  else {
                    var i = n.nextSibling;
                    s.removeChild(n), s.insertBefore(s.ownerDocument.createTextNode(r), i)
                  }
                } else n.nodeValue = r;
                if (null == e) break
              } else 1 == e.nodeType && K.coalesceText(e)
          }, K.instance_of = function (t, e) {
            for (; null != t;) {
              if (t.constructor === e) return !0;
              if (t === Object) return !1;
              t = t.constructor.superclass
            }
            return !1
          }, K.getElementById = function (t, e) {
            if (1 == t.nodeType && (t.getAttribute("id") == e || t.getAttributeNS(null, "id") == e)) return t;
            for (var r = t.firstChild; null != r; r = r.nextSibling) {
              var n = K.getElementById(r, e);
              if (null != n) return n
            }
            return null
          };
          var Z = function () {
            function t(e, r, n) {
              var o = Error.call(this, function (e, r) {
                var n = r ? ": " + r.toString() : "";
                switch (e) {
                  case t.INVALID_EXPRESSION_ERR:
                    return "Invalid expression" + n;
                  case t.TYPE_ERR:
                    return "Type error" + n
                }
                return null
              }(e, r) || n);
              return o.code = e, o.exception = r, o
            }
            return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.superclass = Error, t.prototype.toString = function () {
              return this.message
            }, t.fromMessage = function (e, r) {
              return new t(null, r, e)
            }, t.INVALID_EXPRESSION_ERR = 51, t.TYPE_ERR = 52, t
          }();

          function z(t, e, r) {
            this.xpath = r.parse(t), this.context = new $, this.context.namespaceResolver = new tt(e)
          }

          function tt(t) {
            this.xpathNSResolver = t
          }

          function et(t) {
            this.node = t, this.namespaceResolver = new J
          }

          function rt(t, e) {
            switch (e == rt.ANY_TYPE && (t.constructor === H ? e = rt.STRING_TYPE : t.constructor === j ? e = rt.NUMBER_TYPE : t.constructor === W ? e = rt.BOOLEAN_TYPE : t.constructor === G && (e = rt.UNORDERED_NODE_ITERATOR_TYPE)), this.resultType = e, e) {
              case rt.NUMBER_TYPE:
                return void(this.numberValue = t.numberValue());
              case rt.STRING_TYPE:
                return void(this.stringValue = t.stringValue());
              case rt.BOOLEAN_TYPE:
                return void(this.booleanValue = t.booleanValue());
              case rt.ANY_UNORDERED_NODE_TYPE:
              case rt.FIRST_ORDERED_NODE_TYPE:
                if (t.constructor === G) return void(this.singleNodeValue = t.first());
                break;
              case rt.UNORDERED_NODE_ITERATOR_TYPE:
              case rt.ORDERED_NODE_ITERATOR_TYPE:
                if (t.constructor === G) return this.invalidIteratorState = !1, this.nodes = t.toArray(), void(this.iteratorIndex = 0);
                break;
              case rt.UNORDERED_NODE_SNAPSHOT_TYPE:
              case rt.ORDERED_NODE_SNAPSHOT_TYPE:
                if (t.constructor === G) return this.nodes = t.toArray(), void(this.snapshotLength = this.nodes.length)
            }
            throw new Z(Z.TYPE_ERR)
          }

          function nt(t, e) {
            t.createExpression = function (t, r) {
              try {
                return new z(t, r, e)
              } catch (t) {
                throw new Z(Z.INVALID_EXPRESSION_ERR, t)
              }
            }, t.createNSResolver = function (t) {
              return new et(t)
            }, t.evaluate = function (r, n, o, s, i) {
              if (s < 0 || s > 9) throw {
                code: 0,
                toString: function () {
                  return "Request type not supported"
                }
              };
              return t.createExpression(r, o, e).evaluate(n, s, i)
            }
          }
          z.prototype = {}, z.prototype.constructor = z, z.superclass = Object.prototype, z.getOwnerDocument = function (t) {
            return 9 === t.nodeType ? t : t.ownerDocument
          }, z.detectHtmlDom = function (t) {
            if (!t) return !1;
            var e = z.getOwnerDocument(t);
            try {
              return e.implementation.hasFeature("HTML", "2.0")
            } catch (t) {
              return !0
            }
          }, z.prototype.evaluate = function (t, e, r) {
            return this.context.expressionContextNode = t, this.context.caseInsensitive = z.detectHtmlDom(t), new rt(this.xpath.evaluate(this.context), e)
          }, tt.prototype = {}, tt.prototype.constructor = tt, tt.superclass = Object.prototype, tt.prototype.getNamespace = function (t, e) {
            return null == this.xpathNSResolver ? null : this.xpathNSResolver.lookupNamespaceURI(t)
          }, et.prototype = {}, et.prototype.constructor = et, et.superclass = Object.prototype, et.prototype.lookupNamespaceURI = function (t) {
            return this.namespaceResolver.getNamespace(t, this.node)
          }, rt.prototype = {}, rt.prototype.constructor = rt, rt.superclass = Object.prototype, rt.prototype.iterateNext = function () {
            if (this.resultType != rt.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != rt.ORDERED_NODE_ITERATOR_TYPE) throw new Z(Z.TYPE_ERR);
            return this.nodes[this.iteratorIndex++]
          }, rt.prototype.snapshotItem = function (t) {
            if (this.resultType != rt.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != rt.ORDERED_NODE_SNAPSHOT_TYPE) throw new Z(Z.TYPE_ERR);
            return this.nodes[t]
          }, rt.ANY_TYPE = 0, rt.NUMBER_TYPE = 1, rt.STRING_TYPE = 2, rt.BOOLEAN_TYPE = 3, rt.UNORDERED_NODE_ITERATOR_TYPE = 4, rt.ORDERED_NODE_ITERATOR_TYPE = 5, rt.UNORDERED_NODE_SNAPSHOT_TYPE = 6, rt.ORDERED_NODE_SNAPSHOT_TYPE = 7, rt.ANY_UNORDERED_NODE_TYPE = 8, rt.FIRST_ORDERED_NODE_TYPE = 9;
          try {
            var ot = !0;
            try {
              document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null) && (ot = !1)
            } catch (t) {}
            ot && nt(document, new c)
          } catch (t) {}
          nt(t, new c),
            function () {
              var e = new c,
                r = new J,
                n = new k,
                o = new X;

              function s(t) {
                return {
                  getNamespace: function (e, n) {
                    return t(e, n) || r.getNamespace(e, n)
                  }
                }
              }

              function i(t) {
                return t && "function" == typeof t.getNamespace ? s((e = t).getNamespace.bind(e)) : "function" == typeof t ? s(t) : "object" == typeof t ? function (t) {
                  return s((function (e) {
                    return t[e]
                  }))
                }(t) : r;
                var e
              }

              function u(t) {
                if (null == t || t instanceof H || t instanceof W || t instanceof j || t instanceof G) return t;
                switch (typeof t) {
                  case "string":
                    return new H(t);
                  case "boolean":
                    return new W(t);
                  case "number":
                    return new j(t)
                }
                var e = new G;
                return e.addArray([].concat(t)), e
              }

              function a(t) {
                return {
                  getFunction: function (e, r) {
                    var o = t(e, r);
                    return o ? function (t) {
                      return function (e) {
                        var r = Array.prototype.slice.call(arguments, 1).map((function (t) {
                          return t.evaluate(e)
                        }));
                        return u(t.apply(this, [].concat(e, r)))
                      }
                    }(o) : n.getFunction(e, r)
                  }
                }
              }

              function l(t) {
                return t && "function" == typeof t.getFunction ? a((e = t).getFunction.bind(e)) : "function" == typeof t ? a(t) : "object" == typeof t ? function (t) {
                  return a((function (e) {
                    return t[e]
                  }))
                }(t) : n;
                var e
              }

              function p(t) {
                return {
                  getVariable: function (e, r) {
                    return u(t(e, r))
                  }
                }
              }

              function h(t, e, r) {
                t in r && (e[t] = r[t])
              }

              function f(t) {
                var e = new $;
                return t ? (e.namespaceResolver = i(t.namespaces), e.functionResolver = l(t.functions), e.variableResolver = function (t) {
                  if (t) {
                    if ("function" == typeof t.getVariable) return p(t.getVariable.bind(t));
                    if ("function" == typeof t) return p(t);
                    if ("object" == typeof t) return p((function (e) {
                      return t[e]
                    }))
                  }
                  return o
                }(t.variables), e.expressionContextNode = t.node, h("allowAnyNamespaceForNoPrefix", e, t), h("isHtml", e, t)) : e.namespaceResolver = r, e
              }
              var d = {
                evaluate: function (t) {
                  return function (t, e) {
                    var r = f(e);
                    return t.evaluate(r)
                  }(this.expression, t)
                },
                evaluateNumber: function (t) {
                  return this.evaluate(t).numberValue()
                },
                evaluateString: function (t) {
                  return this.evaluate(t).stringValue()
                },
                evaluateBoolean: function (t) {
                  return this.evaluate(t).booleanValue()
                },
                evaluateNodeSet: function (t) {
                  return this.evaluate(t).nodeset()
                },
                select: function (t) {
                  return this.evaluateNodeSet(t).toArray()
                },
                select1: function (t) {
                  return this.select(t)[0]
                }
              };
              t.parse = function (t) {
                var r = e.parse(t);
                return Object.create(d, {
                  expression: {
                    value: r
                  }
                })
              }
            }(), a(t, {
              XPath: l,
              XPathParser: c,
              XPathResult: rt,
              Step: F,
              PathExpr: I,
              NodeTest: M,
              LocationPath: D,
              OrOperation: y,
              AndOperation: E,
              BarOperation: _,
              EqualsOperation: m,
              NotEqualOperation: v,
              LessThanOperation: N,
              GreaterThanOperation: w,
              LessThanOrEqualOperation: A,
              GreaterThanOrEqualOperation: b,
              PlusOperation: T,
              MinusOperation: S,
              MultiplyOperation: x,
              DivOperation: O,
              ModOperation: R,
              UnaryMinusOperation: d,
              FunctionCall: B,
              VariableReference: U,
              XPathContext: $,
              XNodeSet: G,
              XBoolean: W,
              XString: H,
              XNumber: j,
              NamespaceResolver: J,
              FunctionResolver: k,
              VariableResolver: X,
              Utilities: K
            }), t.select = function (e, r, n) {
              return t.selectWithResolver(e, r, null, n)
            }, t.useNamespaces = function (e) {
              var r = {
                mappings: e || {},
                lookupNamespaceURI: function (t) {
                  return this.mappings[t]
                }
              };
              return function (e, n, o) {
                return t.selectWithResolver(e, n, r, o)
              }
            }, t.selectWithResolver = function (t, e, r, n) {
              var o = new z(t, r, new c),
                s = rt.ANY_TYPE,
                i = o.evaluate(e, s, null);
              return i.resultType == rt.STRING_TYPE ? i = i.stringValue : i.resultType == rt.NUMBER_TYPE ? i = i.numberValue : i.resultType == rt.BOOLEAN_TYPE ? i = i.booleanValue : (i = i.nodes, n && (i = i[0])), i
            }, t.select1 = function (e, r) {
              return t.select(e, r, !0)
            }
        }(e)
      }
    },
    e = {};

  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var s = e[n] = {
      exports: {}
    };
    return t[n](s, s.exports, r), s.exports
  }
  r.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, {
      a: e
    }), e
  }, r.d = (t, e) => {
    for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    })
  }, r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" == typeof window) return window
    }
  }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var n = {};
  (() => {
    "use strict";
    var t = r(954),
      e = r.n(t),
      n = r(571),
      o = r.n(n),
      s = r(564),
      i = r.n(s),
      u = r(468),
      a = r.n(u),
      c = r(304),
      l = r.n(c);

    function p(t, e = "") {
      const r = a().parse(t);
      return l()(r, (t => {
        l()(t, (t => {
          "tag" === t.type ? "page" === t.value ? t.value = "body" : t.value = "wx-" + t.value : "class" === t.type && e && (t.value = e + "--" + t.value)
        }))
      })), a().stringify(r)
    }

    function h(t) {
      return !!t && (i()(t.tagName, "WX-") || "BODY" === t.tagName)
    }

    function f(t) {
      let e = "";
      const r = t.__wxElement;
      return r && r.__component__ && (e = r.__componentOptions.classPrefix), e
    }
    var d = r(220),
      g = r.n(d),
      y = r(920),
      E = r.n(y),
      m = r(708),
      v = r.n(m),
      N = r(768),
      w = r.n(N),
      A = r(803),
      b = r.n(A),
      T = r(181),
      S = r.n(T),
      x = r(349),
      O = r.n(x);
    const R = ["eventName", "elementId"],
      _ = new Map;

    function I(t) {
      let e = t._id;
      return e || (e = E()(), t._id = e), _.set(e, {
        id: e,
        element: t
      }), e
    }

    function P(t) {
      const e = _.get(t);
      if (!e) throw Error("element destroyed");
      return e.element
    }

    function C(t) {
      const e = {
          elementId: I(t),
          tagName: t.tagName.toLocaleLowerCase().replace("wx-", "")
        },
        r = v()(t, "__wxElement.__wxTmplId");
      return r && (e.nodeId = r), "video" === e.tagName && (e.videoId = t.__wxElement.id || ""), e
    }

    function L() {
      return (L = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = P(e);
        return {
          attributes: r.map((t => n.getAttribute(t)))
        }
      }))).apply(this, arguments)
    }

    function D() {
      return (D = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = P(e), o = getComputedStyle(n);
        return {
          styles: r.map((t => o[t]))
        }
      }))).apply(this, arguments)
    }

    function F() {
      return (F = e()((function* (t) {
        const {
          elementId: e,
          type: r
        } = t, n = P(e);
        return {
          wxml: M("outer" === r ? n.outerHTML : n.innerHTML)
        }
      }))).apply(this, arguments)
    }

    function M(t) {
      return t = (t = (t = t.replace(/\n/g, "")).replace(/(<wx-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/wx-text>)/g, "$1$3")).replace(/<\/?[^>]*>/g, (t => t.indexOf("<body") > -1 ? "<page>" : "</body>" === t ? "</page>" : 0 !== t.indexOf("<wx-") && 0 !== t.indexOf("</wx-") ? "" : t = (t = (t = (t = t.replace(/wx-/g, "")).replace(/ exparser:[^=]*="[^"]*"/g, "")).replace(/ wx:[^=]*="[^"]*"/g, "")).replace(/ role=""/g, "").replace(/ aria-label=""/g, "")))
    }

    function U() {
      return (U = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = P(e);
        return {
          properties: r.map((t => v()(n, t)))
        }
      }))).apply(this, arguments)
    }

    function B() {
      return (B = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = P(e).__wxElement;
        return {
          properties: r.map((t => v()(n, t)))
        }
      }))).apply(this, arguments)
    }

    function V() {
      return (V = e()((function* (t) {
        const e = P(t.elementId).getBoundingClientRect();
        return {
          left: e.left + window.pageXOffset,
          top: e.top + window.pageYOffset
        }
      }))).apply(this, arguments)
    }

    function H() {
      return (H = e()((function* (t) {
        const {
          elementId: e
        } = t, r = P(e);
        J(r), K(r)
      }))).apply(this, arguments)
    }

    function j() {
      return (j = e()((function* (t) {
        const {
          elementId: e,
          touches: r,
          changedTouches: n
        } = t;
        J(P(e), {
          touches: r,
          changedTouches: n
        })
      }))).apply(this, arguments)
    }

    function W() {
      return (W = e()((function* (t) {
        const {
          elementId: e,
          touches: r,
          changedTouches: n
        } = t;
        Q(P(e), {
          touches: r,
          changedTouches: n
        })
      }))).apply(this, arguments)
    }

    function Y() {
      return (Y = e()((function* (t) {
        const {
          elementId: e,
          touches: r,
          changedTouches: n
        } = t;
        K(P(e), {
          touches: r,
          changedTouches: n
        })
      }))).apply(this, arguments)
    }

    function G() {
      return (G = e()((function* (t) {
        const {
          type: e,
          elementId: r
        } = t;
        let {
          detail: n
        } = t;
        const o = P(r);
        w()(n) && (n = {}), o.__wxElement.triggerEvent(e, n)
      }))).apply(this, arguments)
    }

    function q() {
      return (q = e()((function* (t) {
        const {
          functionName: e,
          args: r,
          elementId: n
        } = t;
        if (!e) throw Error("functionName is not provided");
        const o = P(n);
        r.unshift(o);
        const s = v()(k, e);
        if (!s) throw Error(`${e} not exists`);
        return {
          result: s.apply(null, r)
        }
      }))).apply(this, arguments)
    }

    function $(t, e, r) {
      const n = r.eventData || {},
        o = n.detail || {};
      let s = n.touches || [],
        i = n.changedTouches || [];
      s = tt(e, s), i = tt(e, i);
      const u = document.createEvent("Event");
      u.initEvent(t, !0, !0), u.touches = s, u.changedTouches = i;
      const a = {
        bubbles: !0,
        capturePhase: !0,
        composed: !0,
        extraFields: {
          _allowWriteOnly: !0,
          touches: s,
          changedTouches: i
        },
        originalEvent: u
      };
      return exparser.Event.create(t, o, a)
    }

    function X() {
      return (X = e()((function* (t) {
        const {
          eventName: e,
          elementId: r
        } = t, n = g()(t, R);
        if (!e) throw Error("eventName is not provided");
        const o = P(r),
          s = n.$ ? o.__wxElement.$[n.$] : o;
        if (!s) throw Error("target is not found");
        const i = $(e, s, t);
        "tap" === e ? __virtualDOM__.wrapTapMark((() => {
          exparser.Event.dispatchEvent(s, i)
        })) : exparser.Event.dispatchEvent(s, i)
      }))).apply(this, arguments)
    }
    const k = {
      "scroll-view": {
        scrollTo(t, e, r) {
          const n = t.__wxElement;
          n.$.main.$$.scrollLeft = e, n.$.main.$$.scrollTop = r
        },
        scrollTop: t => t.__wxElement.$.main.$$.scrollTop,
        scrollLeft: t => t.__wxElement.$.main.$$.scrollLeft,
        scrollWidth: t => t.__wxElement.$.main.$$.scrollWidth,
        scrollHeight: t => t.__wxElement.$.main.$$.scrollHeight
      },
      swiper: {
        swipeTo(t, e) {
          const r = t.__wxElement;
          r.__currentChangeSource = "touch", r.current = e, r._animateViewport(e, "touch", 0)
        }
      },
      input: {
        input(t, e) {
          const r = t.__wxElement;
          if (r.onKeyboardComplete) {
            const t = "ios" === wx.getPlatform();
            let n = !1;
            t && (n = r._keyboardShow, r._keyboardShow = !0), r.onKeyboardComplete({
              detail: {
                value: e,
                cursor: e.length,
                inputId: r._inputId
              }
            }), t && (r._keyboardShow = n)
          } else r._inputKey({
            target: {
              value: e
            }
          }), r._showValueChange(e)
        }
      },
      textarea: {
        input(t, e) {
          const r = t.__wxElement;
          r.onKeyboardComplete ? r.onKeyboardComplete({
            detail: {
              value: e,
              cursor: e.length,
              inputId: r._inputId
            }
          }) : r.onTextAreaInput({
            target: {
              value: e
            }
          })
        }
      },
      "movable-view": {
        moveTo(t, e, r) {
          t.__wxElement._animationTo(e, r)
        }
      },
      switch: {
        tap(t) {
          t.__wxElement.onInputChange()
        }
      },
      slider: {
        slideTo(t, e) {
          const r = t.__wxElement,
            n = r.$.step.offsetWidth,
            o = r.$.step.getBoundingClientRect().left;
          r._onUserChangedValue({
            detail: {
              x: (e - r.min) * n / (r.max - r.min) + o
            }
          })
        }
      }
    };

    function J(t, e = {}) {
      let {
        touches: r = [],
        changedTouches: n = []
      } = e;
      O()(r) && (r = [z(t)]), O()(n) && (n = [z(t)]), Z("touchstart", t, {
        touches: r,
        changedTouches: n
      })
    }

    function Q(t, e = {}) {
      let {
        touches: r = [],
        changedTouches: n = []
      } = e;
      O()(r) && (r = [z(t)]), O()(n) && (n = [z(t)]), Z("touchmove", t, {
        touches: r,
        changedTouches: n
      })
    }

    function K(t, e = {}) {
      const {
        touches: r = []
      } = e;
      let {
        changedTouches: n = []
      } = e;
      O()(n) && (n = [z(t)]), Z("touchend", t, {
        touches: r,
        changedTouches: n
      })
    }

    function Z(t, e, r) {
      const {
        touches: n,
        changedTouches: o
      } = r, s = document.createEvent("Event");
      s.initEvent(t, !0, !0), s.touches = tt(e, n), s.changedTouches = tt(e, o), e.dispatchEvent(s)
    }

    function z(t) {
      const e = t.offsetLeft + t.offsetWidth / 2,
        r = t.offsetTop + t.offsetHeight / 2;
      return {
        identifier: 0,
        pageX: e,
        pageY: r,
        clientX: e - window.pageXOffset,
        clientY: r - window.pageYOffset
      }
    }

    function tt(t, e) {
      const r = window.scrollY,
        n = window.scrollX;
      return b()(e, (e => (w()(e.pageX) && e.clientX ? e.pageX = e.clientX + n : e.pageX && w()(e.clientX) && (e.clientX = e.pageX - n), w()(e.pageY) && e.clientY ? e.pageY = e.clientY + r : e.pageY && w()(e.clientY) && (e.clientY = e.pageY - r), S()(e, {
        target: t,
        identifier: 0,
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        force: 1
      }), e)))
    }
    const et = r(969);
    et.NodeTest.localNameMatches = function (t, e, r) {
      t = `wx-${t}`;
      const n = r.localName || r.nodeName;
      return e.caseInsensitive ? t.toLowerCase() === n.toLowerCase() : t === n
    };
    const rt = et.PathExpr.applyStep;
    et.PathExpr.applyStep = function (t, e, r) {
      let n = [];
      switch (e.contextNode = r, t.axis) {
        case et.Step.CHILD: {
          const r = [e.contextNode.firstChild];
          for (; r.length > 0;)
            for (let o = r.shift(); null != o;) {
              (o.localName || o.nodeName).startsWith("wx-") ? t.nodeTest.matches(o, e) && n.push(o) : null != o.firstChild && r.push(o.firstChild), o = o.nextSibling
            }
          break
        }
        default:
          n = rt.call(et.PathExpr, t, e, r)
      }
      return n
    };
    const nt = et;

    function ot() {
      return (ot = e()((function* (t) {
        let {
          selector: e
        } = t;
        e = p(e);
        let r = window.document.querySelector(e);
        if (h(r) || (r = null), !r) throw Error("no such element");
        return C(r)
      }))).apply(this, arguments)
    }

    function st() {
      return (st = e()((function* (t) {
        let {
          selector: e
        } = t;
        e = p(e);
        const r = o()(window.document.querySelectorAll(e)),
          n = [];
        for (const t of r) h(t) && n.push(C(t));
        return {
          elements: n
        }
      }))).apply(this, arguments)
    }

    function it() {
      return (it = e()((function* (t) {
        let {
          selector: e
        } = t;
        const r = nt.parse(e).evaluate({
          node: document.body,
          isHtml: !0
        });
        let n = 1 === r.size ? r.nodes[0] : null;
        if (h(n) || (n = null), !n) throw Error("no such element");
        return C(n)
      }))).apply(this, arguments)
    }
    const ut = {
      "Page.getElement": function (t) {
        return ot.apply(this, arguments)
      },
      "Page.getElements": function (t) {
        return st.apply(this, arguments)
      },
      "Page.getWindowProperties": function (t) {
        const {
          names: e
        } = t;
        return {
          properties: e.map((t => v()(window, t)))
        }
      },
      "Page.getElementByXpath": function (t) {
        return it.apply(this, arguments)
      },
      "Element.getElement": function (t) {
        const {
          elementId: e
        } = t;
        let {
          selector: r
        } = t, n = P(e);
        if (r = p(r, f(n)), n = n.querySelector(r), h(n) || (n = null), !n) throw Error("no such element");
        return C(n)
      },
      "Element.getElements": function (t) {
        const {
          elementId: e
        } = t;
        let {
          selector: r
        } = t;
        const n = P(e);
        r = p(r, f(n));
        const s = o()(n.querySelectorAll(r)),
          i = [];
        for (const t of s) h(t) && i.push(C(t));
        return {
          elements: i
        }
      },
      "Element.getAttributes": function (t) {
        return L.apply(this, arguments)
      },
      "Element.getStyles": function (t) {
        return D.apply(this, arguments)
      },
      "Element.getWXML": function (t) {
        return F.apply(this, arguments)
      },
      "Element.getDOMProperties": function (t) {
        return U.apply(this, arguments)
      },
      "Element.getProperties": function (t) {
        return B.apply(this, arguments)
      },
      "Element.getOffset": function (t) {
        return V.apply(this, arguments)
      },
      "Element.tap": function (t) {
        return H.apply(this, arguments)
      },
      "Element.touchstart": function (t) {
        return j.apply(this, arguments)
      },
      "Element.touchmove": function (t) {
        return W.apply(this, arguments)
      },
      "Element.touchend": function (t) {
        return Y.apply(this, arguments)
      },
      "Element.triggerEvent": function (t) {
        return G.apply(this, arguments)
      },
      "Element.callFunction": function (t) {
        return q.apply(this, arguments)
      },
      "Element.dispatchEvent": function (t) {
        return X.apply(this, arguments)
      }
    };
    var at = r(44),
      ct = r.n(at);
    let lt = r.g.WeixinJSBridge,
      pt = !1,
      ht = [];

    function ft() {
      pt = !0;
      for (let t = 0, e = ht.length; t < e; t++) ht[t]();
      ht = []
    }
    r.g.__wxConfig.clientDebug = !0;
    const dt = Object.getOwnPropertyDescriptor(r.g, "WeixinJSBridge");
    lt && lt.on ? ft() : dt && !1 === dt.configurable ? ct()((() => r.g.WeixinJSBridge && r.g.WeixinJSBridge.on), 5e3, 50).then((() => {
      lt = r.g.WeixinJSBridge, ft()
    })) : Object.defineProperty(r.g, "WeixinJSBridge", {
      set(t) {
        t && t.on && (lt = t, ft())
      },
      get: () => lt,
      configurable: !0
    });
    const gt = {
      on: (...t) => lt.on(...t),
      publish: (...t) => lt.publish(...t),
      invoke: (...t) => lt.invoke(...t),
      subscribe: (...t) => lt.subscribe(...t),
      onReady(t) {
        pt ? t() : ht.push(t)
      }
    };

    function yt() {
      return (yt = e()((function* (t, e) {
        if (ut[t]) return (yield ut[t](e)) || {};
        throw Error(`webview ${t} unimplemented`)
      }))).apply(this, arguments)
    }
    gt.onReady((() => {
      gt.subscribe("sendAutoMessage", function () {
        var t = e()((function* (t) {
          const {
            method: e,
            params: r,
            id: n
          } = t, o = {
            id: n
          };
          try {
            o.result = yield function (t, e) {
              return yt.apply(this, arguments)
            }(e, r)
          } catch (t) {
            o.error = {
              message: t.message
            }
          }
          gt.publish("sendAutoMessage", o)
        }));
        return function (e) {
          return t.apply(this, arguments)
        }
      }())
    }))
  })()
})();