(() => {
  var e = {
      2954: e => {
        function t(e, t, n, r, o, i, u) {
          try {
            var a = e[i](u),
              c = a.value
          } catch (e) {
            return void n(e)
          }
          a.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        e.exports = function (e) {
          return function () {
            var n = this,
              r = arguments;
            return new Promise((function (o, i) {
              var u = e.apply(n, r);

              function a(e) {
                t(u, o, i, a, c, "next", e)
              }

              function c(e) {
                t(u, o, i, a, c, "throw", e)
              }
              a(void 0)
            }))
          }
        }, e.exports.default = e.exports, e.exports.__esModule = !0
      },
      1260: e => {
        e.exports = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
      },
      417: (e, t, n) => {
        var r = n(1260);

        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }
        e.exports = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
              r(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
      },
      6601: (e, t, n) => {
        var r = n(5479),
          o = n(535),
          i = n(4673),
          u = Object.getOwnPropertyNames,
          a = Object.getOwnPropertySymbols;
        t = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.prototype,
            c = void 0 === n || n,
            s = t.unenumerable,
            p = void 0 !== s && s,
            l = t.symbol,
            f = void 0 !== l && l,
            g = [];
          if ((p || f) && u) {
            var d = r;
            p && u && (d = u);
            do {
              g = g.concat(d(e)), f && a && (g = g.concat(a(e)))
            } while (c && (e = o(e)) && e !== Object.prototype);
            g = i(g)
          } else if (c)
            for (var v in e) g.push(v);
          else g = r(e);
          return g
        }, e.exports = t
      },
      4840: (e, t, n) => {
        var r = n(61);
        t = r((function (e, t, n) {
          return r((function (r) {
            return e.apply(t, n.concat(r))
          }))
        })), e.exports = t
      },
      2069: (e, t, n) => {
        var r = n(6589),
          o = n(3463);
        t = function (e, t) {
          if (o(e)) return e;
          if (t && r(t, e)) return [e];
          var n = [];
          return e.replace(i, (function (e, t, r, o) {
            n.push(r ? o.replace(u, "$1") : t || e)
          })), n
        };
        var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          u = /\\(\\)?/g;
        e.exports = t
      },
      638: (e, t, n) => {
        var r = n(7765),
          o = n(3463),
          i = n(4078);
        t = function (e) {
          return r(e) ? o(e) ? e.slice() : i({}, e) : e
        }, e.exports = t
      },
      8021: (e, t, n) => {
        var r = n(1571);
        t = function () {
          for (var e = r(arguments), t = [], n = 0, o = e.length; n < o; n++) t = t.concat(r(e[n]));
          return t
        }, e.exports = t
      },
      390: (e, t, n) => {
        var r = n(9748),
          o = n(2038),
          i = n(8082),
          u = n(4059);
        t = function (e, t) {
          return o(e) ? e.indexOf(t) > -1 : (i(e) || (e = u(e)), r(e, t) >= 0)
        }, e.exports = t
      },
      1031: (e, t, n) => {
        var r = n(2768),
          o = n(1304);
        t = function (e, t) {
          return function (n) {
            return o(arguments, (function (i, u) {
              if (0 !== u) {
                var a = e(i);
                o(a, (function (e) {
                  t && !r(n[e]) || (n[e] = i[e])
                }))
              }
            })), n
          }
        }, e.exports = t
      },
      1304: (e, t, n) => {
        var r = n(8082),
          o = n(5479),
          i = n(5749);
        t = function (e, t, n) {
          var u, a;
          if (t = i(t, n), r(e))
            for (u = 0, a = e.length; u < a; u++) t(e[u], u, e);
          else {
            var c = o(e);
            for (u = 0, a = c.length; u < a; u++) t(e[c[u]], c[u], e)
          }
          return e
        }, e.exports = t
      },
      5654: (e, t) => {
        t = function (e, t) {
          var n = e.length - t.length;
          return n >= 0 && e.indexOf(t, n) === n
        }, e.exports = t
      },
      4078: (e, t, n) => {
        t = n(1031)(n(6601)), e.exports = t
      },
      207: (e, t, n) => {
        var r = n(5479);
        t = n(1031)(r), e.exports = t
      },
      8206: (e, t, n) => {
        var r = n(5261),
          o = n(1304);
        t = function (e, t, n) {
          var i = [];
          return t = r(t, n), o(e, (function (e, n, r) {
            t(e, n, r) && i.push(e)
          })), i
        }, e.exports = t
      },
      6498: (e, t, n) => {
        var r = n(4922),
          o = n(4776),
          i = n(6564),
          u = n(2038);
        t = function (e) {
          var t, n, c = o(u(e) ? e : r(e));
          i(c, "async") || i(c, "function") || i(c, "(") ? (t = c.indexOf("(") + 1, n = c.indexOf(")")) : (t = 0, n = c.indexOf("=>"));
          var s = c.slice(t, n);
          return null === (s = s.match(a)) ? [] : s
        };
        var a = /[^\s,]+/g;
        e.exports = t
      },
      535: (e, t, n) => {
        var r = n(7765),
          o = n(7018),
          i = Object.getPrototypeOf,
          u = {}.constructor;
        t = function (e) {
          if (r(e)) {
            if (i) return i(e);
            var t = e.__proto__;
            return t || null === t ? t : o(e.constructor) ? e.constructor.prototype : e instanceof u ? u.prototype : void 0
          }
        }, e.exports = t
      },
      6589: (e, t) => {
        var n = Object.prototype.hasOwnProperty;
        t = function (e, t) {
          return n.call(e, t)
        }, e.exports = t
      },
      8496: (e, t) => {
        t = function (e) {
          return e
        }, e.exports = t
      },
      9748: (e, t) => {
        t = function (e, t, n) {
          return Array.prototype.indexOf.call(e, t, n)
        }, e.exports = t
      },
      3463: (e, t, n) => {
        var r = n(8913);
        t = Array.isArray ? Array.isArray : function (e) {
          return "[object Array]" === r(e)
        }, e.exports = t
      },
      8082: (e, t, n) => {
        var r = n(1264),
          o = n(7018),
          i = Math.pow(2, 53) - 1;
        t = function (e) {
          if (!e) return !1;
          var t = e.length;
          return r(t) && t >= 0 && t <= i && !o(e)
        }, e.exports = t
      },
      7018: (e, t, n) => {
        var r = n(8913);
        t = function (e) {
          var t = r(e);
          return "[object Function]" === t || "[object GeneratorFunction]" === t || "[object AsyncFunction]" === t
        }, e.exports = t
      },
      6114: (e, t, n) => {
        var r = n(5479);
        t = function (e, t) {
          var n = r(t),
            o = n.length;
          if (null == e) return !o;
          e = Object(e);
          for (var i = 0; i < o; i++) {
            var u = n[i];
            if (t[u] !== e[u] || !(u in e)) return !1
          }
          return !0
        }, e.exports = t
      },
      3295: (e, t) => {
        t = function (e) {
          return null == e
        }, e.exports = t
      },
      1264: (e, t, n) => {
        var r = n(8913);
        t = function (e) {
          return "[object Number]" === r(e)
        }, e.exports = t
      },
      7765: (e, t) => {
        t = function (e) {
          var t = typeof e;
          return !!e && ("function" === t || "object" === t)
        }, e.exports = t
      },
      9350: (e, t, n) => {
        var r = n(7765),
          o = n(7018);
        t = function (e) {
          return r(e) && o(e.then) && o(e.catch)
        }, e.exports = t
      },
      2038: (e, t, n) => {
        var r = n(8913);
        t = function (e) {
          return "[object String]" === r(e)
        }, e.exports = t
      },
      2768: (e, t) => {
        t = function (e) {
          return void 0 === e
        }, e.exports = t
      },
      5479: (e, t, n) => {
        var r = n(6589);
        t = Object.keys ? Object.keys : function (e) {
          var t = [];
          for (var n in e) r(e, n) && t.push(n);
          return t
        }, e.exports = t
      },
      3178: (e, t) => {
        t = function (e) {
          var t = e ? e.length : 0;
          if (t) return e[t - 1]
        }, e.exports = t
      },
      443: (e, t) => {
        var n = /^\s+/;
        t = function (e, t) {
          if (null == t) return e.replace(n, "");
          for (var r, o, i = 0, u = e.length, a = t.length, c = !0; c && i < u;)
            for (c = !1, r = -1, o = e.charAt(i); ++r < a;)
              if (o === t[r]) {
                c = !0, i++;
                break
              } return i >= u ? "" : e.substr(i, u)
        }, e.exports = t
      },
      3803: (e, t, n) => {
        var r = n(5261),
          o = n(5479),
          i = n(8082);
        t = function (e, t, n) {
          t = r(t, n);
          for (var u = !i(e) && o(e), a = (u || e).length, c = Array(a), s = 0; s < a; s++) {
            var p = u ? u[s] : s;
            c[s] = t(e[p], p, e)
          }
          return c
        }, e.exports = t
      },
      1705: (e, t, n) => {
        var r = n(207),
          o = n(6114);
        t = function (e) {
          return e = r({}, e),
            function (t) {
              return o(t, e)
            }
        }, e.exports = t
      },
      2261: (e, t) => {
        t = function () {}, e.exports = t
      },
      1137: (e, t) => {
        t = Date.now ? Date.now : function () {
          return (new Date).getTime()
        }, e.exports = t
      },
      8913: (e, t) => {
        var n = Object.prototype.toString;
        t = function (e) {
          return n.call(e)
        }, e.exports = t
      },
      5749: (e, t, n) => {
        var r = n(2768);
        t = function (e, t, n) {
          if (r(t)) return e;
          switch (null == n ? 3 : n) {
            case 1:
              return function (n) {
                return e.call(t, n)
              };
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o)
              };
            case 4:
              return function (n, r, o, i) {
                return e.call(t, n, r, o, i)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        }, e.exports = t
      },
      1085: (e, t, n) => {
        var r = n(3463),
          o = n(708);
        t = function (e) {
          return r(e) ? function (t) {
            return o(t, e)
          } : (t = e, function (e) {
            return null == e ? void 0 : e[t]
          });
          var t
        }, e.exports = t
      },
      61: (e, t) => {
        t = function (e, t) {
          return t = null == t ? e.length - 1 : +t,
            function () {
              var n, r = Math.max(arguments.length - t, 0),
                o = new Array(r);
              for (n = 0; n < r; n++) o[n] = arguments[n + t];
              switch (t) {
                case 0:
                  return e.call(this, o);
                case 1:
                  return e.call(this, arguments[0], o);
                case 2:
                  return e.call(this, arguments[0], arguments[1], o)
              }
              var i = new Array(t + 1);
              for (n = 0; n < t; n++) i[n] = arguments[n];
              return i[t] = o, e.apply(this, i)
            }
        }, e.exports = t
      },
      6367: (e, t) => {
        var n = /\s+$/;
        t = function (e, t) {
          if (null == t) return e.replace(n, "");
          for (var r, o, i = e.length - 1, u = t.length, a = !0; a && i >= 0;)
            for (a = !1, r = -1, o = e.charAt(i); ++r < u;)
              if (o === t[r]) {
                a = !0, i--;
                break
              } return i >= 0 ? e.substring(0, i + 1) : ""
        }, e.exports = t
      },
      5261: (e, t, n) => {
        var r = n(7018),
          o = n(7765),
          i = n(3463),
          u = n(5749),
          a = n(1705),
          c = n(8496),
          s = n(1085);
        t = function (e, t, n) {
          return null == e ? c : r(e) ? u(e, t, n) : o(e) && !i(e) ? a(e) : s(e)
        }, e.exports = t
      },
      708: (e, t, n) => {
        var r = n(2768),
          o = n(2069);
        t = function (e, t) {
          var n;
          for (n = (t = o(t, e)).shift(); !r(n);) {
            if (null == (e = e[n])) return;
            n = t.shift()
          }
          return e
        }, e.exports = t
      },
      8090: (e, t) => {
        t = function (e) {
          return new Promise((function (t) {
            return setTimeout(t, e)
          }))
        }, e.exports = t
      },
      6564: (e, t) => {
        t = function (e, t) {
          return 0 === e.indexOf(t)
        }, e.exports = t
      },
      4776: (e, t) => {
        t = function (e) {
          for (var t = {
              singleQuote: !1,
              doubleQuote: !1,
              regex: !1,
              blockComment: !1,
              lineComment: !1,
              condComp: !1
            }, n = 0, r = (e = ("__" + e + "__").split("")).length; n < r; n++)
            if (t.regex) "/" === e[n] && "\\" !== e[n - 1] && (t.regex = !1);
            else if (t.singleQuote) "'" === e[n] && "\\" !== e[n - 1] && (t.singleQuote = !1);
          else if (t.doubleQuote) '"' === e[n] && "\\" !== e[n - 1] && (t.doubleQuote = !1);
          else if (t.blockComment) "*" === e[n] && "/" === e[n + 1] && (e[n + 1] = "", t.blockComment = !1), e[n] = "";
          else if (t.lineComment) "\n" === e[n + 1] && (t.lineComment = !1), e[n] = "";
          else if (t.doubleQuote = '"' === e[n], t.singleQuote = "'" === e[n], "/" === e[n]) {
            if ("*" === e[n + 1]) {
              e[n] = "", t.blockComment = !0;
              continue
            }
            if ("/" === e[n + 1]) {
              e[n] = "", t.lineComment = !0;
              continue
            }
            t.regex = !0
          }
          return e.join("").slice(2, -2)
        }, e.exports = t
      },
      1571: (e, t, n) => {
        var r = n(8082),
          o = n(3803),
          i = n(3463),
          u = n(2038);
        t = function (e) {
          return e ? i(e) ? e : r(e) && !u(e) ? o(e) : [e] : []
        }, e.exports = t
      },
      4922: (e, t, n) => {
        var r = n(3295);
        t = function (e) {
          if (r(e)) return "";
          try {
            return o.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
          return ""
        };
        var o = Function.prototype.toString;
        e.exports = t
      },
      7968: (e, t, n) => {
        var r = n(443),
          o = n(6367),
          i = /^\s+|\s+$/g;
        t = function (e, t) {
          return null == t ? e.replace(i, "") : r(o(e, t), t)
        }, e.exports = t
      },
      4673: (e, t, n) => {
        var r = n(8206);

        function o(e, t) {
          return e === t
        }
        t = function (e, t) {
          return t = t || o, r(e, (function (e, n, r) {
            for (var o = r.length; ++n < o;)
              if (t(e, r[n])) return !1;
            return !0
          }))
        }, e.exports = t
      },
      4059: (e, t, n) => {
        var r = n(1304);
        t = function (e) {
          var t = [];
          return r(e, (function (e) {
            t.push(e)
          })), t
        }, e.exports = t
      },
      9044: (e, t, n) => {
        var r = n(1137);
        t = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;

          function o() {
            return new Promise((function (t, n) {
              try {
                t(e())
              } catch (e) {
                n(e)
              }
            }))
          }
          return new Promise((function (e, i) {
            var u = r(),
              a = function () {
                o().then((function (o) {
                  var c = r() - u;
                  o ? e(o) : t && c >= t ? i(Error("Wait timed out after ".concat(t, " ms"))) : setTimeout(a, n)
                }), i)
              };
            a()
          }))
        }, e.exports = t
      }
    },
    t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = t[r] = {
      exports: {}
    };
    return e[r](i, i.exports, n), i.exports
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {
      a: t
    }), t
  }, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  }, n.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    "use strict";
    var e = n(2954),
      t = n.n(e),
      r = n(417),
      o = n.n(r),
      i = n(6564),
      u = n.n(i),
      a = n(5654),
      c = n.n(a),
      s = n(390),
      p = n.n(s),
      l = n(6498),
      f = n.n(l);
    const g = n.g.Function,
      d = Object.getPrototypeOf(t()((function* () {}))).constructor;

    function v(e) {
      return !u()(e, "on") && !u()(e, "off")
    }

    function h(e) {
      return c()(e, "Sync") || p()(x, e)
    }
    const x = ["stopRecord", "getRecorderManager", "pauseVoice", "stopVoice", "pauseBackgroundAudio", "stopBackgroundAudio", "getBackgroundAudioManager", "createAudioContext", "createInnerAudioContext", "createVideoContext", "createCameraContext", "createMapContext", "canIUse", "startAccelerometer", "stopAccelerometer", "startCompass", "stopCompass", "hideToast", "hideLoading", "showNavigationBarLoading", "hideNavigationBarLoading", "navigateBack", "createAnimation", "pageScrollTo", "createSelectorQuery", "createCanvasContext", "createContext", "drawCanvas", "hideKeyboard", "stopPullDownRefresh", "arrayBufferToBase64", "base64ToArrayBuffer"];

    function y(e) {
      const t = f()(e);
      return "}" !== e[e.length - 1] ? t.push("return " + e.slice(e.indexOf("=>") + 2)) : t.push(e.slice(e.indexOf("{") + 1, e.lastIndexOf("}"))), t
    }

    function m(e, t) {
      return b.apply(this, arguments)
    }

    function b() {
      return (b = t()((function* (e, t, n = null) {
        const r = y(e);
        let o;
        return u()(e, "async") ? (o = d.apply(null, r), yield o.apply(n, t)) : (o = g.apply(null, r), o.apply(n, t))
      }))).apply(this, arguments)
    }

    function w(e, t, n = null) {
      const r = y(e);
      return g.apply(null, r).apply(n, t)
    }
    var O = n(3178),
      _ = n.n(O),
      P = n(2768),
      A = n.n(P),
      j = n(7018),
      k = n.n(j),
      C = n(7968),
      M = n.n(C),
      S = n(1571),
      E = n.n(S),
      I = n(8021),
      D = n.n(I),
      B = n(4840),
      $ = n.n(B),
      F = n(638),
      W = n.n(F),
      T = n(9044),
      Q = n.n(T);
    let R = n.g.WeixinJSBridge,
      N = !1,
      J = [];

    function L() {
      N = !0;
      for (let e = 0, t = J.length; e < t; e++) J[e]();
      J = []
    }
    n.g.__wxConfig.clientDebug = !0;
    const V = Object.getOwnPropertyDescriptor(n.g, "WeixinJSBridge");
    R && R.on ? L() : V && !1 === V.configurable ? Q()((() => n.g.WeixinJSBridge && n.g.WeixinJSBridge.on), 5e3, 50).then((() => {
      R = n.g.WeixinJSBridge, L()
    })) : Object.defineProperty(n.g, "WeixinJSBridge", {
      set(e) {
        e && e.on && (R = e, L())
      },
      get: () => R,
      configurable: !0
    });
    const G = {
      on: (...e) => R.on(...e),
      publish: (...e) => R.publish(...e),
      invoke: (...e) => R.invoke(...e),
      subscribe: (...e) => R.subscribe(...e),
      onReady(e) {
        N ? e() : J.push(e)
      }
    };
    var q = n(1304),
      z = n.n(q),
      H = n(2261),
      K = n.n(H);
    const U = {};
    let Y = [],
      X = !1;
    const Z = n.g.__passWAServiceGlobal__ || K();

    function ee(e) {
      X ? e(U) : Y.push(e)
    }
    let te;

    function ne() {
      return (ne = t()((function* (e) {
        const {
          functionDeclaration: t,
          args: n
        } = e;
        return {
          result: yield m(t, n)
        }
      }))).apply(this, arguments)
    }

    function re() {
      return (re = t()((function* () {
        return _()((yield oe()).pageStack)
      }))).apply(this, arguments)
    }

    function oe() {
      return ie.apply(this, arguments)
    }

    function ie() {
      return (ie = t()((function* () {
        return {
          pageStack: te.getCurrentPagesByDomain().map((e => {
            let {
              route: t
            } = e;
            const n = t.indexOf("__plugin__/");
            return n > -1 && (t = "plugin-private://" + t.slice(n + 11)), {
              pageId: e.__wxWebviewId__,
              path: t,
              query: e.options
            }
          }))
        }
      }))).apply(this, arguments)
    }
    n.g.__passWAServiceGlobal__ = function (e) {
      z()(e, ((e, t) => {
        "Protect" !== t && (U[t] = e)
      })), Y.forEach((e => {
        e(U)
      })), Y = [], X = !0, Z(e)
    };
    const ue = {},
      ae = {},
      ce = {};

    function se() {
      return (se = t()((function* (e) {
        const {
          method: n,
          result: r
        } = e;
        let o, {
          functionDeclaration: i,
          args: u
        } = e;
        if (!wx[n]) throw Error(`wx.${n} not exists`);
        if (!v(n)) throw Error(`You can't mock wx.${n}`);
        if (A()(r) && A()(i)) return void le(n);
        A()(r) || (i = "function () {\n      return arguments[arguments.length - 1];\n    }", u = [r]);
        const a = {
          origin: $()(pe(n), wx)
        };
        o = h(n) ? function () {
          return w(i, D()(E()(arguments), u), a)
        } : function () {
          var e = t()((function* (...e) {
            let r = !1;
            const o = e[0];
            if ((A()(o) || A()(o.success) && A()(o.fail) && A()(o.complete)) && (r = !0), r) return u = D()(e, u), new Promise(function () {
              var e = t()((function* (e, t) {
                const r = yield m(i, u, a);
                (r.errMsg || `${n}:ok`).indexOf(`${n}:ok`) > -1 ? e(r) : t(r)
              }));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()); {
              const e = W()(o);
              delete e.success, delete e.fail, delete e.complete;
              const t = yield m(i, D()([e], u), a);
              (t.errMsg || `${n}:ok`).indexOf(`${n}:ok`) > -1 ? o.success && o.success(t) : o.fail && o.fail(t), o.complete && o.complete(t)
            }
          }));
          return function () {
            return e.apply(this, arguments)
          }
        }(), fe(n, o)
      }))).apply(this, arguments)
    }

    function pe(e) {
      if (ue[e]) return ae[e] ? ue[e]() : ue[e];
      const t = Object.getOwnPropertyDescriptor(wx, e);
      return t && t.get ? t.get() : wx[e]
    }

    function le(e) {
      if (!ue[e]) return;
      Object.getOwnPropertyDescriptor(wx, e) ? ae[e] ? Object.defineProperty(wx, e, {
        get: ue[e]
      }) : Object.defineProperty(wx, e, {
        value: ue[e]
      }) : wx[e] = ue[e], delete ue[e]
    }

    function fe(e, t) {
      const n = Object.getOwnPropertyDescriptor(wx, e);
      if (!ue[e]) {
        let t, r = !1,
          o = !1;
        n ? n.get ? (r = !0, t = n.get) : (o = !0, t = n.value) : t = wx[e], t && (ce[e] = o, ae[e] = r, ue[e] = t)
      }
      n ? Object.defineProperty(wx, e, {
        get: () => t
      }) : wx[e] = t
    }
    const ge = ["log", "info", "warn", "error", "debug"];

    function de() {
      return (de = t()((function* () {
        ge.forEach((e => {
          const t = console[e];
          console[e] = function (...n) {
            G.invoke("sendAutoMessage", {
              method: "App.logAdded",
              params: {
                type: e,
                args: n
              }
            }), k()(t) && t.apply(console, n)
          }
        }))
      }))).apply(this, arguments)
    }

    function ve() {
      return (ve = t()((function* (e) {
        const {
          name: t
        } = e;
        n.g[t] = function (...e) {
          G.invoke("sendAutoMessage", {
            method: "App.bindingCalled",
            params: {
              name: t,
              args: e
            }
          })
        }
      }))).apply(this, arguments)
    }

    function he() {
      return (he = t()((function* () {
        G.invoke("exitMiniProgram", {})
      }))).apply(this, arguments)
    }

    function xe() {
      return (xe = t()((function* () {
        return new Promise(((e, n) => {
          function r() {
            n(Error("fail to capture screenshot"))
          }
          G.invoke("private_captureScreen", {}, function () {
            var n = t()((function* (t) {
              const {
                errMsg: n
              } = t;
              if (p()(n, ":ok")) {
                const {
                  tempFilePath: n
                } = t;
                pe("saveFile")({
                  tempFilePath: n,
                  success(t) {
                    const n = pe("getFileSystemManager")(),
                      o = t.savedFilePath;
                    n.readFile({
                      filePath: o,
                      encoding: "base64",
                      success(t) {
                        pe("removeSavedFile")({
                          filePath: o
                        }), e({
                          data: t.data
                        })
                      },
                      fail() {
                        r()
                      }
                    })
                  },
                  fail() {
                    r()
                  }
                })
              } else r()
            }));
            return function (e) {
              return n.apply(this, arguments)
            }
          }())
        }))
      }))).apply(this, arguments)
    }
    ee((e => {
      te = e.__appServiceEngine__, e.Reporter.registerErrorListener((e => {
        const t = e.split("\n");
        "MiniProgramError" === M()(t[0]) && (e = t[2], e = M()(e.replace(/^((Type)|(Range)|(Reference)|(Syntax))?Error:/, "")), G.invoke("sendAutoMessage", {
          method: "App.exceptionThrown",
          params: {
            message: e,
            stack: t.slice(2).join("\n")
          }
        }))
      }))
    }));
    var ye = n(9350),
      me = n.n(ye),
      be = n(708),
      we = n.n(be);
    let Oe, _e, Pe;

    function Ae(e) {
      const t = Oe.getCurrentPagesByDomain();
      for (const n of t)
        if (n.__wxWebviewId__ === e) return n;
      throw Error("page destroyed")
    }
    ee((e => {
      Oe = e.__appServiceEngine__
    })), ee((e => {
      _e = e.exparser, Pe = e.__virtualDOM__
    }));
    const je = {
      "App.callWxMethod": function (e) {
        const {
          method: t
        } = e;
        let {
          args: n
        } = e;
        return new Promise(((e, r) => {
          if (!wx[t]) return r(Error(`wx.${t} not exists`));
          h(t) ? e({
            result: wx[t].apply(wx, n)
          }) : (n = n[0] || {}, wx[t](o()(o()({}, n), {}, {
            success(t) {
              e({
                result: t
              })
            },
            fail(e) {
              r(Error(e.errMsg.replace(`${t}:fail `, "")))
            }
          })))
        }))
      },
      "App.callFunction": function (e) {
        return ne.apply(this, arguments)
      },
      "App.getCurrentPage": function () {
        return re.apply(this, arguments)
      },
      "App.getPageStack": oe,
      "App.mockWxMethod": function (e) {
        return se.apply(this, arguments)
      },
      "App.enableLog": function () {
        return de.apply(this, arguments)
      },
      "App.addBinding": function (e) {
        return ve.apply(this, arguments)
      },
      "App.exit": function () {
        return he.apply(this, arguments)
      },
      "App.captureScreenshot": function () {
        return xe.apply(this, arguments)
      },
      "Page.setData": function (e) {
        const {
          pageId: t,
          data: n
        } = e, r = Ae(t);
        return new Promise((e => {
          r.setData(n, (() => {
            e()
          }))
        }))
      },
      "Page.getData": function (e) {
        const {
          pageId: t,
          path: n
        } = e, r = Ae(t);
        let o = Object.assign({}, r.data);
        return delete o.__webviewId__, n && (o = we()(o, n)), {
          data: o
        }
      },
      "Page.callMethod": function (e) {
        const {
          method: t,
          args: n
        } = e, r = Ae(e.pageId);
        return new Promise(((e, o) => {
          if (!r[t]) return o(Error(`page.${t} not exists`));
          const i = r[t].apply(r, n);
          me()(i) ? i.then((t => {
            e({
              result: t
            })
          }), o) : e({
            result: i
          })
        }))
      },
      "Element.callMethod": function (e) {
        const {
          nodeId: t,
          method: n,
          args: r,
          pageId: o
        } = e, i = Pe.getNodeById(t, o);
        if (i) return new Promise(((e, t) => {
          const o = _e.Element.getMethodCaller(i);
          if (!o[n]) return t(Error(`component.${n} not exists`));
          const u = _e.safeCallback("Event Handler", o[n], o, r, i);
          me()(u) ? u.then((t => {
            e({
              result: t
            })
          }), t) : e({
            result: u
          })
        }))
      },
      "Element.getData": function (e) {
        const {
          nodeId: t,
          pageId: n,
          path: r
        } = e;
        let o = Pe.getNodeById(t, n).data;
        return r && (o = we()(o, r)), {
          data: o
        }
      },
      "Element.setData": function (e) {
        const {
          nodeId: t,
          pageId: n,
          data: r
        } = e;
        Pe.getNodeById(t, n).setData(r)
      },
      "Element.callContextMethod": function (e) {
        const {
          nodeId: t,
          videoId: n,
          pageId: r,
          method: o,
          args: i
        } = e;
        let u, a;
        if (u = t ? Pe.getNodeById(t, r) : Ae(r), !n) throw Error("id is not provided");
        return a = pe("createVideoContext")(n, u), {
          result: a[o].apply(a, i)
        }
      }
    };
    var ke = n(8090),
      Ce = n.n(ke);

    function Me() {
      return (Me = t()((function* (e, t) {
        if (je[e]) return (yield je[e](t)) || {};
        throw Error(`appservice ${e} unimplemented`)
      }))).apply(this, arguments)
    }
    G.onReady(t()((function* () {
      G.on("onAutoMessageReceive", function () {
        var e = t()((function* (e) {
          const {
            method: t,
            params: n,
            id: r
          } = e, o = {
            id: r
          };
          if (A()(n.pageId) || je[t]) try {
            o.result = yield function (e, t) {
              return Me.apply(this, arguments)
            }(t, n)
          } catch (e) {
            o.error = {
              message: e.message
            }
          } else try {
            return Ae(n.pageId), void G.publish("sendAutoMessage", e, [n.pageId])
          } catch (e) {
            o.error = {
              message: e.message
            }
          }
          G.invoke("sendAutoMessage", o)
        }));
        return function (t) {
          return e.apply(this, arguments)
        }
      }()), G.subscribe("sendAutoMessage", (e => {
        G.invoke("sendAutoMessage", e)
      })), yield Q()((() => n.g.getCurrentPages && n.g.getCurrentPages().length > 0), 0, 50), yield Ce()(1e3), G.invoke("sendAutoMessage", {
        method: "App.initialized",
        params: {}
      })
    })))
  })()
})();