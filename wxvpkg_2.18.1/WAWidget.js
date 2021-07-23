var __wxLibrary = {
  fileName: 'WAWidget.js',
  envType: 'Widget',
  contextType: 'others',
  execStart: Date.now()
};
var __WAWidgetStartTime__ = Date.now();
(function (global) {
  ;
  var setTimeout = global.setTimeout;
  var setInterval = global.setInterval;
  var clearTimeout = global.clearTimeout;
  var clearInterval = global.clearInterval;;
  var __libVersionInfo__ = {
    "updateTime": "2021.7.21 10:19:55",
    "version": "2.18.1",
    "features": {
      "pruneWxConfigByPage": true,
      "injectGameContextPlugin": true,
      "lazyCodeLoading2": true,
      "injectAppSeparatedPlugin": true,
      "nativeTrans": true,
      "gameLive": true
    }
  };;
  var __Function__ = global.Function;
  var Function = __Function__;
  var regeneratorRuntime, BabelRuntimeHelpers = {};
  (() => {
    var e = {
        1964: (e, t, r) => {
          "use strict";

          function n(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function (e) {
              i[e] = n[e]
            })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce((function (r, n) {
              return n(e, t, r) || r
            }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
          }
          r.r(t), r.d(t, {
            default: () => n
          })
        },
        6470: (e, t, r) => {
          "use strict";

          function n(e, t, r, n, o, i, a) {
            try {
              var s = e[i](a),
                c = s.value
            } catch (e) {
              return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, o)
          }

          function o(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise((function (o, i) {
                var a = e.apply(t, r);

                function s(e) {
                  n(a, o, i, s, c, "next", e)
                }

                function c(e) {
                  n(a, o, i, s, c, "throw", e)
                }
                s(void 0)
              }))
            }
          }
          r.r(t), r.d(t, {
            default: () => o
          })
        },
        1217: (e, t, r) => {
          "use strict";

          function n(e, t, r, n) {
            r && Object.defineProperty(e, t, {
              enumerable: r.enumerable,
              configurable: r.configurable,
              writable: r.writable,
              value: r.initializer ? r.initializer.call(n) : void 0
            })
          }
          r.r(t), r.d(t, {
            default: () => n
          })
        },
        6647: (e, t, r) => {
          "use strict";

          function n(e, t) {
            throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")
          }
          r.r(t), r.d(t, {
            default: () => n
          })
        },
        1466: (e, t, r) => {
          "use strict";

          function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r, e
          }

          function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), r.push.apply(r, n)
            }
            return r
          }

          function i(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? o(Object(r), !0).forEach((function (t) {
                n(e, t, r[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }))
            }
            return e
          }
          r.r(t), r.d(t, {
            default: () => i
          })
        },
        5238: (e, t, r) => {
          "use strict";

          function n(e, t) {
            if (null == e) return {};
            var r, n, o = function (e, t) {
              if (null == e) return {};
              var r, n, o = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }
          r.r(t), r.d(t, {
            default: () => n
          })
        },
        929: (e, t, r) => {
          "use strict";

          function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
          r.r(t), r.d(t, {
            default: () => n
          })
        },
        5551: (e, t, r) => {
          var n = {
            "./applyDecoratedDescriptor": 1964,
            "./asyncToGenerator": 6470,
            "./initializerDefineProperty": 1217,
            "./initializerWarningHelper": 6647,
            "./objectSpread2": 1466,
            "./objectWithoutProperties": 5238,
            "./typeof": 929
          };

          function o(e) {
            var t = i(e);
            return r(t)
          }

          function i(e) {
            if (!r.o(n, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
          }
          o.keys = function () {
            return Object.keys(n)
          }, o.resolve = i, e.exports = o, o.id = 5551
        },
        5396: e => {
          var t = function (e) {
            "use strict";
            var t, r = Object.prototype,
              n = r.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              i = o.iterator || "@@iterator",
              a = o.asyncIterator || "@@asyncIterator",
              s = o.toStringTag || "@@toStringTag";

            function c(e, t, r) {
              return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t]
            }
            try {
              c({}, "")
            } catch (e) {
              c = function (e, t, r) {
                return e[t] = r
              }
            }

            function u(e, t, r, n) {
              var o = t && t.prototype instanceof y ? t : y,
                i = Object.create(o.prototype),
                a = new E(n || []);
              return i._invoke = function (e, t, r) {
                var n = l;
                return function (o, i) {
                  if (n === d) throw new Error("Generator is already running");
                  if (n === h) {
                    if ("throw" === o) throw i;
                    return C()
                  }
                  for (r.method = o, r.arg = i;;) {
                    var a = r.delegate;
                    if (a) {
                      var s = k(a, r);
                      if (s) {
                        if (s === g) continue;
                        return s
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === l) throw n = h, r.arg;
                      r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = d;
                    var c = f(e, t, r);
                    if ("normal" === c.type) {
                      if (n = r.done ? h : p, c.arg === g) continue;
                      return {
                        value: c.arg,
                        done: r.done
                      }
                    }
                    "throw" === c.type && (n = h, r.method = "throw", r.arg = c.arg)
                  }
                }
              }(e, r, a), i
            }

            function f(e, t, r) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, r)
                }
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                }
              }
            }
            e.wrap = u;
            var l = "suspendedStart",
              p = "suspendedYield",
              d = "executing",
              h = "completed",
              g = {};

            function y() {}

            function v() {}

            function b() {}
            var A = {};
            A[i] = function () {
              return this
            };
            var m = Object.getPrototypeOf,
              _ = m && m(m(O([])));
            _ && _ !== r && n.call(_, i) && (A = _);
            var w = b.prototype = y.prototype = Object.create(A);

            function x(e) {
              ["next", "throw", "return"].forEach((function (t) {
                c(e, t, (function (e) {
                  return this._invoke(t, e)
                }))
              }))
            }

            function S(e, t) {
              function r(o, i, a, s) {
                var c = f(e[o], e, i);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    l = u.value;
                  return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function (e) {
                    r("next", e, a, s)
                  }), (function (e) {
                    r("throw", e, a, s)
                  })) : t.resolve(l).then((function (e) {
                    u.value = e, a(u)
                  }), (function (e) {
                    return r("throw", e, a, s)
                  }))
                }
                s(c.arg)
              }
              var o;
              this._invoke = function (e, n) {
                function i() {
                  return new t((function (t, o) {
                    r(e, n, t, o)
                  }))
                }
                return o = o ? o.then(i, i) : i()
              }
            }

            function k(e, r) {
              var n = e.iterator[r.method];
              if (n === t) {
                if (r.delegate = null, "throw" === r.method) {
                  if (e.iterator.return && (r.method = "return", r.arg = t, k(e, r), "throw" === r.method)) return g;
                  r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
              }
              var o = f(n, e.iterator, r.arg);
              if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
              var i = o.arg;
              return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
            }

            function I(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function T(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
            }

            function E(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(I, this), this.reset(!0)
            }

            function O(e) {
              if (e) {
                var r = e[i];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var o = -1,
                    a = function r() {
                      for (; ++o < e.length;)
                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                      return r.value = t, r.done = !0, r
                    };
                  return a.next = a
                }
              }
              return {
                next: C
              }
            }

            function C() {
              return {
                value: t,
                done: !0
              }
            }
            return v.prototype = w.constructor = b, b.constructor = v, v.displayName = c(b, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, c(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
            }, e.awrap = function (e) {
              return {
                __await: e
              }
            }, x(S.prototype), S.prototype[a] = function () {
              return this
            }, e.AsyncIterator = S, e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(u(t, r, n, o), i);
              return e.isGeneratorFunction(r) ? a : a.next().then((function (e) {
                return e.done ? e.value : a.next()
              }))
            }, x(w), c(w, s, "Generator"), w[i] = function () {
              return this
            }, w.toString = function () {
              return "[object Generator]"
            }, e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return t.reverse(),
                function r() {
                  for (; t.length;) {
                    var n = t.pop();
                    if (n in e) return r.value = n, r.done = !1, r
                  }
                  return r.done = !0, r
                }
            }, e.values = O, E.prototype = {
              constructor: E,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                  for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;

                function o(n, o) {
                  return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var c = n.call(a, "catchLoc"),
                      u = n.call(a, "finallyLoc");
                    if (c && u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    } else if (c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                    } else {
                      if (!u) throw new Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                  }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), g
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      T(r)
                    }
                    return o
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function (e, r, n) {
                return this.delegate = {
                  iterator: O(e),
                  resultName: r,
                  nextLoc: n
                }, "next" === this.method && (this.arg = t), g
              }
            }, e
          }(e.exports);
          try {
            regeneratorRuntime = t
          } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
          }
        },
        7162: (e, t, r) => {
          r(5396)
        },
        9401: (e, t, r) => {
          "use strict";
          r.r(t);
          r(7162);
          const n = r(5551);
          n.keys().forEach((e => {
            BabelRuntimeHelpers[e.substr(2)] = n(e)
          }))
        },
        5482: (e, t, r) => {
          "use strict";
          r.r(t);
          r(634), r(6882), r(7072), r(4870), r(5735), r(3108), r(9731), r(9992), r(3430), r(7694), r(3985), r(5388), r(2994), r(3498), r(9509), r(7846), r(6635), r(5883), r(1804), r(2775), r(2586), r(3045), r(7890), r(3439), r(1515), r(7368), r(7950), r(103), r(977), r(5734), r(5940), r(8319), r(5794), r(8827), r(1715), r(1382), r(1982), r(3229), r(4074), r(4696), r(3675), r(6920), r(3161), r(723), r(6618), r(9527), r(315), r(6886), r(4962), r(6481), r(8990), r(884), r(5431), r(5704);
          ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach((e => {
            const t = globalThis[e];
            t && t.name !== e && Object.defineProperty(t, "name", {
              value: e
            })
          }))
        },
        305: (e, t, r) => {
          var n = r(816),
            o = r(3718),
            i = r(6541),
            a = r(5353),
            s = i.data,
            c = i.normalize,
            u = "USE_FUNCTION_CONSTRUCTOR",
            f = "AsyncIteratorPrototype",
            l = function (e, t) {
              if (o(e))
                for (var r = 0; r < e.length; r++) s[c(e[r])] = t
            };
          e.exports = function (e) {
            "object" == typeof e && (l(e.useNative, i.NATIVE), l(e.usePolyfill, i.POLYFILL), l(e.useFeatureDetection, null), n(e, u) && (a.USE_FUNCTION_CONSTRUCTOR = !!e.USE_FUNCTION_CONSTRUCTOR), n(e, f) && (a.USE_FUNCTION_CONSTRUCTOR = e.AsyncIteratorPrototype))
          }
        },
        3819: e => {
          e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
          }
        },
        8505: (e, t, r) => {
          var n = r(5052);
          e.exports = function (e) {
            if (!n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
          }
        },
        9736: (e, t, r) => {
          var n = r(95),
            o = r(2391),
            i = r(1787),
            a = n("unscopables"),
            s = Array.prototype;
          null == s[a] && i.f(s, a, {
            configurable: !0,
            value: o(null)
          }), e.exports = function (e) {
            s[a][e] = !0
          }
        },
        6637: (e, t, r) => {
          "use strict";
          var n = r(966).charAt;
          e.exports = function (e, t, r) {
            return t + (r ? n(e, t).length : 1)
          }
        },
        7728: e => {
          e.exports = function (e, t, r) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return e
          }
        },
        1176: (e, t, r) => {
          var n = r(5052);
          e.exports = function (e) {
            if (!n(e)) throw TypeError(String(e) + " is not an object");
            return e
          }
        },
        3339: e => {
          e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        },
        9918: (e, t, r) => {
          "use strict";
          var n, o = r(3339),
            i = r(7400),
            a = r(9859),
            s = r(5052),
            c = r(816),
            u = r(1589),
            f = r(5762),
            l = r(7487),
            p = r(1787).f,
            d = r(7567),
            h = r(6540),
            g = r(95),
            y = r(1441),
            v = a.Int8Array,
            b = v && v.prototype,
            A = a.Uint8ClampedArray,
            m = A && A.prototype,
            _ = v && d(v),
            w = b && d(b),
            x = Object.prototype,
            S = x.isPrototypeOf,
            k = g("toStringTag"),
            I = y("TYPED_ARRAY_TAG"),
            T = o && !!h && "Opera" !== u(a.opera),
            E = !1,
            O = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8
            },
            C = {
              BigInt64Array: 8,
              BigUint64Array: 8
            },
            P = function (e) {
              if (!s(e)) return !1;
              var t = u(e);
              return c(O, t) || c(C, t)
            };
          for (n in O) a[n] || (T = !1);
          if ((!T || "function" != typeof _ || _ === Function.prototype) && (_ = function () {
              throw TypeError("Incorrect invocation")
            }, T))
            for (n in O) a[n] && h(a[n], _);
          if ((!T || !w || w === x) && (w = _.prototype, T))
            for (n in O) a[n] && h(a[n].prototype, w);
          if (T && d(m) !== w && h(m, w), i && !c(w, k))
            for (n in E = !0, p(w, k, {
                get: function () {
                  return s(this) ? this[I] : void 0
                }
              }), O) a[n] && f(a[n], I, n);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: T,
            TYPED_ARRAY_TAG: E && I,
            aTypedArray: function (e) {
              if (P(e)) return e;
              throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (e) {
              if (h) {
                if (S.call(_, e)) return e
              } else
                for (var t in O)
                  if (c(O, n)) {
                    var r = a[t];
                    if (r && (e === r || S.call(r, e))) return e
                  } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (e, t, r) {
              if (i) {
                if (r)
                  for (var n in O) {
                    var o = a[n];
                    if (o && c(o.prototype, e)) try {
                      delete o.prototype[e]
                    } catch (e) {}
                  }
                w[e] && !r || l(w, e, r ? t : T && b[e] || t)
              }
            },
            exportTypedArrayStaticMethod: function (e, t, r) {
              var n, o;
              if (i) {
                if (h) {
                  if (r)
                    for (n in O)
                      if ((o = a[n]) && c(o, e)) try {
                        delete o[e]
                      } catch (e) {}
                  if (_[e] && !r) return;
                  try {
                    return l(_, e, r ? t : T && _[e] || t)
                  } catch (e) {}
                }
                for (n in O) !(o = a[n]) || o[e] && !r || l(o, e, t)
              }
            },
            isView: function (e) {
              if (!s(e)) return !1;
              var t = u(e);
              return "DataView" === t || c(O, t) || c(C, t)
            },
            isTypedArray: P,
            TypedArray: _,
            TypedArrayPrototype: w
          }
        },
        3816: (e, t, r) => {
          "use strict";
          var n = r(9859),
            o = r(7400),
            i = r(3339),
            a = r(5762),
            s = r(8787),
            c = r(4229),
            u = r(7728),
            f = r(6051),
            l = r(4237),
            p = r(7331),
            d = r(6201),
            h = r(7567),
            g = r(6540),
            y = r(8151).f,
            v = r(1787).f,
            b = r(7065),
            A = r(4555),
            m = r(6407),
            _ = m.get,
            w = m.set,
            x = "ArrayBuffer",
            S = "DataView",
            k = "Wrong index",
            I = n.ArrayBuffer,
            T = I,
            E = n.DataView,
            O = E && E.prototype,
            C = Object.prototype,
            P = n.RangeError,
            j = d.pack,
            R = d.unpack,
            M = function (e) {
              return [255 & e]
            },
            B = function (e) {
              return [255 & e, e >> 8 & 255]
            },
            D = function (e) {
              return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            },
            L = function (e) {
              return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            },
            W = function (e) {
              return j(e, 23, 4)
            },
            N = function (e) {
              return j(e, 52, 8)
            },
            F = function (e, t) {
              v(e.prototype, t, {
                get: function () {
                  return _(this)[t]
                }
              })
            },
            G = function (e, t, r, n) {
              var o = p(r),
                i = _(e);
              if (o + t > i.byteLength) throw P(k);
              var a = _(i.buffer).bytes,
                s = o + i.byteOffset,
                c = a.slice(s, s + t);
              return n ? c : c.reverse()
            },
            U = function (e, t, r, n, o, i) {
              var a = p(r),
                s = _(e);
              if (a + t > s.byteLength) throw P(k);
              for (var c = _(s.buffer).bytes, u = a + s.byteOffset, f = n(+o), l = 0; l < t; l++) c[u + l] = f[i ? l : t - l - 1]
            };
          if (i) {
            if (!c((function () {
                I(1)
              })) || !c((function () {
                new I(-1)
              })) || c((function () {
                return new I, new I(1.5), new I(NaN), I.name != x
              }))) {
              for (var V, $ = (T = function (e) {
                  return u(this, T), new I(p(e))
                }).prototype = I.prototype, J = y(I), Q = 0; J.length > Q;)(V = J[Q++]) in T || a(T, V, I[V]);
              $.constructor = T
            }
            g && h(O) !== C && g(O, C);
            var Y = new E(new T(2)),
              Z = O.setInt8;
            Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || s(O, {
              setInt8: function (e, t) {
                Z.call(this, e, t << 24 >> 24)
              },
              setUint8: function (e, t) {
                Z.call(this, e, t << 24 >> 24)
              }
            }, {
              unsafe: !0
            })
          } else T = function (e) {
            u(this, T, x);
            var t = p(e);
            w(this, {
              bytes: b.call(new Array(t), 0),
              byteLength: t
            }), o || (this.byteLength = t)
          }, E = function (e, t, r) {
            u(this, E, S), u(e, T, S);
            var n = _(e).byteLength,
              i = f(t);
            if (i < 0 || i > n) throw P("Wrong offset");
            if (i + (r = void 0 === r ? n - i : l(r)) > n) throw P("Wrong length");
            w(this, {
              buffer: e,
              byteLength: r,
              byteOffset: i
            }), o || (this.buffer = e, this.byteLength = r, this.byteOffset = i)
          }, o && (F(T, "byteLength"), F(E, "buffer"), F(E, "byteLength"), F(E, "byteOffset")), s(E.prototype, {
            getInt8: function (e) {
              return G(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function (e) {
              return G(this, 1, e)[0]
            },
            getInt16: function (e) {
              var t = G(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function (e) {
              var t = G(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return t[1] << 8 | t[0]
            },
            getInt32: function (e) {
              return L(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function (e) {
              return L(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function (e) {
              return R(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function (e) {
              return R(G(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function (e, t) {
              U(this, 1, e, M, t)
            },
            setUint8: function (e, t) {
              U(this, 1, e, M, t)
            },
            setInt16: function (e, t) {
              U(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function (e, t) {
              U(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function (e, t) {
              U(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function (e, t) {
              U(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function (e, t) {
              U(this, 4, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function (e, t) {
              U(this, 8, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
            }
          });
          A(T, x), A(E, S), e.exports = {
            ArrayBuffer: T,
            DataView: E
          }
        },
        7065: (e, t, r) => {
          "use strict";
          var n = r(2991),
            o = r(3231),
            i = r(4237);
          e.exports = function (e) {
            for (var t = n(this), r = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, r), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? r : o(c, r); u > s;) t[s++] = e;
            return t
          }
        },
        9540: (e, t, r) => {
          var n = r(905),
            o = r(4237),
            i = r(3231),
            a = function (e) {
              return function (t, r, a) {
                var s, c = n(t),
                  u = o(c.length),
                  f = i(a, u);
                if (e && r != r) {
                  for (; u > f;)
                    if ((s = c[f++]) != s) return !0
                } else
                  for (; u > f; f++)
                    if ((e || f in c) && c[f] === r) return e || f || 0;
                return !e && -1
              }
            };
          e.exports = {
            includes: a(!0),
            indexOf: a(!1)
          }
        },
        9996: (e, t, r) => {
          var n = r(7636),
            o = r(9337),
            i = r(2991),
            a = r(4237),
            s = r(7501),
            c = [].push,
            u = function (e) {
              var t = 1 == e,
                r = 2 == e,
                u = 3 == e,
                f = 4 == e,
                l = 6 == e,
                p = 7 == e,
                d = 5 == e || l;
              return function (h, g, y, v) {
                for (var b, A, m = i(h), _ = o(m), w = n(g, y, 3), x = a(_.length), S = 0, k = v || s, I = t ? k(h, x) : r || p ? k(h, 0) : void 0; x > S; S++)
                  if ((d || S in _) && (A = w(b = _[S], S, m), e))
                    if (t) I[S] = A;
                    else if (A) switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return b;
                  case 6:
                    return S;
                  case 2:
                    c.call(I, b)
                } else switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    c.call(I, b)
                }
                return l ? -1 : u || f ? f : I
              }
            };
          e.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6),
            filterOut: u(7)
          }
        },
        6038: (e, t, r) => {
          "use strict";
          var n = r(4229);
          e.exports = function (e, t) {
            var r = [][e];
            return !!r && n((function () {
              r.call(null, t || function () {
                throw 1
              }, 1)
            }))
          }
        },
        3143: (e, t, r) => {
          var n = r(3819),
            o = r(2991),
            i = r(9337),
            a = r(4237),
            s = function (e) {
              return function (t, r, s, c) {
                n(r);
                var u = o(t),
                  f = i(u),
                  l = a(u.length),
                  p = e ? l - 1 : 0,
                  d = e ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (p in f) {
                      c = f[p], p += d;
                      break
                    }
                    if (p += d, e ? p < 0 : l <= p) throw TypeError("Reduce of empty array with no initial value")
                  }
                for (; e ? p >= 0 : l > p; p += d) p in f && (c = r(c, f[p], p, u));
                return c
              }
            };
          e.exports = {
            left: s(!1),
            right: s(!0)
          }
        },
        3867: e => {
          var t = Math.floor,
            r = function (e, i) {
              var a = e.length,
                s = t(a / 2);
              return a < 8 ? n(e, i) : o(r(e.slice(0, s), i), r(e.slice(s), i), i)
            },
            n = function (e, t) {
              for (var r, n, o = e.length, i = 1; i < o;) {
                for (n = i, r = e[i]; n && t(e[n - 1], r) > 0;) e[n] = e[--n];
                n !== i++ && (e[n] = r)
              }
              return e
            },
            o = function (e, t, r) {
              for (var n = e.length, o = t.length, i = 0, a = 0, s = []; i < n || a < o;) i < n && a < o ? s.push(r(e[i], t[a]) <= 0 ? e[i++] : t[a++]) : s.push(i < n ? e[i++] : t[a++]);
              return s
            };
          e.exports = r
        },
        7501: (e, t, r) => {
          var n = r(5052),
            o = r(3718),
            i = r(95)("species");
          e.exports = function (e, t) {
            var r;
            return o(e) && ("function" != typeof (r = e.constructor) || r !== Array && !o(r.prototype) ? n(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === t ? 0 : t)
          }
        },
        4575: (e, t, r) => {
          var n = r(95)("iterator"),
            o = !1;
          try {
            var i = 0,
              a = {
                next: function () {
                  return {
                    done: !!i++
                  }
                },
                return: function () {
                  o = !0
                }
              };
            a[n] = function () {
              return this
            }, Array.from(a, (function () {
              throw 2
            }))
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !o) return !1;
            var r = !1;
            try {
              var i = {};
              i[n] = function () {
                return {
                  next: function () {
                    return {
                      done: r = !0
                    }
                  }
                }
              }, e(i)
            } catch (e) {}
            return r
          }
        },
        7079: e => {
          var t = {}.toString;
          e.exports = function (e) {
            return t.call(e).slice(8, -1)
          }
        },
        1589: (e, t, r) => {
          var n = r(1601),
            o = r(7079),
            i = r(95)("toStringTag"),
            a = "Arguments" == o(function () {
              return arguments
            }());
          e.exports = n ? o : function (e) {
            var t, r, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            }(t = Object(e), i)) ? r : a ? o(t) : "Object" == (n = o(t)) && "function" == typeof t.callee ? "Arguments" : n
          }
        },
        7081: (e, t, r) => {
          var n = r(816),
            o = r(4826),
            i = r(7933),
            a = r(1787);
          e.exports = function (e, t) {
            for (var r = o(t), s = a.f, c = i.f, u = 0; u < r.length; u++) {
              var f = r[u];
              n(e, f) || s(e, f, c(t, f))
            }
          }
        },
        7528: (e, t, r) => {
          var n = r(4229);
          e.exports = !n((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
          }))
        },
        3723: (e, t, r) => {
          "use strict";
          var n = r(693).IteratorPrototype,
            o = r(2391),
            i = r(5358),
            a = r(4555),
            s = r(5495),
            c = function () {
              return this
            };
          e.exports = function (e, t, r) {
            var u = t + " Iterator";
            return e.prototype = o(n, {
              next: i(1, r)
            }), a(e, u, !1, !0), s[u] = c, e
          }
        },
        5762: (e, t, r) => {
          var n = r(7400),
            o = r(1787),
            i = r(5358);
          e.exports = n ? function (e, t, r) {
            return o.f(e, t, i(1, r))
          } : function (e, t, r) {
            return e[t] = r, e
          }
        },
        5358: e => {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            }
          }
        },
        2324: (e, t, r) => {
          "use strict";
          var n = r(2066),
            o = r(1787),
            i = r(5358);
          e.exports = function (e, t, r) {
            var a = n(t);
            a in e ? o.f(e, a, i(0, r)) : e[a] = r
          }
        },
        7675: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3723),
            i = r(7567),
            a = r(6540),
            s = r(4555),
            c = r(5762),
            u = r(7487),
            f = r(95),
            l = r(4231),
            p = r(5495),
            d = r(693),
            h = d.IteratorPrototype,
            g = d.BUGGY_SAFARI_ITERATORS,
            y = f("iterator"),
            v = "keys",
            b = "values",
            A = "entries",
            m = function () {
              return this
            };
          e.exports = function (e, t, r, f, d, _, w) {
            o(r, t, f);
            var x, S, k, I = function (e) {
                if (e === d && P) return P;
                if (!g && e in O) return O[e];
                switch (e) {
                  case v:
                  case b:
                  case A:
                    return function () {
                      return new r(this, e)
                    }
                }
                return function () {
                  return new r(this)
                }
              },
              T = t + " Iterator",
              E = !1,
              O = e.prototype,
              C = O[y] || O["@@iterator"] || d && O[d],
              P = !g && C || I(d),
              j = "Array" == t && O.entries || C;
            if (j && (x = i(j.call(new e)), h !== Object.prototype && x.next && (l || i(x) === h || (a ? a(x, h) : "function" != typeof x[y] && c(x, y, m)), s(x, T, !0, !0), l && (p[T] = m))), d == b && C && C.name !== b && (E = !0, P = function () {
                return C.call(this)
              }), l && !w || O[y] === P || c(O, y, P), p[t] = P, d)
              if (S = {
                  values: I(b),
                  keys: _ ? P : I(v),
                  entries: I(A)
                }, w)
                for (k in S)(g || E || !(k in O)) && u(O, k, S[k]);
              else n({
                target: t,
                proto: !0,
                forced: g || E
              }, S);
            return S
          }
        },
        8423: (e, t, r) => {
          var n = r(9276),
            o = r(816),
            i = r(5391),
            a = r(1787).f;
          e.exports = function (e) {
            var t = n.Symbol || (n.Symbol = {});
            o(t, e) || a(t, e, {
              value: i.f(e)
            })
          }
        },
        7400: (e, t, r) => {
          var n = r(4229);
          e.exports = !n((function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function () {
                return 7
              }
            })[1]
          }))
        },
        2635: (e, t, r) => {
          var n = r(9859),
            o = r(5052),
            i = n.document,
            a = o(i) && o(i.createElement);
          e.exports = function (e) {
            return a ? i.createElement(e) : {}
          }
        },
        5694: e => {
          e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          }
        },
        2671: (e, t, r) => {
          var n = r(598).match(/firefox\/(\d+)/i);
          e.exports = !!n && +n[1]
        },
        8639: e => {
          e.exports = "object" == typeof window
        },
        8506: (e, t, r) => {
          var n = r(598);
          e.exports = /MSIE|Trident/.test(n)
        },
        2023: (e, t, r) => {
          var n = r(598);
          e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(n)
        },
        8801: (e, t, r) => {
          var n = r(7079),
            o = r(9859);
          e.exports = "process" == n(o.process)
        },
        263: (e, t, r) => {
          var n = r(598);
          e.exports = /web0s(?!.*chrome)/i.test(n)
        },
        598: (e, t, r) => {
          var n = r(1333);
          e.exports = n("navigator", "userAgent") || ""
        },
        6358: (e, t, r) => {
          var n, o, i = r(9859),
            a = r(598),
            s = i.process,
            c = s && s.versions,
            u = c && c.v8;
          u ? o = (n = u.split("."))[0] < 4 ? 1 : n[0] + n[1] : a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = n[1]), e.exports = o && +o
        },
        9811: (e, t, r) => {
          var n = r(598).match(/AppleWebKit\/(\d+)\./);
          e.exports = !!n && +n[1]
        },
        3837: e => {
          e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        3103: (e, t, r) => {
          var n = r(9859),
            o = r(7933).f,
            i = r(5762),
            a = r(7487),
            s = r(2079),
            c = r(7081),
            u = r(6541);
          e.exports = function (e, t) {
            var r, f, l, p, d, h = e.target,
              g = e.global,
              y = e.stat;
            if (r = g ? n : y ? n[h] || s(h, {}) : (n[h] || {}).prototype)
              for (f in t) {
                if (p = t[f], l = e.noTargetGet ? (d = o(r, f)) && d.value : r[f], !u(g ? f : h + (y ? "." : "#") + f, e.forced) && void 0 !== l) {
                  if (typeof p == typeof l) continue;
                  c(p, l)
                }(e.sham || l && l.sham) && i(p, "sham", !0), a(r, f, p, e)
              }
          }
        },
        4229: e => {
          e.exports = function (e) {
            try {
              return !!e()
            } catch (e) {
              return !0
            }
          }
        },
        4954: (e, t, r) => {
          "use strict";
          r(7950);
          var n = r(7487),
            o = r(3466),
            i = r(4229),
            a = r(95),
            s = r(5762),
            c = a("species"),
            u = RegExp.prototype;
          e.exports = function (e, t, r, f) {
            var l = a(e),
              p = !i((function () {
                var t = {};
                return t[l] = function () {
                  return 7
                }, 7 != "" [e](t)
              })),
              d = p && !i((function () {
                var t = !1,
                  r = /a/;
                return "split" === e && ((r = {}).constructor = {}, r.constructor[c] = function () {
                  return r
                }, r.flags = "", r[l] = /./ [l]), r.exec = function () {
                  return t = !0, null
                }, r[l](""), !t
              }));
            if (!p || !d || r) {
              var h = /./ [l],
                g = t(l, "" [e], (function (e, t, r, n, i) {
                  var a = t.exec;
                  return a === o || a === u.exec ? p && !i ? {
                    done: !0,
                    value: h.call(t, r, n)
                  } : {
                    done: !0,
                    value: e.call(r, t, n)
                  } : {
                    done: !1
                  }
                }));
              n(String.prototype, e, g[0]), n(u, l, g[1])
            }
            f && s(u[l], "sham", !0)
          }
        },
        4990: (e, t, r) => {
          "use strict";
          var n = r(3718),
            o = r(4237),
            i = r(7636),
            a = function (e, t, r, s, c, u, f, l) {
              for (var p, d = c, h = 0, g = !!f && i(f, l, 3); h < s;) {
                if (h in r) {
                  if (p = g ? g(r[h], h, t) : r[h], u > 0 && n(p)) d = a(e, t, p, o(p.length), d, u - 1) - 1;
                  else {
                    if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                    e[d] = p
                  }
                  d++
                }
                h++
              }
              return d
            };
          e.exports = a
        },
        7636: (e, t, r) => {
          var n = r(3819);
          e.exports = function (e, t, r) {
            if (n(e), void 0 === t) return e;
            switch (r) {
              case 0:
                return function () {
                  return e.call(t)
                };
              case 1:
                return function (r) {
                  return e.call(t, r)
                };
              case 2:
                return function (r, n) {
                  return e.call(t, r, n)
                };
              case 3:
                return function (r, n, o) {
                  return e.call(t, r, n, o)
                }
            }
            return function () {
              return e.apply(t, arguments)
            }
          }
        },
        1333: (e, t, r) => {
          var n = r(9276),
            o = r(9859),
            i = function (e) {
              return "function" == typeof e ? e : void 0
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? i(n[e]) || i(o[e]) : n[e] && n[e][t] || o[e] && o[e][t]
          }
        },
        8830: (e, t, r) => {
          var n = r(1589),
            o = r(5495),
            i = r(95)("iterator");
          e.exports = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[n(e)]
          }
        },
        17: (e, t, r) => {
          var n = r(2991),
            o = Math.floor,
            i = "".replace,
            a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            s = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, r, c, u, f) {
            var l = r + e.length,
              p = c.length,
              d = s;
            return void 0 !== u && (u = n(u), d = a), i.call(f, d, (function (n, i) {
              var a;
              switch (i.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return t.slice(0, r);
                case "'":
                  return t.slice(l);
                case "<":
                  a = u[i.slice(1, -1)];
                  break;
                default:
                  var s = +i;
                  if (0 === s) return n;
                  if (s > p) {
                    var f = o(s / 10);
                    return 0 === f ? n : f <= p ? void 0 === c[f - 1] ? i.charAt(1) : c[f - 1] + i.charAt(1) : n
                  }
                  a = c[s - 1]
              }
              return void 0 === a ? "" : a
            }))
          }
        },
        9859: (e, t, r) => {
          var n = function (e) {
            return e && e.Math == Math && e
          };
          e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function () {
            return this
          }() || Function("return this")()
        },
        816: (e, t, r) => {
          var n = r(2991),
            o = {}.hasOwnProperty;
          e.exports = Object.hasOwn || function (e, t) {
            return o.call(n(e), t)
          }
        },
        5977: e => {
          e.exports = {}
        },
        4665: (e, t, r) => {
          var n = r(9859);
          e.exports = function (e, t) {
            var r = n.console;
            r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t))
          }
        },
        3777: (e, t, r) => {
          var n = r(1333);
          e.exports = n("document", "documentElement")
        },
        4394: (e, t, r) => {
          var n = r(7400),
            o = r(4229),
            i = r(2635);
          e.exports = !n && !o((function () {
            return 7 != Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          }))
        },
        6201: e => {
          var t = Math.abs,
            r = Math.pow,
            n = Math.floor,
            o = Math.log,
            i = Math.LN2;
          e.exports = {
            pack: function (e, a, s) {
              var c, u, f, l = new Array(s),
                p = 8 * s - a - 1,
                d = (1 << p) - 1,
                h = d >> 1,
                g = 23 === a ? r(2, -24) - r(2, -77) : 0,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                v = 0;
              for ((e = t(e)) != e || e === 1 / 0 ? (u = e != e ? 1 : 0, c = d) : (c = n(o(e) / i), e * (f = r(2, -c)) < 1 && (c--, f *= 2), (e += c + h >= 1 ? g / f : g * r(2, 1 - h)) * f >= 2 && (c++, f /= 2), c + h >= d ? (u = 0, c = d) : c + h >= 1 ? (u = (e * f - 1) * r(2, a), c += h) : (u = e * r(2, h - 1) * r(2, a), c = 0)); a >= 8; l[v++] = 255 & u, u /= 256, a -= 8);
              for (c = c << a | u, p += a; p > 0; l[v++] = 255 & c, c /= 256, p -= 8);
              return l[--v] |= 128 * y, l
            },
            unpack: function (e, t) {
              var n, o = e.length,
                i = 8 * o - t - 1,
                a = (1 << i) - 1,
                s = a >> 1,
                c = i - 7,
                u = o - 1,
                f = e[u--],
                l = 127 & f;
              for (f >>= 7; c > 0; l = 256 * l + e[u], u--, c -= 8);
              for (n = l & (1 << -c) - 1, l >>= -c, c += t; c > 0; n = 256 * n + e[u], u--, c -= 8);
              if (0 === l) l = 1 - s;
              else {
                if (l === a) return n ? NaN : f ? -1 / 0 : 1 / 0;
                n += r(2, t), l -= s
              }
              return (f ? -1 : 1) * n * r(2, l - t)
            }
          }
        },
        9337: (e, t, r) => {
          var n = r(4229),
            o = r(7079),
            i = "".split;
          e.exports = n((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (e) {
            return "String" == o(e) ? i.call(e, "") : Object(e)
          } : Object
        },
        835: (e, t, r) => {
          var n = r(5052),
            o = r(6540);
          e.exports = function (e, t, r) {
            var i, a;
            return o && "function" == typeof (i = t.constructor) && i !== r && n(a = i.prototype) && a !== r.prototype && o(e, a), e
          }
        },
        8511: (e, t, r) => {
          var n = r(5353),
            o = Function.toString;
          "function" != typeof n.inspectSource && (n.inspectSource = function (e) {
            return o.call(e)
          }), e.exports = n.inspectSource
        },
        6407: (e, t, r) => {
          var n, o, i, a = r(8694),
            s = r(9859),
            c = r(5052),
            u = r(5762),
            f = r(816),
            l = r(5353),
            p = r(4399),
            d = r(5977),
            h = "Object already initialized",
            g = s.WeakMap;
          if (a || l.state) {
            var y = l.state || (l.state = new g),
              v = y.get,
              b = y.has,
              A = y.set;
            n = function (e, t) {
              if (b.call(y, e)) throw new TypeError(h);
              return t.facade = e, A.call(y, e, t), t
            }, o = function (e) {
              return v.call(y, e) || {}
            }, i = function (e) {
              return b.call(y, e)
            }
          } else {
            var m = p("state");
            d[m] = !0, n = function (e, t) {
              if (f(e, m)) throw new TypeError(h);
              return t.facade = e, u(e, m, t), t
            }, o = function (e) {
              return f(e, m) ? e[m] : {}
            }, i = function (e) {
              return f(e, m)
            }
          }
          e.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : n(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var r;
                if (!c(t) || (r = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return r
              }
            }
          }
        },
        1943: (e, t, r) => {
          var n = r(95),
            o = r(5495),
            i = n("iterator"),
            a = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e)
          }
        },
        3718: (e, t, r) => {
          var n = r(7079);
          e.exports = Array.isArray || function (e) {
            return "Array" == n(e)
          }
        },
        6541: (e, t, r) => {
          var n = r(4229),
            o = /#|\.prototype\./,
            i = function (e, t) {
              var r = s[a(e)];
              return r == u || r != c && ("function" == typeof t ? n(t) : !!t)
            },
            a = i.normalize = function (e) {
              return String(e).replace(o, ".").toLowerCase()
            },
            s = i.data = {},
            c = i.NATIVE = "N",
            u = i.POLYFILL = "P";
          e.exports = i
        },
        5052: e => {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          }
        },
        4231: e => {
          e.exports = !1
        },
        8311: (e, t, r) => {
          var n = r(5052),
            o = r(7079),
            i = r(95)("match");
          e.exports = function (e) {
            var t;
            return n(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
          }
        },
        9003: (e, t, r) => {
          var n = r(1176),
            o = r(1943),
            i = r(4237),
            a = r(7636),
            s = r(8830),
            c = r(7281),
            u = function (e, t) {
              this.stopped = e, this.result = t
            };
          e.exports = function (e, t, r) {
            var f, l, p, d, h, g, y, v = r && r.that,
              b = !(!r || !r.AS_ENTRIES),
              A = !(!r || !r.IS_ITERATOR),
              m = !(!r || !r.INTERRUPTED),
              _ = a(t, v, 1 + b + m),
              w = function (e) {
                return f && c(f), new u(!0, e)
              },
              x = function (e) {
                return b ? (n(e), m ? _(e[0], e[1], w) : _(e[0], e[1])) : m ? _(e, w) : _(e)
              };
            if (A) f = e;
            else {
              if ("function" != typeof (l = s(e))) throw TypeError("Target is not iterable");
              if (o(l)) {
                for (p = 0, d = i(e.length); d > p; p++)
                  if ((h = x(e[p])) && h instanceof u) return h;
                return new u(!1)
              }
              f = l.call(e)
            }
            for (g = f.next; !(y = g.call(f)).done;) {
              try {
                h = x(y.value)
              } catch (e) {
                throw c(f), e
              }
              if ("object" == typeof h && h && h instanceof u) return h
            }
            return new u(!1)
          }
        },
        7281: (e, t, r) => {
          var n = r(1176);
          e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return n(t.call(e)).value
          }
        },
        693: (e, t, r) => {
          "use strict";
          var n, o, i, a = r(4229),
            s = r(7567),
            c = r(5762),
            u = r(816),
            f = r(95),
            l = r(4231),
            p = f("iterator"),
            d = !1;
          [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (n = o) : d = !0);
          var h = null == n || a((function () {
            var e = {};
            return n[p].call(e) !== e
          }));
          h && (n = {}), l && !h || u(n, p) || c(n, p, (function () {
            return this
          })), e.exports = {
            IteratorPrototype: n,
            BUGGY_SAFARI_ITERATORS: d
          }
        },
        5495: e => {
          e.exports = {}
        },
        9037: e => {
          var t = Math.log;
          e.exports = Math.log1p || function (e) {
            return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : t(1 + e)
          }
        },
        4794: (e, t, r) => {
          var n, o, i, a, s, c, u, f, l = r(9859),
            p = r(7933).f,
            d = r(5795).set,
            h = r(2023),
            g = r(263),
            y = r(8801),
            v = l.MutationObserver || l.WebKitMutationObserver,
            b = l.document,
            A = l.process,
            m = l.Promise,
            _ = p(l, "queueMicrotask"),
            w = _ && _.value;
          w || (n = function () {
            var e, t;
            for (y && (e = A.domain) && e.exit(); o;) {
              t = o.fn, o = o.next;
              try {
                t()
              } catch (e) {
                throw o ? a() : i = void 0, e
              }
            }
            i = void 0, e && e.enter()
          }, h || y || g || !v || !b ? m && m.resolve ? ((u = m.resolve(void 0)).constructor = m, f = u.then, a = function () {
            f.call(u, n)
          }) : a = y ? function () {
            A.nextTick(n)
          } : function () {
            d.call(l, n)
          } : (s = !0, c = b.createTextNode(""), new v(n).observe(c, {
            characterData: !0
          }), a = function () {
            c.data = s = !s
          })), e.exports = w || function (e) {
            var t = {
              fn: e,
              next: void 0
            };
            i && (i.next = t), o || (o = t, a()), i = t
          }
        },
        4226: (e, t, r) => {
          var n = r(9859);
          e.exports = n.Promise
        },
        3839: (e, t, r) => {
          var n = r(6358),
            o = r(4229);
          e.exports = !!Object.getOwnPropertySymbols && !o((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
          }))
        },
        8694: (e, t, r) => {
          var n = r(9859),
            o = r(8511),
            i = n.WeakMap;
          e.exports = "function" == typeof i && /native code/.test(o(i))
        },
        6485: (e, t, r) => {
          "use strict";
          var n = r(3819),
            o = function (e) {
              var t, r;
              this.promise = new e((function (e, n) {
                if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
                t = e, r = n
              })), this.resolve = n(t), this.reject = n(r)
            };
          e.exports.f = function (e) {
            return new o(e)
          }
        },
        2391: (e, t, r) => {
          var n, o = r(1176),
            i = r(219),
            a = r(3837),
            s = r(5977),
            c = r(3777),
            u = r(2635),
            f = r(4399),
            l = f("IE_PROTO"),
            p = function () {},
            d = function (e) {
              return "<script>" + e + "</" + "script>"
            },
            h = function () {
              try {
                n = document.domain && new ActiveXObject("htmlfile")
              } catch (e) {}
              var e, t;
              h = n ? function (e) {
                e.write(d("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
              }(n) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F);
              for (var r = a.length; r--;) delete h.prototype[a[r]];
              return h()
            };
          s[l] = !0, e.exports = Object.create || function (e, t) {
            var r;
            return null !== e ? (p.prototype = o(e), r = new p, p.prototype = null, r[l] = e) : r = h(), void 0 === t ? r : i(r, t)
          }
        },
        219: (e, t, r) => {
          var n = r(7400),
            o = r(1787),
            i = r(1176),
            a = r(5632);
          e.exports = n ? Object.defineProperties : function (e, t) {
            i(e);
            for (var r, n = a(t), s = n.length, c = 0; s > c;) o.f(e, r = n[c++], t[r]);
            return e
          }
        },
        1787: (e, t, r) => {
          var n = r(7400),
            o = r(4394),
            i = r(1176),
            a = r(2066),
            s = Object.defineProperty;
          t.f = n ? s : function (e, t, r) {
            if (i(e), t = a(t, !0), i(r), o) try {
              return s(e, t, r)
            } catch (e) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (e[t] = r.value), e
          }
        },
        7933: (e, t, r) => {
          var n = r(7400),
            o = r(9195),
            i = r(5358),
            a = r(905),
            s = r(2066),
            c = r(816),
            u = r(4394),
            f = Object.getOwnPropertyDescriptor;
          t.f = n ? f : function (e, t) {
            if (e = a(e), t = s(t, !0), u) try {
              return f(e, t)
            } catch (e) {}
            if (c(e, t)) return i(!o.f.call(e, t), e[t])
          }
        },
        8151: (e, t, r) => {
          var n = r(140),
            o = r(3837).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function (e) {
            return n(e, o)
          }
        },
        894: (e, t) => {
          t.f = Object.getOwnPropertySymbols
        },
        7567: (e, t, r) => {
          var n = r(816),
            o = r(2991),
            i = r(4399),
            a = r(7528),
            s = i("IE_PROTO"),
            c = Object.prototype;
          e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = o(e), n(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
          }
        },
        140: (e, t, r) => {
          var n = r(816),
            o = r(905),
            i = r(9540).indexOf,
            a = r(5977);
          e.exports = function (e, t) {
            var r, s = o(e),
              c = 0,
              u = [];
            for (r in s) !n(a, r) && n(s, r) && u.push(r);
            for (; t.length > c;) n(s, r = t[c++]) && (~i(u, r) || u.push(r));
            return u
          }
        },
        5632: (e, t, r) => {
          var n = r(140),
            o = r(3837);
          e.exports = Object.keys || function (e) {
            return n(e, o)
          }
        },
        9195: (e, t) => {
          "use strict";
          var r = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor,
            o = n && !r.call({
              1: 2
            }, 1);
          t.f = o ? function (e) {
            var t = n(this, e);
            return !!t && t.enumerable
          } : r
        },
        5020: (e, t, r) => {
          "use strict";
          var n = r(4231),
            o = r(9859),
            i = r(4229),
            a = r(9811);
          e.exports = n || !i((function () {
            if (!(a && a < 535)) {
              var e = Math.random();
              __defineSetter__.call(null, e, (function () {})), delete o[e]
            }
          }))
        },
        6540: (e, t, r) => {
          var n = r(1176),
            o = r(8505);
          e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
              r = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array
            } catch (e) {}
            return function (r, i) {
              return n(r), o(i), t ? e.call(r, i) : r.__proto__ = i, r
            }
          }() : void 0)
        },
        7664: (e, t, r) => {
          var n = r(7400),
            o = r(5632),
            i = r(905),
            a = r(9195).f,
            s = function (e) {
              return function (t) {
                for (var r, s = i(t), c = o(s), u = c.length, f = 0, l = []; u > f;) r = c[f++], n && !a.call(s, r) || l.push(e ? [r, s[r]] : s[r]);
                return l
              }
            };
          e.exports = {
            entries: s(!0),
            values: s(!1)
          }
        },
        4826: (e, t, r) => {
          var n = r(1333),
            o = r(8151),
            i = r(894),
            a = r(1176);
          e.exports = n("Reflect", "ownKeys") || function (e) {
            var t = o.f(a(e)),
              r = i.f;
            return r ? t.concat(r(e)) : t
          }
        },
        9276: (e, t, r) => {
          var n = r(9859);
          e.exports = n
        },
        4624: e => {
          e.exports = function (e) {
            try {
              return {
                error: !1,
                value: e()
              }
            } catch (e) {
              return {
                error: !0,
                value: e
              }
            }
          }
        },
        7757: (e, t, r) => {
          var n = r(1176),
            o = r(5052),
            i = r(6485);
          e.exports = function (e, t) {
            if (n(e), o(t) && t.constructor === e) return t;
            var r = i.f(e);
            return (0, r.resolve)(t), r.promise
          }
        },
        8787: (e, t, r) => {
          var n = r(7487);
          e.exports = function (e, t, r) {
            for (var o in t) n(e, o, t[o], r);
            return e
          }
        },
        7487: (e, t, r) => {
          var n = r(9859),
            o = r(5762),
            i = r(816),
            a = r(2079),
            s = r(8511),
            c = r(6407),
            u = c.get,
            f = c.enforce,
            l = String(String).split("String");
          (e.exports = function (e, t, r, s) {
            var c, u = !!s && !!s.unsafe,
              p = !!s && !!s.enumerable,
              d = !!s && !!s.noTargetGet;
            "function" == typeof r && ("string" != typeof t || i(r, "name") || o(r, "name", t), (c = f(r)).source || (c.source = l.join("string" == typeof t ? t : ""))), e !== n ? (u ? !d && e[t] && (p = !0) : delete e[t], p ? e[t] = r : o(e, t, r)) : p ? e[t] = r : a(t, r)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && u(this).source || s(this)
          }))
        },
        8115: (e, t, r) => {
          var n = r(7079),
            o = r(3466);
          e.exports = function (e, t) {
            var r = e.exec;
            if ("function" == typeof r) {
              var i = r.call(e, t);
              if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
              return i
            }
            if ("RegExp" !== n(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t)
          }
        },
        3466: (e, t, r) => {
          "use strict";
          var n, o, i = r(895),
            a = r(5650),
            s = r(3036),
            c = r(2391),
            u = r(6407).get,
            f = r(2926),
            l = r(461),
            p = RegExp.prototype.exec,
            d = s("native-string-replace", String.prototype.replace),
            h = p,
            g = (n = /a/, o = /b*/g, p.call(n, "a"), p.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
            y = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            v = void 0 !== /()??/.exec("")[1];
          (g || v || y || f || l) && (h = function (e) {
            var t, r, n, o, a, s, f, l = this,
              b = u(l),
              A = b.raw;
            if (A) return A.lastIndex = l.lastIndex, t = h.call(A, e), l.lastIndex = A.lastIndex, t;
            var m = b.groups,
              _ = y && l.sticky,
              w = i.call(l),
              x = l.source,
              S = 0,
              k = e;
            if (_ && (-1 === (w = w.replace("y", "")).indexOf("g") && (w += "g"), k = String(e).slice(l.lastIndex), l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== e[l.lastIndex - 1]) && (x = "(?: " + x + ")", k = " " + k, S++), r = new RegExp("^(?:" + x + ")", w)), v && (r = new RegExp("^" + x + "$(?!\\s)", w)), g && (n = l.lastIndex), o = p.call(_ ? r : l, k), _ ? o ? (o.input = o.input.slice(S), o[0] = o[0].slice(S), o.index = l.lastIndex, l.lastIndex += o[0].length) : l.lastIndex = 0 : g && o && (l.lastIndex = l.global ? o.index + o[0].length : n), v && o && o.length > 1 && d.call(o[0], r, (function () {
                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
              })), o && m)
              for (o.groups = s = c(null), a = 0; a < m.length; a++) s[(f = m[a])[0]] = o[f[1]];
            return o
          }), e.exports = h
        },
        895: (e, t, r) => {
          "use strict";
          var n = r(1176);
          e.exports = function () {
            var e = n(this),
              t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
          }
        },
        5650: (e, t, r) => {
          var n = r(4229),
            o = function (e, t) {
              return RegExp(e, t)
            };
          t.UNSUPPORTED_Y = n((function () {
            var e = o("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
          })), t.BROKEN_CARET = n((function () {
            var e = o("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
          }))
        },
        2926: (e, t, r) => {
          var n = r(4229);
          e.exports = n((function () {
            var e = RegExp(".", "string".charAt(0));
            return !(e.dotAll && e.exec("\n") && "s" === e.flags)
          }))
        },
        461: (e, t, r) => {
          var n = r(4229);
          e.exports = n((function () {
            var e = RegExp("(?<a>b)", "string".charAt(5));
            return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          }))
        },
        8885: e => {
          e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
          }
        },
        2079: (e, t, r) => {
          var n = r(9859),
            o = r(5762);
          e.exports = function (e, t) {
            try {
              o(n, e, t)
            } catch (r) {
              n[e] = t
            }
            return t
          }
        },
        1832: (e, t, r) => {
          "use strict";
          var n = r(1333),
            o = r(1787),
            i = r(95),
            a = r(7400),
            s = i("species");
          e.exports = function (e) {
            var t = n(e),
              r = o.f;
            a && t && !t[s] && r(t, s, {
              configurable: !0,
              get: function () {
                return this
              }
            })
          }
        },
        4555: (e, t, r) => {
          var n = r(1787).f,
            o = r(816),
            i = r(95)("toStringTag");
          e.exports = function (e, t, r) {
            e && !o(e = r ? e : e.prototype, i) && n(e, i, {
              configurable: !0,
              value: t
            })
          }
        },
        4399: (e, t, r) => {
          var n = r(3036),
            o = r(1441),
            i = n("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = o(e))
          }
        },
        5353: (e, t, r) => {
          var n = r(9859),
            o = r(2079),
            i = "__core-js_shared__",
            a = n[i] || o(i, {});
          e.exports = a
        },
        3036: (e, t, r) => {
          var n = r(4231),
            o = r(5353);
          (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.15.1",
            mode: n ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
          })
        },
        7942: (e, t, r) => {
          var n = r(1176),
            o = r(3819),
            i = r(95)("species");
          e.exports = function (e, t) {
            var r, a = n(e).constructor;
            return void 0 === a || null == (r = n(a)[i]) ? t : o(r)
          }
        },
        966: (e, t, r) => {
          var n = r(6051),
            o = r(8885),
            i = function (e) {
              return function (t, r) {
                var i, a, s = String(o(t)),
                  c = n(r),
                  u = s.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
              }
            };
          e.exports = {
            codeAt: i(!1),
            charAt: i(!0)
          }
        },
        7456: (e, t, r) => {
          var n = r(598);
          e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
        },
        6650: (e, t, r) => {
          var n = r(4237),
            o = r(3124),
            i = r(8885),
            a = Math.ceil,
            s = function (e) {
              return function (t, r, s) {
                var c, u, f = String(i(t)),
                  l = f.length,
                  p = void 0 === s ? " " : String(s),
                  d = n(r);
                return d <= l || "" == p ? f : (c = d - l, (u = o.call(p, a(c / p.length))).length > c && (u = u.slice(0, c)), e ? f + u : u + f)
              }
            };
          e.exports = {
            start: s(!1),
            end: s(!0)
          }
        },
        3124: (e, t, r) => {
          "use strict";
          var n = r(6051),
            o = r(8885);
          e.exports = function (e) {
            var t = String(o(this)),
              r = "",
              i = n(e);
            if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; i > 0;
              (i >>>= 1) && (t += t)) 1 & i && (r += t);
            return r
          }
        },
        9445: (e, t, r) => {
          var n = r(4229),
            o = r(1647);
          e.exports = function (e) {
            return n((function () {
              return !!o[e]() || "​᠎" != "​᠎" [e]() || o[e].name !== e
            }))
          }
        },
        1017: (e, t, r) => {
          var n = r(8885),
            o = "[" + r(1647) + "]",
            i = RegExp("^" + o + o + "*"),
            a = RegExp(o + o + "*$"),
            s = function (e) {
              return function (t) {
                var r = String(n(t));
                return 1 & e && (r = r.replace(i, "")), 2 & e && (r = r.replace(a, "")), r
              }
            };
          e.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
          }
        },
        5795: (e, t, r) => {
          var n, o, i, a = r(9859),
            s = r(4229),
            c = r(7636),
            u = r(3777),
            f = r(2635),
            l = r(2023),
            p = r(8801),
            d = a.location,
            h = a.setImmediate,
            g = a.clearImmediate,
            y = a.process,
            v = a.MessageChannel,
            b = a.Dispatch,
            A = 0,
            m = {},
            _ = "onreadystatechange",
            w = function (e) {
              if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
              }
            },
            x = function (e) {
              return function () {
                w(e)
              }
            },
            S = function (e) {
              w(e.data)
            },
            k = function (e) {
              a.postMessage(e + "", d.protocol + "//" + d.host)
            };
          h && g || (h = function (e) {
            for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
            return m[++A] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, n(A), A
          }, g = function (e) {
            delete m[e]
          }, p ? n = function (e) {
            y.nextTick(x(e))
          } : b && b.now ? n = function (e) {
            b.now(x(e))
          } : v && !l ? (i = (o = new v).port2, o.port1.onmessage = S, n = c(i.postMessage, i, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && d && "file:" !== d.protocol && !s(k) ? (n = k, a.addEventListener("message", S, !1)) : n = _ in f("script") ? function (e) {
            u.appendChild(f("script")).onreadystatechange = function () {
              u.removeChild(this), w(e)
            }
          } : function (e) {
            setTimeout(x(e), 0)
          }), e.exports = {
            set: h,
            clear: g
          }
        },
        3231: (e, t, r) => {
          var n = r(6051),
            o = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var r = n(e);
            return r < 0 ? o(r + t, 0) : i(r, t)
          }
        },
        7331: (e, t, r) => {
          var n = r(6051),
            o = r(4237);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = n(e),
              r = o(t);
            if (t !== r) throw RangeError("Wrong length or index");
            return r
          }
        },
        905: (e, t, r) => {
          var n = r(9337),
            o = r(8885);
          e.exports = function (e) {
            return n(o(e))
          }
        },
        6051: e => {
          var t = Math.ceil,
            r = Math.floor;
          e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
          }
        },
        4237: (e, t, r) => {
          var n = r(6051),
            o = Math.min;
          e.exports = function (e) {
            return e > 0 ? o(n(e), 9007199254740991) : 0
          }
        },
        2991: (e, t, r) => {
          var n = r(8885);
          e.exports = function (e) {
            return Object(n(e))
          }
        },
        4262: (e, t, r) => {
          var n = r(2002);
          e.exports = function (e, t) {
            var r = n(e);
            if (r % t) throw RangeError("Wrong offset");
            return r
          }
        },
        2002: (e, t, r) => {
          var n = r(6051);
          e.exports = function (e) {
            var t = n(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t
          }
        },
        2066: (e, t, r) => {
          var n = r(5052);
          e.exports = function (e, t) {
            if (!n(e)) return e;
            var r, o;
            if (t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;
            if ("function" == typeof (r = e.valueOf) && !n(o = r.call(e))) return o;
            if (!t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
          }
        },
        1601: (e, t, r) => {
          var n = {};
          n[r(95)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
        },
        2574: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(9859),
            i = r(7400),
            a = r(8200),
            s = r(9918),
            c = r(3816),
            u = r(7728),
            f = r(5358),
            l = r(5762),
            p = r(4237),
            d = r(7331),
            h = r(4262),
            g = r(2066),
            y = r(816),
            v = r(1589),
            b = r(5052),
            A = r(2391),
            m = r(6540),
            _ = r(8151).f,
            w = r(5215),
            x = r(9996).forEach,
            S = r(1832),
            k = r(1787),
            I = r(7933),
            T = r(6407),
            E = r(835),
            O = T.get,
            C = T.set,
            P = k.f,
            j = I.f,
            R = Math.round,
            M = o.RangeError,
            B = c.ArrayBuffer,
            D = c.DataView,
            L = s.NATIVE_ARRAY_BUFFER_VIEWS,
            W = s.TYPED_ARRAY_TAG,
            N = s.TypedArray,
            F = s.TypedArrayPrototype,
            G = s.aTypedArrayConstructor,
            U = s.isTypedArray,
            V = "BYTES_PER_ELEMENT",
            $ = "Wrong length",
            J = function (e, t) {
              for (var r = 0, n = t.length, o = new(G(e))(n); n > r;) o[r] = t[r++];
              return o
            },
            Q = function (e, t) {
              P(e, t, {
                get: function () {
                  return O(this)[t]
                }
              })
            },
            Y = function (e) {
              var t;
              return e instanceof B || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t
            },
            Z = function (e, t) {
              return U(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            z = function (e, t) {
              return Z(e, t = g(t, !0)) ? f(2, e[t]) : j(e, t)
            },
            H = function (e, t, r) {
              return !(Z(e, t = g(t, !0)) && b(r) && y(r, "value")) || y(r, "get") || y(r, "set") || r.configurable || y(r, "writable") && !r.writable || y(r, "enumerable") && !r.enumerable ? P(e, t, r) : (e[t] = r.value, e)
            };
          i ? (L || (I.f = z, k.f = H, Q(F, "buffer"), Q(F, "byteOffset"), Q(F, "byteLength"), Q(F, "length")), n({
            target: "Object",
            stat: !0,
            forced: !L
          }, {
            getOwnPropertyDescriptor: z,
            defineProperty: H
          }), e.exports = function (e, t, r) {
            var i = e.match(/\d+$/)[0] / 8,
              s = e + (r ? "Clamped" : "") + "Array",
              c = "get" + e,
              f = "set" + e,
              g = o[s],
              y = g,
              v = y && y.prototype,
              k = {},
              I = function (e, t) {
                P(e, t, {
                  get: function () {
                    return function (e, t) {
                      var r = O(e);
                      return r.view[c](t * i + r.byteOffset, !0)
                    }(this, t)
                  },
                  set: function (e) {
                    return function (e, t, n) {
                      var o = O(e);
                      r && (n = (n = R(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), o.view[f](t * i + o.byteOffset, n, !0)
                    }(this, t, e)
                  },
                  enumerable: !0
                })
              };
            L ? a && (y = t((function (e, t, r, n) {
              return u(e, y, s), E(b(t) ? Y(t) ? void 0 !== n ? new g(t, h(r, i), n) : void 0 !== r ? new g(t, h(r, i)) : new g(t) : U(t) ? J(y, t) : w.call(y, t) : new g(d(t)), e, y)
            })), m && m(y, N), x(_(g), (function (e) {
              e in y || l(y, e, g[e])
            })), y.prototype = v) : (y = t((function (e, t, r, n) {
              u(e, y, s);
              var o, a, c, f = 0,
                l = 0;
              if (b(t)) {
                if (!Y(t)) return U(t) ? J(y, t) : w.call(y, t);
                o = t, l = h(r, i);
                var g = t.byteLength;
                if (void 0 === n) {
                  if (g % i) throw M($);
                  if ((a = g - l) < 0) throw M($)
                } else if ((a = p(n) * i) + l > g) throw M($);
                c = a / i
              } else c = d(t), o = new B(a = c * i);
              for (C(e, {
                  buffer: o,
                  byteOffset: l,
                  byteLength: a,
                  length: c,
                  view: new D(o)
                }); f < c;) I(e, f++)
            })), m && m(y, N), v = y.prototype = A(F)), v.constructor !== y && l(v, "constructor", y), W && l(v, W, s), k[s] = y, n({
              global: !0,
              forced: y != g,
              sham: !L
            }, k), V in y || l(y, V, i), V in v || l(v, V, i), S(s)
          }) : e.exports = function () {}
        },
        8200: (e, t, r) => {
          var n = r(9859),
            o = r(4229),
            i = r(4575),
            a = r(9918).NATIVE_ARRAY_BUFFER_VIEWS,
            s = n.ArrayBuffer,
            c = n.Int8Array;
          e.exports = !a || !o((function () {
            c(1)
          })) || !o((function () {
            new c(-1)
          })) || !i((function (e) {
            new c, new c(null), new c(1.5), new c(e)
          }), !0) || o((function () {
            return 1 !== new c(new s(2), 1, void 0).length
          }))
        },
        5215: (e, t, r) => {
          var n = r(2991),
            o = r(4237),
            i = r(8830),
            a = r(1943),
            s = r(7636),
            c = r(9918).aTypedArrayConstructor;
          e.exports = function (e) {
            var t, r, u, f, l, p, d = n(e),
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              y = void 0 !== g,
              v = i(d);
            if (null != v && !a(v))
              for (p = (l = v.call(d)).next, d = []; !(f = p.call(l)).done;) d.push(f.value);
            for (y && h > 2 && (g = s(g, arguments[2], 2)), r = o(d.length), u = new(c(this))(r), t = 0; r > t; t++) u[t] = y ? g(d[t], t) : d[t];
            return u
          }
        },
        1441: e => {
          var t = 0,
            r = Math.random();
          e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + r).toString(36)
          }
        },
        6969: (e, t, r) => {
          var n = r(3839);
          e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        5391: (e, t, r) => {
          var n = r(95);
          t.f = n
        },
        95: (e, t, r) => {
          var n = r(9859),
            o = r(3036),
            i = r(816),
            a = r(1441),
            s = r(3839),
            c = r(6969),
            u = o("wks"),
            f = n.Symbol,
            l = c ? f : f && f.withoutSetter || a;
          e.exports = function (e) {
            return i(u, e) && (s || "string" == typeof u[e]) || (s && i(f, e) ? u[e] = f[e] : u[e] = l("Symbol." + e)), u[e]
          }
        },
        1647: e => {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        5738: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7567),
            i = r(6540),
            a = r(2391),
            s = r(5762),
            c = r(5358),
            u = r(9003),
            f = function (e, t) {
              var r = this;
              if (!(r instanceof f)) return new f(e, t);
              i && (r = i(new Error(void 0), o(r))), void 0 !== t && s(r, "message", String(t));
              var n = [];
              return u(e, n.push, {
                that: n
              }), s(r, "errors", n), r
            };
          f.prototype = a(Error.prototype, {
            constructor: c(5, f),
            message: c(5, ""),
            name: c(5, "AggregateError")
          }), n({
            global: !0
          }, {
            AggregateError: f
          })
        },
        5388: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(9859),
            i = r(3816),
            a = r(1832),
            s = "ArrayBuffer",
            c = i.ArrayBuffer;
          n({
            global: !0,
            forced: o.ArrayBuffer !== c
          }, {
            ArrayBuffer: c
          }), a(s)
        },
        2994: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(4229),
            i = r(3816),
            a = r(1176),
            s = r(3231),
            c = r(4237),
            u = r(7942),
            f = i.ArrayBuffer,
            l = i.DataView,
            p = f.prototype.slice;
          n({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: o((function () {
              return !new f(2).slice(1, void 0).byteLength
            }))
          }, {
            slice: function (e, t) {
              if (void 0 !== p && void 0 === t) return p.call(a(this), e);
              for (var r = a(this).byteLength, n = s(e, r), o = s(void 0 === t ? r : t, r), i = new(u(this, f))(c(o - n)), d = new l(this), h = new l(i), g = 0; n < o;) h.setUint8(g++, d.getUint8(n++));
              return i
            }
          })
        },
        4870: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(4990),
            i = r(2991),
            a = r(4237),
            s = r(3819),
            c = r(7501);
          n({
            target: "Array",
            proto: !0
          }, {
            flatMap: function (e) {
              var t, r = i(this),
                n = a(r.length);
              return s(e), (t = c(r, 0)).length = o(t, r, r, n, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
            }
          })
        },
        7072: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(4990),
            i = r(2991),
            a = r(4237),
            s = r(6051),
            c = r(7501);
          n({
            target: "Array",
            proto: !0
          }, {
            flat: function () {
              var e = arguments.length ? arguments[0] : void 0,
                t = i(this),
                r = a(t.length),
                n = c(t, 0);
              return n.length = o(n, t, t, r, 0, void 0 === e ? 1 : s(e)), n
            }
          })
        },
        5735: (e, t, r) => {
          "use strict";
          var n = r(905),
            o = r(9736),
            i = r(5495),
            a = r(6407),
            s = r(7675),
            c = "Array Iterator",
            u = a.set,
            f = a.getterFor(c);
          e.exports = s(Array, "Array", (function (e, t) {
            u(this, {
              type: c,
              target: n(e),
              index: 0,
              kind: t
            })
          }), (function () {
            var e = f(this),
              t = e.target,
              r = e.kind,
              n = e.index++;
            return !t || n >= t.length ? (e.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == r ? {
              value: n,
              done: !1
            } : "values" == r ? {
              value: t[n],
              done: !1
            } : {
              value: [n, t[n]],
              done: !1
            }
          }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
        },
        9731: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3143).right,
            i = r(6038),
            a = r(6358),
            s = r(8801);
          n({
            target: "Array",
            proto: !0,
            forced: !i("reduceRight") || !s && a > 79 && a < 83
          }, {
            reduceRight: function (e) {
              return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        3108: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3143).left,
            i = r(6038),
            a = r(6358),
            s = r(8801);
          n({
            target: "Array",
            proto: !0,
            forced: !i("reduce") || !s && a > 79 && a < 83
          }, {
            reduce: function (e) {
              return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        9992: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3718),
            i = [].reverse,
            a = [1, 2];
          n({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
          }, {
            reverse: function () {
              return o(this) && (this.length = this.length), i.call(this)
            }
          })
        },
        3430: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3819),
            i = r(2991),
            a = r(4237),
            s = r(4229),
            c = r(3867),
            u = r(6038),
            f = r(2671),
            l = r(8506),
            p = r(6358),
            d = r(9811),
            h = [],
            g = h.sort,
            y = s((function () {
              h.sort(void 0)
            })),
            v = s((function () {
              h.sort(null)
            })),
            b = u("sort"),
            A = !s((function () {
              if (p) return p < 70;
              if (!(f && f > 3)) {
                if (l) return !0;
                if (d) return d < 603;
                var e, t, r, n, o = "";
                for (e = 65; e < 76; e++) {
                  switch (t = String.fromCharCode(e), e) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      r = 3;
                      break;
                    case 68:
                    case 71:
                      r = 4;
                      break;
                    default:
                      r = 2
                  }
                  for (n = 0; n < 47; n++) h.push({
                    k: t + n,
                    v: r
                  })
                }
                for (h.sort((function (e, t) {
                    return t.v - e.v
                  })), n = 0; n < h.length; n++) t = h[n].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
                return "DGBEFHACIJK" !== o
              }
            }));
          n({
            target: "Array",
            proto: !0,
            forced: y || !v || !b || !A
          }, {
            sort: function (e) {
              void 0 !== e && o(e);
              var t = i(this);
              if (A) return void 0 === e ? g.call(t) : g.call(t, e);
              var r, n, s = [],
                u = a(t.length);
              for (n = 0; n < u; n++) n in t && s.push(t[n]);
              for (r = (s = c(s, function (e) {
                  return function (t, r) {
                    return void 0 === r ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, r) || 0 : String(t) > String(r) ? 1 : -1
                  }
                }(e))).length, n = 0; n < r;) t[n] = s[n++];
              for (; n < u;) delete t[n++];
              return t
            }
          })
        },
        3985: (e, t, r) => {
          r(9736)("flatMap")
        },
        7694: (e, t, r) => {
          r(9736)("flat")
        },
        4173: (e, t, r) => {
          r(3103)({
            global: !0
          }, {
            globalThis: r(9859)
          })
        },
        3498: (e, t, r) => {
          var n = r(3103),
            o = r(9037),
            i = Math.acosh,
            a = Math.log,
            s = Math.sqrt,
            c = Math.LN2;
          n({
            target: "Math",
            stat: !0,
            forced: !i || 710 != Math.floor(i(Number.MAX_VALUE)) || i(1 / 0) != 1 / 0
          }, {
            acosh: function (e) {
              return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? a(e) + c : o(e - 1 + s(e - 1) * s(e + 1))
            }
          })
        },
        9509: (e, t, r) => {
          var n = r(3103),
            o = Math.hypot,
            i = Math.abs,
            a = Math.sqrt;
          n({
            target: "Math",
            stat: !0,
            forced: !!o && o(1 / 0, NaN) !== 1 / 0
          }, {
            hypot: function (e, t) {
              for (var r, n, o = 0, s = 0, c = arguments.length, u = 0; s < c;) u < (r = i(arguments[s++])) ? (o = o * (n = u / r) * n + 1, u = r) : o += r > 0 ? (n = r / u) * n : r;
              return u === 1 / 0 ? 1 / 0 : u * a(o)
            }
          })
        },
        7846: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7400),
            i = r(5020),
            a = r(2991),
            s = r(3819),
            c = r(1787);
          o && n({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __defineGetter__: function (e, t) {
              c.f(a(this), e, {
                get: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        6635: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7400),
            i = r(5020),
            a = r(2991),
            s = r(3819),
            c = r(1787);
          o && n({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __defineSetter__: function (e, t) {
              c.f(a(this), e, {
                set: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        5883: (e, t, r) => {
          var n = r(3103),
            o = r(7664).entries;
          n({
            target: "Object",
            stat: !0
          }, {
            entries: function (e) {
              return o(e)
            }
          })
        },
        1804: (e, t, r) => {
          var n = r(3103),
            o = r(9003),
            i = r(2324);
          n({
            target: "Object",
            stat: !0
          }, {
            fromEntries: function (e) {
              var t = {};
              return o(e, (function (e, r) {
                i(t, e, r)
              }), {
                AS_ENTRIES: !0
              }), t
            }
          })
        },
        2775: (e, t, r) => {
          var n = r(3103),
            o = r(7400),
            i = r(4826),
            a = r(905),
            s = r(7933),
            c = r(2324);
          n({
            target: "Object",
            stat: !0,
            sham: !o
          }, {
            getOwnPropertyDescriptors: function (e) {
              for (var t, r, n = a(e), o = s.f, u = i(n), f = {}, l = 0; u.length > l;) void 0 !== (r = o(n, t = u[l++])) && c(f, t, r);
              return f
            }
          })
        },
        2586: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7400),
            i = r(5020),
            a = r(2991),
            s = r(2066),
            c = r(7567),
            u = r(7933).f;
          o && n({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __lookupGetter__: function (e) {
              var t, r = a(this),
                n = s(e, !0);
              do {
                if (t = u(r, n)) return t.get
              } while (r = c(r))
            }
          })
        },
        3045: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7400),
            i = r(5020),
            a = r(2991),
            s = r(2066),
            c = r(7567),
            u = r(7933).f;
          o && n({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __lookupSetter__: function (e) {
              var t, r = a(this),
                n = s(e, !0);
              do {
                if (t = u(r, n)) return t.set
              } while (r = c(r))
            }
          })
        },
        7890: (e, t, r) => {
          var n = r(3103),
            o = r(7664).values;
          n({
            target: "Object",
            stat: !0
          }, {
            values: function (e) {
              return o(e)
            }
          })
        },
        7919: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3819),
            i = r(6485),
            a = r(4624),
            s = r(9003);
          n({
            target: "Promise",
            stat: !0
          }, {
            allSettled: function (e) {
              var t = this,
                r = i.f(t),
                n = r.resolve,
                c = r.reject,
                u = a((function () {
                  var r = o(t.resolve),
                    i = [],
                    a = 0,
                    c = 1;
                  s(e, (function (e) {
                    var o = a++,
                      s = !1;
                    i.push(void 0), c++, r.call(t, e).then((function (e) {
                      s || (s = !0, i[o] = {
                        status: "fulfilled",
                        value: e
                      }, --c || n(i))
                    }), (function (e) {
                      s || (s = !0, i[o] = {
                        status: "rejected",
                        reason: e
                      }, --c || n(i))
                    }))
                  })), --c || n(i)
                }));
              return u.error && c(u.value), r.promise
            }
          })
        },
        7178: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3819),
            i = r(1333),
            a = r(6485),
            s = r(4624),
            c = r(9003),
            u = "No one promise resolved";
          n({
            target: "Promise",
            stat: !0
          }, {
            any: function (e) {
              var t = this,
                r = a.f(t),
                n = r.resolve,
                f = r.reject,
                l = s((function () {
                  var r = o(t.resolve),
                    a = [],
                    s = 0,
                    l = 1,
                    p = !1;
                  c(e, (function (e) {
                    var o = s++,
                      c = !1;
                    a.push(void 0), l++, r.call(t, e).then((function (e) {
                      c || p || (p = !0, n(e))
                    }), (function (e) {
                      c || p || (c = !0, a[o] = e, --l || f(new(i("AggregateError"))(a, u)))
                    }))
                  })), --l || f(new(i("AggregateError"))(a, u))
                }));
              return l.error && f(l.value), r.promise
            }
          })
        },
        1515: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(4231),
            i = r(4226),
            a = r(4229),
            s = r(1333),
            c = r(7942),
            u = r(7757),
            f = r(7487);
          if (n({
              target: "Promise",
              proto: !0,
              real: !0,
              forced: !!i && a((function () {
                i.prototype.finally.call({
                  then: function () {}
                }, (function () {}))
              }))
            }, {
              finally: function (e) {
                var t = c(this, s("Promise")),
                  r = "function" == typeof e;
                return this.then(r ? function (r) {
                  return u(t, e()).then((function () {
                    return r
                  }))
                } : e, r ? function (r) {
                  return u(t, e()).then((function () {
                    throw r
                  }))
                } : e)
              }
            }), !o && "function" == typeof i) {
            var l = s("Promise").prototype.finally;
            i.prototype.finally !== l && f(i.prototype, "finally", l, {
              unsafe: !0
            })
          }
        },
        3439: (e, t, r) => {
          "use strict";
          var n, o, i, a, s = r(3103),
            c = r(4231),
            u = r(9859),
            f = r(1333),
            l = r(4226),
            p = r(7487),
            d = r(8787),
            h = r(6540),
            g = r(4555),
            y = r(1832),
            v = r(5052),
            b = r(3819),
            A = r(7728),
            m = r(8511),
            _ = r(9003),
            w = r(4575),
            x = r(7942),
            S = r(5795).set,
            k = r(4794),
            I = r(7757),
            T = r(4665),
            E = r(6485),
            O = r(4624),
            C = r(6407),
            P = r(6541),
            j = r(95),
            R = r(8639),
            M = r(8801),
            B = r(6358),
            D = j("species"),
            L = "Promise",
            W = C.get,
            N = C.set,
            F = C.getterFor(L),
            G = l && l.prototype,
            U = l,
            V = G,
            $ = u.TypeError,
            J = u.document,
            Q = u.process,
            Y = E.f,
            Z = Y,
            z = !!(J && J.createEvent && u.dispatchEvent),
            H = "function" == typeof PromiseRejectionEvent,
            q = "unhandledrejection",
            K = !1,
            X = P(L, (function () {
              var e = m(U) !== String(U);
              if (!e && 66 === B) return !0;
              if (c && !V.finally) return !0;
              if (B >= 51 && /native code/.test(U)) return !1;
              var t = new U((function (e) {
                  e(1)
                })),
                r = function (e) {
                  e((function () {}), (function () {}))
                };
              return (t.constructor = {})[D] = r, !(K = t.then((function () {})) instanceof r) || !e && R && !H
            })),
            ee = X || !w((function (e) {
              U.all(e).catch((function () {}))
            })),
            te = function (e) {
              var t;
              return !(!v(e) || "function" != typeof (t = e.then)) && t
            },
            re = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var r = e.reactions;
                k((function () {
                  for (var n = e.value, o = 1 == e.state, i = 0; r.length > i;) {
                    var a, s, c, u = r[i++],
                      f = o ? u.ok : u.fail,
                      l = u.resolve,
                      p = u.reject,
                      d = u.domain;
                    try {
                      f ? (o || (2 === e.rejection && ae(e), e.rejection = 1), !0 === f ? a = n : (d && d.enter(), a = f(n), d && (d.exit(), c = !0)), a === u.promise ? p($("Promise-chain cycle")) : (s = te(a)) ? s.call(a, l, p) : l(a)) : p(n)
                    } catch (e) {
                      d && !c && d.exit(), p(e)
                    }
                  }
                  e.reactions = [], e.notified = !1, t && !e.rejection && oe(e)
                }))
              }
            },
            ne = function (e, t, r) {
              var n, o;
              z ? ((n = J.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), u.dispatchEvent(n)) : n = {
                promise: t,
                reason: r
              }, !H && (o = u["on" + e]) ? o(n) : e === q && T("Unhandled promise rejection", r)
            },
            oe = function (e) {
              S.call(u, (function () {
                var t, r = e.facade,
                  n = e.value;
                if (ie(e) && (t = O((function () {
                    M ? Q.emit("unhandledRejection", n, r) : ne(q, r, n)
                  })), e.rejection = M || ie(e) ? 2 : 1, t.error)) throw t.value
              }))
            },
            ie = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            ae = function (e) {
              S.call(u, (function () {
                var t = e.facade;
                M ? Q.emit("rejectionHandled", t) : ne("rejectionhandled", t, e.value)
              }))
            },
            se = function (e, t, r) {
              return function (n) {
                e(t, n, r)
              }
            },
            ce = function (e, t, r) {
              e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, re(e, !0))
            },
            ue = function (e, t, r) {
              if (!e.done) {
                e.done = !0, r && (e = r);
                try {
                  if (e.facade === t) throw $("Promise can't be resolved itself");
                  var n = te(t);
                  n ? k((function () {
                    var r = {
                      done: !1
                    };
                    try {
                      n.call(t, se(ue, r, e), se(ce, r, e))
                    } catch (t) {
                      ce(r, t, e)
                    }
                  })) : (e.value = t, e.state = 1, re(e, !1))
                } catch (t) {
                  ce({
                    done: !1
                  }, t, e)
                }
              }
            };
          if (X && (V = (U = function (e) {
              A(this, U, L), b(e), n.call(this);
              var t = W(this);
              try {
                e(se(ue, t), se(ce, t))
              } catch (e) {
                ce(t, e)
              }
            }).prototype, (n = function (e) {
              N(this, {
                type: L,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
              })
            }).prototype = d(V, {
              then: function (e, t) {
                var r = F(this),
                  n = Y(x(this, U));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = M ? Q.domain : void 0, r.parent = !0, r.reactions.push(n), 0 != r.state && re(r, !1), n.promise
              },
              catch: function (e) {
                return this.then(void 0, e)
              }
            }), o = function () {
              var e = new n,
                t = W(e);
              this.promise = e, this.resolve = se(ue, t), this.reject = se(ce, t)
            }, E.f = Y = function (e) {
              return e === U || e === i ? new o(e) : Z(e)
            }, !c && "function" == typeof l && G !== Object.prototype)) {
            a = G.then, K || (p(G, "then", (function (e, t) {
              var r = this;
              return new U((function (e, t) {
                a.call(r, e, t)
              })).then(e, t)
            }), {
              unsafe: !0
            }), p(G, "catch", V.catch, {
              unsafe: !0
            }));
            try {
              delete G.constructor
            } catch (e) {}
            h && h(G, V)
          }
          s({
            global: !0,
            wrap: !0,
            forced: X
          }, {
            Promise: U
          }), g(U, L, !1, !0), y(L), i = f(L), s({
            target: L,
            stat: !0,
            forced: X
          }, {
            reject: function (e) {
              var t = Y(this);
              return t.reject.call(void 0, e), t.promise
            }
          }), s({
            target: L,
            stat: !0,
            forced: c || X
          }, {
            resolve: function (e) {
              return I(c && this === i ? U : this, e)
            }
          }), s({
            target: L,
            stat: !0,
            forced: ee
          }, {
            all: function (e) {
              var t = this,
                r = Y(t),
                n = r.resolve,
                o = r.reject,
                i = O((function () {
                  var r = b(t.resolve),
                    i = [],
                    a = 0,
                    s = 1;
                  _(e, (function (e) {
                    var c = a++,
                      u = !1;
                    i.push(void 0), s++, r.call(t, e).then((function (e) {
                      u || (u = !0, i[c] = e, --s || n(i))
                    }), o)
                  })), --s || n(i)
                }));
              return i.error && o(i.value), r.promise
            },
            race: function (e) {
              var t = this,
                r = Y(t),
                n = r.reject,
                o = O((function () {
                  var o = b(t.resolve);
                  _(e, (function (e) {
                    o.call(t, e).then(r.resolve, n)
                  }))
                }));
              return o.error && n(o.value), r.promise
            }
          })
        },
        7368: (e, t, r) => {
          var n = r(7400),
            o = r(9859),
            i = r(6541),
            a = r(835),
            s = r(5762),
            c = r(1787).f,
            u = r(8151).f,
            f = r(8311),
            l = r(895),
            p = r(5650),
            d = r(7487),
            h = r(4229),
            g = r(816),
            y = r(6407).enforce,
            v = r(1832),
            b = r(95),
            A = r(2926),
            m = r(461),
            _ = b("match"),
            w = o.RegExp,
            x = w.prototype,
            S = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            k = /a/g,
            I = /a/g,
            T = new w(k) !== k,
            E = p.UNSUPPORTED_Y,
            O = n && (!T || E || A || m || h((function () {
              return I[_] = !1, w(k) != k || w(I) == I || "/a/i" != w(k, "i")
            })));
          if (i("RegExp", O)) {
            for (var C = function (e, t) {
                var r, n, o, i, c, u, p = this instanceof C,
                  d = f(e),
                  h = void 0 === t,
                  v = [],
                  b = e;
                if (!p && d && h && e.constructor === C) return e;
                if ((d || e instanceof C) && (e = e.source, h && (t = "flags" in b ? b.flags : l.call(b))), e = void 0 === e ? "" : String(e), t = void 0 === t ? "" : String(t), b = e, A && "dotAll" in k && (n = !!t && t.indexOf("s") > -1) && (t = t.replace(/s/g, "")), r = t, E && "sticky" in k && (o = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")), m && (e = (i = function (e) {
                    for (var t, r = e.length, n = 0, o = "", i = [], a = {}, s = !1, c = !1, u = 0, f = ""; n <= r; n++) {
                      if ("\\" === (t = e.charAt(n))) t += e.charAt(++n);
                      else if ("]" === t) s = !1;
                      else if (!s) switch (!0) {
                        case "[" === t:
                          s = !0;
                          break;
                        case "(" === t:
                          S.test(e.slice(n + 1)) && (n += 2, c = !0), o += t, u++;
                          continue;
                        case ">" === t && c:
                          if ("" === f || g(a, f)) throw new SyntaxError("Invalid capture group name");
                          a[f] = !0, i.push([f, u]), c = !1, f = "";
                          continue
                      }
                      c ? f += t : o += t
                    }
                    return [o, i]
                  }(e))[0], v = i[1]), c = a(w(e, t), p ? this : x, C), (n || o || v.length) && (u = y(c), n && (u.dotAll = !0, u.raw = C(function (e) {
                    for (var t, r = e.length, n = 0, o = "", i = !1; n <= r; n++) "\\" !== (t = e.charAt(n)) ? i || "." !== t ? ("[" === t ? i = !0 : "]" === t && (i = !1), o += t) : o += "[\\s\\S]" : o += t + e.charAt(++n);
                    return o
                  }(e), r)), o && (u.sticky = !0), v.length && (u.groups = v)), e !== b) try {
                  s(c, "source", "" === b ? "(?:)" : b)
                } catch (e) {}
                return c
              }, P = function (e) {
                e in C || c(C, e, {
                  configurable: !0,
                  get: function () {
                    return w[e]
                  },
                  set: function (t) {
                    w[e] = t
                  }
                })
              }, j = u(w), R = 0; j.length > R;) P(j[R++]);
            x.constructor = C, C.prototype = x, d(o, "RegExp", C)
          }
          v("RegExp")
        },
        7950: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3466);
          n({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
          }, {
            exec: o
          })
        },
        103: (e, t, r) => {
          var n = r(7400),
            o = r(1787),
            i = r(895),
            a = r(4229);
          n && a((function () {
            return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
              dotAll: !0,
              sticky: !0
            })
          })) && o.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i
          })
        },
        3887: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(3723),
            i = r(8885),
            a = r(4237),
            s = r(3819),
            c = r(1176),
            u = r(7079),
            f = r(8311),
            l = r(895),
            p = r(5762),
            d = r(4229),
            h = r(95),
            g = r(7942),
            y = r(6637),
            v = r(6407),
            b = r(4231),
            A = h("matchAll"),
            m = "RegExp String",
            _ = "RegExp String Iterator",
            w = v.set,
            x = v.getterFor(_),
            S = RegExp.prototype,
            k = S.exec,
            I = "".matchAll,
            T = !!I && !d((function () {
              "a".matchAll(/./)
            })),
            E = o((function (e, t, r, n) {
              w(this, {
                type: _,
                regexp: e,
                string: t,
                global: r,
                unicode: n,
                done: !1
              })
            }), m, (function () {
              var e = x(this);
              if (e.done) return {
                value: void 0,
                done: !0
              };
              var t = e.regexp,
                r = e.string,
                n = function (e, t) {
                  var r, n = e.exec;
                  if ("function" == typeof n) {
                    if ("object" != typeof (r = n.call(e, t))) throw TypeError("Incorrect exec result");
                    return r
                  }
                  return k.call(e, t)
                }(t, r);
              return null === n ? {
                value: void 0,
                done: e.done = !0
              } : e.global ? ("" == String(n[0]) && (t.lastIndex = y(r, a(t.lastIndex), e.unicode)), {
                value: n,
                done: !1
              }) : (e.done = !0, {
                value: n,
                done: !1
              })
            })),
            O = function (e) {
              var t, r, n, o, i, s, u = c(this),
                f = String(e);
              return t = g(u, RegExp), void 0 === (r = u.flags) && u instanceof RegExp && !("flags" in S) && (r = l.call(u)), n = void 0 === r ? "" : String(r), o = new t(t === RegExp ? u.source : u, n), i = !!~n.indexOf("g"), s = !!~n.indexOf("u"), o.lastIndex = a(u.lastIndex), new E(o, f, i, s)
            };
          n({
            target: "String",
            proto: !0,
            forced: T
          }, {
            matchAll: function (e) {
              var t, r, n, o = i(this);
              if (null != e) {
                if (f(e) && !~String(i("flags" in S ? e.flags : l.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
                if (T) return I.apply(o, arguments);
                if (void 0 === (r = e[A]) && b && "RegExp" == u(e) && (r = O), null != r) return s(r).call(e, o)
              } else if (T) return I.apply(o, arguments);
              return t = String(o), n = new RegExp(e, "g"), b ? O.call(n, t) : n[A](t)
            }
          }), b || A in S || p(S, A, O)
        },
        977: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(6650).end;
          n({
            target: "String",
            proto: !0,
            forced: r(7456)
          }, {
            padEnd: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        5734: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(6650).start;
          n({
            target: "String",
            proto: !0,
            forced: r(7456)
          }, {
            padStart: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        1639: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(8885),
            i = r(8311),
            a = r(895),
            s = r(17),
            c = r(95),
            u = r(4231),
            f = c("replace"),
            l = RegExp.prototype,
            p = Math.max,
            d = function (e, t, r) {
              return r > e.length ? -1 : "" === t ? r : e.indexOf(t, r)
            };
          n({
            target: "String",
            proto: !0
          }, {
            replaceAll: function (e, t) {
              var r, n, c, h, g, y, v, b, A = o(this),
                m = 0,
                _ = 0,
                w = "";
              if (null != e) {
                if ((r = i(e)) && !~String(o("flags" in l ? e.flags : a.call(e))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                if (void 0 !== (n = e[f])) return n.call(e, A, t);
                if (u && r) return String(A).replace(e, t)
              }
              for (c = String(A), h = String(e), (g = "function" == typeof t) || (t = String(t)), y = h.length, v = p(1, y), m = d(c, h, 0); - 1 !== m;) b = g ? String(t(h, m, c)) : s(h, c, m, [], void 0, t), w += c.slice(_, m) + b, _ = m + y, m = d(c, h, m + v);
              return _ < c.length && (w += c.slice(_)), w
            }
          })
        },
        5940: (e, t, r) => {
          "use strict";
          var n = r(4954),
            o = r(4229),
            i = r(1176),
            a = r(4237),
            s = r(6051),
            c = r(8885),
            u = r(6637),
            f = r(17),
            l = r(8115),
            p = r(95)("replace"),
            d = Math.max,
            h = Math.min,
            g = "$0" === "a".replace(/./, "$0"),
            y = !!/./ [p] && "" === /./ [p]("a", "$0");
          n("replace", (function (e, t, r) {
            var n = y ? "$" : "$0";
            return [function (e, r) {
              var n = c(this),
                o = null == e ? void 0 : e[p];
              return void 0 !== o ? o.call(e, n, r) : t.call(String(n), e, r)
            }, function (e, o) {
              if ("string" == typeof o && -1 === o.indexOf(n) && -1 === o.indexOf("$<")) {
                var c = r(t, this, e, o);
                if (c.done) return c.value
              }
              var p = i(this),
                g = String(e),
                y = "function" == typeof o;
              y || (o = String(o));
              var v = p.global;
              if (v) {
                var b = p.unicode;
                p.lastIndex = 0
              }
              for (var A = [];;) {
                var m = l(p, g);
                if (null === m) break;
                if (A.push(m), !v) break;
                "" === String(m[0]) && (p.lastIndex = u(g, a(p.lastIndex), b))
              }
              for (var _, w = "", x = 0, S = 0; S < A.length; S++) {
                m = A[S];
                for (var k = String(m[0]), I = d(h(s(m.index), g.length), 0), T = [], E = 1; E < m.length; E++) T.push(void 0 === (_ = m[E]) ? _ : String(_));
                var O = m.groups;
                if (y) {
                  var C = [k].concat(T, I, g);
                  void 0 !== O && C.push(O);
                  var P = String(o.apply(void 0, C))
                } else P = f(k, g, I, T, O, o);
                I >= x && (w += g.slice(x, I) + P, x = I + k.length)
              }
              return w + g.slice(x)
            }]
          }), !!o((function () {
            var e = /./;
            return e.exec = function () {
              var e = [];
              return e.groups = {
                a: "7"
              }, e
            }, "7" !== "".replace(e, "$<a>")
          })) || !g || y)
        },
        8319: (e, t, r) => {
          "use strict";
          var n = r(4954),
            o = r(8311),
            i = r(1176),
            a = r(8885),
            s = r(7942),
            c = r(6637),
            u = r(4237),
            f = r(8115),
            l = r(3466),
            p = r(5650),
            d = r(4229),
            h = p.UNSUPPORTED_Y,
            g = [].push,
            y = Math.min,
            v = 4294967295;
          n("split", (function (e, t, r) {
            var n;
            return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
              var n = String(a(this)),
                i = void 0 === r ? v : r >>> 0;
              if (0 === i) return [];
              if (void 0 === e) return [n];
              if (!o(e)) return t.call(n, e, i);
              for (var s, c, u, f = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, h = new RegExp(e.source, p + "g");
                (s = l.call(h, n)) && !((c = h.lastIndex) > d && (f.push(n.slice(d, s.index)), s.length > 1 && s.index < n.length && g.apply(f, s.slice(1)), u = s[0].length, d = c, f.length >= i));) h.lastIndex === s.index && h.lastIndex++;
              return d === n.length ? !u && h.test("") || f.push("") : f.push(n.slice(d)), f.length > i ? f.slice(0, i) : f
            } : "0".split(void 0, 0).length ? function (e, r) {
              return void 0 === e && 0 === r ? [] : t.call(this, e, r)
            } : t, [function (t, r) {
              var o = a(this),
                i = null == t ? void 0 : t[e];
              return void 0 !== i ? i.call(t, o, r) : n.call(String(o), t, r)
            }, function (e, o) {
              var a = r(n, this, e, o, n !== t);
              if (a.done) return a.value;
              var l = i(this),
                p = String(e),
                d = s(l, RegExp),
                g = l.unicode,
                b = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (h ? "g" : "y"),
                A = new d(h ? "^(?:" + l.source + ")" : l, b),
                m = void 0 === o ? v : o >>> 0;
              if (0 === m) return [];
              if (0 === p.length) return null === f(A, p) ? [p] : [];
              for (var _ = 0, w = 0, x = []; w < p.length;) {
                A.lastIndex = h ? 0 : w;
                var S, k = f(A, h ? p.slice(w) : p);
                if (null === k || (S = y(u(A.lastIndex + (h ? w : 0)), p.length)) === _) w = c(p, w, g);
                else {
                  if (x.push(p.slice(_, w)), x.length === m) return x;
                  for (var I = 1; I <= k.length - 1; I++)
                    if (x.push(k[I]), x.length === m) return x;
                  w = _ = S
                }
              }
              return x.push(p.slice(_)), x
            }]
          }), !!d((function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments)
            };
            var r = "ab".split(e);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
          })), h)
        },
        8827: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(1017).end,
            i = r(9445)("trimEnd"),
            a = i ? function () {
              return o(this)
            } : "".trimEnd;
          n({
            target: "String",
            proto: !0,
            forced: i
          }, {
            trimEnd: a,
            trimRight: a
          })
        },
        1715: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(1017).start,
            i = r(9445)("trimStart"),
            a = i ? function () {
              return o(this)
            } : "".trimStart;
          n({
            target: "String",
            proto: !0,
            forced: i
          }, {
            trimStart: a,
            trimLeft: a
          })
        },
        5794: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(1017).trim;
          n({
            target: "String",
            proto: !0,
            forced: r(9445)("trim")
          }, {
            trim: function () {
              return o(this)
            }
          })
        },
        6882: (e, t, r) => {
          r(8423)("asyncIterator")
        },
        634: (e, t, r) => {
          "use strict";
          var n = r(3103),
            o = r(7400),
            i = r(9859),
            a = r(816),
            s = r(5052),
            c = r(1787).f,
            u = r(7081),
            f = i.Symbol;
          if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
            var l = {},
              p = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                  t = this instanceof p ? new f(e) : void 0 === e ? f() : f(e);
                return "" === e && (l[t] = !0), t
              };
            u(p, f);
            var d = p.prototype = f.prototype;
            d.constructor = p;
            var h = d.toString,
              g = "Symbol(test)" == String(f("test")),
              y = /^Symbol\((.*)\)[^)]+$/;
            c(d, "description", {
              configurable: !0,
              get: function () {
                var e = s(this) ? this.valueOf() : this,
                  t = h.call(e);
                if (a(l, e)) return "";
                var r = g ? t.slice(7, -1) : t.replace(y, "$1");
                return "" === r ? void 0 : r
              }
            }), n({
              global: !0,
              forced: !0
            }, {
              Symbol: p
            })
          }
        },
        1382: (e, t, r) => {
          r(2574)("Float32", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        1982: (e, t, r) => {
          r(2574)("Float64", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        6618: (e, t, r) => {
          "use strict";
          var n = r(8200);
          (0, r(9918).exportTypedArrayStaticMethod)("from", r(5215), n)
        },
        4074: (e, t, r) => {
          r(2574)("Int16", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        4696: (e, t, r) => {
          r(2574)("Int32", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        3229: (e, t, r) => {
          r(2574)("Int8", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        9527: (e, t, r) => {
          "use strict";
          var n = r(9918),
            o = r(8200),
            i = n.aTypedArrayConstructor;
          (0, n.exportTypedArrayStaticMethod)("of", (function () {
            for (var e = 0, t = arguments.length, r = new(i(this))(t); t > e;) r[e] = arguments[e++];
            return r
          }), o)
        },
        315: (e, t, r) => {
          "use strict";
          var n = r(9918),
            o = r(9859),
            i = r(4229),
            a = r(3819),
            s = r(4237),
            c = r(3867),
            u = r(2671),
            f = r(8506),
            l = r(6358),
            p = r(9811),
            d = n.aTypedArray,
            h = n.exportTypedArrayMethod,
            g = o.Uint16Array,
            y = g && g.prototype.sort,
            v = !!y && !i((function () {
              var e = new g(2);
              e.sort(null), e.sort({})
            })),
            b = !!y && !i((function () {
              if (l) return l < 74;
              if (u) return u < 67;
              if (f) return !0;
              if (p) return p < 602;
              var e, t, r = new g(516),
                n = Array(516);
              for (e = 0; e < 516; e++) t = e % 4, r[e] = 515 - e, n[e] = e - 2 * t + 3;
              for (r.sort((function (e, t) {
                  return (e / 4 | 0) - (t / 4 | 0)
                })), e = 0; e < 516; e++)
                if (r[e] !== n[e]) return !0
            }));
          h("sort", (function (e) {
            var t = this;
            if (void 0 !== e && a(e), b) return y.call(t, e);
            d(t);
            var r, n = s(t.length),
              o = Array(n);
            for (r = 0; r < n; r++) o[r] = t[r];
            for (o = c(t, function (e) {
                return function (t, r) {
                  return void 0 !== e ? +e(t, r) || 0 : r != r ? -1 : t != t ? 1 : 0 === t && 0 === r ? 1 / t > 0 && 1 / r < 0 ? 1 : -1 : t > r
                }
              }(e)), r = 0; r < n; r++) t[r] = o[r];
            return t
          }), !b || v)
        },
        3161: (e, t, r) => {
          r(2574)("Uint16", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        723: (e, t, r) => {
          r(2574)("Uint32", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        3675: (e, t, r) => {
          r(2574)("Uint8", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }))
        },
        6920: (e, t, r) => {
          r(2574)("Uint8", (function (e) {
            return function (t, r, n) {
              return e(this, t, r, n)
            }
          }), !0)
        },
        4962: (e, t, r) => {
          r(5738)
        },
        6481: (e, t, r) => {
          r(4173)
        },
        8990: (e, t, r) => {
          r(7919)
        },
        884: (e, t, r) => {
          r(7178)
        },
        5431: (e, t, r) => {
          r(3887)
        },
        5704: (e, t, r) => {
          r(1639)
        },
        6886: (e, t, r) => {
          var n = r(9859),
            o = r(5694),
            i = r(5735),
            a = r(5762),
            s = r(95),
            c = s("iterator"),
            u = s("toStringTag"),
            f = i.values;
          for (var l in o) {
            var p = n[l],
              d = p && p.prototype;
            if (d) {
              if (d[c] !== f) try {
                a(d, c, f)
              } catch (e) {
                d[c] = f
              }
              if (d[u] || a(d, u, l), o[l])
                for (var h in i)
                  if (d[h] !== i[h]) try {
                    a(d, h, i[h])
                  } catch (e) {
                    d[h] = i[h]
                  }
            }
          }
        }
      },
      t = {};

    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = t[n] = {
        exports: {}
      };
      return e[n](i, i.exports, r), i.exports
    }
    r.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, {
        a: t
      }), t
    }, r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      })
    }, r.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, (() => {
      let e = !1;
      if (r.g.__wxConfig && "string" == typeof r.g.__wxConfig.platform) "ios" === r.g.__wxConfig.platform.toLowerCase() && (e = !0);
      else if ("undefined" != typeof navigator && "string" == typeof navigator.userAgent) {
        const t = navigator.userAgent.toLowerCase();
        (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0) && (e = !0)
      }
      const t = [];
      e && (r.g.Promise = void 0, t.push("Promise")), r(305)({
        usePolyfill: t,
        useNative: ["WeakMap"]
      }), r(5482), r(9401)
    })()
  })();
  var __wxConfig, Foundation, __wxTest__ = !1,
    wxRunOnDebug = function (e) {
      e()
    };
  (() => {
    "use strict";
    var e = {
      d: (t, r) => {
        for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: r[n]
        })
      }
    };
    e.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    (() => {
      e.d(t, {
        default: () => O
      });
      class r {
        constructor() {
          this.listeners = {}
        }
        emit(e, t) {
          if (this.listeners[e] && this.listeners[e].length > 0) {
            let r = !1;
            return this.listeners[e].forEach((function (e) {
              0 !== e.count && e.cb(t), e.count > 0 && e.count--, 0 === e.count && (r = !0)
            })), r && (this.listeners[e] = this.listeners[e].filter((e => 0 !== e.count))), !0
          }
          return !1
        }
        many(e, t, r) {
          if (!t) return this;
          const n = {
            count: r,
            cb: t
          };
          return this.listeners[e] ? this.listeners[e].push(n) : this.listeners[e] = [n], this
        }
        on(e, t) {
          this.many(e, t, -1)
        }
        once(e, t) {
          this.many(e, t, 1)
        }
        off(e, t) {
          for (let r = 0; r < this.listeners[e].length; r++) {
            const n = this.listeners[e][r];
            if (n.cb === t) return void(n.count = 0)
          }
        }
      }
      const n = e.g.__wxLibrary,
        o = e.g.__wxConfig,
        i = n.envType,
        a = n.contextType,
        s = "Service" === i,
        c = "WebView" === i,
        u = "Worker" === i,
        f = "Widget" === i,
        l = c || s && 0 === a.indexOf("App:"),
        p = s && 0 === a.indexOf("Game:"),
        d = u && "function" == typeof e.g.workerInvokeJsApi,
        h = !!o.isIsolateContext,
        g = s && (h && a.indexOf("Uncertain") >= 0 || a.indexOf("MainContext") >= 0),
        y = s && a.indexOf("SubContext") >= 0,
        v = g || y,
        b = c || g,
        A = "wxlib" === o.workerContentType,
        m = {
          platform: function () {
            let e = o.platform;
            if (!e && c) {
              const t = window.navigator.userAgent.toLowerCase();
              t.indexOf("devtools") >= 0 ? e = "devtools" : t.indexOf("miniprogramenv/windows") >= 0 ? e = "windows" : t.indexOf("miniprogramenv/mac") >= 0 ? e = "mac" : t.indexOf("miniprogramenv/mina") >= 0 ? e = "mina" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? e = "ios" : t.indexOf("android") >= 0 && (e = "android")
            }
            return (e || "unknown").toLowerCase()
          }(),
          SDKVersion: "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version,
          isIsolateContext: v,
          isGame: p,
          isApp: l,
          isMainContext: g,
          isSubContext: y,
          isSafeEnv: b,
          isService: s,
          isWebView: c,
          isWorker: u,
          isWidget: f,
          isSupportWorkerAPI: d,
          typeStr: i,
          isWXLibWorker: A
        },
        _ = new r,
        w = {},
        x = "configReady",
        S = "libraryReady";

      function k(e, t) {
        e in w ? t(w[e]) : E.once("lifeCycle:" + e, t)
      }

      function I(e, t) {
        return !(e in w) && (w[e] = t, E.emit("lifeCycle:" + e, t))
      }
      const T = e.g,
        E = {
          EventEmitter: r,
          on: _.on.bind(_),
          emit: _.emit.bind(_),
          once: _.once.bind(_),
          onConfigReady: k.bind(null, x),
          emitConfigReady: I.bind(null, x),
          get isConfigReady() {
            return x in w
          },
          onLibraryReady: k.bind(null, S),
          emitLibraryReady: I.bind(null, S),
          get isLibraryReady() {
            return S in w
          },
          onBridgeReady(e) {
            void 0 !== WeixinJSBridge ? e() : "object" == typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
          },
          env: m,
          global: T
        };
      "undefined" != typeof __Function__ && (Function = function () {
        return "return this" === arguments[arguments.length - 1] ? function () {
          return T
        } : new __Function__(...arguments)
      }, Function.prototype = __Function__.prototype);
      e.g.__wxLibrary.onEnd = function () {
        E.emitLibraryReady({})
      };
      const O = E
    })(), Foundation = t.default
  })();
  var nativeTrans = function (e) {
      "use strict";
      var t = "webViewCreated",
        r = "nativeTransFail",
        n = "nativeTransReady";
      console;
      if ("object" != typeof e.ntrans) return e.__nativeTransEnabled__ = !1, {
        enabled: !1,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: r
      };
      e.__nativeTransEnabled__ = !0;
      var o = e.ntrans,
        i = o.id,
        a = i === o.serviceId,
        s = {};

      function c(e) {
        a ? e(o.serviceId) : Foundation.onConfigReady((function () {
          e(o.serviceId)
        }))
      }

      function u(e, t) {
        var r = s[e] = s[e] || {
          connectedTime: 0,
          dataQueue: [],
          initTime: Date.now()
        };
        return "number" == typeof t && (r.id = t), s[e]
      }

      function f(e, t) {
        return {
          event: e,
          param: t,
          id: i,
          sendTime: Date.now()
        }
      }
      return c((function () {
        delete e.ntrans
      })), {
        enabled: !0,
        publishToTargetWithQueue: function (e, t, r) {
          var n = u(e),
            i = f(t, r);
          n.connectedTime ? o.postMessage(n.id, i) : Date.now() - n.initTime > 3e5 ? n.dataQueue = [] : n.dataQueue.push(i)
        },
        packMessage: f,
        broadcastMessage: function (e, t) {
          o.broadcastMessage(e, t)
        },
        onMessage: function (e, t) {
          t !== i && (o.setMessageListener(), i = t), o.setMessageListener(t, (function (t) {
            "function" == typeof e && e(t.event, t.param, t.id, t.sendTime)
          }))
        },
        registerTarget: function (e, t) {
          var r = u(e, t);
          r.connectedTime = Date.now(), o.postMessage(r.id, f(n)), r.dataQueue.forEach((function (e) {
            e.sendTime = Date.now(), o.postMessage(r.id, e)
          })), r.dataQueue = []
        },
        onceServiceConfirmed: c,
        revertTargets: function () {
          for (var e in s) s[e].dataQueue.forEach((function (t) {
            WeixinJSBridge.publish(t.event, t.param, [e])
          })), s[e].dataQueue = [];
          s = {}
        },
        isService: a,
        get id() {
          return i
        },
        SERVICE_TAG: "AppService",
        EVT_NTRANS_READY: n,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: r,
        version: o.version,
        addGroup: o.addGroup.bind(o)
      }
    }(this),
    WeixinJSBridge = function (e) {
      "use strict";
      "function" == typeof logxx && logxx("jsbridge start");
      var t = "undefined" != typeof __devtoolssubcontext && __devtoolssubcontext;
      if (e.navigator && e.navigator.userAgent) {
        var r = e.navigator.userAgent;
        (r.indexOf("appservice") > -1 || r.indexOf("wechatdevtools") > -1) && (t = !0)
      }
      if (t && !Foundation.env.isWorker || e.useGlobalJSBridge) {
        var n = e.WeixinJSBridge;
        return delete e.WeixinJSBridge, n
      }
      if (e.OSUseGlobalJSBridge) return n = e.WeixinJSBridge;
      var o = e.__wxConfig || {},
        i = o.isWK,
        a = {},
        s = 0,
        c = {},
        u = {},
        f = "custom_event_",
        l = {},
        p = e.webkit,
        d = e.WeixinJSCore;
      "object" == typeof d && "function" != typeof d.publishHandler && (d.publishHandler = function () {}), Foundation.env.isWorker && Foundation.env.isSupportWorkerAPI && (d = {
        invokeHandler: e.workerInvokeJsApi
      }, s = 1 << 25), delete e.webkit, e.WeixinJSCore = {
        invokeHandler: function () {},
        publishHandler: function () {},
        setTimerHandler: function () {},
        clearTimerHandler: function () {}
      };
      var h = JSON.parse,
        g = JSON.stringify,
        y = function (e, t) {
          if (void 0 !== e && "function" == typeof a[t] && "" !== e && null !== e) {
            if ("string" == typeof e) try {
              e = h(e), e = WeixinNativeBuffer.unpack(e)
            } catch (t) {
              e = {}
            }
            var r = a[t];
            delete a[t], "function" == typeof r && r(e)
          }
        },
        v = function (e, t, r, n = !1) {
          var o = t;
          n || (t = WeixinNativeBuffer.pack(t), o = g(t || {}));
          var c = ++s;
          a[c] = r,
            function (e, t, r) {
              if (d) o = d.invokeHandler(e, t, r), y(o, r);
              else {
                var n = {
                  event: e,
                  paramsString: t,
                  callbackId: r
                };
                if (i) {
                  var o = prompt("webgame_invoke", g(n));
                  y(o, r)
                } else p.messageHandlers.invokeHandler.postMessage(n)
              }
            }(e, o, c)
        },
        b = function (e, t) {
          t = WeixinNativeBuffer.unpack(t);
          var r = a[e];
          delete a[e], "function" == typeof r && r(t)
        },
        A = function (e, t) {
          c[e] = t
        },
        m = function (e, t, r) {
          ! function (e, t, r) {
            d ? d.publishHandler(e, g(t), g(r)) : p.messageHandlers.publishHandler.postMessage({
              event: e,
              paramsString: g(t),
              webviewIds: g(r)
            })
          }(f + e, t, r)
        },
        _ = function (e, t) {
          l[f + e] = t
        },
        w = function (e, t, r, n) {
          var o, i;
          t = WeixinNativeBuffer.unpack(t), -1 != e.indexOf(f) ? o = l[e] : (o = c[e], i = u[e]), "function" == typeof o && o(t, r, n), i && i.forEach((e => e(t, r, n)))
        };
      return e.WeixinJSBridge = {
        get invokeCallbackHandler() {
          return b
        },
        get subscribeHandler() {
          return w
        }
      }, o && o.clientDebug && (e.WeixinJSBridge = {
        on: A,
        publish: m,
        invoke: v,
        subscribe: _,
        get invokeCallbackHandler() {
          return b
        },
        get subscribeHandler() {
          return w
        }
      }), {
        on: A,
        publish: m,
        invoke: v,
        subscribe: _,
        loadJsFiles: function (e, t) {
          v("loadJsFiles", {
            paths: e
          }, t)
        },
        addEventListener: function (e, t) {
          u[e] ? u[e].add(t) : u[e] = new Set([t])
        },
        removeEventListener: function (e, t) {
          u[e] && (t ? u[e].delete(t) : delete u[e])
        },
        get invokeCallbackHandler() {
          return b
        },
        get subscribeHandler() {
          return w
        }
      }
    }(this);
  Foundation.onBridgeReady((function () {
      var e, t = String.prototype.replace,
        r = WeixinJSBridge.publish,
        n = [];
      WeixinJSBridge.publish = function (o, i, a) {
        var s;
        Foundation.isConfigReady || nativeTrans.enabled ? (a = function (e) {
          if (Array.isArray(e)) {
            var t = e.filter((function (e) {
              return null != e
            }));
            if (0 === e.length || 0 !== t.length) return t
          }
        }(a || [])) && (s = o || "", o = t.call(s, /["'\\]/g, ""), e && e(o, i, a) || r.call(WeixinJSBridge, o, i, a)) : n.push([o, i, a])
      }, Foundation.onConfigReady((function () {
        n.forEach((function (e) {
          WeixinJSBridge.publish.apply(WeixinJSBridge, e)
        })), n = []
      })), WeixinJSBridge.setCustomPublishHandler = function (t) {
        e = t
      }
    })),
    function (e) {
      "use strict";
      var t = JSON.parse,
        r = JSON.stringify,
        n = Object.defineProperty,
        o = Foundation.env.isSubContext,
        i = Foundation.env.isSafeEnv,
        a = {},
        s = (Foundation.env.isWXLibWorker, ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"]);

      function c(e, t, r, o) {
        n(e, r, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (r in t) return t[r];
            try {
              (new Error).stack, "object" == typeof Reporter && "function" == typeof Reporter.reportKeyValue && Reporter.reportKeyValue({
                key: "DeprecatedAPI",
                value: "__wxConfig." + r,
                force: !0
              })
            } catch (e) {}
            try {
              return "function" != typeof o ? o : o()
            } catch (e) {
              return
            }
          },
          set: function (e) {
            t[r] = e
          }
        })
      }

      function u(e) {
        return t(r(e))
      }
      var f = !0 === (__wxConfig = void 0 !== e.__wxConfig ? i ? Object.assign({}, e.__wxConfig) : u(e.__wxConfig) : {}).preload,
        l = !1,
        p = [],
        d = [],
        h = Foundation.env.typeStr;
      Foundation.env.isSubContext && (h = "SubContext");

      function g(e, t) {
        try {
          Date.now();
          e(t);
          Date.now()
        } catch (e) {
          e.message, e.stack, "object" == typeof Reporter && "function" == typeof Reporter.errorReport && Reporter.errorReport({
            key: "appServiceSDKScriptError",
            error: e,
            extend: "at wxConfig.onReady callback"
          })
        }
      }
      var y = function (e) {
          d.push(e)
        },
        v = function (e) {
          l ? void 0 !== __wxConfig && g(e, __wxConfig) : "function" == typeof e && p.push(e)
        },
        b = function (t) {
          t.tabBar && t.tabBar.list && t.tabBar.list.forEach((function (e) {
            delete e.iconData, delete e.selectedIconData
          })), delete t.permission;
          var r = t.subPackages || t.subpackages;
          return r && r.length > 0 && (r.forEach((function (e) {
            delete e.pages
          })), t.subPackages = t.subpackages = r), l && (__libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (o || (__wxConfig._preloadRule = __wxConfig.preloadRule || {}, __wxConfig._page = __wxConfig.page || {}, delete __wxConfig.preloadRule, delete __wxConfig.page), __wxConfig.updatePage = function (e, t) {
            __wxConfig.page = __wxConfig.page || {}, __wxConfig.page[e] = __wxConfig.page[e + ".html"] = t, a[e + ".html"] = u(t)
          }, __wxConfig.updatePreloadRule = function (e, t) {
            __wxConfig.preloadRule = __wxConfig.preloadRule || {}, __wxConfig.preloadRule[e] = t
          }), e.__wxConfig.page = e.__wxConfig.page || {}, __wxConfig.page = __wxConfig.page || {}), t
        },
        A = function (e) {
          return e.onReady = v, e.beforeReady = y, o || (e.preload = f), e.isReady = l, e.isSubContext = o, e.envTag = h, e.isSafeContext = i, e.sdkVersion = e.SDKVersion = Foundation.env.SDKVersion, e.twoPhaseInject = !0, e.platform = Foundation.env.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio), e
        },
        m = function () {
          void 0 === e.__wxConfig || l || (l = !0, Object.assign(__wxConfig, i ? e.__wxConfig : u(e.__wxConfig)), __wxConfig = A(__wxConfig), __wxConfig = b(__wxConfig), function (e) {
            if (!d.length) return e();
            var t = !1;
            setTimeout((function () {
              t || (console.warn("beforeReady timeout"), t = !0, e())
            }), 3e3), Promise.all(d).catch((function (e) {
              console.warn("beforeReady error", e)
            })).then((function () {
              t || (t = !0, e())
            })), d = []
          }((function () {
            __wxConfig.onReadyStart = Date.now(), p.forEach((function (e) {
                g(e, __wxConfig)
              })), __wxConfig.onReadyEnd = Date.now(), p = [],
              function () {
                if (!i) {
                  var t = e.__wxConfig,
                    r = {},
                    n = {};
                  a = t.page || {}, __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (a = {});
                  try {
                    c(n, r, "deprecated", !0), s.forEach((function (e) {
                      if (e in t) {
                        var o = t[e];
                        switch (e) {
                          case "page":
                            c(n, r, e, a);
                            break;
                          case "env":
                            c(n, r, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.env is deprecated, please use wx.env instead."), {
                                USER_DATA_PATH: o.USER_DATA_PATH
                              }
                            }));
                            break;
                          case "accountInfo":
                            c(n, r, e, {
                              appId: o.appId,
                              icon: o.icon,
                              nickname: o.nickname
                            });
                            break;
                          case "appLaunchInfo":
                            c(n, r, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {}
                            }));
                            break;
                          case "wxAppInfo":
                            c(n, r, e, {
                              maxRequestConcurrent: o.maxRequestConcurrent,
                              maxUploadConcurrent: o.maxUploadConcurrent,
                              maxDownloadConcurrent: o.maxDownloadConcurrent,
                              maxWorkerConcurrent: o.maxWorkerConcurrent,
                              maxWebsocketConnect: o.maxWebsocketConnect
                            });
                            break;
                          default:
                            c(n, r, e, o)
                        }
                      }
                    })), e.__wxConfig = n
                  } catch (r) {
                    e.__wxConfig = t
                  }
                }
              }()
          })))
        };

      function _() {
        Foundation.emitConfigReady(__wxConfig)
      }
      __wxConfig = A(__wxConfig), __wxConfig = b(__wxConfig), Foundation.onConfigReady((function () {
        m()
      })), o ? __wxConfig.__readyHandler = _ : f ? Foundation.onBridgeReady((function () {
        WeixinJSBridge.on("onWxConfigReady", _)
      })) : Foundation.onLibraryReady(_)
    }(this),
    function (e) {
      "use strict";

      function t(e) {
        Foundation.emit("unhandledRejection", e) || console.error("Uncaught (in promise)", e.reason)
      }
      var r, n, o = (r = [], n = [], {
        set: function (e, t) {
          r.push(e), n.push(t)
        },
        get: function (e) {
          var t = r.indexOf(e);
          if (-1 !== t) return n[t]
        },
        delete: function (e) {
          var t = r.indexOf(e); - 1 !== t && (r.splice(t, 1), n.splice(t, 1))
        }
      });
      "object" == typeof e && "function" == typeof e.addEventListener ? (e.addEventListener("unhandledrejection", (function (e) {
        t({
          reason: e.reason,
          promise: e.promise
        }), e.preventDefault()
      })), e.addEventListener("error", (function (e) {
        var t;
        t = e.error || e.message, Foundation.emit("error", t) || console.error("Uncaught", t), e.preventDefault()
      }))) : void 0 === e.onunhandledrejection && Object.defineProperty(e, "onunhandledrejection", {
        value: function (e) {
          e = e || {}, Object.prototype.hasOwnProperty.call(e, "type") ? function (e) {
            var r = o.get(e.promise);
            if (r) r.event = e;
            else {
              var n = {
                event: e
              };
              setTimeout((function () {
                0 === n.event.type && t(n.event), o.delete(n.event.promise)
              }), 0), o.set(e.promise, n)
            }
          }({
            type: e.type,
            reason: e.reason,
            promise: e.promise
          }) : t({
            reason: e.reason,
            promise: e.promise
          })
        }
      })
    }(this);
  var NativeBuffer = function (e) {
      var t = e.WeixinNativeBuffer,
        r = e.getNativeBufferId,
        n = e.setNativeBuffer,
        o = e.getNativeBuffer,
        i = __wxConfig || {},
        a = !1;
      "android" === i.platform || "windows" === i.platform || "mina" === i.platform ? a = "function" == typeof r && "function" == typeof n && "function" == typeof o && i.nativeBufferEnabled : "ios" !== i.platform && "mac" !== i.platform || (a = null != t);
      var s = function (e) {
          var o = {};
          return a ? o.id = function (e) {
            var o = e.__proto__;
            e.__proto__ = ArrayBuffer.prototype;
            var i = -1;
            return t ? i = t.new(e) : "function" == typeof r && "function" == typeof n && (i = r(), n(i, e)), e.__proto__ = o, i
          }(e) : o.base64 = p(e), o
        },
        c = function (e) {
          var r;
          if (null != e) return a && void 0 !== e.id ? (r = e.id, t ? t.get(r) : "function" == typeof o ? o(r) : void 0) : void 0 !== e.base64 ? d(e.base64) : void 0
        },
        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        f = f || function (e) {
          for (var t, r, n = String(e), o = "", i = 0, a = u; n.charAt(0 | i) || (a = "=", i % 1); o += a.charAt(63 & t >> 8 - i % 1 * 8)) {
            if ((r = n.charCodeAt(i += 3 / 4)) > 255) throw new Error('"btoa" failed');
            t = t << 8 | r
          }
          return o
        },
        l = l || function (e) {
          var t = String(e).replace(/=+$/, ""),
            r = "";
          if (t.length % 4 == 1) throw new Error('"atob" failed');
          for (var n, o, i = 0, a = 0; o = t.charAt(a++); ~o && (n = i % 4 ? 64 * n + o : o, i++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) o = u.indexOf(o);
          return r
        },
        p = function (e) {
          for (var t = "", r = new Uint8Array(e), n = r.byteLength, o = 0; o < n; o++) t += String.fromCharCode(r[o]);
          return f(t)
        },
        d = function (e) {
          for (var t = l(e), r = t.length, n = new Uint8Array(r), o = 0; o < r; o++) n[o] = t.charCodeAt(o);
          return n.buffer
        },
        h = function (e) {
          return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        };
      return delete e.WeixinNativeBuffer, delete e.getNativeBufferId, delete e.setNativeBuffer, delete e.getNativeBuffer, {
        new: s,
        get: c,
        useCompatibleMode: function (e) {
          t && t.useCompatibleMode(e)
        },
        pack: function (e) {
          if (null == e) return e;
          var t = [];
          for (var r in e) {
            var n = e[r];
            if (void 0 !== n && "ArrayBuffer" === h(n) && void 0 !== n.byteLength)(i = s(n)).key = r, t.push(i)
          }
          if (t.length > 0) {
            for (var o = 0; o < t.length; o++) {
              var i;
              delete e[(i = t[o]).key]
            }
            e.__nativeBuffers__ = t
          }
          return e
        },
        unpack: function (e) {
          if (null == e || null == e.__nativeBuffers__) return e;
          var t = e.__nativeBuffers__;
          delete e.__nativeBuffers__;
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            if (null != n) {
              var o = c(n);
              void 0 !== o && "ArrayBuffer" === h(o) && (e[n.key] = o)
            }
          }
          return e
        },
        packWithBase64: function (e) {
          if (null == e) return e;
          var t = [];
          for (var r in e) {
            var n = e[r];
            if (void 0 !== n && "ArrayBuffer" === h(n) && void 0 !== n.byteLength)(i = {
              base64: p(n)
            }).key = r, t.push(i)
          }
          if (t.length > 0) {
            for (var o = 0; o < t.length; o++) {
              var i;
              delete e[(i = t[o]).key]
            }
            e.__nativeBuffers__ = t
          }
          return e
        }
      }
    }(this),
    WeixinNativeBuffer = NativeBuffer;
  NativeBuffer = null;
  var wxNativeConsole, Protect, Safeway, wxConsole = ["log", "info", "warn", "error", "debug", "time", "timeEnd", "group", "groupEnd"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {}),
    wxPerfConsole = ["log", "info", "warn", "error", "time", "timeEnd", "trace", "profile", "profileSync"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {});
  (() => {
    "use strict";
    var e = {
        n: t => {
          var r = t && t.__esModule ? () => t.default : () => t;
          return e.d(r, {
            a: r
          }), r
        },
        d: (t, r) => {
          for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {};
    e.d(t, {
      default: () => p
    });
    const r = BabelRuntimeHelpers.objectSpread2;
    var n = e.n(r);
    const {
      onConfigReady: o,
      env: i
    } = Foundation;
    let a = ["log", "info", "warn", "error", "debug", "createLogger"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {});

    function s(e, t) {
      this.num = e, this.type = t
    }
    const c = {
        ALL: new s(Number.MIN_VALUE, "ALL"),
        DEBUG: new s(5e3, "DEBUG"),
        LOG: new s(1e4, "LOG"),
        INFO: new s(2e4, "INFO"),
        WARN: new s(3e4, "WARN"),
        ERROR: new s(4e4, "ERROR"),
        OFF: new s(Number.MAX_VALUE, "OFF")
      },
      u = (e, t) => ({
        debug: e(c.DEBUG, t),
        log: e(c.LOG, t),
        info: e(c.INFO, t),
        warn: e(c.WARN, t),
        error: e(c.ERROR, t)
      });
    let f = c.INFO;
    const l = () => {
      const e = __wxConfig.platform;
      let t = [];
      const r = function (t) {
          const r = ("0" + (t.getMonth() + 1)).slice(-2),
            n = ("0" + t.getDate()).slice(-2),
            o = ("0" + t.getHours()).slice(-2),
            i = ("0" + t.getMinutes()).slice(-2),
            a = ("0" + t.getSeconds()).slice(-2),
            s = ("00" + t.getMilliseconds()).slice(-3),
            c = t.getFullYear() + "-" + r + "-" + n,
            u = o + ":" + i + ":" + a + "." + s;
          if ("ios" === e) {
            return c + " " + u + "000" + (t.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
          }
          return c + " " + (t.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + u
        },
        i = function (e, r) {
          const n = e.type;
          return function (...o) {
            if (r && Array.prototype.unshift.call(o, "[" + r + "]"), wxConsole[n.toLowerCase()].call(wxConsole, ...o), e.num >= f.num) {
              const e = new Date,
                r = Array.prototype.slice.call(o).map((e => {
                  switch (typeof e) {
                    case "bigint":
                    case "boolean":
                    case "function":
                    case "number":
                      return e.toString();
                    case "string":
                      return e;
                    case "symbol":
                      return e.toString();
                    case "undefined":
                      return "undefined";
                    case "object": {
                      let t;
                      try {
                        t = JSON.stringify(e)
                      } catch (e) {
                        t = "[对象含有循环引用]"
                      }
                      return t
                    }
                    default:
                      return
                  }
                })).join(" ");
              t && t.length > 1024 && t.shift(), t.push({
                date: e,
                type: n,
                content: r
              })
            }
          }
        };
      o((function () {
        setTimeout((function n() {
          var o;
          (setTimeout(n, 3e3), 0 !== t.length) && (o = t, "ios" === e ? WeixinJSBridge.invoke("systemLog", {
            dataArray: o.map((function (e) {
              return {
                message: "\n" + r(e.date) + " [" + e.type[0].toUpperCase() + "][wxapplib]] " + e.content
              }
            }))
          }) : "android" === e && WeixinJSBridge.invoke("systemLog", {
            message: ["\n"].concat(o.map((function (e) {
              return "[" + e.type[0].toUpperCase() + "][" + r(e.date) + "][wxapplib]] " + e.content
            }))).join("\n")
          }), t = [])
        }), 3e3)
      }));
      return n()(n()({}, u(i)), {}, {
        createLogger: function (e) {
          return u(i, "string" == typeof e ? e : "default")
        },
        __mergeSubContextLogs: e => {
          Array.isArray(e) && e.forEach((e => {
            const {
              level: t,
              logs: r,
              category: n
            } = e;
            i(t, n)(r)
          }))
        },
        __isFromMainContext: !0
      })
    };
    if (i.isWorker || i.isWidget) {
      const e = function () {
        return wxConsole
      };
      a = Object.assign({
        createLogger: e
      }, wxConsole)
    } else a = i.isSubContext && i.isIsolateContext ? (() => {
      let e = [];
      const t = (t, r) => (...n) => {
          e.push({
            level: t,
            logs: n,
            category: r
          })
        },
        r = () => {
          setTimeout((() => {
            const t = wxNativeConsole.__isFromMainContext ? wxNativeConsole.__mergeSubContextLogs : null;
            t ? (t(e), e = []) : r()
          }), 1e3)
        };
      return o(r), n()(n()({}, u(t)), {}, {
        createLogger: e => u(t, "string" == typeof e ? e : "default"),
        __isFromMainContext: !1
      })
    })() : l();
    const p = a;
    wxNativeConsole = t.default
  })(), (() => {
    var e = {
        184: (e, t, r) => {
          "use strict";
          r.r(t), r.d(t, {
            reportDeprecatedAPI: () => n
          });
          const n = e => {
            Reporter.reportKeyValue({
              key: "DeprecatedAPI",
              value: e
            })
          }
        },
        665: (e, t, r) => {
          "use strict";
          r.d(t, {
            Z: () => n
          });
          const n = __wxConfig
        },
        582: (e, t, r) => {
          "use strict";
          r.r(t), r.d(t, {
            PLATFORM: () => o,
            IS_DEVTOOLS: () => i,
            IS_ANDROID: () => a,
            IS_IOS: () => s,
            IS_WINDOWS: () => c,
            IS_MAC: () => u,
            IS_MINA: () => f,
            IS_PC: () => l,
            debugEnabled: () => p,
            HOST: () => d,
            IS_HOST_SDK: () => h,
            IS_HOST_WMPF: () => g,
            IS_HOST_WECHAT: () => y,
            IS_USE_NATIVE_MAP: () => v,
            WK_RENDERER_H5: () => b
          });
          var n = r(665);
          const o = n.Z.platform,
            i = "devtools" === n.Z.platform,
            a = "android" === n.Z.platform,
            s = "ios" === n.Z.platform,
            c = "windows" === n.Z.platform,
            u = "mac" === n.Z.platform,
            f = "mina" === n.Z.platform,
            l = c || u;

          function p() {
            if (n.Z && "debug" in n.Z && void 0 !== n.Z.debug) return !!n.Z.debug
          }
          const d = n.Z.host || {},
            h = "SDK" === d.env,
            g = "WMPF" === d.env,
            y = "WeChat" === d.env,
            v = d.forceUseNativeMap || !1,
            b = "object" == typeof window && window && window.__wkrenderer_h5
        },
        538: (e, t, r) => {
          const {
            reportDeprecatedAPI: n
          } = r(184), {
            IS_IOS: o
          } = r(582);
          e.exports = {
            hijack: function (e = !0, t = !0) {
              if (void 0 !== r.g.Function) {
                const e = {};

                function n() {
                  if (arguments.length > 0 && "return this" === arguments[arguments.length - 1]) return function () {
                    return t ? e : {}
                  }
                }
                n.prototype = r.g.Function.prototype, r.g.Function.prototype.constructor = n, r.g.Function = n
              }
              const i = globalThis;
              if ("undefined" != typeof eval && (o && r.g.__isAppServiceRemoteDebugMode__ || (eval = void 0)), "undefined" != typeof setTimeout && e) {
                const e = setTimeout;
                setTimeout = function (t, r = 0) {
                  if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                  const n = __errorTracer__.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                    o = [].slice.call(arguments, 2);
                  return e((function () {
                    n.apply(i, o)
                  }), r)
                };
                const t = setInterval;
                setInterval = function (e, r) {
                  if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                  const n = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                    o = [].slice.call(arguments, 2);
                  return t((function () {
                    n.apply(i, o)
                  }), r)
                }
              }
            },
            hijackWasm: function () {
              if ("undefined" != typeof WebAssembly) {
                ["compile", "compileStreaming", "instantiate", "instantiateStreaming", "validate", "Module"].forEach((e => {
                  if (void 0 === WebAssembly[e]) return;
                  const t = WebAssembly[e];
                  Object.defineProperty(WebAssembly, e, {
                    get: () => (n("globalWa"), t),
                    set: t => {
                      Object.defineProperty(WebAssembly, e, {
                        value: t,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                      })
                    },
                    configurable: !0,
                    enumerable: !0
                  })
                }))
              }
            }
          }
        },
        585: () => {
          if ("undefined" == typeof navigator) {
            try {
              new Function("\n      var GeneratorFunctionProto = Object.getPrototypeOf(function* () {});\n      Object.defineProperty(GeneratorFunctionProto, 'constructor', { value: function () {} });\n    ")()
            } catch (e) {}
            try {
              new Function("\n      var AsyncFunctionProto = Object.getPrototypeOf(async function () {});\n      Object.defineProperty(AsyncFunctionProto, 'constructor', { value: function () {} });\n    ")()
            } catch (e) {}
            try {
              new Function("\n      var AsyncGeneratorFunctionProto = Object.getPrototypeOf(async function* () {});\n      Object.defineProperty(AsyncGeneratorFunctionProto, 'constructor', { value: function () {} });\n    ")()
            } catch (e) {}
          }
        }
      },
      t = {};

    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = t[n] = {
        exports: {}
      };
      return e[n](i, i.exports, r), i.exports
    }
    r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      })
    }, r.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var n = {};
    (() => {
      "use strict";
      r.r(n), r.d(n, {
        doNotWriteGlobalObjs: () => u,
        doNotWriteObj: () => f,
        globalEsObjs: () => t,
        hijack: () => l.hijack,
        hijackWasm: () => l.hijackWasm,
        overwriteSetPrototypeOf: () => c
      });
      r(585);
      var e = r(665);
      const t = ["Array", "ArrayBuffer", "AsyncFunction", "Atomics", "Boolean", "DataView", "Date", "EvalError", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array", "InternalError", "Intl", "Intl.Collator", "Intl.DateTimeFormat", "Intl.NumberFormat", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "TypedArray", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
      "NodeJS" !== e.Z.JSEngineName && t.push("Error");
      const o = globalThis,
        i = r.g.Object.setPrototypeOf,
        a = (e, t, r, n) => {
          if (!e || !t || -1 !== t.indexOf("constructor")) return;
          let o;
          try {
            o = e[t]
          } catch (e) {
            return
          }
          if (!o) return;
          let s = Object.getOwnPropertyDescriptor(e, t);
          if (!n && !s && "__proto__" !== t) return;
          s = s || {
            enumerable: !!n,
            configurable: !0
          };
          const c = typeof o;
          if (o && ("function" === c || "object" === c) && (s.configurable && Object.defineProperty(e, t, {
              get: () => o,
              set(s) {
                if ("object" == typeof this || "function" == typeof this) {
                  if (this !== e) return a(this, t, r, !0), void(this[t] = s);
                  if (o !== s)
                    if (n) try {
                      o = s, "__proto__" === t && i(this, s)
                    } catch (e) {} else console.error(`[non-writable] modification of global variable '${r}' is not allowed when using plugins at app.json.`), "object" == typeof Reporter && (Reporter.reportKeyValue({
                      key: "GlobalReadOnly",
                      value: r
                    }), Reporter.reportIDKey({
                      key: "global_objs_readonly"
                    }))
                }
              },
              enumerable: s.enumerable,
              configurable: !!n && s.configurable
            }), !n && "__proto__" !== t)) {
            const e = Object.getOwnPropertyNames(o);
            "object" == typeof o && a(o, "__proto__", `${r}.__proto__`, !1);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              a(o, n, `${r}.${n}`, !1)
            }
          }
        },
        s = t.concat(["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"]),
        c = function () {
          Object.defineProperty(o.Object, "setPrototypeOf", {
            value: (e, t) => (e.__proto__ = t, e),
            configurable: !0
          })
        },
        u = function () {
          try {
            new Date;
            for (let e = 0; e < s.length; ++e) {
              const t = s[e];
              if (o[t]) {
                new Date;
                a(o, t, t, !1), new Date
              }
            }
            new Date
          } catch (e) {}
        },
        f = (e, t, r) => a(e, t, r, !1);
      var l = r(538)
    })(), Protect = n
  })(), (() => {
    "use strict";
    var e = (e, t, r) => {
        r.d(t, {
          default: () => q
        });
        let n = null;
        const o = () => null !== n;
        let i = [];
        WeixinJSBridge.subscribe("batchGetPluginPermissionBytes", (e => {
          n = e.data.pluginPermissionBytes, i.forEach((e => e())), i = []
        }));
        const a = e => e.split("/", 1)[0];

        function s(e, t) {
          if (delete t.permissionBytes, void 0 === t.pluginId) return t;
          const r = ((e, t) => {
            e = a(e);
            let r = n && n[e] && n[e][t];
            return null == r ? r = [0, 0, 0] : "object" != typeof r && (r = [r, r, r]), r
          })(t.pluginId, e);
          return t.permissionBytes = r, t.privateData = JSON.stringify({
            pluginId: t.pluginId
          }), t
        }

        function c(e, t, r, n) {
          r = parseInt(r, 10), f(e, t, (e => {
            n(e[0] === r)
          }))
        }

        function u(e, t, r, n) {
          r = parseInt(r, 10), f(e, t, (e => {
            n(e[0] !== r)
          }))
        }

        function f(e, t, r) {
          var s;
          s = () => {
            e = a(e);
            let o = n && n[e] && n[e][t];
            null == o ? o = [0, 0, 0] : "object" != typeof o && (o = [o, o, o]), r(o)
          }, o() ? s() : i.push(s)
        }
        const l = BabelRuntimeHelpers.objectSpread2;
        var p = r.n(l);
        const d = Function.prototype.call,
          h = d.bind(String.prototype.indexOf),
          g = d.bind(String.prototype.slice),
          y = d.bind(Array.prototype.sort),
          v = d.bind(Number.prototype.toString),
          b = d.bind(Object.prototype.toString),
          A = Object.keys,
          m = Array.isArray || function (e) {
            return "[object Array]" === b(e)
          },
          _ = e => {
            if ("string" == typeof e) return e;
            if ("number" == typeof e) {
              let t = v(e, 10);
              const r = h(t, ".");
              return r > 0 && (t = g(t, 0, r + 5)), t
            }
            if ("boolean" == typeof e) return !0 === e ? "true" : "false";
            if (m(e)) {
              let t = "";
              for (let r = 0; r < e.length; r++) t += _(e[r]) + ";";
              return `[${t}]`
            }
            if ("object" == typeof e) {
              let t = "";
              const r = A(e);
              y(r);
              for (let n = 0; n < r.length; ++n) t += r[n] + ":" + _(e[r[n]]) + ";";
              return `{${t}}`
            }
            return ""
          },
          w = ({
            apiName: e,
            args: t,
            argsList: r,
            seq: n
          }) => {
            let o = e;
            for (let e = 0; e < r.length; e++) o += "|" + _(t[r[e]]);
            return o += n, o
          },
          x = JSON.parse('{"i":{"createRequestTask":["__skipDomainCheck__","url"],"installDownloadTask":["downloadId"],"downloadAppInternal":["appUrl"],"addDownloadTaskStraight":["taskName","taskUrl","fileMd5"],"getInstallState":["packageName","packageNameArray"],"setClipboardData":["data"],"getClipboardData":[],"navigateBackApplication":[]}}'),
          S = Math.floor,
          k = Math.random,
          I = function () {
            var e, t, r = Function.prototype.call.bind(String.prototype.charAt),
              n = Function.prototype.call.bind(String.prototype.indexOf),
              o = (e = Function.prototype.call.bind(String.fromCharCode), t = String, function (...r) {
                return e(t, ...r)
              });
            return function (e) {
              var t = {};

              function r(n) {
                if (t[n]) return t[n].exports;
                var o = t[n] = {
                  i: n,
                  l: !1,
                  exports: {}
                };
                return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
              }
              return r.m = e, r.c = t, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: n
                })
              }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                  value: !0
                })
              }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                  }), 2 & t && "string" != typeof e)
                  for (var o in e) r.d(n, o, function (t) {
                    return e[t]
                  }.bind(null, o));
                return n
              }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                  return e.default
                } : function () {
                  return e
                };
                return r.d(t, "a", t), t
              }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }, r.p = "", r(r.s = 1)
            }([function (e, t, i) {
              i.r(t), i.d(t, "memory", (function () {
                return p
              })), i.d(t, "sha1", (function () {
                return d
              })), i.d(t, "setSalt", (function () {
                return h
              })), i.d(t, "main", (function () {
                return g
              })), i.d(t, "__wbindgen_malloc", (function () {
                return y
              })), i.d(t, "__wbindgen_realloc", (function () {
                return v
              })), i.d(t, "__wbindgen_free", (function () {
                return b
              })), i.d(t, "__wbindgen_start", (function () {
                return A
              }));
              var a = new ArrayBuffer(8),
                s = new Int32Array(a);
              new Float32Array(a), new Float64Array(a);
              var c, u = new ArrayBuffer(1114112),
                f = (c = new Uint8Array(u), function (e, t) {
                  var i, a;
                  if ("undefined" == typeof Buffer)
                    for (i = function (e) {
                        for (var t, i, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = "", u = 0; u < e.length;) t = n(s, r(e, u++)) << 18 | n(s, r(e, u++)) << 12 | (i = n(s, r(e, u++))) << 6 | (a = n(s, r(e, u++))), c += 64 === i ? o(t >> 16 & 255) : 64 === a ? o(t >> 16 & 255, t >> 8 & 255) : o(t >> 16 & 255, t >> 8 & 255, 255 & t);
                        return c
                      }(t), a = 0; a < i.length; a++) c[e + a] = i.charCodeAt(a);
                  else
                    for (i = Buffer.from(t, "base64"), a = 0; a < i.length; a++) c[e + a] = i[a]
                });
              f(1048576, "VHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAAAAQACQAAAAkABAAFwAAAF0CAAAJAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZVQAEAAoAAAAJAAQABcAAAAKAgAAJwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNhc3NlcnRpb24gZmFpbGVkOiBgKGxlZnQgPT0gcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiDsABAALQAAABkBEAAMAAAAJQEQAAMAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzQAEQADQAAADUABAAGAAAAFoIAAAJAAAAY2Fubm90IGFjY2VzcyBhIFRMUyB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgaXQgaXMgZGVzdHJveWVkYWxyZWFkeSBib3Jyb3dlZGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZAAAAAUAAAAAAAAAAQAAAAYAAAAHAAAAAAAAAAEAAAAIAAAACQAAAAAAAAABAAAACgAAACACEAAAAAAAIAIQAAAAAAAMAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAAGEAAABiAAAAYwAAAGQAAABlAAAAZgAAAA0AAAAIAAAABAAAAA4AAAAPAAAAEAAAAAgAAAAEAAAAEQAAABIAAAAAAAAAAQAAABMAAABydXN0LWNyeXB0by9zcmMvY3J5cHRvdXRpbC5ycwAAAKgCEAAdAAAALAAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgPT0gNKgCEAAdAAAAQQAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgKiA0ID09IGlucHV0LmxlbigpAACoAhAAHQAAAFIAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZHN0LmxlbigpID49IHNyYy5sZW4oKagCEAAdAAAAowAAAAkAAABOdW1lcmljIG92ZXJmbG93IG9jY3VyZWQuAAAAAAAAAHJ1c3QtY3J5cHRvL3NyYy9jcnlwdG91dGlsLnJzAAAAoAMQAB0AAABNAQAACQAAAKgCEAAdAAAAMQEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBpZHggPj0gc2VsZi5idWZmZXJfaWR4YXNzZXJ0aW9uIGZhaWxlZDogc2VsZi5idWZmZXJfaWR4ID09IDY0cnVzdC1jcnlwdG8vc3JjL3NoYTEucnMAAC8EEAAXAAAAhAAAAA4AAAB1bmtub3duIGljb3Nhcm91bmQgaW5kZXhAAAAAYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYAAAdAQQAC0AAAChBBAADAAAAK0EEAABAAAALwQQABcAAABdAQAABQAAAC8EEAAXAAAAZAEAAAUAAABhc3NlcnRpb24gZmFpbGVkOiAoIXN0LmNvbXB1dGVkKRUAAAAXAAAABAAAAAQAAAAYAAAAGQAAABoAAAAbAAAAAAAAAAEAAAAcAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yczQFEAArAAAAXwUQABUAAAB6AQAAFQAAAEFjY2Vzc0Vycm9yAB0AAAAQAAAABAAAAB4AAAAfAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAEAAAABAAAACMAAAAkAAAAJQ=="), f(1050080, "L3J1c3RjLzQ1NjBlYTc4OGNiNzYwZjBhMzQxMjcxNTZjNzhlMjU1Mjk0OWY3MzQvc3JjL2xpYmNvcmUvZm10L21vZC5ycwAA4AUQAEYAAABjAQAAEwAAACYAAAAAAAAAAQAAACcAAABzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93XwYQABEAAABIBhAAFwAAAAkDAAAFAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvciwAAAAAAAAAAQAAAC0AAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAA5AYQACAAAAAEBxAAEgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnMoBxAAKwAAAFMHEAAVAAAAegEAABUAAAC7BhAAAAAAAFMHEAAVAAAApgQAAAUAAAA6IAAAuwYQAAAAAACYBxAAAgAAAHNyYy9saWJjb3JlL3Jlc3VsdC5ycwAAAKwHEAAVAAAAjQQAAAUAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg7AcQAAYAAADyBxAAIgAAANQHEAAYAAAAGQoAAAUAAABzbGljZSBpbmRleCBzdGFydHMgYXQgIGJ1dCBlbmRzIGF0IAA0CBAAFgAAAEoIEAANAAAA1AcQABgAAAAfCgAABQAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTl9IH0="), f(1050960, "c3JjL2xpYmNvcmUvZm10L21vZC5ycwAAUAkQABYAAABWBAAAKAAAAFAJEAAWAAAAYgQAABEAAABFcnJvcg==");
              var l = function (e, t, r) {
                  var n = new e.Int8Array(r),
                    o = (new e.Int16Array(r), new e.Int32Array(r)),
                    i = new e.Uint8Array(r),
                    a = (new e.Uint16Array(r), new e.Uint32Array(r)),
                    c = (new e.Float32Array(r), new e.Float64Array(r), e.Math.imul),
                    u = (e.Math.fround, e.Math.abs, e.Math.clz32),
                    f = (e.Math.min, e.Math.max, e.Math.floor, e.Math.ceil, e.Math.sqrt, t.abort),
                    l = (e.NaN, e.Infinity, 1048576),
                    p = 0;

                  function d(e) {
                    var t = 0,
                      r = 0,
                      n = 0,
                      i = 0,
                      s = 0,
                      c = 0,
                      f = 0,
                      l = 0,
                      p = 0,
                      d = 0,
                      h = 0,
                      g = 0;
                    e: {
                      t: {
                        r: {
                          if (e >>> 0 >= 245) {
                            if (e >>> 0 >= 4294901709) break t;
                            if (i = -8 & (e = e + 11 | 0), !(l = o[262772])) break r;
                            s = 0 - i | 0, f = 0, (e >>>= 8) && (f = 31, i >>> 0 > 16777215 || (f = 62 + ((i >>> (6 - (e = u(e)) & 31) & 1) - (e << 1) | 0) | 0));
                            n: {
                              o: {
                                if (e = o[1051356 + (f << 2) >> 2]) {
                                  for (n = i << (31 == (0 | f) ? 0 : 25 - (f >>> 1) & 31);;) {
                                    if (!((r = -8 & o[e + 4 >> 2]) >>> 0 < i >>> 0 || (r = r - i | 0) >>> 0 >= s >>> 0 || (c = e, s = r, r))) {
                                      s = 0;
                                      break o
                                    }
                                    if (r = o[e + 20 >> 2], e = o[16 + ((n >>> 29 & 4) + e | 0) >> 2], t = r && (0 | r) != (0 | e) ? r : t, n <<= 1, !e) break
                                  }
                                  if (t) {
                                    e = t;
                                    break o
                                  }
                                  if (c) break n
                                }
                                if (c = 0, !(e = l & (0 - (e = 2 << (31 & f)) | e))) break r;
                                if (!(e = o[1051356 + (we(e & 0 - e) << 2) >> 2])) break r
                              }
                              for (; c = (t = (r = (t = -8 & o[e + 4 >> 2]) - i | 0) >>> 0 < s >>> 0 & t >>> 0 >= i >>> 0) ? e : c, s = t ? r : s, e = (t = o[e + 16 >> 2]) || o[e + 20 >> 2];);
                              if (!c) break r
                            }
                            if (s >>> 0 >= (e = o[262871]) - i >>> 0 && e >>> 0 >= i >>> 0) break r;
                            x(c);
                            n: if (s >>> 0 >= 16) {
                              if (o[c + 4 >> 2] = 3 | i, o[4 + (n = i + c | 0) >> 2] = 1 | s, o[s + n >> 2] = s, s >>> 0 >= 256) {
                                _(n, s);
                                break n
                              }
                              r = 1051092 + ((e = s >>> 3) << 3) | 0, t = o[262771], e = 1 << (31 & e), f = o[r + 8 >> 2], t & e || (o[262771] = e | t, f = r), e = f, o[r + 8 >> 2] = n, o[e + 12 >> 2] = n, o[n + 12 >> 2] = r, o[n + 8 >> 2] = e
                            } else e = i + s | 0, o[c + 4 >> 2] = 3 | e, o[4 + (e = e + c | 0) >> 2] = 1 | o[e + 4 >> 2];
                            return c + 8 | 0
                          }
                          n: {
                            o: {
                              if (!(3 & (r = (n = o[262771]) >>> (t = 31 & (e = (i = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3))))) {
                                if (i >>> 0 <= a[262871]) break r;
                                if (r) break o;
                                if (!(e = o[262772])) break r;
                                for (t = o[1051356 + (we(e & 0 - e) << 2) >> 2], s = (-8 & o[t + 4 >> 2]) - i | 0, n = t;;) {
                                  if (!(e = o[t + 16 >> 2]) && !(e = o[t + 20 >> 2])) break n;
                                  s = (r = (t = (-8 & o[e + 4 >> 2]) - i | 0) >>> 0 < s >>> 0) ? t : s, n = r ? e : n, t = e
                                }
                              }
                              s = (c = o[16 + (e = 1051084 + ((r = e + (1 & (-1 ^ r)) | 0) << 3) | 0) >> 2]) + 8 | 0,
                              (0 | (t = o[c + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (h = 1051084, g = xe(-2, r) & n, o[h >> 2] = g) : (o[t + 12 >> 2] = e, o[e + 8 >> 2] = t),
                              e = r << 3,
                              o[c + 4 >> 2] = 3 | e,
                              o[4 + (e = e + c | 0) >> 2] = 1 | o[e + 4 >> 2];
                              break t
                            }
                            return c = we(0 - (e = (0 - (e = 2 << t) | e) & r << t) & e),
                            l = o[16 + (e = 1051084 + (c << 3) | 0) >> 2],
                            (0 | (t = o[l + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (h = 1051084, g = xe(-2, c) & n, o[h >> 2] = g) : (o[t + 12 >> 2] = e, o[e + 8 >> 2] = t),
                            o[l + 4 >> 2] = 3 | i,
                            c = (e = c << 3) - i | 0,
                            o[4 + (r = i + l | 0) >> 2] = 1 | c,
                            o[e + l >> 2] = c,
                            (e = o[262871]) && (s = o[262873], n = 1051092 + ((e >>>= 3) << 3) | 0, t = o[262771], e = 1 << (31 & e), f = o[n + 8 >> 2], t & e || (o[262771] = e | t, f = n), e = f, o[n + 8 >> 2] = s, o[e + 12 >> 2] = s, o[s + 12 >> 2] = n, o[s + 8 >> 2] = e),
                            o[262873] = r,
                            o[262871] = c,
                            l + 8 | 0
                          }
                          return x(n),
                          s >>> 0 >= 16 ? (o[n + 4 >> 2] = 3 | i, o[4 + (r = i + n | 0) >> 2] = 1 | s, o[r + s >> 2] = s, (e = o[262871]) && (l = o[262873], c = 1051092 + ((e >>>= 3) << 3) | 0, t = o[262771], e = 1 << (31 & e), f = o[c + 8 >> 2], t & e || (o[262771] = e | t, f = c), e = f, o[c + 8 >> 2] = l, o[e + 12 >> 2] = l, o[l + 12 >> 2] = c, o[l + 8 >> 2] = e), o[262873] = r, o[262871] = s) : (e = i + s | 0, o[n + 4 >> 2] = 3 | e, o[4 + (e = e + n | 0) >> 2] = 1 | o[e + 4 >> 2]),
                          n + 8 | 0
                        }
                        r: {
                          n: {
                            o: {
                              i: {
                                if ((r = o[262871]) >>> 0 < i >>> 0) {
                                  if ((e = o[262872]) >>> 0 > i >>> 0) break e;
                                  if (s = 0, -1 == (0 | (e = ke((t = i + 65583 | 0) >>> 16)))) break t;
                                  if (!(p = e << 16)) break t;
                                  if (t = (l = -65536 & t) + o[262875] | 0, o[262875] = t, e = o[262876], o[262876] = e >>> 0 > t >>> 0 ? e : t, !(d = o[262874])) break i;
                                  for (e = 1051508;;) {
                                    if ((0 | p) == ((r = o[e >> 2]) + (t = o[e + 4 >> 2]) | 0)) break o;
                                    if (!(e = o[e + 8 >> 2])) break
                                  }
                                  break n
                                }
                                return c = o[262873],
                                (t = r - i | 0) >>> 0 <= 15 ? (o[262873] = 0, o[262871] = 0, o[c + 4 >> 2] = 3 | r, i = 4 + (e = r + c | 0) | 0, s = 1 | o[e + 4 >> 2]) : (o[262871] = t, e = i + c | 0, o[262873] = e, o[e + 4 >> 2] = 1 | t, o[r + c >> 2] = t, s = 3 | i, i = c + 4 | 0),
                                o[i >> 2] = s,
                                c + 8 | 0
                              }
                              for ((e = o[262882]) >>> 0 <= p >>> 0 && e || (o[262882] = p), o[262883] = 4095, o[262877] = p, e = 0, o[262880] = 0, o[262878] = l; t = 8 + (r = e + 1051084 | 0) | 0, o[r + 16 >> 2] = t, o[r + 20 >> 2] = t, 256 != (0 | (e = e + 8 | 0)););o[262874] = p,
                              e = l + -40 | 0,
                              o[262872] = e,
                              o[p + 4 >> 2] = 1 | e,
                              o[4 + (e + p | 0) >> 2] = 40,
                              o[262881] = 2097152;
                              break r
                            }
                            if (!(o[e + 12 >> 2] | p >>> 0 <= d >>> 0 | r >>> 0 > d >>> 0)) {
                              o[e + 4 >> 2] = t + l, r = (c = o[262874]) + 15 & -8, o[262874] = r + -8, e = 8 + ((t = l + o[262872] | 0) + (c - r | 0) | 0) | 0, o[262872] = e, o[r + -4 >> 2] = 1 | e, o[4 + (t + c | 0) >> 2] = 40, o[262881] = 2097152;
                              break r
                            }
                          }
                          e = o[262882],
                          o[262882] = e >>> 0 < p >>> 0 ? e : p,
                          n = l + p | 0,
                          e = 1051508;n: {
                            for (;;) {
                              if ((0 | n) != o[e >> 2]) {
                                if (e = o[e + 8 >> 2]) continue;
                                break n
                              }
                              break
                            }
                            if (!o[e + 12 >> 2]) {
                              o[e >> 2] = p, o[e + 4 >> 2] = l + o[e + 4 >> 2], o[p + 4 >> 2] = 3 | i, s = i + p | 0, i = (n - p | 0) - i | 0;
                              o: {
                                i: {
                                  if ((0 | n) != o[262874]) {
                                    if (o[262873] == (0 | n)) break i;
                                    if (1 == (3 & (c = o[n + 4 >> 2])) && ((r = -8 & c) >>> 0 >= 256 ? x(n) : (0 | (t = o[n + 12 >> 2])) == (0 | (e = o[n + 8 >> 2])) ? (h = 1051084, g = o[262771] & xe(-2, c >>> 3), o[h >> 2] = g) : (o[e + 12 >> 2] = t, o[t + 8 >> 2] = e), i = r + i | 0, n = r + n | 0), o[n + 4 >> 2] = -2 & o[n + 4 >> 2], o[s + 4 >> 2] = 1 | i, o[i + s >> 2] = i, i >>> 0 >= 256) {
                                      _(s, i);
                                      break o
                                    }
                                    r = 1051092 + ((e = i >>> 3) << 3) | 0, t = o[262771], e = 1 << (31 & e), n = o[r + 8 >> 2], t & e || (o[262771] = e | t, n = r), e = n, o[r + 8 >> 2] = s, o[e + 12 >> 2] = s, o[s + 12 >> 2] = r, o[s + 8 >> 2] = e;
                                    break o
                                  }
                                  o[262874] = s,
                                  e = o[262872] + i | 0,
                                  o[262872] = e,
                                  o[s + 4 >> 2] = 1 | e;
                                  break o
                                }
                                o[262873] = s,
                                e = o[262871] + i | 0,
                                o[262871] = e,
                                o[s + 4 >> 2] = 1 | e,
                                o[e + s >> 2] = e
                              }
                              return p + 8 | 0
                            }
                          }
                          for (e = 1051508; !((t = o[e >> 2]) >>> 0 <= d >>> 0 && (n = t + o[e + 4 >> 2] | 0) >>> 0 > d >>> 0);) e = o[e + 8 >> 2];
                          for (o[262874] = p, e = l + -40 | 0, o[262872] = e, o[p + 4 >> 2] = 1 | e, o[4 + (e + p | 0) >> 2] = 40, o[262881] = 2097152, o[(f = (e = (n + -32 & -8) - 8 | 0) >>> 0 < d + 16 >>> 0 ? d : e) + 4 >> 2] = 27, c = o[262877], r = o[262878], t = o[262880], o[(e = f + 16 | 0) >> 2] = o[262879], o[e + 4 >> 2] = t, o[f + 8 >> 2] = c, o[f + 12 >> 2] = r, o[262880] = 0, o[262878] = l, o[262877] = p, o[262879] = f + 8, e = f + 28 | 0; o[e >> 2] = 7, n >>> 0 > (e = e + 4 | 0) >>> 0;);
                          (0 | f) != (0 | d) && (o[f + 4 >> 2] = -2 & o[f + 4 >> 2], e = f - d | 0, o[d + 4 >> 2] = 1 | e, o[f >> 2] = e, e >>> 0 >= 256 ? _(d, e) : (r = 1051092 + ((e >>>= 3) << 3) | 0, t = o[262771], e = 1 << (31 & e), n = o[r + 8 >> 2], t & e || (o[262771] = e | t, n = r), e = n, o[r + 8 >> 2] = d, o[e + 12 >> 2] = d, o[d + 12 >> 2] = r, o[d + 8 >> 2] = e))
                        }
                        if (!((e = o[262872]) >>> 0 <= i >>> 0)) break e
                      }
                      return s
                    }
                    return t = e - i | 0, o[262872] = t, e = (r = o[262874]) + i | 0, o[262874] = e, o[e + 4 >> 2] = 1 | t, o[r + 4 >> 2] = 3 | i, r + 8 | 0
                  }

                  function h(e, t, r) {
                    var a, s = 0,
                      c = 0,
                      u = 0,
                      p = 0,
                      d = 0,
                      h = 0,
                      g = 0;
                    l = a = l + -64 | 0, o[a + 36 >> 2] = t, s = o[r + 20 >> 2], o[a + 52 >> 2] = s, n[a + 56 | 0] = 3, c = o[r + 16 >> 2], o[a + 44 >> 2] = c + (s << 3), o[a + 8 >> 2] = 0, o[a + 12 >> 2] = 32, o[a + 32 >> 2] = e, o[a + 24 >> 2] = 0, o[a + 16 >> 2] = 0, o[a + 48 >> 2] = c, o[a + 40 >> 2] = c;
                    e: {
                      t: {
                        r: {
                          n: {
                            if (!(u = o[r + 8 >> 2])) {
                              if (d = o[r >> 2], !(u = s >>> 0 > (h = o[r + 4 >> 2]) >>> 0 ? h : s)) break n;
                              if (s = 1, Se[o[t + 12 >> 2]](e, o[d >> 2], o[d + 4 >> 2])) break e;
                              for (r = d + 12 | 0, p = 1;;) {
                                if (Se[o[c + 4 >> 2]](o[c >> 2], a + 8 | 0)) break e;
                                if (p >>> 0 >= u >>> 0) break n;
                                if (e = r + -4 | 0, t = o[r >> 2], r = r + 8 | 0, c = c + 8 | 0, p = p + 1 | 0, Se[o[o[a + 36 >> 2] + 12 >> 2]](o[a + 32 >> 2], o[e >> 2], t)) break
                              }
                              break e
                            }
                            if (d = o[r >> 2], h = o[r + 4 >> 2], g = (r = o[r + 12 >> 2]) >>> 0 > h >>> 0 ? h : r) {
                              if (s = 1, Se[o[t + 12 >> 2]](e, o[d >> 2], o[d + 4 >> 2])) break e;
                              for (r = d + 12 | 0, c = u + 16 | 0, p = 1;;) {
                                o[a + 12 >> 2] = o[c + -8 >> 2], n[a + 56 | 0] = i[c + 16 | 0], o[a + 8 >> 2] = o[c + -4 >> 2], t = 0, s = 0;
                                o: {
                                  i: switch (o[c + 8 >> 2] - 1 | 0) {
                                    default:
                                      e = o[c + 12 >> 2], s = 1;
                                      break o;
                                    case 0:
                                      if ((u = o[c + 12 >> 2]) >>> 0 < (s = o[a + 52 >> 2]) >>> 0) {
                                        if (s = 0, u = o[a + 48 >> 2] + (u << 3) | 0, 41 != o[u + 4 >> 2]) break o;
                                        e = o[o[u >> 2] >> 2], s = 1;
                                        break o
                                      }
                                      C(1051e3, u, s), f();
                                    case 1:
                                      break i;
                                    case 2:
                                      break o
                                  }(0 | (u = o[a + 40 >> 2])) != o[a + 44 >> 2] && (o[a + 40 >> 2] = u + 8, 41 == o[u + 4 >> 2] && (e = o[o[u >> 2] >> 2], s = 1))
                                }
                                o[a + 20 >> 2] = e, o[a + 16 >> 2] = s;
                                o: {
                                  i: {
                                    a: {
                                      s: {
                                        c: {
                                          u: switch (o[c >> 2] - 1 | 0) {
                                            case 1:
                                              if ((0 | (e = o[a + 40 >> 2])) != o[a + 44 >> 2]) break c;
                                              break o;
                                            case 2:
                                              break o;
                                            case 0:
                                              break u;
                                            default:
                                              break a
                                          }
                                          if ((e = o[c + 4 >> 2]) >>> 0 >= (s = o[a + 52 >> 2]) >>> 0) break s;
                                          if (e = o[a + 48 >> 2] + (e << 3) | 0, 41 != o[e + 4 >> 2]) break o;s = o[o[e >> 2] >> 2];
                                          break i
                                        }
                                        if (o[a + 40 >> 2] = e + 8, 41 != o[e + 4 >> 2]) break o;s = o[o[e >> 2] >> 2];
                                        break i
                                      }
                                      C(1051e3, e, s),
                                      f()
                                    }
                                    s = o[c + 4 >> 2]
                                  }
                                  t = 1
                                }
                                if (o[a + 28 >> 2] = s, o[a + 24 >> 2] = t, 1 == o[c + -16 >> 2]) {
                                  if ((e = o[c + -12 >> 2]) >>> 0 >= (t = o[a + 52 >> 2]) >>> 0) break t;
                                  s = o[a + 48 >> 2] + (e << 3) | 0
                                } else {
                                  if ((0 | (s = o[a + 40 >> 2])) == o[a + 44 >> 2]) break r;
                                  o[a + 40 >> 2] = s + 8
                                }
                                if (Se[o[s + 4 >> 2]](o[s >> 2], a + 8 | 0)) {
                                  s = 1;
                                  break e
                                }
                                if (p >>> 0 >= g >>> 0) break n;
                                if (e = r + -4 | 0, t = o[r >> 2], r = r + 8 | 0, c = c + 36 | 0, s = 1, p = p + 1 | 0, Se[o[o[a + 36 >> 2] + 12 >> 2]](o[a + 32 >> 2], o[e >> 2], t)) break
                              }
                              break e
                            }
                          }
                          if (h >>> 0 > p >>> 0 && (s = 1, e = (p << 3) + d | 0, Se[o[o[a + 36 >> 2] + 12 >> 2]](o[a + 32 >> 2], o[e >> 2], o[e + 4 >> 2]))) break e;s = 0;
                          break e
                        }
                        B(1050472),
                        f()
                      }
                      C(1050984, e, t),
                      f()
                    }
                    return l = a - -64 | 0, s
                  }

                  function g(e, t, r) {
                    var a = 0,
                      s = 0,
                      c = 0,
                      u = 0,
                      f = 0,
                      l = 0,
                      p = 0,
                      d = 0,
                      h = 0,
                      g = 0,
                      y = 0,
                      v = 0;
                    a = o[e + 16 >> 2];
                    e: {
                      t: {
                        r: {
                          n: {
                            if (1 != (0 | (g = o[e + 8 >> 2]))) {
                              if (a) break n;
                              a = 0 | Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], t, r);
                              break t
                            }
                            if (!a) break r
                          }
                          n: if (r) {
                            for (f = t + r | 0, d = o[e + 20 >> 2] + 1 | 0, y = a = t;;) {
                              c = a + 1 | 0;
                              o: {
                                i: {
                                  if ((0 | (s = n[0 | a])) <= -1) {
                                    if ((0 | c) != (0 | f) ? (p = 63 & i[a + 1 | 0], a = c = a + 2 | 0) : (p = 0, a = f), l = (h = 31 & s) << 6 | p, (v = 255 & s) >>> 0 <= 223) break i;
                                    if ((0 | a) != (0 | f) ? (l = 63 & i[0 | a], s = c = a + 1 | 0) : (l = 0, s = f), l = (p = p << 6 | l) | h << 12, v >>> 0 < 240) break i;
                                    if ((0 | s) != (0 | f) ? (a = s + 1 | 0, s = 63 & i[0 | s]) : (a = c, s = 0), 1114112 != (0 | (s = s | h << 18 & 1835008 | p << 6))) break o;
                                    break n
                                  }
                                  l = 255 & s
                                }
                                s = l,
                                a = c
                              }
                              if (d = d + -1 | 0) {
                                if (u = (u - y | 0) + a | 0, y = a, (0 | a) != (0 | f)) continue;
                                break n
                              }
                              break
                            }
                            1114112 != (0 | s) && (s = u, c = r, !(!u | (0 | r) == (0 | u)) && (a = 0, n[t + u | 0] < -64 | u >>> 0 >= r >>> 0) || (a = t), r = a ? s : c, t = a || t)
                          } else r = 0;
                          if (!g) break e
                        }
                        if (c = 0, r)
                          for (s = r, a = t; c = (128 == (192 & i[0 | a])) + c | 0, a = a + 1 | 0, s = s + -1 | 0;);
                        if (r - c >>> 0 >= (f = o[e + 12 >> 2]) >>> 0) break e;
                        if (u = 0, c = 0, r)
                          for (s = r, a = t; c = (128 == (192 & i[0 | a])) + c | 0, a = a + 1 | 0, s = s + -1 | 0;);s = f + (c - r | 0) | 0;r: {
                          n: {
                            o: switch ((3 == (0 | (a = i[e + 48 | 0])) ? 0 : a) - 1 | 0) {
                              case 1:
                                break n;
                              case 0:
                              case 2:
                                break o;
                              default:
                                break r
                            }
                            u = s,
                            s = 0;
                            break r
                          }
                          u = s >>> 1,
                          s = s + 1 >>> 1
                        }
                        a = u + 1 | 0;r: {
                          for (;;) {
                            if (!(a = a + -1 | 0)) break r;
                            if (Se[o[o[e + 28 >> 2] + 16 >> 2]](o[e + 24 >> 2], o[e + 4 >> 2])) break
                          }
                          return 1
                        }
                        if (c = o[e + 4 >> 2], a = 1, !Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], t, r)) {
                          for (a = s + 1 | 0, t = o[e + 28 >> 2], e = o[e + 24 >> 2];;) {
                            if (!(a = a + -1 | 0)) return 0;
                            if (Se[o[t + 16 >> 2]](e, c)) break
                          }
                          return 1
                        }
                      }
                      return a
                    }
                    return 0 | Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], t, r)
                  }

                  function y(e) {
                    var t = 0,
                      r = 0,
                      n = 0,
                      i = 0,
                      a = 0,
                      s = 0,
                      c = 0;
                    r = (t = e + -8 | 0) + (e = -8 & (i = o[e + -4 >> 2])) | 0;
                    e: {
                      t: {
                        r: {
                          n: if (!(1 & i)) {
                            if (!(3 & i)) break r;
                            if (e = (i = o[t >> 2]) + e | 0, (0 | (t = t - i | 0)) == o[262873]) {
                              if (3 != (3 & o[r + 4 >> 2])) break n;
                              return o[262871] = e, o[r + 4 >> 2] = -2 & o[r + 4 >> 2], o[t + 4 >> 2] = 1 | e, void(o[e + t >> 2] = e)
                            }
                            i >>> 0 >= 256 ? x(t) : (0 | (n = o[t + 8 >> 2])) == (0 | (a = o[t + 12 >> 2])) ? (s = 1051084, c = o[262771] & xe(-2, i >>> 3), o[s >> 2] = c) : (o[n + 12 >> 2] = a, o[a + 8 >> 2] = n)
                          }if (2 & (i = o[r + 4 >> 2])) o[r + 4 >> 2] = -2 & i,
                          o[t + 4 >> 2] = 1 | e,
                          o[e + t >> 2] = e;
                          else {
                            n: {
                              if (o[262874] != (0 | r)) {
                                if ((0 | r) != o[262873]) break n;
                                return o[262873] = t, e = o[262871] + e | 0, o[262871] = e, o[t + 4 >> 2] = 1 | e, void(o[e + t >> 2] = e)
                              }
                              if (o[262874] = t, e = o[262872] + e | 0, o[262872] = e, o[t + 4 >> 2] = 1 | e, (0 | t) == o[262873] && (o[262871] = 0, o[262873] = 0), (r = o[262881]) >>> 0 >= e >>> 0) break r;
                              if (!(e = o[262874])) break r;o: if (!((i = o[262872]) >>> 0 < 41))
                                for (t = 1051508;;) {
                                  if ((n = o[t >> 2]) + o[t + 4 >> 2] >>> 0 > e >>> 0 && n >>> 0 <= e >>> 0) break o;
                                  if (!(t = o[t + 8 >> 2])) break
                                }
                              if (n = 4095, e = o[262879]) {
                                for (t = 0; t = t + 1 | 0, e = o[e + 8 >> 2];);
                                n = t >>> 0 > 4095 ? t : 4095
                              }
                              if (o[262883] = n, i >>> 0 <= r >>> 0) break r;
                              return void(o[262881] = -1)
                            }
                            if (e = (n = -8 & i) + e | 0, n >>> 0 >= 256 ? x(r) : (0 | (n = o[r + 12 >> 2])) == (0 | (r = o[r + 8 >> 2])) ? (s = 1051084, c = o[262771] & xe(-2, i >>> 3), o[s >> 2] = c) : (o[r + 12 >> 2] = n, o[n + 8 >> 2] = r), o[t + 4 >> 2] = 1 | e, o[e + t >> 2] = e, o[262873] == (0 | t)) {
                              o[262871] = e;
                              break r
                            }
                          }
                          if (e >>> 0 < 256) break t;
                          if (_(t, e), e = o[262883] + -1 | 0, o[262883] = e, !e) {
                            if (e = o[262879]) break e;
                            return void(o[262883] = 4095)
                          }
                        }
                        return
                      }
                      return e = 1051092 + ((r = e >>> 3) << 3) | 0,
                      i = o[262771],
                      r = 1 << (31 & r),
                      n = o[e + 8 >> 2],
                      i & r || (o[262771] = r | i, n = e),
                      r = n,
                      o[e + 8 >> 2] = t,
                      o[r + 12 >> 2] = t,
                      o[t + 12 >> 2] = e,
                      void(o[t + 8 >> 2] = r)
                    }
                    for (t = 0; t = t + 1 | 0, e = o[e + 8 >> 2];);
                    o[262883] = t >>> 0 > 4095 ? t : 4095
                  }

                  function v(e, t, r, a, s) {
                    var c, u, f = 0,
                      l = 0,
                      p = 0,
                      d = 0;
                    if (c = (f = 1 & (u = o[e >> 2])) ? 43 : 1114112, d = s + f | 0, 4 & u) {
                      if (r)
                        for (p = r, f = t; l = (128 == (192 & i[0 | f])) + l | 0, f = f + 1 | 0, p = p + -1 | 0;);
                      d = (r + d | 0) - l | 0
                    } else t = 0;
                    e: {
                      t: {
                        if (1 != o[e + 8 >> 2]) {
                          if (L(e, c, t, r)) break t;
                          break e
                        }
                        if ((f = o[e + 12 >> 2]) >>> 0 <= d >>> 0) {
                          if (L(e, c, t, r)) break t;
                          break e
                        }
                        r: {
                          if (!(8 & u)) {
                            l = f - d | 0, f = 0;
                            n: {
                              o: {
                                i: switch ((3 == (0 | (p = i[e + 48 | 0])) ? 1 : p) - 1 | 0) {
                                  case 1:
                                    break o;
                                  case 0:
                                  case 2:
                                    break i;
                                  default:
                                    break n
                                }
                                f = l,
                                l = 0;
                                break n
                              }
                              f = l >>> 1,
                              l = l + 1 >>> 1
                            }
                            for (f = f + 1 | 0;;) {
                              if (!(f = f + -1 | 0)) break r;
                              if (Se[o[o[e + 28 >> 2] + 16 >> 2]](o[e + 24 >> 2], o[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (n[e + 48 | 0] = 1, o[e + 4 >> 2] = 48, L(e, c, t, r)) break t;l = f - d | 0,
                          f = 0;n: {
                            o: {
                              i: switch ((3 == (0 | (t = i[e + 48 | 0])) ? 1 : t) - 1 | 0) {
                                case 1:
                                  break o;
                                case 0:
                                case 2:
                                  break i;
                                default:
                                  break n
                              }
                              f = l,
                              l = 0;
                              break n
                            }
                            f = l >>> 1,
                            l = l + 1 >>> 1
                          }
                          f = f + 1 | 0;n: {
                            for (;;) {
                              if (!(f = f + -1 | 0)) break n;
                              if (Se[o[o[e + 28 >> 2] + 16 >> 2]](o[e + 24 >> 2], o[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (t = o[e + 4 >> 2], Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], a, s)) break t;
                          for (l = l + 1 | 0, r = o[e + 28 >> 2], e = o[e + 24 >> 2];;) {
                            if (!(l = l + -1 | 0)) return 0;
                            if (Se[o[r + 16 >> 2]](e, t)) break
                          }
                          break t
                        }
                        if (f = o[e + 4 >> 2], !L(e, c, t, r) && !Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], a, s))
                          for (l = l + 1 | 0, t = o[e + 28 >> 2], e = o[e + 24 >> 2];;) {
                            if (!(l = l + -1 | 0)) return 0;
                            if (Se[o[t + 16 >> 2]](e, f)) break
                          }
                      }
                      return 1
                    }
                    return 0 | Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], a, s)
                  }

                  function b(e, t, r, n) {
                    var i, a = 0,
                      s = 0,
                      c = 0,
                      u = 0,
                      p = 0,
                      d = 0;
                    l = i = l - 32 | 0;
                    e: {
                      t: {
                        r: {
                          n: {
                            o: {
                              if ((n &= 255) >>> 0 <= 3) switch (n - 1 | 0) {
                                case 2:
                                  break t;
                                case 1:
                                  break r;
                                case 0:
                                  break n;
                                default:
                                  break o
                              }
                              K(1049688, 24, 1049672),
                              f()
                            }
                            c = xe(a = o[t >> 2], 5),
                            s = o[t + 12 >> 2],
                            n = o[t + 8 >> 2],
                            t = o[t + 4 >> 2],
                            u = xe(c = 1518500249 + ((c + o[r >> 2] | 0) + ((s ^ n) & t ^ s) | 0) | 0, 30),
                            o[e + 12 >> 2] = u,
                            s = 1518500249 + (((s + (n ^ a & ((t = xe(t, 30)) ^ n)) | 0) + o[r + 4 >> 2] | 0) + xe(c, 5) | 0) | 0,
                            p = e,
                            d = xe(s, 30),
                            o[p + 8 >> 2] = d,
                            a = 1518500249 + (((n + o[r + 8 >> 2] | 0) + (t ^ c & ((n = xe(a, 30)) ^ t)) | 0) + xe(s, 5) | 0) | 0,
                            o[e + 4 >> 2] = a,
                            p = e,
                            d = 1518500249 + (((t + o[r + 12 >> 2] | 0) + (n ^ s & (n ^ u)) | 0) + xe(a, 5) | 0) | 0,
                            o[p >> 2] = d;
                            break e
                          }
                          s = o[4 + (a = t + 8 | 0) >> 2],
                          o[(n = i + 8 | 0) >> 2] = o[a >> 2],
                          o[n + 4 >> 2] = s,
                          n = o[t + 4 >> 2],
                          o[i >> 2] = o[t >> 2],
                          o[i + 4 >> 2] = n,
                          o[i + 28 >> 2] = o[r + 12 >> 2] + 1859775393,
                          o[i + 24 >> 2] = o[r + 8 >> 2] + 1859775393,
                          o[i + 20 >> 2] = o[r + 4 >> 2] + 1859775393,
                          o[i + 16 >> 2] = o[r >> 2] + 1859775393,
                          I(e, i, i + 16 | 0);
                          break e
                        }
                        c = xe(a = o[t >> 2], 5),
                        s = o[t + 12 >> 2],
                        n = o[t + 8 >> 2],
                        t = o[t + 4 >> 2],
                        u = xe(c = ((c + o[r >> 2] | 0) + ((s ^ n) & t ^ n & s) | 0) - 1894007588 | 0, 30),
                        o[e + 12 >> 2] = u,
                        s = (((s + (a & ((t = xe(t, 30)) ^ n) ^ t & n) | 0) + o[r + 4 >> 2] | 0) + xe(c, 5) | 0) - 1894007588 | 0,
                        p = e,
                        d = xe(s, 30),
                        o[p + 8 >> 2] = d,
                        a = (((n + o[r + 8 >> 2] | 0) + (c & ((n = xe(a, 30)) ^ t) ^ t & n) | 0) + xe(s, 5) | 0) - 1894007588 | 0,
                        o[e + 4 >> 2] = a,
                        p = e,
                        d = (((t + o[r + 12 >> 2] | 0) + (s & (n ^ u) ^ n & u) | 0) + xe(a, 5) | 0) - 1894007588 | 0,
                        o[p >> 2] = d;
                        break e
                      }
                      s = o[4 + (a = t + 8 | 0) >> 2],
                      o[(n = i + 8 | 0) >> 2] = o[a >> 2],
                      o[n + 4 >> 2] = s,
                      n = o[t + 4 >> 2],
                      o[i >> 2] = o[t >> 2],
                      o[i + 4 >> 2] = n,
                      o[i + 28 >> 2] = o[r + 12 >> 2] + -899497514,
                      o[i + 24 >> 2] = o[r + 8 >> 2] + -899497514,
                      o[i + 20 >> 2] = o[r + 4 >> 2] + -899497514,
                      o[i + 16 >> 2] = o[r >> 2] + -899497514,
                      I(e, i, i + 16 | 0)
                    }
                    l = i + 32 | 0
                  }

                  function A(e, t) {
                    var r = 0,
                      n = 0,
                      i = 0,
                      a = 0,
                      s = 0,
                      c = 0;
                    r = e + t | 0;
                    e: {
                      t: {
                        r: if (!(1 & (n = o[e + 4 >> 2]))) {
                          if (!(3 & n)) break t;
                          if (t = (n = o[e >> 2]) + t | 0, (0 | (e = e - n | 0)) == o[262873]) {
                            if (3 != (3 & o[r + 4 >> 2])) break r;
                            return o[262871] = t, o[r + 4 >> 2] = -2 & o[r + 4 >> 2], o[e + 4 >> 2] = 1 | t, void(o[r >> 2] = t)
                          }
                          n >>> 0 >= 256 ? x(e) : (0 | (i = o[e + 8 >> 2])) == (0 | (a = o[e + 12 >> 2])) ? (s = 1051084, c = o[262771] & xe(-2, n >>> 3), o[s >> 2] = c) : (o[i + 12 >> 2] = a, o[a + 8 >> 2] = i)
                        }if (2 & (n = o[r + 4 >> 2])) {
                          o[r + 4 >> 2] = -2 & n, o[e + 4 >> 2] = 1 | t, o[e + t >> 2] = t;
                          break e
                        }
                        r: {
                          if (o[262874] != (0 | r)) {
                            if ((0 | r) != o[262873]) break r;
                            return o[262873] = e, t = o[262871] + t | 0, o[262871] = t, o[e + 4 >> 2] = 1 | t, void(o[e + t >> 2] = t)
                          }
                          if (o[262874] = e, t = o[262872] + t | 0, o[262872] = t, o[e + 4 >> 2] = 1 | t, o[262873] != (0 | e)) break t;
                          return o[262871] = 0,
                          void(o[262873] = 0)
                        }
                        if (t = (i = -8 & n) + t | 0, i >>> 0 >= 256 ? x(r) : (0 | (i = o[r + 12 >> 2])) == (0 | (r = o[r + 8 >> 2])) ? (s = 1051084, c = o[262771] & xe(-2, n >>> 3), o[s >> 2] = c) : (o[r + 12 >> 2] = i, o[i + 8 >> 2] = r), o[e + 4 >> 2] = 1 | t, o[e + t >> 2] = t, o[262873] != (0 | e)) break e;o[262871] = t
                      }
                      return
                    }
                    t >>> 0 >= 256 ? _(e, t) : (t = 1051092 + ((r = t >>> 3) << 3) | 0, n = o[262771], r = 1 << (31 & r), i = o[t + 8 >> 2], n & r || (o[262771] = r | n, i = t), r = i, o[t + 8 >> 2] = e, o[r + 12 >> 2] = e, o[e + 12 >> 2] = t, o[e + 8 >> 2] = r)
                  }

                  function m(e, t) {
                    var r = 0,
                      n = 0,
                      i = 0,
                      a = 0,
                      s = 0;
                    return -65587 - (e = e >>> 0 > 16 ? e : 16) >>> 0 <= t >>> 0 || (r = d(12 + ((i = t >>> 0 < 11 ? 16 : t + 11 & -8) + e | 0) | 0)) && (t = r + -8 | 0, (n = e + -1 | 0) & r ? (n = (-8 & (s = o[(a = r + -4 | 0) >> 2])) - (r = (e = (r = (r + n & 0 - e) - 8 | 0) - t >>> 0 > 16 ? r : e + r | 0) - t | 0) | 0, 3 & s ? (o[e + 4 >> 2] = n | 1 & o[e + 4 >> 2] | 2, o[4 + (n = e + n | 0) >> 2] = 1 | o[n + 4 >> 2], o[a >> 2] = r | 1 & o[a >> 2] | 2, o[e + 4 >> 2] = 1 | o[e + 4 >> 2], A(t, r)) : (t = o[t >> 2], o[e + 4 >> 2] = n, o[e >> 2] = t + r)) : e = t, 3 & (t = o[e + 4 >> 2]) && ((r = -8 & t) >>> 0 <= i + 16 >>> 0 || (o[e + 4 >> 2] = i | 1 & t | 2, t = e + i | 0, i = r - i | 0, o[t + 4 >> 2] = 3 | i, o[4 + (r = e + r | 0) >> 2] = 1 | o[r + 4 >> 2], A(t, i))), n = e + 8 | 0), n
                  }

                  function _(e, t) {
                    var r = 0,
                      n = 0,
                      i = 0,
                      a = 0;
                    o[e + 16 >> 2] = 0, o[e + 20 >> 2] = 0, a = e, n = 0, (r = t >>> 8) && (n = 31, t >>> 0 > 16777215 || (n = 62 + ((t >>> (6 - (r = u(r)) & 31) & 1) - (r << 1) | 0) | 0)), i = n, o[a + 28 >> 2] = i, a = 1051356 + (i << 2) | 0;
                    e: {
                      t: {
                        r: {
                          n: {
                            if ((n = 1 << (31 & i)) & (r = o[262772])) {
                              if (r = o[a >> 2], (-8 & o[r + 4 >> 2]) != (0 | t)) break n;
                              n = r;
                              break r
                            }
                            o[262772] = r | n,
                            o[a >> 2] = e,
                            o[e + 24 >> 2] = a;
                            break e
                          }
                          for (i = t << (31 == (0 | i) ? 0 : 25 - (i >>> 1) & 31);;) {
                            if (!(n = o[(a = 16 + ((i >>> 29 & 4) + r | 0) | 0) >> 2])) break t;
                            if (i <<= 1, (-8 & o[(r = n) + 4 >> 2]) == (0 | t)) break
                          }
                        }
                        return t = o[n + 8 >> 2],
                        o[t + 12 >> 2] = e,
                        o[n + 8 >> 2] = e,
                        o[e + 24 >> 2] = 0,
                        o[e + 12 >> 2] = n,
                        void(o[e + 8 >> 2] = t)
                      }
                      o[a >> 2] = e,
                      o[e + 24 >> 2] = r
                    }
                    o[e + 12 >> 2] = e, o[e + 8 >> 2] = e
                  }

                  function w(e, t, r) {
                    var a, s = 0,
                      c = 0;
                    l = a = l - 80 | 0, i[e + 96 | 0] || (o[a + 76 >> 2] = e + 8, function (e, t) {
                      var r;
                      if (l = r = l - 16 | 0, N(r + 8 | 0, e, 1), o[r + 12 >> 2]) return n[o[r + 8 >> 2]] = 128, 64 - o[e >> 2] >>> 0 < 8 && (R(e, 64), D(r, e), k(o[t >> 2], o[r >> 2], o[r + 4 >> 2])), R(e, 56), void(l = r + 16 | 0);
                      C(1049536, 0, 0), f()
                    }(s = e + 28 | 0, a + 76 | 0), N(a - -64 | 0, s, 4), W(o[a + 64 >> 2], o[a + 68 >> 2], o[e + 4 >> 2]), N(a + 56 | 0, s, 4), W(o[a + 56 >> 2], o[a + 60 >> 2], o[e >> 2]), c = o[a + 76 >> 2], D(a + 48 | 0, s), k(c, o[a + 48 >> 2], o[a + 52 >> 2]), n[e + 96 | 0] = 1), U(a + 40 | 0, t, r, 0, 4), W(o[a + 40 >> 2], o[a + 44 >> 2], o[e + 8 >> 2]), U(a + 32 | 0, t, r, 4, 8), W(o[a + 32 >> 2], o[a + 36 >> 2], o[e + 12 >> 2]), U(a + 24 | 0, t, r, 8, 12), W(o[a + 24 >> 2], o[a + 28 >> 2], o[e + 16 >> 2]), U(a + 16 | 0, t, r, 12, 16), W(o[a + 16 >> 2], o[a + 20 >> 2], o[e + 20 >> 2]), U(a + 8 | 0, t, r, 16, 20), W(o[a + 8 >> 2], o[a + 12 >> 2], o[e + 24 >> 2]), l = a + 80 | 0
                  }

                  function x(e) {
                    var t, r = 0,
                      n = 0,
                      i = 0,
                      a = 0,
                      s = 0,
                      c = 0;
                    t = o[e + 24 >> 2];
                    e: {
                      t: {
                        if ((0 | e) == (0 | (r = o[e + 12 >> 2]))) {
                          if (i = o[(r = e + 20 | 0) >> 2], n = o[(i ? 20 : 16) + e >> 2]) break t;
                          r = 0;
                          break e
                        }
                        n = o[e + 8 >> 2],
                        o[n + 12 >> 2] = r,
                        o[r + 8 >> 2] = n;
                        break e
                      }
                      for (i = i ? r : e + 16 | 0; a = i, (n = o[(i = (r = n) + 20 | 0) >> 2]) || (i = r + 16 | 0, n = o[r + 16 >> 2]), n;);o[a >> 2] = 0
                    }
                    e: if (t) {
                      n = 1051356 + (o[e + 28 >> 2] << 2) | 0;
                      t: {
                        if ((0 | e) == o[n >> 2]) {
                          if (o[n >> 2] = r, r) break t;
                          return s = 1051088, c = o[262772] & xe(-2, o[e + 28 >> 2]), void(o[s >> 2] = c)
                        }
                        if (o[(o[t + 16 >> 2] == (0 | e) ? 16 : 20) + t >> 2] = r, !r) break e
                      }
                      o[r + 24 >> 2] = t, (n = o[e + 16 >> 2]) && (o[r + 16 >> 2] = n, o[n + 24 >> 2] = r), (e = o[e + 20 >> 2]) && (o[r + 20 >> 2] = e, o[e + 24 >> 2] = r)
                    }
                  }

                  function S(e, t, r, n) {
                    var i, a, s = 0,
                      c = 0,
                      u = 0;
                    l = i = l + -64 | 0, c = 1, s = o[n + 12 >> 2], u = o[n + 8 >> 2], a = o[n + 4 >> 2], n = o[n >> 2];
                    e: {
                      t: {
                        if (1 == o[262884]) {
                          if (c = o[262885] + 1 | 0, o[262885] = c, c >>> 0 > 2) break t
                        } else o[262884] = 1,
                        o[262885] = 1;
                        if (ee(i + 48 | 0, n, a, u, s), s = o[4 + (n = i + 56 | 0) >> 2], o[(u = i + 36 | 0) >> 2] = o[n >> 2], o[u + 4 >> 2] = s, o[i + 24 >> 2] = r, o[i + 20 >> 2] = 1049892, o[i + 16 >> 2] = 1, r = o[i + 52 >> 2], o[i + 28 >> 2] = o[i + 48 >> 2], o[i + 32 >> 2] = r, !((0 | (r = o[262768])) <= -1) && (r = r + 1 | 0, o[262768] = r, (n = o[262770]) && (r = o[262769], Se[o[t + 16 >> 2]](i + 8 | 0, e), s = o[i + 12 >> 2], o[i + 16 >> 2] = o[i + 8 >> 2], o[i + 20 >> 2] = s, Se[o[n + 12 >> 2]](r, i + 16 | 0), r = o[262768]), o[262768] = r + -1, c >>> 0 <= 1)) break e
                      }
                      f()
                    }
                    l = r = l - 16 | 0, o[r + 12 >> 2] = t, o[r + 8 >> 2] = e, f()
                  }

                  function k(e, t, r) {
                    var n;
                    if (l = n = l - 96 | 0, o[n + 4 >> 2] = r, 64 == (0 | r)) return q(n + 32 | 0, 64),
                      function (e, t) {
                        var r = 0,
                          n = 0;
                        for (n = 16; n;) r = i[0 | t] | i[t + 1 | 0] << 8 | i[t + 2 | 0] << 16 | i[t + 3 | 0] << 24, o[e >> 2] = r << 24 | r << 8 & 16711680 | r >>> 8 & 65280 | r >>> 24, n = n + -1 | 0, t = t + 4 | 0, e = e + 4 | 0
                      }(n + 32 | 0, t),
                      function (e, t) {
                        var r, n = 0,
                          i = 0,
                          a = 0,
                          s = 0,
                          c = 0,
                          u = 0,
                          f = 0,
                          p = 0,
                          d = 0,
                          h = 0,
                          g = 0,
                          y = 0,
                          v = 0,
                          A = 0,
                          m = 0,
                          _ = 0,
                          w = 0,
                          x = 0,
                          S = 0,
                          k = 0,
                          I = 0,
                          T = 0,
                          E = 0,
                          O = 0,
                          C = 0;
                        l = r = l + -64 | 0, d = o[t >> 2], c = o[t + 4 >> 2], u = o[t + 8 >> 2], f = o[t + 12 >> 2], v = o[e >> 2], h = o[e + 8 >> 2], p = o[e + 4 >> 2], o[r + 44 >> 2] = o[e + 12 >> 2], o[r + 36 >> 2] = p, o[r + 40 >> 2] = h, o[r + 32 >> 2] = v, o[r + 60 >> 2] = f, o[r + 56 >> 2] = u, o[r + 52 >> 2] = c, o[r + 48 >> 2] = d + o[e + 16 >> 2], b(r, r + 32 | 0, r + 48 | 0, 0), A = o[t + 16 >> 2], g = o[t + 20 >> 2], S = o[t + 24 >> 2], m = o[t + 28 >> 2], a = o[4 + (p = r + 8 | 0) >> 2], o[(i = h = r + 40 | 0) >> 2] = o[p >> 2], o[i + 4 >> 2] = a, i = o[r + 4 >> 2], o[r + 32 >> 2] = o[r >> 2], o[r + 36 >> 2] = i, o[r + 60 >> 2] = m, o[r + 56 >> 2] = S, o[r + 52 >> 2] = g, O = r, C = xe(v, 30) + A | 0, o[O + 48 >> 2] = C, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 0), s = o[r + 16 >> 2], v = o[r + 20 >> 2], i = o[r + 24 >> 2], a = o[t + 32 >> 2], _ = o[t + 36 >> 2], w = o[t + 40 >> 2], x = o[t + 44 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = v, o[r + 40 >> 2] = i, o[r + 32 >> 2] = s, o[r + 60 >> 2] = x, o[r + 56 >> 2] = w, o[r + 52 >> 2] = _, O = r, C = xe(o[r >> 2], 30) + a | 0, o[O + 48 >> 2] = C, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 0), y = o[4 + (i = v = r + 24 | 0) >> 2], k = o[i >> 2], o[p >> 2] = k, o[p + 4 >> 2] = y, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, T = o[t + 48 >> 2], i = o[t + 52 >> 2], E = o[t + 56 >> 2], t = o[t + 60 >> 2], o[h >> 2] = k, o[h + 4 >> 2] = y, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, o[r + 60 >> 2] = t, o[r + 56 >> 2] = E, o[r + 52 >> 2] = i, O = r, C = xe(s, 30) + T | 0, o[O + 48 >> 2] = C, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 0), y = o[r + 16 >> 2], s = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = s, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), d = xe(i ^ a ^ d ^ u, 1), o[r + 48 >> 2] = n + d, s = xe(d ^ x ^ f ^ g, 1), o[r + 60 >> 2] = s, u = xe(t ^ w ^ u ^ A, 1), o[r + 56 >> 2] = u, f = xe(E ^ _ ^ c ^ f, 1), o[r + 52 >> 2] = f, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 0), c = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = c, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = c, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), A = xe(f ^ T ^ A ^ S, 1), o[r + 48 >> 2] = n + A, S = xe(s ^ E ^ a ^ S, 1), o[r + 56 >> 2] = S, c = xe(A ^ t ^ m ^ _, 1), o[r + 60 >> 2] = c, g = xe(u ^ i ^ g ^ m, 1), o[r + 52 >> 2] = g, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 1), y = o[r + 16 >> 2], m = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = m, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), a = xe(g ^ d ^ a ^ w, 1), o[r + 48 >> 2] = n + a, w = xe(c ^ u ^ w ^ T, 1), o[r + 56 >> 2] = w, m = xe(a ^ s ^ i ^ x, 1), o[r + 60 >> 2] = m, _ = xe(S ^ f ^ x ^ _, 1), o[r + 52 >> 2] = _, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 1), x = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = x, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = x, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), x = xe(_ ^ A ^ E ^ T, 1), o[r + 48 >> 2] = n + x, E = xe(m ^ S ^ d ^ E, 1), o[r + 56 >> 2] = E, T = xe(x ^ c ^ t ^ f, 1), o[r + 60 >> 2] = T, t = xe(w ^ g ^ t ^ i, 1), o[r + 52 >> 2] = t, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 1), y = o[r + 16 >> 2], i = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = i, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), i = xe(t ^ a ^ d ^ u, 1), o[r + 48 >> 2] = n + i, d = xe(i ^ m ^ s ^ g, 1), o[r + 60 >> 2] = d, u = xe(T ^ w ^ u ^ A, 1), o[r + 56 >> 2] = u, s = xe(E ^ _ ^ s ^ f, 1), o[r + 52 >> 2] = s, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 1), f = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = f, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = f, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), f = xe(s ^ x ^ A ^ S, 1), o[r + 48 >> 2] = n + f, A = xe(d ^ E ^ a ^ S, 1), o[r + 56 >> 2] = A, S = xe(f ^ T ^ c ^ _, 1), o[r + 60 >> 2] = S, c = xe(u ^ t ^ c ^ g, 1), o[r + 52 >> 2] = c, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 1), y = o[r + 16 >> 2], g = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = g, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), a = xe(c ^ i ^ a ^ w, 1), o[r + 48 >> 2] = n + a, w = xe(S ^ u ^ x ^ w, 1), o[r + 56 >> 2] = w, g = xe(a ^ d ^ t ^ m, 1), o[r + 60 >> 2] = g, _ = xe(A ^ s ^ m ^ _, 1), o[r + 52 >> 2] = _, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 2), m = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = m, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = m, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), x = xe(_ ^ f ^ E ^ x, 1), o[r + 48 >> 2] = n + x, E = xe(g ^ A ^ i ^ E, 1), o[r + 56 >> 2] = E, m = xe(x ^ S ^ s ^ T, 1), o[r + 60 >> 2] = m, t = xe(w ^ c ^ t ^ T, 1), o[r + 52 >> 2] = t, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 2), y = o[r + 16 >> 2], T = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = T, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), i = xe(t ^ a ^ i ^ u, 1), o[r + 48 >> 2] = n + i, T = xe(i ^ g ^ c ^ d, 1), o[r + 60 >> 2] = T, u = xe(m ^ w ^ f ^ u, 1), o[r + 56 >> 2] = u, d = xe(E ^ _ ^ s ^ d, 1), o[r + 52 >> 2] = d, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 2), s = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = s, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = s, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), s = xe(d ^ x ^ f ^ A, 1), o[r + 48 >> 2] = n + s, f = xe(T ^ E ^ a ^ A, 1), o[r + 56 >> 2] = f, A = xe(s ^ m ^ S ^ _, 1), o[r + 60 >> 2] = A, S = xe(u ^ t ^ c ^ S, 1), o[r + 52 >> 2] = S, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 2), y = o[r + 16 >> 2], c = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = c, o[r + 40 >> 2] = n, o[r + 32 >> 2] = y, n = xe(o[r >> 2], 30), a = xe(S ^ i ^ a ^ w, 1), o[r + 48 >> 2] = n + a, w = xe(A ^ u ^ x ^ w, 1), o[r + 56 >> 2] = w, c = xe(a ^ T ^ t ^ g, 1), o[r + 60 >> 2] = c, _ = xe(f ^ d ^ g ^ _, 1), o[r + 52 >> 2] = _, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 2), g = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = g, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = g, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(y, 30), x = xe(_ ^ s ^ E ^ x, 1), o[r + 48 >> 2] = n + x, E = xe(c ^ f ^ i ^ E, 1), o[r + 56 >> 2] = E, g = xe(x ^ A ^ d ^ m, 1), o[r + 60 >> 2] = g, t = xe(w ^ S ^ t ^ m, 1), o[r + 52 >> 2] = t, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 3), m = o[r + 16 >> 2], y = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = y, o[r + 40 >> 2] = n, o[r + 32 >> 2] = m, n = xe(o[r >> 2], 30), i = xe(t ^ a ^ i ^ u, 1), o[r + 48 >> 2] = n + i, y = xe(i ^ c ^ S ^ T, 1), o[r + 60 >> 2] = y, u = xe(g ^ w ^ s ^ u, 1), o[r + 56 >> 2] = u, T = xe(E ^ _ ^ d ^ T, 1), o[r + 52 >> 2] = T, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 3), d = o[v + 4 >> 2], k = o[v >> 2], o[p >> 2] = k, o[p + 4 >> 2] = d, n = o[r + 20 >> 2], I = o[r + 16 >> 2], o[r >> 2] = I, o[r + 4 >> 2] = n, o[h >> 2] = k, o[h + 4 >> 2] = d, o[r + 32 >> 2] = I, o[r + 36 >> 2] = n, n = xe(m, 30), d = xe(T ^ x ^ s ^ f, 1), o[r + 48 >> 2] = n + d, s = xe(y ^ E ^ a ^ f, 1), o[r + 56 >> 2] = s, f = xe(d ^ g ^ A ^ _, 1), o[r + 60 >> 2] = f, A = xe(u ^ t ^ A ^ S, 1), o[r + 52 >> 2] = A, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 3), S = o[r + 16 >> 2], m = o[r + 20 >> 2], n = o[r + 24 >> 2], o[r + 44 >> 2] = o[r + 28 >> 2], o[r + 36 >> 2] = m, o[r + 40 >> 2] = n, o[r + 32 >> 2] = S, n = xe(o[r >> 2], 30), a = xe(A ^ i ^ a ^ w, 1), o[r + 48 >> 2] = n + a, w = xe(f ^ u ^ x ^ w, 1), o[r + 56 >> 2] = w, u = xe(a ^ y ^ t ^ c, 1), o[r + 60 >> 2] = u, _ = xe(s ^ T ^ c ^ _, 1), o[r + 52 >> 2] = _, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 3), a = o[v + 4 >> 2], v = o[v >> 2], o[p >> 2] = v, o[p + 4 >> 2] = a, p = o[r + 20 >> 2], c = o[r + 16 >> 2], o[r >> 2] = c, o[r + 4 >> 2] = p, o[h >> 2] = v, o[h + 4 >> 2] = a, o[r + 32 >> 2] = c, o[r + 36 >> 2] = p, h = xe(_ ^ d ^ E ^ x, 1), O = r, C = xe(h ^ f ^ g ^ T, 1), o[O + 60 >> 2] = C, O = r, C = xe(u ^ s ^ i ^ E, 1), o[O + 56 >> 2] = C, O = r, C = xe(w ^ A ^ t ^ g, 1), o[O + 52 >> 2] = C, O = r, C = xe(S, 30) + h | 0, o[O + 48 >> 2] = C, b(r + 16 | 0, r + 32 | 0, r + 48 | 0, 3), t = o[r + 28 >> 2], h = o[r + 24 >> 2], p = o[r + 20 >> 2], o[e >> 2] = o[e >> 2] + o[r + 16 >> 2], o[e + 4 >> 2] = p + o[e + 4 >> 2], o[e + 8 >> 2] = h + o[e + 8 >> 2], o[e + 12 >> 2] = t + o[e + 12 >> 2], O = e, C = o[e + 16 >> 2] + xe(o[r >> 2], 30) | 0, o[O + 16 >> 2] = C, l = r - -64 | 0
                      }(e, n + 32 | 0), void(l = n + 96 | 0);
                    o[n + 20 >> 2] = 1, o[n + 52 >> 2] = 2, o[n + 36 >> 2] = 3, o[n + 40 >> 2] = 0, o[n + 32 >> 2] = 1049776, o[n + 12 >> 2] = 1, o[n + 24 >> 2] = n + 4, o[n + 28 >> 2] = 1049712, o[n + 48 >> 2] = n + 8, o[n + 16 >> 2] = n + 28, o[n + 8 >> 2] = n + 24,
                      function (e) {
                        var t, r, n, i;
                        l = t = l - 48 | 0, ee(t + 32 | 0, o[262450], o[262451], o[262452], o[262453]), i = o[4 + (r = t + 40 | 0) >> 2], o[(n = t + 20 | 0) >> 2] = o[r >> 2], o[n + 4 >> 2] = i, o[t + 8 >> 2] = e, o[t + 4 >> 2] = 1049892, o[t >> 2] = 1, e = o[t + 36 >> 2], o[t + 12 >> 2] = o[t + 32 >> 2], o[t + 16 >> 2] = e, O(t), f()
                      }(n + 32 | 0), f()
                  }

                  function I(e, t, r) {
                    var n, i, a = 0,
                      s = 0,
                      c = 0,
                      u = 0,
                      f = 0;
                    n = (((s = o[t + 12 >> 2]) ^ (a = o[t + 8 >> 2]) ^ (c = o[t + 4 >> 2])) + xe(t = o[t >> 2], 5) | 0) + o[r >> 2] | 0, i = xe(n, 30), o[e + 12 >> 2] = i, s = ((s + (a ^ (c = xe(c, 30)) ^ t) | 0) + o[r + 4 >> 2] | 0) + xe(n, 5) | 0, u = e, f = xe(s, 30), o[u + 8 >> 2] = f, a = ((a = a + o[r + 8 >> 2] | 0) + ((t = xe(t, 30)) ^ c ^ n) | 0) + xe(s, 5) | 0, o[e + 4 >> 2] = a, u = e, f = ((c + o[r + 12 >> 2] | 0) + (s ^ t ^ i) | 0) + xe(a, 5) | 0, o[u >> 2] = f
                  }

                  function T(e, t) {
                    var r = 0,
                      n = 0;
                    e: {
                      t: {
                        if ((r = o[e + 4 >> 2]) - (n = o[e + 8 >> 2]) >>> 0 < t >>> 0) {
                          if ((t = t + n | 0) >>> 0 < n >>> 0) break e;
                          if ((0 | (t = (n = r << 1) >>> 0 > t >>> 0 ? n : t)) < 0) break e;
                          if (!(r = r ? oe(o[e >> 2], r, 1, t) : ce(t, 1))) break t;
                          o[e + 4 >> 2] = t, o[e >> 2] = r
                        }
                        return
                      }
                      de(t, 1),
                      f()
                    }
                    ge(), f()
                  }

                  function E(e, t, r, n) {
                    var i;
                    l = i = l + -64 | 0, o[i + 12 >> 2] = t, o[i + 8 >> 2] = e, o[i + 20 >> 2] = n, o[i + 16 >> 2] = r, o[i + 44 >> 2] = 2, o[i + 60 >> 2] = 43, o[i + 28 >> 2] = 2, o[i + 32 >> 2] = 0, o[i + 24 >> 2] = 1050524, o[i + 52 >> 2] = 42, o[i + 40 >> 2] = i + 48, o[i + 56 >> 2] = i + 16, o[i + 48 >> 2] = i + 8, V(i + 24 | 0, 1050564), f()
                  }

                  function O(e) {
                    var t, r, n, i, a = 0,
                      s = 0;
                    l = t = l - 48 | 0, r = ae(e + 12 | 0), n = ae(o[e + 8 >> 2]), s = o[r + 4 >> 2], o[(a = t + 8 | 0) >> 2] = o[r >> 2], o[a + 4 >> 2] = s, s = o[t + 12 >> 2], a = o[t + 8 >> 2], i = o[r + 8 >> 2], o[t + 28 >> 2] = o[r + 12 >> 2], o[t + 24 >> 2] = i, o[t + 16 >> 2] = a, o[t + 20 >> 2] = s, o[t + 36 >> 2] = 0, o[t + 32 >> 2] = n, S(t + 32 | 0, 1050008, o[e + 8 >> 2], t + 16 | 0), f()
                  }

                  function C(e, t, r) {
                    var n;
                    l = n = l - 48 | 0, o[n + 4 >> 2] = r, o[n >> 2] = t, o[n + 28 >> 2] = 2, o[n + 44 >> 2] = 40, o[n + 12 >> 2] = 2, o[n + 16 >> 2] = 0, o[n + 8 >> 2] = 1050392, o[n + 36 >> 2] = 40, o[n + 24 >> 2] = n + 32, o[n + 40 >> 2] = n, o[n + 32 >> 2] = n + 4, V(n + 8 | 0, e), f()
                  }

                  function P(e, t) {
                    var r;
                    l = r = l - 48 | 0, o[r + 4 >> 2] = t, o[r >> 2] = e, o[r + 28 >> 2] = 2, o[r + 44 >> 2] = 40, o[r + 12 >> 2] = 2, o[r + 16 >> 2] = 0, o[r + 8 >> 2] = 1050644, o[r + 36 >> 2] = 40, o[r + 24 >> 2] = r + 32, o[r + 40 >> 2] = r + 4, o[r + 32 >> 2] = r, V(r + 8 | 0, 1050660), f()
                  }

                  function j(e, t) {
                    var r;
                    l = r = l - 48 | 0, o[r + 4 >> 2] = t, o[r >> 2] = e, o[r + 28 >> 2] = 2, o[r + 44 >> 2] = 40, o[r + 12 >> 2] = 2, o[r + 16 >> 2] = 0, o[r + 8 >> 2] = 1050712, o[r + 36 >> 2] = 40, o[r + 24 >> 2] = r + 32, o[r + 40 >> 2] = r + 4, o[r + 32 >> 2] = r, V(r + 8 | 0, 1050728), f()
                  }

                  function R(e, t) {
                    var r, n;
                    if (l = r = l - 16 | 0, (n = o[e >> 2]) >>> 0 <= t >>> 0) return U(r + 8 | 0, e + 4 | 0, 64, n, t), q(o[r + 8 >> 2], o[r + 12 >> 2]), o[e >> 2] = t, void(l = r + 16 | 0);
                    K(1049568, 40, 1049552), f()
                  }

                  function M(e) {
                    var t;
                    for (l = t = l - 32 | 0, o[t + 24 >> 2] = e; F(t + 16 | 0, t + 24 | 0), 1 & n[t + 16 | 0];);
                    ue(t + 8 | 0, o[e >> 2], o[e + 4 >> 2]), e = o[t + 12 >> 2], o[t + 24 >> 2] = o[t + 8 >> 2], o[t + 28 >> 2] = e, te(t + 24 | 0), l = t + 32 | 0
                  }

                  function B(e) {
                    var t, r, n, i, a, s;
                    l = t = l - 48 | 0, r = o[e + 8 >> 2], n = o[e + 12 >> 2], i = o[e + 16 >> 2], a = o[e + 20 >> 2], s = o[e >> 2], e = o[e + 4 >> 2], o[t + 16 >> 2] = 4, o[t + 20 >> 2] = 0, o[t + 4 >> 2] = 1, o[t + 8 >> 2] = 0, o[t + 24 >> 2] = s, o[t + 28 >> 2] = e, o[t >> 2] = t + 24, o[t + 40 >> 2] = i, o[t + 44 >> 2] = a, o[t + 32 >> 2] = r, o[t + 36 >> 2] = n, V(t, t + 32 | 0), f()
                  }

                  function D(e, t) {
                    var r;
                    if (l = r = l - 16 | 0, 64 == o[t >> 2]) return o[t >> 2] = 0, z(r + 8 | 0, t + 4 | 0, 64, 64), t = o[r + 12 >> 2], o[e >> 2] = o[r + 8 >> 2], o[e + 4 >> 2] = t, void(l = r + 16 | 0);
                    K(1049608, 39, 1049552), f()
                  }

                  function L(e, t, r, n) {
                    var i = 0;
                    if (1114112 == (0 | t) || (i = 1, !Se[o[o[e + 28 >> 2] + 16 >> 2]](o[e + 24 >> 2], t))) {
                      if (!r) return 0;
                      i = 0 | Se[o[o[e + 28 >> 2] + 12 >> 2]](o[e + 24 >> 2], r, n)
                    }
                    return i
                  }

                  function W(e, t, r) {
                    if (4 == (0 | t)) return t = r << 8 & 16711680 | r << 24 | r >>> 8 & 65280 | r >>> 24, n[0 | e] = t, n[e + 1 | 0] = t >>> 8, n[e + 2 | 0] = t >>> 16, void(n[e + 3 | 0] = t >>> 24);
                    K(1049304, 32, 1049288), f()
                  }

                  function N(e, t, r) {
                    var n, i = 0;
                    l = n = l - 16 | 0, i = (i = r) + (r = o[t >> 2]) | 0, o[t >> 2] = i, U(n + 8 | 0, t + 4 | 0, 64, r, i), t = o[n + 12 >> 2], o[e >> 2] = o[n + 8 >> 2], o[e + 4 >> 2] = t, l = n + 16 | 0
                  }

                  function F(e, t) {
                    var r = 0,
                      a = 0;
                    t = o[t >> 2], a = 0, (0 | (r = o[t + 8 >> 2])) != o[t + 12 >> 2] && (o[t + 8 >> 2] = r + 1, t = i[0 | r], a = 1), r = a, n[e + 1 | 0] = t, n[0 | e] = r
                  }

                  function G(e, t, r) {
                    var i;
                    l = i = l - 16 | 0, o[i + 8 >> 2] = 0, o[i >> 2] = 1, o[i + 4 >> 2] = 0, le(i, r - t >>> 2),
                      function (e, t, r) {
                        var i, a = 0,
                          s = 0,
                          c = 0;
                        for (l = i = l - 16 | 0;
                          (0 | e) != (0 | t);) a = e + 4 | 0, (e = o[e >> 2]) >>> 0 >= 128 ? (o[i + 12 >> 2] = 0, s = r, c = i + 12 | 0, e >>> 0 <= 2047 ? (n[i + 13 | 0] = 63 & e | 128, n[i + 12 | 0] = e >>> 6 & 31 | 192, e = 2) : e >>> 0 <= 65535 ? (n[i + 14 | 0] = 63 & e | 128, n[i + 13 | 0] = e >>> 6 & 63 | 128, n[i + 12 | 0] = e >>> 12 & 15 | 224, e = 3) : (n[i + 15 | 0] = 63 & e | 128, n[i + 12 | 0] = e >>> 18 | 240, n[i + 14 | 0] = e >>> 6 & 63 | 128, n[i + 13 | 0] = e >>> 12 & 63 | 128, e = 4), se(s, c, e), e = a) : (o[r + 8 >> 2] == o[r + 4 >> 2] && le(r, 1), n[o[r >> 2] + o[r + 8 >> 2] | 0] = e, o[r + 8 >> 2] = o[r + 8 >> 2] + 1, e = a);
                        l = i + 16 | 0
                      }(t, r, i), o[e + 8 >> 2] = o[i + 8 >> 2], t = o[i + 4 >> 2], o[e >> 2] = o[i >> 2], o[e + 4 >> 2] = t, l = i + 16 | 0
                  }

                  function U(e, t, r, n, i) {
                    e: {
                      if (i >>> 0 >= n >>> 0) {
                        if (r >>> 0 < i >>> 0) break e;
                        return o[e + 4 >> 2] = i - n, void(o[e >> 2] = t + n)
                      }
                      j(n, i),
                      f()
                    }
                    P(i, r),
                    f()
                  }

                  function V(e, t) {
                    var r, n, i, a, s;
                    l = r = l - 32 | 0, i = o[t >> 2], a = o[t + 4 >> 2], s = o[t + 12 >> 2], o[(n = r + 20 | 0) >> 2] = o[t + 8 >> 2], o[n + 4 >> 2] = s, o[r + 12 >> 2] = i, o[r + 16 >> 2] = a, o[r + 8 >> 2] = e, o[r + 4 >> 2] = 1050324, o[r >> 2] = 1, O(r), f()
                  }

                  function $(e) {
                    var t, r;
                    e |= 0, l = t = l - 16 | 0,
                      function (e) {
                        var t, r = 0;
                        l = t = l - 32 | 0, o[4 + (r = t + 8 | 0) >> 2] = 0, o[r >> 2] = 1, o[t + 24 >> 2] = 0, r = o[t + 12 >> 2], o[t + 16 >> 2] = o[t + 8 >> 2], o[t + 20 >> 2] = r, se(t + 16 | 0, 1049136, 0), o[e + 8 >> 2] = o[t + 24 >> 2], r = o[t + 20 >> 2], o[e >> 2] = o[t + 16 >> 2], o[e + 4 >> 2] = r, l = t + 32 | 0
                      }(t), o[e >> 2] = 0, r = o[t + 4 >> 2], o[e + 4 >> 2] = o[t >> 2], o[e + 8 >> 2] = r, o[e + 12 >> 2] = o[t + 8 >> 2], l = t + 16 | 0
                  }

                  function J(e, t, r, n, i) {
                    e: {
                      if (r >>> 0 >= t >>> 0) {
                        if (i >>> 0 >= r >>> 0) break e;
                        P(r, i), f()
                      }
                      j(t, r),
                      f()
                    }
                    o[e + 4 >> 2] = r - t,
                    o[e >> 2] = t + n
                  }

                  function Q(e, t, r) {
                    var n;
                    l = n = l - 32 | 0, ne(n + 16 | 0, t, r, r), Z(n + 8 | 0, n + 16 | 0), t = o[n + 12 >> 2], o[e >> 2] = o[n + 8 >> 2], o[e + 4 >> 2] = t, l = n + 32 | 0
                  }

                  function Y(e, t, r) {
                    var o = 0;
                    if (r)
                      for (o = e; n[0 | o] = i[0 | t], o = o + 1 | 0, t = t + 1 | 0, r = r + -1 | 0;);
                    return e
                  }

                  function Z(e, t) {
                    var r, n;
                    l = r = l - 16 | 0, (0 | (n = o[t + 8 >> 2])) != o[t + 4 >> 2] && function (e, t) {
                        var r = 0;
                        e: {
                          t: {
                            r: {
                              if ((r = o[e + 4 >> 2]) >>> 0 >= t >>> 0) {
                                if (t) {
                                  if ((0 | t) == (0 | r)) break e;
                                  if (r = oe(o[e >> 2], r, 1, t)) break r;
                                  de(t, 1), f()
                                }
                                te(e), o[e >> 2] = 1, t = 0;
                                break t
                              }
                              B(1048636),
                              f()
                            }
                            o[e >> 2] = r
                          }
                          o[e + 4 >> 2] = t
                        }
                      }(t, n),
                      function (e, t, r) {
                        var n;
                        l = n = l - 16 | 0, o[n + 12 >> 2] = r, o[n + 8 >> 2] = t, o[e >> 2] = o[n + 8 >> 2], o[e + 4 >> 2] = o[n + 12 >> 2], l = n + 16 | 0
                      }(r + 8 | 0, o[t >> 2], o[t + 4 >> 2]), t = o[r + 12 >> 2], o[e >> 2] = o[r + 8 >> 2], o[e + 4 >> 2] = t, l = r + 16 | 0
                  }

                  function z(e, t, r, n) {
                    var i;
                    l = i = l - 16 | 0, J(i + 8 | 0, 0, n, t, r), t = o[i + 12 >> 2], o[e >> 2] = o[i + 8 >> 2], o[e + 4 >> 2] = t, l = i + 16 | 0
                  }

                  function H(e, t, r) {
                    var n;
                    return t |= 0, r |= 0, T(e = o[(e |= 0) >> 2], r), n = o[e + 8 >> 2], o[e + 8 >> 2] = n + r, Y(o[e >> 2] + n | 0, t, r), 0
                  }

                  function q(e, t) {
                    if (t)
                      for (; n[0 | e] = 0, e = e + 1 | 0, t = t + -1 | 0;);
                  }

                  function K(e, t, r) {
                    var n;
                    l = n = l - 16 | 0, o[n + 12 >> 2] = t, o[n + 8 >> 2] = e, S(n + 8 | 0, 1049204, 0, r), f()
                  }

                  function X(e, t, r, n) {
                    n >>> 0 >= t >>> 0 ? Y(r, e, t) : (K(1049416, 40, 1049400), f())
                  }

                  function ee(e, t, r, n, i) {
                    o[e + 12 >> 2] = i, o[e + 8 >> 2] = n, o[e + 4 >> 2] = r, o[e >> 2] = t
                  }

                  function te(e) {
                    o[e + 4 >> 2] && y(o[e >> 2])
                  }

                  function re(e) {
                    o[4 + (e |= 0) >> 2] = 0, o[e + 8 >> 2] = 0, o[e >> 2] = 4, o[(e = e + 12 | 0) >> 2] = 0, o[e + 4 >> 2] = 0
                  }

                  function ne(e, t, r, n) {
                    o[e + 8 >> 2] = r, o[e + 4 >> 2] = n, o[e >> 2] = t
                  }

                  function oe(e, t, r, n) {
                    return function (e, t, r, n) {
                      e: {
                        if (8 < r >>> 0) {
                          if (r = 8 < r >>> 0 ? m(r, n) : d(n)) break e;
                          return 0
                        }
                        return function (e, t) {
                          var r = 0,
                            n = 0,
                            i = 0,
                            a = 0,
                            s = 0,
                            c = 0,
                            u = 0,
                            f = 0,
                            l = 0,
                            p = 0;
                          t: if (!(t >>> 0 > 4294901708)) {
                            r = t >>> 0 < 11 ? 16 : t + 11 & -8, n = -8 & (c = o[(s = e + -4 | 0) >> 2]);
                            r: {
                              n: {
                                o: {
                                  i: {
                                    a: {
                                      s: {
                                        if (3 & c) {
                                          if (a = n + (u = e + -8 | 0) | 0, n >>> 0 >= r >>> 0) break s;
                                          if ((0 | a) == o[262874]) break a;
                                          if ((0 | a) == o[262873]) break i;
                                          if (2 & (c = o[a + 4 >> 2])) break r;
                                          if ((n = n + (f = -8 & c) | 0) >>> 0 >= r >>> 0) break o;
                                          break r
                                        }
                                        if (r >>> 0 < 256 | n >>> 0 < (4 | r) >>> 0 | n - r >>> 0 >= 131073) break r;
                                        break n
                                      }
                                      if ((t = n - r | 0) >>> 0 < 16) break n;o[s >> 2] = r | 1 & c | 2,
                                      o[4 + (i = r + u | 0) >> 2] = 3 | t,
                                      o[a + 4 >> 2] = 1 | o[a + 4 >> 2],
                                      A(i, t);
                                      break n
                                    }
                                    if ((n = n + o[262872] | 0) >>> 0 <= r >>> 0) break r;o[s >> 2] = r | 1 & c | 2,
                                    i = n - r | 0,
                                    o[4 + (t = r + u | 0) >> 2] = 1 | i,
                                    o[262872] = i,
                                    o[262874] = t;
                                    break n
                                  }
                                  if ((n = n + o[262871] | 0) >>> 0 < r >>> 0) break r;
                                  (t = n - r | 0) >>> 0 <= 15 ? (o[s >> 2] = n | 1 & c | 2, o[4 + (t = n + u | 0) >> 2] = 1 | o[t + 4 >> 2], t = 0) : (o[s >> 2] = r | 1 & c | 2, o[4 + (i = r + u | 0) >> 2] = 1 | t, o[(r = n + u | 0) >> 2] = t, o[r + 4 >> 2] = -2 & o[r + 4 >> 2]),
                                  o[262873] = i,
                                  o[262871] = t;
                                  break n
                                }
                                t = n - r | 0,
                                f >>> 0 >= 256 ? x(a) : (0 | (i = o[a + 12 >> 2])) == (0 | (a = o[a + 8 >> 2])) ? (l = 1051084, p = o[262771] & xe(-2, c >>> 3), o[l >> 2] = p) : (o[a + 12 >> 2] = i, o[i + 8 >> 2] = a),
                                t >>> 0 >= 16 ? (o[s >> 2] = r | 1 & o[s >> 2] | 2, o[4 + (i = r + u | 0) >> 2] = 3 | t, o[4 + (r = n + u | 0) >> 2] = 1 | o[r + 4 >> 2], A(i, t)) : (o[s >> 2] = n | 1 & o[s >> 2] | 2, o[4 + (t = n + u | 0) >> 2] = 1 | o[t + 4 >> 2])
                              }
                              i = e;
                              break t
                            }
                            if (r = d(t)) return t = Y(r, e, (i = (-8 & (i = o[s >> 2])) - (3 & i ? 4 : 8) | 0) >>> 0 > t >>> 0 ? t : i), y(e), t
                          }
                          return i
                        }(e, n)
                      }
                      return t = Y(r, e, t >>> 0 > n >>> 0 ? n : t),
                      y(e),
                      t
                    }(e, t, r, n)
                  }

                  function ie(e, t) {
                    o[e + 4 >> 2] = o[t + 8 >> 2], o[e >> 2] = o[t >> 2]
                  }

                  function ae(e) {
                    return e || (B(1049972), f()), e
                  }

                  function se(e, t, r) {
                    ! function (e, t, r) {
                      var n, i;
                      l = n = l - 16 | 0, le(e, r = r - t | 0), i = o[e + 8 >> 2], o[e + 8 >> 2] = r + i, ie(n + 8 | 0, e),
                        function (e, t, r, n) {
                          var i;
                          if (l = i = l - 112 | 0, o[i + 24 >> 2] = t, o[i + 28 >> 2] = n, (0 | t) == (0 | n)) return Y(e, r, t), void(l = i + 112 | 0);
                          o[i + 80 >> 2] = i + 24, o[i + 84 >> 2] = i + 28, o[i + 104 >> 2] = 4, o[i + 108 >> 2] = 0, o[i + 92 >> 2] = 1, o[i + 96 >> 2] = 0, o[i + 88 >> 2] = 1048948, ue(i + 16 | 0, i + 80 | 0, 1), e = o[i + 20 >> 2], t = o[i + 16 >> 2], ue(i + 8 | 0, i + 84 | 0, 1), o[i + 76 >> 2] = 2, o[i + 52 >> 2] = 3, o[i + 56 >> 2] = t, o[i + 60 >> 2] = e, o[i + 36 >> 2] = 3, o[i + 40 >> 2] = 0, o[i + 32 >> 2] = 1048872, e = o[i + 12 >> 2], o[i + 64 >> 2] = o[i + 8 >> 2], o[i + 68 >> 2] = e, o[i + 72 >> 2] = i + 88, o[i + 48 >> 2] = i + 56, V(i + 32 | 0, 1048956), f()
                        }(o[n + 8 >> 2] + i | 0, o[n + 12 >> 2] - i | 0, t, r), l = n + 16 | 0
                    }(e, t, t + r | 0)
                  }

                  function ce(e, t) {
                    return 8 < t >>> 0 ? m(t, e) : d(e)
                  }

                  function ue(e, t, r) {
                    o[e + 4 >> 2] = r, o[e >> 2] = t
                  }

                  function fe(e, t, r) {
                    k(o[o[e >> 2] >> 2], t, r)
                  }

                  function le(e, t) {
                    ! function (e, t, r) {
                      var n;
                      l = n = l - 16 | 0,
                        function (e, t, r, n) {
                          var i, a = 0;
                          l = i = l - 48 | 0, o[t + 4 >> 2] - r >>> 0 >= n >>> 0 || (function (e, t, r, n) {
                            var i, a;
                            l = i = l - 16 | 0, a = e, (n = r + n | 0) >>> 0 < r >>> 0 ? (ue(i + 8 | 0, n, 0), r = o[i + 8 >> 2], o[e + 8 >> 2] = o[i + 12 >> 2], t = 1) : (r = (t = o[t + 4 >> 2] << 1) >>> 0 > n >>> 0 ? t : n, t = 0), o[a >> 2] = t, o[e + 4 >> 2] = r, l = i + 16 | 0
                          }(i + 32 | 0, t, r, n), a = 1, r = o[i + 36 >> 2], 1 != o[i + 32 >> 2] ? (0 | r) <= -1 ? (ue(i + 8 | 0, i, 0), t = o[i + 12 >> 2], o[e + 4 >> 2] = o[i + 8 >> 2], o[e + 8 >> 2] = t) : (n = i + 16 | 0, a = o[t + 4 >> 2], o[n >> 2] = a, o[n + 4 >> 2] = 0 != (0 | a), (n = (n = o[i + 20 >> 2]) ? oe(o[t >> 2], o[i + 16 >> 2], n, r) : ce(r, 1)) || (de(r, 1), f()), o[t + 4 >> 2] = r, o[t >> 2] = n, a = 0) : (ue(i, r, o[i + 40 >> 2]), t = o[i + 4 >> 2], o[e + 4 >> 2] = o[i >> 2], o[e + 8 >> 2] = t)), o[e >> 2] = a, l = i + 48 | 0
                        }(n, e, t, r);
                      e: {
                        if (1 == o[n >> 2]) {
                          if (!o[n + 8 >> 2]) break e;
                          B(1048700), f()
                        }
                        return void(l = n + 16 | 0)
                      }
                      ge(), f()
                    }(e, o[e + 8 >> 2], t)
                  }

                  function pe(e, t) {
                    return t |= 0, 0 | function (e, t) {
                      var r, o = 0,
                        a = 0,
                        s = 0,
                        u = 0,
                        f = 0,
                        d = 0,
                        h = 0,
                        g = 0,
                        y = 0;
                      if (l = r = l - 48 | 0, a = 39, e >>> 0 < 1e4) o = e;
                      else
                        for (; o = _e(e, u), y = s = p, h = (f = (r + 9 | 0) + a | 0) - 4 | 0, s = e - me(o, s) | 0, d = i[0 | (d = 1050746 + ((g = ((65535 & s) >>> 0) / 100 | 0) << 1) | 0)] | i[d + 1 | 0] << 8, n[0 | h] = d, n[h + 1 | 0] = d >>> 8, f = f + -2 | 0, s = 1050746 + ((s - c(g, 100) & 65535) << 1) | 0, s = i[0 | s] | i[s + 1 | 0] << 8, n[0 | f] = s, n[f + 1 | 0] = s >>> 8, a = a + -4 | 0, s = !u & e >>> 0 > 99999999 | u >>> 0 > 0, e = o, u = y, s;);
                      return (0 | o) > 99 && (u = (a = a + -2 | 0) + (r + 9 | 0) | 0, e = 1050746 + (((e = o) - c(o = ((65535 & e) >>> 0) / 100 | 0, 100) & 65535) << 1) | 0, e = i[0 | e] | i[e + 1 | 0] << 8, n[0 | u] = e, n[u + 1 | 0] = e >>> 8), (0 | o) >= 10 ? (e = (a = a + -2 | 0) + (r + 9 | 0) | 0, o = i[0 | (o = 1050746 + (o << 1) | 0)] | i[o + 1 | 0] << 8, n[0 | e] = o, n[e + 1 | 0] = o >>> 8) : n[(a = a + -1 | 0) + (r + 9 | 0) | 0] = o + 48, e = v(t, 1050299, 0, (r + 9 | 0) + a | 0, 39 - a | 0), l = r + 48 | 0, e
                    }(o[(e |= 0) >> 2], t)
                  }

                  function de(e, t) {
                    var r;
                    r = e, e = o[262767], Se[e || 22](r, t), f()
                  }

                  function he(e, t, r) {
                    return g(r, e, t)
                  }

                  function ge() {
                    B(1050224), f()
                  }

                  function ye(e) {
                    return p = 1468863706, -1546811115
                  }

                  function ve(e) {}

                  function be() {}

                  function Ae(e, t) {
                    var r, n;
                    r = 0 | e, n = 0 | t, s[0] = r, s[1] = n
                  }

                  function me(e, t) {
                    var r, n = 0,
                      o = 0;
                    return r = c(n = e >>> 16, 0), e = 65535 & (o = (o = c(n, 1e4)) + ((n = c(65535 & e, 1e4)) >>> 16) | 0), p = ((r + c(t, 1e4) | 0) + (o >>> 16) | 0) + (e >>> 16) | 0, 65535 & n | e << 16
                  }

                  function _e(e, t) {
                    var r = 0,
                      n = 0,
                      o = 0,
                      i = 0,
                      a = 0,
                      s = 0,
                      f = 0;
                    if (!t) return Ae((t = e) - c(e = (e >>> 0) / 1e4 | 0, 1e4) | 0, 0), p = 0, e;
                    if (o = 0 - (a = 51 - u(t) | 0) | 0, r = 31 & (n = 63 & a), 32 <= n >>> 0 ? (n = 0, i = t >>> r) : (n = t >>> r, i = ((1 << r) - 1 & t) << 32 - r | e >>> r), r = 31 & (o &= 63), 32 <= o >>> 0 ? (t = e << r, e = 0) : (t = (1 << r) - 1 & e >>> 32 - r | t << r, e <<= r), a)
                      for (; o = n << 1 | i >>> 31, i = (n = i << 1 | t >>> 31) - (r = 1e4 & (s = (i = 0 - (o + (9999 < n >>> 0) | 0) | 0) >> 31)) | 0, n = o - (n >>> 0 < r >>> 0) | 0, t = t << 1 | e >>> 31, e = f | e << 1, f = s &= 1, a = a + -1 | 0;);
                    return Ae(i, n), p = t << 1 | e >>> 31, s | e << 1
                  }

                  function we(e) {
                    return e ? 31 - u(e + -1 ^ e) | 0 : 32
                  }

                  function xe(e, t) {
                    var r = 0;
                    return (-1 >>> (r = 31 & t) & e) << r | ((r = e) & -1 << (e = 0 - t & 31)) >>> e
                  }
                  var Se = [null, function (e, t) {
                    return t |= 0, e = o[(e |= 0) >> 2], (16 & i[0 | t]) >>> 4 ? 0 | function (e, t) {
                      var r, i = 0,
                        a = 0;
                      for (l = r = l - 128 | 0, i = o[e >> 2], e = 0; a = 15 & i, n[127 + (e + r | 0) | 0] = a >>> 0 < 10 ? 48 | a : a + 87 | 0, e = e + -1 | 0, i >>>= 4;);
                      return (i = e + 128 | 0) >>> 0 >= 129 && (j(i, 128), f()), e = v(t, 1050744, 2, 128 + (e + r | 0) | 0, 0 - e | 0), l = r + 128 | 0, e
                    }(e, t) : (32 & i[0 | t]) >>> 5 ? 0 | function (e, t) {
                      var r, i = 0,
                        a = 0;
                      for (l = r = l - 128 | 0, i = o[e >> 2], e = 0; a = 15 & i, n[127 + (e + r | 0) | 0] = a >>> 0 < 10 ? 48 | a : a + 55 | 0, e = e + -1 | 0, i >>>= 4;);
                      return (i = e + 128 | 0) >>> 0 >= 129 && (j(i, 128), f()), e = v(t, 1050744, 2, 128 + (e + r | 0) | 0, 0 - e | 0), l = r + 128 | 0, e
                    }(e, t) : 0 | pe(e, t)
                  }, function (e, t) {
                    e |= 0;
                    var r, n, i = 0,
                      a = 0,
                      s = 0;
                    return l = r = l - 32 | 0, n = o[28 + (t |= 0) >> 2], t = o[t + 24 >> 2], s = o[4 + (a = e + 16 | 0) >> 2], o[(i = r + 24 | 0) >> 2] = o[a >> 2], o[i + 4 >> 2] = s, s = o[4 + (a = e + 8 | 0) >> 2], o[(i = r + 16 | 0) >> 2] = o[a >> 2], o[i + 4 >> 2] = s, i = o[e + 4 >> 2], o[r + 8 >> 2] = o[e >> 2], o[r + 12 >> 2] = i, e = h(t, n, r + 8 | 0), l = r + 32 | 0, 0 | e
                  }, function (e, t) {
                    return t |= 0, 0 | he(o[(e |= 0) >> 2], o[e + 4 >> 2], t)
                  }, function (e, t) {
                    var r;
                    return t |= 0, l = r = l - 16 | 0, ie(r + 8 | 0, o[(e |= 0) >> 2]), e = he(o[r + 8 >> 2], o[r + 12 >> 2], t), l = r + 16 | 0, 0 | e
                  }, ve, function (e, t) {
                    return e |= 0, l = e = l - 16 | 0,
                      function (e, t) {
                        var r;
                        r = 0 | Se[o[o[t + 28 >> 2] + 12 >> 2]](o[t + 24 >> 2], 1049996, 11), n[e + 5 | 0] = 0, n[e + 4 | 0] = r, o[e >> 2] = t
                      }(e + 8 | 0, t |= 0), t = function (e) {
                        var t = 0,
                          r = 0,
                          a = 0;
                        return t = i[e + 4 | 0], i[e + 5 | 0] && (r = 255 & t, a = e, t = 1, r || (t = o[e >> 2], r = o[o[t + 28 >> 2] + 12 >> 2], e = o[t + 24 >> 2], t = 4 & i[0 | t] ? 0 | Se[r](e, 1050946, 1) : 0 | Se[r](e, 1050947, 2)), n[a + 4 | 0] = t), 0 != (255 & t)
                      }(e + 8 | 0), l = e + 16 | 0, 0 | t
                  }, ve, function (e, t) {
                    return 0 | Se[o[o[28 + (t |= 0) >> 2] + 12 >> 2]](o[t + 24 >> 2], 1050299, 11)
                  }, ve, function (e, t) {
                    return 0 | Se[o[o[28 + (t |= 0) >> 2] + 12 >> 2]](o[t + 24 >> 2], 1050310, 14)
                  }, $, function () {
                    return 0 | (o[262757] ? 1051024 : function () {
                      var e, t, r = 0,
                        n = 0,
                        i = 0;
                      return l = e = l - 32 | 0, $(e), i = o[262759], o[(r = e + 24 | 0) >> 2] = o[262758], o[r + 4 >> 2] = i, i = o[262756], r = o[262757], n = o[e + 4 >> 2], o[262756] = o[e >> 2], o[262757] = n, t = o[4 + (n = e + 8 | 0) >> 2], o[262758] = o[n >> 2], o[262759] = t, o[e + 16 >> 2] = i, o[e + 20 >> 2] = r, o[e + 20 >> 2] && te(e + 16 | 4), l = e + 32 | 0, 1051024
                    }())
                  }, ve, function (e, t) {
                    e |= 0;
                    var r = 0,
                      n = 0,
                      i = 0;
                    r = o[(t |= 0) >> 2], o[t >> 2] = 0;
                    e: {
                      if (n = e, r) {
                        if (i = o[t + 4 >> 2], !(t = ce(8, 4))) break e;
                        o[t + 4 >> 2] = i, o[t >> 2] = r, r = 1049224
                      } else t = 1,
                      r = 1049240;
                      return o[n + 4 >> 2] = r,
                      void(o[e >> 2] = t)
                    }
                    de(8, 4), f()
                  }, function (e, t) {
                    var r;
                    e |= 0, r = o[(t |= 0) >> 2], o[e + 4 >> 2] = r ? 1049224 : 1049240, o[e >> 2] = r ? t : 1
                  }, ve, function (e) {
                    return p = 286299353, 1890621284
                  }, ve, function (e) {
                    return p = 1757840133, -801715452
                  }, re, function () {
                    return 0 | (o[262762] ? 1051048 : function () {
                      var e, t, r = 0,
                        n = 0,
                        i = 0;
                      return l = e = l - 48 | 0, re(e), o[e + 40 >> 2] = o[262766], r = o[262765], o[(n = e + 32 | 0) >> 2] = o[262764], o[n + 4 >> 2] = r, r = o[262762], n = o[262763], i = o[e + 4 >> 2], o[262762] = o[e >> 2], o[262763] = i, t = o[4 + (i = e + 8 | 0) >> 2], o[262764] = o[i >> 2], o[262765] = t, o[262766] = o[e + 16 >> 2], o[e + 24 >> 2] = r, o[e + 28 >> 2] = n, r && o[4 + (r = e + 24 | 0) >> 2] && y(o[r >> 2]), l = e + 48 | 0, 1051048
                    }())
                  }, function (e, t) {}, ve, H, function (e, t) {
                    t |= 0;
                    var r, i = 0;
                    l = r = l - 16 | 0, i = e = o[(e |= 0) >> 2];
                    e: {
                      t: {
                        r: {
                          if (t >>> 0 >= 128) {
                            if (o[r + 12 >> 2] = 0, t >>> 0 < 2048) break r;
                            if (t >>> 0 < 65536) {
                              n[r + 14 | 0] = 63 & t | 128, n[r + 13 | 0] = t >>> 6 & 63 | 128, n[r + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                              break t
                            }
                            n[r + 15 | 0] = 63 & t | 128, n[r + 12 | 0] = t >>> 18 | 240, n[r + 14 | 0] = t >>> 6 & 63 | 128, n[r + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                            break t
                          }(0 | (i = o[e + 8 >> 2])) == o[e + 4 >> 2] && (T(e, 1), i = o[e + 8 >> 2]),
                          n[i + o[e >> 2] | 0] = t,
                          o[e + 8 >> 2] = o[e + 8 >> 2] + 1;
                          break e
                        }
                        n[r + 13 | 0] = 63 & t | 128,
                        n[r + 12 | 0] = t >>> 6 & 31 | 192,
                        t = 2
                      }
                      T(i, t),
                      i = o[e + 8 >> 2],
                      o[e + 8 >> 2] = i + t,
                      Y(i + o[e >> 2] | 0, r + 12 | 0, t)
                    }
                    return l = r + 16 | 0, 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var r, n = 0,
                      i = 0;
                    return l = r = l - 32 | 0, o[r + 4 >> 2] = o[e >> 2], i = o[4 + (n = t + 16 | 0) >> 2], o[(e = r + 24 | 0) >> 2] = o[n >> 2], o[e + 4 >> 2] = i, i = o[4 + (n = t + 8 | 0) >> 2], o[(e = r + 16 | 0) >> 2] = o[n >> 2], o[e + 4 >> 2] = i, e = o[t + 4 >> 2], o[r + 8 >> 2] = o[t >> 2], o[r + 12 >> 2] = e, e = h(r + 4 | 0, 1049868, r + 8 | 0), l = r + 32 | 0, 0 | e
                  }, ve, ye, function (e) {
                    var t;
                    !(t = o[4 + (e |= 0) >> 2]) | !o[e + 8 >> 2] || y(t)
                  }, function (e, t) {
                    e |= 0;
                    var r, n = 0,
                      i = 0,
                      a = 0,
                      s = 0;
                    l = r = l + -64 | 0, (n = o[4 + (t |= 0) >> 2]) || (n = o[t >> 2], o[r + 32 >> 2] = 0, o[r + 24 >> 2] = 1, o[r + 28 >> 2] = 0, o[r + 36 >> 2] = r + 24, a = o[4 + (i = n + 16 | 0) >> 2], o[(s = r + 56 | 0) >> 2] = o[i >> 2], o[s + 4 >> 2] = a, a = o[4 + (i = n + 8 | 0) >> 2], o[(s = r + 48 | 0) >> 2] = o[i >> 2], o[s + 4 >> 2] = a, i = o[n + 4 >> 2], o[r + 40 >> 2] = o[n >> 2], o[r + 44 >> 2] = i, h(r + 36 | 0, 1049868, r + 40 | 0), o[(i = r + 16 | 0) >> 2] = o[r + 32 >> 2], n = o[r + 28 >> 2], o[r + 8 >> 2] = o[r + 24 >> 2], o[r + 12 >> 2] = n, !(n = o[t + 4 >> 2]) | !o[t + 8 >> 2] || y(n), a = o[r + 12 >> 2], o[(n = t + 4 | 0) >> 2] = o[r + 8 >> 2], o[n + 4 >> 2] = a, o[n + 8 >> 2] = o[i >> 2], n = o[n >> 2]), o[t + 4 >> 2] = 1, i = o[t + 12 >> 2], a = o[(t = t + 8 | 0) >> 2], o[t >> 2] = 0, o[t + 4 >> 2] = 0, (t = ce(12, 4)) || (de(12, 4), f()), o[t + 8 >> 2] = i, o[t + 4 >> 2] = a, o[t >> 2] = n, o[e + 4 >> 2] = 1050028, o[e >> 2] = t, l = r - -64 | 0
                  }, function (e, t) {
                    e |= 0;
                    var r, n, i = 0,
                      a = 0,
                      s = 0,
                      c = 0;
                    l = r = l + -64 | 0, n = 4 + (t |= 0) | 0, o[t + 4 >> 2] || (a = o[t >> 2], o[r + 32 >> 2] = 0, o[r + 24 >> 2] = 1, o[r + 28 >> 2] = 0, o[r + 36 >> 2] = r + 24, c = o[4 + (i = a + 16 | 0) >> 2], o[(s = r + 56 | 0) >> 2] = o[i >> 2], o[s + 4 >> 2] = c, c = o[4 + (i = a + 8 | 0) >> 2], o[(s = r + 48 | 0) >> 2] = o[i >> 2], o[s + 4 >> 2] = c, i = o[a + 4 >> 2], o[r + 40 >> 2] = o[a >> 2], o[r + 44 >> 2] = i, h(r + 36 | 0, 1049868, r + 40 | 0), o[(a = r + 16 | 0) >> 2] = o[r + 32 >> 2], i = o[r + 28 >> 2], o[r + 8 >> 2] = o[r + 24 >> 2], o[r + 12 >> 2] = i, !(i = o[t + 4 >> 2]) | !o[t + 8 >> 2] || y(i), t = o[r + 12 >> 2], o[n >> 2] = o[r + 8 >> 2], o[n + 4 >> 2] = t, o[n + 8 >> 2] = o[a >> 2]), o[e + 4 >> 2] = 1050028, o[e >> 2] = n, l = r - -64 | 0
                  }, te, function (e) {
                    return p = -679582923, 428379921
                  }, ve, H, function (e, t) {
                    return t |= 0,
                      function (e, t) {
                        var r, i = 0;
                        l = r = l - 16 | 0, i = e;
                        e: {
                          t: {
                            r: {
                              if (t >>> 0 >= 128) {
                                if (o[r + 12 >> 2] = 0, t >>> 0 < 2048) break r;
                                if (t >>> 0 < 65536) {
                                  n[r + 14 | 0] = 63 & t | 128, n[r + 13 | 0] = t >>> 6 & 63 | 128, n[r + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                                  break t
                                }
                                n[r + 15 | 0] = 63 & t | 128, n[r + 12 | 0] = t >>> 18 | 240, n[r + 14 | 0] = t >>> 6 & 63 | 128, n[r + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                                break t
                              }(0 | (i = o[e + 8 >> 2])) == o[e + 4 >> 2] && (T(e, 1), i = o[e + 8 >> 2]),
                              n[i + o[e >> 2] | 0] = t,
                              o[e + 8 >> 2] = o[e + 8 >> 2] + 1;
                              break e
                            }
                            n[r + 13 | 0] = 63 & t | 128,
                            n[r + 12 | 0] = t >>> 6 & 31 | 192,
                            t = 2
                          }
                          T(i, t),
                          i = o[e + 8 >> 2],
                          o[e + 8 >> 2] = i + t,
                          Y(i + o[e >> 2] | 0, r + 12 | 0, t)
                        }
                        l = r + 16 | 0
                      }(o[(e |= 0) >> 2], t), 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var r, n = 0,
                      i = 0;
                    return l = r = l - 32 | 0, o[r + 4 >> 2] = o[e >> 2], i = o[4 + (n = t + 16 | 0) >> 2], o[(e = r + 24 | 0) >> 2] = o[n >> 2], o[e + 4 >> 2] = i, i = o[4 + (n = t + 8 | 0) >> 2], o[(e = r + 16 | 0) >> 2] = o[n >> 2], o[e + 4 >> 2] = i, e = o[t + 4 >> 2], o[r + 8 >> 2] = o[t >> 2], o[r + 12 >> 2] = e, e = h(r + 4 | 0, 1050044, r + 8 | 0), l = r + 32 | 0, 0 | e
                  }, ve, function (e, t) {
                    return 0 | Se[o[o[28 + (t |= 0) >> 2] + 12 >> 2]](o[t + 24 >> 2], 1051016, 5)
                  }, pe, pe, function (e, t) {
                    return 0 | g(t |= 0, o[(e |= 0) >> 2], o[e + 4 >> 2])
                  }, function (e, t) {
                    return t |= 0, 0 | Se[o[o[4 + (e |= 0) >> 2] + 12 >> 2]](o[e >> 2], t)
                  }, ve, ye];

                  function ke(t) {
                    t |= 0;
                    var s = 0 | r.byteLength / 65536,
                      u = s + t | 0;
                    if (s < u && u < 65536) {
                      var f = new ArrayBuffer(c(u, 65536)),
                        l = new e.Int8Array(f);
                      l.set(n), n = l, n = new e.Int8Array(f), new e.Int16Array(f), o = new e.Int32Array(f), i = new e.Uint8Array(f), new e.Uint16Array(f), a = new e.Uint32Array(f), new e.Float32Array(f), new e.Float64Array(f), r = f
                    }
                    return s
                  }
                  return {
                    memory: Object.create(Object.prototype, {
                      grow: {
                        value: ke
                      },
                      buffer: {
                        get: function () {
                          return r
                        }
                      }
                    }),
                    sha1: function (e, t, r) {
                      var n;
                      e |= 0, l = n = l - 80 | 0, Q(n + 24 | 0, t |= 0, r |= 0),
                        function (e, t, r) {
                          var n;
                          l = n = l - 16 | 0, o[n + 12 >> 2] = r, o[n + 8 >> 2] = t,
                            function (e, t) {
                              var r;
                              l = r = l - 32 | 0,
                                function (e, t) {
                                  var r, n, a = 0;
                                  l = r = l - 176 | 0, (n = 0 | Se[o[262284]]()) ? (function (e) {
                                    var t;
                                    o[e + 8 >> 2] = 1732584193, o[e + 12 >> 2] = -271733879, o[e >> 2] = 0, o[e + 4 >> 2] = 0, o[e + 24 >> 2] = -1009589776, o[(t = e + 16 | 0) >> 2] = -1732584194, o[t + 4 >> 2] = 271733878, q(e + 28 | 0, 69)
                                  }(r + 8 | 0), (0 | (a = o[n >> 2] + 1 | 0)) <= 0 && (E(1049045, 24, r + 128 | 0, 1049088), f()), o[n >> 2] = a, o[r + 164 >> 2] = 3, o[r + 148 >> 2] = 2, o[r + 132 >> 2] = 2, o[r + 136 >> 2] = 0, o[r + 128 >> 2] = 1049120, o[r + 172 >> 2] = n, o[r + 168 >> 2] = n + 4, o[r + 160 >> 2] = t, o[r + 156 >> 2] = 4, o[r + 144 >> 2] = r + 152, o[r + 152 >> 2] = r + 168, function (e, t) {
                                    var r, n, i = 0,
                                      a = 0,
                                      s = 0,
                                      c = 0;
                                    if (l = r = l - 48 | 0, c = o[t >> 2], a = (n = o[t + 4 >> 2]) << 3)
                                      for (i = c + 4 | 0; s = o[i >> 2] + s | 0, i = i + 8 | 0, a = a + -8 | 0;);
                                    e: {
                                      t: {
                                        r: {
                                          n: {
                                            if (o[t + 20 >> 2]) {
                                              if (n || (C(1050152, 0, 0), f()), !o[c + 4 >> 2] && s >>> 0 <= 15 || !((i = s + s | 0) >>> 0 >= s >>> 0)) {
                                                a = 1, i = 0, s = r + 8 | 0;
                                                break n
                                              }
                                            } else i = s;
                                            if ((0 | i) <= -1) break r;
                                            if (s = r + 8 | 0, i) {
                                              if (!(a = ce(i, 1))) break t
                                            } else a = 1,
                                            i = 0
                                          }
                                          if (o[r + 16 >> 2] = 0, o[r + 12 >> 2] = i, o[r + 8 >> 2] = a, o[r + 20 >> 2] = r + 8, a = o[4 + (i = t + 16 | 0) >> 2], o[(c = r + 40 | 0) >> 2] = o[i >> 2], o[c + 4 >> 2] = a, a = o[4 + (i = t + 8 | 0) >> 2], o[(c = r + 32 | 0) >> 2] = o[i >> 2], o[c + 4 >> 2] = a, i = o[t + 4 >> 2], o[r + 24 >> 2] = o[t >> 2], o[r + 28 >> 2] = i, h(r + 20 | 0, 1050044, r + 24 | 0)) break e;
                                          return t = o[s + 4 >> 2],
                                          o[e >> 2] = o[s >> 2],
                                          o[e + 4 >> 2] = t,
                                          o[e + 8 >> 2] = o[s + 8 >> 2],
                                          void(l = r + 48 | 0)
                                        }
                                        ge(),
                                        f()
                                      }
                                      de(i, 1),
                                      f()
                                    }
                                    E(1050248, 51, r + 24 | 0, 1050168), f()
                                  }(r + 112 | 0, r + 128 | 0), ie(r, r + 112 | 0), function (e, t, r) {
                                    var n, a, s;
                                    l = n = l - 16 | 0, i[e + 96 | 0] && (K(1049832, 32, 1049816), f()), a = e, s = function (e, t, r) {
                                        var n, i, a = 0;
                                        if (n = 1 + (a = (r >>> 29) + t | 0) | 0, i = a, !((0 | (r = (a = (r <<= 3) + e | 0) >>> 0 < r >>> 0 ? n : i)) == (0 | t) & a >>> 0 < e >>> 0 | r >>> 0 < t >>> 0)) return p = r, a;
                                        (function () {
                                          var e;
                                          l = e = l - 48 | 0, o[e + 12 >> 2] = 25, o[e + 8 >> 2] = 1049472, o[e + 36 >> 2] = 1, o[e + 20 >> 2] = 1, o[e + 24 >> 2] = 0, o[e + 16 >> 2] = 1050496, o[e + 44 >> 2] = 42, o[e + 32 >> 2] = e + 40, o[e + 40 >> 2] = e + 8, V(e + 16 | 0, 1050504), f()
                                        })(), f()
                                      }(o[e >> 2], o[e + 4 >> 2], r), o[a >> 2] = s, o[e + 4 >> 2] = p, o[n + 12 >> 2] = e + 8,
                                      function (e, t, r, n) {
                                        var i, a = 0,
                                          s = 0,
                                          c = 0;
                                        l = i = l + -64 | 0, o[i + 60 >> 2] = n;
                                        e: {
                                          if (n = o[e >> 2]) {
                                            if ((a = 64 - n | 0) >>> 0 > r >>> 0) {
                                              U(i + 32 | 0, e + 4 | 0, 64, n, r + n | 0), X(t, r, o[i + 32 >> 2], o[i + 36 >> 2]);
                                              break e
                                            }
                                            z(i + 48 | 0, t, r, a), n = o[i + 52 >> 2], s = o[i + 48 >> 2], U(i + 40 | 0, c = e + 4 | 0, 64, o[e >> 2], 64), X(s, n, o[i + 40 >> 2], o[i + 44 >> 2]), o[e >> 2] = 0, fe(i + 60 | 0, c, 64)
                                          }
                                          for (n = r - a | 0; !(n >>> 0 <= 63);) J(i + 8 | 0, s = a, a = a - -64 | 0, t, r),
                                          fe(i + 60 | 0, o[i + 8 >> 2], o[i + 12 >> 2]),
                                          n = n + -64 | 0;J(i + 24 | 0, a, r, t, r),
                                          t = o[i + 28 >> 2],
                                          r = o[i + 24 >> 2],
                                          U(i + 16 | 0, e + 4 | 0, 64, 0, n),
                                          X(r, t, o[i + 16 >> 2], o[i + 20 >> 2]),
                                          r = n
                                        }
                                        o[e >> 2] = o[e >> 2] + r, l = i - -64 | 0
                                      }(e + 28 | 0, t, r, n + 12 | 0), l = n + 16 | 0
                                  }(r + 8 | 0, o[r >> 2], o[r + 4 >> 2]), te(r + 112 | 0), t = o[r + 172 >> 2], o[t >> 2] = o[t >> 2] + -1, function (e, t) {
                                    var r, n, a = 0;
                                    l = r = l - 48 | 0,
                                      function (e, t) {
                                        var r;
                                        l = r = l - 16 | 0, o[r + 8 >> 2] = 0, o[r >> 2] = 1, o[r + 4 >> 2] = 0,
                                          function (e, t) {
                                            var r, n = 0;
                                            le(e, t), r = o[e >> 2], t && (q(r + (n = o[e + 8 >> 2]) | 0, t), o[e + 8 >> 2] = t + n)
                                          }(r, t), o[e + 8 >> 2] = o[r + 8 >> 2], t = o[r + 4 >> 2], o[e >> 2] = o[r >> 2], o[e + 4 >> 2] = t, l = r + 16 | 0
                                      }(r + 16 | 0, 20), ie(r + 8 | 0, r + 16 | 0), w(t, o[r + 8 >> 2], o[r + 12 >> 2]), o[(t = r + 40 | 0) >> 2] = o[r + 24 >> 2], a = o[r + 20 >> 2], o[r + 32 >> 2] = o[r + 16 >> 2], o[r + 36 >> 2] = a, a = o[r + 36 >> 2], n = o[t >> 2], t = o[r + 32 >> 2], o[r + 44 >> 2] = n + t, o[r + 40 >> 2] = t, o[r + 36 >> 2] = a, o[r + 32 >> 2] = t,
                                      function (e, t) {
                                        var r, n = 0,
                                          a = 0,
                                          s = 0;
                                        l = r = l + -64 | 0, a = o[4 + (n = t + 8 | 0) >> 2], s = r + 8 | 0, n = o[n >> 2], o[s >> 2] = n, o[s + 4 >> 2] = a, a = o[t + 4 >> 2], o[r >> 2] = o[t >> 2], o[r + 4 >> 2] = a;
                                        e: {
                                          t: {
                                            if (o[r + 12 >> 2] != (0 | n)) {
                                              if (o[r + 8 >> 2] = n + 1, function (e, t) {
                                                  var r;
                                                  l = r = l - 16 | 0, o[r + 12 >> 2] = o[1048724 + ((15 & t) << 2) >> 2], o[r + 8 >> 2] = o[1048724 + ((240 & t) >>> 2) >> 2], G(e, r + 8 | 0, r + 16 | 0), l = r + 16 | 0
                                                }(r + 16 | 0, i[0 | n]), o[r + 16 >> 2]) break t
                                            } else o[r + 16 >> 2] = 0;
                                            if (o[e + 8 >> 2] = 0, o[e >> 2] = 1, o[e + 4 >> 2] = 0, M(r), !o[r + 16 >> 2]) break e;te(r + 16 | 0);
                                            break e
                                          }
                                          o[(t = r + 40 | 0) >> 2] = o[r + 24 >> 2],
                                          n = o[r + 20 >> 2],
                                          o[r + 32 >> 2] = o[r + 16 >> 2],
                                          o[r + 36 >> 2] = n,
                                          a = o[4 + (n = r + 8 | 0) >> 2],
                                          o[(s = r + 56 | 0) >> 2] = o[n >> 2],
                                          o[s + 4 >> 2] = a,
                                          n = o[r + 4 >> 2],
                                          o[r + 48 >> 2] = o[r >> 2],
                                          o[r + 52 >> 2] = n,
                                          function (e, t) {
                                            var r, n, a, s = 0;
                                            l = r = l - 16 | 0, a = o[4 + (n = t + 8 | 0) >> 2], o[(s = r + 8 | 0) >> 2] = o[n >> 2], o[s + 4 >> 2] = a, s = o[t + 4 >> 2], o[r >> 2] = o[t >> 2], o[r + 4 >> 2] = s,
                                              function (e, t) {
                                                var r, n, a, s = 0;
                                                for (l = r = l + -64 | 0, a = o[4 + (s = e + 8 | 0) >> 2], o[(n = r + 24 | 0) >> 2] = o[s >> 2], o[n + 4 >> 2] = a, s = o[e + 4 >> 2], o[r + 16 >> 2] = o[e >> 2], o[r + 20 >> 2] = s, e = r + 56 | 0;
                                                  (0 | (s = o[r + 24 >> 2])) != o[r + 28 >> 2];) o[r + 24 >> 2] = s + 1, s = i[0 | s], o[r + 52 >> 2] = o[1049140 + ((15 & s) << 2) >> 2], o[r + 48 >> 2] = o[1049140 + (s >>> 2 & 60) >> 2], G(r + 32 | 0, r + 48 | 0, e), o[e >> 2] = o[r + 40 >> 2], s = o[r + 36 >> 2], o[r + 48 >> 2] = o[r + 32 >> 2], o[r + 52 >> 2] = s, ie(r + 8 | 0, r + 48 | 0), se(t, o[r + 8 >> 2], o[r + 12 >> 2]), te(r + 48 | 0);
                                                M(r + 16 | 0), l = r - -64 | 0
                                              }(r, e), l = r + 16 | 0
                                          }(r + 32 | 0, r + 48 | 0),
                                          o[e + 8 >> 2] = o[t >> 2],
                                          t = o[r + 36 >> 2],
                                          o[e >> 2] = o[r + 32 >> 2],
                                          o[e + 4 >> 2] = t
                                        }
                                        l = r - -64 | 0
                                      }(e, r + 32 | 0), l = r + 48 | 0
                                  }(e, r + 8 | 0)) : o[e >> 2] = 0, l = r + 176 | 0
                                }(r + 8 | 0, t), o[r + 8 >> 2] || (E(1048972, 57, r + 24 | 0, 1049072), f()), t = o[r + 12 >> 2], o[e >> 2] = o[r + 8 >> 2], o[e + 4 >> 2] = t, o[e + 8 >> 2] = o[r + 16 >> 2], l = r + 32 | 0
                            }(e, n + 8 | 0), l = n + 16 | 0
                        }(n + 32 | 0, t = o[n + 24 >> 2], r = o[n + 28 >> 2]), r && y(t), o[(t = n + 56 | 0) >> 2] = o[n + 40 >> 2], r = o[n + 36 >> 2], o[n + 48 >> 2] = o[n + 32 >> 2], o[n + 52 >> 2] = r, ie(n + 16 | 0, n + 48 | 0), o[n + 72 >> 2] = o[t >> 2], t = o[n + 52 >> 2], o[n + 64 >> 2] = o[n + 48 >> 2], o[n + 68 >> 2] = t, Z(n + 8 | 0, n - -64 | 0), t = o[n + 12 >> 2], o[e >> 2] = o[n + 8 >> 2], o[e + 4 >> 2] = t, l = n + 80 | 0
                    },
                    setSalt: function (e, t) {
                      var r;
                      l = r = l - 48 | 0, Q(r + 8 | 0, e |= 0, t |= 0), e = o[r + 12 >> 2], ne(r + 16 | 0, o[r + 8 >> 2], e, e), o[r + 40 >> 2] = o[r + 24 >> 2], e = o[r + 20 >> 2], o[r + 32 >> 2] = o[r + 16 >> 2], o[r + 36 >> 2] = e,
                        function (e) {
                          var t, r;
                          l = t = l - 16 | 0, o[t + 8 >> 2] = o[e + 8 >> 2], r = o[e + 4 >> 2], o[t >> 2] = o[e >> 2], o[t + 4 >> 2] = r,
                            function (e) {
                              var t, r;
                              l = t = l - 32 | 0, o[t + 16 >> 2] = o[e + 8 >> 2], r = o[e + 4 >> 2], o[t + 8 >> 2] = o[e >> 2], o[t + 12 >> 2] = r,
                                function (e) {
                                  var t, r, n = 0,
                                    i = 0;
                                  return l = r = l - 32 | 0, (t = 0 | Se[o[262284]]()) ? (o[(n = r + 16 | 0) >> 2] = o[e + 8 >> 2], i = o[e + 4 >> 2], o[r + 8 >> 2] = o[e >> 2], o[r + 12 >> 2] = i, o[t >> 2] && (E(1049029, 16, r + 24 | 0, 1049104), f()), o[t >> 2] = -1, te(t + 4 | 0), o[t + 12 >> 2] = o[n >> 2], e = o[r + 12 >> 2], o[t + 4 >> 2] = o[r + 8 >> 2], o[t + 8 >> 2] = e, o[t >> 2] = o[t >> 2] + 1, e = 0) : (te(e), e = 1), l = r + 32 | 0, e
                                }(t + 8 | 0) && (E(1048972, 57, t + 24 | 0, 1049072), f()), l = t + 32 | 0
                            }(t), l = t + 16 | 0
                        }(r + 32 | 0), l = r + 48 | 0
                    },
                    main: be,
                    __wbindgen_malloc: function (e) {
                      if (!((e |= 0) >>> 0 > 4294967292)) {
                        if (!e) return 4;
                        if (e = ce(e, (e >>> 0 < 4294967293) << 2)) return 0 | e
                      }
                      f()
                    },
                    __wbindgen_realloc: function (e, t, r) {
                      if (e |= 0, !((t |= 0) >>> 0 > 4294967292) && (e = oe(e, t, 4, r |= 0))) return 0 | e;
                      f()
                    },
                    __wbindgen_free: function (e, t) {
                      (t |= 0) && y(e |= 0)
                    },
                    __wbindgen_start: be
                  }
                }({
                  Math: Math,
                  Int8Array: Int8Array,
                  Uint8Array: Uint8Array,
                  Int16Array: Int16Array,
                  Uint16Array: Uint16Array,
                  Int32Array: Int32Array,
                  Uint32Array: Uint32Array,
                  Float32Array: Float32Array,
                  Float64Array: Float64Array,
                  NaN: NaN,
                  Infinity: 1 / 0
                }, {
                  abort: function () {
                    throw new Error("abort")
                  }
                }, u),
                p = l.memory,
                d = l.sha1,
                h = l.setSalt,
                g = l.main,
                y = l.__wbindgen_malloc,
                v = l.__wbindgen_realloc,
                b = l.__wbindgen_free,
                A = l.__wbindgen_start
            }, function (e, t, r) {
              function n() {}

              function o() {}
              r.r(t), n.prototype.encode = function (e) {
                for (var t = [], r = e.length, n = 0; n < r;) {
                  var o = e.codePointAt(n),
                    i = 0,
                    a = 0;
                  for (o <= 127 ? (i = 0, a = 0) : o <= 2047 ? (i = 6, a = 192) : o <= 65535 ? (i = 12, a = 224) : o <= 2097151 && (i = 18, a = 240), t.push(a | o >> i), i -= 6; i >= 0;) t.push(128 | o >> i & 63), i -= 6;
                  n += o >= 65536 ? 2 : 1
                }
                return t
              }, o.prototype.decode = function (e) {
                if (void 0 === e) return "";
                for (var t = "", r = 0; r < e.length;) {
                  var n = e[r],
                    o = 0,
                    i = 0;
                  if (n <= 127 ? (o = 0, i = 255 & n) : n <= 223 ? (o = 1, i = 31 & n) : n <= 239 ? (o = 2, i = 15 & n) : n <= 244 && (o = 3, i = 7 & n), e.length - r - o > 0)
                    for (var a = 0; a < o;) i = i << 6 | 63 & (n = e[r + a + 1]), a += 1;
                  else i = 65533, o = e.length - r;
                  t += String.fromCodePoint(i), r += o + 1
                }
                return t
              }, r.d(t, "sha1", (function () {
                return d
              })), r.d(t, "setSalt", (function () {
                return h
              })), r.d(t, "main", (function () {
                return g
              })), r.d(t, "memory", (function () {
                return v
              }));
              var i = 0,
                a = new n("utf-8"),
                s = "function" == typeof a.encodeInto ? function (e, t) {
                  return a.encodeInto(e, t)
                } : function (e, t) {
                  var r = a.encode(e);
                  return t.set(r), {
                    read: e.length,
                    written: r.length
                  }
                },
                c = null;

              function u() {
                return null !== c && c.buffer === y.memory.buffer || (c = new Uint8Array(y.memory.buffer)), c
              }

              function f(e) {
                for (var t = e.length, r = y.__wbindgen_malloc(t), n = u(), o = 0; o < t; o++) {
                  var a = e.charCodeAt(o);
                  if (a > 127) break;
                  n[r + o] = a
                }
                if (o !== t) {
                  0 !== o && (e = e.slice(o)), r = y.__wbindgen_realloc(r, t, t = o + 3 * e.length);
                  var c = u().subarray(r + o, r + t);
                  o += s(e, c).written
                }
                return i = o, r
              }
              var l = null,
                p = new o("utf-8", {
                  ignoreBOM: !0,
                  fatal: !0
                });

              function d(e) {
                y.sha1(8, f(e), i);
                var t, r, n = (null !== l && l.buffer === y.memory.buffer || (l = new Int32Array(y.memory.buffer)), l),
                  o = (t = n[2], r = n[3], p.decode(u().subarray(t, t + r))).slice();
                return y.__wbindgen_free(n[2], 1 * n[3]), o
              }

              function h(e) {
                y.setSalt(f(e), i)
              }

              function g() {
                y.main()
              }
              p.decode();
              var y = r(0),
                v = y.memory;
              y.__wbindgen_start()
            }])
          }();
        (() => {
          const e = (({
            bits: e,
            PRNG: t = k
          }) => {
            const r = S(e / 16);
            let n = "";
            for (let e = 0; e < r; ++e) n += "0123456789abcdef" [S(16 * t())];
            return n
          })({
            bits: 256
          });
          I.setSalt(e)
        })();
        const T = e => x.i[e];
        let E = 0;
        const O = (e, t) => {
            const r = p()({}, t);
            if (void 0 !== r.apiSignature) return r;
            if (void 0 === T(e)) return r;
            const n = w({
              apiName: e,
              args: r,
              argsList: x.i[e],
              seq: E
            });
            return r.apiSignature = I.sha1(n), r.apiSigningSeq = E, r.apiSignature, E += 1, r
          },
          C = 0,
          P = 1,
          j = 2,
          R = 3,
          M = {
            [P]: "sign error",
            [j]: "sign seq error",
            [R]: "sign missing"
          },
          B = new Set,
          D = Function.prototype.call,
          L = D.bind(Set.prototype.has),
          W = D.bind(Set.prototype.add);

        function N(e, t, r, n) {
          const o = `api sign failed: ${M[e]}; apiName: ${t}; args: ${JSON.stringify(r)}; signature: ${n}`;
          throw new Error(o)
        }
        const F = Object.create(null);

        function G() {
          return {
            invoke(e, t, r, n) {
              if (((e, t) => {
                  if (void 0 === T(e)) return C;
                  null !== t.apiSigningSeq && void 0 !== t.apiSigningSeq && null !== t.apiSignature && void 0 !== t.apiSignature || N(R, e, t, "not checked"), t.apiSigningSeq = parseInt(t.apiSigningSeq, 10), L(B, t.apiSigningSeq) && N(j, e, t, "not checked"), W(B, t.apiSigningSeq);
                  const r = w({
                      apiName: e,
                      args: t,
                      argsList: x.i[e],
                      seq: t.apiSigningSeq
                    }),
                    n = I.sha1(r);
                  n !== t.apiSignature && N(P, e, t, n)
                })(e, t), void 0 === t.pluginId) return WeixinJSBridge.invoke(e, t, r, n);
              if (o()) {
                const o = s(e, t);
                return WeixinJSBridge.invoke(e, o, r, n)
              }
              return function (e, t, r) {
                delete t.permissionBytes, void 0 === t.pluginId && r(t), f(t.pluginId, e, (e => {
                  t.permissionBytes = e, t.privateData = JSON.stringify({
                    pluginId: t.pluginId
                  }), r(t)
                }))
              }(t, (t => {
                WeixinJSBridge.invoke(e, t, r, n)
              }))
            },
            on: (e, t) => F[e] instanceof Array ? (F[e].push(t), null) : (F[e] = null, WeixinJSBridge.on(e, t)),
            publish: (e, t, r) => WeixinJSBridge.publish(e, t, r),
            subscribe: (e, t) => WeixinJSBridge.subscribe(e, t)
          }
        }
        let U = !1;
        const V = [],
          $ = function (e) {
            V.push(e), U || (this.bridge.on("onSubPackageReady", (e => {
              V.forEach((t => {
                "function" == typeof t && t(void 0, e)
              }))
            })), U = !0)
          };

        function J(e) {
          return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        }
        const Q = (e, {
          stringify: t = JSON.stringify,
          parse: r = JSON.parse,
          arrayBufferProto: n = ArrayBuffer.prototype
        } = {}) => {
          if (!e) return e;
          const o = typeof e;
          if ("function" === o) throw new Error("[Safeway] not allow to pass function.");
          if ("object" !== o) return e.valueOf();
          const i = Object.keys(e),
            a = {};
          for (let t = 0; t < i.length; t++) {
            const r = i[t],
              o = e[r];
            void 0 !== o && "ArrayBuffer" === J(o) && void 0 !== o.byteLength && (Object.setPrototypeOf(o, n), a[r] = o)
          }
          let s;
          try {
            s = r(t(e))
          } catch (e) {
            throw new Error(`[Safeway] data clone error ${e.toString()}`)
          }
          const c = Object.keys(a);
          for (let e = 0; e < c.length; e++) {
            const t = c[e];
            s[t] = a[t]
          }
          return s
        };

        function Y(e, t) {
          return function (...r) {
            const n = [];
            for (let t = 0; t < r.length; t++) n[t] = Q(r[t], {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            });
            t.apply(this, n)
          }
        }

        function Z(e, t, {
          cloneArgs: r = !0
        } = {}) {
          return function (...n) {
            const o = [];
            for (let t = 0; t < n.length; t++) "function" == typeof n[t] ? o[t] = new Y(e, n[t]) : o[t] = r ? Q(n[t], {
              parse: JSON.parse,
              stringify: JSON.stringify,
              arrayBufferProto: ArrayBuffer.prototype
            }) : n[t];
            const i = t.apply(this, o);
            return Q(i, {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            })
          }
        }

        function z(e, t, r, n = !0) {
          const o = Object.keys(e);
          for (let i = 0; i < o.length; i++) {
            const a = o[i],
              s = e[a];
            if ("function" != typeof s) throw new Error(`Export value of Safeway must be a function, key ${a} func ${typeof s}`);
            r && "undefined" != typeof __subContextEngine__ && __subContextEngine__.isIsolateContext() ? t[a] = new Z(r, s, {
              cloneArgs: n
            }) : t[a] = s
          }
        }

        function H(e) {
          const t = G(),
            r = {
              create: (e, t) => WeixinWorker.create(e, t),
              onWorkerMsg: e => WeixinWorker.onWorkerMsg(e),
              postMsgToWorker: (e, t, r) => WeixinWorker.postMsgToWorker(e, t, r),
              terminate: e => WeixinWorker.terminate(e)
            },
            n = {
              makeApiSign: O
            },
            o = {
              ifIs: c,
              ifIsNot: u
            };
          z(t, t, e, {
            cloneArgs: !1
          }), z(r, r, e), z(o, o, e), this.bridge = t, this.worker = r, this.apiSign = n, this.pluginPermissionBytes = o;
          z({
            onSubpackageReady: $
          }, this, e)
        }
        const q = class {
          constructor(e) {
            H.call(this, e)
          }
          static splitOnBridgeListener(e) {
            return function (e) {
              return null === F[e] ? (console.error("`splitOnBridgeListener` should be called before any listeners attached to it. Ignored."), null) : (F[e] = [], WeixinJSBridge.on(e, ((...t) => {
                const r = F[e];
                for (const e of r)
                  if (!1 === e(...t)) break
              })), t => {
                F[e].unshift(t)
              })
            }(e)
          }
        }
      },
      t = {
        n: e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return t.d(r, {
            a: r
          }), r
        },
        d: (e, r) => {
          for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      r = {};
    e(0, r, t), Safeway = r.default
  })();
  var __errorTracer__, Reporter, Timer, wx, __widgetEngine__, __safeway__ = new Safeway;
  (() => {
    "use strict";
    var e = {
        d: (t, r) => {
          for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }
      },
      t = {};
    e.r(t), e.d(t, {
      callSystemFunction: () => c,
      wrapSystemFunction: () => u,
      callMiniProgramOrPluginFunction: () => f,
      callThirdPartyFunction: () => l,
      wrapMiniProgramOrPluginFunction: () => p,
      wrapThirdPartyFunction: () => d,
      surroundThirdByTryCatch: () => h
    });
    const r = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
      n = [];

    function o(e) {
      if (!e || e.__wxOriginalStack__) return !1;
      const t = e.stack;
      if (void 0 === t) return !1;
      let r = t,
        o = n.length - 1,
        a = 0;
      for (; a >= 0 && o >= 0;) {
        let e = r.length,
          t = 0;
        for (const n in i) {
          if (!i[n]) continue;
          const o = r.indexOf(i[n], a);
          o < 0 || e <= o || (e = o, t = i[n].length)
        }
        if (e >= r.length) break;
        const s = `at <${n[o--].description}>`;
        r = r.slice(0, e) + s + r.slice(e + t), a = e + s.length
      }
      return Object.defineProperties(e, {
        __wxOriginalStack__: {
          value: t,
          writable: !0,
          configurable: !0
        },
        stack: {
          value: r,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }
      }), !0
    }
    const i = {
      wrapSystemFunction: null,
      wrapMiniProgramOrPluginFunction: null
    };

    function a(e) {
      const t = ((new Error).stack || "").match(/.+/gm);
      let n = "",
        o = 0;
      t && t.forEach((e => {
        if (r.test(e) && (o += 1, 2 === o)) {
          const t = e.match(/^(\s*)at /),
            r = t ? t[1].length : 0;
          return n = e.slice(r), !1
        }
        return !0
      })), i[e] = n
    }

    function s() {
      let e = "";
      for (let t = n.length - 1; t >= 0; t--) n[t].pluginAppId && (e = n[t].pluginAppId);
      return e
    }

    function c(e, t, r, c, f, l = !1) {
      let p;
      null === i.wrapSystemFunction && (i.wrapSystemFunction = "", u("", "", a)("wrapSystemFunction")), n.push({
        description: t
      });
      try {
        p = r.apply(c, f)
      } catch (t) {
        if (o(t)) {
          if ("AppServiceSdkKnownError" === t.type) throw n.pop(), t;
          if ("ThirdScriptError" === t.type) {
            const e = s();
            Reporter.thirdErrorReport({
              error: t,
              source: e,
              triggerErrorCallback: !l
            })
          } else Reporter.errorReport({
            key: e,
            error: t,
            triggerErrorCallback: !l
          })
        }
        if (l) throw n.pop(), t
      }
      return n.pop(), p
    }

    function u(e, t, r, n = !1) {
      return function (...o) {
        return c(e, t, r, this, o, n)
      }
    }

    function f(e, t, r, s, c, u = !1) {
      let f;
      null === i.wrapMiniProgramOrPluginFunction && (i.wrapMiniProgramOrPluginFunction = "", p("", "", a)("wrapMiniProgramOrPluginFunction")), n.push({
        description: t,
        pluginAppId: e
      });
      try {
        f = r.apply(s, c)
      } catch (t) {
        if (o(t) && Reporter.thirdErrorReport({
            error: t,
            source: e || "",
            triggerErrorCallback: !u
          }), u) throw n.pop(), t
      }
      return n.pop(), f
    }

    function l(e, t, r, n, o = !1) {
      return f(s(), e, t, r, n, o)
    }

    function p(e, t, r, n = !1) {
      return function (...o) {
        return f(e, t, r, this, o, n)
      }
    }

    function d(e, t, r = !1) {
      return function (...n) {
        return f(s(), e, t, this, n, r)
      }
    }

    function h(e, t) {
      const r = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
        n = r ? r[1] : "",
        o = e || function () {};
      return function (...e) {
        return f(s(), n, o, o, e, !1)
      }
    }
    __errorTracer__ = t
  })(), (() => {
    "use strict";
    var e = {
      d: (t, r) => {
        for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: r[n]
        })
      }
    };
    e.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    (() => {
      e.d(t, {
        default: () => J
      });
      const r = {
          APP: 0,
          WIDGET: 1,
          GAME: 2,
          GAME_SUBCONTEXT: 3
        },
        n = {
          login: 1,
          login_cancel: 2,
          login_fail: 3,
          request_fail: 4,
          connectSocket_fail: 5,
          closeSocket_fail: 6,
          sendSocketMessage_fail: 7,
          uploadFile_fail: 8,
          downloadFile_fail: 9,
          redirectTo_fail: 10,
          navigateTo_fail: 11,
          navigateBack_fail: 12,
          appServiceSDKScriptError: 13,
          webviewSDKScriptError: 14,
          jsEnginScriptError: 15,
          thirdScriptError: 16,
          webviewScriptError: 17,
          exparserScriptError: 18,
          widgetEnginScriptError: 113,
          widgetThirdScriptError: 114,
          gameSDKScriptError: 135,
          gameSubContextSDKScriptError: 136,
          gameThirdScriptError: 137,
          gameSubContextThirdScriptError: 138,
          startRecord: 19,
          startRecord_fail: 20,
          getLocation: 21,
          getLocation_fail: 22,
          chooseLocation: 23,
          chooseLocation_fail: 24,
          openAddress: 25,
          openAddress_fail: 26,
          openLocation: 27,
          openLocation_fail: 28,
          makePhoneCall: 29,
          makePhoneCall_fail: 30,
          operateWXData: 31,
          operateWXData_fail: 32,
          checkLogin: 33,
          checkLogin_fail: 34,
          refreshSession: 35,
          refreshSession_fail: 36,
          chooseVideo: 37,
          chooseVideo_fail: 38,
          chooseImage: 39,
          chooseImage_fail: 40,
          verifyPaymentPassword: 41,
          verifyPaymentPassword_fail: 42,
          requestPayment: 43,
          requestPayment_fail: 44,
          bindPaymentCard: 45,
          bindPaymentCard_fail: 46,
          requestPaymentToBank: 47,
          requestPaymentToBank_fail: 48,
          openDocument: 49,
          openDocument_fail: 50,
          chooseContact: 51,
          chooseContact_fail: 52,
          operateMusicPlayer: 53,
          operateMusicPlayer_fail: 54,
          getMusicPlayerState_fail: 55,
          playVoice_fail: 56,
          setNavigationBarTitle_fail: 57,
          switchTab_fail: 58,
          getImageInfo_fail: 59,
          enableCompass_fail: 60,
          enableAccelerometer_fail: 61,
          getStorage_fail: 62,
          setStorage_fail: 63,
          clearStorage_fail: 64,
          removeStorage_fail: 65,
          getStorageInfo_fail: 66,
          getStorageSync_fail: 67,
          setStorageSync_fail: 68,
          addCard_fail: 69,
          openCard_fail: 70,
          openSetting_fail: 71,
          reLaunch_fail: 72,
          getClipboardData_fail: 73,
          setClipboardData_fail: 74,
          showShareMenu_fail: 75,
          hideShareMenu_fail: 76,
          showToast_fail: 77,
          hideToast_fail: 78,
          openBluetoothAdapter_fail: 79,
          closeBluetoothAdapter_fail: 80,
          getBluetoothAdapterState_fail: 81,
          startBluetoothDevicesDiscovery_fail: 82,
          stopBluetoothDevicesDiscovery_fail: 83,
          getBluetoothDevices_fail: 84,
          getConnectedBluetoothDevices_fail: 85,
          createBLEConnection_fail: 86,
          closeBLEConnection_fail: 87,
          getBLEDeviceServices_fail: 88,
          getBLEDeviceCharacteristics_fail: 89,
          notifyBLECharacteristicValueChanged_fail: 90,
          readBLECharacteristicValue_fail: 91,
          checkIsSupportFacialRecognition_fail: 92,
          startFacialRecognitionVerify_fail: 93,
          startFacialRecognitionVerifyAndUploadVideo_fail: 94,
          startBeaconDiscovery_fail: 95,
          stopBeaconDiscovery_fail: 96,
          getBeacons_fail: 97,
          getSetting_fail: 98,
          setScreenBrightness_fail: 99,
          getScreenBrightness_fail: 100,
          vibrateShort_fail: 101,
          vibrateLong_fail: 102,
          shareAppMessage: 103,
          shareAppMessage_fail: 104,
          shareAppMessage_cancel: 105,
          shareAppMessageDirectly: 106,
          shareAppMessageDirectly_fail: 107,
          shareAppMessageDirectly_cancel: 108,
          sendBizRedPacket_fail: 109,
          addPhoneContact_fail: 110,
          saveImageToPhotosAlbum_fail: 111,
          saveVideoToPhotosAlbum_fail: 112,
          setTopBarText_fail: 115,
          setNavigationBarRightButton_fail: 116,
          setEnableDebug_fail: 117,
          captureScreen_fail: 118,
          setKeepScreenOn_fail: 119,
          createRequestTask: 120,
          createRequestTask_fail: 121,
          createDownloadTask: 122,
          createDownloadTask_fail: 123,
          createUploadTask: 124,
          createUploadTask_fail: 125,
          checkIsSupportSoterAuthentication_fail: 126,
          startSoterAuthentication_fail: 127,
          navigateToMiniProgram_fail: 128,
          navigateBackMiniProgram_fail: 129,
          openDeliveryList_fail: 130,
          setNavigationBarColor_fail: 131,
          setStatusBarStyle_fail: 132,
          getFileInfo_fail: 133,
          global_objs_readonly: 134,
          writeBLECharacteristicValue_fail: 206,
          adData_error: 140,
          adExposureReport_fail: 141,
          adClickReport_fail: 142,
          adNavigateToMiniProgram_fail: 143,
          adOpenUrl_fail: 144,
          initGameIsolatedContext: 145,
          initGameIsolatedContext_fail: 146,
          initGameOpenDataContext: 147,
          initGameOpenDataContext_fail: 148,
          initAppIsolatedContext: 149,
          initAppIsolatedContext_fail: 150,
          adFollowReport_fail: 151,
          adAddContact_fail: 152,
          adDownloadAppInternal_fail: 153,
          adGetInstallState_fail: 154,
          adQueryDownloadTask_fail: 155,
          adAddDownloadTaskStraight_fail: 156,
          adPauseDownloadTask_fail: 157,
          adResumeDownloadTask_fail: 158,
          adInstallDownloadTask_fail: 159,
          pluginDisplayInPage: 160,
          functionalPageSuccess: 161,
          functionalPageFail: 162,
          functionalPageReject: 163,
          insertInputToWebLayer_fail: 166,
          insertVideoToWebLayer_fail: 167,
          insertInputToWebLayer_succ: 168,
          insertVideoToWebLayer_succ: 169,
          insertMapToWebLayer_fail: 171,
          insertMapToWebLayer_succ: 172,
          insertLiveToWebLayer_fail: 178,
          insertLiveToWebLayer_succ: 179,
          insertCanvas2dToWebLayer_fail: 180,
          insertCanvas2dToWebLayer_succ: 181,
          insertWebGLToWebLayer_fail: 187,
          insertWebGLToWebLayer_succ: 186,
          insertVideo2ToWebLayer_fail: 182,
          insertVideo2ToWebLayer_succ: 183,
          insertCameraToWebLayer_fail: 184,
          insertCameraToWebLayer_succ: 185,
          insertTextareaToWebLayer_fail: 189,
          insertTextareaToWebLayer_succ: 188,
          audioInstancesCountReach1024: 170,
          bindUDP: 173,
          sendUDPMessage: 174,
          receiveUDPMessage: 175,
          UDPError: 176,
          sendUDPMessageToInvalidAddress: 177,
          clientLibVersionNotMatch: 205,
          subContextLibVersionNotMatch: 207,
          oaAddContact_fail: 201,
          oaReportBehavior_fail: 202,
          oaGetContactData_fail: 203,
          demoEnterHomePage: 210,
          demoConfigRepeat: 211,
          getUserInteractiveStorage: 212,
          modifyFriendInteractiveStorage: 213,
          modifyFriendInteractiveStorageShowModal: 214,
          modifyFriendInteractiveStorageConfirm: 215,
          modifyFriendInteractiveStorageCancel: 216,
          disableLivePlayer: 220,
          disableLivePusher: 221,
          disableVideo: 222,
          asyncApiCost: 226,
          asyncApiCount: 227,
          requestSubscribeMessageWithNative: 230,
          requestSubscribeMessageWithNativeSuccess: 231,
          requestSubscribeMessageWithNativeFail: 232,
          tradeServiceGetPermissionBytesSuccess: 235,
          tradeServiceGetPermissionBytesFail: 236,
          tradeServiceCanUse: 237,
          tradeServiceCanNotUse: 238,
          tradeServiceTapCard: 239,
          midasLaunchFeatureFail: 240,
          createNormalWorker: 241,
          createWKWorker: 242,
          onWorkerWebViewTerminate: 244,
          loadGameIndependentSubPackageFail: 243,
          requestPaymentCheckTicketCount: 245,
          requestPaymentCheckTicketFail: 246,
          requestPaymentCheckTicketTimeout: 247,
          useLaunchExptInfo: 249,
          useOriginLaunchExptInfo: 250,
          useContactExptInfo: 251
        },
        o = {
          Speed: 13544,
          Error: 13582,
          Slow: 13968,
          Clipboard: 14367,
          NetworkAPI: 14480,
          Display: 15496,
          WebviewRecycle: 15352,
          WebviewRestore: 15353,
          PluginDisplay: 15364,
          functionalPageOperation: 15804,
          RecycledAPI: 15649,
          GameReportKV: 15677,
          RecycleView: 15864,
          GameADFunnelModel: 15859,
          CustomComponent: 15948,
          VideoAction: 16137,
          SameLayerRender: 16360,
          MediaCompStatus: 16435,
          NavigateToMiniProgramAlert: 16432,
          LaunchDetailSpeed: 16514,
          CloudReport: 16588,
          DeprecatedAPI: 16624,
          Share: 16717,
          APIUse: 17619,
          SetDataPerf: 17176,
          UserLog: 17809,
          GameInteractiveData: 17836,
          GameRecorder: 17833,
          UserLogFail: 17975,
          WeAppInvoke: 18042,
          RenderCache: 18052,
          RenderStages: 18321,
          ShareCardClick: 18352,
          PerfReport: 18748,
          GameServerInvite: 18768,
          NpmExtendedLib: 18874,
          FirstInteraction: 19136,
          GameComponent: 19283,
          GameWhatsNew: 19335,
          TradeService: 19286,
          LazyCodeLoading: 20030,
          MidasFriendPayment: 20285,
          Handoff: 20888,
          ShareToWeRun: 21272,
          WeAppOperateWXData: 21359,
          WXGameWASMLaunchClose: 21494,
          WXGameWASMLaunchException: 21493,
          WXGameWASMLaunchTime: 21492,
          ExptHit: 21627,
          WeAppInvoke2: 21688,
          GameLifeMiniGameCardAction: 21898,
          ShareImageMenu: 22050,
          WeAppToChannels: 22082,
          RequestPaymentCheckTicket: 22273,
          WeAppNavBan: 22762,
          GameAdsSkipCard: 20267,
          MiniGameOpenDataMonitor: 23536
        },
        i = {
          webview2AppService: 1,
          appService2Webview: 2,
          funcReady: 3,
          firstGetData: 4,
          firstRenderTime: 5,
          reRenderTime: 6,
          forceUpdateRenderTime: 7,
          appRoute2newPage: 8,
          newPage2pageReady: 9,
          thirdScriptRunTime: 10,
          pageframe: 11,
          WAWebview: 12,
          WAWidget: 13,
          widgetCanvasReady: 14,
          widgetFirstDataPush: 15
        },
        a = {
          apiCallback: 1,
          pageInvoke: 2,
          widgetInvoke: 3
        },
        s = {
          appServiceSDKScriptError: 1,
          webviewSDKScriptError: 2,
          jsEnginScriptError: 3,
          thirdScriptError: 4,
          webviewScriptError: 5,
          exparserScriptError: 6,
          widgetEnginScriptError: 7,
          widgetThirdScriptError: 8,
          gameSDKScriptError: 10,
          gameSubContextSDKScriptError: 12,
          gameThirdScriptError: 13,
          gameSubContextThirdScriptError: 14
        },
        c = {
          [r.APP]: "thirdScriptError",
          [r.WIDGET]: "widgetThirdScriptError",
          [r.GAME]: "gameThirdScriptError",
          [r.GAME_SUBCONTEXT]: "gameSubContextThirdScriptError"
        },
        u = __wxConfig,
        f = (u.platform, "devtools" === u.platform),
        l = (u.platform, "ios" === u.platform);
      u.platform, u.platform, u.platform;
      const p = u.host || {},
        d = (p.env, p.env, p.env, p.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5, Object.prototype.toString);

      function h(e) {
        return d.call(e).slice(8, -1)
      }
      const g = e => "Number" === h(e);
      Number.isNaN, Number.isFinite, Array.isArray;
      let y = [],
        v = [],
        b = [],
        A = 0,
        m = 0,
        _ = 0,
        w = 0,
        x = 0;
      const S = {},
        k = {},
        I = {};

      function T(e) {
        void 0 !== WeixinJSBridge ? e() : "undefined" != typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
      }

      function E(...e) {
        T((() => {
          WeixinJSBridge.invoke(...e)
        }))
      }

      function O() {
        !y || y.length <= 0 || (E("reportKeyValue", {
          dataArray: y.slice(0, 500)
        }), y = y.slice(500))
      }

      function C() {
        !v || v.length <= 0 || (E("reportIDKey", {
          dataArray: v.slice(0, 500)
        }), v = v.slice(500))
      }

      function P() {
        !b || b.length <= 0 || (E("systemLog", {
          dataArray: b
        }), b = [])
      }
      let j = () => {},
        R = () => {},
        M = () => {},
        B = () => {},
        D = "",
        L = {},
        W = -1,
        N = 0,
        F = r.APP,
        G = "";
      "function" == typeof u.onReady && u.onReady((() => {
        void 0 !== u.appType && (W = u.appType), "object" == typeof u.appLaunchInfo && (N = u.appLaunchInfo.scene), setTimeout((() => {
          WeixinJSBridge.invoke("getNetworkType", {}, (e => {
            e && e.networkType && (G = e.networkType)
          }))
        }), 0), "function" == typeof WeixinJSBridge.addEventListener && WeixinJSBridge.addEventListener("onNetworkStatusChange", (e => {
          G = e.networkType
        }))
      }));
      const U = {
          surroundThirdByTryCatch: __errorTracer__.surroundThirdByTryCatch,
          slowReport: ({
            key: e,
            cost: t,
            extend: r,
            force: n
          }) => {
            const o = a[e],
              i = Date.now();
            if (!o) return;
            if (!n && i - x < 500) return;
            if (Object.keys(I).length > 50) return;
            if (I[r] || (I[r] = 0), I[r]++, I[r] > 3) return;
            x = i;
            const s = `${t},${encodeURIComponent(r)},${o},${U.getAppType()}`;
            U.reportKeyValue({
              key: "Slow",
              value: s
            })
          },
          speedReport: ({
            key: e,
            data: t,
            timeMark: r,
            force: n
          }) => {
            const o = i[e],
              a = Date.now();
            let s = 0;
            const c = r.nativeTime;
            if (!o) return;
            if (!n && a - (S[o] || 0) < 500) return;
            if (!r.startTime || !r.endTime) return;
            if ((1 === o || 2 === o) && !c) return;
            t && (s = JSON.stringify(t).length), S[o] = a;
            const u = `${o},${r.startTime},${c},${c},${r.endTime},${s},${U.getAppType()}`;
            U.reportKeyValue({
              key: "Speed",
              value: u
            })
          },
          reportQualityData(e, t, r, n = []) {
            E("reportKeyValue", {
              version: 2,
              dataArray: [{
                key: o[e],
                value: [r - t, N, t, r, ...n].join(",")
              }]
            })
          },
          reportKeyValue: ({
            key: e,
            value: t,
            immediately: r = !1,
            number: n = !1
          }) => {
            if (n || o[e]) {
              for (r ? y.unshift({
                  key: n ? e : o[e],
                  value: t
                }) : y.push({
                  key: n ? e : o[e],
                  value: t
                }); y.length > 5e3;) y.pop();
              (Date.now() - A > 5e3 || r) && (A = Date.now(), O())
            }
          },
          reportIDKey: ({
            id: e,
            key: t,
            value: r = 1
          }) => {
            if (n[t]) {
              for (v.push({
                  id: e || (l ? "356" : "358"),
                  key: n[t],
                  value: r
                }); v.length > 5e3;) v.pop();
              Date.now() - m > 5e3 && (m = Date.now(), C())
            }
          },
          reportIDKeyDirectly: ({
            id: e,
            key: t,
            immediately: r = !1
          }) => {
            if (t && "356" !== e && "358" !== e) {
              for (v.push({
                  id: e,
                  key: t,
                  value: 1
                }); v.length > 5e3;) v.pop();
              (Date.now() - m > 5e3 || r) && (m = Date.now(), C())
            }
          },
          thirdErrorReport: ({
            key: e = F,
            error: t,
            triggerErrorCallback: r = !0,
            isUnhandledRejection: n = !1,
            promise: o,
            source: i = ""
          }) => {
            U.errorReport({
              key: c[e],
              error: t,
              triggerErrorCallback: r,
              isThirdScriptError: !0,
              isUnhandledRejection: n,
              promise: o,
              source: i
            })
          },
          errorReport: ({
            key: e,
            error: t,
            isThirdScriptError: n = !1,
            triggerErrorCallback: o = !0,
            isUnhandledRejection: i = !1,
            promise: a,
            source: c = ""
          }) => {
            if (!s[e]) return;
            if (null == t) return;
            let l, p;
            "function" == typeof __wxSourceMapRetrace__ && (t = __wxSourceMapRetrace__(t)), "object" == typeof t && (t.message || t.stack) ? (l = t.message, p = t.stack) : (l = function (e) {
              try {
                return JSON.stringify(e)
              } catch (e) {
                return e.message, ""
              }
            }(t), p = h(t));
            const d = n ? "MiniProgramError" : `SystemError (${e})`,
              g = l;
            let y = "";
            t.name && 0 !== p.indexOf(t.name) && (y = "\n" + t.name + ": " + g);
            const v = `${d}\n${g}${y}\n${p}`;
            if (f) {
              const e = new Error(`${d}\n${g}`);
              "object" == typeof t && void 0 !== t.name && Object.defineProperty(e, "name", {
                value: t.name
              }), "object" == typeof t && void 0 !== t.stack && Object.defineProperty(e, "stack", {
                value: t.stack
              }), console.error(e)
            } else i ? console.error("(in promise) " + v) : console.error(v);
            if (v.indexOf("subContext.js") >= 0) return;
            if ("undefined" != typeof window && void 0 !== window.__webviewId__ ? function (...e) {
                T((() => {
                  WeixinJSBridge.publish(...e)
                }))
              }("WEBVIEW_ERROR_MSG", {
                data: {
                  msg: v
                },
                options: {
                  timestamp: Date.now()
                }
              }) : o && (U.triggerErrorMessage(v, i, t, a), n && U.triggerThirdErrorMessage(v, i, t, a)), Object.keys(k).length > 50) return;
            if (i && "Error" !== h(t)) return;
            let b = "",
              A = "";
            F !== r.APP && F !== r.GAME || (b = D, A = function (e) {
              let t = "";
              return Object.keys(e).forEach(((r, n) => {
                0 !== n && (t += "&");
                try {
                  t += `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`
                } catch (e) {}
              })), t
            }(L));
            const m = c.match(/wx[0-9a-f]{16}/) ? function (e) {
              const t = u && u.appContactInfo && u.appContactInfo.call_plugin_info;
              if (!t || !Array.isArray(t)) return 0;
              const r = t.find((t => t.plugin_id === e));
              return r && void 0 !== r.inner_version ? r.inner_version : 0
            }(c) : 0;
            if (4 === u.appType) try {
              G = __appServiceSDK__.getGameRelatedContextsExports().game._getCurrentNetworkType()
            } catch (e) {}
            const _ = [s[e], t.name, ...[g, p, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.version || "", U.getAppType(), b, A, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.updateTime || "", "", i ? 1 : 0, c, m, G].map((e => {
              let t;
              try {
                t = encodeURIComponent(e)
              } catch (r) {
                t = e
              }
              return t
            }))].join(",");
            k[_] || (k[_] = 0), k[_]++, n && k[_] > 3 || k[_] > 3 || (U.reportIDKey({
              key: e
            }), U.reportKeyValue({
              key: "Error",
              value: _
            }), C(), O(), P())
          },
          log: (e, t) => {
            e && "string" == typeof e && (!t && Date.now() - _ < 50 || (_ = Date.now(), b.push(e + ""), b.length >= 50 && P()))
          },
          submit: () => {
            Date.now() - w < 50 || (w = Date.now(), C(), O(), P())
          },
          registerErrorListener: e => {
            "function" == typeof e && (j = e)
          },
          registerThirdErrorListener: e => {
            "function" == typeof e && (R = e)
          },
          registerUnhandledRejectionListener: e => {
            "function" == typeof e && (M = e)
          },
          registerThirdUnhandledRejectionListener: e => {
            "function" == typeof e && (B = e)
          },
          triggerErrorMessage: (e, t = !1, r, n) => {
            setTimeout((() => {
              try {
                t ? M(r, n) : j(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          triggerThirdErrorMessage: (e, t = !1, r, n) => {
            setTimeout((() => {
              try {
                t ? B(r, n) : R(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          setAsWidget: () => {
            F = r.WIDGET
          },
          setAsGame: () => {
            F = r.GAME
          },
          setAsGameSubContext: () => {
            F = r.GAME_SUBCONTEXT
          },
          getAppType: () => -1 === W ? 0 : W + 1e3
        },
        V = {};

      function $(e) {
        Object.defineProperty(V, e, {
          get() {
            return t = U[e],
              function (...e) {
                try {
                  return t.apply(t, e)
                } catch (e) {
                  return void console.error("reporter error:" + e.message, e.stack)
                }
              };
            var t
          },
          configurable: !0,
          enumerable: !0
        })
      }
      Object.keys(U).forEach((e => {
        $(e)
      })), Object.defineProperty(V, "__route__", {
        set(e) {
          D = e
        }
      }), Object.defineProperty(V, "__method__", {
        set() {}
      }), Object.defineProperty(V, "__query__", {
        set(e) {
          L = e
        }
      }), V.RunType = r, "undefined" != typeof window && Object.defineProperty(window, "onbeforeunload", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value() {
          U.submit()
        }
      });
      const J = V
    })(), Reporter = t.default
  })(), (() => {
    "use strict";
    var e = {
        d: (t, r) => {
          for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {};
    e.d(t, {
      default: () => h
    });
    Error;
    const r = -9007199254740991;
    let n = setTimeout,
      o = clearTimeout,
      i = setInterval,
      a = clearInterval,
      s = [],
      c = [],
      u = 0,
      f = 0,
      l = !1,
      p = !0;
    const d = {
      setTimeout: (e, t) => {
        if (!p || "function" != typeof e) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof e}.`);
        let o;
        return l ? (u = (u - 1) % r, o = u, s.push({
          fakeId: o,
          func: e,
          timeout: t,
          pending: !0
        })) : o = n(e, t), o
      },
      setInterval: (e, t) => {
        if (!p || "function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
        const n = (f = (f - 1) % r, f),
          o = {
            fakeId: n,
            func: e,
            timeout: t,
            pending: !1
          };
        return l ? o.pending = !0 : o.realId = i(e, t), c.push(o), n
      },
      clearTimeout: e => {
        if (!p || void 0 === e) return;
        const t = s.find((t => t.fakeId === e));
        t && t.pending ? s = s.filter((t => t.fakeId !== e)) : o(e)
      },
      clearInterval: e => {
        if (!p || void 0 === e) return;
        const t = c.find((t => t.fakeId === e));
        t && !t.pending && t.realId && a(t.realId), c = c.filter((t => t.fakeId !== e))
      },
      pause: () => {
        p && void 0 !== n && (l = !0, c.forEach((e => {
          e.pending || a(e.realId)
        })))
      },
      resume: () => {
        p && void 0 !== n && (l = !1, c.forEach((e => {
          e.realId = i(e.func, e.timeout), e.pending = !1
        })), s.forEach((e => {
          e.realId = n(e.func, e.timeout), e.pending = !1
        })), s = [])
      },
      setEnabled: e => {
        p = e
      },
      setOriginalMethod: e => {
        n = e.setTimeout || n, i = e.setInterval || i, o = e.clearTimeout || o, a = e.clearInterval || a
      },
      reset: () => {
        s = [], c = [], u = 0, f = 0, l = !1, p = !0
      }
    };
    delete d.setOriginalMethod, delete d.reset, Object.keys(d).forEach((function (e) {
      const t = d[e];
      Object.defineProperty(d, e, {
        get() {
          return r = t, n = `at Timer ${e} Function.`,
            function (...e) {
              try {
                return r(...e)
              } catch (e) {
                if ("[object Error]" === Object.prototype.toString.apply(e)) {
                  if ("WidgetSdkKnownError" === e.type) throw e;
                  Reporter.errorReport({
                    key: "widgetSDKScriptError",
                    error: e,
                    extend: n
                  })
                }
              }
            };
          var r, n
        },
        enumerable: !0,
        configurable: !0
      })
    }));
    const h = d;
    h = t.default
  })(), (() => {
    "use strict";
    var e = {
      d: (t, r) => {
        for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: r[n]
        })
      }
    };
    e.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    (() => {
      e.d(t, {
        default: () => zt
      });
      const r = __wxConfig,
        n = r.platform,
        o = "devtools" === r.platform,
        i = "android" === r.platform,
        a = "ios" === r.platform,
        s = "windows" === r.platform,
        c = "mac" === r.platform,
        u = "mina" === r.platform,
        f = s || c;
      const l = r.host || {},
        p = (l.env, l.env, l.env, l.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5);

      function d(e, t, r) {
        ! function (e, t, r) {
          __safeway__.bridge.publish(e, t, r)
        }(e, {
          data: t,
          options: {
            timestamp: Date.now()
          }
        }, r)
      }

      function h(e, t) {
        ! function (e, t) {
          __safeway__.bridge.subscribe(e, t)
        }(e, (({
          data: e,
          options: r
        }, n, o = {}) => {
          const i = r && r.timestamp || 0,
            a = Date.now();
          Reporter.speedReport({
            key: "webview2AppService",
            data: e || {},
            timeMark: {
              startTime: i,
              endTime: a,
              nativeTime: o.nativeTime || 0
            }
          }), "function" == typeof t && t(e, n)
        }))
      }
      BabelRuntimeHelpers.objectWithoutProperties, BabelRuntimeHelpers.objectSpread2;
      const g = Object.prototype.toString;

      function y(e) {
        return g.call(e).slice(8, -1)
      }
      const v = e => "String" === y(e),
        b = e => "Number" === y(e),
        A = (Number.isNaN, Number.isFinite, e => "Object" === y(e));
      Array.isArray;

      function m(e, t, r = "parameter") {
        const n = y(t),
          o = y(e);
        if (o !== n) return `${r} should be ${n} instead of ${o};`;
        let i = "";
        switch (n) {
          case "Object":
            Object.keys(t).forEach((n => {
              i += m(e[n], t[n], `${r}.${n}`)
            }));
            break;
          case "Array":
            if (e.length < t.length) return `${r} should have at least ${t.length} item;`;
            for (let n = 0; n < t.length; ++n) i += m(e[n], t[n], `${r}[${n}]`)
        }
        return i
      }

      function _(e, t) {
        return function (...r) {
          try {
            return e(...r)
          } catch (e) {
            if ("[object Error]" === Object.prototype.toString.apply(e)) {
              if ("AppServiceSdkKnownError" === e.type) throw e;
              "ThirdScriptError" === e.type ? Reporter.thirdErrorReport({
                error: e,
                extend: t
              }) : Reporter.errorReport({
                key: "appServiceSDKScriptError",
                error: e,
                extend: t
              })
            }
          }
        }
      }

      function w() {}
      _((function (e) {
        const t = y(e);
        if ("Array" === t || "Object" === t) try {
          e = JSON.stringify(e)
        } catch (e) {
          throw e.type = "AppServiceSdkKnownError", e
        } else e = "String" === t || "Number" === t || "Boolean" === t ? e.toString() : "Date" === t ? e.getTime().toString() : "Undefined" === t ? "undefined" : "Null" === t ? "null" : "";
        return {
          data: e,
          dataType: t
        }
      }), "anyTypeToString");
      _((function (e, t) {
        return "String" === t ? e : e = "Array" === t || "Object" === t ? JSON.parse(e) : "Number" === t ? parseFloat(e) : "Boolean" === t ? "true" === e : "Date" === t ? new Date(parseInt(e, 10)) : "Undefined" === t ? void 0 : "Null" === t ? null : ""
      }), "stringToAnyType");
      Symbol("ErrorInfosSymbol");
      Error;

      function x(e, t) {
        ! function (e, t) {
          __safeway__.bridge.on(e, t)
        }(e, _(t, `at api ${e} callback function`))
      }
      var S = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };

      function k() {
        this._events = {}, this._conf && I.call(this, this._conf)
      }

      function I(e) {
        e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : 20, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = 20
      }

      function T(e, t) {
        console.warn(`[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`)
      }

      function E(e) {
        this._events = {}, this._newListener = !1, this._removeListener = !1, I.call(this, e)
      }
      E.prototype.delimiter = ".", E.prototype.setMaxListeners = function (e) {
        void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e)
      }, E.prototype.event = "", E.prototype.once = function (e, t) {
        return this._once(e, t, !1)
      }, E.prototype.prependOnceListener = function (e, t) {
        return this._once(e, t, !0)
      }, E.prototype._once = function (e, t, r) {
        return this._many(e, 1, t, r), this
      }, E.prototype.many = function (e, t, r) {
        return this._many(e, t, r, !1)
      }, E.prototype.prependMany = function (e, t, r) {
        return this._many(e, t, r, !0)
      }, E.prototype._many = function (e, t, r, n) {
        var o = this;
        if ("function" != typeof r) throw new Error("many only accepts instances of Function");

        function i() {
          return 0 == --t && o.off(e, i), r.apply(this, arguments)
        }
        return i._origin = r, this._on(e, i, n), o
      }, E.prototype.emit = function () {
        this._events || k.call(this);
        var e = arguments[0];
        if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
        var t, r, n, o, i, a = arguments.length;
        if (this._all && this._all.length) {
          if (i = this._all.slice(), a > 3)
            for (t = new Array(a), o = 0; o < a; o++) t[o] = arguments[o];
          for (n = 0, r = i.length; n < r; n++) switch (this.event = e, a) {
            case 1:
              i[n].call(this, e);
              break;
            case 2:
              i[n].call(this, e, arguments[1]);
              break;
            case 3:
              i[n].call(this, e, arguments[1], arguments[2]);
              break;
            default:
              i[n].apply(this, t)
          }
        }
        if ("function" == typeof (i = this._events[e])) {
          switch (this.event = e, a) {
            case 1:
              i.call(this);
              break;
            case 2:
              i.call(this, arguments[1]);
              break;
            case 3:
              i.call(this, arguments[1], arguments[2]);
              break;
            default:
              for (t = new Array(a - 1), o = 1; o < a; o++) t[o - 1] = arguments[o];
              i.apply(this, t)
          }
          return !0
        }
        if (i && (i = i.slice()), i && i.length) {
          if (a > 3)
            for (t = new Array(a - 1), o = 1; o < a; o++) t[o - 1] = arguments[o];
          for (n = 0, r = i.length; n < r; n++) switch (this.event = e, a) {
            case 1:
              i[n].call(this);
              break;
            case 2:
              i[n].call(this, arguments[1]);
              break;
            case 3:
              i[n].call(this, arguments[1], arguments[2]);
              break;
            default:
              i[n].apply(this, t)
          }
          return !0
        }
        if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
        return !!this._all
      }, E.prototype.emitAsync = function () {
        this._events || k.call(this);
        var e = arguments[0];
        if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
        var t, r, n, o, i, a = [],
          s = arguments.length;
        if (this._all) {
          if (s > 3)
            for (t = new Array(s), o = 1; o < s; o++) t[o] = arguments[o];
          for (n = 0, r = this._all.length; n < r; n++) switch (this.event = e, s) {
            case 1:
              a.push(this._all[n].call(this, e));
              break;
            case 2:
              a.push(this._all[n].call(this, e, arguments[1]));
              break;
            case 3:
              a.push(this._all[n].call(this, e, arguments[1], arguments[2]));
              break;
            default:
              a.push(this._all[n].apply(this, t))
          }
        }
        if ("function" == typeof (i = this._events[e])) switch (this.event = e, s) {
          case 1:
            a.push(i.call(this));
            break;
          case 2:
            a.push(i.call(this, arguments[1]));
            break;
          case 3:
            a.push(i.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (t = new Array(s - 1), o = 1; o < s; o++) t[o - 1] = arguments[o];
            a.push(i.apply(this, t))
        } else if (i && i.length) {
          if (i = i.slice(), s > 3)
            for (t = new Array(s - 1), o = 1; o < s; o++) t[o - 1] = arguments[o];
          for (n = 0, r = i.length; n < r; n++) switch (this.event = e, s) {
            case 1:
              a.push(i[n].call(this));
              break;
            case 2:
              a.push(i[n].call(this, arguments[1]));
              break;
            case 3:
              a.push(i[n].call(this, arguments[1], arguments[2]));
              break;
            default:
              a.push(i[n].apply(this, t))
          }
        } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
        return Promise.all(a)
      }, E.prototype.on = function (e, t) {
        return this._on(e, t, !1)
      }, E.prototype.prependListener = function (e, t) {
        return this._on(e, t, !0)
      }, E.prototype.onAny = function (e) {
        return this._onAny(e, !1)
      }, E.prototype.prependAny = function (e) {
        return this._onAny(e, !0)
      }, E.prototype.addListener = E.prototype.on, E.prototype._onAny = function (e, t) {
        if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
        return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
      }, E.prototype._on = function (e, t, r) {
        if ("function" == typeof e) return this._onAny(e, t), this;
        if ("function" != typeof t) throw new Error("on only accepts instances of Function");
        return this._events || k.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), r ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, T.call(this, this._events[e].length, e))) : this._events[e] = t, this
      }, E.prototype.off = function (e, t) {
        if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
        var r, n = [];
        if (!this._events[e]) return this;
        r = this._events[e], n.push({
          _listeners: r
        });
        for (var o = 0; o < n.length; o++) {
          if (r = n[o]._listeners, S(r)) {
            for (var i = -1, a = 0, s = r.length; a < s; a++)
              if (r[a] === t || r[a].listener && r[a].listener === t || r[a]._origin && r[a]._origin === t) {
                i = a;
                break
              } if (i < 0) continue;
            return this._events[e].splice(i, 1), 0 === r.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
          }(r === t || r.listener && r.listener === t || r._origin && r._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
        }
        return function e(t) {
          if (void 0 !== t) {
            var r = Object.keys(t);
            for (var n in r) {
              var o = r[n],
                i = t[o];
              i instanceof Function || "object" != typeof i || null === i || (Object.keys(i).length > 0 && e(t[o]), 0 === Object.keys(i).length && delete t[o])
            }
          }
        }(this.listenerTree), this
      }, E.prototype.offAny = function (e) {
        var t, r = 0,
          n = 0;
        if (e && this._all && this._all.length > 0) {
          for (r = 0, n = (t = this._all).length; r < n; r++)
            if (e === t[r]) return t.splice(r, 1), this._removeListener && this.emit("removeListenerAny", e), this
        } else {
          if (t = this._all, this._removeListener)
            for (r = 0, n = t.length; r < n; r++) this.emit("removeListenerAny", t[r]);
          this._all = []
        }
        return this
      }, E.prototype.removeListener = E.prototype.off, E.prototype.removeAllListeners = function (e) {
        return void 0 === e ? (!this._events || k.call(this), this) : (this._events && (this._events[e] = null), this)
      }, E.prototype.listeners = function (e) {
        return this._events || k.call(this), this._events[e] || (this._events[e] = []), S(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
      }, E.prototype.eventNames = function () {
        return Object.keys(this._events)
      }, E.prototype.listenerCount = function (e) {
        return this.listeners(e).length
      }, E.prototype.listenersAny = function () {
        return this._all ? this._all : []
      };
      const O = E,
        C = new O({
          maxListeners: 20,
          newListener: !1
        }),
        P = new O({
          maxListeners: 20,
          newListener: !1
        });
      const j = {};

      function R(e) {
        if (e = e[0].toUpperCase() + e.slice(1), !j[e]) {
          let t = new WeakMap;
          j[e] = {
            getGlobalListeners: () => C.listeners(e),
            getInternalListeners: () => P.listeners(e),
            emit: (...t) => {
              P.emit(e, ...t), C.emit(e, ...t)
            },
            emitGlobal: (...t) => {
              C.emit(e, ...t)
            },
            emitInternal: (...t) => {
              P.emit(e, ...t)
            },
            internalOnMethod: (t, r = {}) => {
              "function" == typeof t && (r.prepend ? r.once ? P.prependOnceListener(e, t) : P.prependListener(e, t) : r.once ? P.once(e, t) : P.on(e, t))
            },
            internalOffMethod: t => {
              "function" == typeof t && P.off(e, t)
            },
            onMethod: r => {
              const n = function (e, t) {
                return "function" != typeof t ? (console.error(`on${e} should accept a function instead of ${typeof t}`), null) : __errorTracer__.surroundThirdByTryCatch(t, `at api on${e} callback function`)
              }(e, r);
              n && (t.set(r, n), C.on(e, n))
            },
            offMethod: r => {
              if (function (e, t) {
                  return !t || "function" == typeof t || (console.error(`off${e} should accept a function instead of ${typeof t}`), !1)
                }(e, r))
                if (r) {
                  if (t.has(r)) {
                    const n = t.get(r);
                    t.delete(r), C.off(e, n)
                  }
                } else t = new WeakMap, C.removeAllListeners(e)
            }
          }
        }
        return j[e]
      }
      const M = {},
        B = (e, t) => {
          const r = R(`WeixinJSBridge-${e}`);
          M[e] || (x(e, ((...e) => {
            r.emit(...e)
          })), M[e] = !0), r.internalOnMethod(t)
        };
      let D = "";
      const L = (e = {}) => {
        try {
          D = e.transitExtraData.adUxInfo
        } catch (e) {
          D = ""
        }
      };
      void 0 !== __safeway__ && (r.onReady((() => {
        L(r.appLaunchInfo)
      })), B("onAppEnterForeground", (e => {
        L(e)
      })), B("onAppEnterBackground", ((e = {}) => {
        "back" !== e.mode && "close" !== e.mode || (D = "")
      })), h("getAdUxInfo", ((e, t) => {
        d("adUxInfoGot", {
          adUxInfo: D,
          callbackId: e.callbackId
        }, [t])
      })));

      function W(e, t, r, n) {
        "navigateToMiniProgram" !== e && "openUrl" !== e && "private_openUrl" !== e || (t.adUxInfo = t.adUxInfo || D), __safeway__.bridge.invoke(e, t, r, n)
      }
      let N = {},
        F = {},
        G = {},
        U = 0;
      const V = (e, t) => Object.keys(t).map((r => Object.keys(t[r]).map((n => ({
          func: r,
          result: e,
          errMsg: n,
          count: t[r][n]
        }))))),
        $ = () => {
          const e = V(1, N),
            t = V(2, F),
            r = V(3, G),
            n = [].concat(e, t, r);
          0 !== n.length && he("reportRealtimeAction", {
            actionData: JSON.stringify({
              business: "mmbizwxajsapi",
              dataType: 1,
              dataArray: n,
              appType: Reporter.getAppType()
            })
          }), N = {}, F = {}, G = {}
        },
        J = {
          lastRoute: "",
          lastOpenType: "",
          query: {},
          runningStatus: "active",
          navigatorLock: !1,
          openUrlLock: !1,
          possessingBackgroundAudioPlayer: !1,
          webviewEventCallback: null,
          hanged: !1,
          appStatus: 0,
          navigationBarTitleMap: {},
          currentNetworkType: ""
        },
        Q = (e = !0, t, r = !1, n = !1) => (o = {}) => {
          if (!ve("operateWXData", o, {
              apiName: ""
            })) return;
          if ("operateWXData" === t) {}
          const a = {
            api_name: o.apiName,
            data: o.reqData || {},
            operate_directly: e
          };
          r && (a.plugin_appid = o.pluginId);
          const s = {
            data: a,
            isImportant: !0 === n,
            requestInQueue: !o.hasOwnProperty("requestInQueue") || Boolean(o.requestInQueue)
          };
          ! function (e = {}, t = {}, ...r) {
            const n = Object.assign({}, e);
            n._isFromBaseOperateWXData = !0;
            const o = t.beforeAll,
              i = t.beforeSuccess,
              a = t.beforeFail,
              s = n.data && n.data.api_name;
            ke.includes(s) ? n.requestInQueue = !0 : n.requestInQueue = !1;
            Ie.includes(s) ? n.isImportant = !0 : n.isImportant = !1;
            Te.includes(n.data && n.data.api_name) && (n.keepAlive = !0);
            const c = {
              isSuccess: void 0,
              WXDataApiName: s,
              argument: n,
              invokeTime: Date.now(),
              requestInQueue: n.requestInQueue,
              requestingCount: ++xe
            };
            Se.info(`${n.data.api_name} _options.requestInQueue`, n.requestInQueue), he("operateWXData", n, {
              beforeAll(e) {
                const r = Date.now();
                xe--, c.costTime = r - c.invokeTime;
                try {
                  if (e && e.data && e.data.data ? c.result = JSON.stringify(e.data) : c.result = e.data, e.clientInfo && "object" == typeof e.clientInfo) {
                    const t = e.clientInfo;
                    Object.keys(t).forEach((e => {
                      c[e] = t[e]
                    })), c.cost1 = t.wxdataQueueTimestamp - c.invokeTime, c.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp, c.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp, c.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp, c.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp, c.cost6 = r - t.wxlibCallbackTimestamp
                  }
                } catch (e) {
                  Se.error(e)
                }
                "function" == typeof o && o.call(t, e)
              },
              beforeSuccess(e) {
                c.isSuccess = !0, n.data.data && n.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof i && i.call(t, e), we(c)
              },
              beforeFail(e) {
                c.isSuccess = !1, c.errMsg = e.errMsg, n.data.data && n.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof a && a.call(t, e), we(c)
              }
            }, ...r)
          }(Object.assign({}, s, o), {
            beforeAll(e) {
              void 0 !== t && (e.errMsg = e.errMsg.replace("operateWXData", t))
            },
            beforeSuccess(e) {
              i && "string" == typeof e.data && (e.data = JSON.parse(e.data)), void 0 !== e.data.data && (e.rawData = e.data.data), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), e.respData = e.data, delete e.data
            }
          })
        },
        Y = (Q(!0), Q(!1)),
        Z = (Q(!0, void 0, !0), 0),
        z = 1,
        H = 2,
        q = 1,
        K = 2,
        X = 3,
        ee = 4,
        te = wxNativeConsole.createLogger("BanForPage");
      let re = !1,
        ne = new Set(["shareAppMessage", "shareAppMessageDirectly", "requestPayment", "setClipboardData", "getClipboardData", "getLocation", "getPhoneNumber", "navigateToMiniProgram", "navigateBackMiniProgram"]),
        oe = [];

      function ie(e, t, r) {
        te.log(`[checkAPIAvailableForPage] APIName=${e}, path=${t}, title=${r}`);
        const n = function (e, t, r) {
          let n = -1;
          for (let e = 0; e < oe.length; e++) {
            const o = oe[e];
            if ((!v(o.path_rule) || !o.path_rule || new RegExp(o.path_rule).test(t)) && (!v(o.title_rule) || !o.title_rule || new RegExp(o.title_rule).test(r))) {
              n = e;
              break
            }
          }
          return te.log(`[getBanRuleIndexForPage] banRuleIndex=${n}`), n
        }(0, t, r);
        if (-1 === n) return ae(e, q, ee, e), !0;
        const o = oe[n];
        return te.log("[checkAPIAvailableForPage], found rule:", o),
          function (e, t) {
            const r = e.ban_jsapi_list.find((e => e.jsapi_name === t));
            if (!r) return te.log("[checkAPIAvailableForPageByRule], no APIItem found"), !0;
            let n, o;
            if (te.log("[checkAPIAvailableForPageByRule], found APIItem:", r), r.state === Z) n = !1;
            else if (r.state === z) n = !0;
            else if (r.state === H && (n = !0, 1 === e.is_valid)) {
              const e = r.toast_wording || "该功能暂时无法使用";
              ye("showToast", {
                title: e,
                icon: "none"
              })
            }
            return o = n ? e.is_valid ? K : X : q, ae(t, o, ee, t), 1 !== e.is_valid || !n
          }(o, e)
      }

      function ae(e, t, n, o = "", i = "") {
        if (te.log(`[reportAPIBanForPage] APIName=${e}, blockType=${t}, checkScene=${n}, extraInfo=${o}, needReport=${re}`), !re) return;
        const {
          appLaunchInfo: a
        } = r, s = Object.keys(J.query).map((e => `${e}=${J.query[e]}`)).join("&"), c = {
          session_id: a.sessionid || a.sessionId,
          cur_path: J.lastRoute + (s ? `?${s}` : ""),
          title: J.navigationBarTitleMap[J.lastRoute],
          check_scene: n,
          block_status: t,
          extra_info: o,
          launch_scene: a.scene,
          launch_path: a.path,
          target_path: i
        };
        te.log("[reportAPIBanForPage], reqData:", c), Y({
          reqData: c,
          apiName: "webapi_reportnvgcheckinfo",
          complete(e) {
            te.log(`[reportAPIBanForPage], res.errMsg=${e.errMsg}`)
          }
        })
      }
      r.onReady((() => {
        if (!o) try {
          const {
            do_report: e,
            navigate_ban_rule_list: t
          } = r.appContactInfo.operationInfo.jsonInfo.navigate_ban_info;
          oe = t, re = 1 === e, ne = new Set(t.reduce(((e, t) => [...e, ...t.ban_jsapi_list]), ne)), te.log(`[BanForPage][init] needReport=${re}`), te.log("[BanForPage][init] ruleList:", oe), te.log("[BanForPage][init] banAPISet:", ne)
        } catch (e) {
          te.error(`[BanForPage][init] fail, errMsg=${e.message}`)
        }
      }));
      const se = ["startPullDownRefresh"];
      let ce = [];
      const ue = {
          appRoute: !1,
          appRouteDone: !1
        },
        fe = ["open", "openSync", "close", "closeSync", "fstat", "fstatSync", "write", "writeSync", "read", "readSync", "truncate", "truncateSync", "ftruncate", "ftruncateSync"];

      function le(e, t, r, n) {
        e.errMsg = e.errMsg || `${t}:ok`;
        const o = 0 === e.errMsg.indexOf(`${t}:ok`),
          i = new RegExp(`${t}:(fail |fail:)?cancel`).test(e.errMsg),
          a = 0 === e.errMsg.indexOf(`${t}:fail`);
        "function" == typeof n.beforeAll && n.beforeAll(e), o ? function (e, t, r) {
          const n = function () {
            "function" == typeof e.success && e.success(t), "function" == typeof r.afterSuccess && r.afterSuccess(t)
          };
          "function" == typeof r.beforeSuccess ? 2 === r.beforeSuccess._argumentsLength ? r.beforeSuccess(t, n) : (r.beforeSuccess(t), n()) : n()
        }(r, e, n) : i ? function (e, t, r, n) {
          const o = new RegExp(`${t}:(fail |fail:)?cancel`);
          e.errMsg = e.errMsg.replace(o, `${t}:fail cancel`), "function" == typeof r.fail && r.fail(e), "function" == typeof n.beforeCancel && n.beforeCancel(e), "function" == typeof r.cancel && r.cancel(e), "function" == typeof n.afterCancel && n.afterCancel(e)
        }(e, t, r, n) : a && function (e, t, r, n) {
          "function" == typeof e.beforeFail && e.beforeFail(r), "function" == typeof n.fail && n.fail(r), "function" == typeof e.afterFail && e.afterFail(r), ("function" != typeof e.checkNeedReportFail || !1 !== e.checkNeedReportFail(r)) && Reporter.reportIDKey({
            key: `${t}_fail`
          })
        }(n, t, e, r), "function" == typeof r.complete && r.complete(e), "function" == typeof n.afterAll && n.afterAll(e), ((e, t, r, n, o) => {
          let i;
          i = t ? N : r ? F : G, i[e] = i[e] || {}, i[e][o] = (i[e][o] || 0) + 1, Date.now() - U >= 6e4 && (U = Date.now(), setTimeout($, 6e4))
        })(t, o, a, 0, e.errMsg)
      }

      function pe(e) {
        return (t, n = {}, o = {}, a = "/") => {
          A(n) || (n = {}), "operateWXData" === t && n._isFromBaseOperateWXData;
          const s = function (e, t) {
            return Object.keys(e).reduce(((r, n) => ("function" == typeof e[n] && (r[n] = __errorTracer__.surroundThirdByTryCatch(e[n], `at api ${t} ${n} callback function`), delete e[n]), r)), {})
          }(n, t);
          if (n = Object.assign({}, n), o = function (e, t) {
              return Object.keys(e).reduce(((r, n) => ("function" == typeof e[n] && (r[n] = _(e[n], `at api ${t} ${n} callback function`), r[n]._argumentsLength = e[n].length), r)), {})
            }(o, t), Reporter.reportIDKey({
              key: t
            }), !e) {
            if (0 === r.appType && ne.has(t) && ! function (e) {
                const t = Object.keys(J.query).reduce(((e, t) => [...e, `${t}=${J.query[t]}`]), []).join("&"),
                  r = J.lastRoute + (t ? `?${t}` : ""),
                  n = J.navigationBarTitleMap[J.lastRoute] || "";
                return te.log(`[checkAPIAvailableForCurrentPage] APIName=${e}, path=${r}, title=${n}`), ie(e, r, n)
              }(t)) return void le({
              errMsg: `${t}:fail API has been banned`
            }, t, s, o);
            delete n.pluginId, delete n.permissionBytes, "/" !== a && (n.pluginId = a)
          }
          const c = (u = t, p || i && fe.includes(u));
          var u;
          W(t, n, (e => {
            le(e, t, s, o)
          }), c)
        }
      }
      const de = pe(!1),
        he = (e, t, r) => {
          se.indexOf(e) < 0 ? de(e, t, r) : ((e, t, r) => {
            const {
              appRoute: n,
              appRouteDone: o
            } = ue;
            !n && o ? de(e, t, r) : ce.push({
              name: e,
              args: t,
              option: r
            })
          })(e, t, r)
        },
        ge = pe(!0),
        ye = (e, t, r) => {
          ge(e, t, r)
        };

      function ve(e, t, r) {
        const n = m(t, r);
        return !n || (function (e, t = {}, r = "", n) {
          ! function ({
            name: e,
            args: t = {},
            success: r = !0,
            errMsg: n = "",
            errCode: o,
            res: i = {}
          }) {
            t = t || {};
            const a = r ? `${e}:ok` : `${e}:fail ${n}`,
              s = __errorTracer__.surroundThirdByTryCatch((r ? t.success : t.fail) || w, `at api ${e} ${r?"success":"fail"} callback function`),
              c = __errorTracer__.surroundThirdByTryCatch(t.complete || w, `at api ${e} complete callback function`);
            i.errMsg = a, b(o) && (i.errCode = o);
            s(i), c(i)
          }({
            name: e,
            args: t,
            errMsg: r,
            errCode: n,
            success: !1
          })
        }(e, t, `parameter error: ${n}`), !1)
      }
      let be = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
        Ae = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";

      function me(e) {
        return t => v(t) && t.length > e ? t.substr(0, e) : t
      }

      function _e(e, t = !0) {
        const r = y(e);
        switch (r) {
          case "Number":
          case "Boolean":
            return e;
          case "String":
            return me(512)(e).replace(/\|/g, "||").replace(/,/g, "|.");
          case "Error":
            return `[Error:${_e(e.message)}|${_e(e.stack)}]`;
          case "Object":
            return t ? Object.keys(e).map((t => `${_e(t)}=${_e(e[t],!1)}`)).sort(((e, t) => e.length - t.length)).join("&") || "{}" : `[${r}]`;
          default:
            return `[${r}]`
        }
      }

      function we({
        WXDataApiName: e,
        argument: t,
        isSuccess: n,
        invokeTime: o,
        costTime: i,
        result: a,
        errMsg: s,
        isConfirm: c,
        queueLength: u,
        wxdataQueueTimestamp: f,
        wxdataDequeueTimestamp: l,
        beginCGITimestamp: p,
        CGICallbackTimestamp: d,
        beginCGITimestampAfterConfirm: h,
        CGICallbackTimestampAfterConfirm: g,
        wxlibCallbackTimestamp: y,
        requestInQueue: v,
        requestingCount: b,
        cost1: A,
        cost2: m,
        cost3: _,
        cost4: w,
        cost5: x,
        cost6: S
      }) {
        Math.random() < .05 && setTimeout((() => {
          const k = J.currentNetworkType,
            I = r.appType + 1e3,
            T = r.appLaunchInfo && void 0 !== r.appLaunchInfo.scene ? r.appLaunchInfo.scene : 0,
            E = [e, _e(JSON.stringify(t)), n ? 1 : 0, o, i, k, _e(a), I, T, be, Ae, s && _e(s) || "", c ? 1 : 0, u, A, m, _, w, x, S, 0, v ? 1 : 0, b, o, f, l, p, d, h, g, y].map(me(1024)).join(",");
          Reporter.reportKeyValue({
            key: "WeAppOperateWXData",
            value: E
          })
        }), 0)
      }
      v(be) && (be = be.replace(" ", "")), v(Ae) && (Ae = Ae.replace(" ", "-"));
      let xe = 0;
      const Se = wxNativeConsole.createLogger("baseOperateWXData"),
        ke = ["webapi_getuserinfo", "webapi_getwerunstep_history", "subscribemsg"],
        Ie = ["webapi_getuserinfo", "webapi_getuserallappauth", "webapi_getadvert", "webapi_getshareinfo"],
        Te = ["qbase_commapi", "webapi_botdemo"];
      const Ee = [];
      let Oe = null;

      function Ce(e) {
        let t = "";
        try {
          t = Array.from(e).map((e => "object" == typeof e ? JSON.stringify(e) : e)).join(" ")
        } catch (r) {
          t = e.join(" ")
        }
        return t
      }
      const Pe = {
        log: 0,
        info: 1,
        warn: 2,
        error: 3,
        debug: 0
      };
      (function () {
        if (r && "debug" in r && void 0 !== r.debug) return !!r.debug
      })() && !o && Object.keys(Pe).forEach((e => {
        const t = Pe[e],
          r = console[e];
        console[e] = function (...e) {
          ! function (e, t) {
            Ee.push({
              level: e,
              ts: Date.now(),
              msg: Ce(t)
            }), null == Oe && (Oe = setTimeout((function () {
              Oe = null, he("log", {
                dataArray: Ee.slice()
              }), Ee.length = 0
            }), 50))
          }(t, e), "function" == typeof r && r.apply(console, e)
        }
      })), void 0 === console.group && (console.group = () => {}), void 0 === console.groupEnd && (console.groupEnd = () => {});

      function je(e, t, r = !0) {
        if (r && (t = function (e) {
            if ("string" != typeof e) return e; {
              let t = e.split("?")[0];
              const r = e.split("?")[1];
              return t += ".html", void 0 !== r ? `${t}?${r}` : t
            }
          }(t)), 0 === t.indexOf("/")) return t.substr(1);
        if (0 === t.indexOf("./")) return je(e, t.substr(2), !1); {
          const r = t.split("/");
          let n, o;
          for (n = 0, o = r.length; n < o && ".." === r[n]; n++);
          r.splice(0, n);
          const i = e.length > 0 ? e.split("/") : [];
          i.splice(i.length - n - 1, n + 1);
          const a = i.concat(r).join("/");
          return a
        }
      }
      Error;
      Error;
      const Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      globalThis.btoa, globalThis.atob;
      r.clientVersion;

      function Me(e = {}, t) {
        const r = t ? {
          errMsg: t
        } : void 0;
        "function" == typeof e.fail && e.fail(r), "function" == typeof e.complete && e.complete(r)
      }

      function Be(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      const De = new O;
      x("onPageReload", ((e = {}, t = 0) => {
        e.webviewId = t, De.emit("onPageReload", e)
      }));
      void 0 !== globalThis.ImageData && globalThis.ImageData;

      function Le(e, t, r = "", n = "") {
        let o = `canvas_${e}_${t}_${r}_`;
        return n && n !== __virtualDOM__.getRootNodeId(e) && (o += n), o
      }

      function We(e) {
        const t = [];
        let r = 1;
        return h(e, (e => {
            let r = -1;
            for (let n = 0; n < t.length; n++) {
              const o = t[n],
                i = o[0],
                a = o[1];
              if (i.cid === e.cid && i.canvasId === e.canvasId) {
                r = n, a(e);
                break
              }
            }
            r >= 0 && t.splice(r, 1)
          })),
          function (e, n) {
            e.cid = r++, t.push([e, n])
          }
      }
      const Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        Fe = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
      "undefined" != typeof window && window.atob;
      let Ge = !1;
      r.onReady((() => {
        he("getPermissionBytes", {
          indexes: [977],
          success: e => {
            e.permissionBytes && 1 === e.permissionBytes[0] && (Ge = !0)
          }
        })
      }));
      const Ue = "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version;
      const Ve = [];
      h("callbackWebviewMethod", (({
        res: e,
        callbackId: t
      }) => {
        const r = Ve[t];
        delete Ve[t], r && r(e)
      }));
      let $e = null;
      const Je = e => {
          let t = n;
          a && (e.brand = "iPhone"), o && "devtools" !== e.brand && (t = "iPhone" === e.brand ? "ios" : "android"), e.platform = t, e.SDKVersion = Ue, e.enableDebug = Boolean(r.debug), r.devicePixelRatio && (e.devicePixelRatio = r.devicePixelRatio), r.theme && (e.theme = r.theme), r.host && (e.host = r.host), i && /^\d+\.\d+$/.test(e.version) && (e.version += ".0"), $e = Object.assign({}, e), delete $e.errMsg, r.appLaunchInfo && "singlePage" === r.appLaunchInfo.mode && 4 !== r.appType && (e.safeArea = Object.assign({}, e.safeArea), e.safeArea.top = 0, e.safeArea.bottom = e.screenHeight, e.safeArea.height = e.safeArea.bottom - e.safeArea.top), p && (e.renderer = "h5")
        },
        Qe = () => {
          r.isReady || (new Error).stack
        },
        Ye = () => {
          let e = {};
          var t;
          return t = {
            success(t) {
              delete t.errMsg, e = t, $e = Object.assign({}, e)
            }
          }, Qe(), he("getSystemInfo", t, {
            beforeSuccess: Je
          }), e
        },
        Ze = () => $e || Ye();
      let ze = null,
        He = 0,
        qe = 0;
      const Ke = ["brand", "model", "pixelRatio", "language", "version", "system", "platform", "SDKVersion"];
      r.onReady((() => {
        ze = {};
        for (let e = 0; e < Ke.length; e++) {
          if (!(Ke[e] in r)) {
            ze = Ze();
            break
          }
          ze[Ke[e]] = r[Ke[e]]
        }
        if (r.screenHeight && r.screenWidth) He = r.screenWidth, qe = r.screenHeight;
        else {
          const e = Ze();
          He = e.screenWidth, qe = e.screenHeight
        }
      }));
      let Xe = !1;
      const et = new Set;
      B("onAppRouteDone", (() => {
        Xe = !0, et.forEach((e => e())), et.clear()
      }));
      new Set, (() => {
        let e
      })();
      const tt = {},
        rt = {};

      function nt(e) {
        return tt[e] ? tt[e] : ot(e)
      }

      function ot(e) {
        const t = new it(e);
        return tt[e] = t, t
      }
      i && x("onXWebCanvasSurfaceChange", ((e = {}) => {
        const t = rt[e.viewId];
        t && "function" == typeof t.swapSurface && t.swapSurface()
      })), h("skiaCanvasSizeChanged", (({
        canvasId: e,
        pluginId: t,
        nodeId: r,
        position: n
      }, o) => {
        const i = Le(o, e, t, r),
          a = tt[i];
        0 === n.width && 0 === n.height || !a || a.width === n.width && a.height === n.height || (a.width = n.width, a.height = n.height, a.canvas && a.context && (a.canvas.width = n.width, a.canvas.height = n.height, a.needsReplay() && a.replayActions()))
      }));
      class it {
        constructor(e) {
          this.id = e, this.width = 0, this.height = 0, this.context = null, this._actionsDefer = [], this._actionsWaiting = !1, this._images = [], this._actionsQueue = [], this._contextPromise = new Promise((e => {
            this._resolveContext = e
          }))
        }
        init(t, r, n, o) {
          this.width = r, this.height = n, a && (this.canvas = new e.g.Canvas(t), this.context = this.canvas.getContext("2d")), i && (this.canvasView = HTMLCanvasView.createView(o), rt[o] = this.canvasView, this.canvas = HTMLCanvasElement.createElement(this.canvasView), this.context = this.canvas.getContext("2d")), this._resolveContext && this._resolveContext(this.context)
        }
        preloadImage(t) {
          t.forEach((t => {
            let r = "";
            const n = t.method,
              o = t.data;
            "drawImage" === n ? r = o[0] : "setFillStyle" === n && "pattern" === o[0] && (r = o[1]), r && !this._images[r] && (a ? (this._images[r] = new e.g.Image, this._images[r].onload = () => {
              this._images[r].ready = !0
            }) : i && (this._images[r] = new SkiaImage, this._images[r].onload = () => {
              this._images[r].ready = !0
            }), this._images[r].setSrc(r))
          }))
        }
        checkImageLoaded(e, t, r) {
          const n = this._images[e];
          return n.ready ? (r(n), !0) : (this._actionsDefer.unshift([t, !0]), this._actionsWaiting = !0, n.onload = () => {
            n.ready = !0, r(n), this._actionsWaiting = !1;
            const e = this._actionsDefer.slice(0);
            this._actionsDefer = [];
            let t = e.shift();
            for (; t;) this.draw(t[0], t[1], t[2], this._webviewId, this._nodeId, this._pluginId), t = e.shift()
          }, !1)
        }
        draw(e, t, r, n, o, i) {
          this._webviewId = n, this._nodeId = o, this._pluginId = i, this.context ? this._draw(e, t, r, n, o, i) : this._contextPromise.then((() => (this._draw(e, t, r, n, o, i), null))).catch((() => {}))
        }
        _draw(e, t, r, n, o, a) {
          const s = this.context;
          if (e)
            if (t || this._flushQueue(), this._enqueue({
                actions: e,
                reserve: t
              }), this._actionsWaiting) this._actionsDefer.push([e, t, r]);
            else {
              t || (s.fillStyle = "#000000", s.strokeStyle = "#000000", s.shadowColor = "#000000", s.shadowBlur = 0, s.shadowOffsetX = 0, s.shadowOffsetY = 0, s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, this.width, this.height)), this.preloadImage(e, n, o, a), s.save();
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                let n = r.method;
                const o = r.data;
                if (/^set/.test(n) && "setTransform" !== n) {
                  const r = n[3].toLowerCase() + n.slice(4);
                  let i;
                  if ("fillStyle" === r || "strokeStyle" === r) {
                    if ("normal" === o[0]) i = o[1];
                    else if ("linear" === o[0]) i = s.createLinearGradient(...o[1]), o[2].forEach((function (e) {
                      const t = e[0],
                        r = e[1];
                      i.addColorStop(t, r)
                    }));
                    else if ("radial" === o[0]) {
                      const e = o[1][0],
                        t = o[1][1],
                        r = [e, t, 0, e, t, o[1][2]];
                      i = s.createRadialGradient(...r), o[2].forEach((function (e) {
                        const t = e[0],
                          r = e[1];
                        i.addColorStop(t, r)
                      }))
                    } else if ("pattern" === o[0]) {
                      if (!this.checkImageLoaded(o[1], e.slice(t + 1), (e => {
                          e && (s[r] = s.createPattern(e, o[2]))
                        }))) break;
                      continue
                    }
                    s[r] = i
                  } else if ("globalAlpha" === r) s[r] = o[0] / 255;
                  else if ("shadow" === r) {
                    const e = ["shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor"];
                    o.forEach((function (t, r) {
                      e[r], s[e[r]] = t
                    }))
                  } else "fontSize" === r ? s.font = s.font.replace(/\d+\.?\d*px/, o[0] + "px") : "lineDash" === r ? (s.setLineDash(o[0]), s.lineDashOffset = o[1] || 0) : "textBaseline" === r ? ("normal" === o[0] && (o[0] = "alphabetic"), s[r] = o[0]) : s[r] = o[0]
                } else if ("fillPath" === n || "strokePath" === n) n = n.replace(/Path/, ""), s.beginPath(), o.forEach((function (e) {
                  s[e.method](...e.data)
                })), s[n]();
                else if ("fillText" === n) {
                  let [e, ...t] = o;
                  t && t.map && (t = t.map((e => "string" == typeof e ? parseFloat(e) : e))), s.fillText(e, ...t)
                } else if ("drawImage" === n) {
                  let [r, ...n] = o;
                  this._images = this._images || {}, n && n.map && (n = n.map((e => "string" == typeof e ? parseFloat(e) : e)));
                  if (!this.checkImageLoaded(r, e.slice(t + 1), (e => {
                      e && s.drawImage.apply(s, [e, ...n.slice(4, 8), ...n.slice(0, 4)])
                    }))) break
                } else if ("clip" === n) o.forEach((function (e) {
                  s[e.method](...e.data)
                })), s.clip();
                else if ("arcTo" === n || "rotate" === n) {
                  let e = o;
                  o && o.map && (e = o.map((e => "string" == typeof e ? parseFloat(e) : e))), s[n](...e)
                } else if ("strokeText" === n) {
                  let [e, ...t] = o;
                  t && t.map && (t = t.map((e => "string" == typeof e ? parseFloat(e) : e))), s[n](e, ...t)
                } else s[n](...o)
              }
              s.restore(), i && this.canvasView.present(), this._actionsWaiting || "function" == typeof r && r()
            }
        }
        getImageData(e = {}) {
          this.context ? this._getImageData(e) : this._contextPromise.then((() => (this._getImageData(e), null))).catch((() => {}))
        }
        _getImageData(e = {}) {
          let t;
          try {
            const {
              x: r,
              y: n,
              width: o,
              height: i
            } = e || {};
            t = this.context.getImageData(r, n, o, i)
          } catch (t) {
            return void Me(e, t)
          }
          if (!t) return void Me("canvasGetImageData:fail");
          ! function (e = {}, t) {
            "function" == typeof e.success && e.success(t), "function" == typeof e.complete && e.complete(t)
          }(e, {
            width: t.width,
            height: t.height,
            data: t.data
          })
        }
        putImageData(e = {}) {
          this.context ? this._putImageData(e) : this._contextPromise.then((() => (this._putImageData(e), null))).catch((() => {}))
        }
        _putImageData(t = {}) {
          try {
            const {
              x: r,
              y: n,
              width: o,
              height: s,
              data: c
            } = t || {};
            let u;
            a ? u = new e.g.ImageData(c, o, s) : i && (u = new SkiaImageData(c, o, s)), i && this.canvasView.prepareDraw(), this.context.putImageData(u, r, n), i && this.canvasView.present()
          } catch (e) {
            return void Me(t, e)
          }! function (e = {}, t) {
            const r = t ? {
              errMsg: t
            } : void 0;
            "function" == typeof e.success && e.success(r), "function" == typeof e.complete && e.complete(r)
          }(t, "canvasPutImageData:ok")
        }
        replayActions() {
          const e = () => {};
          this._actionsQueue.forEach((t => {
            this.draw(t.actions, t.reserve, e, this._webviewId, this._nodeId, this._pluginId)
          }))
        }
        needsReplay() {
          return this._actionsQueue.length > 0
        }
        _flushQueue() {
          this._actionsQueue = []
        }
        _enqueue(e) {
          this._actionsQueue.push(e)
        }
      }
      const at = i && r.useXWebCanvas,
        st = a && r.useSkiaCanvas,
        ct = (i && r.useNewXWebCanvasToTFP, at || st),
        ut = {},
        ft = {},
        lt = {},
        pt = {};
      let dt = 0,
        ht = 0,
        gt = 4500;
      const yt = Date.now,
        vt = (We("onCanvasMethodCallback"), We("onDrawCanvas"));

      function bt({
        canvasId: e,
        pluginId: t,
        nodeId: r,
        viewId: n,
        webviewId: o
      }) {
        const i = Le(o, e, t, r);
        lt[i] && delete lt[i], ct && function ({
          canvasId: e,
          pluginId: t,
          nodeId: r,
          viewId: n,
          webviewId: o
        }) {
          const i = Le(o, e, t, r);
          delete tt[i], delete rt[n]
        }({
          webviewId: o,
          canvasId: e,
          pluginId: t,
          nodeId: r,
          viewId: n
        })
      }

      function At(e, t, r = !1, n, i, a, f) {
        if (o || s || c || u) {
          const n = {
            actions: t,
            reserve: r,
            canvasId: e
          };
          vt(n, (function (e) {
            "function" == typeof f && f({
              errMsg: e.errMsg
            })
          })), d("canvasActionsChanged", n)
        } else he("drawCanvas", {
          canvasId: e,
          reserve: r,
          useHardwareAccelerate: n,
          actions: t,
          success: i,
          fail: a,
          complete: f
        })
      }

      function mt({
        isWidgetCanvas: e,
        canvasId: t,
        actions: r,
        reserve: n,
        useHardwareAccelerate: o,
        success: i,
        fail: a,
        complete: s
      }, c = J.currentWebviewId, u = "", f = "") {
        const l = yt();
        if (!Array.isArray(r)) return;
        if (e) {
          if (l - dt < gt) {
            const e = {
              errMsg: "drawCanvas:fail 调用 draw 过于频繁。"
            };
            return ht += 1, ht > 500 && (ht = 0, console.warn(e.errMsg)), void("function" == typeof a && a(e))
          }
          return dt = l, void he("drawCanvas", {
            canvasId: void 0,
            reserve: n,
            actions: r,
            success: i,
            fail: a,
            complete: s
          })
        }
        const p = Le(c, t, u, f);
        if (ct) {
          nt(p).draw(r, n, s, c, f, u)
        } else if ("number" == typeof lt[p]) {
          At(lt[p], r, n, o, i, a, s)
        } else pt[p] = pt[p] || [], pt[p] = pt[p].concat({
          actions: r,
          reserve: n,
          useHardwareAccelerate: o,
          success: i,
          fail: a,
          complete: s
        })
      }
      "undefined" != typeof __widgetConfig__ && (gt = "number" == typeof __widgetConfig__.drawMinInterval ? __widgetConfig__.drawMinInterval : 25), h("canvasInsert", (({
        canvasId: e,
        viewId: t,
        canvasNumber: r,
        pluginId: n,
        data: o,
        position: i,
        nodeId: a,
        compPath: s
      }, c) => {
        ct && function ({
          canvasId: e,
          viewId: t,
          canvasNumber: r,
          pluginId: n,
          position: o,
          nodeId: i
        }, a) {
          const s = Le(a, e, n, i);
          let c = nt(s);
          c.context && (c = ot(s)), c.context || c.init(r, o.width, o.height, t, a)
        }({
          canvasId: e,
          viewId: t,
          canvasNumber: r,
          pluginId: n,
          position: i,
          nodeId: a
        }, c);
        const u = Le(c, e, n, a);
        ut[r] = {
            lastTouches: [],
            data: o,
            compPath: s
          }, lt[u] = r, ft[r] = i, Array.isArray(pt[u]) && (pt[u].forEach((function (e) {
            At(r, e.actions, e.reserve, e.useHardwareAccelerate, e.success, e.fail, e.complete)
          })), delete pt[u]),
          function (e, t) {
            De.once(`onBeforeUnloadPage_${e}`, (e => {
              "function" == typeof t && t(e)
            }))
          }(c, (() => {
            bt({
              canvasId: e,
              pluginId: n,
              nodeId: a,
              viewId: t,
              webviewId: c
            })
          }))
      })), h("canvasUpdate", (({
        canvasNumber: e,
        position: t
      }) => {
        Be(ft, e) && (ft[e] = t)
      })), h("canvasRemove", (({
        canvasId: e,
        pluginId: t,
        nodeId: r,
        viewId: n
      }, o) => {
        bt({
          canvasId: e,
          pluginId: t,
          nodeId: r,
          viewId: n,
          webviewId: o
        })
      }));
      const _t = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgrey: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          grey: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgrey: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
          transparent: "#00000000"
        },
        wt = {},
        xt = {};

      function St(e) {
        return "number" == typeof e
      }

      function kt(e) {
        let t = null;
        if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec(e))) {
          return [parseInt(t[1].slice(0, 2), 16), parseInt(t[1].slice(2, 4), 16), parseInt(t[1].slice(4), 16), 255]
        }
        if (null != (t = /^#([0-9|A-F|a-f]{3})$/.exec(e))) {
          let e = t[1].slice(0, 1),
            r = t[1].slice(1, 2),
            n = t[1].slice(2, 3);
          return e = parseInt(e + e, 16), r = parseInt(r + r, 16), n = parseInt(n + n, 16), [e, r, n, 255]
        }
        if (null != (t = /^rgb\((.+)\)$/.exec(e))) return t[1].split(",").map((function (e) {
          return Math.min(255, parseInt(e.trim(), 10))
        })).concat(255);
        if (null != (t = /^rgba\((.+)\)$/.exec(e))) return t[1].split(",").map((function (e, t) {
          return 3 === t ? Math.floor(255 * parseFloat(e.trim())) : Math.min(255, parseInt(e.trim(), 10))
        }));
        const r = e.toLowerCase();
        if (Be(_t, r)) {
          t = /^#([0-9|A-F|a-f]{6,8})$/.exec(_t[r]);
          const e = parseInt(t[1].slice(0, 2), 16),
            n = parseInt(t[1].slice(2, 4), 16),
            o = parseInt(t[1].slice(4, 6), 16);
          let i = parseInt(t[1].slice(6, 8), 16);
          return i = i >= 0 ? i : 255, [e, n, o, i]
        }
        return console.group("非法颜色: " + e), console.error("不支持颜色：" + e), console.groupEnd(), [0, 0, 0, 255]
      }

      function It(e) {
        if (Array.isArray(e)) {
          const t = [];
          return e.forEach((function (e) {
            t.push(It(e))
          })), t
        }
        if ("object" == typeof e) {
          const t = {};
          for (const r in e) t[r] = It(e[r]);
          return t
        }
        return e
      }

      function Tt(e, t) {
        if (!(o || f || u || /wxfile:\/\//.test(t)))
          if (e.pluginId || e.nodeId) {
            const r = e.pluginId.split("/")[0],
              n = __virtualDOM__.getNodeById(e.nodeId, e.webviewId),
              o = n && n.is || "";
            t = r ? 0 === t.indexOf("/") ? __virtualDOM__.getPluginRoutePrefix(r) + je(o, t, !1).replace(/\.html$/, "") : je(__virtualDOM__.convertComponentAliasToRoute(o), t, !1).replace(/\.html$/, "") : je(o, t, !1).replace(/\.html$/, "")
          } else t = je(J.lastRoute, t, !1).replace(/.html$/, "");
        return t
      }
      class Et {
        constructor(e, t) {
          this.type = e, this.data = t, this.colorStop = []
        }
        addColorStop(e, t) {
          ct ? this.colorStop.push([e, t]) : this.colorStop.push([e, kt(t)])
        }
      }
      class Ot {
        constructor(e) {
          this.width = e
        }
      }
      class Ct {
        constructor(e, t) {
          this.image = e, this.repetition = t
        }
      }
      class Pt {
        constructor(e, t, r, n) {
          if (this.actions = [], this.path = [], this.subpath = [], this.webviewId = e, this.canvasId = t, this.pluginId = n, this.useHardwareAccelerate = !0, this.nodeId = r, this._id = Le(e, t, n, r), this.drawingState = wt[this._id] = wt[this._id] || [], this.state = xt[this._id] = xt[this._id] || {
              lineDash: [0, 0],
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 0,
              shadowColor: ct ? "#000000" : a ? [] : [0, 0, 0, 0],
              font: "10px sans-serif",
              fontSize: 10,
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "sans-serif"
            }, this._transform = {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: 0,
              f: 0
            }, o || f) {
            const e = document.createElement("canvas");
            this._context = e.getContext("2d")
          }
        }
        getActions() {
          const e = It(this.actions);
          return this.actions = [], this.path = [], this.subpath = [], e
        }
        clearActions() {
          this.actions = [], this.path = [], this.subpath = []
        }
        draw(e = !1, t) {
          const r = this.canvasId,
            n = It(this.actions),
            o = this.useHardwareAccelerate;
          this.actions = [], this.path = [], this.useHardwareAccelerate = !0, this.isWidgetCanvas ? mt({
            isWidgetCanvas: !0,
            actions: n,
            reserve: e
          }) : mt({
            canvasId: r,
            actions: n,
            reserve: e,
            useHardwareAccelerate: o,
            complete: t
          }, this.webviewId, this.pluginId, this.nodeId)
        }
        createLinearGradient(e, t, r, n) {
          return new Et("linear", [e, t, r, n])
        }
        createCircularGradient(e, t, r) {
          return new Et("radial", [e, t, r])
        }
        createPattern(e, t) {
          if (void 0 !== t) {
            if (-1 !== ["repeat", "repeat-x", "repeat-y", "no-repeat"].indexOf(t)) return e = e._src ? e._src : Tt(this, e), new Ct(e, t);
            console.error(`Failed to execute 'createPattern' on 'CanvasContext': The provided type ('${t}') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'.`)
          } else console.error("Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present.")
        }
        measureText(e) {
          let t;
          return o || f ? (this._context.font = this.state.font, t = this._context.measureText(e)) : he("measureText", {
            text: e,
            fontSize: this.state.fontSize,
            fontFamily: this.state.fontFamily,
            fontWeight: this.state.fontWeight,
            fontStyle: this.state.fontStyle,
            complete(e) {
              t = {
                width: e.width || 0
              }
            }
          }), new Ot(t.width || 0)
        }
        save() {
          this.actions.push({
            method: "save",
            data: []
          }), this.drawingState.push(this.state)
        }
        restore() {
          this.actions.push({
            method: "restore",
            data: []
          }), this.state = xt[this._id] = this.drawingState.pop() || {
            lineDash: [0, 0],
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 0,
            shadowColor: ct ? "#000000" : a ? [] : [0, 0, 0, 0],
            font: "10px sans-serif",
            fontSize: 10,
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "sans-serif"
          }
        }
        getLineDash() {
          return this.state.lineDash
        }
        beginPath() {
          this.path = [], this.subpath = [], (o || ct) && this.path.push({
            method: "beginPath",
            data: []
          })
        }
        moveTo(e, t) {
          this.path.push({
            method: "moveTo",
            data: [e, t]
          }), this.subpath = [
            [e, t]
          ]
        }
        closePath() {
          this.path.push({
            method: "closePath",
            data: []
          }), this.subpath.length && (this.subpath = [this.subpath.shift()])
        }
        lineTo(e, t) {
          0 === this.path.length && 0 === this.subpath.length ? this.path.push({
            method: "moveTo",
            data: [].slice.apply(arguments)
          }) : this.path.push({
            method: "lineTo",
            data: [].slice.apply(arguments)
          }), this.subpath.push([e, t])
        }
        quadraticCurveTo(e, t, r, n) {
          this.path.push({
            method: "quadraticCurveTo",
            data: [e, t, r, n]
          }), this.subpath.push([r, n])
        }
        bezierCurveTo(e, t, r, n, o, i) {
          this.path.push({
            method: "bezierCurveTo",
            data: [e, t, r, n, o, i]
          }), this.subpath.push([o, i])
        }
        arc(e, t, r, n, o, a = !1) {
          if (!i || ct) return this.path.push({
            method: "arc",
            data: [e, t, r, n, o, a]
          }), void this.subpath.push([e, t]);
          const s = e + Math.cos(n) * r,
            c = t + Math.sin(n) * r;
          if (this.subpath.push([s, c]), a && n - o >= 2 * Math.PI || !a && o - n >= 2 * Math.PI) this.subpath.push([s, c]);
          else {
            const n = e + Math.cos(o) * r,
              i = t + Math.sin(o) * r;
            this.subpath.push([n, i])
          }
          this.path.push({
            method: "arc",
            data: [e, t, r, n, o, a]
          })
        }
        rect(e, t, r, n) {
          this.path.push({
            method: "rect",
            data: [e, t, r, n]
          }), this.subpath = [
            [e, t]
          ], i && !ct && this.path.push({
            method: "closePath",
            data: []
          })
        }
        arcTo(e, t, r, n, o, a) {
          if ((!i || ct) && !a) return this.path.push({
            method: "arcTo",
            data: [e, t, r, n, o]
          }), void this.subpath.push([r, n]);
          const s = this.subpath[this.subpath.length - 1],
            c = s[0],
            u = s[1];
          if (c === e && u === t || e === r && t === n || 0 === o) return this.actions.push({
            method: "lineTo",
            data: [e, t]
          }), void this.subpath.push([e, t]);
          if (c === e && c === r || u === t && u === n) return this.actions.push({
            method: "lineTo",
            data: [e, t]
          }), void this.subpath.push([e, t]);
          const {
            sqrt: f,
            acos: l,
            sin: p,
            tan: d,
            atan: h,
            PI: g
          } = Math, y = function (e) {
            return e ** 2
          }, v = c - e, b = u - t, A = r - e, m = n - t, _ = l((v * A + b * m) / (f(y(v) + y(b)) * f(y(A) + y(m)))) / 2, w = Math.round(o / p(_) * 1e6) / 1e6, x = Math.round(o / d(_) * 1e6) / 1e6;
          let S, k, I, T, E, O;
          if (c - e == 0) S = e, k = u - t > 0 ? t + x : t - x;
          else if (u - t == 0) S = c - e > 0 ? e + x : e - x, k = t;
          else {
            const r = (u - t) / (c - e),
              n = u - r * c;
            S = (f(y(v) + y(b)) * x + v * e + b * t - n * b) / (v + r * b), k = r * S + n
          }
          if (r - e == 0) I = e, T = n - t > 0 ? t + x : t - x;
          else if (n - t == 0) I = r - e > 0 ? e + x : e - x, T = t;
          else {
            const o = (n - t) / (r - e),
              i = n - o * r;
            I = (f(y(A) + y(A)) * x + A * e + m * t - i * m) / (A + o * m), T = o * I + i
          }
          const C = (S + I) / 2 - e,
            P = (k + T) / 2 - t;
          if (0 === P) E = e, O = P > 0 ? t + w : t - w;
          else {
            const r = P / C,
              n = t - r * e;
            E = (f(y(C) + y(P)) * w + e * C + t * P - n * P) / (C + r * P), O = r * E + n
          }
          E = Math.round(1e6 * E) / 1e6, O = Math.round(1e6 * O) / 1e6;
          const j = k - O,
            R = S - E,
            M = g - 2 * _;
          let B = h(j / R);
          0 === j && R < 0 && (B = Math.PI);
          const D = (S - E) * (T - O) - (k - O) * (I - E);
          this.path.push({
            method: "arc",
            data: [E, O, o, B, D > 0 ? B + M : B - M, D < 0]
          }), this.subpath.push([I, T])
        }
        getTransform() {
          return this._transform
        }
        clip() {
          this.actions.push({
            method: "clip",
            data: It(this.path)
          })
        }
        set lineDashOffset(e) {
          if (o || f || u) this.actions.push({
            method: "setLineDashOffset",
            data: [e]
          });
          else {
            const t = this.state.lineDash || [0, 0];
            this.actions.push({
              method: "setLineDash",
              data: [t, e]
            })
          }
        }
        set globalCompositeOperation(e) {
          this.actions.push({
            method: "setGlobalCompositeOperation",
            data: [e]
          })
        }
        set shadowBlur(e) {
          o || f || u ? this.actions.push({
            method: "setShadowBlur",
            data: [e]
          }) : (this.actions.push({
            method: "setShadow",
            data: [this.state.shadowOffsetX, this.state.shadowOffsetY, e, this.state.shadowColor]
          }), this.state.shadowBlur = e)
        }
        set shadowColor(e) {
          if (o || f || u) return void this.actions.push({
            method: "setShadowColor",
            data: [e]
          });
          let t;
          t = ct ? e : a && 0 === this.state.shadowBlur ? [] : kt(e), this.actions.push({
            method: "setShadow",
            data: [this.state.shadowOffsetX, this.state.shadowOffsetY, this.state.shadowBlur, t]
          }), this.state.shadowColor = t
        }
        set shadowOffsetX(e) {
          o || f || u ? this.actions.push({
            method: "setShadowOffsetX",
            data: [e]
          }) : (this.actions.push({
            method: "setShadow",
            data: [e, this.state.shadowOffsetY, this.state.shadowBlur, this.state.shadowColor]
          }), this.state.shadowOffsetX = e)
        }
        set shadowOffsetY(e) {
          o || f || u ? this.actions.push({
            method: "setShadowOffsetY",
            data: [e]
          }) : (this.actions.push({
            method: "setShadow",
            data: [this.state.shadowOffsetX, e, this.state.shadowBlur, this.state.shadowColor]
          }), this.state.shadowOffsetY = e)
        }
        set font(e) {
          this.state.font = e;
          const t = e.match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/);
          if (!t) return void console.warn("Failed to set 'font' on 'CanvasContext': invalid format.");
          const r = t[1].trim().split(/\s/),
            n = parseFloat(t[3]),
            i = t[7],
            a = [];
          let s = "";
          const c = this;

          function l() {
            a.push({
              method: "setFontWeight",
              data: ["normal"]
            }), c.state.fontWeight = "normal"
          }
          if (r.forEach(((e, t) => {
              ["italic", "oblique", "normal"].indexOf(e) > -1 ? (a.push({
                method: "setFontStyle",
                data: [e]
              }), this.state.fontStyle = e) : ["bold", "normal"].indexOf(e) > -1 ? (a.push({
                method: "setFontWeight",
                data: [e]
              }), this.state.fontWeight = e) : 0 === t ? (a.push({
                method: "setFontStyle",
                data: ["normal"]
              }), c.state.fontStyle = "normal") : 1 === t && l()
            })), 1 === r.length && l(), s = a.map((e => e.data[0])).join(" "), this.state.fontSize = n, this.state.fontFamily = i, o || f || u) return s = `${s} ${n}px ${i}`, void this.actions.push({
            method: "setFont",
            data: [s]
          });
          this.actions.push.apply(this.actions, a), this.actions.push({
            method: "setFontSize",
            data: [n]
          }, {
            method: "setFontFamily",
            data: [i]
          })
        }
        get font() {
          return this.state.font
        }
        set fillStyle(e) {
          jt(this, "setFillStyle", e)
        }
        set strokeStyle(e) {
          jt(this, "setStrokeStyle", e)
        }
        set globalAlpha(e) {
          e = Math.floor(255 * parseFloat(e)), this.actions.push({
            method: "setGlobalAlpha",
            data: [e]
          })
        }
        set textAlign(e) {
          this.actions.push({
            method: "setTextAlign",
            data: [e]
          })
        }
        set lineCap(e) {
          this.actions.push({
            method: "setLineCap",
            data: [e]
          })
        }
        set lineJoin(e) {
          this.actions.push({
            method: "setLineJoin",
            data: [e]
          })
        }
        set lineWidth(e) {
          this.actions.push({
            method: "setLineWidth",
            data: [e]
          })
        }
        set miterLimit(e) {
          this.actions.push({
            method: "setMiterLimit",
            data: [e]
          })
        }
        set textBaseline(e) {
          this.actions.push({
            method: "setTextBaseline",
            data: [e]
          })
        }
      }

      function jt(e, t, r) {
        "string" == typeof r ? ct ? e.actions.push({
          method: t,
          data: ["normal", r]
        }) : e.actions.push({
          method: t,
          data: ["normal", kt(r)]
        }) : "object" == typeof r && r instanceof Et ? e.actions.push({
          method: t,
          data: [r.type, r.data, r.colorStop]
        }) : r instanceof Ct && e.actions.push({
          method: t,
          data: ["pattern", r.image, r.repetition]
        })
      } [].concat(["scale", "rotate", "translate", "setTransform", "transform"], ["drawImage", "fillText", "fill", "stroke", "fillRect", "strokeRect", "clearRect", "strokeText"]).forEach((function (e) {
        Pt.prototype[e] = "fill" === e || "stroke" === e ? function () {
          this.actions.push({
            method: e + "Path",
            data: It(this.path)
          })
        } : "fillRect" === e ? function (e, t, r, n) {
          this.actions.push({
            method: "fillPath",
            data: [{
              method: "rect",
              data: [e, t, r, n]
            }]
          })
        } : "strokeRect" === e ? function (e, t, r, n) {
          this.actions.push({
            method: "strokePath",
            data: [{
              method: "rect",
              data: [e, t, r, n]
            }]
          })
        } : "fillText" === e || "strokeText" === e ? function (t, r, n, o) {
          const i = [t.toString(), r, n];
          "number" == typeof o && i.push(o), this.actions.push({
            method: e,
            data: i
          })
        } : "drawImage" === e ? function (t, r, n, o, i, a, s, c, u) {
          let f;
          t = t._src ? t._src : Tt(this, t), void 0 === u && (a = r, s = n, c = o, u = i, r = void 0, n = void 0, o = void 0, i = void 0), f = St(r) && St(n) && St(o) && St(i) ? [t, a, s, c, u, r, n, o, i] : St(c) && St(u) ? [t, a, s, c, u] : [t, a, s], this.actions.push({
            method: e,
            data: f
          })
        } : "clearRect" === e ? function () {
          this.useHardwareAccelerate = !1, this.actions.push({
            method: e,
            data: [].slice.apply(arguments)
          })
        } : "transform" === e || "setTransform" === e ? function (t, r, n, o, i, a) {
          this._transform = {
            a: t,
            b: r,
            c: n,
            d: o,
            e: i,
            f: a
          }, this.actions.push({
            method: e,
            data: [t, r, n, o, i, a]
          })
        } : function () {
          this._ignoreScale && "scale" === e ? this._ignoreScale = !1 : this.actions.push({
            method: e,
            data: [].slice.apply(arguments)
          })
        }
      })), ["setFillStyle", "setTextAlign", "setStrokeStyle", "setGlobalAlpha", "setShadow", "setFontSize", "setLineCap", "setLineJoin", "setLineWidth", "setMiterLimit", "setTextBaseline", "setLineDash"].forEach((function (e) {
        "setFillStyle" === e || "setStrokeStyle" === e ? Pt.prototype[e] = function () {
          const t = arguments[0];
          jt(this, e, t)
        } : "setGlobalAlpha" === e ? Pt.prototype[e] = function () {
          const t = [].slice.apply(arguments, [0, 1]);
          t[0] = Math.floor(255 * parseFloat(t[0])), this.actions.push({
            method: e,
            data: t
          })
        } : "setShadow" === e ? Pt.prototype[e] = function () {
          const t = [].slice.apply(arguments, [0, 4]);
          ct || (t[3] = a && 0 === t[2] ? [] : kt(t[3])), this.actions.push({
            method: e,
            data: t
          }), this.state.shadowBlur = t[2], this.state.shadowColor = t[3], this.state.shadowOffsetX = t[0], this.state.shadowOffsetY = t[1]
        } : "setLineDash" === e ? Pt.prototype[e] = function () {
          const t = [].slice.apply(arguments, [0, 2]);
          t[0] = t[0] && t[0].length ? t[0] : [0, 0], t[1] = t[1] || 0, this.actions.push({
            method: e,
            data: t
          }), this.state.lineDash = t[0]
        } : "setFontSize" === e ? Pt.prototype.setFontSize = function (e) {
          this.state.font = this.state.font.replace(/\d+\.?\d*px/, e + "px"), this.state.fontSize = e, this.actions.push({
            method: "setFontSize",
            data: [e]
          })
        } : Pt.prototype[e] = function () {
          this.actions.push({
            method: e,
            data: [].slice.apply(arguments, [0, 1])
          })
        }
      }));
      Error;
      let Rt = !1,
        Mt = !1;
      let Bt = [],
        Dt = [],
        Lt = "";

      function Wt(e, t, r) {
        if (t >= r) return;
        const n = e.range || [],
          o = e.value || [];
        if (!Array.isArray(n[t]) || !Array.isArray(Bt[t]) || Dt[t] === o[t] && function (e, t, r) {
            if (e.length !== t.length) return !1;
            for (let n = 0, o = e.length; n < o; n++)
              if ("object" == typeof e[n] && "object" == typeof t[n]) {
                if (e[n][r] !== t[n][r]) return !1
              } else if (typeof e[n] != typeof t[n] || e[n] !== t[n]) return !1;
            return !0
          }(n[t], Bt[t], e.rangeKey)) Wt(e, t + 1, r);
        else {
          const i = o[t] >= n[t].length ? 0 : o[t],
            a = [];
          if (e.rangeKey)
            for (let r = 0; r < n[t].length; r++) {
              const o = n[t][r];
              a.push(o[e.rangeKey] + "")
            } else
              for (let e = 0; e < n[t].length; e++) a.push(n[t][e] + "");
          he("updateMultiPickerView", {
            column: t,
            array: a,
            current: i
          }, {
            afterSuccess: () => {
              Dt[t] = i, Bt[t] = [].concat(n[t]), Wt(e, t + 1, r)
            }
          })
        }
      }
      Protect.hijack();
      const Nt = {},
        Ft = [],
        Gt = [],
        Ut = [];
      let Vt, $t, Jt, Qt;
      const Yt = () => {
          Vt && Ft.length > 0 && (Jt || (Jt = !0, Ft.forEach((e => {
            "function" == typeof e && e(Vt)
          }))), $t && Gt.length > 0 && Gt.forEach((e => {
            "function" == typeof e && e($t)
          })))
        },
        Zt = {
          createWidgetContext: () => {
            const e = new Pt;
            return e.isWidgetCanvas = !0, e
          },
          onCanvasInsert: e => {
            Ft.push(e), Yt()
          },
          onDataPush: e => {
            Gt.push(e), Yt()
          },
          getSystemInfo: e => {
            he("getSystemInfo", e, {
              beforeSuccess: e => {
                e.platform = n
              }
            })
          },
          getSystemInfoSync: () => {
            let e = {};
            return he("getSystemInfo", {}, {
              beforeSuccess: (t = {}) => {
                e = t, e.platform = n, delete t.errMsg
              }
            }), e
          },
          getNetworkType: e => {
            he("getNetworkType", e)
          },
          downloadImage: e => {
            he("downloadImage", e)
          },
          openApp: e => {
            he("openApp", e)
          },
          makePhoneCall: e => {
            he("makePhoneCall", e)
          },
          setWidgetSize: e => {
            he("setWidgetSize", e)
          },
          onNetworkStatusChange: e => {
            Ut.push(e)
          },
          onNetworkChange: e => {
            Ut.push(e)
          },
          onTap: e => {
            Qt = e
          },
          authorize: (e = {}) => {
            ve("authorize", e, {
              scope: ""
            }) && he("authorize", Object.assign({}, e, {
              scope: [e.scope]
            }), {
              beforeAll(e) {
                delete e.body, void 0 !== e.err_code && (e.errCode = e.err_code, delete e.err_code)
              }
            })
          },
          showPicker: (e = {}) => {
            Rt || ("date" === e.mode || "time" === e.mode ? function (e) {
              e.range = {
                start: e.start,
                end: e.end
              }, e.current = e.value, e.fields = e.fields || "day", he("showDatePickerView", e, {
                afterAll: () => {
                  Rt = !1
                }
              })
            }(e) : "multiSelector" === e.mode ? function (e) {
              const t = [],
                r = [],
                n = e.value,
                o = (e.range || []).map((e => [].concat(e)));
              for (let i = 0; i < o.length; i++) {
                n && "object" == typeof n && n instanceof Array ? (t.push(parseInt(n[i], 10)), (Number.isNaN(t[i]) || t[i] >= o[i].length) && (t[i] = 0)) : t.push(0);
                const a = [];
                if (e.rangeKey)
                  for (let t = 0; t < o[i].length; t++) {
                    const r = o[i][t];
                    a.push(r[e.rangeKey] + "")
                  } else
                    for (let e = 0; e < o[i].length; e++) a.push(o[i][e] + "");
                r.push(a)
              }
              e.array = r, e.current = t, he("showMultiPickerView", e, {
                beforeSuccess: e => {
                  e.value = e.current
                },
                afterAll: () => {
                  Rt = !1, Mt = !1
                }
              }), Rt = !0, Mt = !0, Bt = o, Dt = [].concat(n || []), Lt = e.rangeKey, x("onMultiPickerViewChange", (t => {
                Rt && n[t.column] !== t.current && (n[t.column] = t.current, e.columnChange && "function" == typeof e.columnChange && e.columnChange({
                  column: t.column,
                  value: t.current
                }))
              }))
            }(e) : "selector" !== e.mode && e.mode || function (e) {
              let t = parseInt(e.value, 10);
              const r = e.range || [];
              (Number.isNaN(t) || t >= r.length) && (t = 0);
              const n = [];
              if (e.rangeKey)
                for (let t = 0; t < r.length; t++) {
                  const o = r[t];
                  n.push(o[e.rangeKey] + "")
                } else
                  for (let e = 0; e < r.length; e++) n.push(r[e] + "");
              e.current = t, e.array = n, he("showPickerView", e, {
                beforeSuccess: e => {
                  e.value = e.index.toString()
                },
                afterAll: () => {
                  Rt = !1
                }
              })
            }(e))
          },
          updatePicker: (e = {}) => {
            Rt && Mt && (e.range = [].concat(e.range && Array.isArray(e.range) ? e.range : Bt), e.value = [].concat(e.value && Array.isArray(e.value) ? e.value : Dt), e.rangeKey = e.rangeKey || Lt, Wt(e, 0, e.range.length))
          },
          version: "undefined" == typeof __libVersionInfo__ ? {
            version: "9.9.9"
          } : __libVersionInfo__
        };
      x("onCanvasInsert", (e => {
        Vt = e, Yt()
      })), x("onDataPush", (e => {
        $t = e, Yt()
      })), x("onNetworkStatusChange", (e => {
        Ut.forEach((t => {
          "function" == typeof t && t(e)
        }))
      })), x("onTap", (e => {
        const t = e.eventId;
        if (delete e.eventId, "function" == typeof Qt) {
          const r = Qt(e) || !1;
          he("onTapCallback", {
            hasHandler: !0,
            eventId: t,
            res: r
          })
        } else he("onTapCallback", {
          hasHandler: !1,
          eventId: t,
          res: !1
        })
      })), x("onError", ((e = {}) => {
        console.error("thirdScriptError", "\n", "sdk uncaught third Error", "\n", e.message, "\n", e.stack)
      })), x("onWidgetResume", (() => {
        Timer.resume()
      })), x("onWidgetPause", (() => {
        Timer.pause()
      })), Reporter.setAsWidget(), Object.keys(Zt).forEach((function (e) {
        Object.defineProperty(Nt, e, {
          get: () => "function" == typeof Zt[e] ? function (e, t) {
            return function (...r) {
              try {
                return e(...r)
              } catch (e) {
                if ("[object Error]" === Object.prototype.toString.apply(e)) {
                  if ("WidgetSdkKnownError" === e.type) throw e;
                  Reporter.errorReport({
                    key: "widgetSDKScriptError",
                    error: e,
                    extend: t
                  })
                }
              }
            }
          }(Zt[e], `wx.${e}`) : Zt[e],
          enumerable: !0,
          configurable: !0
        })
      }));
      const zt = Nt
    })(), wx = t.default
  })(), (() => {
    "use strict";
    var e = {
        d: (t, r) => {
          for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }
      },
      t = {};
    e.r(t), e.d(t, {
      Widget: () => v,
      getWidget: () => b
    });
    const r = (e, t) => function (...r) {
      try {
        return e(...r)
      } catch (e) {
        return ((e, t) => {
          if ("[object Error]" === Object.prototype.toString.apply(e)) {
            if ("WidgetEngineKnownError" === e.type) throw e;
            Reporter.errorReport({
              key: "widgetEnginScriptError",
              error: e,
              extend: t
            })
          }
        })(e, t), () => {}
      }
    };
    Error;
    const n = (e, t, r, n) => {
        Reporter.speedReport({
          key: e,
          timeMark: {
            startTime: t,
            endTime: r
          },
          force: "" !== e,
          data: n
        })
      },
      o = () => {},
      i = ["drawMinInterval", "timerEnabled", "drawLock"],
      a = ["widgetType", "platform", "debug", "drawMinInterval"],
      s = {
        drawMinInterval: 32,
        timerEnabled: !1,
        drawLock: !0
      },
      c = {
        widgetType: 0,
        platform: "iOS",
        debug: 0,
        drawMinInterval: 32
      };
    if ("undefined" != typeof __widgetConfig__)
      for (let e = 0; e < i.length; ++e) {
        const t = i[e];
        Object.prototype.hasOwnProperty.call(__widgetConfig__, t) && (s[t] = __widgetConfig__[t])
      }
    if (void 0 !== __wxConfig)
      for (let e = 0; e < a.length; ++e) {
        const t = a[e];
        Object.prototype.hasOwnProperty.call(__wxConfig, t) && (c[t] = __wxConfig[t])
      }
    let u, f = !1;
    const l = ["__context__", "getContext"],
      p = ["onLoad", "onDataPush", "onNetworkChange", "onTap"],
      d = ["onCanvasInsert", "onDataPush", "onNetworkChange", "onTap"],
      h = e => {
        for (let t = 0; t < p.length; ++t)
          if (p[t] === e) return !0;
        return !1
      },
      g = (e, t) => function (...r) {
        let n;
        (e => {
          Reporter.__route__ = "widget", Reporter.__method__ = e
        })(e), h(e) && console.info(`widget: ${e} have been invoked.`);
        const i = (t || o).bind(this),
          a = `at widget ${h(e)?"lifeCycleCallback ":" "}${e} function`;
        let s = 0;
        try {
          const e = Date.now();
          n = i.apply(this, r), s = Date.now() - e
        } catch (e) {
          Reporter.thirdErrorReport({
            error: e,
            extend: a
          })
        }
        return s > 1e3 && Reporter.slowReport({
          key: "widgetInvoke",
          cost: s,
          extend: a
        }), n
      };
    class y {
      constructor(e) {
        if (Object.keys(e).forEach((t => {
            var r, n, o;
            (e => {
              for (let t = 0; t < l.length; ++t)
                if (l[t] === e) return !0;
              return !1
            })(t) ? (n = "关键字保护", o = `Widget's ${t} is write-protected`, console.group(`${new Date} ${n}`), console.warn(o), console.groupEnd()) : h(t) || ("Function" === (r = e[t], Object.prototype.toString.call(r).split(" ")[1].split("]")[0]) ? this[t] = g(t, e[t]).bind(this) : this[t] = e[t])
          })), this.__context__ = wx.createWidgetContext(), 0 === c.widgetType && s.drawLock) {
          const t = this.__context__.draw;
          if (this.__context__.draw = function (...e) {
              f ? (this.__context__.path = [], this.__context__.actions = [], console.error("You can only draw once in one onDataPush")) : (f = !0, t.apply(this.__context__, e))
            }.bind(this), Object.prototype.hasOwnProperty.call(e, "onDataPush")) {
            const t = e.onDataPush;
            e.onDataPush = function (...e) {
              f = !1, t.apply(this, e)
            }.bind(this)
          }
        }
        p.forEach((t => {
          this[t] = g(t, e[t]).bind(this)
        }));
        for (let t = 0; t < p.length; ++t) {
          const r = p[t];
          if (e[r]) {
            (0, wx[d[t]])(this[r])
          }
        }
      }
      getContext() {
        return this.__context__
      }
    }
    const v = r((e => {
        u = new y(e)
      }), "create widget instance"),
      b = () => u;
    Timer.setEnabled(s.timerEnabled);
    const A = {
        canvasReady: !1,
        dataReady: !1
      },
      m = {
        canvasReady: 0
      };
    console.log("widget engine start"), wx.onCanvasInsert(r((() => {
      A.canvasReady || (A.canvasReady = !0, m.canvasReady = Date.now(), console.log(`WidgetLib: ${wx.version.version} (${wx.version.updateTime})`), "undefined" != typeof __WAWidgetStartTime__ && "undefined" != typeof __WAWidgetEndTime__ && (n("WAWidget", __WAWidgetStartTime__, __WAWidgetEndTime__), n("widgetCanvasReady", __WAWidgetEndTime__, m.canvasReady)))
    }), "onCanvasInsert")), wx.onDataPush(r((() => {
      A.dataReady || (A.dataReady = !0, n("widgetFirstDataPush", m.canvasReady, Date.now()))
    }), "onDataPush")), __widgetEngine__ = t
  })();
  var Widget = __widgetEngine__.Widget,
    getWidget = __widgetEngine__.getWidget;
  ! function (e) {
    var t = {},
      r = {};
    define = function (e, r) {
      if (t[e] && t[e].factory) {
        var n = t[e],
          o = r.toString();
        n.factoryString || (n.factoryString = n.factory.toString()), o !== n.factoryString && (t[e] = {
          status: 1,
          factory: r,
          factoryString: o
        })
      } else t[e] = {
        status: 1,
        factory: r
      }
    };
    var n = function (e) {
        if (e && __wxConfig.subPackages)
          for (var t = 0, r = __wxConfig.subPackages.length; t < r; t++)
            if (0 === e.indexOf(__wxConfig.subPackages[t].root)) return __wxConfig.subPackages[t]
      },
      o = function (e) {
        for (var t = [], r = e.split("/"), n = 0, o = r.length; n < o; ++n) {
          var i = r[n];
          if ("" != i && "." != i)
            if (".." == i) {
              if (0 == t.length) {
                t = null;
                break
              }
              t.pop()
            } else n + 1 < o && ".." == r[n + 1] ? n++ : t.push(i)
        }
        return t
      },
      i = function (e) {
        var r = o(e + "/index.js").join("/");
        return t[r] ? r : (r = o(e).join("/"), /\.js$/.test(r) || (r += ".js"), t[r] ? r : "")
      },
      a = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"];
    var s = function (e) {
      var r = function (e) {
          var t = e.match(/(.*)\/([^/]+)?$/);
          return t && t[1] ? t[1] : "./"
        }(e),
        a = function (a, s) {
          if ("string" != typeof a) throw new Error("require args must be a string");
          var c = o(r + "/" + a);
          if ("/__wx__/private-api" === a && (c = o(a)), !c) throw new Error("can not find module : " + a);
          try {
            var u = c.join("/");
            u = function (e, r, n) {
              var a = e;
              if (/\.js$/.test(a) || (a += ".js"), "string" == typeof a && t[a]) return a;
              var s = o(r);
              if (!s) throw new Error("can not find module : " + n);
              for (var c, u = e.substring(s.join("/").length); s.length;) {
                var f = s.join("/") + "/miniprogram_npm" + u;
                if (c = i(f)) break;
                s.pop()
              }
              return c || (u = "/" === u[0] ? u : "/" + u, c = i(f = "miniprogram_npm" + u)), c || e
            }(u, r, a);
            var f = function (e) {
              return "functional-pages" === o(e)[0]
            };
            if (f(u) !== f(e) && Reporter.thirdErrorReport({
                error: new Error('should not require across "functional-pages" folder'),
                extend: 'at require("' + a + '") in ' + e
              }), "devtools" === __wxConfig.platform && __wxConfig.subPackages && void 0 === s) {
              var l = n(u),
                p = n(e);
              if (l && l !== p) throw new Error("should not require " + a + " in " + e + " without a callback, because they are in diffrent subPackages")
            }
            return require(u, void 0, s)
          } catch (e) {
            throw e
          }
        };
      return a.async = function (e) {
        return new Promise((function (t, r) {
          try {
            a(e, (function (e) {
              t(e)
            }))
          } catch (e) {
            r(e)
          }
        }))
      }, a
    };
    require = function (n, o, i) {
      if (void 0 === o && (o = !0), "string" != typeof n) throw new Error("require args must be a string");
      var c = t[n];
      if (!c) {
        var u = -1 === n.indexOf("/") ? n + "/index.js" : n;
        /\.js$/.test(u = "miniprogram_npm/" + u) || (u += ".js"), c = t[u]
      }
      if (n.endsWith(".js") || (n += ".js"), !c && "devtools" !== __wxConfig.platform && "undefined" != typeof __subContextEngine__) {
        var f = "/" + n.substr(0, n.length - 3) + ".appservice.js",
          l = {
            __wxRoute: e.__wxRoute,
            __wxAppCurrentFile__: e.__wxAppCurrentFile__,
            __wxRouteBegin: e.__wxRouteBegin
          };
        __subContextEngine__.loadJsFiles([f]),
          function (t) {
            e.__wxRoute = t.__wxRoute, e.__wxAppCurrentFile__ = t.__wxAppCurrentFile__, e.__wxRouteBegin = t.__wxRouteBegin
          }(l), c = t[n]
      }
      if ("function" != typeof i) {
        if (!c) throw new Error('module "' + n + '" is not defined');
        var p = {
            exports: {}
          },
          d = c.factory;
        if (!o || r[n]) return delete c.exports, c.status = 1, r[n] = !0, d && d(s(n), p, p.exports), p.exports;
        if (1 === c.status) {
          c.exports = p.exports, c.status = 2;
          var h = void 0;
          try {
            d && (h = d(s(n), p, p.exports))
          } catch (e) {
            throw c.status = 1, e
          }
          c.exports = void 0 !== p.exports ? p.exports : h
        }
        return c.exports
      }
      c ? setTimeout((function () {
        i(require(n))
      })) : function (e, t) {
        var r = "__APP__" === e;
        "/" !== e.slice(-1) && (e += "/"), "devtools" === __wxConfig.platform ? (wxNativeConsole.info("[WebNode] injectSubPackages: " + e), WeixinJSBridge.invoke("injectSubPackages", {
          subPackages: [e]
        }, t)) : (wxNativeConsole.info("[WebNode] loadSubpackage: " + e), __appServiceSDK__.loadSubpackage({
          name: e,
          success: function () {
            var n = __wxConfig.subPackages.find((function (t) {
                return t.root === e
              })),
              o = Object.keys(n.plugins || {}).map((function (e) {
                var t = n.plugins[e].provider,
                  r = "__plugin__/" + t;
                return {
                  plugin_id: t,
                  prefix_path: a.includes(t) ? null : r
                }
              }));
            __subContextEngine__.injectEntryFile(r ? "" : e, o), t()
          }
        }))
      }(function (e) {
        var t = __wxConfig && __wxConfig.subPackages;
        t || (t = []);
        for (var r = 0; r < t.length; ++r) {
          var n = t[r].root || "";
          if (n && "/" !== n.slice(-1) && (n += "/"), e.slice(0, n.length) === n) return n
        }
        return "__APP__"
      }(n), (function () {
        i(require(n))
      }))
    }, requireOnce = function (e) {
      return require(e, !1)
    }, e.__modules__ = t
  }(this);
  var requireMiniProgramFile = require,
    defineMiniProgramFile = define;;
  global.Widget = Widget;
  global.wx = wx;
  global.setTimeout = Timer.setTimeout;
  global.setInterval = Timer.setInterval;
  global.clearTimeout = Timer.clearTimeout;
  global.clearInterval = Timer.clearInterval;
})(this);
var __WAWidgetEndTime__ = Date.now();
typeof __wxLibrary.onEnd === 'function' && __wxLibrary.onEnd();
__wxLibrary = undefined;